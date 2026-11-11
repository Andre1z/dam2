#pragma once

#include <string>
#include <vector>

#include "registro.hpp"

namespace AndreiDB
{
    class Consulta
    {
    private:

        bool exito;
        std::string mensaje;
        std::vector<Registro> registros;

    public:

        Consulta();

        void establecerExito(
            bool valor
        );

        bool obtenerExito() const;

        void establecerMensaje(
            const std::string& valor
        );

        const std::string& obtenerMensaje() const;

        void agregarRegistro(
            const Registro& registro
        );

        void establecerRegistros(
            const std::vector<Registro>& nuevosRegistros
        );

        const std::vector<Registro>& obtenerRegistros() const;

        int totalRegistros() const;
    };
}