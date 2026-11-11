#pragma once

#include <string>

class tarea {
public:

    int id;

    int usuarioid;

    int clienteid;

    std::string titulo;

    std::string descripcion;

    std::string fecha_limite;

    std::string estado;

    tarea()
        : id(0),
          usuarioid(0),
          clienteid(0)
    {
    }

    tarea(
        int id,
        int usuarioid,
        int clienteid,
        const std::string& titulo,
        const std::string& descripcion,
        const std::string& fecha_limite,
        const std::string& estado
    )
        : id(id),
          usuarioid(usuarioid),
          clienteid(clienteid),
          titulo(titulo),
          descripcion(descripcion),
          fecha_limite(fecha_limite),
          estado(estado)
    {
    }
};