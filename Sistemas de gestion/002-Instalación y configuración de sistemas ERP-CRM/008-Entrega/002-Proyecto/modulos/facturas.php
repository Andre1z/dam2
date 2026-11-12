<?php

require_once __DIR__ . '/../includes/conexion.php';

require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $pedidoId = intval($_POST['pedido_id'] ?? 0);

    if ($pedidoId > 0) {

        $consulta = $db->prepare("
            SELECT *
            FROM pedidos
            WHERE id = ?
        ");

        $consulta->execute([
            $pedidoId
        ]);

        $pedido = $consulta->fetch();

        if ($pedido) {

            $factura = $db->prepare("
                INSERT INTO facturas (
                    pedido_id,
                    importe
                )
                VALUES (
                    ?,
                    ?
                )
            ");

            $factura->execute([
                $pedido['id'],
                $pedido['total']
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
                'Generación de factura',
                'Correcta'
            ]);

            $mensaje = 'Factura generada correctamente.';
        }
    }
}

$pedidos = $db->query("
    SELECT
        pedidos.id,
        pedidos.total,
        clientes.nombre
    FROM pedidos
    INNER JOIN clientes
        ON clientes.id = pedidos.cliente_id
    ORDER BY pedidos.id DESC
")->fetchAll();

$facturas = $db->query("
    SELECT
        facturas.id,
        facturas.fecha,
        facturas.importe,
        pedidos.id AS pedido_id,
        clientes.nombre AS cliente
    FROM facturas
    INNER JOIN pedidos
        ON pedidos.id = facturas.pedido_id
    INNER JOIN clientes
        ON clientes.id = pedidos.cliente_id
    ORDER BY facturas.id DESC
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

    <title>Facturación</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Gestión de Facturación
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Generar Factura
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">

                <?= htmlspecialchars($mensaje); ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="pedido_id">
                Pedido
            </label>

            <select
                id="pedido_id"
                name="pedido_id"
                required
            >

                <option value="">
                    Seleccione un pedido
                </option>

                <?php foreach ($pedidos as $pedido) : ?>

                    <option value="<?= $pedido['id']; ?>">

                        Pedido #<?= $pedido['id']; ?>

                        -

                        <?= htmlspecialchars(
                            $pedido['nombre']
                        ); ?>

                        -

                        <?= number_format(
                            $pedido['total'],
                            2,
                            ',',
                            '.'
                        ); ?> €

                    </option>

                <?php endforeach; ?>

            </select>

            <button type="submit">

                Generar Factura

            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Facturas Emitidas
        </h2>

        <table>

            <thead>

                <tr>

                    <th>ID Factura</th>
                    <th>Pedido</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Importe</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($facturas) > 0) : ?>

                    <?php foreach ($facturas as $factura) : ?>

                        <tr>

                            <td>

                                <?= $factura['id']; ?>

                            </td>

                            <td>

                                #<?= $factura['pedido_id']; ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $factura['cliente']
                                ); ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $factura['fecha']
                                ); ?>

                            </td>

                            <td>

                                <?= number_format(
                                    $factura['importe'],
                                    2,
                                    ',',
                                    '.'
                                ); ?> €

                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="5">

                            No existen facturas registradas.

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