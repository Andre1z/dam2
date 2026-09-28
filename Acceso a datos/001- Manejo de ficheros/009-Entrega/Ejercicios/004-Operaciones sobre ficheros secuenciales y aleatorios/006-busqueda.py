import time
import csv

inicio = time.perf_counter()

archivo = open("D:/dam2/agenda_1M.csv")
lineas = csv.DictReader(archivo)

contador = 0

for linea in lineas:
    if linea["nombre"] == "Juan":
        contador += 1

fin = time.perf_counter()

print("Tiempo:", fin - inicio, "segundos")
print("Personas llamadas Juan:", contador)

archivo.close()