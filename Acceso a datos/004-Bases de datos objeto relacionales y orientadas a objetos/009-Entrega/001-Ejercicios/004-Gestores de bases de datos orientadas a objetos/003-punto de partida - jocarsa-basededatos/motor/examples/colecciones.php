<?php
require __DIR__.'/../php/AndreiORM.php';
$db=new AndreiORM('erp',__DIR__.'/../config.json',__DIR__.'/../libandreiorm.so');
foreach(['marketing','produccion','administracion','soporte'] as $n)$db->crearColeccion($n);
print_r($db->listarColecciones());
