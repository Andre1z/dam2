import os
import andreibbdd

CONFIG = os.path.join(os.path.dirname(__file__), "..", "..", "config.json")
# El conector Python usa config.json al inicializarse. Ejecute el ejemplo desde
# la raíz del proyecto o instale el config global previsto por el proyecto.

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
