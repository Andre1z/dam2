<?php

declare(strict_types=1);

try {

    $rutaBd = __DIR__ . '/erp_crm.db';

    $db = new PDO('sqlite:' . $rutaBd);

    $db->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

    $db->exec("
        CREATE TABLE IF NOT EXISTS modulos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL UNIQUE,
            descripcion TEXT NOT NULL,
            instalado INTEGER DEFAULT 0
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS configuraciones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            modulo TEXT NOT NULL,
            parametro TEXT NOT NULL,
            valor TEXT NOT NULL
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT,
            telefono TEXT,
            fecha_alta DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio REAL NOT NULL DEFAULT 0,
            stock INTEGER NOT NULL DEFAULT 0
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS pedidos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente_id INTEGER NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
            total REAL DEFAULT 0,
            estado TEXT DEFAULT 'Pendiente',
            FOREIGN KEY(cliente_id)
            REFERENCES clientes(id)
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS facturas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pedido_id INTEGER NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
            importe REAL NOT NULL,
            FOREIGN KEY(pedido_id)
            REFERENCES pedidos(id)
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS incidencias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
            descripcion TEXT NOT NULL,
            estado TEXT NOT NULL
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS operaciones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
            accion TEXT NOT NULL,
            resultado TEXT NOT NULL
        )
    ");

    $db->exec("
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            usuario TEXT NOT NULL UNIQUE,
            clave TEXT NOT NULL,
            rol TEXT NOT NULL
        )
    ");

    $modulos = [
        [
            'Clientes',
            'Gestión de clientes y contactos'
        ],
        [
            'Productos',
            'Gestión de catálogo y stock'
        ],
        [
            'Pedidos',
            'Gestión de pedidos'
        ],
        [
            'Facturación',
            'Gestión de facturas'
        ],
        [
            'CRM',
            'Administración de relaciones con clientes'
        ],
        [
            'ERP',
            'Gestión empresarial integrada'
        ],
        [
            'Configuración',
            'Configuración del sistema'
        ],
        [
            'Diagnóstico',
            'Verificación de funcionamiento'
        ],
        [
            'Incidencias',
            'Registro de errores e incidencias'
        ]
    ];

    $consulta = $db->prepare("
        INSERT OR IGNORE INTO modulos (
            nombre,
            descripcion
        )
        VALUES (
            :nombre,
            :descripcion
        )
    ");

    foreach ($modulos as $modulo) {

        $consulta->execute([
            ':nombre' => $modulo[0],
            ':descripcion' => $modulo[1]
        ]);

    }

    echo "
    <!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <title>ERP-CRM</title>
        <style>

            body{
                font-family: Arial, sans-serif;
                background:#f5f7fa;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            .mensaje{
                background:white;
                padding:30px;
                border-radius:10px;
                box-shadow:0 0 15px rgba(0,0,0,.1);
                text-align:center;
            }

            h1{
                color:#22c55e;
            }

        </style>
    </head>
    <body>

        <div class='mensaje'>
            <h1>✅ Base de datos creada correctamente</h1>

            <p>
                Se han creado todas las tablas del ERP-CRM.
            </p>

            <p>
                Archivo: erp_crm.db
            </p>
        </div>

    </body>
    </html>
    ";

} catch (PDOException $e) {

    die(
        'Error: ' . $e->getMessage()
    );

}