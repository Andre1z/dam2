from pathlib import Path

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
coches = ['BMW','Audi','Mercedes, Ferrari']
archivo.write(coches)
archivo.close()