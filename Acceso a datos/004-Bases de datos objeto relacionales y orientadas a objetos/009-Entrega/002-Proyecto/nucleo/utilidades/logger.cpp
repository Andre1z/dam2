#include "logger.hpp"

#include <iostream>
#include <ctime>

namespace
{
    std::string obtener_fecha_hora()
    {
        std::time_t ahora =
            std::time(nullptr);

        std::tm* tiempo =
            std::localtime(&ahora);

        char buffer[100];

        std::strftime(
            buffer,
            sizeof(buffer),
            "%Y-%m-%d %H:%M:%S",
            tiempo
        );

        return buffer;
    }
}

void Logger::info(
    const std::string& mensaje
)
{
    std::cout
        << "[INFO] "
        << obtener_fecha_hora()
        << " -> "
        << mensaje
        << std::endl;
}

void Logger::advertencia(
    const std::string& mensaje
)
{
    std::cout
        << "[ADVERTENCIA] "
        << obtener_fecha_hora()
        << " -> "
        << mensaje
        << std::endl;
}

void Logger::error(
    const std::string& mensaje
)
{
    std::cerr
        << "[ERROR] "
        << obtener_fecha_hora()
        << " -> "
        << mensaje
        << std::endl;
}