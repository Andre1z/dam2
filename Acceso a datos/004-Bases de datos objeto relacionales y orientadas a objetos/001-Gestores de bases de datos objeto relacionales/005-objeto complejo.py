import json
from pathlib import Path

import yaml


carpeta = Path(__file__).resolve().parent
ruta_json = carpeta / "001-objeto.json"
ruta_yaml = carpeta / "datos.yaml"

with ruta_json.open("r", encoding="utf-8") as archivo:
    persona = json.load(archivo)

objeto = {
    "persona": persona,
    "proyectos": [
        {
            "nombre": "Easy Convert",
            "repositorio": "https://github.com/Andre1z/andrei-converter",
        },
        {
            "nombre": "Peggle Nights Recreation",
            "repositorio": "https://github.com/Andre1z/peggle",
        },
        {
            "nombre": "VistaHub",
            "repositorio": "https://github.com/Andre1z/VistaHub-Andrei",
        },
        {
            "nombre": "PyIDE",
            "repositorio": "https://github.com/Andre1z/IDE",
        },
    ],
}

with ruta_yaml.open("w", encoding="utf-8") as archivo:
    yaml.safe_dump(
        objeto,
        archivo,
        allow_unicode=True,
        sort_keys=False,
        default_flow_style=False,
    )

print(f"Objeto complejo guardado en {ruta_yaml.name}.")
