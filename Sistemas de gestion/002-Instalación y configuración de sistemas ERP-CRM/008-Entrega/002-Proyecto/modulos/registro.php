<?php

session_start();

require_once __DIR__ . '/../includes/conexion.php';

/*
|--------------------------------------------------------------------------
| REGISTRO DE NUEVOS USUARIOS
|--------------------------------------------------------------------------
| Los usuarios registrados desde aquí reciben el rol "Comercial".
| Solo un administrador puede asignar otros roles desde usuarios.php.
*/

if (isset($_SESSION['id_usuario'])) {
    header('Location: ../index.php');
    exit;
}

$mensaje = '';
$exito = '';

$nombre = '';
$usuario = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $usuario = trim($_POST['usuario'] ?? '');
    $clave = $_POST['clave'] ?? '';
    $confirmar = $_POST['confirmar'] ?? '';

    if (
        $nombre === '' ||
        $usuario === '' ||
        $clave === '' ||
        $confirmar === ''
    ) {

        $mensaje = 'Todos los campos son obligatorios.';

    } elseif (!preg_match('/^[A-Za-z0-9_.-]{3,30}$/', $usuario)) {

        $mensaje = 'El usuario debe tener entre 3 y 30 caracteres (letras, números, punto, guion o guion bajo).';

    } elseif (strlen($clave) < 6) {

        $mensaje = 'La contraseña debe tener al menos 6 caracteres.';

    } elseif ($clave !== $confirmar) {

        $mensaje = 'Las contraseñas no coinciden.';

    } else {

        $consulta = $db->prepare("
            SELECT COUNT(*)
            FROM usuarios
            WHERE usuario = ?
        ");

        $consulta->execute([
            $usuario
        ]);

        if ($consulta->fetchColumn() > 0) {

            $mensaje = 'Ese nombre de usuario ya existe.';

        } else {

            $insertar = $db->prepare("
                INSERT INTO usuarios (
                    nombre,
                    usuario,
                    clave,
                    rol
                )
                VALUES (
                    ?,
                    ?,
                    ?,
                    ?
                )
            ");

            $insertar->execute([
                $nombre,
                $usuario,
                password_hash($clave, PASSWORD_DEFAULT),
                'Comercial'
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
                'Registro de usuario',
                'Correcto'
            ]);

            $exito = 'Usuario registrado correctamente. Ya puedes iniciar sesión.';

            $nombre = '';
            $usuario = '';

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
        Registro ERP CRM
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
            Crear Cuenta
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="error">

                <?= htmlspecialchars(
                    $mensaje
                ); ?>

            </div>

        <?php endif; ?>

        <?php if (!empty($exito)) : ?>

            <div class="exito">

                <?= htmlspecialchars(
                    $exito
                ); ?>

                <a href="login.php">Ir al login</a>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="nombre">

                Nombre completo

            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                value="<?= htmlspecialchars($nombre); ?>"
                required
            >

            <label for="usuario">

                Usuario

            </label>

            <input
                type="text"
                id="usuario"
                name="usuario"
                value="<?= htmlspecialchars($usuario); ?>"
                required
            >

            <label for="clave">

                Contraseña

            </label>

            <input
                type="password"
                id="clave"
                name="clave"
                minlength="6"
                required
            >

            <label for="confirmar">

                Repetir contraseña

            </label>

            <input
                type="password"
                id="confirmar"
                name="confirmar"
                minlength="6"
                required
            >

            <button type="submit">

                Registrarse

            </button>

        </form>

        <p>
            ¿Ya tienes cuenta?
            <a href="login.php">Inicia sesión</a>
        </p>

    </section>

</main>

</body>

</html>
