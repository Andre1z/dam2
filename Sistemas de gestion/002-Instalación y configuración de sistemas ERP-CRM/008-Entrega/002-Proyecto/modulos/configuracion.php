<?php

require_once __DIR__ . '/../includes/conexion.php';
require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $iva = trim($_POST['iva'] ?? '');
    $moneda = trim($_POST['moneda'] ?? '');
    $idioma = trim($_POST['idioma'] ?? '');
    $maxUsuarios = trim($_POST['max_usuarios'] ?? '');

    $db->exec("
        DELETE FROM configuraciones
        WHERE modulo = 'Sistema'
    ");

    $consulta = $db->prepare("
        INSERT INTO configuraciones (
            modulo,
            parametro,
            valor
        )
        VALUES (
            ?,
            ?,
            ?
        )
    ");

    $configuraciones = [
        ['Sistema', 'IVA', $iva],
        ['Sistema', 'Moneda', $moneda],
        ['Sistema', 'Idioma', $idioma],
        ['Sistema', 'MaxUsuarios', $maxUsuarios]
    ];

    foreach ($configuraciones as $configuracion) {

        $consulta->execute($configuracion);

    }

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
        'Actualización de configuración',
        'Correcta'
    ]);

    $mensaje = 'Configuración guardada correctamente.';
}

$configuraciones = [];

$resultado = $db->query("
    SELECT parametro, valor
    FROM configuraciones
    WHERE modulo = 'Sistema'
");

foreach ($resultado as $fila) {

    $configuraciones[$fila['parametro']] = $fila['valor'];

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

    <title>Configuración</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Configuración del ERP CRM
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Parámetros del sistema
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">

                <?= htmlspecialchars($mensaje); ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="iva">
                IVA (%)
            </label>

            <input
                type="number"
                id="iva"
                name="iva"
                min="0"
                max="100"
                value="<?= htmlspecialchars($configuraciones['IVA'] ?? '21'); ?>"
                required
            >

            <label for="moneda">
                Moneda
            </label>

            <select
                id="moneda"
                name="moneda"
            >

                <option value="EUR"
                    <?= (($configuraciones['Moneda'] ?? '') === 'EUR') ? 'selected' : ''; ?>
                >
                    Euro (€)
                </option>

                <option value="USD"
                    <?= (($configuraciones['Moneda'] ?? '') === 'USD') ? 'selected' : ''; ?>
                >
                    Dólar ($)
                </option>

            </select>

            <label for="idioma">
                Idioma
            </label>

            <select
                id="idioma"
                name="idioma"
            >

                <option value="es"
                    <?= (($configuraciones['Idioma'] ?? '') === 'es') ? 'selected' : ''; ?>
                >
                    Español
                </option>

                <option value="en"
                    <?= (($configuraciones['Idioma'] ?? '') === 'en') ? 'selected' : ''; ?>
                >
                    Inglés
                </option>

            </select>

            <label for="max_usuarios">
                Máximo de usuarios
            </label>

            <input
                type="number"
                id="max_usuarios"
                name="max_usuarios"
                min="1"
                value="<?= htmlspecialchars($configuraciones['MaxUsuarios'] ?? '10'); ?>"
                required
            >

            <button type="submit">
                Guardar configuración
            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Configuración actual
        </h2>

        <table>

            <thead>

                <tr>

                    <th>Parámetro</th>
                    <th>Valor</th>

                </tr>

            </thead>

            <tbody>

                <?php foreach ($configuraciones as $parametro => $valor) : ?>

                    <tr>

                        <td>

                            <?= htmlspecialchars($parametro); ?>

                        </td>

                        <td>

                            <?= htmlspecialchars($valor); ?>

                        </td>

                    </tr>

                <?php endforeach; ?>

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