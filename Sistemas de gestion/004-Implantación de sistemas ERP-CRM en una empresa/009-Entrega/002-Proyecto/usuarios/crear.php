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

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $usuario = trim($_POST['usuario'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $rol = trim($_POST['rol'] ?? 'usuario');

    if (
        empty($usuario) ||
        empty($password)
    ) {

        $error = 'Todos los campos son obligatorios.';

    } else {

        $stmt = $db->prepare("
            SELECT COUNT(*)
            FROM usuarios
            WHERE usuario = :usuario
        ");

        $stmt->execute([
            ':usuario' => $usuario
        ]);

        if ($stmt->fetchColumn() > 0) {

            $error = 'El usuario ya existe.';

        } else {

            $stmt = $db->prepare("
                INSERT INTO usuarios
                (
                    usuario,
                    password,
                    rol
                )
                VALUES
                (
                    :usuario,
                    :password,
                    :rol
                )
            ");

            $stmt->execute([
                ':usuario' => $usuario,
                ':password' => password_hash(
                    $password,
                    PASSWORD_DEFAULT
                ),
                ':rol' => $rol
            ]);

            header('Location: listar.php');
            exit;
        }
    }
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
        Nuevo Usuario
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/usuarios_crear.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Nuevo Usuario
    </h1>

    <?php if(!empty($error)): ?>

        <div class="error">

            <?= htmlspecialchars($error) ?>

        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formUsuario"
    >

        <div class="grupo">

            <label for="usuario">
                Usuario
            </label>

            <input
                type="text"
                id="usuario"
                name="usuario"
                required
            >

        </div>

        <div class="grupo">

            <label for="password">
                Contraseña
            </label>

            <input
                type="password"
                id="password"
                name="password"
                required
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

                <option value="usuario">
                    Usuario
                </option>

                <option value="admin">
                    Administrador
                </option>

            </select>

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Crear Usuario
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/usuarios_crear.js"></script>

</body>
</html>