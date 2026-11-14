<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

/*
|--------------------------------------------------------------------------
| Medición de rendimiento
|--------------------------------------------------------------------------
*/

$inicioClientes = microtime(true);

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$tiempoClientes = microtime(true) - $inicioClientes;

$inicioProductos = microtime(true);

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$tiempoProductos = microtime(true) - $inicioProductos;

$inicioVentas = microtime(true);

$totalVentas = $db->query("
    SELECT COUNT(*)
    FROM ventas
")->fetchColumn();

$tiempoVentas = microtime(true) - $inicioVentas;

$inicioFacturacion = microtime(true);

$facturacionTotal = $db->query("
    SELECT COALESCE(
        SUM(total),
        0
    )
    FROM ventas
")->fetchColumn();

$tiempoFacturacion = microtime(true) - $inicioFacturacion;

$tiempoTotal =
    $tiempoClientes +
    $tiempoProductos +
    $tiempoVentas +
    $tiempoFacturacion;

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
        Rendimiento del Sistema
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/rendimiento.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Rendimiento del Sistema ERP-CRM
    </h1>

    <div class="resumen">

        <p>
            Verificación del rendimiento de las
            consultas principales del sistema.
        </p>

    </div>

    <table>

        <thead>

            <tr>
                <th>Consulta</th>
                <th>Resultado</th>
                <th>Tiempo (segundos)</th>
            </tr>

        </thead>

        <tbody>

            <tr>
                <td>Total Clientes</td>
                <td><?= $totalClientes ?></td>
                <td><?= number_format($tiempoClientes, 6) ?></td>
            </tr>

            <tr>
                <td>Total Productos</td>
                <td><?= $totalProductos ?></td>
                <td><?= number_format($tiempoProductos, 6) ?></td>
            </tr>

            <tr>
                <td>Total Ventas</td>
                <td><?= $totalVentas ?></td>
                <td><?= number_format($tiempoVentas, 6) ?></td>
            </tr>

            <tr>
                <td>Facturación Total</td>
                <td>
                    <?= number_format($facturacionTotal, 2) ?> €
                </td>
                <td><?= number_format($tiempoFacturacion, 6) ?></td>
            </tr>

        </tbody>

    </table>

    <div class="total">

        <h2>
            Tiempo Total de Ejecución
        </h2>

        <p>
            <?= number_format($tiempoTotal, 6) ?>
            segundos
        </p>

    </div>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/rendimiento.js"></script>

</body>
</html>