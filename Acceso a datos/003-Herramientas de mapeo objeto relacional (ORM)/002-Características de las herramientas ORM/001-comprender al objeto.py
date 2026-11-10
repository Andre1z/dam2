import json
from pathlib import Path


ruta_json = Path(__file__).with_name("curriculum1.json")

with ruta_json.open("r", encoding="utf-8") as archivo:
    contenido_json = json.load(archivo)

print(contenido_json)
