#pragma once

#include <vector>
#include <string>
#include <optional>

#include "../include/actividad.hpp"

class actividadrepositorio {
public:

    actividadrepositorio() = default;
    ~actividadrepositorio() = default;

    // Crear
    bool insertar(const actividad& a);

    // Leer
    std::optional<actividad> obtenerporid(int id);

    std::vector<actividad> obtenertodas();

    std::vector<actividad> obtenerporcliente(
        int clienteid
    );

    std::vector<actividad> obtenerportipo(
        const std::string& tipo
    );

    // Actualizar
    bool actualizar(const actividad& a);

    // Eliminar
    bool eliminar(int id);
};