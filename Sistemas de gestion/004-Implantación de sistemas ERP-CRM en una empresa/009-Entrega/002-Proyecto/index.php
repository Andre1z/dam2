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

    <title>ERP-CRM VentasPro</title>

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

        <div class="usuario-info">

            <p>
                Usuario:
                <strong>
                    <?= htmlspecialchars($_SESSION['usuario']) ?>
                </strong>
            </p>

            <p>
                Rol:
                <strong>
                    <?= htmlspecialchars($_SESSION['rol']) ?>
                </strong>
            </p>

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

    <a href="importaciones/importar_clientes.php">
        Importaciones
    </a>

</nav>

<div class="contenedor">

    <section class="bienvenida">

        <h2>
            Panel Principal
        </h2>

        <p>
            Bienvenido a ERP-CRM VentasPro.
            Desde este panel podrá gestionar clientes,
            productos, ventas, informes, exportaciones,
            importaciones y procesos automáticos.
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
                ) ?> €
            </div>

        </article>

    </section>

    <section class="modulos">

        <div class="modulo">

            <h3>
                Clientes
            </h3>

            <p>
                Administración completa de clientes.
            </p>

            <a href="clientes/listar.php">
                Abrir módulo
            </a>

        </div>

        <div class="modulo">

            <h3>
                Productos
            </h3>

            <p>
                Gestión de catálogo y stock.
            </p>

            <a href="productos/listar.php">
                Abrir módulo
            </a>

        </div>

        <div class="modulo">

            <h3>
                Ventas
            </h3>

            <p>
                Registro y consulta de ventas.
            </p>

            <a href="ventas/listar.php">
                Abrir módulo
            </a>

        </div>

        <div class="modulo">

            <h3>
                Informes
            </h3>

            <p>
                Estadísticas y análisis empresarial.
            </p>

            <a href="informes/index.php">
                Abrir módulo
            </a>

        </div>

        <div class="modulo">

            <h3>
                Exportaciones
            </h3>

            <p>
                Exportar datos en CSV y PDF.
            </p>

            <a href="exportaciones/index.php">
                Abrir módulo
            </a>

        </div>

        <div class="modulo">

            <h3>
                Importaciones
            </h3>

            <p>
                Importar clientes desde archivos CSV.
            </p>

            <a href="importaciones/importar_clientes.php">
                Abrir módulo
            </a>

        </div>

        <div class="modulo">

            <h3>
                Copias de Seguridad
            </h3>

            <p>
                Generar backup de la base de datos.
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
                Verificación del rendimiento del sistema.
            </p>

            <a href="informes/rendimiento.php">
                Ver informe
            </a>

        </div>

        <?php if ($_SESSION['rol'] === 'admin'): ?>

        <div class="modulo">

            <h3>
                Usuarios
            </h3>

            <p>
                Gestión de usuarios y permisos.
            </p>

            <a href="usuarios/listar.php">
                Administrar
            </a>

        </div>

        <?php endif; ?>

    </section>

</div>

<footer>

    ERP-CRM VentasPro © <?= date('Y') ?>

</footer>

<script src="assets/js/index.js"></script>

</body>
</html>