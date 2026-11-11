# Reporte de proyecto

## Estructura del proyecto

```
C:\xampp\htdocs\dam2\Acceso a datos\004-Bases de datos objeto relacionales y orientadas a objetos\009-Entrega
├── 001-Ejercicios
│   ├── 001-Gestores de bases de datos objeto relacionales
│   │   ├── 000-Introducción.md
│   │   ├── 001-objeto.json
│   │   ├── 002-resumen de yaml.md
│   │   ├── 003-ejemplo en python.py
│   │   ├── 004-lectura.py
│   │   ├── 005-objeto complejo.py
│   │   └── datos.yaml
│   ├── 002-Gestión de objetos con SQL; ANSI SQL
│   │   ├── 000-Introducción.md
│   │   ├── 001-ejemplo de uso de la clase.py
│   │   ├── 002-demostracion segunda parte.py
│   │   ├── datos
│   │   │   └── empresa
│   │   │       └── clientes
│   │   │           └── a4f0069d-5a6f-4b52-8020-0bff401c7015.yaml
│   │   └── gestor.py
│   ├── 003-Acceso a las funciones del gestor de base de datos objeto-relacional
│   │   ├── 000-Introducción.md
│   │   └── gestor-yaml
│   │       ├── CMakeLists.txt
│   │       ├── README.md
│   │       ├── build
│   │       │   ├── CMakeCache.txt
│   │       │   ├── CMakeFiles
│   │       │   │   ├── 3.28.3
│   │       │   │   │   ├── CMakeCXXCompiler.cmake
│   │       │   │   │   ├── CMakeDetermineCompilerABI_CXX.bin
│   │       │   │   │   ├── CMakeSystem.cmake
│   │       │   │   │   └── CompilerIdCXX
│   │       │   │   │       ├── CMakeCXXCompilerId.cpp
│   │       │   │   │       └── a.out
│   │       │   │   ├── CMakeConfigureLog.yaml
│   │       │   │   ├── CMakeDirectoryInformation.cmake
│   │       │   │   ├── Makefile.cmake
│   │       │   │   ├── Makefile2
│   │       │   │   ├── TargetDirectories.txt
│   │       │   │   ├── cmake.check_cache
│   │       │   │   ├── ejemplo.dir
│   │       │   │   │   ├── DependInfo.cmake
│   │       │   │   │   ├── build.make
│   │       │   │   │   ├── cmake_clean.cmake
│   │       │   │   │   ├── compiler_depend.make
│   │       │   │   │   ├── compiler_depend.ts
│   │       │   │   │   ├── depend.make
│   │       │   │   │   ├── ejemplos
│   │       │   │   │   │   ├── main.cpp.o
│   │       │   │   │   │   └── main.cpp.o.d
│   │       │   │   │   ├── flags.make
│   │       │   │   │   ├── link.txt
│   │       │   │   │   └── progress.make
│   │       │   │   ├── gestoryaml.dir
│   │       │   │   │   ├── DependInfo.cmake
│   │       │   │   │   ├── build.make
│   │       │   │   │   ├── cmake_clean.cmake
│   │       │   │   │   ├── cmake_clean_target.cmake
│   │       │   │   │   ├── compiler_depend.make
│   │       │   │   │   ├── compiler_depend.ts
│   │       │   │   │   ├── depend.make
│   │       │   │   │   ├── flags.make
│   │       │   │   │   ├── link.txt
│   │       │   │   │   ├── progress.make
│   │       │   │   │   └── src
│   │       │   │   │       ├── GestorYAML.cpp.o
│   │       │   │   │       └── GestorYAML.cpp.o.d
│   │       │   │   └── progress.marks
│   │       │   ├── Makefile
│   │       │   ├── cmake_install.cmake
│   │       │   ├── ejemplo
│   │       │   └── libgestoryaml.a
│   │       ├── datos
│   │       │   ├── empresa
│   │       │   │   ├── clientes
│   │       │   │   │   └── aaa215e0-9e1a-490c-9ed9-3724f7b59c27.yaml
│   │       │   │   ├── pedidos
│   │       │   │   │   └── c1fd2848-77c1-47cd-a431-5ae4867fcab7.yaml
│   │       │   │   └── productos
│   │       │   │       └── 6414b724-01fc-4184-a593-c7a1f2c043ba.yaml
│   │       │   └── instituto
│   │       │       └── alumnos
│   │       │           └── 0307803e-f479-44a3-a10a-7508bb3372c3.yaml
│   │       ├── ejemplos
│   │       │   └── main.cpp
│   │       ├── include
│   │       │   └── GestorYAML.h
│   │       └── src
│   │           └── GestorYAML.cpp
│   ├── 004-Gestores de bases de datos orientadas a objetos
│   │   ├── 000-Introducción.md
│   │   ├── 001-objetivo.md
│   │   ├── 002-punto de partida - gestor-yaml
│   │   │   ├── CMakeLists.txt
│   │   │   ├── README.md
│   │   │   ├── build
│   │   │   │   ├── CMakeCache.txt
│   │   │   │   ├── CMakeFiles
│   │   │   │   │   ├── 3.28.3
│   │   │   │   │   │   ├── CMakeCXXCompiler.cmake
│   │   │   │   │   │   ├── CMakeDetermineCompilerABI_CXX.bin
│   │   │   │   │   │   └── CMakeSystem.cmake
│   │   │   │   │   ├── CMakeConfigureLog.yaml
│   │   │   │   │   ├── CMakeDirectoryInformation.cmake
│   │   │   │   │   ├── Makefile.cmake
│   │   │   │   │   ├── Makefile2
│   │   │   │   │   ├── TargetDirectories.txt
│   │   │   │   │   ├── cmake.check_cache
│   │   │   │   │   ├── ejemplo.dir
│   │   │   │   │   │   ├── DependInfo.cmake
│   │   │   │   │   │   ├── build.make
│   │   │   │   │   │   ├── cmake_clean.cmake
│   │   │   │   │   │   ├── compiler_depend.make
│   │   │   │   │   │   ├── compiler_depend.ts
│   │   │   │   │   │   ├── depend.make
│   │   │   │   │   │   ├── flags.make
│   │   │   │   │   │   ├── link.txt
│   │   │   │   │   │   └── progress.make
│   │   │   │   │   ├── gestoryaml.dir
│   │   │   │   │   │   ├── DependInfo.cmake
│   │   │   │   │   │   ├── build.make
│   │   │   │   │   │   ├── cmake_clean.cmake
│   │   │   │   │   │   ├── cmake_clean_target.cmake
│   │   │   │   │   │   ├── compiler_depend.make
│   │   │   │   │   │   ├── compiler_depend.ts
│   │   │   │   │   │   ├── depend.make
│   │   │   │   │   │   ├── flags.make
│   │   │   │   │   │   ├── link.txt
│   │   │   │   │   │   ├── progress.make
│   │   │   │   │   │   └── src
│   │   │   │   │   │       ├── GestorYAML.cpp.o
│   │   │   │   │   │       └── GestorYAML.cpp.o.d
│   │   │   │   │   └── progress.marks
│   │   │   │   ├── Makefile
│   │   │   │   ├── cmake_install.cmake
│   │   │   │   ├── ejemplo
│   │   │   │   └── libgestoryaml.a
│   │   │   ├── datos
│   │   │   │   ├── empresa
│   │   │   │   │   ├── clientes
│   │   │   │   │   │   └── aaa215e0-9e1a-490c-9ed9-3724f7b59c27.yaml
│   │   │   │   │   ├── pedidos
│   │   │   │   │   │   └── c1fd2848-77c1-47cd-a431-5ae4867fcab7.yaml
│   │   │   │   │   └── productos
│   │   │   │   │       └── 6414b724-01fc-4184-a593-c7a1f2c043ba.yaml
│   │   │   │   └── instituto
│   │   │   │       └── alumnos
│   │   │   │           └── 0307803e-f479-44a3-a10a-7508bb3372c3.yaml
│   │   │   ├── ejemplos
│   │   │   │   └── main.cpp
│   │   │   ├── include
│   │   │   │   └── GestorYAML.h
│   │   │   └── src
│   │   │       └── GestorYAML.cpp
│   │   ├── 003-punto de partida - jocarsa-basededatos
│   │   │   ├── UI
│   │   │   │   ├── andreibbdd_ffi.php
│   │   │   │   ├── api.php
│   │   │   │   ├── app.js
│   │   │   │   ├── index.html
│   │   │   │   ├── private
│   │   │   │   │   ├── .htaccess
│   │   │   │   │   ├── lock
│   │   │   │   │   ├── projects.json
│   │   │   │   │   └── projects.linux-backup.json
│   │   │   │   └── style.css
│   │   │   ├── motor
│   │   │   │   ├── Makefile
│   │   │   │   ├── README-ACTUALIZACION.md
│   │   │   │   ├── README-CAMBIOS.md
│   │   │   │   ├── README-SISTEMA.md
│   │   │   │   ├── README-WINDOWS.md
│   │   │   │   ├── README.md
│   │   │   │   ├── andreibbdd.dll
│   │   │   │   ├── andreibbdd.exe
│   │   │   │   ├── compat
│   │   │   │   │   └── json-c
│   │   │   │   │       └── json.h
│   │   │   │   ├── compilar-windows.bat
│   │   │   │   ├── config.json
│   │   │   │   ├── config.windows.json
│   │   │   │   ├── docs
│   │   │   │   │   └── ARQUITECTURA.md
│   │   │   │   ├── examples
│   │   │   │   │   ├── colecciones.php
│   │   │   │   │   ├── colecciones.py
│   │   │   │   │   ├── demo.php
│   │   │   │   │   ├── demo.py
│   │   │   │   │   └── prueba_subcolecciones.py
│   │   │   │   ├── include
│   │   │   │   │   ├── AndreiBBDD.hpp
│   │   │   │   │   └── AndreiORM.hpp
│   │   │   │   ├── install-system.sh
│   │   │   │   ├── install.sh
│   │   │   │   ├── jocarsabbdd
│   │   │   │   ├── jocarsabbdd.cpython-312-x86_64-linux-gnu.so
│   │   │   │   ├── jocarsabbdd.so
│   │   │   │   ├── libjocarsaorm.so
│   │   │   │   ├── php
│   │   │   │   │   └── AndreiORM.php
│   │   │   │   ├── python
│   │   │   │   │   └── andreiorm.py
│   │   │   │   └── src
│   │   │   │       ├── AndreiBBDD.cpp
│   │   │   │       ├── AndreiORM.cpp
│   │   │   │       ├── andreibbdd_c.cpp
│   │   │   │       ├── andreiorm_c.cpp
│   │   │   │       ├── conector_php.cpp
│   │   │   │       ├── conector_python.cpp
│   │   │   │       └── main.cpp
│   │   │   └── motor.zip
│   │   └── 004-tipos de datos jocarsa.md
│   ├── 005-Gestión de la persistencia de objetos
│   │   └── 000-Introducción.md
│   ├── 006-El interfaz de programación de aplicaciones de la base de datos orientada a objetos
│   │   └── 000-Introducción.md
│   ├── 007-Gestión de transacciones
│   │   └── 000-Introducción.md
│   └── 008-Desarrollo de programas que gestionan objetos en bases de datos
│       └── 000-Introducción.md
├── 002-Proyecto
│   ├── .md
│   ├── base_datos
│   │   └── biblioteca.db
│   ├── compilacion
│   │   ├── gestor_objetos.exe
│   │   └── makefile
│   ├── nucleo
│   │   ├── main.cpp
│   │   ├── main.hpp
│   │   ├── modelos
│   │   │   ├── autor.cpp
│   │   │   ├── autor.hpp
│   │   │   ├── categoria.cpp
│   │   │   ├── categoria.hpp
│   │   │   ├── libro.cpp
│   │   │   └── libro.hpp
│   │   ├── persistencia
│   │   │   ├── basedatos.cpp
│   │   │   ├── basedatos.hpp
│   │   │   ├── inicializadorbd.cpp
│   │   │   ├── inicializadorbd.hpp
│   │   │   ├── orm.cpp
│   │   │   └── orm.hpp
│   │   └── utilidades
│   │       ├── logger.cpp
│   │       └── logger.hpp
│   ├── pruebas
│   │   └── prueba_transacciones.cpp
│   └── sql
│       ├── crear_tablas.sql
│       └── datos_iniciales.sql
└── 003-Resultado de Aprendizaje
```

## Código (intercalado)

# 009-Entrega
## 001-Ejercicios
### 001-Gestores de bases de datos objeto relacionales
**000-Introducción.md**
```markdown
# Gestores de bases de datos objeto relacionales
- Gestores de bases de datos objeto relacionales
	- Conceptos fundamentales
	- Estructura y elementos
	- Operaciones principales
	- Persistencia y recuperación de datos
	- Integridad y tratamiento de errores
	- Ejemplo de implementación

```
**001-objeto.json**
```json
{
	"nombre":"Andrei",
  "apellidos":"Buga Mihailescu",
  "email":"bugaandrei1@gmail.com"
}
```
**002-resumen de yaml.md**
```markdown
# YAML — Resumen

YAML (YAML Ain't Markup Language) es un formato de serialización legible para guardar e intercambiar datos estructurados. Se utiliza habitualmente en archivos de configuración.

## Características

- Representa jerarquías mediante indentación con espacios.
- Admite cadenas de texto, números, booleanos, listas, diccionarios y valores nulos.
- Permite comentarios con `#`.
- Utiliza las extensiones `.yaml` o `.yml`.

## Ejemplo con los datos de `001-objeto.json`

```yaml
nombre: Andrei
apellidos: Buga Mihailescu
email: bugaandrei1@gmail.com
```

## Uso en Python

Instala PyYAML si aún no está disponible:

```bash
pip install pyyaml
```

Los ejemplos de esta carpeta leen `001-objeto.json` desde la misma carpeta del script. Para convertir sus datos a YAML:

```python
import json
from pathlib import Path
import yaml

carpeta = Path(__file__).resolve().parent
with (carpeta / "001-objeto.json").open("r", encoding="utf-8") as archivo:
    datos = json.load(archivo)

with (carpeta / "datos.yaml").open("w", encoding="utf-8") as archivo:
    yaml.safe_dump(datos, archivo, allow_unicode=True, sort_keys=False)
```

Para leer el YAML de forma segura:

```python
with (carpeta / "datos.yaml").open("r", encoding="utf-8") as archivo:
    datos = yaml.safe_load(archivo)

print(datos["nombre"])
```

## Ventajas y precauciones

- Su sintaxis es sencilla y fácil de leer y permite comentarios.
- La indentación debe ser coherente; los errores pueden alterar la estructura.
- Utiliza `yaml.safe_load` para leer archivos que no sean de confianza.
- Para grandes volúmenes de datos puede ser preferible una base de datos.

## Aplicaciones

YAML se utiliza en archivos de configuración de herramientas como Docker Compose, Kubernetes, Ansible y GitHub Actions.

```
**003-ejemplo en python.py**
```python
import json
from pathlib import Path

import yaml


carpeta = Path(__file__).resolve().parent
ruta_json = carpeta / "001-objeto.json"
ruta_yaml = carpeta / "datos.yaml"

with ruta_json.open("r", encoding="utf-8") as archivo:
    datos = json.load(archivo)

with ruta_yaml.open("w", encoding="utf-8") as archivo:
    yaml.safe_dump(datos, archivo, allow_unicode=True, sort_keys=False)

print(f"Datos de {ruta_json.name} guardados en {ruta_yaml.name}.")

```
**004-lectura.py**
```python
from pathlib import Path

import yaml


ruta_yaml = Path(__file__).resolve().with_name("datos.yaml")

with ruta_yaml.open("r", encoding="utf-8") as archivo:
    datos = yaml.safe_load(archivo)

persona = datos.get("persona", datos)

print("Nombre:", persona["nombre"])
print("Apellidos:", persona["apellidos"])
print("Email:", persona["email"])

```
**005-objeto complejo.py**
```python
import json
from pathlib import Path

import yaml


carpeta = Path(__file__).resolve().parent
ruta_json = carpeta / "001-objeto.json"
ruta_yaml = carpeta / "datos.yaml"

with ruta_json.open("r", encoding="utf-8") as archivo:
    persona = json.load(archivo)

objeto = {
    "persona": persona,
    "proyectos": [
        {
            "nombre": "Easy Convert",
            "repositorio": "https://github.com/Andre1z/andrei-converter",
        },
        {
            "nombre": "Peggle Nights Recreation",
            "repositorio": "https://github.com/Andre1z/peggle",
        },
        {
            "nombre": "VistaHub",
            "repositorio": "https://github.com/Andre1z/VistaHub-Andrei",
        },
        {
            "nombre": "PyIDE",
            "repositorio": "https://github.com/Andre1z/IDE",
        },
    ],
}

with ruta_yaml.open("w", encoding="utf-8") as archivo:
    yaml.safe_dump(
        objeto,
        archivo,
        allow_unicode=True,
        sort_keys=False,
        default_flow_style=False,
    )

print(f"Objeto complejo guardado en {ruta_yaml.name}.")

```
### 002-Gestión de objetos con SQL; ANSI SQL
**000-Introducción.md**
```markdown
# Gestión de objetos con SQL; ANSI SQL
- Gestión de objetos con SQL; ANSI SQL
	- Sintaxis y estructura
	- Selección y proyección de datos
	- Condiciones y filtrado
	- Ordenación y agrupación
	- Operaciones y funciones
	- Ejemplos de consultas

```
**001-ejemplo de uso de la clase.py**
```python
import json
from pathlib import Path

from gestor import GestorYAML


carpeta = Path(__file__).resolve().parent
ruta_objeto = (
    carpeta.parent
    / "001-Gestores de bases de datos objeto relacionales"
    / "001-objeto.json"
)

with ruta_objeto.open("r", encoding="utf-8") as archivo:
    persona = json.load(archivo)

gestor = GestorYAML()

id_cliente = gestor.guardar("empresa", "clientes", persona)
id_producto = gestor.guardar("empresa", "productos", {
    "nombre": "Portátil",
    "precio": 899.99
})

# Listar clientes
print(gestor.listar("empresa", "clientes"))

# Buscar por identificador
print(gestor.buscar("empresa", "clientes", id_cliente))

# Eliminar el producto de ejemplo
gestor.eliminar("empresa", "productos", id_producto)
```
**002-demostracion segunda parte.py**
```python
import json
from pathlib import Path

from gestor import GestorYAML


carpeta = Path(__file__).resolve().parent
ruta_objeto = (
    carpeta.parent
    / "001-Gestores de bases de datos objeto relacionales"
    / "001-objeto.json"
)

with ruta_objeto.open("r", encoding="utf-8") as archivo:
    persona = json.load(archivo)

bd = GestorYAML()

# Insertar y completar los datos del cliente desde objeto.json
id_cliente = bd.guardar("empresa", "clientes", {"nombre": persona["nombre"]})

# Insertar un producto
id_producto = bd.guardar("empresa", "productos", {
    "nombre": "Portátil",
    "precio": 899.99,
    "caracteristicas": {
        "ram": 16,
        "procesador": "Intel i7"
    }
})

# Listar clientes
print(bd.listar("empresa", "clientes"))

# Buscar cliente
print(bd.buscar("empresa", "clientes", id_cliente))

# Actualizar cliente
bd.actualizar("empresa", "clientes", id_cliente, persona)

# Listar bases de datos
print(bd.bases_de_datos())

# Listar colecciones
print(bd.colecciones("empresa"))

# Eliminar producto
bd.eliminar("empresa", "productos", id_producto)
```
**gestor.py**
```python

import re
import uuid
from pathlib import Path

import yaml


class GestorYAML:

    def __init__(self):
        self.carpeta = Path(__file__).resolve().parent / "datos"
        self.carpeta.mkdir(parents=True, exist_ok=True)

    @staticmethod
    def _validar_nombre(nombre):
        if not isinstance(nombre, str) or not re.fullmatch(
            r"[a-zA-Z0-9_-]+", nombre
        ):
            raise ValueError("Nombre de base de datos o colección no válido")

    def ruta(self, base_datos, coleccion):
        self._validar_nombre(base_datos)
        self._validar_nombre(coleccion)
        ruta = self.carpeta / base_datos / coleccion
        ruta.mkdir(parents=True, exist_ok=True)
        return ruta

    def guardar(self, base_datos, coleccion, objeto):
        ruta = self.ruta(base_datos, coleccion)

        # Generamos un identificador único
        identificador = str(uuid.uuid4())

        # Copiamos el objeto para no modificar el original
        documento = objeto.copy()
        documento["_id"] = identificador

        archivo = ruta / (identificador + ".yaml")

        with archivo.open("x", encoding="utf-8") as fichero:
            yaml.safe_dump(
                documento,
                fichero,
                allow_unicode=True,
                sort_keys=False
            )

        return identificador

    def listar(self, base_datos, coleccion):
        ruta = self.ruta(base_datos, coleccion)
        documentos = []

        for archivo in sorted(ruta.glob("*.yaml")):
            with archivo.open("r", encoding="utf-8") as fichero:
                documentos.append(yaml.safe_load(fichero))

        return documentos

    def buscar(self, base_datos, coleccion, identificador):
        ruta = self.ruta(base_datos, coleccion)

        try:
            identificador = str(uuid.UUID(identificador))
        except (ValueError, AttributeError, TypeError):
            return None

        archivo = ruta / (identificador + ".yaml")

        if not archivo.exists():
            return None

        with archivo.open("r", encoding="utf-8") as fichero:
            return yaml.safe_load(fichero)

    def actualizar(self, base_datos, coleccion, identificador, objeto):
        ruta = self.ruta(base_datos, coleccion)

        try:
            identificador = str(uuid.UUID(identificador))
        except (ValueError, AttributeError, TypeError):
            return False

        archivo = ruta / (identificador + ".yaml")

        if not archivo.exists():
            return False

        documento = objeto.copy()
        documento["_id"] = identificador

        # Escritura mediante archivo temporal
        temporal = archivo.with_name(archivo.name + "." + str(uuid.uuid4()) + ".tmp")

        try:
            with temporal.open("w", encoding="utf-8") as fichero:
                yaml.safe_dump(
                    documento,
                    fichero,
                    allow_unicode=True,
                    sort_keys=False
                )

            temporal.replace(archivo)
        finally:
            if temporal.exists():
                temporal.unlink()

        return True

    def eliminar(self, base_datos, coleccion, identificador):
        ruta = self.ruta(base_datos, coleccion)

        try:
            identificador = str(uuid.UUID(identificador))
        except (ValueError, AttributeError, TypeError):
            return False

        archivo = ruta / (identificador + ".yaml")

        if archivo.exists():
            archivo.unlink()
            return True

        return False

    def bases_de_datos(self):
        return sorted([
            ruta.name for ruta in self.carpeta.iterdir()
            if ruta.is_dir()
        ])

    def colecciones(self, base_datos):
        self._validar_nombre(base_datos)
        ruta = self.carpeta / base_datos
        if not ruta.is_dir():
            return []

        return sorted([
            coleccion.name for coleccion in ruta.iterdir()
            if coleccion.is_dir()
        ])

```
#### datos
##### empresa
###### clientes
### 003-Acceso a las funciones del gestor de base de datos objeto-relacional
**000-Introducción.md**
```markdown
# Acceso a las funciones del gestor de base de datos objeto-relacional
- Acceso a las funciones del gestor de base de datos objeto-relacional
	- Conceptos fundamentales
	- Estructura y elementos
	- Operaciones principales
	- Persistencia y recuperación de datos
	- Integridad y tratamiento de errores
	- Ejemplo de implementación

```
#### gestor-yaml
**README.md**
```markdown
# Gestor YAML en C++17

Almacena documentos YAML en `datos/base_de_datos/coleccion/uuid.yaml`. El ejemplo carga los datos de `001-objeto.json` desde la carpeta de la lección y los guarda como documento de cliente.

## Requisitos

Se necesita un compilador compatible con C++17, CMake 3.16 o posterior y yaml-cpp.

### Ubuntu

```bash
sudo apt update
sudo apt install -y g++ cmake libyaml-cpp-dev
```

### Windows con MSYS2 UCRT64

Instala los paquetes desde la terminal UCRT64:

```bash
pacman -S mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-cmake mingw-w64-ucrt-x86_64-yaml-cpp
```

Usa un compilador C++17 moderno (GCC 9 o posterior recomendado); MinGW GCC 6.3 no es suficiente para este proyecto.

## Compilación y ejecución

Desde la raíz de este proyecto:

```bash
cmake -S . -B build
cmake --build build -j
```

En Ubuntu:

```bash
./build/ejemplo
```

En Windows:

```powershell
.\build\ejemplo.exe
```

La carpeta `datos/` y el JSON de referencia se resuelven desde las rutas del proyecto, no desde el directorio actual de la terminal.

## API

```cpp
GestorYAML db("ruta/a/datos");
db.crearBaseDatos("empresa");
db.crearColeccion("empresa", "clientes");
YAML::Node objeto;
objeto["nombre"] = "Andrei";
objeto["email"] = "bugaandrei1@gmail.com";
std::string id = db.guardar("empresa", "clientes", objeto);
YAML::Node leido = db.leer("empresa", "clientes", id);
std::cout << leido["nombre"].as<std::string>() << "\n";
```

Consultar `ejemplos/main.cpp` para ver la carga de `001-objeto.json`, la persistencia idempotente por email, las referencias por ID, la lectura tipada, los filtros, el catálogo y el ciclo de vida de un registro temporal.

La generación de UUID v4 se implementa en C++ estándar y no depende de `libuuid`, por lo que también funciona en Windows.

## Consideraciones

- Las consultas `listar`, `filtrar` y `contar` recorren los archivos YAML de la colección. No hay índices.
- `filtrar` aplica igualdad exacta en campos escalares y permite condiciones anidadas en mapas; no implementa rangos ni operadores.
- `actualizar` reemplaza el documento completo, conservando el UUID.
- `leer` devuelve un nodo indefinido si no existe el documento.
- Las escrituras usan un archivo temporal y renombrado en el mismo directorio; no hay bloqueos entre procesos, transacciones ni garantías de sincronización física ante corte de energía.
- Las referencias entre documentos se guardan como IDs sin integridad referencial automática.
- Usa nombres de bases de datos y colecciones con letras ASCII, dígitos, `_` o `-`.
- No utilices el gestor con directorios que puedan contener enlaces simbólicos manipulados por usuarios no fiables.

```
##### build
###### CMakeFiles
####### 3.28.3
######## CompilerIdCXX
**CMakeCXXCompilerId.cpp**
```cpp
/* This source file must have a .cpp extension so that all C++ compilers
   recognize the extension without flags.  Borland does not know .cxx for
   example.  */
#ifndef __cplusplus
# error "A C compiler has been selected for C++."
#endif

#if !defined(__has_include)
/* If the compiler does not have __has_include, pretend the answer is
   always no.  */
#  define __has_include(x) 0
#endif


/* Version number components: V=Version, R=Revision, P=Patch
   Version date components:   YYYY=Year, MM=Month,   DD=Day  */

#if defined(__COMO__)
# define COMPILER_ID "Comeau"
  /* __COMO_VERSION__ = VRR */
# define COMPILER_VERSION_MAJOR DEC(__COMO_VERSION__ / 100)
# define COMPILER_VERSION_MINOR DEC(__COMO_VERSION__ % 100)

#elif defined(__INTEL_COMPILER) || defined(__ICC)
# define COMPILER_ID "Intel"
# if defined(_MSC_VER)
#  define SIMULATE_ID "MSVC"
# endif
# if defined(__GNUC__)
#  define SIMULATE_ID "GNU"
# endif
  /* __INTEL_COMPILER = VRP prior to 2021, and then VVVV for 2021 and later,
     except that a few beta releases use the old format with V=2021.  */
# if __INTEL_COMPILER < 2021 || __INTEL_COMPILER == 202110 || __INTEL_COMPILER == 202111
#  define COMPILER_VERSION_MAJOR DEC(__INTEL_COMPILER/100)
#  define COMPILER_VERSION_MINOR DEC(__INTEL_COMPILER/10 % 10)
#  if defined(__INTEL_COMPILER_UPDATE)
#   define COMPILER_VERSION_PATCH DEC(__INTEL_COMPILER_UPDATE)
#  else
#   define COMPILER_VERSION_PATCH DEC(__INTEL_COMPILER   % 10)
#  endif
# else
#  define COMPILER_VERSION_MAJOR DEC(__INTEL_COMPILER)
#  define COMPILER_VERSION_MINOR DEC(__INTEL_COMPILER_UPDATE)
   /* The third version component from --version is an update index,
      but no macro is provided for it.  */
#  define COMPILER_VERSION_PATCH DEC(0)
# endif
# if defined(__INTEL_COMPILER_BUILD_DATE)
   /* __INTEL_COMPILER_BUILD_DATE = YYYYMMDD */
#  define COMPILER_VERSION_TWEAK DEC(__INTEL_COMPILER_BUILD_DATE)
# endif
# if defined(_MSC_VER)
   /* _MSC_VER = VVRR */
#  define SIMULATE_VERSION_MAJOR DEC(_MSC_VER / 100)
#  define SIMULATE_VERSION_MINOR DEC(_MSC_VER % 100)
# endif
# if defined(__GNUC__)
#  define SIMULATE_VERSION_MAJOR DEC(__GNUC__)
# elif defined(__GNUG__)
#  define SIMULATE_VERSION_MAJOR DEC(__GNUG__)
# endif
# if defined(__GNUC_MINOR__)
#  define SIMULATE_VERSION_MINOR DEC(__GNUC_MINOR__)
# endif
# if defined(__GNUC_PATCHLEVEL__)
#  define SIMULATE_VERSION_PATCH DEC(__GNUC_PATCHLEVEL__)
# endif

#elif (defined(__clang__) && defined(__INTEL_CLANG_COMPILER)) || defined(__INTEL_LLVM_COMPILER)
# define COMPILER_ID "IntelLLVM"
#if defined(_MSC_VER)
# define SIMULATE_ID "MSVC"
#endif
#if defined(__GNUC__)
# define SIMULATE_ID "GNU"
#endif
/* __INTEL_LLVM_COMPILER = VVVVRP prior to 2021.2.0, VVVVRRPP for 2021.2.0 and
 * later.  Look for 6 digit vs. 8 digit version number to decide encoding.
 * VVVV is no smaller than the current year when a version is released.
 */
#if __INTEL_LLVM_COMPILER < 1000000L
# define COMPILER_VERSION_MAJOR DEC(__INTEL_LLVM_COMPILER/100)
# define COMPILER_VERSION_MINOR DEC(__INTEL_LLVM_COMPILER/10 % 10)
# define COMPILER_VERSION_PATCH DEC(__INTEL_LLVM_COMPILER    % 10)
#else
# define COMPILER_VERSION_MAJOR DEC(__INTEL_LLVM_COMPILER/10000)
# define COMPILER_VERSION_MINOR DEC(__INTEL_LLVM_COMPILER/100 % 100)
# define COMPILER_VERSION_PATCH DEC(__INTEL_LLVM_COMPILER     % 100)
#endif
#if defined(_MSC_VER)
  /* _MSC_VER = VVRR */
# define SIMULATE_VERSION_MAJOR DEC(_MSC_VER / 100)
# define SIMULATE_VERSION_MINOR DEC(_MSC_VER % 100)
#endif
#if defined(__GNUC__)
# define SIMULATE_VERSION_MAJOR DEC(__GNUC__)
#elif defined(__GNUG__)
# define SIMULATE_VERSION_MAJOR DEC(__GNUG__)
#endif
#if defined(__GNUC_MINOR__)
# define SIMULATE_VERSION_MINOR DEC(__GNUC_MINOR__)
#endif
#if defined(__GNUC_PATCHLEVEL__)
# define SIMULATE_VERSION_PATCH DEC(__GNUC_PATCHLEVEL__)
#endif

#elif defined(__PATHCC__)
# define COMPILER_ID "PathScale"
# define COMPILER_VERSION_MAJOR DEC(__PATHCC__)
# define COMPILER_VERSION_MINOR DEC(__PATHCC_MINOR__)
# if defined(__PATHCC_PATCHLEVEL__)
#  define COMPILER_VERSION_PATCH DEC(__PATHCC_PATCHLEVEL__)
# endif

#elif defined(__BORLANDC__) && defined(__CODEGEARC_VERSION__)
# define COMPILER_ID "Embarcadero"
# define COMPILER_VERSION_MAJOR HEX(__CODEGEARC_VERSION__>>24 & 0x00FF)
# define COMPILER_VERSION_MINOR HEX(__CODEGEARC_VERSION__>>16 & 0x00FF)
# define COMPILER_VERSION_PATCH DEC(__CODEGEARC_VERSION__     & 0xFFFF)

#elif defined(__BORLANDC__)
# define COMPILER_ID "Borland"
  /* __BORLANDC__ = 0xVRR */
# define COMPILER_VERSION_MAJOR HEX(__BORLANDC__>>8)
# define COMPILER_VERSION_MINOR HEX(__BORLANDC__ & 0xFF)

#elif defined(__WATCOMC__) && __WATCOMC__ < 1200
# define COMPILER_ID "Watcom"
   /* __WATCOMC__ = VVRR */
# define COMPILER_VERSION_MAJOR DEC(__WATCOMC__ / 100)
# define COMPILER_VERSION_MINOR DEC((__WATCOMC__ / 10) % 10)
# if (__WATCOMC__ % 10) > 0
#  define COMPILER_VERSION_PATCH DEC(__WATCOMC__ % 10)
# endif

#elif defined(__WATCOMC__)
# define COMPILER_ID "OpenWatcom"
   /* __WATCOMC__ = VVRP + 1100 */
# define COMPILER_VERSION_MAJOR DEC((__WATCOMC__ - 1100) / 100)
# define COMPILER_VERSION_MINOR DEC((__WATCOMC__ / 10) % 10)
# if (__WATCOMC__ % 10) > 0
#  define COMPILER_VERSION_PATCH DEC(__WATCOMC__ % 10)
# endif

#elif defined(__SUNPRO_CC)
# define COMPILER_ID "SunPro"
# if __SUNPRO_CC >= 0x5100
   /* __SUNPRO_CC = 0xVRRP */
#  define COMPILER_VERSION_MAJOR HEX(__SUNPRO_CC>>12)
#  define COMPILER_VERSION_MINOR HEX(__SUNPRO_CC>>4 & 0xFF)
#  define COMPILER_VERSION_PATCH HEX(__SUNPRO_CC    & 0xF)
# else
   /* __SUNPRO_CC = 0xVRP */
#  define COMPILER_VERSION_MAJOR HEX(__SUNPRO_CC>>8)
#  define COMPILER_VERSION_MINOR HEX(__SUNPRO_CC>>4 & 0xF)
#  define COMPILER_VERSION_PATCH HEX(__SUNPRO_CC    & 0xF)
# endif

#elif defined(__HP_aCC)
# define COMPILER_ID "HP"
  /* __HP_aCC = VVRRPP */
# define COMPILER_VERSION_MAJOR DEC(__HP_aCC/10000)
# define COMPILER_VERSION_MINOR DEC(__HP_aCC/100 % 100)
# define COMPILER_VERSION_PATCH DEC(__HP_aCC     % 100)

#elif defined(__DECCXX)
# define COMPILER_ID "Compaq"
  /* __DECCXX_VER = VVRRTPPPP */
# define COMPILER_VERSION_MAJOR DEC(__DECCXX_VER/10000000)
# define COMPILER_VERSION_MINOR DEC(__DECCXX_VER/100000  % 100)
# define COMPILER_VERSION_PATCH DEC(__DECCXX_VER         % 10000)

#elif defined(__IBMCPP__) && defined(__COMPILER_VER__)
# define COMPILER_ID "zOS"
  /* __IBMCPP__ = VRP */
# define COMPILER_VERSION_MAJOR DEC(__IBMCPP__/100)
# define COMPILER_VERSION_MINOR DEC(__IBMCPP__/10 % 10)
# define COMPILER_VERSION_PATCH DEC(__IBMCPP__    % 10)

#elif defined(__open_xl__) && defined(__clang__)
# define COMPILER_ID "IBMClang"
# define COMPILER_VERSION_MAJOR DEC(__open_xl_version__)
# define COMPILER_VERSION_MINOR DEC(__open_xl_release__)
# define COMPILER_VERSION_PATCH DEC(__open_xl_modification__)
# define COMPILER_VERSION_TWEAK DEC(__open_xl_ptf_fix_level__)


#elif defined(__ibmxl__) && defined(__clang__)
# define COMPILER_ID "XLClang"
# define COMPILER_VERSION_MAJOR DEC(__ibmxl_version__)
# define COMPILER_VERSION_MINOR DEC(__ibmxl_release__)
# define COMPILER_VERSION_PATCH DEC(__ibmxl_modification__)
# define COMPILER_VERSION_TWEAK DEC(__ibmxl_ptf_fix_level__)


#elif defined(__IBMCPP__) && !defined(__COMPILER_VER__) && __IBMCPP__ >= 800
# define COMPILER_ID "XL"
  /* __IBMCPP__ = VRP */
# define COMPILER_VERSION_MAJOR DEC(__IBMCPP__/100)
# define COMPILER_VERSION_MINOR DEC(__IBMCPP__/10 % 10)
# define COMPILER_VERSION_PATCH DEC(__IBMCPP__    % 10)

#elif defined(__IBMCPP__) && !defined(__COMPILER_VER__) && __IBMCPP__ < 800
# define COMPILER_ID "VisualAge"
  /* __IBMCPP__ = VRP */
# define COMPILER_VERSION_MAJOR DEC(__IBMCPP__/100)
# define COMPILER_VERSION_MINOR DEC(__IBMCPP__/10 % 10)
# define COMPILER_VERSION_PATCH DEC(__IBMCPP__    % 10)

#elif defined(__NVCOMPILER)
# define COMPILER_ID "NVHPC"
# define COMPILER_VERSION_MAJOR DEC(__NVCOMPILER_MAJOR__)
# define COMPILER_VERSION_MINOR DEC(__NVCOMPILER_MINOR__)
# if defined(__NVCOMPILER_PATCHLEVEL__)
#  define COMPILER_VERSION_PATCH DEC(__NVCOMPILER_PATCHLEVEL__)
# endif

#elif defined(__PGI)
# define COMPILER_ID "PGI"
# define COMPILER_VERSION_MAJOR DEC(__PGIC__)
# define COMPILER_VERSION_MINOR DEC(__PGIC_MINOR__)
# if defined(__PGIC_PATCHLEVEL__)
#  define COMPILER_VERSION_PATCH DEC(__PGIC_PATCHLEVEL__)
# endif

#elif defined(__clang__) && defined(__cray__)
# define COMPILER_ID "CrayClang"
# define COMPILER_VERSION_MAJOR DEC(__cray_major__)
# define COMPILER_VERSION_MINOR DEC(__cray_minor__)
# define COMPILER_VERSION_PATCH DEC(__cray_patchlevel__)
# define COMPILER_VERSION_INTERNAL_STR __clang_version__


#elif defined(_CRAYC)
# define COMPILER_ID "Cray"
# define COMPILER_VERSION_MAJOR DEC(_RELEASE_MAJOR)
# define COMPILER_VERSION_MINOR DEC(_RELEASE_MINOR)

#elif defined(__TI_COMPILER_VERSION__)
# define COMPILER_ID "TI"
  /* __TI_COMPILER_VERSION__ = VVVRRRPPP */
# define COMPILER_VERSION_MAJOR DEC(__TI_COMPILER_VERSION__/1000000)
# define COMPILER_VERSION_MINOR DEC(__TI_COMPILER_VERSION__/1000   % 1000)
# define COMPILER_VERSION_PATCH DEC(__TI_COMPILER_VERSION__        % 1000)

#elif defined(__CLANG_FUJITSU)
# define COMPILER_ID "FujitsuClang"
# define COMPILER_VERSION_MAJOR DEC(__FCC_major__)
# define COMPILER_VERSION_MINOR DEC(__FCC_minor__)
# define COMPILER_VERSION_PATCH DEC(__FCC_patchlevel__)
# define COMPILER_VERSION_INTERNAL_STR __clang_version__


#elif defined(__FUJITSU)
# define COMPILER_ID "Fujitsu"
# if defined(__FCC_version__)
#   define COMPILER_VERSION __FCC_version__
# elif defined(__FCC_major__)
#   define COMPILER_VERSION_MAJOR DEC(__FCC_major__)
#   define COMPILER_VERSION_MINOR DEC(__FCC_minor__)
#   define COMPILER_VERSION_PATCH DEC(__FCC_patchlevel__)
# endif
# if defined(__fcc_version)
#   define COMPILER_VERSION_INTERNAL DEC(__fcc_version)
# elif defined(__FCC_VERSION)
#   define COMPILER_VERSION_INTERNAL DEC(__FCC_VERSION)
# endif


#elif defined(__ghs__)
# define COMPILER_ID "GHS"
/* __GHS_VERSION_NUMBER = VVVVRP */
# ifdef __GHS_VERSION_NUMBER
# define COMPILER_VERSION_MAJOR DEC(__GHS_VERSION_NUMBER / 100)
# define COMPILER_VERSION_MINOR DEC(__GHS_VERSION_NUMBER / 10 % 10)
# define COMPILER_VERSION_PATCH DEC(__GHS_VERSION_NUMBER      % 10)
# endif

#elif defined(__TASKING__)
# define COMPILER_ID "Tasking"
  # define COMPILER_VERSION_MAJOR DEC(__VERSION__/1000)
  # define COMPILER_VERSION_MINOR DEC(__VERSION__ % 100)
# define COMPILER_VERSION_INTERNAL DEC(__VERSION__)

#elif defined(__ORANGEC__)
# define COMPILER_ID "OrangeC"
# define COMPILER_VERSION_MAJOR DEC(__ORANGEC_MAJOR__)
# define COMPILER_VERSION_MINOR DEC(__ORANGEC_MINOR__)
# define COMPILER_VERSION_PATCH DEC(__ORANGEC_PATCHLEVEL__)

#elif defined(__SCO_VERSION__)
# define COMPILER_ID "SCO"

#elif defined(__ARMCC_VERSION) && !defined(__clang__)
# define COMPILER_ID "ARMCC"
#if __ARMCC_VERSION >= 1000000
  /* __ARMCC_VERSION = VRRPPPP */
  # define COMPILER_VERSION_MAJOR DEC(__ARMCC_VERSION/1000000)
  # define COMPILER_VERSION_MINOR DEC(__ARMCC_VERSION/10000 % 100)
  # define COMPILER_VERSION_PATCH DEC(__ARMCC_VERSION     % 10000)
#else
  /* __ARMCC_VERSION = VRPPPP */
  # define COMPILER_VERSION_MAJOR DEC(__ARMCC_VERSION/100000)
  # define COMPILER_VERSION_MINOR DEC(__ARMCC_VERSION/10000 % 10)
  # define COMPILER_VERSION_PATCH DEC(__ARMCC_VERSION    % 10000)
#endif


#elif defined(__clang__) && defined(__apple_build_version__)
# define COMPILER_ID "AppleClang"
# if defined(_MSC_VER)
#  define SIMULATE_ID "MSVC"
# endif
# define COMPILER_VERSION_MAJOR DEC(__clang_major__)
# define COMPILER_VERSION_MINOR DEC(__clang_minor__)
# define COMPILER_VERSION_PATCH DEC(__clang_patchlevel__)
# if defined(_MSC_VER)
   /* _MSC_VER = VVRR */
#  define SIMULATE_VERSION_MAJOR DEC(_MSC_VER / 100)
#  define SIMULATE_VERSION_MINOR DEC(_MSC_VER % 100)
# endif
# define COMPILER_VERSION_TWEAK DEC(__apple_build_version__)

#elif defined(__clang__) && defined(__ARMCOMPILER_VERSION)
# define COMPILER_ID "ARMClang"
  # define COMPILER_VERSION_MAJOR DEC(__ARMCOMPILER_VERSION/1000000)
  # define COMPILER_VERSION_MINOR DEC(__ARMCOMPILER_VERSION/10000 % 100)
  # define COMPILER_VERSION_PATCH DEC(__ARMCOMPILER_VERSION/100   % 100)
# define COMPILER_VERSION_INTERNAL DEC(__ARMCOMPILER_VERSION)

#elif defined(__clang__)
# define COMPILER_ID "Clang"
# if defined(_MSC_VER)
#  define SIMULATE_ID "MSVC"
# endif
# define COMPILER_VERSION_MAJOR DEC(__clang_major__)
# define COMPILER_VERSION_MINOR DEC(__clang_minor__)
# define COMPILER_VERSION_PATCH DEC(__clang_patchlevel__)
# if defined(_MSC_VER)
   /* _MSC_VER = VVRR */
#  define SIMULATE_VERSION_MAJOR DEC(_MSC_VER / 100)
#  define SIMULATE_VERSION_MINOR DEC(_MSC_VER % 100)
# endif

#elif defined(__LCC__) && (defined(__GNUC__) || defined(__GNUG__) || defined(__MCST__))
# define COMPILER_ID "LCC"
# define COMPILER_VERSION_MAJOR DEC(__LCC__ / 100)
# define COMPILER_VERSION_MINOR DEC(__LCC__ % 100)
# if defined(__LCC_MINOR__)
#  define COMPILER_VERSION_PATCH DEC(__LCC_MINOR__)
# endif
# if defined(__GNUC__) && defined(__GNUC_MINOR__)
#  define SIMULATE_ID "GNU"
#  define SIMULATE_VERSION_MAJOR DEC(__GNUC__)
#  define SIMULATE_VERSION_MINOR DEC(__GNUC_MINOR__)
#  if defined(__GNUC_PATCHLEVEL__)
#   define SIMULATE_VERSION_PATCH DEC(__GNUC_PATCHLEVEL__)
#  endif
# endif

#elif defined(__GNUC__) || defined(__GNUG__)
# define COMPILER_ID "GNU"
# if defined(__GNUC__)
#  define COMPILER_VERSION_MAJOR DEC(__GNUC__)
# else
#  define COMPILER_VERSION_MAJOR DEC(__GNUG__)
# endif
# if defined(__GNUC_MINOR__)
#  define COMPILER_VERSION_MINOR DEC(__GNUC_MINOR__)
# endif
# if defined(__GNUC_PATCHLEVEL__)
#  define COMPILER_VERSION_PATCH DEC(__GNUC_PATCHLEVEL__)
# endif

#elif defined(_MSC_VER)
# define COMPILER_ID "MSVC"
  /* _MSC_VER = VVRR */
# define COMPILER_VERSION_MAJOR DEC(_MSC_VER / 100)
# define COMPILER_VERSION_MINOR DEC(_MSC_VER % 100)
# if defined(_MSC_FULL_VER)
#  if _MSC_VER >= 1400
    /* _MSC_FULL_VER = VVRRPPPPP */
#   define COMPILER_VERSION_PATCH DEC(_MSC_FULL_VER % 100000)
#  else
    /* _MSC_FULL_VER = VVRRPPPP */
#   define COMPILER_VERSION_PATCH DEC(_MSC_FULL_VER % 10000)
#  endif
# endif
# if defined(_MSC_BUILD)
#  define COMPILER_VERSION_TWEAK DEC(_MSC_BUILD)
# endif

#elif defined(_ADI_COMPILER)
# define COMPILER_ID "ADSP"
#if defined(__VERSIONNUM__)
  /* __VERSIONNUM__ = 0xVVRRPPTT */
#  define COMPILER_VERSION_MAJOR DEC(__VERSIONNUM__ >> 24 & 0xFF)
#  define COMPILER_VERSION_MINOR DEC(__VERSIONNUM__ >> 16 & 0xFF)
#  define COMPILER_VERSION_PATCH DEC(__VERSIONNUM__ >> 8 & 0xFF)
#  define COMPILER_VERSION_TWEAK DEC(__VERSIONNUM__ & 0xFF)
#endif

#elif defined(__IAR_SYSTEMS_ICC__) || defined(__IAR_SYSTEMS_ICC)
# define COMPILER_ID "IAR"
# if defined(__VER__) && defined(__ICCARM__)
#  define COMPILER_VERSION_MAJOR DEC((__VER__) / 1000000)
#  define COMPILER_VERSION_MINOR DEC(((__VER__) / 1000) % 1000)
#  define COMPILER_VERSION_PATCH DEC((__VER__) % 1000)
#  define COMPILER_VERSION_INTERNAL DEC(__IAR_SYSTEMS_ICC__)
# elif defined(__VER__) && (defined(__ICCAVR__) || defined(__ICCRX__) || defined(__ICCRH850__) || defined(__ICCRL78__) || defined(__ICC430__) || defined(__ICCRISCV__) || defined(__ICCV850__) || defined(__ICC8051__) || defined(__ICCSTM8__))
#  define COMPILER_VERSION_MAJOR DEC((__VER__) / 100)
#  define COMPILER_VERSION_MINOR DEC((__VER__) - (((__VER__) / 100)*100))
#  define COMPILER_VERSION_PATCH DEC(__SUBVERSION__)
#  define COMPILER_VERSION_INTERNAL DEC(__IAR_SYSTEMS_ICC__)
# endif


/* These compilers are either not known or too old to define an
  identification macro.  Try to identify the platform and guess that
  it is the native compiler.  */
#elif defined(__hpux) || defined(__hpua)
# define COMPILER_ID "HP"

#else /* unknown compiler */
# define COMPILER_ID ""
#endif

/* Construct the string literal in pieces to prevent the source from
   getting matched.  Store it in a pointer rather than an array
   because some compilers will just produce instructions to fill the
   array rather than assigning a pointer to a static array.  */
char const* info_compiler = "INFO" ":" "compiler[" COMPILER_ID "]";
#ifdef SIMULATE_ID
char const* info_simulate = "INFO" ":" "simulate[" SIMULATE_ID "]";
#endif

#ifdef __QNXNTO__
char const* qnxnto = "INFO" ":" "qnxnto[]";
#endif

#if defined(__CRAYXT_COMPUTE_LINUX_TARGET)
char const *info_cray = "INFO" ":" "compiler_wrapper[CrayPrgEnv]";
#endif

#define STRINGIFY_HELPER(X) #X
#define STRINGIFY(X) STRINGIFY_HELPER(X)

/* Identify known platforms by name.  */
#if defined(__linux) || defined(__linux__) || defined(linux)
# define PLATFORM_ID "Linux"

#elif defined(__MSYS__)
# define PLATFORM_ID "MSYS"

#elif defined(__CYGWIN__)
# define PLATFORM_ID "Cygwin"

#elif defined(__MINGW32__)
# define PLATFORM_ID "MinGW"

#elif defined(__APPLE__)
# define PLATFORM_ID "Darwin"

#elif defined(_WIN32) || defined(__WIN32__) || defined(WIN32)
# define PLATFORM_ID "Windows"

#elif defined(__FreeBSD__) || defined(__FreeBSD)
# define PLATFORM_ID "FreeBSD"

#elif defined(__NetBSD__) || defined(__NetBSD)
# define PLATFORM_ID "NetBSD"

#elif defined(__OpenBSD__) || defined(__OPENBSD)
# define PLATFORM_ID "OpenBSD"

#elif defined(__sun) || defined(sun)
# define PLATFORM_ID "SunOS"

#elif defined(_AIX) || defined(__AIX) || defined(__AIX__) || defined(__aix) || defined(__aix__)
# define PLATFORM_ID "AIX"

#elif defined(__hpux) || defined(__hpux__)
# define PLATFORM_ID "HP-UX"

#elif defined(__HAIKU__)
# define PLATFORM_ID "Haiku"

#elif defined(__BeOS) || defined(__BEOS__) || defined(_BEOS)
# define PLATFORM_ID "BeOS"

#elif defined(__QNX__) || defined(__QNXNTO__)
# define PLATFORM_ID "QNX"

#elif defined(__tru64) || defined(_tru64) || defined(__TRU64__)
# define PLATFORM_ID "Tru64"

#elif defined(__riscos) || defined(__riscos__)
# define PLATFORM_ID "RISCos"

#elif defined(__sinix) || defined(__sinix__) || defined(__SINIX__)
# define PLATFORM_ID "SINIX"

#elif defined(__UNIX_SV__)
# define PLATFORM_ID "UNIX_SV"

#elif defined(__bsdos__)
# define PLATFORM_ID "BSDOS"

#elif defined(_MPRAS) || defined(MPRAS)
# define PLATFORM_ID "MP-RAS"

#elif defined(__osf) || defined(__osf__)
# define PLATFORM_ID "OSF1"

#elif defined(_SCO_SV) || defined(SCO_SV) || defined(sco_sv)
# define PLATFORM_ID "SCO_SV"

#elif defined(__ultrix) || defined(__ultrix__) || defined(_ULTRIX)
# define PLATFORM_ID "ULTRIX"

#elif defined(__XENIX__) || defined(_XENIX) || defined(XENIX)
# define PLATFORM_ID "Xenix"

#elif defined(__WATCOMC__)
# if defined(__LINUX__)
#  define PLATFORM_ID "Linux"

# elif defined(__DOS__)
#  define PLATFORM_ID "DOS"

# elif defined(__OS2__)
#  define PLATFORM_ID "OS2"

# elif defined(__WINDOWS__)
#  define PLATFORM_ID "Windows3x"

# elif defined(__VXWORKS__)
#  define PLATFORM_ID "VxWorks"

# else /* unknown platform */
#  define PLATFORM_ID
# endif

#elif defined(__INTEGRITY)
# if defined(INT_178B)
#  define PLATFORM_ID "Integrity178"

# else /* regular Integrity */
#  define PLATFORM_ID "Integrity"
# endif

# elif defined(_ADI_COMPILER)
#  define PLATFORM_ID "ADSP"

#else /* unknown platform */
# define PLATFORM_ID

#endif

/* For windows compilers MSVC and Intel we can determine
   the architecture of the compiler being used.  This is because
   the compilers do not have flags that can change the architecture,
   but rather depend on which compiler is being used
*/
#if defined(_WIN32) && defined(_MSC_VER)
# if defined(_M_IA64)
#  define ARCHITECTURE_ID "IA64"

# elif defined(_M_ARM64EC)
#  define ARCHITECTURE_ID "ARM64EC"

# elif defined(_M_X64) || defined(_M_AMD64)
#  define ARCHITECTURE_ID "x64"

# elif defined(_M_IX86)
#  define ARCHITECTURE_ID "X86"

# elif defined(_M_ARM64)
#  define ARCHITECTURE_ID "ARM64"

# elif defined(_M_ARM)
#  if _M_ARM == 4
#   define ARCHITECTURE_ID "ARMV4I"
#  elif _M_ARM == 5
#   define ARCHITECTURE_ID "ARMV5I"
#  else
#   define ARCHITECTURE_ID "ARMV" STRINGIFY(_M_ARM)
#  endif

# elif defined(_M_MIPS)
#  define ARCHITECTURE_ID "MIPS"

# elif defined(_M_SH)
#  define ARCHITECTURE_ID "SHx"

# else /* unknown architecture */
#  define ARCHITECTURE_ID ""
# endif

#elif defined(__WATCOMC__)
# if defined(_M_I86)
#  define ARCHITECTURE_ID "I86"

# elif defined(_M_IX86)
#  define ARCHITECTURE_ID "X86"

# else /* unknown architecture */
#  define ARCHITECTURE_ID ""
# endif

#elif defined(__IAR_SYSTEMS_ICC__) || defined(__IAR_SYSTEMS_ICC)
# if defined(__ICCARM__)
#  define ARCHITECTURE_ID "ARM"

# elif defined(__ICCRX__)
#  define ARCHITECTURE_ID "RX"

# elif defined(__ICCRH850__)
#  define ARCHITECTURE_ID "RH850"

# elif defined(__ICCRL78__)
#  define ARCHITECTURE_ID "RL78"

# elif defined(__ICCRISCV__)
#  define ARCHITECTURE_ID "RISCV"

# elif defined(__ICCAVR__)
#  define ARCHITECTURE_ID "AVR"

# elif defined(__ICC430__)
#  define ARCHITECTURE_ID "MSP430"

# elif defined(__ICCV850__)
#  define ARCHITECTURE_ID "V850"

# elif defined(__ICC8051__)
#  define ARCHITECTURE_ID "8051"

# elif defined(__ICCSTM8__)
#  define ARCHITECTURE_ID "STM8"

# else /* unknown architecture */
#  define ARCHITECTURE_ID ""
# endif

#elif defined(__ghs__)
# if defined(__PPC64__)
#  define ARCHITECTURE_ID "PPC64"

# elif defined(__ppc__)
#  define ARCHITECTURE_ID "PPC"

# elif defined(__ARM__)
#  define ARCHITECTURE_ID "ARM"

# elif defined(__x86_64__)
#  define ARCHITECTURE_ID "x64"

# elif defined(__i386__)
#  define ARCHITECTURE_ID "X86"

# else /* unknown architecture */
#  define ARCHITECTURE_ID ""
# endif

#elif defined(__TI_COMPILER_VERSION__)
# if defined(__TI_ARM__)
#  define ARCHITECTURE_ID "ARM"

# elif defined(__MSP430__)
#  define ARCHITECTURE_ID "MSP430"

# elif defined(__TMS320C28XX__)
#  define ARCHITECTURE_ID "TMS320C28x"

# elif defined(__TMS320C6X__) || defined(_TMS320C6X)
#  define ARCHITECTURE_ID "TMS320C6x"

# else /* unknown architecture */
#  define ARCHITECTURE_ID ""
# endif

# elif defined(__ADSPSHARC__)
#  define ARCHITECTURE_ID "SHARC"

# elif defined(__ADSPBLACKFIN__)
#  define ARCHITECTURE_ID "Blackfin"

#elif defined(__TASKING__)

# if defined(__CTC__) || defined(__CPTC__)
#  define ARCHITECTURE_ID "TriCore"

# elif defined(__CMCS__)
#  define ARCHITECTURE_ID "MCS"

# elif defined(__CARM__)
#  define ARCHITECTURE_ID "ARM"

# elif defined(__CARC__)
#  define ARCHITECTURE_ID "ARC"

# elif defined(__C51__)
#  define ARCHITECTURE_ID "8051"

# elif defined(__CPCP__)
#  define ARCHITECTURE_ID "PCP"

# else
#  define ARCHITECTURE_ID ""
# endif

#else
#  define ARCHITECTURE_ID
#endif

/* Convert integer to decimal digit literals.  */
#define DEC(n)                   \
  ('0' + (((n) / 10000000)%10)), \
  ('0' + (((n) / 1000000)%10)),  \
  ('0' + (((n) / 100000)%10)),   \
  ('0' + (((n) / 10000)%10)),    \
  ('0' + (((n) / 1000)%10)),     \
  ('0' + (((n) / 100)%10)),      \
  ('0' + (((n) / 10)%10)),       \
  ('0' +  ((n) % 10))

/* Convert integer to hex digit literals.  */
#define HEX(n)             \
  ('0' + ((n)>>28 & 0xF)), \
  ('0' + ((n)>>24 & 0xF)), \
  ('0' + ((n)>>20 & 0xF)), \
  ('0' + ((n)>>16 & 0xF)), \
  ('0' + ((n)>>12 & 0xF)), \
  ('0' + ((n)>>8  & 0xF)), \
  ('0' + ((n)>>4  & 0xF)), \
  ('0' + ((n)     & 0xF))

/* Construct a string literal encoding the version number. */
#ifdef COMPILER_VERSION
char const* info_version = "INFO" ":" "compiler_version[" COMPILER_VERSION "]";

/* Construct a string literal encoding the version number components. */
#elif defined(COMPILER_VERSION_MAJOR)
char const info_version[] = {
  'I', 'N', 'F', 'O', ':',
  'c','o','m','p','i','l','e','r','_','v','e','r','s','i','o','n','[',
  COMPILER_VERSION_MAJOR,
# ifdef COMPILER_VERSION_MINOR
  '.', COMPILER_VERSION_MINOR,
#  ifdef COMPILER_VERSION_PATCH
   '.', COMPILER_VERSION_PATCH,
#   ifdef COMPILER_VERSION_TWEAK
    '.', COMPILER_VERSION_TWEAK,
#   endif
#  endif
# endif
  ']','\0'};
#endif

/* Construct a string literal encoding the internal version number. */
#ifdef COMPILER_VERSION_INTERNAL
char const info_version_internal[] = {
  'I', 'N', 'F', 'O', ':',
  'c','o','m','p','i','l','e','r','_','v','e','r','s','i','o','n','_',
  'i','n','t','e','r','n','a','l','[',
  COMPILER_VERSION_INTERNAL,']','\0'};
#elif defined(COMPILER_VERSION_INTERNAL_STR)
char const* info_version_internal = "INFO" ":" "compiler_version_internal[" COMPILER_VERSION_INTERNAL_STR "]";
#endif

/* Construct a string literal encoding the version number components. */
#ifdef SIMULATE_VERSION_MAJOR
char const info_simulate_version[] = {
  'I', 'N', 'F', 'O', ':',
  's','i','m','u','l','a','t','e','_','v','e','r','s','i','o','n','[',
  SIMULATE_VERSION_MAJOR,
# ifdef SIMULATE_VERSION_MINOR
  '.', SIMULATE_VERSION_MINOR,
#  ifdef SIMULATE_VERSION_PATCH
   '.', SIMULATE_VERSION_PATCH,
#   ifdef SIMULATE_VERSION_TWEAK
    '.', SIMULATE_VERSION_TWEAK,
#   endif
#  endif
# endif
  ']','\0'};
#endif

/* Construct the string literal in pieces to prevent the source from
   getting matched.  Store it in a pointer rather than an array
   because some compilers will just produce instructions to fill the
   array rather than assigning a pointer to a static array.  */
char const* info_platform = "INFO" ":" "platform[" PLATFORM_ID "]";
char const* info_arch = "INFO" ":" "arch[" ARCHITECTURE_ID "]";



#if defined(__INTEL_COMPILER) && defined(_MSVC_LANG) && _MSVC_LANG < 201403L
#  if defined(__INTEL_CXX11_MODE__)
#    if defined(__cpp_aggregate_nsdmi)
#      define CXX_STD 201402L
#    else
#      define CXX_STD 201103L
#    endif
#  else
#    define CXX_STD 199711L
#  endif
#elif defined(_MSC_VER) && defined(_MSVC_LANG)
#  define CXX_STD _MSVC_LANG
#else
#  define CXX_STD __cplusplus
#endif

const char* info_language_standard_default = "INFO" ":" "standard_default["
#if CXX_STD > 202002L
  "23"
#elif CXX_STD > 201703L
  "20"
#elif CXX_STD >= 201703L
  "17"
#elif CXX_STD >= 201402L
  "14"
#elif CXX_STD >= 201103L
  "11"
#else
  "98"
#endif
"]";

const char* info_language_extensions_default = "INFO" ":" "extensions_default["
#if (defined(__clang__) || defined(__GNUC__) || defined(__xlC__) ||           \
     defined(__TI_COMPILER_VERSION__)) &&                                     \
  !defined(__STRICT_ANSI__)
  "ON"
#else
  "OFF"
#endif
"]";

/*--------------------------------------------------------------------------*/

int main(int argc, char* argv[])
{
  int require = 0;
  require += info_compiler[argc];
  require += info_platform[argc];
  require += info_arch[argc];
#ifdef COMPILER_VERSION_MAJOR
  require += info_version[argc];
#endif
#ifdef COMPILER_VERSION_INTERNAL
  require += info_version_internal[argc];
#endif
#ifdef SIMULATE_ID
  require += info_simulate[argc];
#endif
#ifdef SIMULATE_VERSION_MAJOR
  require += info_simulate_version[argc];
#endif
#if defined(__CRAYXT_COMPUTE_LINUX_TARGET)
  require += info_cray[argc];
#endif
  require += info_language_standard_default[argc];
  require += info_language_extensions_default[argc];
  (void)argv;
  return require;
}

```
####### ejemplo.dir
######## ejemplos
####### gestoryaml.dir
######## src
##### datos
###### empresa
####### clientes
####### pedidos
####### productos
###### instituto
####### alumnos
##### ejemplos
**main.cpp**
```cpp
#include "GestorYAML.h"
#include <filesystem>
#include <iostream>
#include <stdexcept>

namespace {
std::string buscarId(
    const GestorYAML& db,
    const std::string& baseDatos,
    const std::string& coleccion,
    const std::string& campo,
    const std::string& valor
) {
    for (const auto& documento : db.listar(baseDatos, coleccion)) {
        const YAML::Node campoDocumento = documento[campo];
        if (campoDocumento.IsScalar() && campoDocumento.as<std::string>() == valor)
            return documento["_id"].as<std::string>();
    }
    return {};
}
}

int main() {
    try {
        GestorYAML db{std::filesystem::path(GESTOR_YAML_DATA_DIR)};
        db.crearBaseDatos("empresa");
        db.crearColeccion("empresa", "clientes");
        db.crearColeccion("empresa", "productos");
        db.crearColeccion("empresa", "pedidos");
        db.crearColeccion("instituto", "alumnos");

        // JSON es un subconjunto de YAML; se carga el objeto de referencia del proyecto.
        const YAML::Node persona = YAML::LoadFile(GESTOR_YAML_PERSONA_JSON);
        if (!persona.IsMap() || !persona["email"].IsScalar())
            throw std::runtime_error("El objeto JSON debe incluir un email");

        const std::string email = persona["email"].as<std::string>();
        std::string idCliente = buscarId(db, "empresa", "clientes", "email", email);
        if (idCliente.empty()) {
            idCliente = db.guardar("empresa", "clientes", persona);
            std::cout << "Cliente insertado: " << idCliente << "\n";
        } else if (db.actualizar("empresa", "clientes", idCliente, persona)) {
            std::cout << "Cliente actualizado: " << idCliente << "\n";
        } else {
            throw std::runtime_error("No se pudo actualizar el cliente existente");
        }

        const std::string idAlumno = buscarId(db, "instituto", "alumnos", "email", email);
        if (idAlumno.empty())
            db.guardar("instituto", "alumnos", persona);
        else if (!db.actualizar("instituto", "alumnos", idAlumno, persona))
            throw std::runtime_error("No se pudo actualizar el alumno existente");

        YAML::Node producto;
        producto["nombre"] = "Portatil";
        producto["precio"] = 899.99;
        producto["stock"] = 12;
        std::string idProducto = buscarId(
            db, "empresa", "productos", "nombre", "Portatil"
        );
        if (idProducto.empty())
            idProducto = db.guardar("empresa", "productos", producto);
        else if (!db.actualizar("empresa", "productos", idProducto, producto))
            throw std::runtime_error("No se pudo actualizar el producto existente");

        // Relacion documental mediante identificadores
        YAML::Node pedido;
        pedido["cliente_id"] = idCliente;
        YAML::Node linea;
        linea["producto_id"] = idProducto;
        linea["cantidad"] = 2;
        pedido["lineas"].push_back(linea);
        pedido["estado"] = "pendiente";
        std::string idPedido = buscarId(
            db, "empresa", "pedidos", "cliente_id", idCliente
        );
        if (idPedido.empty())
            idPedido = db.guardar("empresa", "pedidos", pedido);
        else if (!db.actualizar("empresa", "pedidos", idPedido, pedido))
            throw std::runtime_error("No se pudo actualizar el pedido existente");

        // Lectura por ID y acceso tipado
        YAML::Node recuperado = db.leer("empresa", "clientes", idCliente);
        if (recuperado.IsDefined()) {
            std::cout << "Nombre: " << recuperado["nombre"].as<std::string>() << "\n";
            std::cout << "Email: " << recuperado["email"].as<std::string>() << "\n";
        }

        // Listado y lectura de todos los documentos
        for (const auto& doc : db.listar("empresa", "clientes"))
            std::cout << "Documento:\n" << YAML::Dump(doc) << "\n";

        // Filtro por igualdad
        YAML::Node condiciones;
        condiciones["email"] = email;
        for (const auto& doc : db.filtrar("empresa", "clientes", condiciones))
            std::cout << "Encontrado: " << doc["nombre"].as<std::string>() << "\n";

        // Metadatos
        std::cout << "Total clientes: " << db.contar("empresa", "clientes") << "\n";
        for (const auto& nombre : db.basesDeDatos()) {
            std::cout << "Base de datos: " << nombre << "\n";
            for (const auto& col : db.colecciones(nombre))
                std::cout << "  Coleccion: " << col << "\n";
        }

        // Crear, actualizar y eliminar un registro temporal de demostración.
        YAML::Node prueba;
        prueba["nombre"] = "Cliente de prueba";
        prueba["email"] = "prueba@example.invalid";
        const std::string idPrueba = db.guardar("empresa", "clientes", prueba);
        prueba["nombre"] = "Cliente de prueba actualizado";
        db.actualizar("empresa", "clientes", idPrueba, prueba);
        if (db.eliminar("empresa", "clientes", idPrueba))
            std::cout << "Cliente de prueba eliminado\n";

        std::cout << "Pedido almacenado: " << idPedido << "\n";
        std::cout << "Producto almacenado: " << idProducto << "\n";
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << "\n";
        return 1;
    }
}

```
##### include
**GestorYAML.h**
```c
#pragma once
#include <yaml-cpp/yaml.h>
#include <filesystem>
#include <string>
#include <vector>

class GestorYAML {
public:
    explicit GestorYAML(std::filesystem::path raiz = "datos");
    void crearBaseDatos(const std::string& bd) const;
    void crearColeccion(const std::string& bd, const std::string& coleccion) const;
    std::string guardar(const std::string& bd, const std::string& coleccion, const YAML::Node& objeto) const;
    YAML::Node leer(const std::string& bd, const std::string& coleccion, const std::string& id) const;
    std::vector<YAML::Node> listar(const std::string& bd, const std::string& coleccion) const;
    bool actualizar(const std::string& bd, const std::string& coleccion, const std::string& id, const YAML::Node& objeto) const;
    bool eliminar(const std::string& bd, const std::string& coleccion, const std::string& id) const;
    std::vector<YAML::Node> filtrar(const std::string& bd, const std::string& coleccion, const YAML::Node& condiciones) const;
    std::size_t contar(const std::string& bd, const std::string& coleccion) const;
    std::vector<std::string> basesDeDatos() const;
    std::vector<std::string> colecciones(const std::string& bd) const;
private:
    std::filesystem::path raiz_;
    static void validarNombre(const std::string& nombre);
    static void validarId(const std::string& id);
    std::filesystem::path rutaBD(const std::string& bd) const;
    std::filesystem::path rutaColeccion(const std::string& bd, const std::string& coleccion) const;
    std::filesystem::path rutaDocumento(const std::string& bd, const std::string& coleccion, const std::string& id) const;
    static std::string nuevoUUID();
    static void escribirAtomico(const std::filesystem::path& destino, const YAML::Node& nodo);
    static bool coincide(const YAML::Node& documento, const YAML::Node& condiciones);
};

```
##### src
**GestorYAML.cpp**
```cpp
#include "GestorYAML.h"
#include <algorithm>
#include <array>
#include <fstream>
#include <iomanip>
#include <random>
#include <regex>
#include <sstream>
#include <stdexcept>
#include <system_error>

#ifdef _WIN32
#ifndef NOMINMAX
#define NOMINMAX
#endif
#include <windows.h>
#endif

namespace fs = std::filesystem;

GestorYAML::GestorYAML(fs::path raiz) : raiz_(fs::absolute(std::move(raiz))) {
    fs::create_directories(raiz_);
}

void GestorYAML::validarNombre(const std::string& nombre) {
    static const std::regex patron(R"(^[A-Za-z0-9_-]+$)");
    if (!std::regex_match(nombre, patron))
        throw std::invalid_argument("Nombre invalido: " + nombre);
}
void GestorYAML::validarId(const std::string& id) {
    static const std::regex patron(R"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)");
    if (!std::regex_match(id, patron)) throw std::invalid_argument("UUID invalido: " + id);
}
fs::path GestorYAML::rutaBD(const std::string& bd) const {
    validarNombre(bd);
    return raiz_ / bd;
}
fs::path GestorYAML::rutaColeccion(const std::string& bd, const std::string& coleccion) const {
    validarNombre(coleccion);
    return rutaBD(bd) / coleccion;
}
fs::path GestorYAML::rutaDocumento(const std::string& bd, const std::string& coleccion, const std::string& id) const {
    validarId(id);
    return rutaColeccion(bd, coleccion) / (id + ".yaml");
}
void GestorYAML::crearBaseDatos(const std::string& bd) const {
    fs::create_directories(rutaBD(bd));
}
void GestorYAML::crearColeccion(const std::string& bd, const std::string& coleccion) const {
    fs::create_directories(rutaColeccion(bd, coleccion));
}
std::string GestorYAML::nuevoUUID() {
    std::array<unsigned char, 16> bytes{};
    std::random_device fuente;
    std::uniform_int_distribution<unsigned int> distribucion(0, 255);
    for (auto& byte : bytes)
        byte = static_cast<unsigned char>(distribucion(fuente));

    bytes[6] = static_cast<unsigned char>((bytes[6] & 0x0F) | 0x40);
    bytes[8] = static_cast<unsigned char>((bytes[8] & 0x3F) | 0x80);

    std::ostringstream texto;
    texto << std::hex << std::setfill('0');
    for (std::size_t i = 0; i < bytes.size(); ++i) {
        if (i == 4 || i == 6 || i == 8 || i == 10)
            texto << '-';
        texto << std::setw(2) << static_cast<unsigned int>(bytes[i]);
    }
    return texto.str();
}
void GestorYAML::escribirAtomico(const fs::path& destino, const YAML::Node& nodo) {
    fs::create_directories(destino.parent_path());
    const fs::path temporal = destino.string() + "." + nuevoUUID() + ".tmp";
    try {
        {
            std::ofstream salida(temporal, std::ios::binary | std::ios::trunc);
            if (!salida) throw std::runtime_error("No se pudo abrir " + temporal.string());
            YAML::Emitter emisor;
            emisor.SetIndent(2);
            emisor << nodo;
            if (!emisor.good()) throw std::runtime_error("Error serializando YAML");
            salida << emisor.c_str() << '\n';
            salida.flush();
            if (!salida) throw std::runtime_error("Error escribiendo " + temporal.string());
        }
#ifdef _WIN32
        if (!MoveFileExW(
                temporal.c_str(),
                destino.c_str(),
                MOVEFILE_REPLACE_EXISTING | MOVEFILE_WRITE_THROUGH
            )) {
            throw std::system_error(
                static_cast<int>(GetLastError()),
                std::system_category(),
                "No se pudo reemplazar " + destino.string()
            );
        }
#else
        fs::rename(temporal, destino);
#endif
    } catch (...) {
        std::error_code ec;
        fs::remove(temporal, ec);
        throw;
    }
}
std::string GestorYAML::guardar(const std::string& bd, const std::string& coleccion, const YAML::Node& objeto) const {
    if (!objeto.IsMap()) throw std::invalid_argument("El documento debe ser un mapa YAML");
    crearColeccion(bd, coleccion);
    std::string id;
    do { id = nuevoUUID(); } while (fs::exists(rutaDocumento(bd, coleccion, id)));
    YAML::Node copia = YAML::Clone(objeto);
    copia.remove("_id");
    copia["_id"] = id;
    escribirAtomico(rutaDocumento(bd, coleccion, id), copia);
    return id;
}
YAML::Node GestorYAML::leer(const std::string& bd, const std::string& coleccion, const std::string& id) const {
    auto ruta = rutaDocumento(bd, coleccion, id);
    if (!fs::is_regular_file(ruta)) return YAML::Node(YAML::NodeType::Undefined);
    return YAML::LoadFile(ruta.string());
}
std::vector<YAML::Node> GestorYAML::listar(const std::string& bd, const std::string& coleccion) const {
    std::vector<YAML::Node> resultado;
    const auto ruta = rutaColeccion(bd, coleccion);
    if (!fs::is_directory(ruta)) return resultado;
    std::vector<fs::path> archivos;
    for (const auto& entrada : fs::directory_iterator(ruta)) {
        if (entrada.is_regular_file() && entrada.path().extension() == ".yaml")
            archivos.push_back(entrada.path());
    }
    std::sort(archivos.begin(), archivos.end());
    for (const auto& archivo : archivos) resultado.push_back(YAML::LoadFile(archivo.string()));
    return resultado;
}
bool GestorYAML::actualizar(const std::string& bd, const std::string& coleccion, const std::string& id, const YAML::Node& objeto) const {
    if (!objeto.IsMap()) throw std::invalid_argument("El documento debe ser un mapa YAML");
    auto ruta = rutaDocumento(bd, coleccion, id);
    if (!fs::is_regular_file(ruta)) return false;
    YAML::Node copia = YAML::Clone(objeto);
    copia.remove("_id");
    copia["_id"] = id;
    escribirAtomico(ruta, copia);
    return true;
}
bool GestorYAML::eliminar(const std::string& bd, const std::string& coleccion, const std::string& id) const {
    return fs::remove(rutaDocumento(bd, coleccion, id));
}
bool GestorYAML::coincide(const YAML::Node& documento, const YAML::Node& condiciones) {
    if (!condiciones.IsMap()) throw std::invalid_argument("Las condiciones deben ser un mapa YAML");
    for (auto it = condiciones.begin(); it != condiciones.end(); ++it) {
        const auto clave = it->first.as<std::string>();
        const YAML::Node valor = documento[clave];
        if (!valor.IsDefined()) return false;
        if (it->second.IsMap()) {
            if (!valor.IsMap() || !coincide(valor, it->second)) return false;
        } else if (it->second.IsScalar()) {
            if (!valor.IsScalar() || valor.Scalar() != it->second.Scalar()) return false;
        } else if (YAML::Dump(valor) != YAML::Dump(it->second)) return false;
    }
    return true;
}
std::vector<YAML::Node> GestorYAML::filtrar(const std::string& bd, const std::string& coleccion, const YAML::Node& condiciones) const {
    if (!condiciones.IsMap()) throw std::invalid_argument("Las condiciones deben ser un mapa YAML");
    std::vector<YAML::Node> resultado;
    for (const auto& doc : listar(bd, coleccion))
        if (doc.IsMap() && coincide(doc, condiciones)) resultado.push_back(doc);
    return resultado;
}
std::size_t GestorYAML::contar(const std::string& bd, const std::string& coleccion) const {
    return listar(bd, coleccion).size();
}
std::vector<std::string> GestorYAML::basesDeDatos() const {
    std::vector<std::string> resultado;
    for (const auto& entrada : fs::directory_iterator(raiz_))
        if (entrada.is_directory()) resultado.push_back(entrada.path().filename().string());
    std::sort(resultado.begin(), resultado.end());
    return resultado;
}
std::vector<std::string> GestorYAML::colecciones(const std::string& bd) const {
    std::vector<std::string> resultado;
    auto ruta = rutaBD(bd);
    if (!fs::is_directory(ruta)) return resultado;
    for (const auto& entrada : fs::directory_iterator(ruta))
        if (entrada.is_directory()) resultado.push_back(entrada.path().filename().string());
    std::sort(resultado.begin(), resultado.end());
    return resultado;
}

```
### 004-Gestores de bases de datos orientadas a objetos
**000-Introducción.md**
```markdown
# Gestores de bases de datos orientadas a objetos
- Gestores de bases de datos orientadas a objetos
	- Conceptos fundamentales
	- Estructura y elementos
	- Operaciones principales
	- Persistencia y recuperación de datos
	- Integridad y tratamiento de errores
	- Ejemplo de implementación

```
**001-objetivo.md**
```markdown
Desarrollar mejor la base de datos orientada a objetos
Integrar con jocarsa-basesdedatos

-Gestor relacional (tablas)
-Gestor ORM - objetos a tablas y volver
-Integrar gestor de objetos puros


```
**004-tipos de datos jocarsa.md**
```markdown

```
#### 002-punto de partida - gestor-yaml
**README.md**
```markdown
# Gestor YAML en C++17

Almacena documentos YAML en `datos/base_de_datos/coleccion/uuid.yaml`. El ejemplo carga los datos de `001-objeto.json` desde la carpeta de la lección y los guarda como documento de cliente.

## Requisitos

Se necesita un compilador compatible con C++17, CMake 3.16 o posterior y yaml-cpp.

### Ubuntu

```bash
sudo apt update
sudo apt install -y g++ cmake libyaml-cpp-dev
```

### Windows con MSYS2 UCRT64

Instala los paquetes desde la terminal UCRT64:

```bash
pacman -S mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-cmake mingw-w64-ucrt-x86_64-yaml-cpp
```

Usa un compilador C++17 moderno (GCC 9 o posterior recomendado); MinGW GCC 6.3 no es suficiente para este proyecto.

## Compilación y ejecución

Desde la raíz de este proyecto:

```bash
cmake -S . -B build
cmake --build build -j
```

En Ubuntu:

```bash
./build/ejemplo
```

En Windows:

```powershell
.\build\ejemplo.exe
```

La carpeta `datos/` y el JSON de referencia se resuelven desde las rutas del proyecto, no desde el directorio actual de la terminal.

## API

```cpp
GestorYAML db("ruta/a/datos");
db.crearBaseDatos("empresa");
db.crearColeccion("empresa", "clientes");
YAML::Node objeto;
objeto["nombre"] = "Andrei";
objeto["email"] = "bugaandrei1@gmail.com";
std::string id = db.guardar("empresa", "clientes", objeto);
YAML::Node leido = db.leer("empresa", "clientes", id);
std::cout << leido["nombre"].as<std::string>() << "\n";
```

Consultar `ejemplos/main.cpp` para ver la carga de `001-objeto.json`, la persistencia idempotente por email, las referencias por ID, la lectura tipada, los filtros, el catálogo y el ciclo de vida de un registro temporal.

La generación de UUID v4 se implementa en C++ estándar y no depende de `libuuid`, por lo que también funciona en Windows.

## Consideraciones

- Las consultas `listar`, `filtrar` y `contar` recorren los archivos YAML de la colección. No hay índices.
- `filtrar` aplica igualdad exacta en campos escalares y permite condiciones anidadas en mapas; no implementa rangos ni operadores.
- `actualizar` reemplaza el documento completo, conservando el UUID.
- `leer` devuelve un nodo indefinido si no existe el documento.
- Las escrituras usan un archivo temporal y renombrado en el mismo directorio; no hay bloqueos entre procesos, transacciones ni garantías de sincronización física ante corte de energía.
- Las referencias entre documentos se guardan como IDs sin integridad referencial automática.
- Usa nombres de bases de datos y colecciones con letras ASCII, dígitos, `_` o `-`.
- No utilices el gestor con directorios que puedan contener enlaces simbólicos manipulados por usuarios no fiables.

```
##### build
###### CMakeFiles
####### 3.28.3
####### ejemplo.dir
####### gestoryaml.dir
######## src
##### datos
###### empresa
####### clientes
####### pedidos
####### productos
###### instituto
####### alumnos
##### ejemplos
**main.cpp**
```cpp
#include "GestorYAML.h"
#include <filesystem>
#include <iostream>
#include <stdexcept>

namespace {
std::string buscarId(
    const GestorYAML& db,
    const std::string& baseDatos,
    const std::string& coleccion,
    const std::string& campo,
    const std::string& valor
) {
    for (const auto& documento : db.listar(baseDatos, coleccion)) {
        const YAML::Node campoDocumento = documento[campo];
        if (campoDocumento.IsScalar() && campoDocumento.as<std::string>() == valor)
            return documento["_id"].as<std::string>();
    }
    return {};
}
}

int main() {
    try {
        GestorYAML db{std::filesystem::path(GESTOR_YAML_DATA_DIR)};
        db.crearBaseDatos("empresa");
        db.crearColeccion("empresa", "clientes");
        db.crearColeccion("empresa", "productos");
        db.crearColeccion("empresa", "pedidos");
        db.crearColeccion("instituto", "alumnos");

        // JSON es un subconjunto de YAML; se carga el objeto de referencia del proyecto.
        const YAML::Node persona = YAML::LoadFile(GESTOR_YAML_PERSONA_JSON);
        if (!persona.IsMap() || !persona["email"].IsScalar())
            throw std::runtime_error("El objeto JSON debe incluir un email");

        const std::string email = persona["email"].as<std::string>();
        std::string idCliente = buscarId(db, "empresa", "clientes", "email", email);
        if (idCliente.empty()) {
            idCliente = db.guardar("empresa", "clientes", persona);
            std::cout << "Cliente insertado: " << idCliente << "\n";
        } else if (db.actualizar("empresa", "clientes", idCliente, persona)) {
            std::cout << "Cliente actualizado: " << idCliente << "\n";
        } else {
            throw std::runtime_error("No se pudo actualizar el cliente existente");
        }

        const std::string idAlumno = buscarId(db, "instituto", "alumnos", "email", email);
        if (idAlumno.empty())
            db.guardar("instituto", "alumnos", persona);
        else if (!db.actualizar("instituto", "alumnos", idAlumno, persona))
            throw std::runtime_error("No se pudo actualizar el alumno existente");

        YAML::Node producto;
        producto["nombre"] = "Portatil";
        producto["precio"] = 899.99;
        producto["stock"] = 12;
        std::string idProducto = buscarId(
            db, "empresa", "productos", "nombre", "Portatil"
        );
        if (idProducto.empty())
            idProducto = db.guardar("empresa", "productos", producto);
        else if (!db.actualizar("empresa", "productos", idProducto, producto))
            throw std::runtime_error("No se pudo actualizar el producto existente");

        // Relacion documental mediante identificadores
        YAML::Node pedido;
        pedido["cliente_id"] = idCliente;
        YAML::Node linea;
        linea["producto_id"] = idProducto;
        linea["cantidad"] = 2;
        pedido["lineas"].push_back(linea);
        pedido["estado"] = "pendiente";
        std::string idPedido = buscarId(
            db, "empresa", "pedidos", "cliente_id", idCliente
        );
        if (idPedido.empty())
            idPedido = db.guardar("empresa", "pedidos", pedido);
        else if (!db.actualizar("empresa", "pedidos", idPedido, pedido))
            throw std::runtime_error("No se pudo actualizar el pedido existente");

        // Lectura por ID y acceso tipado
        YAML::Node recuperado = db.leer("empresa", "clientes", idCliente);
        if (recuperado.IsDefined()) {
            std::cout << "Nombre: " << recuperado["nombre"].as<std::string>() << "\n";
            std::cout << "Email: " << recuperado["email"].as<std::string>() << "\n";
        }

        // Listado y lectura de todos los documentos
        for (const auto& doc : db.listar("empresa", "clientes"))
            std::cout << "Documento:\n" << YAML::Dump(doc) << "\n";

        // Filtro por igualdad
        YAML::Node condiciones;
        condiciones["email"] = email;
        for (const auto& doc : db.filtrar("empresa", "clientes", condiciones))
            std::cout << "Encontrado: " << doc["nombre"].as<std::string>() << "\n";

        // Metadatos
        std::cout << "Total clientes: " << db.contar("empresa", "clientes") << "\n";
        for (const auto& nombre : db.basesDeDatos()) {
            std::cout << "Base de datos: " << nombre << "\n";
            for (const auto& col : db.colecciones(nombre))
                std::cout << "  Coleccion: " << col << "\n";
        }

        // Crear, actualizar y eliminar un registro temporal de demostración.
        YAML::Node prueba;
        prueba["nombre"] = "Cliente de prueba";
        prueba["email"] = "prueba@example.invalid";
        const std::string idPrueba = db.guardar("empresa", "clientes", prueba);
        prueba["nombre"] = "Cliente de prueba actualizado";
        db.actualizar("empresa", "clientes", idPrueba, prueba);
        if (db.eliminar("empresa", "clientes", idPrueba))
            std::cout << "Cliente de prueba eliminado\n";

        std::cout << "Pedido almacenado: " << idPedido << "\n";
        std::cout << "Producto almacenado: " << idProducto << "\n";
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << "\n";
        return 1;
    }
}

```
##### include
**GestorYAML.h**
```c
#pragma once
#include <yaml-cpp/yaml.h>
#include <filesystem>
#include <string>
#include <vector>

class GestorYAML {
public:
    explicit GestorYAML(std::filesystem::path raiz = "datos");
    void crearBaseDatos(const std::string& bd) const;
    void crearColeccion(const std::string& bd, const std::string& coleccion) const;
    std::string guardar(const std::string& bd, const std::string& coleccion, const YAML::Node& objeto) const;
    YAML::Node leer(const std::string& bd, const std::string& coleccion, const std::string& id) const;
    std::vector<YAML::Node> listar(const std::string& bd, const std::string& coleccion) const;
    bool actualizar(const std::string& bd, const std::string& coleccion, const std::string& id, const YAML::Node& objeto) const;
    bool eliminar(const std::string& bd, const std::string& coleccion, const std::string& id) const;
    std::vector<YAML::Node> filtrar(const std::string& bd, const std::string& coleccion, const YAML::Node& condiciones) const;
    std::size_t contar(const std::string& bd, const std::string& coleccion) const;
    std::vector<std::string> basesDeDatos() const;
    std::vector<std::string> colecciones(const std::string& bd) const;
private:
    std::filesystem::path raiz_;
    static void validarNombre(const std::string& nombre);
    static void validarId(const std::string& id);
    std::filesystem::path rutaBD(const std::string& bd) const;
    std::filesystem::path rutaColeccion(const std::string& bd, const std::string& coleccion) const;
    std::filesystem::path rutaDocumento(const std::string& bd, const std::string& coleccion, const std::string& id) const;
    static std::string nuevoUUID();
    static void escribirAtomico(const std::filesystem::path& destino, const YAML::Node& nodo);
    static bool coincide(const YAML::Node& documento, const YAML::Node& condiciones);
};

```
##### src
**GestorYAML.cpp**
```cpp
#include "GestorYAML.h"
#include <algorithm>
#include <array>
#include <fstream>
#include <iomanip>
#include <random>
#include <regex>
#include <sstream>
#include <stdexcept>
#include <system_error>

#ifdef _WIN32
#ifndef NOMINMAX
#define NOMINMAX
#endif
#include <windows.h>
#endif

namespace fs = std::filesystem;

GestorYAML::GestorYAML(fs::path raiz) : raiz_(fs::absolute(std::move(raiz))) {
    fs::create_directories(raiz_);
}

void GestorYAML::validarNombre(const std::string& nombre) {
    static const std::regex patron(R"(^[A-Za-z0-9_-]+$)");
    if (!std::regex_match(nombre, patron))
        throw std::invalid_argument("Nombre invalido: " + nombre);
}
void GestorYAML::validarId(const std::string& id) {
    static const std::regex patron(R"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)");
    if (!std::regex_match(id, patron)) throw std::invalid_argument("UUID invalido: " + id);
}
fs::path GestorYAML::rutaBD(const std::string& bd) const {
    validarNombre(bd);
    return raiz_ / bd;
}
fs::path GestorYAML::rutaColeccion(const std::string& bd, const std::string& coleccion) const {
    validarNombre(coleccion);
    return rutaBD(bd) / coleccion;
}
fs::path GestorYAML::rutaDocumento(const std::string& bd, const std::string& coleccion, const std::string& id) const {
    validarId(id);
    return rutaColeccion(bd, coleccion) / (id + ".yaml");
}
void GestorYAML::crearBaseDatos(const std::string& bd) const {
    fs::create_directories(rutaBD(bd));
}
void GestorYAML::crearColeccion(const std::string& bd, const std::string& coleccion) const {
    fs::create_directories(rutaColeccion(bd, coleccion));
}
std::string GestorYAML::nuevoUUID() {
    std::array<unsigned char, 16> bytes{};
    std::random_device fuente;
    std::uniform_int_distribution<unsigned int> distribucion(0, 255);
    for (auto& byte : bytes)
        byte = static_cast<unsigned char>(distribucion(fuente));

    bytes[6] = static_cast<unsigned char>((bytes[6] & 0x0F) | 0x40);
    bytes[8] = static_cast<unsigned char>((bytes[8] & 0x3F) | 0x80);

    std::ostringstream texto;
    texto << std::hex << std::setfill('0');
    for (std::size_t i = 0; i < bytes.size(); ++i) {
        if (i == 4 || i == 6 || i == 8 || i == 10)
            texto << '-';
        texto << std::setw(2) << static_cast<unsigned int>(bytes[i]);
    }
    return texto.str();
}
void GestorYAML::escribirAtomico(const fs::path& destino, const YAML::Node& nodo) {
    fs::create_directories(destino.parent_path());
    const fs::path temporal = destino.string() + "." + nuevoUUID() + ".tmp";
    try {
        {
            std::ofstream salida(temporal, std::ios::binary | std::ios::trunc);
            if (!salida) throw std::runtime_error("No se pudo abrir " + temporal.string());
            YAML::Emitter emisor;
            emisor.SetIndent(2);
            emisor << nodo;
            if (!emisor.good()) throw std::runtime_error("Error serializando YAML");
            salida << emisor.c_str() << '\n';
            salida.flush();
            if (!salida) throw std::runtime_error("Error escribiendo " + temporal.string());
        }
#ifdef _WIN32
        if (!MoveFileExW(
                temporal.c_str(),
                destino.c_str(),
                MOVEFILE_REPLACE_EXISTING | MOVEFILE_WRITE_THROUGH
            )) {
            throw std::system_error(
                static_cast<int>(GetLastError()),
                std::system_category(),
                "No se pudo reemplazar " + destino.string()
            );
        }
#else
        fs::rename(temporal, destino);
#endif
    } catch (...) {
        std::error_code ec;
        fs::remove(temporal, ec);
        throw;
    }
}
std::string GestorYAML::guardar(const std::string& bd, const std::string& coleccion, const YAML::Node& objeto) const {
    if (!objeto.IsMap()) throw std::invalid_argument("El documento debe ser un mapa YAML");
    crearColeccion(bd, coleccion);
    std::string id;
    do { id = nuevoUUID(); } while (fs::exists(rutaDocumento(bd, coleccion, id)));
    YAML::Node copia = YAML::Clone(objeto);
    copia.remove("_id");
    copia["_id"] = id;
    escribirAtomico(rutaDocumento(bd, coleccion, id), copia);
    return id;
}
YAML::Node GestorYAML::leer(const std::string& bd, const std::string& coleccion, const std::string& id) const {
    auto ruta = rutaDocumento(bd, coleccion, id);
    if (!fs::is_regular_file(ruta)) return YAML::Node(YAML::NodeType::Undefined);
    return YAML::LoadFile(ruta.string());
}
std::vector<YAML::Node> GestorYAML::listar(const std::string& bd, const std::string& coleccion) const {
    std::vector<YAML::Node> resultado;
    const auto ruta = rutaColeccion(bd, coleccion);
    if (!fs::is_directory(ruta)) return resultado;
    std::vector<fs::path> archivos;
    for (const auto& entrada : fs::directory_iterator(ruta)) {
        if (entrada.is_regular_file() && entrada.path().extension() == ".yaml")
            archivos.push_back(entrada.path());
    }
    std::sort(archivos.begin(), archivos.end());
    for (const auto& archivo : archivos) resultado.push_back(YAML::LoadFile(archivo.string()));
    return resultado;
}
bool GestorYAML::actualizar(const std::string& bd, const std::string& coleccion, const std::string& id, const YAML::Node& objeto) const {
    if (!objeto.IsMap()) throw std::invalid_argument("El documento debe ser un mapa YAML");
    auto ruta = rutaDocumento(bd, coleccion, id);
    if (!fs::is_regular_file(ruta)) return false;
    YAML::Node copia = YAML::Clone(objeto);
    copia.remove("_id");
    copia["_id"] = id;
    escribirAtomico(ruta, copia);
    return true;
}
bool GestorYAML::eliminar(const std::string& bd, const std::string& coleccion, const std::string& id) const {
    return fs::remove(rutaDocumento(bd, coleccion, id));
}
bool GestorYAML::coincide(const YAML::Node& documento, const YAML::Node& condiciones) {
    if (!condiciones.IsMap()) throw std::invalid_argument("Las condiciones deben ser un mapa YAML");
    for (auto it = condiciones.begin(); it != condiciones.end(); ++it) {
        const auto clave = it->first.as<std::string>();
        const YAML::Node valor = documento[clave];
        if (!valor.IsDefined()) return false;
        if (it->second.IsMap()) {
            if (!valor.IsMap() || !coincide(valor, it->second)) return false;
        } else if (it->second.IsScalar()) {
            if (!valor.IsScalar() || valor.Scalar() != it->second.Scalar()) return false;
        } else if (YAML::Dump(valor) != YAML::Dump(it->second)) return false;
    }
    return true;
}
std::vector<YAML::Node> GestorYAML::filtrar(const std::string& bd, const std::string& coleccion, const YAML::Node& condiciones) const {
    if (!condiciones.IsMap()) throw std::invalid_argument("Las condiciones deben ser un mapa YAML");
    std::vector<YAML::Node> resultado;
    for (const auto& doc : listar(bd, coleccion))
        if (doc.IsMap() && coincide(doc, condiciones)) resultado.push_back(doc);
    return resultado;
}
std::size_t GestorYAML::contar(const std::string& bd, const std::string& coleccion) const {
    return listar(bd, coleccion).size();
}
std::vector<std::string> GestorYAML::basesDeDatos() const {
    std::vector<std::string> resultado;
    for (const auto& entrada : fs::directory_iterator(raiz_))
        if (entrada.is_directory()) resultado.push_back(entrada.path().filename().string());
    std::sort(resultado.begin(), resultado.end());
    return resultado;
}
std::vector<std::string> GestorYAML::colecciones(const std::string& bd) const {
    std::vector<std::string> resultado;
    auto ruta = rutaBD(bd);
    if (!fs::is_directory(ruta)) return resultado;
    for (const auto& entrada : fs::directory_iterator(ruta))
        if (entrada.is_directory()) resultado.push_back(entrada.path().filename().string());
    std::sort(resultado.begin(), resultado.end());
    return resultado;
}

```
#### 003-punto de partida - jocarsa-basededatos
##### UI
**andreibbdd_ffi.php**
```php
<?php
declare(strict_types=1);
/*
 * Sustituto de la extensión PHP andreibbdd para Windows (XAMPP).
 *
 * En Linux, las funciones andreibbdd_* las aporta la extensión nativa
 * (motor/src/conector_php.cpp). En Windows se cargan desde
 * motor/andreibbdd.dll mediante FFI. Cada función tiene la misma firma y
 * devuelve lo mismo que la extensión; los errores del motor se lanzan como
 * Exception, igual que hace la extensión.
 *
 * Requisitos en C:\xampp\php\php.ini:
 *   extension=ffi
 *   ffi.enable=true
 */

if (extension_loaded('andreibbdd') || function_exists('andreibbdd_configurar')) {
    return;
}

function __andreibbdd_ffi(): FFI
{
    static $ffi = null;
    if ($ffi !== null) {
        return $ffi;
    }
    if (!extension_loaded('ffi') || !class_exists('FFI')) {
        throw new RuntimeException('Activa FFI en php.ini (extension=ffi y ffi.enable=true) y reinicia Apache.');
    }
    $dll = getenv('ANDREIBBDD_DLL') ?: dirname(__DIR__) . '/motor/andreibbdd.dll';
    if (!is_file($dll)) {
        throw new RuntimeException('No se encuentra ' . $dll . '. Compílala con motor/compilar-windows.bat.');
    }
    $ffi = FFI::cdef(
        'char* andreibbdd_llamar(const char* funcion, const char* argumentos);
         void andreibbdd_liberar(char* texto);',
        $dll
    );
    return $ffi;
}

/** Llama al motor y devuelve el resultado decodificado, o lanza Exception. */
function __andreibbdd(string $funcion, array $argumentos = []): mixed
{
    $ffi = __andreibbdd_ffi();
    $json = json_encode($argumentos, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE | JSON_THROW_ON_ERROR);
    $puntero = $ffi->andreibbdd_llamar($funcion, $json);
    if ($puntero === null) {
        throw new Exception('Respuesta vacía de andreibbdd.dll');
    }
    try {
        $texto = FFI::string($puntero);
    } finally {
        $ffi->andreibbdd_liberar($puntero);
    }
    $respuesta = json_decode($texto, true, 512, JSON_THROW_ON_ERROR);
    if (!($respuesta['ok'] ?? false)) {
        throw new Exception((string)($respuesta['error'] ?? 'Error en AndreiBBDD'));
    }
    return $respuesta['resultado'] ?? null;
}

/** Igual que la extensión: los valores se convierten a texto y null se conserva. */
function __andreibbdd_textos(array $valores): array
{
    return array_map(static fn($v) => $v === null ? null : (is_bool($v) ? ($v ? '1' : '') : (string)$v), $valores);
}

/** Igual que la extensión: solo se conservan las claves de texto. */
function __andreibbdd_asociativo(array $valores): object
{
    $r = [];
    foreach ($valores as $k => $v) {
        if (is_string($k)) {
            $r[$k] = $v === null ? null : (is_bool($v) ? ($v ? '1' : '') : (string)$v);
        }
    }
    return (object)$r;
}

/* Configuración / bases */
function andreibbdd_configurar(string $config): bool { return __andreibbdd('configurar', [$config]); }
function andreibbdd_configuracion(): array { return __andreibbdd('configuracion'); }
function andreibbdd_crear_base(string $nombre): bool { return __andreibbdd('crear_base', [$nombre]); }
function andreibbdd_usar_base(string $nombre): bool { return __andreibbdd('usar_base', [$nombre]); }
function andreibbdd_listar_bases(): array { return __andreibbdd('listar_bases'); }
function andreibbdd_eliminar_base(string $nombre): bool { return __andreibbdd('eliminar_base', [$nombre]); }

/* Tablas / introspección */
function andreibbdd_listar_tablas(): array { return __andreibbdd('listar_tablas'); }
function andreibbdd_crear_tabla(string $tabla, string $esquema): bool { return __andreibbdd('crear_tabla', [$tabla, $esquema]); }
function andreibbdd_crear_tabla_tipada(string $tabla, array $columnas): bool { return __andreibbdd('crear_tabla_tipada', [$tabla, __andreibbdd_asociativo($columnas)]); }
function andreibbdd_esquema(string $tabla): array { return __andreibbdd('esquema', [$tabla]); }
function andreibbdd_tipos(string $tabla): array { return __andreibbdd('tipos', [$tabla]); }
function andreibbdd_clave_primaria(string $tabla): string { return __andreibbdd('clave_primaria', [$tabla]); }
function andreibbdd_claves_foraneas(string $tabla): array { return __andreibbdd('claves_foraneas', [$tabla]); }
function andreibbdd_restricciones(string $tabla, string $columna): array { return __andreibbdd('restricciones', [$tabla, $columna]); }
function andreibbdd_siguiente_id(string $tabla): int { return __andreibbdd('siguiente_id', [$tabla]); }
function andreibbdd_truncar_tabla(string $tabla): bool { return __andreibbdd('truncar_tabla', [$tabla]); }
function andreibbdd_eliminar_tabla(string $tabla): bool { return __andreibbdd('eliminar_tabla', [$tabla]); }

/* ALTER */
function andreibbdd_alterar_anadir(string $tabla, string $columna): bool { return __andreibbdd('alterar_anadir', [$tabla, $columna]); }
function andreibbdd_alterar_eliminar_columna(string $tabla, string $columna): bool { return __andreibbdd('alterar_eliminar_columna', [$tabla, $columna]); }
function andreibbdd_alterar_renombrar_columna(string $tabla, string $antigua, string $nueva): bool { return __andreibbdd('alterar_renombrar_columna', [$tabla, $antigua, $nueva]); }
function andreibbdd_alterar_modificar_columna(string $tabla, string $antigua, string $nueva): bool { return __andreibbdd('alterar_modificar_columna', [$tabla, $antigua, $nueva]); }

/* CRUD */
function andreibbdd_insertar(string $tabla, array $valores): int { return __andreibbdd('insertar', [$tabla, __andreibbdd_textos(array_values($valores))]); }
function andreibbdd_insertar_columnas(string $tabla, array $columnas, array $valores): int { return __andreibbdd('insertar_columnas', [$tabla, __andreibbdd_textos(array_values($columnas)), __andreibbdd_textos(array_values($valores))]); }
function andreibbdd_insertar_desde(string $destino, string $origen): int { return __andreibbdd('insertar_desde', [$destino, $origen]); }
function andreibbdd_seleccionar(string $tabla, int $id): array { return __andreibbdd('seleccionar', [$tabla, $id]); }
function andreibbdd_listar(string $tabla): array { return __andreibbdd('listar', [$tabla]); }
function andreibbdd_buscar(string $tabla, string $columna, string $valor): array { return __andreibbdd('buscar', [$tabla, $columna, $valor]); }
function andreibbdd_actualizar(string $tabla, int $id, array $valores): bool { return __andreibbdd('actualizar', [$tabla, $id, __andreibbdd_textos(array_values($valores))]); }
function andreibbdd_eliminar(string $tabla, int $id): bool { return __andreibbdd('eliminar', [$tabla, $id]); }
function andreibbdd_actualizar_donde(string $tabla, array $cambios, string $columna = '', string $valor = ''): int { return __andreibbdd('actualizar_donde', [$tabla, __andreibbdd_asociativo($cambios), $columna, $valor]); }
function andreibbdd_eliminar_donde(string $tabla, string $columna = '', string $valor = ''): int { return __andreibbdd('eliminar_donde', [$tabla, $columna, $valor]); }

/* Relaciones / restricciones */
function andreibbdd_anadir_clave_foranea(string $tabla, string $columna, string $tablaReferenciada, string $columnaReferenciada = 'id'): bool { return __andreibbdd('anadir_clave_foranea', [$tabla, $columna, $tablaReferenciada, $columnaReferenciada]); }
function andreibbdd_establecer_no_nulo(string $tabla, string $columna): bool { return __andreibbdd('establecer_no_nulo', [$tabla, $columna]); }
function andreibbdd_establecer_unico(string $tabla, string $columna): bool { return __andreibbdd('establecer_unico', [$tabla, $columna]); }
function andreibbdd_establecer_por_defecto(string $tabla, string $columna, string $valor): bool { return __andreibbdd('establecer_por_defecto', [$tabla, $columna, $valor]); }

/* Consultas */
function andreibbdd_consultar(string $consulta): array { return __andreibbdd('consultar', [$consulta]); }
function andreibbdd_explicar(string $consulta): string { return __andreibbdd('explicar', [$consulta]); }

/* Índices */
function andreibbdd_crear_indice(string $nombre, string $tabla, string $columna): bool { return __andreibbdd('crear_indice', [$nombre, $tabla, $columna]); }
function andreibbdd_eliminar_indice(string $nombre, string $tabla): bool { return __andreibbdd('eliminar_indice', [$nombre, $tabla]); }
function andreibbdd_indices(string $tabla): array { return __andreibbdd('indices', [$tabla]); }

/* Vistas */
function andreibbdd_crear_vista(string $nombre, string $consulta): bool { return __andreibbdd('crear_vista', [$nombre, $consulta]); }
function andreibbdd_eliminar_vista(string $nombre): bool { return __andreibbdd('eliminar_vista', [$nombre]); }
function andreibbdd_listar_vistas(): array { return __andreibbdd('listar_vistas'); }

/* Transacciones */
function andreibbdd_iniciar_transaccion(): bool { return __andreibbdd('iniciar_transaccion'); }
function andreibbdd_confirmar(): bool { return __andreibbdd('confirmar'); }
function andreibbdd_deshacer(): bool { return __andreibbdd('deshacer'); }
function andreibbdd_en_transaccion(): bool { return __andreibbdd('en_transaccion'); }

/* Colecciones */
function andreibbdd_crear_subcoleccion(string $padre, string $nombre): bool { return __andreibbdd('crear_subcoleccion', [$padre, $nombre]); }
function andreibbdd_mover_coleccion(string $nombre, string $nuevoPadre): bool { return __andreibbdd('mover_coleccion', [$nombre, $nuevoPadre]); }
function andreibbdd_subcolecciones_de(string $nombre): array { return __andreibbdd('subcolecciones_de', [$nombre]); }
function andreibbdd_tablas_coleccion_recursiva(string $nombre): array { return __andreibbdd('tablas_coleccion_recursiva', [$nombre]); }
function andreibbdd_arbol_colecciones(): string { return __andreibbdd('arbol_colecciones'); }
function andreibbdd_crear_coleccion(string $nombre): bool { return __andreibbdd('crear_coleccion', [$nombre]); }
function andreibbdd_eliminar_coleccion(string $nombre): bool { return __andreibbdd('eliminar_coleccion', [$nombre]); }
function andreibbdd_agregar_tabla_coleccion(string $tabla, string $coleccion): bool { return __andreibbdd('agregar_tabla_coleccion', [$tabla, $coleccion]); }
function andreibbdd_quitar_tabla_coleccion(string $tabla, string $coleccion): bool { return __andreibbdd('quitar_tabla_coleccion', [$tabla, $coleccion]); }
function andreibbdd_listar_colecciones(): array { return __andreibbdd('listar_colecciones'); }
function andreibbdd_tablas_de_coleccion(string $coleccion): array { return __andreibbdd('tablas_de_coleccion', [$coleccion]); }
function andreibbdd_colecciones_de_tabla(string $tabla): array { return __andreibbdd('colecciones_de_tabla', [$tabla]); }

```
**api.php**
```php
<?php
declare(strict_types=1);
session_start(['cookie_httponly'=>true,'cookie_samesite'=>'Strict','use_strict_mode'=>true]);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
try {
 $authInput=json_decode(file_get_contents('php://input'),true);
 if(!is_array($authInput))$authInput=[];
 $authAction=$authInput['action']??'';
 if($authAction==='login'){
  if(hash_equals('andrei',(string)($authInput['username']??'')) && hash_equals('andrei',(string)($authInput['password']??''))){
   session_regenerate_id(true);$_SESSION['switches_auth']=true;
   echo json_encode(['ok'=>true,'result'=>true]);
  }else{http_response_code(401);echo json_encode(['ok'=>false,'error'=>'Credenciales incorrectas']);}
  exit;
 }
 if($authAction==='logout'){$_SESSION=[];session_destroy();echo json_encode(['ok'=>true,'result'=>true]);exit;}
 if($authAction==='auth_status'){echo json_encode(['ok'=>true,'result'=>!empty($_SESSION['switches_auth'])]);exit;}
 if(empty($_SESSION['switches_auth'])){http_response_code(401);echo json_encode(['ok'=>false,'error'=>'No autorizado']);exit;}
 // Linux: extensión nativa + /etc/andrei/config.json.
 // Windows (XAMPP): motor/andreibbdd.dll cargada con FFI + motor/config.windows.json.
 define('ANDREI_CONFIG', getenv('ANDREIBBDD_CONFIG') ?: (PHP_OS_FAMILY === 'Windows'
  ? dirname(__DIR__) . '/motor/config.windows.json'
  : '/etc/andrei/config.json'));
 if (!extension_loaded('andreibbdd')) {
  if (PHP_OS_FAMILY !== 'Windows') throw new RuntimeException('Falta la extensión PHP andreibbdd. Instala el motor y reinicia Apache.');
  require_once __DIR__ . '/andreibbdd_ffi.php';
 }
 if (!is_file(ANDREI_CONFIG)) throw new RuntimeException('No existe ' . ANDREI_CONFIG);
 andreibbdd_configurar(ANDREI_CONFIG);
 $input=json_decode(file_get_contents('php://input'),true,512,JSON_THROW_ON_ERROR);
 if (!is_array($input)) throw new RuntimeException('JSON inválido');
 $root=__DIR__.'/private';if(!is_dir($root)&&!mkdir($root,0770,true))throw new RuntimeException('No se puede crear private/');
 $meta=$root.'/projects.json';
 $fp=fopen($root.'/lock','c');if(!$fp||!flock($fp,LOCK_EX))throw new RuntimeException('Bloqueo no disponible');
 $state=is_file($meta)?json_decode(file_get_contents($meta),true):null;
 if(!is_array($state))$state=['activeId'=>null,'projects'=>[]];
 $action=$input['action']??'';
 function required($v,$max=80){if(!is_string($v)||!preg_match('/^[\pL\pN_ -]{1,'.$max.'}$/u',$v))throw new RuntimeException('Nombre inválido');return trim($v);}
 function dbname($id){return str_starts_with($id,'db:')?substr($id,3):'visual_'.preg_replace('/[^a-zA-Z0-9_]/','',$id);}
 function databaseKey($label){
  $key=collectionKey($label);
  if(strlen($key)>70)throw new RuntimeException('Nombre de base demasiado largo');
  return $key;
 }
 function renameDatabase($old,$new){
  if($old===$new)return;
  $cfg=json_decode(file_get_contents(ANDREI_CONFIG),true);
  $root=$cfg['instalacion']??null;
  // Ruta absoluta: /... en Linux, C:/... o C:\... en Windows.
  if(!is_string($root)||!preg_match('#^(/|[A-Za-z]:[\\\\/])#',$root))throw new RuntimeException('Para renombrar bases, configura una ruta absoluta en '.ANDREI_CONFIG.' (instalacion).');
  $root=realpath($root);
  if(!$root||!is_dir($root))throw new RuntimeException('Directorio de bases no disponible');
  foreach([$old,$new] as $v)if(!preg_match('/^[a-z0-9_-]+$/',$v))throw new RuntimeException('Identificador de base inválido');
  $src=$root.'/'.$old;$dst=$root.'/'.$new;
  if(!is_dir($src)||is_link($src))throw new RuntimeException('Base de origen no encontrada');
  if(file_exists($dst))throw new RuntimeException('Ya existe una base llamada '.$new);
  if(!rename($src,$dst))throw new RuntimeException('No se pudo renombrar la carpeta de la base. Revisa permisos de Apache.');
 }

 function saveState(){global $state,$meta;$tmp=$meta.'.tmp';if(file_put_contents($tmp,json_encode($state,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE|JSON_THROW_ON_ERROR))===false||!rename($tmp,$meta))throw new RuntimeException('No se pudo guardar el estado');}
 function &project($id){global $state;foreach($state['projects'] as &$p)if($p['id']===$id)return $p;throw new RuntimeException('Proyecto desconocido');}
 function useProject($id){project($id);if(!andreibbdd_usar_base(dbname($id)))throw new RuntimeException('No se pudo abrir la base');}
 function entity($p,$id){foreach($p['data']['entities'] as $e)if($e['id']===$id)return $e;throw new RuntimeException('Entidad desconocida');}
 function cols($e){$result=[];foreach($e['properties'] as $prop){$parts=explode(':',$prop['text'],2);if(count($parts)!==2)throw new RuntimeException('Propiedad sin tipo: '.$prop['text']);$name=required(trim($parts[0]));if(in_array(strtolower($name),['activo','__id'],true))throw new RuntimeException('Columna reservada: '.$name);$result[$name]=strtoupper(trim($parts[1]));}return $result;}
 function typeName($t){$t=preg_replace('/\(.*$/','',strtoupper($t));return match($t){'INTEGER','INT','ENTERO','BIGINT'=>'ENTERO','REAL','FLOAT','DOUBLE'=>'REAL','DECIMAL','NUMERIC','NUMERICO'=>'DECIMAL','BOOL','BOOLEAN','BOOLEANO'=>'BOOLEANO','DATE','FECHA'=>'FECHA',default=>'TEXTO'};}
 function collectionKey($label){
  $label=trim((string)$label);
  if($label==='')throw new RuntimeException('Colección sin nombre');
  // Vocales acentuadas incluidas: sin intl, el iconv de Windows translitera
  // "í" como "'i" (Log'istica) en vez de "i" como en Linux.
  $map=['ñ'=>'n','Ñ'=>'N','ß'=>'ss','æ'=>'ae','Æ'=>'AE','ø'=>'o','Ø'=>'O','ç'=>'c','Ç'=>'C',
   'á'=>'a','à'=>'a','ä'=>'a','â'=>'a','ã'=>'a','å'=>'a','Á'=>'A','À'=>'A','Ä'=>'A','Â'=>'A','Ã'=>'A','Å'=>'A',
   'é'=>'e','è'=>'e','ë'=>'e','ê'=>'e','É'=>'E','È'=>'E','Ë'=>'E','Ê'=>'E',
   'í'=>'i','ì'=>'i','ï'=>'i','î'=>'i','Í'=>'I','Ì'=>'I','Ï'=>'I','Î'=>'I',
   'ó'=>'o','ò'=>'o','ö'=>'o','ô'=>'o','õ'=>'o','Ó'=>'O','Ò'=>'O','Ö'=>'O','Ô'=>'O','Õ'=>'O',
   'ú'=>'u','ù'=>'u','ü'=>'u','û'=>'u','Ú'=>'U','Ù'=>'U','Ü'=>'U','Û'=>'U'];
  $ascii=strtr($label,$map);
  if(function_exists('transliterator_transliterate'))$ascii=transliterator_transliterate('Any-Latin; Latin-ASCII',$ascii);
  elseif(function_exists('iconv')){$converted=@iconv('UTF-8','ASCII//TRANSLIT//IGNORE',$ascii);if($converted!==false)$ascii=$converted;}
  $ascii=strtolower(preg_replace('/[^a-zA-Z0-9_-]+/','_', $ascii));
  $ascii=trim($ascii,'_-');
  if($ascii==='')throw new RuntimeException('El nombre de colección debe contener alguna letra o número: '.$label);
  return $ascii;
 }
 function syncData($old,$new,$allowDelete=false){
  // El motor es la fuente de verdad. Una tabla descubierta no se debe recrear.
  $tables=andreibbdd_listar_tablas();
  $oldEntities=[];foreach(($old['entities']??[]) as $e)$oldEntities[$e['id']]=$e;
  $newNames=[];
  foreach($new['entities'] as $e){
   $name=required($e['title']);
   if(isset($oldEntities[$e['id']])&&$oldEntities[$e['id']]['title']!==$name)throw new RuntimeException('Renombrar tablas existentes requiere migración explícita.');
   if(isset($newNames[$name]))throw new RuntimeException('Tabla duplicada: '.$name);
   $newNames[$name]=true;
   $c=cols($e);
   if(!array_key_exists('id',$c))throw new RuntimeException('Cada entidad necesita id: integer');
   if(in_array($name,$tables,true)){
    $schema=andreibbdd_esquema($name);
    foreach($c as $col=>$type){
     if(in_array($col,['id','activo'],true))continue;
     if(!in_array($col,$schema,true)){
      if(!andreibbdd_alterar_anadir($name,$col))throw new RuntimeException('No se pudo añadir columna '.$name.'.'.$col);
     }
    }
    // La eliminación de columnas requiere migración explícita; nunca se hace aquí.
   }else{
    $typed=[];foreach($c as $col=>$type)if($col!=='id')$typed[$col]=typeName($type);
    if(!andreibbdd_crear_tabla_tipada($name,$typed))throw new RuntimeException('No se pudo crear tabla '.$name.'. Comprueba permisos de escritura en el directorio de la base.');
    $tables[]=$name;
   }
  }
  $removed=[];foreach($oldEntities as $e)if(!isset($newNames[$e['title']])&&in_array($e['title'],$tables,true))$removed[]=$e['title'];
  if($removed&&!$allowDelete)throw new RuntimeException('Eliminar tablas requiere confirmación explícita: '.implode(', ',$removed));
  // Eliminar las tablas solicitadas después de validar las entidades nuevas.
  foreach($removed as $name){if(!andreibbdd_eliminar_tabla($name))throw new RuntimeException('No se pudo eliminar tabla '.$name);}
  $desired=[];
  foreach($new['entities'] as $e)foreach(($e['categories']??[]) as $cat){
   $cat=collectionKey($cat);
   $desired[$cat][]=$e['title'];
  }
  $existing=andreibbdd_listar_colecciones();
  foreach($desired as $cat=>$wanted){
   if(!in_array($cat,$existing,true)){
    if(!andreibbdd_crear_coleccion($cat))throw new RuntimeException('No se pudo crear colección '.$cat);
   }
   $current=andreibbdd_tablas_de_coleccion($cat);
   foreach($wanted as $table)if(!in_array($table,$current,true)){
    // API PHP: (tabla, coleccion), no (coleccion, tabla).
    if(!andreibbdd_agregar_tabla_coleccion($table,$cat))throw new RuntimeException('No se pudo asociar '.$table.' a '.$cat);
   }
   foreach($current as $table)if(!in_array($table,$wanted,true)){
    if(!andreibbdd_quitar_tabla_coleccion($table,$cat))throw new RuntimeException('No se pudo desasociar '.$table.' de '.$cat);
   }
  }
  foreach($existing as $cat)if(!isset($desired[$cat])){
   foreach(andreibbdd_tablas_de_coleccion($cat) as $table){
    if(!andreibbdd_quitar_tabla_coleccion($table,$cat))throw new RuntimeException('No se pudo desasociar '.$table.' de '.$cat);
   }
  }
  foreach(($new['links']??[]) as $link){
   $from=null;$to=null;
   foreach($new['entities'] as $e){if($e['id']===$link['from'])$from=$e;if($e['id']===$link['to'])$to=$e;}
   if(!$from||!$to)continue;
   $a=null;$b=null;
   foreach($from['properties'] as $prop)if($prop['id']===$link['fromProp'])$a=trim(explode(':',$prop['text'],2)[0]);
   foreach($to['properties'] as $prop)if($prop['id']===$link['toProp'])$b=trim(explode(':',$prop['text'],2)[0]);
   if(strtolower((string)$a)!=='id'||!$b)continue;
   $exists=false;
   foreach(andreibbdd_claves_foraneas($to['title']) as $fk)if(($fk['columna']??null)===$b&&($fk['tabla_referenciada']??null)===$from['title'])$exists=true;
   if(!$exists&&!andreibbdd_anadir_clave_foranea($to['title'],$b,$from['title'],'id'))throw new RuntimeException('No se pudo crear FK '.$to['title'].'.'.$b);
  }
 }
 // Sincronizar el catálogo visual con TODAS las bases del motor.
 // El motor es la fuente de verdad; projects.json solo conserva posiciones y nombres.
 function discoverDatabases(){
  global $state;
  $names=andreibbdd_listar_bases();
  if(!is_array($names))throw new RuntimeException('El conector no devolvió el catálogo de bases');
  $seen=[];
  foreach($names as $name){
   if(!is_string($name)||$name==='')continue;
   $id='db:'.$name;
   $matched=null;
   foreach($state['projects'] as $i=>$p){if(dbname($p['id'])===$name){$matched=$i;break;}}
   if($matched===null){
    $state['projects'][]=['id'=>$id,'name'=>$name,'data'=>['entities'=>[],'links'=>[]],'view'=>['x'=>350,'y'=>110,'z'=>1]];
    $matched=count($state['projects'])-1;
   }
   $seen[$state['projects'][$matched]['id']]=true;
   $p=&$state['projects'][$matched];
   if(!andreibbdd_usar_base($name))throw new RuntimeException('No se pudo abrir '.$name);
   $tables=andreibbdd_listar_tablas();
   $old=[];
   foreach(($p['data']['entities']??[]) as $e)$old[$e['title']]=$e;
   $entities=[];$links=[];
   foreach($tables as $idx=>$table){
    $schema=andreibbdd_esquema($table);
    $types=andreibbdd_tipos($table);
    $prior=$old[$table]??null;
    $id=$prior['id']??('table:'.hash('sha256',$name."\0".$table));
    $propIds=[];
    foreach(($prior['properties']??[]) as $pr){$col=trim(explode(':',$pr['text'],2)[0]);$propIds[$col]=$pr['id'];}
    $properties=[];
    foreach($schema as $col){
     if($col==='activo')continue;
     $typ=strtolower((string)($types[$col]??'texto'));
     $properties[]=['id'=>$propIds[$col]??('col:'.hash('sha256',$name."\0".$table."\0".$col)),'text'=>$col.': '.$typ];
    }
    $entities[]=['id'=>$id,'title'=>$table,'properties'=>$properties,
     'categories'=>array_map(fn($cat)=>$p['collectionLabels'][$cat]??$cat,andreibbdd_colecciones_de_tabla($table)),
     'x'=>$prior['x']??(100+($idx%4)*330),'y'=>$prior['y']??(100+intdiv($idx,4)*320)];
   }
   $byTitle=[];foreach($entities as $e)$byTitle[$e['title']]=$e;
   foreach($entities as $e){
    foreach(andreibbdd_claves_foraneas($e['title']) as $fk){
     $parent=$byTitle[$fk['tabla_referenciada']]??null;if(!$parent)continue;
     $from=null;$to=null;
     foreach($parent['properties'] as $prop)if(explode(':',$prop['text'],2)[0]===$fk['columna_referenciada'])$from=$prop['id'];
     foreach($e['properties'] as $prop)if(explode(':',$prop['text'],2)[0]===$fk['columna'])$to=$prop['id'];
     if($from&&$to)$links[]=['id'=>'fk:'.hash('sha256',$parent['id'].$from.$e['id'].$to),'from'=>$parent['id'],'fromProp'=>$from,'to'=>$e['id'],'toProp'=>$to];
    }
   }
   // Conservar enlaces visuales que aún sean válidos aunque no sean FK físicas.
   $valid=[];foreach($entities as $e)foreach($e['properties'] as $pr)$valid[$e['id']][$pr['id']]=true;
   foreach(($p['data']['links']??[]) as $l){
    if(isset($valid[$l['from']][$l['fromProp']],$valid[$l['to']][$l['toProp']])){
     $key=$l['from'].$l['fromProp'].$l['to'].$l['toProp'];$exists=false;
     foreach($links as $v)if($v['from'].$v['fromProp'].$v['to'].$v['toProp']===$key){$exists=true;break;}
     if(!$exists)$links[]=$l;
    }
   }
   $p['data']=['entities'=>$entities,'links'=>$links];
   unset($p);
  }
  $state['projects']=array_values(array_filter($state['projects'],fn($p)=>isset($seen[$p['id']])));
  if(!in_array($state['activeId'],array_column($state['projects'],'id'),true))$state['activeId']=$state['projects'][0]['id']??null;
  saveState();
 }
 if($action==='state'){discoverDatabases();}
 if(!$state['projects']&&$action==='state'){$id='db:mi_primer_proyecto';if(!andreibbdd_crear_base(dbname($id)))throw new RuntimeException('No se pudo crear la base inicial');$state['projects'][]=['id'=>$id,'name'=>'Mi primer proyecto','data'=>['entities'=>[],'links'=>[]],'view'=>['x'=>350,'y'=>110,'z'=>1]];$state['activeId']=$id;saveState();}
 $result=null;
 switch($action){
 case 'state':$result=$state;break;
 case 'create_project':$name=required($input['name']);$id='db:'.databaseKey($name);if(in_array(dbname($id),andreibbdd_listar_bases(),true))throw new RuntimeException('Ya existe una base con ese nombre');if(!andreibbdd_crear_base(dbname($id)))throw new RuntimeException('No se pudo crear base');$state['projects'][]=['id'=>$id,'name'=>$name,'data'=>['entities'=>[],'links'=>[]],'view'=>['x'=>350,'y'=>110,'z'=>1]];$state['activeId']=$id;saveState();$result=$id;break;
 case 'activate':project($input['project']);$state['activeId']=$input['project'];saveState();$result=true;break;
 case 'rename_project':
  $oldId=$input['project'];$p=&project($oldId);$newName=required($input['name']);
  $oldDb=dbname($oldId);$newDb=databaseKey($newName);$newId='db:'.$newDb;
  if($newDb!==$oldDb){
   foreach($state['projects'] as $other)if($other['id']!==$oldId&&dbname($other['id'])===$newDb)throw new RuntimeException('Ya existe un proyecto con ese nombre');
   renameDatabase($oldDb,$newDb);
   $p['id']=$newId;
   if($state['activeId']===$oldId)$state['activeId']=$newId;
  }
  $p['name']=$newName;saveState();$result=true;break;
 case 'delete_project':if(str_starts_with((string)$input['project'],'db:') && !str_starts_with(dbname($input['project']),'visual_'))throw new RuntimeException('No se permite borrar bases externas desde el gestor visual.');if(count($state['projects'])<=1)throw new RuntimeException('Debe quedar un proyecto');$id=$input['project'];project($id);if(!andreibbdd_eliminar_base(dbname($id)))throw new RuntimeException('No se pudo eliminar la base');$state['projects']=array_values(array_filter($state['projects'],fn($p)=>$p['id']!==$id));$state['activeId']=$state['projects'][0]['id'];saveState();$result=true;break;
 case 'nested_capabilities':
  $result=['available'=>function_exists('andreibbdd_crear_subcoleccion')&&function_exists('andreibbdd_mover_coleccion')&&function_exists('andreibbdd_arbol_colecciones')];break;
 case 'nested_tree':
  $p=project($input['project']);useProject($p['id']);
  if(!function_exists('andreibbdd_arbol_colecciones'))throw new RuntimeException('La extensión PHP no expone andreibbdd_arbol_colecciones');
  $result=andreibbdd_arbol_colecciones();break;
 case 'nested_create':
  $p=project($input['project']);useProject($p['id']);
  if(!function_exists('andreibbdd_crear_subcoleccion'))throw new RuntimeException('La extensión PHP no expone andreibbdd_crear_subcoleccion');
  $parent=collectionKey($input['parent']);$name=collectionKey($input['name']);
  $result=andreibbdd_crear_subcoleccion($parent,$name);
  if(!$result)throw new RuntimeException('No se pudo crear la subcolección');break;
 case 'nested_move':
  $p=project($input['project']);useProject($p['id']);
  if(!function_exists('andreibbdd_mover_coleccion'))throw new RuntimeException('La extensión PHP no expone andreibbdd_mover_coleccion');
  $name=collectionKey($input['name']);$parent=collectionKey($input['parent']);
  $result=andreibbdd_mover_coleccion($name,$parent);
  if(!$result)throw new RuntimeException('No se pudo mover la colección');break;
  case 'export_backup':
   $p=project($input['project']);useProject($p['id']);
   $tables=[];foreach($p['data']['entities'] as $e)$tables[$e['title']]=andreibbdd_listar($e['title']);
   $tree=function_exists('andreibbdd_arbol_colecciones')?andreibbdd_arbol_colecciones():null;
   $result=['format'=>'andrei-bbdd-backup','version'=>2,'data'=>$p['data'],'view'=>$p['view'],'tables'=>$tables,'nestedTree'=>$tree];break;
  case 'import_backup':
   $p=&project($input['project']);useProject($p['id']);
   $backup=$input['backup']??null;$mode=$input['mode']??'';
   if(!is_array($backup)||!in_array($mode,['replace','merge','structure'],true))throw new RuntimeException('Formato o modo inválido');
   $diagram=($backup['format']??'')==='andrei-bbdd-backup'?($backup['data']??null):$backup;
   if(!is_array($diagram)||!isset($diagram['entities'],$diagram['links'])||!is_array($diagram['entities'])||!is_array($diagram['links']))throw new RuntimeException('Diagrama inválido');
   if($mode!=='structure'&&!isset($backup['tables']))throw new RuntimeException('El archivo no contiene registros; usa Solo estructura');
   $incoming=$backup['tables']??[];
   if(!is_array($incoming))throw new RuntimeException('Tablas inválidas');
   foreach($diagram['entities'] as $e){$name=required($e['title']);if($mode!=='structure'&&!isset($incoming[$name]))throw new RuntimeException('Faltan registros de tabla '.$name);if(isset($incoming[$name])&&!is_array($incoming[$name]))throw new RuntimeException('Registros inválidos: '.$name);}
   // Check all dependencies before changing anything; cycles require a separate migration.
   $names=array_column($diagram['entities'],'title');$deps=[];foreach($names as $n)$deps[$n]=[];
   $byId=[];foreach($diagram['entities'] as $e)$byId[$e['id']]=$e;
   foreach($diagram['links'] as $l){$a=$byId[$l['from']]??null;$b=$byId[$l['to']]??null;if(!$a||!$b)continue;$ap=null;foreach($a['properties'] as $pr)if($pr['id']===$l['fromProp'])$ap=trim(explode(':',$pr['text'])[0]);if(strtolower((string)$ap)==='id'&&$a['title']!==$b['title'])$deps[$b['title']][$a['title']]=true;}
   $order=[];while(count($order)<count($names)){$progress=false;foreach($names as $n){if(in_array($n,$order,true))continue;if(!array_diff(array_keys($deps[$n]),$order)){$order[]=$n;$progress=true;}}if(!$progress)throw new RuntimeException('Dependencias cíclicas no soportadas; importación cancelada');}
   // Do not remove tables from this operation; preserve unrelated tables.
   syncData($p['data'],$diagram,false);
   $stats=['inserted'=>0,'updated'=>0,'deleted'=>0];
   if($mode!=='structure'){
    $maps=[];
    if($mode==='replace'){
     foreach(array_reverse($order) as $table){foreach(andreibbdd_listar($table) as $r){if(!andreibbdd_eliminar($table,(int)$r['id']))throw new RuntimeException('No se pudo eliminar '.$table.' #'.$r['id']);$stats['deleted']++;}}
    }
    foreach($order as $table){
     $schema=andreibbdd_esquema($table);$columns=array_slice($schema,2);
     $fk=andreibbdd_claves_foraneas($table);
     foreach($incoming[$table] as $r){if(!is_array($r)||!isset($r['id'])||!ctype_digit((string)$r['id']))throw new RuntimeException('ID inválido en '.$table);
      $old=(string)$r['id'];$values=[];
      foreach($columns as $col){$v=$r[$col]??'';foreach($fk as $f)if(($f['columna']??'')===$col&&isset($maps[$f['tabla_referenciada']][(string)$v]))$v=$maps[$f['tabla_referenciada']][(string)$v];$values[]=is_scalar($v)?(string)$v:'';}
      $existing=$mode==='merge'?andreibbdd_seleccionar($table,(int)$old):null;
      if($existing){if(!andreibbdd_actualizar($table,(int)$old,$values))throw new RuntimeException('Error actualizando '.$table.' #'.$old);$maps[$table][$old]=$old;$stats['updated']++;}
      else{$id=andreibbdd_insertar($table,$values);if($id<0)throw new RuntimeException('Error insertando '.$table.' #'.$old);$maps[$table][$old]=(string)$id;$stats['inserted']++;}
     }
    }
   }
   foreach($diagram['entities'] as $ent)foreach(($ent['categories']??[]) as $label)$p['collectionLabels'][collectionKey($label)]=$label;
   foreach($diagram['entities'] as &$ent)unset($ent['rows']);unset($ent);
   $p['data']=$diagram;$p['view']=$backup['view']??$p['view'];saveState();$result=$stats;break;
 case 'save':$p=&project($input['project']);useProject($p['id']);$new=$input['data'];if(!isset($new['entities'],$new['links'])||!is_array($new['entities'])||!is_array($new['links']))throw new RuntimeException('Diagrama inválido');syncData($p['data'],$new,($input['confirm_delete']??false)===true);foreach($new['entities'] as $ent)foreach(($ent['categories']??[]) as $label){$key=collectionKey($label);$p['collectionLabels'][$key]=$label;}foreach($new['entities'] as &$e)unset($e['rows']);unset($e);$p['data']=$new;$p['view']=$input['view']??$p['view'];saveState();$result=true;break;
 case 'rows':case 'add_row':case 'cell':case 'delete_row':$p=project($input['project']);useProject($p['id']);$e=entity($p,$input['entity']);$schema=andreibbdd_esquema($e['title']);$props=[];foreach($e['properties'] as $prop){$name=trim(explode(':',$prop['text'])[0]);$props[$prop['id']]=$name;}
  if($action==='rows'){$result=[];foreach(andreibbdd_listar($e['title']) as $r){$item=['__id'=>(int)$r['id']];foreach($props as $id=>$name)$item[$id]=$r[$name]??'';$result[]=$item;}break;}
  if($action==='add_row'){$vals=[];foreach(array_slice($schema,2) as $col)$vals[]='';$id=andreibbdd_insertar($e['title'],$vals);if($id<0)throw new RuntimeException('No se pudo insertar (comprueba campos obligatorios)');$result=$id;break;}
  $id=(int)$input['row'];if($action==='delete_row'){$result=andreibbdd_eliminar($e['title'],$id);if(!$result)throw new RuntimeException('No se pudo eliminar (posible clave foránea)');break;}
  $column=$props[$input['prop']]??null;if(!$column)throw new RuntimeException('Propiedad desconocida');if($column==='id')throw new RuntimeException('ID generado automáticamente');$r=andreibbdd_seleccionar($e['title'],$id);if(!$r)throw new RuntimeException('Registro no encontrado');$r[$column]=(string)$input['value'];$vals=[];foreach(array_slice($schema,2) as $col)$vals[]=$r[$col]??'';$result=andreibbdd_actualizar($e['title'],$id,$vals);if(!$result)throw new RuntimeException('Valor inválido o restricción incumplida');break;
 default:throw new RuntimeException('Acción desconocida');
 }
 echo json_encode(['ok'=>true,'result'=>$result],JSON_UNESCAPED_UNICODE|JSON_THROW_ON_ERROR);
} catch(Throwable $e){http_response_code(400);echo json_encode(['ok'=>false,'error'=>$e->getMessage()],JSON_UNESCAPED_UNICODE|JSON_INVALID_UTF8_SUBSTITUTE);}

```
**app.js**
```js
(()=>{'use strict';
const KEY='entity-universe-v2',OLD='entity-universe-v1';
const categoriesLayer=document.querySelector('#categoriesLayer'),viewport=document.querySelector('#viewport'),world=document.querySelector('#world'),nodes=document.querySelector('#nodes'),svg=document.querySelector('#wires'),dialog=document.querySelector('#editor');
const uid=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random()}`;
const empty=()=>({entities:[],links:[]});
const PROJECT_KEY='entity-universe-projects-v7';
let data=empty(),selected=null,editing=null,drag=null,view={x:Math.round(innerWidth/2-130),y:110,z:1};
let store={activeId:null,projects:[]};
// Filtros de presentación: no se envían al motor ni modifican las tablas.
let searchText='',inactiveOpacity=.18;
const categoryVisibility=new Map();
const categoryKey=v=>String(v).trim().toLocaleLowerCase();
const searchNormalize=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase();
function entityCategories(n){return normalizeCategories(n.categories).map(categoryKey);}
function entityEnabled(n){const cats=entityCategories(n);return !cats.length||cats.some(k=>categoryVisibility.get(k)!==false);}
function entityMatches(n){return !searchText||searchNormalize([n.title,...(n.properties||[]).map(p=>p.text),...normalizeCategories(n.categories)].join(' ')).includes(searchNormalize(searchText));}
let nestedHierarchy={},nestedSelected=null;
const nestedCollapsed=new Set();
function collectionCounts(){const counts=new Map();for(const n of data.entities)for(const c of normalizeCategories(n.categories)){const k=categoryKey(c);if(!counts.has(k))counts.set(k,{name:c,count:0});counts.get(k).count++;}return counts;}
function hierarchyNodes(){const entries=Object.entries(nestedHierarchy||{});const names=new Set(entries.map(([name])=>name));const children=new Map();for(const [name,meta] of entries){const parent=meta&&typeof meta==='object'?meta.parent:null;const key=parent&&names.has(parent)&&parent!==name?parent:null;if(!children.has(key))children.set(key,[]);children.get(key).push(name);}for(const arr of children.values())arr.sort((a,b)=>a.localeCompare(b,'es'));return children;}
function refreshCategorySwitches(){
 const counts=collectionCounts();for(const key of [...categoryVisibility.keys()])if(!counts.has(key))categoryVisibility.delete(key);
 const host=document.querySelector('#categorySwitches');host.replaceChildren();
 const hierarchy=hierarchyNodes(),visited=new Set();
 const render=(name,depth)=>{
  if(visited.has(name))return;visited.add(name);
  const key=categoryKey(name),info=counts.get(key),kids=hierarchy.get(name)||[];
  const row=document.createElement('div');row.className='collection-tree-row'+(nestedSelected===name?' selected':'');row.style.setProperty('--depth',depth);
  const toggle=document.createElement('button');toggle.type='button';toggle.className='collection-expander';toggle.textContent=kids.length?(nestedCollapsed.has(name)?'▸':'▾'):'·';toggle.disabled=!kids.length;toggle.title=kids.length?'Expandir o contraer':'';
  toggle.onclick=()=>{nestedCollapsed.has(name)?nestedCollapsed.delete(name):nestedCollapsed.add(name);refreshCategorySwitches();};
  const input=document.createElement('input');input.type='checkbox';input.checked=categoryVisibility.get(key)!==false;input.title='Mostrar u ocultar entidades de '+name;
  input.onchange=()=>{categoryVisibility.set(key,input.checked);applyVisualFilters();refreshCategorySwitches();};
  const label=document.createElement('button');label.type='button';label.className='collection-tree-name';label.textContent=name;label.title='Seleccionar colección '+name;
  label.onclick=()=>{nestedSelected=name;refreshCategorySwitches();};
  const count=document.createElement('span');count.className='category-count';count.textContent=String(info?.count??0);count.title='Entidades directamente asignadas';
  row.append(toggle,input,label,count);host.append(row);
  if(!nestedCollapsed.has(name))for(const child of kids)render(child,depth+1);
 };
 for(const name of hierarchy.get(null)||[])render(name,0);
 for(const name of [...counts.values()].map(v=>v.name).sort((a,b)=>a.localeCompare(b,'es')))if(!visited.has(name))render(name,0);
 for(const name of Object.keys(nestedHierarchy))if(!visited.has(name))render(name,0);
 if(!host.children.length){const msg=document.createElement('small');msg.textContent='Sin colecciones';host.append(msg);}
 const path=[];let cur=nestedSelected;const seen=new Set();while(cur&&!seen.has(cur)){seen.add(cur);path.unshift(cur);cur=nestedHierarchy[cur]?.parent||null;}
 document.querySelector('#collectionBreadcrumb').textContent=path.length?path.join(' / '):'Selecciona una colección';
 document.querySelector('#nestedCreate').disabled=!nestedSelected;
 document.querySelector('#nestedMove').disabled=!nestedSelected;
}
function applyVisualFilters(){
 for(const el of nodes.children){const n=find(el.dataset.id);if(!n)continue;const enabled=entityEnabled(n),match=entityMatches(n);const opacity=enabled&&(!searchText||match)?1:inactiveOpacity;
  el.style.opacity=String(opacity);el.classList.toggle('is-dimmed',opacity<1);el.classList.toggle('search-match',!!searchText&&match&&enabled);
  el.style.pointerEvents=opacity<=.01?'none':'';
 }
 for(const shape of categoriesLayer.children){const key=shape.dataset.category;shape.style.opacity=String(categoryVisibility.get(key)===false?inactiveOpacity:1);}
 for(const path of svg.children){if(path.dataset.from){const a=find(path.dataset.from),b=find(path.dataset.to);path.style.opacity=String(a&&b&&entityEnabled(a)&&entityEnabled(b)&&(!searchText||(entityMatches(a)&&entityMatches(b)))?1:inactiveOpacity);}}
}
document.querySelector('#entitySearch').addEventListener('input',e=>{searchText=e.target.value.trim();applyVisualFilters();});
document.querySelector('#inactiveOpacity').addEventListener('input',e=>{inactiveOpacity=Number(e.target.value)/100;document.querySelector('#opacityValue').textContent=e.target.value+'%';applyVisualFilters();});
for(const [id,visible] of [['allCategories',true],['noCategories',false]]){
 document.querySelector('#'+id).addEventListener('click',()=>{
  for(const n of data.entities)for(const c of normalizeCategories(n.categories))categoryVisibility.set(categoryKey(c),visible);
  refreshCategorySwitches();applyVisualFilters();
 });
}
 document.querySelector('#resetFilters').addEventListener('click',()=>{searchText='';document.querySelector('#entitySearch').value='';categoryVisibility.clear();refreshCategorySwitches();applyVisualFilters();});

const activeProject=()=>store.projects.find(p=>p.id===store.activeId);
function loadProject(){const p=activeProject();if(!p)return;data=p.data;view={...p.view};selected=null;drag=null;lastTap=null;transform();render();refreshProjectSelect();refreshNestedTree();}
let saveTimer=null, busy=false, pendingDeletion=false;
async function api(action,payload={}){const r=await fetch('api.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,...payload})});const j=await r.json();if(!r.ok||!j.ok)throw Error(j.error||'Error de servidor');return j.result;}
function persist(){const p=activeProject();if(!p)return;p.data=data;p.view={...view};clearTimeout(saveTimer);
 saveTimer=setTimeout(async()=>{
  const confirmDelete=pendingDeletion;pendingDeletion=false;
  try{await api('save',{project:p.id,data:p.data,view:p.view,confirm_delete:confirmDelete});}
  catch(e){alert('No se guardó: '+e.message);try{await refresh();}catch(err){console.error(err);}}
 },450);
}
async function refresh(){const result=await api('state');store=result;loadProject();}
// The native PHP function returns a JSON string with {name:{parent,tables}}.
async function refreshNestedTree(){
 if(!store.activeId)return;
 try{
  let tree=await api('nested_tree',{project:store.activeId});
  if(typeof tree==='string')tree=JSON.parse(tree);
  if(!tree||typeof tree!=='object'||Array.isArray(tree))throw Error('Formato de árbol inesperado');
  nestedHierarchy=tree;
  if(nestedSelected&&!Object.hasOwn(tree,nestedSelected))nestedSelected=null;
  refreshCategorySwitches();drawWires();
 }catch(e){document.querySelector('#collectionBreadcrumb').textContent='Jerarquía no disponible: '+e.message;}
}
document.querySelector('#nestedRefresh').onclick=refreshNestedTree;
document.querySelector('#sidebarCollapse').onclick=()=>{document.querySelector('#designerLayout').classList.toggle('sidebar-closed');document.querySelector('#sidebarCollapse').textContent=document.querySelector('#designerLayout').classList.contains('sidebar-closed')?'›':'‹';drawWires();};
document.querySelector('#nestedCreate').onclick=async()=>{
 const parent=nestedSelected;if(!parent)return alert('Selecciona primero la colección padre');
 const name=prompt('Nueva subcolección dentro de '+parent);if(!name?.trim())return;
 try{await api('nested_create',{project:store.activeId,parent,name:name.trim()});nestedCollapsed.delete(parent);nestedSelected=name.trim();await refresh();}catch(e){alert(e.message);}
};
document.querySelector('#nestedMove').onclick=async()=>{
 const name=nestedSelected;if(!name)return alert('Selecciona la colección que quieres mover');
 const parent=prompt('Nuevo padre para '+name+' (deja vacío para raíz)');if(parent===null)return;
 if(!parent.trim())return alert('Selecciona una colección padre existente');
 if(name===parent.trim())return alert('Una colección no puede ser su propio padre');
 try{await api('nested_move',{project:store.activeId,name,parent:parent.trim()});nestedCollapsed.delete(parent.trim());await refreshNestedTree();}catch(e){alert(e.message);}
};
async function loadRows(id){const n=find(id);const rows=await api('rows',{project:store.activeId,entity:id});n.rows=rows;renderRecords();}
async function updateCell(entity,row,prop,value){await api('cell',{project:store.activeId,entity,row,prop,value});}

function refreshProjectSelect(){const select=document.querySelector('#projectSelect');select.replaceChildren();for(const p of store.projects){const option=document.createElement('option');option.value=p.id;option.textContent=p.name;select.append(option);}select.value=store.activeId;document.querySelector('#deleteProject').disabled=store.projects.length===1;}
function normalizeProps(props){return (props||[]).map(p=>typeof p==='string'?{id:uid(),text:p}:p).filter(p=>p&&typeof p.id==='string'&&typeof p.text==='string');}
data.entities.forEach(n=>{n.properties=normalizeProps(n.properties);n.categories=normalizeCategories(n.categories);});
function normalizeCategories(value){return [...new Set((Array.isArray(value)?value.join(','):String(value||'')).split(',').map(x=>x.trim()).filter(Boolean))];}
const save=()=>persist();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const find=id=>data.entities.find(n=>n.id===id);
function transform(){world.style.transform=`translate(${view.x}px,${view.y}px) scale(${view.z})`;viewport.style.backgroundPosition=`${view.x}px ${view.y}px`;viewport.style.backgroundSize=`${28*view.z}px ${28*view.z}px`;}
function pos(e){const r=viewport.getBoundingClientRect();return{x:(e.clientX-r.left-view.x)/view.z,y:(e.clientY-r.top-view.y)/view.z};}
function endpoint(entityId,propId,side){const slot=Array.from(nodes.querySelectorAll('.slot')).find(s=>s.dataset.entity===entityId&&s.dataset.prop===propId&&s.dataset.side===side);if(!slot)return null;const sr=slot.getBoundingClientRect(),vr=viewport.getBoundingClientRect();return{x:(sr.left+sr.width/2-vr.left-view.x)/view.z,y:(sr.top+sr.height/2-vr.top-view.y)/view.z};}
function curve(a,b){const d=Math.max(55,Math.abs(b.x-a.x)*.48);return`M${a.x},${a.y} C${a.x+d},${a.y} ${b.x-d},${b.y} ${b.x},${b.y}`;}
function wire(a,b,color,dashed=false){const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',curve(a,b));p.setAttribute('fill','none');p.setAttribute('stroke',color);p.setAttribute('stroke-width','3');p.setAttribute('stroke-linecap','round');if(dashed)p.setAttribute('stroke-dasharray','7 6');svg.append(p);}
// Contornos orgánicos: envolvente convexa de muestras elípticas y suavizado Chaikin.
function convexHull(points){
 const cross=(o,a,b)=>(a.x-o.x)*(b.y-o.y)-(a.y-o.y)*(b.x-o.x);
 const sorted=points.sort((a,b)=>a.x-b.x||a.y-b.y),lower=[],upper=[];
 for(const p of sorted){while(lower.length>1&&cross(lower[lower.length-2],lower[lower.length-1],p)<=0)lower.pop();lower.push(p);}
 for(const p of [...sorted].reverse()){while(upper.length>1&&cross(upper[upper.length-2],upper[upper.length-1],p)<=0)upper.pop();upper.push(p);}
 lower.pop();upper.pop();return lower.concat(upper);
}
function soften(points,rounds=3){
 for(let k=0;k<rounds;k++){const next=[];for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length];next.push({x:a.x*.75+b.x*.25,y:a.y*.75+b.y*.25},{x:a.x*.25+b.x*.75,y:a.y*.25+b.y*.75});}points=next;}return points;
}
function drawCategories(){
 categoriesLayer.replaceChildren();
 const groups=new Map();
 for(const n of data.entities)for(const name of normalizeCategories(n.categories)){
  const key=categoryKey(name);if(!groups.has(key))groups.set(key,{name,entities:[]});groups.get(key).entities.push(n);
 }
 const hierarchy=nestedHierarchy||{};
 const nodeById=new Map(Array.from(nodes.children).map(el=>[el.dataset.id,el]));
 const children=new Map();
 for(const [name,meta] of Object.entries(hierarchy)){
  const parent=meta?.parent&&hierarchy[meta.parent]?meta.parent:null;
  if(!children.has(parent))children.set(parent,[]);children.get(parent).push(name);
 }
 const depthMemo=new Map();
 function depth(name,seen=new Set()){
  if(depthMemo.has(name))return depthMemo.get(name);
  if(seen.has(name))return 0;seen.add(name);
  const parent=hierarchy[name]?.parent;
  const d=parent&&hierarchy[parent]?Math.min(30,1+depth(parent,seen)):0;
  depthMemo.set(name,d);return d;
 }
 const descendantMemo=new Map();
 function members(name,seen=new Set()){
  if(descendantMemo.has(name))return descendantMemo.get(name);
  if(seen.has(name))return [];
  seen.add(name);
  const own=groups.get(categoryKey(name))?.entities||[];
  const all=new Map(own.map(n=>[n.id,n]));
  for(const child of children.get(name)||[])for(const n of members(child,new Set(seen)))all.set(n.id,n);
  const result=[...all.values()];descendantMemo.set(name,result);return result;
 }
 const names=[...new Set([...Object.keys(hierarchy),...[...groups.values()].map(g=>g.name)])];
 names.sort((a,b)=>depth(a)-depth(b)||a.localeCompare(b,'es'));
 const shapes=[];
 for(let index=0;index<names.length;index++){
  const name=names[index],dlevel=depth(name),entities=members(name);
  if(!entities.length)continue;
  const boxes=entities.map(n=>{const el=nodeById.get(n.id);return{x:n.x,y:n.y,w:el?.offsetWidth||260,h:el?.offsetHeight||110};});
  const pad=35+Math.max(0,5-dlevel)*22,samples=[];
  for(const b of boxes){const cx=b.x+b.w/2,cy=b.y+b.h/2,rx=b.w/2+pad,ry=b.h/2+pad;
   for(let i=0;i<32;i++){const theta=2*Math.PI*i/32;samples.push({x:cx+rx*Math.cos(theta),y:cy+ry*Math.sin(theta)});}
  }
  // A parent includes all descendants; the extra nesting offset keeps its boundary outside the children.
  const contour=soften(convexHull(samples));if(contour.length<3)continue;
  const d='M'+contour.map(pt=>`${pt.x.toFixed(2)},${pt.y.toFixed(2)}`).join(' L')+' Z';
  const hue=(index*71+210)%360,color=`hsl(${hue} 75% 65%)`;
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');
  for(const [k,v] of Object.entries({d,fill:color,'fill-opacity':String(Math.max(.025,.065-dlevel*.007)),stroke:color,'stroke-width':String(Math.max(1.5,2.8-dlevel*.18)),'stroke-dasharray':dlevel?'6 5':'10 7','stroke-opacity':'.85','stroke-linejoin':'round'}))path.setAttribute(k,v);
  path.dataset.category=categoryKey(name);
  const top=contour.reduce((a,b)=>b.y<a.y?b:a);
  const label=document.createElementNS('http://www.w3.org/2000/svg','text');
  for(const [k,v] of Object.entries({x:top.x,y:top.y-10,fill:color,'font-size':'15','font-weight':'700','text-anchor':'middle'}))label.setAttribute(k,v);
  label.textContent=name;label.dataset.category=categoryKey(name);
  label.classList.add('group-drag-handle');label.style.pointerEvents='auto';label.style.cursor='move';
  shapes.push({path,label,depth:dlevel});
 }
 // Draw parents first, then children above them. No entity coordinates are changed.
 shapes.sort((a,b)=>a.depth-b.depth);
 for(const shape of shapes)categoriesLayer.append(shape.path,shape.label);
}

function drawWires(){drawCategories();svg.replaceChildren();for(const l of data.links){const a=endpoint(l.from,l.fromProp,'out'),b=endpoint(l.to,l.toProp,'in');if(a&&b){wire(a,b,'#91a1ff');const path=svg.lastElementChild;path.dataset.from=l.from;path.dataset.to=l.to;}}if(drag?.type==='link'){const a=endpoint(drag.from,drag.fromProp,drag.side);if(a)wire(drag.side==='out'?a:drag.to,drag.side==='out'?drag.to:a,'#69e7b8',true);}applyVisualFilters();}
function render(){nodes.replaceChildren();refreshCategorySwitches();for(const n of data.entities){const el=document.createElement('div');el.className='node'+(selected===n.id?' selected':'');el.dataset.id=n.id;el.style.left=n.x+'px';el.style.top=n.y+'px';el.innerHTML=`<div class="node-head"><span>${esc(n.title)}</span><button type="button" class="records-btn" data-records="${esc(n.id)}" title="Ver y editar datos de ${esc(n.title)}" aria-label="Abrir registros de ${esc(n.title)}">▦ <span>${(n.rows||[]).length}</span></button></div><div class="node-props">${n.properties.map(p=>{const i=p.text.indexOf(':');return`<div class="prop" data-prop="${esc(p.id)}"><span class="slot in" data-entity="${esc(n.id)}" data-prop="${esc(p.id)}" data-side="in" title="Entrada: ${esc(p.text)}"></span><span class="prop-name">${esc(i<0?p.text:p.text.slice(0,i))}</span><span class="prop-type">${esc(i<0?'':p.text.slice(i+1).trim())}</span><span class="slot out" data-entity="${esc(n.id)}" data-prop="${esc(p.id)}" data-side="out" title="Salida: ${esc(p.text)}"></span></div>`}).join('')||'<div class="no-props">Añade propiedades para conectar entidades</div>'}</div>`;nodes.append(el);}drawWires();document.querySelector('.hint').textContent=data.entities.length?'Arrastra entre conectores de propiedades para relacionarlas · Arrastra el título para mover · Doble clic para editar · Rueda para ampliar':'El espacio está vacío. Pulsa + Entidad para crear la primera.';}
function renderEntityMemberships(existing=[]){
 const host=document.querySelector('#entityMemberships');host.replaceChildren();
 const counts=collectionCounts(),children=hierarchyNodes(),seen=new Set();
 const selected=new Set(normalizeCategories(existing).map(categoryKey));
 const draw=(name,depth)=>{
  if(seen.has(name))return;seen.add(name);
  const row=document.createElement('label');row.className='entity-membership-row';row.style.setProperty('--depth',depth);
  const check=document.createElement('input');check.type='checkbox';check.value=name;check.checked=selected.has(categoryKey(name));
  const text=document.createElement('span');text.textContent=name;
  const count=document.createElement('small');count.textContent=String(counts.get(categoryKey(name))?.count??0);
  row.append(check,text,count);host.append(row);
  for(const child of children.get(name)||[])draw(child,depth+1);
 };
 for(const root of children.get(null)||[])draw(root,0);
 for(const info of counts.values())if(!seen.has(info.name))draw(info.name,0);
 for(const name of Object.keys(nestedHierarchy))if(!seen.has(name))draw(name,0);
 if(!host.children.length){const msg=document.createElement('small');msg.textContent='No hay colecciones disponibles';host.append(msg);}
}
function selectedEntityMemberships(){return [...document.querySelectorAll('#entityMemberships input:checked')].map(el=>el.value);}
document.querySelector('#membershipAll').onclick=()=>document.querySelectorAll('#entityMemberships input').forEach(el=>el.checked=true);
document.querySelector('#membershipNone').onclick=()=>document.querySelectorAll('#entityMemberships input').forEach(el=>el.checked=false);
const PROPERTY_TYPES=['texto','entero','real','decimal','booleano','fecha'];
function appendPropertyRow(property={id:uid(),text:'',name:'',type:'texto'}){
 const host=document.querySelector('#propertyRows');const tr=document.createElement('tr');tr.dataset.id=property.id||uid();
 const i=String(property.text||'').indexOf(':');const name=property.name??(i<0?String(property.text||''):property.text.slice(0,i).trim());const type=property.type??(i<0?'texto':property.text.slice(i+1).trim());
 const tdName=document.createElement('td'),input=document.createElement('input');input.className='property-name';input.placeholder='nombre';input.value=name;input.required=true;tdName.append(input);
 const tdType=document.createElement('td'),select=document.createElement('select');select.className='property-type';const known=PROPERTY_TYPES.some(t=>t.toLowerCase()===String(type).toLowerCase());
 for(const t of (known?PROPERTY_TYPES:[...PROPERTY_TYPES,type])){const opt=document.createElement('option');opt.value=t;opt.textContent=t.toUpperCase();select.append(opt);}select.value=known?(PROPERTY_TYPES.find(t=>t.toLowerCase()===String(type).toLowerCase())):type;tdType.append(select);
 const tdActions=document.createElement('td');tdActions.className='property-actions';for(const [label,action,title] of [['↑','up','Subir'],['↓','down','Bajar'],['×','remove','Eliminar propiedad']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.title=title;b.dataset.action=action;tdActions.append(b);}tr.append(tdName,tdType,tdActions);host.append(tr);
}
document.querySelector('#addProperty').onclick=()=>appendPropertyRow();
document.querySelector('#propertyRows').onclick=e=>{const btn=e.target.closest('button[data-action]');if(!btn)return;const row=btn.closest('tr'),host=row.parentNode;if(btn.dataset.action==='remove')row.remove();else if(btn.dataset.action==='up'&&row.previousElementSibling)host.insertBefore(row,row.previousElementSibling);else if(btn.dataset.action==='down'&&row.nextElementSibling)host.insertBefore(row.nextElementSibling,row);};
function collectProperties(){const rows=[...document.querySelectorAll('#propertyRows tr')];const names=new Set();return rows.map(row=>{const name=row.querySelector('.property-name').value.trim(),type=row.querySelector('.property-type').value;if(!/^[a-zA-Z_\u00c0-\u024f][\w\u00c0-\u024f]*$/.test(name))throw Error('Nombre de propiedad no válido: '+name);if(names.has(name.toLowerCase()))throw Error('Propiedad duplicada: '+name);names.add(name.toLowerCase());return{id:row.dataset.id,text:name+': '+type};});}
function edit(id){editing=id;const n=find(id);document.querySelector('#formTitle').textContent=n?'Editar entidad':'Nueva entidad';document.querySelector('#title').value=n?.title||'';renderEntityMemberships(n?.categories||[]);document.querySelector('#propertyRows').replaceChildren();(n?.properties||[]).forEach(appendPropertyRow);document.querySelector('#deleteEntity').hidden=!n;dialog.showModal();document.querySelector('#title').focus();}
document.querySelector('#add').onclick=()=>edit(null);document.querySelector('#cancel').onclick=()=>dialog.close();
document.querySelector('#entityForm').onsubmit=e=>{e.preventDefault();const title=document.querySelector('#title').value.trim();if(!title)return;let properties;try{properties=collectProperties();}catch(err){alert(err.message);return;}if(editing){const n=find(editing);const old=n.properties;const used=new Set();n.title=title;n.categories=selectedEntityMemberships();n.properties=properties;const valid=new Set(n.properties.map(p=>p.id));data.links=data.links.filter(l=>(l.from!==n.id||valid.has(l.fromProp))&&(l.to!==n.id||valid.has(l.toProp)));}else{const r=viewport.getBoundingClientRect(),p=pos({clientX:r.left+r.width/2,clientY:r.top+r.height/2});const n={id:uid(),title,categories:selectedEntityMemberships(),properties,x:p.x-130,y:p.y-65};data.entities.push(n);selected=n.id;}save();render();dialog.close();};
document.querySelector('#deleteEntity').onclick=()=>{if(!editing)return;if(!confirm('¿Eliminar definitivamente esta tabla y TODOS sus registros de Andrei BBDD?'))return;pendingDeletion=true;data.entities=data.entities.filter(n=>n.id!==editing);data.links=data.links.filter(l=>l.from!==editing&&l.to!==editing);selected=null;save();render();dialog.close();};

nodes.addEventListener('click',e=>{const b=e.target.closest('.records-btn');if(b){e.stopPropagation();openRecords(b.dataset.records);}});
viewport.addEventListener('pointerdown',e=>{if(e.target.closest('.records-btn'))return;if(e.button!==0&&e.button!==1)return;const groupLabel=e.target.closest('.group-drag-handle');
 if(groupLabel&&e.button===0){
  const key=groupLabel.dataset.category;
  const members=data.entities.filter(n=>entityCategories(n).includes(key));
  drag={type:'group',start:pos(e),members:members.map(n=>({id:n.id,x:n.x,y:n.y}))};
  e.preventDefault();
 }else{
 const slot=e.target.closest('.slot'),node=e.target.closest('.node');if(slot&&e.button===0){drag={type:'link',from:slot.dataset.entity,fromProp:slot.dataset.prop,side:slot.dataset.side,to:pos(e)};e.preventDefault();}else if(node&&e.button===0){selected=node.dataset.id;const n=find(selected);drag={type:'node',id:n.id,start:pos(e),x:n.x,y:n.y,clientX:e.clientX,clientY:e.clientY};nodes.querySelectorAll('.node').forEach(el=>el.classList.toggle('selected',el.dataset.id===selected));}else{drag={type:'pan',x:e.clientX,y:e.clientY,vx:view.x,vy:view.y};viewport.classList.add('panning');}}viewport.setPointerCapture(e.pointerId);});
viewport.addEventListener('pointermove',e=>{if(!drag)return;if(drag.type==='pan'){view.x=drag.vx+e.clientX-drag.x;view.y=drag.vy+e.clientY-drag.y;transform();}else if(drag.type==='group'){
  const p=pos(e),dx=p.x-drag.start.x,dy=p.y-drag.start.y;
  for(const member of drag.members){const n=find(member.id);if(!n)continue;n.x=member.x+dx;n.y=member.y+dy;
   const el=Array.from(nodes.children).find(el=>el.dataset.id===n.id);
   if(el){el.style.left=n.x+'px';el.style.top=n.y+'px';}
  }
  drawWires();
 }else if(drag.type==='node'){const n=find(drag.id),p=pos(e);n.x=drag.x+p.x-drag.start.x;n.y=drag.y+p.y-drag.start.y;const el=Array.from(nodes.children).find(el=>el.dataset.id===n.id);if(el){el.style.left=n.x+'px';el.style.top=n.y+'px';}drawWires();}else{drag.to=pos(e);drawWires();}});
let lastTap=null;
function end(e){
 if(!drag)return;
 const action=drag;
 if(viewport.hasPointerCapture(e.pointerId))viewport.releasePointerCapture(e.pointerId);
 if(action.type==='link'&&e.type==='pointerup'){
   const target=document.elementsFromPoint(e.clientX,e.clientY).map(el=>el.closest?.('.slot')).find(Boolean);
   if(target&&target.dataset.entity!==action.from&&target.dataset.side!==action.side){
     const from=action.side==='out'?{id:action.from,prop:action.fromProp}:{id:target.dataset.entity,prop:target.dataset.prop};
     const to=action.side==='out'?{id:target.dataset.entity,prop:target.dataset.prop}:{id:action.from,prop:action.fromProp};
     if(!data.links.some(l=>l.from===from.id&&l.fromProp===from.prop&&l.to===to.id&&l.toProp===to.prop))data.links.push({id:uid(),from:from.id,fromProp:from.prop,to:to.id,toProp:to.prop});
   }
 }
 if(action.type==='node'&&e.type==='pointerup'){
   const distance=Math.hypot(e.clientX-action.clientX,e.clientY-action.clientY);
   if(distance<6){
     const now=Date.now();
     if(lastTap&&lastTap.id===action.id&&now-lastTap.time<450){lastTap=null;drag=null;edit(action.id);return;}
     lastTap={id:action.id,time:now};
   }else lastTap=null;
 }
 drag=null;viewport.classList.remove('panning');
 if(action.type==='node'||action.type==='link'||action.type==='group')save();
 // Do not recreate nodes on pointerup: that prevents native double-click.
 drawWires();
}
viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);
viewport.addEventListener('wheel',e=>{e.preventDefault();const r=viewport.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,old=view.z;view.z=Math.max(.3,Math.min(2.5,view.z*Math.exp(-e.deltaY*.001)));view.x=x-(x-view.x)*view.z/old;view.y=y-(y-view.y)*view.z/old;transform();drawWires();},{passive:false});
document.querySelector('#fit').onclick=()=>{if(!data.entities.length){view={x:viewport.clientWidth/2-130,y:100,z:1};transform();save();return;}const minX=Math.min(...data.entities.map(n=>n.x)),maxX=Math.max(...data.entities.map(n=>n.x+260)),minY=Math.min(...data.entities.map(n=>n.y)),maxY=Math.max(...data.entities.map(n=>n.y+75+n.properties.length*36));view.z=Math.min(1.2,Math.max(.3,Math.min((viewport.clientWidth-90)/(maxX-minX),(viewport.clientHeight-90)/(maxY-minY))));view.x=(viewport.clientWidth-(minX+maxX)*view.z)/2;view.y=(viewport.clientHeight-(minY+maxY)*view.z)/2;transform();drawWires();save();};
document.querySelector('#export').onclick=async()=>{try{const backup=await api('export_backup',{project:store.activeId});downloadText(JSON.stringify(backup,null,2),(activeProject().name.replace(/[^a-z0-9_-]+/gi,'-')||'proyecto')+'-backup.json','application/json');}catch(err){alert('Error al exportar: '+err.message);}};
// Exportación SQL: respeta los tipos y longitudes escritos en cada propiedad.
function sqlIdentifier(name,engine){const q=engine==='mysql'?'`':'"';return q+String(name).replaceAll(q,q+q)+q;}
function sqlType(raw,engine){
 const t=String(raw||'').trim();if(!t)return engine==='mysql'?'TEXT':'TEXT';
 const match=t.match(/^([\p{L}_][\p{L}\p{N}_ ]*)(?:\s*\(\s*(\d+)\s*(?:,\s*(\d+)\s*)?\))?(.*)$/u);
 if(!match)throw Error('Tipo no válido: '+t);
 const base=match[1].trim().toUpperCase().replace(/\s+/g,' '),length=match[2],scale=match[3],suffix=match[4].trim();
 if(suffix&&!/^(NOT NULL|NULL|UNIQUE|DEFAULT\s+(?:NULL|CURRENT_TIMESTAMP|[-+]?\d+(?:\.\d+)?|'(?:[^']|'')*')|UNSIGNED)(?:\s+(?:NOT NULL|NULL|UNIQUE|DEFAULT\s+(?:NULL|CURRENT_TIMESTAMP|[-+]?\d+(?:\.\d+)?|'(?:[^']|'')*')|UNSIGNED))*$/i.test(suffix))throw Error('Modificador de tipo no admitido: '+suffix);
 const aliases={ENTERO:'INTEGER',ENTIER:'INTEGER',INT:'INTEGER',TEXTO:'TEXT',CADENA:'VARCHAR',STRING:'VARCHAR',BOOLEANO:'BOOLEAN',BOOL:'BOOLEAN',REAL:'REAL',DECIMAL:'DECIMAL',FECHA:'DATE',FECHAHORA:'DATETIME',NUMERO:'NUMERIC'};
 const b=aliases[base]||base;
 const allowed=new Set(['INTEGER','INT','BIGINT','SMALLINT','TINYINT','VARCHAR','CHAR','TEXT','LONGTEXT','MEDIUMTEXT','TINYTEXT','DECIMAL','NUMERIC','FLOAT','DOUBLE','REAL','BOOLEAN','DATE','DATETIME','TIMESTAMP','TIME','BLOB','JSON','BINARY','VARBINARY']);
 if(!allowed.has(b))throw Error('Tipo SQL no reconocido: '+base);
 if(length&&(!Number.isSafeInteger(Number(length))||Number(length)<1||Number(length)>65535))throw Error('Longitud fuera de rango: '+length);
 if(scale&&(Number(scale)>Number(length)))throw Error('Escala decimal mayor que precisión');
 let type=b;
 if(engine==='mysql'){
   if(b==='BOOLEAN')type='BOOLEAN';
   else if(b==='REAL')type='DOUBLE';
   else if(b==='VARCHAR'&&!length)type='VARCHAR(255)';
   else if(b==='TEXT'&&length)type='VARCHAR';
 }else{
   if(['INT','TINYINT','SMALLINT','BIGINT','BOOLEAN'].includes(b))type='INTEGER';
   else if(['VARCHAR','CHAR','TEXT','LONGTEXT','MEDIUMTEXT','TINYTEXT','JSON'].includes(b))type='TEXT';
   else if(['DECIMAL','NUMERIC','FLOAT','DOUBLE','REAL'].includes(b))type='REAL';
   else if(['DATE','DATETIME','TIMESTAMP','TIME'].includes(b))type='TEXT';
   else if(['BINARY','VARBINARY','BLOB'].includes(b))type='BLOB';
 }
 const dimensions=length?(scale?`(${length},${scale})`:`(${length})`):'';
 return (engine==='sqlite'?type:(type==='VARCHAR'&&b==='TEXT'&&length?type:type+dimensions))+(suffix?' '+(engine==='sqlite'?suffix.replace(/\bUNSIGNED\b/gi,'').trim():suffix):'');
}
function parseProperty(prop){const text=String(prop.text||'').trim();const i=text.indexOf(':');if(i<1)throw Error('La propiedad «'+text+'» debe tener formato nombre: tipo');const name=text.slice(0,i).trim(),type=text.slice(i+1).trim();if(!name||!type)throw Error('Propiedad incompleta: '+text);return {id:prop.id,name,type};}
function generateSQL(engine){
 const q=s=>sqlIdentifier(s,engine),lines=[`-- Universo de entidades · ${engine==='mysql'?'MySQL':'SQLite'}`,`-- Proyecto: ${activeProject().name.replace(/[\r\n]/g,' ')}`,''];
 if(engine==='sqlite')lines.push('PRAGMA foreign_keys = ON;','');
 const schemas=data.entities.map(n=>({entity:n,cols:n.properties.map(parseProperty)}));
 const tables=new Set();for(const s of schemas){if(tables.has(s.entity.title.toLowerCase()))throw Error('Nombre de entidad duplicado: '+s.entity.title);tables.add(s.entity.title.toLowerCase());}
 const foreign=[];
 for(const s of schemas){
  if(!s.cols.length)throw Error('La entidad «'+s.entity.title+'» no tiene propiedades');
  const names=new Set(),cols=[];
  for(const c of s.cols){if(names.has(c.name.toLowerCase()))throw Error('Propiedad duplicada en '+s.entity.title+': '+c.name);names.add(c.name.toLowerCase());cols.push('  '+q(c.name)+' '+sqlType(c.type,engine));}
  const pk=s.cols.find(c=>c.name.toLowerCase()==='id');if(pk)cols.push('  PRIMARY KEY ('+q(pk.name)+')');
  if(engine==='sqlite')for(const link of data.links){const a=schemas.find(x=>x.entity.id===link.from);if(!a||link.to!==s.entity.id)continue;const ac=a.cols.find(c=>c.id===link.fromProp),bc=s.cols.find(c=>c.id===link.toProp);if(ac?.name.toLowerCase()==='id'&&bc)cols.push('  FOREIGN KEY ('+q(bc.name)+') REFERENCES '+q(a.entity.title)+' ('+q(ac.name)+')');}
  lines.push('CREATE TABLE '+(engine==='mysql'?'IF NOT EXISTS ':'IF NOT EXISTS ')+q(s.entity.title)+' (',cols.join(',\n'),')'+(engine==='mysql'?' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;':';'),'');
 }
 // Enlaces entre propiedades se exportan como claves foráneas cuando el origen apunta a una columna id.
 for(const link of data.links){const a=schemas.find(s=>s.entity.id===link.from),b=schemas.find(s=>s.entity.id===link.to);if(!a||!b)continue;const ac=a.cols.find(c=>c.id===link.fromProp),bc=b.cols.find(c=>c.id===link.toProp);if(!ac||!bc||ac.name.toLowerCase()!=='id')continue;
  foreign.push({table:b.entity.title,col:bc.name,ref:a.entity.title,refCol:ac.name});
 }
 if(foreign.length){lines.push('-- Relaciones detectadas (id → propiedad vinculada)');for(const f of foreign){if(engine==='mysql')lines.push(`ALTER TABLE ${q(f.table)} ADD FOREIGN KEY (${q(f.col)}) REFERENCES ${q(f.ref)} (${q(f.refCol)});`);else lines.push(`-- ${q(f.table)}.${q(f.col)} → ${q(f.ref)}.${q(f.refCol)} (incluida en CREATE TABLE)`);}lines.push('');}
 return lines.join('\n');
}
function downloadText(content,filename,mime){const url=URL.createObjectURL(new Blob([content],{type:mime}));const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}
document.querySelector('#exportSql').onclick=()=>{if(!data.entities.length){alert('Crea alguna entidad antes de exportar SQL.');return;}const engine=prompt('Motor SQL: escribe mysql o sqlite','mysql')?.trim().toLowerCase();if(!engine)return;if(!['mysql','sqlite'].includes(engine)){alert('Selecciona mysql o sqlite.');return;}try{const sql=generateSQL(engine),name=activeProject().name.replace(/[^a-z0-9_-]+/gi,'-')||'proyecto';downloadText(sql,`${name}-${engine}.sql`,'application/sql;charset=utf-8');}catch(err){alert('No se pudo exportar SQL: '+err.message);}};
document.querySelector('#import').onchange=async e=>{
 const file=e.target.files?.[0];if(!file)return;
 try{
  const backup=JSON.parse(await file.text()),diagram=backup.format==='andrei-bbdd-backup'?backup.data:backup;
  if(!Array.isArray(diagram?.entities)||!Array.isArray(diagram?.links))throw Error('Formato inválido');
  const count=backup.tables?Object.values(backup.tables).reduce((n,rows)=>n+(Array.isArray(rows)?rows.length:0),0):0;
  const answer=prompt(`Importar ${diagram.entities.length} entidades y ${count} registros.\n\nEscribe una opción:\n1 = Reemplazar registros\n2 = Fusionar registros por ID\n3 = Solo estructura`,'3');
  if(answer===null)return;
  const mode=({'1':'replace','2':'merge','3':'structure'})[answer.trim()];if(!mode)throw Error('Selecciona 1, 2 o 3');
  if(mode!=='structure'&&!backup.tables)throw Error('El archivo no contiene registros; usa Solo estructura');
  if(mode==='replace'&&!confirm('Se eliminarán los registros actuales de las tablas importadas. ¿Continuar?'))return;
  // Download an independent safety copy before modifying the database.
  const safety=await api('export_backup',{project:store.activeId});
  downloadText(JSON.stringify(safety,null,2),'copia-seguridad-antes-importar-'+Date.now()+'.json','application/json');
  const stats=await api('import_backup',{project:store.activeId,backup,mode});
  clearTimeout(saveTimer);await refresh();alert(`Importación finalizada. Insertados: ${stats.inserted}, actualizados: ${stats.updated}, eliminados: ${stats.deleted}.`);
 }catch(err){alert('No se pudo importar: '+err.message+'\nSi hubo cambios parciales, utiliza la copia de seguridad descargada.');}
 finally{e.target.value='';}
};
document.querySelector('#clear').onclick=()=>{if(confirm('¿Eliminar DEFINITIVAMENTE todas las tablas y sus registros de esta base de datos?')){pendingDeletion=true;data=empty();selected=null;save();render();}};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drag?.type==='link'){drag=null;drawWires();}if((e.key==='Delete'||e.key==='Backspace')&&!document.querySelector('#dataDialog').open&&!dialog.open&&selected&&!['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)){if(!confirm('¿Eliminar definitivamente esta tabla y sus registros?'))return;pendingDeletion=true;data.entities=data.entities.filter(n=>n.id!==selected);data.links=data.links.filter(l=>l.from!==selected&&l.to!==selected);selected=null;save();render();}});
document.querySelector('#projectSelect').addEventListener('change',async e=>{clearTimeout(saveTimer);store.activeId=e.target.value;loadProject();try{await api('activate',{project:store.activeId});}catch(err){alert(err.message);}});
document.querySelector('#newProject').onclick=async()=>{const name=prompt('Nombre del nuevo proyecto:','Nuevo proyecto');if(!name?.trim())return;persist();try{await api('create_project',{name:name.trim()});await refresh();}catch(e){alert(e.message);}};
document.querySelector('#renameProject').onclick=async()=>{const p=activeProject();const name=prompt('Nuevo nombre del proyecto:',p.name);if(!name?.trim())return;try{await api('rename_project',{project:p.id,name:name.trim()});await refresh();}catch(e){alert(e.message);}};
document.querySelector('#deleteProject').onclick=async()=>{if(store.projects.length===1)return;const p=activeProject();if(!confirm(`¿Eliminar el proyecto «${p.name}» y todas sus entidades y conexiones? Esta acción no se puede deshacer.`))return;try{await api('delete_project',{project:p.id});await refresh();}catch(e){alert(e.message);}};

// Registros por entidad. Las claves de cada fila son los identificadores estables de las propiedades.
const dataDialog=document.querySelector('#dataDialog');
let recordsEntityId=null;
const colName=p=>p.text.split(':')[0].trim();
// Las conexiones entre propiedades identifican referencias entre tablas.
// La columna vinculada a un identificador de otra entidad se edita con un desplegable.
function foreignReference(entityId,propId){
 for(const link of data.links){
  let sourceId,sourceProp;
  if(link.to===entityId&&link.toProp===propId){sourceId=link.from;sourceProp=link.fromProp;}
  else if(link.from===entityId&&link.fromProp===propId){sourceId=link.to;sourceProp=link.toProp;}
  else continue;
  const entity=find(sourceId),property=entity?.properties.find(p=>p.id===sourceProp);
  if(entity&&property&&colName(property).toLowerCase()==='id')return {entity,property};
 }
 return null;
}
function foreignLabel(entity,row,property){
 const value=String(row[property.id]??'');
 const descriptive=entity.properties.filter(p=>p.id!==property.id).map(p=>String(row[p.id]??'').trim()).find(Boolean);
 return descriptive?`${value} — ${descriptive}`:value;
}
async function openRecords(id){recordsEntityId=id;dataDialog.showModal();try{await loadRows(id);}catch(e){alert(e.message);}}
function renderRecords(){
 const n=find(recordsEntityId);if(!n)return;
 n.rows ||= [];
 document.querySelector('#dataTitle').textContent='Datos · '+n.title;
 document.querySelector('#dataCount').textContent=n.rows.length+' registros · '+n.properties.length+' columnas';
 const head=document.querySelector('#dataTable thead'),body=document.querySelector('#dataTable tbody');
 head.replaceChildren();body.replaceChildren();
 const hr=document.createElement('tr');for(const prop of n.properties){const th=document.createElement('th');th.textContent=colName(prop);th.title=prop.text;hr.append(th);}const actions=document.createElement('th');actions.textContent='Acciones';hr.append(actions);head.append(hr);
 n.rows.forEach((row,index)=>{const tr=document.createElement('tr');for(const prop of n.properties){const td=document.createElement('td'),ref=foreignReference(n.id,prop.id);
 let input;
 if(ref){
  input=document.createElement('select');input.className='foreign-select';input.dataset.fkTable=ref.entity.title;
  const blank=document.createElement('option');blank.value='';blank.textContent='— Sin seleccionar —';input.append(blank);
  const current=String(row[prop.id]??'');let matched=current==='';
  for(const foreignRow of (ref.entity.rows||[])){
   const value=String(foreignRow[ref.property.id]??'').trim();if(!value)continue;
   const option=document.createElement('option');option.value=value;option.textContent=foreignLabel(ref.entity,foreignRow,ref.property);
   if(value===current)matched=true;input.append(option);
  }
  if(!matched){const missing=document.createElement('option');missing.value=current;missing.textContent=current+' (registro no encontrado)';input.append(missing);input.classList.add('fk-missing');input.title='Referencia no encontrada en '+ref.entity.title+'; se conserva el valor original.';}
  input.value=current;if(matched)input.title='Clave foránea → '+ref.entity.title+'.'+colName(ref.property);
 }else{
  input=document.createElement('input');input.type='text';input.value=row[prop.id]??'';
  input.placeholder=prop.text.includes(':')?prop.text.split(':').slice(1).join(':').trim():'';
 }
 input.dataset.row=String(index);input.dataset.prop=prop.id;
 input.setAttribute('aria-label',colName(prop)+' · fila '+(index+1));td.append(input);tr.append(td);}const td=document.createElement('td'),del=document.createElement('button');del.type='button';del.className='delete-row';del.textContent='Eliminar';del.dataset.deleteRow=String(index);td.append(del);tr.append(td);body.append(tr);});
 if(!n.rows.length){const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=n.properties.length+1;td.className='empty-data';td.textContent='Todavía no hay registros. Pulsa «Añadir registro».';tr.append(td);body.append(tr);}
}
document.querySelector('#addRow').onclick=async()=>{try{await api('add_row',{project:store.activeId,entity:recordsEntityId});await loadRows(recordsEntityId);}catch(e){alert(e.message);}};
document.querySelector('#closeData').onclick=()=>dataDialog.close();
document.querySelector('#dataTable').addEventListener('change',async e=>{const input=e.target.closest('input[data-row], select[data-row]');if(!input)return;const n=find(recordsEntityId),row=n?.rows?.[Number(input.dataset.row)];if(!row)return;try{await updateCell(recordsEntityId,row.__id,input.dataset.prop,input.value);row[input.dataset.prop]=input.value;input.classList.remove('fk-missing');}catch(err){alert(err.message);await loadRows(recordsEntityId);}});
document.querySelector('#dataTable').addEventListener('click',async e=>{const btn=e.target.closest('[data-delete-row]');if(!btn)return;const n=find(recordsEntityId);if(!n)return;try{await api('delete_row',{project:store.activeId,entity:recordsEntityId,row:n.rows[Number(btn.dataset.deleteRow)].__id});await loadRows(recordsEntityId);}catch(err){alert(err.message);}});
dataDialog.addEventListener('close',()=>{recordsEntityId=null;render();});

const loginOverlay=document.querySelector('#loginOverlay');
 const loginError=document.querySelector('#loginError');
 document.querySelector('#loginForm').addEventListener('submit',async e=>{
  e.preventDefault();loginError.textContent='';
  try{await api('login',{username:document.querySelector('#loginUser').value,password:document.querySelector('#loginPassword').value});
   await refresh();loginOverlay.hidden=true;document.querySelector('#loginPassword').value='';
  }catch(err){loginError.textContent=err.message;}
 });
 document.querySelector('#logout').addEventListener('click',async()=>{
  try{await api('logout');}finally{loginOverlay.hidden=false;store={activeId:null,projects:[]};data=empty();nodes.replaceChildren();categoriesLayer.replaceChildren();svg.replaceChildren();}
 });
 window.addEventListener('resize',drawWires);
 api('auth_status').then(async authenticated=>{if(authenticated){await refresh();loginOverlay.hidden=true;}else loginOverlay.hidden=false;}).catch(e=>{loginError.textContent=e.message;});
})();

```
**index.html**
```html
<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>andrei | bbdd</title><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23f06ab4'/%3E%3Ctext x='32' y='46' text-anchor='middle' font-family='Arial,sans-serif' font-size='44' font-weight='700' fill='white'%3EA%3C/text%3E%3C/svg%3E"><link rel="stylesheet" href="style.css?v=20261110-andrei-theme-v7"></head><body><header><strong class="brand"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23f06ab4'/%3E%3Ctext x='32' y='46' text-anchor='middle' font-family='Arial,sans-serif' font-size='44' font-weight='700' fill='white'%3EA%3C/text%3E%3C/svg%3E" alt="Logo Andrei"><span>andrei <span class="brand-divider">|</span> bbdd</span></strong><div class="actions"><div class="projects"><label for="projectSelect">Proyecto</label><select id="projectSelect" aria-label="Proyecto activo"></select><button id="newProject" title="Crear proyecto">+ Proyecto</button><button id="renameProject" title="Renombrar proyecto">Renombrar</button><button id="deleteProject" title="Eliminar proyecto">Eliminar proyecto</button></div><button id="add">+ Entidad</button><button id="fit">Centrar vista</button><button id="export">Exportar JSON</button><button id="exportSql">Exportar SQL</button><label class="import">Importar<input type="file" id="import" accept="application/json" hidden></label><button id="clear">Limpiar</button><button type="button" id="logout">Salir</button></div></header><div id="designerLayout"><aside id="visualFilters"><div class="sidebar-heading"><strong>Colecciones</strong><button id="sidebarCollapse" type="button" title="Contraer panel">‹</button></div><label class="filter-search">Buscar entidades <input id="entitySearch" type="search" placeholder="Nombre, campo o categoría…" autocomplete="off"></label><div class="filter-categories"><span class="filter-caption">Colecciones</span><div class="category-bulk"><button type="button" id="allCategories">All</button><button type="button" id="noCategories">None</button></div><div id="categorySwitches"></div><div class="nested-controls"><button type="button" id="nestedCreate">+ Subcolección</button><button type="button" id="nestedMove">Mover colección</button><button type="button" id="nestedRefresh">Actualizar árbol</button></div><div id="collectionBreadcrumb" class="collection-breadcrumb">Selecciona una colección</div></div><label class="filter-opacity">Opacidad inactiva <input id="inactiveOpacity" type="range" min="0" max="80" value="18" step="1"><output id="opacityValue">18%</output></label><button id="resetFilters" type="button">Restablecer</button></aside><main id="viewport"><div id="world"><svg id="categoriesLayer"></svg><svg id="wires"></svg><div id="nodes"></div></div><div class="hint">Crea entidades y arrastra entre conectores de propiedades para relacionarlas</div></main></div><dialog id="editor"><form method="dialog" id="entityForm"><h2 id="formTitle">Entidad</h2><label>Título<input id="title" required maxlength="80"></label><div class="entity-editor-grid"><section class="entity-editor-main"><div class="property-heading"><strong>Propiedades</strong><button type="button" id="addProperty">+ Propiedad</button></div><div class="property-table-scroll"><table class="property-table"><thead><tr><th>Nombre</th><th>Tipo</th><th>Orden / acciones</th></tr></thead><tbody id="propertyRows"></tbody></table></div><small>Usa las flechas para ordenar. Los tipos personalizados existentes se conservan.</small></section><section class="entity-editor-memberships"><div class="membership-heading"><strong>Colecciones y subcolecciones</strong><div><button type="button" id="membershipAll">Todas</button><button type="button" id="membershipNone">Ninguna</button></div></div><small>Selecciona las pertenencias directas. Las subcolecciones no seleccionan automáticamente a sus padres.</small><div id="entityMemberships" class="entity-membership-list"></div></section></div><div class="buttons"><button type="button" id="deleteEntity" class="danger">Eliminar entidad</button><span></span><button type="button" id="cancel">Cancelar</button><button type="submit" class="primary">Guardar</button></div></form></dialog><dialog id="dataDialog" class="data-dialog"><div class="data-top"><div><h2 id="dataTitle">Registros</h2><small id="dataCount"></small></div><button type="button" id="closeData">Cerrar ✕</button></div><div class="data-scroll"><table id="dataTable"><thead></thead><tbody></tbody></table></div><div class="data-bottom"><button id="addRow" class="primary">+ Añadir registro</button><small>Los registros se guardan en Andrei BBDD.</small></div></dialog><div id="loginOverlay" class="login-overlay"><form id="loginForm" class="login-card"><h2>andrei | bbdd</h2><p>Inicia sesión para acceder a tus proyectos.</p><label>Usuario<input id="loginUser" autocomplete="username" required></label><label>Contraseña<input id="loginPassword" type="password" autocomplete="current-password" required></label><p id="loginError" role="alert"></p><button class="primary" type="submit">Entrar</button></form></div><script src="app.js?v=20261031-property-crud-v6"></script></body></html>

```
**style.css**
```css
:root{font-family:Inter,system-ui,sans-serif;color:#eaf0ff;background:#090e1d}*{box-sizing:border-box}body{margin:0;overflow:hidden}header{height:64px;background:#111a30;border-bottom:1px solid #293653;display:flex;align-items:center;justify-content:space-between;padding:0 24px;gap:16px}header strong{font-size:19px;white-space:nowrap}.actions{display:flex;gap:8px;flex-wrap:wrap}button,.import{border:1px solid #394766;background:#202c48;color:#eaf0ff;padding:9px 13px;border-radius:9px;cursor:pointer;font:inherit;font-size:13px}button:hover,.import:hover{background:#334568}#add,.primary{background:#5867ef;border-color:#5867ef}#viewport{position:relative;height:calc(100vh - 64px);overflow:hidden;cursor:grab;background-color:#090e1d;background-image:radial-gradient(#26344f 1px,transparent 1px);background-size:28px 28px}#viewport.panning{cursor:grabbing}#world{position:absolute;left:0;top:0;transform-origin:0 0;width:1px;height:1px}#wires{position:absolute;left:-50000px;top:-50000px;width:100000px;height:100000px;overflow:visible;pointer-events:none}#nodes{position:absolute;left:0;top:0}.node{position:absolute;width:260px;min-height:110px;border-radius:24px;background:linear-gradient(145deg,#253759,#182640);border:1px solid #5570a2;box-shadow:0 16px 42px #0008,0 0 35px #5766ee18;user-select:none;cursor:move;overflow:visible}.node.selected{border-color:#a1a9ff;box-shadow:0 0 0 2px #6572ff55,0 16px 40px #0008}.node-head{padding:17px 20px 12px;font-weight:750;font-size:16px;border-bottom:1px solid #405071;overflow-wrap:anywhere}.node-props{padding:10px 19px 16px;display:grid;gap:7px}.prop{font-size:12px;color:#b5c3df;display:flex;justify-content:space-between;gap:12px}.prop b{font-weight:500;color:#eef2ff}.slot{position:absolute;top:50%;width:15px;height:15px;border-radius:50%;background:#80a8ff;border:3px solid #17243d;box-shadow:0 0 0 1px #8ba7ff;cursor:crosshair;z-index:3}.slot.in{left:-8px}.slot.out{right:-8px;background:#6ee7b7;box-shadow:0 0 0 1px #6ee7b7}.slot:hover{transform:scale(1.4)}.hint{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);background:#111b30df;border:1px solid #2d3b5a;padding:10px 18px;border-radius:10px;color:#a9b9d7;font-size:12px;text-align:center;pointer-events:none;max-width:95%}dialog{border:1px solid #445579;border-radius:18px;background:#16223a;color:#eaf0ff;width:min(480px,94vw);box-shadow:0 20px 90px #000a}dialog::backdrop{background:#020613b9}form{display:grid;gap:18px}h2{margin:0}form label{display:grid;gap:8px;font-size:14px}small{color:#9badce}input,textarea{width:100%;background:#0c1528;color:#fff;border:1px solid #465878;border-radius:9px;padding:11px;font:inherit}textarea{resize:vertical}.buttons{display:flex;gap:8px;align-items:center}.buttons span{flex:1}.danger{color:#ff9da7;border-color:#78434f}@media(max-width:680px){header{height:auto;min-height:64px;padding:12px;align-items:flex-start;flex-direction:column}#viewport{height:calc(100vh - 112px)}.actions{gap:5px}.actions button,.import{padding:7px}}
/* Property-level connection ports */
.node-props{padding:10px 12px 16px;gap:3px}.prop{position:relative;display:flex;align-items:center;min-height:33px;gap:8px;padding:4px 12px;font-size:12px}.prop-name{color:#eef2ff;font-weight:600;overflow-wrap:anywhere;min-width:0}.prop-type{color:#aabbd9;margin-left:auto;white-space:nowrap}.prop .slot{position:absolute;top:50%;transform:translateY(-50%);width:15px;height:15px;touch-action:none}.prop .slot.in{left:-20px}.prop .slot.out{right:-20px}.prop .slot:hover{transform:translateY(-50%) scale(1.35)}.no-props{font-size:12px;color:#aabbd9;padding:10px 4px}.node-head{cursor:move}.node-props{cursor:default}#viewport{touch-action:none}

/* Wires share the same world coordinates as entities. */
#wires{left:0;top:0;width:1px;height:1px;overflow:visible;pointer-events:none}
.slot{pointer-events:auto}

/* Category contours live behind the entity nodes and links. */
#categoriesLayer{position:absolute;left:0;top:0;width:1px;height:1px;overflow:visible;pointer-events:none}
#categoriesLayer text{font-family:Inter,system-ui,sans-serif;paint-order:stroke;stroke:#090e1d;stroke-width:3px;stroke-linejoin:round}

/* Tema claro minimalista */
:root{font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;color:#263447;background:#f8fafc}
header{background:#fff;border-bottom:1px solid #e4eaf1;box-shadow:0 1px 4px #24354b08}
header strong{color:#24354b;letter-spacing:-.4px}
button,.import{background:#fff;color:#34445a;border:1px solid #dce4ee;border-radius:8px;box-shadow:0 1px 2px #1d2c4008}
button:hover,.import:hover{background:#f0f4fa}
#add,.primary{background:#4f5d95;border-color:#4f5d95;color:white}
#add:hover,.primary:hover{background:#414e82}
#viewport{background-color:#f8fafc;background-image:radial-gradient(#d8e1ec 1px,transparent 1px)}
.node{background:#fff;border:1px solid #dce5ef;border-radius:18px;box-shadow:0 8px 28px #263a5615; color:#263447}
.node.selected{border-color:#6979b1;box-shadow:0 0 0 2px #6979b12c,0 8px 28px #263a5615}
.node-head{border-bottom:1px solid #eef1f5;color:#263447}
.prop{color:#5e7088}.prop-name{color:#33445b}.prop-type{color:#8290a2}
.slot{background:#8296c9;border:3px solid #fff;box-shadow:0 0 0 1px #7185b5}
.slot.out{background:#e88b2f;box-shadow:0 0 0 1px #d77e28}
.no-props{color:#8190a2}
.hint{background:#ffffffed;border:1px solid #e1e7ef;color:#6b7b91;box-shadow:0 3px 14px #263a5610}
dialog{background:#fff;color:#263447;border:1px solid #e0e7f0;box-shadow:0 20px 80px #24354b33}
dialog::backdrop{background:#24354b65}
small{color:#718096}
input,textarea{background:#fff;color:#263447;border:1px solid #d6e0eb}
input:focus,textarea:focus{outline:2px solid #4f5d9540;border-color:#6979b1}
.danger{color:#b64754;border-color:#efcdd1}
#categoriesLayer text{stroke:#f8fafc;stroke-width:4px}

/* Gestión de proyectos */
.projects{display:flex;align-items:center;gap:6px;border-right:1px solid #e4eaf1;padding-right:12px;margin-right:5px}.projects label{font-size:12px;color:#718096}.projects select{max-width:210px;min-width:130px;border:1px solid #dbe3ef;background:#fff;color:#263447;border-radius:8px;padding:8px;font:inherit;font-size:13px}.projects button{white-space:nowrap}.projects button:disabled{opacity:.4;cursor:not-allowed}header{height:auto;min-height:64px;flex-wrap:wrap;padding-top:8px;padding-bottom:8px}#viewport{height:calc(100vh - 64px)}@media(max-width:1050px){.actions{flex-wrap:wrap}.projects{flex-wrap:wrap}header{align-items:flex-start}#viewport{height:calc(100vh - 112px)}}

/* Datos de cada entidad */
.node-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.records-btn{padding:5px 8px;font-size:12px;white-space:nowrap;background:#f0f3fb;color:#4f5d95;border-color:#dce4f2;cursor:pointer;user-select:none;touch-action:manipulation}
.records-btn:hover{background:#e5ebfa}
.data-dialog{width:min(1100px,95vw);max-width:95vw;max-height:88vh;padding:22px;overflow:hidden}
.data-dialog[open]{display:flex;flex-direction:column;gap:16px}
.data-top,.data-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px}
.data-top h2{margin:0 0 5px;font-size:21px}
.data-scroll{overflow:auto;min-height:130px;max-height:62vh;border:1px solid #e1e7f0;border-radius:10px}
#dataTable{border-collapse:collapse;width:100%;font-size:13px}
#dataTable th{background:#f4f6fa;color:#34445b;text-align:left;position:sticky;top:0;z-index:1}
#dataTable th,#dataTable td{padding:10px;border-bottom:1px solid #e9edf4;min-width:155px}
#dataTable td:last-child,#dataTable th:last-child{min-width:100px;width:110px}
#dataTable input{padding:8px 9px;min-width:125px;width:100%;font-size:13px}
#dataTable .delete-row{color:#b64754;border-color:#efcdd1}
.empty-data{text-align:center;color:#8090a4;padding:30px!important}
@media(max-width:700px){.data-top,.data-bottom{align-items:flex-start;flex-direction:column}.data-dialog{padding:14px}}

/* Campos de claves foráneas */
#dataTable select.foreign-select{width:100%;min-width:160px;padding:8px;border:1px solid #cbd7eb;border-radius:8px;background:#f1f5ff;color:#25365a;font:inherit;cursor:pointer}
#dataTable select.foreign-select:focus{outline:2px solid #7185c7;outline-offset:1px}
/* Identidad andrei | bbdd · pink suave */
:root{--pink:#d878a4;--pink-strong:#ba5486;--pink-light:#fcecf4;--pink-border:#efd4e1}
header{border-bottom-color:#f1dce7;background:#fffafd}
header strong.brand{display:flex;align-items:center;gap:11px;color:#483342;font-size:20px;letter-spacing:-.5px}
.brand img{width:32px;height:32px;object-fit:contain;flex:none}
.brand-divider{color:var(--pink-strong);font-weight:500}
#add,.primary{background:var(--pink);border-color:var(--pink);color:#fff}
#add:hover,.primary:hover{background:var(--pink-strong);border-color:var(--pink-strong)}
button:hover,.import:hover{background:#fff0f7;border-color:var(--pink-border)}
button:focus-visible,.import:focus-visible{outline:2px solid var(--pink-strong);outline-offset:2px}
.projects select:focus,input:focus,textarea:focus{outline:2px solid #e9a6c7;border-color:var(--pink)}
.node.selected{border-color:var(--pink);box-shadow:0 0 0 2px #d878a42e,0 8px 28px #263a5615}
.records-btn{background:var(--pink-light);color:#a34576;border-color:var(--pink-border)}
.records-btn:hover{background:#f7dce9}
.slot{background:#e3a3c2;box-shadow:0 0 0 1px #d58bac}
.slot.out{background:#c45b8f;box-shadow:0 0 0 1px #b34a7d}
#viewport{background-color:#fffbfd;background-image:radial-gradient(#ead9e3 1px,transparent 1px)}
#categoriesLayer text{stroke:#fffbfd}
.hint{border-color:#f0dce6}
#dataTable select.foreign-select{background:#fff3f9;border-color:#efcde0;color:#633e53}

/* Filtros visuales (sin alterar datos persistidos) */
#visualFilters{display:flex;align-items:center;flex-wrap:wrap;gap:12px;padding:9px 20px;background:#fff8fc;border-bottom:1px solid #f1d8e5;color:#674359;font-size:12px;position:relative;z-index:5}
#visualFilters input[type=search]{width:215px;padding:8px 10px;font-size:12px;border-color:#edccdf}
.filter-search,.filter-opacity{display:flex;align-items:center;gap:9px;white-space:nowrap}
.filter-categories{display:flex;align-items:center;gap:8px;flex:1;min-width:170px}
.filter-caption{font-weight:700;white-space:nowrap}
#categorySwitches{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
.category-toggle{display:inline-flex;align-items:center;gap:6px;padding:5px 9px;border:1px solid #edcedd;border-radius:99px;background:#fff;cursor:pointer;white-space:nowrap;user-select:none}
.category-toggle input{width:14px;height:14px;accent-color:#cb72a2;margin:0;cursor:pointer}
.category-toggle.is-off{opacity:.6;background:#f5eaf0}
.category-toggle .category-count{color:#a7889b;font-size:11px}
.filter-opacity input{width:95px;accent-color:#cb72a2;padding:0}
#resetFilters{padding:7px 10px}
#viewport{height:calc(100vh - 122px)}
.node{transition:opacity .3s ease,filter .3s ease,box-shadow .3s ease}
.node.is-dimmed{filter:saturate(.5)}
.node.search-match{box-shadow:0 0 0 3px #e26aaa,0 0 24px #e26aaa66,0 8px 28px #263a5615!important;border-color:#d65b9b}
.node mark{background:#ffe39a;color:#663e2d;border-radius:2px;padding:0 1px}
#categoriesLayer path,#categoriesLayer text,#wires path{transition:opacity .3s ease}
@media(max-width:850px){#visualFilters{gap:8px;padding:8px}#viewport{height:calc(100vh - 175px)}}
@media(prefers-reduced-motion:reduce){.node,#categoriesLayer path,#categoriesLayer text,#wires path{transition:none}}

/* Group dragging, bulk category toggles and login */
#categoriesLayer .group-drag-handle{pointer-events:auto;cursor:grab;user-select:none}
#categoriesLayer .group-drag-handle:active{cursor:grabbing}
.category-bulk{display:flex;gap:6px;margin:6px 0}
.category-bulk button{padding:5px 12px;font-size:12px}
.login-overlay{position:fixed;inset:0;z-index:9999;background:#f4f6fa;display:grid;place-items:center;padding:20px}
.login-overlay[hidden]{display:none}
.login-card{width:min(420px,100%);padding:32px;background:#fff;border:1px solid #e0e7f0;border-radius:18px;box-shadow:0 20px 70px #263a5620;display:grid;gap:18px}
.login-card p{margin:0;color:#64748b}.login-card #loginError{color:#b64754;min-height:1em}
.login-card button{padding:12px}

/* Nested collections */
.nested-controls{display:flex;flex-wrap:wrap;gap:5px;margin:10px 0}.nested-controls button{font-size:11px;padding:5px 7px}.nested-tree{max-height:250px;overflow:auto;font-size:12px}.nested-item{padding-top:5px;padding-bottom:5px;border-bottom:1px solid rgba(128,128,128,.15);white-space:nowrap}

/* Hierarchical collection navigation */
#categorySwitches{display:flex;flex-direction:column;align-items:stretch;gap:2px;max-height:220px;overflow:auto;min-width:205px;max-width:350px;padding:3px;background:#fff;border:1px solid #efd5e4;border-radius:10px}
.collection-tree-row{display:flex;align-items:center;gap:5px;padding:3px 7px 3px calc(5px + var(--depth)*17px);border-radius:7px;min-width:0}
.collection-tree-row:hover{background:#fdf0f7}.collection-tree-row.selected{background:#f8dce9}
.collection-expander{width:19px;min-width:19px;padding:0!important;border:0!important;background:transparent!important;color:#99577d;cursor:pointer;font-size:15px}
.collection-expander:disabled{opacity:.25;cursor:default}
.collection-tree-row input{width:14px;height:14px;margin:0;accent-color:#c96c9e;cursor:pointer}
.collection-tree-name{border:0!important;background:transparent!important;padding:3px 2px!important;text-align:left;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#61354d;font-weight:600;cursor:pointer}
.collection-tree-row .category-count{font-size:11px;color:#a78095}
.collection-breadcrumb{font-size:11px;color:#925473;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.filter-categories{flex-wrap:wrap}.nested-controls{margin:0}.nested-controls button:disabled{opacity:.4;cursor:not-allowed}

/* Sidebar layout — nested collections */
#designerLayout{display:flex;height:calc(100dvh - 64px);min-height:0;overflow:hidden}
#visualFilters{position:relative;flex:0 0 270px;width:270px;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;flex-wrap:nowrap;gap:12px;padding:14px 12px;border-bottom:0;border-right:1px solid #f1d8e5;z-index:5}
#designerLayout #viewport{flex:1;min-width:0;height:100%;}
.sidebar-heading{display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#643c53}
.sidebar-heading button{padding:2px 9px;font-size:20px}
#visualFilters .filter-search{display:flex;flex-direction:column;align-items:stretch;gap:5px;white-space:normal}
#visualFilters input[type=search]{width:100%}
#visualFilters .filter-categories{display:flex;flex-direction:column;align-items:stretch;flex:none;gap:9px;min-width:0}
#visualFilters #categorySwitches{min-width:0;max-width:none;max-height:none;overflow:visible;width:100%}
#visualFilters .collection-tree-row{padding-left:calc(5px + var(--depth)*15px)}
#visualFilters .collection-breadcrumb{max-width:100%;white-space:normal;overflow-wrap:anywhere}
#visualFilters .nested-controls{display:grid;grid-template-columns:1fr 1fr;gap:5px}
#visualFilters #nestedRefresh{grid-column:1/-1}
#visualFilters .filter-opacity{display:flex;flex-wrap:wrap;white-space:normal}
#visualFilters .filter-opacity input{flex:1;min-width:60px}
#visualFilters #resetFilters{width:100%}
#designerLayout.sidebar-closed #visualFilters{flex-basis:42px;width:42px;padding:10px 5px}
#designerLayout.sidebar-closed #visualFilters>*:not(.sidebar-heading){display:none}
#designerLayout.sidebar-closed .sidebar-heading strong{display:none}
@media(max-width:850px){#designerLayout{height:calc(100dvh - 112px)}#visualFilters{flex-basis:225px;width:225px}}

/* Two-column entity editor with direct hierarchical memberships */
#editor{width:min(920px,calc(100vw - 32px));max-width:920px;}
#editor #entityForm{width:100%;box-sizing:border-box;}
.entity-editor-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(240px,.85fr);gap:22px;margin:14px 0;align-items:stretch;}
.entity-editor-main{min-width:0;display:flex;flex-direction:column;gap:12px;}
.entity-editor-main label{display:flex;flex-direction:column;gap:6px;flex:1;}
.entity-editor-main textarea{width:100%;min-height:270px;box-sizing:border-box;flex:1;}
.entity-editor-memberships{min-width:0;display:flex;flex-direction:column;gap:8px;}
.membership-heading{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;}
.membership-heading>div{display:flex;gap:5px;}
.membership-heading button{padding:4px 8px;font-size:11px;}
.entity-editor-memberships>small{line-height:1.45;opacity:.75;}
.entity-membership-list{border:1px solid #e5d9e4;border-radius:9px;overflow:auto;max-height:335px;padding:8px 5px;flex:1;}
.entity-membership-row{display:flex;align-items:center;gap:8px;padding:6px 8px 6px calc(8px + var(--depth)*20px);border-radius:5px;cursor:pointer;font-size:13px;}
.entity-membership-row:hover{background:#f8eef5;}
.entity-membership-row input{flex:0 0 auto;accent-color:#c45b94;}
.entity-membership-row span{flex:1;min-width:0;overflow-wrap:anywhere;}
.entity-membership-row small{opacity:.55;}
@media(max-width:680px){.entity-editor-grid{grid-template-columns:1fr;}.entity-membership-list{max-height:200px;}#editor{max-height:92vh;overflow:auto;}}

/* Entity editor: stable two-column layout and property CRUD */
#editor{width:min(1040px,calc(100vw - 32px));max-width:1040px;max-height:92dvh;overflow:auto;padding:22px 24px;}
#editor #entityForm{display:block;min-width:0;width:100%;}
#editor .entity-editor-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:24px;align-items:start;width:100%;}
#editor .entity-editor-grid>section{min-width:0;width:100%;overflow:hidden;}
#editor .entity-editor-memberships{min-width:0;}
#editor .entity-membership-list{width:100%;min-width:0;max-width:100%;overflow-x:hidden;overflow-y:auto;height:330px;flex:none;box-sizing:border-box;}
#editor .entity-membership-row{display:flex!important;flex-direction:row!important;align-items:center!important;width:100%;min-width:0;white-space:nowrap;gap:8px;}
#editor .entity-membership-row input[type=checkbox]{display:block;flex:0 0 16px!important;width:16px!important;height:16px!important;margin:0!important;min-width:16px;}
#editor .entity-membership-row span{display:block;flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;overflow-wrap:normal;}
#editor .entity-membership-row small{flex:0 0 auto;}
#editor .property-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:9px;}
#editor .property-heading button{padding:6px 10px;}
#editor .property-table-scroll{width:100%;min-width:0;max-height:330px;overflow:auto;border:1px solid #e5d9e4;border-radius:9px;}
#editor .property-table{width:100%;border-collapse:collapse;table-layout:fixed;}
#editor .property-table th{position:sticky;top:0;background:#fbf5f9;z-index:1;text-align:left;font-size:12px;padding:10px 8px;}
#editor .property-table th:nth-child(1){width:38%}#editor .property-table th:nth-child(2){width:32%}#editor .property-table th:nth-child(3){width:30%}
#editor .property-table td{padding:5px;border-top:1px solid #f0e5ed;}
#editor .property-table input,#editor .property-table select{display:block;width:100%;min-width:0;max-width:100%;padding:8px 6px;font-size:12px;box-sizing:border-box;}
#editor .property-actions{white-space:nowrap;text-align:center;}
#editor .property-actions button{padding:5px 7px;margin:0 1px;min-width:24px;}
#editor .entity-editor-main>small{margin-top:8px;color:#88768a;}
@media(max-width:720px){#editor .entity-editor-grid{grid-template-columns:minmax(0,1fr)}#editor .entity-membership-list{height:220px}}

/* Unified dropdowns: property types, project picker and foreign keys */
#editor select.property-type,
#dataTable select.foreign-select,
.projects select {
  appearance:none;-webkit-appearance:none;
  background-color:#fff;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23765b70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 10px center;background-size:15px;
  border:1px solid #dce2ed;border-radius:9px;color:#344154;
  padding:9px 34px 9px 11px;min-height:37px;line-height:1.3;
  font-family:inherit;font-size:12px;cursor:pointer;
  transition:border-color .15s,box-shadow .15s,background-color .15s;
}
#editor select.property-type:hover,#dataTable select.foreign-select:hover,.projects select:hover{border-color:#cf9ab6;background-color:#fffafd}
#editor select.property-type:focus-visible,#dataTable select.foreign-select:focus-visible,.projects select:focus-visible{
  outline:none;border-color:var(--pink,#d878a4);box-shadow:0 0 0 3px #d878a42b;
}
#editor select.property-type{width:100%;min-width:0;max-width:100%;padding:8px 25px 8px 7px;background-position:right 5px center;font-size:12px;}
#dataTable select.foreign-select{min-width:165px;width:100%;background-color:#fff;border-color:#dce2ed;color:#344154;}
#dataTable select.foreign-select.fk-missing{background-color:#fff8f0;border-color:#e4b97c;color:#815822;}
#dataTable select.foreign-select.fk-missing:hover{border-color:#ce9d58;background-color:#fff4e4;}
#dataTable select.foreign-select option{color:#344154;background:#fff;}

/* Andrei UI theme, adapted from 008-estilo andrei.html */
:root{
  --andrei-orange:#d97218;
  --andrei-orange-dark:#c86a14;
  --andrei-blue:hsl(200,50%,70%);
  --andrei-blue-soft:hsl(200,50%,90%);
  --andrei-blue-pale:#f3f7fa;
  --andrei-ink:#34445a;
  --andrei-muted:#718096;
  --andrei-border:#dce4ec;
  --pink:var(--andrei-blue);
  --pink-strong:#527b9a;
  --pink-light:var(--andrei-blue-soft);
  --pink-border:#c7dce9;
}

body{background:linear-gradient(180deg,#f7f8fb 0%,#fff 100%)}
header{
  color:#fff;
  background:linear-gradient(180deg,var(--andrei-orange),var(--andrei-orange-dark));
  border-bottom:0;
  box-shadow:0 10px 28px rgba(13,13,13,.14);
}
header strong.brand{color:#fff;gap:22px;letter-spacing:.2px}
.brand img{filter:hue-rotate(60deg)}
.brand-divider{color:rgba(255,255,255,.72)}
.actions button,.actions .import{
  color:#fff;
  background:rgba(255,255,255,.1);
  border-color:rgba(255,255,255,.28);
  box-shadow:none;
}
.actions button:hover,.actions .import:hover{background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.48)}
.actions #add{background:var(--andrei-blue);border-color:var(--andrei-blue);color:#182a36}
.actions #add:hover{background:#a5c9e0;border-color:#a5c9e0}
.projects{border-right-color:rgba(255,255,255,.28)}
.projects label{color:rgba(255,255,255,.9)}
.projects select{color:var(--andrei-ink);background-color:#fff}

#visualFilters{
  color:#fff;
  background:linear-gradient(180deg,var(--andrei-orange),var(--andrei-orange-dark));
  border-right:0;
  box-shadow:4px 0 18px rgba(13,13,13,.1);
}
.sidebar-heading{color:#fff}
#visualFilters .filter-caption,#visualFilters .filter-search,#visualFilters .filter-opacity{color:rgba(255,255,255,.95)}
#visualFilters button{
  color:#fff;
  background:rgba(255,255,255,.1);
  border-color:rgba(255,255,255,.32);
  box-shadow:none;
}
#visualFilters button:hover{background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.55)}
#visualFilters button:focus-visible{outline:2px solid #fff;outline-offset:2px}
#visualFilters input[type=search]{background:#fff;color:var(--andrei-ink);border-color:rgba(255,255,255,.7)}
#visualFilters input[type=search]:focus{outline:2px solid rgba(255,255,255,.45);border-color:#fff}
#visualFilters #categorySwitches{
  background:var(--andrei-blue-soft);
  border-color:rgba(255,255,255,.55);
}
#visualFilters .collection-tree-row{color:var(--andrei-ink)}
#visualFilters .collection-tree-row:hover{background:#edf5fa}
#visualFilters .collection-tree-row.selected{background:#c9e0ef}
#visualFilters .collection-expander{color:#527b9a}
#visualFilters .collection-tree-name{color:#344e62}
#visualFilters .collection-tree-row .category-count{color:#718096}
#visualFilters .collection-breadcrumb{color:#fff}
#visualFilters .filter-opacity input{accent-color:var(--andrei-blue)}

#viewport{background-color:#f7f8fb;background-image:radial-gradient(#d7e3ec 1px,transparent 1px)}
#categoriesLayer text{stroke:#f7f8fb}
.node{background:linear-gradient(145deg,#fff,#edf4f8);border-color:#b9cfdd;color:#34445a;box-shadow:0 10px 28px rgba(13,13,13,.12)}
.node.selected{border-color:#648ba5;box-shadow:0 0 0 3px rgba(140,184,217,.35),0 12px 30px rgba(13,13,13,.14)}
.node-head{border-bottom-color:#dce8ef;color:#34445a}
.prop{color:#5e7080}
.prop-name{color:#34445a}
.prop-type{color:#718096}
.slot{background:var(--andrei-blue);border-color:#fff;box-shadow:0 0 0 1px #6d98b4}
.slot.out{background:var(--andrei-orange);box-shadow:0 0 0 1px var(--andrei-orange-dark)}
.no-props{color:#718096}
.node.search-match{box-shadow:0 0 0 3px var(--andrei-blue),0 0 24px rgba(140,184,217,.4),0 8px 28px rgba(38,58,86,.08)!important;border-color:#648ba5}
.hint{background:rgba(255,255,255,.94);border-color:#dce4ec;color:#6b7b91;box-shadow:0 6px 20px rgba(13,13,13,.1)}
dialog{background:#fff;color:var(--andrei-ink);border-color:#c8d9e4;box-shadow:0 20px 80px rgba(36,53,75,.22)}
dialog::backdrop{background:rgba(36,53,75,.55)}
input,textarea{color:var(--andrei-ink);border-color:#cbd8e2}
input:focus,textarea:focus{outline:2px solid rgba(140,184,217,.4);border-color:#648ba5}
button:focus-visible,.import:focus-visible{outline:2px solid #648ba5;outline-offset:2px}

.records-btn{background:var(--andrei-blue-soft);color:#476b83;border-color:#c7dce9}
.records-btn:hover{background:#d4e7f2}
#dataTable th{background:var(--andrei-blue-soft);color:var(--andrei-ink)}
#dataTable th,#dataTable td{border-bottom-color:#e4ebf0}
#dataTable select.foreign-select{background-color:#fff;border-color:#cbd8e2;color:var(--andrei-ink)}
#dataTable select.foreign-select:focus{outline-color:rgba(140,184,217,.4)}
#dataTable select.foreign-select.fk-missing{background-color:#fff8f0;border-color:#e4b97c;color:#815822}
#dataTable select.foreign-select.fk-missing:hover{border-color:#ce9d58;background-color:#fff4e4}

.category-toggle{border-color:#c7dce9;color:var(--andrei-ink)}
.category-toggle:hover{background:#edf5fa}
.category-toggle.is-off{background:#f1f3f5}
.category-toggle input,.entity-membership-row input{accent-color:#648ba5}
.category-toggle .category-count{color:#718096}
#editor .entity-membership-list,#editor .property-table-scroll{border-color:#dce4ec}
.entity-membership-row:hover{background:#edf5fa}
#editor .property-table th{background:var(--andrei-blue-soft)}
#editor .property-table td{border-top-color:#e4ebf0}
#editor .entity-editor-main>small{color:#718096}
.login-overlay{background:rgba(247,248,251,.96)}
.login-card{border-color:#dce4ec;box-shadow:0 20px 70px rgba(36,53,75,.16)}

#editor select.property-type,#dataTable select.foreign-select,.projects select{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234c667d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  border-color:#cbd8e2;
}
#editor select.property-type:hover,#dataTable select.foreign-select:hover,.projects select:hover{border-color:#8cb8d9;background-color:#f7fafc}
#editor select.property-type:focus-visible,#dataTable select.foreign-select:focus-visible,.projects select:focus-visible{outline:none;border-color:#648ba5;box-shadow:0 0 0 3px rgba(140,184,217,.28)}
#dataTable select.foreign-select option{color:var(--andrei-ink);background:#fff}

@media(max-width:850px){
  #visualFilters{box-shadow:0 4px 14px rgba(13,13,13,.08)}
}
```
###### private
**projects.json**
```json
{
    "activeId": "db:andrei-erp",
    "projects": [
        {
            "id": "db:clientes",
            "name": "clientes",
            "data": {
                "entities": [],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:crimson",
            "name": "crimson",
            "data": {
                "entities": [
                    {
                        "id": "table:32f58fcdd17090c3f8797bd372cc640f91d4ba18de8c3ba12e6b119d1f49d9f7",
                        "title": "__crimson_permissions",
                        "properties": [
                            {
                                "id": "col:7a44456268ce2721bdf5601cd951ff7c20365f65d379aec92c096e70c431e3ca",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:19ac2cdf502789cf2d8e0d831a4fab58f15c8800f67bd3c718c605fa4c47f4b1",
                                "text": "usuario_id: entero"
                            },
                            {
                                "id": "col:1799d1dbe63b0e1e273a6a2c69d721da0332763858c71d0a4c545da1b7b9a73e",
                                "text": "modulo: texto"
                            },
                            {
                                "id": "col:b9e69462775e315b20b3e049e4046cc89661c014b02e02f459c4b8178f4c5582",
                                "text": "puede_seleccionar: entero"
                            },
                            {
                                "id": "col:f211591914748bd04bc7004ded5a8b6862f48563e33de1d9734d4a05baeae302",
                                "text": "puede_insertar: entero"
                            },
                            {
                                "id": "col:699ec30ead74efb2b59dd6072ad682bf7206317b28db3a1861cd84011ce3e19c",
                                "text": "puede_actualizar: entero"
                            },
                            {
                                "id": "col:2d9899e7e22c7ad36fb7108d9abf8ce4bdf624bf83ae0478b49e8f623ceffa3b",
                                "text": "puede_eliminar: entero"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:9f530282eb0f16dfb31a825c392c47d2ce3b2c330d3962e89370f5f175eb5fb7",
                        "title": "__crimson_users",
                        "properties": [
                            {
                                "id": "col:3b24ca36bac44290879c874d7f5de32dc767599d6b8a5ca64646cf74dc7f25c9",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:3766ea3176d7c97d2190c09dce2eb7142c60c7057d45c733e47ddd64949532ae",
                                "text": "username: texto"
                            },
                            {
                                "id": "col:5fef2e1a7d15b7f7585cde7751463e7612b8842a744a19a7666039d3c63d44c9",
                                "text": "password_hash: texto"
                            },
                            {
                                "id": "col:18c3057b482f542464d51d318f80730c2e1700ff7fd864f7fbe7e9be0ec77cab",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:aff1917fcdae6f5465eda763a0f19d1f2544c334bc9909f86773a1f604de40f8",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:21c36e298bf0b92638209e5b22d19b9510cf59df3e4187e9706cf0f9e0cc3a40",
                                "text": "rol: texto"
                            },
                            {
                                "id": "col:a7fc35d87079ba9b4b298509a077481404c5e18c4594eecaf595405e633fcfde",
                                "text": "__crimson_activo: entero"
                            },
                            {
                                "id": "col:49a5c5375598245541a8442da1bd709f62cb0d4a49bbb351a6e8b2604e5049a5",
                                "text": "creado_en: texto"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 100
                    },
                    {
                        "id": "table:e4ee0f310820336720ad1b8b5c1f27f19344fde191828f8011d53125643d63b1",
                        "title": "categorias",
                        "properties": [
                            {
                                "id": "col:0d37abd081ce788d160053cd23b14a35bdac310516d2f102d0b92d5e96eddd2a",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:84296000136162b9fbb03d7036e0fd8fae5f168d2645c1427a51020eb4d019c0",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:64035dfb2a8243c68878852e6a5c74d95b24b13dab75f7764aa325189fab9d3d",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [],
                        "x": 760,
                        "y": 100
                    },
                    {
                        "id": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:aa9c265569d92178fd46f786ed1b88fa90072b0aff4e5b201a67e9f7cb0e25c1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:4f37650f71db6690f306e093c0da3f5c72ec7b7d93c3078d40d6997edefad06a",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:a008f281523934a638ea2cdf73f5e652f8080c3e72ba3304aa31c341890a5eab",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:eb627c851d7c29cd8f7ece61bd25d84fa627741c69a1619fd7165cd853905b66",
                                "text": "cif: texto"
                            },
                            {
                                "id": "col:8020c01ac2232178d6eef9ffe97d95d2de6937b2b99e02ec5ae0f8993a196ca4",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:69d53f23292837e5f8ddf4ac2694dd082db93cd59a0d5b349b30477def7c642d",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:a10b1787f8dfb052c290ea354a174ebf40e1bbcd99f51ba55f60baf4a74496b3",
                                "text": "direccion: texto"
                            },
                            {
                                "id": "col:af49893aaaf814f59b3fd1b28941be17c3671577a9506cf287c780541091cb4d",
                                "text": "codigopostal: texto"
                            }
                        ],
                        "categories": [],
                        "x": 1090,
                        "y": 100
                    },
                    {
                        "id": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "title": "compras",
                        "properties": [
                            {
                                "id": "col:284c000173664936d813a7088a91d4694669421446873c8b7ac9b5e7da88d3d7",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:64b3da99c635c6269e28adeda005d212029ae5e8343bbb8b0066040ddd8790f3",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:f2802128bb21eef06927fcdfb6c64efcdc9e804dd3d558fbff1bb714f5920532",
                                "text": "proveedor_id: entero"
                            },
                            {
                                "id": "col:a624001b39f7a1a11174000f4551b44d66d3005aeb02752858829a5bfd64f5d2",
                                "text": "fecha: texto"
                            },
                            {
                                "id": "col:51d809acc64dcea4bbb6a1843475ac0b49d704125affb70f796ed0096ed03d06",
                                "text": "total: real"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 420
                    },
                    {
                        "id": "table:2eeef7b32ae63085f272a4ca18cc27ee35b5c39dd92898407354b6f519776a46",
                        "title": "compras_lineas",
                        "properties": [
                            {
                                "id": "col:43c96b84db6d0c338a00d3be2c7758768b117dbc67f1d75f31cc77f07a6f7502",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:0f94e05e1c24c9267a8d9aab285d950fece7e55345fc90712fe1b95e810c2738",
                                "text": "compra_id: entero"
                            },
                            {
                                "id": "col:e965e218eb773b00aa81cfe0f8d97e892168beac2c922be28b31d207a4e77358",
                                "text": "producto_id: entero"
                            },
                            {
                                "id": "col:c08e98367b39a3962fccc089bc99a086ab1ea9f327c34a615117a204ca5b241f",
                                "text": "cantidad: real"
                            },
                            {
                                "id": "col:b13114146a56b47687aafddabd6e7774966753c9d089a5bdde4d0dd77349494d",
                                "text": "precio: real"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 420
                    },
                    {
                        "id": "table:b9d757a3376f1343441e216a255f1ae6b1e78d50b92632d97f0fda831f995c5c",
                        "title": "empleados",
                        "properties": [
                            {
                                "id": "col:b4bf3bf22a068afa038d954ceff2c9fcb38707170bb739ac860f4bf6861d2e8e",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:61bff72365a25fd03d12b7a7c06c1d2321702ac62045f176964ff43f7dd24bc2",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:c21fad3f144b7fffe762fb72ca89cb8409c008a4bf361ab831b20b7f2e48355c",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:147aac3dbdbb3c1843dcfea1933cd5f1433f7c3b6d60b5af284f573f69a80d3c",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:2d422de09058607a40d276e05a42145bb04315b680991d717011257bcfc646c0",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:283e3d26f550c4a4de5e09849bb0940d6714ec5b39e903fa35d27bc41fd095a1",
                                "text": "puesto: texto"
                            }
                        ],
                        "categories": [],
                        "x": 760,
                        "y": 420
                    },
                    {
                        "id": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "title": "empresas",
                        "properties": [
                            {
                                "id": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:08bbd4d386fc0b7b175254763766d22f2eca0f50f375fadda49b1f732517d699",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:a582cef0a3f1636de48737bd4aa564ca9082b2a79150a4486f0765da47de7d7e",
                                "text": "cif: texto"
                            },
                            {
                                "id": "col:2ad1e88f2da188677ef43f8f0fbe465ca1e95778c3c0fc6627fdf3fcf6e13fc5",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:188092d8dc6185ad801db3845b68a04cab7a3e17adcac60a27e232266ff4b8c8",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:9da3cae63c8d002ca798be22227ab8ae9cdae10185cffa64ea67113c1ab0c796",
                                "text": "direccion: texto"
                            }
                        ],
                        "categories": [],
                        "x": 1090,
                        "y": 420
                    },
                    {
                        "id": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "title": "facturas",
                        "properties": [
                            {
                                "id": "col:11038f9fcaae9f639ad483c0b667047fe2c1385a70529d170b56eec77e3517a1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:5e8ac33bcd20bce775e1ea3edba31a60d93c18ab0f73c500fe6fa6326a812a08",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:6daaf458cfbae6748804ce207303f4d45c7c2d9f724577a491b61f304aefd48b",
                                "text": "cliente_id: entero"
                            },
                            {
                                "id": "col:5deefe73a0ec6d35e7ee44013f2257db3979e5f14cd70fc7526d654be8ee2708",
                                "text": "pedido_id: entero"
                            },
                            {
                                "id": "col:e6fa8f923a56a0ecc0e1b3c0d9d0344f8dea9912cdac51e11fdda51146869068",
                                "text": "numero: texto"
                            },
                            {
                                "id": "col:de9e89125f09e550faf91a73b23e3811d93a4094d77bcdf740bfb46ab7a0a289",
                                "text": "fecha: texto"
                            },
                            {
                                "id": "col:eaaea8b321ab3c836d557688849854cd6a8cf975f380876b1b910fcd63b77cea",
                                "text": "estado: texto"
                            },
                            {
                                "id": "col:a7fc70d9e45ce15f65e1dfb6cb8c175aec75e43d956f8df54c4972729f534e0d",
                                "text": "total: real"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 740
                    },
                    {
                        "id": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:d5ce461170bbeabecb8a8fa7dbfa842d7e01e88008a8545b81b74b6da659c3d2",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:fc2895c009ad753d1cd9bc8de18c9209007e8cf06a5f705b38e0b8365da59bbe",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:98803e9cbcc608242c1d72c8acbccb83c0be8fdf4a04cb587284058579da0016",
                                "text": "cliente_id: entero"
                            },
                            {
                                "id": "col:f4a254efc89e9ec9f1b89168005515393f441b79e6e2f1f69261c9751b5eeb95",
                                "text": "fecha: texto"
                            },
                            {
                                "id": "col:94706a070924fb10748669829f0b0f9acaf9d115a8a927bd9bb43bcc7d46e157",
                                "text": "estado: texto"
                            },
                            {
                                "id": "col:9e6e025ea4522f6acf5a782900412ca29927ae1d4a70f399f7f92970ff7c1127",
                                "text": "total: real"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 740
                    },
                    {
                        "id": "table:51d161b04ac78b385002b0a42287e01b9177fde2f1d5918672a39037e33faddd",
                        "title": "pedidos_lineas",
                        "properties": [
                            {
                                "id": "col:9558c8043a4fbbf5fd0164b45daa57bf592f8db0745b04690ae907f747baee7f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:7dd7c5ebfb53b0dd8c88dca2b037b7895cc438f864322d979f8af5295eade76a",
                                "text": "pedido_id: entero"
                            },
                            {
                                "id": "col:8734b3fc051698070abb9b7a5de1cae30b16136875bb31ceb02da619857f69da",
                                "text": "producto_id: entero"
                            },
                            {
                                "id": "col:2af94c108752b570d52d6f49649abbf42de24ad0c6975a3982c5e7d0a7da78d0",
                                "text": "cantidad: real"
                            },
                            {
                                "id": "col:aa2c80722b653700b17b71842d8e73f16f9ed617c839c2f4c8b519f033d9e8f5",
                                "text": "precio: real"
                            }
                        ],
                        "categories": [],
                        "x": 760,
                        "y": 740
                    },
                    {
                        "id": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:0ddcbcf4f87b3a1dbc644f52c56f6ea1739759d12fbf2b61de379f5abe4fac2f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:385ae4ddbe898dd80df2c02779784688563aa315e13b588b524747a4d80640a2",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:ea54d88588fcb7a343cac84b3229ef949343f84fac5857451a4d291ab13727ce",
                                "text": "categoria_id: entero"
                            },
                            {
                                "id": "col:ad2ec2134dcfc47d0b1c7c713171d0f8bfdc8430503f34b1a731d67e2070500b",
                                "text": "codigo: texto"
                            },
                            {
                                "id": "col:16d915ec44b0c0973f4dbd3c0ddbca7721432a13b49edd9967e2652fd6f3ecd0",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:967a29243e70fa9f7ea40c504e8d702c92b43b880435f04ff528d79cb288366f",
                                "text": "precio: real"
                            },
                            {
                                "id": "col:1480ae703a88161db511a4e174ee470b75da140212cd48a8910a1da2297a464c",
                                "text": "stock: real"
                            }
                        ],
                        "categories": [],
                        "x": 1090,
                        "y": 740
                    },
                    {
                        "id": "table:2d99fb0e9a6ad1a0267cfc18b4fb6a424792befe5537a255fe39fc4ded05c5e8",
                        "title": "proveedores",
                        "properties": [
                            {
                                "id": "col:7bb688c375e570fd12c62c8cc2195c37e9d14a86e1bd20b6398e10c5716e6ed4",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:e824345ca9490f4d3e689c7a018a27219f22a224b993b76554e896947b6984eb",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:9eefb8fe9b1ec1763320daf58b32d2ad305340eed8e6cca2fdca5854b84cc131",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:e7a9cea77a25a72e1d29cd0aabc8e600b486acb38b599576638f47a6942069ae",
                                "text": "cif: texto"
                            },
                            {
                                "id": "col:61efc246146aed5a324f510dbe46d2645b05b31f87ce3e9b39d50bdc3b50f0de",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:bb1fd2f7ca1a269987bde10fb0116b2088616b2c2ea715f912539a1a1dd364ce",
                                "text": "telefono: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 1060
                    },
                    {
                        "id": "table:c68185859fc936a9443b6239f2d82e494a9f450b7835f41392cc78285ed253e2",
                        "title": "usuarios",
                        "properties": [
                            {
                                "id": "col:4526317066a8b76a715a4a63a179736c0fd46023ca8daccb607d3e1f6dc76bc7",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:4abd4013b84bad1afdb17e070f23005de4eb589f306910c63d536c76757dbb63",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:0a1192368db1a895e030b765f642518bd32f9e5f4505046458a0af6b7ff1bd42",
                                "text": "username: texto"
                            },
                            {
                                "id": "col:46c5ec51bef3d95c4ca87c17c5a327a9d72f66a3b3463b718c37d1a6341db7e1",
                                "text": "password_hash: texto"
                            },
                            {
                                "id": "col:6353ceaea0fb79f84e118fb6736f5c4fd91e01afc9f74a30a9785c7c25f15d09",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:22d962e538a93bdeda79649b687428f04e0513832c3014376200cf2fe18dc163",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:a7739c7486e98aea29615ab2292ee5b0a88f897613192085c1eb165d250078d0",
                                "text": "__crimson_activo: entero"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 1060
                    }
                ],
                "links": [
                    {
                        "id": "fk:f100e8055129d3272af3996ae1f52f2ab92fcccbe28e1b397c1909d87c6af93c",
                        "from": "table:9f530282eb0f16dfb31a825c392c47d2ce3b2c330d3962e89370f5f175eb5fb7",
                        "fromProp": "col:3b24ca36bac44290879c874d7f5de32dc767599d6b8a5ca64646cf74dc7f25c9",
                        "to": "table:32f58fcdd17090c3f8797bd372cc640f91d4ba18de8c3ba12e6b119d1f49d9f7",
                        "toProp": "col:19ac2cdf502789cf2d8e0d831a4fab58f15c8800f67bd3c718c605fa4c47f4b1"
                    },
                    {
                        "id": "fk:364b9d70f2f13027ee8cdeab55bfda8fe40a1e4d5a50c47f97af6fcc614f67ac",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:e4ee0f310820336720ad1b8b5c1f27f19344fde191828f8011d53125643d63b1",
                        "toProp": "col:84296000136162b9fbb03d7036e0fd8fae5f168d2645c1427a51020eb4d019c0"
                    },
                    {
                        "id": "fk:bfb2bf88368df5504a89e1d4661c2dc24b3f12604086755d07f5f6b18eda163c",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "toProp": "col:4f37650f71db6690f306e093c0da3f5c72ec7b7d93c3078d40d6997edefad06a"
                    },
                    {
                        "id": "fk:41b161059980c2cdbe22f6a07c541fe82ccb3ec9ca0f1b6cc263cc9056102921",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "toProp": "col:64b3da99c635c6269e28adeda005d212029ae5e8343bbb8b0066040ddd8790f3"
                    },
                    {
                        "id": "fk:009d1ae82edef1fff0fb8013a8075570a274048b63964263ffc4d060fe08554e",
                        "from": "table:2d99fb0e9a6ad1a0267cfc18b4fb6a424792befe5537a255fe39fc4ded05c5e8",
                        "fromProp": "col:7bb688c375e570fd12c62c8cc2195c37e9d14a86e1bd20b6398e10c5716e6ed4",
                        "to": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "toProp": "col:f2802128bb21eef06927fcdfb6c64efcdc9e804dd3d558fbff1bb714f5920532"
                    },
                    {
                        "id": "fk:ed98d610bfcfbbf15e2aa19c53ed892eab294e8658cf223ea90a08c0efba4001",
                        "from": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "fromProp": "col:284c000173664936d813a7088a91d4694669421446873c8b7ac9b5e7da88d3d7",
                        "to": "table:2eeef7b32ae63085f272a4ca18cc27ee35b5c39dd92898407354b6f519776a46",
                        "toProp": "col:0f94e05e1c24c9267a8d9aab285d950fece7e55345fc90712fe1b95e810c2738"
                    },
                    {
                        "id": "fk:2a18e94c3da11dea787629d7fa71686e7d90bc590b6b577b5aed9e938eb098f7",
                        "from": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "fromProp": "col:0ddcbcf4f87b3a1dbc644f52c56f6ea1739759d12fbf2b61de379f5abe4fac2f",
                        "to": "table:2eeef7b32ae63085f272a4ca18cc27ee35b5c39dd92898407354b6f519776a46",
                        "toProp": "col:e965e218eb773b00aa81cfe0f8d97e892168beac2c922be28b31d207a4e77358"
                    },
                    {
                        "id": "fk:1b1e62fe651376fe89e16b4507b743cf6459ab37f619d4658689ebf8c3ac9452",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:b9d757a3376f1343441e216a255f1ae6b1e78d50b92632d97f0fda831f995c5c",
                        "toProp": "col:61bff72365a25fd03d12b7a7c06c1d2321702ac62045f176964ff43f7dd24bc2"
                    },
                    {
                        "id": "fk:0444bc00f0779781712f3c2b554bda8f77a2f6657b5a6f6db5dc76b034e5aeeb",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "toProp": "col:5e8ac33bcd20bce775e1ea3edba31a60d93c18ab0f73c500fe6fa6326a812a08"
                    },
                    {
                        "id": "fk:ad04059232f2253e8e623ed410cc4591711e64556fa30f80ecbecedaa037dffa",
                        "from": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "fromProp": "col:aa9c265569d92178fd46f786ed1b88fa90072b0aff4e5b201a67e9f7cb0e25c1",
                        "to": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "toProp": "col:6daaf458cfbae6748804ce207303f4d45c7c2d9f724577a491b61f304aefd48b"
                    },
                    {
                        "id": "fk:dae7a02327cfc4389c438bce58bc629d4f5876f1047fe44d2a739baa38f45b4a",
                        "from": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "fromProp": "col:d5ce461170bbeabecb8a8fa7dbfa842d7e01e88008a8545b81b74b6da659c3d2",
                        "to": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "toProp": "col:5deefe73a0ec6d35e7ee44013f2257db3979e5f14cd70fc7526d654be8ee2708"
                    },
                    {
                        "id": "fk:db452ce111c0f6e852fa1c02491cd4f836bf0ae02cbc0128b0ca322cfff494a0",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "toProp": "col:fc2895c009ad753d1cd9bc8de18c9209007e8cf06a5f705b38e0b8365da59bbe"
                    },
                    {
                        "id": "fk:4999a1d0a20aca1172d4e37b3dd0bd9ff9c30410ead92a7d85aa95fe2d8c1300",
                        "from": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "fromProp": "col:aa9c265569d92178fd46f786ed1b88fa90072b0aff4e5b201a67e9f7cb0e25c1",
                        "to": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "toProp": "col:98803e9cbcc608242c1d72c8acbccb83c0be8fdf4a04cb587284058579da0016"
                    },
                    {
                        "id": "fk:41340d39cf7da486b53e66d31317b72e305cb7ef8dfd6cc26c75c71510fb4ef6",
                        "from": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "fromProp": "col:d5ce461170bbeabecb8a8fa7dbfa842d7e01e88008a8545b81b74b6da659c3d2",
                        "to": "table:51d161b04ac78b385002b0a42287e01b9177fde2f1d5918672a39037e33faddd",
                        "toProp": "col:7dd7c5ebfb53b0dd8c88dca2b037b7895cc438f864322d979f8af5295eade76a"
                    },
                    {
                        "id": "fk:35a822bca4e69000cdae1058cd46ef9a8688649cbfad11130c2c1b46d6660a9d",
                        "from": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "fromProp": "col:0ddcbcf4f87b3a1dbc644f52c56f6ea1739759d12fbf2b61de379f5abe4fac2f",
                        "to": "table:51d161b04ac78b385002b0a42287e01b9177fde2f1d5918672a39037e33faddd",
                        "toProp": "col:8734b3fc051698070abb9b7a5de1cae30b16136875bb31ceb02da619857f69da"
                    },
                    {
                        "id": "fk:aad16134ad6f7535c8bb35a6472ddfc5c3315cacb8f7c1d238c8f48e1d89fa00",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "toProp": "col:385ae4ddbe898dd80df2c02779784688563aa315e13b588b524747a4d80640a2"
                    },
                    {
                        "id": "fk:534efdd3b22e8efdd84c082118ff3e5aadca4b6e24b9ea7042496106fdd4f497",
                        "from": "table:e4ee0f310820336720ad1b8b5c1f27f19344fde191828f8011d53125643d63b1",
                        "fromProp": "col:0d37abd081ce788d160053cd23b14a35bdac310516d2f102d0b92d5e96eddd2a",
                        "to": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "toProp": "col:ea54d88588fcb7a343cac84b3229ef949343f84fac5857451a4d291ab13727ce"
                    },
                    {
                        "id": "fk:33fe3d0f24adf18bb0fad71740ae728fcdaee957e4eb3a7452879e8eeb609608",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:2d99fb0e9a6ad1a0267cfc18b4fb6a424792befe5537a255fe39fc4ded05c5e8",
                        "toProp": "col:e824345ca9490f4d3e689c7a018a27219f22a224b993b76554e896947b6984eb"
                    },
                    {
                        "id": "fk:c80a6ef2d67a65029ac40265a9484e052d6b818a4ada62d1ac918cc4516e57a5",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:c68185859fc936a9443b6239f2d82e494a9f450b7835f41392cc78285ed253e2",
                        "toProp": "col:4abd4013b84bad1afdb17e070f23005de4eb589f306910c63d536c76757dbb63"
                    }
                ]
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:demo_conectores",
            "name": "demo_conectores",
            "data": {
                "entities": [
                    {
                        "id": "table:2b9a5620c1bd296847e854d7b18d9d9eb41acbb6a016d416659a73323d4a236e",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:5ddae565970479da58f8a26d9213c7548bcb18f9fa7bf217ca34c2fb7f48b8a8",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:1ea24be5565dd95292ffd048da6b64eb48e9422510d43dbe91997481bf2a642a",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:ec2e331865b979d332eb107d1fa3881a6216e6f2d88b0395474af0d74021405a",
                                "text": "stock: entero"
                            },
                            {
                                "id": "col:a5dc65c586d55d5bddb42d3487cde4f20134aca624cb6256c67d775c596debae",
                                "text": "precio: real"
                            },
                            {
                                "id": "col:f0fe4afd937f4eb2d838cf02c390602c9d12a4dc4778bd484c5cce8257bdfad6",
                                "text": "disponible: booleano"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:demo_orm",
            "name": "demo_orm",
            "data": {
                "entities": [
                    {
                        "id": "table:69974c00537f4be7ea2e13f64d95b5ff28e244895570ce336c20a82b448a4f7b",
                        "title": "orm_clientes",
                        "properties": [
                            {
                                "id": "col:4927e0ac6b7543e26b3fdaac477247d93f6c1939113e051502718db1f641806f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:87a1cbbe8598e356c469200213fed7692d18ee96205e71acf0b54d13838ed117",
                                "text": "documento: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:empresa",
            "name": "empresa",
            "data": {
                "entities": [],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:empresa_demo",
            "name": "empresa_demo",
            "data": {
                "entities": [
                    {
                        "id": "table:acb8651eeb7a680dbae720d0d203b3c321de301d75687555b6e207456ab64f3b",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:ddc7e5e28a4d68bd5d76bc33cd3e39835914b9bc891ff9958e81e2ae6d25f4d1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f8783ae265982649b60f1800d768f4e90faddb4bca92212c6be6831323c09af8",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:ab375219b5aea64988ffc3f7f1789a2680f40f10532a33b330e6f40651a38ce6",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:a6b300f90a8f96efdd6db7877228ee8f1765421286593094c9caebf657cf24f0",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:1ca3954f4afa236c35781c7a87c53c74cb70d45a00b43857d94ae4025b1b6730",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:9d54476400f69e3ea61e3266ba18121a870d5947918241fa6394e6aee72fc97e",
                                "text": "empresa: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:44c3b5ea8160abdbf33f14dc067e9ca56b3a6d546dd962144318b34f0ecc3db8",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:37e44cdf2435ff94036341b9e7a2ed6bae949e054ce5ffbf424bb6d15ed03d71",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:a16c161fa53146e561ade01cd8286ae52f801b5f77a249980fda860c768b59ff",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:cafce88d5426cfb9098194be7f80930bbfee00895394506f27bc64cba496f581",
                                "text": "categoria: texto"
                            },
                            {
                                "id": "col:010d15d9be5411a4970c7a64b47be0f4c9964e0c1366a5eebf75e9c72b631434",
                                "text": "precio: texto"
                            },
                            {
                                "id": "col:f3f47a2150728d57c93aaa8d11c2e31bda5d12c6f4f975c2f29132f9cb3cae52",
                                "text": "stock: texto"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:empresaprueba2",
            "name": "empresaprueba2",
            "data": {
                "entities": [
                    {
                        "id": "table:f4167a11875bbb56e4406f68a1a8c17101f09779cba82f3397c2934f5e526f6f",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:d1c2b4c03cb3a993a0ec4426c2d7cf439af6ae634c877e9fc8c74e35fa94ecbf",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:bac83eee205a000dfaf100335edb0fdb93ce6a2375b974d8759b9d8fb52c59b8",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:d218b6f814d357cdcd68e490e1022f9c5d7ca5df6e0e4cb321110510f47ca9be",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:fcc1e100b82903fd6e2b794c6f4ab5a962f7c97896985bea17159028638859e2",
                                "text": "email: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:andrei-erp",
            "name": "andrei-erp",
            "data": {
                "entities": [
                    {
                        "id": "table:a9aaae29eb81e60070752fe8582e2482de585b5bbbeb7a080e5c4f469a2fd0b1",
                        "title": "articulosblog",
                        "properties": [
                            {
                                "id": "col:4b4872dfc27cfd9adcccd1857395cbdcda7dccf4d2905bc243258d2ecd159fd0",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f081adada385ce8278f5f0ff4e67b61bebca7922c46a397e0eba7ad353fd5c9c",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:5aa27d4d2fb058856a750ad570b810d39611e757494f3c1e12c636d035b633a5",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:5c2f58d233b93cafbf83220be28ab2a1d6e7f550a074d42300dafa6acc0626e6",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -672.3797209734598,
                        "y": -319.5420762706576
                    },
                    {
                        "id": "44c1f1dd-c20e-4d1e-84d1-658c66fba436",
                        "title": "casosdeexito",
                        "properties": [
                            {
                                "id": "311c8b4a-9259-4516-b40f-cd88db061cca",
                                "text": "id: entero"
                            },
                            {
                                "id": "dc8cb19d-a16b-45ca-baad-2b0284c73a41",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "dbb5e3ea-ae29-466e-a5e7-0d10c6b0d615",
                                "text": "texto: texto"
                            },
                            {
                                "id": "df65941f-405d-485e-ba1a-78f8b8c17f6e",
                                "text": "subtitulo: texto"
                            },
                            {
                                "id": "7b0701da-7552-4d66-b960-3d94f323c2ff",
                                "text": "imagen: texto"
                            },
                            {
                                "id": "ec0f30ed-778e-436d-8157-3bff4c2b0772",
                                "text": "categoria: texto"
                            }
                        ],
                        "categories": [
                            "marketing"
                        ],
                        "x": -253.6460840457889,
                        "y": 196.80179116654364
                    },
                    {
                        "id": "table:b45b67f9df12b4272b583d2b62c6dc74162ce430ffe2e1e24ba304a98c40ea19",
                        "title": "categorias",
                        "properties": [
                            {
                                "id": "col:cf7e037b5d83961d8d232cebe0e8d369a365cf142c43e1bdaae25e17f4206478",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:41518a79d581e748d0e186a64574f86f98072dfa6abb518d0b005f7106407374",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "produccion"
                        ],
                        "x": -575.9996748092938,
                        "y": 617.4529739669563
                    },
                    {
                        "id": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "title": "cliente",
                        "properties": [
                            {
                                "id": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:b22156a09ce84e577261faeca034b1480835eef51e5da25f08dbb45f99482c02",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:0ece592b13b1c95a0a2ce88472553958ae4986e48d29cd8610d979b17f02732c",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:b89f79c96d71760260427cc20bc85fcb21a40671a3f61cd1df358f9dcdc440e2",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:e5539aa411f164d284d8d17991ddb4289434292dcc604ff14fc8f90d6ce54fcf",
                                "text": "oportunidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "direccion",
                            "ventas"
                        ],
                        "x": 511.5772565720215,
                        "y": -104.17664511587604
                    },
                    {
                        "id": "730fbd2c-1e28-4d2a-8180-e9ade3298632",
                        "title": "clientesweb",
                        "properties": [
                            {
                                "id": "fba3bd19-928b-4e1e-ae35-fc63699950be",
                                "text": "id: entero"
                            },
                            {
                                "id": "c257fefb-6c03-4062-8fd6-68a256bde898",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "9dbca834-a790-4d3f-a80c-32d2a5ffbeee",
                                "text": "url: texto"
                            },
                            {
                                "id": "888c3e4e-ffce-4d2a-84a8-cce7379c7ee7",
                                "text": "logo: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -1016.4684860478551,
                        "y": -257.7950151345667
                    },
                    {
                        "id": "table:083b726c5c4e9415ce6d41b5ef8497d2d0e3d0a7cb69e0245d12e16d0ad18d51",
                        "title": "contabilidad",
                        "properties": [
                            {
                                "id": "col:1fc09c9d11b61a9a8b5f19067b04eb3b7e6e36fd23beb274f78b40c506ed9954",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:2832860dcf9c1e2118244545f67574cbd96147797d505ec77ad549e30ebc4da8",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:e021e3d4fa3b9108ad20cdc7f508b984c3b13b8752550575ddf051ebc4572602",
                                "text": "factura: entero"
                            },
                            {
                                "id": "col:b9edb268d1b277aa777f7fa67088b736ae4dcb97a042bce0bf1f03512a2da0d6",
                                "text": "gasto: entero"
                            },
                            {
                                "id": "col:f76febc7fc56c779051652e72beba9a1823bcb6c6a9d18658ec2d35817cf996a",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "direccion"
                        ],
                        "x": 1672.6085926305109,
                        "y": -78.4079522263801
                    },
                    {
                        "id": "table:c6b8cf3b5ebcd59484c493e3583aa6d4042c76a2d1c02dc3cff00feacc1ed326",
                        "title": "crimson_api_endpoints",
                        "properties": [
                            {
                                "id": "col:802defeb68f853eb9dc90f1a61d2896d547a8d4b5de8426c9b7a87814425fcb3",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:2539acafdc0f4e7adf89f09c54c3571b15458965d92270785820038084667fd4",
                                "text": "entidad: texto"
                            },
                            {
                                "id": "col:598e8914b73cf0db2d576272ed56dc96a52fb87d56d0896ca99d33526b49711a",
                                "text": "ruta: texto"
                            },
                            {
                                "id": "col:4b4d05c983c3d1ddaf43ef156a7109dd0a7fb82d2fbe7101aa73692d2cda7ef4",
                                "text": "__crimson_activo: entero"
                            },
                            {
                                "id": "col:3e28ee378bd91a01ae4e81520867aae376fe7fadbb7fd05fb12f53f173dfcff3",
                                "text": "campos: texto"
                            },
                            {
                                "id": "col:72bb6e52eba60ff512f368045e351e3362c82e5b698f64d2b7bbc46a891c53d6",
                                "text": "metodos: texto"
                            },
                            {
                                "id": "col:df1b708b683dcfc353fe7c0e7acaecdc21f4ae9a4904fb59b3ed6d0b3a7a8b47",
                                "text": "key_hash: texto"
                            },
                            {
                                "id": "col:a0d61ef17496b9865d76e595f80fa45ec2c7f3dfe485b4f566d7d312002c171d",
                                "text": "key_prefix: texto"
                            },
                            {
                                "id": "col:63772ad67dbf8cd8eed0287a96fba61ef9121a9c6ae378da5fa1099a4e0fcb2e",
                                "text": "creado: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1823.376844356904,
                        "y": 687.1009993686166
                    },
                    {
                        "id": "table:4b39d9a97c12bb27f8937118b7acb5ec034b21f68a104d3c2c78e25aa523b13f",
                        "title": "crimson_api_logs",
                        "properties": [
                            {
                                "id": "col:9c429fbbfcf17582c8ea7424615b0841d13dff4c3812d6563b4746fb91c4d4c9",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:b810c4992f3731dfdfe4bfa58af2e7adb8de7eb164363aad0e1c5f02af12f737",
                                "text": "ruta: texto"
                            },
                            {
                                "id": "col:aea1282d127798cb2f9ed629806e4e5c6834a761da65a80f824158db5a9b5846",
                                "text": "metodo: texto"
                            },
                            {
                                "id": "col:876406c69462725b7aa26272d10d006ee3c89640b7b6c0f243d1c22327553f91",
                                "text": "estado: entero"
                            },
                            {
                                "id": "col:84ae0d6fc23c3632e8b1ec2cc43dc61ec4df9de4fffa85fc9b4486385ad42e03",
                                "text": "fecha: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1448.5100461645986,
                        "y": 667.4502011792389
                    },
                    {
                        "id": "table:16873d4663cabde31f6fc24672a5f73ca014a764da6c929719ae1bd519df7212",
                        "title": "crimson_permissions",
                        "properties": [
                            {
                                "id": "col:114a4a408dbf4794e1bdb7e8e234e532a2d2926f589fef34e042e765c77cd662",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:a9860cb145a7b673e362cfab01ffc5b89a3d3a07700526ab8a9d532411ed37c4",
                                "text": "usuario_id: entero"
                            },
                            {
                                "id": "col:0aafc8e3d5bf2b069d0808185880b670f4b5ed93db2d72d46aa35606ec1d01e6",
                                "text": "modulo: texto"
                            },
                            {
                                "id": "col:ed6007a701bfaecaf161235287a940d553ba4e2636cf048cfefe6104e1546d9e",
                                "text": "puede_seleccionar: entero"
                            },
                            {
                                "id": "col:5a589dc35ae5151e90b211df06e465a0cdab60aacf1edb32cb8099233c4daaab",
                                "text": "puede_insertar: entero"
                            },
                            {
                                "id": "col:58453558ffa8b8c945c7171d74d321fe5793833d4c50fdaa04475ca3bdd7a4f6",
                                "text": "puede_actualizar: entero"
                            },
                            {
                                "id": "col:9466610d5f6917d39dc3411544f6ad8e7f224187a11bb185c2064ddc99a35250",
                                "text": "puede_eliminar: entero"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1406.2730829930956,
                        "y": 282.61610483156505
                    },
                    {
                        "id": "table:7b0184e921f76610b0e3561a70ede3fe8f45f8f19b6f9cc4381f75d293838153",
                        "title": "crimson_prueba_insert_120e089a",
                        "properties": [
                            {
                                "id": "col:493834f5512ce9fc82444d52bb6e71a48b44525de8892f0f0406d9d3dd22bf44",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:cf4bf83c05ace7a34d248550d4258282c129e4e69448d8736313c2427b4c2625",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1828.353799508059,
                        "y": 1178.981790903051
                    },
                    {
                        "id": "table:f23ebc8e12084a1bbd8f18e4365e51a7edcbef606159aaa4d907555b00663adc",
                        "title": "crimson_test_api_0361e24f",
                        "properties": [
                            {
                                "id": "col:4697b310487b2c0fd34e5f38b86c36f32d8bee98bffc61f2e1c2792527301a3e",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:9e749a83366550daad7a29e87d5a9258f5f157905595bdfc95556e952d39142c",
                                "text": "entidad: texto"
                            },
                            {
                                "id": "col:390a5196df5855aa2475e152ce7bf5c1977745620ff88c754adacd30287f4ec9",
                                "text": "ruta: texto"
                            },
                            {
                                "id": "col:f5c793acb28ac9a0b798b602cf60ba0a6c229aab4f84186a8a3b86aa57bb84ef",
                                "text": "__crimson_activo: texto"
                            },
                            {
                                "id": "col:751df70bd51110bce01a493eedc166ac53b09c95f7b934b64a20d6be34f90155",
                                "text": "campos: texto"
                            },
                            {
                                "id": "col:4312390c76ffbd8e1a8792538b00306e8bb80c239022bed682b571b8a7864fc0",
                                "text": "metodos: texto"
                            },
                            {
                                "id": "col:7d6301a7b794853a3e00f89d1fdef4edebc63fa6faf87f84951b95a0690284a8",
                                "text": "key_hash: texto"
                            },
                            {
                                "id": "col:1540042db26cc45e0b1c4f758fff25ef078a980862a6536f6ec5bae663e50e84",
                                "text": "key_prefix: texto"
                            },
                            {
                                "id": "col:b25c8fb405895cc375dedecd31d663f473e6aad867b8af4ffde1a0a6024dad63",
                                "text": "creado: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1113.4692548244539,
                        "y": 738.3389430310025
                    },
                    {
                        "id": "table:bd6fa3a7b80459444eda7156b0acb989335130b5132c02cfff081daae7278e38",
                        "title": "crimson_test_base64_30d12b7a",
                        "properties": [
                            {
                                "id": "col:6c295695c46a76f14bd2547f70e373c7819e78354611ad981b72561d1c761e33",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:5542fb25b3a412e92754a078ba138970829d5b85aabb9248426bbb17c10b0a75",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1452.2486942203548,
                        "y": 965.5328386734581
                    },
                    {
                        "id": "table:523b5830b86845ba45faa38c9ff8f0a1f30c8373548db24069d596eff19aba9c",
                        "title": "crimson_test_campos_d448e9e5",
                        "properties": [
                            {
                                "id": "col:d46891a49cf15a4ee1f10f019d8236dd307098c6712cd5113f03a766724e67ea",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:c7987b2ec4c64975fa042234c159c99d18276df5de5be41d857525052ab98df5",
                                "text": "campos: texto"
                            },
                            {
                                "id": "col:afbff0f2b02ace08ee7806cc894a590067e64c9007a0d0e5d53691e1b4f460be",
                                "text": "campos_api: texto"
                            },
                            {
                                "id": "col:92a85f7ce11608e4dad8b0fac4f6fce41a3303940a9d6b65e54b07374e4010aa",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1503.6366030292243,
                        "y": 1200.4156187773744
                    },
                    {
                        "id": "table:65d30a4874de94293ffa7a5019e124295abc647f8567a1a2737b7336e79ca3dd",
                        "title": "crimson_ui_config",
                        "properties": [
                            {
                                "id": "col:8db8c1cdb9cc34e936fcb853d8eb4a4dc149ecdac1fcc881c2804d1cfe7ca236",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:454746bd876acf2859160010e107f661e1e3044db15491a4ac7b5d8999f8ffae",
                                "text": "entidad: texto"
                            },
                            {
                                "id": "col:171b38170d395fd43b0f8bd11cd29bc625a85339ab95617016e4f154af855cee",
                                "text": "tipo: texto"
                            },
                            {
                                "id": "col:1d33ff20434f3ca83d1e663dd316e10a5408aa1540b21f6f288c6d2769ebc6dc",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1802.2066763543128,
                        "y": 14.090164918302484
                    },
                    {
                        "id": "table:e350c98de068bdee0522ddec3902c5baad0f59472d780e92d8318a209e904d02",
                        "title": "crimson_users",
                        "properties": [
                            {
                                "id": "col:420745a09059ad2d0a8b1d0fed8336f670671748b830e0384551c790fc5b7898",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:e8f246c259279c5223a18ef51915888df59fc4d41aba3ddbcc380587ec49fcb9",
                                "text": "username: texto"
                            },
                            {
                                "id": "col:63efb298cf1414b5c4af57c49d682f647b5f295ae93f106ddfa9fd31e46f1eec",
                                "text": "password_hash: texto"
                            },
                            {
                                "id": "col:99e9b4700085b027bd2a10b5ce0d82b5ffe935718db821d5adc091e801e7e4c4",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:e00ff771cfbbb5cdaed067fc73b539985221fd777ba362d6ab3f0c50e2b12bcd",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:3d5152cfef5e3091e9238a75c2d7a79e7f982aaa7702d1f91cea5c749102334c",
                                "text": "rol: texto"
                            },
                            {
                                "id": "col:497b9f4490556357081d93e740763400f861cf280eb642ff892408307d150c79",
                                "text": "__crimson_activo: entero"
                            },
                            {
                                "id": "col:aff476f7de762bb1b0a6a3d56ffcabc7edcb34203b06fef459cc5aefdc6bad55",
                                "text": "creado_en: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1817.7354414766992,
                        "y": 277.3153436414552
                    },
                    {
                        "id": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "title": "facturas",
                        "properties": [
                            {
                                "id": "col:b570b1f21f5b92816ee2b0b0d8ee628e09f158f99196f631def0c638c05c4968",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:698d68df96e60041255cc87a1d5b81fd77d0dc350d2a8d41883810f2e2e15e0c",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:0378e15a0930e76a30f0f2039539574b3024634f9bd6fad9dabfdc241082af92",
                                "text": "numero: texto"
                            },
                            {
                                "id": "col:fc51e9d389dc59de87539590f1c6dc99dd73685eb54ed9468f6f40b3a5fea709",
                                "text": "pedido: entero"
                            },
                            {
                                "id": "col:9ed66750013865393d25b289f3001dea829f49bfc8ce2c44586e90e8522983fc",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:745fb152588b5b7e07cc86e83fea4cc1b39bb4db208eb3cf331ea70c56abb204",
                                "text": "producto: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "direccion"
                        ],
                        "x": 1103.4832680117524,
                        "y": -216.82617107812587
                    },
                    {
                        "id": "table:222334a317d8d1aa352b61b245b0155a3634c5e7fd635c3ac99e7e081cdb41a9",
                        "title": "gastos",
                        "properties": [
                            {
                                "id": "col:e075ad95c72900686bfdf97989d606b63a0fe57325b29457f86544d12f708d67",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f49ce6f09da771fe73afb92ad2d5530e1a41039ad0a751c0817cecb75e157905",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:b84d98713604cdd3578aeaa8ea5235e2ac17d6ddb894f6f7962e91a3b5f5401a",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:fb59a49e2f366c7507e100b292fd55f56a5331330be8907b289a62eebdbb360c",
                                "text": "importe: decimal"
                            },
                            {
                                "id": "col:704223afd152f618faf2c773ab4a9e294fa59545683d9bf62bd36c654ee89732",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 1203.3270623007513,
                        "y": 279.6089382994556
                    },
                    {
                        "id": "762c0957-c660-432b-8f9b-871ea1486028",
                        "title": "modalidades",
                        "properties": [
                            {
                                "id": "2c7294af-caf9-4ae0-a01c-a2f2cd351543",
                                "text": "id: entero"
                            },
                            {
                                "id": "881dc1fb-a6b0-43bc-85e0-bbbaf632bd07",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -269.9804899804752,
                        "y": -134.48921242620443
                    },
                    {
                        "id": "ae40fde4-6c4e-4e8d-b10c-2d5a1a673e1b",
                        "title": "oportunidades",
                        "properties": [
                            {
                                "id": "d7597bc5-a655-4284-aa25-0b67632ff811",
                                "text": "id: entero"
                            },
                            {
                                "id": "bd40c7e0-4edd-4770-8c82-9df305f41d3b",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "424202dc-9db9-4f7b-b7a1-afe90ca823c2",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "16a41f0c-2e59-4bef-b079-b543f1c4980b",
                                "text": "email: texto"
                            },
                            {
                                "id": "47874e09-053f-4c42-8f95-8fe420a63604",
                                "text": "suscriptor: entero"
                            },
                            {
                                "id": "59a998ab-ac32-4aac-9572-9cfe35ba3c41",
                                "text": "estado: texto"
                            },
                            {
                                "id": "e9a9f5d6-fd08-4bb7-b107-44552ee8a9c8",
                                "text": "promocion: texto"
                            },
                            {
                                "id": "747190aa-f3ea-4ccc-acea-2217ab5f29d6",
                                "text": "nombre y apellidos: texto"
                            },
                            {
                                "id": "bd6ccedb-582c-49c3-aac0-053d34a5dd49",
                                "text": "empresa: texto"
                            },
                            {
                                "id": "5cd15316-9ff9-4928-815c-111b33c67204",
                                "text": "tipodeproyecto: texto"
                            },
                            {
                                "id": "de88fc3a-c1a8-492a-ad82-8a80159aeb8f",
                                "text": "mensaje: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "ventas"
                        ],
                        "x": 109.18771346790967,
                        "y": 30.95596805275362
                    },
                    {
                        "id": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:b876464ae5e8ca78e9b043b1206395a67e2937b9df59f469df67b001ea2513c5",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:0d5437e97852cb420b08e4fe2e05088aa0b2f6ec3273c46f4795bca719cfff1d",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:b856bbad8548d2d7a7fbe135316c032c2e31edc60900e68d936d4ce70e611613",
                                "text": "productos: entero"
                            },
                            {
                                "id": "col:b1a0c5f1a7b95b28d13ea1d311d20c9e6956911ff1ac7fa5147eef8f3f57538f",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:8f01f653aef2922291f2d05b2c34f9e96103207d90cae44447c556fc6fa5d8ed",
                                "text": "cantidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "ventas"
                        ],
                        "x": 628.438164754106,
                        "y": 337.36560706713567
                    },
                    {
                        "id": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:799513c629d3c82f0aee4b0a24828be03a3ce6dd5a0d55cd16c60f6f5941cf88",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:c7a3c809d68c3a748dcacdd100c09e7d3500a6a6ed5edcd4ea00d60d2b6fdbae",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:41fd4f7d824107b90ac4109b14ef84fc8fcf66db83ec9d4d0498985bc464a8c6",
                                "text": "categoria: entero"
                            },
                            {
                                "id": "col:d1cf9b22853c56ee2d655dd84ba1d2f1839a7cb3250c90c2ba9d410552f7e580",
                                "text": "precio: decimal"
                            },
                            {
                                "id": "4a0f74fd-d4c2-4f35-ac5a-df86ab229861",
                                "text": "color: texto"
                            },
                            {
                                "id": "9ce27964-5642-498b-8afc-ec1666e9a1e1",
                                "text": "informacion: texto"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "marketing",
                            "produccion",
                            "soporte",
                            "ventas"
                        ],
                        "x": 58.85253647156492,
                        "y": 697.0139275470088
                    },
                    {
                        "id": "73d35ee9-489e-4269-98ca-eab9557c628a",
                        "title": "testimonios",
                        "properties": [
                            {
                                "id": "093e8665-c763-410d-93a8-31d0d817ada9",
                                "text": "id: entero"
                            },
                            {
                                "id": "88c10493-2c8d-4449-ad75-d3cb8ca5cbb3",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "5c6917d9-ec2d-4e42-b643-8b1961a36d7f",
                                "text": "contenido: texto"
                            },
                            {
                                "id": "07d4fdc7-4acc-4e0f-9ab1-e9a8ffb51117",
                                "text": "empresa: texto"
                            },
                            {
                                "id": "1461b55e-c4af-4a10-81d1-4e73c39fa764",
                                "text": "cargo: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -707.1465208190964,
                        "y": 53.111811446962875
                    },
                    {
                        "id": "table:3d4dc463ab2e12eca8bf43f2d6c64769eccfb6dfddc3c2b17e017b193fd0b3c2",
                        "title": "tickets",
                        "properties": [
                            {
                                "id": "col:eb9c6d7c9608203a6663a2170dec19cb5f8447ab4990296045c2395a0521ff08",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:1b69b7d8eb160a292990c741c583b924626e03f2170843b4210982da52939905",
                                "text": "producto: entero"
                            },
                            {
                                "id": "col:761d5ea39d55f8362ab49d5f0199ebe0b3488f66521d2a2b2c9552796c6139aa",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:a53960cac8d2feb9ba850edf201d9ee8658033cef17245f417a5d154ec9e741f",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:7e0c855e389926bae10837f412e092c397e76702119d7daa6ca8233ebeaed18f",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:890610a3daf6eedc0d37be15ae74209380f1b192882d6b8db04263e1f2ba29f1",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:5d399ab3e2eb18cf093e3b29e26e892dac12a67b24892520a4c23ab8940cb20f",
                                "text": "estado: entero"
                            }
                        ],
                        "categories": [
                            "soporte"
                        ],
                        "x": 717.7510912744019,
                        "y": 1117.8430776878963
                    }
                ],
                "links": [
                    {
                        "id": "fk:89052c2280b65cb353bd975f83b985b064fcce251cb7ada876b1fbf87f7db243",
                        "from": "table:b45b67f9df12b4272b583d2b62c6dc74162ce430ffe2e1e24ba304a98c40ea19",
                        "fromProp": "col:cf7e037b5d83961d8d232cebe0e8d369a365cf142c43e1bdaae25e17f4206478",
                        "to": "44c1f1dd-c20e-4d1e-84d1-658c66fba436",
                        "toProp": "ec0f30ed-778e-436d-8157-3bff4c2b0772"
                    },
                    {
                        "id": "fk:175ecfa8863234d7347f595dcf0ed435279a6031d1034369aa8ff78aefa1f791",
                        "from": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "fromProp": "col:b570b1f21f5b92816ee2b0b0d8ee628e09f158f99196f631def0c638c05c4968",
                        "to": "table:083b726c5c4e9415ce6d41b5ef8497d2d0e3d0a7cb69e0245d12e16d0ad18d51",
                        "toProp": "col:e021e3d4fa3b9108ad20cdc7f508b984c3b13b8752550575ddf051ebc4572602"
                    },
                    {
                        "id": "fk:824e5e63520e0a6af64b2e5edba14d81e97cc0d64bd611067002095fb0f7244f",
                        "from": "table:222334a317d8d1aa352b61b245b0155a3634c5e7fd635c3ac99e7e081cdb41a9",
                        "fromProp": "col:e075ad95c72900686bfdf97989d606b63a0fe57325b29457f86544d12f708d67",
                        "to": "table:083b726c5c4e9415ce6d41b5ef8497d2d0e3d0a7cb69e0245d12e16d0ad18d51",
                        "toProp": "col:b9edb268d1b277aa777f7fa67088b736ae4dcb97a042bce0bf1f03512a2da0d6"
                    },
                    {
                        "id": "fk:82c81e584e696c16efe1be57c40e299dc21640eb0cee2558daa6c5b88dd00c4d",
                        "from": "table:e350c98de068bdee0522ddec3902c5baad0f59472d780e92d8318a209e904d02",
                        "fromProp": "col:420745a09059ad2d0a8b1d0fed8336f670671748b830e0384551c790fc5b7898",
                        "to": "table:16873d4663cabde31f6fc24672a5f73ca014a764da6c929719ae1bd519df7212",
                        "toProp": "col:a9860cb145a7b673e362cfab01ffc5b89a3d3a07700526ab8a9d532411ed37c4"
                    },
                    {
                        "id": "fk:7cb81eaea59e005d789b36e1c38ea045e26bfba5bfaabd98c9ef67fe08eaebd9",
                        "from": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "fromProp": "col:b876464ae5e8ca78e9b043b1206395a67e2937b9df59f469df67b001ea2513c5",
                        "to": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "toProp": "col:fc51e9d389dc59de87539590f1c6dc99dd73685eb54ed9468f6f40b3a5fea709"
                    },
                    {
                        "id": "fk:a335a8c969681fcfcab4aaa0f602c80f47542ee1d5bbdc29dc78c200c079dbd7",
                        "from": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "fromProp": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                        "to": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "toProp": "col:9ed66750013865393d25b289f3001dea829f49bfc8ce2c44586e90e8522983fc"
                    },
                    {
                        "id": "fk:6e481a8c4b5e16366f26115ca3e9398d9f2436b88ddd0449a337afb67715d765",
                        "from": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "fromProp": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                        "to": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "toProp": "col:745fb152588b5b7e07cc86e83fea4cc1b39bb4db208eb3cf331ea70c56abb204"
                    },
                    {
                        "id": "fk:3d463669e71940571c9e6a0eaa47e79e4041b144c7c9dbbbcdd3f98ceae19e57",
                        "from": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "fromProp": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                        "to": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "toProp": "col:0d5437e97852cb420b08e4fe2e05088aa0b2f6ec3273c46f4795bca719cfff1d"
                    },
                    {
                        "id": "fk:d2c3e72fc5ac161941019deccf802955a86fda3928bdfccb386c4bd4b1e1e390",
                        "from": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "fromProp": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                        "to": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "toProp": "col:b856bbad8548d2d7a7fbe135316c032c2e31edc60900e68d936d4ce70e611613"
                    },
                    {
                        "id": "fk:24964b47c97b1fb735a692b019beb07c0b0b0182faeaf06cfacf1d1dcac8f6a7",
                        "from": "table:b45b67f9df12b4272b583d2b62c6dc74162ce430ffe2e1e24ba304a98c40ea19",
                        "fromProp": "col:cf7e037b5d83961d8d232cebe0e8d369a365cf142c43e1bdaae25e17f4206478",
                        "to": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "toProp": "col:41fd4f7d824107b90ac4109b14ef84fc8fcf66db83ec9d4d0498985bc464a8c6"
                    },
                    {
                        "id": "fk:546e47ff1915b37dc16c1940b1bd869892e3b33b7e72f0391021f8c786c73509",
                        "from": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "fromProp": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                        "to": "table:3d4dc463ab2e12eca8bf43f2d6c64769eccfb6dfddc3c2b17e017b193fd0b3c2",
                        "toProp": "col:1b69b7d8eb160a292990c741c583b924626e03f2170843b4210982da52939905"
                    },
                    {
                        "id": "fk:3c4edbbc4daa2bddd3354c546e4e46a5443cfbfba4f314d05381e3fb79cd1f53",
                        "from": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "fromProp": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                        "to": "table:3d4dc463ab2e12eca8bf43f2d6c64769eccfb6dfddc3c2b17e017b193fd0b3c2",
                        "toProp": "col:761d5ea39d55f8362ab49d5f0199ebe0b3488f66521d2a2b2c9552796c6139aa"
                    }
                ]
            },
            "view": {
                "x": 553.6154958219115,
                "y": -202.0842210263728,
                "z": 0.7557920107233191
            },
            "collectionLabels": {
                "marketing": "marketing",
                "produccion": "produccion",
                "administracion": "administracion",
                "ventas": "ventas",
                "soporte": "soporte",
                "direccion": "direccion",
                "it": "IT",
                "web": "web"
            }
        },
        {
            "id": "db:prueba_php_completa",
            "name": "prueba_php_completa",
            "data": {
                "entities": [
                    {
                        "id": "table:855dd8c6b6a3cd6532a12dd5fd219b2e6d15a0d497b245536aa28cec153c39a0",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:92b440068dff6368eaca544a2bb5c12492fd774f26dbf2ef6aa4ec486e2d4608",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:98a81802085a0340470f388621f6f27f4d2e84c5481fdbdd999cd8a1cd00185a",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:1f0911d73b30dac53b07cd4c3379fdb5aa2527d13f9eb9e3f906d8322083543a",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:ab69e2687d1390ebf078d486637234ae7043c0b046f37a14c7da415448513b4f",
                                "text": "saldo: decimal"
                            },
                            {
                                "id": "col:2801197ae247bb974e557be8cd4f57fe2ad7435f8537116965f9f4ffba158510",
                                "text": "alta: fecha"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:b3611caf9e72bf105b09be19ae7677512d31a092765c8ccb0ce8ddc0e687b1ea",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:8cb719b3b71e809807b7b637bc4b46a4be1f2b1078cee4c7668fd1958080df41",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:c9d359a0c316ecbcac4cb5aade2473afe3ea6e3f2b8dad5897cf48457e472c03",
                                "text": "id_cliente: entero"
                            },
                            {
                                "id": "col:bf307344316fe9255411b4cf2aa258d266b68167800307a5080c2e8b26753cd9",
                                "text": "total: decimal"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 100
                    }
                ],
                "links": [
                    {
                        "id": "fk:10f916df052789d4cb724d467d18905bb37caa8450f7ce8c83d677efeebad862",
                        "from": "table:855dd8c6b6a3cd6532a12dd5fd219b2e6d15a0d497b245536aa28cec153c39a0",
                        "fromProp": "col:92b440068dff6368eaca544a2bb5c12492fd774f26dbf2ef6aa4ec486e2d4608",
                        "to": "table:b3611caf9e72bf105b09be19ae7677512d31a092765c8ccb0ce8ddc0e687b1ea",
                        "toProp": "col:c9d359a0c316ecbcac4cb5aade2473afe3ea6e3f2b8dad5897cf48457e472c03"
                    }
                ]
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:pruebaenclase",
            "name": "pruebaenclase",
            "data": {
                "entities": [
                    {
                        "id": "table:d9844eb5d64983a192c874681f0d16c83b3f9d3a33269e92ac22f4d0ac807474",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:73d366bdbbc054286bcf45cc7efc3659bfb7dd011f87a7956fb5200ad71224fc",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:a63fe1d5ea4020e2f5fd8eb18fc86821ebf33d30766f1348bd6925886b14936e",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:f0747721e4e6c25a2b06ec25f9e0146b203fb010f7db84cc6dc92868b83ad18c",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:3911f6b913b1f8326e39013c0b6e1043674b75276ff3af670f403d87d7481bfc",
                                "text": "telefono: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:tienda",
            "name": "tienda",
            "data": {
                "entities": [
                    {
                        "id": "table:462919262da3779225850d758e291de75418b3519ff73594c9028ae412d2a171",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:59d0ab9540ef906d54d37bdae7d79279948008b1962b397b3937a846f08b72d0",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f6ff56a2788a704019784933b01d8619a0d9604b06c9317ca043cc5d5de2afe0",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:9071781e292c71f03bd3dd3635f2c7c426b4f0021a8b4c4187776d2f35366d8b",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:0222b3b6d9b37197cbf8323f0b2fe8718b9c81138d14c1c4962cbf692d3e93fc",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:ccc5095640fb0e1b1d10fa53fb2a8fbc80bfd7bdb9d8a7a085dc87078cf19eb5",
                                "text": "edad: texto"
                            },
                            {
                                "id": "col:670f4acfa8cff8cd95769151e941781817aff604065a489ccaab0285d1dc37ca",
                                "text": "ciudad: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:visual_4973b2b8cf682405",
            "name": "visual_4973b2b8cf682405",
            "data": {
                "entities": [
                    {
                        "id": "table:7203900107d4647b472e640ec95286ea5b8544f45e37390c44e5cd24f435d190",
                        "title": "articulosblog",
                        "properties": [
                            {
                                "id": "col:8b4bcdc1d5c51ba4aee0be993d4731de59a7b9794b26c9422f41c29d912f4707",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:9a17b1e37af049ffe4ea3e0cfd047154d29d3e347d6fee230224066424eb89c6",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:75ad4ba91e5d16c2aac2991049d1b4090b632b09f132e8cd750b35041cf1da28",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:c7413844b2f10e3d2b628df899fc9519a14b9d0881e91034fcaad1130d2234fe",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "marketing"
                        ],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "title": "cliente",
                        "properties": [
                            {
                                "id": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:235e5aa3b90eba9cccaca6cdb762f7c968d61b639dfb5679adba6c0c178b0e61",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:f0a433ab3f8b6e34509e037eb7084e9dcdc4b60f99ce83456f768796851c78e2",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:38b5326ae6f001c5a435955eb7773f885e2fc25da70b8753b73e64d6def191a6",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:9df6efb5e0aab796a276faa9347914714db7b932514b90fbf738e66ff3829831",
                                "text": "oportunidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "ventas"
                        ],
                        "x": 430,
                        "y": 100
                    },
                    {
                        "id": "table:d157d0a290599d66afe6c75aa8d51d68f7d151e5a51e208bf8cd6f28b51b80a2",
                        "title": "contabilidad",
                        "properties": [
                            {
                                "id": "col:6d10b1950a3fd2978c91b87e68b7f37b02175888d48235946ca5e7cea4b38bf9",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:ee58bea74022322152c544f7c31603fae397354b0cc26400c2da02c72b74433a",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:59315222dd0939f3deed699c1e813e13723aa60c044313b4c5d5bd8ecab5527a",
                                "text": "factura: entero"
                            },
                            {
                                "id": "col:69ab292141d33adf59dc2e33eaa54ff6170f009edd4a7c534304b02fe6fc1653",
                                "text": "gasto: entero"
                            },
                            {
                                "id": "col:07be062f291d2f893aa75d3cb9b177ebb1b37f11765bc11fc9d55d833640e6d4",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 760,
                        "y": 100
                    },
                    {
                        "id": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "title": "facturas",
                        "properties": [
                            {
                                "id": "col:e45ad0bbf0d0ad0e10ef002ee4b035c35562d0a98c8bb593afd013182209c47d",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:83fd58d8e6a4fd3e43d065b7bd84c054b2084d5336500c25380283b11c36248e",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:77e3a33a8f3212f8a4c881cea22a4db6acd4af8c2540aa9eb1c9f935f5e70587",
                                "text": "numero: texto"
                            },
                            {
                                "id": "col:f86c78bd4d3bffb91765fd0ec28c36425ff9c9ab745705a6aac99f24d7cc1df0",
                                "text": "pedido: entero"
                            },
                            {
                                "id": "col:ff88e60ea22702e27e29be9df2820acf8c844ec2c9081fcda71f073423a61f4b",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:ef076c846a42db522ac2dd06bec6e8beb601ad2c25e8474e502314e5aae529a4",
                                "text": "producto: entero"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 1090,
                        "y": 100
                    },
                    {
                        "id": "table:7321bacbbe46b4fba4d9d341283af719aed3152b17c93ecad8b69d0cf8b7a684",
                        "title": "gastos",
                        "properties": [
                            {
                                "id": "col:3380c0e8948b5c9770741561c6dbb25511fd1d6f4c5e1674541eb1dc51746c10",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:dc8b1898796bb04f10d51d71e8eb63c89248dfdafc7b99e8992552002d323403",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:3747f0693755ec68007726d49f367cf2ecf66447fe0cba58b6fdaa3932490b94",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:7f56af84c54f295a73b5cd66beb710526ee378a79c46f995d7ac52ee3a61936a",
                                "text": "importe: decimal"
                            },
                            {
                                "id": "col:3abfd272c5d44cce828da682845903363ed78fe67e22d6d3b588cbfb8c1a36f2",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 100,
                        "y": 420
                    },
                    {
                        "id": "table:11208d1ccde861991f9a21a77378e3bffed5fd5167de177aae3eaaf9ee908ef9",
                        "title": "oportunidad",
                        "properties": [
                            {
                                "id": "col:0f820cb6e8ce609b5b2d629d5d35967d61c8e78716180b7d3b3b88b3d6a33195",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:dd4894994258a9ed16fdb235f00a58dce4faaae2e9ddbc46a0a4aaa3a39464e6",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:86adcac5fc2f7addfa542cbe6e05ea3bab16754f76e11ea2c967923aa6fceafa",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:5b6cdef0cca714f9c690002dffa26141abbb2490ab42d68995ed1d30fcb05380",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:e71f513bfcf3cbb45ed21dd47e38c39c8b409132b7c9be708fd55d405d448570",
                                "text": "suscriptor: entero"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "ventas"
                        ],
                        "x": 430,
                        "y": 420
                    },
                    {
                        "id": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:e9030bf17f0904815e54757794aec821f605d7aeefd52b64b6c459649dcd57e8",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:bdd116e09d44e3baab4ec9128e05814c857f3ab92509a75a0190b452bfef0f52",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:ef30367b512299775465e1522b3d7d38857e4862516b8fbb05a4423b0f1e6f15",
                                "text": "productos: entero"
                            },
                            {
                                "id": "col:fbf106fca11cec99ca2cf1713ba07b3b05f1826817b1a71ec00fb391e2eb459e",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:75a8834fe9b985af253ad7f52272c8b3137e81f4b5990e31ab2c57a07fd1f187",
                                "text": "cantidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "ventas"
                        ],
                        "x": 760,
                        "y": 420
                    },
                    {
                        "id": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:e57dfd2ad60d9b582d2a2eb619c73c9895e90e857f37e5072cefad9d29b9dca6",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:540be5759d232f619df42c000404d87f6917d5e7006c8ac13dcdd077783f9842",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:67569189416c88909af31d5be5c8d7392b720f236bec816d74bcc0ae5d146575",
                                "text": "categoria: entero"
                            },
                            {
                                "id": "col:945d684a7bdf55435731aab32ac8b44a1aa2f4e59f93d3f04702443cc9a9f585",
                                "text": "precio: decimal"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "marketing",
                            "produccion",
                            "soporte",
                            "ventas"
                        ],
                        "x": 1090,
                        "y": 420
                    },
                    {
                        "id": "table:d18ffaa2537314f435dd5acc1e1a24337071cdef29927360cc25d536cf2a48de",
                        "title": "suscriptores",
                        "properties": [
                            {
                                "id": "col:e80ebeab88a5aecccc7a6cd52bf53e016367392031f16fab93910a4f6350fd17",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:7590bb1aecbd82161dadedf2635b0f1a862e94bc16c402e94bbd7c37b3203c70",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:46ac973930f2daa095da085f5bb1ede91f9d3d20893a4330773b491bb0652944",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:f8d37539c9f41ac3ed0f4b080befa3344d3faf589f5be4001b5f6ec19bbfd51c",
                                "text": "empresa: texto"
                            }
                        ],
                        "categories": [
                            "marketing"
                        ],
                        "x": 100,
                        "y": 740
                    },
                    {
                        "id": "table:c3944bedbe6b39bca0cb6cc521643277450bb942ca58fa28d271ec8c33415395",
                        "title": "tickets",
                        "properties": [
                            {
                                "id": "col:03b67c96b165f91ff27b087286fa03d85923224e970604d37e98c8699d07d60c",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:5395ebf7c0759bf369bb8d3da55a3d49ffd407d4e76b8683777361051174ad56",
                                "text": "producto: entero"
                            },
                            {
                                "id": "col:f67eae32c584d6466f6af3626672dd3f944171988ece1f16ab064474c6f591be",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:634eb3eedbfbe4c642d8e9db8e4fff3a61843b569f9ea92febcf81c87fdf1684",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:1576e1f942771c57caea14e746d2231df794df4b2dec36a68cd3f22a851f21a6",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:6f7b9558c595d52efd6dad2fa12c288ae4e752eb8d9f87515fe34a63e405a17c",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:f99c08f42d040993a4ad6ceac0b2e3be6fa20c1bb93006240b051b33425e4472",
                                "text": "estado: entero"
                            }
                        ],
                        "categories": [
                            "soporte"
                        ],
                        "x": 430,
                        "y": 740
                    }
                ],
                "links": [
                    {
                        "id": "fk:e7a041bb8155ce688a6f2868da4d8cb327be24d1bb96c806f3e94eda0453d8d8",
                        "from": "table:11208d1ccde861991f9a21a77378e3bffed5fd5167de177aae3eaaf9ee908ef9",
                        "fromProp": "col:0f820cb6e8ce609b5b2d629d5d35967d61c8e78716180b7d3b3b88b3d6a33195",
                        "to": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "toProp": "col:9df6efb5e0aab796a276faa9347914714db7b932514b90fbf738e66ff3829831"
                    },
                    {
                        "id": "fk:2d7da32654b4ff212305836202a46eedb92b9d3e9d5f200a30b43a95a87e4131",
                        "from": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "fromProp": "col:e45ad0bbf0d0ad0e10ef002ee4b035c35562d0a98c8bb593afd013182209c47d",
                        "to": "table:d157d0a290599d66afe6c75aa8d51d68f7d151e5a51e208bf8cd6f28b51b80a2",
                        "toProp": "col:59315222dd0939f3deed699c1e813e13723aa60c044313b4c5d5bd8ecab5527a"
                    },
                    {
                        "id": "fk:53ca7c31be1250fd66ecd8f73ac3b02206758e9d639e8aa518040f75fcbdf830",
                        "from": "table:7321bacbbe46b4fba4d9d341283af719aed3152b17c93ecad8b69d0cf8b7a684",
                        "fromProp": "col:3380c0e8948b5c9770741561c6dbb25511fd1d6f4c5e1674541eb1dc51746c10",
                        "to": "table:d157d0a290599d66afe6c75aa8d51d68f7d151e5a51e208bf8cd6f28b51b80a2",
                        "toProp": "col:69ab292141d33adf59dc2e33eaa54ff6170f009edd4a7c534304b02fe6fc1653"
                    },
                    {
                        "id": "fk:34e9f63c6311df24839f317415e854446680527f2b9dafe72c5803924f833582",
                        "from": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "fromProp": "col:e9030bf17f0904815e54757794aec821f605d7aeefd52b64b6c459649dcd57e8",
                        "to": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "toProp": "col:f86c78bd4d3bffb91765fd0ec28c36425ff9c9ab745705a6aac99f24d7cc1df0"
                    },
                    {
                        "id": "fk:d23ee5f76ac3bd4226f9ea37f8f40116a2a268446b7c734490acc22e89ba04df",
                        "from": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "fromProp": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                        "to": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "toProp": "col:ff88e60ea22702e27e29be9df2820acf8c844ec2c9081fcda71f073423a61f4b"
                    },
                    {
                        "id": "fk:83620f955b9e41b074f8090b1ef9b0fcd2f278b8246de7a38a8f135c89a5c2eb",
                        "from": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "fromProp": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                        "to": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "toProp": "col:ef076c846a42db522ac2dd06bec6e8beb601ad2c25e8474e502314e5aae529a4"
                    },
                    {
                        "id": "fk:c90a8b6675e0952757032ef5c5406db2a4d77f622035c79663dfce6771368903",
                        "from": "table:d18ffaa2537314f435dd5acc1e1a24337071cdef29927360cc25d536cf2a48de",
                        "fromProp": "col:e80ebeab88a5aecccc7a6cd52bf53e016367392031f16fab93910a4f6350fd17",
                        "to": "table:11208d1ccde861991f9a21a77378e3bffed5fd5167de177aae3eaaf9ee908ef9",
                        "toProp": "col:e71f513bfcf3cbb45ed21dd47e38c39c8b409132b7c9be708fd55d405d448570"
                    },
                    {
                        "id": "fk:b88ee64268a1fdbeee5948dccd18ebf7f2a9f7272580d93b5655685e6a4b6677",
                        "from": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "fromProp": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                        "to": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "toProp": "col:bdd116e09d44e3baab4ec9128e05814c857f3ab92509a75a0190b452bfef0f52"
                    },
                    {
                        "id": "fk:ba8c15637d3fe9053fbdcf6a05bcbd99e5af58be0ad38aacb20207903a2fc82f",
                        "from": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "fromProp": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                        "to": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "toProp": "col:ef30367b512299775465e1522b3d7d38857e4862516b8fbb05a4423b0f1e6f15"
                    },
                    {
                        "id": "fk:d8d49c260f1f0774c3ce6e08f622e0a22397530c88f8e6e1f3f33da8c8da3ccd",
                        "from": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "fromProp": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                        "to": "table:c3944bedbe6b39bca0cb6cc521643277450bb942ca58fa28d271ec8c33415395",
                        "toProp": "col:5395ebf7c0759bf369bb8d3da55a3d49ffd407d4e76b8683777361051174ad56"
                    },
                    {
                        "id": "fk:db0f635968d0c4c8938803e5b20ce5f2bc3425a55c66e906a70510a5434c3776",
                        "from": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "fromProp": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                        "to": "table:c3944bedbe6b39bca0cb6cc521643277450bb942ca58fa28d271ec8c33415395",
                        "toProp": "col:f67eae32c584d6466f6af3626672dd3f944171988ece1f16ab064474c6f591be"
                    }
                ]
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:visual_768b93c975ebf39a",
            "name": "visual_768b93c975ebf39a",
            "data": {
                "entities": [],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        }
    ]
}
```
**projects.linux-backup.json**
```json
{
    "activeId": "db:andrei-erp",
    "projects": [
        {
            "id": "db:clientes",
            "name": "clientes",
            "data": {
                "entities": [],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:crimson",
            "name": "crimson",
            "data": {
                "entities": [
                    {
                        "id": "table:32f58fcdd17090c3f8797bd372cc640f91d4ba18de8c3ba12e6b119d1f49d9f7",
                        "title": "__crimson_permissions",
                        "properties": [
                            {
                                "id": "col:7a44456268ce2721bdf5601cd951ff7c20365f65d379aec92c096e70c431e3ca",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:19ac2cdf502789cf2d8e0d831a4fab58f15c8800f67bd3c718c605fa4c47f4b1",
                                "text": "usuario_id: entero"
                            },
                            {
                                "id": "col:1799d1dbe63b0e1e273a6a2c69d721da0332763858c71d0a4c545da1b7b9a73e",
                                "text": "modulo: texto"
                            },
                            {
                                "id": "col:b9e69462775e315b20b3e049e4046cc89661c014b02e02f459c4b8178f4c5582",
                                "text": "puede_seleccionar: entero"
                            },
                            {
                                "id": "col:f211591914748bd04bc7004ded5a8b6862f48563e33de1d9734d4a05baeae302",
                                "text": "puede_insertar: entero"
                            },
                            {
                                "id": "col:699ec30ead74efb2b59dd6072ad682bf7206317b28db3a1861cd84011ce3e19c",
                                "text": "puede_actualizar: entero"
                            },
                            {
                                "id": "col:2d9899e7e22c7ad36fb7108d9abf8ce4bdf624bf83ae0478b49e8f623ceffa3b",
                                "text": "puede_eliminar: entero"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:9f530282eb0f16dfb31a825c392c47d2ce3b2c330d3962e89370f5f175eb5fb7",
                        "title": "__crimson_users",
                        "properties": [
                            {
                                "id": "col:3b24ca36bac44290879c874d7f5de32dc767599d6b8a5ca64646cf74dc7f25c9",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:3766ea3176d7c97d2190c09dce2eb7142c60c7057d45c733e47ddd64949532ae",
                                "text": "username: texto"
                            },
                            {
                                "id": "col:5fef2e1a7d15b7f7585cde7751463e7612b8842a744a19a7666039d3c63d44c9",
                                "text": "password_hash: texto"
                            },
                            {
                                "id": "col:18c3057b482f542464d51d318f80730c2e1700ff7fd864f7fbe7e9be0ec77cab",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:aff1917fcdae6f5465eda763a0f19d1f2544c334bc9909f86773a1f604de40f8",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:21c36e298bf0b92638209e5b22d19b9510cf59df3e4187e9706cf0f9e0cc3a40",
                                "text": "rol: texto"
                            },
                            {
                                "id": "col:a7fc35d87079ba9b4b298509a077481404c5e18c4594eecaf595405e633fcfde",
                                "text": "__crimson_activo: entero"
                            },
                            {
                                "id": "col:49a5c5375598245541a8442da1bd709f62cb0d4a49bbb351a6e8b2604e5049a5",
                                "text": "creado_en: texto"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 100
                    },
                    {
                        "id": "table:e4ee0f310820336720ad1b8b5c1f27f19344fde191828f8011d53125643d63b1",
                        "title": "categorias",
                        "properties": [
                            {
                                "id": "col:0d37abd081ce788d160053cd23b14a35bdac310516d2f102d0b92d5e96eddd2a",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:84296000136162b9fbb03d7036e0fd8fae5f168d2645c1427a51020eb4d019c0",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:64035dfb2a8243c68878852e6a5c74d95b24b13dab75f7764aa325189fab9d3d",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [],
                        "x": 760,
                        "y": 100
                    },
                    {
                        "id": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:aa9c265569d92178fd46f786ed1b88fa90072b0aff4e5b201a67e9f7cb0e25c1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:4f37650f71db6690f306e093c0da3f5c72ec7b7d93c3078d40d6997edefad06a",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:a008f281523934a638ea2cdf73f5e652f8080c3e72ba3304aa31c341890a5eab",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:eb627c851d7c29cd8f7ece61bd25d84fa627741c69a1619fd7165cd853905b66",
                                "text": "cif: texto"
                            },
                            {
                                "id": "col:8020c01ac2232178d6eef9ffe97d95d2de6937b2b99e02ec5ae0f8993a196ca4",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:69d53f23292837e5f8ddf4ac2694dd082db93cd59a0d5b349b30477def7c642d",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:a10b1787f8dfb052c290ea354a174ebf40e1bbcd99f51ba55f60baf4a74496b3",
                                "text": "direccion: texto"
                            },
                            {
                                "id": "col:af49893aaaf814f59b3fd1b28941be17c3671577a9506cf287c780541091cb4d",
                                "text": "codigopostal: texto"
                            }
                        ],
                        "categories": [],
                        "x": 1090,
                        "y": 100
                    },
                    {
                        "id": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "title": "compras",
                        "properties": [
                            {
                                "id": "col:284c000173664936d813a7088a91d4694669421446873c8b7ac9b5e7da88d3d7",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:64b3da99c635c6269e28adeda005d212029ae5e8343bbb8b0066040ddd8790f3",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:f2802128bb21eef06927fcdfb6c64efcdc9e804dd3d558fbff1bb714f5920532",
                                "text": "proveedor_id: entero"
                            },
                            {
                                "id": "col:a624001b39f7a1a11174000f4551b44d66d3005aeb02752858829a5bfd64f5d2",
                                "text": "fecha: texto"
                            },
                            {
                                "id": "col:51d809acc64dcea4bbb6a1843475ac0b49d704125affb70f796ed0096ed03d06",
                                "text": "total: real"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 420
                    },
                    {
                        "id": "table:2eeef7b32ae63085f272a4ca18cc27ee35b5c39dd92898407354b6f519776a46",
                        "title": "compras_lineas",
                        "properties": [
                            {
                                "id": "col:43c96b84db6d0c338a00d3be2c7758768b117dbc67f1d75f31cc77f07a6f7502",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:0f94e05e1c24c9267a8d9aab285d950fece7e55345fc90712fe1b95e810c2738",
                                "text": "compra_id: entero"
                            },
                            {
                                "id": "col:e965e218eb773b00aa81cfe0f8d97e892168beac2c922be28b31d207a4e77358",
                                "text": "producto_id: entero"
                            },
                            {
                                "id": "col:c08e98367b39a3962fccc089bc99a086ab1ea9f327c34a615117a204ca5b241f",
                                "text": "cantidad: real"
                            },
                            {
                                "id": "col:b13114146a56b47687aafddabd6e7774966753c9d089a5bdde4d0dd77349494d",
                                "text": "precio: real"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 420
                    },
                    {
                        "id": "table:b9d757a3376f1343441e216a255f1ae6b1e78d50b92632d97f0fda831f995c5c",
                        "title": "empleados",
                        "properties": [
                            {
                                "id": "col:b4bf3bf22a068afa038d954ceff2c9fcb38707170bb739ac860f4bf6861d2e8e",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:61bff72365a25fd03d12b7a7c06c1d2321702ac62045f176964ff43f7dd24bc2",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:c21fad3f144b7fffe762fb72ca89cb8409c008a4bf361ab831b20b7f2e48355c",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:147aac3dbdbb3c1843dcfea1933cd5f1433f7c3b6d60b5af284f573f69a80d3c",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:2d422de09058607a40d276e05a42145bb04315b680991d717011257bcfc646c0",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:283e3d26f550c4a4de5e09849bb0940d6714ec5b39e903fa35d27bc41fd095a1",
                                "text": "puesto: texto"
                            }
                        ],
                        "categories": [],
                        "x": 760,
                        "y": 420
                    },
                    {
                        "id": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "title": "empresas",
                        "properties": [
                            {
                                "id": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:08bbd4d386fc0b7b175254763766d22f2eca0f50f375fadda49b1f732517d699",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:a582cef0a3f1636de48737bd4aa564ca9082b2a79150a4486f0765da47de7d7e",
                                "text": "cif: texto"
                            },
                            {
                                "id": "col:2ad1e88f2da188677ef43f8f0fbe465ca1e95778c3c0fc6627fdf3fcf6e13fc5",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:188092d8dc6185ad801db3845b68a04cab7a3e17adcac60a27e232266ff4b8c8",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:9da3cae63c8d002ca798be22227ab8ae9cdae10185cffa64ea67113c1ab0c796",
                                "text": "direccion: texto"
                            }
                        ],
                        "categories": [],
                        "x": 1090,
                        "y": 420
                    },
                    {
                        "id": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "title": "facturas",
                        "properties": [
                            {
                                "id": "col:11038f9fcaae9f639ad483c0b667047fe2c1385a70529d170b56eec77e3517a1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:5e8ac33bcd20bce775e1ea3edba31a60d93c18ab0f73c500fe6fa6326a812a08",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:6daaf458cfbae6748804ce207303f4d45c7c2d9f724577a491b61f304aefd48b",
                                "text": "cliente_id: entero"
                            },
                            {
                                "id": "col:5deefe73a0ec6d35e7ee44013f2257db3979e5f14cd70fc7526d654be8ee2708",
                                "text": "pedido_id: entero"
                            },
                            {
                                "id": "col:e6fa8f923a56a0ecc0e1b3c0d9d0344f8dea9912cdac51e11fdda51146869068",
                                "text": "numero: texto"
                            },
                            {
                                "id": "col:de9e89125f09e550faf91a73b23e3811d93a4094d77bcdf740bfb46ab7a0a289",
                                "text": "fecha: texto"
                            },
                            {
                                "id": "col:eaaea8b321ab3c836d557688849854cd6a8cf975f380876b1b910fcd63b77cea",
                                "text": "estado: texto"
                            },
                            {
                                "id": "col:a7fc70d9e45ce15f65e1dfb6cb8c175aec75e43d956f8df54c4972729f534e0d",
                                "text": "total: real"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 740
                    },
                    {
                        "id": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:d5ce461170bbeabecb8a8fa7dbfa842d7e01e88008a8545b81b74b6da659c3d2",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:fc2895c009ad753d1cd9bc8de18c9209007e8cf06a5f705b38e0b8365da59bbe",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:98803e9cbcc608242c1d72c8acbccb83c0be8fdf4a04cb587284058579da0016",
                                "text": "cliente_id: entero"
                            },
                            {
                                "id": "col:f4a254efc89e9ec9f1b89168005515393f441b79e6e2f1f69261c9751b5eeb95",
                                "text": "fecha: texto"
                            },
                            {
                                "id": "col:94706a070924fb10748669829f0b0f9acaf9d115a8a927bd9bb43bcc7d46e157",
                                "text": "estado: texto"
                            },
                            {
                                "id": "col:9e6e025ea4522f6acf5a782900412ca29927ae1d4a70f399f7f92970ff7c1127",
                                "text": "total: real"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 740
                    },
                    {
                        "id": "table:51d161b04ac78b385002b0a42287e01b9177fde2f1d5918672a39037e33faddd",
                        "title": "pedidos_lineas",
                        "properties": [
                            {
                                "id": "col:9558c8043a4fbbf5fd0164b45daa57bf592f8db0745b04690ae907f747baee7f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:7dd7c5ebfb53b0dd8c88dca2b037b7895cc438f864322d979f8af5295eade76a",
                                "text": "pedido_id: entero"
                            },
                            {
                                "id": "col:8734b3fc051698070abb9b7a5de1cae30b16136875bb31ceb02da619857f69da",
                                "text": "producto_id: entero"
                            },
                            {
                                "id": "col:2af94c108752b570d52d6f49649abbf42de24ad0c6975a3982c5e7d0a7da78d0",
                                "text": "cantidad: real"
                            },
                            {
                                "id": "col:aa2c80722b653700b17b71842d8e73f16f9ed617c839c2f4c8b519f033d9e8f5",
                                "text": "precio: real"
                            }
                        ],
                        "categories": [],
                        "x": 760,
                        "y": 740
                    },
                    {
                        "id": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:0ddcbcf4f87b3a1dbc644f52c56f6ea1739759d12fbf2b61de379f5abe4fac2f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:385ae4ddbe898dd80df2c02779784688563aa315e13b588b524747a4d80640a2",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:ea54d88588fcb7a343cac84b3229ef949343f84fac5857451a4d291ab13727ce",
                                "text": "categoria_id: entero"
                            },
                            {
                                "id": "col:ad2ec2134dcfc47d0b1c7c713171d0f8bfdc8430503f34b1a731d67e2070500b",
                                "text": "codigo: texto"
                            },
                            {
                                "id": "col:16d915ec44b0c0973f4dbd3c0ddbca7721432a13b49edd9967e2652fd6f3ecd0",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:967a29243e70fa9f7ea40c504e8d702c92b43b880435f04ff528d79cb288366f",
                                "text": "precio: real"
                            },
                            {
                                "id": "col:1480ae703a88161db511a4e174ee470b75da140212cd48a8910a1da2297a464c",
                                "text": "stock: real"
                            }
                        ],
                        "categories": [],
                        "x": 1090,
                        "y": 740
                    },
                    {
                        "id": "table:2d99fb0e9a6ad1a0267cfc18b4fb6a424792befe5537a255fe39fc4ded05c5e8",
                        "title": "proveedores",
                        "properties": [
                            {
                                "id": "col:7bb688c375e570fd12c62c8cc2195c37e9d14a86e1bd20b6398e10c5716e6ed4",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:e824345ca9490f4d3e689c7a018a27219f22a224b993b76554e896947b6984eb",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:9eefb8fe9b1ec1763320daf58b32d2ad305340eed8e6cca2fdca5854b84cc131",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:e7a9cea77a25a72e1d29cd0aabc8e600b486acb38b599576638f47a6942069ae",
                                "text": "cif: texto"
                            },
                            {
                                "id": "col:61efc246146aed5a324f510dbe46d2645b05b31f87ce3e9b39d50bdc3b50f0de",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:bb1fd2f7ca1a269987bde10fb0116b2088616b2c2ea715f912539a1a1dd364ce",
                                "text": "telefono: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 1060
                    },
                    {
                        "id": "table:c68185859fc936a9443b6239f2d82e494a9f450b7835f41392cc78285ed253e2",
                        "title": "usuarios",
                        "properties": [
                            {
                                "id": "col:4526317066a8b76a715a4a63a179736c0fd46023ca8daccb607d3e1f6dc76bc7",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:4abd4013b84bad1afdb17e070f23005de4eb589f306910c63d536c76757dbb63",
                                "text": "empresa_id: entero"
                            },
                            {
                                "id": "col:0a1192368db1a895e030b765f642518bd32f9e5f4505046458a0af6b7ff1bd42",
                                "text": "username: texto"
                            },
                            {
                                "id": "col:46c5ec51bef3d95c4ca87c17c5a327a9d72f66a3b3463b718c37d1a6341db7e1",
                                "text": "password_hash: texto"
                            },
                            {
                                "id": "col:6353ceaea0fb79f84e118fb6736f5c4fd91e01afc9f74a30a9785c7c25f15d09",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:22d962e538a93bdeda79649b687428f04e0513832c3014376200cf2fe18dc163",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:a7739c7486e98aea29615ab2292ee5b0a88f897613192085c1eb165d250078d0",
                                "text": "__crimson_activo: entero"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 1060
                    }
                ],
                "links": [
                    {
                        "id": "fk:f100e8055129d3272af3996ae1f52f2ab92fcccbe28e1b397c1909d87c6af93c",
                        "from": "table:9f530282eb0f16dfb31a825c392c47d2ce3b2c330d3962e89370f5f175eb5fb7",
                        "fromProp": "col:3b24ca36bac44290879c874d7f5de32dc767599d6b8a5ca64646cf74dc7f25c9",
                        "to": "table:32f58fcdd17090c3f8797bd372cc640f91d4ba18de8c3ba12e6b119d1f49d9f7",
                        "toProp": "col:19ac2cdf502789cf2d8e0d831a4fab58f15c8800f67bd3c718c605fa4c47f4b1"
                    },
                    {
                        "id": "fk:364b9d70f2f13027ee8cdeab55bfda8fe40a1e4d5a50c47f97af6fcc614f67ac",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:e4ee0f310820336720ad1b8b5c1f27f19344fde191828f8011d53125643d63b1",
                        "toProp": "col:84296000136162b9fbb03d7036e0fd8fae5f168d2645c1427a51020eb4d019c0"
                    },
                    {
                        "id": "fk:bfb2bf88368df5504a89e1d4661c2dc24b3f12604086755d07f5f6b18eda163c",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "toProp": "col:4f37650f71db6690f306e093c0da3f5c72ec7b7d93c3078d40d6997edefad06a"
                    },
                    {
                        "id": "fk:41b161059980c2cdbe22f6a07c541fe82ccb3ec9ca0f1b6cc263cc9056102921",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "toProp": "col:64b3da99c635c6269e28adeda005d212029ae5e8343bbb8b0066040ddd8790f3"
                    },
                    {
                        "id": "fk:009d1ae82edef1fff0fb8013a8075570a274048b63964263ffc4d060fe08554e",
                        "from": "table:2d99fb0e9a6ad1a0267cfc18b4fb6a424792befe5537a255fe39fc4ded05c5e8",
                        "fromProp": "col:7bb688c375e570fd12c62c8cc2195c37e9d14a86e1bd20b6398e10c5716e6ed4",
                        "to": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "toProp": "col:f2802128bb21eef06927fcdfb6c64efcdc9e804dd3d558fbff1bb714f5920532"
                    },
                    {
                        "id": "fk:ed98d610bfcfbbf15e2aa19c53ed892eab294e8658cf223ea90a08c0efba4001",
                        "from": "table:0cb39bb8f6a1b5979876f77ef2b0d9677a71b7a82325ae77d62124419a321049",
                        "fromProp": "col:284c000173664936d813a7088a91d4694669421446873c8b7ac9b5e7da88d3d7",
                        "to": "table:2eeef7b32ae63085f272a4ca18cc27ee35b5c39dd92898407354b6f519776a46",
                        "toProp": "col:0f94e05e1c24c9267a8d9aab285d950fece7e55345fc90712fe1b95e810c2738"
                    },
                    {
                        "id": "fk:2a18e94c3da11dea787629d7fa71686e7d90bc590b6b577b5aed9e938eb098f7",
                        "from": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "fromProp": "col:0ddcbcf4f87b3a1dbc644f52c56f6ea1739759d12fbf2b61de379f5abe4fac2f",
                        "to": "table:2eeef7b32ae63085f272a4ca18cc27ee35b5c39dd92898407354b6f519776a46",
                        "toProp": "col:e965e218eb773b00aa81cfe0f8d97e892168beac2c922be28b31d207a4e77358"
                    },
                    {
                        "id": "fk:1b1e62fe651376fe89e16b4507b743cf6459ab37f619d4658689ebf8c3ac9452",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:b9d757a3376f1343441e216a255f1ae6b1e78d50b92632d97f0fda831f995c5c",
                        "toProp": "col:61bff72365a25fd03d12b7a7c06c1d2321702ac62045f176964ff43f7dd24bc2"
                    },
                    {
                        "id": "fk:0444bc00f0779781712f3c2b554bda8f77a2f6657b5a6f6db5dc76b034e5aeeb",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "toProp": "col:5e8ac33bcd20bce775e1ea3edba31a60d93c18ab0f73c500fe6fa6326a812a08"
                    },
                    {
                        "id": "fk:ad04059232f2253e8e623ed410cc4591711e64556fa30f80ecbecedaa037dffa",
                        "from": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "fromProp": "col:aa9c265569d92178fd46f786ed1b88fa90072b0aff4e5b201a67e9f7cb0e25c1",
                        "to": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "toProp": "col:6daaf458cfbae6748804ce207303f4d45c7c2d9f724577a491b61f304aefd48b"
                    },
                    {
                        "id": "fk:dae7a02327cfc4389c438bce58bc629d4f5876f1047fe44d2a739baa38f45b4a",
                        "from": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "fromProp": "col:d5ce461170bbeabecb8a8fa7dbfa842d7e01e88008a8545b81b74b6da659c3d2",
                        "to": "table:0deab7ab0a7eb65de3ed8a0759c62a285f2429424e52537d5f93d5797e0e8a1b",
                        "toProp": "col:5deefe73a0ec6d35e7ee44013f2257db3979e5f14cd70fc7526d654be8ee2708"
                    },
                    {
                        "id": "fk:db452ce111c0f6e852fa1c02491cd4f836bf0ae02cbc0128b0ca322cfff494a0",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "toProp": "col:fc2895c009ad753d1cd9bc8de18c9209007e8cf06a5f705b38e0b8365da59bbe"
                    },
                    {
                        "id": "fk:4999a1d0a20aca1172d4e37b3dd0bd9ff9c30410ead92a7d85aa95fe2d8c1300",
                        "from": "table:e5e47482c74139ab808cc75023f8e87dba5b3ab5a7576a0164223c000911b655",
                        "fromProp": "col:aa9c265569d92178fd46f786ed1b88fa90072b0aff4e5b201a67e9f7cb0e25c1",
                        "to": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "toProp": "col:98803e9cbcc608242c1d72c8acbccb83c0be8fdf4a04cb587284058579da0016"
                    },
                    {
                        "id": "fk:41340d39cf7da486b53e66d31317b72e305cb7ef8dfd6cc26c75c71510fb4ef6",
                        "from": "table:c80110250c85326ec5dd3e0b9f865fa34b79fd8c53f3504b13b76d471bef2ba7",
                        "fromProp": "col:d5ce461170bbeabecb8a8fa7dbfa842d7e01e88008a8545b81b74b6da659c3d2",
                        "to": "table:51d161b04ac78b385002b0a42287e01b9177fde2f1d5918672a39037e33faddd",
                        "toProp": "col:7dd7c5ebfb53b0dd8c88dca2b037b7895cc438f864322d979f8af5295eade76a"
                    },
                    {
                        "id": "fk:35a822bca4e69000cdae1058cd46ef9a8688649cbfad11130c2c1b46d6660a9d",
                        "from": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "fromProp": "col:0ddcbcf4f87b3a1dbc644f52c56f6ea1739759d12fbf2b61de379f5abe4fac2f",
                        "to": "table:51d161b04ac78b385002b0a42287e01b9177fde2f1d5918672a39037e33faddd",
                        "toProp": "col:8734b3fc051698070abb9b7a5de1cae30b16136875bb31ceb02da619857f69da"
                    },
                    {
                        "id": "fk:aad16134ad6f7535c8bb35a6472ddfc5c3315cacb8f7c1d238c8f48e1d89fa00",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "toProp": "col:385ae4ddbe898dd80df2c02779784688563aa315e13b588b524747a4d80640a2"
                    },
                    {
                        "id": "fk:534efdd3b22e8efdd84c082118ff3e5aadca4b6e24b9ea7042496106fdd4f497",
                        "from": "table:e4ee0f310820336720ad1b8b5c1f27f19344fde191828f8011d53125643d63b1",
                        "fromProp": "col:0d37abd081ce788d160053cd23b14a35bdac310516d2f102d0b92d5e96eddd2a",
                        "to": "table:4b7019f77790de34d27213d3d3410002b60390ab6c476d3cb6dc163cb7b1c1cc",
                        "toProp": "col:ea54d88588fcb7a343cac84b3229ef949343f84fac5857451a4d291ab13727ce"
                    },
                    {
                        "id": "fk:33fe3d0f24adf18bb0fad71740ae728fcdaee957e4eb3a7452879e8eeb609608",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:2d99fb0e9a6ad1a0267cfc18b4fb6a424792befe5537a255fe39fc4ded05c5e8",
                        "toProp": "col:e824345ca9490f4d3e689c7a018a27219f22a224b993b76554e896947b6984eb"
                    },
                    {
                        "id": "fk:c80a6ef2d67a65029ac40265a9484e052d6b818a4ada62d1ac918cc4516e57a5",
                        "from": "table:96a2b2604fd46487f7f066ac9decd8cd8b197b046e619a870117efc56f43a59f",
                        "fromProp": "col:9d6342b60e46384313ba95f3577066904063fe0c65bc08afdaea8a53f2f369a2",
                        "to": "table:c68185859fc936a9443b6239f2d82e494a9f450b7835f41392cc78285ed253e2",
                        "toProp": "col:4abd4013b84bad1afdb17e070f23005de4eb589f306910c63d536c76757dbb63"
                    }
                ]
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:demo_conectores",
            "name": "demo_conectores",
            "data": {
                "entities": [
                    {
                        "id": "table:2b9a5620c1bd296847e854d7b18d9d9eb41acbb6a016d416659a73323d4a236e",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:5ddae565970479da58f8a26d9213c7548bcb18f9fa7bf217ca34c2fb7f48b8a8",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:1ea24be5565dd95292ffd048da6b64eb48e9422510d43dbe91997481bf2a642a",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:ec2e331865b979d332eb107d1fa3881a6216e6f2d88b0395474af0d74021405a",
                                "text": "stock: entero"
                            },
                            {
                                "id": "col:a5dc65c586d55d5bddb42d3487cde4f20134aca624cb6256c67d775c596debae",
                                "text": "precio: real"
                            },
                            {
                                "id": "col:f0fe4afd937f4eb2d838cf02c390602c9d12a4dc4778bd484c5cce8257bdfad6",
                                "text": "disponible: booleano"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:demo_orm",
            "name": "demo_orm",
            "data": {
                "entities": [
                    {
                        "id": "table:69974c00537f4be7ea2e13f64d95b5ff28e244895570ce336c20a82b448a4f7b",
                        "title": "orm_clientes",
                        "properties": [
                            {
                                "id": "col:4927e0ac6b7543e26b3fdaac477247d93f6c1939113e051502718db1f641806f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:87a1cbbe8598e356c469200213fed7692d18ee96205e71acf0b54d13838ed117",
                                "text": "documento: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:empresa",
            "name": "empresa",
            "data": {
                "entities": [],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:empresa_demo",
            "name": "empresa_demo",
            "data": {
                "entities": [
                    {
                        "id": "table:acb8651eeb7a680dbae720d0d203b3c321de301d75687555b6e207456ab64f3b",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:ddc7e5e28a4d68bd5d76bc33cd3e39835914b9bc891ff9958e81e2ae6d25f4d1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f8783ae265982649b60f1800d768f4e90faddb4bca92212c6be6831323c09af8",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:ab375219b5aea64988ffc3f7f1789a2680f40f10532a33b330e6f40651a38ce6",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:a6b300f90a8f96efdd6db7877228ee8f1765421286593094c9caebf657cf24f0",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:1ca3954f4afa236c35781c7a87c53c74cb70d45a00b43857d94ae4025b1b6730",
                                "text": "telefono: texto"
                            },
                            {
                                "id": "col:9d54476400f69e3ea61e3266ba18121a870d5947918241fa6394e6aee72fc97e",
                                "text": "empresa: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:44c3b5ea8160abdbf33f14dc067e9ca56b3a6d546dd962144318b34f0ecc3db8",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:37e44cdf2435ff94036341b9e7a2ed6bae949e054ce5ffbf424bb6d15ed03d71",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:a16c161fa53146e561ade01cd8286ae52f801b5f77a249980fda860c768b59ff",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:cafce88d5426cfb9098194be7f80930bbfee00895394506f27bc64cba496f581",
                                "text": "categoria: texto"
                            },
                            {
                                "id": "col:010d15d9be5411a4970c7a64b47be0f4c9964e0c1366a5eebf75e9c72b631434",
                                "text": "precio: texto"
                            },
                            {
                                "id": "col:f3f47a2150728d57c93aaa8d11c2e31bda5d12c6f4f975c2f29132f9cb3cae52",
                                "text": "stock: texto"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:empresaprueba2",
            "name": "empresaprueba2",
            "data": {
                "entities": [
                    {
                        "id": "table:f4167a11875bbb56e4406f68a1a8c17101f09779cba82f3397c2934f5e526f6f",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:d1c2b4c03cb3a993a0ec4426c2d7cf439af6ae634c877e9fc8c74e35fa94ecbf",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:bac83eee205a000dfaf100335edb0fdb93ce6a2375b974d8759b9d8fb52c59b8",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:d218b6f814d357cdcd68e490e1022f9c5d7ca5df6e0e4cb321110510f47ca9be",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:fcc1e100b82903fd6e2b794c6f4ab5a962f7c97896985bea17159028638859e2",
                                "text": "email: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:andrei-erp",
            "name": "andrei-erp",
            "data": {
                "entities": [
                    {
                        "id": "table:a9aaae29eb81e60070752fe8582e2482de585b5bbbeb7a080e5c4f469a2fd0b1",
                        "title": "articulosblog",
                        "properties": [
                            {
                                "id": "col:4b4872dfc27cfd9adcccd1857395cbdcda7dccf4d2905bc243258d2ecd159fd0",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f081adada385ce8278f5f0ff4e67b61bebca7922c46a397e0eba7ad353fd5c9c",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:5aa27d4d2fb058856a750ad570b810d39611e757494f3c1e12c636d035b633a5",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:5c2f58d233b93cafbf83220be28ab2a1d6e7f550a074d42300dafa6acc0626e6",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -672.3797209734598,
                        "y": -319.5420762706576
                    },
                    {
                        "id": "44c1f1dd-c20e-4d1e-84d1-658c66fba436",
                        "title": "casosdeexito",
                        "properties": [
                            {
                                "id": "311c8b4a-9259-4516-b40f-cd88db061cca",
                                "text": "id: entero"
                            },
                            {
                                "id": "dc8cb19d-a16b-45ca-baad-2b0284c73a41",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "dbb5e3ea-ae29-466e-a5e7-0d10c6b0d615",
                                "text": "texto: texto"
                            },
                            {
                                "id": "df65941f-405d-485e-ba1a-78f8b8c17f6e",
                                "text": "subtitulo: texto"
                            },
                            {
                                "id": "7b0701da-7552-4d66-b960-3d94f323c2ff",
                                "text": "imagen: texto"
                            },
                            {
                                "id": "ec0f30ed-778e-436d-8157-3bff4c2b0772",
                                "text": "categoria: texto"
                            }
                        ],
                        "categories": [
                            "marketing"
                        ],
                        "x": -253.6460840457889,
                        "y": 196.80179116654364
                    },
                    {
                        "id": "table:b45b67f9df12b4272b583d2b62c6dc74162ce430ffe2e1e24ba304a98c40ea19",
                        "title": "categorias",
                        "properties": [
                            {
                                "id": "col:cf7e037b5d83961d8d232cebe0e8d369a365cf142c43e1bdaae25e17f4206478",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:41518a79d581e748d0e186a64574f86f98072dfa6abb518d0b005f7106407374",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "produccion"
                        ],
                        "x": -575.9996748092938,
                        "y": 617.4529739669563
                    },
                    {
                        "id": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "title": "cliente",
                        "properties": [
                            {
                                "id": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:b22156a09ce84e577261faeca034b1480835eef51e5da25f08dbb45f99482c02",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:0ece592b13b1c95a0a2ce88472553958ae4986e48d29cd8610d979b17f02732c",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:b89f79c96d71760260427cc20bc85fcb21a40671a3f61cd1df358f9dcdc440e2",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:e5539aa411f164d284d8d17991ddb4289434292dcc604ff14fc8f90d6ce54fcf",
                                "text": "oportunidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "direccion",
                            "ventas"
                        ],
                        "x": 511.5772565720215,
                        "y": -104.17664511587604
                    },
                    {
                        "id": "730fbd2c-1e28-4d2a-8180-e9ade3298632",
                        "title": "clientesweb",
                        "properties": [
                            {
                                "id": "fba3bd19-928b-4e1e-ae35-fc63699950be",
                                "text": "id: entero"
                            },
                            {
                                "id": "c257fefb-6c03-4062-8fd6-68a256bde898",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "9dbca834-a790-4d3f-a80c-32d2a5ffbeee",
                                "text": "url: texto"
                            },
                            {
                                "id": "888c3e4e-ffce-4d2a-84a8-cce7379c7ee7",
                                "text": "logo: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -1016.4684860478551,
                        "y": -257.7950151345667
                    },
                    {
                        "id": "table:083b726c5c4e9415ce6d41b5ef8497d2d0e3d0a7cb69e0245d12e16d0ad18d51",
                        "title": "contabilidad",
                        "properties": [
                            {
                                "id": "col:1fc09c9d11b61a9a8b5f19067b04eb3b7e6e36fd23beb274f78b40c506ed9954",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:2832860dcf9c1e2118244545f67574cbd96147797d505ec77ad549e30ebc4da8",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:e021e3d4fa3b9108ad20cdc7f508b984c3b13b8752550575ddf051ebc4572602",
                                "text": "factura: entero"
                            },
                            {
                                "id": "col:b9edb268d1b277aa777f7fa67088b736ae4dcb97a042bce0bf1f03512a2da0d6",
                                "text": "gasto: entero"
                            },
                            {
                                "id": "col:f76febc7fc56c779051652e72beba9a1823bcb6c6a9d18658ec2d35817cf996a",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "direccion"
                        ],
                        "x": 1672.6085926305109,
                        "y": -78.4079522263801
                    },
                    {
                        "id": "table:c6b8cf3b5ebcd59484c493e3583aa6d4042c76a2d1c02dc3cff00feacc1ed326",
                        "title": "crimson_api_endpoints",
                        "properties": [
                            {
                                "id": "col:802defeb68f853eb9dc90f1a61d2896d547a8d4b5de8426c9b7a87814425fcb3",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:2539acafdc0f4e7adf89f09c54c3571b15458965d92270785820038084667fd4",
                                "text": "entidad: texto"
                            },
                            {
                                "id": "col:598e8914b73cf0db2d576272ed56dc96a52fb87d56d0896ca99d33526b49711a",
                                "text": "ruta: texto"
                            },
                            {
                                "id": "col:4b4d05c983c3d1ddaf43ef156a7109dd0a7fb82d2fbe7101aa73692d2cda7ef4",
                                "text": "__crimson_activo: entero"
                            },
                            {
                                "id": "col:3e28ee378bd91a01ae4e81520867aae376fe7fadbb7fd05fb12f53f173dfcff3",
                                "text": "campos: texto"
                            },
                            {
                                "id": "col:72bb6e52eba60ff512f368045e351e3362c82e5b698f64d2b7bbc46a891c53d6",
                                "text": "metodos: texto"
                            },
                            {
                                "id": "col:df1b708b683dcfc353fe7c0e7acaecdc21f4ae9a4904fb59b3ed6d0b3a7a8b47",
                                "text": "key_hash: texto"
                            },
                            {
                                "id": "col:a0d61ef17496b9865d76e595f80fa45ec2c7f3dfe485b4f566d7d312002c171d",
                                "text": "key_prefix: texto"
                            },
                            {
                                "id": "col:63772ad67dbf8cd8eed0287a96fba61ef9121a9c6ae378da5fa1099a4e0fcb2e",
                                "text": "creado: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1823.376844356904,
                        "y": 687.1009993686166
                    },
                    {
                        "id": "table:4b39d9a97c12bb27f8937118b7acb5ec034b21f68a104d3c2c78e25aa523b13f",
                        "title": "crimson_api_logs",
                        "properties": [
                            {
                                "id": "col:9c429fbbfcf17582c8ea7424615b0841d13dff4c3812d6563b4746fb91c4d4c9",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:b810c4992f3731dfdfe4bfa58af2e7adb8de7eb164363aad0e1c5f02af12f737",
                                "text": "ruta: texto"
                            },
                            {
                                "id": "col:aea1282d127798cb2f9ed629806e4e5c6834a761da65a80f824158db5a9b5846",
                                "text": "metodo: texto"
                            },
                            {
                                "id": "col:876406c69462725b7aa26272d10d006ee3c89640b7b6c0f243d1c22327553f91",
                                "text": "estado: entero"
                            },
                            {
                                "id": "col:84ae0d6fc23c3632e8b1ec2cc43dc61ec4df9de4fffa85fc9b4486385ad42e03",
                                "text": "fecha: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1448.5100461645986,
                        "y": 667.4502011792389
                    },
                    {
                        "id": "table:16873d4663cabde31f6fc24672a5f73ca014a764da6c929719ae1bd519df7212",
                        "title": "crimson_permissions",
                        "properties": [
                            {
                                "id": "col:114a4a408dbf4794e1bdb7e8e234e532a2d2926f589fef34e042e765c77cd662",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:a9860cb145a7b673e362cfab01ffc5b89a3d3a07700526ab8a9d532411ed37c4",
                                "text": "usuario_id: entero"
                            },
                            {
                                "id": "col:0aafc8e3d5bf2b069d0808185880b670f4b5ed93db2d72d46aa35606ec1d01e6",
                                "text": "modulo: texto"
                            },
                            {
                                "id": "col:ed6007a701bfaecaf161235287a940d553ba4e2636cf048cfefe6104e1546d9e",
                                "text": "puede_seleccionar: entero"
                            },
                            {
                                "id": "col:5a589dc35ae5151e90b211df06e465a0cdab60aacf1edb32cb8099233c4daaab",
                                "text": "puede_insertar: entero"
                            },
                            {
                                "id": "col:58453558ffa8b8c945c7171d74d321fe5793833d4c50fdaa04475ca3bdd7a4f6",
                                "text": "puede_actualizar: entero"
                            },
                            {
                                "id": "col:9466610d5f6917d39dc3411544f6ad8e7f224187a11bb185c2064ddc99a35250",
                                "text": "puede_eliminar: entero"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1406.2730829930956,
                        "y": 282.61610483156505
                    },
                    {
                        "id": "table:7b0184e921f76610b0e3561a70ede3fe8f45f8f19b6f9cc4381f75d293838153",
                        "title": "crimson_prueba_insert_120e089a",
                        "properties": [
                            {
                                "id": "col:493834f5512ce9fc82444d52bb6e71a48b44525de8892f0f0406d9d3dd22bf44",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:cf4bf83c05ace7a34d248550d4258282c129e4e69448d8736313c2427b4c2625",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1828.353799508059,
                        "y": 1178.981790903051
                    },
                    {
                        "id": "table:f23ebc8e12084a1bbd8f18e4365e51a7edcbef606159aaa4d907555b00663adc",
                        "title": "crimson_test_api_0361e24f",
                        "properties": [
                            {
                                "id": "col:4697b310487b2c0fd34e5f38b86c36f32d8bee98bffc61f2e1c2792527301a3e",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:9e749a83366550daad7a29e87d5a9258f5f157905595bdfc95556e952d39142c",
                                "text": "entidad: texto"
                            },
                            {
                                "id": "col:390a5196df5855aa2475e152ce7bf5c1977745620ff88c754adacd30287f4ec9",
                                "text": "ruta: texto"
                            },
                            {
                                "id": "col:f5c793acb28ac9a0b798b602cf60ba0a6c229aab4f84186a8a3b86aa57bb84ef",
                                "text": "__crimson_activo: texto"
                            },
                            {
                                "id": "col:751df70bd51110bce01a493eedc166ac53b09c95f7b934b64a20d6be34f90155",
                                "text": "campos: texto"
                            },
                            {
                                "id": "col:4312390c76ffbd8e1a8792538b00306e8bb80c239022bed682b571b8a7864fc0",
                                "text": "metodos: texto"
                            },
                            {
                                "id": "col:7d6301a7b794853a3e00f89d1fdef4edebc63fa6faf87f84951b95a0690284a8",
                                "text": "key_hash: texto"
                            },
                            {
                                "id": "col:1540042db26cc45e0b1c4f758fff25ef078a980862a6536f6ec5bae663e50e84",
                                "text": "key_prefix: texto"
                            },
                            {
                                "id": "col:b25c8fb405895cc375dedecd31d663f473e6aad867b8af4ffde1a0a6024dad63",
                                "text": "creado: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1113.4692548244539,
                        "y": 738.3389430310025
                    },
                    {
                        "id": "table:bd6fa3a7b80459444eda7156b0acb989335130b5132c02cfff081daae7278e38",
                        "title": "crimson_test_base64_30d12b7a",
                        "properties": [
                            {
                                "id": "col:6c295695c46a76f14bd2547f70e373c7819e78354611ad981b72561d1c761e33",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:5542fb25b3a412e92754a078ba138970829d5b85aabb9248426bbb17c10b0a75",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1452.2486942203548,
                        "y": 965.5328386734581
                    },
                    {
                        "id": "table:523b5830b86845ba45faa38c9ff8f0a1f30c8373548db24069d596eff19aba9c",
                        "title": "crimson_test_campos_d448e9e5",
                        "properties": [
                            {
                                "id": "col:d46891a49cf15a4ee1f10f019d8236dd307098c6712cd5113f03a766724e67ea",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:c7987b2ec4c64975fa042234c159c99d18276df5de5be41d857525052ab98df5",
                                "text": "campos: texto"
                            },
                            {
                                "id": "col:afbff0f2b02ace08ee7806cc894a590067e64c9007a0d0e5d53691e1b4f460be",
                                "text": "campos_api: texto"
                            },
                            {
                                "id": "col:92a85f7ce11608e4dad8b0fac4f6fce41a3303940a9d6b65e54b07374e4010aa",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1503.6366030292243,
                        "y": 1200.4156187773744
                    },
                    {
                        "id": "table:65d30a4874de94293ffa7a5019e124295abc647f8567a1a2737b7336e79ca3dd",
                        "title": "crimson_ui_config",
                        "properties": [
                            {
                                "id": "col:8db8c1cdb9cc34e936fcb853d8eb4a4dc149ecdac1fcc881c2804d1cfe7ca236",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:454746bd876acf2859160010e107f661e1e3044db15491a4ac7b5d8999f8ffae",
                                "text": "entidad: texto"
                            },
                            {
                                "id": "col:171b38170d395fd43b0f8bd11cd29bc625a85339ab95617016e4f154af855cee",
                                "text": "tipo: texto"
                            },
                            {
                                "id": "col:1d33ff20434f3ca83d1e663dd316e10a5408aa1540b21f6f288c6d2769ebc6dc",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1802.2066763543128,
                        "y": 14.090164918302484
                    },
                    {
                        "id": "table:e350c98de068bdee0522ddec3902c5baad0f59472d780e92d8318a209e904d02",
                        "title": "crimson_users",
                        "properties": [
                            {
                                "id": "col:420745a09059ad2d0a8b1d0fed8336f670671748b830e0384551c790fc5b7898",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:e8f246c259279c5223a18ef51915888df59fc4d41aba3ddbcc380587ec49fcb9",
                                "text": "username: texto"
                            },
                            {
                                "id": "col:63efb298cf1414b5c4af57c49d682f647b5f295ae93f106ddfa9fd31e46f1eec",
                                "text": "password_hash: texto"
                            },
                            {
                                "id": "col:99e9b4700085b027bd2a10b5ce0d82b5ffe935718db821d5adc091e801e7e4c4",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:e00ff771cfbbb5cdaed067fc73b539985221fd777ba362d6ab3f0c50e2b12bcd",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:3d5152cfef5e3091e9238a75c2d7a79e7f982aaa7702d1f91cea5c749102334c",
                                "text": "rol: texto"
                            },
                            {
                                "id": "col:497b9f4490556357081d93e740763400f861cf280eb642ff892408307d150c79",
                                "text": "__crimson_activo: entero"
                            },
                            {
                                "id": "col:aff476f7de762bb1b0a6a3d56ffcabc7edcb34203b06fef459cc5aefdc6bad55",
                                "text": "creado_en: texto"
                            }
                        ],
                        "categories": [
                            "IT"
                        ],
                        "x": -1817.7354414766992,
                        "y": 277.3153436414552
                    },
                    {
                        "id": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "title": "facturas",
                        "properties": [
                            {
                                "id": "col:b570b1f21f5b92816ee2b0b0d8ee628e09f158f99196f631def0c638c05c4968",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:698d68df96e60041255cc87a1d5b81fd77d0dc350d2a8d41883810f2e2e15e0c",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:0378e15a0930e76a30f0f2039539574b3024634f9bd6fad9dabfdc241082af92",
                                "text": "numero: texto"
                            },
                            {
                                "id": "col:fc51e9d389dc59de87539590f1c6dc99dd73685eb54ed9468f6f40b3a5fea709",
                                "text": "pedido: entero"
                            },
                            {
                                "id": "col:9ed66750013865393d25b289f3001dea829f49bfc8ce2c44586e90e8522983fc",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:745fb152588b5b7e07cc86e83fea4cc1b39bb4db208eb3cf331ea70c56abb204",
                                "text": "producto: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "direccion"
                        ],
                        "x": 1103.4832680117524,
                        "y": -216.82617107812587
                    },
                    {
                        "id": "table:222334a317d8d1aa352b61b245b0155a3634c5e7fd635c3ac99e7e081cdb41a9",
                        "title": "gastos",
                        "properties": [
                            {
                                "id": "col:e075ad95c72900686bfdf97989d606b63a0fe57325b29457f86544d12f708d67",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f49ce6f09da771fe73afb92ad2d5530e1a41039ad0a751c0817cecb75e157905",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:b84d98713604cdd3578aeaa8ea5235e2ac17d6ddb894f6f7962e91a3b5f5401a",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:fb59a49e2f366c7507e100b292fd55f56a5331330be8907b289a62eebdbb360c",
                                "text": "importe: decimal"
                            },
                            {
                                "id": "col:704223afd152f618faf2c773ab4a9e294fa59545683d9bf62bd36c654ee89732",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 1203.3270623007513,
                        "y": 279.6089382994556
                    },
                    {
                        "id": "762c0957-c660-432b-8f9b-871ea1486028",
                        "title": "modalidades",
                        "properties": [
                            {
                                "id": "2c7294af-caf9-4ae0-a01c-a2f2cd351543",
                                "text": "id: entero"
                            },
                            {
                                "id": "881dc1fb-a6b0-43bc-85e0-bbbaf632bd07",
                                "text": "nombre: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -269.9804899804752,
                        "y": -134.48921242620443
                    },
                    {
                        "id": "ae40fde4-6c4e-4e8d-b10c-2d5a1a673e1b",
                        "title": "oportunidades",
                        "properties": [
                            {
                                "id": "d7597bc5-a655-4284-aa25-0b67632ff811",
                                "text": "id: entero"
                            },
                            {
                                "id": "bd40c7e0-4edd-4770-8c82-9df305f41d3b",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "424202dc-9db9-4f7b-b7a1-afe90ca823c2",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "16a41f0c-2e59-4bef-b079-b543f1c4980b",
                                "text": "email: texto"
                            },
                            {
                                "id": "47874e09-053f-4c42-8f95-8fe420a63604",
                                "text": "suscriptor: entero"
                            },
                            {
                                "id": "59a998ab-ac32-4aac-9572-9cfe35ba3c41",
                                "text": "estado: texto"
                            },
                            {
                                "id": "e9a9f5d6-fd08-4bb7-b107-44552ee8a9c8",
                                "text": "promocion: texto"
                            },
                            {
                                "id": "747190aa-f3ea-4ccc-acea-2217ab5f29d6",
                                "text": "nombre y apellidos: texto"
                            },
                            {
                                "id": "bd6ccedb-582c-49c3-aac0-053d34a5dd49",
                                "text": "empresa: texto"
                            },
                            {
                                "id": "5cd15316-9ff9-4928-815c-111b33c67204",
                                "text": "tipodeproyecto: texto"
                            },
                            {
                                "id": "de88fc3a-c1a8-492a-ad82-8a80159aeb8f",
                                "text": "mensaje: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "ventas"
                        ],
                        "x": 109.18771346790967,
                        "y": 30.95596805275362
                    },
                    {
                        "id": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:b876464ae5e8ca78e9b043b1206395a67e2937b9df59f469df67b001ea2513c5",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:0d5437e97852cb420b08e4fe2e05088aa0b2f6ec3273c46f4795bca719cfff1d",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:b856bbad8548d2d7a7fbe135316c032c2e31edc60900e68d936d4ce70e611613",
                                "text": "productos: entero"
                            },
                            {
                                "id": "col:b1a0c5f1a7b95b28d13ea1d311d20c9e6956911ff1ac7fa5147eef8f3f57538f",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:8f01f653aef2922291f2d05b2c34f9e96103207d90cae44447c556fc6fa5d8ed",
                                "text": "cantidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "ventas"
                        ],
                        "x": 628.438164754106,
                        "y": 337.36560706713567
                    },
                    {
                        "id": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:799513c629d3c82f0aee4b0a24828be03a3ce6dd5a0d55cd16c60f6f5941cf88",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:c7a3c809d68c3a748dcacdd100c09e7d3500a6a6ed5edcd4ea00d60d2b6fdbae",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:41fd4f7d824107b90ac4109b14ef84fc8fcf66db83ec9d4d0498985bc464a8c6",
                                "text": "categoria: entero"
                            },
                            {
                                "id": "col:d1cf9b22853c56ee2d655dd84ba1d2f1839a7cb3250c90c2ba9d410552f7e580",
                                "text": "precio: decimal"
                            },
                            {
                                "id": "4a0f74fd-d4c2-4f35-ac5a-df86ab229861",
                                "text": "color: texto"
                            },
                            {
                                "id": "9ce27964-5642-498b-8afc-ec1666e9a1e1",
                                "text": "informacion: texto"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "marketing",
                            "produccion",
                            "soporte",
                            "ventas"
                        ],
                        "x": 58.85253647156492,
                        "y": 697.0139275470088
                    },
                    {
                        "id": "73d35ee9-489e-4269-98ca-eab9557c628a",
                        "title": "testimonios",
                        "properties": [
                            {
                                "id": "093e8665-c763-410d-93a8-31d0d817ada9",
                                "text": "id: entero"
                            },
                            {
                                "id": "88c10493-2c8d-4449-ad75-d3cb8ca5cbb3",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "5c6917d9-ec2d-4e42-b643-8b1961a36d7f",
                                "text": "contenido: texto"
                            },
                            {
                                "id": "07d4fdc7-4acc-4e0f-9ab1-e9a8ffb51117",
                                "text": "empresa: texto"
                            },
                            {
                                "id": "1461b55e-c4af-4a10-81d1-4e73c39fa764",
                                "text": "cargo: texto"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "web"
                        ],
                        "x": -707.1465208190964,
                        "y": 53.111811446962875
                    },
                    {
                        "id": "table:3d4dc463ab2e12eca8bf43f2d6c64769eccfb6dfddc3c2b17e017b193fd0b3c2",
                        "title": "tickets",
                        "properties": [
                            {
                                "id": "col:eb9c6d7c9608203a6663a2170dec19cb5f8447ab4990296045c2395a0521ff08",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:1b69b7d8eb160a292990c741c583b924626e03f2170843b4210982da52939905",
                                "text": "producto: entero"
                            },
                            {
                                "id": "col:761d5ea39d55f8362ab49d5f0199ebe0b3488f66521d2a2b2c9552796c6139aa",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:a53960cac8d2feb9ba850edf201d9ee8658033cef17245f417a5d154ec9e741f",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:7e0c855e389926bae10837f412e092c397e76702119d7daa6ca8233ebeaed18f",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:890610a3daf6eedc0d37be15ae74209380f1b192882d6b8db04263e1f2ba29f1",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:5d399ab3e2eb18cf093e3b29e26e892dac12a67b24892520a4c23ab8940cb20f",
                                "text": "estado: entero"
                            }
                        ],
                        "categories": [
                            "soporte"
                        ],
                        "x": 717.7510912744019,
                        "y": 1117.8430776878963
                    }
                ],
                "links": [
                    {
                        "id": "fk:89052c2280b65cb353bd975f83b985b064fcce251cb7ada876b1fbf87f7db243",
                        "from": "table:b45b67f9df12b4272b583d2b62c6dc74162ce430ffe2e1e24ba304a98c40ea19",
                        "fromProp": "col:cf7e037b5d83961d8d232cebe0e8d369a365cf142c43e1bdaae25e17f4206478",
                        "to": "44c1f1dd-c20e-4d1e-84d1-658c66fba436",
                        "toProp": "ec0f30ed-778e-436d-8157-3bff4c2b0772"
                    },
                    {
                        "id": "fk:175ecfa8863234d7347f595dcf0ed435279a6031d1034369aa8ff78aefa1f791",
                        "from": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "fromProp": "col:b570b1f21f5b92816ee2b0b0d8ee628e09f158f99196f631def0c638c05c4968",
                        "to": "table:083b726c5c4e9415ce6d41b5ef8497d2d0e3d0a7cb69e0245d12e16d0ad18d51",
                        "toProp": "col:e021e3d4fa3b9108ad20cdc7f508b984c3b13b8752550575ddf051ebc4572602"
                    },
                    {
                        "id": "fk:824e5e63520e0a6af64b2e5edba14d81e97cc0d64bd611067002095fb0f7244f",
                        "from": "table:222334a317d8d1aa352b61b245b0155a3634c5e7fd635c3ac99e7e081cdb41a9",
                        "fromProp": "col:e075ad95c72900686bfdf97989d606b63a0fe57325b29457f86544d12f708d67",
                        "to": "table:083b726c5c4e9415ce6d41b5ef8497d2d0e3d0a7cb69e0245d12e16d0ad18d51",
                        "toProp": "col:b9edb268d1b277aa777f7fa67088b736ae4dcb97a042bce0bf1f03512a2da0d6"
                    },
                    {
                        "id": "fk:82c81e584e696c16efe1be57c40e299dc21640eb0cee2558daa6c5b88dd00c4d",
                        "from": "table:e350c98de068bdee0522ddec3902c5baad0f59472d780e92d8318a209e904d02",
                        "fromProp": "col:420745a09059ad2d0a8b1d0fed8336f670671748b830e0384551c790fc5b7898",
                        "to": "table:16873d4663cabde31f6fc24672a5f73ca014a764da6c929719ae1bd519df7212",
                        "toProp": "col:a9860cb145a7b673e362cfab01ffc5b89a3d3a07700526ab8a9d532411ed37c4"
                    },
                    {
                        "id": "fk:7cb81eaea59e005d789b36e1c38ea045e26bfba5bfaabd98c9ef67fe08eaebd9",
                        "from": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "fromProp": "col:b876464ae5e8ca78e9b043b1206395a67e2937b9df59f469df67b001ea2513c5",
                        "to": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "toProp": "col:fc51e9d389dc59de87539590f1c6dc99dd73685eb54ed9468f6f40b3a5fea709"
                    },
                    {
                        "id": "fk:a335a8c969681fcfcab4aaa0f602c80f47542ee1d5bbdc29dc78c200c079dbd7",
                        "from": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "fromProp": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                        "to": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "toProp": "col:9ed66750013865393d25b289f3001dea829f49bfc8ce2c44586e90e8522983fc"
                    },
                    {
                        "id": "fk:6e481a8c4b5e16366f26115ca3e9398d9f2436b88ddd0449a337afb67715d765",
                        "from": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "fromProp": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                        "to": "table:fc6f480b8250ceb5a00cc6dabee6280ebca695c20a40a7028f721c2abc7d29cf",
                        "toProp": "col:745fb152588b5b7e07cc86e83fea4cc1b39bb4db208eb3cf331ea70c56abb204"
                    },
                    {
                        "id": "fk:3d463669e71940571c9e6a0eaa47e79e4041b144c7c9dbbbcdd3f98ceae19e57",
                        "from": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "fromProp": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                        "to": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "toProp": "col:0d5437e97852cb420b08e4fe2e05088aa0b2f6ec3273c46f4795bca719cfff1d"
                    },
                    {
                        "id": "fk:d2c3e72fc5ac161941019deccf802955a86fda3928bdfccb386c4bd4b1e1e390",
                        "from": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "fromProp": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                        "to": "table:bfc486445f3ddb433af46dbe03b35b03dbac0c891ba8ff2d86485c0637866b5b",
                        "toProp": "col:b856bbad8548d2d7a7fbe135316c032c2e31edc60900e68d936d4ce70e611613"
                    },
                    {
                        "id": "fk:24964b47c97b1fb735a692b019beb07c0b0b0182faeaf06cfacf1d1dcac8f6a7",
                        "from": "table:b45b67f9df12b4272b583d2b62c6dc74162ce430ffe2e1e24ba304a98c40ea19",
                        "fromProp": "col:cf7e037b5d83961d8d232cebe0e8d369a365cf142c43e1bdaae25e17f4206478",
                        "to": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "toProp": "col:41fd4f7d824107b90ac4109b14ef84fc8fcf66db83ec9d4d0498985bc464a8c6"
                    },
                    {
                        "id": "fk:546e47ff1915b37dc16c1940b1bd869892e3b33b7e72f0391021f8c786c73509",
                        "from": "table:98d525b3bde1801ce5f5928d3fd77af7856bb2ef25701af5ecd4e06a3c121389",
                        "fromProp": "col:ddf6065d8465ee482c061bda8d8b7e3285ebbf61d017005dea7620ab021e5be1",
                        "to": "table:3d4dc463ab2e12eca8bf43f2d6c64769eccfb6dfddc3c2b17e017b193fd0b3c2",
                        "toProp": "col:1b69b7d8eb160a292990c741c583b924626e03f2170843b4210982da52939905"
                    },
                    {
                        "id": "fk:3c4edbbc4daa2bddd3354c546e4e46a5443cfbfba4f314d05381e3fb79cd1f53",
                        "from": "table:e9cf34e533ce1852704054b094ea12edacb1160b4d43e0a68342b4c05572e60a",
                        "fromProp": "col:7ef6ded543beeb338622777e6b1feb575be7412278de7b2c8bb3b3fd0c6d7e12",
                        "to": "table:3d4dc463ab2e12eca8bf43f2d6c64769eccfb6dfddc3c2b17e017b193fd0b3c2",
                        "toProp": "col:761d5ea39d55f8362ab49d5f0199ebe0b3488f66521d2a2b2c9552796c6139aa"
                    }
                ]
            },
            "view": {
                "x": 553.6154958219115,
                "y": -202.0842210263728,
                "z": 0.7557920107233191
            },
            "collectionLabels": {
                "marketing": "marketing",
                "produccion": "produccion",
                "administracion": "administracion",
                "ventas": "ventas",
                "soporte": "soporte",
                "direccion": "direccion",
                "it": "IT",
                "web": "web"
            }
        },
        {
            "id": "db:prueba_php_completa",
            "name": "prueba_php_completa",
            "data": {
                "entities": [
                    {
                        "id": "table:855dd8c6b6a3cd6532a12dd5fd219b2e6d15a0d497b245536aa28cec153c39a0",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:92b440068dff6368eaca544a2bb5c12492fd774f26dbf2ef6aa4ec486e2d4608",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:98a81802085a0340470f388621f6f27f4d2e84c5481fdbdd999cd8a1cd00185a",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:1f0911d73b30dac53b07cd4c3379fdb5aa2527d13f9eb9e3f906d8322083543a",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:ab69e2687d1390ebf078d486637234ae7043c0b046f37a14c7da415448513b4f",
                                "text": "saldo: decimal"
                            },
                            {
                                "id": "col:2801197ae247bb974e557be8cd4f57fe2ad7435f8537116965f9f4ffba158510",
                                "text": "alta: fecha"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:b3611caf9e72bf105b09be19ae7677512d31a092765c8ccb0ce8ddc0e687b1ea",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:8cb719b3b71e809807b7b637bc4b46a4be1f2b1078cee4c7668fd1958080df41",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:c9d359a0c316ecbcac4cb5aade2473afe3ea6e3f2b8dad5897cf48457e472c03",
                                "text": "id_cliente: entero"
                            },
                            {
                                "id": "col:bf307344316fe9255411b4cf2aa258d266b68167800307a5080c2e8b26753cd9",
                                "text": "total: decimal"
                            }
                        ],
                        "categories": [],
                        "x": 430,
                        "y": 100
                    }
                ],
                "links": [
                    {
                        "id": "fk:10f916df052789d4cb724d467d18905bb37caa8450f7ce8c83d677efeebad862",
                        "from": "table:855dd8c6b6a3cd6532a12dd5fd219b2e6d15a0d497b245536aa28cec153c39a0",
                        "fromProp": "col:92b440068dff6368eaca544a2bb5c12492fd774f26dbf2ef6aa4ec486e2d4608",
                        "to": "table:b3611caf9e72bf105b09be19ae7677512d31a092765c8ccb0ce8ddc0e687b1ea",
                        "toProp": "col:c9d359a0c316ecbcac4cb5aade2473afe3ea6e3f2b8dad5897cf48457e472c03"
                    }
                ]
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:pruebaenclase",
            "name": "pruebaenclase",
            "data": {
                "entities": [
                    {
                        "id": "table:d9844eb5d64983a192c874681f0d16c83b3f9d3a33269e92ac22f4d0ac807474",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:73d366bdbbc054286bcf45cc7efc3659bfb7dd011f87a7956fb5200ad71224fc",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:a63fe1d5ea4020e2f5fd8eb18fc86821ebf33d30766f1348bd6925886b14936e",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:f0747721e4e6c25a2b06ec25f9e0146b203fb010f7db84cc6dc92868b83ad18c",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:3911f6b913b1f8326e39013c0b6e1043674b75276ff3af670f403d87d7481bfc",
                                "text": "telefono: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:tienda",
            "name": "tienda",
            "data": {
                "entities": [
                    {
                        "id": "table:462919262da3779225850d758e291de75418b3519ff73594c9028ae412d2a171",
                        "title": "clientes",
                        "properties": [
                            {
                                "id": "col:59d0ab9540ef906d54d37bdae7d79279948008b1962b397b3937a846f08b72d0",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:f6ff56a2788a704019784933b01d8619a0d9604b06c9317ca043cc5d5de2afe0",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:9071781e292c71f03bd3dd3635f2c7c426b4f0021a8b4c4187776d2f35366d8b",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:0222b3b6d9b37197cbf8323f0b2fe8718b9c81138d14c1c4962cbf692d3e93fc",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:ccc5095640fb0e1b1d10fa53fb2a8fbc80bfd7bdb9d8a7a085dc87078cf19eb5",
                                "text": "edad: texto"
                            },
                            {
                                "id": "col:670f4acfa8cff8cd95769151e941781817aff604065a489ccaab0285d1dc37ca",
                                "text": "ciudad: texto"
                            }
                        ],
                        "categories": [],
                        "x": 100,
                        "y": 100
                    }
                ],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:visual_4973b2b8cf682405",
            "name": "visual_4973b2b8cf682405",
            "data": {
                "entities": [
                    {
                        "id": "table:7203900107d4647b472e640ec95286ea5b8544f45e37390c44e5cd24f435d190",
                        "title": "articulosblog",
                        "properties": [
                            {
                                "id": "col:8b4bcdc1d5c51ba4aee0be993d4731de59a7b9794b26c9422f41c29d912f4707",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:9a17b1e37af049ffe4ea3e0cfd047154d29d3e347d6fee230224066424eb89c6",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:75ad4ba91e5d16c2aac2991049d1b4090b632b09f132e8cd750b35041cf1da28",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:c7413844b2f10e3d2b628df899fc9519a14b9d0881e91034fcaad1130d2234fe",
                                "text": "contenido: texto"
                            }
                        ],
                        "categories": [
                            "marketing"
                        ],
                        "x": 100,
                        "y": 100
                    },
                    {
                        "id": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "title": "cliente",
                        "properties": [
                            {
                                "id": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:235e5aa3b90eba9cccaca6cdb762f7c968d61b639dfb5679adba6c0c178b0e61",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:f0a433ab3f8b6e34509e037eb7084e9dcdc4b60f99ce83456f768796851c78e2",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:38b5326ae6f001c5a435955eb7773f885e2fc25da70b8753b73e64d6def191a6",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:9df6efb5e0aab796a276faa9347914714db7b932514b90fbf738e66ff3829831",
                                "text": "oportunidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "ventas"
                        ],
                        "x": 430,
                        "y": 100
                    },
                    {
                        "id": "table:d157d0a290599d66afe6c75aa8d51d68f7d151e5a51e208bf8cd6f28b51b80a2",
                        "title": "contabilidad",
                        "properties": [
                            {
                                "id": "col:6d10b1950a3fd2978c91b87e68b7f37b02175888d48235946ca5e7cea4b38bf9",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:ee58bea74022322152c544f7c31603fae397354b0cc26400c2da02c72b74433a",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:59315222dd0939f3deed699c1e813e13723aa60c044313b4c5d5bd8ecab5527a",
                                "text": "factura: entero"
                            },
                            {
                                "id": "col:69ab292141d33adf59dc2e33eaa54ff6170f009edd4a7c534304b02fe6fc1653",
                                "text": "gasto: entero"
                            },
                            {
                                "id": "col:07be062f291d2f893aa75d3cb9b177ebb1b37f11765bc11fc9d55d833640e6d4",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 760,
                        "y": 100
                    },
                    {
                        "id": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "title": "facturas",
                        "properties": [
                            {
                                "id": "col:e45ad0bbf0d0ad0e10ef002ee4b035c35562d0a98c8bb593afd013182209c47d",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:83fd58d8e6a4fd3e43d065b7bd84c054b2084d5336500c25380283b11c36248e",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:77e3a33a8f3212f8a4c881cea22a4db6acd4af8c2540aa9eb1c9f935f5e70587",
                                "text": "numero: texto"
                            },
                            {
                                "id": "col:f86c78bd4d3bffb91765fd0ec28c36425ff9c9ab745705a6aac99f24d7cc1df0",
                                "text": "pedido: entero"
                            },
                            {
                                "id": "col:ff88e60ea22702e27e29be9df2820acf8c844ec2c9081fcda71f073423a61f4b",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:ef076c846a42db522ac2dd06bec6e8beb601ad2c25e8474e502314e5aae529a4",
                                "text": "producto: entero"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 1090,
                        "y": 100
                    },
                    {
                        "id": "table:7321bacbbe46b4fba4d9d341283af719aed3152b17c93ecad8b69d0cf8b7a684",
                        "title": "gastos",
                        "properties": [
                            {
                                "id": "col:3380c0e8948b5c9770741561c6dbb25511fd1d6f4c5e1674541eb1dc51746c10",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:dc8b1898796bb04f10d51d71e8eb63c89248dfdafc7b99e8992552002d323403",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:3747f0693755ec68007726d49f367cf2ecf66447fe0cba58b6fdaa3932490b94",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:7f56af84c54f295a73b5cd66beb710526ee378a79c46f995d7ac52ee3a61936a",
                                "text": "importe: decimal"
                            },
                            {
                                "id": "col:3abfd272c5d44cce828da682845903363ed78fe67e22d6d3b588cbfb8c1a36f2",
                                "text": "descripcion: texto"
                            }
                        ],
                        "categories": [
                            "administracion"
                        ],
                        "x": 100,
                        "y": 420
                    },
                    {
                        "id": "table:11208d1ccde861991f9a21a77378e3bffed5fd5167de177aae3eaaf9ee908ef9",
                        "title": "oportunidad",
                        "properties": [
                            {
                                "id": "col:0f820cb6e8ce609b5b2d629d5d35967d61c8e78716180b7d3b3b88b3d6a33195",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:dd4894994258a9ed16fdb235f00a58dce4faaae2e9ddbc46a0a4aaa3a39464e6",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:86adcac5fc2f7addfa542cbe6e05ea3bab16754f76e11ea2c967923aa6fceafa",
                                "text": "apellidos: texto"
                            },
                            {
                                "id": "col:5b6cdef0cca714f9c690002dffa26141abbb2490ab42d68995ed1d30fcb05380",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:e71f513bfcf3cbb45ed21dd47e38c39c8b409132b7c9be708fd55d405d448570",
                                "text": "suscriptor: entero"
                            }
                        ],
                        "categories": [
                            "marketing",
                            "ventas"
                        ],
                        "x": 430,
                        "y": 420
                    },
                    {
                        "id": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "title": "pedidos",
                        "properties": [
                            {
                                "id": "col:e9030bf17f0904815e54757794aec821f605d7aeefd52b64b6c459649dcd57e8",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:bdd116e09d44e3baab4ec9128e05814c857f3ab92509a75a0190b452bfef0f52",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:ef30367b512299775465e1522b3d7d38857e4862516b8fbb05a4423b0f1e6f15",
                                "text": "productos: entero"
                            },
                            {
                                "id": "col:fbf106fca11cec99ca2cf1713ba07b3b05f1826817b1a71ec00fb391e2eb459e",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:75a8834fe9b985af253ad7f52272c8b3137e81f4b5990e31ab2c57a07fd1f187",
                                "text": "cantidad: entero"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "ventas"
                        ],
                        "x": 760,
                        "y": 420
                    },
                    {
                        "id": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "title": "productos",
                        "properties": [
                            {
                                "id": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:e57dfd2ad60d9b582d2a2eb619c73c9895e90e857f37e5072cefad9d29b9dca6",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:540be5759d232f619df42c000404d87f6917d5e7006c8ac13dcdd077783f9842",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:67569189416c88909af31d5be5c8d7392b720f236bec816d74bcc0ae5d146575",
                                "text": "categoria: entero"
                            },
                            {
                                "id": "col:945d684a7bdf55435731aab32ac8b44a1aa2f4e59f93d3f04702443cc9a9f585",
                                "text": "precio: decimal"
                            }
                        ],
                        "categories": [
                            "administracion",
                            "marketing",
                            "produccion",
                            "soporte",
                            "ventas"
                        ],
                        "x": 1090,
                        "y": 420
                    },
                    {
                        "id": "table:d18ffaa2537314f435dd5acc1e1a24337071cdef29927360cc25d536cf2a48de",
                        "title": "suscriptores",
                        "properties": [
                            {
                                "id": "col:e80ebeab88a5aecccc7a6cd52bf53e016367392031f16fab93910a4f6350fd17",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:7590bb1aecbd82161dadedf2635b0f1a862e94bc16c402e94bbd7c37b3203c70",
                                "text": "email: texto"
                            },
                            {
                                "id": "col:46ac973930f2daa095da085f5bb1ede91f9d3d20893a4330773b491bb0652944",
                                "text": "nombre: texto"
                            },
                            {
                                "id": "col:f8d37539c9f41ac3ed0f4b080befa3344d3faf589f5be4001b5f6ec19bbfd51c",
                                "text": "empresa: texto"
                            }
                        ],
                        "categories": [
                            "marketing"
                        ],
                        "x": 100,
                        "y": 740
                    },
                    {
                        "id": "table:c3944bedbe6b39bca0cb6cc521643277450bb942ca58fa28d271ec8c33415395",
                        "title": "tickets",
                        "properties": [
                            {
                                "id": "col:03b67c96b165f91ff27b087286fa03d85923224e970604d37e98c8699d07d60c",
                                "text": "id: entero"
                            },
                            {
                                "id": "col:5395ebf7c0759bf369bb8d3da55a3d49ffd407d4e76b8683777361051174ad56",
                                "text": "producto: entero"
                            },
                            {
                                "id": "col:f67eae32c584d6466f6af3626672dd3f944171988ece1f16ab064474c6f591be",
                                "text": "cliente: entero"
                            },
                            {
                                "id": "col:634eb3eedbfbe4c642d8e9db8e4fff3a61843b569f9ea92febcf81c87fdf1684",
                                "text": "fecha: fecha"
                            },
                            {
                                "id": "col:1576e1f942771c57caea14e746d2231df794df4b2dec36a68cd3f22a851f21a6",
                                "text": "titulo: texto"
                            },
                            {
                                "id": "col:6f7b9558c595d52efd6dad2fa12c288ae4e752eb8d9f87515fe34a63e405a17c",
                                "text": "descripcion: texto"
                            },
                            {
                                "id": "col:f99c08f42d040993a4ad6ceac0b2e3be6fa20c1bb93006240b051b33425e4472",
                                "text": "estado: entero"
                            }
                        ],
                        "categories": [
                            "soporte"
                        ],
                        "x": 430,
                        "y": 740
                    }
                ],
                "links": [
                    {
                        "id": "fk:e7a041bb8155ce688a6f2868da4d8cb327be24d1bb96c806f3e94eda0453d8d8",
                        "from": "table:11208d1ccde861991f9a21a77378e3bffed5fd5167de177aae3eaaf9ee908ef9",
                        "fromProp": "col:0f820cb6e8ce609b5b2d629d5d35967d61c8e78716180b7d3b3b88b3d6a33195",
                        "to": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "toProp": "col:9df6efb5e0aab796a276faa9347914714db7b932514b90fbf738e66ff3829831"
                    },
                    {
                        "id": "fk:2d7da32654b4ff212305836202a46eedb92b9d3e9d5f200a30b43a95a87e4131",
                        "from": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "fromProp": "col:e45ad0bbf0d0ad0e10ef002ee4b035c35562d0a98c8bb593afd013182209c47d",
                        "to": "table:d157d0a290599d66afe6c75aa8d51d68f7d151e5a51e208bf8cd6f28b51b80a2",
                        "toProp": "col:59315222dd0939f3deed699c1e813e13723aa60c044313b4c5d5bd8ecab5527a"
                    },
                    {
                        "id": "fk:53ca7c31be1250fd66ecd8f73ac3b02206758e9d639e8aa518040f75fcbdf830",
                        "from": "table:7321bacbbe46b4fba4d9d341283af719aed3152b17c93ecad8b69d0cf8b7a684",
                        "fromProp": "col:3380c0e8948b5c9770741561c6dbb25511fd1d6f4c5e1674541eb1dc51746c10",
                        "to": "table:d157d0a290599d66afe6c75aa8d51d68f7d151e5a51e208bf8cd6f28b51b80a2",
                        "toProp": "col:69ab292141d33adf59dc2e33eaa54ff6170f009edd4a7c534304b02fe6fc1653"
                    },
                    {
                        "id": "fk:34e9f63c6311df24839f317415e854446680527f2b9dafe72c5803924f833582",
                        "from": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "fromProp": "col:e9030bf17f0904815e54757794aec821f605d7aeefd52b64b6c459649dcd57e8",
                        "to": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "toProp": "col:f86c78bd4d3bffb91765fd0ec28c36425ff9c9ab745705a6aac99f24d7cc1df0"
                    },
                    {
                        "id": "fk:d23ee5f76ac3bd4226f9ea37f8f40116a2a268446b7c734490acc22e89ba04df",
                        "from": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "fromProp": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                        "to": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "toProp": "col:ff88e60ea22702e27e29be9df2820acf8c844ec2c9081fcda71f073423a61f4b"
                    },
                    {
                        "id": "fk:83620f955b9e41b074f8090b1ef9b0fcd2f278b8246de7a38a8f135c89a5c2eb",
                        "from": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "fromProp": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                        "to": "table:0de770462e132bafc5c16875c19c76ec34fdfd94ca2702c1f247665ef9cdca18",
                        "toProp": "col:ef076c846a42db522ac2dd06bec6e8beb601ad2c25e8474e502314e5aae529a4"
                    },
                    {
                        "id": "fk:c90a8b6675e0952757032ef5c5406db2a4d77f622035c79663dfce6771368903",
                        "from": "table:d18ffaa2537314f435dd5acc1e1a24337071cdef29927360cc25d536cf2a48de",
                        "fromProp": "col:e80ebeab88a5aecccc7a6cd52bf53e016367392031f16fab93910a4f6350fd17",
                        "to": "table:11208d1ccde861991f9a21a77378e3bffed5fd5167de177aae3eaaf9ee908ef9",
                        "toProp": "col:e71f513bfcf3cbb45ed21dd47e38c39c8b409132b7c9be708fd55d405d448570"
                    },
                    {
                        "id": "fk:b88ee64268a1fdbeee5948dccd18ebf7f2a9f7272580d93b5655685e6a4b6677",
                        "from": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "fromProp": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                        "to": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "toProp": "col:bdd116e09d44e3baab4ec9128e05814c857f3ab92509a75a0190b452bfef0f52"
                    },
                    {
                        "id": "fk:ba8c15637d3fe9053fbdcf6a05bcbd99e5af58be0ad38aacb20207903a2fc82f",
                        "from": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "fromProp": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                        "to": "table:ad3dbaf9bfa79cdf72667119abcdc5549fd6f37f3275c9cf9a80ddbe22fe71e0",
                        "toProp": "col:ef30367b512299775465e1522b3d7d38857e4862516b8fbb05a4423b0f1e6f15"
                    },
                    {
                        "id": "fk:d8d49c260f1f0774c3ce6e08f622e0a22397530c88f8e6e1f3f33da8c8da3ccd",
                        "from": "table:0f09f326176a3c5006af95543fc4253c7f9cfe4ccc339e3362e18806cbbd40eb",
                        "fromProp": "col:efb339dff51b09c616217efcfb94733c125a81a9ab292172b119cc5f0c55969f",
                        "to": "table:c3944bedbe6b39bca0cb6cc521643277450bb942ca58fa28d271ec8c33415395",
                        "toProp": "col:5395ebf7c0759bf369bb8d3da55a3d49ffd407d4e76b8683777361051174ad56"
                    },
                    {
                        "id": "fk:db0f635968d0c4c8938803e5b20ce5f2bc3425a55c66e906a70510a5434c3776",
                        "from": "table:3d1abb87032e94546ab558d2c0fc2b54547f21f020ec33ed23141cbc2425903e",
                        "fromProp": "col:2e750c35ad61bfaed934956e5032236ee2c1664e763c28f7c127987c592a1022",
                        "to": "table:c3944bedbe6b39bca0cb6cc521643277450bb942ca58fa28d271ec8c33415395",
                        "toProp": "col:f67eae32c584d6466f6af3626672dd3f944171988ece1f16ab064474c6f591be"
                    }
                ]
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        },
        {
            "id": "db:visual_768b93c975ebf39a",
            "name": "visual_768b93c975ebf39a",
            "data": {
                "entities": [],
                "links": []
            },
            "view": {
                "x": 350,
                "y": 110,
                "z": 1
            }
        }
    ]
}
```
##### motor
**README-ACTUALIZACION.md**
```markdown
# Andrei BBDD: subconjuntos y CSV seguro

## Cambios
- Jerarquías ilimitadas con un padre por conjunto y varias pertenencias por tabla.
- Se conserva `.colecciones.json` original, sin migración destructiva. Las relaciones padre-hijo se almacenan en `.colecciones_padres.json`.
- Los campos CSV que contienen comas, comillas o saltos de línea se entrecomillan automáticamente. Las comillas internas se duplican. La lectura interpreta estos valores.
- API C++, CLI, extensión Python nativa, extensión PHP nativa y ORM FFI Python/PHP ampliados.
- Eliminar un conjunto con hijos se rechaza. Primero mueve o elimina sus hijos.

## Compilar en Ubuntu
```bash
sudo apt update
sudo apt install -y build-essential make pkg-config libjson-c-dev python3-dev php-dev php-cli python3
make clean
make all python php
```

## Instalación global
1. Detén las aplicaciones que escriben en el motor y haz una copia de seguridad consistente de los datos y de `/etc/andrei/config.json`.
2. Revisa la ruta de datos de la configuración. El instalador conserva `/etc/andrei/config.json` existente.
3. Ejecuta `sudo ./install-system.sh`. Instala el ejecutable, bibliotecas y módulos Python/PHP y reinicia Apache si está activo.
4. Comprueba `which andreibbdd`, `php -m | grep andreibbdd` y `python3 -c 'import andreibbdd,andreiorm;print("OK")'`.
5. Asegúrate de que los usuarios de aplicaciones tienen permisos adecuados sobre el directorio de datos.

## CLI (tras CREAR BASE / USAR)
```
COLECCION CREAR negocio
COLECCION SUBCREAR negocio ventas
COLECCION SUBCREAR ventas online
COLECCION AGREGAR online clientes
COLECCION HIJAS ventas
COLECCION RECURSIVO negocio
COLECCION ARBOL
COLECCION MOVER online negocio
COLECCION MOVER online RAIZ
COLECCION ELIMINAR ventas
```
Los nombres de colecciones son identificadores únicos en toda la base, no rutas.

## Python nativo
```python
import andreibbdd as db
db.usar_base('erp')
db.crear_coleccion('negocio')
db.crear_subcoleccion('negocio','ventas')
print(db.subcolecciones_de('negocio'))
print(db.tablas_de_coleccion_recursiva('negocio'))
print(db.arbol_colecciones()) # JSON string
```

## PHP nativo
`andreibbdd_crear_subcoleccion($padre,$nombre)`, `andreibbdd_mover_coleccion($nombre,$padre)`, `andreibbdd_subcolecciones_de($nombre)`, `andreibbdd_tablas_coleccion_recursiva($nombre)`, `andreibbdd_arbol_colecciones()` (JSON string).

## ORM Python/PHP
`crear_subcoleccion`, `mover_coleccion`, `subcolecciones_de`, `tablas_de_coleccion_recursiva`, `arbol_colecciones` (Python); equivalentes camelCase en PHP.

## Precauciones
- La compatibilidad con registros antiguos que ya contenían comas sin escapar no se puede recuperar automáticamente.
- Se conserva el límite de registro fijo `tamanoRegistro`; las comillas de escape también consumen bytes.
- Los metadatos no disponen todavía de bloqueo entre procesos ni rollback transaccional integral.
- El build PHP requiere `php-config` y `php.h`; no se pudo compilar el módulo PHP en el entorno de preparación. Compílalo y pruébalo en Ubuntu con `php-dev` antes de desplegarlo.

```
**README-CAMBIOS.md**
```markdown
# Actualización experimental: jerarquía y CSV

## Compilación comprobada

```bash
g++ -std=c++17 -O2 -Iinclude src/AndreiBBDD.cpp src/main.cpp -ljson-c -o andreibbdd
```

## CLI

```text
COLECCION CREAR business
COLECCION SUBCREAR business sales
COLECCION SUBCREAR business/sales online
COLECCION MOVER business/sales/online business
COLECCION HIJAS business
COLECCION RECURSIVO business
```

`COLECCION MOVER nombre -` mueve a raíz. Los nombres completos usan `/` como separador. La jerarquía se almacena en el archivo de colecciones existente, mediante nombres cualificados, sin copiar tablas. No se permite eliminar un conjunto que tenga descendientes.

## CSV

Los campos con coma, comillas, saltos de línea o espacios en extremos se entrecomillan y las comillas internas se duplican. Ejemplo:

```text
INSERTAR clientes Ana,"Valencia, España"
```

El serializador funciona en C++; se ha probado inserción y lectura desde CLI.

## Límites y precauciones

- Este paquete se ha reconstruido del informe Markdown, que no contiene todos los archivos originales (por ejemplo Makefile). No es un reemplazo listo para desplegar.
- Los conectores Python/PHP y la interfaz FFI aún no exponen las nuevas operaciones de jerarquía. Sus operaciones de colecciones existentes continúan usando nombres completos.
- El formato CSV con comillas puede no recuperar registros antiguos ya escritos de forma ambigua. Respaldar datos antes de instalar.
- El almacenamiento de registros sigue siendo de tamaño fijo. Los saltos de línea se admiten dentro de campos, pero algunas herramientas externas que procesan una línea por registro pueden fallar.
- La jerarquía basada en rutas usa nombres completos como identidad; mover un conjunto cambia los nombres de sus descendientes.
- No hay bloqueo entre procesos ni rollback garantizado para cambios de colecciones.

```
**README-SISTEMA.md**
```markdown
# Andrei BBDD — instalación global Ubuntu

Ejecuta `sudo ./install-system.sh` en Ubuntu 24.04. Recompila los conectores nativos para las versiones de Python y PHP del equipo, instala CLI, biblioteca, cabeceras y wrappers. **Haz copia de seguridad** antes de actualizar un motor ya instalado. El instalador no migra datos ni configura permisos de escritura de aplicaciones.

## Verificar

```bash
which andreibbdd
php -m | grep -i andreibbdd
python3 -c 'import andreibbdd, andreiorm; print("OK")'
ldconfig -p | grep libandreiorm
```

## API nativa

Python: `andreibbdd.crear_coleccion('marketing')`, `andreibbdd.listar_colecciones()`, `andreibbdd.agregar_tabla_coleccion('productos','marketing')` (seleccionar antes la base).

PHP: `andreibbdd_crear_coleccion('marketing')`, `andreibbdd_listar_colecciones()`, `andreibbdd_agregar_tabla_coleccion('productos','marketing')` (seleccionar antes la base).

El ORM Python y PHP conserva su API previa. PHP ORM utiliza FFI; activar FFI explícitamente según el contexto de ejecución si se necesita.

## Precauciones

- Las extensiones PHP/Python se compilan para las versiones locales; reinstala tras cambios de ABI.
- Los datos del motor y metadatos de colecciones se comparten; **no** abras escrituras simultáneas de múltiples procesos sin protección adicional.
- El motor original usa registros de tamaño fijo y el mecanismo de colecciones no garantiza rollback transaccional ni bloqueo entre procesos.
- No abras permisos `777` en el directorio de datos. Usa un grupo de sistema y ACL o permisos específicos.
- Si el sistema ya contiene `/etc/andrei/config.json`, se conserva intacto para no cambiar la ruta de datos existente.

```
**README-WINDOWS.md**
```markdown
# AndreiBBDD en Windows (XAMPP)

En Linux la interfaz usa la extensión PHP nativa `andreibbdd.so` y
`/etc/andrei/config.json`. En Windows, XAMPP no puede cargar esa extensión, así
que el motor se compila como `andreibbdd.dll` y PHP la usa mediante **FFI**.

## Piezas

| Archivo | Para qué sirve |
|---|---|
| `compat/json-c/json.h` | Sustituto de json-c (solo cabecera). Evita instalar json-c en Windows. |
| `src/andreibbdd_c.cpp` | API C de la DLL: una sola función `andreibbdd_llamar(funcion, argumentos_json)`. |
| `andreibbdd.dll` | Motor para la interfaz PHP. |
| `andreibbdd.exe` | Consola interactiva del motor. |
| `config.windows.json` | Configuración en Windows: bases en `C:/xampp/htdocs/andrei-basededatos/`. |
| `../UI/andreibbdd_ffi.php` | Define las mismas funciones `andreibbdd_*` que la extensión de Linux. |

`api.php` detecta Windows y carga `andreibbdd_ffi.php` automáticamente. En Linux
todo sigue funcionando igual que antes.

## Puesta en marcha

1. Compilar (necesita GCC 8 o superior, por ejemplo WinLibs):
   ```bat
   compilar-windows.bat
   ```
2. Activar FFI en `C:\xampp\php\php.ini`:
   ```ini
   extension=ffi
   ffi.enable=true
   ```
3. Reiniciar Apache desde el panel de XAMPP.
4. Abrir la interfaz en `http://localhost/` + la ruta de la carpeta `UI/`.

La carpeta de bases se crea sola la primera vez. Para usar otra configuración o
DLL se pueden definir las variables de entorno `ANDREIBBDD_CONFIG` y
`ANDREIBBDD_DLL`.

## A tener en cuenta

- La interfaz sincroniza `UI/private/projects.json` con las bases que existen en
  el motor: los proyectos cuyas bases no existen en este equipo se eliminan de
  la lista. La copia de antes del cambio está en
  `UI/private/projects.linux-backup.json`.
- `C:/xampp/htdocs/andrei-basededatos/` está dentro de `htdocs`, así que Apache
  puede servir sus archivos. Si no quieres que sean accesibles por web, añade
  en esa carpeta un `.htaccess` con `Require all denied`.

```
**README.md**
```markdown
# Andrei BBDD: colecciones transversales

Proyecto reconstruido a partir del código aportado. Conserva motor CSV/SQL, ORM de documentos JSON y conectores PHP/Python.
## Cambio de nombre

Los símbolos C++, módulos, extensiones y ejecutables usan ahora el prefijo `Andrei`/`andrei`; el cambio rompe compatibilidad con binarios y código que use los nombres anteriores. Recompila todo con `make clean && make all python php` antes de instalar. El instalador conserva la configuración anterior copiando `/etc/jocarsa/config.json` a `/etc/andrei/config.json` cuando aún no existe; la ruta de datos configurada no se altera.

## Compilar (Ubuntu)

```bash
sudo apt install build-essential libjson-c-dev python3-dev php-dev
make
make python php  # conectores SQL nativos opcionales (requiere php-dev)
mkdir -p datos
```

Desde la raíz del proyecto:

```bash
./andreibbdd
# CREAR BASE erp
# USAR erp
# CREAR TABLA productos nombre:TEXTO,precio:REAL
# COLECCION CREAR marketing
# COLECCION CREAR produccion
# COLECCION AGREGAR marketing productos
# COLECCION AGREGAR produccion productos
# COLECCION TABLAS marketing
# COLECCION DE productos
# COLECCION LISTAR
# COLECCION QUITAR marketing productos
# COLECCION ELIMINAR marketing
```

ORM Python:

```bash
PYTHONPATH=python ANDREIORM_LIB="$PWD/libandreiorm.so" python3 examples/colecciones.py
```

PHP FFI:

```bash
php -d ffi.enable=1 examples/colecciones.php
```

## API

C++: `crearColeccion`, `eliminarColeccion`, `listarColecciones`, `agregarTablaColeccion`, `quitarTablaColeccion`, `tablasDeColeccion`, `coleccionesDeTabla`.

Python: `crear_coleccion`, `eliminar_coleccion`, `listar_colecciones`, `agregar_tabla_coleccion`, `quitar_tabla_coleccion`, `tablas_de_coleccion`, `colecciones_de_tabla`.

PHP ORM: métodos equivalentes en camelCase.

Los metadatos se guardan en `datos/<base>/.colecciones.json`. Una tabla puede aparecer en varias colecciones sin duplicar sus registros. Eliminar una colección no borra tablas. Eliminar una tabla elimina sus pertenencias.

**Importante:** la API ORM original `guardar(coleccion, documento)` conserva su significado previo: colección de documentos JSON almacenados en tablas `orm_*`. Las nuevas colecciones transversales son agrupaciones de tablas y se manejan mediante los nuevos métodos. No son intercambiables.

## Limitaciones

- Los registros del motor original son de tamaño fijo; el límite de documentos JSON sigue vigente.
- El guardado usa fichero temporal y renombrado atómico, con mutex dentro de un proceso; no ofrece bloqueo entre procesos, ni integración garantizada con rollback del motor.
- No se ha implementado aún control de acceso por colección ni una interfaz web para editar las agrupaciones.
- Antes de usar en producción: copias de seguridad y pruebas de concurrencia y transacciones.

```
**config.json**
```json
{"instalacion":"./datos","tamanoRegistro":512}

```
**config.windows.json**
```json
{"instalacion":"C:/xampp/htdocs/andrei-basededatos/","tamanoRegistro":512}

```
###### compat
####### json-c
**json.h**
```c
// Sustituto mínimo y compatible de json-c para compilar AndreiBBDD en Windows
// sin depender de la biblioteca json-c. Solo implementa la parte de la API que
// usa el motor (y la capa C para Windows). Se activa añadiendo -Icompat al
// compilar; en Linux se sigue usando la json-c real del sistema.
//
// Igual que en json-c, el valor JSON null se representa con un puntero nulo,
// los objetos conservan el orden de inserción y la memoria se gestiona con
// contadores de referencias (json_object_get / json_object_put).
#pragma once

#include <cerrno>
#include <cmath>
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <fstream>
#include <sstream>
#include <string>
#include <utility>
#include <vector>

enum json_type {
    json_type_null,
    json_type_boolean,
    json_type_double,
    json_type_int,
    json_type_object,
    json_type_array,
    json_type_string
};

#define JSON_C_TO_STRING_PLAIN 0
#define JSON_C_TO_STRING_SPACED (1 << 0)
#define JSON_C_TO_STRING_PRETTY (1 << 1)
#define JSON_C_TO_STRING_NOSLASHESCAPE (1 << 4)

struct json_object {
    json_type tipo = json_type_null;
    int referencias = 1;
    bool booleano = false;
    int64_t entero = 0;
    double real = 0.0;
    std::string cadena;
    std::vector<std::pair<std::string, json_object*>> miembros;  // objeto
    std::vector<json_object*> elementos;                         // array
    std::string cache;  // texto devuelto por json_object_to_json_string*
};

inline json_object* json_object_get(json_object* o) {
    if (o) ++o->referencias;
    return o;
}

inline int json_object_put(json_object* o) {
    if (!o) return 0;
    if (--o->referencias > 0) return 0;
    for (auto& m : o->miembros) json_object_put(m.second);
    for (auto* e : o->elementos) json_object_put(e);
    delete o;
    return 1;
}

inline json_type json_object_get_type(const json_object* o) {
    return o ? o->tipo : json_type_null;
}

inline int json_object_is_type(const json_object* o, json_type t) {
    return json_object_get_type(o) == t;
}

/* ---------- Constructores ---------- */
inline json_object* json_object__nuevo(json_type t) {
    auto* o = new json_object();
    o->tipo = t;
    return o;
}
inline json_object* json_object_new_object() { return json_object__nuevo(json_type_object); }
inline json_object* json_object_new_array() { return json_object__nuevo(json_type_array); }
inline json_object* json_object_new_null() { return nullptr; }
inline json_object* json_object_new_string(const char* s) {
    auto* o = json_object__nuevo(json_type_string);
    o->cadena = s ? s : "";
    return o;
}
inline json_object* json_object_new_string_len(const char* s, int n) {
    auto* o = json_object__nuevo(json_type_string);
    if (s && n > 0) o->cadena.assign(s, static_cast<size_t>(n));
    return o;
}
inline json_object* json_object_new_int64(int64_t v) {
    auto* o = json_object__nuevo(json_type_int);
    o->entero = v;
    return o;
}
inline json_object* json_object_new_int(int32_t v) { return json_object_new_int64(v); }
inline json_object* json_object_new_double(double v) {
    auto* o = json_object__nuevo(json_type_double);
    o->real = v;
    return o;
}
inline json_object* json_object_new_boolean(int v) {
    auto* o = json_object__nuevo(json_type_boolean);
    o->booleano = v != 0;
    return o;
}

/* ---------- Objetos ---------- */
inline int json_object_object_add(json_object* o, const char* clave, json_object* valor) {
    if (!o || o->tipo != json_type_object || !clave) {
        json_object_put(valor);
        return -1;
    }
    for (auto& m : o->miembros) {
        if (m.first == clave) {
            if (m.second != valor) json_object_put(m.second);
            m.second = valor;
            return 0;
        }
    }
    o->miembros.emplace_back(clave, valor);
    return 0;
}

inline int json_object_object_get_ex(const json_object* o, const char* clave, json_object** valor) {
    if (valor) *valor = nullptr;
    if (!o || o->tipo != json_type_object || !clave) return 0;
    for (const auto& m : o->miembros) {
        if (m.first == clave) {
            if (valor) *valor = m.second;
            return 1;
        }
    }
    return 0;
}

inline json_object* json_object_object_get(const json_object* o, const char* clave) {
    json_object* v = nullptr;
    json_object_object_get_ex(o, clave, &v);
    return v;
}

inline int json_object_object_length(const json_object* o) {
    return (o && o->tipo == json_type_object) ? static_cast<int>(o->miembros.size()) : 0;
}

// Equivalente a la macro de json-c: declara `clave` (char*) y `valor` (json_object*).
#define json_object_object_foreach(obj, clave, valor)                                  \
    char* clave = nullptr;                                                             \
    json_object* valor = nullptr;                                                      \
    for (size_t clave##_indice = 0;                                                    \
         (obj) && clave##_indice < (obj)->miembros.size() &&                           \
         ((clave = const_cast<char*>((obj)->miembros[clave##_indice].first.c_str())),  \
          (valor = (obj)->miembros[clave##_indice].second), true);                     \
         ++clave##_indice)

/* ---------- Arrays ---------- */
inline int json_object_array_add(json_object* o, json_object* valor) {
    if (!o || o->tipo != json_type_array) {
        json_object_put(valor);
        return -1;
    }
    o->elementos.push_back(valor);
    return 0;
}

inline size_t json_object_array_length(const json_object* o) {
    return (o && o->tipo == json_type_array) ? o->elementos.size() : 0;
}

inline json_object* json_object_array_get_idx(const json_object* o, size_t i) {
    if (!o || o->tipo != json_type_array || i >= o->elementos.size()) return nullptr;
    return o->elementos[i];
}

/* ---------- Serialización ---------- */
inline void json__escribir_cadena(std::string& out, const std::string& s) {
    out += '"';
    for (unsigned char c : s) {
        switch (c) {
            case '"': out += "\\\""; break;
            case '\\': out += "\\\\"; break;
            case '\b': out += "\\b"; break;
            case '\f': out += "\\f"; break;
            case '\n': out += "\\n"; break;
            case '\r': out += "\\r"; break;
            case '\t': out += "\\t"; break;
            default:
                if (c < 0x20) {
                    char buf[8];
                    std::snprintf(buf, sizeof buf, "\\u%04x", c);
                    out += buf;
                } else {
                    out += static_cast<char>(c);
                }
        }
    }
    out += '"';
}

inline void json__escribir(std::string& out, const json_object* o, int flags, int nivel) {
    const bool bonito = (flags & JSON_C_TO_STRING_PRETTY) != 0;
    const bool espaciado = (flags & JSON_C_TO_STRING_SPACED) != 0;
    auto sangria = [&](int n) {
        if (bonito) {
            out += '\n';
            out.append(static_cast<size_t>(n) * 2, ' ');
        }
    };
    switch (json_object_get_type(o)) {
        case json_type_null: out += "null"; break;
        case json_type_boolean: out += o->booleano ? "true" : "false"; break;
        case json_type_int: out += std::to_string(o->entero); break;
        case json_type_double: {
            if (!std::isfinite(o->real)) { out += "null"; break; }
            char buf[64];
            std::snprintf(buf, sizeof buf, "%.17g", o->real);
            std::string t = buf;
            if (t.find_first_of(".eEn") == std::string::npos) t += ".0";
            out += t;
            break;
        }
        case json_type_string: json__escribir_cadena(out, o->cadena); break;
        case json_type_object: {
            if (o->miembros.empty()) { out += "{}"; break; }
            out += '{';
            bool primero = true;
            for (const auto& m : o->miembros) {
                if (!primero) out += ',';
                primero = false;
                if (espaciado && !bonito) out += ' ';
                sangria(nivel + 1);
                json__escribir_cadena(out, m.first);
                out += (bonito || espaciado) ? ": " : ":";
                json__escribir(out, m.second, flags, nivel + 1);
            }
            sangria(nivel);
            if (espaciado && !bonito) out += ' ';
            out += '}';
            break;
        }
        case json_type_array: {
            if (o->elementos.empty()) { out += "[]"; break; }
            out += '[';
            bool primero = true;
            for (const auto* e : o->elementos) {
                if (!primero) out += ',';
                primero = false;
                if (espaciado && !bonito) out += ' ';
                sangria(nivel + 1);
                json__escribir(out, e, flags, nivel + 1);
            }
            sangria(nivel);
            if (espaciado && !bonito) out += ' ';
            out += ']';
            break;
        }
    }
}

inline const char* json_object_to_json_string_ext(json_object* o, int flags) {
    if (!o) return "null";
    o->cache.clear();
    json__escribir(o->cache, o, flags, 0);
    return o->cache.c_str();
}

inline const char* json_object_to_json_string(json_object* o) {
    return json_object_to_json_string_ext(o, JSON_C_TO_STRING_SPACED);
}

/* ---------- Lectura de valores ---------- */
inline const char* json_object_get_string(json_object* o) {
    if (!o) return nullptr;
    if (o->tipo == json_type_string) return o->cadena.c_str();
    return json_object_to_json_string(o);
}

inline int json_object_get_string_len(const json_object* o) {
    return (o && o->tipo == json_type_string) ? static_cast<int>(o->cadena.size()) : 0;
}

inline int64_t json_object_get_int64(const json_object* o) {
    switch (json_object_get_type(o)) {
        case json_type_int: return o->entero;
        case json_type_double: return static_cast<int64_t>(o->real);
        case json_type_boolean: return o->booleano ? 1 : 0;
        case json_type_string: return std::strtoll(o->cadena.c_str(), nullptr, 10);
        default: return 0;
    }
}

inline int32_t json_object_get_int(const json_object* o) {
    return static_cast<int32_t>(json_object_get_int64(o));
}

inline double json_object_get_double(const json_object* o) {
    switch (json_object_get_type(o)) {
        case json_type_int: return static_cast<double>(o->entero);
        case json_type_double: return o->real;
        case json_type_boolean: return o->booleano ? 1.0 : 0.0;
        case json_type_string: return std::strtod(o->cadena.c_str(), nullptr);
        default: return 0.0;
    }
}

inline int json_object_get_boolean(const json_object* o) {
    switch (json_object_get_type(o)) {
        case json_type_boolean: return o->booleano;
        case json_type_int: return o->entero != 0;
        case json_type_double: return o->real != 0.0;
        case json_type_string: return !o->cadena.empty();
        case json_type_object:
        case json_type_array: return 1;
        default: return 0;
    }
}

/* ---------- Comparación ---------- */
inline int json_object_equal(const json_object* a, const json_object* b) {
    if (a == b) return 1;
    if (json_object_get_type(a) != json_object_get_type(b)) return 0;
    if (!a || !b) return 0;
    switch (a->tipo) {
        case json_type_null: return 1;
        case json_type_boolean: return a->booleano == b->booleano;
        case json_type_int: return a->entero == b->entero;
        case json_type_double: return a->real == b->real;
        case json_type_string: return a->cadena == b->cadena;
        case json_type_array:
            if (a->elementos.size() != b->elementos.size()) return 0;
            for (size_t i = 0; i < a->elementos.size(); ++i)
                if (!json_object_equal(a->elementos[i], b->elementos[i])) return 0;
            return 1;
        case json_type_object:
            // Igual que json-c: mismas claves y valores, sin importar el orden.
            if (a->miembros.size() != b->miembros.size()) return 0;
            for (const auto& m : a->miembros) {
                json_object* otro = nullptr;
                if (!json_object_object_get_ex(b, m.first.c_str(), &otro)) return 0;
                if (!json_object_equal(m.second, otro)) return 0;
            }
            return 1;
    }
    return 0;
}

/* ---------- Analizador ---------- */
struct json__analizador {
    const char* p;
    const char* fin;
    bool error = false;

    void espacios() {
        while (p < fin && (*p == ' ' || *p == '\t' || *p == '\n' || *p == '\r')) ++p;
    }

    static void utf8(std::string& out, uint32_t cp) {
        if (cp < 0x80) out += static_cast<char>(cp);
        else if (cp < 0x800) {
            out += static_cast<char>(0xC0 | (cp >> 6));
            out += static_cast<char>(0x80 | (cp & 0x3F));
        } else if (cp < 0x10000) {
            out += static_cast<char>(0xE0 | (cp >> 12));
            out += static_cast<char>(0x80 | ((cp >> 6) & 0x3F));
            out += static_cast<char>(0x80 | (cp & 0x3F));
        } else {
            out += static_cast<char>(0xF0 | (cp >> 18));
            out += static_cast<char>(0x80 | ((cp >> 12) & 0x3F));
            out += static_cast<char>(0x80 | ((cp >> 6) & 0x3F));
            out += static_cast<char>(0x80 | (cp & 0x3F));
        }
    }

    bool hex4(uint32_t& v) {
        if (fin - p < 4) return false;
        v = 0;
        for (int i = 0; i < 4; ++i) {
            char c = *p++;
            v <<= 4;
            if (c >= '0' && c <= '9') v |= static_cast<uint32_t>(c - '0');
            else if (c >= 'a' && c <= 'f') v |= static_cast<uint32_t>(c - 'a' + 10);
            else if (c >= 'A' && c <= 'F') v |= static_cast<uint32_t>(c - 'A' + 10);
            else return false;
        }
        return true;
    }

    bool cadena(std::string& out) {
        if (p >= fin || *p != '"') return false;
        ++p;
        while (p < fin) {
            char c = *p++;
            if (c == '"') return true;
            if (static_cast<unsigned char>(c) < 0x20) return false;
            if (c != '\\') { out += c; continue; }
            if (p >= fin) return false;
            char e = *p++;
            switch (e) {
                case '"': out += '"'; break;
                case '\\': out += '\\'; break;
                case '/': out += '/'; break;
                case 'b': out += '\b'; break;
                case 'f': out += '\f'; break;
                case 'n': out += '\n'; break;
                case 'r': out += '\r'; break;
                case 't': out += '\t'; break;
                case 'u': {
                    uint32_t cp;
                    if (!hex4(cp)) return false;
                    if (cp >= 0xD800 && cp <= 0xDBFF) {
                        uint32_t bajo;
                        if (fin - p >= 6 && p[0] == '\\' && p[1] == 'u') {
                            p += 2;
                            if (!hex4(bajo) || bajo < 0xDC00 || bajo > 0xDFFF) return false;
                            cp = 0x10000 + ((cp - 0xD800) << 10) + (bajo - 0xDC00);
                        } else {
                            return false;
                        }
                    }
                    utf8(out, cp);
                    break;
                }
                default: return false;
            }
        }
        return false;
    }

    bool literal(const char* s) {
        size_t n = std::strlen(s);
        if (static_cast<size_t>(fin - p) < n || std::strncmp(p, s, n) != 0) return false;
        p += n;
        return true;
    }

    json_object* valor(int profundidad) {
        if (profundidad > 512) { error = true; return nullptr; }
        espacios();
        if (p >= fin) { error = true; return nullptr; }
        char c = *p;
        if (c == '{') {
            ++p;
            json_object* o = json_object_new_object();
            espacios();
            if (p < fin && *p == '}') { ++p; return o; }
            while (true) {
                espacios();
                std::string clave;
                if (!cadena(clave)) { error = true; json_object_put(o); return nullptr; }
                espacios();
                if (p >= fin || *p != ':') { error = true; json_object_put(o); return nullptr; }
                ++p;
                json_object* v = valor(profundidad + 1);
                if (error) { json_object_put(o); return nullptr; }
                json_object_object_add(o, clave.c_str(), v);
                espacios();
                if (p < fin && *p == ',') { ++p; continue; }
                if (p < fin && *p == '}') { ++p; return o; }
                error = true;
                json_object_put(o);
                return nullptr;
            }
        }
        if (c == '[') {
            ++p;
            json_object* a = json_object_new_array();
            espacios();
            if (p < fin && *p == ']') { ++p; return a; }
            while (true) {
                json_object* v = valor(profundidad + 1);
                if (error) { json_object_put(a); return nullptr; }
                json_object_array_add(a, v);
                espacios();
                if (p < fin && *p == ',') { ++p; continue; }
                if (p < fin && *p == ']') { ++p; return a; }
                error = true;
                json_object_put(a);
                return nullptr;
            }
        }
        if (c == '"') {
            std::string s;
            if (!cadena(s)) { error = true; return nullptr; }
            auto* o = json_object__nuevo(json_type_string);
            o->cadena = std::move(s);
            return o;
        }
        if (literal("true")) return json_object_new_boolean(1);
        if (literal("false")) return json_object_new_boolean(0);
        if (literal("null")) return nullptr;
        if (c == '-' || (c >= '0' && c <= '9')) {
            const char* inicio = p;
            if (*p == '-') ++p;
            bool decimal = false;
            while (p < fin && ((*p >= '0' && *p <= '9') || *p == '.' || *p == 'e' || *p == 'E' || *p == '+' || *p == '-')) {
                if (*p == '.' || *p == 'e' || *p == 'E') decimal = true;
                ++p;
            }
            std::string num(inicio, p);
            if (num == "-" || num.empty()) { error = true; return nullptr; }
            if (!decimal) {
                errno = 0;
                char* resto = nullptr;
                long long v = std::strtoll(num.c_str(), &resto, 10);
                if (errno == 0 && resto && *resto == '\0') return json_object_new_int64(v);
            }
            char* resto = nullptr;
            double d = std::strtod(num.c_str(), &resto);
            if (!resto || *resto != '\0') { error = true; return nullptr; }
            return json_object_new_double(d);
        }
        error = true;
        return nullptr;
    }
};

// Devuelve NULL si el texto no es JSON válido (o si el JSON es literalmente null).
inline json_object* json_tokener_parse(const char* texto) {
    if (!texto) return nullptr;
    json__analizador a{texto, texto + std::strlen(texto)};
    // Omitir BOM UTF-8.
    if (a.fin - a.p >= 3 && static_cast<unsigned char>(a.p[0]) == 0xEF &&
        static_cast<unsigned char>(a.p[1]) == 0xBB && static_cast<unsigned char>(a.p[2]) == 0xBF)
        a.p += 3;
    json_object* o = a.valor(0);
    a.espacios();
    if (a.error || a.p != a.fin) {
        json_object_put(o);
        return nullptr;
    }
    return o;
}

inline json_object* json_object_from_file(const char* ruta) {
    if (!ruta) return nullptr;
    std::ifstream f(ruta, std::ios::binary);
    if (!f) return nullptr;
    std::ostringstream ss;
    ss << f.rdbuf();
    std::string texto = ss.str();
    return json_tokener_parse(texto.c_str());
}

inline int json_object_to_file_ext(const char* ruta, json_object* o, int flags) {
    std::ofstream f(ruta, std::ios::binary | std::ios::trunc);
    if (!f) return -1;
    f << json_object_to_json_string_ext(o, flags);
    return f ? 0 : -1;
}

```
###### docs
**ARQUITECTURA.md**
```markdown
# Arquitectura

Python (ctypes) -> libandreiorm.so -> AndreiORM.cpp -> AndreiBBDD.cpp -> almacenamiento AndreiBBDD

PHP (FFI) -> libandreiorm.so -> AndreiORM.cpp -> AndreiBBDD.cpp -> almacenamiento AndreiBBDD

Python (extensión SQL original) -> AndreiBBDD.cpp

PHP (extensión SQL original) -> AndreiBBDD.cpp

## Compatibilidad

Se conservan los archivos originales `AndreiBBDD.cpp`, `AndreiBBDD.hpp`, `conector_python.cpp`, `conector_php.cpp` y `main.cpp` extraídos de la documentación proporcionada. La versión ORM anterior basada en SQLite no se instala ni se sobrescribe.

## Pendientes para una integración definitiva

1. Modificar el formato físico del motor para soportar JSON de tamaño variable.
2. Exponer ORM directamente en las extensiones Python y PHP existentes.
3. Implementar índices de campos JSON, paginación y filtros nativos SQL.
4. Diseñar y ejecutar migración verificable desde SQLite con respaldo.
5. Pruebas de concurrencia, rollback, datos Unicode y cargas grandes.

```
###### examples
**colecciones.php**
```php
<?php
require __DIR__.'/../php/AndreiORM.php';
$db=new AndreiORM('erp',__DIR__.'/../config.json',__DIR__.'/../libandreiorm.so');
foreach(['marketing','produccion','administracion','soporte'] as $n)$db->crearColeccion($n);
print_r($db->listarColecciones());

```
**colecciones.py**
```python
from andreiorm import AndreiORM
with AndreiORM('erp','config.json') as db:
    for nombre in ['marketing','produccion','administracion','soporte']:
        db.crear_coleccion(nombre)
    print('Colecciones:',db.listar_colecciones())
    print('Para asociar productos, crear primero la tabla productos mediante CLI')
    print('db.agregar_tabla_coleccion("productos", "marketing")')

```
**demo.php**
```php
<?php
require __DIR__.'/../php/AndreiORM.php';
$orm=new AndreiORM('demo_orm','config.json',__DIR__.'/../libandreiorm.so');
$id=$orm->guardar('clientes',['nombre'=>'Ana','edad'=>28]);
print_r($orm->obtener('clientes',$id));
print_r($orm->buscar('clientes','nombre','Ana'));
$orm->actualizar('clientes',$id,['edad'=>29]);
print_r($orm->todos('clientes'));
$orm->eliminar('clientes',$id);

```
**demo.py**
```python
from andreiorm import AndreiORM
with AndreiORM('demo_orm', 'config.json') as orm:
    id = orm.guardar('clientes', {'nombre':'Ana','edad':28,'tags':['vip','web']})
    print('ID:', id)
    print('Obtener:', orm.obtener('clientes', id))
    print('Buscar:', orm.buscar('clientes', 'nombre', 'Ana'))
    print('Actualizar:', orm.actualizar('clientes', id, {'edad':29}))
    print('Todos:', orm.todos('clientes'))
    print('Contar:', orm.contar('clientes'))
    print('Eliminar:', orm.eliminar('clientes', id))

```
**prueba_subcolecciones.py**
```python
from andreiorm import AndreiORM
with AndreiORM('prueba_nested','config.json') as db:
    db.crear_coleccion('negocio')
    db.crear_subcoleccion('negocio','ventas')
    db.crear_subcoleccion('ventas','online')
    print(db.arbol_colecciones())

```
###### include
**AndreiBBDD.hpp**
```
#pragma once
#include <cstdint>
#include <map>
#include <string>
#include <vector>
#include <filesystem>

class AndreiSerializador {
public:
    std::string serializar(const std::vector<std::string>& lista, char delimitador = ',') const;
    std::vector<std::string> desserializar(const std::string& cadena, char delimitador = ',') const;
};

struct ClaveForanea {
    std::string columna;
    std::string tablaReferenciada;
    std::string columnaReferenciada;
};

struct RestriccionColumna {
    bool noNulo = false;
    bool unico = false;
    bool tieneDefecto = false;
    std::string valorDefecto;
};



enum class TipoDato { TEXTO, ENTERO, REAL, BOOLEANO, FECHA, DECIMAL };

struct DefinicionColumna {
    std::string nombre;
    TipoDato tipo = TipoDato::TEXTO;
};

struct IndiceSecundario {
    std::string nombre;
    std::string columna;
};

struct ResultadoConsulta {
    std::vector<std::string> columnas;
    std::vector<std::vector<std::string>> filas;
};

class AndreiBBDD {
public:
    std::string instalacion;
    std::string basededatos;
    std::size_t tamanoRegistro = 512;

    explicit AndreiBBDD(const std::string& config = "config.json");
    bool crearColeccion(const std::string& nombre);
    bool crearSubcoleccion(const std::string& padre, const std::string& nombre);
    bool moverColeccion(const std::string& nombre, const std::string& nuevoPadre);
    std::vector<std::string> subcoleccionesDe(const std::string& nombre) const;
    std::vector<std::string> tablasDeColeccionRecursiva(const std::string& nombre) const;
    std::string arbolColecciones() const;
    bool eliminarColeccion(const std::string& nombre);
    std::vector<std::string> listarColecciones() const;
    bool agregarTablaColeccion(const std::string& tabla, const std::string& coleccion);
    bool quitarTablaColeccion(const std::string& tabla, const std::string& coleccion);
    std::vector<std::string> tablasDeColeccion(const std::string& coleccion) const;
    std::vector<std::string> coleccionesDeTabla(const std::string& tabla) const;
    bool creaBaseDatos(const std::string& nombre);
    bool usaBaseDatos(const std::string& nombre);
    std::vector<std::string> listarBases() const;
    std::vector<std::string> listarTablas() const;
    bool creaTabla(const std::string& nombre, const std::string& esquema);
    bool creaTablaTipada(const std::string& nombre, const std::vector<DefinicionColumna>& columnas);
    std::map<std::string,TipoDato> obtenerTipos(const std::string& tabla) const;
    bool crearVista(const std::string& nombre, const std::string& consulta);
    bool eliminarVista(const std::string& nombre);
    std::vector<std::string> listarVistas() const;
    bool iniciarTransaccion();
    bool confirmarTransaccion();
    bool deshacerTransaccion();
    bool enTransaccion() const { return transaccionActiva; }
    bool crearIndice(const std::string& nombre, const std::string& tabla, const std::string& columna);
    bool eliminarIndice(const std::string& nombre, const std::string& tabla);
    std::vector<IndiceSecundario> listarIndices(const std::string& tabla) const;
    std::string explicar(const std::string& consulta) const;
    bool alteraTablaAnadir(const std::string& tabla, const std::string& columna);
    bool alteraTablaEliminarColumna(const std::string& tabla, const std::string& columna);
    bool alteraTablaRenombrarColumna(const std::string& tabla, const std::string& antigua, const std::string& nueva);
    bool alteraTablaModificarColumna(const std::string& tabla, const std::string& antigua, const std::string& nueva);
    bool truncarTabla(const std::string& tabla);
    bool eliminarTabla(const std::string& tabla);
    bool eliminarBaseDatos(const std::string& nombre);
    bool anadirClaveForanea(const std::string& tabla, const std::string& columna, const std::string& tablaReferenciada, const std::string& columnaReferenciada = "id");
    std::vector<ClaveForanea> obtenerClavesForaneas(const std::string& tabla) const;
    RestriccionColumna obtenerRestricciones(const std::string& tabla, const std::string& columna) const;
    bool establecerNoNulo(const std::string& tabla, const std::string& columna);
    bool establecerUnico(const std::string& tabla, const std::string& columna);
    bool establecerPorDefecto(const std::string& tabla, const std::string& columna, const std::string& valor);
    std::string obtenerClavePrimaria(const std::string& tabla) const;
    std::vector<std::string> obtenerEsquema(const std::string& tabla) const;
    long long siguienteId(const std::string& tabla) const;
    long long insertarDatos(const std::string& tabla, const std::vector<std::string>& datos);
    long long insertarConColumnas(const std::string& tabla, const std::vector<std::string>& columnas, const std::vector<std::string>& valores);
    long long insertarDesdeSeleccion(const std::string& destino, const std::string& origen);
    long long actualizarDonde(const std::string& tabla, const std::map<std::string,std::string>& cambios, const std::string& columnaDonde = "", const std::string& valorDonde = "");
    long long eliminarDonde(const std::string& tabla, const std::string& columnaDonde = "", const std::string& valorDonde = "");
    std::int64_t buscarPosicion(const std::string& tabla, long long id) const;
    std::vector<std::string> leerRegistro(const std::string& tabla, long long id) const;
    std::map<std::string,std::string> seleccionar(const std::string& tabla, long long id) const;
    std::vector<std::map<std::string,std::string>> listarTodo(const std::string& tabla) const;
    ResultadoConsulta consultar(const std::string& consulta) const;
    std::vector<std::map<std::string,std::string>> buscarColumna(const std::string& tabla, const std::string& columna, const std::string& valor) const;
    bool actualizar(const std::string& tabla, long long id, const std::vector<std::string>& datos);
    bool eliminar(const std::string& tabla, long long id);

private:
    bool transaccionActiva = false;
    std::string baseTransaccion;
    std::filesystem::path rutaSnapshot;
    bool validarTipo(TipoDato tipo, const std::string& valor) const;
    std::string normalizarTipo(TipoDato tipo, const std::string& valor) const;
    ResultadoConsulta consultarInterno(const std::string& consulta, int profundidad) const;
    bool esVista(const std::string& nombre) const;
    std::string consultaVista(const std::string& nombre) const;
    std::string rutaTabla(const std::string& tabla, const std::string& extension) const;
    std::string prepararRegistro(const std::vector<std::string>& elementos) const;
    static std::string trimDerecha(std::string s);
    bool validarClavesForaneas(const std::string& tabla, const std::vector<std::string>& datos) const;
    bool prepararYValidarRestricciones(const std::string& tabla, std::vector<std::string>& datos, long long idIgnorar = -1) const;
    bool registroReferenciado(const std::string& tabla, const std::string& columna, const std::string& valor) const;
    bool puedeEliminarRegistro(const std::string& tabla, const std::map<std::string,std::string>& registro) const;
    void reconstruirIndices(const std::string& tabla) const;
    std::vector<long long> buscarIdsIndice(const std::string& tabla, const std::string& columna, const std::string& valor) const;
};

```
**AndreiORM.hpp**
```
#pragma once
#include "AndreiBBDD.hpp"
#include <string>
class AndreiORM {
public:
 explicit AndreiORM(AndreiBBDD& motor):db(motor){}
 long long guardar(const std::string&,const std::string&);
 std::string obtener(const std::string&,long long) const;
 std::string todos(const std::string&) const;
 std::string buscar(const std::string&,const std::string&,const std::string&) const;
 bool actualizar(const std::string&,long long,const std::string&);
 bool eliminar(const std::string&,long long);
 long long contar(const std::string&) const;
private:
 AndreiBBDD& db;
 std::string tabla(const std::string&) const;
 void asegurar(const std::string&);
};

```
###### php
**AndreiORM.php**
```php
<?php
declare(strict_types=1);
class AndreiORM {
    private FFI $ffi;
    private FFI\CData $handle;
    public function __construct(string $base, string $config='config.json', string $lib='libandreiorm.so') {
        $this->ffi=FFI::cdef(<<<'C'
void* andrei_orm_abrir(const char*,const char*);
void andrei_orm_cerrar(void*);
const char* andrei_orm_error(void);
void andrei_orm_liberar(char*);
long long andrei_orm_guardar(void*,const char*,const char*);
char* andrei_orm_obtener(void*,const char*,long long);
char* andrei_orm_todos(void*,const char*);
char* andrei_orm_buscar(void*,const char*,const char*,const char*);
int andrei_orm_actualizar(void*,const char*,long long,const char*);
int andrei_orm_eliminar(void*,const char*,long long);
long long andrei_orm_contar(void*,const char*);
int andrei_coleccion_crear(void*,const char*);
int andrei_coleccion_eliminar(void*,const char*);
int andrei_coleccion_agregar(void*,const char*,const char*);
int andrei_coleccion_quitar(void*,const char*,const char*);
char* andrei_coleccion_listar(void*);
char* andrei_coleccion_tablas(void*,const char*);
char* andrei_tabla_colecciones(void*,const char*);
C, $lib);
        $this->handle=$this->ffi->andrei_orm_abrir($config,$base);
        if(FFI::isNull($this->handle))throw new RuntimeException($this->error());
    }
    private function error():string{return FFI::string($this->ffi->andrei_orm_error());}
    private function texto($ptr):mixed {
        if($ptr===null || FFI::isNull($ptr))throw new RuntimeException($this->error());
        try{return json_decode(FFI::string($ptr),true,512,JSON_THROW_ON_ERROR);}
        finally{$this->ffi->andrei_orm_liberar($ptr);}
    }
    private function json(mixed $v):string{return json_encode($v,JSON_UNESCAPED_UNICODE|JSON_THROW_ON_ERROR);}
    public function guardar(string $c,mixed $v):int{$r=$this->ffi->andrei_orm_guardar($this->handle,$c,$this->json($v));if($r<0)throw new RuntimeException($this->error());return $r;}
    public function obtener(string $c,int $id):mixed{return $this->texto($this->ffi->andrei_orm_obtener($this->handle,$c,$id));}
    public function todos(string $c):array{return $this->texto($this->ffi->andrei_orm_todos($this->handle,$c));}
    public function buscar(string $c,string $campo,mixed $valor):array{return $this->texto($this->ffi->andrei_orm_buscar($this->handle,$c,$campo,$this->json($valor)));}
    public function actualizar(string $c,int $id,mixed $v):bool{$r=$this->ffi->andrei_orm_actualizar($this->handle,$c,$id,$this->json($v));if($r<0)throw new RuntimeException($this->error());return (bool)$r;}
    public function eliminar(string $c,int $id):bool{$r=$this->ffi->andrei_orm_eliminar($this->handle,$c,$id);if($r<0)throw new RuntimeException($this->error());return (bool)$r;}
    public function contar(string $c):int{$r=$this->ffi->andrei_orm_contar($this->handle,$c);if($r<0)throw new RuntimeException($this->error());return $r;}
    private function coleccionBool(string $fn,string ...$args):bool{
        $r=$this->ffi->$fn($this->handle,...$args);
        if($r<0)throw new RuntimeException($this->error());
        return (bool)$r;
    }
    public function crearColeccion(string $n):bool{return $this->coleccionBool('andrei_coleccion_crear',$n);}
    public function eliminarColeccion(string $n):bool{return $this->coleccionBool('andrei_coleccion_eliminar',$n);}
    public function agregarTablaColeccion(string $tabla,string $coleccion):bool{return $this->coleccionBool('andrei_coleccion_agregar',$coleccion,$tabla);}
    public function quitarTablaColeccion(string $tabla,string $coleccion):bool{return $this->coleccionBool('andrei_coleccion_quitar',$coleccion,$tabla);}
    public function listarColecciones():array{return $this->texto($this->ffi->andrei_coleccion_listar($this->handle));}
    public function tablasDeColeccion(string $n):array{return $this->texto($this->ffi->andrei_coleccion_tablas($this->handle,$n));}
    public function coleccionesDeTabla(string $tabla):array{return $this->texto($this->ffi->andrei_tabla_colecciones($this->handle,$tabla));}
    public function crearSubcoleccion(string $padre,string $nombre):bool{return $this->coleccionBool('andrei_coleccion_subcrear',$padre,$nombre);}
    public function moverColeccion(string $nombre,string $padre=''):bool{return $this->coleccionBool('andrei_coleccion_mover',$nombre,$padre);}
    public function subcoleccionesDe(string $nombre):array{return $this->texto($this->ffi->andrei_coleccion_hijas($this->handle,$nombre));}
    public function tablasDeColeccionRecursiva(string $nombre):array{return $this->texto($this->ffi->andrei_coleccion_recursivo($this->handle,$nombre));}
    public function arbolColecciones():array{return $this->texto($this->ffi->andrei_coleccion_arbol($this->handle));}
    public function __destruct(){if(isset($this->handle)&&!FFI::isNull($this->handle))$this->ffi->andrei_orm_cerrar($this->handle);}
}

```
###### python
**andreiorm.py**
```python
import ctypes
import json
import os

class AndreiORM:
    def __init__(self, base, config='config.json', biblioteca=None):
        ruta = biblioteca or os.environ.get('ANDREIORM_LIB', 'libandreiorm.so')
        self.lib = ctypes.CDLL(ruta)
        L = self.lib
        L.andrei_orm_abrir.argtypes = [ctypes.c_char_p, ctypes.c_char_p]
        L.andrei_orm_abrir.restype = ctypes.c_void_p
        L.andrei_orm_cerrar.argtypes = [ctypes.c_void_p]
        L.andrei_orm_error.restype = ctypes.c_char_p
        L.andrei_orm_liberar.argtypes = [ctypes.c_void_p]
        for nombre, tipos, retorno in [
            ('guardar',[ctypes.c_char_p,ctypes.c_char_p],ctypes.c_longlong),
            ('obtener',[ctypes.c_char_p,ctypes.c_longlong],ctypes.c_void_p),
            ('todos',[ctypes.c_char_p],ctypes.c_void_p),
            ('buscar',[ctypes.c_char_p,ctypes.c_char_p,ctypes.c_char_p],ctypes.c_void_p),
            ('actualizar',[ctypes.c_char_p,ctypes.c_longlong,ctypes.c_char_p],ctypes.c_int),
            ('eliminar',[ctypes.c_char_p,ctypes.c_longlong],ctypes.c_int),
            ('contar',[ctypes.c_char_p],ctypes.c_longlong),
        ]:
            f=getattr(L,'andrei_orm_'+nombre)
            f.argtypes=[ctypes.c_void_p]+tipos
            f.restype=retorno
        for n,params,ret in [
            ('crear',[ctypes.c_char_p],ctypes.c_int),('eliminar',[ctypes.c_char_p],ctypes.c_int),
            ('agregar',[ctypes.c_char_p,ctypes.c_char_p],ctypes.c_int),('quitar',[ctypes.c_char_p,ctypes.c_char_p],ctypes.c_int),
            ('listar',[],ctypes.c_void_p),('tablas',[ctypes.c_char_p],ctypes.c_void_p)]:
            fn=getattr(L,'andrei_coleccion_'+n);fn.argtypes=[ctypes.c_void_p]+params;fn.restype=ret
        L.andrei_tabla_colecciones.argtypes=[ctypes.c_void_p,ctypes.c_char_p]
        L.andrei_tabla_colecciones.restype=ctypes.c_void_p
        for n,params,ret in [('subcrear',[ctypes.c_char_p,ctypes.c_char_p],ctypes.c_int),('mover',[ctypes.c_char_p,ctypes.c_char_p],ctypes.c_int),('hijas',[ctypes.c_char_p],ctypes.c_void_p),('recursivo',[ctypes.c_char_p],ctypes.c_void_p),('arbol',[],ctypes.c_void_p)]:
            fn=getattr(L,'andrei_coleccion_'+n);fn.argtypes=[ctypes.c_void_p]+params;fn.restype=ret
        self.handle=L.andrei_orm_abrir(config.encode(),base.encode())
        if not self.handle: raise RuntimeError(self.error())

    def error(self): return self.lib.andrei_orm_error().decode()
    def _call(self,nombre,*args,resultado_json=False):
        result=getattr(self.lib,'andrei_orm_'+nombre)(self.handle,*args)
        if result is None or (isinstance(result,int) and result == -1): raise RuntimeError(self.error())
        if resultado_json:
            try: return json.loads(ctypes.string_at(result).decode())
            finally: self.lib.andrei_orm_liberar(result)
        return result
    @staticmethod
    def _s(v): return v.encode('utf-8')
    @staticmethod
    def _j(v): return json.dumps(v,ensure_ascii=False).encode('utf-8')
    def guardar(self,c,d): return self._call('guardar',self._s(c),self._j(d))
    def obtener(self,c,id): return self._call('obtener',self._s(c),id,resultado_json=True)
    def todos(self,c): return self._call('todos',self._s(c),resultado_json=True)
    def buscar(self,c,campo,valor): return self._call('buscar',self._s(c),self._s(campo),self._j(valor),resultado_json=True)
    def actualizar(self,c,id,cambios): return bool(self._call('actualizar',self._s(c),id,self._j(cambios)))
    def eliminar(self,c,id): return bool(self._call('eliminar',self._s(c),id))
    def contar(self,c): return self._call('contar',self._s(c))
    def _coleccion(self,n,*args,json_result=False):
        r=getattr(self.lib,'andrei_coleccion_'+n)(self.handle,*[self._s(a) for a in args])
        if r is None or r == -1: raise RuntimeError(self.error())
        if json_result:
            try: return json.loads(ctypes.string_at(r).decode())
            finally: self.lib.andrei_orm_liberar(r)
        return bool(r)
    def crear_coleccion(self,n): return self._coleccion('crear',n)
    def eliminar_coleccion(self,n): return self._coleccion('eliminar',n)
    def agregar_tabla_coleccion(self,tabla,coleccion): return self._coleccion('agregar',coleccion,tabla)
    def quitar_tabla_coleccion(self,tabla,coleccion): return self._coleccion('quitar',coleccion,tabla)
    def listar_colecciones(self): return self._coleccion('listar',json_result=True)
    def tablas_de_coleccion(self,n): return self._coleccion('tablas',n,json_result=True)
    def colecciones_de_tabla(self,tabla):
        ptr=self.lib.andrei_tabla_colecciones(self.handle,self._s(tabla))
        if not ptr: raise RuntimeError(self.error())
        try: return json.loads(ctypes.string_at(ptr).decode())
        finally: self.lib.andrei_orm_liberar(ptr)
    def crear_subcoleccion(self,padre,nombre): return self._coleccion('subcrear',padre,nombre)
    def mover_coleccion(self,nombre,padre=''): return self._coleccion('mover',nombre,padre)
    def subcolecciones_de(self,nombre): return self._coleccion('hijas',nombre,json_result=True)
    def tablas_de_coleccion_recursiva(self,nombre): return self._coleccion('recursivo',nombre,json_result=True)
    def arbol_colecciones(self): return self._coleccion('arbol',json_result=True)
    def cerrar(self):
        if self.handle: self.lib.andrei_orm_cerrar(self.handle); self.handle=None
    def __enter__(self): return self
    def __exit__(self,*args): self.cerrar()

```
###### src
**AndreiBBDD.cpp**
```cpp
#include <json-c/json.h>
#include <set>
#include <mutex>
#include <fstream>
#include <stdexcept>
#include "AndreiBBDD.hpp"
#include <algorithm>
#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <iomanip>
#include <regex>
#include <sstream>
#include <set>
#include <stdexcept>

namespace fs = std::filesystem;

std::string AndreiSerializador::serializar(const std::vector<std::string>& lista, char delimitador) const {
 std::string out;
 for(size_t i=0;i<lista.size();++i){
  if(i)out+=delimitador;
  const auto& v=lista[i];
  bool quote=v.find_first_of(std::string(1,delimitador)+"\"\r\n")!=std::string::npos || (!v.empty()&&(v.front()==' '||v.back()==' '));
  if(quote)out+='"';
  for(char c:v){if(c=='"')out+='"';out+=c;}
  if(quote)out+='"';
 }
 return out;
}
std::vector<std::string> AndreiSerializador::desserializar(const std::string& cadena, char delimitador) const {
 std::vector<std::string> r;std::string v;bool quoted=false;
 for(size_t i=0;i<cadena.size();++i){char c=cadena[i];
  if(c=='"' && quoted && i+1<cadena.size() && cadena[i+1]=='"'){v+='"';++i;}
  else if(c=='"' && (quoted || v.empty()))quoted=!quoted;
  else if(c==delimitador && !quoted){r.push_back(v);v.clear();}
  else v+=c;
 }
 if(quoted)throw std::runtime_error("Campo CSV sin cerrar");
 r.push_back(v);return r;
}

AndreiBBDD::AndreiBBDD(const std::string& config) {
    // Prioridad: ruta explicita/local -> variable de entorno -> configuracion global.
    std::string rutaConfig = config;
    if (!fs::exists(rutaConfig)) {
        if (const char* env = std::getenv("ANDREIBBDD_CONFIG"); env && fs::exists(env)) rutaConfig = env;
        else if (fs::exists("/etc/andreibbdd/config.json")) rutaConfig = "/etc/andreibbdd/config.json";
        else throw std::runtime_error("No se ha encontrado config.json ni /etc/andreibbdd/config.json");
    }
    std::ifstream f(rutaConfig); if (!f) throw std::runtime_error("No se puede abrir la configuracion: " + rutaConfig);
    std::string s((std::istreambuf_iterator<char>(f)), {});
    std::smatch m;
    if (!std::regex_search(s,m,std::regex("\\\"instalacion\\\"\\s*:\\s*\\\"([^\\\"]+)\\\""))) throw std::runtime_error("Falta 'instalacion' en config.json");
    instalacion=m[1].str();
    if (!std::regex_search(s,m,std::regex("\\\"tamanoRegistro\\\"\\s*:\\s*([0-9]+)"))) throw std::runtime_error("Falta 'tamanoRegistro' en config.json");
    tamanoRegistro=std::stoull(m[1].str());
    fs::create_directories(instalacion);
}
std::string AndreiBBDD::rutaTabla(const std::string& t,const std::string& e) const { return (fs::path(instalacion)/basededatos/(t+e)).string(); }
std::string AndreiBBDD::trimDerecha(std::string s){ while(!s.empty() && (s.back()==' '||s.back()=='\n'||s.back()=='\r'||s.back()=='\t')) s.pop_back(); return s; }
bool AndreiBBDD::creaBaseDatos(const std::string& n){ fs::path p=fs::path(instalacion)/n; if(fs::exists(p)){std::cerr<<"La base de datos ya existe\n";return false;} return fs::create_directory(p); }
bool AndreiBBDD::usaBaseDatos(const std::string& n){ fs::path p=fs::path(instalacion)/n; if(!fs::exists(p)){std::cerr<<"La base de datos no existe\n";return false;} basededatos=n; return true; }

std::vector<std::string> AndreiBBDD::listarBases() const {
    std::vector<std::string> out;
    fs::path raiz(instalacion);
    if(!fs::exists(raiz)) return out;
    for(const auto& e : fs::directory_iterator(raiz)){
        if(!e.is_directory()) continue;
        const auto nombre = e.path().filename().string();
        if(nombre.rfind(".txn_", 0) == 0) continue;
        out.push_back(nombre);
    }
    std::sort(out.begin(), out.end());
    return out;
}

std::vector<std::string> AndreiBBDD::listarTablas() const {
    std::vector<std::string> out;
    if(basededatos.empty()) return out;
    fs::path dir = fs::path(instalacion) / basededatos;
    if(!fs::exists(dir)) return out;
    for(const auto& e : fs::directory_iterator(dir)){
        if(!e.is_regular_file() || e.path().extension() != ".esquema") continue;
        const auto tabla = e.path().stem().string();
        if(fs::exists(dir / (tabla + ".csv"))) out.push_back(tabla);
    }
    std::sort(out.begin(), out.end());
    return out;
}

static std::string tipoNombre(TipoDato t){
    switch(t){case TipoDato::ENTERO:return "ENTERO";case TipoDato::REAL:return "REAL";case TipoDato::BOOLEANO:return "BOOLEANO";case TipoDato::FECHA:return "FECHA";case TipoDato::DECIMAL:return "DECIMAL";default:return "TEXTO";}
}
static TipoDato tipoDesdeNombre(std::string s){
    std::transform(s.begin(),s.end(),s.begin(),[](unsigned char c){return std::toupper(c);});
    if(s=="ENTERO"||s=="INT") return TipoDato::ENTERO;
    if(s=="REAL"||s=="FLOAT") return TipoDato::REAL;
    if(s=="BOOLEANO"||s=="BOOL") return TipoDato::BOOLEANO;
    if(s=="FECHA"||s=="DATE") return TipoDato::FECHA;
    if(s=="DECIMAL"||s=="NUMERICO") return TipoDato::DECIMAL;
    return TipoDato::TEXTO;
}
bool AndreiBBDD::validarTipo(TipoDato t,const std::string& v) const{
    if(v.empty()||v=="__ANDREI_NULL__") return true;
    try{
        size_t n=0;
        if(t==TipoDato::ENTERO){std::stoll(v,&n);return n==v.size();}
        if(t==TipoDato::REAL||t==TipoDato::DECIMAL){std::stod(v,&n);return n==v.size();}
        if(t==TipoDato::BOOLEANO){std::string x=v;std::transform(x.begin(),x.end(),x.begin(),[](unsigned char c){return std::toupper(c);});return x=="1"||x=="0"||x=="VERDADERO"||x=="FALSO"||x=="TRUE"||x=="FALSE";}
        if(t==TipoDato::FECHA){if(v.size()!=10||v[4]!='-'||v[7]!='-')return false;int y=std::stoi(v.substr(0,4)),m=std::stoi(v.substr(5,2)),d=std::stoi(v.substr(8,2));(void)y;return m>=1&&m<=12&&d>=1&&d<=31;}
        return true;
    }catch(...){return false;}
}
std::string AndreiBBDD::normalizarTipo(TipoDato t,const std::string& v) const{
    std::string up=v;std::transform(up.begin(),up.end(),up.begin(),[](unsigned char c){return std::toupper(c);});
    if(up=="NULL") return "__ANDREI_NULL__";
    if(t!=TipoDato::BOOLEANO||v.empty()) return v;
    std::string x=v;std::transform(x.begin(),x.end(),x.begin(),[](unsigned char c){return std::toupper(c);});
    return (x=="1"||x=="VERDADERO"||x=="TRUE")?"1":"0";
}
std::map<std::string,TipoDato> AndreiBBDD::obtenerTipos(const std::string& t) const{
    std::map<std::string,TipoDato> r; for(const auto& c:obtenerEsquema(t)) r[c]=TipoDato::TEXTO;
    r["id"]=TipoDato::ENTERO; r["activo"]=TipoDato::BOOLEANO;
    std::ifstream f(rutaTabla(t,".tipos")); std::string l;
    while(std::getline(f,l)){auto q=l.find(',');if(q!=std::string::npos)r[l.substr(0,q)]=tipoDesdeNombre(l.substr(q+1));}
    return r;
}
bool AndreiBBDD::creaTablaTipada(const std::string& n,const std::vector<DefinicionColumna>& cols){
    std::string e;for(size_t i=0;i<cols.size();++i){if(i)e+=",";e+=cols[i].nombre;}
    if(!creaTabla(n,e))return false;
    std::ofstream f(rutaTabla(n,".tipos"),std::ios::trunc);f<<"id,ENTERO\nactivo,BOOLEANO\n";for(const auto&c:cols)f<<c.nombre<<","<<tipoNombre(c.tipo)<<"\n";return bool(f);
}
bool AndreiBBDD::esVista(const std::string& n) const{return !basededatos.empty()&&fs::exists(fs::path(instalacion)/basededatos/(n+".vista"));}
std::string AndreiBBDD::consultaVista(const std::string& n) const{std::ifstream f(fs::path(instalacion)/basededatos/(n+".vista"));return std::string((std::istreambuf_iterator<char>(f)),{});}
bool AndreiBBDD::crearVista(const std::string& n,const std::string& q){
    if(basededatos.empty()||n.empty()||q.empty())return false;try{(void)consultar(q);}catch(const std::exception&e){std::cerr<<"Vista invalida: "<<e.what()<<"\n";return false;}
    std::ofstream f(fs::path(instalacion)/basededatos/(n+".vista"),std::ios::trunc);f<<q;return bool(f);
}
bool AndreiBBDD::eliminarVista(const std::string& n){auto p=fs::path(instalacion)/basededatos/(n+".vista");return fs::exists(p)&&fs::remove(p);}
std::vector<std::string> AndreiBBDD::listarVistas() const{std::vector<std::string>r;if(basededatos.empty())return r;for(auto&e:fs::directory_iterator(fs::path(instalacion)/basededatos))if(e.path().extension()==".vista")r.push_back(e.path().stem().string());std::sort(r.begin(),r.end());return r;}

std::vector<IndiceSecundario> AndreiBBDD::listarIndices(const std::string&t) const{
    std::vector<IndiceSecundario> r;std::ifstream f(rutaTabla(t,".indices"));std::string l;while(std::getline(f,l)){auto q=l.find(',');if(q!=std::string::npos)r.push_back({l.substr(0,q),l.substr(q+1)});}return r;
}
void AndreiBBDD::reconstruirIndices(const std::string&t) const{
    for(const auto&i:listarIndices(t)){std::ofstream f(rutaTabla(t,".sidx_"+i.nombre),std::ios::trunc);for(const auto&r:listarTodo(t)){auto it=r.find(i.columna);if(it!=r.end())f<<std::quoted(it->second)<<","<<r.at("id")<<"\n";}}
}
bool AndreiBBDD::crearIndice(const std::string&n,const std::string&t,const std::string&c){
    auto es=obtenerEsquema(t);if(std::find(es.begin(),es.end(),c)==es.end())return false;for(const auto&i:listarIndices(t))if(i.nombre==n)return false;
    std::ofstream(rutaTabla(t,".indices"),std::ios::app)<<n<<","<<c<<"\n";reconstruirIndices(t);return true;
}
bool AndreiBBDD::eliminarIndice(const std::string&n,const std::string&t){
    auto is=listarIndices(t);bool ok=false;std::ofstream f(rutaTabla(t,".indices"),std::ios::trunc);for(const auto&i:is)if(i.nombre==n)ok=true;else f<<i.nombre<<","<<i.columna<<"\n";
    std::error_code ec;fs::remove(rutaTabla(t,".sidx_"+n),ec);return ok;
}
std::vector<long long> AndreiBBDD::buscarIdsIndice(const std::string&t,const std::string&c,const std::string&v) const{
    for(const auto&i:listarIndices(t))if(i.columna==c){std::vector<long long> ids;std::ifstream f(rutaTabla(t,".sidx_"+i.nombre));std::string val;char coma;long long id;while(f>>std::quoted(val)>>coma>>id)if(val==v)ids.push_back(id);return ids;}return {};
}
std::string AndreiBBDD::explicar(const std::string&q) const{
    std::string up=q;std::transform(up.begin(),up.end(),up.begin(),[](unsigned char c){return std::toupper(c);});
    std::string tabla,col,op;auto de=up.find(" DE ");if(de!=std::string::npos){size_t a=de+4,b=q.find_first_of(" \t\r\n",a);tabla=q.substr(a,b==std::string::npos?q.size()-a:b-a);}
    auto dw=up.find(" DONDE ");if(dw!=std::string::npos){size_t a=dw+7,b=q.find_first_of(" =<>!\t\r\n",a);col=q.substr(a,b-a);if(b!=std::string::npos){while(b<q.size()&&std::isspace((unsigned char)q[b]))++b;if(b<q.size())op=std::string(1,q[b]);}}
    std::ostringstream o;o<<"PLAN DE EJECUCION\nFUENTE: "<<(tabla.empty()?"?":tabla)<<"\n";
    bool ix=false;std::string nom;if(op=="=")for(const auto&i:listarIndices(tabla))if(i.columna==col){ix=true;nom=i.nombre;break;}
    if(ix)o<<"METODO: INDEX SCAN\nINDICE: "<<nom<<"\nCOLUMNA: "<<col<<"\n";else o<<"METODO: TABLE SCAN\n";
    if(esVista(tabla))o<<"FUENTE TIPO: VISTA\n";else o<<"FUENTE TIPO: TABLA\n";return o.str();
}

bool AndreiBBDD::iniciarTransaccion(){
    if(transaccionActiva||basededatos.empty())return false;baseTransaccion=basededatos;rutaSnapshot=fs::path(instalacion)/(".txn_"+basededatos);
    std::error_code ec;fs::remove_all(rutaSnapshot,ec);fs::create_directories(rutaSnapshot);
    auto src=fs::path(instalacion)/basededatos;for(auto&e:fs::directory_iterator(src))if(e.is_regular_file())fs::copy_file(e.path(),rutaSnapshot/e.path().filename(),fs::copy_options::overwrite_existing);
    transaccionActiva=true;return true;
}
bool AndreiBBDD::confirmarTransaccion(){if(!transaccionActiva)return false;std::error_code ec;fs::remove_all(rutaSnapshot,ec);transaccionActiva=false;baseTransaccion.clear();return true;}
bool AndreiBBDD::deshacerTransaccion(){
    if(!transaccionActiva)return false;auto dst=fs::path(instalacion)/baseTransaccion;std::error_code ec;
    for(auto&e:fs::directory_iterator(dst))if(e.is_regular_file())fs::remove(e.path(),ec);
    for(auto&e:fs::directory_iterator(rutaSnapshot))if(e.is_regular_file())fs::copy_file(e.path(),dst/e.path().filename(),fs::copy_options::overwrite_existing);
    fs::remove_all(rutaSnapshot,ec);basededatos=baseTransaccion;transaccionActiva=false;baseTransaccion.clear();return true;
}

bool AndreiBBDD::creaTabla(const std::string& n,const std::string& e){ if(basededatos.empty()){std::cerr<<"No hay base seleccionada\n";return false;} auto csv=rutaTabla(n,".csv"); if(fs::exists(csv)){std::cerr<<"La tabla ya existe\n";return false;} std::ofstream(csv,std::ios::binary); std::ofstream(rutaTabla(n,".esquema"))<<"id,activo,"<<e; std::ofstream(rutaTabla(n,".idx")); std::ofstream(rutaTabla(n,".rel"))<<"PK,id\n"; std::ofstream tf(rutaTabla(n,".tipos")); tf<<"id,ENTERO\nactivo,BOOLEANO\n"; for(const auto&c:AndreiSerializador().desserializar(e)) if(!c.empty()) tf<<c<<",TEXTO\n"; return true; }

bool AndreiBBDD::alteraTablaAnadir(const std::string& t,const std::string& col){
    auto es=obtenerEsquema(t); if(es.empty()||col.empty()) return false;
    if(std::find(es.begin(),es.end(),col)!=es.end()){std::cerr<<"La columna ya existe\n";return false;}
    auto filas=listarTodo(t); es.push_back(col);
    std::ofstream(rutaTabla(t,".esquema"),std::ios::trunc)<<AndreiSerializador().serializar(es);
    std::ofstream csv(rutaTabla(t,".csv"),std::ios::binary|std::ios::trunc); std::ofstream idx(rutaTabla(t,".idx"),std::ios::trunc);
    for(const auto&r:filas){ std::vector<std::string> e; for(size_t i=0;i<es.size()-1;++i)e.push_back(r.at(es[i])); e.push_back(""); auto pos=csv.tellp(); auto reg=prepararRegistro(e); csv.write(reg.data(),reg.size()); idx<<e[0]<<","<<pos<<"\n"; }
    return bool(csv)&&bool(idx);
}

bool AndreiBBDD::alteraTablaEliminarColumna(const std::string& t,const std::string& col){
    if(col=="id"||col=="activo"){std::cerr<<"No se puede eliminar una columna interna\n";return false;}
    auto es=obtenerEsquema(t); auto it=std::find(es.begin(),es.end(),col); if(it==es.end()) return false;
    auto filas=listarTodo(t); es.erase(it);
    std::ofstream(rutaTabla(t,".esquema"),std::ios::trunc)<<AndreiSerializador().serializar(es);
    std::ofstream csv(rutaTabla(t,".csv"),std::ios::binary|std::ios::trunc); std::ofstream idx(rutaTabla(t,".idx"),std::ios::trunc);
    for(const auto&r:filas){ std::vector<std::string> e; for(const auto&c:es)e.push_back(r.at(c)); auto pos=csv.tellp(); auto reg=prepararRegistro(e); csv.write(reg.data(),reg.size()); idx<<e[0]<<","<<pos<<"\n"; }
    return bool(csv)&&bool(idx);
}

bool AndreiBBDD::alteraTablaRenombrarColumna(const std::string& t,const std::string& antigua,const std::string& nueva){
    if(antigua=="id"||antigua=="activo"||nueva.empty()) return false;
    auto es=obtenerEsquema(t); auto it=std::find(es.begin(),es.end(),antigua); if(it==es.end()) return false;
    if(std::find(es.begin(),es.end(),nueva)!=es.end()){std::cerr<<"La columna destino ya existe\n";return false;}
    *it=nueva; std::ofstream f(rutaTabla(t,".esquema"),std::ios::trunc); f<<AndreiSerializador().serializar(es); return bool(f);
}

bool AndreiBBDD::alteraTablaModificarColumna(const std::string& t,const std::string& antigua,const std::string& nueva){
    return alteraTablaRenombrarColumna(t,antigua,nueva);
}

bool AndreiBBDD::truncarTabla(const std::string& t){
    if(basededatos.empty()||!fs::exists(rutaTabla(t,".csv"))) return false;
    std::ofstream csv(rutaTabla(t,".csv"),std::ios::binary|std::ios::trunc); std::ofstream idx(rutaTabla(t,".idx"),std::ios::trunc); return bool(csv)&&bool(idx);
}


namespace {
std::mutex mutexColecciones;
using Asociaciones = std::map<std::string,std::set<std::string>>;
bool nombreValido(const std::string& n){if(n.empty()||n.size()>128)return false;for(unsigned char c:n)if(!std::isalnum(c)&&c!='_'&&c!='-')return false;return n!="."&&n!="..";}
std::filesystem::path rutaColecciones(const AndreiBBDD& db){return std::filesystem::path(db.instalacion)/db.basededatos/".colecciones.json";}
Asociaciones leerColecciones(const AndreiBBDD& db){
 Asociaciones r;auto path=rutaColecciones(db);if(!std::filesystem::exists(path))return r;
 json_object* obj=json_object_from_file(path.string().c_str());if(!obj)throw std::runtime_error("Metadatos de colecciones invalidos");
 if(!json_object_is_type(obj,json_type_object)){json_object_put(obj);throw std::runtime_error("Formato de colecciones invalido");}
 json_object_object_foreach(obj,k,v){if(!json_object_is_type(v,json_type_array)){json_object_put(obj);throw std::runtime_error("Coleccion invalida");}auto& a=r[k];for(int i=0;i<json_object_array_length(v);i++){auto* x=json_object_array_get_idx(v,i);if(json_object_is_type(x,json_type_string))a.insert(json_object_get_string(x));}}
 json_object_put(obj);return r;
}
void guardarColecciones(const AndreiBBDD& db,const Asociaciones& a){
 auto path=rutaColecciones(db);auto temp=path;temp+=".tmp";
 json_object* obj=json_object_new_object();for(auto& [name,tables]:a){auto* ar=json_object_new_array();for(auto& t:tables)json_object_array_add(ar,json_object_new_string(t.c_str()));json_object_object_add(obj,name.c_str(),ar);}
 const char* json=json_object_to_json_string_ext(obj,JSON_C_TO_STRING_PRETTY);
 {std::ofstream out(temp,std::ios::binary|std::ios::trunc);if(!out){json_object_put(obj);throw std::runtime_error("No se pueden guardar colecciones");}out<<json;out.flush();if(!out){json_object_put(obj);throw std::runtime_error("Error escribiendo colecciones");}}
 json_object_put(obj);std::filesystem::rename(temp,path);
}
}
bool AndreiBBDD::eliminarTabla(const std::string& t){
    if(basededatos.empty()) return false; bool habia=false;
    for(const auto&e:{".csv",".esquema",".idx",".rel",".tipos",".indices"}){auto p=rutaTabla(t,e);if(fs::exists(p)){fs::remove(p);habia=true;}}
    if(habia){std::lock_guard<std::mutex> l(mutexColecciones);auto a=leerColecciones(*this);for(auto& [n,ts]:a)ts.erase(t);guardarColecciones(*this,a);}
    return habia;
}

bool AndreiBBDD::eliminarBaseDatos(const std::string& n){
    if(n.empty()) return false; fs::path p=fs::path(instalacion)/n; if(!fs::exists(p)||!fs::is_directory(p)) return false;
    fs::remove_all(p); if(basededatos==n) basededatos.clear(); return true;
}
std::string AndreiBBDD::obtenerClavePrimaria(const std::string& t) const {
    // Compatibilidad: toda tabla AndreiBBDD tiene id como PK implicita.
    auto es=obtenerEsquema(t);
    return es.empty() ? "" : "id";
}

std::vector<ClaveForanea> AndreiBBDD::obtenerClavesForaneas(const std::string& t) const {
    std::vector<ClaveForanea> out;
    std::ifstream f(rutaTabla(t,".rel"));
    std::string linea;
    while(std::getline(f,linea)){
        auto v=AndreiSerializador().desserializar(linea);
        if(v.size()==4 && v[0]=="FK") out.push_back({v[1],v[2],v[3]});
    }
    return out;
}

RestriccionColumna AndreiBBDD::obtenerRestricciones(const std::string& t,const std::string& col) const {
    RestriccionColumna r; std::ifstream f(rutaTabla(t,".rel")); std::string linea;
    while(std::getline(f,linea)){
        auto v=AndreiSerializador().desserializar(linea);
        if(v.size()>=2 && v[1]==col){
            if(v[0]=="NN") r.noNulo=true;
            else if(v[0]=="UQ") r.unico=true;
            else if(v[0]=="DF" && v.size()>=3){r.tieneDefecto=true;r.valorDefecto=v[2];}
        }
    }
    return r;
}

bool AndreiBBDD::establecerNoNulo(const std::string& t,const std::string& col){
    auto es=obtenerEsquema(t); if(std::find(es.begin(),es.end(),col)==es.end()||col=="activo") return false;
    for(const auto&r:listarTodo(t)) if(r.at(col).empty()){std::cerr<<"No se puede aplicar NO NULO: existen valores vacios\n";return false;}
    if(obtenerRestricciones(t,col).noNulo) return true;
    std::ofstream(rutaTabla(t,".rel"),std::ios::app)<<"NN,"<<col<<"\n"; return true;
}

bool AndreiBBDD::establecerUnico(const std::string& t,const std::string& col){
    auto es=obtenerEsquema(t); if(std::find(es.begin(),es.end(),col)==es.end()||col=="activo") return false;
    std::set<std::string> vistos; for(const auto&r:listarTodo(t)){auto v=r.at(col);if(!v.empty()&&!vistos.insert(v).second){std::cerr<<"No se puede aplicar UNICO: hay valores duplicados\n";return false;}}
    if(obtenerRestricciones(t,col).unico) return true;
    std::ofstream(rutaTabla(t,".rel"),std::ios::app)<<"UQ,"<<col<<"\n"; return true;
}

bool AndreiBBDD::establecerPorDefecto(const std::string& t,const std::string& col,const std::string& valor){
    auto es=obtenerEsquema(t); if(std::find(es.begin(),es.end(),col)==es.end()||col=="id"||col=="activo") return false;
    // Reescribe solo la entrada DF de esta columna, conservando el resto de metadatos.
    std::vector<std::string> lineas; std::ifstream in(rutaTabla(t,".rel")); std::string l;
    while(std::getline(in,l)){auto v=AndreiSerializador().desserializar(l);if(!(v.size()>=2&&v[0]=="DF"&&v[1]==col))lineas.push_back(l);}
    std::ofstream out(rutaTabla(t,".rel"),std::ios::trunc);for(const auto&x:lineas)out<<x<<"\n";out<<"DF,"<<col<<","<<valor<<"\n";return bool(out);
}

bool AndreiBBDD::prepararYValidarRestricciones(const std::string& t,std::vector<std::string>& datos,long long idIgnorar) const {
    auto es=obtenerEsquema(t); if(es.size()<2||datos.size()!=es.size()-2) return false;
    for(size_t i=2;i<es.size();++i){
        auto rc=obtenerRestricciones(t,es[i]); auto& valor=datos[i-2];
        if(valor.empty()&&rc.tieneDefecto) valor=rc.valorDefecto;
        if(rc.noNulo&&valor.empty()){std::cerr<<"Violacion NO NULO: "<<t<<"."<<es[i]<<"\n";return false;}
        if(rc.unico&&!valor.empty()) for(const auto&r:listarTodo(t)) if(r.at(es[i])==valor && std::stoll(r.at("id"))!=idIgnorar){std::cerr<<"Violacion UNICO: "<<t<<"."<<es[i]<<"="<<valor<<"\n";return false;}
    }
    return true;
}

bool AndreiBBDD::anadirClaveForanea(const std::string& t,const std::string& col,const std::string& tr,const std::string& cr){
    if(basededatos.empty()) return false;
    auto es=obtenerEsquema(t), er=obtenerEsquema(tr);
    if(es.empty()||er.empty()){std::cerr<<"Tabla local o referenciada no encontrada\n";return false;}
    if(std::find(es.begin(),es.end(),col)==es.end()){std::cerr<<"Columna local no encontrada: "<<col<<"\n";return false;}
    if(std::find(er.begin(),er.end(),cr)==er.end()){std::cerr<<"Columna referenciada no encontrada: "<<cr<<"\n";return false;}
    if(cr!="id"){std::cerr<<"En esta version la FK debe referenciar la PK id\n";return false;}
    for(const auto& fk:obtenerClavesForaneas(t)) if(fk.columna==col){std::cerr<<"La columna ya tiene clave foranea\n";return false;}
    // Los datos existentes tambien deben cumplir la nueva restriccion.
    for(const auto& r:listarTodo(t)){
        auto it=r.find(col); if(it!=r.end()&&!it->second.empty()&&!registroReferenciado(tr,cr,it->second)){
            std::cerr<<"No se puede crear FK: valor existente sin referencia: "<<it->second<<"\n";return false;
        }
    }
    std::ofstream f(rutaTabla(t,".rel"),std::ios::app);
    f<<"FK,"<<col<<","<<tr<<","<<cr<<"\n";
    return bool(f);
}

bool AndreiBBDD::registroReferenciado(const std::string& t,const std::string& col,const std::string& valor) const {
    if(valor.empty()) return true; // cadena vacia equivale a FK no informada en esta version
    if(col=="id"){
        try { return !seleccionar(t,std::stoll(valor)).empty(); } catch(...) { return false; }
    }
    return !buscarColumna(t,col,valor).empty();
}

bool AndreiBBDD::validarClavesForaneas(const std::string& t,const std::vector<std::string>& datos) const {
    auto es=obtenerEsquema(t);
    if(es.size()<2||datos.size()!=es.size()-2) return false;
    for(const auto& fk:obtenerClavesForaneas(t)){
        auto it=std::find(es.begin()+2,es.end(),fk.columna);
        if(it==es.end()) return false;
        size_t pos=static_cast<size_t>(it-(es.begin()+2));
        const auto& valor=datos[pos];
        if(!valor.empty()&&!registroReferenciado(fk.tablaReferenciada,fk.columnaReferenciada,valor)){
            std::cerr<<"Violacion de clave foranea: "<<t<<"."<<fk.columna<<"="<<valor
                     <<" no existe en "<<fk.tablaReferenciada<<"."<<fk.columnaReferenciada<<"\n";
            return false;
        }
    }
    return true;
}

bool AndreiBBDD::puedeEliminarRegistro(const std::string& t,const std::map<std::string,std::string>& registro) const {
    if(basededatos.empty()) return false;
    fs::path dir=fs::path(instalacion)/basededatos;
    if(!fs::exists(dir)) return false;
    for(const auto& entry:fs::directory_iterator(dir)){
        if(entry.path().extension()!=".rel") continue;
        std::string hija=entry.path().stem().string();
        for(const auto& fk:obtenerClavesForaneas(hija)){
            if(fk.tablaReferenciada!=t) continue;
            auto it=registro.find(fk.columnaReferenciada);
            if(it==registro.end()) continue;
            if(!buscarColumna(hija,fk.columna,it->second).empty()){
                std::cerr<<"No se puede eliminar: registro referenciado desde "<<hija<<"."<<fk.columna<<"\n";
                return false;
            }
        }
    }
    return true;
}

std::vector<std::string> AndreiBBDD::obtenerEsquema(const std::string& t) const { std::ifstream f(rutaTabla(t,".esquema")); if(!f) return {}; std::string s((std::istreambuf_iterator<char>(f)),{}); return AndreiSerializador().desserializar(s); }
long long AndreiBBDD::siguienteId(const std::string& t) const { std::ifstream f(rutaTabla(t,".idx")); long long ultimo=0,id,pos; char c; while(f>>id>>c>>pos) ultimo=id; return ultimo+1; }
std::string AndreiBBDD::prepararRegistro(const std::vector<std::string>& e) const { auto s=AndreiSerializador().serializar(e); if(s.size()>tamanoRegistro-1) throw std::runtime_error("Registro demasiado grande"); s.append(tamanoRegistro-1-s.size(),' '); s.push_back('\n'); return s; }
long long AndreiBBDD::insertarDatos(const std::string& t,const std::vector<std::string>& entrada){
    if(basededatos.empty()||!fs::exists(rutaTabla(t,".csv"))) return -1;
    auto es=obtenerEsquema(t); std::vector<std::string> datos=entrada;
    if(es.size()<2||datos.size()!=es.size()-2){std::cerr<<"Numero de valores incorrecto\n";return -1;}
    auto tipos=obtenerTipos(t); for(size_t i=0;i<datos.size();++i){auto tipo=tipos[es[i+2]];datos[i]=normalizarTipo(tipo,datos[i]);if(!validarTipo(tipo,datos[i])){std::cerr<<"Tipo invalido para "<<es[i+2]<<": "<<datos[i]<<" (esperado "<<tipoNombre(tipo)<<")\n";return -1;}} if(!prepararYValidarRestricciones(t,datos)||!validarClavesForaneas(t,datos)) return -1;
    auto id=siguienteId(t); std::vector<std::string> e={std::to_string(id),"1"}; e.insert(e.end(),datos.begin(),datos.end());
    auto reg=prepararRegistro(e); std::ofstream f(rutaTabla(t,".csv"),std::ios::binary|std::ios::app); auto pos=fs::file_size(rutaTabla(t,".csv"));
    f.write(reg.data(),reg.size()); if(!f) return -1; std::ofstream(rutaTabla(t,".idx"),std::ios::app)<<id<<","<<pos<<"\n"; reconstruirIndices(t); return id;
}
std::int64_t AndreiBBDD::buscarPosicion(const std::string& t,long long buscado) const { std::ifstream f(rutaTabla(t,".idx")); long long id,pos; char c; while(f>>id>>c>>pos) if(id==buscado) return pos; return -1; }
std::vector<std::string> AndreiBBDD::leerRegistro(const std::string& t,long long id) const { auto pos=buscarPosicion(t,id); if(pos<0)return{}; std::ifstream f(rutaTabla(t,".csv"),std::ios::binary); f.seekg(pos); std::string b(tamanoRegistro,'\0'); f.read(b.data(),tamanoRegistro); b.resize(f.gcount()); auto e=AndreiSerializador().desserializar(trimDerecha(b)); if(e.size()<2||e[1]=="0")return{}; return e; }
std::map<std::string,std::string> AndreiBBDD::seleccionar(const std::string& t,long long id) const { auto e=leerRegistro(t,id), es=obtenerEsquema(t); std::map<std::string,std::string> r; if(e.size()!=es.size())return r; for(size_t i=0;i<es.size();++i)r[es[i]]=e[i]; return r; }
std::vector<std::map<std::string,std::string>> AndreiBBDD::listarTodo(const std::string& t) const { std::vector<std::map<std::string,std::string>> out; auto es=obtenerEsquema(t); std::ifstream f(rutaTabla(t,".csv"),std::ios::binary); while(f){std::string b(tamanoRegistro,'\0');f.read(b.data(),tamanoRegistro);if(f.gcount()==0)break;b.resize(f.gcount());auto e=AndreiSerializador().desserializar(trimDerecha(b));if(e.size()==es.size()&&e.size()>1&&e[1]=="1"){std::map<std::string,std::string> r;for(size_t i=0;i<es.size();++i)r[es[i]]=e[i];out.push_back(r);}}return out; }
std::vector<std::map<std::string,std::string>> AndreiBBDD::buscarColumna(const std::string& t,const std::string& col,const std::string& val) const { auto es=obtenerEsquema(t); auto it=std::find(es.begin(),es.end(),col); if(it==es.end())return{}; std::vector<std::map<std::string,std::string>> out;for(const auto&i:listarIndices(t))if(i.columna==col){for(auto id:buscarIdsIndice(t,col,val)){auto r=seleccionar(t,id);if(!r.empty())out.push_back(r);}return out;}size_t p=it-es.begin();for(auto&r:listarTodo(t)) if(r.at(es[p])==val) out.push_back(r); return out; }
bool AndreiBBDD::actualizar(const std::string& t,long long id,const std::vector<std::string>& datos){
    auto pos=buscarPosicion(t,id); auto es=obtenerEsquema(t);
    if(pos<0||leerRegistro(t,id).empty()||datos.size()!=es.size()-2) return false;
    std::vector<std::string> validados=datos; auto tipos=obtenerTipos(t);for(size_t i=0;i<validados.size();++i){auto tipo=tipos[es[i+2]];validados[i]=normalizarTipo(tipo,validados[i]);if(!validarTipo(tipo,validados[i])){std::cerr<<"Tipo invalido para "<<es[i+2]<<"\n";return false;}} if(!prepararYValidarRestricciones(t,validados,id)||!validarClavesForaneas(t,validados)) return false;
    std::vector<std::string> e={std::to_string(id),"1"}; e.insert(e.end(),validados.begin(),validados.end()); auto reg=prepararRegistro(e);
    std::fstream f(rutaTabla(t,".csv"),std::ios::binary|std::ios::in|std::ios::out); f.seekp(pos); f.write(reg.data(),reg.size()); bool ok=bool(f); if(ok)reconstruirIndices(t); return ok;
}
/*OLD*/
#if 0
    std::vector<std::string> e={std::to_string(id),"1"}; e.insert(e.end(),datos.begin(),datos.end()); auto reg=prepararRegistro(e);
    std::fstream f(rutaTabla(t,".csv"),std::ios::binary|std::ios::in|std::ios::out); f.seekp(pos); f.write(reg.data(),reg.size()); return bool(f);
}
#endif
bool AndreiBBDD::eliminar(const std::string& t,long long id){
    auto pos=buscarPosicion(t,id); auto e=leerRegistro(t,id); if(pos<0||e.empty()) return false;
    auto registro=seleccionar(t,id); if(!puedeEliminarRegistro(t,registro)) return false;
    e[1]="0"; auto reg=prepararRegistro(e); std::fstream f(rutaTabla(t,".csv"),std::ios::binary|std::ios::in|std::ios::out); f.seekp(pos); f.write(reg.data(),reg.size()); return bool(f);
}

long long AndreiBBDD::insertarConColumnas(const std::string& t,const std::vector<std::string>& columnas,const std::vector<std::string>& valores){
    auto es=obtenerEsquema(t); if(es.size()<2||columnas.size()!=valores.size()) return -1;
    std::vector<std::string> datos(es.size()-2,"");
    for(size_t i=0;i<columnas.size();++i){
        auto it=std::find(es.begin()+2,es.end(),columnas[i]);
        if(it==es.end()){std::cerr<<"Columna no encontrada: "<<columnas[i]<<"\n";return -1;}
        datos[static_cast<size_t>(it-(es.begin()+2))]=valores[i];
    }
    return insertarDatos(t,datos);
}

long long AndreiBBDD::insertarDesdeSeleccion(const std::string& destino,const std::string& origen){
    auto ed=obtenerEsquema(destino), eo=obtenerEsquema(origen);
    if(ed.size()<2||eo.size()<2||ed.size()!=eo.size()){std::cerr<<"Los esquemas no son compatibles\n";return -1;}
    long long n=0;
    for(const auto&r:listarTodo(origen)){
        std::vector<std::string> datos;
        for(size_t i=2;i<eo.size();++i) datos.push_back(r.at(eo[i]));
        if(insertarDatos(destino,datos)<0) return -1;
        ++n;
    }
    return n;
}

long long AndreiBBDD::actualizarDonde(const std::string& t,const std::map<std::string,std::string>& cambios,const std::string& colDonde,const std::string& valDonde){
    auto es=obtenerEsquema(t); if(es.size()<2||cambios.empty()) return -1;
    for(const auto&[c,v]:cambios){(void)v;if(c=="id"||c=="activo"||std::find(es.begin(),es.end(),c)==es.end()){std::cerr<<"Columna no modificable: "<<c<<"\n";return -1;}}
    if(!colDonde.empty()&&std::find(es.begin(),es.end(),colDonde)==es.end()){std::cerr<<"Columna WHERE/DONDE no encontrada\n";return -1;}
    long long n=0;
    auto filas=listarTodo(t);
    for(auto&r:filas){
        if(!colDonde.empty() && r.at(colDonde)!=valDonde) continue;
        std::vector<std::string> datos;
        for(size_t i=2;i<es.size();++i){auto it=cambios.find(es[i]);datos.push_back(it==cambios.end()?r.at(es[i]):it->second);}
        if(actualizar(t,std::stoll(r.at("id")),datos)) ++n;
    }
    return n;
}

long long AndreiBBDD::eliminarDonde(const std::string& t,const std::string& colDonde,const std::string& valDonde){
    auto es=obtenerEsquema(t); if(es.size()<2) return -1;
    if(!colDonde.empty()&&std::find(es.begin(),es.end(),colDonde)==es.end()){std::cerr<<"Columna WHERE/DONDE no encontrada\n";return -1;}
    long long n=0;
    auto filas=listarTodo(t);
    for(const auto&r:filas){
        if(!colDonde.empty() && r.at(colDonde)!=valDonde) continue;
        if(eliminar(t,std::stoll(r.at("id")))) ++n;
    }
    return n;
}

// -----------------------------------------------------------------------------
// DQL: SELECCIONAR ... DE ...
// Subconjunto implementado: DISTINTO, COMO (alias y LIKE), DONDE, = <> != > <
// >= <=, Y/O/NO, ENTRE, EN, ORDENAR POR, ASCENDENTE/DESCENDENTE y LIMITE.
// -----------------------------------------------------------------------------
namespace {
struct TokenDQL { std::string texto; bool literal=false; };
static std::string dqlMayus(std::string s){std::transform(s.begin(),s.end(),s.begin(),[](unsigned char c){return std::toupper(c);});return s;}
static bool dqlNumero(const std::string&s,double&v){char*e=nullptr;v=std::strtod(s.c_str(),&e);return e&&*e=='\0'&&e!=s.c_str();}
static int dqlComparar(const std::string&a,const std::string&b){double x,y;if(dqlNumero(a,x)&&dqlNumero(b,y))return x<y?-1:(x>y?1:0);return a<b?-1:(a>b?1:0);}
static std::vector<TokenDQL> dqlTokens(const std::string&s){
 std::vector<TokenDQL> r; size_t i=0;
 while(i<s.size()){
  if(std::isspace((unsigned char)s[i])||s[i]==';'){++i;continue;}
  if(s[i]=='\''||s[i]=='"'){char q=s[i++];std::string v;while(i<s.size()){if(s[i]==q){if(i+1<s.size()&&s[i+1]==q){v+=q;i+=2;continue;}++i;break;}v+=s[i++];}r.push_back({v,true});continue;}
  if(std::string("(),*").find(s[i])!=std::string::npos){r.push_back({std::string(1,s[i++]),false});continue;}
  if(std::string("=<>!").find(s[i])!=std::string::npos){std::string v(1,s[i++]);if(i<s.size()&&(s[i]=='='||(v=="<"&&s[i]=='>')))v+=s[i++];r.push_back({v,false});continue;}
  std::string v;while(i<s.size()&&!std::isspace((unsigned char)s[i])&&std::string("(),;*=<>!\"'").find(s[i])==std::string::npos)v+=s[i++];
  if(!v.empty())r.push_back({v,false});
 }
 return r;
}
class ExprDQL {
 const std::vector<TokenDQL>&t; size_t p=0; const std::map<std::string,std::string>&f;
 bool kw(const std::string&x)const{return p<t.size()&&!t[p].literal&&dqlMayus(t[p].texto)==x;}
 bool tomar(const std::string&x){if(kw(x)){++p;return true;}return false;}
 std::string valor(){if(p>=t.size())throw std::runtime_error("Falta un valor en DONDE");auto x=t[p++];if(!x.literal){auto it=f.find(x.texto);if(it!=f.end())return it->second;}return x.texto;}
 bool prim(){
  if(p<t.size()&&t[p].texto=="("){++p;bool v=o();if(p>=t.size()||t[p].texto!=")")throw std::runtime_error("Falta ')' en DONDE");++p;return v;}
  std::string izq=valor(); bool neg=tomar("NO");
  if(tomar("ENTRE")){std::string a=valor();if(!tomar("Y"))throw std::runtime_error("ENTRE necesita Y");std::string b=valor();bool v=dqlComparar(izq,a)>=0&&dqlComparar(izq,b)<=0;return neg?!v:v;}
  if(tomar("EN")){if(p>=t.size()||t[p++].texto!="(")throw std::runtime_error("EN necesita '('");bool v=false;while(p<t.size()&&t[p].texto!=")"){if(izq==valor())v=true;if(p<t.size()&&t[p].texto==",")++p;else break;}if(p>=t.size()||t[p++].texto!=")")throw std::runtime_error("EN necesita ')'");return neg?!v:v;}
  if(tomar("COMO")||tomar("LIKE")){std::string patron=valor(), rx="^";for(char c:patron){if(c=='%')rx+=".*";else if(c=='_')rx+='.';else{if(std::string(".^$|()[]{}*+?\\").find(c)!=std::string::npos)rx+='\\';rx+=c;}}rx+="$";bool v=std::regex_match(izq,std::regex(rx));return neg?!v:v;}
  if(neg) throw std::runtime_error("NO debe preceder una condicion, ENTRE, EN o COMO");
  if(p>=t.size())throw std::runtime_error("Falta operador de comparacion");std::string op=t[p++].texto;std::string der=valor();int c=dqlComparar(izq,der);
  if(op=="=")return c==0;if(op=="<>"||op=="!=")return c!=0;if(op==">")return c>0;if(op=="<")return c<0;if(op==">=")return c>=0;if(op=="<=")return c<=0;throw std::runtime_error("Operador no soportado: "+op);
 }
 bool no(){if(tomar("NO"))return !no();return prim();}
 bool y(){bool v=no();while(tomar("Y")){bool d=no();v=v&&d;}return v;}
 bool o(){bool v=y();while(tomar("O")){bool d=y();v=v||d;}return v;}
public: ExprDQL(const std::vector<TokenDQL>&tt,const std::map<std::string,std::string>&ff):t(tt),f(ff){} bool evaluar(){if(t.empty())return true;bool v=o();if(p!=t.size())throw std::runtime_error("Expresion DONDE no reconocida cerca de: "+t[p].texto);return v;}
};
struct CampoDQL{
 std::string nombre,alias,funcion;
 bool agregado() const { return !funcion.empty(); }
};
static std::string dqlNumeroTexto(double v){
 std::ostringstream o; o<<std::setprecision(15)<<v; std::string s=o.str();
 if(s.find('.')!=std::string::npos){while(!s.empty()&&s.back()=='0')s.pop_back();if(!s.empty()&&s.back()=='.')s.pop_back();}
 return s;
}
}

ResultadoConsulta AndreiBBDD::consultarInterno(const std::string& consulta, int profundidad) const {
    auto t=dqlTokens(consulta); size_t p=0;
    auto kw=[&](const std::string&x){return p<t.size()&&!t[p].literal&&dqlMayus(t[p].texto)==x;};
    auto toma=[&](const std::string&x){if(kw(x)){++p;return true;}return false;};
    if(!toma("SELECCIONAR")) throw std::runtime_error("La consulta debe comenzar por SELECCIONAR");
    bool distinto=toma("DISTINTO");
    std::vector<CampoDQL> campos; bool estrella=false;
    if(p<t.size()&&t[p].texto=="*"){estrella=true;++p;}
    else while(p<t.size()&&!kw("DE")){
        CampoDQL c;
        std::string posible=dqlMayus(t[p].texto);
        if((posible=="CONTAR"||posible=="SUMA"||posible=="MEDIA"||posible=="MINIMO"||posible=="MAXIMO") && p+1<t.size() && t[p+1].texto=="("){
            c.funcion=posible; p+=2;
            if(p>=t.size()) throw std::runtime_error("Falta argumento de funcion agregada");
            c.nombre=t[p++].texto;
            if(p>=t.size()||t[p++].texto!=")") throw std::runtime_error("Falta ')' en funcion agregada");
            c.alias=c.funcion+"("+c.nombre+")";
        } else { c.nombre=t[p++].texto; c.alias=c.nombre; }
        if(toma("COMO")){if(p>=t.size())throw std::runtime_error("Falta alias tras COMO");c.alias=t[p++].texto;}
        campos.push_back(c);
        if(p<t.size()&&t[p].texto==","){++p;continue;}
        if(!kw("DE")) throw std::runtime_error("Se esperaba ',' o DE");
    }
    if(!toma("DE")||p>=t.size()) throw std::runtime_error("Falta DE tabla");
    std::string tablaBase=t[p++].texto; std::string aliasBase=tablaBase;
    auto esClausula=[&](size_t z){if(z>=t.size()||t[z].literal)return false;auto u=dqlMayus(t[z].texto);return u=="JOIN"||u=="UNIR"||u=="LEFT"||u=="IZQUIERDA"||u=="RIGHT"||u=="DERECHA"||u=="FULL"||u=="COMPLETO"||u=="CROSS"||u=="CRUZADO"||u=="DONDE"||u=="AGRUPAR"||u=="TENIENDO"||u=="ORDENAR"||u=="LIMITE";};
    if(p<t.size()&&!esClausula(p)){if(kw("COMO")){++p;if(p>=t.size())throw std::runtime_error("Falta alias");aliasBase=t[p++].texto;}else aliasBase=t[p++].texto;}
    std::vector<std::string> esquemaBase; std::vector<std::map<std::string,std::string>> filasVistaBase;
    if(esVista(tablaBase)){if(profundidad>12)throw std::runtime_error("Demasiada recursion de vistas");auto rv=consultarInterno(consultaVista(tablaBase),profundidad+1);esquemaBase=rv.columnas;for(const auto&fila:rv.filas){std::map<std::string,std::string> m;for(size_t i=0;i<rv.columnas.size();++i)m[rv.columnas[i]]=fila[i];filasVistaBase.push_back(std::move(m));}}
    else esquemaBase=obtenerEsquema(tablaBase);
    if(esquemaBase.empty()) throw std::runtime_error("Tabla o vista no encontrada: "+tablaBase);

    struct JoinInfo{std::string tabla,alias,izq,der,tipo;}; std::vector<JoinInfo> joins;
    while(kw("JOIN")||kw("UNIR")||kw("LEFT")||kw("IZQUIERDA")||kw("RIGHT")||kw("DERECHA")||kw("FULL")||kw("COMPLETO")||kw("CROSS")||kw("CRUZADO")){
        std::string tipo="INNER";
        if(kw("LEFT")||kw("IZQUIERDA")){tipo="LEFT";++p;if(!(toma("JOIN")||toma("UNIR")))throw std::runtime_error("LEFT necesita JOIN");}
        else if(kw("RIGHT")||kw("DERECHA")){tipo="RIGHT";++p;if(!(toma("JOIN")||toma("UNIR")))throw std::runtime_error("RIGHT necesita JOIN");}
        else if(kw("FULL")||kw("COMPLETO")){tipo="FULL";++p;if(!(toma("JOIN")||toma("UNIR")))throw std::runtime_error("FULL necesita JOIN");}
        else if(kw("CROSS")||kw("CRUZADO")){tipo="CROSS";++p;if(!(toma("JOIN")||toma("UNIR")))throw std::runtime_error("CROSS necesita JOIN");}
        else ++p;
        if(p>=t.size())throw std::runtime_error("Falta tabla tras JOIN");std::string tj=t[p++].texto,aj=tj;
        if(p<t.size()&&!esClausula(p)&&!kw("EN")&&!kw("ON")){if(kw("COMO")){++p;if(p>=t.size())throw std::runtime_error("Falta alias JOIN");aj=t[p++].texto;}else aj=t[p++].texto;}
        if(obtenerEsquema(tj).empty())throw std::runtime_error("Tabla JOIN no encontrada: "+tj);
        std::string izq,der;if(tipo!="CROSS"){if(!(toma("EN")||toma("ON")))throw std::runtime_error("JOIN necesita EN");if(p>=t.size())throw std::runtime_error("Falta columna izquierda");izq=t[p++].texto;if(p>=t.size()||t[p++].texto!="=")throw std::runtime_error("JOIN solo admite igualdad");if(p>=t.size())throw std::runtime_error("Falta columna derecha");der=t[p++].texto;}
        joins.push_back({tj,aj,izq,der,tipo});
    }

    auto cualificar=[&](const std::string& alias,const std::map<std::string,std::string>& fila){
        std::map<std::string,std::string> r;for(const auto&[k,v]:fila){r[alias+"."+k]=v;if(!r.count(k))r[k]=v;}return r;
    };
    std::vector<std::map<std::string,std::string>> filas;
    if(esVista(tablaBase)){for(const auto&f:filasVistaBase)filas.push_back(cualificar(aliasBase,f));}else for(const auto&f:listarTodo(tablaBase))filas.push_back(cualificar(aliasBase,f));
    std::vector<std::string> esquemaSalida;for(const auto&c:esquemaBase)esquemaSalida.push_back(joins.empty()?c:aliasBase+"."+c);
    for(const auto&j:joins){
        auto ej=obtenerEsquema(j.tabla);for(const auto&c:ej)esquemaSalida.push_back(j.alias+"."+c);
        std::vector<std::map<std::string,std::string>> nuevas;auto derechas=listarTodo(j.tabla);std::vector<bool> usados(derechas.size(),false);
        for(const auto&acum:filas){bool encontrado=false;
            for(size_t ri=0;ri<derechas.size();++ri){auto q=cualificar(j.alias,derechas[ri]);auto comb=acum;for(const auto&[k,v]:q)if(k.find('.')!=std::string::npos||!comb.count(k))comb[k]=v;
                bool coincide=j.tipo=="CROSS";if(!coincide){auto vi=comb.find(j.izq),vd=comb.find(j.der);if(vi==comb.end()||vd==comb.end())throw std::runtime_error("Columna JOIN no encontrada");coincide=vi->second==vd->second;}
                if(coincide){nuevas.push_back(std::move(comb));encontrado=true;usados[ri]=true;}
            }
            if((j.tipo=="LEFT"||j.tipo=="FULL")&&!encontrado){auto comb=acum;for(const auto&c:ej){comb[j.alias+"."+c]="__ANDREI_NULL__";if(!comb.count(c))comb[c]="__ANDREI_NULL__";}nuevas.push_back(std::move(comb));}
        }
        if(j.tipo=="RIGHT"||j.tipo=="FULL")for(size_t ri=0;ri<derechas.size();++ri)if(!usados[ri]){std::map<std::string,std::string> comb;for(const auto&c:esquemaBase){comb[aliasBase+"."+c]="__ANDREI_NULL__";comb[c]="__ANDREI_NULL__";}auto q=cualificar(j.alias,derechas[ri]);for(const auto&[k,v]:q)if(k.find('.')!=std::string::npos||!comb.count(k))comb[k]=v;nuevas.push_back(std::move(comb));}
        filas=std::move(nuevas);
    }
    if(estrella){for(const auto&c:esquemaSalida)campos.push_back({c,c,""});}
    auto existeCampo=[&](const std::string& c){
        if(c=="*")return true;
        if(!filas.empty())return filas.front().count(c)>0;
        if(c.find('.')!=std::string::npos)return std::find(esquemaSalida.begin(),esquemaSalida.end(),c)!=esquemaSalida.end();
        return std::find(esquemaBase.begin(),esquemaBase.end(),c)!=esquemaBase.end();
    };
    for(const auto&c:campos)if(!existeCampo(c.nombre))throw std::runtime_error("Columna no encontrada: "+c.nombre);

    std::vector<TokenDQL> donde,having; std::vector<std::string> grupos; std::string orden; bool desc=false; long long limite=-1;
    if(toma("DONDE")){int nivel=0;while(p<t.size()){if(t[p].texto=="(")++nivel;if(t[p].texto==")")--nivel;if(nivel==0&&(kw("AGRUPAR")||kw("TENIENDO")||kw("ORDENAR")||kw("LIMITE")))break;donde.push_back(t[p++]);}}
    if(toma("AGRUPAR")){if(!toma("POR"))throw std::runtime_error("AGRUPAR necesita POR");while(p<t.size()&&!kw("TENIENDO")&&!kw("ORDENAR")&&!kw("LIMITE")){grupos.push_back(t[p++].texto);if(p<t.size()&&t[p].texto==",")++p;else break;}}
    if(toma("TENIENDO")){int nivel=0;while(p<t.size()){if(t[p].texto=="(")++nivel;if(t[p].texto==")")--nivel;if(nivel==0&&(kw("ORDENAR")||kw("LIMITE")))break;having.push_back(t[p++]);}}
    if(toma("ORDENAR")){if(!toma("POR")||p>=t.size())throw std::runtime_error("ORDENAR necesita POR columna");orden=t[p++].texto;if(toma("DESCENDENTE"))desc=true;else toma("ASCENDENTE");}
    if(toma("LIMITE")){if(p>=t.size())throw std::runtime_error("Falta numero tras LIMITE");limite=std::stoll(t[p++].texto);if(limite<0)throw std::runtime_error("LIMITE no puede ser negativo");}
    if(p!=t.size())throw std::runtime_error("Clausula no reconocida: "+t[p].texto);
    for(const auto&g:grupos)if(!existeCampo(g))throw std::runtime_error("Columna AGRUPAR no encontrada: "+g);

    std::vector<std::map<std::string,std::string>> filtradas;
    for(const auto&f:filas)if(donde.empty()||ExprDQL(donde,f).evaluar())filtradas.push_back(f);
    bool hayAgregados=std::any_of(campos.begin(),campos.end(),[](const CampoDQL&c){return c.agregado();});
    if(!hayAgregados&&!grupos.empty()) throw std::runtime_error("AGRUPAR POR requiere al menos una funcion agregada");
    if(!hayAgregados&&!having.empty()) throw std::runtime_error("TENIENDO requiere una consulta agregada");
    if(hayAgregados){for(const auto&c:campos)if(!c.agregado()&&std::find(grupos.begin(),grupos.end(),c.nombre)==grupos.end())throw std::runtime_error("Columna no agregada debe aparecer en AGRUPAR POR: "+c.nombre);}

    ResultadoConsulta r; for(const auto&c:campos)r.columnas.push_back(c.alias);
    std::vector<std::map<std::string,std::string>> salidaMap;
    if(hayAgregados){
        std::map<std::string,std::vector<std::map<std::string,std::string>>> bolsas;
        if(grupos.empty()) bolsas[""]=filtradas;
        else for(const auto&f:filtradas){std::string k;for(const auto&g:grupos)k+=std::to_string(f.at(g).size())+":"+f.at(g)+"|";bolsas[k].push_back(f);}
        if(filtradas.empty()&&grupos.empty()) bolsas[""]={};
        for(const auto&[clave,bolsa]:bolsas){(void)clave;std::map<std::string,std::string> out;
            for(const auto&c:campos){std::string v;
                if(!c.agregado()) v=bolsa.empty()?"":bolsa.front().at(c.nombre);
                else if(c.funcion=="CONTAR"){
                    if(c.nombre=="*")v=std::to_string(bolsa.size());else{long long n=0;for(const auto&f:bolsa)if(f.count(c.nombre)&&!f.at(c.nombre).empty())++n;v=std::to_string(n);}
                } else if(c.funcion=="SUMA"||c.funcion=="MEDIA"){
                    double suma=0;long long n=0;for(const auto&f:bolsa){double x;if(!dqlNumero(f.at(c.nombre),x))throw std::runtime_error(c.funcion+" requiere valores numericos en "+c.nombre);suma+=x;++n;}v=dqlNumeroTexto(c.funcion=="MEDIA"?(n?suma/n:0):suma);
                } else if(c.funcion=="MINIMO"||c.funcion=="MAXIMO"){
                    if(bolsa.empty())v="";else{v=bolsa.front().at(c.nombre);for(const auto&f:bolsa){int cmp=dqlComparar(f.at(c.nombre),v);if((c.funcion=="MINIMO"&&cmp<0)||(c.funcion=="MAXIMO"&&cmp>0))v=f.at(c.nombre);}}
                }
                out[c.alias]=v;out[c.funcion+"("+c.nombre+")"]=v;if(!c.agregado())out[c.nombre]=v;
            }
            if(having.empty()||ExprDQL(having,out).evaluar())salidaMap.push_back(std::move(out));
        }
    } else {
        for(const auto&f:filtradas){std::map<std::string,std::string> out=f;for(const auto&c:campos)out[c.alias]=f.at(c.nombre);salidaMap.push_back(std::move(out));}
    }
    if(!orden.empty()){
        auto tieneOrden=[&](const auto&f){return f.count(orden)>0;}; if(!salidaMap.empty()&&!tieneOrden(salidaMap.front()))throw std::runtime_error("Columna de ordenacion no encontrada: "+orden);
        std::stable_sort(salidaMap.begin(),salidaMap.end(),[&](const auto&a,const auto&b){int c=dqlComparar(a.at(orden),b.at(orden));return desc?c>0:c<0;});
    }
    std::set<std::string> vistos;
    for(const auto&f:salidaMap){std::vector<std::string> fila;std::string clave;for(const auto&c:campos){auto v=f.at(c.alias);fila.push_back(v);clave+=std::to_string(v.size())+":"+v+"|";}if(distinto&&!vistos.insert(clave).second)continue;r.filas.push_back(std::move(fila));if(limite>=0&&(long long)r.filas.size()>=limite)break;}
    return r;
}



ResultadoConsulta AndreiBBDD::consultar(const std::string& consulta) const{
    std::string q=consulta;
    // Subconsultas no correlacionadas. Se resuelven de dentro hacia fuera.
    for(int guard=0;guard<16;++guard){
        size_t ini=std::string::npos,fin=std::string::npos;int nivel=0,nivelObjetivo=-1;bool comilla=false;char qc=0;
        for(size_t i=0;i<q.size();++i){char c=q[i];if((c=='\''||c=='"')){if(!comilla){comilla=true;qc=c;}else if(qc==c)comilla=false;continue;}if(comilla)continue;
            if(c=='('){++nivel;size_t j=i+1;while(j<q.size()&&std::isspace((unsigned char)q[j]))++j;std::string pref=q.substr(j,std::min<size_t>(11,q.size()-j));std::transform(pref.begin(),pref.end(),pref.begin(),[](unsigned char x){return std::toupper(x);});if(pref.rfind("SELECCIONAR",0)==0){ini=i;nivelObjetivo=nivel;}}
            else if(c==')'&&nivel>0){if(ini!=std::string::npos&&nivel==nivelObjetivo){fin=i;break;}--nivel;}
        }
        if(ini==std::string::npos||fin==std::string::npos)break;
        auto sub=q.substr(ini+1,fin-ini-1);auto rr=consultarInterno(sub,1);if(rr.columnas.size()!=1)throw std::runtime_error("La subconsulta debe devolver una sola columna");
        std::string rep;
        // Si aparece tras EN, producir lista; en otro caso exigir un unico valor escalar.
        size_t k=ini;while(k>0&&std::isspace((unsigned char)q[k-1]))--k;size_t b=k;while(b>0&&std::isalpha((unsigned char)q[b-1]))--b;std::string antes=q.substr(b,k-b);std::transform(antes.begin(),antes.end(),antes.begin(),[](unsigned char x){return std::toupper(x);});
        if(antes=="EN"){rep="(";for(size_t i=0;i<rr.filas.size();++i){if(i)rep+=",";std::string v=rr.filas[i][0];std::string esc;for(char c:v){if(c=='\'')esc+="''";else esc+=c;}rep+="'"+esc+"'";}rep+=")";}
        else {if(rr.filas.size()!=1)throw std::runtime_error("Subconsulta escalar debe devolver exactamente una fila");std::string v=rr.filas[0][0];std::string esc;for(char c:v){if(c=='\'')esc+="''";else esc+=c;}rep="'"+esc+"'";}
        q.replace(ini,fin-ini+1,rep);
    }
    return consultarInterno(q,0);
}

namespace {
using Parents=std::map<std::string,std::string>;
Parents leerPadres(const AndreiBBDD& db){
 Parents p;auto path=std::filesystem::path(db.instalacion)/db.basededatos/".colecciones_padres.json";
 if(!std::filesystem::exists(path))return p;
 json_object* root=json_object_from_file(path.string().c_str());if(!root)throw std::runtime_error("Jerarquia invalida");
 json_object_object_foreach(root,k,v){if(json_object_is_type(v,json_type_string))p[k]=json_object_get_string(v);}
 json_object_put(root);return p;
}
void guardarPadres(const AndreiBBDD& db,const Parents& p){
 auto path=std::filesystem::path(db.instalacion)/db.basededatos/".colecciones_padres.json";auto tmp=path;tmp+=".tmp";
 json_object* root=json_object_new_object();for(auto&[k,v]:p)json_object_object_add(root,k.c_str(),json_object_new_string(v.c_str()));
 {std::ofstream f(tmp,std::ios::binary|std::ios::trunc);if(!f){json_object_put(root);throw std::runtime_error("No se puede guardar jerarquia");}f<<json_object_to_json_string_ext(root,JSON_C_TO_STRING_PRETTY);f.flush();if(!f){json_object_put(root);throw std::runtime_error("Error de escritura");}}
 json_object_put(root);std::filesystem::rename(tmp,path);
}
}
bool AndreiBBDD::crearSubcoleccion(const std::string& parent,const std::string& name){
 std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty()||!nombreValido(name))return false;
 auto a=leerColecciones(*this);if(!a.count(parent)||a.count(name))return false;
 auto p=leerPadres(*this);a[name]={};p[name]=parent;guardarColecciones(*this,a);guardarPadres(*this,p);return true;
}
bool AndreiBBDD::moverColeccion(const std::string& name,const std::string& parent){
 std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty())return false;
 auto a=leerColecciones(*this);if(!a.count(name)||(!parent.empty()&&!a.count(parent))||name==parent)return false;
 auto p=leerPadres(*this);std::string x=parent;std::set<std::string> seen;
 while(!x.empty()){if(x==name||!seen.insert(x).second)return false;auto it=p.find(x);if(it==p.end())break;x=it->second;}
 if(parent.empty())p.erase(name);else p[name]=parent;guardarPadres(*this,p);return true;
}
std::vector<std::string> AndreiBBDD::subcoleccionesDe(const std::string& name) const {
 std::lock_guard<std::mutex> l(mutexColecciones);std::vector<std::string> r;if(basededatos.empty())return r;
 for(auto&[child,parent]:leerPadres(*this))if(parent==name)r.push_back(child);return r;
}
std::vector<std::string> AndreiBBDD::tablasDeColeccionRecursiva(const std::string& name) const {
 std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty())return {};
 auto a=leerColecciones(*this);if(!a.count(name))return {};auto p=leerPadres(*this);
 std::set<std::string> tables,visited;std::vector<std::string> pending{name};
 while(!pending.empty()){auto n=pending.back();pending.pop_back();if(!visited.insert(n).second)continue;
  for(auto&t:a[n])tables.insert(t);for(auto&[child,parent]:p)if(parent==n)pending.push_back(child);
 }
 return {tables.begin(),tables.end()};
}
std::string AndreiBBDD::arbolColecciones() const {
 std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty())return "{}";
 auto a=leerColecciones(*this);auto p=leerPadres(*this);json_object* root=json_object_new_object();
 for(auto&[n,tables]:a){auto* node=json_object_new_object();auto it=p.find(n);
  if(it==p.end())json_object_object_add(node,"parent",json_object_new_null());
  else json_object_object_add(node,"parent",json_object_new_string(it->second.c_str()));
  auto* arr=json_object_new_array();for(auto&t:tables)json_object_array_add(arr,json_object_new_string(t.c_str()));
  json_object_object_add(node,"tables",arr);json_object_object_add(root,n.c_str(),node);
 }
 std::string out=json_object_to_json_string_ext(root,JSON_C_TO_STRING_PRETTY);json_object_put(root);return out;
}
bool AndreiBBDD::crearColeccion(const std::string& n){std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty()||!nombreValido(n))return false;auto a=leerColecciones(*this);if(a.count(n))return false;a[n]={};guardarColecciones(*this,a);return true;}
bool AndreiBBDD::eliminarColeccion(const std::string& n){std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty())return false;auto a=leerColecciones(*this);if(!a.count(n))return false;auto p=leerPadres(*this);for(auto&[child,parent]:p)if(parent==n)return false;p.erase(n);a.erase(n);guardarColecciones(*this,a);guardarPadres(*this,p);return true;}
std::vector<std::string> AndreiBBDD::listarColecciones() const {std::lock_guard<std::mutex> l(mutexColecciones);std::vector<std::string> r;if(basededatos.empty())return r;for(auto& [n,v]:leerColecciones(*this))r.push_back(n);return r;}
bool AndreiBBDD::agregarTablaColeccion(const std::string& t,const std::string& n){std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty())return false;auto tablas=listarTablas();if(std::find(tablas.begin(),tablas.end(),t)==tablas.end())return false;auto a=leerColecciones(*this);auto it=a.find(n);if(it==a.end()||!it->second.insert(t).second)return false;guardarColecciones(*this,a);return true;}
bool AndreiBBDD::quitarTablaColeccion(const std::string& t,const std::string& n){std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty())return false;auto a=leerColecciones(*this);auto it=a.find(n);if(it==a.end()||!it->second.erase(t))return false;guardarColecciones(*this,a);return true;}
std::vector<std::string> AndreiBBDD::tablasDeColeccion(const std::string& n) const {std::lock_guard<std::mutex> l(mutexColecciones);if(basededatos.empty())return {};auto a=leerColecciones(*this);auto it=a.find(n);if(it==a.end())return {};return {it->second.begin(),it->second.end()};}
std::vector<std::string> AndreiBBDD::coleccionesDeTabla(const std::string& t) const {std::lock_guard<std::mutex> l(mutexColecciones);std::vector<std::string> r;if(basededatos.empty())return r;for(auto& [n,v]:leerColecciones(*this))if(v.count(t))r.push_back(n);return r;}

```
**AndreiORM.cpp**
```cpp
#include "AndreiORM.hpp"
#include <json-c/json.h>
#include <stdexcept>
#include <algorithm>
#include <cctype>
#include <memory>
using J=std::unique_ptr<json_object,decltype(&json_object_put)>;
static J parse(const std::string& s){auto* p=json_tokener_parse(s.c_str());if(!p)throw std::invalid_argument("JSON invalido");return J(p,json_object_put);}
static std::string dump(json_object* o){return o?json_object_to_json_string_ext(o,JSON_C_TO_STRING_PLAIN):"null";}
static std::string hex(const std::string& s){static const char* d="0123456789abcdef";std::string r;r.reserve(s.size()*2);for(unsigned char c:s){r+=d[c>>4];r+=d[c&15];}return r;}
static std::string unhex(const std::string& s){if(s.size()%2)throw std::runtime_error("Documento corrupto");std::string r;for(size_t i=0;i<s.size();i+=2){auto n=[](char c)->int{if(c>='0'&&c<='9')return c-'0';if(c>='a'&&c<='f')return c-'a'+10;throw std::runtime_error("Hex invalido");};r+=char((n(s[i])<<4)|n(s[i+1]));}return r;}
std::string AndreiORM::tabla(const std::string& c) const {if(c.empty())throw std::invalid_argument("Coleccion vacia");std::string t="orm_";for(unsigned char x:c){if((x<128&&std::isalnum(x))||x=='_')t+=char(x);else throw std::invalid_argument("Coleccion invalida");}return t;}
void AndreiORM::asegurar(const std::string& c){auto t=tabla(c);auto v=db.listarTablas();if(std::find(v.begin(),v.end(),t)==v.end()&&!db.creaTablaTipada(t,{{"documento",TipoDato::TEXTO}}))throw std::runtime_error("Error creando tabla ORM");}
long long AndreiORM::guardar(const std::string& c,const std::string& s){auto j=parse(s);asegurar(c);auto id=db.insertarConColumnas(tabla(c),{"documento"},{hex(dump(j.get()))});if(id<0)throw std::runtime_error("Error insertando");return id;}
std::string AndreiORM::obtener(const std::string& c,long long id) const {auto t=tabla(c);auto v=db.listarTablas();if(std::find(v.begin(),v.end(),t)==v.end())return "null";auto r=db.seleccionar(t,id);auto it=r.find("documento");return it==r.end()?"null":unhex(it->second);}
std::string AndreiORM::todos(const std::string& c) const {auto t=tabla(c);auto v=db.listarTablas();if(std::find(v.begin(),v.end(),t)==v.end())return "[]";J a(json_object_new_array(),json_object_put);auto rows=db.consultar("SELECCIONAR documento DE "+t);for(auto& r:rows.filas)if(!r.empty()){auto j=parse(unhex(r[0]));json_object_array_add(a.get(),j.release());}return dump(a.get());}
std::string AndreiORM::buscar(const std::string& c,const std::string& campo,const std::string& valor) const {auto expected=parse(valor),all=parse(todos(c));J out(json_object_new_array(),json_object_put);for(size_t i=0;i<json_object_array_length(all.get());++i){auto* item=json_object_array_get_idx(all.get(),i);json_object* field=nullptr;if(json_object_is_type(item,json_type_object)&&json_object_object_get_ex(item,campo.c_str(),&field)&&json_object_equal(field,expected.get()))json_object_array_add(out.get(),json_object_get(item));}return dump(out.get());}
bool AndreiORM::actualizar(const std::string& c,long long id,const std::string& cambios){auto before=obtener(c,id);if(before=="null")return false;auto old=parse(before),patch=parse(cambios);if(json_object_is_type(old.get(),json_type_object)&&json_object_is_type(patch.get(),json_type_object)){json_object_object_foreach(patch.get(),key,value){json_object_object_add(old.get(),key,json_object_get(value));}}else old=std::move(patch);auto n=db.actualizarDonde(tabla(c),{{"documento",hex(dump(old.get()))}},"id",std::to_string(id));if(n<0)throw std::runtime_error("Error actualizando");return n>0;}
bool AndreiORM::eliminar(const std::string& c,long long id){return db.eliminar(tabla(c),id);}
long long AndreiORM::contar(const std::string& c) const {auto all=parse(todos(c));return json_object_array_length(all.get());}

```
**andreibbdd_c.cpp**
```cpp
// API C de AndreiBBDD para Windows (andreibbdd.dll).
//
// En Linux, PHP usa la extensión nativa (src/conector_php.cpp). En Windows,
// XAMPP no puede cargar esa extensión, así que PHP carga esta DLL con FFI
// (UI/andreibbdd_ffi.php). Para que FFI solo tenga que declarar dos funciones,
// todas las operaciones pasan por una única entrada:
//
//   char* andreibbdd_llamar(const char* funcion, const char* argumentos_json);
//   void  andreibbdd_liberar(char* texto);
//
// `argumentos_json` es un array JSON con los parámetros. La respuesta es
// {"ok":true,"resultado":...} o {"ok":false,"error":"..."} y debe liberarse
// con andreibbdd_liberar. Cada función reproduce exactamente lo que devuelve
// la función equivalente de conector_php.cpp (mismos nombres sin el prefijo
// andreibbdd_). El valor NULL viaja como JSON null y se guarda con el
// marcador interno __ANDREI_NULL__.
#include <json-c/json.h>

#include <cstdlib>
#include <cstring>
#include <functional>
#include <map>
#include <memory>
#include <stdexcept>
#include <string>
#include <vector>

#include "AndreiBBDD.hpp"

#ifdef _WIN32
#define ANDREIBBDD_EXPORT extern "C" __declspec(dllexport)
#else
#define ANDREIBBDD_EXPORT extern "C" __attribute__((visibility("default")))
#endif

namespace {

const char* const MARCADOR_NULL = "__ANDREI_NULL__";

std::unique_ptr<AndreiBBDD> g_motor;
std::string g_config = "config.json";

AndreiBBDD& motor() {
    if (!g_motor) g_motor = std::make_unique<AndreiBBDD>(g_config);
    return *g_motor;
}

/* ---------- Argumentos ---------- */
struct Argumentos {
    json_object* lista;

    size_t cantidad() const { return json_object_array_length(lista); }

    json_object* en(size_t i) const { return json_object_array_get_idx(lista, i); }

    std::string texto(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        json_object* v = en(i);
        if (!v) return "";
        const char* s = json_object_get_string(v);
        return s ? s : "";
    }

    std::string textoOpcional(size_t i, const std::string& defecto) const {
        return i < cantidad() ? texto(i) : defecto;
    }

    long long entero(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        return static_cast<long long>(json_object_get_int64(en(i)));
    }

    // Igual que php_array_strings: null -> marcador, el resto como texto.
    std::vector<std::string> listaTextos(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        json_object* a = en(i);
        std::vector<std::string> r;
        if (json_object_is_type(a, json_type_array)) {
            for (size_t k = 0; k < json_object_array_length(a); ++k) {
                json_object* v = json_object_array_get_idx(a, k);
                r.emplace_back(v ? json_object_get_string(v) : MARCADOR_NULL);
            }
        } else if (json_object_is_type(a, json_type_object)) {
            json_object_object_foreach(a, clave, valor) {
                (void)clave;
                r.emplace_back(valor ? json_object_get_string(valor) : MARCADOR_NULL);
            }
        } else {
            throw std::runtime_error("Se esperaba un array");
        }
        return r;
    }

    // Igual que php_assoc_strings: solo claves de texto.
    std::map<std::string, std::string> mapaTextos(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        json_object* o = en(i);
        std::map<std::string, std::string> r;
        if (json_object_is_type(o, json_type_object)) {
            json_object_object_foreach(o, clave, valor) {
                r[clave] = valor ? json_object_get_string(valor) : MARCADOR_NULL;
            }
        } else if (!json_object_is_type(o, json_type_array)) {
            throw std::runtime_error("Se esperaba un array");
        }
        return r;
    }
};

/* ---------- Resultados ---------- */
json_object* valor(const std::string& v) {
    return v == MARCADOR_NULL ? nullptr : json_object_new_string_len(v.data(), static_cast<int>(v.size()));
}

json_object* textos(const std::vector<std::string>& xs) {
    json_object* a = json_object_new_array();
    for (const auto& x : xs) json_object_array_add(a, json_object_new_string_len(x.data(), static_cast<int>(x.size())));
    return a;
}

json_object* mapa(const std::map<std::string, std::string>& m) {
    // PHP devuelve [] (array vacío) cuando no hay datos; un objeto vacío
    // también se decodifica como array vacío con json_decode(..., true).
    json_object* o = json_object_new_object();
    for (const auto& [k, v] : m) json_object_object_add(o, k.c_str(), valor(v));
    return o;
}

json_object* filas(const std::vector<std::map<std::string, std::string>>& fs) {
    json_object* a = json_object_new_array();
    for (const auto& f : fs) json_object_array_add(a, mapa(f));
    return a;
}

json_object* booleano(bool b) { return json_object_new_boolean(b); }
json_object* entero(long long n) { return json_object_new_int64(n); }
json_object* cadena(const std::string& s) { return json_object_new_string_len(s.data(), static_cast<int>(s.size())); }

TipoDato tipoDesdeTexto(std::string x) {
    for (auto& c : x) c = static_cast<char>(std::toupper(static_cast<unsigned char>(c)));
    if (x == "ENTERO" || x == "INT") return TipoDato::ENTERO;
    if (x == "REAL" || x == "FLOAT") return TipoDato::REAL;
    if (x == "DECIMAL" || x == "NUMERICO") return TipoDato::DECIMAL;
    if (x == "FECHA" || x == "DATE") return TipoDato::FECHA;
    if (x == "BOOLEANO" || x == "BOOL") return TipoDato::BOOLEANO;
    return TipoDato::TEXTO;
}

const char* nombreTipo(TipoDato t) {
    return t == TipoDato::ENTERO     ? "ENTERO"
           : t == TipoDato::REAL     ? "REAL"
           : t == TipoDato::BOOLEANO ? "BOOLEANO"
           : t == TipoDato::FECHA    ? "FECHA"
           : t == TipoDato::DECIMAL  ? "DECIMAL"
                                     : "TEXTO";
}

using Funcion = std::function<json_object*(const Argumentos&)>;

const std::map<std::string, Funcion>& funciones() {
    static const std::map<std::string, Funcion> tabla = {
        /* Configuración / bases */
        {"configurar", [](const Argumentos& a) {
             g_config = a.texto(0);
             g_motor = std::make_unique<AndreiBBDD>(g_config);
             return booleano(true);
         }},
        {"configuracion", [](const Argumentos&) {
             json_object* o = json_object_new_object();
             json_object_object_add(o, "instalacion", cadena(motor().instalacion));
             json_object_object_add(o, "base", cadena(motor().basededatos));
             json_object_object_add(o, "tamanoRegistro", entero(static_cast<long long>(motor().tamanoRegistro)));
             return o;
         }},
        {"crear_base", [](const Argumentos& a) { return booleano(motor().creaBaseDatos(a.texto(0))); }},
        {"usar_base", [](const Argumentos& a) { return booleano(motor().usaBaseDatos(a.texto(0))); }},
        {"listar_bases", [](const Argumentos&) { return textos(motor().listarBases()); }},
        {"eliminar_base", [](const Argumentos& a) { return booleano(motor().eliminarBaseDatos(a.texto(0))); }},

        /* Tablas / introspección */
        {"listar_tablas", [](const Argumentos&) { return textos(motor().listarTablas()); }},
        {"crear_tabla", [](const Argumentos& a) { return booleano(motor().creaTabla(a.texto(0), a.texto(1))); }},
        {"crear_tabla_tipada", [](const Argumentos& a) {
             std::vector<DefinicionColumna> d;
             json_object* o = a.cantidad() > 1 ? a.en(1) : nullptr;
             if (json_object_is_type(o, json_type_object)) {
                 json_object_object_foreach(o, clave, valor) {
                     const char* t = valor ? json_object_get_string(valor) : "";
                     d.push_back({clave, tipoDesdeTexto(t ? t : "")});
                 }
             } else if (!json_object_is_type(o, json_type_array)) {
                 throw std::runtime_error("Se esperaba un array de columnas");
             }
             return booleano(motor().creaTablaTipada(a.texto(0), d));
         }},
        {"esquema", [](const Argumentos& a) { return textos(motor().obtenerEsquema(a.texto(0))); }},
        {"tipos", [](const Argumentos& a) {
             json_object* o = json_object_new_object();
             for (const auto& [k, v] : motor().obtenerTipos(a.texto(0))) json_object_object_add(o, k.c_str(), cadena(nombreTipo(v)));
             return o;
         }},
        {"clave_primaria", [](const Argumentos& a) { return cadena(motor().obtenerClavePrimaria(a.texto(0))); }},
        {"claves_foraneas", [](const Argumentos& a) {
             json_object* r = json_object_new_array();
             for (const auto& fk : motor().obtenerClavesForaneas(a.texto(0))) {
                 json_object* d = json_object_new_object();
                 json_object_object_add(d, "columna", cadena(fk.columna));
                 json_object_object_add(d, "tabla_referenciada", cadena(fk.tablaReferenciada));
                 json_object_object_add(d, "columna_referenciada", cadena(fk.columnaReferenciada));
                 json_object_array_add(r, d);
             }
             return r;
         }},
        {"restricciones", [](const Argumentos& a) {
             auto r = motor().obtenerRestricciones(a.texto(0), a.texto(1));
             json_object* o = json_object_new_object();
             json_object_object_add(o, "no_nulo", booleano(r.noNulo));
             json_object_object_add(o, "unico", booleano(r.unico));
             json_object_object_add(o, "tiene_defecto", booleano(r.tieneDefecto));
             json_object_object_add(o, "valor_defecto", r.tieneDefecto ? cadena(r.valorDefecto) : nullptr);
             return o;
         }},
        {"siguiente_id", [](const Argumentos& a) { return entero(motor().siguienteId(a.texto(0))); }},
        {"truncar_tabla", [](const Argumentos& a) { return booleano(motor().truncarTabla(a.texto(0))); }},
        {"eliminar_tabla", [](const Argumentos& a) { return booleano(motor().eliminarTabla(a.texto(0))); }},

        /* ALTER */
        {"alterar_anadir", [](const Argumentos& a) { return booleano(motor().alteraTablaAnadir(a.texto(0), a.texto(1))); }},
        {"alterar_eliminar_columna", [](const Argumentos& a) { return booleano(motor().alteraTablaEliminarColumna(a.texto(0), a.texto(1))); }},
        {"alterar_renombrar_columna", [](const Argumentos& a) { return booleano(motor().alteraTablaRenombrarColumna(a.texto(0), a.texto(1), a.texto(2))); }},
        {"alterar_modificar_columna", [](const Argumentos& a) { return booleano(motor().alteraTablaModificarColumna(a.texto(0), a.texto(1), a.texto(2))); }},

        /* CRUD */
        {"insertar", [](const Argumentos& a) { return entero(motor().insertarDatos(a.texto(0), a.listaTextos(1))); }},
        {"insertar_columnas", [](const Argumentos& a) { return entero(motor().insertarConColumnas(a.texto(0), a.listaTextos(1), a.listaTextos(2))); }},
        {"insertar_desde", [](const Argumentos& a) { return entero(motor().insertarDesdeSeleccion(a.texto(0), a.texto(1))); }},
        {"seleccionar", [](const Argumentos& a) { return mapa(motor().seleccionar(a.texto(0), a.entero(1))); }},
        {"listar", [](const Argumentos& a) { return filas(motor().listarTodo(a.texto(0))); }},
        {"buscar", [](const Argumentos& a) { return filas(motor().buscarColumna(a.texto(0), a.texto(1), a.texto(2))); }},
        {"actualizar", [](const Argumentos& a) { return booleano(motor().actualizar(a.texto(0), a.entero(1), a.listaTextos(2))); }},
        {"eliminar", [](const Argumentos& a) { return booleano(motor().eliminar(a.texto(0), a.entero(1))); }},
        {"actualizar_donde", [](const Argumentos& a) {
             return entero(motor().actualizarDonde(a.texto(0), a.mapaTextos(1), a.textoOpcional(2, ""), a.textoOpcional(3, "")));
         }},
        {"eliminar_donde", [](const Argumentos& a) {
             return entero(motor().eliminarDonde(a.texto(0), a.textoOpcional(1, ""), a.textoOpcional(2, "")));
         }},

        /* Relaciones / restricciones */
        {"anadir_clave_foranea", [](const Argumentos& a) {
             return booleano(motor().anadirClaveForanea(a.texto(0), a.texto(1), a.texto(2), a.textoOpcional(3, "id")));
         }},
        {"establecer_no_nulo", [](const Argumentos& a) { return booleano(motor().establecerNoNulo(a.texto(0), a.texto(1))); }},
        {"establecer_unico", [](const Argumentos& a) { return booleano(motor().establecerUnico(a.texto(0), a.texto(1))); }},
        {"establecer_por_defecto", [](const Argumentos& a) { return booleano(motor().establecerPorDefecto(a.texto(0), a.texto(1), a.texto(2))); }},

        /* Consultas */
        {"consultar", [](const Argumentos& a) {
             auto r = motor().consultar(a.texto(0));
             json_object* lista = json_object_new_array();
             for (const auto& f : r.filas) {
                 json_object* fila = json_object_new_object();
                 for (size_t i = 0; i < r.columnas.size() && i < f.size(); ++i)
                     json_object_object_add(fila, r.columnas[i].c_str(), valor(f[i]));
                 json_object_array_add(lista, fila);
             }
             return lista;
         }},
        {"explicar", [](const Argumentos& a) { return cadena(motor().explicar(a.texto(0))); }},

        /* Índices */
        {"crear_indice", [](const Argumentos& a) { return booleano(motor().crearIndice(a.texto(0), a.texto(1), a.texto(2))); }},
        {"eliminar_indice", [](const Argumentos& a) { return booleano(motor().eliminarIndice(a.texto(0), a.texto(1))); }},
        {"indices", [](const Argumentos& a) {
             json_object* r = json_object_new_array();
             for (const auto& i : motor().listarIndices(a.texto(0))) {
                 json_object* d = json_object_new_object();
                 json_object_object_add(d, "nombre", cadena(i.nombre));
                 json_object_object_add(d, "columna", cadena(i.columna));
                 json_object_array_add(r, d);
             }
             return r;
         }},

        /* Vistas */
        {"crear_vista", [](const Argumentos& a) { return booleano(motor().crearVista(a.texto(0), a.texto(1))); }},
        {"eliminar_vista", [](const Argumentos& a) { return booleano(motor().eliminarVista(a.texto(0))); }},
        {"listar_vistas", [](const Argumentos&) { return textos(motor().listarVistas()); }},

        /* Transacciones */
        {"iniciar_transaccion", [](const Argumentos&) { return booleano(motor().iniciarTransaccion()); }},
        {"confirmar", [](const Argumentos&) { return booleano(motor().confirmarTransaccion()); }},
        {"deshacer", [](const Argumentos&) { return booleano(motor().deshacerTransaccion()); }},
        {"en_transaccion", [](const Argumentos&) { return booleano(motor().enTransaccion()); }},

        /* Colecciones */
        {"crear_subcoleccion", [](const Argumentos& a) { return booleano(motor().crearSubcoleccion(a.texto(0), a.texto(1))); }},
        {"mover_coleccion", [](const Argumentos& a) { return booleano(motor().moverColeccion(a.texto(0), a.texto(1))); }},
        {"subcolecciones_de", [](const Argumentos& a) { return textos(motor().subcoleccionesDe(a.texto(0))); }},
        {"tablas_coleccion_recursiva", [](const Argumentos& a) { return textos(motor().tablasDeColeccionRecursiva(a.texto(0))); }},
        {"arbol_colecciones", [](const Argumentos&) { return cadena(motor().arbolColecciones()); }},
        {"crear_coleccion", [](const Argumentos& a) { return booleano(motor().crearColeccion(a.texto(0))); }},
        {"eliminar_coleccion", [](const Argumentos& a) { return booleano(motor().eliminarColeccion(a.texto(0))); }},
        {"agregar_tabla_coleccion", [](const Argumentos& a) { return booleano(motor().agregarTablaColeccion(a.texto(0), a.texto(1))); }},
        {"quitar_tabla_coleccion", [](const Argumentos& a) { return booleano(motor().quitarTablaColeccion(a.texto(0), a.texto(1))); }},
        {"listar_colecciones", [](const Argumentos&) { return textos(motor().listarColecciones()); }},
        {"tablas_de_coleccion", [](const Argumentos& a) { return textos(motor().tablasDeColeccion(a.texto(0))); }},
        {"colecciones_de_tabla", [](const Argumentos& a) { return textos(motor().coleccionesDeTabla(a.texto(0))); }},
    };
    return tabla;
}

char* duplicar(const std::string& s) {
    char* r = static_cast<char*>(std::malloc(s.size() + 1));
    if (r) std::memcpy(r, s.c_str(), s.size() + 1);
    return r;
}

char* respuestaError(const std::string& mensaje) {
    json_object* o = json_object_new_object();
    json_object_object_add(o, "ok", json_object_new_boolean(0));
    json_object_object_add(o, "error", cadena(mensaje));
    char* r = duplicar(json_object_to_json_string_ext(o, JSON_C_TO_STRING_PLAIN));
    json_object_put(o);
    return r;
}

}  // namespace

ANDREIBBDD_EXPORT char* andreibbdd_llamar(const char* funcion, const char* argumentos_json) {
    try {
        const auto& tabla = funciones();
        auto it = tabla.find(funcion ? funcion : "");
        if (it == tabla.end()) return respuestaError(std::string("Funcion desconocida: ") + (funcion ? funcion : ""));

        json_object* args = json_tokener_parse(argumentos_json && *argumentos_json ? argumentos_json : "[]");
        if (!json_object_is_type(args, json_type_array)) {
            json_object_put(args);
            return respuestaError("Los argumentos deben ser un array JSON");
        }
        json_object* resultado = nullptr;
        try {
            resultado = it->second(Argumentos{args});
        } catch (...) {
            json_object_put(args);
            throw;
        }
        json_object_put(args);

        json_object* o = json_object_new_object();
        json_object_object_add(o, "ok", json_object_new_boolean(1));
        json_object_object_add(o, "resultado", resultado);
        char* r = duplicar(json_object_to_json_string_ext(o, JSON_C_TO_STRING_PLAIN));
        json_object_put(o);
        return r;
    } catch (const std::exception& e) {
        return respuestaError(e.what());
    } catch (...) {
        return respuestaError("Error desconocido en AndreiBBDD");
    }
}

ANDREIBBDD_EXPORT void andreibbdd_liberar(char* texto) { std::free(texto); }

```
**andreiorm_c.cpp**
```cpp
#include <json-c/json.h>
#include "AndreiORM.hpp"
#include <cstring>
#include <cstdlib>
#include <memory>
#include <string>
struct Handle {AndreiBBDD db; AndreiORM orm; Handle(const char* config,const char* base):db(config),orm(db){if(!db.usaBaseDatos(base)){db.creaBaseDatos(base);if(!db.usaBaseDatos(base))throw std::runtime_error("No se pudo abrir la base");}}};
static thread_local std::string error;
extern "C" {
void* andrei_orm_abrir(const char* config,const char* base){try{error.clear();return new Handle(config,base);}catch(const std::exception& e){error=e.what();return nullptr;}}
void andrei_orm_cerrar(void* h){delete static_cast<Handle*>(h);}
const char* andrei_orm_error(){return error.c_str();}
void andrei_orm_liberar(char* s){std::free(s);}
static char* duplicar(const std::string& s){auto* p=(char*)std::malloc(s.size()+1);if(!p)throw std::bad_alloc();std::memcpy(p,s.c_str(),s.size()+1);return p;}
long long andrei_orm_guardar(void* h,const char* c,const char* json){try{error.clear();return static_cast<Handle*>(h)->orm.guardar(c,std::string(json));}catch(const std::exception&e){error=e.what();return -1;}}
char* andrei_orm_obtener(void* h,const char* c,long long id){try{error.clear();return duplicar(static_cast<Handle*>(h)->orm.obtener(c,id));}catch(const std::exception&e){error=e.what();return nullptr;}}
char* andrei_orm_todos(void* h,const char* c){try{error.clear();return duplicar(static_cast<Handle*>(h)->orm.todos(c));}catch(const std::exception&e){error=e.what();return nullptr;}}
char* andrei_orm_buscar(void* h,const char* c,const char* campo,const char* v){try{error.clear();return duplicar(static_cast<Handle*>(h)->orm.buscar(c,campo,std::string(v)));}catch(const std::exception&e){error=e.what();return nullptr;}}
int andrei_orm_actualizar(void* h,const char* c,long long id,const char* cambios){try{error.clear();return static_cast<Handle*>(h)->orm.actualizar(c,id,std::string(cambios));}catch(const std::exception&e){error=e.what();return -1;}}
int andrei_orm_eliminar(void* h,const char* c,long long id){try{error.clear();return static_cast<Handle*>(h)->orm.eliminar(c,id);}catch(const std::exception&e){error=e.what();return -1;}}
long long andrei_orm_contar(void* h,const char* c){try{error.clear();return static_cast<Handle*>(h)->orm.contar(c);}catch(const std::exception&e){error=e.what();return -1;}}
int andrei_coleccion_crear(void* h,const char* n){try{error.clear();return static_cast<Handle*>(h)->db.crearColeccion(n)?1:0;}catch(const std::exception&e){error=e.what();return -1;}}
int andrei_coleccion_eliminar(void* h,const char* n){try{error.clear();return static_cast<Handle*>(h)->db.eliminarColeccion(n)?1:0;}catch(const std::exception&e){error=e.what();return -1;}}
int andrei_coleccion_agregar(void* h,const char* n,const char* t){try{error.clear();return static_cast<Handle*>(h)->db.agregarTablaColeccion(t,n)?1:0;}catch(const std::exception&e){error=e.what();return -1;}}
int andrei_coleccion_quitar(void* h,const char* n,const char* t){try{error.clear();return static_cast<Handle*>(h)->db.quitarTablaColeccion(t,n)?1:0;}catch(const std::exception&e){error=e.what();return -1;}}
static char* listaJson(const std::vector<std::string>& v){json_object* a=json_object_new_array();for(auto& s:v)json_object_array_add(a,json_object_new_string(s.c_str()));char* p=duplicar(json_object_to_json_string(a));json_object_put(a);return p;}
char* andrei_coleccion_listar(void* h){try{error.clear();return listaJson(static_cast<Handle*>(h)->db.listarColecciones());}catch(const std::exception&e){error=e.what();return nullptr;}}
char* andrei_coleccion_tablas(void* h,const char* n){try{error.clear();return listaJson(static_cast<Handle*>(h)->db.tablasDeColeccion(n));}catch(const std::exception&e){error=e.what();return nullptr;}}
char* andrei_tabla_colecciones(void* h,const char* t){try{error.clear();return listaJson(static_cast<Handle*>(h)->db.coleccionesDeTabla(t));}catch(const std::exception&e){error=e.what();return nullptr;}}

int andrei_coleccion_subcrear(void* h,const char* parent,const char* name){try{error.clear();return static_cast<Handle*>(h)->db.crearSubcoleccion(parent,name)?1:0;}catch(const std::exception&e){error=e.what();return -1;}}
int andrei_coleccion_mover(void* h,const char* name,const char* parent){try{error.clear();return static_cast<Handle*>(h)->db.moverColeccion(name,parent)?1:0;}catch(const std::exception&e){error=e.what();return -1;}}
char* andrei_coleccion_hijas(void* h,const char* name){try{error.clear();return listaJson(static_cast<Handle*>(h)->db.subcoleccionesDe(name));}catch(const std::exception&e){error=e.what();return nullptr;}}
char* andrei_coleccion_recursivo(void* h,const char* name){try{error.clear();return listaJson(static_cast<Handle*>(h)->db.tablasDeColeccionRecursiva(name));}catch(const std::exception&e){error=e.what();return nullptr;}}
char* andrei_coleccion_arbol(void* h){try{error.clear();return duplicar(static_cast<Handle*>(h)->db.arbolColecciones());}catch(const std::exception&e){error=e.what();return nullptr;}}

}

```
**conector_php.cpp**
```cpp
extern "C" {
#include <php.h>
#include <ext/standard/info.h>
#include <Zend/zend_exceptions.h>
}
#include "AndreiBBDD.hpp"
#include <algorithm>
#include <cctype>
#include <map>
#include <memory>
#include <string>
#include <vector>

static std::unique_ptr<AndreiBBDD> g_motor;
static std::string g_config = "config.json";

static AndreiBBDD& motor(){
    if(!g_motor) g_motor = std::make_unique<AndreiBBDD>(g_config);
    return *g_motor;
}
static void lanzar(const std::exception& e){ zend_throw_exception(nullptr,e.what(),0); }

static bool php_array_strings(zval* arr,std::vector<std::string>& out){
    if(Z_TYPE_P(arr)!=IS_ARRAY) return false;
    zval* v;
    ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(arr),v){
        if(Z_TYPE_P(v)==IS_NULL){ out.emplace_back("__ANDREI_NULL__"); continue; }
        zend_string* zs=zval_get_string(v);
        out.emplace_back(ZSTR_VAL(zs),ZSTR_LEN(zs));
        zend_string_release(zs);
    } ZEND_HASH_FOREACH_END();
    return true;
}
static bool php_assoc_strings(zval* arr,std::map<std::string,std::string>& out){
    if(Z_TYPE_P(arr)!=IS_ARRAY) return false;
    zend_string* key; zend_ulong idx; zval* v;
    ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(arr),idx,key,v){
        if(!key) continue;
        if(Z_TYPE_P(v)==IS_NULL){ out[ZSTR_VAL(key)]="__ANDREI_NULL__"; continue; }
        zend_string* zs=zval_get_string(v);
        out[ZSTR_VAL(key)]=std::string(ZSTR_VAL(zs),ZSTR_LEN(zs));
        zend_string_release(zs);
    } ZEND_HASH_FOREACH_END();
    return true;
}
static TipoDato tipo_desde_php(const std::string& n){
    std::string x=n;
    std::transform(x.begin(),x.end(),x.begin(),[](unsigned char c){return std::toupper(c);});
    if(x=="ENTERO"||x=="INT") return TipoDato::ENTERO;
    if(x=="REAL"||x=="FLOAT") return TipoDato::REAL;
    if(x=="DECIMAL"||x=="NUMERICO") return TipoDato::DECIMAL;
    if(x=="FECHA"||x=="DATE") return TipoDato::FECHA;
    if(x=="BOOLEANO"||x=="BOOL") return TipoDato::BOOLEANO;
    return TipoDato::TEXTO;
}
static const char* nombre_tipo(TipoDato t){
    return t==TipoDato::ENTERO?"ENTERO":
           t==TipoDato::REAL?"REAL":
           t==TipoDato::BOOLEANO?"BOOLEANO":
           t==TipoDato::FECHA?"FECHA":
           t==TipoDato::DECIMAL?"DECIMAL":"TEXTO";
}
static void valor_php(zval* z,const std::string& v){
    if(v=="__ANDREI_NULL__") ZVAL_NULL(z);
    else ZVAL_STRINGL(z,v.c_str(),v.size());
}
static void mapa_a_array(const std::map<std::string,std::string>& m,zval* out){
    array_init(out);
    for(const auto&[k,v]:m){
        if(v=="__ANDREI_NULL__") add_assoc_null(out,k.c_str());
        else add_assoc_stringl(out,k.c_str(),v.c_str(),v.size());
    }
}
static void filas_a_array(const std::vector<std::map<std::string,std::string>>& filas,zval* out){
    array_init(out);
    for(const auto&m:filas){
        zval row; mapa_a_array(m,&row); add_next_index_zval(out,&row);
    }
}
static void strings_a_array(const std::vector<std::string>& xs,zval* out){
    array_init(out);
    for(const auto& x:xs) add_next_index_stringl(out,x.c_str(),x.size());
}

/* Configuración / bases */
PHP_FUNCTION(andreibbdd_configurar){char*c;size_t n;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(c,n) ZEND_PARSE_PARAMETERS_END();try{g_config.assign(c,n);g_motor=std::make_unique<AndreiBBDD>(g_config);RETURN_TRUE;}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_configuracion){ZEND_PARSE_PARAMETERS_NONE();try{array_init(return_value);add_assoc_string(return_value,"instalacion",const_cast<char*>(motor().instalacion.c_str()));add_assoc_string(return_value,"base",const_cast<char*>(motor().basededatos.c_str()));add_assoc_long(return_value,"tamanoRegistro",(zend_long)motor().tamanoRegistro);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_crear_base){char*n;size_t l;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(n,l) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().creaBaseDatos(std::string(n,l)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_usar_base){char*n;size_t l;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(n,l) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().usaBaseDatos(std::string(n,l)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_listar_bases){ZEND_PARSE_PARAMETERS_NONE();try{strings_a_array(motor().listarBases(),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_eliminar_base){char*n;size_t l;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(n,l) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().eliminarBaseDatos(std::string(n,l)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* Tablas / introspección */
PHP_FUNCTION(andreibbdd_listar_tablas){ZEND_PARSE_PARAMETERS_NONE();try{strings_a_array(motor().listarTablas(),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_crear_tabla){char*t,*e;size_t tl,el;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(e,el) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().creaTabla(std::string(t,tl),std::string(e,el)));}catch(const std::exception&ex){lanzar(ex);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_crear_tabla_tipada){char*t;size_t tl;zval*a;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_ARRAY(a) ZEND_PARSE_PARAMETERS_END();try{std::vector<DefinicionColumna>d;zend_string*k;zend_ulong i;zval*v;ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(a),i,k,v){if(!k)continue;zend_string*zs=zval_get_string(v);d.push_back({ZSTR_VAL(k),tipo_desde_php(ZSTR_VAL(zs))});zend_string_release(zs);}ZEND_HASH_FOREACH_END();RETURN_BOOL(motor().creaTablaTipada(std::string(t,tl),d));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_esquema){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{strings_a_array(motor().obtenerEsquema(std::string(t,tl)),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_tipos){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{auto m=motor().obtenerTipos(std::string(t,tl));array_init(return_value);for(const auto&[k,v]:m)add_assoc_string(return_value,k.c_str(),const_cast<char*>(nombre_tipo(v)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_clave_primaria){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{auto x=motor().obtenerClavePrimaria(std::string(t,tl));RETURN_STRINGL(x.c_str(),x.size());}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_claves_foraneas){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{array_init(return_value);for(const auto&fk:motor().obtenerClavesForaneas(std::string(t,tl))){zval d;array_init(&d);add_assoc_string(&d,"columna",const_cast<char*>(fk.columna.c_str()));add_assoc_string(&d,"tabla_referenciada",const_cast<char*>(fk.tablaReferenciada.c_str()));add_assoc_string(&d,"columna_referenciada",const_cast<char*>(fk.columnaReferenciada.c_str()));add_next_index_zval(return_value,&d);}}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_restricciones){char*t,*c;size_t tl,cl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) ZEND_PARSE_PARAMETERS_END();try{auto r=motor().obtenerRestricciones(std::string(t,tl),std::string(c,cl));array_init(return_value);add_assoc_bool(return_value,"no_nulo",r.noNulo);add_assoc_bool(return_value,"unico",r.unico);add_assoc_bool(return_value,"tiene_defecto",r.tieneDefecto);if(r.tieneDefecto)add_assoc_stringl(return_value,"valor_defecto",r.valorDefecto.c_str(),r.valorDefecto.size());else add_assoc_null(return_value,"valor_defecto");}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_siguiente_id){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{RETURN_LONG(motor().siguienteId(std::string(t,tl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_truncar_tabla){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().truncarTabla(std::string(t,tl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_eliminar_tabla){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().eliminarTabla(std::string(t,tl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* ALTER */
PHP_FUNCTION(andreibbdd_alterar_anadir){char*t,*c;size_t tl,cl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().alteraTablaAnadir(std::string(t,tl),std::string(c,cl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_alterar_eliminar_columna){char*t,*c;size_t tl,cl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().alteraTablaEliminarColumna(std::string(t,tl),std::string(c,cl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_alterar_renombrar_columna){char*t,*a,*n;size_t tl,al,nl;ZEND_PARSE_PARAMETERS_START(3,3) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(a,al) Z_PARAM_STRING(n,nl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().alteraTablaRenombrarColumna(std::string(t,tl),std::string(a,al),std::string(n,nl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_alterar_modificar_columna){char*t,*a,*n;size_t tl,al,nl;ZEND_PARSE_PARAMETERS_START(3,3) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(a,al) Z_PARAM_STRING(n,nl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().alteraTablaModificarColumna(std::string(t,tl),std::string(a,al),std::string(n,nl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* CRUD */
PHP_FUNCTION(andreibbdd_insertar){char*t;size_t tl;zval*a;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_ARRAY(a) ZEND_PARSE_PARAMETERS_END();try{std::vector<std::string>v;php_array_strings(a,v);RETURN_LONG(motor().insertarDatos(std::string(t,tl),v));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_insertar_columnas){char*t;size_t tl;zval*c,*v;ZEND_PARSE_PARAMETERS_START(3,3) Z_PARAM_STRING(t,tl) Z_PARAM_ARRAY(c) Z_PARAM_ARRAY(v) ZEND_PARSE_PARAMETERS_END();try{std::vector<std::string>cc,vv;php_array_strings(c,cc);php_array_strings(v,vv);RETURN_LONG(motor().insertarConColumnas(std::string(t,tl),cc,vv));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_insertar_desde){char*d,*o;size_t dl,ol;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(d,dl) Z_PARAM_STRING(o,ol) ZEND_PARSE_PARAMETERS_END();try{RETURN_LONG(motor().insertarDesdeSeleccion(std::string(d,dl),std::string(o,ol)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_seleccionar){char*t;size_t tl;zend_long id;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_LONG(id) ZEND_PARSE_PARAMETERS_END();try{mapa_a_array(motor().seleccionar(std::string(t,tl),id),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_listar){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{filas_a_array(motor().listarTodo(std::string(t,tl)),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_buscar){char*t,*c,*v;size_t tl,cl,vl;ZEND_PARSE_PARAMETERS_START(3,3) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) Z_PARAM_STRING(v,vl) ZEND_PARSE_PARAMETERS_END();try{filas_a_array(motor().buscarColumna(std::string(t,tl),std::string(c,cl),std::string(v,vl)),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_actualizar){char*t;size_t tl;zend_long id;zval*a;ZEND_PARSE_PARAMETERS_START(3,3) Z_PARAM_STRING(t,tl) Z_PARAM_LONG(id) Z_PARAM_ARRAY(a) ZEND_PARSE_PARAMETERS_END();try{std::vector<std::string>v;php_array_strings(a,v);RETURN_BOOL(motor().actualizar(std::string(t,tl),id,v));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_eliminar){char*t;size_t tl;zend_long id;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_LONG(id) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().eliminar(std::string(t,tl),id));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_actualizar_donde){char*t,*c="",*v="";size_t tl,cl=0,vl=0;zval*d;ZEND_PARSE_PARAMETERS_START(2,4) Z_PARAM_STRING(t,tl) Z_PARAM_ARRAY(d) Z_PARAM_OPTIONAL Z_PARAM_STRING(c,cl) Z_PARAM_STRING(v,vl) ZEND_PARSE_PARAMETERS_END();try{std::map<std::string,std::string>m;php_assoc_strings(d,m);RETURN_LONG(motor().actualizarDonde(std::string(t,tl),m,std::string(c,cl),std::string(v,vl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_eliminar_donde){char*t,*c="",*v="";size_t tl,cl=0,vl=0;ZEND_PARSE_PARAMETERS_START(1,3) Z_PARAM_STRING(t,tl) Z_PARAM_OPTIONAL Z_PARAM_STRING(c,cl) Z_PARAM_STRING(v,vl) ZEND_PARSE_PARAMETERS_END();try{RETURN_LONG(motor().eliminarDonde(std::string(t,tl),std::string(c,cl),std::string(v,vl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* Relaciones / restricciones */
PHP_FUNCTION(andreibbdd_anadir_clave_foranea){char*t,*c,*tr,*cr=(char*)"id";size_t tl,cl,trl,crl=2;ZEND_PARSE_PARAMETERS_START(3,4) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) Z_PARAM_STRING(tr,trl) Z_PARAM_OPTIONAL Z_PARAM_STRING(cr,crl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().anadirClaveForanea(std::string(t,tl),std::string(c,cl),std::string(tr,trl),std::string(cr,crl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_establecer_no_nulo){char*t,*c;size_t tl,cl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().establecerNoNulo(std::string(t,tl),std::string(c,cl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_establecer_unico){char*t,*c;size_t tl,cl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().establecerUnico(std::string(t,tl),std::string(c,cl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_establecer_por_defecto){char*t,*c,*v;size_t tl,cl,vl;ZEND_PARSE_PARAMETERS_START(3,3) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) Z_PARAM_STRING(v,vl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().establecerPorDefecto(std::string(t,tl),std::string(c,cl),std::string(v,vl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* Consultas */
PHP_FUNCTION(andreibbdd_consultar){char*q;size_t ql;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(q,ql) ZEND_PARSE_PARAMETERS_END();try{auto r=motor().consultar(std::string(q,ql));array_init(return_value);for(const auto&f:r.filas){zval row;array_init(&row);for(size_t i=0;i<r.columnas.size();++i){if(f[i]=="__ANDREI_NULL__")add_assoc_null(&row,r.columnas[i].c_str());else add_assoc_stringl(&row,r.columnas[i].c_str(),f[i].c_str(),f[i].size());}add_next_index_zval(return_value,&row);}}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_explicar){char*q;size_t ql;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(q,ql) ZEND_PARSE_PARAMETERS_END();try{auto r=motor().explicar(std::string(q,ql));RETURN_STRINGL(r.c_str(),r.size());}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* Índices */
PHP_FUNCTION(andreibbdd_crear_indice){char*n,*t,*c;size_t nl,tl,cl;ZEND_PARSE_PARAMETERS_START(3,3) Z_PARAM_STRING(n,nl) Z_PARAM_STRING(t,tl) Z_PARAM_STRING(c,cl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().crearIndice(std::string(n,nl),std::string(t,tl),std::string(c,cl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_eliminar_indice){char*n,*t;size_t nl,tl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(n,nl) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().eliminarIndice(std::string(n,nl),std::string(t,tl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_indices){char*t;size_t tl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(t,tl) ZEND_PARSE_PARAMETERS_END();try{array_init(return_value);for(const auto&i:motor().listarIndices(std::string(t,tl))){zval d;array_init(&d);add_assoc_string(&d,"nombre",const_cast<char*>(i.nombre.c_str()));add_assoc_string(&d,"columna",const_cast<char*>(i.columna.c_str()));add_next_index_zval(return_value,&d);}}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* Vistas */
PHP_FUNCTION(andreibbdd_crear_vista){char*n,*q;size_t nl,ql;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(n,nl) Z_PARAM_STRING(q,ql) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().crearVista(std::string(n,nl),std::string(q,ql)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_eliminar_vista){char*n;size_t nl;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(n,nl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().eliminarVista(std::string(n,nl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_listar_vistas){ZEND_PARSE_PARAMETERS_NONE();try{strings_a_array(motor().listarVistas(),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* Transacciones */
PHP_FUNCTION(andreibbdd_iniciar_transaccion){ZEND_PARSE_PARAMETERS_NONE();try{RETURN_BOOL(motor().iniciarTransaccion());}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_confirmar){ZEND_PARSE_PARAMETERS_NONE();try{RETURN_BOOL(motor().confirmarTransaccion());}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_deshacer){ZEND_PARSE_PARAMETERS_NONE();try{RETURN_BOOL(motor().deshacerTransaccion());}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_en_transaccion){ZEND_PARSE_PARAMETERS_NONE();try{RETURN_BOOL(motor().enTransaccion());}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}

/* arginfo */
ZEND_BEGIN_ARG_INFO_EX(arginfo_void,0,0,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_s,0,0,1) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_ss,0,0,2) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,b,IS_STRING,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_sss,0,0,3) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,b,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,c,IS_STRING,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_ssss,0,0,3) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,b,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,c,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,d,IS_STRING,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_sa,0,0,2) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_ARRAY_INFO(0,b,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_saa,0,0,3) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_ARRAY_INFO(0,b,0) ZEND_ARG_ARRAY_INFO(0,c,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_sl,0,0,2) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,id,IS_LONG,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_sla,0,0,3) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,id,IS_LONG,0) ZEND_ARG_ARRAY_INFO(0,c,0) ZEND_END_ARG_INFO()
ZEND_BEGIN_ARG_INFO_EX(arginfo_sass,0,0,2) ZEND_ARG_TYPE_INFO(0,a,IS_STRING,0) ZEND_ARG_ARRAY_INFO(0,b,0) ZEND_ARG_TYPE_INFO(0,c,IS_STRING,0) ZEND_ARG_TYPE_INFO(0,d,IS_STRING,0) ZEND_END_ARG_INFO()

PHP_FUNCTION(andreibbdd_crear_subcoleccion){char*a,*b;size_t al,bl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(a,al) Z_PARAM_STRING(b,bl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().crearSubcoleccion(std::string(a,al),std::string(b,bl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_mover_coleccion){char*a,*b;size_t al,bl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(a,al) Z_PARAM_STRING(b,bl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().moverColeccion(std::string(a,al),std::string(b,bl)));}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_subcolecciones_de){char*a;size_t al;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(a,al) ZEND_PARSE_PARAMETERS_END();try{strings_a_array(motor().subcoleccionesDe(std::string(a,al)),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_tablas_coleccion_recursiva){char*a;size_t al;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(a,al) ZEND_PARSE_PARAMETERS_END();try{strings_a_array(motor().tablasDeColeccionRecursiva(std::string(a,al)),return_value);}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_arbol_colecciones){ZEND_PARSE_PARAMETERS_NONE();try{auto s=motor().arbolColecciones();RETURN_STRINGL(s.c_str(),s.size());}catch(const std::exception&e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_crear_coleccion){char *a;size_t al;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(a,al) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().crearColeccion(std::string(a,al)));}catch(const std::exception& e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_eliminar_coleccion){char *a;size_t al;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(a,al) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().eliminarColeccion(std::string(a,al)));}catch(const std::exception& e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_agregar_tabla_coleccion){char *a,*b;size_t al,bl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(a,al) Z_PARAM_STRING(b,bl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().agregarTablaColeccion(std::string(a,al),std::string(b,bl)));}catch(const std::exception& e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_quitar_tabla_coleccion){char *a,*b;size_t al,bl;ZEND_PARSE_PARAMETERS_START(2,2) Z_PARAM_STRING(a,al) Z_PARAM_STRING(b,bl) ZEND_PARSE_PARAMETERS_END();try{RETURN_BOOL(motor().quitarTablaColeccion(std::string(a,al),std::string(b,bl)));}catch(const std::exception& e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_listar_colecciones){ZEND_PARSE_PARAMETERS_START(0,0) ZEND_PARSE_PARAMETERS_END();try{strings_a_array(motor().listarColecciones(),return_value);}catch(const std::exception& e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_tablas_de_coleccion){char *a;size_t al;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(a,al) ZEND_PARSE_PARAMETERS_END();try{strings_a_array(motor().tablasDeColeccion(std::string(a,al)),return_value);}catch(const std::exception& e){lanzar(e);RETURN_THROWS();}}
PHP_FUNCTION(andreibbdd_colecciones_de_tabla){char *a;size_t al;ZEND_PARSE_PARAMETERS_START(1,1) Z_PARAM_STRING(a,al) ZEND_PARSE_PARAMETERS_END();try{strings_a_array(motor().coleccionesDeTabla(std::string(a,al)),return_value);}catch(const std::exception& e){lanzar(e);RETURN_THROWS();}}

static const zend_function_entry funcs[]={
    PHP_FE(andreibbdd_crear_subcoleccion,arginfo_ss)
    PHP_FE(andreibbdd_mover_coleccion,arginfo_ss)
    PHP_FE(andreibbdd_subcolecciones_de,arginfo_s)
    PHP_FE(andreibbdd_tablas_coleccion_recursiva,arginfo_s)
    PHP_FE(andreibbdd_arbol_colecciones,arginfo_void)
    PHP_FE(andreibbdd_crear_coleccion,arginfo_s)
    PHP_FE(andreibbdd_eliminar_coleccion,arginfo_s)
    PHP_FE(andreibbdd_agregar_tabla_coleccion,arginfo_ss)
    PHP_FE(andreibbdd_quitar_tabla_coleccion,arginfo_ss)
    PHP_FE(andreibbdd_listar_colecciones,arginfo_void)
    PHP_FE(andreibbdd_tablas_de_coleccion,arginfo_s)
    PHP_FE(andreibbdd_colecciones_de_tabla,arginfo_s)

    PHP_FE(andreibbdd_configurar,arginfo_s)
    PHP_FE(andreibbdd_configuracion,arginfo_void)
    PHP_FE(andreibbdd_crear_base,arginfo_s)
    PHP_FE(andreibbdd_usar_base,arginfo_s)
    PHP_FE(andreibbdd_listar_bases,arginfo_void)
    PHP_FE(andreibbdd_eliminar_base,arginfo_s)

    PHP_FE(andreibbdd_listar_tablas,arginfo_void)
    PHP_FE(andreibbdd_crear_tabla,arginfo_ss)
    PHP_FE(andreibbdd_crear_tabla_tipada,arginfo_sa)
    PHP_FE(andreibbdd_esquema,arginfo_s)
    PHP_FE(andreibbdd_tipos,arginfo_s)
    PHP_FE(andreibbdd_clave_primaria,arginfo_s)
    PHP_FE(andreibbdd_claves_foraneas,arginfo_s)
    PHP_FE(andreibbdd_restricciones,arginfo_ss)
    PHP_FE(andreibbdd_siguiente_id,arginfo_s)
    PHP_FE(andreibbdd_truncar_tabla,arginfo_s)
    PHP_FE(andreibbdd_eliminar_tabla,arginfo_s)

    PHP_FE(andreibbdd_alterar_anadir,arginfo_ss)
    PHP_FE(andreibbdd_alterar_eliminar_columna,arginfo_ss)
    PHP_FE(andreibbdd_alterar_renombrar_columna,arginfo_sss)
    PHP_FE(andreibbdd_alterar_modificar_columna,arginfo_sss)

    PHP_FE(andreibbdd_insertar,arginfo_sa)
    PHP_FE(andreibbdd_insertar_columnas,arginfo_saa)
    PHP_FE(andreibbdd_insertar_desde,arginfo_ss)
    PHP_FE(andreibbdd_seleccionar,arginfo_sl)
    PHP_FE(andreibbdd_listar,arginfo_s)
    PHP_FE(andreibbdd_buscar,arginfo_sss)
    PHP_FE(andreibbdd_actualizar,arginfo_sla)
    PHP_FE(andreibbdd_eliminar,arginfo_sl)
    PHP_FE(andreibbdd_actualizar_donde,arginfo_sass)
    PHP_FE(andreibbdd_eliminar_donde,arginfo_sss)

    PHP_FE(andreibbdd_anadir_clave_foranea,arginfo_ssss)
    PHP_FE(andreibbdd_establecer_no_nulo,arginfo_ss)
    PHP_FE(andreibbdd_establecer_unico,arginfo_ss)
    PHP_FE(andreibbdd_establecer_por_defecto,arginfo_sss)

    PHP_FE(andreibbdd_consultar,arginfo_s)
    PHP_FE(andreibbdd_explicar,arginfo_s)

    PHP_FE(andreibbdd_crear_indice,arginfo_sss)
    PHP_FE(andreibbdd_eliminar_indice,arginfo_ss)
    PHP_FE(andreibbdd_indices,arginfo_s)

    PHP_FE(andreibbdd_crear_vista,arginfo_ss)
    PHP_FE(andreibbdd_eliminar_vista,arginfo_s)
    PHP_FE(andreibbdd_listar_vistas,arginfo_void)

    PHP_FE(andreibbdd_iniciar_transaccion,arginfo_void)
    PHP_FE(andreibbdd_confirmar,arginfo_void)
    PHP_FE(andreibbdd_deshacer,arginfo_void)
    PHP_FE(andreibbdd_en_transaccion,arginfo_void)
    PHP_FE_END
};

PHP_MINFO_FUNCTION(andreibbdd){
    php_info_print_table_start();
    php_info_print_table_header(2,"AndreiBBDD support","enabled");
    php_info_print_table_row(2,"Version","1.1");
    php_info_print_table_row(2,"PHP API","complete");
    php_info_print_table_end();
}
zend_module_entry andreibbdd_module_entry={
    STANDARD_MODULE_HEADER,
    "andreibbdd",
    funcs,
    nullptr,nullptr,nullptr,nullptr,
    PHP_MINFO(andreibbdd),
    "1.1",
    STANDARD_MODULE_PROPERTIES
};
#ifdef COMPILE_DL_ANDREIBBDD
extern "C" { ZEND_GET_MODULE(andreibbdd) }
#endif

```
**conector_python.cpp**
```cpp
#define PY_SSIZE_T_CLEAN
#include <Python.h>
#include "AndreiBBDD.hpp"
#include <algorithm>
#include <cctype>
#include <memory>
#include <stdexcept>

static std::unique_ptr<AndreiBBDD> db;

static AndreiBBDD& motor() {
    if (!db) db = std::make_unique<AndreiBBDD>();
    return *db;
}

static PyObject* error_cpp(const std::exception& e) {
    PyErr_SetString(PyExc_RuntimeError, e.what());
    return nullptr;
}

static bool lista_a_vector(PyObject* lista, std::vector<std::string>& datos) {
    if (!PyList_Check(lista) && !PyTuple_Check(lista)) {
        PyErr_SetString(PyExc_TypeError, "Los datos deben ser una lista o tupla de strings");
        return false;
    }
    Py_ssize_t n = PySequence_Size(lista);
    for (Py_ssize_t i=0; i<n; ++i) {
        PyObject* item = PySequence_GetItem(lista, i);
        if (!item) return false;
        if (!PyUnicode_Check(item)) {
            Py_DECREF(item);
            PyErr_SetString(PyExc_TypeError, "Todos los valores deben ser strings");
            return false;
        }
        const char* s = PyUnicode_AsUTF8(item);
        if (!s) { Py_DECREF(item); return false; }
        datos.emplace_back(s);
        Py_DECREF(item);
    }
    return true;
}

static PyObject* mapa_a_dict(const std::map<std::string,std::string>& m) {
    PyObject* d = PyDict_New();
    for (const auto& [k,v] : m) {
        PyObject* pv = PyUnicode_FromString(v.c_str());
        PyDict_SetItemString(d, k.c_str(), pv);
        Py_DECREF(pv);
    }
    return d;
}

static PyObject* crear_base(PyObject*, PyObject* args) {
    const char* n; if (!PyArg_ParseTuple(args,"s",&n)) return nullptr;
    try { return PyBool_FromLong(motor().creaBaseDatos(n)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* usar_base(PyObject*, PyObject* args) {
    const char* n; if (!PyArg_ParseTuple(args,"s",&n)) return nullptr;
    try { return PyBool_FromLong(motor().usaBaseDatos(n)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* crear_tabla(PyObject*, PyObject* args) {
    const char *t,*e; if (!PyArg_ParseTuple(args,"ss",&t,&e)) return nullptr;
    try { return PyBool_FromLong(motor().creaTabla(t,e)); } catch(const std::exception& ex){ return error_cpp(ex); }
}
static PyObject* insertar(PyObject*, PyObject* args) {
    const char* t; PyObject* l; if (!PyArg_ParseTuple(args,"sO",&t,&l)) return nullptr;
    std::vector<std::string> d; if(!lista_a_vector(l,d)) return nullptr;
    try { return PyLong_FromLongLong(motor().insertarDatos(t,d)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* seleccionar(PyObject*, PyObject* args) {
    const char* t; long long id; if(!PyArg_ParseTuple(args,"sL",&t,&id)) return nullptr;
    try { return mapa_a_dict(motor().seleccionar(t,id)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* listar(PyObject*, PyObject* args) {
    const char* t; if(!PyArg_ParseTuple(args,"s",&t)) return nullptr;
    try {
        auto filas=motor().listarTodo(t); PyObject* l=PyList_New(0);
        for(const auto& f:filas){ PyObject* d=mapa_a_dict(f); PyList_Append(l,d); Py_DECREF(d); }
        return l;
    } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* buscar(PyObject*, PyObject* args) {
    const char *t,*c,*v; if(!PyArg_ParseTuple(args,"sss",&t,&c,&v)) return nullptr;
    try {
        auto filas=motor().buscarColumna(t,c,v); PyObject* l=PyList_New(0);
        for(const auto& f:filas){ PyObject* d=mapa_a_dict(f); PyList_Append(l,d); Py_DECREF(d); }
        return l;
    } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* actualizar(PyObject*, PyObject* args) {
    const char* t; long long id; PyObject* l; if(!PyArg_ParseTuple(args,"sLO",&t,&id,&l)) return nullptr;
    std::vector<std::string> d; if(!lista_a_vector(l,d)) return nullptr;
    try { return PyBool_FromLong(motor().actualizar(t,id,d)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* eliminar(PyObject*, PyObject* args) {
    const char* t; long long id; if(!PyArg_ParseTuple(args,"sL",&t,&id)) return nullptr;
    try { return PyBool_FromLong(motor().eliminar(t,id)); } catch(const std::exception& e){ return error_cpp(e); }
}

static PyObject* alterar_anadir(PyObject*, PyObject* args) { const char *t,*c; if(!PyArg_ParseTuple(args,"ss",&t,&c)) return nullptr; try{return PyBool_FromLong(motor().alteraTablaAnadir(t,c));}catch(const std::exception&e){return error_cpp(e);} }
static PyObject* alterar_eliminar_columna(PyObject*, PyObject* args) { const char *t,*c; if(!PyArg_ParseTuple(args,"ss",&t,&c)) return nullptr; try{return PyBool_FromLong(motor().alteraTablaEliminarColumna(t,c));}catch(const std::exception&e){return error_cpp(e);} }
static PyObject* alterar_renombrar_columna(PyObject*, PyObject* args) { const char *t,*a,*n; if(!PyArg_ParseTuple(args,"sss",&t,&a,&n)) return nullptr; try{return PyBool_FromLong(motor().alteraTablaRenombrarColumna(t,a,n));}catch(const std::exception&e){return error_cpp(e);} }
static PyObject* alterar_modificar_columna(PyObject*, PyObject* args) { const char *t,*a,*n; if(!PyArg_ParseTuple(args,"sss",&t,&a,&n)) return nullptr; try{return PyBool_FromLong(motor().alteraTablaModificarColumna(t,a,n));}catch(const std::exception&e){return error_cpp(e);} }
static PyObject* truncar_tabla(PyObject*, PyObject* args) { const char* t; if(!PyArg_ParseTuple(args,"s",&t)) return nullptr; try{return PyBool_FromLong(motor().truncarTabla(t));}catch(const std::exception&e){return error_cpp(e);} }
static PyObject* eliminar_tabla(PyObject*, PyObject* args) { const char* t; if(!PyArg_ParseTuple(args,"s",&t)) return nullptr; try{return PyBool_FromLong(motor().eliminarTabla(t));}catch(const std::exception&e){return error_cpp(e);} }
static PyObject* eliminar_base(PyObject*, PyObject* args) { const char* n; if(!PyArg_ParseTuple(args,"s",&n)) return nullptr; try{return PyBool_FromLong(motor().eliminarBaseDatos(n));}catch(const std::exception&e){return error_cpp(e);} }

static PyObject* insertar_columnas(PyObject*, PyObject* args) {
    const char* t; PyObject *cols,*vals; if(!PyArg_ParseTuple(args,"sOO",&t,&cols,&vals)) return nullptr;
    std::vector<std::string> c,v; if(!lista_a_vector(cols,c)||!lista_a_vector(vals,v)) return nullptr;
    try{return PyLong_FromLongLong(motor().insertarConColumnas(t,c,v));}catch(const std::exception&e){return error_cpp(e);}
}
static PyObject* insertar_desde(PyObject*, PyObject* args) {
    const char *d,*o; if(!PyArg_ParseTuple(args,"ss",&d,&o)) return nullptr;
    try{return PyLong_FromLongLong(motor().insertarDesdeSeleccion(d,o));}catch(const std::exception&e){return error_cpp(e);}
}
static bool dict_a_mapa(PyObject* d,std::map<std::string,std::string>& out){
    if(!PyDict_Check(d)){PyErr_SetString(PyExc_TypeError,"Los cambios deben ser un dict de strings");return false;}
    PyObject *k,*v; Py_ssize_t pos=0; while(PyDict_Next(d,&pos,&k,&v)){
        if(!PyUnicode_Check(k)||!PyUnicode_Check(v)){PyErr_SetString(PyExc_TypeError,"Claves y valores deben ser strings");return false;}
        out[PyUnicode_AsUTF8(k)]=PyUnicode_AsUTF8(v);
    } return true;
}
static PyObject* actualizar_donde(PyObject*, PyObject* args) {
    const char* t; PyObject* d; const char *c="",*v=""; if(!PyArg_ParseTuple(args,"sO|ss",&t,&d,&c,&v)) return nullptr;
    std::map<std::string,std::string> cambios; if(!dict_a_mapa(d,cambios)) return nullptr;
    try{return PyLong_FromLongLong(motor().actualizarDonde(t,cambios,c,v));}catch(const std::exception&e){return error_cpp(e);}
}
static PyObject* eliminar_donde(PyObject*, PyObject* args) {
    const char* t; const char *c="",*v=""; if(!PyArg_ParseTuple(args,"s|ss",&t,&c,&v)) return nullptr;
    try{return PyLong_FromLongLong(motor().eliminarDonde(t,c,v));}catch(const std::exception&e){return error_cpp(e);}
}


static PyObject* consultar_dql(PyObject*, PyObject* args) {
    const char* q; if(!PyArg_ParseTuple(args,"s",&q)) return nullptr;
    try {
        auto r=motor().consultar(q); PyObject* lista=PyList_New(0);
        for(const auto& fila:r.filas){ PyObject* d=PyDict_New(); for(size_t i=0;i<r.columnas.size();++i){PyObject* v=fila[i]=="__ANDREI_NULL__"?Py_NewRef(Py_None):PyUnicode_FromString(fila[i].c_str());PyDict_SetItemString(d,r.columnas[i].c_str(),v);Py_DECREF(v);}PyList_Append(lista,d);Py_DECREF(d);}
        return lista;
    } catch(const std::exception& e){ return error_cpp(e); }
}

static PyObject* anadir_clave_foranea(PyObject*, PyObject* args) {
    const char *t,*c,*tr,*cr="id";
    if(!PyArg_ParseTuple(args,"sss|s",&t,&c,&tr,&cr)) return nullptr;
    try{return PyBool_FromLong(motor().anadirClaveForanea(t,c,tr,cr));}catch(const std::exception&e){return error_cpp(e);}
}

static PyObject* claves_foraneas(PyObject*, PyObject* args) {
    const char* t; if(!PyArg_ParseTuple(args,"s",&t)) return nullptr;
    try{
        auto fks=motor().obtenerClavesForaneas(t); PyObject* l=PyList_New(0);
        for(const auto&fk:fks){PyObject*d=PyDict_New();PyObject*v=PyUnicode_FromString(fk.columna.c_str());PyDict_SetItemString(d,"columna",v);Py_DECREF(v);v=PyUnicode_FromString(fk.tablaReferenciada.c_str());PyDict_SetItemString(d,"tabla_referenciada",v);Py_DECREF(v);v=PyUnicode_FromString(fk.columnaReferenciada.c_str());PyDict_SetItemString(d,"columna_referenciada",v);Py_DECREF(v);PyList_Append(l,d);Py_DECREF(d);}
        return l;
    }catch(const std::exception&e){return error_cpp(e);}
}
static PyObject* establecer_no_nulo(PyObject*, PyObject* args) {
    const char *t,*c; if(!PyArg_ParseTuple(args,"ss",&t,&c)) return nullptr;
    try{return PyBool_FromLong(motor().establecerNoNulo(t,c));}catch(const std::exception&e){return error_cpp(e);}
}
static PyObject* establecer_unico(PyObject*, PyObject* args) {
    const char *t,*c; if(!PyArg_ParseTuple(args,"ss",&t,&c)) return nullptr;
    try{return PyBool_FromLong(motor().establecerUnico(t,c));}catch(const std::exception&e){return error_cpp(e);}
}
static PyObject* establecer_por_defecto(PyObject*, PyObject* args) {
    const char *t,*c,*v; if(!PyArg_ParseTuple(args,"sss",&t,&c,&v)) return nullptr;
    try{return PyBool_FromLong(motor().establecerPorDefecto(t,c,v));}catch(const std::exception&e){return error_cpp(e);}
}

static TipoDato py_tipo(const std::string& n){
    std::string x=n;std::transform(x.begin(),x.end(),x.begin(),[](unsigned char c){return std::toupper(c);});
    if(x=="ENTERO"||x=="INT")return TipoDato::ENTERO;if(x=="REAL"||x=="DECIMAL")return TipoDato::REAL;if(x=="BOOLEANO"||x=="BOOL")return TipoDato::BOOLEANO;if(x=="FECHA"||x=="DATE")return TipoDato::FECHA;if(x=="DECIMAL"||x=="NUMERICO")return TipoDato::DECIMAL;return TipoDato::TEXTO;
}
static PyObject* crear_tabla_tipada(PyObject*,PyObject* args){
    const char*t;PyObject*d;if(!PyArg_ParseTuple(args,"sO",&t,&d))return nullptr;if(!PyDict_Check(d)){PyErr_SetString(PyExc_TypeError,"tipos debe ser dict {columna: tipo}");return nullptr;}
    std::vector<DefinicionColumna> defs;PyObject*k,*v;Py_ssize_t p=0;while(PyDict_Next(d,&p,&k,&v)){if(!PyUnicode_Check(k)||!PyUnicode_Check(v)){PyErr_SetString(PyExc_TypeError,"columna y tipo deben ser strings");return nullptr;}defs.push_back({PyUnicode_AsUTF8(k),py_tipo(PyUnicode_AsUTF8(v))});}
    try{return PyBool_FromLong(motor().creaTablaTipada(t,defs));}catch(const std::exception&e){return error_cpp(e);}
}
static PyObject* tipos_tabla(PyObject*,PyObject* args){
    const char*t;if(!PyArg_ParseTuple(args,"s",&t))return nullptr;try{auto m=motor().obtenerTipos(t);PyObject*d=PyDict_New();for(const auto&[c,tp]:m){const char*n=tp==TipoDato::ENTERO?"ENTERO":tp==TipoDato::REAL?"REAL":tp==TipoDato::BOOLEANO?"BOOLEANO":tp==TipoDato::FECHA?"FECHA":tp==TipoDato::DECIMAL?"DECIMAL":"TEXTO";PyObject*v=PyUnicode_FromString(n);PyDict_SetItemString(d,c.c_str(),v);Py_DECREF(v);}return d;}catch(const std::exception&e){return error_cpp(e);}
}
static PyObject* crear_vista(PyObject*,PyObject* args){const char*n,*q;if(!PyArg_ParseTuple(args,"ss",&n,&q))return nullptr;try{return PyBool_FromLong(motor().crearVista(n,q));}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* eliminar_vista(PyObject*,PyObject* args){const char*n;if(!PyArg_ParseTuple(args,"s",&n))return nullptr;try{return PyBool_FromLong(motor().eliminarVista(n));}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* listar_vistas(PyObject*,PyObject*){try{auto vs=motor().listarVistas();PyObject*l=PyList_New(0);for(auto&x:vs){PyObject*v=PyUnicode_FromString(x.c_str());PyList_Append(l,v);Py_DECREF(v);}return l;}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* iniciar_transaccion(PyObject*,PyObject*){try{return PyBool_FromLong(motor().iniciarTransaccion());}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* confirmar_transaccion(PyObject*,PyObject*){try{return PyBool_FromLong(motor().confirmarTransaccion());}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* deshacer_transaccion(PyObject*,PyObject*){try{return PyBool_FromLong(motor().deshacerTransaccion());}catch(const std::exception&e){return error_cpp(e);}}

static PyObject* crear_indice(PyObject*,PyObject*args){const char*n,*t,*c;if(!PyArg_ParseTuple(args,"sss",&n,&t,&c))return nullptr;try{return PyBool_FromLong(motor().crearIndice(n,t,c));}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* eliminar_indice(PyObject*,PyObject*args){const char*n,*t;if(!PyArg_ParseTuple(args,"ss",&n,&t))return nullptr;try{return PyBool_FromLong(motor().eliminarIndice(n,t));}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* indices(PyObject*,PyObject*args){const char*t;if(!PyArg_ParseTuple(args,"s",&t))return nullptr;try{auto is=motor().listarIndices(t);PyObject*l=PyList_New(0);for(auto&i:is){PyObject*d=Py_BuildValue("{s:s,s:s}","nombre",i.nombre.c_str(),"columna",i.columna.c_str());PyList_Append(l,d);Py_DECREF(d);}return l;}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* explicar_py(PyObject*,PyObject*args){const char*q;if(!PyArg_ParseTuple(args,"s",&q))return nullptr;try{return PyUnicode_FromString(motor().explicar(q).c_str());}catch(const std::exception&e){return error_cpp(e);}}

static PyObject* configuracion(PyObject*, PyObject*) {
    try {
        auto& m=motor(); PyObject* d=PyDict_New();
        PyObject* p=PyUnicode_FromString(m.instalacion.c_str()); PyDict_SetItemString(d,"instalacion",p); Py_DECREF(p);
        p=PyLong_FromSize_t(m.tamanoRegistro); PyDict_SetItemString(d,"tamanoRegistro",p); Py_DECREF(p);
        return d;
    } catch(const std::exception& e){ return error_cpp(e); }
}

static PyObject* py_subcrear(PyObject*,PyObject* args){const char *a,*b;if(!PyArg_ParseTuple(args,"ss",&a,&b))return nullptr;try{return PyBool_FromLong(motor().crearSubcoleccion(a,b));}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* py_mover_coleccion(PyObject*,PyObject* args){const char *a,*b;if(!PyArg_ParseTuple(args,"ss",&a,&b))return nullptr;try{return PyBool_FromLong(motor().moverColeccion(a,b));}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* py_arbol_colecciones(PyObject*,PyObject* args){if(!PyArg_ParseTuple(args,""))return nullptr;try{return PyUnicode_FromString(motor().arbolColecciones().c_str());}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* py_hijas(PyObject*,PyObject* args){const char *a;if(!PyArg_ParseTuple(args,"s",&a))return nullptr;try{auto v=motor().subcoleccionesDe(a);PyObject* r=PyList_New(0);for(auto&x:v){auto*z=PyUnicode_FromString(x.c_str());PyList_Append(r,z);Py_DECREF(z);}return r;}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* py_recursivo(PyObject*,PyObject* args){const char *a;if(!PyArg_ParseTuple(args,"s",&a))return nullptr;try{auto v=motor().tablasDeColeccionRecursiva(a);PyObject* r=PyList_New(0);for(auto&x:v){auto*z=PyUnicode_FromString(x.c_str());PyList_Append(r,z);Py_DECREF(z);}return r;}catch(const std::exception&e){return error_cpp(e);}}
static PyObject* py_crear_coleccion(PyObject*,PyObject* args){const char *a; if(!PyArg_ParseTuple(args,"s",&a))return nullptr;try{return PyBool_FromLong(motor().crearColeccion(a));}catch(const std::exception& e){return error_cpp(e);}}

static PyObject* py_eliminar_coleccion(PyObject*,PyObject* args){const char *a; if(!PyArg_ParseTuple(args,"s",&a))return nullptr;try{return PyBool_FromLong(motor().eliminarColeccion(a));}catch(const std::exception& e){return error_cpp(e);}}

static PyObject* py_agregar_tabla_coleccion(PyObject*,PyObject* args){const char *a,*b; if(!PyArg_ParseTuple(args,"ss",&a,&b))return nullptr;try{return PyBool_FromLong(motor().agregarTablaColeccion(a,b));}catch(const std::exception& e){return error_cpp(e);}}

static PyObject* py_quitar_tabla_coleccion(PyObject*,PyObject* args){const char *a,*b; if(!PyArg_ParseTuple(args,"ss",&a,&b))return nullptr;try{return PyBool_FromLong(motor().quitarTablaColeccion(a,b));}catch(const std::exception& e){return error_cpp(e);}}

static PyObject* py_listar_colecciones(PyObject*,PyObject* args){if(!PyArg_ParseTuple(args,""))return nullptr;try{auto v=motor().listarColecciones(); PyObject* out=PyList_New(0); for(const auto& x:v){PyObject* z=PyUnicode_FromString(x.c_str());PyList_Append(out,z);Py_DECREF(z);}return out;}catch(const std::exception& e){return error_cpp(e);}}

static PyObject* py_tablas_de_coleccion(PyObject*,PyObject* args){const char *a; if(!PyArg_ParseTuple(args,"s",&a))return nullptr;try{auto v=motor().tablasDeColeccion(a); PyObject* out=PyList_New(0); for(const auto& x:v){PyObject* z=PyUnicode_FromString(x.c_str());PyList_Append(out,z);Py_DECREF(z);}return out;}catch(const std::exception& e){return error_cpp(e);}}

static PyObject* py_colecciones_de_tabla(PyObject*,PyObject* args){const char *a; if(!PyArg_ParseTuple(args,"s",&a))return nullptr;try{auto v=motor().coleccionesDeTabla(a); PyObject* out=PyList_New(0); for(const auto& x:v){PyObject* z=PyUnicode_FromString(x.c_str());PyList_Append(out,z);Py_DECREF(z);}return out;}catch(const std::exception& e){return error_cpp(e);}}

static PyMethodDef Metodos[] = {
    {"crear_subcoleccion",py_subcrear,METH_VARARGS,"Create child collection"},
    {"mover_coleccion",py_mover_coleccion,METH_VARARGS,"Move collection"},
    {"subcolecciones_de",py_hijas,METH_VARARGS,"List child collections"},
    {"tablas_de_coleccion_recursiva",py_recursivo,METH_VARARGS,"Recursive tables"},
    {"arbol_colecciones",py_arbol_colecciones,METH_VARARGS,"JSON tree"},
    {"crear_coleccion",py_crear_coleccion,METH_VARARGS,"Colecciones transversales"},
    {"eliminar_coleccion",py_eliminar_coleccion,METH_VARARGS,"Colecciones transversales"},
    {"agregar_tabla_coleccion",py_agregar_tabla_coleccion,METH_VARARGS,"Colecciones transversales"},
    {"quitar_tabla_coleccion",py_quitar_tabla_coleccion,METH_VARARGS,"Colecciones transversales"},
    {"listar_colecciones",py_listar_colecciones,METH_VARARGS,"Colecciones transversales"},
    {"tablas_de_coleccion",py_tablas_de_coleccion,METH_VARARGS,"Colecciones transversales"},
    {"colecciones_de_tabla",py_colecciones_de_tabla,METH_VARARGS,"Colecciones transversales"},







    {"crear_base",crear_base,METH_VARARGS,"Crea una base de datos"},
    {"usar_base",usar_base,METH_VARARGS,"Selecciona una base de datos"},
    {"crear_tabla",crear_tabla,METH_VARARGS,"Crea una tabla"},
    {"crear_tabla_tipada",crear_tabla_tipada,METH_VARARGS,"Crea una tabla con tipos"},
    {"tipos",tipos_tabla,METH_VARARGS,"Devuelve los tipos de una tabla"},
    {"crear_indice",crear_indice,METH_VARARGS,"Crea un indice secundario"},
    {"eliminar_indice",eliminar_indice,METH_VARARGS,"Elimina un indice secundario"},
    {"indices",indices,METH_VARARGS,"Lista indices secundarios"},
    {"explicar",explicar_py,METH_VARARGS,"Explica el plan de una consulta"},
    {"crear_vista",crear_vista,METH_VARARGS,"Crea una vista"},
    {"eliminar_vista",eliminar_vista,METH_VARARGS,"Elimina una vista"},
    {"listar_vistas",listar_vistas,METH_NOARGS,"Lista las vistas"},
    {"iniciar_transaccion",iniciar_transaccion,METH_NOARGS,"Inicia una transaccion"},
    {"confirmar",confirmar_transaccion,METH_NOARGS,"Confirma la transaccion"},
    {"deshacer",deshacer_transaccion,METH_NOARGS,"Deshace la transaccion"},
    {"anadir_clave_foranea",anadir_clave_foranea,METH_VARARGS,"Anade una clave foranea"},
    {"claves_foraneas",claves_foraneas,METH_VARARGS,"Lista claves foraneas"},
    {"alterar_anadir",alterar_anadir,METH_VARARGS,"Anade una columna"},
    {"alterar_eliminar_columna",alterar_eliminar_columna,METH_VARARGS,"Elimina una columna"},
    {"alterar_renombrar_columna",alterar_renombrar_columna,METH_VARARGS,"Renombra una columna"},
    {"alterar_modificar_columna",alterar_modificar_columna,METH_VARARGS,"Modifica una columna"},
    {"truncar_tabla",truncar_tabla,METH_VARARGS,"Vacia una tabla"},
    {"eliminar_tabla",eliminar_tabla,METH_VARARGS,"Elimina una tabla"},
    {"eliminar_base",eliminar_base,METH_VARARGS,"Elimina una base de datos"},
    {"insertar",insertar,METH_VARARGS,"Inserta un registro"},
    {"insertar_columnas",insertar_columnas,METH_VARARGS,"Inserta indicando columnas"},
    {"insertar_desde",insertar_desde,METH_VARARGS,"Inserta desde otra tabla"},
    {"actualizar_donde",actualizar_donde,METH_VARARGS,"Actualiza registros que cumplen una condicion"},
    {"eliminar_donde",eliminar_donde,METH_VARARGS,"Elimina registros que cumplen una condicion o todos"},
    {"seleccionar",seleccionar,METH_VARARGS,"Selecciona un registro por id"},
    {"consultar",consultar_dql,METH_VARARGS,"Ejecuta una consulta DQL en espanol"},
    {"listar",listar,METH_VARARGS,"Lista registros activos"},
    {"buscar",buscar,METH_VARARGS,"Busca por columna y valor"},
    {"actualizar",actualizar,METH_VARARGS,"Actualiza un registro"},
    {"eliminar",eliminar,METH_VARARGS,"Borrado logico"},
    {"establecer_no_nulo",establecer_no_nulo,METH_VARARGS,"Aplica NO NULO a una columna"},
    {"establecer_unico",establecer_unico,METH_VARARGS,"Aplica UNICO a una columna"},
    {"establecer_por_defecto",establecer_por_defecto,METH_VARARGS,"Define POR DEFECTO para una columna"},
    {"configuracion",configuracion,METH_NOARGS,"Devuelve la configuracion activa"},
    {nullptr,nullptr,0,nullptr}
};
static PyModuleDef modulo={PyModuleDef_HEAD_INIT,"andreibbdd","Conector nativo Python para Andrei BBDD",-1,Metodos};
PyMODINIT_FUNC PyInit_andreibbdd(void){ return PyModule_Create(&modulo); }

```
**main.cpp**
```cpp
#include "AndreiBBDD.hpp"
#include <algorithm>
#include <cctype>
#include <iostream>
#include <map>
#include <sstream>

static std::string trim(std::string s){while(!s.empty()&&std::isspace((unsigned char)s.front()))s.erase(s.begin());while(!s.empty()&&std::isspace((unsigned char)s.back()))s.pop_back();return s;}
static std::string mayus(std::string s){std::transform(s.begin(),s.end(),s.begin(),[](unsigned char c){return std::toupper(c);});return s;}
static std::string sinComillas(std::string s){s=trim(s);if(s.size()>=2&&((s.front()=='\''&&s.back()=='\'')||(s.front()=='"'&&s.back()=='"')))return s.substr(1,s.size()-2);return s;}
static std::vector<std::string> lista(std::string s){s=trim(s);if(s.size()>=2&&s.front()=='('&&s.back()==')')s=s.substr(1,s.size()-2);std::vector<std::string> r;std::string x;bool q=false;char qc=0;for(char c:s){if((c=='\''||c=='"')){if(!q){q=true;qc=c;}else if(qc==c)q=false;x+=c;}else if(c==','&&!q){r.push_back(sinComillas(x));x.clear();}else x+=c;}if(!x.empty()||!s.empty())r.push_back(sinComillas(x));return r;}
static bool condicion(std::string s,std::string& c,std::string& v){auto p=s.find('=');if(p==std::string::npos)return false;c=trim(s.substr(0,p));v=sinComillas(s.substr(p+1));return !c.empty();}
static std::map<std::string,std::string> asignaciones(std::string s){std::map<std::string,std::string> r;for(auto&x:lista(s)){std::string c,v;if(condicion(x,c,v))r[c]=v;}return r;}
static void imprimir(const std::map<std::string,std::string>& r){for(auto const&[k,v]:r)std::cout<<k<<"="<<v<<"  ";std::cout<<"\n";}
static void ayuda(){std::cout<<R"(
Comandos DDL:
  CREAR BASE nombre
  USAR nombre
  CREAR TABLA nombre campo1,campo2,campo3
  CREAR TABLA productos nombre:TEXTO,stock:ENTERO,precio:REAL,disponible:BOOLEANO
  CREAR TABLA facturas concepto:TEXTO,fecha:FECHA,total:DECIMAL
  CREAR INDICE idx_email EN clientes email
  ELIMINAR INDICE idx_email EN clientes
  MOSTRAR INDICES clientes
  CREAR VISTA nombre COMO SELECCIONAR ...
  ELIMINAR VISTA nombre
  LISTAR VISTAS
  ALTERAR TABLA nombre ANADIR columna
  ALTERAR TABLA pedidos ANADIR CLAVE FORANEA id_cliente REFERENCIAS clientes id
  ALTERAR TABLA nombre ELIMINAR COLUMNA columna
  ALTERAR TABLA nombre RENOMBRAR COLUMNA antigua nueva
  ALTERAR TABLA nombre MODIFICAR COLUMNA antigua nueva
  ALTERAR TABLA clientes MODIFICAR email NO NULO
  ALTERAR TABLA clientes MODIFICAR email UNICO
  ALTERAR TABLA clientes MODIFICAR ciudad POR DEFECTO 'Valencia' 
  TRUNCAR TABLA nombre
  ELIMINAR TABLA nombre
  ELIMINAR BASE nombre

Transacciones:
  INICIAR TRANSACCION
  CONFIRMAR
  DESHACER

Comandos DML (nomenclatura en espanol):
  INSERTAR EN clientes VALORES ('Ana','30')
  INSERTAR EN clientes (nombre) VALORES ('Ana')
  INSERTAR EN copia SELECCIONAR * DE clientes
  ACTUALIZAR clientes ESTABLECER nombre='Ana'
  ACTUALIZAR clientes ESTABLECER edad='30' DONDE id='1'
  ELIMINAR DE clientes
  ELIMINAR DE clientes DONDE id='1'

Planificador:
  EXPLICAR SELECCIONAR * DE clientes DONDE email = 'a@b.com'

Consultas DQL:
  SELECCIONAR * DE clientes
  SELECCIONAR nombre,edad DE clientes DONDE edad >= 18
  SELECCIONAR DISTINTO ciudad DE clientes
  SELECCIONAR nombre COMO cliente DE clientes
  SELECCIONAR * DE clientes DONDE ciudad = 'Valencia' Y edad ENTRE 18 Y 65
  SELECCIONAR * DE clientes DONDE ciudad EN ('Valencia','Madrid')
  SELECCIONAR * DE clientes DONDE nombre COMO 'Jos%'
  SELECCIONAR * DE clientes ORDENAR POR edad DESCENDENTE LIMITE 10
  SELECCIONAR clientes.nombre,pedidos.total DE clientes JOIN pedidos EN clientes.id = pedidos.id_cliente
  SELECCIONAR clientes.nombre,pedidos.total DE clientes LEFT JOIN pedidos EN clientes.id = pedidos.id_cliente

Agregaciones y agrupacion:
  SELECCIONAR CONTAR(*) COMO total DE pedidos
  SELECCIONAR SUMA(total),MEDIA(total),MINIMO(total),MAXIMO(total) DE pedidos
  SELECCIONAR id_cliente,CONTAR(*) COMO pedidos,SUMA(total) COMO importe DE pedidos AGRUPAR POR id_cliente
  SELECCIONAR id_cliente,SUMA(total) COMO importe DE pedidos AGRUPAR POR id_cliente TENIENDO importe > 100
  SELECCIONAR clientes.nombre COMO cliente,SUMA(pedidos.total) COMO facturacion DE clientes JOIN pedidos EN clientes.id = pedidos.id_cliente AGRUPAR POR clientes.nombre ORDENAR POR facturacion DESCENDENTE

Compatibilidad con comandos anteriores:
  INSERTAR tabla valor1,valor2
  ACTUALIZAR tabla id valor1,valor2
  ELIMINAR tabla id
  SELECCIONAR tabla id | LISTAR tabla | BUSCAR tabla columna valor | ESQUEMA tabla
  AYUDA | SALIR
)";}
int main(int argc,char**argv){
 try{
  std::string cfg=argc>1?argv[1]:"config.json"; AndreiBBDD db(cfg); std::cout<<"AndreiBBDD C++ - terminal\n"; ayuda(); std::string linea;
  while(std::cout<<(db.basededatos.empty()?"andrei> ":("andrei["+db.basededatos+"]> "))&&std::getline(std::cin,linea)){
   linea=trim(linea);if(linea.empty())continue;std::istringstream ss(linea);std::string a,b,c;ss>>a;auto A=mayus(a);
   if(A=="SALIR")break;if(A=="AYUDA"){ayuda();continue;}
   if(A=="INICIAR"){ss>>b;std::cout<<((mayus(b)=="TRANSACCION"&&db.iniciarTransaccion())?"OK TRANSACCION INICIADA\n":"ERROR\n");continue;}
   if(A=="CONFIRMAR"){std::cout<<(db.confirmarTransaccion()?"OK TRANSACCION CONFIRMADA\n":"ERROR\n");continue;}
   if(A=="DESHACER"){std::cout<<(db.deshacerTransaccion()?"OK TRANSACCION DESHECHA\n":"ERROR\n");continue;}
   if(A=="EXPLICAR"){std::string q;std::getline(ss,q);std::cout<<db.explicar(trim(q));continue;}
   if(A=="MOSTRAR"){ss>>b;if(mayus(b)=="INDICES"){ss>>c;for(const auto&i:db.listarIndices(c))std::cout<<i.nombre<<" -> "<<i.columna<<"\n";}continue;}
   if(A=="CREAR"){ss>>b;
    if(mayus(b)=="BASE"){ss>>c;std::cout<<(db.creaBaseDatos(c)?"OK\n":"ERROR\n");}
    else if(mayus(b)=="INDICE"){std::string nombre,en,tabla,col;ss>>nombre>>en>>tabla>>col;std::cout<<((mayus(en)=="EN"&&db.crearIndice(nombre,tabla,col))?"OK\n":"ERROR\n");}
    else if(mayus(b)=="TABLA"){
      ss>>c;std::string e;std::getline(ss,e);e=trim(e);bool tipada=e.find(':')!=std::string::npos;
      if(!tipada)std::cout<<(db.creaTabla(c,e)?"OK\n":"ERROR\n");
      else{std::vector<DefinicionColumna> defs;bool bien=true;for(auto x:lista(e)){auto q=x.find(':');if(q==std::string::npos){bien=false;break;}std::string n=trim(x.substr(0,q)),tn=mayus(trim(x.substr(q+1)));TipoDato t=TipoDato::TEXTO;if(tn=="ENTERO"||tn=="INT")t=TipoDato::ENTERO;else if(tn=="REAL"||tn=="DECIMAL")t=TipoDato::REAL;else if(tn=="BOOLEANO"||tn=="BOOL")t=TipoDato::BOOLEANO;else if(tn=="FECHA"||tn=="DATE")t=TipoDato::FECHA;else if(tn=="DECIMAL"||tn=="NUMERICO")t=TipoDato::DECIMAL;else if(tn!="TEXTO")bien=false;defs.push_back({n,t});}std::cout<<((bien&&db.creaTablaTipada(c,defs))?"OK\n":"ERROR\n");}
    }else if(mayus(b)=="VISTA"){ss>>c;std::string como;ss>>como;std::string q;std::getline(ss,q);std::cout<<((mayus(como)=="COMO"&&db.crearVista(c,trim(q)))?"OK\n":"ERROR\n");}
    continue;
   }
   if(A=="USAR"){ss>>b;std::cout<<(db.usaBaseDatos(b)?"OK\n":"ERROR\n");continue;}
   if(A=="ALTERAR"){
    ss>>b; if(mayus(b)!="TABLA"){std::cout<<"Sintaxis: ALTERAR TABLA ...\n";continue;}
    std::string tabla,accion; ss>>tabla>>accion; bool ok=false; auto AC=mayus(accion);
    if(AC=="ANADIR"||AC=="AÑADIR"){
      std::string primero; ss>>primero;
      if(mayus(primero)=="CLAVE"){
        std::string tipo,col,ref,tr,cr="id"; ss>>tipo>>col>>ref>>tr;
        if(mayus(tipo)!="FORANEA"||mayus(ref)!="REFERENCIAS"){std::cout<<"Sintaxis FK incorrecta\n";continue;}
        if(ss>>cr){} ok=db.anadirClaveForanea(tabla,col,tr,cr);
      }else ok=db.alteraTablaAnadir(tabla,primero);
    }else if(AC=="ELIMINAR"){
      std::string q,col;ss>>q;if(mayus(q)=="COLUMNA")ss>>col;else col=q;ok=db.alteraTablaEliminarColumna(tabla,col);
    }else if(AC=="RENOMBRAR"){
      std::string q,x,y;ss>>q;if(mayus(q)=="COLUMNA")ss>>x>>y;else{x=q;ss>>y;}ok=db.alteraTablaRenombrarColumna(tabla,x,y);
    }else if(AC=="MODIFICAR"){
      std::string q,col,regla; ss>>q; if(mayus(q)=="COLUMNA") ss>>col; else col=q; ss>>regla;
      auto R=mayus(regla);
      if(R=="NO"){std::string nulo;ss>>nulo;ok=mayus(nulo)=="NULO"&&db.establecerNoNulo(tabla,col);}
      else if(R=="UNICO"||R=="ÚNICO") ok=db.establecerUnico(tabla,col);
      else if(R=="POR"){std::string defecto;ss>>defecto;std::string valor;std::getline(ss,valor);valor=sinComillas(trim(valor));ok=mayus(defecto)=="DEFECTO"&&db.establecerPorDefecto(tabla,col,valor);}
      else ok=db.alteraTablaModificarColumna(tabla,col,regla); // compatibilidad antigua: renombrado
    }
    std::cout<<(ok?"OK\n":"ERROR\n");continue;
   }
   if(A=="TRUNCAR"){ss>>b>>c;std::cout<<((mayus(b)=="TABLA"&&db.truncarTabla(c))?"OK\n":"ERROR\n");continue;}

   if(A=="INSERTAR"){
    ss>>b;
    if(mayus(b)=="EN"){
      std::string tabla;ss>>tabla;std::string resto;std::getline(ss,resto);resto=trim(resto);
      if(!resto.empty()&&resto.front()=='('){auto fin=resto.find(')');if(fin==std::string::npos){std::cout<<"ERROR sintaxis\n";continue;}auto cols=lista(resto.substr(0,fin+1));auto despues=trim(resto.substr(fin+1));if(mayus(despues.substr(0,std::min<size_t>(7,despues.size())))!="VALORES"){std::cout<<"Falta VALORES\n";continue;}auto vals=lista(trim(despues.substr(7)));auto id=db.insertarConColumnas(tabla,cols,vals);std::cout<<(id<0?"ERROR":"ID="+std::to_string(id))<<"\n";continue;}
      if(mayus(resto.substr(0,std::min<size_t>(7,resto.size())))=="VALORES"){auto vals=lista(trim(resto.substr(7)));auto id=db.insertarDatos(tabla,vals);std::cout<<(id<0?"ERROR":"ID="+std::to_string(id))<<"\n";continue;}
      std::istringstream rs(resto);std::string s1,asterisco,de,origen;rs>>s1>>asterisco>>de>>origen;if(mayus(s1)=="SELECCIONAR"&&asterisco=="*"&&mayus(de)=="DE"){auto n=db.insertarDesdeSeleccion(tabla,origen);std::cout<<(n<0?"ERROR":"INSERTADOS="+std::to_string(n))<<"\n";continue;}
      std::cout<<"Sintaxis INSERTAR no reconocida\n";continue;
    }
    std::string d;std::getline(ss,d);auto id=db.insertarDatos(b,lista(trim(d)));std::cout<<(id<0?"ERROR":"ID="+std::to_string(id))<<"\n";continue;
   }

   if(A=="ACTUALIZAR"){
    ss>>b;std::string resto;std::getline(ss,resto);resto=trim(resto);
    if(mayus(resto.substr(0,std::min<size_t>(10,resto.size())))=="ESTABLECER"){
      resto=trim(resto.substr(10));std::string izq=resto,where;auto up=mayus(resto);auto p=up.find(" DONDE ");if(p!=std::string::npos){izq=trim(resto.substr(0,p));where=trim(resto.substr(p+7));}
      auto cambios=asignaciones(izq);std::string wc,wv;if(!where.empty()&&!condicion(where,wc,wv)){std::cout<<"ERROR DONDE\n";continue;}auto n=db.actualizarDonde(b,cambios,wc,wv);std::cout<<(n<0?"ERROR":"ACTUALIZADOS="+std::to_string(n))<<"\n";continue;
    }
    std::istringstream old(resto);long long id;old>>id;std::string d;std::getline(old,d);std::cout<<(db.actualizar(b,id,lista(trim(d)))?"OK\n":"ERROR\n");continue;
   }

   if(A=="ELIMINAR"){
    ss>>b;
    if(mayus(b)=="VISTA"){ss>>c;std::cout<<(db.eliminarVista(c)?"OK\n":"ERROR\n");continue;}
    if(mayus(b)=="INDICE"){std::string nombre,en,tabla;ss>>nombre>>en>>tabla;std::cout<<((mayus(en)=="EN"&&db.eliminarIndice(nombre,tabla))?"OK\n":"ERROR\n");continue;}
    if(mayus(b)=="TABLA"){ss>>c;std::cout<<(db.eliminarTabla(c)?"OK\n":"ERROR\n");continue;}
    if(mayus(b)=="BASE"){ss>>c;std::cout<<(db.eliminarBaseDatos(c)?"OK\n":"ERROR\n");continue;}
    if(mayus(b)=="DE"){std::string tabla;ss>>tabla;std::string resto;std::getline(ss,resto);resto=trim(resto);std::string wc,wv;if(!resto.empty()){std::istringstream rs(resto);std::string d;rs>>d;if(mayus(d)!="DONDE"){std::cout<<"ERROR sintaxis\n";continue;}std::string cond;std::getline(rs,cond);if(!condicion(trim(cond),wc,wv)){std::cout<<"ERROR DONDE\n";continue;}}auto n=db.eliminarDonde(tabla,wc,wv);std::cout<<(n<0?"ERROR":"ELIMINADOS="+std::to_string(n))<<"\n";continue;}
    long long id;ss>>id;std::cout<<(db.eliminar(b,id)?"OK\n":"ERROR\n");continue;
   }
   if(A=="SELECCIONAR"){
    auto U=mayus(linea);
    if(U.find(" DE ")!=std::string::npos){
      try{auto r=db.consultar(linea);for(size_t i=0;i<r.columnas.size();++i)std::cout<<(i?" | ":"")<<r.columnas[i];std::cout<<"\n";for(const auto&fila:r.filas){for(size_t i=0;i<fila.size();++i)std::cout<<(i?" | ":"")<<(fila[i]=="__ANDREI_NULL__"?"NULL":fila[i]);std::cout<<"\n";}std::cout<<r.filas.size()<<" fila(s)\n";}catch(const std::exception&e){std::cout<<"ERROR: "<<e.what()<<"\n";}continue;
    }
    long long id;ss>>b>>id;auto r=db.seleccionar(b,id);if(r.empty())std::cout<<"No encontrado\n";else imprimir(r);continue;
   }
   if(A=="LISTAR"){std::streampos pos=ss.tellg();ss>>b;if(mayus(b)=="VISTAS"){for(const auto&v:db.listarVistas())std::cout<<v<<"\n";continue;}ss.clear();ss.seekg(pos);ss>>b;for(auto&r:db.listarTodo(b))imprimir(r);continue;}
   if(A=="BUSCAR"){ss>>b>>c;std::string v;std::getline(ss,v);for(auto&r:db.buscarColumna(b,c,sinComillas(trim(v))))imprimir(r);continue;}
   if(A=="ESQUEMA"){ss>>b;auto e=db.obtenerEsquema(b);for(size_t i=0;i<e.size();++i)std::cout<<(i?",":"")<<e[i];std::cout<<"\nPK: "<<db.obtenerClavePrimaria(b)<<"\n";for(const auto&fk:db.obtenerClavesForaneas(b))std::cout<<"FK: "<<fk.columna<<" -> "<<fk.tablaReferenciada<<"."<<fk.columnaReferenciada<<"\n";for(const auto&col:e){auto r=db.obtenerRestricciones(b,col);if(r.noNulo)std::cout<<"NO NULO: "<<col<<"\n";if(r.unico)std::cout<<"UNICO: "<<col<<"\n";if(r.tieneDefecto)std::cout<<"POR DEFECTO: "<<col<<" = '"<<r.valorDefecto<<"'\n";}continue;}
   if(A=="COLECCION"){
    ss>>b;auto op=mayus(b);ss>>c;
    if(op=="CREAR")std::cout<<(db.crearColeccion(c)?"OK":"ERROR")<<"\n";
    else if(op=="ELIMINAR")std::cout<<(db.eliminarColeccion(c)?"OK":"ERROR")<<"\n";
    else if(op=="LISTAR")for(auto& n:db.listarColecciones())std::cout<<n<<"\n";
    else if(op=="SUBCREAR"){std::string name;ss>>name;std::cout<<(db.crearSubcoleccion(c,name)?"OK":"ERROR")<<"\n";}
    else if(op=="MOVER"){std::string parent;ss>>parent;std::cout<<(db.moverColeccion(c,parent=="RAIZ"?"":parent)?"OK":"ERROR")<<"\n";}
    else if(op=="HIJAS")for(auto& n:db.subcoleccionesDe(c))std::cout<<n<<"\n";
    else if(op=="RECURSIVO")for(auto& n:db.tablasDeColeccionRecursiva(c))std::cout<<n<<"\n";
    else if(op=="ARBOL")std::cout<<db.arbolColecciones()<<"\n";
    else if(op=="AGREGAR"||op=="QUITAR"){std::string t;ss>>t;std::cout<<((op=="AGREGAR"?db.agregarTablaColeccion(t,c):db.quitarTablaColeccion(t,c))?"OK":"ERROR")<<"\n";}
    else if(op=="TABLAS")for(auto& t:db.tablasDeColeccion(c))std::cout<<t<<"\n";
    else if(op=="DE")for(auto& n:db.coleccionesDeTabla(c))std::cout<<n<<"\n";
    else std::cout<<"Uso: COLECCION CREAR|ELIMINAR|LISTAR|AGREGAR|QUITAR|TABLAS|DE\n";
    continue;
   }
   std::cout<<"Comando desconocido. Escribe AYUDA.\n";
  }
 }catch(const std::exception&e){std::cerr<<"Error: "<<e.what()<<"\n";return 1;}
}

```
### 005-Gestión de la persistencia de objetos
**000-Introducción.md**
```markdown
# Gestión de la persistencia de objetos
- Gestión de la persistencia de objetos
	- Conceptos fundamentales
	- Estructura y elementos
	- Operaciones principales
	- Persistencia y recuperación de datos
	- Integridad y tratamiento de errores
	- Ejemplo de implementación

```
### 006-El interfaz de programación de aplicaciones de la base de datos orientada a objetos
**000-Introducción.md**
```markdown
# El interfaz de programación de aplicaciones de la base de datos orientada a objetos
- El interfaz de programación de aplicaciones de la base de datos orientada a objetos
	- Conceptos fundamentales
	- Estructura y elementos
	- Operaciones principales
	- Persistencia y recuperación de datos
	- Integridad y tratamiento de errores
	- Ejemplo de implementación

```
### 007-Gestión de transacciones
**000-Introducción.md**
```markdown
# Gestión de transacciones
- Gestión de transacciones
	- Concepto y finalidad
	- Características principales
	- Elementos que intervienen
	- Funcionamiento y operaciones
	- Aplicación práctica
	- Buenas prácticas

```
### 008-Desarrollo de programas que gestionan objetos en bases de datos
**000-Introducción.md**
```markdown
# Desarrollo de programas que gestionan objetos en bases de datos
- Desarrollo de programas que gestionan objetos en bases de datos
	- Conceptos fundamentales
	- Estructura y elementos
	- Operaciones principales
	- Persistencia y recuperación de datos
	- Integridad y tratamiento de errores
	- Ejemplo de implementación

```
## 002-Proyecto
**.md**
```

```
### base_datos
### compilacion
### nucleo
**main.cpp**
```cpp
#include <iostream>
#include <vector>

#include "main.hpp"

#include "persistencia/basedatos.hpp"
#include "persistencia/orm.hpp"
#include "persistencia/inicializadorbd.hpp"

#include "modelos/autor.hpp"
#include "modelos/categoria.hpp"
#include "modelos/libro.hpp"

#include "utilidades/logger.hpp"

void mostrar_menu()
{
    std::cout << "\n";
    std::cout << "====================================\n";
    std::cout << " GESTOR DE BIBLIOTECA ORM EN C++\n";
    std::cout << "====================================\n";
    std::cout << "1. Listar autores\n";
    std::cout << "2. Crear autor\n";
    std::cout << "3. Listar categorias\n";
    std::cout << "4. Crear categoria\n";
    std::cout << "5. Listar libros\n";
    std::cout << "6. Crear libro\n";
    std::cout << "7. Salir\n";
    std::cout << "====================================\n";
    std::cout << "Seleccione una opcion: ";
}

void listar_autores(ORM& orm)
{
    auto autores =
        orm.obtener_autores();

    std::cout << "\nAUTORES\n";

    for(const auto& autor : autores)
    {
        std::cout
            << autor.id
            << " | "
            << autor.nombre
            << " | "
            << autor.nacionalidad
            << std::endl;
    }
}

void crear_autor(ORM& orm)
{
    Autor autor;

    std::cin.ignore();

    std::cout
        << "Nombre: ";
    std::getline(
        std::cin,
        autor.nombre
    );

    std::cout
        << "Nacionalidad: ";
    std::getline(
        std::cin,
        autor.nacionalidad
    );

    if(
        orm.guardar_autor(
            autor
        )
    )
    {
        Logger::info(
            "Autor guardado"
        );
    }
    else
    {
        Logger::error(
            "No se pudo guardar el autor"
        );
    }
}

void listar_categorias(ORM& orm)
{
    auto categorias =
        orm.obtener_categorias();

    std::cout << "\nCATEGORIAS\n";

    for(const auto& categoria : categorias)
    {
        std::cout
            << categoria.id
            << " | "
            << categoria.nombre
            << std::endl;
    }
}

void crear_categoria(ORM& orm)
{
    Categoria categoria;

    std::cin.ignore();

    std::cout
        << "Nombre de la categoria: ";

    std::getline(
        std::cin,
        categoria.nombre
    );

    if(
        orm.guardar_categoria(
            categoria
        )
    )
    {
        Logger::info(
            "Categoria guardada"
        );
    }
    else
    {
        Logger::error(
            "No se pudo guardar la categoria"
        );
    }
}

void listar_libros(ORM& orm)
{
    auto libros =
        orm.obtener_libros();

    std::cout
        << "\nLIBROS\n";

    for(const auto& libro : libros)
    {
        std::cout
            << libro.id
            << " | "
            << libro.titulo
            << " | "
            << libro.anio_publicacion
            << " | "
            << libro.numero_paginas
            << " | "
            << libro.autor.nombre
            << " | "
            << libro.categoria.nombre
            << std::endl;
    }
}

void crear_libro(ORM& orm)
{
    Libro libro;

    std::cin.ignore();

    std::cout
        << "Titulo: ";

    std::getline(
        std::cin,
        libro.titulo
    );

    std::cout
        << "Anio de publicacion: ";

    std::cin
        >> libro.anio_publicacion;

    std::cout
        << "Numero de paginas: ";

    std::cin
        >> libro.numero_paginas;

    std::cout
        << "ID del autor: ";

    std::cin
        >> libro.autor.id;

    std::cout
        << "ID de la categoria: ";

    std::cin
        >> libro.categoria.id;

    if(
        orm.guardar_libro(
            libro
        )
    )
    {
        Logger::info(
            "Libro guardado"
        );
    }
    else
    {
        Logger::error(
            "No se pudo guardar el libro"
        );
    }
}

void iniciar_aplicacion()
{
    Basedatos bd;

    if(
        !bd.abrir(
            "../base_datos/biblioteca.db"
        )
    )
    {
        Logger::error(
            "No se pudo abrir la base de datos"
        );

        return;
    }

    Logger::info(
        "Conexion establecida"
    );

    if(
        !InicializadorBD::crear_tablas(
            bd
        )
    )
    {
        Logger::error(
            "Error creando tablas"
        );

        return;
    }

    ORM orm(bd);

    if(
        orm.obtener_autores().empty() &&
        !InicializadorBD::insertar_datos_prueba(bd)
    )
    {
        Logger::error("No se pudieron cargar los datos iniciales");
        return;
    }

    int opcion = 0;

    do
    {
        mostrar_menu();

        std::cin
            >> opcion;

        switch(opcion)
        {
            case 1:
                listar_autores(
                    orm
                );
                break;

            case 2:
                crear_autor(
                    orm
                );
                break;

            case 3:
                listar_categorias(
                    orm
                );
                break;

            case 4:
                crear_categoria(
                    orm
                );
                break;

            case 5:
                listar_libros(
                    orm
                );
                break;

            case 6:
                crear_libro(
                    orm
                );
                break;

            case 7:
                Logger::info(
                    "Aplicacion finalizada"
                );
                break;

            default:
                std::cout
                    << "Opcion no valida"
                    << std::endl;
        }

    }
    while(opcion != 7);

    bd.cerrar();
}

int main()
{
    iniciar_aplicacion();

    return 0;
}

```
**main.hpp**
```
#pragma once

#include "persistencia/orm.hpp"

// Inicialización de la aplicación
void iniciar_aplicacion();

// Menú principal
void mostrar_menu();

// Gestión de autores
void listar_autores(
    ORM& orm
);

void crear_autor(
    ORM& orm
);

// Gestión de categorías
void listar_categorias(
    ORM& orm
);

void crear_categoria(
    ORM& orm
);

// Gestión de libros
void listar_libros(
    ORM& orm
);

void crear_libro(
    ORM& orm
);
```
#### modelos
**autor.cpp**
```cpp
#include "autor.hpp"

Autor::Autor()
{
    id = 0;
    nombre = "";
    nacionalidad = "";
}

Autor::Autor(
    int id,
    const std::string& nombre,
    const std::string& nacionalidad
)
{
    this->id = id;
    this->nombre = nombre;
    this->nacionalidad = nacionalidad;
}
```
**autor.hpp**
```
#pragma once

#include <string>

class Autor
{
public:

    int id;
    std::string nombre;
    std::string nacionalidad;

    Autor();

    Autor(
        int id,
        const std::string& nombre,
        const std::string& nacionalidad
    );
};
```
**categoria.cpp**
```cpp
#include "categoria.hpp"

Categoria::Categoria()
{
    id = 0;
    nombre = "";
}

Categoria::Categoria(
    int id,
    const std::string& nombre
)
{
    this->id = id;
    this->nombre = nombre;
}
```
**categoria.hpp**
```
#pragma once

#include <string>

class Categoria
{
public:

    int id;
    std::string nombre;

    Categoria();

    Categoria(
        int id,
        const std::string& nombre
    );
};
```
**libro.cpp**
```cpp
#include "libro.hpp"

Libro::Libro()
{
    id = 0;
    titulo = "";
    anio_publicacion = 0;
    numero_paginas = 0;
}

Libro::Libro(
    int id,
    const std::string& titulo,
    int anio_publicacion,
    int numero_paginas,
    const Autor& autor,
    const Categoria& categoria
)
{
    this->id = id;
    this->titulo = titulo;
    this->anio_publicacion = anio_publicacion;
    this->numero_paginas = numero_paginas;
    this->autor = autor;
    this->categoria = categoria;
}
```
**libro.hpp**
```
#pragma once

#include <string>

#include "autor.hpp"
#include "categoria.hpp"

class Libro
{
public:

    int id;
    std::string titulo;
    int anio_publicacion;
    int numero_paginas;

    Autor autor;
    Categoria categoria;

    Libro();

    Libro(
        int id,
        const std::string& titulo,
        int anio_publicacion,
        int numero_paginas,
        const Autor& autor,
        const Categoria& categoria
    );
};
```
#### persistencia
**basedatos.cpp**
```cpp
#include "basedatos.hpp"

#include <iostream>

Basedatos::Basedatos()
{
    conexion = nullptr;
}

Basedatos::~Basedatos()
{
    cerrar();
}

bool Basedatos::abrir(const std::string& archivo)
{
    int resultado = sqlite3_open(
        archivo.c_str(),
        &conexion
    );

    if (resultado != SQLITE_OK)
    {
        std::cerr
            << "Error al abrir la base de datos: "
            << sqlite3_errmsg(conexion)
            << std::endl;

        cerrar();
        return false;
    }

    if (!ejecutar("PRAGMA foreign_keys = ON;"))
    {
        cerrar();
        return false;
    }

    return true;
}

void Basedatos::cerrar()
{
    if (conexion != nullptr)
    {
        sqlite3_close(conexion);
        conexion = nullptr;
    }
}

bool Basedatos::ejecutar(const std::string& sql)
{
    char* mensaje_error = nullptr;

    int resultado = sqlite3_exec(
        conexion,
        sql.c_str(),
        nullptr,
        nullptr,
        &mensaje_error
    );

    if (resultado != SQLITE_OK)
    {
        std::cerr
            << "Error SQL: "
            << mensaje_error
            << std::endl;

        sqlite3_free(mensaje_error);

        return false;
    }

    return true;
}

sqlite3* Basedatos::obtener_conexion()
{
    return conexion;
}

```
**basedatos.hpp**
```
#pragma once

#include <sqlite3.h>
#include <string>

class Basedatos
{
private:
    sqlite3* conexion;

public:

    Basedatos();

    ~Basedatos();

    bool abrir(const std::string& archivo);

    void cerrar();

    bool ejecutar(const std::string& sql);

    sqlite3* obtener_conexion();
};
```
**inicializadorbd.cpp**
```cpp
#include "inicializadorbd.hpp"

bool InicializadorBD::crear_tablas(
    Basedatos& bd
)
{
    bool correcto = true;

    correcto &= bd.ejecutar(
        "CREATE TABLE IF NOT EXISTS autores ("
        "id INTEGER PRIMARY KEY AUTOINCREMENT,"
        "nombre TEXT NOT NULL,"
        "nacionalidad TEXT NOT NULL"
        ");"
    );

    correcto &= bd.ejecutar(
        "CREATE TABLE IF NOT EXISTS categorias ("
        "id INTEGER PRIMARY KEY AUTOINCREMENT,"
        "nombre TEXT NOT NULL"
        ");"
    );

    correcto &= bd.ejecutar(
        "CREATE TABLE IF NOT EXISTS libros ("
        "id INTEGER PRIMARY KEY AUTOINCREMENT,"
        "titulo TEXT NOT NULL,"
        "anio_publicacion INTEGER NOT NULL,"
        "numero_paginas INTEGER NOT NULL,"
        "autor_id INTEGER NOT NULL,"
        "categoria_id INTEGER NOT NULL,"
        "FOREIGN KEY(autor_id) REFERENCES autores(id) ON UPDATE CASCADE ON DELETE RESTRICT,"
        "FOREIGN KEY(categoria_id) REFERENCES categorias(id) ON UPDATE CASCADE ON DELETE RESTRICT"
        ");"
    );

    return correcto;
}

bool InicializadorBD::insertar_datos_prueba(
    Basedatos& bd
)
{
    bool correcto = true;

    correcto &= bd.ejecutar(
        "INSERT INTO autores "
        "(nombre,nacionalidad) VALUES "
        "('Miguel de Cervantes','España');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO autores "
        "(nombre,nacionalidad) VALUES "
        "('Julio Verne','Francia');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO categorias "
        "(nombre) VALUES "
        "('Novela');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO categorias "
        "(nombre) VALUES "
        "('Ciencia Ficcion');"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO libros "
        "(titulo,anio_publicacion,numero_paginas,autor_id,categoria_id) VALUES "
        "('Don Quijote de la Mancha',1605,863,1,1);"
    );

    correcto &= bd.ejecutar(
        "INSERT INTO libros "
        "(titulo,anio_publicacion,numero_paginas,autor_id,categoria_id) VALUES "
        "('Viaje al centro de la Tierra',1864,350,2,2);"
    );

    return correcto;
}

```
**inicializadorbd.hpp**
```
#pragma once

#include "basedatos.hpp"

class InicializadorBD
{
public:

    static bool crear_tablas(
        Basedatos& bd
    );

    static bool insertar_datos_prueba(
        Basedatos& bd
    );
};
```
**orm.cpp**
```cpp
#include "orm.hpp"

#include <iostream>
#include <sqlite3.h>

namespace
{
    std::string escapar_sql(const std::string& texto)
    {
        std::string resultado;

        for(const char caracter : texto)
        {
            resultado += caracter;
            if(caracter == '\'')
            {
                resultado += '\'';
            }
        }

        return resultado;
    }
}

// ==================================================
// CONSTRUCTOR
// ==================================================

ORM::ORM(Basedatos& bd)
    : bd(bd)
{
}

// ==================================================
// AUTORES
// ==================================================

bool ORM::guardar_autor(
    const Autor& autor
)
{
    std::string sql =
        "INSERT INTO autores "
        "(nombre, nacionalidad) "
        "VALUES ('" +
        escapar_sql(autor.nombre) +
        "','" +
        escapar_sql(autor.nacionalidad) +
        "');";

    return bd.ejecutar(sql);
}

std::vector<Autor> ORM::obtener_autores()
{
    std::vector<Autor> autores;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT id, nombre, nacionalidad "
        "FROM autores;";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return autores;
    }

    while (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        Autor autor;

        autor.id =
            sqlite3_column_int(stmt, 0);

        autor.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        autor.nacionalidad =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 2)
            );

        autores.push_back(autor);
    }

    sqlite3_finalize(stmt);

    return autores;
}

bool ORM::actualizar_autor(
    const Autor& autor
)
{
    std::string sql =
        "UPDATE autores SET "
        "nombre='" +
        escapar_sql(autor.nombre) +
        "', nacionalidad='" +
        escapar_sql(autor.nacionalidad) +
        "' WHERE id=" +
        std::to_string(autor.id) +
        ";";

    return bd.ejecutar(sql);
}

bool ORM::eliminar_autor(
    int id
)
{
    std::string sql =
        "DELETE FROM autores "
        "WHERE id=" +
        std::to_string(id) +
        ";";

    return bd.ejecutar(sql);
}

// ==================================================
// CATEGORIAS
// ==================================================

bool ORM::guardar_categoria(
    const Categoria& categoria
)
{
    std::string sql =
        "INSERT INTO categorias "
        "(nombre) "
        "VALUES ('" +
        escapar_sql(categoria.nombre) +
        "');";

    return bd.ejecutar(sql);
}

std::vector<Categoria>
ORM::obtener_categorias()
{
    std::vector<Categoria> categorias;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT id, nombre "
        "FROM categorias;";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return categorias;
    }

    while (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        Categoria categoria;

        categoria.id =
            sqlite3_column_int(stmt, 0);

        categoria.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        categorias.push_back(categoria);
    }

    sqlite3_finalize(stmt);

    return categorias;
}

bool ORM::actualizar_categoria(
    const Categoria& categoria
)
{
    std::string sql =
        "UPDATE categorias SET "
        "nombre='" +
        escapar_sql(categoria.nombre) +
        "' WHERE id=" +
        std::to_string(categoria.id) +
        ";";

    return bd.ejecutar(sql);
}

bool ORM::eliminar_categoria(
    int id
)
{
    std::string sql =
        "DELETE FROM categorias "
        "WHERE id=" +
        std::to_string(id) +
        ";";

    return bd.ejecutar(sql);
}

// ==================================================
// LIBROS
// ==================================================

bool ORM::guardar_libro(
    const Libro& libro
)
{
    std::string sql =
        "INSERT INTO libros "
        "(titulo, anio_publicacion, numero_paginas, autor_id, categoria_id) "
        "VALUES ('" +
        escapar_sql(libro.titulo) +
        "'," +
        std::to_string(libro.anio_publicacion) +
        "," +
        std::to_string(libro.numero_paginas) +
        "," +
        std::to_string(libro.autor.id) +
        "," +
        std::to_string(libro.categoria.id) +
        ");";

    return bd.ejecutar(sql);
}

std::vector<Libro>
ORM::obtener_libros()
{
    std::vector<Libro> libros;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT "
        "l.id, "
        "l.titulo, "
        "l.anio_publicacion, "
        "l.numero_paginas, "
        "a.id, "
        "a.nombre, "
        "a.nacionalidad, "
        "c.id, "
        "c.nombre "
        "FROM libros l "
        "INNER JOIN autores a "
        "ON l.autor_id = a.id "
        "INNER JOIN categorias c "
        "ON l.categoria_id = c.id;";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return libros;
    }

    while (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        Libro libro;

        libro.id =
            sqlite3_column_int(stmt, 0);

        libro.titulo =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        libro.anio_publicacion =
            sqlite3_column_int(stmt, 2);

        libro.numero_paginas =
            sqlite3_column_int(stmt, 3);

        libro.autor.id =
            sqlite3_column_int(stmt, 4);

        libro.autor.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 5)
            );

        libro.autor.nacionalidad =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 6)
            );

        libro.categoria.id =
            sqlite3_column_int(stmt, 7);

        libro.categoria.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 8)
            );

        libros.push_back(libro);
    }

    sqlite3_finalize(stmt);

    return libros;
}

Libro ORM::obtener_libro_por_id(
    int id
)
{
    Libro libro;

    sqlite3_stmt* stmt = nullptr;

    std::string sql =
        "SELECT "
        "l.id, "
        "l.titulo, "
        "l.anio_publicacion, "
        "l.numero_paginas, "
        "a.id, "
        "a.nombre, "
        "a.nacionalidad, "
        "c.id, "
        "c.nombre "
        "FROM libros l "
        "INNER JOIN autores a "
        "ON l.autor_id = a.id "
        "INNER JOIN categorias c "
        "ON l.categoria_id = c.id "
        "WHERE l.id=" +
        std::to_string(id) +
        ";";

    if (
        sqlite3_prepare_v2(
            bd.obtener_conexion(),
            sql.c_str(),
            -1,
            &stmt,
            nullptr
        ) != SQLITE_OK
    )
    {
        return libro;
    }

    if (
        sqlite3_step(stmt)
        == SQLITE_ROW
    )
    {
        libro.id =
            sqlite3_column_int(stmt, 0);

        libro.titulo =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 1)
            );

        libro.anio_publicacion =
            sqlite3_column_int(stmt, 2);

        libro.numero_paginas =
            sqlite3_column_int(stmt, 3);

        libro.autor.id =
            sqlite3_column_int(stmt, 4);

        libro.autor.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 5)
            );

        libro.autor.nacionalidad =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 6)
            );

        libro.categoria.id =
            sqlite3_column_int(stmt, 7);

        libro.categoria.nombre =
            reinterpret_cast<const char*>(
                sqlite3_column_text(stmt, 8)
            );
    }

    sqlite3_finalize(stmt);

    return libro;
}

bool ORM::actualizar_libro(
    const Libro& libro
)
{
    std::string sql =
        "UPDATE libros SET "
        "titulo='" +
        escapar_sql(libro.titulo) +
        "', "
        "anio_publicacion=" +
        std::to_string(
            libro.anio_publicacion
        ) +
        ", "
        "numero_paginas=" +
        std::to_string(
            libro.numero_paginas
        ) +
        ", "
        "autor_id=" +
        std::to_string(
            libro.autor.id
        ) +
        ", "
        "categoria_id=" +
        std::to_string(
            libro.categoria.id
        ) +
        " WHERE id=" +
        std::to_string(
            libro.id
        ) +
        ";";

    return bd.ejecutar(sql);
}

bool ORM::eliminar_libro(
    int id
)
{
    std::string sql =
        "DELETE FROM libros "
        "WHERE id=" +
        std::to_string(id) +
        ";";

    return bd.ejecutar(sql);
}

// ==================================================
// TRANSACCIONES
// ==================================================

bool ORM::iniciar_transaccion()
{
    return bd.ejecutar(
        "BEGIN TRANSACTION;"
    );
}

bool ORM::confirmar_transaccion()
{
    return bd.ejecutar(
        "COMMIT;"
    );
}

bool ORM::cancelar_transaccion()
{
    return bd.ejecutar(
        "ROLLBACK;"
    );
}

```
**orm.hpp**
```
#pragma once

#include <vector>

#include "basedatos.hpp"

#include "../modelos/autor.hpp"
#include "../modelos/categoria.hpp"
#include "../modelos/libro.hpp"

class ORM
{
private:

    Basedatos& bd;

public:

    explicit ORM(Basedatos& bd);

    // AUTORES

    bool guardar_autor(
        const Autor& autor
    );

    std::vector<Autor> obtener_autores();

    bool actualizar_autor(
        const Autor& autor
    );

    bool eliminar_autor(
        int id
    );

    // CATEGORIAS

    bool guardar_categoria(
        const Categoria& categoria
    );

    std::vector<Categoria> obtener_categorias();

    bool actualizar_categoria(
        const Categoria& categoria
    );

    bool eliminar_categoria(
        int id
    );

    // LIBROS

    bool guardar_libro(
        const Libro& libro
    );

    std::vector<Libro> obtener_libros();

    Libro obtener_libro_por_id(
        int id
    );

    bool actualizar_libro(
        const Libro& libro
    );

    bool eliminar_libro(
        int id
    );

    // TRANSACCIONES

    bool iniciar_transaccion();

    bool confirmar_transaccion();

    bool cancelar_transaccion();
};
```
#### utilidades
**logger.cpp**
```cpp
#include "logger.hpp"

#include <iostream>
#include <ctime>

namespace
{
    std::string obtener_fecha_hora()
    {
        std::time_t ahora =
            std::time(nullptr);

        std::tm* tiempo =
            std::localtime(&ahora);

        char buffer[100];

        std::strftime(
            buffer,
            sizeof(buffer),
            "%Y-%m-%d %H:%M:%S",
            tiempo
        );

        return buffer;
    }
}

void Logger::info(
    const std::string& mensaje
)
{
    std::cout
        << "[INFO] "
        << obtener_fecha_hora()
        << " -> "
        << mensaje
        << std::endl;
}

void Logger::advertencia(
    const std::string& mensaje
)
{
    std::cout
        << "[ADVERTENCIA] "
        << obtener_fecha_hora()
        << " -> "
        << mensaje
        << std::endl;
}

void Logger::error(
    const std::string& mensaje
)
{
    std::cerr
        << "[ERROR] "
        << obtener_fecha_hora()
        << " -> "
        << mensaje
        << std::endl;
}
```
**logger.hpp**
```
#pragma once

#include <string>

class Logger
{
public:

    static void info(
        const std::string& mensaje
    );

    static void advertencia(
        const std::string& mensaje
    );

    static void error(
        const std::string& mensaje
    );
};
```
### pruebas
**prueba_transacciones.cpp**
```cpp
#include <iostream>

#include "../nucleo/persistencia/basedatos.hpp"
#include "../nucleo/persistencia/orm.hpp"
#include "../nucleo/persistencia/inicializadorbd.hpp"

#include "../nucleo/modelos/autor.hpp"
#include "../nucleo/modelos/categoria.hpp"

int main()
{
    Basedatos bd;

    if (
        !bd.abrir(
            "../base_datos/biblioteca.db"
        )
    )
    {
        std::cout
            << "Error al conectar "
            << "con la base de datos"
            << std::endl;

        return 1;
    }

    if(!InicializadorBD::crear_tablas(bd))
    {
        std::cout << "No se pudieron crear las tablas" << std::endl;
        return 1;
    }

    ORM orm(bd);

    std::cout
        << "Iniciando transaccion..."
        << std::endl;

    if (!orm.iniciar_transaccion())
    {
        std::cout
            << "No se pudo iniciar "
            << "la transaccion"
            << std::endl;

        return 1;
    }

    try
    {
        Autor autor;

        autor.nombre =
            "Gabriel Garcia Marquez";

        autor.nacionalidad =
            "Colombia";

        Categoria categoria;

        categoria.nombre =
            "Realismo Magico";

        if(!orm.guardar_autor(autor) || !orm.guardar_categoria(categoria))
        {
            orm.cancelar_transaccion();
            std::cout << "Transaccion cancelada" << std::endl;
            return 1;
        }

        if(!orm.confirmar_transaccion())
        {
            std::cout << "No se pudo confirmar la transaccion" << std::endl;
            return 1;
        }

        std::cout
            << "Transaccion completada "
            << "correctamente"
            << std::endl;
    }
    catch (...)
    {
        orm.cancelar_transaccion();

        std::cout
            << "Transaccion cancelada"
            << std::endl;
    }

    bd.cerrar();

    return 0;
}

```
### sql
**crear_tablas.sql**
```sql
PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS libros;
DROP TABLE IF EXISTS autores;
DROP TABLE IF EXISTS categorias;

CREATE TABLE autores
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    nacionalidad TEXT NOT NULL
);

CREATE TABLE categorias
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL
);

CREATE TABLE libros
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    anio_publicacion INTEGER NOT NULL,
    numero_paginas INTEGER NOT NULL,

    autor_id INTEGER NOT NULL,
    categoria_id INTEGER NOT NULL,

    FOREIGN KEY (autor_id)
        REFERENCES autores(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
```
**datos_iniciales.sql**
```sql
INSERT INTO autores
(
    nombre,
    nacionalidad
)
VALUES
(
    'Miguel de Cervantes',
    'España'
);

INSERT INTO autores
(
    nombre,
    nacionalidad
)
VALUES
(
    'Jules Verne',
    'Francia'
);

INSERT INTO categorias
(
    nombre
)
VALUES
(
    'Novela'
);

INSERT INTO categorias
(
    nombre
)
VALUES
(
    'Ciencia Ficcion'
);

INSERT INTO libros
(
    titulo,
    anio_publicacion,
    numero_paginas,
    autor_id,
    categoria_id
)
VALUES
(
    'Don Quijote de la Mancha',
    1605,
    863,
    1,
    1
);

INSERT INTO libros
(
    titulo,
    anio_publicacion,
    numero_paginas,
    autor_id,
    categoria_id
)
VALUES
(
    'Viaje al centro de la Tierra',
    1864,
    350,
    2,
    2
);
```
## 003-Resultado de Aprendizaje
A- Se han identificado las ventajas e inconvenientes de las bases de datos que almacenan objetos.

Durante el desarrollo del proyecto se han analizado las ventajas e inconvenientes de las bases de datos orientadas a objetos y objeto-relacionales.

Ventajas:
- Permiten trabajar directamente con objetos de programación.
- Facilitan la representación de estructuras complejas.
- Reducen la necesidad de transformar objetos en registros.
- Favorecen la reutilización y el mantenimiento del código.

Inconvenientes:
- Mayor complejidad de diseño e implementación.
- Menor disponibilidad de herramientas que las bases de datos relacionales tradicionales.
- Menor estandarización entre motores.
- Curva de aprendizaje más elevada.

--------------------------------------------------

B- Se han establecido y cerrado conexiones.

Se ha desarrollado la clase Basedatos encargada de gestionar las conexiones con SQLite.

La aplicación abre la conexión mediante el método:

- abrir()

y la cierra correctamente mediante:

- cerrar()

garantizando la correcta gestión de los recursos utilizados por la base de datos.

--------------------------------------------------

C- Se ha gestionado la persistencia de objetos simples.

Se han implementado los objetos simples:

- Autor
- Categoria

La persistencia de estos objetos se realiza mediante operaciones de inserción, consulta, modificación y eliminación utilizando la clase ORM.

Métodos utilizados:

- guardar_autor()
- obtener_autores()
- actualizar_autor()
- eliminar_autor()

- guardar_categoria()
- obtener_categorias()
- actualizar_categoria()
- eliminar_categoria()

--------------------------------------------------

D- Se ha gestionado la persistencia de objetos estructurados.

Se ha diseñado la clase Libro como objeto estructurado.

Cada libro contiene información propia además de objetos relacionados:

- Autor
- Categoria

Esta estructura permite demostrar la gestión de relaciones entre objetos y su almacenamiento en una base de datos objeto-relacional mediante claves foráneas.

Métodos utilizados:

- guardar_libro()
- obtener_libros()
- obtener_libro_por_id()
- actualizar_libro()
- eliminar_libro()

--------------------------------------------------

E- Se han desarrollado aplicaciones que realizan consultas.

La aplicación permite realizar consultas sobre la información almacenada en la base de datos.

Se han implementado diferentes consultas para recuperar:

- Autores registrados.
- Categorías registradas.
- Libros almacenados.
- Información detallada de un libro concreto.

Estas consultas utilizan sentencias SQL y operaciones JOIN para obtener información relacionada entre varias tablas.

--------------------------------------------------

F- Se han modificado los objetos almacenados.

Se han desarrollado funcionalidades que permiten actualizar la información almacenada en la base de datos.

La aplicación permite modificar:

- Datos de autores.
- Datos de categorías.
- Datos de libros.

Los métodos implementados para esta tarea son:

- actualizar_autor()
- actualizar_categoria()
- actualizar_libro()

De esta forma se garantiza la actualización de la información persistente.

--------------------------------------------------

G- Se han gestionado las transacciones.

La aplicación incorpora soporte para transacciones mediante los siguientes métodos:

- iniciar_transaccion()
- confirmar_transaccion()
- cancelar_transaccion()

Estas operaciones permiten agrupar varias modificaciones en una única unidad de trabajo, garantizando la integridad de los datos.

En caso de error se ejecuta un ROLLBACK para deshacer los cambios realizados y evitar inconsistencias en la base de datos.

--------------------------------------------------

H- Se han probado y documentado las aplicaciones desarrolladas.

Se han realizado pruebas sobre todas las funcionalidades implementadas:

- Conexión con la base de datos.
- Creación de autores.
- Creación de categorías.
- Creación de libros.
- Consultas de información.
- Modificación de registros.
- Eliminación de registros.
- Gestión de transacciones.

Además, se ha documentado la estructura del proyecto, las clases utilizadas, la base de datos empleada y el funcionamiento general de la aplicación.

La documentación incluye la descripción de los modelos de datos, los métodos implementados y las pruebas realizadas para validar el correcto funcionamiento del sistema.