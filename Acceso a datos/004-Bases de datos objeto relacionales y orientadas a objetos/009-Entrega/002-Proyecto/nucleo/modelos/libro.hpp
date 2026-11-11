#pragma once

#include <string>

#include "autor.hpp"
#include "categoria.hpp"

class Libro
{
public:

    int id;
    std::string titulo;
    int anio_publicacion;
    int numero_paginas;

    Autor autor;
    Categoria categoria;

    Libro();

    Libro(
        int id,
        const std::string& titulo,
        int anio_publicacion,
        int numero_paginas,
        const Autor& autor,
        const Categoria& categoria
    );
};