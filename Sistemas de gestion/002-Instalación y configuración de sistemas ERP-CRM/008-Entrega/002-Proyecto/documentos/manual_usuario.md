# Manual de usuario — ERP CRM

Este manual explica cómo usar la aplicación **ERP CRM** para gestionar clientes, productos, pedidos, facturas e incidencias de una empresa.

> Si la aplicación todavía no está instalada, consulta primero el **Manual de instalación** (`manual_instalacion.md`).

---

## 1. Acceso a la aplicación

### 1.1. Iniciar sesión

1. Abre la dirección de la aplicación en el navegador (por ejemplo `http://localhost/erp_crm/`).
2. Aparece la pantalla **Iniciar Sesión**.
3. Escribe tu **Usuario** y tu **Contraseña** y pulsa **Entrar**.
4. Si los datos son correctos, entras en el **Dashboard**. Si no, verás el mensaje *"Usuario o contraseña incorrectos."*

> Todas las páginas de la aplicación necesitan una sesión iniciada. Si intentas abrir cualquiera sin haber entrado, la aplicación te lleva al login.

### 1.2. Crear una cuenta (registro)

Si todavía no tienes usuario:

1. En la pantalla de login, pulsa **"¿No tienes cuenta? Regístrate"**.
2. Rellena el formulario:

| Campo | Requisitos |
|---|---|
| Nombre completo | Obligatorio |
| Usuario | Entre 3 y 30 caracteres: letras, números, punto (`.`), guion (`-`) o guion bajo (`_`). No puede estar repetido |
| Contraseña | Mínimo 6 caracteres |
| Repetir contraseña | Debe coincidir con la contraseña |

3. Pulsa **Registrarse**. Si todo es correcto aparece *"Usuario registrado correctamente"* y un enlace para ir al login.

> Las cuentas creadas desde el registro tienen el rol **Comercial**. Para tener otro rol, un administrador debe crear el usuario desde el módulo **Usuarios**.

### 1.3. Cerrar sesión

Pulsa el botón rojo **🚪 Cerrar sesión** al final del menú lateral. Volverás a la pantalla de login.

---

## 2. Pantalla principal (Dashboard)

Es la primera pantalla después de iniciar sesión. Muestra:

- **Usuario conectado**: tu nombre y tu rol.
- **Tarjetas de resumen**: número de módulos, módulos activos, clientes, productos, pedidos, facturas, usuarios e incidencias.
- **Resumen económico**: totales de facturación.
- **Acceso rápido**: botones para ir directamente a cada módulo.
- **Últimas operaciones**: las 10 acciones más recientes del sistema (inicios de sesión, altas, instalaciones…).

---

## 3. Menú lateral

Desde cualquier módulo puedes moverte con el menú de la izquierda:

| Opción | Para qué sirve |
|---|---|
| 🏠 Dashboard | Volver a la pantalla principal |
| ⚙️ Instalador | Activar los módulos de la aplicación |
| 👥 Clientes | Dar de alta y consultar clientes |
| 📦 Productos | Gestionar el catálogo y el stock |
| 🛒 Pedidos | Registrar pedidos de clientes |
| 🧾 Facturación | Generar facturas a partir de pedidos |
| 🔧 Configuración | Ajustar IVA, moneda, idioma y límite de usuarios |
| ✅ Diagnóstico | Comprobar que el sistema funciona |
| 🚨 Incidencias | Registrar y consultar problemas |
| 📊 Informes | Ver estadísticas y exportar datos a CSV |
| 👤 Usuarios | Crear usuarios y asignar roles |
| 🚪 Cerrar sesión | Salir de la aplicación |

---

## 4. Módulos

### 4.1. ⚙️ Instalador

Permite elegir qué módulos están activos.

1. Elige un **tipo de instalación**:
   - **Básica**: Clientes y Productos.
   - **Comercial**: Clientes, Productos, Pedidos, Facturación y CRM.
   - **Completa**: todos los módulos (añade ERP, Configuración, Diagnóstico e Incidencias).
2. Pulsa **Instalar**.
3. La tabla inferior muestra cada módulo y si está **instalado** o no.

> Al aplicar un tipo de instalación se desactivan primero todos los módulos y después se activan solo los del tipo elegido.

### 4.2. 👥 Clientes

**Dar de alta un cliente:**

1. Rellena **Nombre** (obligatorio), **Email** y **Teléfono**.
2. Pulsa el botón de guardar.

La tabla inferior muestra todos los clientes con su **ID**, **nombre**, **email**, **teléfono** y **fecha de alta** (se pone automáticamente).

### 4.3. 📦 Productos

**Añadir un producto:**

1. Escribe **Nombre**, **Descripción**, **Precio** y **Stock** (unidades disponibles).
2. Pulsa el botón de guardar.

La tabla muestra el catálogo completo con precio y stock.

### 4.4. 🛒 Pedidos

**Registrar un pedido:**

1. Elige el **Cliente** en el desplegable (debe existir antes en el módulo Clientes).
2. Escribe el **Total** del pedido.
3. Elige el **Estado**:
   - **Pendiente**: recibido, todavía sin preparar.
   - **Procesando**: en preparación.
   - **Completado**: entregado.
   - **Cancelado**: anulado.
4. Pulsa el botón de guardar.

La tabla muestra cada pedido con su cliente, fecha, total y estado.

### 4.5. 🧾 Facturación

**Generar una factura:**

1. Elige el **Pedido** en el desplegable.
2. Pulsa **Generar Factura**.

El **importe** de la factura se toma automáticamente del total del pedido, y la fecha es la del momento en que se genera.

La tabla muestra cada factura con su número, el pedido, el cliente, la fecha y el importe.

### 4.6. 🔧 Configuración

Permite cambiar los parámetros generales:

| Parámetro | Ejemplo |
|---|---|
| IVA | 21 |
| Moneda | Euro (€) o Dólar ($) |
| Idioma | es |
| Máximo de usuarios | 20 |

Modifica los valores y pulsa **Guardar configuración**. La tabla inferior muestra los valores guardados.

### 4.7. ✅ Diagnóstico

Al abrir esta página se ejecutan automáticamente estas comprobaciones:

| Comprobación | Qué revisa |
|---|---|
| Conexión con SQLite | Que la base de datos responde |
| Tabla módulos / clientes / productos | Que las tablas existen y se pueden leer |
| Módulos instalados | Cuántos módulos están activos |
| Sistema de incidencias | Cuántas incidencias hay registradas |

Cada fila indica su **estado** y un **detalle**. Si alguna sale en rojo, consulta el apartado *Solución de problemas* del manual de instalación.

### 4.8. 🚨 Incidencias

Sirve para registrar errores o problemas (de clientes, pedidos, equipos, del propio sistema…).

**Registrar una incidencia:**

1. Escribe la **Descripción** del problema.
2. Elige el **Estado**: **Pendiente**, **En revisión** o **Resuelta**.
3. Pulsa el botón de guardar.

Debajo se muestra la lista de incidencias y el **historial de operaciones** del sistema.

### 4.9. 📊 Informes

Muestra un resumen general:

- Total de clientes, productos, pedidos, facturas, usuarios e incidencias.
- Módulos activos.
- Facturación total.
- Listado de incidencias y de las últimas operaciones.

**Exportar a CSV:** en la parte inferior hay botones para descargar en formato CSV (se abre con Excel o LibreOffice Calc):

- Clientes
- Productos
- Pedidos
- Facturas
- Incidencias

> Si al abrir el CSV en Excel los acentos se ven mal, ábrelo con *Datos → Desde texto/CSV* y elige la codificación UTF-8.

### 4.10. 👤 Usuarios

**Crear un usuario:**

1. Escribe **Nombre**, **Usuario** y **Contraseña**.
2. Elige el **Rol**: **Administrador**, **Comercial** o **Técnico**.
3. Pulsa **Crear Usuario**.

La tabla muestra todos los usuarios con su nombre, usuario y rol. Las contraseñas se guardan cifradas y nunca se muestran.

---

## 5. Roles de usuario

| Rol | Uso previsto |
|---|---|
| Administrador | Instalación, configuración y gestión de usuarios |
| Comercial | Clientes, pedidos y facturación |
| Técnico | Diagnóstico e incidencias |

> En la versión actual el rol se muestra en el Dashboard, pero **no limita el acceso**: todos los usuarios con sesión iniciada pueden entrar en todos los módulos.

---

## 6. Flujo de trabajo habitual

Un ejemplo de uso diario:

1. **Iniciar sesión.**
2. Dar de alta un **cliente** nuevo en *Clientes*.
3. Comprobar en *Productos* que hay **stock** suficiente.
4. Registrar el **pedido** en *Pedidos* con su estado (por ejemplo *Procesando*).
5. Generar la **factura** del pedido en *Facturación*.
6. Si surge algún problema, anotarlo en *Incidencias*.
7. A final de mes, revisar *Informes* y **exportar** los datos a CSV.
8. **Cerrar sesión.**

---

## 7. Limitaciones de la versión actual

- Los registros (clientes, productos, pedidos, facturas, incidencias y usuarios) **se pueden crear y consultar, pero no editar ni borrar** desde la aplicación.
- Los roles no restringen el acceso a los módulos.
- El total del pedido se escribe a mano y no descuenta stock automáticamente.
- No hay buscador ni filtros en los listados.

---

## 8. Preguntas frecuentes

**He olvidado mi contraseña.**
La aplicación no tiene recuperación de contraseña. Pide a un administrador que te cree un usuario nuevo desde *Usuarios*.

**Al entrar me lleva siempre al login.**
Tu sesión se ha cerrado o ha caducado. Vuelve a iniciar sesión.

**No aparece el cliente al crear un pedido.**
Primero tienes que darlo de alta en *Clientes*.

**No aparece el pedido al crear una factura.**
Comprueba en *Pedidos* que el pedido está registrado.

**¿Dónde se guardan los datos?**
En el archivo `base_datos/erp_crm.db`. Para hacer una copia de seguridad basta con copiar ese archivo.
