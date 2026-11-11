#pragma once

#include <string>
#include <vector>

namespace AndreiDB
{
    class Tabla
    {
    private:

        std::string nombre;

        std::vector<std::string> columnas;

    public:

        Tabla();

        explicit Tabla(
            const std::string& nombreTabla
        );

        void establecerNombre(
            const std::string& nuevoNombre
        );

        const std::string& obtenerNombre() const;

        void agregarColumna(
            const std::string& columna
        );

        const std::vector<std::string>&
        obtenerColumnas() const;

        bool tieneColumna(
            const std::string& columna
        ) const;
    };
}