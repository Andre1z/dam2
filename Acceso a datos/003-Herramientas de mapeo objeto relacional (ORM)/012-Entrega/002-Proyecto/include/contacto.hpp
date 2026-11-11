#pragma once

#include <string>

class contacto {
public:

    int id;

    int empresaid;

    std::string nombre;

    std::string cargo;

    std::string email;

    std::string telefono;

    contacto()
        : id(0),
          empresaid(0)
    {
    }

    contacto(
        int id,
        int empresaid,
        const std::string& nombre,
        const std::string& cargo,
        const std::string& email,
        const std::string& telefono
    )
        : id(id),
          empresaid(empresaid),
          nombre(nombre),
          cargo(cargo),
          email(email),
          telefono(telefono)
    {
    }
};