<?php

require_once __DIR__ . '/../includes/verificar_sesion.php';
require_once __DIR__ . '/../includes/conexion.php';

$tipo = $_GET['tipo'] ?? '';

$nombreArchivo = 'informe.csv';

switch ($tipo) {

    case 'clientes':

        $nombreArchivo = 'clientes.csv';

        $datos = $db->query("
            SELECT
                id,
                nombre,
                email,
                telefono,
                fecha_alta
            FROM clientes
            ORDER BY id
        ")->fetchAll();

        break;

    case 'productos':

        $nombreArchivo = 'productos.csv';

        $datos = $db->query("
            SELECT
                id,
                nombre,
                descripcion,
                precio,
                stock
            FROM productos
            ORDER BY id
        ")->fetchAll();

        break;

    case 'pedidos':

        $nombreArchivo = 'pedidos.csv';

        $datos = $db->query("
            SELECT
                pedidos.id,
                clientes.nombre AS cliente,
                pedidos.fecha,
                pedidos.total,
                pedidos.estado
            FROM pedidos
            INNER JOIN clientes
                ON clientes.id = pedidos.cliente_id
            ORDER BY pedidos.id
        ")->fetchAll();

        break;

    case 'facturas':

        $nombreArchivo = 'facturas.csv';

        $datos = $db->query("
            SELECT
                facturas.id,
                facturas.pedido_id,
                facturas.fecha,
                facturas.importe
            FROM facturas
            ORDER BY facturas.id
        ")->fetchAll();

        break;

    case 'incidencias':

        $nombreArchivo = 'incidencias.csv';

        $datos = $db->query("
            SELECT
                id,
                fecha,
                descripcion,
                estado
            FROM incidencias
            ORDER BY fecha DESC
        ")->fetchAll();

        break;

    default:

        die('Tipo de exportación no válido.');

}

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="' . $nombreArchivo . '"');

$salida = fopen('php://output', 'w');

if (!empty($datos)) {

    fputcsv(
        $salida,
        array_keys($datos[0]),
        ';'
    );

    foreach ($datos as $fila) {

        fputcsv(
            $salida,
            $fila,
            ';'
        );

    }

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
    'Exportación CSV: ' . $tipo,
    'Correcta'
]);

fclose($salida);

exit;
