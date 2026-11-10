<?php
andreibbdd_configurar(__DIR__ . '/../../config.json');
andreibbdd_usar_base('demo_conectores');

$resultado = andreibbdd_consultar(
    "SELECCIONAR nombre,precio DE productos " .
    "DONDE precio > (SELECCIONAR MEDIA(precio) DE productos)"
);
print_r($resultado);
