#include "gestorindices.hpp"

namespace AndreiDB
{
    GestorIndices::GestorIndices()
    {
    }

    bool GestorIndices::crearIndice(
        const std::string& campo
    )
    {
        if (existeIndice(campo))
        {
            return false;
        }

        indices[campo] =
            std::make_unique<Indice>(
                campo
            );

        return true;
    }

    bool GestorIndices::eliminarIndice(
        const std::string& campo
    )
    {
        auto it = indices.find(campo);

        if (it == indices.end())
        {
            return false;
        }

        indices.erase(it);

        return true;
    }

    bool GestorIndices::existeIndice(
        const std::string& campo
    ) const
    {
        return indices.find(campo)
            != indices.end();
    }

    Indice* GestorIndices::obtenerIndice(
        const std::string& campo
    )
    {
        auto it = indices.find(campo);

        if (it == indices.end())
        {
            return nullptr;
        }

        return it->second.get();
    }

    void GestorIndices::limpiar()
    {
        indices.clear();
    }

    std::size_t GestorIndices::totalIndices() const
    {
        return indices.size();
    }
}