import json
from pathlib import Path

ruta_archivo = Path(__file__).resolve().parent / "curriculum2.json"

with ruta_archivo.open("r", encoding="utf-8") as archivo:
    contenido_json = json.load(archivo)

for clave, valor in contenido_json.items():
    print(type(valor))
    if isinstance(valor, list):
        print("Esto es un array y va a otra tabla")
        print("Voy a crear una tabla adicional llamada:", clave)
        for dato in valor:
            print(dato)
    else:
        print("Esto es un dato y va como valor")
