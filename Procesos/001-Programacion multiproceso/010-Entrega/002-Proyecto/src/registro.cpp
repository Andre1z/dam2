#include "../include/registro.hpp"
#include "../include/informe.hpp"

#include <chrono>
#include <ctime>
#include <fstream>
#include <iostream>
#include <mutex>

namespace
{
    // Protege la consola y el archivo de registro frente a
    // escrituras simultáneas desde varios hilos.
    std::mutex mutex_registro;

    std::string obtener_fecha_hora()
    {
        auto ahora = std::chrono::system_clock::now();

        std::time_t tiempo =
            std::chrono::system_clock::to_time_t(ahora);

        std::tm fecha_hora{};

        // Versiones seguras para hilos de localtime().
#ifdef _WIN32
        localtime_s(&fecha_hora, &tiempo);
#else
        localtime_r(&tiempo, &fecha_hora);
#endif

        char buffer[32];

        std::strftime(
            buffer,
            sizeof(buffer),
            "%d/%m/%Y %H:%M:%S",
            &fecha_hora
        );

        return buffer;
    }

    void escribir(
        const std::string& nivel,
        const std::string& mensaje
    )
    {
        std::lock_guard<std::mutex> bloqueo(mutex_registro);

        std::string linea =
            "[" + obtener_fecha_hora() + "] "
            "[" + nivel + "] "
            + mensaje;

        std::cout << linea << std::endl;

        static const std::string ruta_registro =
            Informe::carpeta() + "/registro.txt";

        std::ofstream archivo(
            ruta_registro,
            std::ios::app
        );

        if (archivo.is_open())
        {
            archivo << linea << std::endl;
        }
    }
}

void Registro::info(
    const std::string& mensaje
)
{
    escribir("INFO", mensaje);
}

void Registro::aviso(
    const std::string& mensaje
)
{
    escribir("AVISO", mensaje);
}

void Registro::error(
    const std::string& mensaje
)
{
    escribir("ERROR", mensaje);
}
