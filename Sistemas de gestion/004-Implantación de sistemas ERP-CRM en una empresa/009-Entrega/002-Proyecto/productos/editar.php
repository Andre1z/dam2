<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id'])
    ? (int) $_GET['id']
    : 0;

$stmt = $db->prepare("
    SELECT *
    FROM productos
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

$producto = $stmt->fetch();

if (!$producto) {
    die('Producto no encontrado.');
}

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
            UPDATE productos
            SET
                nombre = :nombre,
                precio = :precio,
                stock = :stock
            WHERE id = :id
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':precio' => $precio,
            ':stock' => $stock,
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

    <title>Editar Producto</title>

    <link
        rel="stylesheet"
        href="../assets/css/productos_editar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Editar Producto</h1>

    <?php if (!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formEditarProducto"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre del producto
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                value="<?= htmlspecialchars($producto['nombre']) ?>"
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
                step="0.01"
                min="0"
                value="<?= $producto['precio'] ?>"
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
                value="<?= $producto['stock'] ?>"
                required
            >

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Actualizar Producto
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/productos_editar.js"></script>

</body>
</html>