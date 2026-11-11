#pragma once

#include <sqlite3.h>
#include <string>

class Basedatos
{
private:
    sqlite3* conexion;

public:

    Basedatos();

    ~Basedatos();

    bool abrir(const std::string& archivo);

    void cerrar();

    bool ejecutar(const std::string& sql);

    sqlite3* obtener_conexion();
};