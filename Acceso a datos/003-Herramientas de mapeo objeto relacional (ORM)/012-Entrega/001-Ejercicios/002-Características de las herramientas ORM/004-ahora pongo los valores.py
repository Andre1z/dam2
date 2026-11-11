import json
import sqlite3
from pathlib import Path


carpeta = Path(__file__).resolve().parent
ruta_json = carpeta / "curriculum1.json"
ruta_base_datos = carpeta / "curriculum1.db"

with ruta_json.open("r", encoding="utf-8") as archivo:
    contenido_json = json.load(archivo)

def citar_identificador(identificador):
    return '"' + identificador.replace('"', '""') + '"'


columnas = list(contenido_json)
definiciones_columnas = [
    f"{citar_identificador(clave)} TEXT"
    for clave in columnas
]
crear_tabla = (
    "CREATE TABLE IF NOT EXISTS curriculums (\n"
    "id INTEGER PRIMARY KEY AUTOINCREMENT,\n"
    + ",\n".join(definiciones_columnas)
    + "\n)"
)
columnas_sql = ", ".join(citar_identificador(clave) for clave in columnas)
marcadores = ", ".join("?" for _ in columnas)
peticion = (
    f"INSERT INTO curriculums ({columnas_sql}) "
    f"VALUES ({marcadores})"
)
valores = [contenido_json[clave] for clave in columnas]

with sqlite3.connect(ruta_base_datos) as conexion:
    conexion.execute(crear_tabla)
    conexion.execute(peticion, valores)

print("Curriculum guardado en la base de datos.")
