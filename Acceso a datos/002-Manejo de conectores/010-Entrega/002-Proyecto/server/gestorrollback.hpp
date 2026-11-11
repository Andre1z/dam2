#pragma once

#include <string>

namespace AndreiDB
{
    class GestorRollback
    {
    private:

        std::string archivoOriginal;
        std::string archivoTemporal;

    public:

        GestorRollback(
            const std::string& rutaBaseDatos
        );

        bool crearPuntoRecuperacion();

        bool confirmar();

        bool restaurar();

        bool existeCopia() const;
    };
}