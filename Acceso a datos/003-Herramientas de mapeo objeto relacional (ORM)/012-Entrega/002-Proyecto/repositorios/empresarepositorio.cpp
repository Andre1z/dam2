#include "empresarepositorio.hpp"

#include "../include/configuracionorm.hpp"

namespace { auto& obteneralmacenamiento() { return obtener_almacenamiento(); } }

bool empresarepositorio::insertar(
    const empresa& e
)
{
    try
    {
        obteneralmacenamiento().insert(e);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

std::optional<empresa>
empresarepositorio::obtenerporid(int id)
{
    try
    {
        auto resultado =
            obteneralmacenamiento().get<empresa>(id);

        return resultado;
    }
    catch(...)
    {
        return std::nullopt;
    }
}

std::vector<empresa>
empresarepositorio::obtenertodas()
{
    try
    {
        return obteneralmacenamiento()
            .get_all<empresa>();
    }
    catch(...)
    {
        return {};
    }
}

std::optional<empresa>
empresarepositorio::obtenerpornombre(
    const std::string& nombre
)
{
    try
    {
        using namespace sqlite_orm;

        auto resultado =
            obteneralmacenamiento()
            .get_all<empresa>(
                where(
                    c(&empresa::nombre) == nombre
                )
            );

        if(resultado.empty())
        {
            return std::nullopt;
        }

        return resultado.front();
    }
    catch(...)
    {
        return std::nullopt;
    }
}

bool empresarepositorio::actualizar(
    const empresa& e
)
{
    try
    {
        obteneralmacenamiento().update(e);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

bool empresarepositorio::eliminar(int id)
{
    try
    {
        obteneralmacenamiento()
            .remove<empresa>(id);

        return true;
    }
    catch(...)
    {
        return false;
    }
}
