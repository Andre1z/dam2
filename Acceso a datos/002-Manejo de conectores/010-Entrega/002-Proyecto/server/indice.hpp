#pragma once

#include <string>
#include <unordered_map>
#include <vector>
#include <cstdint>

namespace AndreiDB
{
    class Indice
    {
    private:

        std::string nombreCampo;

        std::unordered_map<
            std::string,
            std::vector<uint64_t>
        > datos;

    public:

        explicit Indice(
            const std::string& campo
        );

        void agregar(
            const std::string& valor,
            uint64_t id
        );

        void eliminar(
            const std::string& valor,
            uint64_t id
        );

        std::vector<uint64_t> buscar(
            const std::string& valor
        ) const;

        bool existe(
            const std::string& valor
        ) const;

        void limpiar();

        const std::string& obtenerCampo() const;
    };
}