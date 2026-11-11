import os
import andreibbdd

CONFIG = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "config.json"))
andreibbdd.configurar(CONFIG)

andreibbdd.usar_base("demo_conectores_python")
print(andreibbdd.consultar(
    "SELECCIONAR nombre,precio DE productos "
    "DONDE precio > (SELECCIONAR MEDIA(precio) DE productos)"
))
