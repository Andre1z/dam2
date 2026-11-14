<?php

require_once '../database/conexion.php';

$dbOrigen = __DIR__ . '/../database/erp.sqlite';

if (!file_exists($dbOrigen)) {
    die('La base de datos no existe.');
}

$carpetaBackups = __DIR__ . '/backups';

if (!is_dir($carpetaBackups)) {

    mkdir(
        $carpetaBackups,
        0777,
        true
    );
}

$fecha = date('Y-m-d_H-i-s');

$archivoDestino =
    $carpetaBackups .
    '/backup_' .
    $fecha .
    '.sqlite';

if (copy($dbOrigen, $archivoDestino)) {

    echo 'Copia de seguridad creada correctamente.<br>';
    echo 'Archivo: ' . basename($archivoDestino);

} else {

    echo 'Error al generar la copia de seguridad.';
}