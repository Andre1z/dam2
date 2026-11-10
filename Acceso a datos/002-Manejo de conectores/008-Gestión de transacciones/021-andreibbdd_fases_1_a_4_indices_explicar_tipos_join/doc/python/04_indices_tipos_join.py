import os
import andreibbdd

CONFIG = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "config.json"))
andreibbdd.configurar(CONFIG)

andreibbdd.crear_base("ejemplo_fases14")
andreibbdd.usar_base("ejemplo_fases14")
andreibbdd.crear_tabla_tipada("clientes", {
    "nombre":"TEXTO", "email":"TEXTO", "nacimiento":"FECHA", "saldo":"DECIMAL"
})
andreibbdd.crear_indice("idx_email", "clientes", "email")
andreibbdd.insertar("clientes", ["Ana","ana@x.es","2026-01-10","100.25"])
print(andreibbdd.indices("clientes"))
print(andreibbdd.explicar("SELECCIONAR * DE clientes DONDE email = 'ana@x.es'"))
print(andreibbdd.consultar("SELECCIONAR c.nombre DE clientes c"))
