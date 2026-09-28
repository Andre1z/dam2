# Crear

archivo = open("agenda.txt",'w')
archivo.write("Este es uno de los textos\n")
archivo.close()

# leer

archivo = open("agenda.txt",'r')
lineas = archivo.readlines()
print(lineas)
archivo.close()

# añadir

archivo = open("agenda.txt",'a')
archivo.write("Este es uno de los textos 2\n")
archivo.close()

# leer

archivo = open("agenda.txt",'r')
lineas = archivo.readlines()
print(lineas)
archivo.close()