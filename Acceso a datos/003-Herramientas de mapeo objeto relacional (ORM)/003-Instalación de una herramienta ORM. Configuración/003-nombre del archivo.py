import json
from pathlib import Path

ruta_archivo = Path(__file__).resolve().parent / "curriculum2.json"
nombre_de_la_tabla = ruta_archivo.stem
nombre_de_la_base_de_datos = ruta_archivo.with_suffix(".db")

with ruta_archivo.open("r", encoding="utf-8") as archivo:
    contenido_json = json.load(archivo)

print("Tabla:", nombre_de_la_tabla)
print("Base de datos:", nombre_de_la_base_de_datos.name)

for clave, valor in contenido_json.items():
    print(type(valor))
    if isinstance(valor, list):
        print("Esto es un array y va a otra tabla")
        print("Voy a crear una tabla adicional llamada:", clave)
        for dato in valor:
            print(dato)
    else:
        print("Esto es un dato y va como valor")
