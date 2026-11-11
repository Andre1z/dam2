#include "usuariorepositorio.hpp"

#include "../include/configuracionorm.hpp"

namespace { auto& obteneralmacenamiento() { return obtener_almacenamiento(); } }

bool usuariorepositorio::insertar(
    const usuario& u
)
{
    try
    {
        obteneralmacenamiento().insert(u);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

std::optional<usuario>
usuariorepositorio::obtenerporid(int id)
{
    try
    {
        auto resultado =
            obteneralmacenamiento()
            .get<usuario>(id);

        return resultado;
    }
    catch(...)
    {
        return std::nullopt;
    }
}

std::vector<usuario>
usuariorepositorio::obtenertodos()
{
    try
    {
        return obteneralmacenamiento()
            .get_all<usuario>();
    }
    catch(...)
    {
        return {};
    }
}

std::optional<usuario>
usuariorepositorio::obtenerporlogin(
    const std::string& usuario_login
)
{
    try
    {
        using namespace sqlite_orm;

        auto resultado =
            obteneralmacenamiento()
            .get_all<usuario>(
                where(
                    c(&usuario::usuario_login)
                    == usuario_login
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

bool usuariorepositorio::actualizar(
    const usuario& u
)
{
    try
    {
        obteneralmacenamiento().update(u);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

bool usuariorepositorio::eliminar(int id)
{
    try
    {
        obteneralmacenamiento()
            .remove<usuario>(id);

        return true;
    }
    catch(...)
    {
        return false;
    }
}
