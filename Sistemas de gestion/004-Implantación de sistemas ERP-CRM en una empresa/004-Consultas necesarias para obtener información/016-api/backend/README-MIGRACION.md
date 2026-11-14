# Crimson sobre Andrei BBDD

- Base fija: `andrei-erp` (adaptador `nucleo/AndreiDB.php`).
- Departamentos: colecciones del motor (no carpetas `modulos/`).
- Entidades: tablas de cada colección; una tabla puede pertenecer a varias.
- Panel de datos: CRUD existente de Crimson, con relaciones FK, búsqueda, reporting y gráficas.
- Diseño y estructura de tablas: exclusivamente desde `andrei | bbdd`.
- Autenticación y permisos: tablas internas `__crimson_users` y `__crimson_permissions` en la misma base.

## Instalación
1. Realiza una copia de seguridad de `andrei-erp` y de tu Crimson actual.
2. Comprueba `php -m | grep andreibbdd` y que el conector soporta `jocarsabbdd_listar_colecciones`, `jocarsabbdd_tablas_de_coleccion`, `jocarsabbdd_colecciones_de_tabla`.
3. Crea `andrei-erp` y sus tablas/colecciones desde andrei | bbdd.
4. Si no existen usuarios, inicializa el primero por CLI:
   `CRIMSON_ADMIN_PASSWORD='contraseña-larga' php inicializar-usuarios-cli.php admin 'Administrador' admin@example.com`
5. Sirve la carpeta con Apache/PHP, accede a `index.html` e inicia sesión.

No se ejecutan migraciones destructivas de las tablas de negocio. Las funcionalidades de reporting, dashboard, formularios, usuarios y recursos se han conservado. Requiere pruebas de integración en la instalación real.
