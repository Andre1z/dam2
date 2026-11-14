<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

/*
|--------------------------------------------------------------------------
| Obtener estadísticas
|--------------------------------------------------------------------------
*/

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$totalVentas = $db->query("
    SELECT COUNT(*)
    FROM ventas
")->fetchColumn();

$facturacionTotal = $db->query("
    SELECT COALESCE(
        SUM(total),
        0
    )
    FROM ventas
")->fetchColumn();

/*
|--------------------------------------------------------------------------
| Crear carpeta estadísticas
|--------------------------------------------------------------------------
*/

$carpeta = __DIR__ . '/estadisticas';

if (!is_dir($carpeta)) {

    mkdir(
        $carpeta,
        0777,
        true
    );
}

/*
|--------------------------------------------------------------------------
| Guardar estadísticas en JSON
|--------------------------------------------------------------------------
*/

$estadisticas = [

    'fecha_generacion' => date('Y-m-d H:i:s'),

    'clientes' => (int) $totalClientes,

    'productos' => (int) $totalProductos,

    'ventas' => (int) $totalVentas,

    'facturacion' => (float) $facturacionTotal

];

$archivo = $carpeta . '/estadisticas.json';

file_put_contents(
    $archivo,
    json_encode(
        $estadisticas,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    )
);

echo 'Estadísticas actualizadas correctamente.';