#pragma once

#include <string>

class cliente {
public:

    int id;

    std::string nombre;

    std::string email;

    std::string telefono;

    std::string direccion;

    cliente()
        : id(0)
    {
    }

    cliente(
        int id,
        const std::string& nombre,
        const std::string& email,
        const std::string& telefono,
        const std::string& direccion
    )
        : id(id),
          nombre(nombre),
          email(email),
          telefono(telefono),
          direccion(direccion)
    {
    }
};