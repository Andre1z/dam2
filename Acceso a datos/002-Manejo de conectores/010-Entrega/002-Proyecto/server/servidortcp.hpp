#pragma once

#include <string>

#include "analizadorsql.hpp"

namespace AndreiDB
{
    class ServidorTCP
    {
    private:

        int puerto;
        int socketServidor;

        AnalizadorSQL& analizador;

    public:

        ServidorTCP(
            int puerto,
            AnalizadorSQL& analizador
        );

        ~ServidorTCP();

        bool iniciar();

        void detener();

        void escuchar();

    private:

        void procesarCliente(
            int socketCliente
        );

        std::string ejecutarConsulta(
            const std::string& sql
        );

        std::string consultaAJson(
            const Consulta& consulta
        );
    };
}