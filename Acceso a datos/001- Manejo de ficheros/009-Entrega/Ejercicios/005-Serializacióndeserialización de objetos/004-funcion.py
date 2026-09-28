from pathlib import Path

def serializar(lista,delimitador=","):
  cadena = ""
  for elemento in  lista:
    cadena += elemento+delimitador
  return cadena

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
coches = ['BMW','Audi','Mercedes','Ferrari']
archivo.write(serializar(coches))
archivo.close()