<?php

session_start();

if (isset($_SESSION['usuario'])) {

    header('Location: index.php');
    exit;
}

require_once 'database/conexion.php';

$db = Conexion::conectar();

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $usuario = trim($_POST['usuario'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (
        empty($usuario) ||
        empty($password)
    ) {

        $error = 'Debe completar todos los campos.';

    } else {

        $stmt = $db->prepare("
            SELECT *
            FROM usuarios
            WHERE usuario = :usuario
            LIMIT 1
        ");

        $stmt->execute([
            ':usuario' => $usuario
        ]);

        $usuarioBD = $stmt->fetch();

        if (
            $usuarioBD &&
            password_verify(
                $password,
                $usuarioBD['password']
            )
        ) {

            $_SESSION['id_usuario'] =
                $usuarioBD['id'];

            $_SESSION['usuario'] =
                $usuarioBD['usuario'];

            $_SESSION['rol'] =
                $usuarioBD['rol'];

            header('Location: index.php');
            exit;

        } else {

            $error =
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
        Iniciar Sesión
    </title>

    <link
        rel="stylesheet"
        href="assets/css/login.css"
    >

</head>

<body>

<div class="login-container">

    <div class="login-card">

        <h1>
            ERP-CRM VentasPro
        </h1>

        <h2>
            Acceso al Sistema
        </h2>

        <?php if(!empty($error)): ?>

            <div class="error">

                <?= htmlspecialchars($error) ?>

            </div>

        <?php endif; ?>

        <form
            method="POST"
            id="formLogin"
        >

            <div class="grupo">

                <label for="usuario">

                    Usuario

                </label>

                <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    required
                >

            </div>

            <div class="grupo">

                <label for="password">

                    Contraseña

                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                >

            </div>

            <button
                type="submit"
                class="boton"
            >
                Iniciar Sesión
            </button>

        </form>

    </div>

</div>

<script src="assets/js/login.js"></script>

</body>
</html>