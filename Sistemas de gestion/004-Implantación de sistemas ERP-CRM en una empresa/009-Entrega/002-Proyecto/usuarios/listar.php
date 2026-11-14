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

$stmt = $db->query("
    SELECT *
    FROM usuarios
    ORDER BY id DESC
");

$usuarios = $stmt->fetchAll();

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
Usuarios
</title>

<link
    rel="stylesheet"
    href="../assets/css/usuarios_listar.css"
>

</head>

<body>

<div class="contenedor">

    <h1>
        Gestión de Usuarios
    </h1>

    <div class="acciones">

        <a
            href="crear.php"
            class="boton"
        >
            Nuevo Usuario
        </a>

    </div>

    <?php if(count($usuarios) > 0): ?>

    <table>

        <thead>

            <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Acciones</th>
            </tr>

        </thead>

        <tbody>

        <?php foreach($usuarios as $usuario): ?>

            <tr>

                <td>
                    <?= $usuario['id'] ?>
                </td>

                <td>
                    <?= htmlspecialchars(
                        $usuario['usuario']
                    ) ?>
                </td>

                <td>
                    <?= htmlspecialchars(
                        $usuario['rol']
                    ) ?>
                </td>

                <td>

                    <a
                        href="editar.php?id=<?= $usuario['id'] ?>"
                        class="editar"
                    >
                        Editar
                    </a>

                    <?php if(
                        $usuario['usuario'] !== 'admin'
                    ): ?>

                    <a
                        href="eliminar.php?id=<?= $usuario['id'] ?>"
                        class="eliminar"
                    >
                        Eliminar
                    </a>

                    <?php endif; ?>

                </td>

            </tr>

        <?php endforeach; ?>

        </tbody>

    </table>

    <?php else: ?>

        <div class="sin-datos">

            No existen usuarios registrados.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al inicio
    </a>

</div>

<script src="../assets/js/usuarios_listar.js"></script>

</body>
</html>