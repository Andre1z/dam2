<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        productos.id,
        productos.nombre,
        COALESCE(SUM(detalle_ventas.cantidad), 0) AS unidades_vendidas,
        COALESCE(
            SUM(
                detalle_ventas.cantidad *
                detalle_ventas.precio
            ),
            0
        ) AS ingresos_generados
    FROM productos
    LEFT JOIN detalle_ventas
        ON productos.id = detalle_ventas.producto_id
    GROUP BY productos.id, productos.nombre
    ORDER BY unidades_vendidas DESC
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

    <title>Productos Más Vendidos</title>

    <link
        rel="stylesheet"
        href="../assets/css/informes_productos_vendidos.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Productos Más Vendidos</h1>

    <?php if(count($productos) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>Posición</th>
                    <th>Producto</th>
                    <th>Unidades Vendidas</th>
                    <th>Ingresos Generados (€)</th>
                </tr>

            </thead>

            <tbody>

                <?php
                $posicion = 1;

                foreach($productos as $producto):
                ?>

                <tr>

                    <td>
                        <?= $posicion++ ?>
                    </td>

                    <td>
                        <?= htmlspecialchars($producto['nombre']) ?>
                    </td>

                    <td>
                        <?= $producto['unidades_vendidas'] ?>
                    </td>

                    <td>
                        <?= number_format(
                            $producto['ingresos_generados'],
                            2
                        ) ?>
                    </td>

                </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            No existen datos para generar el informe.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/informes_productos_vendidos.js"></script>

</body>
</html>