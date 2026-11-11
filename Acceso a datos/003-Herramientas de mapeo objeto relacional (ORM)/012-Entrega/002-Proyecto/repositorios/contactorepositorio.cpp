#include "contactorepositorio.hpp"

#include "../include/configuracionorm.hpp"

namespace { auto& obteneralmacenamiento() { return obtener_almacenamiento(); } }

bool contactorepositorio::insertar(
    const contacto& c
)
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

std::optional<contacto>
contactorepositorio::obtenerporid(int id)
{
    try
    {
        auto resultado =
            obteneralmacenamiento()
            .get<contacto>(id);

        return resultado;
    }
    catch(...)
    {
        return std::nullopt;
    }
}

std::vector<contacto>
contactorepositorio::obtenertodos()
{
    try
    {
        return obteneralmacenamiento()
            .get_all<contacto>();
    }
    catch(...)
    {
        return {};
    }
}

std::vector<contacto>
contactorepositorio::obtenerporempresa(
    int empresaid
)
{
    try
    {
        using namespace sqlite_orm;

        return obteneralmacenamiento()
            .get_all<contacto>(
                where(
                    c(&contacto::empresaid)
                    == empresaid
                )
            );
    }
    catch(...)
    {
        return {};
    }
}

bool contactorepositorio::actualizar(
    const contacto& c
)
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

bool contactorepositorio::eliminar(int id)
{
    try
    {
        obteneralmacenamiento()
            .remove<contacto>(id);

        return true;
    }
    catch(...)
    {
        return false;
    }
}
