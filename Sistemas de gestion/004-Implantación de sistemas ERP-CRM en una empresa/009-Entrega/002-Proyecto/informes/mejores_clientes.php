<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        clientes.id,
        clientes.nombre,
        COUNT(ventas.id) AS numero_ventas,
        COALESCE(SUM(ventas.total), 0) AS facturacion_total
    FROM clientes
    LEFT JOIN ventas
        ON clientes.id = ventas.cliente_id
    GROUP BY clientes.id, clientes.nombre
    ORDER BY facturacion_total DESC
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

    <title>Mejores Clientes</title>

    <link
        rel="stylesheet"
        href="../assets/css/informes_mejores_clientes.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Ranking de Clientes</h1>

    <?php if(count($clientes) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>Posición</th>
                    <th>Cliente</th>
                    <th>Nº Ventas</th>
                    <th>Facturación Total (€)</th>
                </tr>

            </thead>

            <tbody>

                <?php
                $posicion = 1;

                foreach($clientes as $cliente):
                ?>

                <tr>

                    <td>
                        <?= $posicion++ ?>
                    </td>

                    <td>
                        <?= htmlspecialchars($cliente['nombre']) ?>
                    </td>

                    <td>
                        <?= $cliente['numero_ventas'] ?>
                    </td>

                    <td>
                        <?= number_format(
                            $cliente['facturacion_total'],
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

<script src="../assets/js/informes_mejores_clientes.js"></script>

</body>
</html>