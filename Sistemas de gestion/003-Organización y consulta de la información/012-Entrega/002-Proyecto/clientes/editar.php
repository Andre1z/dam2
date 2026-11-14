<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

$stmt = $db->prepare("
    SELECT *
    FROM clientes
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

$cliente = $stmt->fetch();

if (!$cliente) {
    die('Cliente no encontrado.');
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');

    if (empty($nombre)) {

        $error = 'El nombre es obligatorio.';

    } else {

        $stmt = $db->prepare("
            UPDATE clientes
            SET
                nombre = :nombre,
                email = :email,
                telefono = :telefono
            WHERE id = :id
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':email' => $email,
            ':telefono' => $telefono,
            ':id' => $id
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

    <title>Editar Cliente</title>

    <link
        rel="stylesheet"
        href="../assets/css/clientes_editar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Editar Cliente</h1>

    <?php if(!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formEditarCliente"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                value="<?= htmlspecialchars($cliente['nombre']) ?>"
                required
            >

        </div>

        <div class="grupo">

            <label for="email">
                Correo Electrónico
            </label>

            <input
                type="email"
                id="email"
                name="email"
                value="<?= htmlspecialchars($cliente['email']) ?>"
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
                value="<?= htmlspecialchars($cliente['telefono']) ?>"
            >

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Actualizar Cliente
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/clientes_editar.js"></script>

</body>
</html>