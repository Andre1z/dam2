#pragma once

#include <string>

class empresa {
public:

    int id;

    std::string nombre;

    std::string sector;

    std::string telefono;

    std::string email;

    std::string direccion;

    empresa()
        : id(0)
    {
    }

    empresa(
        int id,
        const std::string& nombre,
        const std::string& sector,
        const std::string& telefono,
        const std::string& email,
        const std::string& direccion
    )
        : id(id),
          nombre(nombre),
          sector(sector),
          telefono(telefono),
          email(email),
          direccion(direccion)
    {
    }
};