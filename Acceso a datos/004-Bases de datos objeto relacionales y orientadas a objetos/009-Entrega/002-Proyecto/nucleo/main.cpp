#include <iostream>
#include <vector>

#include "main.hpp"

#include "persistencia/basedatos.hpp"
#include "persistencia/orm.hpp"
#include "persistencia/inicializadorbd.hpp"

#include "modelos/autor.hpp"
#include "modelos/categoria.hpp"
#include "modelos/libro.hpp"

#include "utilidades/logger.hpp"

void mostrar_menu()
{
    std::cout << "\n";
    std::cout << "====================================\n";
    std::cout << " GESTOR DE BIBLIOTECA ORM EN C++\n";
    std::cout << "====================================\n";
    std::cout << "1. Listar autores\n";
    std::cout << "2. Crear autor\n";
    std::cout << "3. Listar categorias\n";
    std::cout << "4. Crear categoria\n";
    std::cout << "5. Listar libros\n";
    std::cout << "6. Crear libro\n";
    std::cout << "7. Salir\n";
    std::cout << "====================================\n";
    std::cout << "Seleccione una opcion: ";
}

void listar_autores(ORM& orm)
{
    auto autores =
        orm.obtener_autores();

    std::cout << "\nAUTORES\n";

    for(const auto& autor : autores)
    {
        std::cout
            << autor.id
            << " | "
            << autor.nombre
            << " | "
            << autor.nacionalidad
            << std::endl;
    }
}

void crear_autor(ORM& orm)
{
    Autor autor;

    std::cin.ignore();

    std::cout
        << "Nombre: ";
    std::getline(
        std::cin,
        autor.nombre
    );

    std::cout
        << "Nacionalidad: ";
    std::getline(
        std::cin,
        autor.nacionalidad
    );

    if(
        orm.guardar_autor(
            autor
        )
    )
    {
        Logger::info(
            "Autor guardado"
        );
    }
    else
    {
        Logger::error(
            "No se pudo guardar el autor"
        );
    }
}

void listar_categorias(ORM& orm)
{
    auto categorias =
        orm.obtener_categorias();

    std::cout << "\nCATEGORIAS\n";

    for(const auto& categoria : categorias)
    {
        std::cout
            << categoria.id
            << " | "
            << categoria.nombre
            << std::endl;
    }
}

void crear_categoria(ORM& orm)
{
    Categoria categoria;

    std::cin.ignore();

    std::cout
        << "Nombre de la categoria: ";

    std::getline(
        std::cin,
        categoria.nombre
    );

    if(
        orm.guardar_categoria(
            categoria
        )
    )
    {
        Logger::info(
            "Categoria guardada"
        );
    }
    else
    {
        Logger::error(
            "No se pudo guardar la categoria"
        );
    }
}

void listar_libros(ORM& orm)
{
    auto libros =
        orm.obtener_libros();

    std::cout
        << "\nLIBROS\n";

    for(const auto& libro : libros)
    {
        std::cout
            << libro.id
            << " | "
            << libro.titulo
            << " | "
            << libro.anio_publicacion
            << " | "
            << libro.numero_paginas
            << " | "
            << libro.autor.nombre
            << " | "
            << libro.categoria.nombre
            << std::endl;
    }
}

void crear_libro(ORM& orm)
{
    Libro libro;

    std::cin.ignore();

    std::cout
        << "Titulo: ";

    std::getline(
        std::cin,
        libro.titulo
    );

    std::cout
        << "Anio de publicacion: ";

    std::cin
        >> libro.anio_publicacion;

    std::cout
        << "Numero de paginas: ";

    std::cin
        >> libro.numero_paginas;

    std::cout
        << "ID del autor: ";

    std::cin
        >> libro.autor.id;

    std::cout
        << "ID de la categoria: ";

    std::cin
        >> libro.categoria.id;

    if(
        orm.guardar_libro(
            libro
        )
    )
    {
        Logger::info(
            "Libro guardado"
        );
    }
    else
    {
        Logger::error(
            "No se pudo guardar el libro"
        );
    }
}

void iniciar_aplicacion()
{
    Basedatos bd;

    if(
        !bd.abrir(
            "../base_datos/biblioteca.db"
        )
    )
    {
        Logger::error(
            "No se pudo abrir la base de datos"
        );

        return;
    }

    Logger::info(
        "Conexion establecida"
    );

    if(
        !InicializadorBD::crear_tablas(
            bd
        )
    )
    {
        Logger::error(
            "Error creando tablas"
        );

        return;
    }

    ORM orm(bd);

    if(
        orm.obtener_autores().empty() &&
        !InicializadorBD::insertar_datos_prueba(bd)
    )
    {
        Logger::error("No se pudieron cargar los datos iniciales");
        return;
    }

    int opcion = 0;

    do
    {
        mostrar_menu();

        std::cin
            >> opcion;

        switch(opcion)
        {
            case 1:
                listar_autores(
                    orm
                );
                break;

            case 2:
                crear_autor(
                    orm
                );
                break;

            case 3:
                listar_categorias(
                    orm
                );
                break;

            case 4:
                crear_categoria(
                    orm
                );
                break;

            case 5:
                listar_libros(
                    orm
                );
                break;

            case 6:
                crear_libro(
                    orm
                );
                break;

            case 7:
                Logger::info(
                    "Aplicacion finalizada"
                );
                break;

            default:
                std::cout
                    << "Opcion no valida"
                    << std::endl;
        }

    }
    while(opcion != 7);

    bd.cerrar();
}

int main()
{
    iniciar_aplicacion();

    return 0;
}
