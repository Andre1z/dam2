#pragma once

#include <vector>
#include <string>
#include <optional>

#include "../include/empresa.hpp"

class empresarepositorio {
public:

    empresarepositorio() = default;
    ~empresarepositorio() = default;

    // Crear
    bool insertar(const empresa& e);

    // Leer
    std::optional<empresa> obtenerporid(int id);

    std::vector<empresa> obtenertodas();

    std::optional<empresa> obtenerpornombre(
        const std::string& nombre
    );

    // Actualizar
    bool actualizar(const empresa& e);

    // Eliminar
    bool eliminar(int id);
};