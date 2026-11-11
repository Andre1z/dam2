#pragma once

#include "basedatos.hpp"

class InicializadorBD
{
public:

    static bool crear_tablas(
        Basedatos& bd
    );

    static bool insertar_datos_prueba(
        Basedatos& bd
    );
};