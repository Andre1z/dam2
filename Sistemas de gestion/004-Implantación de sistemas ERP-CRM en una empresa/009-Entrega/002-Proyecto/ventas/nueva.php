<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$clientes = $db->query("
    SELECT *
    FROM clientes
    ORDER BY nombre
")->fetchAll();

$productos = $db->query("
    SELECT *
    FROM productos
    WHERE stock > 0
    ORDER BY nombre
")->fetchAll();

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $clienteId = (int) ($_POST['cliente_id'] ?? 0);
    $productoId = (int) ($_POST['producto_id'] ?? 0);
    $cantidad = (int) ($_POST['cantidad'] ?? 0);

    if ($clienteId <= 0 || $productoId <= 0 || $cantidad <= 0) {

        $error = 'Todos los campos son obligatorios.';

    } else {

        $stmt = $db->prepare("
            SELECT *
            FROM productos
            WHERE id = :id
        ");

        $stmt->execute([
            ':id' => $productoId
        ]);

        $producto = $stmt->fetch();

        if (!$producto) {

            $error = 'Producto no encontrado.';

        } elseif ($producto['stock'] < $cantidad) {

            $error = 'Stock insuficiente.';

        } else {

            $precioUnitario = $producto['precio'];

            $total =
                $precioUnitario * $cantidad;

            $db->beginTransaction();

            try {

                $stmt = $db->prepare("
                    INSERT INTO ventas
                    (
                        cliente_id,
                        fecha,
                        total
                    )
                    VALUES
                    (
                        :cliente_id,
                        :fecha,
                        :total
                    )
                ");

                $stmt->execute([
                    ':cliente_id' => $clienteId,
                    ':fecha' => date('Y-m-d'),
                    ':total' => $total
                ]);

                $ventaId = $db->lastInsertId();

                $stmt = $db->prepare("
                    INSERT INTO detalle_ventas
                    (
                        venta_id,
                        producto_id,
                        cantidad,
                        precio
                    )
                    VALUES
                    (
                        :venta_id,
                        :producto_id,
                        :cantidad,
                        :precio
                    )
                ");

                $stmt->execute([
                    ':venta_id' => $ventaId,
                    ':producto_id' => $productoId,
                    ':cantidad' => $cantidad,
                    ':precio' => $precioUnitario
                ]);

                $stmt = $db->prepare("
                    UPDATE productos
                    SET stock = stock - :cantidad
                    WHERE id = :id
                ");

                $stmt->execute([
                    ':cantidad' => $cantidad,
                    ':id' => $productoId
                ]);

                $db->commit();

                header('Location: listar.php');
                exit;

            } catch (Exception $e) {

                $db->rollBack();

                $error =
                    'Se produjo un error al registrar la venta.';
            }
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

    <title>Nueva Venta</title>

    <link
        rel="stylesheet"
        href="../assets/css/ventas_nueva.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Nueva Venta</h1>

    <?php if (!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formVenta"
    >

        <div class="grupo">

            <label for="cliente_id">
                Cliente
            </label>

            <select
                name="cliente_id"
                id="cliente_id"
                required
            >

                <option value="">
                    Seleccione un cliente
                </option>

                <?php foreach ($clientes as $cliente): ?>

                    <option value="<?= $cliente['id'] ?>">
                        <?= htmlspecialchars($cliente['nombre']) ?>
                    </option>

                <?php endforeach; ?>

            </select>

        </div>

        <div class="grupo">

            <label for="producto_id">
                Producto
            </label>

            <select
                name="producto_id"
                id="producto_id"
                required
            >

                <option value="">
                    Seleccione un producto
                </option>

                <?php foreach ($productos as $producto): ?>

                    <option
                        value="<?= $producto['id'] ?>"
                        data-precio="<?= $producto['precio'] ?>"
                        data-stock="<?= $producto['stock'] ?>"
                    >
                        <?= htmlspecialchars($producto['nombre']) ?>
                        (Stock: <?= $producto['stock'] ?>)
                    </option>

                <?php endforeach; ?>

            </select>

        </div>

        <div class="grupo">

            <label for="cantidad">
                Cantidad
            </label>

            <input
                type="number"
                id="cantidad"
                name="cantidad"
                min="1"
                value="1"
                required
            >

        </div>

        <div class="grupo">

            <label>
                Total estimado
            </label>

            <div id="totalVista">
                0.00 €
            </div>

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Registrar Venta
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/ventas_nueva.js"></script>

</body>
</html>