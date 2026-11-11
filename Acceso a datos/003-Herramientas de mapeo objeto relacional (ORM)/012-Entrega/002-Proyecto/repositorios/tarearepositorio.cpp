#include "tarearepositorio.hpp"

#include "../include/configuracionorm.hpp"

namespace { auto& obteneralmacenamiento() { return obtener_almacenamiento(); } }

bool tarearepositorio::insertar(
    const tarea& t
)
{
    try
    {
        obteneralmacenamiento().insert(t);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

std::optional<tarea>
tarearepositorio::obtenerporid(int id)
{
    try
    {
        auto resultado =
            obteneralmacenamiento()
            .get<tarea>(id);

        return resultado;
    }
    catch(...)
    {
        return std::nullopt;
    }
}

std::vector<tarea>
tarearepositorio::obtenertodas()
{
    try
    {
        return obteneralmacenamiento()
            .get_all<tarea>();
    }
    catch(...)
    {
        return {};
    }
}

std::vector<tarea>
tarearepositorio::obtenerporusuario(
    int usuarioid
)
{
    try
    {
        using namespace sqlite_orm;

        return obteneralmacenamiento()
            .get_all<tarea>(
                where(
                    c(&tarea::usuarioid)
                    == usuarioid
                )
            );
    }
    catch(...)
    {
        return {};
    }
}

std::vector<tarea>
tarearepositorio::obtenerporestado(
    const std::string& estado
)
{
    try
    {
        using namespace sqlite_orm;

        return obteneralmacenamiento()
            .get_all<tarea>(
                where(
                    c(&tarea::estado)
                    == estado
                )
            );
    }
    catch(...)
    {
        return {};
    }
}

bool tarearepositorio::actualizar(
    const tarea& t
)
{
    try
    {
        obteneralmacenamiento().update(t);
        return true;
    }
    catch(...)
    {
        return false;
    }
}

bool tarearepositorio::eliminar(int id)
{
    try
    {
        obteneralmacenamiento()
            .remove<tarea>(id);

        return true;
    }
    catch(...)
    {
        return false;
    }
}
