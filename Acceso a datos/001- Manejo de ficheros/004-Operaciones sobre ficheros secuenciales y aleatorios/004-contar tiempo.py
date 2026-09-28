import time

inicio = time.perf_counter()

archivo = open("D:/dam2/agenda_1M.csv")
lineas = archivo.readlines()

for linea in lineas:
    pass  # aquí procesas cada línea

fin = time.perf_counter()

print("Tiempo:", fin - inicio, "segundos")

archivo.close()