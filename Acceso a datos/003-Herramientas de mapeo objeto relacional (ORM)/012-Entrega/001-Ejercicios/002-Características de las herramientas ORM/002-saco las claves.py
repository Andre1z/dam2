import json
from pathlib import Path


ruta_json = Path(__file__).with_name("curriculum1.json")

with ruta_json.open("r", encoding="utf-8") as archivo:
    contenido_json = json.load(archivo)

claves = list(contenido_json.keys())
valores = list(contenido_json.values())

print("Claves:", claves)
for clave, valor in zip(claves, valores):
    if isinstance(valor, list):
        print(f"{clave}: Esto es un array y va a otra tabla")
    else:
        print(f"{clave}: Esto es un dato y va como valor")
