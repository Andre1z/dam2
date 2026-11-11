#include "oportunidadrepositorio.hpp"

#include "../include/configuracionorm.hpp"

namespace { auto& obteneralmacenamiento() { return obtener_almacenamiento(); } }

bool oportunidadrepositorio::insertar(
    const oportunidad& o
)
{
    try
    {
        obteneralmacenamiento().insert(o);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

std::optional<oportunidad>
oportunidadrepositorio::obtenerporid(int id)
{
    try
    {
        auto resultado =
            obteneralmacenamiento()
            .get<oportunidad>(id);

        return resultado;
    }
    catch(...)
    {
        return std::nullopt;
    }
}

std::vector<oportunidad>
oportunidadrepositorio::obtenertodas()
{
    try
    {
        return obteneralmacenamiento()
            .get_all<oportunidad>();
    }
    catch(...)
    {
        return {};
    }
}

std::vector<oportunidad>
oportunidadrepositorio::obtenerporcliente(
    int clienteid
)
{
    try
    {
        using namespace sqlite_orm;

        return obteneralmacenamiento()
            .get_all<oportunidad>(
                where(
                    c(&oportunidad::clienteid)
                    == clienteid
                )
            );
    }
    catch(...)
    {
        return {};
    }
}

std::vector<oportunidad>
oportunidadrepositorio::obtenerporestado(
    const std::string& estado
)
{
    try
    {
        using namespace sqlite_orm;

        return obteneralmacenamiento()
            .get_all<oportunidad>(
                where(
                    c(&oportunidad::estado)
                    == estado
                )
            );
    }
    catch(...)
    {
        return {};
    }
}

bool oportunidadrepositorio::actualizar(
    const oportunidad& o
)
{
    try
    {
        obteneralmacenamiento().update(o);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

bool oportunidadrepositorio::eliminar(int id)
{
    try
    {
        obteneralmacenamiento()
            .remove<oportunidad>(id);

        return true;
    }
    catch(...)
    {
        return false;
    }
}
