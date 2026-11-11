#pragma once

#include <string>
#include <cstdint>

namespace AndreiDB
{
    class Registro
    {
    public:

        uint64_t id;

        std::string nombre;
        std::string apellidos;
        std::string telefono;
        std::string creado;

        Registro()
            :
            id(0),
            nombre(""),
            apellidos(""),
            telefono(""),
            creado("")
        {
        }

        Registro(
            uint64_t pId,
            const std::string& pNombre,
            const std::string& pApellidos,
            const std::string& pTelefono,
            const std::string& pCreado
        )
            :
            id(pId),
            nombre(pNombre),
            apellidos(pApellidos),
            telefono(pTelefono),
            creado(pCreado)
        {
        }
    };
}