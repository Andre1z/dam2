<?php

session_start();

if (isset($_SESSION['usuario'])) {

    header('Location: index.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $usuario = trim($_POST['usuario'] ?? '');
    $password = trim($_POST['password'] ?? '');

    /*
    |--------------------------------------------------------------------------
    | Credenciales de ejemplo
    |--------------------------------------------------------------------------
    */

    $usuarioValido = 'admin';
    $passwordValida = 'admin123';

    if (
        $usuario === $usuarioValido &&
        $password === $passwordValida
    ) {

        $_SESSION['usuario'] = $usuario;

        header('Location: index.php');
        exit;

    } else {

        $error = 'Usuario o contraseña incorrectos.';
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
            Iniciar Sesión
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
                Entrar
            </button>

        </form>

        <div class="credenciales">

            Usuario: admin<br>
            Contraseña: admin123

        </div>

    </div>

</div>

<script src="assets/js/login.js"></script>

</body>
</html>