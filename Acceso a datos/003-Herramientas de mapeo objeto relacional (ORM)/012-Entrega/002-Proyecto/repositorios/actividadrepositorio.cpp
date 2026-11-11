#include "actividadrepositorio.hpp"

#include "../include/configuracionorm.hpp"

namespace { auto& obteneralmacenamiento() { return obtener_almacenamiento(); } }

bool actividadrepositorio::insertar(
    const actividad& a
)
{
    try
    {
        obteneralmacenamiento().insert(a);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

std::optional<actividad>
actividadrepositorio::obtenerporid(int id)
{
    try
    {
        auto resultado =
            obteneralmacenamiento()
            .get<actividad>(id);

        return resultado;
    }
    catch(...)
    {
        return std::nullopt;
    }
}

std::vector<actividad>
actividadrepositorio::obtenertodas()
{
    try
    {
        return obteneralmacenamiento()
            .get_all<actividad>();
    }
    catch(...)
    {
        return {};
    }
}

std::vector<actividad>
actividadrepositorio::obtenerporcliente(
    int clienteid
)
{
    try
    {
        using namespace sqlite_orm;

        return obteneralmacenamiento()
            .get_all<actividad>(
                where(
                    c(&actividad::clienteid)
                    == clienteid
                )
            );
    }
    catch(...)
    {
        return {};
    }
}

std::vector<actividad>
actividadrepositorio::obtenerportipo(
    const std::string& tipo
)
{
    try
    {
        using namespace sqlite_orm;

        return obteneralmacenamiento()
            .get_all<actividad>(
                where(
                    c(&actividad::tipo)
                    == tipo
                )
            );
    }
    catch(...)
    {
        return {};
    }
}

bool actividadrepositorio::actualizar(
    const actividad& a
)
{
    try
    {
        obteneralmacenamiento().update(a);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

bool actividadrepositorio::eliminar(int id)
{
    try
    {
        obteneralmacenamiento()
            .remove<actividad>(id);

        return true;
    }
    catch(...)
    {
        return false;
    }
}
