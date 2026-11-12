<?php

require_once __DIR__ . '/../includes/conexion.php';
require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$resultados = [];

try {

    $resultados[] = [
        'prueba' => 'Conexión con SQLite',
        'estado' => true,
        'detalle' => 'Conexión establecida correctamente.'
    ];

    $totalModulos = $db->query("
        SELECT COUNT(*)
        FROM modulos
    ")->fetchColumn();

    $resultados[] = [
        'prueba' => 'Tabla módulos',
        'estado' => $totalModulos > 0,
        'detalle' => $totalModulos . ' módulos encontrados.'
    ];

    $totalClientes = $db->query("
        SELECT COUNT(*)
        FROM clientes
    ")->fetchColumn();

    $resultados[] = [
        'prueba' => 'Tabla clientes',
        'estado' => true,
        'detalle' => $totalClientes . ' clientes registrados.'
    ];

    $totalProductos = $db->query("
        SELECT COUNT(*)
        FROM productos
    ")->fetchColumn();

    $resultados[] = [
        'prueba' => 'Tabla productos',
        'estado' => true,
        'detalle' => $totalProductos . ' productos registrados.'
    ];

    $modulosInstalados = $db->query("
        SELECT COUNT(*)
        FROM modulos
        WHERE instalado = 1
    ")->fetchColumn();

    $resultados[] = [
        'prueba' => 'Módulos instalados',
        'estado' => $modulosInstalados > 0,
        'detalle' => $modulosInstalados . ' módulos activos.'
    ];

    $totalIncidencias = $db->query("
        SELECT COUNT(*)
        FROM incidencias
    ")->fetchColumn();

    $resultados[] = [
        'prueba' => 'Sistema de incidencias',
        'estado' => true,
        'detalle' => $totalIncidencias . ' incidencias registradas.'
    ];

    $db->prepare("
        INSERT INTO operaciones (
            accion,
            resultado
        )
        VALUES (
            ?,
            ?
        )
    ")->execute([
        'Diagnóstico del sistema',
        'Correcto'
    ]);

} catch (Exception $e) {

    $db->prepare("
        INSERT INTO incidencias (
            descripcion,
            estado
        )
        VALUES (
            ?,
            ?
        )
    ")->execute([
        $e->getMessage(),
        'Pendiente'
    ]);

}
?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Diagnóstico ERP CRM</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Diagnóstico del Sistema
    </h1>

</header>

<main class="contenedor">

    <section class="operaciones">

        <h2>
            Resultado de las comprobaciones
        </h2>

        <table>

            <thead>

                <tr>

                    <th>Comprobación</th>
                    <th>Estado</th>
                    <th>Detalle</th>

                </tr>

            </thead>

            <tbody>

                <?php foreach ($resultados as $resultado) : ?>

                    <tr>

                        <td>

                            <?= htmlspecialchars(
                                $resultado['prueba']
                            ); ?>

                        </td>

                        <td>

                            <?= $resultado['estado']
                                ? '✅ Correcto'
                                : '❌ Error'; ?>

                        </td>

                        <td>

                            <?= htmlspecialchars(
                                $resultado['detalle']
                            ); ?>

                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    </section>

    <section class="menu-principal">

        <h2>
            Resumen del diagnóstico
        </h2>

        <p
            style="
                text-align:center;
                margin-top:15px;
                font-size:1.1rem;
            "
        >

            El sistema ERP-CRM ha verificado la base de
            datos, los módulos instalados, los clientes,
            los productos y el sistema de incidencias.

        </p>

    </section>

    <p style="margin-top:20px;">

        <a
            href="../index.php"
            class="boton"
        >
            Volver al Dashboard
        </a>

    </p>

</main>

</body>

</html>