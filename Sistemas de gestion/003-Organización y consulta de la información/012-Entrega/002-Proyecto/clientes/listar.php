<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT *
    FROM clientes
    ORDER BY id DESC
");

$clientes = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Gestión de Clientes</title>

    <link
        rel="stylesheet"
        href="../assets/css/clientes_listar.css"
    >

</head>

<body>

<h1>Gestión de Clientes</h1>

<div class="acciones">

    <a
        href="crear.php"
        class="boton"
    >
        Nuevo Cliente
    </a>

</div>

<?php if(count($clientes) > 0): ?>

<table>

    <thead>

        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
        </tr>

    </thead>

    <tbody>

    <?php foreach($clientes as $cliente): ?>

        <tr>

            <td><?= $cliente['id'] ?></td>

            <td>
                <?= htmlspecialchars($cliente['nombre']) ?>
            </td>

            <td>
                <?= htmlspecialchars($cliente['email']) ?>
            </td>

            <td>
                <?= htmlspecialchars($cliente['telefono']) ?>
            </td>

            <td>

                <a
                    href="editar.php?id=<?= $cliente['id'] ?>"
                    class="editar"
                >
                    Editar
                </a>

                <a
                    href="eliminar.php?id=<?= $cliente['id'] ?>"
                    class="eliminar"
                >
                    Eliminar
                </a>

            </td>

        </tr>

    <?php endforeach; ?>

    </tbody>

</table>

<?php else: ?>

<div class="sin-datos">

    No hay clientes registrados.

</div>

<?php endif; ?>

<a
    href="../index.php"
    class="volver"
>
    Volver al panel principal
</a>

<script src="../assets/js/clientes_listar.js"></script>

</body>
</html>