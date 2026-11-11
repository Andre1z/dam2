#include "basedatos.hpp"

#include <iostream>

Basedatos::Basedatos()
{
    conexion = nullptr;
}

Basedatos::~Basedatos()
{
    cerrar();
}

bool Basedatos::abrir(const std::string& archivo)
{
    int resultado = sqlite3_open(
        archivo.c_str(),
        &conexion
    );

    if (resultado != SQLITE_OK)
    {
        std::cerr
            << "Error al abrir la base de datos: "
            << sqlite3_errmsg(conexion)
            << std::endl;

        cerrar();
        return false;
    }

    if (!ejecutar("PRAGMA foreign_keys = ON;"))
    {
        cerrar();
        return false;
    }

    return true;
}

void Basedatos::cerrar()
{
    if (conexion != nullptr)
    {
        sqlite3_close(conexion);
        conexion = nullptr;
    }
}

bool Basedatos::ejecutar(const std::string& sql)
{
    char* mensaje_error = nullptr;

    int resultado = sqlite3_exec(
        conexion,
        sql.c_str(),
        nullptr,
        nullptr,
        &mensaje_error
    );

    if (resultado != SQLITE_OK)
    {
        std::cerr
            << "Error SQL: "
            << mensaje_error
            << std::endl;

        sqlite3_free(mensaje_error);

        return false;
    }

    return true;
}

sqlite3* Basedatos::obtener_conexion()
{
    return conexion;
}
