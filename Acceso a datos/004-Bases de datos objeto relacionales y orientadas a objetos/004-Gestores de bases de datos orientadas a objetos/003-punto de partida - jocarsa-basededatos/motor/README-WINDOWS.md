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
