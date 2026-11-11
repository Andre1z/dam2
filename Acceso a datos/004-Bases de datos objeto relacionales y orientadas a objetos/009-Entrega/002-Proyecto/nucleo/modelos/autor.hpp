#pragma once

#include <string>

class Autor
{
public:

    int id;
    std::string nombre;
    std::string nacionalidad;

    Autor();

    Autor(
        int id,
        const std::string& nombre,
        const std::string& nacionalidad
    );
};