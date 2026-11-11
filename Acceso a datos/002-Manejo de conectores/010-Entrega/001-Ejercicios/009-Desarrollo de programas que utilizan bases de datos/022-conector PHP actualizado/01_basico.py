import os
import andreibbdd

CONFIG = os.path.join(os.path.dirname(__file__), "config.json")
andreibbdd.configurar(os.path.abspath(CONFIG))

andreibbdd.crear_base("demo_conectores_python")
andreibbdd.usar_base("demo_conectores_python")
andreibbdd.crear_tabla_tipada("productos", {
    "nombre": "TEXTO",
    "stock": "ENTERO",
    "precio": "REAL",
    "disponible": "BOOLEANO",
})

identificador = andreibbdd.insertar("productos", ["Teclado", "10", "25.50", "VERDADERO"])
print("ID insertado:", identificador)
print(andreibbdd.listar("productos"))
print(andreibbdd.consultar("SELECCIONAR nombre,precio DE productos DONDE precio > 20"))