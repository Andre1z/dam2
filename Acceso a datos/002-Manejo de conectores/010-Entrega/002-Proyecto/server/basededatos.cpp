#include "basededatos.hpp"

namespace AndreiDB
{
    BaseDatos::BaseDatos(
        const std::string& rutaBaseDatos
    )
        :
        motor(rutaBaseDatos)
    {
    }

    bool BaseDatos::iniciar()
    {
        return motor.inicializar();
    }

    uint64_t BaseDatos::insertar(
        const std::string& nombre,
        const std::string& apellidos,
        const std::string& telefono,
        const std::string& creado
    )
    {
        uint64_t id = motor.siguienteId();

        Registro registro(
            id,
            nombre,
            apellidos,
            telefono,
            creado
        );

        if (!motor.insertar(registro))
        {
            return 0;
        }

        return id;
    }

    std::vector<Registro> BaseDatos::seleccionarTodos()
    {
        return motor.obtenerTodos();
    }

    Registro BaseDatos::seleccionarPorId(
        uint64_t id
    )
    {
        return motor.buscarPorId(id);
    }

    bool BaseDatos::actualizar(
        uint64_t id,
        const std::string& nombre,
        const std::string& apellidos,
        const std::string& telefono,
        const std::string& creado
    )
    {
        Registro registro(
            id,
            nombre,
            apellidos,
            telefono,
            creado
        );

        return motor.actualizar(
            id,
            registro
        );
    }

    bool BaseDatos::eliminar(
        uint64_t id
    )
    {
        return motor.eliminar(id);
    }

    bool BaseDatos::existe(
        uint64_t id
    )
    {
        return motor.existe(id);
    }
}