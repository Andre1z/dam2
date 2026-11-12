<?php

require_once __DIR__ . '/../includes/conexion.php';

require_once __DIR__ . '/../includes/verificar_sesion.php';

require_once __DIR__ . '/../includes/conexion.php';

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $clienteId = intval($_POST['cliente_id'] ?? 0);
    $total = floatval($_POST['total'] ?? 0);
    $estado = trim($_POST['estado'] ?? 'Pendiente');

    if ($clienteId > 0) {

        $pedido = $db->prepare("
            INSERT INTO pedidos (
                cliente_id,
                total,
                estado
            )
            VALUES (
                ?,
                ?,
                ?
            )
        ");

        $pedido->execute([
            $clienteId,
            $total,
            $estado
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
            'Nuevo pedido',
            'Correcto'
        ]);

        $mensaje = 'Pedido registrado correctamente.';
    }
}

$clientes = $db->query("
    SELECT id, nombre
    FROM clientes
    ORDER BY nombre
")->fetchAll();

$pedidos = $db->query("
    SELECT
        pedidos.id,
        pedidos.fecha,
        pedidos.total,
        pedidos.estado,
        clientes.nombre AS cliente
    FROM pedidos
    INNER JOIN clientes
        ON clientes.id = pedidos.cliente_id
    ORDER BY pedidos.id DESC
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

    <title>Gestión de Pedidos</title>

    <link
        rel="stylesheet"
        href="../assets/css/general.css"
    >

</head>

<body>

<header class="cabecera">

    <h1>
        Gestión de Pedidos
    </h1>

</header>

<main class="contenedor">

    <section class="menu-principal">

        <h2>
            Nuevo Pedido
        </h2>

        <?php if (!empty($mensaje)) : ?>

            <div class="exito">

                <?= htmlspecialchars($mensaje) ?>

            </div>

        <?php endif; ?>

        <form method="POST">

            <label for="cliente_id">
                Cliente
            </label>

            <select
                id="cliente_id"
                name="cliente_id"
                required
            >

                <option value="">
                    Seleccione un cliente
                </option>

                <?php foreach ($clientes as $cliente) : ?>

                    <option value="<?= $cliente['id']; ?>">

                        <?= htmlspecialchars(
                            $cliente['nombre']
                        ); ?>

                    </option>

                <?php endforeach; ?>

            </select>

            <label for="total">
                Importe Total (€)
            </label>

            <input
                type="number"
                id="total"
                name="total"
                step="0.01"
                min="0"
                required
            >

            <label for="estado">
                Estado
            </label>

            <select
                id="estado"
                name="estado"
            >
                <option value="Pendiente">
                    Pendiente
                </option>

                <option value="Procesando">
                    Procesando
                </option>

                <option value="Completado">
                    Completado
                </option>

                <option value="Cancelado">
                    Cancelado
                </option>

            </select>

            <button type="submit">
                Crear Pedido
            </button>

        </form>

    </section>

    <section class="operaciones">

        <h2>
            Historial de Pedidos
        </h2>

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Estado</th>

                </tr>

            </thead>

            <tbody>

                <?php if (count($pedidos) > 0) : ?>

                    <?php foreach ($pedidos as $pedido) : ?>

                        <tr>

                            <td>

                                <?= $pedido['id']; ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $pedido['cliente']
                                ); ?>

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $pedido['fecha']
                                ); ?>

                            </td>

                            <td>

                                <?= number_format(
                                    $pedido['total'],
                                    2,
                                    ',',
                                    '.'
                                ); ?> €

                            </td>

                            <td>

                                <?= htmlspecialchars(
                                    $pedido['estado']
                                ); ?>

                            </td>

                        </tr>

                    <?php endforeach; ?>

                <?php else : ?>

                    <tr>

                        <td colspan="5">

                            No existen pedidos registrados.

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