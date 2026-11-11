#pragma once

#include <vector>

#include "basedatos.hpp"

#include "../modelos/autor.hpp"
#include "../modelos/categoria.hpp"
#include "../modelos/libro.hpp"

class ORM
{
private:

    Basedatos& bd;

public:

    explicit ORM(Basedatos& bd);

    // AUTORES

    bool guardar_autor(
        const Autor& autor
    );

    std::vector<Autor> obtener_autores();

    bool actualizar_autor(
        const Autor& autor
    );

    bool eliminar_autor(
        int id
    );

    // CATEGORIAS

    bool guardar_categoria(
        const Categoria& categoria
    );

    std::vector<Categoria> obtener_categorias();

    bool actualizar_categoria(
        const Categoria& categoria
    );

    bool eliminar_categoria(
        int id
    );

    // LIBROS

    bool guardar_libro(
        const Libro& libro
    );

    std::vector<Libro> obtener_libros();

    Libro obtener_libro_por_id(
        int id
    );

    bool actualizar_libro(
        const Libro& libro
    );

    bool eliminar_libro(
        int id
    );

    // TRANSACCIONES

    bool iniciar_transaccion();

    bool confirmar_transaccion();

    bool cancelar_transaccion();
};