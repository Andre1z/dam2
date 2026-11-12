<?php

session_start();

if (!isset($_SESSION['id_usuario'])) {
    header('Location: modulos/login.php');
    exit;
}

require_once __DIR__ . '/includes/conexion.php';

/*
|--------------------------------------------------------------------------
| ESTADÍSTICAS GENERALES
|--------------------------------------------------------------------------
*/

$totalModulos = $db->query("
    SELECT COUNT(*)
    FROM modulos
")->fetchColumn();

$modulosInstalados = $db->query("
    SELECT COUNT(*)
    FROM modulos
    WHERE instalado = 1
")->fetchColumn();

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$totalPedidos = $db->query("
    SELECT COUNT(*)
    FROM pedidos
")->fetchColumn();

$totalFacturas = $db->query("
    SELECT COUNT(*)
    FROM facturas
")->fetchColumn();

$totalUsuarios = $db->query("
    SELECT COUNT(*)
    FROM usuarios
")->fetchColumn();

$totalIncidencias = $db->query("
    SELECT COUNT(*)
    FROM incidencias
")->fetchColumn();

$totalFacturacion = $db->query("
    SELECT IFNULL(SUM(importe), 0)
    FROM facturas
")->fetchColumn();

/*
|--------------------------------------------------------------------------
| ÚLTIMAS OPERACIONES
|--------------------------------------------------------------------------
*/

$ultimasOperaciones = $db->query("
    SELECT *
    FROM operaciones
    ORDER BY fecha DESC
    LIMIT 10
")->fetchAll();

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
        ERP CRM - Dashboard
    </title>

    <link
        rel="stylesheet"
        href="assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        ERP CRM - Gestión Empresarial
    </h1>

</header>

<div class="exito">

    Usuario conectado:

    <strong>

        <?= htmlspecialchars(
            $_SESSION['nombre_usuario']
        ); ?>

    </strong>

    (<?= htmlspecialchars(
        $_SESSION['rol_usuario']
    ); ?>)

</div>

<main class="contenedor">

    <section class="tarjetas">

        <article class="tarjeta">

            <h2>
                Módulos
            </h2>

            <span>

                <?= $totalModulos ?>

            </span>

        </article>

        <article class="tarjeta">

            <h2>
                Módulos Activos
            </h2>

            <span>

                <?= $modulosInstalados ?>

            </span>

        </article>

        <article class="tarjeta">

            <h2>
                Clientes
            </h2>

            <span>

                <?= $totalClientes ?>

            </span>

        </article>

        <article class="tarjeta">

            <h2>
                Productos
            </h2>

            <span>

                <?= $totalProductos ?>

            </span>

        </article>

        <article class="tarjeta">

            <h2>
                Pedidos
            </h2>

            <span>

                <?= $totalPedidos ?>

            </span>

        </article>

        <article class="tarjeta">

            <h2>
                Facturas
            </h2>

            <span>

                <?= $totalFacturas ?>

            </span>

        </article>

        <article class="tarjeta">

            <h2>
                Usuarios
            </h2>

            <span>

                <?= $totalUsuarios ?>

            </span>

        </article>

        <article class="tarjeta">

            <h2>
                Incidencias
            </h2>

            <span>

                <?= $totalIncidencias ?>

            </span>

        </article>

    </section>

    <section class="operaciones">

        <h2>
            Resumen Económico
        </h2>

        <table>

            <tbody>

                <tr>

                    <th>
                        Facturación Total
                    </th>

                    <td>

                        <?= number_format(
                            $totalFacturacion,
                            2,
                            ',',
                            '.'
                        ) ?> €

                    </td>

                </tr>

                <tr>

                    <th>
                        Clientes Registrados
                    </th>

                    <td>

                        <?= $totalClientes ?>

                    </td>

                </tr>

                <tr>

                    <th>
                        Productos Registrados
                    </th>

                    <td>

                        <?= $totalProductos ?>

                    </td>

                </tr>

                <tr>

                    <th>
                        Pedidos Registrados
                    </th>

                    <td>

                        <?= $totalPedidos ?>

                    </td>

                </tr>

                <tr>

                    <th>
                        Facturas Emitidas
                    </th>

                    <td>

                        <?= $totalFacturas ?>

                    </td>

                </tr>

            </tbody>

        </table>

    </section>

    <section class="menu-principal">

        <h2>
            Acceso Rápido
        </h2>

        <div class="grid-menu">

            <a
                href="modulos/instalador.php"
                class="boton"
            >
                ⚙️ Instalador
            </a>

            <a
                href="modulos/clientes.php"
                class="boton"
            >
                👥 Clientes
            </a>

            <a
                href="modulos/productos.php"
                class="boton"
            >
                📦 Productos
            </a>

            <a
                href="modulos/pedidos.php"
                class="boton"
            >
                🛒 Pedidos
            </a>

            <a
                href="modulos/facturas.php"
                class="boton"
            >
                🧾 Facturación
            </a>

            <a
                href="modulos/usuarios.php"
                class="boton"
            >
                👤 Usuarios
            </a>

            <a
                href="modulos/configuracion.php"
                class="boton"
            >
                🔧 Configuración
            </a>

            <a
                href="modulos/diagnostico.php"
                class="boton"
            >
                ✅ Diagnóstico
            </a>

            <a
                href="modulos/incidencias.php"
                class="boton"
            >
                🚨 Incidencias
            </a>

            <a
                href="modulos/informes.php"
                class="boton"
            >
                📊 Informes
            </a>

        </div>

    </section>

    <section class="operaciones">

        <h2>
            Últimas Operaciones
        </h2>

        <table>

            <thead>

                <tr>

                    <th>
                        Fecha
                    </th>

                    <th>
                        Acción
                    </th>

                    <th>
                        Resultado
                    </th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($ultimasOperaciones) > 0) : ?>

                    <?php foreach ($ultimasOperaciones as $operacion) : ?>

                        <tr>

                            <td>

                                <?= htmlspecialchars(
                                    $operacion['fecha']
                                ) ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $operacion['accion']
                                ) ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $operacion['resultado']
                                ) ?>

                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="3">

                            No existen operaciones registradas.

                        </td>

                    </tr>

                <?php endif; ?>

            </tbody>

        </table>

    </section>

</main>

</body>

</html>