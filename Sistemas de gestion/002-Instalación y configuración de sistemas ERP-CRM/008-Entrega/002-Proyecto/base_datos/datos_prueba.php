<?php

/*
|--------------------------------------------------------------------------
| CARGA DE DATOS DE PRUEBA
|--------------------------------------------------------------------------
| Se puede ejecutar varias veces: vacía clientes, productos, pedidos,
| facturas, incidencias y configuraciones y los vuelve a crear.
| No borra usuarios, módulos ni el historial de operaciones.
|
| Usuarios de prueba (si ya existen, se restablece su contraseña):
|   admin     / Erp322a6abf!   (Administrador)
|   comercial / Com27bc0db1!   (Comercial)
|   tecnico   / Tec0515d243!   (Técnico)
*/

require_once __DIR__ . '/../includes/conexion.php';

/*
| Devuelve una fecha "hace N días" en formato SQLite.
*/
function haceDias(int $dias, string $hora = '10:00:00'): string
{
    return date('Y-m-d', strtotime("-{$dias} days")) . ' ' . $hora;
}

try {

    $db->beginTransaction();

    /*
    |--------------------------------------------------------------------------
    | LIMPIEZA
    |--------------------------------------------------------------------------
    */

    foreach (['facturas', 'pedidos', 'clientes', 'productos', 'incidencias', 'configuraciones'] as $tabla) {

        $db->exec("DELETE FROM {$tabla}");

        $db->exec("DELETE FROM sqlite_sequence WHERE name = '{$tabla}'");

    }

    /*
    |--------------------------------------------------------------------------
    | CLIENTES
    |--------------------------------------------------------------------------
    */

    $clientes = [

        ['Juan García Pérez',        'juan.garcia@ejemplo.com',      '600111111', 180],
        ['María López Fernández',    'maria.lopez@ejemplo.com',      '600222222', 175],
        ['Pedro Sánchez Ruiz',       'pedro.sanchez@ejemplo.com',    '600333333', 160],
        ['Ana Martínez Gómez',       'ana.martinez@ejemplo.com',     '600444444', 150],
        ['Carlos Ruiz Navarro',      'carlos.ruiz@ejemplo.com',      '600555555', 140],
        ['Lucía Torres Díaz',        'lucia.torres@ejemplo.com',     '600666666', 120],
        ['Javier Romero Castillo',   'javier.romero@ejemplo.com',    '600777777', 110],
        ['Elena Morales Ortiz',      'elena.morales@ejemplo.com',    '600888888',  95],
        ['Distribuciones Norte S.L.', 'compras@distnorte.ejemplo.com', '911234567',  90],
        ['Talleres Hernández S.A.',  'admin@thernandez.ejemplo.com', '913456789',  75],
        ['Sofía Navarro Gil',        'sofia.navarro@ejemplo.com',    '600999999',  60],
        ['Consultora Levante S.L.',  'info@clevante.ejemplo.com',    '963112233',  45],
        ['David Jiménez Vega',       'david.jimenez@ejemplo.com',    '611222333',  30],
        ['Laura Domínguez Ramos',    'laura.dominguez@ejemplo.com',  '622333444',  15],
        ['Academia Sur S.L.',        'secretaria@asur.ejemplo.com',  '955667788',   5]

    ];

    $consulta = $db->prepare("
        INSERT INTO clientes (
            nombre,
            email,
            telefono,
            fecha_alta
        )
        VALUES (
            ?,
            ?,
            ?,
            ?
        )
    ");

    $idsClientes = [];

    foreach ($clientes as [$nombre, $email, $telefono, $dias]) {

        $consulta->execute([$nombre, $email, $telefono, haceDias($dias, '09:30:00')]);

        $idsClientes[] = (int) $db->lastInsertId();

    }

    /*
    |--------------------------------------------------------------------------
    | PRODUCTOS
    |--------------------------------------------------------------------------
    */

    $productos = [

        ['Portátil Lenovo ThinkPad', 'Portátil 14" i5, 16 GB RAM, 512 GB SSD', 799.99, 15],
        ['Monitor Samsung 24"',      'Monitor Full HD 24 pulgadas',             149.99, 30],
        ['Teclado Logitech',         'Teclado inalámbrico',                      49.95, 40],
        ['Ratón Logitech',           'Ratón ergonómico inalámbrico',             29.95, 50],
        ['Impresora HP',             'Impresora multifunción láser',            199.95, 10],
        ['Disco SSD 1 TB',           'Unidad SSD NVMe 1 TB',                     89.90, 25],
        ['Router WiFi 6',            'Router doble banda WiFi 6',               119.00, 12],
        ['Auriculares con micro',    'Auriculares USB para videollamadas',       39.90, 35],
        ['Webcam Full HD',           'Cámara web 1080p con micrófono',           59.90, 20],
        ['Silla de oficina',         'Silla ergonómica con soporte lumbar',     229.00,  8],
        ['Licencia Office',          'Licencia anual de ofimática',              99.00, 100],
        ['Servicio de instalación',  'Instalación y configuración in situ',      60.00, 999]

    ];

    $consulta = $db->prepare("
        INSERT INTO productos (
            nombre,
            descripcion,
            precio,
            stock
        )
        VALUES (
            ?,
            ?,
            ?,
            ?
        )
    ");

    $precios = [];

    foreach ($productos as $producto) {

        $consulta->execute($producto);

        $precios[] = $producto[2];

    }

    /*
    |--------------------------------------------------------------------------
    | PEDIDOS
    |--------------------------------------------------------------------------
    | [cliente (índice), líneas [producto (índice) => cantidad], estado, días]
    | El total se calcula a partir de las líneas.
    */

    $pedidos = [

        [0,  [0 => 1, 3 => 1],          'Completado', 170],
        [1,  [1 => 1, 2 => 2],          'Completado', 165],
        [2,  [0 => 2, 1 => 2, 11 => 1], 'Completado', 150],
        [3,  [4 => 1, 5 => 1],          'Completado', 140],
        [4,  [2 => 1, 3 => 1],          'Completado', 130],
        [8,  [0 => 5, 10 => 5, 11 => 2], 'Completado', 120],
        [5,  [7 => 2, 8 => 1],          'Completado', 110],
        [9,  [9 => 4, 1 => 4],          'Completado', 100],
        [6,  [6 => 1],                  'Cancelado',   95],
        [7,  [5 => 2, 3 => 1],          'Completado',  85],
        [0,  [10 => 1],                 'Completado',  80],
        [11, [0 => 3, 8 => 3, 7 => 3],  'Completado',  70],
        [10, [2 => 1, 3 => 1, 1 => 1],  'Completado',  60],
        [1,  [4 => 1],                  'Completado',  50],
        [12, [6 => 1, 11 => 1],         'Completado',  40],
        [8,  [5 => 10],                 'Procesando',  30],
        [3,  [9 => 1],                  'Cancelado',   25],
        [13, [0 => 1, 10 => 1],         'Procesando',  20],
        [9,  [1 => 2, 2 => 2, 3 => 2],  'Procesando',  14],
        [14, [0 => 6, 11 => 3],         'Pendiente',    7],
        [5,  [8 => 1],                  'Pendiente',    5],
        [11, [10 => 10],                'Pendiente',    3],
        [2,  [7 => 4],                  'Pendiente',    1],
        [6,  [6 => 2, 11 => 1],         'Pendiente',    0]

    ];

    $consulta = $db->prepare("
        INSERT INTO pedidos (
            cliente_id,
            fecha,
            total,
            estado
        )
        VALUES (
            ?,
            ?,
            ?,
            ?
        )
    ");

    $consultaFactura = $db->prepare("
        INSERT INTO facturas (
            pedido_id,
            fecha,
            importe
        )
        VALUES (
            ?,
            ?,
            ?
        )
    ");

    foreach ($pedidos as [$cliente, $lineas, $estado, $dias]) {

        $total = 0;

        foreach ($lineas as $producto => $cantidad) {

            $total += $precios[$producto] * $cantidad;

        }

        $total = round($total, 2);

        $consulta->execute([$idsClientes[$cliente], haceDias($dias, '11:15:00'), $total, $estado]);

        $idPedido = (int) $db->lastInsertId();

        /*
        | Se factura todo lo completado o en proceso (2 días después del pedido).
        */
        if (in_array($estado, ['Completado', 'Procesando'], true)) {

            $consultaFactura->execute([$idPedido, haceDias(max($dias - 2, 0), '16:00:00'), $total]);

        }

    }

    /*
    |--------------------------------------------------------------------------
    | INCIDENCIAS
    |--------------------------------------------------------------------------
    */

    $incidencias = [

        ['El portátil del pedido de Juan García llegó con la batería defectuosa', 'Resuelta',    160],
        ['Error al generar la factura de Distribuciones Norte S.L.',          'Resuelta',    118],
        ['La impresora HP no se conecta a la red WiFi del cliente',           'Resuelta',     90],
        ['Retraso en la entrega de las sillas de Talleres Hernández S.A.',    'Resuelta',     95],
        ['Cliente solicita cambio de dirección de envío',                     'Resuelta',     45],
        ['Stock de discos SSD insuficiente para el pedido en curso',          'En revisión',  28],
        ['La exportación CSV muestra caracteres extraños en los acentos',     'En revisión',  12],
        ['Webcam no reconocida en el equipo de Elena Morales',                'Pendiente',     4],
        ['Revisar permisos del rol Técnico en el módulo de facturas',         'Pendiente',     2],
        ['Copia de seguridad semanal no se ha ejecutado',                     'Pendiente',     0]

    ];

    $consulta = $db->prepare("
        INSERT INTO incidencias (
            descripcion,
            estado,
            fecha
        )
        VALUES (
            ?,
            ?,
            ?
        )
    ");

    foreach ($incidencias as [$descripcion, $estado, $dias]) {

        $consulta->execute([$descripcion, $estado, haceDias($dias, '12:30:00')]);

    }

    /*
    |--------------------------------------------------------------------------
    | CONFIGURACIÓN
    |--------------------------------------------------------------------------
    */

    $configuracion = [

        ['Sistema',     'IVA',            '21'],
        ['Sistema',     'Moneda',         'EUR'],
        ['Sistema',     'Idioma',         'es'],
        ['Sistema',     'MaxUsuarios',    '20'],
        ['Sistema',     'ZonaHoraria',    'Europe/Madrid'],
        ['Empresa',     'Nombre',         'Mi Empresa S.L.'],
        ['Empresa',     'CIF',            'B00000000'],
        ['Facturas',    'Serie',          'F2026'],
        ['Facturas',    'DiasVencimiento', '30'],
        ['Productos',   'StockMinimo',    '5'],
        ['Incidencias', 'Notificar',      'Sí']

    ];

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

    foreach ($configuracion as $registro) {

        $consulta->execute($registro);

    }

    /*
    |--------------------------------------------------------------------------
    | USUARIOS DE PRUEBA (si ya existen, se restablece su contraseña)
    |--------------------------------------------------------------------------
    */

    $usuarios = [

        ['Administrador',    'admin',     'Erp322a6abf!', 'Administrador'],
        ['Comercial Prueba', 'comercial', 'Com27bc0db1!', 'Comercial'],
        ['Técnico Prueba',   'tecnico',   'Tec0515d243!', 'Técnico']

    ];

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
        ON CONFLICT(usuario) DO UPDATE SET
            nombre = excluded.nombre,
            clave = excluded.clave,
            rol = excluded.rol
    ");

    foreach ($usuarios as [$nombre, $usuario, $clave, $rol]) {

        $consulta->execute([$nombre, $usuario, password_hash($clave, PASSWORD_DEFAULT), $rol]);

    }

    /*
    |--------------------------------------------------------------------------
    | OPERACIONES
    |--------------------------------------------------------------------------
    */

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
        'Carga de datos de prueba',
        'Correcta'
    ]);

    $db->commit();

    echo "
    <h1>✅ Datos de prueba cargados correctamente</h1>
    <p>" . count($clientes) . " clientes, " . count($productos) . " productos, "
        . count($pedidos) . " pedidos, sus facturas, " . count($incidencias)
        . " incidencias y la configuración.</p>
    <p><a href=\"../index.php\">Volver al inicio</a></p>
    ";

} catch (Exception $e) {

    if ($db->inTransaction()) {
        $db->rollBack();
    }

    echo "
    <h1>❌ Error</h1>
    <p>" . htmlspecialchars($e->getMessage()) . "</p>
    ";

}
