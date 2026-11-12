<?php

require_once __DIR__ . '/../includes/conexion.php';

require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');

    if (!empty($nombre)) {

        $consulta = $db->prepare("
            INSERT INTO clientes (
                nombre,
                email,
                telefono
            )
            VALUES (
                ?,
                ?,
                ?
            )
        ");

        $consulta->execute([
            $nombre,
            $email,
            $telefono
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
            'Alta de cliente',
            'Correcta'
        ]);

        $mensaje = 'Cliente registrado correctamente.';
    }
}

$clientes = $db->query("
    SELECT *
    FROM clientes
    ORDER BY id DESC
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

    <title>Gestión de Clientes</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Gestión de Clientes
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Nuevo Cliente
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">

                <?= htmlspecialchars($mensaje) ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="nombre">
                Nombre
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >

            <label for="email">
                Correo electrónico
            </label>

            <input
                type="email"
                id="email"
                name="email"
            >

            <label for="telefono">
                Teléfono
            </label>

            <input
                type="text"
                id="telefono"
                name="telefono"
            >

            <button type="submit">
                Guardar cliente
            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Clientes registrados
        </h2>

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Fecha Alta</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($clientes) > 0) : ?>

                    <?php foreach ($clientes as $cliente) : ?>

                        <tr>

                            <td>
                                <?= $cliente['id']; ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $cliente['nombre']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $cliente['email']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $cliente['telefono']
                                ); ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $cliente['fecha_alta']
                                ); ?>
                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="5">

                            No existen clientes registrados.

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