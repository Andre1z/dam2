#pragma once

#include <string>
#include <vector>

#include "registro.hpp"
#include "motoralmacenamiento.hpp"

namespace AndreiDB
{
    class BaseDatos
    {
    private:

        MotorAlmacenamiento motor;

    public:

        explicit BaseDatos(
            const std::string& rutaBaseDatos
        );

        bool iniciar();

        uint64_t insertar(
            const std::string& nombre,
            const std::string& apellidos,
            const std::string& telefono,
            const std::string& creado
        );

        std::vector<Registro> seleccionarTodos();

        Registro seleccionarPorId(
            uint64_t id
        );

        bool actualizar(
            uint64_t id,
            const std::string& nombre,
            const std::string& apellidos,
            const std::string& telefono,
            const std::string& creado
        );

        bool eliminar(
            uint64_t id
        );

        bool existe(
            uint64_t id
        );
    };
}