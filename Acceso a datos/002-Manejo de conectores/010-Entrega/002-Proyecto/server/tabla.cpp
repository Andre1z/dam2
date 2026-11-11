#include "tabla.hpp"

namespace AndreiDB
{
    Tabla::Tabla()
    {
    }

    Tabla::Tabla(
        const std::string& nombreTabla
    )
        :
        nombre(nombreTabla)
    {
    }

    void Tabla::establecerNombre(
        const std::string& nuevoNombre
    )
    {
        nombre = nuevoNombre;
    }

    const std::string&
    Tabla::obtenerNombre() const
    {
        return nombre;
    }

    void Tabla::agregarColumna(
        const std::string& columna
    )
    {
        columnas.push_back(
            columna
        );
    }

    const std::vector<std::string>&
    Tabla::obtenerColumnas() const
    {
        return columnas;
    }

    bool Tabla::tieneColumna(
        const std::string& columna
    ) const
    {
        for (
            const auto& c :
            columnas
        )
        {
            if (c == columna)
            {
                return true;
            }
        }

        return false;
    }
}