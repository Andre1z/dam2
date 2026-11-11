#include "autor.hpp"

Autor::Autor()
{
    id = 0;
    nombre = "";
    nacionalidad = "";
}

Autor::Autor(
    int id,
    const std::string& nombre,
    const std::string& nacionalidad
)
{
    this->id = id;
    this->nombre = nombre;
    this->nacionalidad = nacionalidad;
}