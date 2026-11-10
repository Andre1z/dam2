import json
from pathlib import Path

ruta_archivo = Path(__file__).resolve().parent / "curriculum2.json"

with ruta_archivo.open("r", encoding="utf-8") as archivo:
    contenido_json = json.load(archivo)

print(contenido_json)
