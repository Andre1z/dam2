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


columnas = [
    f"{citar_identificador(clave)} TEXT"
    for clave in contenido_json
]
peticion = (
    "CREATE TABLE IF NOT EXISTS curriculums (\n"
    "id INTEGER PRIMARY KEY AUTOINCREMENT,\n"
    + ",\n".join(columnas)
    + "\n)"
)

with sqlite3.connect(ruta_base_datos) as conexion:
    conexion.execute(peticion)

print(peticion)
print("Tabla curriculums creada o ya existente.")
