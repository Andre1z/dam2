cmake_minimum_required(VERSION 3.16)

project(centro_logistico)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include_directories(include)

add_executable(
    centro_logistico

    src/main.cpp
    src/principal.cpp

    src/pedido.cpp

    src/trabajador.cpp

    src/almacen.cpp

    src/registro.cpp

    src/informe.cpp

    src/datos.cpp

    src/proceso.cpp
)

# Los pedidos se leen de la carpeta "datos" y los informes se guardan en
# la carpeta "informes" del proyecto, independientemente de la carpeta
# desde la que se ejecute el programa.
target_compile_definitions(
    centro_logistico
    PRIVATE
    RUTA_DATOS="${CMAKE_SOURCE_DIR}/datos"
    RUTA_INFORMES="${CMAKE_SOURCE_DIR}/informes"
)

find_package(Threads REQUIRED)

target_link_libraries(
    centro_logistico
    Threads::Threads
)
