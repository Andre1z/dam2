<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id'])
    ? (int) $_GET['id']
    : 0;

if ($id <= 0) {

    header('Location: listar.php');
    exit;
}

/*
|--------------------------------------------------------------------------
| Eliminar detalles de ventas asociados
|--------------------------------------------------------------------------
|
| Esto evita problemas futuros cuando existan ventas
| relacionadas con el cliente.
|
*/

$stmt = $db->prepare("
    DELETE FROM detalle_ventas
    WHERE venta_id IN (
        SELECT id
        FROM ventas
        WHERE cliente_id = :cliente_id
    )
");

$stmt->execute([
    ':cliente_id' => $id
]);

/*
|--------------------------------------------------------------------------
| Eliminar ventas del cliente
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    DELETE FROM ventas
    WHERE cliente_id = :cliente_id
");

$stmt->execute([
    ':cliente_id' => $id
]);

/*
|--------------------------------------------------------------------------
| Eliminar cliente
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    DELETE FROM clientes
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

header('Location: listar.php');
exit;