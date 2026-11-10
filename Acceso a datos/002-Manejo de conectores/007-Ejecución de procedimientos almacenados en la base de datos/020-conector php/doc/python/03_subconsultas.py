import andreibbdd

andreibbdd.usar_base("demo_conectores_python")
print(andreibbdd.consultar(
    "SELECCIONAR nombre,precio DE productos "
    "DONDE precio > (SELECCIONAR MEDIA(precio) DE productos)"
))
