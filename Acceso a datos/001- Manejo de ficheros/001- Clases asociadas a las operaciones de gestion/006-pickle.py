import pickle


class Gato:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def __str__(self):
        return f"Gato(nombre='{self.nombre}', edad={self.edad})"


# Crear una instancia de la clase Gato
gato = Gato("Whiskers", 3)

# Guardar el objeto en un archivo binario
with open('gato.pkl', 'wb') as file:
    pickle.dump(gato, file)

print("Objeto guardado en 'gato.pkl'")