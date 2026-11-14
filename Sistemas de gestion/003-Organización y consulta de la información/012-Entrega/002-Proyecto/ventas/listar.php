<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        ventas.id,
        ventas.fecha,
        ventas.total,
        clientes.nombre AS cliente
    FROM ventas
    INNER JOIN clientes
        ON ventas.cliente_id = clientes.id
    ORDER BY ventas.id DESC
");

$ventas = $stmt->fetchAll();

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
        Gestión de Ventas
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/ventas_listar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Gestión de Ventas
    </h1>

    <div class="acciones">

        <a
            href="nueva.php"
            class="boton"
        >
            Nueva Venta
        </a>

        <a
            href="../exportaciones/exportar_ventas.php"
            class="boton exportar"
        >
            Exportar CSV
        </a>

        <a
            href="../exportaciones/exportar_pdf.php"
            class="boton pdf"
        >
            Informe PDF
        </a>

    </div>

    <?php if(count($ventas) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Total (€)</th>
                    <th>Acciones</th>
                </tr>

            </thead>

            <tbody>

                <?php foreach($ventas as $venta): ?>

                    <tr>

                        <td>
                            <?= $venta['id'] ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($venta['cliente']) ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($venta['fecha']) ?>
                        </td>

                        <td>
                            <?= number_format(
                                $venta['total'],
                                2
                            ) ?>
                        </td>

                        <td>

                            <a
                                href="detalle.php?id=<?= $venta['id'] ?>"
                                class="detalle"
                            >
                                Ver Detalle
                            </a>

                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            No hay ventas registradas.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/ventas_listar.js"></script>

</body>
</html>