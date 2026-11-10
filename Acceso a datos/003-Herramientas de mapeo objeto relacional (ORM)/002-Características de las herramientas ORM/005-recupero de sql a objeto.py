import sqlite3
from pathlib import Path


ruta_base_datos = Path(__file__).resolve().with_name("curriculum1.db")

with sqlite3.connect(ruta_base_datos) as conexion:
    conexion.row_factory = sqlite3.Row
    filas = conexion.execute("SELECT * FROM curriculums").fetchall()

for fila in filas:
    diccionario = dict(fila)
    print(diccionario)
