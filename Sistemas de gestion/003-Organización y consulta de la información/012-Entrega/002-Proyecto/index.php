<?php

require_once 'database/conexion.php';

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
    SELECT COALESCE(SUM(total),0)
    FROM ventas
")->fetchColumn();

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>ERP-CRM VentasPro</title>

    <link
        rel="stylesheet"
        href="assets/css/index.css"
    >

</head>

<body>

<header>

    <h1>ERP-CRM VentasPro</h1>

</header>

<nav>

    <a href="index.php">
        Inicio
    </a>

    <a href="clientes/listar.php">
        Clientes
    </a>

    <a href="productos/listar.php">
        Productos
    </a>

    <a href="ventas/listar.php">
        Ventas
    </a>

    <a href="informes/ventas_mes.php">
        Informes
    </a>

</nav>

<main class="contenedor">

    <section class="bienvenida">

        <h2>Panel Principal</h2>

        <p>
            Bienvenido al sistema ERP-CRM VentasPro.
            Desde este panel podrás gestionar clientes,
            productos, ventas e informes.
        </p>

    </section>

    <section class="dashboard">

        <article class="tarjeta">

            <h2>Clientes</h2>

            <div class="numero">
                <?= $totalClientes ?>
            </div>

        </article>

        <article class="tarjeta">

            <h2>Productos</h2>

            <div class="numero">
                <?= $totalProductos ?>
            </div>

        </article>

        <article class="tarjeta">

            <h2>Ventas</h2>

            <div class="numero">
                <?= $totalVentas ?>
            </div>

        </article>

        <article class="tarjeta">

            <h2>Facturación</h2>

            <div class="numero">
                <?= number_format($facturacion, 2) ?> €

            </div>

        </article>

    </section>

</main>

<script src="assets/js/index.js"></script>

</body>
</html>