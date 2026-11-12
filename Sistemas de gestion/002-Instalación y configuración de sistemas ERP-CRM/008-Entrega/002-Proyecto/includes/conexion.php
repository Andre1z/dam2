<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| CONFIGURACIÓN DE SQLITE
|--------------------------------------------------------------------------
*/

$rutaBaseDatos = __DIR__ . '/../base_datos/erp_crm.db';

try {

    $db = new PDO(
        'sqlite:' . $rutaBaseDatos
    );

    $db->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

    $db->setAttribute(
        PDO::ATTR_DEFAULT_FETCH_MODE,
        PDO::FETCH_ASSOC
    );

    $db->exec('PRAGMA foreign_keys = ON');

} catch (PDOException $e) {

    die(
        '<h2>Error de conexión</h2>
        <p>' . htmlspecialchars($e->getMessage()) . '</p>'
    );

}