# Andrei BBDD C++ + conector Python

Motor de base de datos en C++20 con ejecutable de terminal y módulo nativo para Python 3.

## 1. Dependencias (Ubuntu 24.04)

```bash
sudo apt update
sudo apt install build-essential python3-dev
```

## 2. Compilar

```bash
make clean
make
```

Se generan:

- `andreibbdd`: cliente de terminal.
- `andreibbdd.cpython-312-...so`: módulo nativo de Python (el sufijo depende de tu Python).

## 3. Instalar a nivel de sistema

```bash
sudo make install
```

Instala:

- `/usr/local/bin/andreibbdd`
- `/usr/local/lib/python3.12/dist-packages/andreibbdd....so` (ruta detectada automáticamente)
- `/etc/andreibbdd/config.json`
- datos en `/var/andrei-basededatos/`

El instalador asigna la carpeta de datos al usuario que ejecutó `sudo make install`, para que pueda crear bases sin ejecutar Python como root.

## 4. Probar desde cualquier directorio

```bash
cd /tmp
python3 -c "import andreibbdd; print(andreibbdd.__file__)"
python3 -c "import andreibbdd; print(andreibbdd.configuracion())"
```

El `import` ya no construye el motor inmediatamente. El motor se crea en la primera operación y cualquier excepción C++ se transforma en `RuntimeError` de Python, en lugar de abortar el intérprete.

## 5. Uso desde Python

```python
import andreibbdd

andreibbdd.crear_base("empresa")
andreibbdd.usar_base("empresa")
andreibbdd.crear_tabla("clientes", "nombre,apellidos,email")

id_cliente = andreibbdd.insertar(
    "clientes",
    ["Ana", "Garcia", "ana@empresa.com"]
)

print(id_cliente)
print(andreibbdd.seleccionar("clientes", id_cliente))
print(andreibbdd.listar("clientes"))
print(andreibbdd.buscar("clientes", "nombre", "Ana"))

andreibbdd.actualizar(
    "clientes",
    id_cliente,
    ["Ana", "Garcia", "nuevo@empresa.com"]
)

andreibbdd.eliminar("clientes", id_cliente)
```

Funciones disponibles:

```text
crear_base(nombre)
usar_base(nombre)
crear_tabla(tabla, esquema)
insertar(tabla, lista)
seleccionar(tabla, id)
listar(tabla)
buscar(tabla, columna, valor)
actualizar(tabla, id, lista)
eliminar(tabla, id)
configuracion()
```

## 6. Terminal

Tras instalar:

```bash
andreibbdd
```

Comandos principales:

```text
CREAR BASE empresa
USAR empresa
CREAR TABLA clientes nombre,apellidos,email
INSERTAR clientes Ana,Garcia,ana@empresa.com
LISTAR clientes
SELECCIONAR clientes 1
BUSCAR clientes nombre Ana
ACTUALIZAR clientes 1 Ana,Garcia,nueva@empresa.com
ELIMINAR clientes 1
SALIR
```

## 7. Configuración

Configuración global:

```text
/etc/andreibbdd/config.json
```

Contenido por defecto:

```json
{
  "instalacion": "/var/andrei-basededatos/",
  "tamanoRegistro": 512
}
```

El cliente de terminal busca `config.json` junto al ejecutable. Si no está allí, busca la variable de entorno `ANDREIBBDD_CONFIG` y, por último, `/etc/andreibbdd/config.json`.

Ejemplo con configuración personalizada:

```bash
export ANDREIBBDD_CONFIG=/home/andrei/mi-config.json
python3 programa.py
```

## 8. Reinstalar tras modificar C++

```bash
make clean
make
sudo make install
```

Comprueba desde fuera del proyecto:

```bash
cd /tmp
python3 -c "import andreibbdd; print(andreibbdd.configuracion())"
```

## 9. Desinstalar

```bash
sudo make uninstall
```

La desinstalación conserva deliberadamente `/var/andrei-basededatos` para no borrar bases de datos.

## 10. Instrucciones DDL adicionales en español

El terminal incorpora estas equivalencias:

```text
SQL                                      AndreiBBDD
ALTER TABLE clientes ADD telefono        ALTERAR TABLA clientes ANADIR telefono
ALTER TABLE clientes DROP COLUMN telefono ALTERAR TABLA clientes ELIMINAR COLUMNA telefono
ALTER TABLE clientes RENAME COLUMN a TO b ALTERAR TABLA clientes RENOMBRAR COLUMNA a b
ALTER TABLE clientes MODIFY/ALTER ...     ALTERAR TABLA clientes MODIFICAR COLUMNA a b
TRUNCATE TABLE clientes                   TRUNCAR TABLA clientes
DROP TABLE clientes                       ELIMINAR TABLA clientes
DROP DATABASE empresa                     ELIMINAR BASE empresa
```

`ANADIR` también acepta `AÑADIR`. Como este motor todavía no maneja tipos de columna, `MODIFICAR COLUMNA` modifica el nombre de la columna y se comporta como `RENOMBRAR COLUMNA`.

Desde Python están disponibles además:

```python
andreibbdd.alterar_anadir("clientes", "telefono")
andreibbdd.alterar_eliminar_columna("clientes", "telefono")
andreibbdd.alterar_renombrar_columna("clientes", "email", "correo")
andreibbdd.alterar_modificar_columna("clientes", "correo", "email")
andreibbdd.truncar_tabla("clientes")
andreibbdd.eliminar_tabla("clientes")
andreibbdd.eliminar_base("empresa")
```

## DML v0.3 - INSERTAR, ACTUALIZAR y ELIMINAR

La terminal acepta las nuevas sentencias con nomenclatura en español:

```text
INSERTAR EN clientes VALORES ('Ana','30')
INSERTAR EN clientes (nombre) VALORES ('Ana')
INSERTAR EN copia SELECCIONAR * DE clientes

ACTUALIZAR clientes ESTABLECER nombre='Ana'
ACTUALIZAR clientes ESTABLECER edad='30' DONDE id='1'

ELIMINAR DE clientes
ELIMINAR DE clientes DONDE id='1'
```

`DONDE` implementa en esta versión comparaciones de igualdad (`columna=valor`).
`ELIMINAR` continúa usando borrado lógico internamente, preservando la arquitectura del motor.
`INSERTAR ... SELECCIONAR *` requiere que origen y destino tengan el mismo número de columnas de usuario.

### Python

```python
import andreibbdd

andreibbdd.usar_base("empresa")
andreibbdd.insertar("clientes", ["Ana", "30"])
andreibbdd.insertar_columnas("clientes", ["nombre"], ["Luis"])
andreibbdd.insertar_desde("copia", "clientes")
andreibbdd.actualizar_donde("clientes", {"edad": "31"}, "nombre", "Ana")
andreibbdd.eliminar_donde("clientes", "nombre", "Luis")
# Sin condición elimina lógicamente todos los registros:
andreibbdd.eliminar_donde("clientes")
```

### Actualizar una instalación anterior

```bash
make clean
make -j$(nproc)
sudo make install
```

`make install` sobrescribe el ejecutable y el módulo Python instalados, manteniendo las bases de datos de `/var/andrei-basededatos`.
