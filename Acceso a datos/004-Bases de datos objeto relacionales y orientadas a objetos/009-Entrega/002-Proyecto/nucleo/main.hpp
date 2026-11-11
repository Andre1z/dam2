#pragma once

#include "persistencia/orm.hpp"

// Inicialización de la aplicación
void iniciar_aplicacion();

// Menú principal
void mostrar_menu();

// Gestión de autores
void listar_autores(
    ORM& orm
);

void crear_autor(
    ORM& orm
);

// Gestión de categorías
void listar_categorias(
    ORM& orm
);

void crear_categoria(
    ORM& orm
);

// Gestión de libros
void listar_libros(
    ORM& orm
);

void crear_libro(
    ORM& orm
);