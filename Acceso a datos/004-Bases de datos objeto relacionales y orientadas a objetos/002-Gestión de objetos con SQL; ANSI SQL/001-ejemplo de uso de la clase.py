import json
from pathlib import Path

from gestor import GestorYAML


carpeta = Path(__file__).resolve().parent
ruta_objeto = (
    carpeta.parent
    / "001-Gestores de bases de datos objeto relacionales"
    / "001-objeto.json"
)

with ruta_objeto.open("r", encoding="utf-8") as archivo:
    persona = json.load(archivo)

gestor = GestorYAML()

id_cliente = gestor.guardar("empresa", "clientes", persona)
id_producto = gestor.guardar("empresa", "productos", {
    "nombre": "Portátil",
    "precio": 899.99
})

# Listar clientes
print(gestor.listar("empresa", "clientes"))

# Buscar por identificador
print(gestor.buscar("empresa", "clientes", id_cliente))

# Eliminar el producto de ejemplo
gestor.eliminar("empresa", "productos", id_producto)