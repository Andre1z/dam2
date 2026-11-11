# AndreiORM 1.0 — motor nativo C++ / SQLite

## Instalar en Ubuntu

```bash
cd andreiorm
./install.sh
```

Dependencias: `build-essential`, `libsqlite3-dev`, `nlohmann-json3-dev`.

## Terminal

```bash
andreiorm demo.db crear
andreiorm demo.db guardar clientes '{"nombre":"Ana","habilidades":["C++","Python"]}'
andreiorm demo.db todos clientes
andreiorm demo.db obtener clientes 1
andreiorm demo.db buscar clientes nombre '"Ana"'
andreiorm demo.db actualizar clientes 1 '{"edad":29}'
andreiorm demo.db contar clientes
andreiorm demo.db exportar clientes ./salida
andreiorm demo.db importar clientes ./entrada
andreiorm demo.db eliminar clientes 1
```

## C++

```cpp
#include <AndreiORM.h>
int main() {
    AndreiORM orm("demo.db");
    auto id = orm.guardar("clientes", {{"nombre", "Ana"}});
    auto dato = orm.obtener("clientes", id);
}
```

Compilar: `g++ -std=c++17 main.cpp -landreiorm -lsqlite3 -o demo`

## API C para Python y PHP

`include/andreiorm_c.h` expone funciones `andrei_open`, `andrei_guardar`, `andrei_obtener`, `andrei_todos`, `andrei_buscar`, `andrei_actualizar`, `andrei_eliminar`, `andrei_contar`, `andrei_importar`, `andrei_exportar`, `andrei_error`, `andrei_free` y `andrei_close`.

La memoria devuelta como `char*` debe liberarse con `andrei_free`.

## Notas

- Se almacena JSON recursivo en dos tablas internas, no una tabla por cada propiedad.
- `buscar` recorre y reconstruye todos los registros de la colección: todavía no es una consulta indexada.
- Los identificadores son globales dentro de la base, no consecutivos por colección.
- Se utiliza la ruta de base de datos que se suministre; no existe un demonio residente.
- El formato no es directamente compatible con las tablas de los scripts Python originales.
- La biblioteca está pensada para instancias independientes por conexión; no comparta un mismo objeto entre hilos simultáneos.
- En el entorno de generación faltaba la cabecera nlohmann/json.hpp, por lo que la compilación no se pudo verificar aquí. `install.sh` instala esa dependencia en Ubuntu antes de compilar.
