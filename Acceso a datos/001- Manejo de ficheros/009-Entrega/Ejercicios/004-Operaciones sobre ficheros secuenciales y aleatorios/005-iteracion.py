import time

archivo = open("D:/dam2/agenda_1M.csv")
lineas = archivo.readlines()

inicio = time.perf_counter()

for linea in lineas:
    pass

fin = time.perf_counter()

print("Tiempo de recorrido:", fin - inicio, "segundos")

archivo.close()