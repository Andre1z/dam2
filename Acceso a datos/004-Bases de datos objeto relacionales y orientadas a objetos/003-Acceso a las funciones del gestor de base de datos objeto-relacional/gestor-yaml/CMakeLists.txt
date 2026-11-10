cmake_minimum_required(VERSION 3.16)
project(GestorYAML VERSION 1.0 LANGUAGES CXX)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
find_package(yaml-cpp REQUIRED)
add_library(gestoryaml STATIC src/GestorYAML.cpp)
target_include_directories(gestoryaml PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/include)
target_link_libraries(gestoryaml PUBLIC yaml-cpp)
add_executable(ejemplo ejemplos/main.cpp)
target_link_libraries(ejemplo PRIVATE gestoryaml)

get_filename_component(
    GESTOR_YAML_PERSONA_JSON
    "${CMAKE_CURRENT_SOURCE_DIR}/../../001-Gestores de bases de datos objeto relacionales/001-objeto.json"
    ABSOLUTE
)
file(TO_CMAKE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/datos" GESTOR_YAML_DATA_DIR)
file(TO_CMAKE_PATH "${GESTOR_YAML_PERSONA_JSON}" GESTOR_YAML_PERSONA_JSON)
target_compile_definitions(ejemplo PRIVATE
    "GESTOR_YAML_DATA_DIR=\"${GESTOR_YAML_DATA_DIR}\""
    "GESTOR_YAML_PERSONA_JSON=\"${GESTOR_YAML_PERSONA_JSON}\""
)
