<?php

session_start();

if (!isset($_SESSION['usuario'])) {

    header('Location: login.php');
    exit;
}

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

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        ERP-CRM VentasPro
    </title>

    <link
        rel="stylesheet"
        href="assets/css/index.css"
    >

</head>

<body>

<header>

    <div class="header-top">

        <div>

            <h1>
                ERP-CRM VentasPro
            </h1>

            <p>
                Sistema de Gestión Empresarial
            </p>

        </div>

        <div>

            <span>
                Usuario:
                <strong>
                    <?= htmlspecialchars($_SESSION['usuario']) ?>
                </strong>
            </span>

            <a
                href="logout.php"
                class="logout-btn"
            >
                Cerrar Sesión
            </a>

        </div>

    </div>

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

    <a href="informes/index.php">
        Informes
    </a>

    <a href="exportaciones/index.php">
        Exportaciones
    </a>

</nav>

<div class="contenedor">

    <section class="bienvenida">

        <h2>
            Panel Principal
        </h2>

        <p>
            Bienvenido al ERP-CRM VentasPro.
            Desde este panel podrás gestionar clientes,
            productos, ventas, informes,
            exportaciones y procesos automáticos.
        </p>

    </section>

    <section class="dashboard">

        <article class="tarjeta clientes">

            <h2>
                Clientes
            </h2>

            <div class="numero">
                <?= $totalClientes ?>
            </div>

        </article>

        <article class="tarjeta productos">

            <h2>
                Productos
            </h2>

            <div class="numero">
                <?= $totalProductos ?>
            </div>

        </article>

        <article class="tarjeta ventas">

            <h2>
                Ventas
            </h2>

            <div class="numero">
                <?= $totalVentas ?>
            </div>

        </article>

        <article class="tarjeta facturacion">

            <h2>
                Facturación
            </h2>

            <div class="numero">
                <?= number_format(
                    $facturacion,
                    2
                ) ?>
                €
            </div>

        </article>

    </section>

    <section class="modulos">

        <div class="modulo">

            <h3>
                Clientes
            </h3>

            <p>
                Gestión completa de clientes.
            </p>

            <a href="clientes/listar.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Productos
            </h3>

            <p>
                Gestión de productos y stock.
            </p>

            <a href="productos/listar.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Ventas
            </h3>

            <p>
                Registro y seguimiento de ventas.
            </p>

            <a href="ventas/listar.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Informes
            </h3>

            <p>
                Análisis y estadísticas del negocio.
            </p>

            <a href="informes/index.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Exportaciones
            </h3>

            <p>
                Exportación de información a CSV y PDF.
            </p>

            <a href="exportaciones/index.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Copias de Seguridad
            </h3>

            <p>
                Generación de backups automáticos.
            </p>

            <a href="procesos/respaldo.php">
                Ejecutar
            </a>

        </div>

        <div class="modulo">

            <h3>
                Estadísticas
            </h3>

            <p>
                Actualización automática de métricas.
            </p>

            <a href="procesos/actualizacion_estadisticas.php">
                Ejecutar
            </a>

        </div>

        <div class="modulo">

            <h3>
                Rendimiento
            </h3>

            <p>
                Monitor de rendimiento del sistema.
            </p>

            <a href="informes/rendimiento.php">
                Ver Informe
            </a>

        </div>

    </section>

</div>

<footer>

    ERP-CRM VentasPro © <?= date('Y') ?>

</footer>

<script src="assets/js/index.js"></script>

</body>
</html>