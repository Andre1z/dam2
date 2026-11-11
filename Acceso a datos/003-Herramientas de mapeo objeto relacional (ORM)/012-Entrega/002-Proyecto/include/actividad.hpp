#pragma once

#include <string>

class actividad {
public:

    int id;

    int clienteid;

    std::string fecha;

    std::string tipo;

    std::string descripcion;

    actividad()
        : id(0),
          clienteid(0)
    {
    }

    actividad(
        int id,
        int clienteid,
        const std::string& fecha,
        const std::string& tipo,
        const std::string& descripcion
    )
        : id(id),
          clienteid(clienteid),
          fecha(fecha),
          tipo(tipo),
          descripcion(descripcion)
    {
    }
};