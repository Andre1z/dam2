<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id'])
    ? (int) $_GET['id']
    : 0;

$stmt = $db->prepare("
    SELECT
        ventas.id,
        ventas.fecha,
        ventas.total,
        clientes.nombre AS cliente
    FROM ventas
    INNER JOIN clientes
        ON ventas.cliente_id = clientes.id
    WHERE ventas.id = :id
");

$stmt->execute([
    ':id' => $id
]);

$venta = $stmt->fetch();

if (!$venta) {
    die('Venta no encontrada.');
}

$stmt = $db->prepare("
    SELECT
        detalle_ventas.cantidad,
        detalle_ventas.precio,
        productos.nombre
    FROM detalle_ventas
    INNER JOIN productos
        ON detalle_ventas.producto_id = productos.id
    WHERE detalle_ventas.venta_id = :venta_id
");

$stmt->execute([
    ':venta_id' => $id
]);

$detalles = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Detalle de Venta</title>

    <link
        rel="stylesheet"
        href="../assets/css/ventas_detalle.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Detalle de Venta #<?= $venta['id'] ?></h1>

    <div class="cabecera">

        <p>
            <strong>Cliente:</strong>
            <?= htmlspecialchars($venta['cliente']) ?>
        </p>

        <p>
            <strong>Fecha:</strong>
            <?= htmlspecialchars($venta['fecha']) ?>
        </p>

        <p>
            <strong>Total:</strong>
            <?= number_format($venta['total'], 2) ?> €
        </p>

    </div>

    <table>

        <thead>

            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
            </tr>

        </thead>

        <tbody>

        <?php foreach ($detalles as $detalle): ?>

            <tr>

                <td>
                    <?= htmlspecialchars($detalle['nombre']) ?>
                </td>

                <td>
                    <?= $detalle['cantidad'] ?>
                </td>

                <td>
                    <?= number_format($detalle['precio'], 2) ?> €
                </td>

                <td>
                    <?= number_format(
                        $detalle['cantidad'] * $detalle['precio'],
                        2
                    ) ?>
                    €
                </td>

            </tr>

        <?php endforeach; ?>

        </tbody>

    </table>

    <a
        href="listar.php"
        class="volver"
    >
        Volver a ventas
    </a>

</div>

<script src="../assets/js/ventas_detalle.js"></script>

</body>
</html>