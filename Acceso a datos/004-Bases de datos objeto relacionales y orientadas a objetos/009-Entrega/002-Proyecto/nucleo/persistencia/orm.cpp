#include "orm.hpp"

#include <iostream>
#include <sqlite3.h>

namespace
{
    std::string escapar_sql(const std::string& texto)
    {
        std::string resultado;

        for(const char caracter : texto)
        {
            resultado += caracter;
            if(caracter == '\'')
            {
                resultado += '\'';
            }
        }

        return resultado;
    }
}

// ==================================================
// CONSTRUCTOR
// ==================================================

ORM::ORM(Basedatos& bd)
    : bd(bd)
{
}

// ==================================================
// AUTORES
// ==================================================

bool ORM::guardar_autor(
    const Autor& autor
)
{
    std::string sql =
        "INSERT INTO autores "
        "(nombre, nacionalidad) "
        "VALUES ('" +
        escapar_sql(autor.nombre) +
        "','" +
        escapar_sql(autor.nacionalidad) +
        "');";

    return bd.ejecutar(sql);
}

std::vector<Autor> ORM::obtener_autores()
{
    std::vector<Autor> autores;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT id, nombre, nacionalidad "
        "FROM autores;";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return autores;
    }

    while (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        Autor autor;

        autor.id =
            sqlite3_column_int(stmt, 0);

        autor.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        autor.nacionalidad =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 2)
            );

        autores.push_back(autor);
    }

    sqlite3_finalize(stmt);

    return autores;
}

bool ORM::actualizar_autor(
    const Autor& autor
)
{
    std::string sql =
        "UPDATE autores SET "
        "nombre='" +
        escapar_sql(autor.nombre) +
        "', nacionalidad='" +
        escapar_sql(autor.nacionalidad) +
        "' WHERE id=" +
        std::to_string(autor.id) +
        ";";

    return bd.ejecutar(sql);
}

bool ORM::eliminar_autor(
    int id
)
{
    std::string sql =
        "DELETE FROM autores "
        "WHERE id=" +
        std::to_string(id) +
        ";";

    return bd.ejecutar(sql);
}

// ==================================================
// CATEGORIAS
// ==================================================

bool ORM::guardar_categoria(
    const Categoria& categoria
)
{
    std::string sql =
        "INSERT INTO categorias "
        "(nombre) "
        "VALUES ('" +
        escapar_sql(categoria.nombre) +
        "');";

    return bd.ejecutar(sql);
}

std::vector<Categoria>
ORM::obtener_categorias()
{
    std::vector<Categoria> categorias;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT id, nombre "
        "FROM categorias;";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return categorias;
    }

    while (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        Categoria categoria;

        categoria.id =
            sqlite3_column_int(stmt, 0);

        categoria.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        categorias.push_back(categoria);
    }

    sqlite3_finalize(stmt);

    return categorias;
}

bool ORM::actualizar_categoria(
    const Categoria& categoria
)
{
    std::string sql =
        "UPDATE categorias SET "
        "nombre='" +
        escapar_sql(categoria.nombre) +
        "' WHERE id=" +
        std::to_string(categoria.id) +
        ";";

    return bd.ejecutar(sql);
}

bool ORM::eliminar_categoria(
    int id
)
{
    std::string sql =
        "DELETE FROM categorias "
        "WHERE id=" +
        std::to_string(id) +
        ";";

    return bd.ejecutar(sql);
}

// ==================================================
// LIBROS
// ==================================================

bool ORM::guardar_libro(
    const Libro& libro
)
{
    std::string sql =
        "INSERT INTO libros "
        "(titulo, anio_publicacion, numero_paginas, autor_id, categoria_id) "
        "VALUES ('" +
        escapar_sql(libro.titulo) +
        "'," +
        std::to_string(libro.anio_publicacion) +
        "," +
        std::to_string(libro.numero_paginas) +
        "," +
        std::to_string(libro.autor.id) +
        "," +
        std::to_string(libro.categoria.id) +
        ");";

    return bd.ejecutar(sql);
}

std::vector<Libro>
ORM::obtener_libros()
{
    std::vector<Libro> libros;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT "
        "l.id, "
        "l.titulo, "
        "l.anio_publicacion, "
        "l.numero_paginas, "
        "a.id, "
        "a.nombre, "
        "a.nacionalidad, "
        "c.id, "
        "c.nombre "
        "FROM libros l "
        "INNER JOIN autores a "
        "ON l.autor_id = a.id "
        "INNER JOIN categorias c "
        "ON l.categoria_id = c.id;";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return libros;
    }

    while (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        Libro libro;

        libro.id =
            sqlite3_column_int(stmt, 0);

        libro.titulo =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        libro.anio_publicacion =
            sqlite3_column_int(stmt, 2);

        libro.numero_paginas =
            sqlite3_column_int(stmt, 3);

        libro.autor.id =
            sqlite3_column_int(stmt, 4);

        libro.autor.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 5)
            );

        libro.autor.nacionalidad =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 6)
            );

        libro.categoria.id =
            sqlite3_column_int(stmt, 7);

        libro.categoria.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 8)
            );

        libros.push_back(libro);
    }

    sqlite3_finalize(stmt);

    return libros;
}

Libro ORM::obtener_libro_por_id(
    int id
)
{
    Libro libro;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT "
        "l.id, "
        "l.titulo, "
        "l.anio_publicacion, "
        "l.numero_paginas, "
        "a.id, "
        "a.nombre, "
        "a.nacionalidad, "
        "c.id, "
        "c.nombre "
        "FROM libros l "
        "INNER JOIN autores a "
        "ON l.autor_id = a.id "
        "INNER JOIN categorias c "
        "ON l.categoria_id = c.id "
        "WHERE l.id=" +
        std::to_string(id) +
        ";";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return libro;
    }

    if (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        libro.id =
            sqlite3_column_int(stmt, 0);

        libro.titulo =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        libro.anio_publicacion =
            sqlite3_column_int(stmt, 2);

        libro.numero_paginas =
            sqlite3_column_int(stmt, 3);

        libro.autor.id =
            sqlite3_column_int(stmt, 4);

        libro.autor.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 5)
            );

        libro.autor.nacionalidad =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 6)
            );

        libro.categoria.id =
            sqlite3_column_int(stmt, 7);

        libro.categoria.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 8)
            );
    }

    sqlite3_finalize(stmt);

    return libro;
}

bool ORM::actualizar_libro(
    const Libro& libro
)
{
    std::string sql =
        "UPDATE libros SET "
        "titulo='" +
        escapar_sql(libro.titulo) +
        "', "
        "anio_publicacion=" +
        std::to_string(
            libro.anio_publicacion
        ) +
        ", "
        "numero_paginas=" +
        std::to_string(
            libro.numero_paginas
        ) +
        ", "
        "autor_id=" +
        std::to_string(
            libro.autor.id
        ) +
        ", "
        "categoria_id=" +
        std::to_string(
            libro.categoria.id
        ) +
        " WHERE id=" +
        std::to_string(
            libro.id
        ) +
        ";";

    return bd.ejecutar(sql);
}

bool ORM::eliminar_libro(
    int id
)
{
    std::string sql =
        "DELETE FROM libros "
        "WHERE id=" +
        std::to_string(id) +
        ";";

    return bd.ejecutar(sql);
}

// ==================================================
// TRANSACCIONES
// ==================================================

bool ORM::iniciar_transaccion()
{
    return bd.ejecutar(
        "BEGIN TRANSACTION;"
    );
}

bool ORM::confirmar_transaccion()
{
    return bd.ejecutar(
        "COMMIT;"
    );
}

bool ORM::cancelar_transaccion()
{
    return bd.ejecutar(
        "ROLLBACK;"
    );
}
