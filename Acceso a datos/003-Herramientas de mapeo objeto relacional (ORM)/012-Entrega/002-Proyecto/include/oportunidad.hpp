#pragma once

#include <string>

class oportunidad {
public:

    int id;

    int clienteid;

    std::string descripcion;

    double valor;

    std::string estado;

    oportunidad()
        : id(0),
          clienteid(0),
          valor(0.0)
    {
    }

    oportunidad(
        int id,
        int clienteid,
        const std::string& descripcion,
        double valor,
        const std::string& estado
    )
        : id(id),
          clienteid(clienteid),
          descripcion(descripcion),
          valor(valor),
          estado(estado)
    {
    }
};