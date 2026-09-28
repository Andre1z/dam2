from pathlib import Path

def serializar(lista,delimitador=","):
  cadena = ""
  for elemento in  lista:
    cadena += elemento+delimitador
  return cadena

def desserializar(cadena,delimitador=","):
	lista = cadena.split(delimitador)
	return lista

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
coches = ['BMW','Audi','Mercedes','Ferrari']
archivo.write(serializar(coches))
archivo.close()

print(desserializar("BMW,Audi,Mercedes,Ferrari"))
