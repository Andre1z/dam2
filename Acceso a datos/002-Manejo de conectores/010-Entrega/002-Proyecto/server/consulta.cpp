#include "consulta.hpp"

namespace AndreiDB
{
    Consulta::Consulta()
        :
        exito(false),
        mensaje("")
    {
    }

    void Consulta::establecerExito(
        bool valor
    )
    {
        exito = valor;
    }

    bool Consulta::obtenerExito() const
    {
        return exito;
    }

    void Consulta::establecerMensaje(
        const std::string& valor
    )
    {
        mensaje = valor;
    }

    const std::string& Consulta::obtenerMensaje() const
    {
        return mensaje;
    }

    void Consulta::agregarRegistro(
        const Registro& registro
    )
    {
        registros.push_back(
            registro
        );
    }

    void Consulta::establecerRegistros(
        const std::vector<Registro>& nuevosRegistros
    )
    {
        registros = nuevosRegistros;
    }

    const std::vector<Registro>& Consulta::obtenerRegistros() const
    {
        return registros;
    }

    int Consulta::totalRegistros() const
    {
        return static_cast<int>(
            registros.size()
        );
    }
}