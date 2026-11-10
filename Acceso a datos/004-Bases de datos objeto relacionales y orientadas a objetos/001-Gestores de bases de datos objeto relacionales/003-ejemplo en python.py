import json
from pathlib import Path

import yaml


carpeta = Path(__file__).resolve().parent
ruta_json = carpeta / "001-objeto.json"
ruta_yaml = carpeta / "datos.yaml"

with ruta_json.open("r", encoding="utf-8") as archivo:
    datos = json.load(archivo)

with ruta_yaml.open("w", encoding="utf-8") as archivo:
    yaml.safe_dump(datos, archivo, allow_unicode=True, sort_keys=False)

print(f"Datos de {ruta_json.name} guardados en {ruta_yaml.name}.")
