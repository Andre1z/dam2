=================================================
MANUAL DE INSTALACIÓN
CENTRO LOGÍSTICO MULTIHILO
=================================================

1. INTRODUCCIÓN

Este documento describe el proceso de instalación, compilación y ejecución de la aplicación Centro Logístico Multihilo desarrollada en C++.

La aplicación ha sido diseñada para demostrar conceptos de programación concurrente mediante el uso de procesos, hilos y mecanismos de sincronización.

-------------------------------------------------
2. REQUISITOS DEL SISTEMA
-------------------------------------------------

Hardware mínimo:

- Procesador de doble núcleo.
- 4 GB de memoria RAM.
- 100 MB de espacio libre en disco.

Sistema operativo:

- Windows 10 o superior.
- Linux Ubuntu 22.04 o superior.
- Otras distribuciones Linux compatibles con GCC.

-------------------------------------------------
3. SOFTWARE NECESARIO
-------------------------------------------------

Para compilar el proyecto es necesario disponer de:

- CMake 3.16 o superior.
- Compilador compatible con C++17.

Opciones recomendadas:

Windows:

- Visual Studio 2022
- MinGW-w64

Linux:

- GCC
- G++
- CMake

-------------------------------------------------
4. ESTRUCTURA DEL PROYECTO
-------------------------------------------------

centro_logistico/

├── datos/
├── docs/
├── informes/
├── include/
├── src/
└── CMakeLists.txt

Descripción:

datos/
Contiene los datos de entrada utilizados por la aplicación (pedidos.txt, con un pedido por línea en formato id;descripcion). La ruta de esta carpeta se fija al compilar con CMake.

docs/
Contiene la documentación del proyecto.

informes/
Contiene los registros e informes generados durante la ejecución.

include/
Contiene los archivos de cabecera (.hpp).

src/
Contiene el código fuente (.cpp).

CMakeLists.txt
Archivo de configuración de compilación.

-------------------------------------------------
5. INSTALACIÓN EN WINDOWS
-------------------------------------------------

Paso 1

Instalar Visual Studio 2022.

Durante la instalación seleccionar:

- Desarrollo para escritorio con C++
- Herramientas de CMake

Paso 2

Abrir la carpeta del proyecto.

Paso 3

Comprobar que la estructura del proyecto es correcta.

Paso 4

Abrir una terminal en la carpeta raíz del proyecto.

Paso 5

Crear una carpeta de compilación:

mkdir build

Paso 6

Acceder a la carpeta:

cd build

Paso 7

Generar los archivos de compilación:

cmake ..

Paso 8

Compilar el proyecto:

cmake --build .

-------------------------------------------------
6. INSTALACIÓN EN LINUX
-------------------------------------------------

Paso 1

Actualizar repositorios:

sudo apt update

Paso 2

Instalar herramientas necesarias:

sudo apt install build-essential cmake

Paso 3

Acceder a la carpeta del proyecto.

Paso 4

Crear la carpeta de compilación:

mkdir build

Paso 5

Entrar en ella:

cd build

Paso 6

Generar los archivos necesarios:

cmake ..

Paso 7

Compilar la aplicación:

cmake --build .

-------------------------------------------------
7. EJECUCIÓN DE LA APLICACIÓN
-------------------------------------------------

Windows:

Desde la carpeta build:

centro_logistico.exe

Linux:

Desde la carpeta build:

./centro_logistico

Al ejecutarse aparecerá el menú principal.

-------------------------------------------------
8. REGISTRO DE EVENTOS
-------------------------------------------------

La aplicación genera automáticamente registros e informes de ejecución en la carpeta informes/ del proyecto (la ruta se fija al compilar con CMake, por lo que no depende de la carpeta desde la que se ejecute el programa). Si la carpeta no existe, se crea sola.

Archivos generados:

- informes/registro.txt: registro de toda la actividad.
- informes/informe_pedidos_AAAAMMDD_HHMMSS.txt: informe de cada simulación de pedidos.
- informes/informe_proceso_AAAAMMDD_HHMMSS.txt: informe de cada simulación de proceso hijo.

El archivo registro.txt contiene:

- Mensajes informativos.
- Avisos.
- Errores.
- Actividad de procesos.
- Actividad de hilos.

-------------------------------------------------
9. SOLUCIÓN DE PROBLEMAS
-------------------------------------------------

Problema:

Error al ejecutar CMake.

Solución:

Verificar que CMake está correctamente instalado y añadido al PATH del sistema.

-------------------------------------------------

Problema:

Error de compilación relacionado con C++17.

Solución:

Verificar que el compilador utilizado soporta el estándar C++17.

-------------------------------------------------

Problema:

No se generan registro.txt ni los informes.

Solución:

Comprobar que se dispone de permisos de escritura en la carpeta del proyecto. Si se ha movido el proyecto de sitio, volver a ejecutar "cmake .." y "cmake --build ." para actualizar la ruta de la carpeta informes/.

-------------------------------------------------
10. DESINSTALACIÓN
-------------------------------------------------

Para desinstalar la aplicación basta con eliminar:

- La carpeta del proyecto.
- La carpeta de compilación build.
- Los archivos generados en informes.

No se realizan modificaciones permanentes en el sistema operativo.

-------------------------------------------------
11. INFORMACIÓN ADICIONAL
-------------------------------------------------

La aplicación ha sido desarrollada con fines educativos para demostrar:

- Programación concurrente.
- Programación paralela.
- Gestión de procesos.
- Gestión de hilos.
- Sincronización.
- Recursos compartidos.
- Comunicación entre subprocesos.

=================================================
FIN DEL DOCUMENTO
=================================================