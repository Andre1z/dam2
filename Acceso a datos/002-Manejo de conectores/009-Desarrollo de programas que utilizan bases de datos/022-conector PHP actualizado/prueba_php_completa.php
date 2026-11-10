<?php
declare(strict_types=1);

function ok(string $nombre, bool $condicion): void {
    echo ($condicion ? "[OK]   " : "[FAIL] ") . $nombre . PHP_EOL;
    if (!$condicion) exit(1);
}

$config = $argv[1] ?? (__DIR__ . "/config.json");
andreibbdd_configurar($config);

$base = "prueba_php_completa";
if (in_array($base, andreibbdd_listar_bases(), true)) {
    andreibbdd_eliminar_base($base);
}

ok("crear base", andreibbdd_crear_base($base));
ok("base visible", in_array($base, andreibbdd_listar_bases(), true));
ok("usar base", andreibbdd_usar_base($base));

ok("crear clientes tipada", andreibbdd_crear_tabla_tipada("clientes", [
    "nombre" => "TEXTO",
    "email" => "TEXTO",
    "saldo" => "DECIMAL",
    "alta" => "FECHA"
]));
ok("crear pedidos tipada", andreibbdd_crear_tabla_tipada("pedidos", [
    "id_cliente" => "ENTERO",
    "total" => "DECIMAL"
]));

$tablas = andreibbdd_listar_tablas();
ok("listar tablas", in_array("clientes", $tablas, true) && in_array("pedidos", $tablas, true));
ok("PK implícita", andreibbdd_clave_primaria("clientes") === "id");

$tipos = andreibbdd_tipos("clientes");
ok("tipo DECIMAL", ($tipos["saldo"] ?? null) === "DECIMAL");

ok("email NO NULO", andreibbdd_establecer_no_nulo("clientes", "email"));
ok("email UNICO", andreibbdd_establecer_unico("clientes", "email"));
ok("FK pedidos->clientes", andreibbdd_anadir_clave_foranea("pedidos", "id_cliente", "clientes", "id"));
ok("índice email", andreibbdd_crear_indice("idx_clientes_email", "clientes", "email"));

$id1 = andreibbdd_insertar("clientes", ["Ana", "ana@correo.com", "100.50", "2026-01-10"]);
$id2 = andreibbdd_insertar_columnas("clientes", ["nombre","email","saldo"], ["Luis","luis@correo.com","250.75"]);
ok("insertar", $id1 > 0 && $id2 > 0);

$p1 = andreibbdd_insertar("pedidos", [(string)$id1, "25.50"]);
$p2 = andreibbdd_insertar("pedidos", [(string)$id1, "40.00"]);
ok("insertar FK válida", $p1 > 0 && $p2 > 0);
ok("rechazar FK inválida", andreibbdd_insertar("pedidos", ["999999", "10.00"]) === -1);

$fila = andreibbdd_seleccionar("clientes", $id1);
ok("seleccionar por id", ($fila["email"] ?? "") === "ana@correo.com");
ok("buscar por columna", count(andreibbdd_buscar("clientes", "email", "ana@correo.com")) === 1);

ok("actualizar por id", andreibbdd_actualizar("clientes", $id1, ["Ana María","ana@correo.com","125.25","2026-01-10"]));
ok("actualizar donde", andreibbdd_actualizar_donde("clientes", ["saldo"=>"300.00"], "email", "luis@correo.com") === 1);

$join = andreibbdd_consultar(
    "SELECCIONAR clientes.nombre,pedidos.total DE clientes ".
    "JOIN pedidos EN clientes.id = pedidos.id_cliente ".
    "ORDENAR POR pedidos.total DESCENDENTE"
);
ok("JOIN desde PHP", count($join) === 2);

ok("crear vista", andreibbdd_crear_vista("clientes_con_saldo", "SELECCIONAR nombre,saldo DE clientes DONDE saldo > 100"));
ok("listar vista", in_array("clientes_con_saldo", andreibbdd_listar_vistas(), true));

ok("transacción inicia", andreibbdd_iniciar_transaccion());
ok("estado transacción", andreibbdd_en_transaccion());
$tmp = andreibbdd_insertar("clientes", ["Temporal","tmp@correo.com","1.00","2026-01-01"]);
ok("insert dentro txn", $tmp > 0);
ok("rollback", andreibbdd_deshacer());
ok("rollback efectivo", count(andreibbdd_buscar("clientes", "email", "tmp@correo.com")) === 0);

$esquema = andreibbdd_esquema("clientes");
ok("introspección esquema", $esquema === ["id","activo","nombre","email","saldo","alta"]);
$fks = andreibbdd_claves_foraneas("pedidos");
ok("introspección FK", count($fks) === 1 && $fks[0]["tabla_referenciada"] === "clientes");
$r = andreibbdd_restricciones("clientes", "email");
ok("introspección restricciones", $r["no_nulo"] && $r["unico"]);
ok("introspección índices", count(andreibbdd_indices("clientes")) === 1);

echo PHP_EOL . "Todas las pruebas PHP han terminado correctamente." . PHP_EOL;
