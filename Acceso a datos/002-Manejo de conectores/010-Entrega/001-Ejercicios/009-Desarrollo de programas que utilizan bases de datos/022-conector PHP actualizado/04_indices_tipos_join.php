<?php
andreibbdd_configurar(__DIR__ . '/config.json');
andreibbdd_crear_base("ejemplo_fases14_php");
andreibbdd_usar_base("ejemplo_fases14_php");
andreibbdd_crear_tabla_tipada("clientes", [
    "nombre"=>"TEXTO", "email"=>"TEXTO", "nacimiento"=>"FECHA", "saldo"=>"DECIMAL"
]);
andreibbdd_crear_indice("idx_email", "clientes", "email");
andreibbdd_insertar("clientes", ["Ana","ana@x.es","2026-01-10","100.25"]);
print_r(andreibbdd_indices("clientes"));
echo andreibbdd_explicar("SELECCIONAR * DE clientes DONDE email = 'ana@x.es'");
print_r(andreibbdd_consultar("SELECCIONAR c.nombre DE clientes c"));
?>