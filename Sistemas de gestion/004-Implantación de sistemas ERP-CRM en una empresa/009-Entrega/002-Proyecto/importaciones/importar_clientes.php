<?php

session_start();

if (!isset($_SESSION['usuario'])) {

    header('Location: ../login.php');
    exit;
}

require_once '../database/conexion.php';

$db = Conexion::conectar();

$mensaje = '';
$error = '';

if (
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_FILES['archivo_csv'])
) {

    $archivo = $_FILES['archivo_csv'];

    if ($archivo['error'] === 0) {

        $extension = strtolower(
            pathinfo(
                $archivo['name'],
                PATHINFO_EXTENSION
            )
        );

        if ($extension !== 'csv') {

            $error =
                'Debe seleccionar un archivo CSV válido.';

        } else {

            $gestor = fopen(
                $archivo['tmp_name'],
                'r'
            );

            if ($gestor) {

                $insertados = 0;

                fgetcsv(
                    $gestor,
                    1000,
                    ';'
                );

                while (
                    ($datos = fgetcsv(
                        $gestor,
                        1000,
                        ';'
                    )) !== false
                ) {

                    if (
                        count($datos) >= 3
                    ) {

                        $nombre = trim($datos[0]);
                        $email = trim($datos[1]);
                        $telefono = trim($datos[2]);

                        if (!empty($nombre)) {

                            $stmt =
                            $db->prepare("
                                INSERT INTO clientes
                                (
                                    nombre,
                                    email,
                                    telefono
                                )
                                VALUES
                                (
                                    :nombre,
                                    :email,
                                    :telefono
                                )
                            ");

                            $stmt->execute([
                                ':nombre' => $nombre,
                                ':email' => $email,
                                ':telefono' => $telefono
                            ]);

                            $insertados++;
                        }
                    }
                }

                fclose($gestor);

                $mensaje =
                    "Importación completada. Clientes importados: {$insertados}";
            }
        }

    } else {

        $error =
            'Ha ocurrido un error al subir el archivo.';
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
        Importar Clientes
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/importar_clientes.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Importar Clientes
    </h1>

    <p class="descripcion">

        Seleccione un archivo CSV para importar
        clientes al sistema.

    </p>

    <?php if(!empty($mensaje)): ?>

        <div class="mensaje">

            <?= htmlspecialchars($mensaje) ?>

        </div>

    <?php endif; ?>

    <?php if(!empty($error)): ?>

        <div class="error">

            <?= htmlspecialchars($error) ?>

        </div>

    <?php endif; ?>

    <form
        method="POST"
        enctype="multipart/form-data"
        id="formImportacion"
    >

        <div class="grupo">

            <label for="archivo_csv">

                Archivo CSV

            </label>

            <input
                type="file"
                id="archivo_csv"
                name="archivo_csv"
                accept=".csv"
                required
            >

        </div>

        <button
            type="submit"
            class="boton"
        >
            Importar Clientes
        </button>

    </form>

    <div class="formato">

        <h2>
            Formato esperado del CSV
        </h2>

<pre>nombre;email;telefono
Juan Pérez;juan@gmail.com;600111222
Ana Ruiz;ana@gmail.com;622333444</pre>

    </div>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/importar_clientes.js"></script>

</body>
</html>