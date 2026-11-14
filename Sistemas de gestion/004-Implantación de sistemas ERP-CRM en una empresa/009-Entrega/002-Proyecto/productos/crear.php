<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $precio = trim($_POST['precio'] ?? '');
    $stock = trim($_POST['stock'] ?? '');

    if (empty($nombre)) {

        $error = 'El nombre es obligatorio.';

    } elseif (!is_numeric($precio) || $precio < 0) {

        $error = 'El precio debe ser válido.';

    } elseif (!is_numeric($stock) || $stock < 0) {

        $error = 'El stock debe ser válido.';

    } else {

        $stmt = $db->prepare("
            INSERT INTO productos
            (
                nombre,
                precio,
                stock
            )
            VALUES
            (
                :nombre,
                :precio,
                :stock
            )
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':precio' => $precio,
            ':stock' => $stock
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

    <title>Nuevo Producto</title>

    <link
        rel="stylesheet"
        href="../assets/css/productos_crear.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Nuevo Producto</h1>

    <?php if (!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formProducto"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre del producto
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >

        </div>

        <div class="grupo">

            <label for="precio">
                Precio (€)
            </label>

            <input
                type="number"
                id="precio"
                name="precio"
                min="0"
                step="0.01"
                required
            >

        </div>

        <div class="grupo">

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

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Guardar Producto
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/productos_crear.js"></script>

</body>
</html>