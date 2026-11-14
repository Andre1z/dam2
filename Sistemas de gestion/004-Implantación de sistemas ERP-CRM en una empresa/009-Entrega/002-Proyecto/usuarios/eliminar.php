<?php

session_start();

if (
    !isset($_SESSION['usuario']) ||
    ($_SESSION['rol'] ?? '') !== 'admin'
) {
    header('Location: ../index.php');
    exit;
}

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
| Obtener usuario
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    SELECT *
    FROM usuarios
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

$usuario = $stmt->fetch();

if (!$usuario) {

    header('Location: listar.php');
    exit;
}

/*
|--------------------------------------------------------------------------
| Proteger usuario admin
|--------------------------------------------------------------------------
*/

if ($usuario['usuario'] === 'admin') {

    die(
        'El usuario administrador principal no puede eliminarse.'
    );
}

/*
|--------------------------------------------------------------------------
| Eliminar usuario
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    DELETE FROM usuarios
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

header('Location: listar.php');
exit;