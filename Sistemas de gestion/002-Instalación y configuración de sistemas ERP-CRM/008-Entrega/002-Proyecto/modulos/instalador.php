<?php

require_once __DIR__ . '/../includes/conexion.php';

require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $tipo = $_POST['tipo_instalacion'] ?? '';

    $db->exec("UPDATE modulos SET instalado = 0");

    $modulos = [];

    switch ($tipo) {

        case 'basica':

            $modulos = [
                'Clientes',
                'Productos'
            ];

            break;

        case 'comercial':

            $modulos = [
                'Clientes',
                'Productos',
                'Pedidos',
                'Facturación',
                'CRM'
            ];

            break;

        case 'completa':

            $modulos = [
                'Clientes',
                'Productos',
                'Pedidos',
                'Facturación',
                'CRM',
                'ERP',
                'Configuración',
                'Diagnóstico',
                'Incidencias'
            ];

            break;
    }

    $actualizar = $db->prepare("
        UPDATE modulos
        SET instalado = 1
        WHERE nombre = ?
    ");

    foreach ($modulos as $modulo) {

        $actualizar->execute([
            $modulo
        ]);

    }

    $registro = $db->prepare("
        INSERT INTO operaciones (
            accion,
            resultado
        )
        VALUES (
            ?,
            ?
        )
    ");

    $registro->execute([
        'Instalación ' . ucfirst($tipo),
        'Correcta'
    ]);

    $mensaje = 'Instalación realizada correctamente.';

}

$consulta = $db->query("
    SELECT *
    FROM modulos
    ORDER BY nombre
");

$modulosSistema = $consulta->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Instalador ERP CRM</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Instalador ERP CRM
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Tipos de instalación
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">

                <?= htmlspecialchars($mensaje) ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="tipo_instalacion">
                Seleccione una instalación
            </label>

            <select
                id="tipo_instalacion"
                name="tipo_instalacion"
                required
            >

                <option value="">
                    Seleccione una opción
                </option>

                <option value="basica">
                    Instalación Básica
                </option>

                <option value="comercial">
                    Instalación Comercial
                </option>

                <option value="completa">
                    Instalación Completa
                </option>

            </select>

            <button type="submit">
                Instalar
            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Módulos del sistema
        </h2>

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Módulo</th>
                    <th>Descripción</th>
                    <th>Instalado</th>

                </tr>

            </thead>

            <tbody>

                <?php foreach ($modulosSistema as $modulo) : ?>

                    <tr>

                        <td>

                            <?= $modulo['id']; ?>

                        </td>

                        <td>

                            <?= htmlspecialchars(
                                $modulo['nombre']
                            ); ?>

                        </td>

                        <td>

                            <?= htmlspecialchars(
                                $modulo['descripcion']
                            ); ?>

                        </td>

                        <td>

                            <?= $modulo['instalado']
                                ? '✅ Sí'
                                : '❌ No'; ?>

                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    </section>

    <section class="menu-principal">

        <h2>
            Escenarios predefinidos
        </h2>

        <ul style="padding-left:20px; line-height:2;">

            <li>
                <strong>Tienda Local:</strong>
                Clientes, Productos y Pedidos.
            </li>

            <li>
                <strong>Empresa Comercial:</strong>
                CRM, Facturación y Gestión Comercial.
            </li>

            <li>
                <strong>Gran Empresa:</strong>
                ERP-CRM completo.
            </li>

        </ul>

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