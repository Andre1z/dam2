<?php

require_once __DIR__ . '/../includes/conexion.php';

require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $descripcion = trim($_POST['descripcion'] ?? '');
    $precio = floatval($_POST['precio'] ?? 0);
    $stock = intval($_POST['stock'] ?? 0);

    if (!empty($nombre) && $precio >= 0) {

        $consulta = $db->prepare("
            INSERT INTO productos (
                nombre,
                descripcion,
                precio,
                stock
            )
            VALUES (
                ?,
                ?,
                ?,
                ?
            )
        ");

        $consulta->execute([
            $nombre,
            $descripcion,
            $precio,
            $stock
        ]);

        $operacion = $db->prepare("
            INSERT INTO operaciones (
                accion,
                resultado
            )
            VALUES (
                ?,
                ?
            )
        ");

        $operacion->execute([
            'Alta de producto',
            'Correcta'
        ]);

        $mensaje = 'Producto registrado correctamente.';
    }
}

$productos = $db->query("
    SELECT *
    FROM productos
    ORDER BY id DESC
")->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Gestión de Productos</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Gestión de Productos
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Nuevo Producto
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">
                <?= htmlspecialchars($mensaje) ?>
            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="nombre">
                Nombre del producto
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >

            <label for="descripcion">
                Descripción
            </label>

            <textarea
                id="descripcion"
                name="descripcion"
                rows="4"
            ></textarea>

            <label for="precio">
                Precio (€)
            </label>

            <input
                type="number"
                id="precio"
                name="precio"
                step="0.01"
                min="0"
                required
            >

            <label for="stock">
                Stock
            </label>

            <input
                type="number"
                id="stock"
                name="stock"
                min="0"
                required
            >

            <button type="submit">
                Guardar producto
            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Catálogo de Productos
        </h2>

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($productos) > 0) : ?>

                    <?php foreach ($productos as $producto) : ?>

                        <tr>

                            <td>
                                <?= $producto['id']; ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $producto['nombre']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $producto['descripcion']
                                ); ?>
                            </td>

                            <td>
                                <?= number_format(
                                    $producto['precio'],
                                    2,
                                    ',',
                                    '.'
                                ); ?> €
                            </td>

                            <td>
                                <?= $producto['stock']; ?>
                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="5">

                            No existen productos registrados.

                        </td>

                    </tr>

                <?php endif; ?>

            </tbody>

        </table>

    </section>

    <p style="margin-top:20px;">

        <a
            href="../index.php"
            class="boton"
        >
            Volver al Dashboard
        </a>

    </p>

</main>

</body>

</html>