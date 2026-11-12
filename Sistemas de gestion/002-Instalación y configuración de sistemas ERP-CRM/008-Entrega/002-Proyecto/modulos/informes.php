<?php

require_once __DIR__ . '/../includes/verificar_sesion.php';
require_once __DIR__ . '/../includes/conexion.php';

/*
|--------------------------------------------------------------------------
| ESTADÍSTICAS
|--------------------------------------------------------------------------
*/

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

$totalIncidencias = $db->query("
    SELECT COUNT(*)
    FROM incidencias
")->fetchColumn();

$totalUsuarios = $db->query("
    SELECT COUNT(*)
    FROM usuarios
")->fetchColumn();

$totalModulosActivos = $db->query("
    SELECT COUNT(*)
    FROM modulos
    WHERE instalado = 1
")->fetchColumn();

$totalFacturacion = $db->query("
    SELECT IFNULL(SUM(importe), 0)
    FROM facturas
")->fetchColumn();

/*
|--------------------------------------------------------------------------
| ÚLTIMAS INCIDENCIAS
|--------------------------------------------------------------------------
*/

$ultimasIncidencias = $db->query("
    SELECT *
    FROM incidencias
    ORDER BY fecha DESC
    LIMIT 5
")->fetchAll();

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
        Informes ERP CRM
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<?php require_once __DIR__ . '/../includes/menu.php'; ?>

<header class="cabecera">

    <h1>
        Informes y Estadísticas
    </h1>

</header>

<main class="contenedor">

    <section class="tarjetas">

        <article class="tarjeta">
            <h2>Clientes</h2>
            <span><?= $totalClientes ?></span>
        </article>

        <article class="tarjeta">
            <h2>Productos</h2>
            <span><?= $totalProductos ?></span>
        </article>

        <article class="tarjeta">
            <h2>Pedidos</h2>
            <span><?= $totalPedidos ?></span>
        </article>

        <article class="tarjeta">
            <h2>Facturas</h2>
            <span><?= $totalFacturas ?></span>
        </article>

        <article class="tarjeta">
            <h2>Usuarios</h2>
            <span><?= $totalUsuarios ?></span>
        </article>

        <article class="tarjeta">
            <h2>Incidencias</h2>
            <span><?= $totalIncidencias ?></span>
        </article>

        <article class="tarjeta">
            <h2>Módulos Activos</h2>
            <span><?= $totalModulosActivos ?></span>
        </article>

        <article class="tarjeta">
            <h2>Facturación</h2>
            <span>
                <?= number_format(
                    $totalFacturacion,
                    0,
                    ',',
                    '.'
                ) ?>€
            </span>
        </article>

    </section>

    <section class="operaciones">

        <h2>
            Resumen General
        </h2>

        <table>

            <tbody>

                <tr>
                    <th>Total Clientes</th>
                    <td><?= $totalClientes ?></td>
                </tr>

                <tr>
                    <th>Total Productos</th>
                    <td><?= $totalProductos ?></td>
                </tr>

                <tr>
                    <th>Total Pedidos</th>
                    <td><?= $totalPedidos ?></td>
                </tr>

                <tr>
                    <th>Total Facturas</th>
                    <td><?= $totalFacturas ?></td>
                </tr>

                <tr>
                    <th>Total Usuarios</th>
                    <td><?= $totalUsuarios ?></td>
                </tr>

                <tr>
                    <th>Total Incidencias</th>
                    <td><?= $totalIncidencias ?></td>
                </tr>

                <tr>
                    <th>Módulos Activos</th>
                    <td><?= $totalModulosActivos ?></td>
                </tr>

                <tr>
                    <th>Facturación Total</th>
                    <td>

                        <?= number_format(
                            $totalFacturacion,
                            2,
                            ',',
                            '.'
                        ) ?>

                        €

                    </td>
                </tr>

            </tbody>

        </table>

    </section>

    <section class="operaciones">

        <h2>
            Últimas Incidencias
        </h2>

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Estado</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($ultimasIncidencias) > 0) : ?>

                    <?php foreach ($ultimasIncidencias as $incidencia) : ?>

                        <tr>

                            <td>
                                <?= $incidencia['id']; ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $incidencia['fecha']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $incidencia['descripcion']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $incidencia['estado']
                                ); ?>
                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="4">

                            No hay incidencias registradas.

                        </td>

                    </tr>

                <?php endif; ?>

            </tbody>

        </table>

    </section>

    <section class="operaciones">

        <h2>
            Últimas Operaciones
        </h2>

        <table>

            <thead>

                <tr>

                    <th>Fecha</th>
                    <th>Acción</th>
                    <th>Resultado</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($ultimasOperaciones) > 0) : ?>

                    <?php foreach ($ultimasOperaciones as $operacion) : ?>

                        <tr>

                            <td>
                                <?= htmlspecialchars(
                                    $operacion['fecha']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $operacion['accion']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $operacion['resultado']
                                ); ?>
                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="3">

                            No hay operaciones registradas.

                        </td>

                    </tr>

                <?php endif; ?>

            </tbody>

        </table>

    </section>

    <section class="menu-principal">

        <h2>
            Exportación de Datos
        </h2>

        <div class="grid-menu">

            <a
                href="exportar_csv.php?tipo=clientes"
                class="boton"
            >
                Exportar Clientes
            </a>

            <a
                href="exportar_csv.php?tipo=productos"
                class="boton"
            >
                Exportar Productos
            </a>

            <a
                href="exportar_csv.php?tipo=pedidos"
                class="boton"
            >
                Exportar Pedidos
            </a>

            <a
                href="exportar_csv.php?tipo=facturas"
                class="boton"
            >
                Exportar Facturas
            </a>

            <a
                href="exportar_csv.php?tipo=incidencias"
                class="boton"
            >
                Exportar Incidencias
            </a>

        </div>

    </section>

    <div
        style="
            display:flex;
            justify-content:center;
            margin-top:20px;
        "
    >

        <a
            href="../index.php"
            class="boton"
        >
            Volver al Dashboard
        </a>

    </div>

</main>

</body>

</html>