<?php

require_once __DIR__ . '/../includes/conexion.php';

require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $usuario = trim($_POST['usuario'] ?? '');
    $clave = trim($_POST['clave'] ?? '');
    $rol = trim($_POST['rol'] ?? '');

    if (
        !empty($nombre) &&
        !empty($usuario) &&
        !empty($clave) &&
        !empty($rol)
    ) {

        try {

            $hash = password_hash(
                $clave,
                PASSWORD_DEFAULT
            );

            $consulta = $db->prepare("
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

            $consulta->execute([
                $nombre,
                $usuario,
                $hash,
                $rol
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
                'Alta de usuario',
                'Correcta'
            ]);

            $mensaje = 'Usuario creado correctamente.';

        } catch (Exception $e) {

            $mensaje = 'Error: el usuario ya existe.';

        }

    }
}

$usuarios = $db->query("
    SELECT
        id,
        nombre,
        usuario,
        rol
    FROM usuarios
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

    <title>Usuarios</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<?php require_once __DIR__ . '/../includes/menu.php'; ?>

<header class="cabecera">

    <h1>
        Gestión de Usuarios
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Nuevo Usuario
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">

                <?= htmlspecialchars($mensaje); ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="nombre">

                Nombre Completo

            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >

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

            <label for="rol">

                Rol

            </label>

            <select
                id="rol"
                name="rol"
                required
            >

                <option value="Administrador">
                    Administrador
                </option>

                <option value="Comercial">
                    Comercial
                </option>

                <option value="Técnico">
                    Técnico
                </option>

            </select>

            <button type="submit">

                Crear Usuario

            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Usuarios Registrados
        </h2>

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Rol</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($usuarios) > 0) : ?>

                    <?php foreach ($usuarios as $usuario) : ?>

                        <tr>

                            <td>

                                <?= $usuario['id']; ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $usuario['nombre']
                                ); ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $usuario['usuario']
                                ); ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $usuario['rol']
                                ); ?>

                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="4">

                            No existen usuarios registrados.

                        </td>

                    </tr>

                <?php endif; ?>

            </tbody>

        </table>

    </section>

    <div
        style="
            margin-top:20px;
            display:flex;
            justify-content:center;
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