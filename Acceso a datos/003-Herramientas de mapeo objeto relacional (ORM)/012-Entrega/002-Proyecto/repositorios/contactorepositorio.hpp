#pragma once

#include <vector>
#include <string>
#include <optional>

#include "../include/contacto.hpp"

class contactorepositorio {
public:

    contactorepositorio() = default;
    ~contactorepositorio() = default;

    // Crear
    bool insertar(const contacto& c);

    // Leer
    std::optional<contacto> obtenerporid(int id);

    std::vector<contacto> obtenertodos();

    std::vector<contacto> obtenerporempresa(
        int empresaid
    );

    // Actualizar
    bool actualizar(const contacto& c);

    // Eliminar
    bool eliminar(int id);
};