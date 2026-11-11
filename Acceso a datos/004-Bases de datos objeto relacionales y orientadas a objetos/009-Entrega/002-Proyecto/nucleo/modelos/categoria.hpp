#pragma once

#include <string>

class Categoria
{
public:

    int id;
    std::string nombre;

    Categoria();

    Categoria(
        int id,
        const std::string& nombre
    );
};