import csv
from pathlib import Path

class AndreiBBDD:
  def __init__(self):
    self.instalacion = Path(__file__).resolve().parent / "andrei-basededatos"
    self.basededatos = None
  def listarTodo(self,tabla):
    with open(self.basededatos / (tabla + ".csv"), mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        print(linea)
  def buscarColumna(self,tabla,columna,valor):
    with open(self.basededatos / (tabla + ".csv"), mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        if linea[columna] == valor:
          print(linea)
  def creaBaseDatos(self,nombre):
    (self.instalacion / nombre).mkdir(parents=True, exist_ok=True)
  def usaBaseDatos(self,nombre):
    self.basededatos = self.instalacion / nombre
  def creaTabla(self,nombre,esquema):
    self.basededatos.mkdir(parents=True, exist_ok=True)
    with open(self.basededatos / (nombre + ".csv"), 'w', newline='', encoding='utf-8') as archivo:
      csv.writer(archivo).writerow(["id", *esquema.split(",")])
  def insertarDatos(self,tabla,datos):
    ruta_tabla = self.basededatos / (tabla + ".csv")
    with open(ruta_tabla, 'r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      siguiente_id = max((int(linea["id"]) for linea in lector), default=0) + 1
    with open(ruta_tabla, 'a', newline='', encoding='utf-8') as archivo:
      csv.writer(archivo).writerow([siguiente_id, *datos])
    
conexion = AndreiBBDD()
#conexion.creaBaseDatos("empresa")
conexion.usaBaseDatos("empresa")
if not (conexion.basededatos / "clientes.csv").exists():
  conexion.creaTabla("clientes","nombre,apellidos,telefono")
conexion.insertarDatos("clientes",["Andrei","Buga Mihailescu",682713])
conexion.listarTodo("clientes")


