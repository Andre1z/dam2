#pragma once

#include <string>

#include "gestorrollback.hpp"

namespace AndreiDB
{
    class GestorTransacciones
    {
    private:

        bool transaccionActiva;

        GestorRollback rollback;

    public:

        explicit GestorTransacciones(
            const std::string& rutaBaseDatos
        );

        bool iniciar();

        bool confirmar();

        bool cancelar();

        bool estaActiva() const;
    };
}