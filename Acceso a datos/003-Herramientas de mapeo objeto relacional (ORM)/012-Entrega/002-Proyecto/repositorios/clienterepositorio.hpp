#pragma once

#include <vector>
#include <string>
#include <optional>

#include "../include/cliente.hpp"

class clienterepositorio {
public:

    bool insertar(const cliente& c);

    std::optional<cliente> obtenerporid(int id);

    std::optional<cliente> obtenerporemail(
        const std::string& email
    );

    std::vector<cliente> obtenertodos();

    bool actualizar(const cliente& c);

    bool eliminar(int id);
};