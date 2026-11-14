<?php

class Conexion
{
    private static $db = null;

    public static function conectar()
    {
        if (self::$db === null) {

            $ruta = __DIR__ . '/erp.sqlite';

            self::$db = new PDO('sqlite:' . $ruta);

            self::$db->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

            self::$db->setAttribute(
                PDO::ATTR_DEFAULT_FETCH_MODE,
                PDO::FETCH_ASSOC
            );

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS clientes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    email TEXT,
                    telefono TEXT
                )
            ");

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS productos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    precio REAL NOT NULL,
                    stock INTEGER NOT NULL DEFAULT 0
                )
            ");

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS ventas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    cliente_id INTEGER NOT NULL,
                    fecha TEXT NOT NULL,
                    total REAL NOT NULL,
                    FOREIGN KEY(cliente_id)
                    REFERENCES clientes(id)
                )
            ");

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS detalle_ventas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    venta_id INTEGER NOT NULL,
                    producto_id INTEGER NOT NULL,
                    cantidad INTEGER NOT NULL,
                    precio REAL NOT NULL,
                    FOREIGN KEY(venta_id)
                    REFERENCES ventas(id),
                    FOREIGN KEY(producto_id)
                    REFERENCES productos(id)
                )
            ");
        }

        return self::$db;
    }
}