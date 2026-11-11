#include "procedimiento.hpp"

#include <fstream>

namespace AndreiDB
{
    Procedimiento::Procedimiento()
    {
    }

    Procedimiento::Procedimiento(
        const std::string& nombreProcedimiento
    )
        :
        nombre(nombreProcedimiento)
    {
    }

    void Procedimiento::establecerNombre(
        const std::string& valor
    )
    {
        nombre = valor;
    }

    const std::string& Procedimiento::obtenerNombre() const
    {
        return nombre;
    }

    void Procedimiento::agregarInstruccion(
        const std::string& instruccion
    )
    {
        instrucciones.push_back(
            instruccion
        );
    }

    const std::vector<std::string>&
    Procedimiento::obtenerInstrucciones() const
    {
        return instrucciones;
    }

    bool Procedimiento::guardar(
        const std::string& carpeta
    ) const
    {
        std::string ruta =
            carpeta + "/" +
            nombre + ".proc";

        std::ofstream archivo(ruta);

        if (!archivo.is_open())
        {
            return false;
        }

        for (
            const auto& instruccion :
            instrucciones
        )
        {
            archivo
                << instruccion
                << "\n";
        }

        archivo.close();

        return true;
    }

    bool Procedimiento::cargar(
        const std::string& rutaArchivo
    )
    {
        instrucciones.clear();

        std::ifstream archivo(
            rutaArchivo
        );

        if (!archivo.is_open())
        {
            return false;
        }

        std::string linea;

        while (
            std::getline(
                archivo,
                linea
            )
        )
        {
            if (!linea.empty())
            {
                instrucciones.push_back(
                    linea
                );
            }
        }

        archivo.close();

        return true;
    }
}