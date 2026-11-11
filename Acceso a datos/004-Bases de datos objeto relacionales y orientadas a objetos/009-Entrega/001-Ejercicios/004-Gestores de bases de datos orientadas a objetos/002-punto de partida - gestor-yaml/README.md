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
