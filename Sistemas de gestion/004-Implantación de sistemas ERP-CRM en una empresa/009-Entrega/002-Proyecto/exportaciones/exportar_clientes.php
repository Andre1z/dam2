<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        id,
        nombre,
        email,
        telefono
    FROM clientes
    ORDER BY nombre
");

$clientes = $stmt->fetchAll();

header('Content-Type: text/csv; charset=utf-8');
header(
    'Content-Disposition: attachment; filename=clientes.csv'
);

$archivo = fopen('php://output', 'w');

fputcsv(
    $archivo,
    [
        'ID',
        'Nombre',
        'Email',
        'Telefono'
    ],
    ';'
);

foreach ($clientes as $cliente) {

    fputcsv(
        $archivo,
        [
            $cliente['id'],
            $cliente['nombre'],
            $cliente['email'],
            $cliente['telefono']
        ],
        ';'
    );
}

fclose($archivo);
exit;