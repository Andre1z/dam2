#include "../include/informe.hpp"

#include <algorithm>
#include <chrono>
#include <ctime>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <map>

#ifndef RUTA_INFORMES
#define RUTA_INFORMES "informes"
#endif

namespace
{
    std::tm fecha_actual()
    {
        std::time_t tiempo = std::chrono::system_clock::to_time_t(
            std::chrono::system_clock::now()
        );

        std::tm fecha{};

#ifdef _WIN32
        localtime_s(&fecha, &tiempo);
#else
        localtime_r(&tiempo, &fecha);
#endif

        return fecha;
    }

    std::string formatear(const char* formato)
    {
        std::tm fecha = fecha_actual();

        char buffer[64];
        std::strftime(buffer, sizeof(buffer), formato, &fecha);

        return buffer;
    }

    std::string nombre_archivo(const std::string& prefijo)
    {
        return Informe::carpeta() + "/" + prefijo + "_"
            + formatear("%Y%m%d_%H%M%S") + ".txt";
    }

    void cabecera(std::ofstream& archivo, const std::string& titulo)
    {
        archivo << "=================================================\n";
        archivo << " " << titulo << "\n";
        archivo << " Fecha: " << formatear("%d/%m/%Y %H:%M:%S") << "\n";
        archivo << "=================================================\n\n";
    }
}

std::string Informe::carpeta()
{
    std::error_code error;
    std::filesystem::create_directories(RUTA_INFORMES, error);

    return RUTA_INFORMES;
}

std::string Informe::guardar_pedidos(
    const std::vector<Pedido>& procesados,
    int total_pedidos,
    const std::string& origen,
    int total_trabajadores,
    long long duracion_total_ms
)
{
    std::string ruta = nombre_archivo("informe_pedidos");

    std::ofstream archivo(ruta);

    if (!archivo.is_open())
    {
        return "";
    }

    cabecera(archivo, "INFORME DE SIMULACION DE PEDIDOS");

    archivo << "Origen de los pedidos: " << origen << "\n";
    archivo << "Pedidos cargados:      " << total_pedidos << "\n";
    archivo << "Pedidos procesados:    " << procesados.size() << "\n";
    archivo << "Trabajadores (hilos):  " << total_trabajadores << "\n";
    archivo << "Duracion total:        "
            << std::fixed << std::setprecision(2)
            << duracion_total_ms / 1000.0 << " s\n\n";

    // Detalle de cada pedido, ordenado por identificador.
    std::vector<Pedido> ordenados = procesados;

    std::sort(
        ordenados.begin(),
        ordenados.end(),
        [](const Pedido& a, const Pedido& b)
        {
            return a.obtener_id() < b.obtener_id();
        }
    );

    archivo << "DETALLE DE PEDIDOS\n";
    archivo << "-------------------------------------------------\n";
    archivo << std::left
            << std::setw(8) << "Pedido"
            << std::setw(26) << "Descripcion"
            << std::setw(14) << "Trabajador"
            << "Duracion (ms)\n";

    for (const Pedido& pedido : ordenados)
    {
        archivo << std::left
                << std::setw(8) << pedido.obtener_id()
                << std::setw(26) << pedido.obtener_descripcion()
                << std::setw(14) << pedido.obtener_trabajador_id()
                << pedido.obtener_duracion_ms() << "\n";
    }

    // Resumen por trabajador.
    std::map<int, int> pedidos_por_trabajador;
    std::map<int, long long> tiempo_por_trabajador;

    for (const Pedido& pedido : procesados)
    {
        pedidos_por_trabajador[pedido.obtener_trabajador_id()]++;
        tiempo_por_trabajador[pedido.obtener_trabajador_id()] +=
            pedido.obtener_duracion_ms();
    }

    archivo << "\nRESUMEN POR TRABAJADOR\n";
    archivo << "-------------------------------------------------\n";
    archivo << std::left
            << std::setw(14) << "Trabajador"
            << std::setw(12) << "Pedidos"
            << "Tiempo trabajado (ms)\n";

    for (const auto& [trabajador, cantidad] : pedidos_por_trabajador)
    {
        archivo << std::left
                << std::setw(14) << trabajador
                << std::setw(12) << cantidad
                << tiempo_por_trabajador[trabajador] << "\n";
    }

    archivo << "\nEstado: "
            << (static_cast<int>(procesados.size()) == total_pedidos
                    ? "COMPLETADO - todos los pedidos procesados"
                    : "INCOMPLETO - quedaron pedidos sin procesar")
            << "\n";

    return ruta;
}

std::string Informe::guardar_proceso(
    const ResultadoProceso& resultado
)
{
    std::string ruta = nombre_archivo("informe_proceso");

    std::ofstream archivo(ruta);

    if (!archivo.is_open())
    {
        return "";
    }

    cabecera(archivo, "INFORME DE SIMULACION DE PROCESO HIJO");

#ifdef _WIN32
    archivo << "Mecanismo:        CreateProcess + WaitForSingleObject\n";
#else
    archivo << "Mecanismo:        fork + waitpid\n";
#endif
    archivo << "PID proceso padre: " << resultado.pid_padre << "\n";
    archivo << "PID proceso hijo:  " << resultado.pid_hijo << "\n";
    archivo << "Codigo de salida:  " << resultado.codigo_salida << "\n";
    archivo << "Duracion:          "
            << std::fixed << std::setprecision(2)
            << resultado.duracion_ms / 1000.0 << " s\n\n";

    archivo << "Estado: "
            << (resultado.correcto
                    ? "COMPLETADO - el hijo termino correctamente"
                    : "ERROR - el proceso hijo no se ejecuto correctamente")
            << "\n";

    return ruta;
}
