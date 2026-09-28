from pathlib import Path

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
archivo.write("esto es una cadena")
archivo.close()