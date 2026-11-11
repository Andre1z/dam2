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

bd = GestorYAML()

# Insertar y completar los datos del cliente desde objeto.json
id_cliente = bd.guardar("empresa", "clientes", {"nombre": persona["nombre"]})

# Insertar un producto
id_producto = bd.guardar("empresa", "productos", {
    "nombre": "Portátil",
    "precio": 899.99,
    "caracteristicas": {
        "ram": 16,
        "procesador": "Intel i7"
    }
})

# Listar clientes
print(bd.listar("empresa", "clientes"))

# Buscar cliente
print(bd.buscar("empresa", "clientes", id_cliente))

# Actualizar cliente
bd.actualizar("empresa", "clientes", id_cliente, persona)

# Listar bases de datos
print(bd.bases_de_datos())

# Listar colecciones
print(bd.colecciones("empresa"))

# Eliminar producto
bd.eliminar("empresa", "productos", id_producto)