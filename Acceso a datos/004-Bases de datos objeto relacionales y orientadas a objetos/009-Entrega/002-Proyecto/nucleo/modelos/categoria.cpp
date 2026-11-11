#include "categoria.hpp"

Categoria::Categoria()
{
    id = 0;
    nombre = "";
}

Categoria::Categoria(
    int id,
    const std::string& nombre
)
{
    this->id = id;
    this->nombre = nombre;
}