<?php
andreibbdd_configurar(__DIR__ . '/config.json');
andreibbdd_usar_base('demo_conectores');

andreibbdd_iniciar_transaccion();
andreibbdd_insertar('productos', ['Temporal', '1', '999', 'FALSO']);
print_r(andreibbdd_consultar("SELECCIONAR CONTAR(*) COMO total DE productos"));
andreibbdd_deshacer();

andreibbdd_crear_vista(
    'productos_caros',
    "SELECCIONAR nombre,precio DE productos DONDE precio > 20"
);
print_r(andreibbdd_consultar("SELECCIONAR * DE productos_caros"));