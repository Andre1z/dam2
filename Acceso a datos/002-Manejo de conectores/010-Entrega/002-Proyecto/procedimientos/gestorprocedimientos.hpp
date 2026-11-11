#pragma once

#include <string>

#include "procedimiento.hpp"
#include "analizadorsql.hpp"
#include "consulta.hpp"

namespace AndreiDB
{
    class GestorProcedimientos
    {
    private:

        std::string carpetaProcedimientos;

        AnalizadorSQL& analizador;

    public:

        GestorProcedimientos(
            const std::string& carpeta,
            AnalizadorSQL& analizadorSQL
        );

        bool existe(
            const std::string& nombre
        ) const;

        Consulta ejecutar(
            const std::string& nombre
        );
    };
}