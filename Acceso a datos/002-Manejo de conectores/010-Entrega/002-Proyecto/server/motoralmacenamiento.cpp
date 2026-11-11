#include "motoralmacenamiento.hpp"

#include <fstream>
#include <filesystem>
#include <algorithm>

namespace AndreiDB
{
    MotorAlmacenamiento::MotorAlmacenamiento(
        const std::string& ruta
    )
        : rutaBaseDatos(ruta)
    {
    }

    bool MotorAlmacenamiento::inicializar()
    {
        try
        {
            std::filesystem::path ruta(rutaBaseDatos);

            if (!ruta.parent_path().empty())
            {
                std::filesystem::create_directories(
                    ruta.parent_path()
                );
            }

            if (!std::filesystem::exists(rutaBaseDatos))
            {
                std::ofstream archivo(
                    rutaBaseDatos,
                    std::ios::binary
                );

                archivo.close();
            }

            return true;
        }
        catch (...)
        {
            return false;
        }
    }

    bool MotorAlmacenamiento::insertar(
        const Registro& registro
    )
    {
        std::ofstream archivo(
            rutaBaseDatos,
            std::ios::binary | std::ios::app
        );

        if (!archivo.is_open())
        {
            return false;
        }

        archivo
            << registro.id << ";"
            << registro.nombre << ";"
            << registro.apellidos << ";"
            << registro.telefono << ";"
            << registro.creado
            << "\n";

        archivo.close();

        return true;
    }

    std::vector<Registro> MotorAlmacenamiento::obtenerTodos()
    {
        std::vector<Registro> registros;

        std::ifstream archivo(
            rutaBaseDatos,
            std::ios::binary
        );

        if (!archivo.is_open())
        {
            return registros;
        }

        std::string linea;

        while (std::getline(archivo, linea))
        {
            if (linea.empty())
            {
                continue;
            }

            std::stringstream ss(linea);

            Registro registro;

            std::string id;

            std::getline(ss, id, ';');
            std::getline(ss, registro.nombre, ';');
            std::getline(ss, registro.apellidos, ';');
            std::getline(ss, registro.telefono, ';');
            std::getline(ss, registro.creado, ';');

            if (!registro.creado.empty() && registro.creado.back() == '\r')
            {
                registro.creado.pop_back();  // archivo editado en Windows (CRLF)
            }

            // Una línea dañada (id no numérico) se ignora en lugar de
            // lanzar una excepción que tumbaría el servidor.
            try
            {
                size_t usados = 0;
                registro.id = std::stoull(id, &usados);

                if (usados != id.size())
                {
                    continue;
                }
            }
            catch (...)
            {
                continue;
            }

            registros.push_back(registro);
        }

        archivo.close();

        return registros;
    }

    Registro MotorAlmacenamiento::buscarPorId(
        uint64_t id
    )
    {
        auto registros = obtenerTodos();

        for (const auto& registro : registros)
        {
            if (registro.id == id)
            {
                return registro;
            }
        }

        return Registro();
    }

    bool MotorAlmacenamiento::existe(
        uint64_t id
    )
    {
        auto registros = obtenerTodos();

        for (const auto& registro : registros)
        {
            if (registro.id == id)
            {
                return true;
            }
        }

        return false;
    }

    bool MotorAlmacenamiento::actualizar(
        uint64_t id,
        const Registro& nuevoRegistro
    )
    {
        auto registros = obtenerTodos();

        bool encontrado = false;

        for (auto& registro : registros)
        {
            if (registro.id == id)
            {
                registro = nuevoRegistro;
                encontrado = true;
                break;
            }
        }

        if (!encontrado)
        {
            return false;
        }

        std::ofstream archivo(
            rutaBaseDatos,
            std::ios::binary | std::ios::trunc
        );

        if (!archivo.is_open())
        {
            return false;
        }

        for (const auto& registro : registros)
        {
            archivo
                << registro.id << ";"
                << registro.nombre << ";"
                << registro.apellidos << ";"
                << registro.telefono << ";"
                << registro.creado
                << "\n";
        }

        archivo.close();

        return true;
    }

    bool MotorAlmacenamiento::eliminar(
        uint64_t id
    )
    {
        auto registros = obtenerTodos();

        auto it = std::remove_if(
            registros.begin(),
            registros.end(),
            [id](const Registro& registro)
            {
                return registro.id == id;
            }
        );

        if (it == registros.end())
        {
            return false;
        }

        registros.erase(
            it,
            registros.end()
        );

        std::ofstream archivo(
            rutaBaseDatos,
            std::ios::binary | std::ios::trunc
        );

        if (!archivo.is_open())
        {
            return false;
        }

        for (const auto& registro : registros)
        {
            archivo
                << registro.id << ";"
                << registro.nombre << ";"
                << registro.apellidos << ";"
                << registro.telefono << ";"
                << registro.creado
                << "\n";
        }

        archivo.close();

        return true;
    }

    uint64_t MotorAlmacenamiento::siguienteId()
    {
        uint64_t mayor = 0;

        auto registros = obtenerTodos();

        for (const auto& registro : registros)
        {
            if (registro.id > mayor)
            {
                mayor = registro.id;
            }
        }

        return mayor + 1;
    }
}