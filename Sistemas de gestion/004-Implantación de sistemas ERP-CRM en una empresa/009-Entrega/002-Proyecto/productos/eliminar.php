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
| Verificar si el producto está siendo usado en ventas
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    SELECT COUNT(*)
    FROM detalle_ventas
    WHERE producto_id = :id
");

$stmt->execute([
    ':id' => $id
]);

$ventasAsociadas = $stmt->fetchColumn();

if ($ventasAsociadas > 0) {

    die(
        'No se puede eliminar el producto porque está asociado a una o más ventas.'
    );
}

/*
|--------------------------------------------------------------------------
| Eliminar producto
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    DELETE FROM productos
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

header('Location: listar.php');
exit;