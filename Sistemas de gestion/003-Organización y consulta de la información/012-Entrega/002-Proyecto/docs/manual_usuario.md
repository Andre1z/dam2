# Manual de Usuario

## ERP-CRM VentasPro

Versión 1.0

---

# Introducción

ERP-CRM VentasPro es una aplicación desarrollada para la gestión de clientes, productos y ventas.

Permite administrar la información comercial de una empresa, registrar operaciones de venta, consultar informes y exportar datos.

---

# Acceso al sistema

Abrir el navegador web y acceder a:

http://localhost/erp-crm

Desde la página principal se podrá acceder a todos los módulos del sistema.

---

# Gestión de Clientes

## Crear cliente

1. Acceder a Clientes.
2. Pulsar "Nuevo Cliente".
3. Introducir los datos solicitados.
4. Pulsar "Guardar Cliente".

## Modificar cliente

1. Acceder a Clientes.
2. Pulsar "Editar".
3. Modificar los datos.
4. Pulsar "Actualizar Cliente".

## Eliminar cliente

1. Acceder a Clientes.
2. Pulsar "Eliminar".
3. Confirmar la operación.

---

# Gestión de Productos

## Crear producto

1. Acceder a Productos.
2. Pulsar "Nuevo Producto".
3. Introducir:
   - Nombre
   - Precio
   - Stock
4. Pulsar "Guardar Producto".

## Modificar producto

1. Acceder a Productos.
2. Pulsar "Editar".
3. Actualizar los datos.
4. Guardar cambios.

## Eliminar producto

1. Acceder a Productos.
2. Pulsar "Eliminar".

Nota:
No es posible eliminar productos asociados a ventas.

---

# Gestión de Ventas

## Registrar venta

1. Acceder a Ventas.
2. Pulsar "Nueva Venta".
3. Seleccionar un cliente.
4. Seleccionar un producto.
5. Introducir la cantidad.
6. Pulsar "Registrar Venta".

El sistema:

- Calcula el importe automáticamente.
- Actualiza el stock del producto.
- Registra la operación en la base de datos.

---

# Consultar ventas

1. Acceder a Ventas.
2. Visualizar la lista de ventas registradas.
3. Pulsar "Ver Detalle" para consultar la información completa.

---

# Informes

El sistema dispone de los siguientes informes:

## Ventas mensuales

Muestra:

- Número de ventas por mes.
- Facturación mensual.

## Mejores clientes

Muestra:

- Clientes con mayor facturación.
- Número de compras realizadas.

## Productos vendidos

Muestra:

- Ranking de productos.
- Unidades vendidas.
- Ingresos generados.

---

# Exportación de datos

El sistema permite:

## Exportar clientes

Genera un archivo CSV con:

- ID
- Nombre
- Email
- Teléfono

## Exportar ventas

Genera un archivo CSV con:

- ID
- Cliente
- Fecha
- Total

## Exportar informe PDF

Genera un informe imprimible del estado global del sistema.

---

# Copias de seguridad

El sistema permite generar copias de seguridad de la base de datos SQLite.

Las copias se almacenan en:

procesos/backups/

---

# Cierre de la aplicación

Para finalizar el trabajo simplemente cerrar el navegador.

Todos los datos quedan almacenados automáticamente en la base de datos SQLite.

---

Fin del Manual de Usuario.