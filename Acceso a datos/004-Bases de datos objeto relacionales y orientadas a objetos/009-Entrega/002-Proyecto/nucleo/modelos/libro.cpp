#include "libro.hpp"

Libro::Libro()
{
    id = 0;
    titulo = "";
    anio_publicacion = 0;
    numero_paginas = 0;
}

Libro::Libro(
    int id,
    const std::string& titulo,
    int anio_publicacion,
    int numero_paginas,
    const Autor& autor,
    const Categoria& categoria
)
{
    this->id = id;
    this->titulo = titulo;
    this->anio_publicacion = anio_publicacion;
    this->numero_paginas = numero_paginas;
    this->autor = autor;
    this->categoria = categoria;
}