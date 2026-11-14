<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$totalVentas = $db->query("
    SELECT COUNT(*)
    FROM ventas
")->fetchColumn();

$facturacion = $db->query("
    SELECT COALESCE(
        SUM(total),
        0
    )
    FROM ventas
")->fetchColumn();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <title>
        Informe ERP-CRM
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/exportar_pdf.css"
    >

</head>

<body>

<div class="informe">

    <header>

        <h1>
            ERP-CRM VentasPro
        </h1>

        <p>
            Informe General del Sistema
        </p>

        <p>
            Fecha:
            <?= date('d/m/Y H:i') ?>
        </p>

    </header>

    <hr>

    <section>

        <h2>
            Resumen General
        </h2>

        <table>

            <tr>
                <td>Total Clientes</td>
                <td><?= $totalClientes ?></td>
            </tr>

            <tr>
                <td>Total Productos</td>
                <td><?= $totalProductos ?></td>
            </tr>

            <tr>
                <td>Total Ventas</td>
                <td><?= $totalVentas ?></td>
            </tr>

            <tr>
                <td>Facturación Total</td>
                <td>
                    <?= number_format(
                        $facturacion,
                        2
                    ) ?>
                    €
                </td>
            </tr>

        </table>

    </section>

    <section>

        <h2>
            Observaciones
        </h2>

        <p>
            Este documento ha sido generado
            automáticamente por el sistema
            ERP-CRM VentasPro.
        </p>

    </section>

    <div class="acciones">

        <button onclick="window.print()">
            Imprimir / Guardar PDF
        </button>

    </div>

</div>

<script src="../assets/js/exportar_pdf.js"></script>

</body>
</html>