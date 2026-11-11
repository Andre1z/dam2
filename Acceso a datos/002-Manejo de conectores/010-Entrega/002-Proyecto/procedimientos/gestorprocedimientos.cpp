#include "gestorprocedimientos.hpp"

#include <filesystem>

namespace AndreiDB
{
    GestorProcedimientos::GestorProcedimientos(
        const std::string& carpeta,
        AnalizadorSQL& analizadorSQL
    )
        :
        carpetaProcedimientos(carpeta),
        analizador(analizadorSQL)
    {
    }

    bool GestorProcedimientos::existe(
        const std::string& nombre
    ) const
    {
        std::string ruta =
            carpetaProcedimientos +
            "/" +
            nombre +
            ".proc";

        return std::filesystem::exists(
            ruta
        );
    }

    Consulta GestorProcedimientos::ejecutar(
        const std::string& nombre
    )
    {
        Consulta resultadoFinal;

        std::string ruta =
            carpetaProcedimientos +
            "/" +
            nombre +
            ".proc";

        Procedimiento procedimiento;

        if (!procedimiento.cargar(ruta))
        {
            resultadoFinal.establecerExito(false);

            resultadoFinal.establecerMensaje(
                "No se pudo cargar el procedimiento"
            );

            return resultadoFinal;
        }

        // Filas de la última instrucción que devolvió datos (normalmente un
        // SELECT); un COMMIT posterior no debe hacer que se pierdan.
        std::vector<Registro> filas;

        for (
            const auto& instruccion :
            procedimiento.obtenerInstrucciones()
        )
        {
            resultadoFinal =
                analizador.ejecutar(
                    instruccion
                );

            if (!resultadoFinal.obtenerExito())
            {
                return resultadoFinal;
            }

            if (!resultadoFinal.obtenerRegistros().empty())
            {
                filas = resultadoFinal.obtenerRegistros();
            }
        }

        resultadoFinal.establecerRegistros(filas);
        resultadoFinal.establecerExito(true);

        resultadoFinal.establecerMensaje(
            "Procedimiento ejecutado correctamente"
        );

        return resultadoFinal;
    }
}