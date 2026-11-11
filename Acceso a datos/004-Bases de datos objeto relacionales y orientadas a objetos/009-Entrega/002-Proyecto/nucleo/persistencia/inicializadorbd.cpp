#include "inicializadorbd.hpp"

bool InicializadorBD::crear_tablas(
    Basedatos& bd
)
{
    bool correcto = true;

    correcto &= bd.ejecutar(
        "CREATE TABLE IF NOT EXISTS autores ("
        "id INTEGER PRIMARY KEY AUTOINCREMENT,"
        "nombre TEXT NOT NULL,"
        "nacionalidad TEXT NOT NULL"
        ");"
    );

    correcto &= bd.ejecutar(
        "CREATE TABLE IF NOT EXISTS categorias ("
        "id INTEGER PRIMARY KEY AUTOINCREMENT,"
        "nombre TEXT NOT NULL"
        ");"
    );

    correcto &= bd.ejecutar(
        "CREATE TABLE IF NOT EXISTS libros ("
        "id INTEGER PRIMARY KEY AUTOINCREMENT,"
        "titulo TEXT NOT NULL,"
        "anio_publicacion INTEGER NOT NULL,"
        "numero_paginas INTEGER NOT NULL,"
        "autor_id INTEGER NOT NULL,"
        "categoria_id INTEGER NOT NULL,"
        "FOREIGN KEY(autor_id) REFERENCES autores(id) ON UPDATE CASCADE ON DELETE RESTRICT,"
        "FOREIGN KEY(categoria_id) REFERENCES categorias(id) ON UPDATE CASCADE ON DELETE RESTRICT"
        ");"
    );

    return correcto;
}

bool InicializadorBD::insertar_datos_prueba(
    Basedatos& bd
)
{
    bool correcto = true;

    correcto &= bd.ejecutar(
        "INSERT INTO autores "
        "(nombre,nacionalidad) VALUES "
        "('Miguel de Cervantes','España');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO autores "
        "(nombre,nacionalidad) VALUES "
        "('Julio Verne','Francia');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO categorias "
        "(nombre) VALUES "
        "('Novela');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO categorias "
        "(nombre) VALUES "
        "('Ciencia Ficcion');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO libros "
        "(titulo,anio_publicacion,numero_paginas,autor_id,categoria_id) VALUES "
        "('Don Quijote de la Mancha',1605,863,1,1);"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO libros "
        "(titulo,anio_publicacion,numero_paginas,autor_id,categoria_id) VALUES "
        "('Viaje al centro de la Tierra',1864,350,2,2);"
    );

    return correcto;
}
