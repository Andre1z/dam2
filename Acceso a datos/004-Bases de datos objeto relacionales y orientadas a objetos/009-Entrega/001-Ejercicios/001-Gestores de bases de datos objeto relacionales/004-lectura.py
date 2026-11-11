from pathlib import Path

import yaml


ruta_yaml = Path(__file__).resolve().with_name("datos.yaml")

with ruta_yaml.open("r", encoding="utf-8") as archivo:
    datos = yaml.safe_load(archivo)

persona = datos.get("persona", datos)

print("Nombre:", persona["nombre"])
print("Apellidos:", persona["apellidos"])
print("Email:", persona["email"])
