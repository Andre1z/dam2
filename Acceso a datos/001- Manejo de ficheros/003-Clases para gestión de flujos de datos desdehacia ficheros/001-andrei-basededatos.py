import csv

class AndreiBBDD:
  def listarTodo(self):
    archivo = open("agenda.csv", mode='r', newline='')
    lector = csv.DictReader(archivo)
    for linea in lector:
      print(linea)
    archivo.close()
    
conexion = AndreiBBDD()
conexion.listarTodo()