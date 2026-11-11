#pragma once

#include <vector>
#include <string>
#include <optional>

#include "../include/oportunidad.hpp"

class oportunidadrepositorio {
public:

    oportunidadrepositorio() = default;
    ~oportunidadrepositorio() = default;

    // Crear
    bool insertar(const oportunidad& o);

    // Leer
    std::optional<oportunidad> obtenerporid(int id);

    std::vector<oportunidad> obtenertodas();

    std::vector<oportunidad> obtenerporcliente(
        int clienteid
    );

    std::vector<oportunidad> obtenerporestado(
        const std::string& estado
    );

    // Actualizar
    bool actualizar(const oportunidad& o);

    // Eliminar
    bool eliminar(int id);
};