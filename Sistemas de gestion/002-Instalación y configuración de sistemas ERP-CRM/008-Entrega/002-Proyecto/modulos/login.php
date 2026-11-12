<?php

session_start();

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $usuario = trim($_POST['usuario'] ?? '');
    $clave = trim($_POST['clave'] ?? '');

    if (
        !empty($usuario) &&
        !empty($clave)
    ) {

        $consulta = $db->prepare("
            SELECT *
            FROM usuarios
            WHERE usuario = ?
        ");

        $consulta->execute([
            $usuario
        ]);

        $usuarioEncontrado = $consulta->fetch();

        if (
            $usuarioEncontrado &&
            password_verify(
                $clave,
                $usuarioEncontrado['clave']
            )
        ) {

            $_SESSION['id_usuario'] =
                $usuarioEncontrado['id'];

            $_SESSION['nombre_usuario'] =
                $usuarioEncontrado['nombre'];

            $_SESSION['rol_usuario'] =
                $usuarioEncontrado['rol'];

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
                'Inicio de sesión',
                'Correcto'
            ]);

            header(
                'Location: ../index.php'
            );

            exit;

        } else {

            $mensaje =
                'Usuario o contraseña incorrectos.';

        }

    }
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

    <title>
        Login ERP CRM
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        ERP CRM
    </h1>

</header>

<main
    class="contenedor"
    style="
        max-width:600px;
        margin:40px auto;
    "
>

    <section class="menu-principal">

        <h2>
            Iniciar Sesión
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="error">

                <?= htmlspecialchars(
                    $mensaje
                ); ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="usuario">

                Usuario

            </label>

            <input
                type="text"
                id="usuario"
                name="usuario"
                required
            >

            <label for="clave">

                Contraseña

            </label>

            <input
                type="password"
                id="clave"
                name="clave"
                required
            >

            <button type="submit">

                Entrar

            </button>

        </form>

        <p>
            ¿No tienes cuenta?
            <a href="registro.php">Regístrate</a>
        </p>

    </section>

</main>

</body>

</html>