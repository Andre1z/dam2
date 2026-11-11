#include <iostream>

#include "../nucleo/persistencia/basedatos.hpp"
#include "../nucleo/persistencia/orm.hpp"
#include "../nucleo/persistencia/inicializadorbd.hpp"

#include "../nucleo/modelos/autor.hpp"
#include "../nucleo/modelos/categoria.hpp"

int main()
{
    Basedatos bd;

    if (
        !bd.abrir(
            "../base_datos/biblioteca.db"
        )
    )
    {
        std::cout
            << "Error al conectar "
            << "con la base de datos"
            << std::endl;

        return 1;
    }

    if(!InicializadorBD::crear_tablas(bd))
    {
        std::cout << "No se pudieron crear las tablas" << std::endl;
        return 1;
    }

    ORM orm(bd);

    std::cout
        << "Iniciando transaccion..."
        << std::endl;

    if (!orm.iniciar_transaccion())
    {
        std::cout
            << "No se pudo iniciar "
            << "la transaccion"
            << std::endl;

        return 1;
    }

    try
    {
        Autor autor;

        autor.nombre =
            "Gabriel Garcia Marquez";

        autor.nacionalidad =
            "Colombia";

        Categoria categoria;

        categoria.nombre =
            "Realismo Magico";

        if(!orm.guardar_autor(autor) || !orm.guardar_categoria(categoria))
        {
            orm.cancelar_transaccion();
            std::cout << "Transaccion cancelada" << std::endl;
            return 1;
        }

        if(!orm.confirmar_transaccion())
        {
            std::cout << "No se pudo confirmar la transaccion" << std::endl;
            return 1;
        }

        std::cout
            << "Transaccion completada "
            << "correctamente"
            << std::endl;
    }
    catch (...)
    {
        orm.cancelar_transaccion();

        std::cout
            << "Transaccion cancelada"
            << std::endl;
    }

    bd.cerrar();

    return 0;
}
