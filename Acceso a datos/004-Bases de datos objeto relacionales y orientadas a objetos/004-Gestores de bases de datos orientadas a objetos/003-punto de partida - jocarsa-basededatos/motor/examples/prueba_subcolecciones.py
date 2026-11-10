from andreiorm import AndreiORM
with AndreiORM('prueba_nested','config.json') as db:
    db.crear_coleccion('negocio')
    db.crear_subcoleccion('negocio','ventas')
    db.crear_subcoleccion('ventas','online')
    print(db.arbol_colecciones())
