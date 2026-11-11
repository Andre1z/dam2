#pragma once

#include <string>
#include <unordered_map>
#include <memory>

#include "indice.hpp"

namespace AndreiDB
{
    class GestorIndices
    {
    private:

        std::unordered_map<
            std::string,
            std::unique_ptr<Indice>
        > indices;

    public:

        GestorIndices();

        bool crearIndice(
            const std::string& campo
        );

        bool eliminarIndice(
            const std::string& campo
        );

        bool existeIndice(
            const std::string& campo
        ) const;

        Indice* obtenerIndice(
            const std::string& campo
        );

        void limpiar();

        std::size_t totalIndices() const;
    };
}