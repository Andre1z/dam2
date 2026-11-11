#pragma once

#include <string>

class usuario {
public:

    int id;

    std::string nombre;

    std::string email;

    std::string usuario_login;

    std::string contrasena;

    std::string rol;

    usuario()
        : id(0)
    {
    }

    usuario(
        int id,
        const std::string& nombre,
        const std::string& email,
        const std::string& usuario_login,
        const std::string& contrasena,
        const std::string& rol
    )
        : id(id),
          nombre(nombre),
          email(email),
          usuario_login(usuario_login),
          contrasena(contrasena),
          rol(rol)
    {
    }
};