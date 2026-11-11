#include "clienterepositorio.hpp"

#include "../include/configuracionorm.hpp"

namespace { auto& obteneralmacenamiento() { return obtener_almacenamiento(); } }

bool clienterepositorio::insertar(const cliente& c)
{
    try
    {
        obteneralmacenamiento().insert(c);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

std::optional<cliente> clienterepositorio::obtenerporid(int id)
{
    try
    {
        auto resultado =
            obteneralmacenamiento().get<cliente>(id);

        return resultado;
    }
    catch(...)
    {
        return std::nullopt;
    }
}

std::optional<cliente> clienterepositorio::obtenerporemail(
    const std::string& email
)
{
    try
    {
        using namespace sqlite_orm;

        auto resultado =
            obteneralmacenamiento().get_all<cliente>(
                where(c(&cliente::email) == email)
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

std::vector<cliente> clienterepositorio::obtenertodos()
{
    try
    {
        return obteneralmacenamiento().get_all<cliente>();
    }
    catch(...)
    {
        return {};
    }
}

bool clienterepositorio::actualizar(const cliente& c)
{
    try
    {
        obteneralmacenamiento().update(c);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

bool clienterepositorio::eliminar(int id)
{
    try
    {
        obteneralmacenamiento().remove<cliente>(id);
        return true;
    }
    catch(...)
    {
        return false;
    }
}
