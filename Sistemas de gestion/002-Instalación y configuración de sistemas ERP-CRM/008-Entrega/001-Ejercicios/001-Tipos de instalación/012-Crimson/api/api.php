<?php
	switch($_GET['bloque']){
  	case "menu":
    	echo '["clientes","pedidos","facturas"]';
      break;
    case "tabla":
    	echo '
      	{
          "productos": [
            {
              "id": 1,
              "nombre": "Zenvora Nexo Mini",
              "categoria": "Ordenadores",
              "precio": 429.99,
              "stock": 10
            },
            {
              "id": 2,
              "nombre": "Orbytea Placa Modular",
              "categoria": "Componentes",
              "precio": 139.90,
              "stock": 16
            },
            {
              "id": 3,
              "nombre": "Lunetra Malla AX",
              "categoria": "Redes",
              "precio": 89.95,
              "stock": 24
            },
            {
              "id": 4,
              "nombre": "Grafenia Trazo 12",
              "categoria": "Periféricos de diseño",
              "precio": 119.50,
              "stock": 14
            },
            {
              "id": 5,
              "nombre": "Datavora Archivo Duo",
              "categoria": "Almacenamiento en red",
              "precio": 249.99,
              "stock": 9
            },
            {
              "id": 6,
              "nombre": "Pixelmora Captura HD",
              "categoria": "Captura de vídeo",
              "precio": 74.90,
              "stock": 20
            },
            {
              "id": 7,
              "nombre": "Voltessa Fuente Modular 650",
              "categoria": "Alimentación",
              "precio": 94.99,
              "stock": 13
            },
            {
              "id": 8,
              "nombre": "Cryoniva Flujo 240",
              "categoria": "Refrigeración",
              "precio": 84.50,
              "stock": 17
            },
            {
              "id": 9,
              "nombre": "Mecalume Impresora 3D Compacta",
              "categoria": "Fabricación digital",
              "precio": 329.95,
              "stock": 6
            },
            {
              "id": 10,
              "nombre": "Conexia Selector Dual",
              "categoria": "Conectividad",
              "precio": 59.90,
              "stock": 21
            }
          ]
        }
      ';
      break;
  }
?>