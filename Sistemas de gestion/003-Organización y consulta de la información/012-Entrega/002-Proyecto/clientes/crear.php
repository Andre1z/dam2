<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');

    if (empty($nombre)) {

        $error = 'El nombre es obligatorio';

    } else {

        $stmt = $db->prepare("
            INSERT INTO clientes
            (
                nombre,
                email,
                telefono
            )
            VALUES
            (
                :nombre,
                :email,
                :telefono
            )
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':email' => $email,
            ':telefono' => $telefono
        ]);

        header('Location: listar.php');
        exit;
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

    <title>Nuevo Cliente</title>

    <link
        rel="stylesheet"
        href="../assets/css/clientes_crear.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Nuevo Cliente</h1>

    <?php if(!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formCliente"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >

        </div>

        <div class="grupo">

            <label for="email">
                Correo electrónico
            </label>

            <input
                type="email"
                id="email"
                name="email"
            >

        </div>

        <div class="grupo">

            <label for="telefono">
                Teléfono
            </label>

            <input
                type="text"
                id="telefono"
                name="telefono"
            >

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Guardar Cliente
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/clientes_crear.js"></script>

</body>
</html>