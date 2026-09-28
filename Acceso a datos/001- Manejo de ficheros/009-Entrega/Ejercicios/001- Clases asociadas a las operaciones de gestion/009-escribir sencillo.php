<?php

    $archivo = fopen("texto.txt", 'w');
    fwrite($archivo, "Este es el archivo que se ha escrito desde PHP");
    fclose($archivo);
   
?>