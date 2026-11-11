#include "gestortransacciones.hpp"

namespace AndreiDB
{
    GestorTransacciones::GestorTransacciones(
        const std::string& rutaBaseDatos
    )
        :
        transaccionActiva(false),
        rollback(rutaBaseDatos)
    {
    }

    bool GestorTransacciones::iniciar()
    {
        if (transaccionActiva)
        {
            return false;
        }

        if (!rollback.crearPuntoRecuperacion())
        {
            return false;
        }

        transaccionActiva = true;

        return true;
    }

    bool GestorTransacciones::confirmar()
    {
        if (!transaccionActiva)
        {
            return false;
        }

        rollback.confirmar();

        transaccionActiva = false;

        return true;
    }

    bool GestorTransacciones::cancelar()
    {
        if (!transaccionActiva)
        {
            return false;
        }

        rollback.restaurar();

        transaccionActiva = false;

        return true;
    }

    bool GestorTransacciones::estaActiva() const
    {
        return transaccionActiva;
    }
}