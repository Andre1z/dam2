<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        strftime('%Y', fecha) AS anio,
        strftime('%m', fecha) AS mes,
        COUNT(*) AS total_ventas,
        SUM(total) AS facturacion
    FROM ventas
    GROUP BY anio, mes
    ORDER BY anio DESC, mes DESC
");

$informes = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Informe de Ventas Mensuales</title>

    <link
        rel="stylesheet"
        href="../assets/css/informes_ventas_mes.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Informe de Ventas Mensuales</h1>

    <?php if(count($informes) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>Año</th>
                    <th>Mes</th>
                    <th>Nº Ventas</th>
                    <th>Facturación (€)</th>
                </tr>

            </thead>

            <tbody>

                <?php foreach($informes as $fila): ?>

                    <tr>

                        <td>
                            <?= $fila['anio'] ?>
                        </td>

                        <td>
                            <?= $fila['mes'] ?>
                        </td>

                        <td>
                            <?= $fila['total_ventas'] ?>
                        </td>

                        <td>
                            <?= number_format(
                                $fila['facturacion'],
                                2
                            ) ?>
                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            Todavía no existen ventas registradas.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/informes_ventas_mes.js"></script>

</body>
</html>