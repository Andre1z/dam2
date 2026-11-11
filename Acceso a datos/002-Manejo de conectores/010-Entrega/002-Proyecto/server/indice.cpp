#include "indice.hpp"

#include <algorithm>

namespace AndreiDB
{
    Indice::Indice(
        const std::string& campo
    )
        :
        nombreCampo(campo)
    {
    }

    void Indice::agregar(
        const std::string& valor,
        uint64_t id
    )
    {
        datos[valor].push_back(id);
    }

    void Indice::eliminar(
        const std::string& valor,
        uint64_t id
    )
    {
        auto it = datos.find(valor);

        if (it == datos.end())
        {
            return;
        }

        auto& ids = it->second;

        ids.erase(
            std::remove(
                ids.begin(),
                ids.end(),
                id
            ),
            ids.end()
        );

        if (ids.empty())
        {
            datos.erase(it);
        }
    }

    std::vector<uint64_t> Indice::buscar(
        const std::string& valor
    ) const
    {
        auto it = datos.find(valor);

        if (it == datos.end())
        {
            return {};
        }

        return it->second;
    }

    bool Indice::existe(
        const std::string& valor
    ) const
    {
        return datos.find(valor)
            != datos.end();
    }

    void Indice::limpiar()
    {
        datos.clear();
    }

    const std::string&
    Indice::obtenerCampo() const
    {
        return nombreCampo;
    }
}