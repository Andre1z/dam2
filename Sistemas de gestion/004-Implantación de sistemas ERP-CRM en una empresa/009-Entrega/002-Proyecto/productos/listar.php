<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT *
    FROM productos
    ORDER BY id DESC
");

$productos = $stmt->fetchAll();

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
        Gestión de Productos
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/productos_listar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Gestión de Productos
    </h1>

    <div class="acciones">

        <a
            href="crear.php"
            class="boton"
        >
            Nuevo Producto
        </a>

    </div>

    <?php if(count($productos) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio (€)</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>

            </thead>

            <tbody>

                <?php foreach($productos as $producto): ?>

                    <tr>

                        <td>
                            <?= $producto['id'] ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($producto['nombre']) ?>
                        </td>

                        <td>
                            <?= number_format(
                                $producto['precio'],
                                2
                            ) ?>
                        </td>

                        <td>
                            <?= $producto['stock'] ?>
                        </td>

                        <td>

                            <a
                                href="editar.php?id=<?= $producto['id'] ?>"
                                class="editar"
                            >
                                Editar
                            </a>

                            <a
                                href="eliminar.php?id=<?= $producto['id'] ?>"
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

            No hay productos registrados.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/productos_listar.js"></script>

</body>
</html>