# Manual de instalación — ERP CRM

Este manual explica cómo instalar y poner en marcha la aplicación **ERP CRM** en un equipo local con XAMPP.

---

## 1. Requisitos

| Requisito | Detalle |
|---|---|
| Sistema operativo | Windows, Linux o macOS |
| Servidor web | Apache (incluido en XAMPP) |
| PHP | 8.0 o superior (probado con PHP 8.2) |
| Extensiones de PHP | `pdo_sqlite` y `sqlite3` |
| Base de datos | SQLite (es un archivo, **no hace falta MySQL**) |
| Navegador | Cualquier navegador actual (Chrome, Firefox, Edge…) |

> No hace falta instalar ni arrancar MySQL: toda la información se guarda en el archivo `base_datos/erp_crm.db`.

---

## 2. Estructura del proyecto

```
002-Proyecto/
├── index.php              → Panel principal (dashboard)
├── assets/
│   └── css/general.css    → Estilos de la aplicación
├── base_datos/
│   ├── crear_bd.php       → Crea la base de datos y sus tablas
│   ├── datos_prueba.php   → Carga datos de ejemplo y usuarios de prueba
│   └── erp_crm.db         → Base de datos SQLite
├── documentos/            → Manuales
├── includes/
│   ├── conexion.php       → Conexión con la base de datos
│   ├── menu.php           → Menú lateral
│   └── verificar_sesion.php → Protege las páginas que requieren login
└── modulos/               → Páginas de la aplicación (login, clientes, pedidos…)
```

---

## 3. Instalación paso a paso

### 3.1. Instalar XAMPP

1. Descarga XAMPP desde la web oficial de Apache Friends.
2. Instálalo en la ruta por defecto (`C:\xampp` en Windows).
3. Abre el **Panel de control de XAMPP**.

### 3.2. Copiar el proyecto

Copia la carpeta del proyecto dentro de `C:\xampp\htdocs\`.

Recomendación: usa un nombre de carpeta **sin espacios ni tildes**, por ejemplo:

```
C:\xampp\htdocs\erp_crm\
```

Así la dirección será más sencilla: `http://localhost/erp_crm/`.

> Si dejas la carpeta en su ruta original (con espacios y tildes), la aplicación funciona igual, pero la dirección del navegador será más larga.

### 3.3. Comprobar las extensiones de SQLite

1. Abre el archivo `C:\xampp\php\php.ini`.
2. Comprueba que estas dos líneas **no** empiezan por `;`:

   ```ini
   extension=pdo_sqlite
   extension=sqlite3
   ```

3. Si has tenido que cambiar algo, guarda el archivo y reinicia Apache.

También puedes comprobarlo desde una terminal:

```bash
C:\xampp\php\php.exe -m
```

En la lista deben aparecer `pdo_sqlite` y `sqlite3`.

### 3.4. Arrancar Apache

En el Panel de control de XAMPP, pulsa **Start** en la fila de **Apache**. Debe ponerse en verde.

### 3.5. Permisos de la carpeta `base_datos`

SQLite necesita poder **escribir** en el archivo `erp_crm.db` y en su carpeta.

- En Windows con XAMPP normalmente no hay que hacer nada.
- En Linux/macOS, da permisos de escritura al usuario de Apache:

  ```bash
  chmod 775 base_datos
  ```

  ```bash
  chmod 664 base_datos/erp_crm.db
  ```

### 3.6. Crear la base de datos

Abre en el navegador:

```
http://localhost/erp_crm/base_datos/crear_bd.php
```

Debe aparecer el mensaje **"✅ Base de datos creada correctamente"**.

Este script crea (si no existen) las tablas `modulos`, `configuraciones`, `clientes`, `productos`, `pedidos`, `facturas`, `incidencias`, `operaciones` y `usuarios`, y registra los módulos disponibles. Se puede ejecutar varias veces sin perder datos.

### 3.7. Cargar los datos de prueba (opcional, recomendado)

Abre en el navegador:

```
http://localhost/erp_crm/base_datos/datos_prueba.php
```

Debe aparecer **"✅ Datos de prueba cargados correctamente"**. Se cargan:

- 15 clientes, 12 productos y 24 pedidos con fechas de los últimos meses.
- Las facturas de los pedidos completados o en proceso.
- 10 incidencias y la configuración básica (IVA, moneda, idioma…).
- Tres usuarios de prueba: `admin` (Administrador), `comercial` (Comercial) y `tecnico` (Técnico).

> ⚠️ Este script **vacía** clientes, productos, pedidos, facturas, incidencias y configuración antes de volver a cargarlos. No lo ejecutes si ya tienes datos reales. No borra los usuarios, los módulos ni el historial de operaciones.

**Contraseñas de los usuarios de prueba:** están en el comentario del principio del archivo `base_datos/datos_prueba.php`. Cada vez que se ejecuta el script, esas contraseñas se restablecen.

### 3.8. Primer acceso

1. Abre `http://localhost/erp_crm/`.
2. Como no hay sesión iniciada, la aplicación te lleva a la pantalla de **Iniciar sesión**.
3. Entra con el usuario `admin` y su contraseña.
4. Si no cargaste los datos de prueba, crea una cuenta desde el enlace **"Regístrate"** (las cuentas creadas así tienen el rol *Comercial*).

### 3.9. Activar los módulos

1. En el menú lateral, entra en **⚙️ Instalador**.
2. Elige el tipo de instalación y pulsa **Instalar**:

| Tipo | Módulos que se activan |
|---|---|
| Instalación Básica | Clientes, Productos |
| Instalación Comercial | Clientes, Productos, Pedidos, Facturación, CRM |
| Instalación Completa | Todos: los anteriores + ERP, Configuración, Diagnóstico, Incidencias |

### 3.10. Verificar la instalación

Entra en **✅ Diagnóstico**. La página comprueba:

- La conexión con SQLite.
- Que existen las tablas de módulos, clientes y productos.
- Cuántos módulos hay instalados.
- Que el sistema de incidencias funciona.

Si todas las comprobaciones salen en verde, la instalación está terminada.

---

## 4. Configuración inicial

En **🔧 Configuración** puedes ajustar:

- **IVA** (por defecto 21 %).
- **Moneda** (Euro o Dólar).
- **Idioma**.
- **Número máximo de usuarios**.

---

## 5. Seguridad tras la instalación

Para un uso real (no de prueba) se recomienda:

1. **Borrar o proteger** `base_datos/crear_bd.php` y `base_datos/datos_prueba.php`. Ahora mismo se pueden abrir sin iniciar sesión, y `datos_prueba.php` borra los datos de negocio.
2. **Cambiar las contraseñas** de los usuarios de prueba o eliminarlos y crear usuarios propios desde **👤 Usuarios**.
3. Impedir el acceso directo al archivo `erp_crm.db` desde el navegador, por ejemplo con un archivo `.htaccess` dentro de `base_datos/`:

   ```apache
   <Files "erp_crm.db">
       Require all denied
   </Files>
   ```

4. Hacer **copias de seguridad** periódicas copiando el archivo `base_datos/erp_crm.db`.

---

## 6. Solución de problemas

| Problema | Causa probable | Solución |
|---|---|---|
| "Error de conexión" / `could not find driver` | La extensión `pdo_sqlite` no está activa | Activarla en `php.ini` (apartado 3.3) y reiniciar Apache |
| `attempt to write a readonly database` | Sin permisos de escritura en `base_datos/` | Dar permisos de escritura (apartado 3.5) |
| `no such table: ...` | No se ha creado la base de datos | Ejecutar `crear_bd.php` (apartado 3.6) |
| No puedo iniciar sesión | No hay usuarios o la contraseña no es correcta | Ejecutar `datos_prueba.php` o registrarse desde `registro.php` |
| La página no carga (`localhost` no responde) | Apache está parado o el puerto 80 está ocupado | Arrancar Apache en XAMPP; si el puerto está ocupado, cerrar el programa que lo usa (por ejemplo Skype o IIS) o cambiar el puerto en `httpd.conf` |
| Me lleva siempre al login | La sesión ha caducado o se cerró | Volver a iniciar sesión |
| Los acentos se ven mal en el CSV de Excel | Excel no detecta UTF-8 | Abrir el CSV desde Excel con *Datos → Desde texto/CSV* y elegir UTF-8 |
