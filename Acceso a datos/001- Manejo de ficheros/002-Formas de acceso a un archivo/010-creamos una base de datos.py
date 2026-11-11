import os
ruta = os.path.dirname(os.path.abspath(__file__))
base = input("Introduce tu base de datos:")
os.mkdir(os.path.join(ruta, base))
