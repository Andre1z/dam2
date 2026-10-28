<?php

header('Content-Type: text/plain; charset=utf-8');
ob_implicit_flush(true);

function paso(string $texto): void {
    echo "\n=== $texto ===\n";
    @ob_flush();
    flush();
}

paso('0 PHP');
echo PHP_VERSION . ' / ' . PHP_SAPI . "\n";

paso('1 EXTENSION');
var_dump(extension_loaded('andreibbdd'));

paso('2 CONFIGURACION');
var_dump(andreibbdd_configuracion());

paso('3 LISTAR BASES');
var_dump(andreibbdd_listar_bases());

paso('4 CREAR BASE');
var_dump(andreibbdd_crear_base('crimson_debug'));

paso('5 USAR BASE');
var_dump(andreibbdd_usar_base('crimson_debug'));

paso('6 LISTAR TABLAS');
var_dump(andreibbdd_listar_tablas());

paso('7 CREAR TABLA');
var_dump(
    andreibbdd_crear_tabla_tipada(
        'clientes_debug',
        [
            'nombre' => 'TEXTO',
            'email' => 'TEXTO'
        ]
    )
);

paso('8 LISTAR TABLAS DESPUES');
var_dump(andreibbdd_listar_tablas());

paso('9 INSERTAR');
var_dump(
    andreibbdd_insertar_columnas(
        'clientes_debug',
        ['nombre', 'email'],
        ['Jose Vicente', 'info@jocarsa.com']
    )
);

paso('10 LISTAR');
var_dump(andreibbdd_listar('clientes_debug'));

paso('FIN');