archivo = open(r"C:\xampp\htdocs\dam2\Acceso a datos\001- Manejo de ficheros\003-Clases para gestión de flujos de datos desdehacia ficheros\andrei-basededatos\empresa\clientes.csv", "rb")
lineas = sum(bloque.count(b"\n") for bloque in iter(lambda: archivo.read(1024 * 1024), b""))
print(lineas)

