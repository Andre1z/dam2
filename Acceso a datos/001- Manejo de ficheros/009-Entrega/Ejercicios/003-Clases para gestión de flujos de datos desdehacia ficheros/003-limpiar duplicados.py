import csv
from pathlib import Path

class AndreiBBDD:
  def __init__(self,basededatos):
    self.basededatos = Path(__file__).with_name(basededatos)
  def listarTodo(self):
    with open(self.basededatos, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        print(linea)
  def buscarColumna(self,columna,valor):
    with open(self.basededatos, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        if linea[columna] == valor:
          print(linea)
    
conexion = AndreiBBDD("agenda.csv")
conexion.listarTodo()
conexion.buscarColumna("nombre","Inés")