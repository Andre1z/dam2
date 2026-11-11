#pragma once

#include <vector>
#include <string>
#include <optional>

#include "../include/usuario.hpp"

class usuariorepositorio {
public:

    usuariorepositorio() = default;
    ~usuariorepositorio() = default;

    // Crear
    bool insertar(const usuario& u);

    // Leer
    std::optional<usuario> obtenerporid(int id);

    std::vector<usuario> obtenertodos();

    std::optional<usuario> obtenerporlogin(
        const std::string& usuario_login
    );

    // Actualizar
    bool actualizar(const usuario& u);

    // Eliminar
    bool eliminar(int id);
};