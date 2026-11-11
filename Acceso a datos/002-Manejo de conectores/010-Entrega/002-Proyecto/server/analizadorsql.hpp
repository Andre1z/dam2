#pragma once

#include <string>

#include "basededatos.hpp"
#include "consulta.hpp"
#include "gestortransacciones.hpp"

namespace AndreiDB
{
    class GestorProcedimientos;

    class AnalizadorSQL
    {
    private:

        BaseDatos& baseDatos;

        GestorTransacciones& gestorTransacciones;

        GestorProcedimientos* gestorProcedimientos;

    public:

        AnalizadorSQL(
            BaseDatos& bd,
            GestorTransacciones& gt,
            GestorProcedimientos* gp = nullptr
        );

        Consulta ejecutar(
            const std::string& sql
        );

    private:

        Consulta ejecutarSelect(
            const std::string& sql
        );

        Consulta ejecutarInsert(
            const std::string& sql
        );

        Consulta ejecutarUpdate(
            const std::string& sql
        );

        Consulta ejecutarDelete(
            const std::string& sql
        );

        Consulta ejecutarCall(
            const std::string& sql
        );

        Consulta ejecutarBegin();

        Consulta ejecutarCommit();

        Consulta ejecutarRollback();
    };
}