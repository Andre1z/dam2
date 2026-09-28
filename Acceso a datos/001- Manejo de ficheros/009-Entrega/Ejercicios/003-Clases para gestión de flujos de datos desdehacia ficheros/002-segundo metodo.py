import csv
from pathlib import Path

ARCHIVO_CSV = Path(__file__).with_name("agenda.csv")

class AndreiBBDD:
  def listarTodo(self):
    with open(ARCHIVO_CSV, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        print(linea)
  def buscarColumna(self,columna,valor):
    with open(ARCHIVO_CSV, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        if linea[columna] == valor:
          print(linea)
    
conexion = AndreiBBDD()
conexion.listarTodo()
conexion.buscarColumna("nombre","Inés")