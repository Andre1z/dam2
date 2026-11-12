=================================================
MANUAL DE USUARIO
CENTRO LOGÍSTICO MULTIHILO
=================================================

1. INTRODUCCIÓN

Centro Logístico Multihilo es una aplicación desarrollada en C++ cuyo objetivo es simular la gestión y procesamiento de pedidos mediante técnicas de programación concurrente.

La aplicación utiliza procesos e hilos para ejecutar tareas en paralelo, permitiendo demostrar conceptos relacionados con concurrencia, sincronización y comunicación entre subprocesos.

-------------------------------------------------
2. INICIO DE LA APLICACIÓN
-------------------------------------------------

Una vez compilado el proyecto, ejecute el archivo generado:

centro_logistico.exe

Al iniciar la aplicación se mostrará el menú principal.

=====================================
 CENTRO LOGISTICO MULTIHILO
=====================================
1. Simular procesamiento de pedidos
2. Simular proceso hijo
3. Salir
=====================================

Seleccione la opción deseada introduciendo su número correspondiente.

-------------------------------------------------
3. OPCIÓN 1: SIMULAR PROCESAMIENTO DE PEDIDOS
-------------------------------------------------

Esta opción inicia una simulación de procesamiento concurrente de pedidos.

Funcionamiento:

- Los pedidos se leen del archivo datos/pedidos.txt (ver apartado 3.1).
- Los pedidos se almacenan en una cola compartida.
- Se crean varios trabajadores.
- Cada trabajador se ejecuta en un hilo independiente.
- Los trabajadores procesan pedidos simultáneamente.
- Las acciones realizadas se registran en el sistema de eventos.

Durante la ejecución se mostrarán mensajes similares a:

[INFO] Trabajador 1 procesando pedido 3
[INFO] Trabajador 2 procesando pedido 4
[INFO] Trabajador 3 procesando pedido 5

Esto permite observar cómo diversos hilos trabajan de forma concurrente sobre un recurso compartido.

3.1. ARCHIVO DE PEDIDOS (datos/pedidos.txt)

Los pedidos que se procesan se definen en el archivo datos/pedidos.txt. Puede editarse con cualquier editor de texto para añadir, quitar o cambiar pedidos.

Formato: una línea por pedido, con el identificador y la descripción separados por punto y coma.

# Esto es un comentario
1;Televisor 55 pulgadas
2;Portatil 15 pulgadas
3;Lavadora 8 kg

Reglas:

- Las líneas vacías y las que empiezan por # se ignoran.
- El identificador debe ser un número entero positivo y no puede repetirse.
- La descripción no puede estar vacía.
- Las líneas incorrectas se ignoran y se anotan como [AVISO] en el registro, indicando el número de línea.
- Si el archivo no existe o no contiene ningún pedido válido, se generan 10 pedidos automáticamente y se avisa en el registro.

El informe de cada simulación indica el origen de los pedidos (archivo o generados automáticamente).

-------------------------------------------------
4. OPCIÓN 2: SIMULAR PROCESO HIJO
-------------------------------------------------

Esta opción demuestra el uso de procesos del sistema operativo.

Funcionamiento:

- Se crea un proceso hijo.
- El proceso hijo ejecuta una tarea independiente.
- El proceso principal espera a que finalice.
- Se registran los eventos producidos durante la ejecución.

Ejemplo de salida:

[INFO] Proceso padre esperando al hijo (PID 14056).
[INFO] Proceso hijo iniciado.
[INFO] Proceso hijo finalizado.
[INFO] Proceso hijo completado.

Esta funcionalidad permite estudiar el comportamiento de los procesos y su gestión por parte del sistema operativo.

-------------------------------------------------
5. OPCIÓN 3: SALIR
-------------------------------------------------

Finaliza la ejecución de la aplicación de forma segura.

Antes del cierre se detienen todos los procesos y recursos utilizados por el programa.

-------------------------------------------------
6. REGISTRO DE EVENTOS E INFORMES
-------------------------------------------------

La aplicación guarda todos sus archivos en la carpeta informes/ del proyecto, sea cual sea la carpeta desde la que se ejecute. Si la carpeta no existe, se crea automáticamente.

Registro de actividad:

informes/registro.txt

Entre los eventos registrados se encuentran:

- Inicio de la aplicación.
- Procesamiento de pedidos.
- Creación de procesos.
- Finalización de tareas.
- Mensajes de error.
- Mensajes informativos.

Informes generados:

Cada simulación genera además un informe con la fecha y hora en el nombre.

- informes/informe_pedidos_AAAAMMDD_HHMMSS.txt (opción 1)
  Contiene el número de pedidos generados y procesados, la duración total, el detalle de qué trabajador procesó cada pedido y cuánto tardó, y un resumen de pedidos y tiempo trabajado por cada trabajador.

- informes/informe_proceso_AAAAMMDD_HHMMSS.txt (opción 2)
  Contiene el mecanismo utilizado para crear el proceso, el PID del padre y del hijo, el código de salida del hijo y la duración.

Al terminar cada simulación se muestra por pantalla la ruta del informe guardado.

-------------------------------------------------
7. ESTRUCTURA DEL PROYECTO
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
Contiene el archivo pedidos.txt con los pedidos de entrada de la simulación.

docs/
Contiene la documentación del proyecto.

informes/
Contiene los registros e informes generados.

include/
Contiene los archivos de cabecera (.hpp).

src/
Contiene los archivos fuente (.cpp).

-------------------------------------------------
8. RECOMENDACIONES DE USO
-------------------------------------------------

- No cierre la aplicación mientras se esté ejecutando una simulación.
- Revise el archivo registro.txt y los informes generados para analizar los eventos de cada simulación.
- Utilice la simulación de pedidos para observar el comportamiento de los hilos.
- Utilice la simulación de procesos para observar la creación de procesos independientes.

-------------------------------------------------
9. FINALIZACIÓN
-------------------------------------------------

Gracias por utilizar Centro Logístico Multihilo.

Esta aplicación ha sido desarrollada con fines educativos para demostrar conceptos de:

- Programación concurrente.
- Programación paralela.
- Procesos.
- Hilos.
- Sincronización.
- Comunicación entre subprocesos.
- Gestión de recursos compartidos.

FIN DEL DOCUMENTO