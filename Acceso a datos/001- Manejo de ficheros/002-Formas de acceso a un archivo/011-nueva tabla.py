import os
ruta = os.path.dirname(os.path.abspath(__file__))
base = "clientes"

os.makedirs(os.path.join(ruta, base), exist_ok=True)
archivo = open(os.path.join(ruta, base, "personas.csv"),'w')
archivo.write("1,Andrei,Buga")

archivo.close()
