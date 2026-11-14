<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        ventas.id,
        clientes.nombre AS cliente,
        ventas.fecha,
        ventas.total
    FROM ventas
    INNER JOIN clientes
        ON ventas.cliente_id = clientes.id
    ORDER BY ventas.id DESC
");

$ventas = $stmt->fetchAll();

header('Content-Type: text/csv; charset=utf-8');

header(
    'Content-Disposition: attachment; filename=ventas.csv'
);

$archivo = fopen(
    'php://output',
    'w'
);

fputcsv(
    $archivo,
    [
        'ID',
        'Cliente',
        'Fecha',
        'Total'
    ],
    ';'
);

foreach ($ventas as $venta) {

    fputcsv(
        $archivo,
        [
            $venta['id'],
            $venta['cliente'],
            $venta['fecha'],
            $venta['total']
        ],
        ';'
    );
}

fclose($archivo);

exit;