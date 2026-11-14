<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Centro de Exportaciones
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/exportaciones_index.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Centro de Exportaciones
    </h1>

    <div class="tarjetas">

        <div class="tarjeta">

            <h2>
                Exportar Clientes
            </h2>

            <p>
                Generar archivo CSV con todos los clientes.
            </p>

            <a href="exportar_clientes.php">
                Exportar CSV
            </a>

        </div>

        <div class="tarjeta">

            <h2>
                Exportar Ventas
            </h2>

            <p>
                Generar archivo CSV con todas las ventas.
            </p>

            <a href="exportar_ventas.php">
                Exportar CSV
            </a>

        </div>

        <div class="tarjeta">

            <h2>
                Informe PDF
            </h2>

            <p>
                Generar informe general para impresión.
            </p>

            <a href="exportar_pdf.php">
                Generar PDF
            </a>

        </div>

    </div>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/exportaciones_index.js"></script>

</body>
</html>