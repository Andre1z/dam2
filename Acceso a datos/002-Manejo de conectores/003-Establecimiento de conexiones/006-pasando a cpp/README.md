# Andrei BBDD C++ — uso desde terminal

Conversión a C++ del motor `AndreiBBDD.py`. Mantiene el mismo concepto y formato de almacenamiento: un archivo `.csv` binario de registros de tamaño fijo, un `.idx` con `id,posicion` y un `.esquema` con los nombres de campos.

## 1. Compilar

Requiere un compilador con C++20. En Ubuntu:

```bash
sudo apt install g++ make
make
```

Se genera el ejecutable `andrei`:

```bash
./andrei
```

El programa busca `config.json` en el directorio actual. También se puede indicar otra configuración:

```bash
./andrei /ruta/a/config.json
```

## 2. Configuración

```json
{
  "instalacion": "C:/htdocs/andrei-basededatos/",
  "tamanoRegistro": 512
}
```

`instalacion` indica dónde se guardan las bases de datos. `tamanoRegistro` indica el tamaño fijo, en bytes, de cada registro. El directorio debe existir o el programa debe poder crearlo y tener permisos de escritura.

En Windows, se puede usar una ruta como `C:/htdocs/andrei-basededatos/`. En Linux, se puede cambiar por una ruta con permisos de escritura, por ejemplo `/tmp/andrei-basededatos/`.

## 3. Arrancar la terminal

```bash
./andrei
```

El prompt inicial es:

```text
andrei>
```

Después de seleccionar una base:

```text
andrei[empresa]>
```

## 4. Comandos

### Crear una base de datos

```text
CREAR BASE empresa
```

### Seleccionar una base

```text
USAR empresa
```

### Crear una tabla

No hay que indicar `id` ni `activo`; el motor los añade automáticamente.

```text
CREAR TABLA clientes nombre,apellidos,email
```

Esto crea:

```text
clientes.csv
clientes.idx
clientes.esquema
```

El esquema real será:

```text
id,activo,nombre,apellidos,email
```

### Insertar

```text
INSERTAR clientes Jose,Vicente,jose@ejemplo.com
```

Respuesta:

```text
ID=1
```

Para incluir una coma o una barra inversa dentro de un campo, escápala con `\`. Por ejemplo:

```text
INSERTAR clientes Ana\, Maria,Garcia,ana@empresa.com
```

### Seleccionar por ID

```text
SELECCIONAR clientes 1
```

### Listar registros activos

```text
LISTAR clientes
```

### Buscar por columna

```text
BUSCAR clientes nombre Jose
```

### Actualizar

Se suministran todos los campos de usuario, pero no `id` ni `activo`:

```text
ACTUALIZAR clientes 1 Jose,Vicente,nuevo@ejemplo.com
```

### Eliminar

```text
ELIMINAR clientes 1
```

El borrado es lógico. El registro continúa en el archivo, pero `activo` pasa de `1` a `0`.

### Ver esquema

```text
ESQUEMA clientes
```

### Ayuda y salida

```text
AYUDA
SALIR
```

## 5. Sesión completa de ejemplo

```text
andrei> CREAR BASE empresa
OK
andrei> USAR empresa
OK
andrei[empresa]> CREAR TABLA clientes nombre,apellidos,email
OK
andrei[empresa]> INSERTAR clientes Ana,García,ana@empresa.com
ID=1
andrei[empresa]> INSERTAR clientes Luis,Pérez,luis@empresa.com
ID=2
andrei[empresa]> LISTAR clientes
activo=1  apellidos=García  email=ana@empresa.com  id=1  nombre=Ana
activo=1  apellidos=Pérez  email=luis@empresa.com  id=2  nombre=Luis
andrei[empresa]> BUSCAR clientes nombre Ana
activo=1  apellidos=García  email=ana@empresa.com  id=1  nombre=Ana
andrei[empresa]> ACTUALIZAR clientes 1 Ana,García,ana.nueva@empresa.com
OK
andrei[empresa]> ELIMINAR clientes 2
OK
andrei[empresa]> LISTAR clientes
activo=1  apellidos=García  email=ana.nueva@empresa.com  id=1  nombre=Ana
andrei[empresa]> SALIR
```

## 6. Estructura en disco

```text
C:/htdocs/andrei-basededatos/
└── empresa/
    ├── clientes.csv
    ├── clientes.esquema
    └── clientes.idx
```

Cada registro ocupa exactamente `tamanoRegistro` bytes. El índice guarda la posición del registro:

```text
1,0
2,512
3,1024
```

Así, `SELECCIONAR clientes 3` consulta el índice, obtiene la posición `1024` y hace acceso directo al registro.

## 7. Correspondencia con la versión Python

| Python | Terminal C++ |
|---|---|
| `creaBaseDatos()` | `CREAR BASE` |
| `usaBaseDatos()` | `USAR` |
| `creaTabla()` | `CREAR TABLA` |
| `insertarDatos()` | `INSERTAR` |
| `seleccionar()` | `SELECCIONAR` |
| `listarTodo()` | `LISTAR` |
| `buscarColumna()` | `BUSCAR` |
| `actualizar()` | `ACTUALIZAR` |
| `eliminar()` | `ELIMINAR` |
| `obtenerEsquema()` | `ESQUEMA` |

## 8. Limitaciones conservadas intencionadamente

Esta primera versión es una conversión sencilla, no un rediseño. Por ello conserva varias características del motor Python: campos separados por comas sin escaping CSV, registros de tamaño fijo, índice lineal en texto, borrado lógico y ausencia de transacciones/concurrencia. Los valores no deben contener comas.

El objetivo de esta versión es tener el mismo motor funcionando en C++ antes de introducir mejoras estructurales.
