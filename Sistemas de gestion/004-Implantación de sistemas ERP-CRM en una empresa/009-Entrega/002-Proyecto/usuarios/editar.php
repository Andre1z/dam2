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
    die('Usuario no encontrado.');
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nuevoRol =
        trim($_POST['rol'] ?? 'usuario');

    $nuevaPassword =
        trim($_POST['password'] ?? '');

    if (!empty($nuevaPassword)) {

        $stmt = $db->prepare("
            UPDATE usuarios
            SET
                password = :password,
                rol = :rol
            WHERE id = :id
        ");

        $stmt->execute([
            ':password' => password_hash(
                $nuevaPassword,
                PASSWORD_DEFAULT
            ),
            ':rol' => $nuevoRol,
            ':id' => $id
        ]);

    } else {

        $stmt = $db->prepare("
            UPDATE usuarios
            SET
                rol = :rol
            WHERE id = :id
        ");

        $stmt->execute([
            ':rol' => $nuevoRol,
            ':id' => $id
        ]);
    }

    header('Location: listar.php');
    exit;
}

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Editar Usuario
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/usuarios_editar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Editar Usuario
    </h1>

    <form
        method="POST"
        id="formEditarUsuario"
    >

        <div class="grupo">

            <label>
                Usuario
            </label>

            <input
                type="text"
                value="<?= htmlspecialchars($usuario['usuario']) ?>"
                readonly
            >

        </div>

        <div class="grupo">

            <label for="password">
                Nueva Contraseña
            </label>

            <input
                type="password"
                id="password"
                name="password"
                placeholder="Dejar vacío para mantener la actual"
            >

        </div>

        <div class="grupo">

            <label for="rol">
                Rol
            </label>

            <select
                id="rol"
                name="rol"
            >

                <option
                    value="usuario"
                    <?= $usuario['rol'] === 'usuario' ? 'selected' : '' ?>
                >
                    Usuario
                </option>

                <option
                    value="admin"
                    <?= $usuario['rol'] === 'admin' ? 'selected' : '' ?>
                >
                    Administrador
                </option>

            </select>

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Actualizar Usuario
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/usuarios_editar.js"></script>

</body>
</html>