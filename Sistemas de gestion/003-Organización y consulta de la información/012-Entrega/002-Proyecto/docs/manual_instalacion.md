# Manual de Instalación

## ERP-CRM VentasPro

Versión 1.0

---

# Requisitos del Sistema

Para ejecutar la aplicación correctamente es necesario disponer de:

- Sistema operativo Windows, Linux o macOS.
- Servidor web Apache.
- PHP 8.0 o superior.
- Extensión PDO SQLite habilitada.
- Navegador web moderno.

---

# Software Recomendado

Para entorno Windows se recomienda instalar:

- XAMPP

Descarga:

https://www.apachefriends.org

---

# Instalación

## Paso 1. Instalar XAMPP

1. Descargar XAMPP.
2. Ejecutar el instalador.
3. Mantener seleccionados:

   - Apache
   - PHP

4. Finalizar la instalación.

---

## Paso 2. Iniciar Apache

Abrir el panel de control de XAMPP.

Pulsar:

Start → Apache

Comprobar que Apache se encuentra en color verde.

---

## Paso 3. Copiar el proyecto

Copiar la carpeta del proyecto:

erp-crm

en:

C:\xampp\htdocs\

Debe quedar:

C:\xampp\htdocs\erp-crm

---

## Paso 4. Verificar la estructura

La estructura mínima debe ser:

erp-crm/

├── assets/

├── clientes/

├── productos/

├── ventas/

├── informes/

├── exportaciones/

├── procesos/

├── docs/

├── database/

└── index.php

---

## Paso 5. Verificar SQLite

Comprobar que PHP tiene habilitada la extensión:

pdo_sqlite

En el archivo:

php.ini

debe existir:

extension=pdo_sqlite

Si no está habilitada:

1. Eliminar el carácter ;
2. Guardar cambios.
3. Reiniciar Apache.

---

## Paso 6. Primera ejecución

Abrir el navegador y acceder a:

http://localhost/erp-crm

La primera ejecución creará automáticamente:

- Base de datos SQLite.
- Tabla clientes.
- Tabla productos.
- Tabla ventas.
- Tabla detalle_ventas.

Archivo generado:

database/erp.sqlite

---

# Comprobación de funcionamiento

Realizar las siguientes pruebas:

## Clientes

- Crear cliente.
- Editar cliente.
- Eliminar cliente.

## Productos

- Crear producto.
- Editar producto.
- Eliminar producto.

## Ventas

- Registrar venta.
- Consultar detalle de venta.

## Informes

- Ventas mensuales.
- Mejores clientes.
- Productos vendidos.

## Exportaciones

- Exportar clientes.
- Exportar ventas.
- Generar informe PDF.

---

# Copias de seguridad

Ejecutar:

procesos/respaldo.php

Se generará una copia de seguridad en:

procesos/backups/

---

# Actualización de estadísticas

Ejecutar:

procesos/actualizacion_estadisticas.php

Se generará:

procesos/estadisticas/estadisticas.json

---

# Solución de problemas

## Error: unable to open database file

Causa:

La carpeta database no tiene permisos de escritura.

Solución:

Conceder permisos de escritura a la carpeta database.

---

## Error: PDOException

Causa:

La extensión SQLite no está habilitada.

Solución:

Habilitar pdo_sqlite en php.ini y reiniciar Apache.

---

## Página en blanco

Causa:

Error PHP no mostrado.

Solución:

Activar errores en desarrollo:

ini_set('display_errors', 1);
error_reporting(E_ALL);

---

# Desinstalación

1. Detener Apache.
2. Eliminar la carpeta:

C:\xampp\htdocs\erp-crm

3. Eliminar la base de datos:

database/erp.sqlite

---

Fin del Manual de Instalación.