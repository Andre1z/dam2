# Arquitectura

Python (ctypes) -> libjocarsaorm.so -> AndreiORM.cpp -> AndreiBBDD.cpp -> almacenamiento AndreiBBDD

PHP (FFI) -> libjocarsaorm.so -> AndreiORM.cpp -> AndreiBBDD.cpp -> almacenamiento AndreiBBDD

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
