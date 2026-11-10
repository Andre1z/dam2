# AndreiBBDD 1.1 — compilación rápida

## Motor / CLI
```bash
g++ -std=c++20 -O2 -Wall -Wextra -pedantic \
  main.cpp AndreiBBDD.cpp \
  -o andreibbdd
```

## Extensión PHP
En Linux necesitas los headers de desarrollo de PHP (`php-dev`/`php8.x-dev`) y `php-config`. La extensión PHP de Windows debe compilarse con el SDK y la misma ABI/compiler que la instalación PHP destino; el PHP de XAMPP no es compatible con el build MinGW del terminal.

```bash
g++ -std=c++20 -O2 -fPIC -shared \
  $(php-config --includes) \
  -DCOMPILE_DL_ANDREIBBDD \
  conector_php.cpp AndreiBBDD.cpp \
  -o andreibbdd.so
```

## Windows 11 (solo motor / CLI)

Con GCC compatible con C++20 instalado, ejecuta `compilar.bat`. La extensión PHP no se genera con este script.

Prueba:

```bash
php -d extension="$(pwd)/andreibbdd.so" \
  prueba_php_completa.php "$(pwd)/config.json"
```

Comprobar funciones:

```bash
php -d extension="$(pwd)/andreibbdd.so" -r '
foreach (get_extension_funcs("andreibbdd") as $f) echo $f, PHP_EOL;
'
```

## API añadida para PHP

- `andreibbdd_listar_bases()`
- `andreibbdd_listar_tablas()`
- `andreibbdd_esquema($tabla)`
- `andreibbdd_clave_primaria($tabla)`
- `andreibbdd_claves_foraneas($tabla)`
- `andreibbdd_restricciones($tabla, $columna)`
- `andreibbdd_siguiente_id($tabla)`
- `andreibbdd_alterar_anadir(...)`
- `andreibbdd_alterar_eliminar_columna(...)`
- `andreibbdd_alterar_renombrar_columna(...)`
- `andreibbdd_alterar_modificar_columna(...)`
- `andreibbdd_truncar_tabla($tabla)`
- `andreibbdd_eliminar_tabla($tabla)`
- `andreibbdd_eliminar_base($base)`
- `andreibbdd_insertar_desde(...)`
- `andreibbdd_buscar(...)`
- `andreibbdd_actualizar(...)`
- `andreibbdd_eliminar(...)`
- `andreibbdd_en_transaccion()`

El objetivo de esta versión es que PHP no tenga que leer directamente los ficheros
internos `.csv`, `.esquema`, `.idx`, `.rel`, `.tipos` o `.indices`.
