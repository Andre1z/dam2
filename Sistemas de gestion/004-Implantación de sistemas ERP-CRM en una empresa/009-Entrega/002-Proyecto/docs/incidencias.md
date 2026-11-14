# Registro de Incidencias

## ERP-CRM VentasPro

Versión 1.0

---

# Objetivo

Este documento recoge las incidencias detectadas durante el desarrollo, pruebas e implantación del sistema ERP-CRM VentasPro.

También se documentan las soluciones aplicadas para resolver cada problema.

---

# Incidencia 001

Fecha:
14/11/2026

Módulo:
Base de datos

Descripción:

Error al conectar con la base de datos SQLite.

Mensaje:

unable to open database file

Causa:

La carpeta database no disponía de permisos de escritura.

Solución aplicada:

Asignación de permisos de lectura y escritura a la carpeta database.

Estado:

Resuelta.

---

# Incidencia 002

Fecha:
14/11/2026

Módulo:
Clientes

Descripción:

No se almacenaban correctamente los registros nuevos.

Causa:

Error en la sentencia SQL INSERT.

Solución aplicada:

Revisión y corrección de la consulta preparada mediante PDO.

Estado:

Resuelta.

---

# Incidencia 003

Fecha:
14/11/2026

Módulo:
Productos

Descripción:

Al introducir un stock negativo se almacenaban valores incorrectos.

Causa:

Falta de validación de formulario.

Solución aplicada:

Validación mediante PHP y JavaScript.

Estado:

Resuelta.

---

# Incidencia 004

Fecha:
14/11/2026

Módulo:
Ventas

Descripción:

Se intentaba registrar una venta con stock insuficiente.

Causa:

No existía verificación previa del stock disponible.

Solución aplicada:

Comprobación del stock antes de registrar la venta.

Estado:

Resuelta.

---

# Incidencia 005

Fecha:
14/11/2026

Módulo:
Ventas

Descripción:

El stock no se actualizaba después de una venta.

Causa:

Falta de actualización en la tabla productos.

Solución aplicada:

Descuento automático de unidades mediante consulta UPDATE.

Estado:

Resuelta.

---

# Incidencia 006

Fecha:
14/11/2026

Módulo:
Informes

Descripción:

Los informes mostraban valores nulos cuando no existían ventas.

Causa:

Las funciones SUM devolvían NULL.

Solución aplicada:

Utilización de la función COALESCE.

Estado:

Resuelta.

---

# Incidencia 007

Fecha:
14/11/2026

Módulo:
Exportaciones

Descripción:

Los archivos CSV presentaban problemas de codificación.

Causa:

Configuración incorrecta del juego de caracteres.

Solución aplicada:

Configuración UTF-8 en las cabeceras de exportación.

Estado:

Resuelta.

---

# Incidencia 008

Fecha:
14/11/2026

Módulo:
Procesos

Descripción:

No se generaban correctamente las copias de seguridad.

Causa:

La carpeta backups no existía.

Solución aplicada:

Creación automática de la carpeta mediante mkdir().

Estado:

Resuelta.

---

# Incidencia 009

Fecha:
14/11/2026

Módulo:
Estadísticas

Descripción:

No se encontraba el archivo estadisticas.json.

Causa:

La carpeta estadisticas no estaba creada.

Solución aplicada:

Creación automática de la carpeta antes de guardar el archivo.

Estado:

Resuelta.

---

# Registro de Mantenimiento

## Mantenimiento Preventivo

- Verificación semanal de copias de seguridad.
- Verificación de integridad de la base de datos.
- Revisión periódica de los informes generados.
- Comprobación del espacio disponible en disco.

---

## Mantenimiento Correctivo

- Reparación de errores detectados por los usuarios.
- Corrección de consultas SQL.
- Actualización de los formularios de gestión.

---

# Conclusiones

Durante el desarrollo y prueba del sistema ERP-CRM VentasPro se registraron diversas incidencias relacionadas con el acceso a datos, validación de formularios y generación de informes.

Todas las incidencias fueron identificadas, documentadas y solucionadas correctamente, garantizando el correcto funcionamiento de la aplicación.

---

Fin del Registro de Incidencias.