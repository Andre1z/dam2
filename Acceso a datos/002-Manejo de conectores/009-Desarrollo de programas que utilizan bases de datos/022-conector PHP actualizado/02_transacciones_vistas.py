import os
import andreibbdd

CONFIG = os.path.abspath(os.path.join(os.path.dirname(__file__), "config.json"))
andreibbdd.configurar(CONFIG)

andreibbdd.usar_base("demo_conectores_python")

andreibbdd.iniciar_transaccion()
andreibbdd.insertar("productos", ["Temporal", "1", "999", "FALSO"])
print(andreibbdd.consultar("SELECCIONAR CONTAR(*) COMO total DE productos"))
andreibbdd.deshacer()

andreibbdd.crear_vista(
    "productos_caros",
    "SELECCIONAR nombre,precio DE productos DONDE precio > 20",
)
print(andreibbdd.consultar("SELECCIONAR * DE productos_caros"))