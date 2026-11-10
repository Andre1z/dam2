<?php
// Ejecutar desde la raíz del proyecto:
// php -d extension=./andreibbdd.so doc/php/01_basico.php

andreibbdd_configurar(__DIR__ . '/../../config.json');
andreibbdd_crear_base('demo_conectores');
andreibbdd_usar_base('demo_conectores');
andreibbdd_crear_tabla_tipada('productos', [
    'nombre' => 'TEXTO',
    'stock' => 'ENTERO',
    'precio' => 'REAL',
    'disponible' => 'BOOLEANO',
]);

$id = andreibbdd_insertar('productos', ['Teclado', '10', '25.50', 'VERDADERO']);
echo "ID insertado: $id\n";

print_r(andreibbdd_listar('productos'));
print_r(andreibbdd_consultar(
    "SELECCIONAR nombre,precio DE productos DONDE precio > 20"
));
