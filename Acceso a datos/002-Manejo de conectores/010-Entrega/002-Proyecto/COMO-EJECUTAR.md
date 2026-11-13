# AndreiDB — cómo funciona, cómo compilarlo y cómo ejecutarlo

## 1. Qué es

**AndreiDB** es un gestor de bases de datos (SGBD) pequeño, escrito desde cero en C++17. Tiene dos partes:

| Parte | Carpeta | Qué hace |
|---|---|---|
| **Servidor** (C++) | `server/`, `procedimientos/` | Escucha en `127.0.0.1:5555`, recibe sentencias SQL en texto y responde en JSON. |
| **Conector** (Python) | `conector/adreidb.py` | Librería cliente con la forma de `sqlite3` / `pymysql`: `connect()`, `cursor()`, `execute()`, `fetchall()`, `fetchone()`, `begin()`, `commit()`, `rollback()`, `callproc()`. |

### Recorrido de una consulta

```
Python ──TCP:5555──▶ ServidorTCP ──▶ AnalizadorSQL ──▶ BaseDatos / MotorAlmacenamiento ──▶ data/clientes.db
       ◀──JSON─────  {"success": ..., "message": ..., "rows": [...]}
```

- Cada sentencia usa **su propia conexión**: el conector la abre, envía el SQL, cierra su lado de escritura (`shutdown`) y lee la respuesta hasta que el servidor cierra.
- `server/main.cpp` monta las piezas: `BaseDatos`, `GestorTransacciones`, `AnalizadorSQL`, `GestorProcedimientos` y `ServidorTCP`.
- Los datos se guardan en `data/`, **junto al ejecutable**. Da igual desde qué carpeta se arranque.

```
data/
├── clientes.db             registros de la tabla clientes
├── clientes.db.bak         copia de seguridad mientras hay una transacción abierta
└── procedimientos/         procedimientos almacenados (*.proc)
    └── listar_clientes.proc
```

### SQL soportado

Solo existe **una tabla fija**, `clientes`, con los campos `id`, `nombre`, `apellidos`, `telefono` y `creado`.

```sql
SELECT * FROM clientes
SELECT * FROM clientes WHERE nombre = 'Ana'
INSERT INTO clientes VALUES ('Ana', 'Lopez', '600111222')
INSERT INTO clientes (nombre, apellidos, telefono) VALUES ('Luis', 'Perez', '600333444')
UPDATE clientes SET telefono = '699000000' WHERE id = 1
DELETE FROM clientes WHERE id = 1
BEGIN
COMMIT
ROLLBACK
CALL listar_clientes
```

- El `WHERE` admite **una sola** condición de igualdad (`campo = valor`).
- En `INSERT` sin lista de campos se dan 3 o 4 valores: `nombre, apellidos, telefono[, creado]`. Si no se indica `creado`, se pone la fecha actual.
- `CALL nombre` ejecuta, línea a línea, las sentencias de `data/procedimientos/nombre.proc`.

---

## 2. Compilar

### Windows

Hace falta **GCC 8 o superior** (C++17 con `<filesystem>`).

> ⚠️ El `g++` de `C:\MinGW` (GCC 6.3) es demasiado antiguo. El script busca automáticamente el GCC de **WinLibs** instalado con winget. Si no lo tienes:
>
> ```powershell
> winget install BrechtSanders.WinLibs.POSIX.UCRT
> ```

Desde la carpeta raíz del proyecto (`002-Proyecto`), en PowerShell:

```powershell
.\compilar-windows.bat
```

Genera `andreidb.exe` en esta misma carpeta.

### Linux / macOS

```bash
make            # compila ./andreidb
make ejecutar   # compila y arranca el servidor
make clean      # borra el ejecutable
```

---

## 3. Ejecutar

### Paso 1 — Arrancar el servidor (terminal 1)

Desde la raíz del proyecto:

```powershell
.\andreidb.exe
```

Debe mostrar:

```
=====================================
           AndreiDB Server
=====================================
Base de datos iniciada correctamente
Datos en: ...\002-Proyecto\data
Procedimientos en: ...\002-Proyecto\data\procedimientos
Servidor escuchando en 127.0.0.1:5555
```

**Deja esta ventana abierta** mientras uses la base de datos. Para pararlo: `Ctrl + C`.

> Si sale *"¿el puerto 5555 ya está en uso?"*, ya hay otra instancia abierta: ciérrala primero.

### Paso 2 — Usar el conector (terminal 2)

Entra en la carpeta del conector:

```powershell
cd conector
```

#### Opción A: prueba rápida en PowerShell

```powershell
@'
import adreidb
c = adreidb.connect()
print(c.execute("INSERT INTO clientes VALUES ('Ana','Lopez','600111222')"))
print(c.execute("SELECT * FROM clientes"))
'@ | python -
```

> La línea de cierre `'@` tiene que ir **pegada al margen izquierdo**, sin espacios delante.
>
> No uses `python -c "... \"...\" ..."`: PowerShell 5.1 elimina las comillas dobles escapadas y Python da `SyntaxError: unterminated string literal`.

#### Opción B: script de prueba (recomendado)

Crea `conector/prueba.py`:

```python
import adreidb

conexion = adreidb.connect()          # 127.0.0.1:5555 por defecto
cursor = conexion.cursor()

# Insertar
print(conexion.execute("INSERT INTO clientes VALUES ('Ana', 'Lopez', '600111222')"))

# Consultar todas las filas
cursor.execute("SELECT * FROM clientes")
for fila in cursor.fetchall():
    print(fila)

# Consultar con filtro
cursor.execute("SELECT * FROM clientes WHERE nombre = 'Ana'")
print("Primera Ana:", cursor.fetchone())

# Transacción que se deshace
conexion.begin()
conexion.execute("DELETE FROM clientes WHERE nombre = 'Ana'")
conexion.rollback()                   # las filas borradas vuelven

# Procedimiento almacenado
cursor.callproc("listar_clientes")
print("Procedimiento:", cursor.fetchall())

cursor.close()
conexion.close()
```

Y ejecútalo:

```powershell
python prueba.py
```

Salida esperada (aproximada):

```
{'success': True, 'message': '1 fila insertada (id 1)'}
{'id': 1, 'nombre': 'Ana', 'apellidos': 'Lopez', 'telefono': '600111222', 'creado': '...'}
...
```

> Cada `INSERT` se guarda de verdad en `data/clientes.db`: si ejecutas el script varias veces, se añadirá otra Ana cada vez.

---

## 4. ¿Por qué no funciona en el navegador?

Al abrir `http://127.0.0.1:5555` el navegador muestra **"Esta página no funciona"** (`ERR_INVALID_HTTP_RESPONSE`). Es lo esperado: **AndreiDB no es un servidor web**.

1. El navegador envía una petición HTTP (`GET / HTTP/1.1 ...`) y no cierra su lado de escritura.
2. El servidor espera hasta su tiempo máximo (2 s) y trata ese texto como si fuera SQL.
3. Responde con un JSON de error **sin cabeceras HTTP**.
4. El navegador descarta la respuesta porque no es HTTP válido.

Para conectarse hay que usar el conector de Python (`conector/adreidb.py`) o cualquier cliente TCP que envíe el SQL y haga `shutdown` de escritura.

---

## 5. Problemas frecuentes

| Problema | Causa / solución |
|---|---|
| `Error al compilar. Hace falta GCC 8 o superior` | Se está usando el GCC 6.3 de `C:\MinGW`. Instala WinLibs (ver apartado 2). |
| `¿el puerto 5555 ya está en uso?` | Ya hay un `andreidb.exe` abierto. Ciérralo o búscalo en el Administrador de tareas. |
| `adreidb.ErrorAndreiDB: [WinError 10061] ...` | El servidor no está arrancado. Ejecuta primero `.\andreidb.exe`. |
| `ModuleNotFoundError: No module named 'adreidb'` | Estás fuera de la carpeta `conector`. Haz `cd conector`. |
| `SyntaxError: unterminated string literal` | Problema de comillas de PowerShell con `python -c`. Usa la opción A (here-string) o la B (script). |
| El navegador dice "Esta página no funciona" | Normal: el servidor no habla HTTP (ver apartado 4). |
