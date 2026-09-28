A- Se han utilizado clases para la gestión de ficheros y directorios.

DirectoryManager y FileManager encapsulan creación de carpetas, lectura/escritura y append, centralizando la lógica de I/O y facilitando mantenimiento y pruebas.

B- Se han valorado las ventajas y los inconvenientes de las distintas formas de acceso.

Ventajas: acceso secuencial (muy simple y bajo consumo de memoria), CSV (fácil intercambio con hojas de cálculo), JSON (estructura clara y mapeo directo a objetos).

Inconvenientes: acceso secuencial (búsqueda y acceso directo lentos), CSV (requiere escaping y reescritura para editar), JSON (carga toda la colección en memoria, menos eficiente con muchos registros).

C- Se han utilizado clases para recuperar información almacenada en ficheros.

ClientRepository y Client.from_line leen y parsean líneas escapadas, convierten registros en objetos Client y permiten listar, acceder por índice y buscar.

D- Se han utilizado clases para almacenar información en ficheros.

ClientRepository y FileManager serializan Client a líneas escapadas y escriben/reescriben el fichero interno; se usa índice en lugar de IDs para mantener la implementación simple.

E- Se han utilizado clases para realizar conversiones entre diferentes formatos de ficheros.

La clase Converter implementa export_csv/import_csv y export_json/import_json, transformando entre la representación interna, CSV y JSON; los export se guardan junto al script para fácil localización.

F- Se han previsto y gestionado las excepciones.

Se capturan y envuelven errores de I/O y formato (p. ej. OSError, FileNotFoundError, FormatError), y el menú atrapa las excepciones comunes mostrando mensajes claros sin interrumpir la ejecución.

G- Se han probado y documentado las aplicaciones desarrolladas.

run_basic_tests automatiza añadir, listar, actualizar, borrar y exportar/importar con assert; el código incluye encabezado, comentarios y mensajes de uso; se sugiere migrar a unittest y añadir un README para pruebas formales.