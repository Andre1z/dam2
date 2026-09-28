import csv


def buscar(columna,valor):
  archivo = open("agenda.csv", mode='r', newline='')
  lector = csv.DictReader(archivo)
  for linea in lector:
    if linea[columna] == valor:
      print(linea)
  archivo.close()
  
buscar("nombre","Inés")
# SELECT * FROM X WHERE nombre = "Inés"