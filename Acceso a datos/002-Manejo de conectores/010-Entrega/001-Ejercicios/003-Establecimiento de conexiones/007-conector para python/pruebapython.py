import os
from pathlib import Path

os.chdir(Path(__file__).resolve().parent)

try:
    import andreibbdd
except ModuleNotFoundError as error:
    if error.name != "andreibbdd":
        raise
    raise SystemExit(
        "No se encuentra la extension andreibbdd. "
        "Ejecuta compilar_conector.bat y vuelve a iniciar este script."
    ) from error

andreibbdd.crear_base("empresaprueba2")

andreibbdd.usar_base("empresaprueba2")

andreibbdd.crear_tabla(
    "clientes",
    "nombre,apellidos,email"
)

id = andreibbdd.insertar(
    "clientes",
    [
        "Andrei",
        "Buga",
        "andrei@example.com"
    ]
)

print("ID insertado:", id)