#pragma once

#include <string>
#include <vector>

#include "registro.hpp"

namespace AndreiDB
{
    class MotorAlmacenamiento
    {
    private:

        std::string rutaBaseDatos;

    public:

        explicit MotorAlmacenamiento(
            const std::string& ruta
        );

        bool inicializar();

        bool insertar(
            const Registro& registro
        );

        std::vector<Registro> obtenerTodos();

        bool actualizar(
            uint64_t id,
            const Registro& nuevoRegistro
        );

        bool eliminar(
            uint64_t id
        );

        Registro buscarPorId(
            uint64_t id
        );

        bool existe(
            uint64_t id
        );

        uint64_t siguienteId();
    };
}