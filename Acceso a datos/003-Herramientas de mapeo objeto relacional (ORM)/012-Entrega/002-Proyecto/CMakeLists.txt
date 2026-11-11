cmake_minimum_required(VERSION 3.16)

project(crm_orm LANGUAGES C CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(
    SQLITE3_AMALGAMATION_DIR
    ""
    CACHE PATH
    "Carpeta que contiene sqlite3.c y sqlite3.h"
)

find_package(SQLite3 QUIET)

if(NOT SQLite3_FOUND)
    if(EXISTS "${SQLITE3_AMALGAMATION_DIR}/sqlite3.c" AND
       EXISTS "${SQLITE3_AMALGAMATION_DIR}/sqlite3.h")
        add_library(sqlite3 STATIC
            "${SQLITE3_AMALGAMATION_DIR}/sqlite3.c"
        )
        target_include_directories(sqlite3 PUBLIC
            "${SQLITE3_AMALGAMATION_DIR}"
        )
        add_library(SQLite::SQLite3 ALIAS sqlite3)
    else()
        message(FATAL_ERROR
            "No se encontro SQLite3. Instala SQLite3 o define "
            "SQLITE3_AMALGAMATION_DIR con sqlite3.c y sqlite3.h."
        )
    endif()
endif()

add_executable(
    crm

    src/main.cpp

    repositorios/clienterepositorio.cpp
    repositorios/empresarepositorio.cpp
    repositorios/contactorepositorio.cpp
    repositorios/oportunidadrepositorio.cpp
    repositorios/actividadrepositorio.cpp
    repositorios/usuariorepositorio.cpp
    repositorios/tarearepositorio.cpp
)

target_include_directories(
    crm
    PRIVATE
    include
    repositorios
)

target_link_libraries(
    crm
    PRIVATE
    SQLite::SQLite3
)
