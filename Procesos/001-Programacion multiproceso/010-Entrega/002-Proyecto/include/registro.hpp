#ifndef REGISTRO_HPP
#define REGISTRO_HPP

#include <string>

class Registro
{
public:
    static void info(const std::string& mensaje);

    static void aviso(const std::string& mensaje);

    static void error(const std::string& mensaje);
};

#endif