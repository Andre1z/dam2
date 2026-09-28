import pickle


class Gato:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def __str__(self):
        return f"Gato(nombre='{self.nombre}', edad={self.edad})"


print("Objeto guardado en 'gato.pkl'")

# Leer el contenido del archivo binario
with open('gato.pkl', 'rb') as file:
    gato_cargado = pickle.load(file)

print("Objeto cargado desde 'gato.pkl':", gato_cargado)