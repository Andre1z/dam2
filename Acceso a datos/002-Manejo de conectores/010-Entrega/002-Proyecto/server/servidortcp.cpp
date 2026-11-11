#include "servidortcp.hpp"

#ifdef _WIN32
// Windows: Winsock (enlazar con -lws2_32)
#include <winsock2.h>
#include <ws2tcpip.h>
typedef int socklen_t;
#define cerrarSocket closesocket
#else
// Linux / macOS: sockets POSIX
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <sys/time.h>
#define cerrarSocket close
#endif

#include <cstdio>
#include <cstring>
#include <sstream>
#include <stdexcept>

namespace AndreiDB
{
    ServidorTCP::ServidorTCP(
        int puertoServidor,
        AnalizadorSQL& analizadorSQL
    )
        :
        puerto(puertoServidor),
        socketServidor(-1),
        analizador(analizadorSQL)
    {
    }

    ServidorTCP::~ServidorTCP()
    {
        detener();
    }

    bool ServidorTCP::iniciar()
    {
#ifdef _WIN32
        WSADATA datosWinsock;

        if (WSAStartup(MAKEWORD(2, 2), &datosWinsock) != 0)
        {
            return false;
        }
#endif

        socketServidor = socket(
            AF_INET,
            SOCK_STREAM,
            0
        );

        if (socketServidor < 0)
        {
            return false;
        }

        sockaddr_in direccion;

        std::memset(&direccion, 0, sizeof(direccion));
        direccion.sin_family = AF_INET;
        // Solo conexiones locales (127.0.0.1): el servidor no tiene autenticación.
        direccion.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
        direccion.sin_port = htons(puerto);

        if (
            bind(
                socketServidor,
                (sockaddr*)&direccion,
                sizeof(direccion)
            ) < 0
        )
        {
            return false;
        }

        if (
            listen(
                socketServidor,
                10
            ) < 0
        )
        {
            return false;
        }

        return true;
    }

    void ServidorTCP::detener()
    {
        if (socketServidor >= 0)
        {
            cerrarSocket(socketServidor);
            socketServidor = -1;

#ifdef _WIN32
            WSACleanup();
#endif
        }
    }

    void ServidorTCP::escuchar()
    {
        while (true)
        {
            sockaddr_in cliente;
            socklen_t longitud = sizeof(cliente);

            int socketCliente =
                accept(
                    socketServidor,
                    (sockaddr*)&cliente,
                    &longitud
                );

            if (socketCliente < 0)
            {
                continue;
            }

            procesarCliente(
                socketCliente
            );
        }
    }

    void ServidorTCP::procesarCliente(
        int socketCliente
    )
    {
        // Se lee hasta que el cliente cierra su lado de escritura (el conector
        // Python hace shutdown tras enviar). El tiempo máximo de espera evita
        // que un cliente que no cierre bloquee el servidor para siempre.
#ifdef _WIN32
        DWORD espera = 2000;
#else
        timeval espera{2, 0};
#endif
        setsockopt(
            socketCliente,
            SOL_SOCKET,
            SO_RCVTIMEO,
            reinterpret_cast<const char*>(&espera),
            sizeof(espera)
        );

        std::string consultaSQL;
        char buffer[4096];

        while (consultaSQL.size() < 1024 * 1024)
        {
            int bytesRecibidos =
                recv(
                    socketCliente,
                    buffer,
                    sizeof(buffer),
                    0
                );

            if (bytesRecibidos <= 0)
            {
                break;
            }

            consultaSQL.append(buffer, bytesRecibidos);
        }

        if (!consultaSQL.empty())
        {
            std::string respuesta =
                ejecutarConsulta(
                    consultaSQL
                );

            // send puede enviar menos bytes de los pedidos: repetir hasta el final.
            size_t enviados = 0;

            while (enviados < respuesta.size())
            {
                int n = send(
                    socketCliente,
                    respuesta.c_str() + enviados,
                    static_cast<int>(respuesta.size() - enviados),
                    0
                );

                if (n <= 0)
                {
                    break;
                }

                enviados += static_cast<size_t>(n);
            }
        }

        cerrarSocket(socketCliente);
    }

    std::string ServidorTCP::ejecutarConsulta(
        const std::string& sql
    )
    {
        Consulta resultado;

        // Ningún error de una consulta debe tumbar el servidor.
        try
        {
            resultado = analizador.ejecutar(sql);
        }
        catch (const std::exception& error)
        {
            resultado.establecerExito(false);
            resultado.establecerMensaje(
                std::string("Error interno: ") + error.what()
            );
        }
        catch (...)
        {
            resultado.establecerExito(false);
            resultado.establecerMensaje("Error interno desconocido");
        }

        return consultaAJson(
            resultado
        );
    }

    // Escapa un texto para incluirlo dentro de comillas en JSON.
    static std::string escaparJson(
        const std::string& texto
    )
    {
        std::string salida;

        for (unsigned char c : texto)
        {
            switch (c)
            {
                case '"': salida += "\\\""; break;
                case '\\': salida += "\\\\"; break;
                case '\n': salida += "\\n"; break;
                case '\r': salida += "\\r"; break;
                case '\t': salida += "\\t"; break;
                case '\b': salida += "\\b"; break;
                case '\f': salida += "\\f"; break;
                default:
                    if (c < 0x20)
                    {
                        char codigo[8];
                        std::snprintf(codigo, sizeof(codigo), "\\u%04x", c);
                        salida += codigo;
                    }
                    else
                    {
                        salida += static_cast<char>(c);
                    }
            }
        }

        return salida;
    }

    std::string ServidorTCP::consultaAJson(
        const Consulta& consulta
    )
    {
        std::stringstream json;

        json << "{";
        json << "\"success\":";

        if (consulta.obtenerExito())
        {
            json << "true";
        }
        else
        {
            json << "false";
        }

        json << ",";

        json << "\"message\":\""
             << escaparJson(consulta.obtenerMensaje())
             << "\",";

        json << "\"rows\":[";

        const auto& registros =
            consulta.obtenerRegistros();

        for (
            size_t i = 0;
            i < registros.size();
            i++
        )
        {
            json << "{";

            json << "\"id\":"
                 << registros[i].id
                 << ",";

            json << "\"nombre\":\""
                 << escaparJson(registros[i].nombre)
                 << "\",";

            json << "\"apellidos\":\""
                 << escaparJson(registros[i].apellidos)
                 << "\",";

            json << "\"telefono\":\""
                 << escaparJson(registros[i].telefono)
                 << "\",";

            json << "\"creado\":\""
                 << escaparJson(registros[i].creado)
                 << "\"";

            json << "}";

            if (i + 1 < registros.size())
            {
                json << ",";
            }
        }

        json << "]";
        json << "}";

        return json.str();
    }
}