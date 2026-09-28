archivo = open("D:/dam2/agenda_1M.csv", "r")

for numero, linea in enumerate(archivo, start=1):
    if numero == 500:
        print(linea)
        break

archivo.close()