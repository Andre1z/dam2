#pragma once

#include <string>
#include <vector>

namespace AndreiDB
{
    class Procedimiento
    {
    private:

        std::string nombre;
        std::vector<std::string> instrucciones;

    public:

        Procedimiento();

        explicit Procedimiento(
            const std::string& nombreProcedimiento
        );

        void establecerNombre(
            const std::string& valor
        );

        const std::string& obtenerNombre() const;

        void agregarInstruccion(
            const std::string& instruccion
        );

        const std::vector<std::string>& obtenerInstrucciones() const;

        bool guardar(
            const std::string& carpeta
        ) const;

        bool cargar(
            const std::string& rutaArchivo
        );
    };
}