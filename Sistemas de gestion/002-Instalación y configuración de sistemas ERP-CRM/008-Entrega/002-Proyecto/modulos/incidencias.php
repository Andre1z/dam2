<?php

require_once __DIR__ . '/../includes/conexion.php';

require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $descripcion = trim($_POST['descripcion'] ?? '');
    $estado = trim($_POST['estado'] ?? 'Pendiente');

    if (!empty($descripcion)) {

        $consulta = $db->prepare("
            INSERT INTO incidencias (
                descripcion,
                estado
            )
            VALUES (
                ?,
                ?
            )
        ");

        $consulta->execute([
            $descripcion,
            $estado
        ]);

        $operacion = $db->prepare("
            INSERT INTO operaciones (
                accion,
                resultado
            )
            VALUES (
                ?,
                ?
            )
        ");

        $operacion->execute([
            'Registro de incidencia',
            'Correcto'
        ]);

        $mensaje = 'Incidencia registrada correctamente.';
    }
}

$incidencias = $db->query("
    SELECT *
    FROM incidencias
    ORDER BY fecha DESC
")->fetchAll();

$operaciones = $db->query("
    SELECT *
    FROM operaciones
    ORDER BY fecha DESC
    LIMIT 20
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

    <title>Incidencias y Operaciones</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Incidencias y Operaciones
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Registrar Incidencia
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">

                <?= htmlspecialchars($mensaje); ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="descripcion">
                Descripción
            </label>

            <textarea
                id="descripcion"
                name="descripcion"
                rows="5"
                required
            ></textarea>

            <label for="estado">
                Estado
            </label>

            <select
                id="estado"
                name="estado"
            >
                <option value="Pendiente">
                    Pendiente
                </option>

                <option value="En revisión">
                    En revisión
                </option>

                <option value="Resuelta">
                    Resuelta
                </option>
            </select>

            <button type="submit">
                Registrar incidencia
            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Historial de Incidencias
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

                <?php if (count($incidencias) > 0) : ?>

                    <?php foreach ($incidencias as $incidencia) : ?>

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
                            No existen incidencias registradas.
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

                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Acción</th>
                    <th>Resultado</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($operaciones) > 0) : ?>

                    <?php foreach ($operaciones as $operacion) : ?>

                        <tr>

                            <td>
                                <?= $operacion['id']; ?>
                            </td>

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

                        <td colspan="4">
                            No existen operaciones registradas.
                        </td>

                    </tr>

                <?php endif; ?>

            </tbody>

        </table>

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