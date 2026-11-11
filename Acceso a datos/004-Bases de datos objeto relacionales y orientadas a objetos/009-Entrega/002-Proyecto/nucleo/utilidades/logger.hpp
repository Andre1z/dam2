#pragma once

#include <string>

class Logger
{
public:

    static void info(
        const std::string& mensaje
    );

    static void advertencia(
        const std::string& mensaje
    );

    static void error(
        const std::string& mensaje
    );
};