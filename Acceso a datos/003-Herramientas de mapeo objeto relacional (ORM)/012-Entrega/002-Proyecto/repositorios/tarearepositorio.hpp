#pragma once

#include <vector>
#include <string>
#include <optional>

#include "../include/tarea.hpp"

class tarearepositorio {
public:

    tarearepositorio() = default;
    ~tarearepositorio() = default;

    // Crear
    bool insertar(const tarea& t);

    // Leer
    std::optional<tarea> obtenerporid(int id);

    std::vector<tarea> obtenertodas();

    std::vector<tarea> obtenerporusuario(
        int usuarioid
    );

    std::vector<tarea> obtenerporestado(
        const std::string& estado
    );

    // Actualizar
    bool actualizar(const tarea& t);

    // Eliminar
    bool eliminar(int id);
};