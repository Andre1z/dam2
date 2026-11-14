<?php

class Conexion
{
    private static $db = null;

    public static function conectar()
    {
        if (self::$db === null) {

            $ruta = __DIR__ . '/erp.sqlite';

            self::$db = new PDO(
                'sqlite:' . $ruta
            );

            self::$db->exec(
                'PRAGMA foreign_keys = ON'
            );

            self::$db->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

            self::$db->setAttribute(
                PDO::ATTR_DEFAULT_FETCH_MODE,
                PDO::FETCH_ASSOC
            );

            /*
            |--------------------------------------------------------------------------
            | CLIENTES
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS clientes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    email TEXT,
                    telefono TEXT
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | PRODUCTOS
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS productos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    precio REAL NOT NULL,
                    stock INTEGER NOT NULL DEFAULT 0
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | VENTAS
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS ventas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    cliente_id INTEGER NOT NULL,
                    fecha TEXT NOT NULL,
                    total REAL NOT NULL,

                    FOREIGN KEY (cliente_id)
                    REFERENCES clientes(id)
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | DETALLE VENTAS
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS detalle_ventas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    venta_id INTEGER NOT NULL,
                    producto_id INTEGER NOT NULL,
                    cantidad INTEGER NOT NULL,
                    precio REAL NOT NULL,

                    FOREIGN KEY (venta_id)
                    REFERENCES ventas(id),

                    FOREIGN KEY (producto_id)
                    REFERENCES productos(id)
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | USUARIOS
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    usuario TEXT NOT NULL UNIQUE,
                    password TEXT NOT NULL,
                    rol TEXT NOT NULL DEFAULT 'usuario'
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | CREAR ADMIN SI NO EXISTE
            |--------------------------------------------------------------------------
            */

            $stmt = self::$db->prepare("
                SELECT COUNT(*)
                FROM usuarios
                WHERE usuario = :usuario
            ");

            $stmt->execute([
                ':usuario' => 'admin'
            ]);

            $existeAdmin = $stmt->fetchColumn();

            if ($existeAdmin == 0) {

                $stmt = self::$db->prepare("
                    INSERT INTO usuarios
                    (
                        usuario,
                        password,
                        rol
                    )
                    VALUES
                    (
                        :usuario,
                        :password,
                        :rol
                    )
                ");

                $stmt->execute([
                    ':usuario' => 'admin',
                    ':password' => password_hash(
                        'admin123',
                        PASSWORD_DEFAULT
                    ),
                    ':rol' => 'admin'
                ]);
            }
        }

        return self::$db;
    }
}