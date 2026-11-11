# AndreiBBDD — documentación completa

## 1. Descripción

AndreiBBDD es un SGBD didáctico escrito en C++20. Incluye un intérprete de comandos en terminal y conectores nativos para Python y PHP. Su objetivo es mostrar de forma transparente cómo pueden construirse las piezas fundamentales de un gestor de bases de datos: almacenamiento físico, esquema, índices, CRUD, consultas, integridad referencial, JOIN y agregaciones.

Esta versión incorpora:

- bases de datos y tablas;
- registros de tamaño fijo;
- identificador `id` automático;
- borrado lógico mediante `activo`;
- índice físico por `id`;
- DDL y DML en español;
- DQL con filtros y operadores lógicos;
- clave primaria implícita;
- claves foráneas con integridad referencial;
- `JOIN`/`UNIR` interno;
- `CONTAR`, `SUMA`, `MEDIA`, `MINIMO` y `MAXIMO`;
- `AGRUPAR POR`;
- `TENIENDO`;
- ordenación, límite, alias y valores distintos;
- módulo nativo Python.

---

## 2. Archivos del proyecto

- `AndreiBBDD.hpp`: interfaz pública del motor.
- `AndreiBBDD.cpp`: implementación del almacenamiento, restricciones y DQL.
- `main.cpp`: terminal interactiva y parser de comandos DDL/DML.
- `conector_python.cpp`: extensión nativa CPython.
- `conector_php.cpp`: extensión nativa PHP.
- `compilar.bat`: compilación del terminal para Windows 11.
- `Makefile`: compilación e instalación.
- `config.json`: configuración del directorio de datos y tamaño de registro.
- `PRUEBA_PK_FK_JOIN.txt`: prueba del hito relacional.
- `PRUEBA_AGREGACIONES.txt`: prueba de agregaciones, agrupación y HAVING/TENIENDO.

---

## 3. Compilación

### Windows 11 (terminal C++)

Instala GCC con soporte para C++20 (por ejemplo, WinLibs) y asegúrate de que `g++` esté en `PATH`. Ejecuta `compilar.bat` desde esta carpeta; genera `AndreiBBDD.exe` aquí mismo. El terminal carga `config.json` junto al ejecutable aunque se inicie desde otro directorio.

La extensión PHP se compila por separado con `php-config` y los headers de desarrollo que correspondan a la misma versión y ABI de PHP. El script de compilación de PHP está preparado para Linux, no para Windows.

Dependencias habituales en Ubuntu/Debian:
