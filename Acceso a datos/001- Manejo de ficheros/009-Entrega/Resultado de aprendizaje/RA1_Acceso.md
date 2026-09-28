# Reporte de proyecto

## Estructura del proyecto

```
C:\xampp\htdocs\dam2\Acceso a datos\001- Manejo de ficheros\009-Entrega
├── Ejercicios
│   ├── 001- Clases asociadas a las operaciones de gestion
│   │   ├── 001-estricura.py
│   │   ├── 002-leer.py
│   │   ├── 004-escribir binarios.py
│   │   ├── 005-lista de nombres.py
│   │   ├── 006-pickle.py
│   │   ├── 007-leer pickle.py
│   │   ├── 008-escribir.php
│   │   ├── 009-escribir sencillo.php
│   │   ├── 010-leer.php
│   │   ├── datos.bin
│   │   ├── gato.pkl
│   │   ├── readme.md
│   │   └── texto.txt
│   ├── 002-Formas de acceso a un archivo
│   │   ├── 001-repaso.py
│   │   ├── 002-eliminar.py
│   │   ├── 003-procesar csv.py
│   │   ├── 004-como diccionario.py
│   │   ├── 005-andreibbdd-leertodo.py
│   │   ├── 006-andreibbdd-leer columna.py
│   │   ├── 007-leer con condiciones.py
│   │   ├── 008-a funcion.py
│   │   ├── 009-crear carpeta.py
│   │   ├── 010-creamos una base de datos.py
│   │   ├── 011-nueva tabla.py
│   │   ├── agenda.csv
│   │   └── agenda.txt
│   ├── 003-Clases para gestión de flujos de datos desdehacia ficheros
│   │   ├── 000-Introducción.md
│   │   ├── 001-andrei-basededatos.py
│   │   ├── 002-segundo metodo.py
│   │   ├── 003-limpiar duplicados.py
│   │   ├── 004-crearbasededatos.py
│   │   ├── 005-creartabla.py
│   │   ├── 006-insertar registro.py
│   │   ├── 007-listado.py
│   │   ├── agenda.csv
│   │   └── andrei-basededatos
│   │       └── empresa
│   │           └── clientes.csv
│   ├── 004-Operaciones sobre ficheros secuenciales y aleatorios
│   │   ├── 000-Introducción.md
│   │   ├── 001-contar las lineas.py
│   │   ├── 002-aleatorio.py
│   │   ├── 003-iterar.py
│   │   ├── 004-contar tiempo.py
│   │   ├── 005-iteracion.py
│   │   ├── 006-busqueda.py
│   │   ├── 007-baraja.py
│   │   ├── 008-lista.py
│   │   ├── 009-acceso a un indice.py
│   │   ├── 010-todo junto.py
│   │   └── 011-mas eficiente.py
│   ├── 005-Serializacióndeserialización de objetos
│   │   ├── 000-Introducción.md
│   │   ├── 001-grabacion exitosa.py
│   │   ├── 002-intento guardar una lista.py
│   │   ├── 003-serializar a mano.py
│   │   ├── 004-funcion.py
│   │   ├── 005-desserializar.py
│   │   ├── 006-clase serializadora.py
│   │   └── prueba.txt
│   ├── 006-Trabajo con ficheros
│   │   ├── 000-Introducción.md
│   │   ├── 001-que tenemos y que nos falta.md
│   │   ├── 002-implementamos eliminar.py
│   │   ├── 003-actualizar y serializar.py
│   │   └── 004-eliminar y mejoras.py
│   ├── 007-Excepciones detección y tratamiento
│   │   ├── 000-Introducción.md
│   │   ├── 001-repaso de excepciones.py
│   │   ├── 002-pero ahora error.py
│   │   ├── 003-assert.py
│   │   ├── 004-try con assert.py
│   │   └── 005-captura de errores en la clase.py
│   └── 008-Desarrollo de aplicaciones que utilizan ficheros
│       ├── 000-Introducción.md
│       ├── 002-con configuracion
│       │   ├── .DOCUMENTACION_DESARROLLADORES.md.history
│       │   │   └── 20260917130939298
│       │   │       └── DOCUMENTACION_DESARROLLADORES.md
│       │   ├── AndreiBBDD.py
│       │   ├── DOCUMENTACION_DESARROLLADORES.md
│       │   ├── config.json
│       │   └── pruebas_andrei_bbdd.py
│       ├── 003-con configuracion
│       │   ├── .JocarsaBBDD.py.history
│       │   │   └── 20260917131255443
│       │   │       └── JocarsaBBDD.py
│       │   ├── .terminal
│       │   │   ├── 20260917_131008_368-clear.txt
│       │   │   └── 20260917_131038_065-python3-instalar.py.txt
│       │   ├── AndreiBBDD.py
│       │   ├── DOCUMENTACION_DESARROLLADORES.md
│       │   ├── config.json
│       │   ├── instalar.py
│       │   └── pruebas_andrei_bbdd.py
│       ├── 004-con configuracion
│       │   ├── .terminal
│       │   │   ├── 20260917_131318_993-clear.txt
│       │   │   └── 20260917_131329_387-python3-demo_empresa.py.txt
│       │   ├── AndreiBBDD.py
│       │   ├── DOCUMENTACION_DESARROLLADORES.md
│       │   ├── config.json
│       │   ├── demo_empresa.py
│       │   ├── instalar.py
│       │   └── pruebas_Andrei_bbdd.py
│       ├── AndreiBBDD.py
│       ├── DOCUMENTACION_DESARROLLADORES.md
│       └── pruebas_andrei_bbdd.py
├── Proyecto
│   ├── clientes_export.csv
│   ├── clientes_export.json
│   └── proyecto.py
└── Resultado de aprendizaje
    └── RA1-Acceso.md
```

## Código (intercalado)

# 009-Entrega
## Ejercicios
### 001- Clases asociadas a las operaciones de gestion
**001-estricura.py**
```python
archivo = open("agenda.txt", 'w') # Flag indica el modo de apertura
archivo.write("Hola soy Andrei Buga")
archivo.close() # cerramos siempre los recursos que hayamos abierto
```
**002-leer.py**
```python
archivo = open("agenda.txt",'r') # Flag indica el modo de apertura
lineas = archivo.readlines()

for linea in lineas:
	print(linea)
  
archivo.close()
```
**004-escribir binarios.py**
```python
nombre = "Andrei Buga Mihailescu"

archivo = open("datos.bin","wb")
archivo.write(nombre.encode('utf-8'))

archivo.close()
```
**005-lista de nombres.py**
```python
coches = ['Seat','Audi','BMW','Mercedes','Ferrari']

archivo = open("datos.bin","wb")
archivo.write(b''.join(map(str.encode, coches)))

archivo.close()
```
**006-pickle.py**
```python
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
```
**007-leer pickle.py**
```python
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
```
**008-escribir.php**
```php
<?php
// Función para escribir un archivo de texto
function escribirArchivo($ruta, $contenido) {
    // Abrir el archivo en modo escritura
    $archivo = fopen($ruta, 'w');
    
    // Verificar si el archivo se abrió correctamente
    if ($archivo) {
        // Escribir el contenido en el archivo
        fwrite($archivo, $contenido);
        
        // Cerrar el archivo
        fclose($archivo);
        
        // Devolver true si la escritura fue exitosa
        return true;
    } else {
        // Devolver false si hubo un error al abrir el archivo
        return false;
    }
}

// Ejemplo de uso
$ruta = 'ruta/al/archivo.txt';
$contenido = 'Este es el contenido del archivo de texto';

if (escribirArchivo($ruta, $contenido)) {
    echo 'El archivo se escribió correctamente.';
} else {
    echo 'Hubo un error al escribir el archivo.';
}
?>
```
**009-escribir sencillo.php**
```php
<?php

    $archivo = fopen("texto.txt", 'w');
    fwrite($archivo, "Este es el archivo que se ha escrito desde PHP");
    fclose($archivo);
   
?>
```
**010-leer.php**
```php
<?php

    $archivo = fopen("texto.txt", 'r');
    $lineas = fread($archivo, 1024); // Changed the second argument to 1024
    echo $lineas; // Changed var_dump to echo
    fclose($archivo);
   
?>
```
**readme.md**
```markdown

```
### 002-Formas de acceso a un archivo
**001-repaso.py**
```python
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
```
**002-eliminar.py**
```python
# Crear

archivo = open("agenda.txt",'w')
archivo.write("")
archivo.close()
```
**003-procesar csv.py**
```python
import csv

archivo = open("agenda.csv", mode='r', newline='')
lector = csv.reader(archivo)
for linea in lector:
	print(linea)
archivo.close()
```
**004-como diccionario.py**
```python
import csv

archivo = open("agenda.csv", mode='r', newline='')
lector = csv.DictReader(archivo)
for linea in lector:
	print(linea['nombre'])
archivo.close()
```
**005-andreibbdd-leertodo.py**
```python
import csv

archivo = open("agenda.csv", mode='r', newline='')
lector = csv.DictReader(archivo)
for linea in lector:
	print(linea)
archivo.close()
```
**006-andreibbdd-leer columna.py**
```python
import csv

archivo = open("agenda.csv", mode='r', newline='')
lector = csv.DictReader(archivo)
for linea in lector:
	print(linea['nombre'])
archivo.close()
```
**007-leer con condiciones.py**
```python
import csv

columna = "nombre"
valor = "Inés"

archivo = open("agenda.csv", mode='r', newline='')
lector = csv.DictReader(archivo)
for linea in lector:
	if linea[columna] == valor:
		print(linea)
archivo.close()
```
**008-a funcion.py**
```python
import csv


def buscar(columna,valor):
  archivo = open("agenda.csv", mode='r', newline='')
  lector = csv.DictReader(archivo)
  for linea in lector:
    if linea[columna] == valor:
      print(linea)
  archivo.close()
  
buscar("nombre","Inés")
# SELECT * FROM X WHERE nombre = "Inés"
```
**009-crear carpeta.py**
```python
import os

os.mkdir("miagenda")
```
**010-creamos una base de datos.py**
```python
import os
ruta = "C:\\Users\\Usuario\\Desktop\\Acceso a datos\\001- Manejo de ficheros\\002-Formas de acceso a un archivo\\"
base = input("Introduce tu base de datos:")
os.mkdir(ruta+base)
```
**011-nueva tabla.py**
```python
import os
ruta = "C:\\Users\\Usuario\\Desktop\\Acceso a datos\\001- Manejo de ficheros\\002-Formas de acceso a un archivo\\"
base = "clientes"

archivo = open(ruta+base+"/personas.csv",'w')
archivo.write("1,Andrei,Buga")

archivo.close()
```
### 003-Clases para gestión de flujos de datos desdehacia ficheros
**000-Introducción.md**
```markdown
# Clases para gestión de flujos de datos desdehacia ficheros
- Clases para gestión de flujos de datos desdehacia ficheros
	- Conceptos y finalidad
	- Elementos principales
	- Propiedades y atributos
	- Métodos y operaciones
	- Relaciones entre elementos
	- Ejemplos de uso

```
**001-andrei-basededatos.py**
```python
import csv

class AndreiBBDD:
  def listarTodo(self):
    archivo = open("agenda.csv", mode='r', newline='')
    lector = csv.DictReader(archivo)
    for linea in lector:
      print(linea)
    archivo.close()
    
conexion = AndreiBBDD()
conexion.listarTodo()
```
**002-segundo metodo.py**
```python
import csv
from pathlib import Path

ARCHIVO_CSV = Path(__file__).with_name("agenda.csv")

class AndreiBBDD:
  def listarTodo(self):
    with open(ARCHIVO_CSV, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        print(linea)
  def buscarColumna(self,columna,valor):
    with open(ARCHIVO_CSV, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        if linea[columna] == valor:
          print(linea)
    
conexion = AndreiBBDD()
conexion.listarTodo()
conexion.buscarColumna("nombre","Inés")
```
**003-limpiar duplicados.py**
```python
import csv
from pathlib import Path

class AndreiBBDD:
  def __init__(self,basededatos):
    self.basededatos = Path(__file__).with_name(basededatos)
  def listarTodo(self):
    with open(self.basededatos, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        print(linea)
  def buscarColumna(self,columna,valor):
    with open(self.basededatos, mode='r', newline='', encoding='utf-8') as archivo:
      lector = csv.DictReader(archivo)
      for linea in lector:
        if linea[columna] == valor:
          print(linea)
    
conexion = AndreiBBDD("agenda.csv")
conexion.listarTodo()
conexion.buscarColumna("nombre","Inés")
```
**004-crearbasededatos.py**
```python
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
    
conexion = AndreiBBDD()
conexion.creaBaseDatos("empresa")
conexion.usaBaseDatos("empresa")


```
**005-creartabla.py**
```python
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
    
conexion = AndreiBBDD()
#conexion.creaBaseDatos("empresa")
conexion.usaBaseDatos("empresa")
conexion.creaTabla("clientes","nombre,apellidos,telefono")


```
**006-insertar registro.py**
```python
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



```
**007-listado.py**
```python
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
#conexion.creaTabla("clientes","nombre,apellidos,telefono")
#conexion.insertarDatos("clientes",["Andrei","Buga Mihailescu",682713])
conexion.listarTodo("clientes")



```
#### andrei-basededatos
##### empresa
### 004-Operaciones sobre ficheros secuenciales y aleatorios
**000-Introducción.md**
```markdown
# Operaciones sobre ficheros secuenciales y aleatorios
- Operaciones sobre ficheros secuenciales y aleatorios
	- Conceptos fundamentales
	- Tipos y formatos
	- Apertura y cierre
	- Lectura y escritura
	- Control de errores y excepciones
	- Ejemplos de implementación
  
Un archivo con un millon de registros
El primer registro siempre se encontrará muy rápido
El ultimo registro siempre se encontrará de forma muy lenta


```
**001-contar las lineas.py**
```python
archivo = open(r"C:\xampp\htdocs\dam2\Acceso a datos\001- Manejo de ficheros\003-Clases para gestión de flujos de datos desdehacia ficheros\andrei-basededatos\empresa\clientes.csv", "rb")
lineas = sum(bloque.count(b"\n") for bloque in iter(lambda: archivo.read(1024 * 1024), b""))
print(lineas)


```
**002-aleatorio.py**
```python
import random

print(random.randint(0,100000000))
```
**003-iterar.py**
```python
import random
limite = 100000
for i in range(0,limite):
	print(random.randint(0,limite))
```
**004-contar tiempo.py**
```python
import time

inicio = time.perf_counter()

archivo = open("D:/dam2/agenda_1M.csv")
lineas = archivo.readlines()

for linea in lineas:
    pass  # aquí procesas cada línea

fin = time.perf_counter()

print("Tiempo:", fin - inicio, "segundos")

archivo.close()
```
**005-iteracion.py**
```python
import time

archivo = open("D:/dam2/agenda_1M.csv")
lineas = archivo.readlines()

inicio = time.perf_counter()

for linea in lineas:
    pass

fin = time.perf_counter()

print("Tiempo de recorrido:", fin - inicio, "segundos")

archivo.close()
```
**006-busqueda.py**
```python
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
```
**007-baraja.py**
```python
import random

lista = [1,2,3,4,5,6,7,8,9,0]

random.shuffle(lista)

print(lista)
```
**008-lista.py**
```python
import random

cantidad = 1000

lista = list(range(cantidad))

random.shuffle(lista)

print(lista)
```
**009-acceso a un indice.py**
```python
archivo = open("D:/dam2/agenda_1M.csv", "r")

for numero, linea in enumerate(archivo, start=1):
    if numero == 500:
        print(linea)
        break

archivo.close()
```
**010-todo junto.py**
```python
import random
import time
import csv

ruta = "D:/dam2/agenda_1M.csv"

# 1. Contar líneas
archivo = open(ruta, "rb")
cantidad = sum(
    bloque.count(b"\n")
    for bloque in iter(lambda: archivo.read(1024 * 1024), b"")
)
archivo.close()

print("Líneas:", cantidad)


# 2. Crear índices
# La línea 1 contiene las cabeceras, así que empezamos en 2
indices = list(range(2, cantidad + 1))


# 3. Barajar
random.shuffle(indices)


# 4. Buscar en orden aleatorio
inicio = time.perf_counter()

contador = 0

for indice in indices:

    archivo = open(ruta, "r")

    for numero, linea in enumerate(archivo, start=1):

        if numero == indice:

            datos = next(csv.reader([linea]))

            # suponiendo:
            # id,nombre,apellidos,email,...
            if datos[1] == "Laura":
                contador += 1

            break

    archivo.close()


fin = time.perf_counter()

print("Tiempo:", fin - inicio, "segundos")
print("Personas llamadas Laura:", contador)
```
**011-mas eficiente.py**
```python
import random
import time
import csv

ruta = "D:/dam2/agenda_1M.csv"

# ============================================
# 1. CREAR ÍNDICE DE POSICIONES
# ============================================

archivo = open(ruta, "rb")

posiciones = []

# Saltamos cabecera
archivo.readline()

while True:
    posicion = archivo.tell()
    linea = archivo.readline()

    if not linea:
        break

    posiciones.append(posicion)

archivo.close()

print("Registros:", len(posiciones))


# ============================================
# 2. BARAJAR POSICIONES
# ============================================

random.shuffle(posiciones)


# ============================================
# 3. ACCESO ALEATORIO REAL
# ============================================

inicio = time.perf_counter()

archivo = open(ruta, "rb")

contador = 0

for posicion in posiciones:

    archivo.seek(posicion)

    linea = archivo.readline().decode("utf-8")

    datos = next(csv.reader([linea]))

    # Suponiendo:
    # id,nombre,apellidos,email,...
    if datos[1] == "Laura":
        contador += 1

archivo.close()

fin = time.perf_counter()

print("Tiempo:", fin - inicio, "segundos")
print("Personas llamadas Laura:", contador)
```
### 005-Serializacióndeserialización de objetos
**000-Introducción.md**
```markdown
# Serializacióndeserialización de objetos
- Serializacióndeserialización de objetos
	- Concepto y finalidad
	- Características principales
	- Elementos que intervienen
	- Funcionamiento y operaciones
	- Aplicación práctica
	- Buenas prácticas

```
**001-grabacion exitosa.py**
```python
from pathlib import Path

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
archivo.write("esto es una cadena")
archivo.close()
```
**002-intento guardar una lista.py**
```python
from pathlib import Path

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
coches = ['BMW','Audi','Mercedes, Ferrari']
archivo.write(coches)
archivo.close()
```
**003-serializar a mano.py**
```python
from pathlib import Path

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
coches = ['BMW','Audi','Mercedes','Ferrari']
cadena = ""
for coche in coches:
  cadena += coche+","
archivo.write(cadena)
archivo.close()
```
**004-funcion.py**
```python
from pathlib import Path

def serializar(lista,delimitador=","):
  cadena = ""
  for elemento in  lista:
    cadena += elemento+delimitador
  return cadena

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
coches = ['BMW','Audi','Mercedes','Ferrari']
archivo.write(serializar(coches))
archivo.close()
```
**005-desserializar.py**
```python
from pathlib import Path

def serializar(lista,delimitador=","):
  cadena = ""
  for elemento in  lista:
    cadena += elemento+delimitador
  return cadena

def desserializar(cadena,delimitador=","):
	lista = cadena.split(delimitador)
	return lista

ruta = Path(__file__).resolve().parent / "prueba.txt"
archivo = open(ruta, 'w')
coches = ['BMW','Audi','Mercedes','Ferrari']
archivo.write(serializar(coches))
archivo.close()

print(desserializar("BMW,Audi,Mercedes,Ferrari"))

```
**006-clase serializadora.py**
```python
class AndreiSerializador():
  def serializar(self,lista,delimitador=","):
    cadena = ""
    for elemento in  lista:
      cadena += elemento+delimitador
    return cadena

  def desserializar(self,cadena,delimitador=","):
    lista = cadena.split(delimitador)
    return lista

serial = AndreiSerializador()
print(serial.desserializar("BMW,Audi,Mercedes,Ferrari"))

```
### 006-Trabajo con ficheros
**000-Introducción.md**
```markdown
# Trabajo con ficheros
- Trabajo con ficheros
	- Conceptos fundamentales
	- Tipos y formatos
	- Apertura y cierre
	- Lectura y escritura
	- Control de errores y excepciones
	- Ejemplos de implementación

```
**001-que tenemos y que nos falta.md**
```markdown
Hemos creado una clase
Le estamos dando métodos de acceso y creación
Estamos encapsulándola para reutilizar

Tenemos:
Listar
BuscarColumna
Crear base  de datos
Usar base de datos
Crear tabla 
Insertar datos

CRUD
Falta:
Actualizar
Eliminar
Truncar
Drop

Objetivo primario del ciclo es desarrollar vuestro propio estilo

```
**002-implementamos eliminar.py**
```python
import csv
import os

class AndreiBBDD:
  def __init__(self):
    self.instalacion = "C:/xampp/htdocs/dam2/Acceso a datos/001- Manejo de ficheros/003-Clases para gestión de flujos de datos desdehacia ficheros/andrei-basededatos/"
    self.basededatos = ""
    
  def listarTodo(self,tabla):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv", mode='r', newline='')
    lector = csv.DictReader(archivo)
    for linea in lector:
      print(linea)
    archivo.close()
    
  def buscarColumna(self,columna,valor):
    archivo = open(self.instalacion+self.basededatos, mode='r', newline='')
    lector = csv.DictReader(archivo)
    for linea in lector:
      if linea[columna] == valor:
        print(linea)
    archivo.close()
    
  def creaBaseDatos(self,nombre):
    os.mkdir(self.instalacion+self.basededatos+nombre)
    
  def usaBaseDatos(self,nombre):
    self.basededatos = nombre
    
  def creaTabla(self,nombre,esquema):
    archivo = open(self.instalacion+self.basededatos+"/"+nombre+".csv",'w')
    archivo.write("id,"+esquema+"\n")
    archivo.close()
    
  def insertarDatos(self,tabla,datos):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'a')
    cadena = ",".join(map(str, datos))
    archivo.write(cadena+"\n")
    archivo.close()
    
  def eliminar(self,tabla,columna,valor):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'r')
    lector = csv.DictReader(archivo)
    cabeceras = lector.fieldnames
    lineas = []
    
    for linea in lector:
      if linea[columna] != valor:
        lineas.append(linea)
        
    archivo.close()
    
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'w',newline='')
    escritor = csv.DictWriter(archivo,fieldnames=cabeceras)
    escritor.writeheader()
    
    for linea in lineas:
      escritor.writerow(linea)
      
    archivo.close()


conexion = AndreiBBDD()
#conexion.creaBaseDatos("empresa")
conexion.usaBaseDatos("empresa")
#conexion.creaTabla("clientes","nombre,apellidos,telefono")
#conexion.insertarDatos("clientes",["Andrei","Buga Mihailescu",682713])

conexion.eliminar("clientes","nombre","Andrei")

conexion.listarTodo("clientes")
```
**003-actualizar y serializar.py**
```python
class JocarsaSerializador():
  def serializar(self,lista,delimitador=","):
    cadena = ""
    for elemento in lista:
      cadena += str(elemento)+delimitador
    cadena = cadena[:-1]
    return cadena

  def desserializar(self,cadena,delimitador=","):
    lista = cadena.split(delimitador)
    return lista


import csv
import os

class JocarsaBBDD:
  def __init__(self):
    self.instalacion = "C:/xampp/htdocs/dam2/Acceso a datos/001- Manejo de ficheros/003-Clases para gestión de flujos de datos desdehacia ficheros/andrei-basededatos/"
    self.basededatos = ""

  def listarTodo(self,tabla):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv", mode='r', newline='')
    lector = csv.DictReader(archivo)
    for linea in lector:
      print(linea)
    archivo.close()

  def buscarColumna(self,tabla,columna,valor):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv", mode='r', newline='')
    lector = csv.DictReader(archivo)
    for linea in lector:
      if linea[columna] == valor:
        print(linea)
    archivo.close()

  def creaBaseDatos(self,nombre):
    os.mkdir(self.instalacion+self.basededatos+nombre)

  def usaBaseDatos(self,nombre):
    self.basededatos = nombre

  def creaTabla(self,nombre,esquema):
    archivo = open(self.instalacion+self.basededatos+"/"+nombre+".csv",'w')
    archivo.write("id,"+esquema+"\n")
    archivo.close()

  def insertarDatos(self,tabla,datos):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'a')
    serial = JocarsaSerializador()
    cadena = serial.serializar(datos)
    archivo.write(cadena+"\n")
    archivo.close()

  def eliminar(self,tabla,columna,valor):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'r')
    lector = csv.DictReader(archivo)
    cabeceras = lector.fieldnames
    lineas = []

    for linea in lector:
      if linea[columna] != valor:
        lineas.append(linea)

    archivo.close()

    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'w',newline='')
    escritor = csv.DictWriter(archivo,fieldnames=cabeceras)
    escritor.writeheader()

    for linea in lineas:
      escritor.writerow(linea)

    archivo.close()

  def actualizar(self,tabla,id,datos):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'r')
    lineas = archivo.readlines()
    archivo.close()

    serial = JocarsaSerializador()
    nuevaslineas = []

    for linea in lineas:
      linea = linea.strip()
      elementos = serial.desserializar(linea)

      if elementos[0] == str(id):
        elementos = [str(id)]+datos
        linea = serial.serializar(elementos)

      nuevaslineas.append(linea)

    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".csv",'w')

    for linea in nuevaslineas:
      archivo.write(linea+"\n")

    archivo.close()


conexion = JocarsaBBDD()
#conexion.creaBaseDatos("empresa")
conexion.usaBaseDatos("empresa")
#conexion.creaTabla("clientes","nombre,apellidos,telefono")
#conexion.insertarDatos("clientes",["1","Andrei","Buga Mihailescu",682713])
#conexion.eliminar("clientes","nombre","Andrei")
#conexion.actualizar("clientes",1,["Andrei","Buga Mihailescu","666777888"])
conexion.listarTodo("clientes")
```
**004-eliminar y mejoras.py**
```python
import os

class AndreiSerializador():
  def serializar(self,lista,delimitador=","):
    cadena = ""
    for elemento in lista:
      cadena += str(elemento)+delimitador
    cadena = cadena[:-1]
    return cadena

  def desserializar(self,cadena,delimitador=","):
    lista = cadena.split(delimitador)
    return lista


class AndreiBBDD:
  def __init__(self):
    self.instalacion = "C:/xampp/htdocs/dam2/Acceso a datos/001- Manejo de ficheros/003-Clases para gestión de flujos de datos desdehacia ficheros/andrei-basededatos/"
    self.basededatos = ""
    self.tamanoRegistro = 512

  def creaBaseDatos(self,nombre):
    ruta = self.instalacion+nombre
    if not os.path.exists(ruta):
      os.mkdir(ruta)

  def usaBaseDatos(self,nombre):
    self.basededatos = nombre

  def creaTabla(self,nombre,esquema):
    archivo = open(self.instalacion+self.basededatos+"/"+nombre+".csv",'wb')
    archivo.close()

    archivo = open(self.instalacion+self.basededatos+"/"+nombre+".esquema",'w')
    archivo.write("id,activo,"+esquema)
    archivo.close()

    archivo = open(self.instalacion+self.basededatos+"/"+nombre+".idx",'w')
    archivo.close()

  def obtenerEsquema(self,tabla):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".esquema",'r')
    esquema = archivo.read()
    archivo.close()

    serial = AndreiSerializador()
    return serial.desserializar(esquema)

  def siguienteId(self,tabla):
    ruta = self.instalacion+self.basededatos+"/"+tabla+".idx"

    archivo = open(ruta,'r')
    ultimo = 0

    for linea in archivo:
      linea = linea.strip()
      if linea != "":
        partes = linea.split(",")
        ultimo = int(partes[0])

    archivo.close()

    return ultimo+1

  def insertarDatos(self,tabla,datos):
    serial = AndreiSerializador()
    id = self.siguienteId(tabla)

    elementos = [id,1]+datos
    cadena = serial.serializar(elementos)

    datosRegistro = cadena.encode("utf-8")

    if len(datosRegistro) > self.tamanoRegistro-1:
      print("Error: el registro es demasiado grande")
      return

    registro = datosRegistro+b" "*(self.tamanoRegistro-1-len(datosRegistro))+b"\n"

    ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"

    archivo = open(ruta,'ab')
    posicion = archivo.tell()
    archivo.write(registro)
    archivo.close()

    indice = open(self.instalacion+self.basededatos+"/"+tabla+".idx",'a')
    indice.write(str(id)+","+str(posicion)+"\n")
    indice.close()

    return id

  def buscarPosicion(self,tabla,id):
    archivo = open(self.instalacion+self.basededatos+"/"+tabla+".idx",'r')

    for linea in archivo:
      linea = linea.strip()
      if linea != "":
        partes = linea.split(",")
        if partes[0] == str(id):
          archivo.close()
          return int(partes[1])

    archivo.close()
    return -1

  def leerRegistro(self,tabla,id):
    posicion = self.buscarPosicion(tabla,id)

    if posicion == -1:
      return None

    ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"

    archivo = open(ruta,'rb')
    archivo.seek(posicion)
    registro = archivo.read(self.tamanoRegistro)
    archivo.close()

    cadena = registro.decode("utf-8").rstrip("\n").rstrip()

    serial = AndreiSerializador()
    elementos = serial.desserializar(cadena)

    if len(elementos) < 2:
      return None

    if elementos[1] == "0":
      return None

    return elementos

  def seleccionar(self,tabla,id):
    registro = self.leerRegistro(tabla,id)

    if registro == None:
      return None

    esquema = self.obtenerEsquema(tabla)
    resultado = {}

    for i in range(len(esquema)):
      resultado[esquema[i]] = registro[i]

    return resultado

  def listarTodo(self,tabla):
    esquema = self.obtenerEsquema(tabla)
    ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"

    archivo = open(ruta,'rb')

    while True:
      registro = archivo.read(self.tamanoRegistro)

      if registro == b"":
        break

      cadena = registro.decode("utf-8").rstrip("\n").rstrip()

      if cadena != "":
        serial = AndreiSerializador()
        elementos = serial.desserializar(cadena)

        if len(elementos) > 1 and elementos[1] == "1":
          resultado = {}

          for i in range(len(esquema)):
            resultado[esquema[i]] = elementos[i]

          print(resultado)

    archivo.close()

  def buscarColumna(self,tabla,columna,valor):
    esquema = self.obtenerEsquema(tabla)

    if columna not in esquema:
      return

    posicionColumna = esquema.index(columna)
    ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"

    archivo = open(ruta,'rb')

    while True:
      registro = archivo.read(self.tamanoRegistro)

      if registro == b"":
        break

      cadena = registro.decode("utf-8").rstrip("\n").rstrip()

      if cadena != "":
        serial = AndreiSerializador()
        elementos = serial.desserializar(cadena)

        if len(elementos) > 1:
          if elementos[1] == "1" and elementos[posicionColumna] == str(valor):
            resultado = {}

            for i in range(len(esquema)):
              resultado[esquema[i]] = elementos[i]

            print(resultado)

    archivo.close()

  def actualizar(self,tabla,id,datos):
    posicion = self.buscarPosicion(tabla,id)

    if posicion == -1:
      print("Error: registro no encontrado")
      return

    registroActual = self.leerRegistro(tabla,id)

    if registroActual == None:
      print("Error: registro no encontrado o eliminado")
      return

    serial = AndreiSerializador()
    elementos = [id,1]+datos
    cadena = serial.serializar(elementos)

    datosRegistro = cadena.encode("utf-8")

    if len(datosRegistro) > self.tamanoRegistro-1:
      print("Error: el registro es demasiado grande")
      return

    registro = datosRegistro+b" "*(self.tamanoRegistro-1-len(datosRegistro))+b"\n"

    ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"

    archivo = open(ruta,'r+b')
    archivo.seek(posicion)
    archivo.write(registro)
    archivo.close()

  def eliminar(self,tabla,id):
    posicion = self.buscarPosicion(tabla,id)

    if posicion == -1:
      print("Error: registro no encontrado")
      return

    ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"

    archivo = open(ruta,'r+b')
    archivo.seek(posicion)
    registro = archivo.read(self.tamanoRegistro)

    cadena = registro.decode("utf-8").rstrip("\n").rstrip()

    serial = AndreiSerializador()
    elementos = serial.desserializar(cadena)

    if len(elementos) < 2:
      archivo.close()
      return

    elementos[1] = "0"
    cadena = serial.serializar(elementos)

    datosRegistro = cadena.encode("utf-8")
    registro = datosRegistro+b" "*(self.tamanoRegistro-1-len(datosRegistro))+b"\n"

    archivo.seek(posicion)
    archivo.write(registro)
    archivo.close()


# EJEMPLO DE USO

conexion = AndreiBBDD()

# conexion.creaBaseDatos("empresa")
conexion.usaBaseDatos("empresa")

# conexion.creaTabla("clientes","nombre,apellidos,telefono")

# id1 = conexion.insertarDatos("clientes",["Andrei","Buga Mihailescu",682713])
# id2 = conexion.insertarDatos("clientes",["Ana","Garcia",666666666])
# id3 = conexion.insertarDatos("clientes",["Juan","Lopez",777777777])

# conexion.actualizar( "clientes",2,["Ana","Garcia Martinez",999999999] )

# conexion.eliminar("clientes",3)

# print(conexion.seleccionar("clientes",2))

# conexion.buscarColumna("clientes","nombre","Ana")

conexion.listarTodo("clientes")
```
### 007-Excepciones detección y tratamiento
**000-Introducción.md**
```markdown
# Excepciones detección y tratamiento
- Excepciones detección y tratamiento
	- Concepto y finalidad
	- Características principales
	- Elementos que intervienen
	- Funcionamiento y operaciones
	- Aplicación práctica
	- Buenas prácticas

```
**001-repaso de excepciones.py**
```python
try:
  print("Hola que tal me llamo Andrei")
except Exception as error:
  print(error)
```
**002-pero ahora error.py**
```python
try:
  print(10/0)
except Exception as error:
  print(error)
```
**003-assert.py**
```python
assert 8 < 7


```
**004-try con assert.py**
```python
try:
  assert 8 < 7
except Exception as error:
  print("Se ha producido un error:")
  print(error)
```
**005-captura de errores en la clase.py**
```python
import os

class AndreiSerializador():
  def serializar(self,lista,delimitador=","):
    try:
      cadena = ""
      for elemento in lista:
        cadena += str(elemento)+delimitador
      cadena = cadena[:-1]
      return cadena
    except Exception as error:
      print("Se ha producido un error al serializar:")
      print(error)
      return None

  def desserializar(self,cadena,delimitador=","):
    try:
      lista = cadena.split(delimitador)
      return lista
    except Exception as error:
      print("Se ha producido un error al desserializar:")
      print(error)
      return None


class AndreiBBDD:
  def __init__(self):
    self.instalacion = "C:/xampp/htdocs/dam2/Acceso a datos/001- Manejo de ficheros/003-Clases para gestión de flujos de datos desdehacia ficheros/andrei-basededatos/"
    self.basededatos = ""
    self.tamanoRegistro = 512

  def creaBaseDatos(self,nombre):
    try:
      ruta = self.instalacion+nombre
      assert not os.path.exists(ruta), "La base de datos '"+nombre+"' ya existe"
      os.mkdir(ruta)
    except Exception as error:
      print("Se ha producido un error al crear la base de datos:")
      print(error)

  def usaBaseDatos(self,nombre):
    try:
      ruta = self.instalacion+nombre
      assert os.path.exists(ruta), "La base de datos '"+nombre+"' no existe"
      self.basededatos = nombre
    except Exception as error:
      print("Se ha producido un error al seleccionar la base de datos:")
      print(error)

  def creaTabla(self,nombre,esquema):
    try:
      assert self.basededatos != "", "No se ha seleccionado ninguna base de datos"

      ruta = self.instalacion+self.basededatos+"/"+nombre+".csv"
      assert not os.path.exists(ruta), "La tabla '"+nombre+"' ya existe"

      archivo = open(ruta,'wb')
      archivo.close()

      archivo = open(self.instalacion+self.basededatos+"/"+nombre+".esquema",'w')
      archivo.write("id,activo,"+esquema)
      archivo.close()

      archivo = open(self.instalacion+self.basededatos+"/"+nombre+".idx",'w')
      archivo.close()
    except Exception as error:
      print("Se ha producido un error al crear la tabla:")
      print(error)

  def obtenerEsquema(self,tabla):
    try:
      ruta = self.instalacion+self.basededatos+"/"+tabla+".esquema"
      assert os.path.exists(ruta), "No existe el esquema de la tabla '"+tabla+"'"

      archivo = open(ruta,'r')
      esquema = archivo.read()
      archivo.close()

      serial = AndreiSerializador()
      resultado = serial.desserializar(esquema)
      assert resultado != None, "No se ha podido desserializar el esquema"
      return resultado
    except Exception as error:
      print("Se ha producido un error al obtener el esquema:")
      print(error)
      return None

  def siguienteId(self,tabla):
    try:
      ruta = self.instalacion+self.basededatos+"/"+tabla+".idx"
      assert os.path.exists(ruta), "No existe el índice de la tabla '"+tabla+"'"

      archivo = open(ruta,'r')
      ultimo = 0

      for linea in archivo:
        linea = linea.strip()
        if linea != "":
          partes = linea.split(",")
          ultimo = int(partes[0])

      archivo.close()
      return ultimo+1
    except Exception as error:
      print("Se ha producido un error al calcular el siguiente id:")
      print(error)
      return None

  def insertarDatos(self,tabla,datos):
    try:
      assert self.basededatos != "", "No se ha seleccionado ninguna base de datos"

      ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"
      assert os.path.exists(ruta), "La tabla '"+tabla+"' no existe"

      serial = AndreiSerializador()
      id = self.siguienteId(tabla)
      assert id != None, "No se ha podido obtener el siguiente id"

      elementos = [id,1]+datos
      cadena = serial.serializar(elementos)
      assert cadena != None, "No se ha podido serializar el registro"

      datosRegistro = cadena.encode("utf-8")
      assert len(datosRegistro) <= self.tamanoRegistro-1, "El registro ocupa "+str(len(datosRegistro))+" bytes y el máximo permitido es "+str(self.tamanoRegistro-1)

      registro = datosRegistro+b" "*(self.tamanoRegistro-1-len(datosRegistro))+b"\n"

      archivo = open(ruta,'ab')
      posicion = archivo.tell()
      archivo.write(registro)
      archivo.close()

      indice = open(self.instalacion+self.basededatos+"/"+tabla+".idx",'a')
      indice.write(str(id)+","+str(posicion)+"\n")
      indice.close()

      return id
    except Exception as error:
      print("Se ha producido un error al insertar datos:")
      print(error)
      return None

  def buscarPosicion(self,tabla,id):
    try:
      ruta = self.instalacion+self.basededatos+"/"+tabla+".idx"
      assert os.path.exists(ruta), "No existe el índice de la tabla '"+tabla+"'"

      archivo = open(ruta,'r')

      for linea in archivo:
        linea = linea.strip()
        if linea != "":
          partes = linea.split(",")
          if partes[0] == str(id):
            archivo.close()
            return int(partes[1])

      archivo.close()
      raise Exception("No se ha encontrado el id "+str(id)+" en la tabla '"+tabla+"'")
    except Exception as error:
      print("Se ha producido un error al buscar la posición del registro:")
      print(error)
      return -1

  def leerRegistro(self,tabla,id):
    try:
      posicion = self.buscarPosicion(tabla,id)
      assert posicion != -1, "No se ha podido localizar el registro"

      ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"
      assert os.path.exists(ruta), "La tabla '"+tabla+"' no existe"

      archivo = open(ruta,'rb')
      archivo.seek(posicion)
      registro = archivo.read(self.tamanoRegistro)
      archivo.close()

      assert registro != b"", "No se han encontrado datos en la posición "+str(posicion)

      cadena = registro.decode("utf-8").rstrip("\n").rstrip()

      serial = AndreiSerializador()
      elementos = serial.desserializar(cadena)

      assert elementos != None, "No se ha podido desserializar el registro"
      assert len(elementos) >= 2, "El registro está incompleto"
      assert elementos[1] != "0", "El registro con id "+str(id)+" está eliminado"

      return elementos
    except Exception as error:
      print("Se ha producido un error al leer el registro:")
      print(error)
      return None

  def seleccionar(self,tabla,id):
    try:
      registro = self.leerRegistro(tabla,id)
      assert registro != None, "No se ha podido recuperar el registro"

      esquema = self.obtenerEsquema(tabla)
      assert esquema != None, "No se ha podido obtener el esquema"
      assert len(registro) == len(esquema), "El número de campos del registro no coincide con el esquema"

      resultado = {}

      for i in range(len(esquema)):
        resultado[esquema[i]] = registro[i]

      return resultado
    except Exception as error:
      print("Se ha producido un error al seleccionar el registro:")
      print(error)
      return None

  def listarTodo(self,tabla):
    try:
      esquema = self.obtenerEsquema(tabla)
      assert esquema != None, "No se ha podido obtener el esquema"

      ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"
      assert os.path.exists(ruta), "La tabla '"+tabla+"' no existe"

      archivo = open(ruta,'rb')
      serial = AndreiSerializador()

      while True:
        registro = archivo.read(self.tamanoRegistro)

        if registro == b"":
          break

        cadena = registro.decode("utf-8").rstrip("\n").rstrip()

        if cadena != "":
          elementos = serial.desserializar(cadena)

          if elementos != None:
            if len(elementos) > 1 and elementos[1] == "1":
              assert len(elementos) == len(esquema), "Registro corrupto: el número de campos no coincide con el esquema"

              resultado = {}

              for i in range(len(esquema)):
                resultado[esquema[i]] = elementos[i]

              print(resultado)

      archivo.close()
    except Exception as error:
      print("Se ha producido un error al listar los registros:")
      print(error)

  def buscarColumna(self,tabla,columna,valor):
    try:
      esquema = self.obtenerEsquema(tabla)
      assert esquema != None, "No se ha podido obtener el esquema"
      assert columna in esquema, "La columna '"+columna+"' no existe en la tabla '"+tabla+"'"

      posicionColumna = esquema.index(columna)
      ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"
      assert os.path.exists(ruta), "La tabla '"+tabla+"' no existe"

      archivo = open(ruta,'rb')
      serial = AndreiSerializador()

      while True:
        registro = archivo.read(self.tamanoRegistro)

        if registro == b"":
          break

        cadena = registro.decode("utf-8").rstrip("\n").rstrip()

        if cadena != "":
          elementos = serial.desserializar(cadena)

          if elementos != None:
            if len(elementos) > posicionColumna:
              if elementos[1] == "1" and elementos[posicionColumna] == str(valor):
                resultado = {}

                for i in range(len(esquema)):
                  resultado[esquema[i]] = elementos[i]

                print(resultado)

      archivo.close()
    except Exception as error:
      print("Se ha producido un error al buscar por columna:")
      print(error)

  def actualizar(self,tabla,id,datos):
    try:
      posicion = self.buscarPosicion(tabla,id)
      assert posicion != -1, "No se ha podido localizar el registro"

      registroActual = self.leerRegistro(tabla,id)
      assert registroActual != None, "El registro no existe o está eliminado"

      esquema = self.obtenerEsquema(tabla)
      assert esquema != None, "No se ha podido obtener el esquema"
      assert len(datos) == len(esquema)-2, "Se esperaban "+str(len(esquema)-2)+" campos y se han recibido "+str(len(datos))

      serial = AndreiSerializador()
      elementos = [id,1]+datos
      cadena = serial.serializar(elementos)
      assert cadena != None, "No se ha podido serializar el registro actualizado"

      datosRegistro = cadena.encode("utf-8")
      assert len(datosRegistro) <= self.tamanoRegistro-1, "El registro actualizado ocupa "+str(len(datosRegistro))+" bytes y el máximo permitido es "+str(self.tamanoRegistro-1)

      registro = datosRegistro+b" "*(self.tamanoRegistro-1-len(datosRegistro))+b"\n"

      ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"

      archivo = open(ruta,'r+b')
      archivo.seek(posicion)
      archivo.write(registro)
      archivo.close()
    except Exception as error:
      print("Se ha producido un error al actualizar el registro:")
      print(error)

  def eliminar(self,tabla,id):
    try:
      posicion = self.buscarPosicion(tabla,id)
      assert posicion != -1, "No se ha podido localizar el registro"

      ruta = self.instalacion+self.basededatos+"/"+tabla+".csv"
      assert os.path.exists(ruta), "La tabla '"+tabla+"' no existe"

      archivo = open(ruta,'r+b')
      archivo.seek(posicion)
      registro = archivo.read(self.tamanoRegistro)

      assert registro != b"", "No existe ningún registro en la posición "+str(posicion)

      cadena = registro.decode("utf-8").rstrip("\n").rstrip()

      serial = AndreiSerializador()
      elementos = serial.desserializar(cadena)

      assert elementos != None, "No se ha podido desserializar el registro"
      assert len(elementos) >= 2, "El registro está incompleto"
      assert elementos[1] != "0", "El registro con id "+str(id)+" ya estaba eliminado"

      elementos[1] = "0"
      cadena = serial.serializar(elementos)

      datosRegistro = cadena.encode("utf-8")
      registro = datosRegistro+b" "*(self.tamanoRegistro-1-len(datosRegistro))+b"\n"

      archivo.seek(posicion)
      archivo.write(registro)
      archivo.close()
    except Exception as error:
      print("Se ha producido un error al eliminar el registro:")
      print(error)
```
### 008-Desarrollo de aplicaciones que utilizan ficheros
**000-Introducción.md**
```markdown
# Desarrollo de aplicaciones que utilizan ficheros
- Desarrollo de aplicaciones que utilizan ficheros
	- Conceptos fundamentales
	- Tipos y formatos
	- Apertura y cierre
	- Lectura y escritura
	- Control de errores y excepciones
	- Ejemplos de implementación

```
**AndreiBBDD.py**
```python
import os


class AndreiSerializador():

    def serializar(self, lista, delimitador=","):
        try:
            cadena = ""
            for elemento in lista:
                cadena += str(elemento) + delimitador
            cadena = cadena[:-1]
            return cadena

        except Exception as error:
            print("Se ha producido un error al serializar:")
            print(error)
            return None


    def desserializar(self, cadena, delimitador=","):
        try:
            lista = cadena.split(delimitador)
            return lista

        except Exception as error:
            print("Se ha producido un error al desserializar:")
            print(error)
            return None


class AndreiBBDD:

    def __init__(self):
        self.instalacion = "/var/andrei-basededatos/"
        self.basededatos = ""
        self.tamanoRegistro = 512


    def creaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert not os.path.exists(ruta), \
                "La base de datos '" + nombre + "' ya existe"

            os.mkdir(ruta)

        except Exception as error:
            print("Se ha producido un error al crear la base de datos:")
            print(error)


    def usaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert os.path.exists(ruta), \
                "La base de datos '" + nombre + "' no existe"

            self.basededatos = nombre

        except Exception as error:
            print("Se ha producido un error al seleccionar la base de datos:")
            print(error)


    def creaTabla(self, nombre, esquema):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + nombre + ".csv"

            assert not os.path.exists(ruta), \
                "La tabla '" + nombre + "' ya existe"

            archivo = open(ruta, 'wb')
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".esquema",
                'w'
            )
            archivo.write("id,activo," + esquema)
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".idx",
                'w'
            )
            archivo.close()

        except Exception as error:
            print("Se ha producido un error al crear la tabla:")
            print(error)


    def obtenerEsquema(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".esquema"

            assert os.path.exists(ruta), \
                "No existe el esquema de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')
            esquema = archivo.read()
            archivo.close()

            serial = AndreiSerializador()
            resultado = serial.desserializar(esquema)

            assert resultado != None, \
                "No se ha podido desserializar el esquema"

            return resultado

        except Exception as error:
            print("Se ha producido un error al obtener el esquema:")
            print(error)
            return None


    def siguienteId(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            ultimo = 0

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")
                    ultimo = int(partes[0])

            archivo.close()

            return ultimo + 1

        except Exception as error:
            print("Se ha producido un error al calcular el siguiente id:")
            print(error)
            return None


    def insertarDatos(self, tabla, datos):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            serial = AndreiSerializador()

            id = self.siguienteId(tabla)

            assert id != None, \
                "No se ha podido obtener el siguiente id"

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro ocupa " + str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo = open(ruta, 'ab')

            posicion = archivo.tell()

            archivo.write(registro)
            archivo.close()

            indice = open(
                self.instalacion + self.basededatos + "/" + tabla + ".idx",
                'a'
            )

            indice.write(str(id) + "," + str(posicion) + "\n")
            indice.close()

            return id

        except Exception as error:
            print("Se ha producido un error al insertar datos:")
            print(error)
            return None


    def buscarPosicion(self, tabla, id):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")

                    if partes[0] == str(id):
                        archivo.close()
                        return int(partes[1])

            archivo.close()

            raise Exception(
                "No se ha encontrado el id "
                + str(id)
                + " en la tabla '"
                + tabla
                + "'"
            )

        except Exception as error:
            print("Se ha producido un error al buscar la posición del registro:")
            print(error)
            return -1


    def leerRegistro(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            archivo.close()

            assert registro != b"", \
                "No se han encontrado datos en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = AndreiSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " está eliminado"

            return elementos

        except Exception as error:
            print("Se ha producido un error al leer el registro:")
            print(error)
            return None


    def seleccionar(self, tabla, id):
        try:
            registro = self.leerRegistro(tabla, id)

            assert registro != None, \
                "No se ha podido recuperar el registro"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(registro) == len(esquema), \
                "El número de campos del registro no coincide con el esquema"

            resultado = {}

            for i in range(len(esquema)):
                resultado[esquema[i]] = registro[i]

            return resultado

        except Exception as error:
            print("Se ha producido un error al seleccionar el registro:")
            print(error)
            return None


    def listarTodo(self, tabla):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = AndreiSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > 1 and elementos[1] == "1":

                            assert len(elementos) == len(esquema), \
                                "Registro corrupto: el número de campos no coincide con el esquema"

                            resultado = {}

                            for i in range(len(esquema)):
                                resultado[esquema[i]] = elementos[i]

                            print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al listar los registros:")
            print(error)


    def buscarColumna(self, tabla, columna, valor):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert columna in esquema, \
                "La columna '" + columna + \
                "' no existe en la tabla '" + tabla + "'"

            posicionColumna = esquema.index(columna)

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = AndreiSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > posicionColumna:

                            if (
                                elementos[1] == "1"
                                and elementos[posicionColumna] == str(valor)
                            ):

                                resultado = {}

                                for i in range(len(esquema)):
                                    resultado[esquema[i]] = elementos[i]

                                print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al buscar por columna:")
            print(error)


    def actualizar(self, tabla, id, datos):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            registroActual = self.leerRegistro(tabla, id)

            assert registroActual != None, \
                "El registro no existe o está eliminado"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(datos) == len(esquema) - 2, \
                "Se esperaban " + str(len(esquema) - 2) + \
                " campos y se han recibido " + str(len(datos))

            serial = AndreiSerializador()

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro actualizado"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro actualizado ocupa " + \
                str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al actualizar el registro:")
            print(error)


    def eliminar(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            assert registro != b"", \
                "No existe ningún registro en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = AndreiSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " ya estaba eliminado"

            elementos[1] = "0"

            cadena = serial.serializar(elementos)

            datosRegistro = cadena.encode("utf-8")

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al eliminar el registro:")
            print(error)

```
**DOCUMENTACION_DESARROLLADORES.md**
```markdown
# AndreiBBDD — Documentación para desarrolladores


## Resumen rápido de operaciones

| Operación | Método | Código Python |
|---|---|---|
| Crear una base de datos | `creaBaseDatos()` | `bbdd.creaBaseDatos("empresa")` |
| Seleccionar una base de datos | `usaBaseDatos()` | `bbdd.usaBaseDatos("empresa")` |
| Crear una tabla | `creaTabla()` | `bbdd.creaTabla("clientes","nombre,apellidos,email")` |
| Obtener el esquema | `obtenerEsquema()` | `esquema = bbdd.obtenerEsquema("clientes")` |
| Obtener el siguiente ID | `siguienteId()` | `id = bbdd.siguienteId("clientes")` |
| Insertar un registro | `insertarDatos()` | `id = bbdd.insertarDatos("clientes",["Jose","Carratala","jose@example.com"])` |
| Buscar la posición física de un ID | `buscarPosicion()` | `posicion = bbdd.buscarPosicion("clientes",1)` |
| Leer un registro | `leerRegistro()` | `registro = bbdd.leerRegistro("clientes",1)` |
| Seleccionar un registro como diccionario | `seleccionar()` | `cliente = bbdd.seleccionar("clientes",1)` |
| Listar todos los registros activos | `listarTodo()` | `bbdd.listarTodo("clientes")` |
| Buscar por una columna | `buscarColumna()` | `bbdd.buscarColumna("clientes","nombre","Jose")` |
| Actualizar un registro | `actualizar()` | `bbdd.actualizar("clientes",1,["Jose","Carratala","nuevo@example.com"])` |
| Eliminar lógicamente un registro | `eliminar()` | `bbdd.eliminar("clientes",1)` |
| Serializar una lista | `serializar()` | `cadena = serial.serializar(["uno","dos","tres"])` |
| Desserializar una cadena | `desserializar()` | `lista = serial.desserializar("uno,dos,tres")` |

### Inicialización mínima

Antes de utilizar las operaciones de base de datos:

```python
from andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()
```

Para utilizar directamente el serializador:

```python
from Andrei_bbdd import AndreiSerializador

serial = AndreiSerializador()
```

---

## 1. Descripción

`AndreiBBDD` es una implementación didáctica de un pequeño motor de almacenamiento persistente basado en archivos.

El sistema utiliza tres archivos por tabla:

```text
tabla.csv       Datos
tabla.esquema   Definición de columnas
tabla.idx       Índice id → posición física
```

Los registros tienen un tamaño fijo de **512 bytes**. Esta decisión permite acceder directamente a un registro y modificarlo sin cargar la tabla completa en memoria.

La biblioteca contiene dos clases:

```text
AndreiSerializador
AndreiBBDD
```

`AndreiSerializador` convierte listas a cadenas delimitadas y realiza la operación inversa.

`AndreiBBDD` administra bases de datos, tablas, registros e índices.

---

## 2. Arquitectura de almacenamiento

Por defecto las bases de datos se almacenan en:

```text
/var/Andrei-basededatos/
```

Cada base de datos es un directorio:

```text
/var/Andrei-basededatos/
└── empresa/
    ├── clientes.csv
    ├── clientes.esquema
    └── clientes.idx
```

La ruta puede cambiarse modificando:

```python
bbdd.instalacion = "/otra/ruta/"
```

Esto resulta especialmente útil para pruebas.

---

## 3. Formato del esquema

Al crear una tabla:

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

el esquema almacenado será:

```text
id,activo,nombre,apellidos,email
```

Los campos `id` y `activo` son añadidos automáticamente por el motor.

### `id`

Identificador numérico del registro.

### `activo`

Indica si el registro está activo:

```text
1 = activo
0 = eliminado
```

El borrado es, por tanto, un **borrado lógico**.

---

## 4. Registros de tamaño fijo

Cada registro ocupa:

```python
tamanoRegistro = 512
```

bytes.

Un registro lógico como:

```text
1,1,Jose Vicente,Carratala,jose@example.com
```

se codifica en UTF-8, se rellena con espacios y termina con un salto de línea hasta completar exactamente 512 bytes.

Conceptualmente:

```text
| registro 1 - 512 bytes |
| registro 2 - 512 bytes |
| registro 3 - 512 bytes |
```

Esto permite usar:

```python
archivo.seek(posicion)
```

para acceder directamente al bloque correspondiente.

La implementación evita cargar el archivo completo durante `leerRegistro`, `actualizar` y `eliminar`.

---

## 5. Índice

El archivo `.idx` relaciona cada identificador con su posición física.

Ejemplo:

```text
1,0
2,512
3,1024
```

Esto significa:

```text
id 1 → byte 0
id 2 → byte 512
id 3 → byte 1024
```

`buscarPosicion()` consulta este archivo para localizar un registro.

Actualmente el índice se recorre secuencialmente, por lo que la búsqueda en el `.idx` es O(n), aunque el acceso posterior al registro de datos es directo.

---

## 6. AndreiSerializador

### serializar(lista, delimitador=",")

Convierte una lista en una cadena.

```python
serial = AndreiSerializador()

cadena = serial.serializar(
  ["Jose","Valencia",48]
)
```

Resultado:

```text
Jose,Valencia,48
```

También admite otro delimitador:

```python
serial.serializar(["uno","dos","tres"],"|")
```

Resultado:

```text
uno|dos|tres
```

### desserializar(cadena, delimitador=",")

Realiza la operación inversa:

```python
serial.desserializar(
  "Jose,Valencia,48"
)
```

Resultado:

```python
["Jose","Valencia","48"]
```

Todos los valores recuperados son cadenas.

---

## 7. AndreiBBDD

### Constructor

```python
bbdd = AndreiBBDD()
```

Valores iniciales principales:

```python
self.instalacion = "/var/Andrei-basededatos/"
self.basededatos = ""
self.tamanoRegistro = 512
```

---

## 8. creaBaseDatos(nombre)

Crea el directorio correspondiente a una base de datos.

```python
bbdd.creaBaseDatos("empresa")
```

Produce:

```text
/var/Andrei-basededatos/empresa/
```

La operación falla si la base de datos ya existe.

---

## 9. usaBaseDatos(nombre)

Selecciona la base de datos activa.

```python
bbdd.usaBaseDatos("empresa")
```

A partir de ese momento las operaciones se ejecutan sobre `empresa`.

---

## 10. creaTabla(nombre, esquema)

Crea los tres archivos necesarios para una tabla.

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

Genera:

```text
clientes.csv
clientes.esquema
clientes.idx
```

El esquema interno incluye automáticamente:

```text
id,activo
```

---

## 11. obtenerEsquema(tabla)

Recupera el esquema como lista.

```python
esquema = bbdd.obtenerEsquema("clientes")
```

Resultado:

```python
[
  "id",
  "activo",
  "nombre",
  "apellidos",
  "email"
]
```

---

## 12. siguienteId(tabla)

Obtiene el próximo identificador disponible leyendo el índice.

```python
id = bbdd.siguienteId("clientes")
```

Si el último registro tiene id `3`, devuelve:

```text
4
```

Los identificadores eliminados no se reutilizan.

---

## 13. insertarDatos(tabla, datos)

Inserta un nuevo registro.

```python
id = bbdd.insertarDatos(
  "clientes",
  [
    "Jose Vicente",
    "Carratala",
    "jose@example.com"
  ]
)
```

Internamente se construye:

```text
id,1,nombre,apellidos,email
```

El método:

1. calcula el siguiente id;
2. serializa los datos;
3. comprueba que caben en 511 bytes de contenido;
4. completa el bloque hasta 512 bytes;
5. añade el bloque al `.csv`;
6. añade `id,posicion` al `.idx`.

Devuelve el nuevo identificador o `None` si se produce un error.

---

## 14. buscarPosicion(tabla, id)

Busca en el índice la posición física de un registro.

```python
posicion = bbdd.buscarPosicion(
  "clientes",
  2
)
```

Puede devolver, por ejemplo:

```text
512
```

Si no encuentra el registro devuelve:

```text
-1
```

---

## 15. leerRegistro(tabla, id)

Lee directamente el bloque de 512 bytes correspondiente al identificador.

```python
registro = bbdd.leerRegistro(
  "clientes",
  1
)
```

Resultado:

```python
[
  "1",
  "1",
  "Jose Vicente",
  "Carratala",
  "jose@example.com"
]
```

Un registro marcado con `activo=0` no se devuelve.

---

## 16. seleccionar(tabla, id)

Convierte un registro en un diccionario utilizando el esquema.

```python
cliente = bbdd.seleccionar(
  "clientes",
  1
)
```

Resultado:

```python
{
  "id":"1",
  "activo":"1",
  "nombre":"Jose Vicente",
  "apellidos":"Carratala",
  "email":"jose@example.com"
}
```

Esta es la forma más cómoda de recuperar un registro individual.

---

## 17. listarTodo(tabla)

Recorre secuencialmente la tabla e imprime todos los registros activos.

```python
bbdd.listarTodo("clientes")
```

Los registros con:

```text
activo = 0
```

son ignorados.

Este método no carga toda la tabla en memoria: procesa un bloque de 512 bytes cada vez.

---

## 18. buscarColumna(tabla, columna, valor)

Busca registros activos cuyo campo coincida exactamente con un valor.

```python
bbdd.buscarColumna(
  "clientes",
  "nombre",
  "Ana"
)
```

La búsqueda es secuencial sobre el archivo de datos.

La columna debe existir en el esquema.

---

## 19. actualizar(tabla, id, datos)

Actualiza un registro existente **en su misma posición física**.

```python
bbdd.actualizar(
  "clientes",
  2,
  [
    "Ana Maria",
    "Garcia Perez",
    "anamaria@example.com"
  ]
)
```

El procedimiento es:

```text
buscar id en índice
        ↓
obtener posición
        ↓
leer registro actual
        ↓
crear nuevo bloque de 512 bytes
        ↓
seek(posición)
        ↓
sobrescribir únicamente ese bloque
```

No se reescribe el archivo completo y el índice no necesita modificarse.

El número de campos recibidos debe coincidir con el esquema excluyendo `id` y `activo`.

---

## 20. eliminar(tabla, id)

Realiza un borrado lógico.

```python
bbdd.eliminar(
  "clientes",
  3
)
```

No elimina físicamente el bloque.

Modifica:

```text
activo = 1
```

a:

```text
activo = 0
```

y vuelve a escribir únicamente los 512 bytes del registro.

Ventajas:

- no desplaza registros;
- no modifica posiciones;
- no obliga a reconstruir el índice;
- el coste de escritura es constante.

---

## 21. Gestión de errores

Los métodos siguen el patrón:

```python
try:
  # operación
except Exception as error:
  print("Se ha producido un error:")
  print(error)
```

También se utilizan `assert` para expresar condiciones que deben cumplirse:

```python
assert os.path.exists(ruta), "La tabla no existe"
```

Los métodos que producen un resultado suelen devolver un valor especial cuando ocurre un error:

```text
None
-1
```

dependiendo del método.

---

## 22. Ejemplo completo

```python
from Andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()

bbdd.creaBaseDatos("empresa")
bbdd.usaBaseDatos("empresa")

bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)

id = bbdd.insertarDatos(
  "clientes",
  [
    "Jose Vicente",
    "Carratala",
    "jose@example.com"
  ]
)

cliente = bbdd.seleccionar(
  "clientes",
  id
)

print(cliente)

bbdd.actualizar(
  "clientes",
  id,
  [
    "Jose Vicente",
    "Carratala Sanchis",
    "nuevo@example.com"
  ]
)

bbdd.eliminar(
  "clientes",
  id
)
```

---

## 23. Pruebas

El archivo:

```text
pruebas_Andrei_bbdd.py
```

crea una instalación temporal y comprueba, entre otras cosas:

- serialización;
- desserialización;
- creación de bases de datos;
- selección de bases de datos;
- creación de tablas;
- esquema;
- generación de ids;
- inserción;
- índice;
- lectura;
- selección;
- listado;
- búsqueda por columna;
- actualización in-place;
- borrado lógico;
- registros demasiado grandes;
- ids inexistentes;
- tablas y bases de datos inexistentes;
- duplicados;
- número incorrecto de campos.

La prueba utiliza un directorio temporal y lo elimina al finalizar, por lo que no debería afectar a `/var/Andrei-basededatos/`.

Ejecución:

```bash
python3 pruebas_Andrei_bbdd.py
```

Si el módulo principal no se llama:

```text
Andrei_bbdd.py
```

hay que modificar el `import` inicial del archivo de pruebas.

---

## 24. Complejidad y comportamiento con bases grandes

### Inserción

Los datos se añaden al final del archivo.

El registro de datos se escribe directamente, aunque `siguienteId()` recorre actualmente el índice para localizar el último id.

### Lectura por id

El índice se recorre hasta encontrar el id y después el acceso al `.csv` es directo mediante `seek()`.

### Actualización

Solo se sobrescribe un bloque de 512 bytes.

### Eliminación

Solo se sobrescribe un bloque de 512 bytes.

### Listado y búsqueda por columna

Requieren recorrer la tabla secuencialmente, pero mantienen únicamente un registro en memoria cada vez.

---

## 25. Limitaciones actuales

El diseño es deliberadamente sencillo y didáctico.

Conviene tener presentes estas limitaciones:

- el serializador no escapa delimitadores incluidos dentro de los valores;
- no existe tipado de columnas;
- no hay bloqueo para escrituras concurrentes;
- no hay transacciones;
- el índice se busca secuencialmente;
- no existe compactación de registros eliminados;
- los registros tienen un máximo fijo de 511 bytes de contenido;
- `listarTodo()` y `buscarColumna()` imprimen los resultados en lugar de devolver una colección;
- los datos recuperados por el serializador son cadenas;
- no existe todavía validación automática del número de campos durante la inserción.

Estas características son buenos puntos de extensión para futuras versiones.

---

## 26. Posibles evoluciones

Sin cambiar la filosofía general del proyecto, una evolución natural sería incorporar:

```text
validación de campos al insertar
índice cargado o indexado eficientemente
compactación/VACUUM
bloqueo de escritura
tipos de datos
índices secundarios
consultas que devuelvan generadores
escape robusto de delimitadores
metadatos de tabla
transacciones simples
```

Una mejora especialmente interesante para tablas grandes sería convertir los métodos de listado y búsqueda en **generadores Python**, manteniendo el procesamiento streaming sin acumular resultados en memoria.

```
**pruebas_andrei_bbdd.py**
```python
import os
import shutil
import tempfile
from contextlib import redirect_stdout
from io import StringIO

# Ajusta este import al nombre real del archivo que contiene las clases.
# Ejemplo: from andrei_bbdd import AndreiSerializador, AndreiBBDD
try:
  from AndreiBBDD import AndreiSerializador, AndreiBBDD
except Exception as error:
  print("Se ha producido un error al importar las clases:")
  print(error)
  print("Edita la línea 'from andrei_bbdd import ...' con el nombre de tu módulo.")
  raise


class PruebasAndreiBBDD:
  def __init__(self):
    self.correctas = 0
    self.incorrectas = 0
    self.directorio = tempfile.mkdtemp(prefix="andrei-bbdd-pruebas-")+"/"

  def comprobar(self,nombre,condicion):
    try:
      assert condicion, "La condición de la prueba no se ha cumplido"
      self.correctas += 1
      print("[OK] "+nombre)
    except Exception as error:
      self.incorrectas += 1
      print("[ERROR] "+nombre)
      print(error)

  def captura(self,funcion,*argumentos):
    salida = StringIO()
    try:
      with redirect_stdout(salida):
        resultado = funcion(*argumentos)
      return resultado,salida.getvalue()
    except Exception as error:
      print("Se ha producido un error al capturar la salida:")
      print(error)
      return None,salida.getvalue()

  def ejecutar(self):
    try:
      print("========================================")
      print(" PRUEBAS EXHAUSTIVAS ANDREI BBDD")
      print("========================================")
      print("Directorio temporal:",self.directorio)

      serial = AndreiSerializador()

      self.comprobar(
        "serializar lista",
        serial.serializar(["Jose","Valencia",48]) == "Jose,Valencia,48"
      )

      self.comprobar(
        "serializar con delimitador personalizado",
        serial.serializar(["uno","dos","tres"],"|") == "uno|dos|tres"
      )

      self.comprobar(
        "desserializar cadena",
        serial.desserializar("Jose,Valencia,48") == ["Jose","Valencia","48"]
      )

      self.comprobar(
        "desserializar con delimitador personalizado",
        serial.desserializar("uno|dos|tres","|") == ["uno","dos","tres"]
      )

      bbdd = AndreiBBDD()
      bbdd.instalacion = self.directorio

      bbdd.creaBaseDatos("empresa")
      self.comprobar(
        "crear base de datos",
        os.path.isdir(self.directorio+"empresa")
      )

      _,salida = self.captura(bbdd.creaBaseDatos,"empresa")
      self.comprobar(
        "impedir crear una base de datos duplicada",
        "ya existe" in salida
      )

      bbdd.usaBaseDatos("empresa")
      self.comprobar(
        "usar base de datos",
        bbdd.basededatos == "empresa"
      )

      bbdd2 = AndreiBBDD()
      bbdd2.instalacion = self.directorio
      _,salida = self.captura(bbdd2.usaBaseDatos,"inexistente")
      self.comprobar(
        "detectar base de datos inexistente",
        "no existe" in salida
      )

      bbdd.creaTabla("clientes","nombre,apellidos,email")
      self.comprobar(
        "crear archivo de datos",
        os.path.isfile(self.directorio+"empresa/clientes.csv")
      )
      self.comprobar(
        "crear archivo de esquema",
        os.path.isfile(self.directorio+"empresa/clientes.esquema")
      )
      self.comprobar(
        "crear archivo de índice",
        os.path.isfile(self.directorio+"empresa/clientes.idx")
      )

      self.comprobar(
        "obtener esquema",
        bbdd.obtenerEsquema("clientes") == ["id","activo","nombre","apellidos","email"]
      )

      self.comprobar(
        "siguiente id en tabla vacía",
        bbdd.siguienteId("clientes") == 1
      )

      id1 = bbdd.insertarDatos(
        "clientes",
        ["Jose Vicente","Carratala","jose@example.com"]
      )
      id2 = bbdd.insertarDatos(
        "clientes",
        ["Ana","Garcia","ana@example.com"]
      )
      id3 = bbdd.insertarDatos(
        "clientes",
        ["Luis","Lopez","luis@example.com"]
      )

      self.comprobar("insertar primer registro",id1 == 1)
      self.comprobar("insertar segundo registro",id2 == 2)
      self.comprobar("insertar tercer registro",id3 == 3)
      self.comprobar("siguiente id tras inserciones",bbdd.siguienteId("clientes") == 4)

      posicion1 = bbdd.buscarPosicion("clientes",id1)
      posicion2 = bbdd.buscarPosicion("clientes",id2)
      posicion3 = bbdd.buscarPosicion("clientes",id3)

      self.comprobar("posición registro 1",posicion1 == 0)
      self.comprobar("posición registro 2",posicion2 == bbdd.tamanoRegistro)
      self.comprobar("posición registro 3",posicion3 == bbdd.tamanoRegistro*2)

      self.comprobar(
        "buscar id inexistente",
        bbdd.buscarPosicion("clientes",999999) == -1
      )

      registro = bbdd.leerRegistro("clientes",id1)
      self.comprobar(
        "leer registro",
        registro == ["1","1","Jose Vicente","Carratala","jose@example.com"]
      )

      cliente = bbdd.seleccionar("clientes",id1)
      self.comprobar(
        "seleccionar devuelve diccionario",
        cliente == {
          "id":"1",
          "activo":"1",
          "nombre":"Jose Vicente",
          "apellidos":"Carratala",
          "email":"jose@example.com"
        }
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar("listarTodo incluye Andrei","Andrei" in salida)
      self.comprobar("listarTodo incluye Ana","Ana" in salida)
      self.comprobar("listarTodo incluye Luis","Luis" in salida)

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Ana")
      self.comprobar(
        "buscar por columna",
        "Ana" in salida and "ana@example.com" in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","columna_inexistente","Ana")
      self.comprobar(
        "detectar columna inexistente",
        "no existe" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_antes = bbdd.buscarPosicion("clientes",id2)

      bbdd.actualizar(
        "clientes",
        id2,
        ["Ana Maria","Garcia Perez","anamaria@example.com"]
      )

      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_despues = bbdd.buscarPosicion("clientes",id2)
      actualizado = bbdd.seleccionar("clientes",id2)

      self.comprobar(
        "actualizar modifica los datos",
        actualizado["nombre"] == "Ana Maria"
        and actualizado["apellidos"] == "Garcia Perez"
        and actualizado["email"] == "anamaria@example.com"
      )
      self.comprobar(
        "actualizar mantiene tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "actualizar mantiene posición física",
        posicion_antes == posicion_despues
      )

      _,salida = self.captura(
        bbdd.actualizar,
        "clientes",
        id2,
        ["solo","dos"]
      )
      self.comprobar(
        "actualización con número incorrecto de campos",
        "Se esperaban" in salida
      )

      datos_grandes = ["A"*600,"Apellido","correo@example.com"]
      resultado,salida = self.captura(bbdd.insertarDatos,"clientes",datos_grandes)
      self.comprobar(
        "impedir insertar registro mayor que el bloque",
        resultado == None and "máximo permitido" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      bbdd.eliminar("clientes",id3)
      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")

      self.comprobar(
        "eliminar es borrado lógico",
        bbdd.leerRegistro(id3 if False else "clientes",id3) == None
      )
      self.comprobar(
        "eliminar no cambia tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "registro eliminado conserva posición en índice",
        bbdd.buscarPosicion("clientes",id3) == posicion3
      )

      _,salida = self.captura(bbdd.eliminar,"clientes",id3)
      self.comprobar(
        "detectar doble eliminación",
        "ya estaba eliminado" in salida
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar(
        "listarTodo oculta eliminados",
        "Luis" not in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Luis")
      self.comprobar(
        "buscarColumna oculta eliminados",
        "{" not in salida
      )

      self.comprobar(
        "seleccionar id inexistente devuelve None",
        bbdd.seleccionar("clientes",999999) == None
      )

      bbdd3 = AndreiBBDD()
      bbdd3.instalacion = self.directorio
      _,salida = self.captura(bbdd3.creaTabla,"sinbbdd","campo")
      self.comprobar(
        "impedir crear tabla sin seleccionar BBDD",
        "No se ha seleccionado" in salida
      )

      _,salida = self.captura(bbdd.creaTabla,"clientes","campo")
      self.comprobar(
        "impedir tabla duplicada",
        "ya existe" in salida
      )

      self.comprobar(
        "esquema inexistente devuelve None",
        bbdd.obtenerEsquema("tabla_inexistente") == None
      )

      print("")
      print("========================================")
      print(" RESULTADO")
      print("========================================")
      print("Pruebas correctas:",self.correctas)
      print("Pruebas incorrectas:",self.incorrectas)
      print("Total:",self.correctas+self.incorrectas)

      if self.incorrectas == 0:
        print("RESULTADO FINAL: TODAS LAS PRUEBAS HAN PASADO")
      else:
        print("RESULTADO FINAL: HAY PRUEBAS QUE REVISAR")

    except Exception as error:
      print("Se ha producido un error general durante las pruebas:")
      print(error)
    finally:
      try:
        shutil.rmtree(self.directorio)
        print("Directorio temporal eliminado correctamente")
      except Exception as error:
        print("Se ha producido un error al limpiar las pruebas:")
        print(error)


if __name__ == "__main__":
  pruebas = PruebasAndreiBBDD()
  pruebas.ejecutar()

```
#### 002-con configuracion
**AndreiBBDD.py**
```python
import os
import json


class AndreiSerializador():

    def serializar(self, lista, delimitador=","):
        try:
            cadena = ""
            for elemento in lista:
                cadena += str(elemento) + delimitador
            cadena = cadena[:-1]
            return cadena

        except Exception as error:
            print("Se ha producido un error al serializar:")
            print(error)
            return None


    def desserializar(self, cadena, delimitador=","):
        try:
            lista = cadena.split(delimitador)
            return lista

        except Exception as error:
            print("Se ha producido un error al desserializar:")
            print(error)
            return None


class AndreiBBDD:

    def __init__(self):
        try:
            rutaConfiguracion = os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                "config.json"
            )

            assert os.path.exists(rutaConfiguracion), \
                "No se ha encontrado el archivo de configuración: " + rutaConfiguracion

            archivo = open(rutaConfiguracion, "r", encoding="utf-8")
            configuracion = json.load(archivo)
            archivo.close()

            assert "instalacion" in configuracion, \
                "Falta la propiedad 'instalacion' en config.json"

            assert "tamanoRegistro" in configuracion, \
                "Falta la propiedad 'tamanoRegistro' en config.json"

            self.instalacion = configuracion["instalacion"]

            if not self.instalacion.endswith("/"):
                self.instalacion += "/"

            self.tamanoRegistro = int(configuracion["tamanoRegistro"])
            self.basededatos = ""

        except Exception as error:
            print("Se ha producido un error al cargar la configuración:")
            print(error)
            raise


    def creaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert not os.path.exists(ruta), \
                "La base de datos '" + nombre + "' ya existe"

            os.mkdir(ruta)

        except Exception as error:
            print("Se ha producido un error al crear la base de datos:")
            print(error)


    def usaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert os.path.exists(ruta), \
                "La base de datos '" + nombre + "' no existe"

            self.basededatos = nombre

        except Exception as error:
            print("Se ha producido un error al seleccionar la base de datos:")
            print(error)


    def creaTabla(self, nombre, esquema):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + nombre + ".csv"

            assert not os.path.exists(ruta), \
                "La tabla '" + nombre + "' ya existe"

            archivo = open(ruta, 'wb')
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".esquema",
                'w'
            )
            archivo.write("id,activo," + esquema)
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".idx",
                'w'
            )
            archivo.close()

        except Exception as error:
            print("Se ha producido un error al crear la tabla:")
            print(error)


    def obtenerEsquema(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".esquema"

            assert os.path.exists(ruta), \
                "No existe el esquema de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')
            esquema = archivo.read()
            archivo.close()

            serial = AndreiSerializador()
            resultado = serial.desserializar(esquema)

            assert resultado != None, \
                "No se ha podido desserializar el esquema"

            return resultado

        except Exception as error:
            print("Se ha producido un error al obtener el esquema:")
            print(error)
            return None


    def siguienteId(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            ultimo = 0

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")
                    ultimo = int(partes[0])

            archivo.close()

            return ultimo + 1

        except Exception as error:
            print("Se ha producido un error al calcular el siguiente id:")
            print(error)
            return None


    def insertarDatos(self, tabla, datos):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            serial = AndreiSerializador()

            id = self.siguienteId(tabla)

            assert id != None, \
                "No se ha podido obtener el siguiente id"

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro ocupa " + str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo = open(ruta, 'ab')

            posicion = archivo.tell()

            archivo.write(registro)
            archivo.close()

            indice = open(
                self.instalacion + self.basededatos + "/" + tabla + ".idx",
                'a'
            )

            indice.write(str(id) + "," + str(posicion) + "\n")
            indice.close()

            return id

        except Exception as error:
            print("Se ha producido un error al insertar datos:")
            print(error)
            return None


    def buscarPosicion(self, tabla, id):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")

                    if partes[0] == str(id):
                        archivo.close()
                        return int(partes[1])

            archivo.close()

            raise Exception(
                "No se ha encontrado el id "
                + str(id)
                + " en la tabla '"
                + tabla
                + "'"
            )

        except Exception as error:
            print("Se ha producido un error al buscar la posición del registro:")
            print(error)
            return -1


    def leerRegistro(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            archivo.close()

            assert registro != b"", \
                "No se han encontrado datos en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = AndreiSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " está eliminado"

            return elementos

        except Exception as error:
            print("Se ha producido un error al leer el registro:")
            print(error)
            return None


    def seleccionar(self, tabla, id):
        try:
            registro = self.leerRegistro(tabla, id)

            assert registro != None, \
                "No se ha podido recuperar el registro"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(registro) == len(esquema), \
                "El número de campos del registro no coincide con el esquema"

            resultado = {}

            for i in range(len(esquema)):
                resultado[esquema[i]] = registro[i]

            return resultado

        except Exception as error:
            print("Se ha producido un error al seleccionar el registro:")
            print(error)
            return None


    def listarTodo(self, tabla):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = AndreiSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > 1 and elementos[1] == "1":

                            assert len(elementos) == len(esquema), \
                                "Registro corrupto: el número de campos no coincide con el esquema"

                            resultado = {}

                            for i in range(len(esquema)):
                                resultado[esquema[i]] = elementos[i]

                            print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al listar los registros:")
            print(error)


    def buscarColumna(self, tabla, columna, valor):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert columna in esquema, \
                "La columna '" + columna + \
                "' no existe en la tabla '" + tabla + "'"

            posicionColumna = esquema.index(columna)

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = AndreiSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > posicionColumna:

                            if (
                                elementos[1] == "1"
                                and elementos[posicionColumna] == str(valor)
                            ):

                                resultado = {}

                                for i in range(len(esquema)):
                                    resultado[esquema[i]] = elementos[i]

                                print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al buscar por columna:")
            print(error)


    def actualizar(self, tabla, id, datos):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            registroActual = self.leerRegistro(tabla, id)

            assert registroActual != None, \
                "El registro no existe o está eliminado"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(datos) == len(esquema) - 2, \
                "Se esperaban " + str(len(esquema) - 2) + \
                " campos y se han recibido " + str(len(datos))

            serial = AndreiSerializador()

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro actualizado"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro actualizado ocupa " + \
                str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al actualizar el registro:")
            print(error)


    def eliminar(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            assert registro != b"", \
                "No existe ningún registro en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = AndreiSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " ya estaba eliminado"

            elementos[1] = "0"

            cadena = serial.serializar(elementos)

            datosRegistro = cadena.encode("utf-8")

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al eliminar el registro:")
            print(error)

```
**DOCUMENTACION_DESARROLLADORES.md**
```markdown
# AndreiBBDD — Documentación para desarrolladores


## Resumen rápido de operaciones

| Operación | Método | Código Python |
|---|---|---|
| Crear una base de datos | `creaBaseDatos()` | `bbdd.creaBaseDatos("empresa")` |
| Seleccionar una base de datos | `usaBaseDatos()` | `bbdd.usaBaseDatos("empresa")` |
| Crear una tabla | `creaTabla()` | `bbdd.creaTabla("clientes","nombre,apellidos,email")` |
| Obtener el esquema | `obtenerEsquema()` | `esquema = bbdd.obtenerEsquema("clientes")` |
| Obtener el siguiente ID | `siguienteId()` | `id = bbdd.siguienteId("clientes")` |
| Insertar un registro | `insertarDatos()` | `id = bbdd.insertarDatos("clientes",["Jose","Carratala","jose@example.com"])` |
| Buscar la posición física de un ID | `buscarPosicion()` | `posicion = bbdd.buscarPosicion("clientes",1)` |
| Leer un registro | `leerRegistro()` | `registro = bbdd.leerRegistro("clientes",1)` |
| Seleccionar un registro como diccionario | `seleccionar()` | `cliente = bbdd.seleccionar("clientes",1)` |
| Listar todos los registros activos | `listarTodo()` | `bbdd.listarTodo("clientes")` |
| Buscar por una columna | `buscarColumna()` | `bbdd.buscarColumna("clientes","nombre","Jose")` |
| Actualizar un registro | `actualizar()` | `bbdd.actualizar("clientes",1,["Jose","Carratala","nuevo@example.com"])` |
| Eliminar lógicamente un registro | `eliminar()` | `bbdd.eliminar("clientes",1)` |
| Serializar una lista | `serializar()` | `cadena = serial.serializar(["uno","dos","tres"])` |
| Desserializar una cadena | `desserializar()` | `lista = serial.desserializar("uno,dos,tres")` |

### Inicialización mínima

Antes de utilizar las operaciones de base de datos:

```python
from Andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()
```

Para utilizar directamente el serializador:

```python
from Andrei_bbdd import AndreiSerializador

serial = AndreiSerializador()
```

---

## 1. Descripción

`AndreiBBDD` es una implementación didáctica de un pequeño motor de almacenamiento persistente basado en archivos.

El sistema utiliza tres archivos por tabla:

```text
tabla.csv       Datos
tabla.esquema   Definición de columnas
tabla.idx       Índice id → posición física
```

Los registros tienen un tamaño fijo de **512 bytes**. Esta decisión permite acceder directamente a un registro y modificarlo sin cargar la tabla completa en memoria.

La biblioteca contiene dos clases:

```text
AndreiSerializador
AndreiBBDD
```

`AndreiSerializador` convierte listas a cadenas delimitadas y realiza la operación inversa.

`AndreiBBDD` administra bases de datos, tablas, registros e índices.

---

## 2. Configuración externa

La biblioteca utiliza un archivo `config.json` para mantener separados los parámetros de configuración y el código fuente.

Estructura esperada:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

| Propiedad | Tipo | Descripción |
|---|---|---|
| `instalacion` | cadena | Directorio raíz en el que se crean las bases de datos. |
| `tamanoRegistro` | entero | Tamaño fijo, en bytes, reservado para cada registro. |

La configuración se carga una sola vez durante la construcción de `AndreiBBDD`.

```python
bbdd = AndreiBBDD()
```

No es necesario abrir ni leer manualmente `config.json` desde el programa que utiliza la biblioteca.

### Ubicación de `config.json`

La distribución recomendada es:

```text
proyecto/
├── AndreiBBDD.py
├── config.json
└── programa.py
```

La biblioteca busca `config.json` junto al propio archivo `AndreiBBDD.py`, no junto al programa que importa la librería.

---

## 3. Arquitectura de almacenamiento

La configuración de la biblioteca está separada del código y se encuentra en el archivo:

```text
config.json
```

Configuración por defecto:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

La propiedad `instalacion` indica el directorio raíz donde se almacenan las bases de datos. La propiedad `tamanoRegistro` determina el tamaño fijo, en bytes, de cada registro.

El archivo `config.json` debe estar en el mismo directorio que `AndreiBBDD.py`. La biblioteca localiza la configuración mediante `__file__`, por lo que no depende del directorio desde el que se ejecute el programa.

Cada base de datos es un directorio:

```text
/var/Andrei-basededatos/
└── empresa/
    ├── clientes.csv
    ├── clientes.esquema
    └── clientes.idx
```

Para cambiar la ruta de almacenamiento de forma permanente, se modifica `config.json`:

```json
{
  "instalacion": "/otra/ruta/",
  "tamanoRegistro": 512
}
```

De esta forma, la configuración queda separada de la implementación de la biblioteca.

Para pruebas automatizadas sigue siendo posible sobrescribir temporalmente el atributo después de crear el objeto:

```python
bbdd = AndreiBBDD()
bbdd.instalacion = "/tmp/pruebas/"
```

Esta modificación solo afecta a esa instancia y no altera `config.json`.

---

## 3. Formato del esquema

Al crear una tabla:

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

el esquema almacenado será:

```text
id,activo,nombre,apellidos,email
```

Los campos `id` y `activo` son añadidos automáticamente por el motor.

### `id`

Identificador numérico del registro.

### `activo`

Indica si el registro está activo:

```text
1 = activo
0 = eliminado
```

El borrado es, por tanto, un **borrado lógico**.

---

## 4. Registros de tamaño fijo

Cada registro ocupa:

```python
tamanoRegistro = 512
```

bytes.

Un registro lógico como:

```text
1,1,Jose Vicente,Carratala,jose@example.com
```

se codifica en UTF-8, se rellena con espacios y termina con un salto de línea hasta completar exactamente 512 bytes.

Conceptualmente:

```text
| registro 1 - 512 bytes |
| registro 2 - 512 bytes |
| registro 3 - 512 bytes |
```

Esto permite usar:

```python
archivo.seek(posicion)
```

para acceder directamente al bloque correspondiente.

La implementación evita cargar el archivo completo durante `leerRegistro`, `actualizar` y `eliminar`.

---

## 5. Índice

El archivo `.idx` relaciona cada identificador con su posición física.

Ejemplo:

```text
1,0
2,512
3,1024
```

Esto significa:

```text
id 1 → byte 0
id 2 → byte 512
id 3 → byte 1024
```

`buscarPosicion()` consulta este archivo para localizar un registro.

Actualmente el índice se recorre secuencialmente, por lo que la búsqueda en el `.idx` es O(n), aunque el acceso posterior al registro de datos es directo.

---

## 6. AndreiSerializador

### serializar(lista, delimitador=",")

Convierte una lista en una cadena.

```python
serial = AndreiSerializador()

cadena = serial.serializar(
  ["Jose","Valencia",48]
)
```

Resultado:

```text
Jose,Valencia,48
```

También admite otro delimitador:

```python
serial.serializar(["uno","dos","tres"],"|")
```

Resultado:

```text
uno|dos|tres
```

### desserializar(cadena, delimitador=",")

Realiza la operación inversa:

```python
serial.desserializar(
  "Jose,Valencia,48"
)
```

Resultado:

```python
["Jose","Valencia","48"]
```

Todos los valores recuperados son cadenas.

---

## 7. AndreiBBDD

### Constructor

```python
bbdd = AndreiBBDD()
```

Al construir el objeto, `AndreiBBDD` carga automáticamente `config.json`.

Conceptualmente:

```python
bbdd = AndreiBBDD()
```

produce una instancia cuyos valores configurables proceden de:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

`self.basededatos` continúa siendo estado interno de ejecución y se inicializa como una cadena vacía hasta llamar a `usaBaseDatos()`.

Si `config.json` no existe, contiene JSON inválido o no incluye las propiedades obligatorias, el constructor muestra un mensaje de depuración claro y lanza la excepción para impedir que la biblioteca continúe con una configuración incompleta.

---

## 8. creaBaseDatos(nombre)

Crea el directorio correspondiente a una base de datos.

```python
bbdd.creaBaseDatos("empresa")
```

Produce:

```text
/var/Andrei-basededatos/empresa/
```

La operación falla si la base de datos ya existe.

---

## 9. usaBaseDatos(nombre)

Selecciona la base de datos activa.

```python
bbdd.usaBaseDatos("empresa")
```

A partir de ese momento las operaciones se ejecutan sobre `empresa`.

---

## 10. creaTabla(nombre, esquema)

Crea los tres archivos necesarios para una tabla.

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

Genera:

```text
clientes.csv
clientes.esquema
clientes.idx
```

El esquema interno incluye automáticamente:

```text
id,activo
```

---

## 11. obtenerEsquema(tabla)

Recupera el esquema como lista.

```python
esquema = bbdd.obtenerEsquema("clientes")
```

Resultado:

```python
[
  "id",
  "activo",
  "nombre",
  "apellidos",
  "email"
]
```

---

## 12. siguienteId(tabla)

Obtiene el próximo identificador disponible leyendo el índice.

```python
id = bbdd.siguienteId("clientes")
```

Si el último registro tiene id `3`, devuelve:

```text
4
```

Los identificadores eliminados no se reutilizan.

---

## 13. insertarDatos(tabla, datos)

Inserta un nuevo registro.

```python
id = bbdd.insertarDatos(
  "clientes",
  [
    "Jose Vicente",
    "Carratala",
    "jose@example.com"
  ]
)
```

Internamente se construye:

```text
id,1,nombre,apellidos,email
```

El método:

1. calcula el siguiente id;
2. serializa los datos;
3. comprueba que caben en 511 bytes de contenido;
4. completa el bloque hasta 512 bytes;
5. añade el bloque al `.csv`;
6. añade `id,posicion` al `.idx`.

Devuelve el nuevo identificador o `None` si se produce un error.

---

## 14. buscarPosicion(tabla, id)

Busca en el índice la posición física de un registro.

```python
posicion = bbdd.buscarPosicion(
  "clientes",
  2
)
```

Puede devolver, por ejemplo:

```text
512
```

Si no encuentra el registro devuelve:

```text
-1
```

---

## 15. leerRegistro(tabla, id)

Lee directamente el bloque de 512 bytes correspondiente al identificador.

```python
registro = bbdd.leerRegistro(
  "clientes",
  1
)
```

Resultado:

```python
[
  "1",
  "1",
  "Jose Vicente",
  "Carratala",
  "jose@example.com"
]
```

Un registro marcado con `activo=0` no se devuelve.

---

## 16. seleccionar(tabla, id)

Convierte un registro en un diccionario utilizando el esquema.

```python
cliente = bbdd.seleccionar(
  "clientes",
  1
)
```

Resultado:

```python
{
  "id":"1",
  "activo":"1",
  "nombre":"Jose Vicente",
  "apellidos":"Carratala",
  "email":"jose@example.com"
}
```

Esta es la forma más cómoda de recuperar un registro individual.

---

## 17. listarTodo(tabla)

Recorre secuencialmente la tabla e imprime todos los registros activos.

```python
bbdd.listarTodo("clientes")
```

Los registros con:

```text
activo = 0
```

son ignorados.

Este método no carga toda la tabla en memoria: procesa un bloque de 512 bytes cada vez.

---

## 18. buscarColumna(tabla, columna, valor)

Busca registros activos cuyo campo coincida exactamente con un valor.

```python
bbdd.buscarColumna(
  "clientes",
  "nombre",
  "Ana"
)
```

La búsqueda es secuencial sobre el archivo de datos.

La columna debe existir en el esquema.

---

## 19. actualizar(tabla, id, datos)

Actualiza un registro existente **en su misma posición física**.

```python
bbdd.actualizar(
  "clientes",
  2,
  [
    "Ana Maria",
    "Garcia Perez",
    "anamaria@example.com"
  ]
)
```

El procedimiento es:

```text
buscar id en índice
        ↓
obtener posición
        ↓
leer registro actual
        ↓
crear nuevo bloque de 512 bytes
        ↓
seek(posición)
        ↓
sobrescribir únicamente ese bloque
```

No se reescribe el archivo completo y el índice no necesita modificarse.

El número de campos recibidos debe coincidir con el esquema excluyendo `id` y `activo`.

---

## 20. eliminar(tabla, id)

Realiza un borrado lógico.

```python
bbdd.eliminar(
  "clientes",
  3
)
```

No elimina físicamente el bloque.

Modifica:

```text
activo = 1
```

a:

```text
activo = 0
```

y vuelve a escribir únicamente los 512 bytes del registro.

Ventajas:

- no desplaza registros;
- no modifica posiciones;
- no obliga a reconstruir el índice;
- el coste de escritura es constante.

---

## 21. Gestión de errores

Los métodos siguen el patrón:

```python
try:
  # operación
except Exception as error:
  print("Se ha producido un error:")
  print(error)
```

También se utilizan `assert` para expresar condiciones que deben cumplirse:

```python
assert os.path.exists(ruta), "La tabla no existe"
```

Los métodos que producen un resultado suelen devolver un valor especial cuando ocurre un error:

```text
None
-1
```

dependiendo del método.

---

## 22. Ejemplo completo

```python
from Andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()

bbdd.creaBaseDatos("empresa")
bbdd.usaBaseDatos("empresa")

bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)

id = bbdd.insertarDatos(
  "clientes",
  [
    "Jose Vicente",
    "Carratala",
    "jose@example.com"
  ]
)

cliente = bbdd.seleccionar(
  "clientes",
  id
)

print(cliente)

bbdd.actualizar(
  "clientes",
  id,
  [
    "Jose Vicente",
    "Carratala Sanchis",
    "nuevo@example.com"
  ]
)

bbdd.eliminar(
  "clientes",
  id
)
```

---

## 23. Pruebas

El archivo:

```text
pruebas_Andrei_bbdd.py
```

crea una instalación temporal y comprueba, entre otras cosas:

- serialización;
- desserialización;
- creación de bases de datos;
- selección de bases de datos;
- creación de tablas;
- esquema;
- generación de ids;
- inserción;
- índice;
- lectura;
- selección;
- listado;
- búsqueda por columna;
- actualización in-place;
- borrado lógico;
- registros demasiado grandes;
- ids inexistentes;
- tablas y bases de datos inexistentes;
- duplicados;
- número incorrecto de campos.

La prueba utiliza un directorio temporal y lo elimina al finalizar, por lo que no debería afectar a `/var/Andrei-basededatos/`.

Ejecución:

```bash
python3 pruebas_Andrei_bbdd.py
```

Si el módulo principal no se llama:

```text
Andrei_bbdd.py
```

hay que modificar el `import` inicial del archivo de pruebas.

---

## 24. Complejidad y comportamiento con bases grandes

### Inserción

Los datos se añaden al final del archivo.

El registro de datos se escribe directamente, aunque `siguienteId()` recorre actualmente el índice para localizar el último id.

### Lectura por id

El índice se recorre hasta encontrar el id y después el acceso al `.csv` es directo mediante `seek()`.

### Actualización

Solo se sobrescribe un bloque de 512 bytes.

### Eliminación

Solo se sobrescribe un bloque de 512 bytes.

### Listado y búsqueda por columna

Requieren recorrer la tabla secuencialmente, pero mantienen únicamente un registro en memoria cada vez.

---

## 25. Limitaciones actuales

El diseño es deliberadamente sencillo y didáctico.

Conviene tener presentes estas limitaciones:

- el serializador no escapa delimitadores incluidos dentro de los valores;
- no existe tipado de columnas;
- no hay bloqueo para escrituras concurrentes;
- no hay transacciones;
- el índice se busca secuencialmente;
- no existe compactación de registros eliminados;
- los registros tienen un máximo fijo de 511 bytes de contenido;
- `listarTodo()` y `buscarColumna()` imprimen los resultados en lugar de devolver una colección;
- los datos recuperados por el serializador son cadenas;
- no existe todavía validación automática del número de campos durante la inserción.

Estas características son buenos puntos de extensión para futuras versiones.

---

## 26. Posibles evoluciones

Sin cambiar la filosofía general del proyecto, una evolución natural sería incorporar:

```text
validación de campos al insertar
índice cargado o indexado eficientemente
compactación/VACUUM
bloqueo de escritura
tipos de datos
índices secundarios
consultas que devuelvan generadores
escape robusto de delimitadores
metadatos de tabla
transacciones simples
```

Una mejora especialmente interesante para tablas grandes sería convertir los métodos de listado y búsqueda en **generadores Python**, manteniendo el procesamiento streaming sin acumular resultados en memoria.

```
**config.json**
```json
{
  "instalacion": "/htdocs/andrei-basededatos/",
  "tamanoRegistro": 512
}

```
**pruebas_andrei_bbdd.py**
```python
import os
import shutil
import tempfile
from contextlib import redirect_stdout
from io import StringIO

# Ajusta este import al nombre real del archivo que contiene las clases.
# Ejemplo: from andrei_bbdd import AndreiSerializador, AndreiBBDD
try:
  from AndreiBBDD import AndreiSerializador, AndreiBBDD
except Exception as error:
  print("Se ha producido un error al importar las clases:")
  print(error)
  print("Edita la línea 'from Andrei_bbdd import ...' con el nombre de tu módulo.")
  raise


class PruebasAndreiBBDD:
  def __init__(self):
    self.correctas = 0
    self.incorrectas = 0
    self.directorio = tempfile.mkdtemp(prefix="andrei-bbdd-pruebas-")+"/"

  def comprobar(self,nombre,condicion):
    try:
      assert condicion, "La condición de la prueba no se ha cumplido"
      self.correctas += 1
      print("[OK] "+nombre)
    except Exception as error:
      self.incorrectas += 1
      print("[ERROR] "+nombre)
      print(error)

  def captura(self,funcion,*argumentos):
    salida = StringIO()
    try:
      with redirect_stdout(salida):
        resultado = funcion(*argumentos)
      return resultado,salida.getvalue()
    except Exception as error:
      print("Se ha producido un error al capturar la salida:")
      print(error)
      return None,salida.getvalue()

  def ejecutar(self):
    try:
      print("========================================")
      print(" PRUEBAS EXHAUSTIVAS Andrei BBDD")
      print("========================================")
      print("Directorio temporal:",self.directorio)

      serial = AndreiSerializador()

      self.comprobar(
        "serializar lista",
        serial.serializar(["Jose","Valencia",48]) == "Jose,Valencia,48"
      )

      self.comprobar(
        "serializar con delimitador personalizado",
        serial.serializar(["uno","dos","tres"],"|") == "uno|dos|tres"
      )

      self.comprobar(
        "desserializar cadena",
        serial.desserializar("Jose,Valencia,48") == ["Jose","Valencia","48"]
      )

      self.comprobar(
        "desserializar con delimitador personalizado",
        serial.desserializar("uno|dos|tres","|") == ["uno","dos","tres"]
      )

      bbdd = AndreiBBDD()
      bbdd.instalacion = self.directorio

      bbdd.creaBaseDatos("empresa")
      self.comprobar(
        "crear base de datos",
        os.path.isdir(self.directorio+"empresa")
      )

      _,salida = self.captura(bbdd.creaBaseDatos,"empresa")
      self.comprobar(
        "impedir crear una base de datos duplicada",
        "ya existe" in salida
      )

      bbdd.usaBaseDatos("empresa")
      self.comprobar(
        "usar base de datos",
        bbdd.basededatos == "empresa"
      )

      bbdd2 = AndreiBBDD()
      bbdd2.instalacion = self.directorio
      _,salida = self.captura(bbdd2.usaBaseDatos,"inexistente")
      self.comprobar(
        "detectar base de datos inexistente",
        "no existe" in salida
      )

      bbdd.creaTabla("clientes","nombre,apellidos,email")
      self.comprobar(
        "crear archivo de datos",
        os.path.isfile(self.directorio+"empresa/clientes.csv")
      )
      self.comprobar(
        "crear archivo de esquema",
        os.path.isfile(self.directorio+"empresa/clientes.esquema")
      )
      self.comprobar(
        "crear archivo de índice",
        os.path.isfile(self.directorio+"empresa/clientes.idx")
      )

      self.comprobar(
        "obtener esquema",
        bbdd.obtenerEsquema("clientes") == ["id","activo","nombre","apellidos","email"]
      )

      self.comprobar(
        "siguiente id en tabla vacía",
        bbdd.siguienteId("clientes") == 1
      )

      id1 = bbdd.insertarDatos(
        "clientes",
        ["Jose Vicente","Carratala","jose@example.com"]
      )
      id2 = bbdd.insertarDatos(
        "clientes",
        ["Ana","Garcia","ana@example.com"]
      )
      id3 = bbdd.insertarDatos(
        "clientes",
        ["Luis","Lopez","luis@example.com"]
      )

      self.comprobar("insertar primer registro",id1 == 1)
      self.comprobar("insertar segundo registro",id2 == 2)
      self.comprobar("insertar tercer registro",id3 == 3)
      self.comprobar("siguiente id tras inserciones",bbdd.siguienteId("clientes") == 4)

      posicion1 = bbdd.buscarPosicion("clientes",id1)
      posicion2 = bbdd.buscarPosicion("clientes",id2)
      posicion3 = bbdd.buscarPosicion("clientes",id3)

      self.comprobar("posición registro 1",posicion1 == 0)
      self.comprobar("posición registro 2",posicion2 == bbdd.tamanoRegistro)
      self.comprobar("posición registro 3",posicion3 == bbdd.tamanoRegistro*2)

      self.comprobar(
        "buscar id inexistente",
        bbdd.buscarPosicion("clientes",999999) == -1
      )

      registro = bbdd.leerRegistro("clientes",id1)
      self.comprobar(
        "leer registro",
        registro == ["1","1","Jose Vicente","Carratala","jose@example.com"]
      )

      cliente = bbdd.seleccionar("clientes",id1)
      self.comprobar(
        "seleccionar devuelve diccionario",
        cliente == {
          "id":"1",
          "activo":"1",
          "nombre":"Jose Vicente",
          "apellidos":"Carratala",
          "email":"jose@example.com"
        }
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar("listarTodo incluye Jose","Jose Vicente" in salida)
      self.comprobar("listarTodo incluye Ana","Ana" in salida)
      self.comprobar("listarTodo incluye Luis","Luis" in salida)

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Ana")
      self.comprobar(
        "buscar por columna",
        "Ana" in salida and "ana@example.com" in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","columna_inexistente","Ana")
      self.comprobar(
        "detectar columna inexistente",
        "no existe" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_antes = bbdd.buscarPosicion("clientes",id2)

      bbdd.actualizar(
        "clientes",
        id2,
        ["Ana Maria","Garcia Perez","anamaria@example.com"]
      )

      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_despues = bbdd.buscarPosicion("clientes",id2)
      actualizado = bbdd.seleccionar("clientes",id2)

      self.comprobar(
        "actualizar modifica los datos",
        actualizado["nombre"] == "Ana Maria"
        and actualizado["apellidos"] == "Garcia Perez"
        and actualizado["email"] == "anamaria@example.com"
      )
      self.comprobar(
        "actualizar mantiene tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "actualizar mantiene posición física",
        posicion_antes == posicion_despues
      )

      _,salida = self.captura(
        bbdd.actualizar,
        "clientes",
        id2,
        ["solo","dos"]
      )
      self.comprobar(
        "actualización con número incorrecto de campos",
        "Se esperaban" in salida
      )

      datos_grandes = ["A"*600,"Apellido","correo@example.com"]
      resultado,salida = self.captura(bbdd.insertarDatos,"clientes",datos_grandes)
      self.comprobar(
        "impedir insertar registro mayor que el bloque",
        resultado == None and "máximo permitido" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      bbdd.eliminar("clientes",id3)
      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")

      self.comprobar(
        "eliminar es borrado lógico",
        bbdd.leerRegistro(id3 if False else "clientes",id3) == None
      )
      self.comprobar(
        "eliminar no cambia tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "registro eliminado conserva posición en índice",
        bbdd.buscarPosicion("clientes",id3) == posicion3
      )

      _,salida = self.captura(bbdd.eliminar,"clientes",id3)
      self.comprobar(
        "detectar doble eliminación",
        "ya estaba eliminado" in salida
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar(
        "listarTodo oculta eliminados",
        "Luis" not in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Luis")
      self.comprobar(
        "buscarColumna oculta eliminados",
        "{" not in salida
      )

      self.comprobar(
        "seleccionar id inexistente devuelve None",
        bbdd.seleccionar("clientes",999999) == None
      )

      bbdd3 = AndreiBBDD()
      bbdd3.instalacion = self.directorio
      _,salida = self.captura(bbdd3.creaTabla,"sinbbdd","campo")
      self.comprobar(
        "impedir crear tabla sin seleccionar BBDD",
        "No se ha seleccionado" in salida
      )

      _,salida = self.captura(bbdd.creaTabla,"clientes","campo")
      self.comprobar(
        "impedir tabla duplicada",
        "ya existe" in salida
      )

      self.comprobar(
        "esquema inexistente devuelve None",
        bbdd.obtenerEsquema("tabla_inexistente") == None
      )

      print("")
      print("========================================")
      print(" RESULTADO")
      print("========================================")
      print("Pruebas correctas:",self.correctas)
      print("Pruebas incorrectas:",self.incorrectas)
      print("Total:",self.correctas+self.incorrectas)

      if self.incorrectas == 0:
        print("RESULTADO FINAL: TODAS LAS PRUEBAS HAN PASADO")
      else:
        print("RESULTADO FINAL: HAY PRUEBAS QUE REVISAR")

    except Exception as error:
      print("Se ha producido un error general durante las pruebas:")
      print(error)
    finally:
      try:
        shutil.rmtree(self.directorio)
        print("Directorio temporal eliminado correctamente")
      except Exception as error:
        print("Se ha producido un error al limpiar las pruebas:")
        print(error)


if __name__ == "__main__":
  pruebas = PruebasAndreiBBDD()
  pruebas.ejecutar()

```
##### .DOCUMENTACION_DESARROLLADORES.md.history
###### 20260917130939298
**DOCUMENTACION_DESARROLLADORES.md**
```markdown
# AndreiBBDD — Documentación para desarrolladores


## Resumen rápido de operaciones

| Operación | Método | Código Python |
|---|---|---|
| Crear una base de datos | `creaBaseDatos()` | `bbdd.creaBaseDatos("empresa")` |
| Seleccionar una base de datos | `usaBaseDatos()` | `bbdd.usaBaseDatos("empresa")` |
| Crear una tabla | `creaTabla()` | `bbdd.creaTabla("clientes","nombre,apellidos,email")` |
| Obtener el esquema | `obtenerEsquema()` | `esquema = bbdd.obtenerEsquema("clientes")` |
| Obtener el siguiente ID | `siguienteId()` | `id = bbdd.siguienteId("clientes")` |
| Insertar un registro | `insertarDatos()` | `id = bbdd.insertarDatos("clientes",["Andrei","Carratala","Andrei@example.com"])` |
| Buscar la posición física de un ID | `buscarPosicion()` | `posicion = bbdd.buscarPosicion("clientes",1)` |
| Leer un registro | `leerRegistro()` | `registro = bbdd.leerRegistro("clientes",1)` |
| Seleccionar un registro como diccionario | `seleccionar()` | `cliente = bbdd.seleccionar("clientes",1)` |
| Listar todos los registros activos | `listarTodo()` | `bbdd.listarTodo("clientes")` |
| Buscar por una columna | `buscarColumna()` | `bbdd.buscarColumna("clientes","nombre","Andrei")` |
| Actualizar un registro | `actualizar()` | `bbdd.actualizar("clientes",1,["Andrei","Carratala","nuevo@example.com"])` |
| Eliminar lógicamente un registro | `eliminar()` | `bbdd.eliminar("clientes",1)` |
| Serializar una lista | `serializar()` | `cadena = serial.serializar(["uno","dos","tres"])` |
| Desserializar una cadena | `desserializar()` | `lista = serial.desserializar("uno,dos,tres")` |

### Inicialización mínima

Antes de utilizar las operaciones de base de datos:

```python
from Andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()
```

Para utilizar directamente el serializador:

```python
from Andrei_bbdd import AndreiSerializador

serial = AndreiSerializador()
```

---

## 1. Descripción

`AndreiBBDD` es una implementación didáctica de un pequeño motor de almacenamiento persistente basado en archivos.

El sistema utiliza tres archivos por tabla:

```text
tabla.csv       Datos
tabla.esquema   Definición de columnas
tabla.idx       Índice id → posición física
```

Los registros tienen un tamaño fijo de **512 bytes**. Esta decisión permite acceder directamente a un registro y modificarlo sin cargar la tabla completa en memoria.

La biblioteca contiene dos clases:

```text
AndreiSerializador
AndreiBBDD
```

`AndreiSerializador` convierte listas a cadenas delimitadas y realiza la operación inversa.

`AndreiBBDD` administra bases de datos, tablas, registros e índices.

---

## 2. Configuración externa

La biblioteca utiliza un archivo `config.json` para mantener separados los parámetros de configuración y el código fuente.

Estructura esperada:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

| Propiedad | Tipo | Descripción |
|---|---|---|
| `instalacion` | cadena | Directorio raíz en el que se crean las bases de datos. |
| `tamanoRegistro` | entero | Tamaño fijo, en bytes, reservado para cada registro. |

La configuración se carga una sola vez durante la construcción de `AndreiBBDD`.

```python
bbdd = AndreiBBDD()
```

No es necesario abrir ni leer manualmente `config.json` desde el programa que utiliza la biblioteca.

### Ubicación de `config.json`

La distribución recomendada es:

```text
proyecto/
├── AndreiBBDD.py
├── config.json
└── programa.py
```

La biblioteca busca `config.json` junto al propio archivo `AndreiBBDD.py`, no junto al programa que importa la librería.

---

## 3. Arquitectura de almacenamiento

La configuración de la biblioteca está separada del código y se encuentra en el archivo:

```text
config.json
```

Configuración por defecto:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

La propiedad `instalacion` indica el directorio raíz donde se almacenan las bases de datos. La propiedad `tamanoRegistro` determina el tamaño fijo, en bytes, de cada registro.

El archivo `config.json` debe estar en el mismo directorio que `AndreiBBDD.py`. La biblioteca localiza la configuración mediante `__file__`, por lo que no depende del directorio desde el que se ejecute el programa.

Cada base de datos es un directorio:

```text
/var/Andrei-basededatos/
└── empresa/
    ├── clientes.csv
    ├── clientes.esquema
    └── clientes.idx
```

Para cambiar la ruta de almacenamiento de forma permanente, se modifica `config.json`:

```json
{
  "instalacion": "/otra/ruta/",
  "tamanoRegistro": 512
}
```

De esta forma, la configuración queda separada de la implementación de la biblioteca.

Para pruebas automatizadas sigue siendo posible sobrescribir temporalmente el atributo después de crear el objeto:

```python
bbdd = AndreiBBDD()
bbdd.instalacion = "/tmp/pruebas/"
```

Esta modificación solo afecta a esa instancia y no altera `config.json`.

---

## 3. Formato del esquema

Al crear una tabla:

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

el esquema almacenado será:

```text
id,activo,nombre,apellidos,email
```

Los campos `id` y `activo` son añadidos automáticamente por el motor.

### `id`

Identificador numérico del registro.

### `activo`

Indica si el registro está activo:

```text
1 = activo
0 = eliminado
```

El borrado es, por tanto, un **borrado lógico**.

---

## 4. Registros de tamaño fijo

Cada registro ocupa:

```python
tamanoRegistro = 512
```

bytes.

Un registro lógico como:

```text
1,1,Andrei Vicente,Carratala,Andrei@example.com
```

se codifica en UTF-8, se rellena con espacios y termina con un salto de línea hasta completar exactamente 512 bytes.

Conceptualmente:

```text
| registro 1 - 512 bytes |
| registro 2 - 512 bytes |
| registro 3 - 512 bytes |
```

Esto permite usar:

```python
archivo.seek(posicion)
```

para acceder directamente al bloque correspondiente.

La implementación evita cargar el archivo completo durante `leerRegistro`, `actualizar` y `eliminar`.

---

## 5. Índice

El archivo `.idx` relaciona cada identificador con su posición física.

Ejemplo:

```text
1,0
2,512
3,1024
```

Esto significa:

```text
id 1 → byte 0
id 2 → byte 512
id 3 → byte 1024
```

`buscarPosicion()` consulta este archivo para localizar un registro.

Actualmente el índice se recorre secuencialmente, por lo que la búsqueda en el `.idx` es O(n), aunque el acceso posterior al registro de datos es directo.

---

## 6. AndreiSerializador

### serializar(lista, delimitador=",")

Convierte una lista en una cadena.

```python
serial = AndreiSerializador()

cadena = serial.serializar(
  ["Andrei","Valencia",48]
)
```

Resultado:

```text
Andrei,Valencia,48
```

También admite otro delimitador:

```python
serial.serializar(["uno","dos","tres"],"|")
```

Resultado:

```text
uno|dos|tres
```

### desserializar(cadena, delimitador=",")

Realiza la operación inversa:

```python
serial.desserializar(
  "Andrei,Valencia,48"
)
```

Resultado:

```python
["Andrei","Valencia","48"]
```

Todos los valores recuperados son cadenas.

---

## 7. AndreiBBDD

### Constructor

```python
bbdd = AndreiBBDD()
```

Al construir el objeto, `AndreiBBDD` carga automáticamente `config.json`.

Conceptualmente:

```python
bbdd = AndreiBBDD()
```

produce una instancia cuyos valores configurables proceden de:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

`self.basededatos` continúa siendo estado interno de ejecución y se inicializa como una cadena vacía hasta llamar a `usaBaseDatos()`.

Si `config.json` no existe, contiene JSON inválido o no incluye las propiedades obligatorias, el constructor muestra un mensaje de depuración claro y lanza la excepción para impedir que la biblioteca continúe con una configuración incompleta.

---

## 8. creaBaseDatos(nombre)

Crea el directorio correspondiente a una base de datos.

```python
bbdd.creaBaseDatos("empresa")
```

Produce:

```text
/var/Andrei-basededatos/empresa/
```

La operación falla si la base de datos ya existe.

---

## 9. usaBaseDatos(nombre)

Selecciona la base de datos activa.

```python
bbdd.usaBaseDatos("empresa")
```

A partir de ese momento las operaciones se ejecutan sobre `empresa`.

---

## 10. creaTabla(nombre, esquema)

Crea los tres archivos necesarios para una tabla.

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

Genera:

```text
clientes.csv
clientes.esquema
clientes.idx
```

El esquema interno incluye automáticamente:

```text
id,activo
```

---

## 11. obtenerEsquema(tabla)

Recupera el esquema como lista.

```python
esquema = bbdd.obtenerEsquema("clientes")
```

Resultado:

```python
[
  "id",
  "activo",
  "nombre",
  "apellidos",
  "email"
]
```

---

## 12. siguienteId(tabla)

Obtiene el próximo identificador disponible leyendo el índice.

```python
id = bbdd.siguienteId("clientes")
```

Si el último registro tiene id `3`, devuelve:

```text
4
```

Los identificadores eliminados no se reutilizan.

---

## 13. insertarDatos(tabla, datos)

Inserta un nuevo registro.

```python
id = bbdd.insertarDatos(
  "clientes",
  [
    "Andrei Vicente",
    "Carratala",
    "Andrei@example.com"
  ]
)
```

Internamente se construye:

```text
id,1,nombre,apellidos,email
```

El método:

1. calcula el siguiente id;
2. serializa los datos;
3. comprueba que caben en 511 bytes de contenido;
4. completa el bloque hasta 512 bytes;
5. añade el bloque al `.csv`;
6. añade `id,posicion` al `.idx`.

Devuelve el nuevo identificador o `None` si se produce un error.

---

## 14. buscarPosicion(tabla, id)

Busca en el índice la posición física de un registro.

```python
posicion = bbdd.buscarPosicion(
  "clientes",
  2
)
```

Puede devolver, por ejemplo:

```text
512
```

Si no encuentra el registro devuelve:

```text
-1
```

---

## 15. leerRegistro(tabla, id)

Lee directamente el bloque de 512 bytes correspondiente al identificador.

```python
registro = bbdd.leerRegistro(
  "clientes",
  1
)
```

Resultado:

```python
[
  "1",
  "1",
  "Andrei Vicente",
  "Carratala",
  "Andrei@example.com"
]
```

Un registro marcado con `activo=0` no se devuelve.

---

## 16. seleccionar(tabla, id)

Convierte un registro en un diccionario utilizando el esquema.

```python
cliente = bbdd.seleccionar(
  "clientes",
  1
)
```

Resultado:

```python
{
  "id":"1",
  "activo":"1",
  "nombre":"Andrei Vicente",
  "apellidos":"Carratala",
  "email":"Andrei@example.com"
}
```

Esta es la forma más cómoda de recuperar un registro individual.

---

## 17. listarTodo(tabla)

Recorre secuencialmente la tabla e imprime todos los registros activos.

```python
bbdd.listarTodo("clientes")
```

Los registros con:

```text
activo = 0
```

son ignorados.

Este método no carga toda la tabla en memoria: procesa un bloque de 512 bytes cada vez.

---

## 18. buscarColumna(tabla, columna, valor)

Busca registros activos cuyo campo coincida exactamente con un valor.

```python
bbdd.buscarColumna(
  "clientes",
  "nombre",
  "Ana"
)
```

La búsqueda es secuencial sobre el archivo de datos.

La columna debe existir en el esquema.

---

## 19. actualizar(tabla, id, datos)

Actualiza un registro existente **en su misma posición física**.

```python
bbdd.actualizar(
  "clientes",
  2,
  [
    "Ana Maria",
    "Garcia Perez",
    "anamaria@example.com"
  ]
)
```

El procedimiento es:

```text
buscar id en índice
        ↓
obtener posición
        ↓
leer registro actual
        ↓
crear nuevo bloque de 512 bytes
        ↓
seek(posición)
        ↓
sobrescribir únicamente ese bloque
```

No se reescribe el archivo completo y el índice no necesita modificarse.

El número de campos recibidos debe coincidir con el esquema excluyendo `id` y `activo`.

---

## 20. eliminar(tabla, id)

Realiza un borrado lógico.

```python
bbdd.eliminar(
  "clientes",
  3
)
```

No elimina físicamente el bloque.

Modifica:

```text
activo = 1
```

a:

```text
activo = 0
```

y vuelve a escribir únicamente los 512 bytes del registro.

Ventajas:

- no desplaza registros;
- no modifica posiciones;
- no obliga a reconstruir el índice;
- el coste de escritura es constante.

---

## 21. Gestión de errores

Los métodos siguen el patrón:

```python
try:
  # operación
except Exception as error:
  print("Se ha producido un error:")
  print(error)
```

También se utilizan `assert` para expresar condiciones que deben cumplirse:

```python
assert os.path.exists(ruta), "La tabla no existe"
```

Los métodos que producen un resultado suelen devolver un valor especial cuando ocurre un error:

```text
None
-1
```

dependiendo del método.

---

## 22. Ejemplo completo

```python
from Andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()

bbdd.creaBaseDatos("empresa")
bbdd.usaBaseDatos("empresa")

bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)

id = bbdd.insertarDatos(
  "clientes",
  [
    "Andrei Vicente",
    "Carratala",
    "Andrei@example.com"
  ]
)

cliente = bbdd.seleccionar(
  "clientes",
  id
)

print(cliente)

bbdd.actualizar(
  "clientes",
  id,
  [
    "Andrei Vicente",
    "Carratala Sanchis",
    "nuevo@example.com"
  ]
)

bbdd.eliminar(
  "clientes",
  id
)
```

---

## 23. Pruebas

El archivo:

```text
pruebas_Andrei_bbdd.py
```

crea una instalación temporal y comprueba, entre otras cosas:

- serialización;
- desserialización;
- creación de bases de datos;
- selección de bases de datos;
- creación de tablas;
- esquema;
- generación de ids;
- inserción;
- índice;
- lectura;
- selección;
- listado;
- búsqueda por columna;
- actualización in-place;
- borrado lógico;
- registros demasiado grandes;
- ids inexistentes;
- tablas y bases de datos inexistentes;
- duplicados;
- número incorrecto de campos.

La prueba utiliza un directorio temporal y lo elimina al finalizar, por lo que no debería afectar a `/var/Andrei-basededatos/`.

Ejecución:

```bash
python3 pruebas_Andrei_bbdd.py
```

Si el módulo principal no se llama:

```text
Andrei_bbdd.py
```

hay que modificar el `import` inicial del archivo de pruebas.

---

## 24. Complejidad y comportamiento con bases grandes

### Inserción

Los datos se añaden al final del archivo.

El registro de datos se escribe directamente, aunque `siguienteId()` recorre actualmente el índice para localizar el último id.

### Lectura por id

El índice se recorre hasta encontrar el id y después el acceso al `.csv` es directo mediante `seek()`.

### Actualización

Solo se sobrescribe un bloque de 512 bytes.

### Eliminación

Solo se sobrescribe un bloque de 512 bytes.

### Listado y búsqueda por columna

Requieren recorrer la tabla secuencialmente, pero mantienen únicamente un registro en memoria cada vez.

---

## 25. Limitaciones actuales

El diseño es deliberadamente sencillo y didáctico.

Conviene tener presentes estas limitaciones:

- el serializador no escapa delimitadores incluidos dentro de los valores;
- no existe tipado de columnas;
- no hay bloqueo para escrituras concurrentes;
- no hay transacciones;
- el índice se busca secuencialmente;
- no existe compactación de registros eliminados;
- los registros tienen un máximo fijo de 511 bytes de contenido;
- `listarTodo()` y `buscarColumna()` imprimen los resultados en lugar de devolver una colección;
- los datos recuperados por el serializador son cadenas;
- no existe todavía validación automática del número de campos durante la inserción.

Estas características son buenos puntos de extensión para futuras versiones.

---

## 26. Posibles evoluciones

Sin cambiar la filosofía general del proyecto, una evolución natural sería incorporar:

```text
validación de campos al insertar
índice cargado o indexado eficientemente
compactación/VACUUM
bloqueo de escritura
tipos de datos
índices secundarios
consultas que devuelvan generadores
escape robusto de delimitadores
metadatos de tabla
transacciones simples
```

Una mejora especialmente interesante para tablas grandes sería convertir los métodos de listado y búsqueda en **generadores Python**, manteniendo el procesamiento streaming sin acumular resultados en memoria.

```
#### 003-con configuracion
**AndreiBBDD.py**
```python
import os
import json


class AndreiSerializador():

    def serializar(self, lista, delimitador=","):
        try:
            cadena = ""
            for elemento in lista:
                cadena += str(elemento) + delimitador
            cadena = cadena[:-1]
            return cadena

        except Exception as error:
            print("Se ha producido un error al serializar:")
            print(error)
            return None


    def desserializar(self, cadena, delimitador=","):
        try:
            lista = cadena.split(delimitador)
            return lista

        except Exception as error:
            print("Se ha producido un error al desserializar:")
            print(error)
            return None


class AndreiBBDD:

    def __init__(self):
        try:
            rutaConfiguracion = os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                "config.json"
            )

            assert os.path.exists(rutaConfiguracion), \
                "No se ha encontrado el archivo de configuración: " + rutaConfiguracion

            archivo = open(rutaConfiguracion, "r", encoding="utf-8")
            configuracion = json.load(archivo)
            archivo.close()

            assert "instalacion" in configuracion, \
                "Falta la propiedad 'instalacion' en config.json"

            assert "tamanoRegistro" in configuracion, \
                "Falta la propiedad 'tamanoRegistro' en config.json"

            self.instalacion = configuracion["instalacion"]

            if not self.instalacion.endswith("/"):
                self.instalacion += "/"

            self.tamanoRegistro = int(configuracion["tamanoRegistro"])
            self.basededatos = ""

        except Exception as error:
            print("Se ha producido un error al cargar la configuración:")
            print(error)
            raise


    def creaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert not os.path.exists(ruta), \
                "La base de datos '" + nombre + "' ya existe"

            os.mkdir(ruta)

        except Exception as error:
            print("Se ha producido un error al crear la base de datos:")
            print(error)


    def usaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert os.path.exists(ruta), \
                "La base de datos '" + nombre + "' no existe"

            self.basededatos = nombre

        except Exception as error:
            print("Se ha producido un error al seleccionar la base de datos:")
            print(error)


    def creaTabla(self, nombre, esquema):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + nombre + ".csv"

            assert not os.path.exists(ruta), \
                "La tabla '" + nombre + "' ya existe"

            archivo = open(ruta, 'wb')
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".esquema",
                'w'
            )
            archivo.write("id,activo," + esquema)
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".idx",
                'w'
            )
            archivo.close()

        except Exception as error:
            print("Se ha producido un error al crear la tabla:")
            print(error)


    def obtenerEsquema(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".esquema"

            assert os.path.exists(ruta), \
                "No existe el esquema de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')
            esquema = archivo.read()
            archivo.close()

            serial = AndreiSerializador()
            resultado = serial.desserializar(esquema)

            assert resultado != None, \
                "No se ha podido desserializar el esquema"

            return resultado

        except Exception as error:
            print("Se ha producido un error al obtener el esquema:")
            print(error)
            return None


    def siguienteId(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            ultimo = 0

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")
                    ultimo = int(partes[0])

            archivo.close()

            return ultimo + 1

        except Exception as error:
            print("Se ha producido un error al calcular el siguiente id:")
            print(error)
            return None


    def insertarDatos(self, tabla, datos):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            serial = AndreiSerializador()

            id = self.siguienteId(tabla)

            assert id != None, \
                "No se ha podido obtener el siguiente id"

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro ocupa " + str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo = open(ruta, 'ab')

            posicion = archivo.tell()

            archivo.write(registro)
            archivo.close()

            indice = open(
                self.instalacion + self.basededatos + "/" + tabla + ".idx",
                'a'
            )

            indice.write(str(id) + "," + str(posicion) + "\n")
            indice.close()

            return id

        except Exception as error:
            print("Se ha producido un error al insertar datos:")
            print(error)
            return None


    def buscarPosicion(self, tabla, id):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")

                    if partes[0] == str(id):
                        archivo.close()
                        return int(partes[1])

            archivo.close()

            raise Exception(
                "No se ha encontrado el id "
                + str(id)
                + " en la tabla '"
                + tabla
                + "'"
            )

        except Exception as error:
            print("Se ha producido un error al buscar la posición del registro:")
            print(error)
            return -1


    def leerRegistro(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            archivo.close()

            assert registro != b"", \
                "No se han encontrado datos en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = AndreiSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " está eliminado"

            return elementos

        except Exception as error:
            print("Se ha producido un error al leer el registro:")
            print(error)
            return None


    def seleccionar(self, tabla, id):
        try:
            registro = self.leerRegistro(tabla, id)

            assert registro != None, \
                "No se ha podido recuperar el registro"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(registro) == len(esquema), \
                "El número de campos del registro no coincide con el esquema"

            resultado = {}

            for i in range(len(esquema)):
                resultado[esquema[i]] = registro[i]

            return resultado

        except Exception as error:
            print("Se ha producido un error al seleccionar el registro:")
            print(error)
            return None


    def listarTodo(self, tabla):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = AndreiSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > 1 and elementos[1] == "1":

                            assert len(elementos) == len(esquema), \
                                "Registro corrupto: el número de campos no coincide con el esquema"

                            resultado = {}

                            for i in range(len(esquema)):
                                resultado[esquema[i]] = elementos[i]

                            print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al listar los registros:")
            print(error)


    def buscarColumna(self, tabla, columna, valor):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert columna in esquema, \
                "La columna '" + columna + \
                "' no existe en la tabla '" + tabla + "'"

            posicionColumna = esquema.index(columna)

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = AndreiSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > posicionColumna:

                            if (
                                elementos[1] == "1"
                                and elementos[posicionColumna] == str(valor)
                            ):

                                resultado = {}

                                for i in range(len(esquema)):
                                    resultado[esquema[i]] = elementos[i]

                                print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al buscar por columna:")
            print(error)


    def actualizar(self, tabla, id, datos):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            registroActual = self.leerRegistro(tabla, id)

            assert registroActual != None, \
                "El registro no existe o está eliminado"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(datos) == len(esquema) - 2, \
                "Se esperaban " + str(len(esquema) - 2) + \
                " campos y se han recibido " + str(len(datos))

            serial = AndreiSerializador()

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro actualizado"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro actualizado ocupa " + \
                str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al actualizar el registro:")
            print(error)


    def eliminar(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            assert registro != b"", \
                "No existe ningún registro en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = AndreiSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " ya estaba eliminado"

            elementos[1] = "0"

            cadena = serial.serializar(elementos)

            datosRegistro = cadena.encode("utf-8")

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al eliminar el registro:")
            print(error)

```
**DOCUMENTACION_DESARROLLADORES.md**
```markdown
# JocarsaBBDD — Documentación para desarrolladores


## Resumen rápido de operaciones

| Operación | Método | Código Python |
|---|---|---|
| Crear una base de datos | `creaBaseDatos()` | `bbdd.creaBaseDatos("empresa")` |
| Seleccionar una base de datos | `usaBaseDatos()` | `bbdd.usaBaseDatos("empresa")` |
| Crear una tabla | `creaTabla()` | `bbdd.creaTabla("clientes","nombre,apellidos,email")` |
| Obtener el esquema | `obtenerEsquema()` | `esquema = bbdd.obtenerEsquema("clientes")` |
| Obtener el siguiente ID | `siguienteId()` | `id = bbdd.siguienteId("clientes")` |
| Insertar un registro | `insertarDatos()` | `id = bbdd.insertarDatos("clientes",["Jose","Carratala","jose@example.com"])` |
| Buscar la posición física de un ID | `buscarPosicion()` | `posicion = bbdd.buscarPosicion("clientes",1)` |
| Leer un registro | `leerRegistro()` | `registro = bbdd.leerRegistro("clientes",1)` |
| Seleccionar un registro como diccionario | `seleccionar()` | `cliente = bbdd.seleccionar("clientes",1)` |
| Listar todos los registros activos | `listarTodo()` | `bbdd.listarTodo("clientes")` |
| Buscar por una columna | `buscarColumna()` | `bbdd.buscarColumna("clientes","nombre","Jose")` |
| Actualizar un registro | `actualizar()` | `bbdd.actualizar("clientes",1,["Jose","Carratala","nuevo@example.com"])` |
| Eliminar lógicamente un registro | `eliminar()` | `bbdd.eliminar("clientes",1)` |
| Serializar una lista | `serializar()` | `cadena = serial.serializar(["uno","dos","tres"])` |
| Desserializar una cadena | `desserializar()` | `lista = serial.desserializar("uno,dos,tres")` |

### Inicialización mínima

Antes de utilizar las operaciones de base de datos:

```python
from jocarsa_bbdd import JocarsaBBDD

bbdd = JocarsaBBDD()
```

Para utilizar directamente el serializador:

```python
from jocarsa_bbdd import JocarsaSerializador

serial = JocarsaSerializador()
```

---

## 1. Descripción

`JocarsaBBDD` es una implementación didáctica de un pequeño motor de almacenamiento persistente basado en archivos.

El sistema utiliza tres archivos por tabla:

```text
tabla.csv       Datos
tabla.esquema   Definición de columnas
tabla.idx       Índice id → posición física
```

Los registros tienen un tamaño fijo de **512 bytes**. Esta decisión permite acceder directamente a un registro y modificarlo sin cargar la tabla completa en memoria.

La biblioteca contiene dos clases:

```text
JocarsaSerializador
JocarsaBBDD
```

`JocarsaSerializador` convierte listas a cadenas delimitadas y realiza la operación inversa.

`JocarsaBBDD` administra bases de datos, tablas, registros e índices.

---

## 2. Configuración externa

La biblioteca utiliza un archivo `config.json` para mantener separados los parámetros de configuración y el código fuente.

Estructura esperada:

```json
{
  "instalacion": "/var/jocarsa-basededatos/",
  "tamanoRegistro": 512
}
```

| Propiedad | Tipo | Descripción |
|---|---|---|
| `instalacion` | cadena | Directorio raíz en el que se crean las bases de datos. |
| `tamanoRegistro` | entero | Tamaño fijo, en bytes, reservado para cada registro. |

La configuración se carga una sola vez durante la construcción de `JocarsaBBDD`.

```python
bbdd = JocarsaBBDD()
```

No es necesario abrir ni leer manualmente `config.json` desde el programa que utiliza la biblioteca.

### Ubicación de `config.json`

La distribución recomendada es:

```text
proyecto/
├── JocarsaBBDD.py
├── config.json
└── programa.py
```

La biblioteca busca `config.json` junto al propio archivo `JocarsaBBDD.py`, no junto al programa que importa la librería.

---

## 3. Arquitectura de almacenamiento

La configuración de la biblioteca está separada del código y se encuentra en el archivo:

```text
config.json
```

Configuración por defecto:

```json
{
  "instalacion": "/var/jocarsa-basededatos/",
  "tamanoRegistro": 512
}
```

La propiedad `instalacion` indica el directorio raíz donde se almacenan las bases de datos. La propiedad `tamanoRegistro` determina el tamaño fijo, en bytes, de cada registro.

El archivo `config.json` debe estar en el mismo directorio que `JocarsaBBDD.py`. La biblioteca localiza la configuración mediante `__file__`, por lo que no depende del directorio desde el que se ejecute el programa.

Cada base de datos es un directorio:

```text
/var/jocarsa-basededatos/
└── empresa/
    ├── clientes.csv
    ├── clientes.esquema
    └── clientes.idx
```

Para cambiar la ruta de almacenamiento de forma permanente, se modifica `config.json`:

```json
{
  "instalacion": "/otra/ruta/",
  "tamanoRegistro": 512
}
```

De esta forma, la configuración queda separada de la implementación de la biblioteca.

Para pruebas automatizadas sigue siendo posible sobrescribir temporalmente el atributo después de crear el objeto:

```python
bbdd = JocarsaBBDD()
bbdd.instalacion = "/tmp/pruebas/"
```

Esta modificación solo afecta a esa instancia y no altera `config.json`.

---

## 3. Formato del esquema

Al crear una tabla:

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

el esquema almacenado será:

```text
id,activo,nombre,apellidos,email
```

Los campos `id` y `activo` son añadidos automáticamente por el motor.

### `id`

Identificador numérico del registro.

### `activo`

Indica si el registro está activo:

```text
1 = activo
0 = eliminado
```

El borrado es, por tanto, un **borrado lógico**.

---

## 4. Registros de tamaño fijo

Cada registro ocupa:

```python
tamanoRegistro = 512
```

bytes.

Un registro lógico como:

```text
1,1,Jose Vicente,Carratala,jose@example.com
```

se codifica en UTF-8, se rellena con espacios y termina con un salto de línea hasta completar exactamente 512 bytes.

Conceptualmente:

```text
| registro 1 - 512 bytes |
| registro 2 - 512 bytes |
| registro 3 - 512 bytes |
```

Esto permite usar:

```python
archivo.seek(posicion)
```

para acceder directamente al bloque correspondiente.

La implementación evita cargar el archivo completo durante `leerRegistro`, `actualizar` y `eliminar`.

---

## 5. Índice

El archivo `.idx` relaciona cada identificador con su posición física.

Ejemplo:

```text
1,0
2,512
3,1024
```

Esto significa:

```text
id 1 → byte 0
id 2 → byte 512
id 3 → byte 1024
```

`buscarPosicion()` consulta este archivo para localizar un registro.

Actualmente el índice se recorre secuencialmente, por lo que la búsqueda en el `.idx` es O(n), aunque el acceso posterior al registro de datos es directo.

---

## 6. JocarsaSerializador

### serializar(lista, delimitador=",")

Convierte una lista en una cadena.

```python
serial = JocarsaSerializador()

cadena = serial.serializar(
  ["Jose","Valencia",48]
)
```

Resultado:

```text
Jose,Valencia,48
```

También admite otro delimitador:

```python
serial.serializar(["uno","dos","tres"],"|")
```

Resultado:

```text
uno|dos|tres
```

### desserializar(cadena, delimitador=",")

Realiza la operación inversa:

```python
serial.desserializar(
  "Jose,Valencia,48"
)
```

Resultado:

```python
["Jose","Valencia","48"]
```

Todos los valores recuperados son cadenas.

---

## 7. JocarsaBBDD

### Constructor

```python
bbdd = JocarsaBBDD()
```

Al construir el objeto, `JocarsaBBDD` carga automáticamente `config.json`.

Conceptualmente:

```python
bbdd = JocarsaBBDD()
```

produce una instancia cuyos valores configurables proceden de:

```json
{
  "instalacion": "/var/jocarsa-basededatos/",
  "tamanoRegistro": 512
}
```

`self.basededatos` continúa siendo estado interno de ejecución y se inicializa como una cadena vacía hasta llamar a `usaBaseDatos()`.

Si `config.json` no existe, contiene JSON inválido o no incluye las propiedades obligatorias, el constructor muestra un mensaje de depuración claro y lanza la excepción para impedir que la biblioteca continúe con una configuración incompleta.

---

## 8. creaBaseDatos(nombre)

Crea el directorio correspondiente a una base de datos.

```python
bbdd.creaBaseDatos("empresa")
```

Produce:

```text
/var/jocarsa-basededatos/empresa/
```

La operación falla si la base de datos ya existe.

---

## 9. usaBaseDatos(nombre)

Selecciona la base de datos activa.

```python
bbdd.usaBaseDatos("empresa")
```

A partir de ese momento las operaciones se ejecutan sobre `empresa`.

---

## 10. creaTabla(nombre, esquema)

Crea los tres archivos necesarios para una tabla.

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

Genera:

```text
clientes.csv
clientes.esquema
clientes.idx
```

El esquema interno incluye automáticamente:

```text
id,activo
```

---

## 11. obtenerEsquema(tabla)

Recupera el esquema como lista.

```python
esquema = bbdd.obtenerEsquema("clientes")
```

Resultado:

```python
[
  "id",
  "activo",
  "nombre",
  "apellidos",
  "email"
]
```

---

## 12. siguienteId(tabla)

Obtiene el próximo identificador disponible leyendo el índice.

```python
id = bbdd.siguienteId("clientes")
```

Si el último registro tiene id `3`, devuelve:

```text
4
```

Los identificadores eliminados no se reutilizan.

---

## 13. insertarDatos(tabla, datos)

Inserta un nuevo registro.

```python
id = bbdd.insertarDatos(
  "clientes",
  [
    "Jose Vicente",
    "Carratala",
    "jose@example.com"
  ]
)
```

Internamente se construye:

```text
id,1,nombre,apellidos,email
```

El método:

1. calcula el siguiente id;
2. serializa los datos;
3. comprueba que caben en 511 bytes de contenido;
4. completa el bloque hasta 512 bytes;
5. añade el bloque al `.csv`;
6. añade `id,posicion` al `.idx`.

Devuelve el nuevo identificador o `None` si se produce un error.

---

## 14. buscarPosicion(tabla, id)

Busca en el índice la posición física de un registro.

```python
posicion = bbdd.buscarPosicion(
  "clientes",
  2
)
```

Puede devolver, por ejemplo:

```text
512
```

Si no encuentra el registro devuelve:

```text
-1
```

---

## 15. leerRegistro(tabla, id)

Lee directamente el bloque de 512 bytes correspondiente al identificador.

```python
registro = bbdd.leerRegistro(
  "clientes",
  1
)
```

Resultado:

```python
[
  "1",
  "1",
  "Jose Vicente",
  "Carratala",
  "jose@example.com"
]
```

Un registro marcado con `activo=0` no se devuelve.

---

## 16. seleccionar(tabla, id)

Convierte un registro en un diccionario utilizando el esquema.

```python
cliente = bbdd.seleccionar(
  "clientes",
  1
)
```

Resultado:

```python
{
  "id":"1",
  "activo":"1",
  "nombre":"Jose Vicente",
  "apellidos":"Carratala",
  "email":"jose@example.com"
}
```

Esta es la forma más cómoda de recuperar un registro individual.

---

## 17. listarTodo(tabla)

Recorre secuencialmente la tabla e imprime todos los registros activos.

```python
bbdd.listarTodo("clientes")
```

Los registros con:

```text
activo = 0
```

son ignorados.

Este método no carga toda la tabla en memoria: procesa un bloque de 512 bytes cada vez.

---

## 18. buscarColumna(tabla, columna, valor)

Busca registros activos cuyo campo coincida exactamente con un valor.

```python
bbdd.buscarColumna(
  "clientes",
  "nombre",
  "Ana"
)
```

La búsqueda es secuencial sobre el archivo de datos.

La columna debe existir en el esquema.

---

## 19. actualizar(tabla, id, datos)

Actualiza un registro existente **en su misma posición física**.

```python
bbdd.actualizar(
  "clientes",
  2,
  [
    "Ana Maria",
    "Garcia Perez",
    "anamaria@example.com"
  ]
)
```

El procedimiento es:

```text
buscar id en índice
        ↓
obtener posición
        ↓
leer registro actual
        ↓
crear nuevo bloque de 512 bytes
        ↓
seek(posición)
        ↓
sobrescribir únicamente ese bloque
```

No se reescribe el archivo completo y el índice no necesita modificarse.

El número de campos recibidos debe coincidir con el esquema excluyendo `id` y `activo`.

---

## 20. eliminar(tabla, id)

Realiza un borrado lógico.

```python
bbdd.eliminar(
  "clientes",
  3
)
```

No elimina físicamente el bloque.

Modifica:

```text
activo = 1
```

a:

```text
activo = 0
```

y vuelve a escribir únicamente los 512 bytes del registro.

Ventajas:

- no desplaza registros;
- no modifica posiciones;
- no obliga a reconstruir el índice;
- el coste de escritura es constante.

---

## 21. Gestión de errores

Los métodos siguen el patrón:

```python
try:
  # operación
except Exception as error:
  print("Se ha producido un error:")
  print(error)
```

También se utilizan `assert` para expresar condiciones que deben cumplirse:

```python
assert os.path.exists(ruta), "La tabla no existe"
```

Los métodos que producen un resultado suelen devolver un valor especial cuando ocurre un error:

```text
None
-1
```

dependiendo del método.

---

## 22. Ejemplo completo

```python
from jocarsa_bbdd import JocarsaBBDD

bbdd = JocarsaBBDD()

bbdd.creaBaseDatos("empresa")
bbdd.usaBaseDatos("empresa")

bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)

id = bbdd.insertarDatos(
  "clientes",
  [
    "Jose Vicente",
    "Carratala",
    "jose@example.com"
  ]
)

cliente = bbdd.seleccionar(
  "clientes",
  id
)

print(cliente)

bbdd.actualizar(
  "clientes",
  id,
  [
    "Jose Vicente",
    "Carratala Sanchis",
    "nuevo@example.com"
  ]
)

bbdd.eliminar(
  "clientes",
  id
)
```

---

## 23. Pruebas

El archivo:

```text
pruebas_jocarsa_bbdd.py
```

crea una instalación temporal y comprueba, entre otras cosas:

- serialización;
- desserialización;
- creación de bases de datos;
- selección de bases de datos;
- creación de tablas;
- esquema;
- generación de ids;
- inserción;
- índice;
- lectura;
- selección;
- listado;
- búsqueda por columna;
- actualización in-place;
- borrado lógico;
- registros demasiado grandes;
- ids inexistentes;
- tablas y bases de datos inexistentes;
- duplicados;
- número incorrecto de campos.

La prueba utiliza un directorio temporal y lo elimina al finalizar, por lo que no debería afectar a `/var/jocarsa-basededatos/`.

Ejecución:

```bash
python3 pruebas_jocarsa_bbdd.py
```

Si el módulo principal no se llama:

```text
jocarsa_bbdd.py
```

hay que modificar el `import` inicial del archivo de pruebas.

---

## 24. Complejidad y comportamiento con bases grandes

### Inserción

Los datos se añaden al final del archivo.

El registro de datos se escribe directamente, aunque `siguienteId()` recorre actualmente el índice para localizar el último id.

### Lectura por id

El índice se recorre hasta encontrar el id y después el acceso al `.csv` es directo mediante `seek()`.

### Actualización

Solo se sobrescribe un bloque de 512 bytes.

### Eliminación

Solo se sobrescribe un bloque de 512 bytes.

### Listado y búsqueda por columna

Requieren recorrer la tabla secuencialmente, pero mantienen únicamente un registro en memoria cada vez.

---

## 25. Limitaciones actuales

El diseño es deliberadamente sencillo y didáctico.

Conviene tener presentes estas limitaciones:

- el serializador no escapa delimitadores incluidos dentro de los valores;
- no existe tipado de columnas;
- no hay bloqueo para escrituras concurrentes;
- no hay transacciones;
- el índice se busca secuencialmente;
- no existe compactación de registros eliminados;
- los registros tienen un máximo fijo de 511 bytes de contenido;
- `listarTodo()` y `buscarColumna()` imprimen los resultados en lugar de devolver una colección;
- los datos recuperados por el serializador son cadenas;
- no existe todavía validación automática del número de campos durante la inserción.

Estas características son buenos puntos de extensión para futuras versiones.

---

## 26. Posibles evoluciones

Sin cambiar la filosofía general del proyecto, una evolución natural sería incorporar:

```text
validación de campos al insertar
índice cargado o indexado eficientemente
compactación/VACUUM
bloqueo de escritura
tipos de datos
índices secundarios
consultas que devuelvan generadores
escape robusto de delimitadores
metadatos de tabla
transacciones simples
```

Una mejora especialmente interesante para tablas grandes sería convertir los métodos de listado y búsqueda en **generadores Python**, manteniendo el procesamiento streaming sin acumular resultados en memoria.

```
**config.json**
```json
{
  "instalacion": "/htdocs/andrei-basededatos/",
  "tamanoRegistro": 512
}

```
**instalar.py**
```python
#!/usr/bin/env python3

import json
import os
import shutil
import sys
import time


class Colores:
    RESET = "\033[0m"
    NEGRITA = "\033[1m"
    SUAVE = "\033[2m"

    ROJO = "\033[91m"
    VERDE = "\033[92m"
    AMARILLO = "\033[93m"
    AZUL = "\033[94m"
    MAGENTA = "\033[95m"
    CYAN = "\033[96m"
    BLANCO = "\033[97m"

    FONDO_AZUL = "\033[44m"
    FONDO_VERDE = "\033[42m"


class InstaladorJocarsaBBDD:

    def __init__(self):
        self.directorioInstalador = os.path.dirname(os.path.abspath(__file__))
        self.archivoConfiguracion = os.path.join(
            self.directorioInstalador,
            "config.json"
        )
        self.ancho = 72


    def limpiar(self):
        os.system("cls" if os.name == "nt" else "clear")


    def linea(self, caracter="─"):
        print(
            Colores.CYAN
            + caracter * self.ancho
            + Colores.RESET
        )


    def centrar(self, texto, color=Colores.BLANCO):
        print(
            color
            + texto.center(self.ancho)
            + Colores.RESET
        )


    def titulo(self):
        self.limpiar()

        print(Colores.CYAN + "╔" + "═" * (self.ancho - 2) + "╗" + Colores.RESET)
        print(
            Colores.CYAN
            + "║"
            + Colores.RESET
            + (
                Colores.NEGRITA
                + Colores.BLANCO
                + "JOCARSA BBDD".center(self.ancho - 2)
                + Colores.RESET
            )
            + Colores.CYAN
            + "║"
            + Colores.RESET
        )
        print(
            Colores.CYAN
            + "║"
            + Colores.RESET
            + (
                Colores.SUAVE
                + "Instalador y configurador".center(self.ancho - 2)
                + Colores.RESET
            )
            + Colores.CYAN
            + "║"
            + Colores.RESET
        )
        print(Colores.CYAN + "╚" + "═" * (self.ancho - 2) + "╝" + Colores.RESET)
        print()


    def mensaje(self, simbolo, texto, color):
        print(
            "  "
            + color
            + simbolo
            + Colores.RESET
            + "  "
            + texto
        )


    def exito(self, texto):
        self.mensaje("✔", texto, Colores.VERDE)


    def aviso(self, texto):
        self.mensaje("!", texto, Colores.AMARILLO)


    def error(self, texto):
        self.mensaje("✘", texto, Colores.ROJO)


    def info(self, texto):
        self.mensaje("●", texto, Colores.CYAN)


    def preguntaSiNo(self, texto, defecto=None):
        while True:

            if defecto is True:
                opciones = "[S/n]"
            elif defecto is False:
                opciones = "[s/N]"
            else:
                opciones = "[s/n]"

            respuesta = input(
                "\n  "
                + Colores.AMARILLO
                + "?"
                + Colores.RESET
                + "  "
                + texto
                + " "
                + Colores.SUAVE
                + opciones
                + Colores.RESET
                + " "
            ).strip().lower()

            if respuesta == "" and defecto is not None:
                return defecto

            if respuesta in ["s", "si", "sí", "y", "yes"]:
                return True

            if respuesta in ["n", "no"]:
                return False

            self.aviso("Escribe 's' para sí o 'n' para no.")


    def preguntarTexto(self, texto, defecto):
        respuesta = input(
            "  "
            + Colores.AMARILLO
            + "›"
            + Colores.RESET
            + "  "
            + texto
            + "\n     "
            + Colores.SUAVE
            + "Valor por defecto: "
            + str(defecto)
            + Colores.RESET
            + "\n     > "
        ).strip()

        if respuesta == "":
            return defecto

        return respuesta


    def preguntarEntero(self, texto, defecto):
        while True:
            valor = self.preguntarTexto(texto, defecto)

            try:
                valor = int(valor)

                assert valor > 1, \
                    "El tamaño del registro debe ser mayor que 1"

                return valor

            except Exception as error:
                self.error(str(error))


    def normalizarRuta(self, ruta):
        ruta = os.path.expanduser(ruta)
        ruta = os.path.abspath(ruta)

        if not ruta.endswith(os.sep):
            ruta += os.sep

        return ruta


    def cargarConfiguracionActual(self):
        try:
            archivo = open(
                self.archivoConfiguracion,
                "r",
                encoding="utf-8"
            )
            configuracion = json.load(archivo)
            archivo.close()

            return configuracion

        except Exception as error:
            self.aviso(
                "El config.json existente no se ha podido leer correctamente."
            )
            self.error(str(error))
            return {}


    def mostrarConfiguracion(self, configuracion):
        print()
        self.linea()
        self.centrar(
            "CONFIGURACIÓN",
            Colores.NEGRITA + Colores.BLANCO
        )
        self.linea()

        instalacion = configuracion.get(
            "instalacion",
            "(sin definir)"
        )
        tamano = configuracion.get(
            "tamanoRegistro",
            "(sin definir)"
        )

        print()
        print(
            "  "
            + Colores.CYAN
            + "Directorio de datos : "
            + Colores.RESET
            + str(instalacion)
        )
        print(
            "  "
            + Colores.CYAN
            + "Tamaño de registro  : "
            + Colores.RESET
            + str(tamano)
            + " bytes"
        )
        print()


    def crearConfiguracion(self, configuracionAnterior=None):
        if configuracionAnterior is None:
            configuracionAnterior = {}

        instalacionDefecto = configuracionAnterior.get(
            "instalacion",
            "/var/jocarsa-basededatos/"
        )

        tamanoDefecto = configuracionAnterior.get(
            "tamanoRegistro",
            512
        )

        print()
        self.info("Vamos a configurar JocarsaBBDD.")
        print()

        instalacion = self.preguntarTexto(
            "Directorio donde se almacenarán las bases de datos:",
            instalacionDefecto
        )

        instalacion = self.normalizarRuta(instalacion)

        print()

        tamanoRegistro = self.preguntarEntero(
            "Tamaño fijo de cada registro, en bytes:",
            tamanoDefecto
        )

        configuracion = {
            "instalacion": instalacion,
            "tamanoRegistro": tamanoRegistro
        }

        self.mostrarConfiguracion(configuracion)

        if not self.preguntaSiNo(
            "¿Guardar esta configuración?",
            True
        ):
            self.aviso("Configuración cancelada.")
            return None

        return configuracion


    def guardarConfiguracion(self, configuracion):
        try:
            temporal = self.archivoConfiguracion + ".tmp"

            archivo = open(
                temporal,
                "w",
                encoding="utf-8"
            )

            json.dump(
                configuracion,
                archivo,
                indent=2,
                ensure_ascii=False
            )

            archivo.write("\n")
            archivo.close()

            os.replace(
                temporal,
                self.archivoConfiguracion
            )

            self.exito("config.json guardado correctamente.")
            return True

        except Exception as error:
            self.error("No se ha podido guardar config.json.")
            self.error(str(error))
            return False


    def crearDirectorioDatos(self, configuracion):
        try:
            ruta = configuracion["instalacion"]

            if os.path.isdir(ruta):
                self.exito(
                    "El directorio de datos ya existe: " + ruta
                )
                return True

            self.info(
                "El directorio de datos todavía no existe: " + ruta
            )

            if not self.preguntaSiNo(
                "¿Quieres crearlo ahora?",
                True
            ):
                self.aviso(
                    "No se ha creado el directorio de datos."
                )
                return True

            os.makedirs(
                ruta,
                exist_ok=True
            )

            self.exito(
                "Directorio creado: " + ruta
            )

            return True

        except PermissionError:
            self.error(
                "No hay permisos para crear el directorio."
            )

            if os.name != "nt":
                self.info(
                    "Prueba a ejecutar el instalador con sudo:"
                )
                print(
                    "\n     "
                    + Colores.NEGRITA
                    + "sudo python3 instalar.py"
                    + Colores.RESET
                )

            return False

        except Exception as error:
            self.error(
                "No se ha podido crear el directorio de datos."
            )
            self.error(str(error))
            return False


    def comprobarBiblioteca(self):
        ruta = os.path.join(
            self.directorioInstalador,
            "JocarsaBBDD.py"
        )

        if os.path.isfile(ruta):
            self.exito("Biblioteca JocarsaBBDD.py encontrada.")
            return True

        self.error(
            "No se encuentra JocarsaBBDD.py junto al instalador."
        )
        return False


    def pausa(self):
        print()
        input(
            "  "
            + Colores.SUAVE
            + "Pulsa ENTER para finalizar..."
            + Colores.RESET
        )


    def ejecutar(self):
        try:
            self.titulo()

            self.info(
                "Directorio del instalador: "
                + self.directorioInstalador
            )

            print()
            self.linea()

            if not self.comprobarBiblioteca():
                self.pausa()
                return

            print()

            if os.path.isfile(self.archivoConfiguracion):

                self.aviso(
                    "Se ha encontrado un archivo config.json existente."
                )

                configuracionActual = self.cargarConfiguracionActual()

                if configuracionActual:
                    self.mostrarConfiguracion(
                        configuracionActual
                    )

                sobrescribir = self.preguntaSiNo(
                    "¿Quieres sobrescribir config.json?",
                    False
                )

                if sobrescribir:

                    configuracion = self.crearConfiguracion(
                        configuracionActual
                    )

                    if configuracion is None:
                        self.pausa()
                        return

                    if not self.guardarConfiguracion(
                        configuracion
                    ):
                        self.pausa()
                        return

                else:

                    self.exito(
                        "Se conserva el config.json existente."
                    )

                    configuracion = configuracionActual

                    if not configuracion:
                        self.error(
                            "El archivo existente no contiene "
                            "una configuración válida."
                        )
                        self.pausa()
                        return

            else:

                self.aviso(
                    "No existe config.json."
                )

                self.info(
                    "Se creará una nueva configuración."
                )

                configuracion = self.crearConfiguracion()

                if configuracion is None:
                    self.pausa()
                    return

                if not self.guardarConfiguracion(
                    configuracion
                ):
                    self.pausa()
                    return

            print()
            self.linea()

            if not self.crearDirectorioDatos(
                configuracion
            ):
                self.pausa()
                return

            print()
            self.linea("═")
            print()

            self.centrar(
                "✔ INSTALACIÓN COMPLETADA",
                Colores.NEGRITA + Colores.VERDE
            )

            print()

            self.centrar(
                "JocarsaBBDD está preparada para utilizarse.",
                Colores.BLANCO
            )

            print()
            self.linea("═")

            self.pausa()

        except KeyboardInterrupt:
            print()
            print()
            self.aviso(
                "Instalación cancelada por el usuario."
            )

        except Exception as error:
            print()
            self.error(
                "Se ha producido un error durante la instalación:"
            )
            self.error(str(error))


if __name__ == "__main__":
    instalador = InstaladorJocarsaBBDD()
    instalador.ejecutar()

```
**pruebas_andrei_bbdd.py**
```python
import os
import shutil
import tempfile
from contextlib import redirect_stdout
from io import StringIO

# Ajusta este import al nombre real del archivo que contiene las clases.
# Ejemplo: from andrei_bbdd import AndreiSerializador, AndreiBBDD
try:
  from AndreiBBDD import AndreiSerializador, AndreiBBDD
except Exception as error:
  print("Se ha producido un error al importar las clases:")
  print(error)
  print("Edita la línea 'from andrei_bbdd import ...' con el nombre de tu módulo.")
  raise


class PruebasAndreiBBDD:
  def __init__(self):
    self.correctas = 0
    self.incorrectas = 0
    self.directorio = tempfile.mkdtemp(prefix="andrei-bbdd-pruebas-")+"/"

  def comprobar(self,nombre,condicion):
    try:
      assert condicion, "La condición de la prueba no se ha cumplido"
      self.correctas += 1
      print("[OK] "+nombre)
    except Exception as error:
      self.incorrectas += 1
      print("[ERROR] "+nombre)
      print(error)

  def captura(self,funcion,*argumentos):
    salida = StringIO()
    try:
      with redirect_stdout(salida):
        resultado = funcion(*argumentos)
      return resultado,salida.getvalue()
    except Exception as error:
      print("Se ha producido un error al capturar la salida:")
      print(error)
      return None,salida.getvalue()

  def ejecutar(self):
    try:
      print("========================================")
      print(" PRUEBAS EXHAUSTIVAS Andrei BBDD")
      print("========================================")
      print("Directorio temporal:",self.directorio)

      serial = AndreiSerializador()

      self.comprobar(
        "serializar lista",
        serial.serializar(["Jose","Valencia",48]) == "Jose,Valencia,48"
      )

      self.comprobar(
        "serializar con delimitador personalizado",
        serial.serializar(["uno","dos","tres"],"|") == "uno|dos|tres"
      )

      self.comprobar(
        "desserializar cadena",
        serial.desserializar("Jose,Valencia,48") == ["Jose","Valencia","48"]
      )

      self.comprobar(
        "desserializar con delimitador personalizado",
        serial.desserializar("uno|dos|tres","|") == ["uno","dos","tres"]
      )

      bbdd = AndreiBBDD()
      bbdd.instalacion = self.directorio

      bbdd.creaBaseDatos("empresa")
      self.comprobar(
        "crear base de datos",
        os.path.isdir(self.directorio+"empresa")
      )

      _,salida = self.captura(bbdd.creaBaseDatos,"empresa")
      self.comprobar(
        "impedir crear una base de datos duplicada",
        "ya existe" in salida
      )

      bbdd.usaBaseDatos("empresa")
      self.comprobar(
        "usar base de datos",
        bbdd.basededatos == "empresa"
      )

      bbdd2 = AndreiBBDD()
      bbdd2.instalacion = self.directorio
      _,salida = self.captura(bbdd2.usaBaseDatos,"inexistente")
      self.comprobar(
        "detectar base de datos inexistente",
        "no existe" in salida
      )

      bbdd.creaTabla("clientes","nombre,apellidos,email")
      self.comprobar(
        "crear archivo de datos",
        os.path.isfile(self.directorio+"empresa/clientes.csv")
      )
      self.comprobar(
        "crear archivo de esquema",
        os.path.isfile(self.directorio+"empresa/clientes.esquema")
      )
      self.comprobar(
        "crear archivo de índice",
        os.path.isfile(self.directorio+"empresa/clientes.idx")
      )

      self.comprobar(
        "obtener esquema",
        bbdd.obtenerEsquema("clientes") == ["id","activo","nombre","apellidos","email"]
      )

      self.comprobar(
        "siguiente id en tabla vacía",
        bbdd.siguienteId("clientes") == 1
      )

      id1 = bbdd.insertarDatos(
        "clientes",
        ["Jose Vicente","Carratala","jose@example.com"]
      )
      id2 = bbdd.insertarDatos(
        "clientes",
        ["Ana","Garcia","ana@example.com"]
      )
      id3 = bbdd.insertarDatos(
        "clientes",
        ["Luis","Lopez","luis@example.com"]
      )

      self.comprobar("insertar primer registro",id1 == 1)
      self.comprobar("insertar segundo registro",id2 == 2)
      self.comprobar("insertar tercer registro",id3 == 3)
      self.comprobar("siguiente id tras inserciones",bbdd.siguienteId("clientes") == 4)

      posicion1 = bbdd.buscarPosicion("clientes",id1)
      posicion2 = bbdd.buscarPosicion("clientes",id2)
      posicion3 = bbdd.buscarPosicion("clientes",id3)

      self.comprobar("posición registro 1",posicion1 == 0)
      self.comprobar("posición registro 2",posicion2 == bbdd.tamanoRegistro)
      self.comprobar("posición registro 3",posicion3 == bbdd.tamanoRegistro*2)

      self.comprobar(
        "buscar id inexistente",
        bbdd.buscarPosicion("clientes",999999) == -1
      )

      registro = bbdd.leerRegistro("clientes",id1)
      self.comprobar(
        "leer registro",
        registro == ["1","1","Jose Vicente","Carratala","jose@example.com"]
      )

      cliente = bbdd.seleccionar("clientes",id1)
      self.comprobar(
        "seleccionar devuelve diccionario",
        cliente == {
          "id":"1",
          "activo":"1",
          "nombre":"Jose Vicente",
          "apellidos":"Carratala",
          "email":"jose@example.com"
        }
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar("listarTodo incluye Jose","Jose Vicente" in salida)
      self.comprobar("listarTodo incluye Ana","Ana" in salida)
      self.comprobar("listarTodo incluye Luis","Luis" in salida)

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Ana")
      self.comprobar(
        "buscar por columna",
        "Ana" in salida and "ana@example.com" in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","columna_inexistente","Ana")
      self.comprobar(
        "detectar columna inexistente",
        "no existe" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_antes = bbdd.buscarPosicion("clientes",id2)

      bbdd.actualizar(
        "clientes",
        id2,
        ["Ana Maria","Garcia Perez","anamaria@example.com"]
      )

      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_despues = bbdd.buscarPosicion("clientes",id2)
      actualizado = bbdd.seleccionar("clientes",id2)

      self.comprobar(
        "actualizar modifica los datos",
        actualizado["nombre"] == "Ana Maria"
        and actualizado["apellidos"] == "Garcia Perez"
        and actualizado["email"] == "anamaria@example.com"
      )
      self.comprobar(
        "actualizar mantiene tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "actualizar mantiene posición física",
        posicion_antes == posicion_despues
      )

      _,salida = self.captura(
        bbdd.actualizar,
        "clientes",
        id2,
        ["solo","dos"]
      )
      self.comprobar(
        "actualización con número incorrecto de campos",
        "Se esperaban" in salida
      )

      datos_grandes = ["A"*600,"Apellido","correo@example.com"]
      resultado,salida = self.captura(bbdd.insertarDatos,"clientes",datos_grandes)
      self.comprobar(
        "impedir insertar registro mayor que el bloque",
        resultado == None and "máximo permitido" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      bbdd.eliminar("clientes",id3)
      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")

      self.comprobar(
        "eliminar es borrado lógico",
        bbdd.leerRegistro(id3 if False else "clientes",id3) == None
      )
      self.comprobar(
        "eliminar no cambia tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "registro eliminado conserva posición en índice",
        bbdd.buscarPosicion("clientes",id3) == posicion3
      )

      _,salida = self.captura(bbdd.eliminar,"clientes",id3)
      self.comprobar(
        "detectar doble eliminación",
        "ya estaba eliminado" in salida
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar(
        "listarTodo oculta eliminados",
        "Luis" not in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Luis")
      self.comprobar(
        "buscarColumna oculta eliminados",
        "{" not in salida
      )

      self.comprobar(
        "seleccionar id inexistente devuelve None",
        bbdd.seleccionar("clientes",999999) == None
      )

      bbdd3 = AndreiBBDD()
      bbdd3.instalacion = self.directorio
      _,salida = self.captura(bbdd3.creaTabla,"sinbbdd","campo")
      self.comprobar(
        "impedir crear tabla sin seleccionar BBDD",
        "No se ha seleccionado" in salida
      )

      _,salida = self.captura(bbdd.creaTabla,"clientes","campo")
      self.comprobar(
        "impedir tabla duplicada",
        "ya existe" in salida
      )

      self.comprobar(
        "esquema inexistente devuelve None",
        bbdd.obtenerEsquema("tabla_inexistente") == None
      )

      print("")
      print("========================================")
      print(" RESULTADO")
      print("========================================")
      print("Pruebas correctas:",self.correctas)
      print("Pruebas incorrectas:",self.incorrectas)
      print("Total:",self.correctas+self.incorrectas)

      if self.incorrectas == 0:
        print("RESULTADO FINAL: TODAS LAS PRUEBAS HAN PASADO")
      else:
        print("RESULTADO FINAL: HAY PRUEBAS QUE REVISAR")

    except Exception as error:
      print("Se ha producido un error general durante las pruebas:")
      print(error)
    finally:
      try:
        shutil.rmtree(self.directorio)
        print("Directorio temporal eliminado correctamente")
      except Exception as error:
        print("Se ha producido un error al limpiar las pruebas:")
        print(error)


if __name__ == "__main__":
  pruebas = PruebasAndreiBBDD()
  pruebas.ejecutar()

```
##### .JocarsaBBDD.py.history
###### 20260917131255443
**JocarsaBBDD.py**
```python
import os
import json


class JocarsaSerializador():

    def serializar(self, lista, delimitador=","):
        try:
            cadena = ""
            for elemento in lista:
                cadena += str(elemento) + delimitador
            cadena = cadena[:-1]
            return cadena

        except Exception as error:
            print("Se ha producido un error al serializar:")
            print(error)
            return None


    def desserializar(self, cadena, delimitador=","):
        try:
            lista = cadena.split(delimitador)
            return lista

        except Exception as error:
            print("Se ha producido un error al desserializar:")
            print(error)
            return None


class JocarsaBBDD:

    def __init__(self):
        try:
            rutaConfiguracion = os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                "config.json"
            )

            assert os.path.exists(rutaConfiguracion), \
                "No se ha encontrado el archivo de configuración: " + rutaConfiguracion

            archivo = open(rutaConfiguracion, "r", encoding="utf-8")
            configuracion = json.load(archivo)
            archivo.close()

            assert "instalacion" in configuracion, \
                "Falta la propiedad 'instalacion' en config.json"

            assert "tamanoRegistro" in configuracion, \
                "Falta la propiedad 'tamanoRegistro' en config.json"

            self.instalacion = configuracion["instalacion"]

            if not self.instalacion.endswith("/"):
                self.instalacion += "/"

            self.tamanoRegistro = int(configuracion["tamanoRegistro"])
            self.basededatos = ""

        except Exception as error:
            print("Se ha producido un error al cargar la configuración:")
            print(error)
            raise


    def creaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert not os.path.exists(ruta), \
                "La base de datos '" + nombre + "' ya existe"

            os.mkdir(ruta)

        except Exception as error:
            print("Se ha producido un error al crear la base de datos:")
            print(error)


    def usaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert os.path.exists(ruta), \
                "La base de datos '" + nombre + "' no existe"

            self.basededatos = nombre

        except Exception as error:
            print("Se ha producido un error al seleccionar la base de datos:")
            print(error)


    def creaTabla(self, nombre, esquema):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + nombre + ".csv"

            assert not os.path.exists(ruta), \
                "La tabla '" + nombre + "' ya existe"

            archivo = open(ruta, 'wb')
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".esquema",
                'w'
            )
            archivo.write("id,activo," + esquema)
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".idx",
                'w'
            )
            archivo.close()

        except Exception as error:
            print("Se ha producido un error al crear la tabla:")
            print(error)


    def obtenerEsquema(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".esquema"

            assert os.path.exists(ruta), \
                "No existe el esquema de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')
            esquema = archivo.read()
            archivo.close()

            serial = JocarsaSerializador()
            resultado = serial.desserializar(esquema)

            assert resultado != None, \
                "No se ha podido desserializar el esquema"

            return resultado

        except Exception as error:
            print("Se ha producido un error al obtener el esquema:")
            print(error)
            return None


    def siguienteId(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            ultimo = 0

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")
                    ultimo = int(partes[0])

            archivo.close()

            return ultimo + 1

        except Exception as error:
            print("Se ha producido un error al calcular el siguiente id:")
            print(error)
            return None


    def insertarDatos(self, tabla, datos):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            serial = JocarsaSerializador()

            id = self.siguienteId(tabla)

            assert id != None, \
                "No se ha podido obtener el siguiente id"

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro ocupa " + str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo = open(ruta, 'ab')

            posicion = archivo.tell()

            archivo.write(registro)
            archivo.close()

            indice = open(
                self.instalacion + self.basededatos + "/" + tabla + ".idx",
                'a'
            )

            indice.write(str(id) + "," + str(posicion) + "\n")
            indice.close()

            return id

        except Exception as error:
            print("Se ha producido un error al insertar datos:")
            print(error)
            return None


    def buscarPosicion(self, tabla, id):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")

                    if partes[0] == str(id):
                        archivo.close()
                        return int(partes[1])

            archivo.close()

            raise Exception(
                "No se ha encontrado el id "
                + str(id)
                + " en la tabla '"
                + tabla
                + "'"
            )

        except Exception as error:
            print("Se ha producido un error al buscar la posición del registro:")
            print(error)
            return -1


    def leerRegistro(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            archivo.close()

            assert registro != b"", \
                "No se han encontrado datos en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = JocarsaSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " está eliminado"

            return elementos

        except Exception as error:
            print("Se ha producido un error al leer el registro:")
            print(error)
            return None


    def seleccionar(self, tabla, id):
        try:
            registro = self.leerRegistro(tabla, id)

            assert registro != None, \
                "No se ha podido recuperar el registro"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(registro) == len(esquema), \
                "El número de campos del registro no coincide con el esquema"

            resultado = {}

            for i in range(len(esquema)):
                resultado[esquema[i]] = registro[i]

            return resultado

        except Exception as error:
            print("Se ha producido un error al seleccionar el registro:")
            print(error)
            return None


    def listarTodo(self, tabla):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = JocarsaSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > 1 and elementos[1] == "1":

                            assert len(elementos) == len(esquema), \
                                "Registro corrupto: el número de campos no coincide con el esquema"

                            resultado = {}

                            for i in range(len(esquema)):
                                resultado[esquema[i]] = elementos[i]

                            print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al listar los registros:")
            print(error)


    def buscarColumna(self, tabla, columna, valor):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert columna in esquema, \
                "La columna '" + columna + \
                "' no existe en la tabla '" + tabla + "'"

            posicionColumna = esquema.index(columna)

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = JocarsaSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > posicionColumna:

                            if (
                                elementos[1] == "1"
                                and elementos[posicionColumna] == str(valor)
                            ):

                                resultado = {}

                                for i in range(len(esquema)):
                                    resultado[esquema[i]] = elementos[i]

                                print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al buscar por columna:")
            print(error)


    def actualizar(self, tabla, id, datos):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            registroActual = self.leerRegistro(tabla, id)

            assert registroActual != None, \
                "El registro no existe o está eliminado"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(datos) == len(esquema) - 2, \
                "Se esperaban " + str(len(esquema) - 2) + \
                " campos y se han recibido " + str(len(datos))

            serial = JocarsaSerializador()

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro actualizado"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro actualizado ocupa " + \
                str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al actualizar el registro:")
            print(error)


    def eliminar(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            assert registro != b"", \
                "No existe ningún registro en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = JocarsaSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " ya estaba eliminado"

            elementos[1] = "0"

            cadena = serial.serializar(elementos)

            datosRegistro = cadena.encode("utf-8")

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al eliminar el registro:")
            print(error)

```
##### .terminal
#### 004-con configuracion
**AndreiBBDD.py**
```python
import os
import json


class JocarsaSerializador():

    def serializar(self, lista, delimitador=","):
        try:
            cadena = ""
            for elemento in lista:
                cadena += str(elemento) + delimitador
            cadena = cadena[:-1]
            return cadena

        except Exception as error:
            print("Se ha producido un error al serializar:")
            print(error)
            return None


    def desserializar(self, cadena, delimitador=","):
        try:
            lista = cadena.split(delimitador)
            return lista

        except Exception as error:
            print("Se ha producido un error al desserializar:")
            print(error)
            return None


class JocarsaBBDD:

    def __init__(self):
        try:
            rutaConfiguracion = os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                "config.json"
            )

            assert os.path.exists(rutaConfiguracion), \
                "No se ha encontrado el archivo de configuración: " + rutaConfiguracion

            archivo = open(rutaConfiguracion, "r", encoding="utf-8")
            configuracion = json.load(archivo)
            archivo.close()

            assert "instalacion" in configuracion, \
                "Falta la propiedad 'instalacion' en config.json"

            assert "tamanoRegistro" in configuracion, \
                "Falta la propiedad 'tamanoRegistro' en config.json"

            self.instalacion = configuracion["instalacion"]

            if not self.instalacion.endswith("/"):
                self.instalacion += "/"

            self.tamanoRegistro = int(configuracion["tamanoRegistro"])
            self.basededatos = ""

        except Exception as error:
            print("Se ha producido un error al cargar la configuración:")
            print(error)
            raise


    def creaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert not os.path.exists(ruta), \
                "La base de datos '" + nombre + "' ya existe"

            os.mkdir(ruta)

        except Exception as error:
            print("Se ha producido un error al crear la base de datos:")
            print(error)


    def usaBaseDatos(self, nombre):
        try:
            ruta = self.instalacion + nombre

            assert os.path.exists(ruta), \
                "La base de datos '" + nombre + "' no existe"

            self.basededatos = nombre

        except Exception as error:
            print("Se ha producido un error al seleccionar la base de datos:")
            print(error)


    def creaTabla(self, nombre, esquema):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + nombre + ".csv"

            assert not os.path.exists(ruta), \
                "La tabla '" + nombre + "' ya existe"

            archivo = open(ruta, 'wb')
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".esquema",
                'w'
            )
            archivo.write("id,activo," + esquema)
            archivo.close()

            archivo = open(
                self.instalacion + self.basededatos + "/" + nombre + ".idx",
                'w'
            )
            archivo.close()

        except Exception as error:
            print("Se ha producido un error al crear la tabla:")
            print(error)


    def obtenerEsquema(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".esquema"

            assert os.path.exists(ruta), \
                "No existe el esquema de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')
            esquema = archivo.read()
            archivo.close()

            serial = JocarsaSerializador()
            resultado = serial.desserializar(esquema)

            assert resultado != None, \
                "No se ha podido desserializar el esquema"

            return resultado

        except Exception as error:
            print("Se ha producido un error al obtener el esquema:")
            print(error)
            return None


    def siguienteId(self, tabla):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            ultimo = 0

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")
                    ultimo = int(partes[0])

            archivo.close()

            return ultimo + 1

        except Exception as error:
            print("Se ha producido un error al calcular el siguiente id:")
            print(error)
            return None


    def insertarDatos(self, tabla, datos):
        try:
            assert self.basededatos != "", \
                "No se ha seleccionado ninguna base de datos"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            serial = JocarsaSerializador()

            id = self.siguienteId(tabla)

            assert id != None, \
                "No se ha podido obtener el siguiente id"

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro ocupa " + str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo = open(ruta, 'ab')

            posicion = archivo.tell()

            archivo.write(registro)
            archivo.close()

            indice = open(
                self.instalacion + self.basededatos + "/" + tabla + ".idx",
                'a'
            )

            indice.write(str(id) + "," + str(posicion) + "\n")
            indice.close()

            return id

        except Exception as error:
            print("Se ha producido un error al insertar datos:")
            print(error)
            return None


    def buscarPosicion(self, tabla, id):
        try:
            ruta = self.instalacion + self.basededatos + "/" + tabla + ".idx"

            assert os.path.exists(ruta), \
                "No existe el índice de la tabla '" + tabla + "'"

            archivo = open(ruta, 'r')

            for linea in archivo:
                linea = linea.strip()

                if linea != "":
                    partes = linea.split(",")

                    if partes[0] == str(id):
                        archivo.close()
                        return int(partes[1])

            archivo.close()

            raise Exception(
                "No se ha encontrado el id "
                + str(id)
                + " en la tabla '"
                + tabla
                + "'"
            )

        except Exception as error:
            print("Se ha producido un error al buscar la posición del registro:")
            print(error)
            return -1


    def leerRegistro(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            archivo.close()

            assert registro != b"", \
                "No se han encontrado datos en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = JocarsaSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " está eliminado"

            return elementos

        except Exception as error:
            print("Se ha producido un error al leer el registro:")
            print(error)
            return None


    def seleccionar(self, tabla, id):
        try:
            registro = self.leerRegistro(tabla, id)

            assert registro != None, \
                "No se ha podido recuperar el registro"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(registro) == len(esquema), \
                "El número de campos del registro no coincide con el esquema"

            resultado = {}

            for i in range(len(esquema)):
                resultado[esquema[i]] = registro[i]

            return resultado

        except Exception as error:
            print("Se ha producido un error al seleccionar el registro:")
            print(error)
            return None


    def listarTodo(self, tabla):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = JocarsaSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > 1 and elementos[1] == "1":

                            assert len(elementos) == len(esquema), \
                                "Registro corrupto: el número de campos no coincide con el esquema"

                            resultado = {}

                            for i in range(len(esquema)):
                                resultado[esquema[i]] = elementos[i]

                            print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al listar los registros:")
            print(error)


    def buscarColumna(self, tabla, columna, valor):
        try:
            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert columna in esquema, \
                "La columna '" + columna + \
                "' no existe en la tabla '" + tabla + "'"

            posicionColumna = esquema.index(columna)

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'rb')

            serial = JocarsaSerializador()

            while True:

                registro = archivo.read(self.tamanoRegistro)

                if registro == b"":
                    break

                cadena = registro.decode("utf-8").rstrip("\n").rstrip()

                if cadena != "":

                    elementos = serial.desserializar(cadena)

                    if elementos != None:

                        if len(elementos) > posicionColumna:

                            if (
                                elementos[1] == "1"
                                and elementos[posicionColumna] == str(valor)
                            ):

                                resultado = {}

                                for i in range(len(esquema)):
                                    resultado[esquema[i]] = elementos[i]

                                print(resultado)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al buscar por columna:")
            print(error)


    def actualizar(self, tabla, id, datos):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            registroActual = self.leerRegistro(tabla, id)

            assert registroActual != None, \
                "El registro no existe o está eliminado"

            esquema = self.obtenerEsquema(tabla)

            assert esquema != None, \
                "No se ha podido obtener el esquema"

            assert len(datos) == len(esquema) - 2, \
                "Se esperaban " + str(len(esquema) - 2) + \
                " campos y se han recibido " + str(len(datos))

            serial = JocarsaSerializador()

            elementos = [id, 1] + datos

            cadena = serial.serializar(elementos)

            assert cadena != None, \
                "No se ha podido serializar el registro actualizado"

            datosRegistro = cadena.encode("utf-8")

            assert len(datosRegistro) <= self.tamanoRegistro - 1, \
                "El registro actualizado ocupa " + \
                str(len(datosRegistro)) + \
                " bytes y el máximo permitido es " + \
                str(self.tamanoRegistro - 1)

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al actualizar el registro:")
            print(error)


    def eliminar(self, tabla, id):
        try:
            posicion = self.buscarPosicion(tabla, id)

            assert posicion != -1, \
                "No se ha podido localizar el registro"

            ruta = self.instalacion + self.basededatos + "/" + tabla + ".csv"

            assert os.path.exists(ruta), \
                "La tabla '" + tabla + "' no existe"

            archivo = open(ruta, 'r+b')

            archivo.seek(posicion)

            registro = archivo.read(self.tamanoRegistro)

            assert registro != b"", \
                "No existe ningún registro en la posición " + str(posicion)

            cadena = registro.decode("utf-8").rstrip("\n").rstrip()

            serial = JocarsaSerializador()

            elementos = serial.desserializar(cadena)

            assert elementos != None, \
                "No se ha podido desserializar el registro"

            assert len(elementos) >= 2, \
                "El registro está incompleto"

            assert elementos[1] != "0", \
                "El registro con id " + str(id) + " ya estaba eliminado"

            elementos[1] = "0"

            cadena = serial.serializar(elementos)

            datosRegistro = cadena.encode("utf-8")

            registro = (
                datosRegistro
                + b" " * (self.tamanoRegistro - 1 - len(datosRegistro))
                + b"\n"
            )

            archivo.seek(posicion)

            archivo.write(registro)

            archivo.close()

        except Exception as error:
            print("Se ha producido un error al eliminar el registro:")
            print(error)

```
**DOCUMENTACION_DESARROLLADORES.md**
```markdown
# AndreiBBDD — Documentación para desarrolladores


## Resumen rápido de operaciones

| Operación | Método | Código Python |
|---|---|---|
| Crear una base de datos | `creaBaseDatos()` | `bbdd.creaBaseDatos("empresa")` |
| Seleccionar una base de datos | `usaBaseDatos()` | `bbdd.usaBaseDatos("empresa")` |
| Crear una tabla | `creaTabla()` | `bbdd.creaTabla("clientes","nombre,apellidos,email")` |
| Obtener el esquema | `obtenerEsquema()` | `esquema = bbdd.obtenerEsquema("clientes")` |
| Obtener el siguiente ID | `siguienteId()` | `id = bbdd.siguienteId("clientes")` |
| Insertar un registro | `insertarDatos()` | `id = bbdd.insertarDatos("clientes",["Andrei","Carratala","Andrei@example.com"])` |
| Buscar la posición física de un ID | `buscarPosicion()` | `posicion = bbdd.buscarPosicion("clientes",1)` |
| Leer un registro | `leerRegistro()` | `registro = bbdd.leerRegistro("clientes",1)` |
| Seleccionar un registro como diccionario | `seleccionar()` | `cliente = bbdd.seleccionar("clientes",1)` |
| Listar todos los registros activos | `listarTodo()` | `bbdd.listarTodo("clientes")` |
| Buscar por una columna | `buscarColumna()` | `bbdd.buscarColumna("clientes","nombre","Andrei")` |
| Actualizar un registro | `actualizar()` | `bbdd.actualizar("clientes",1,["Andrei","Carratala","nuevo@example.com"])` |
| Eliminar lógicamente un registro | `eliminar()` | `bbdd.eliminar("clientes",1)` |
| Serializar una lista | `serializar()` | `cadena = serial.serializar(["uno","dos","tres"])` |
| Desserializar una cadena | `desserializar()` | `lista = serial.desserializar("uno,dos,tres")` |

### Inicialización mínima

Antes de utilizar las operaciones de base de datos:

```python
from Andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()
```

Para utilizar directamente el serializador:

```python
from Andrei_bbdd import AndreiSerializador

serial = AndreiSerializador()
```

---

## 1. Descripción

`AndreiBBDD` es una implementación didáctica de un pequeño motor de almacenamiento persistente basado en archivos.

El sistema utiliza tres archivos por tabla:

```text
tabla.csv       Datos
tabla.esquema   Definición de columnas
tabla.idx       Índice id → posición física
```

Los registros tienen un tamaño fijo de **512 bytes**. Esta decisión permite acceder directamente a un registro y modificarlo sin cargar la tabla completa en memoria.

La biblioteca contiene dos clases:

```text
AndreiSerializador
AndreiBBDD
```

`AndreiSerializador` convierte listas a cadenas delimitadas y realiza la operación inversa.

`AndreiBBDD` administra bases de datos, tablas, registros e índices.

---

## 2. Configuración externa

La biblioteca utiliza un archivo `config.json` para mantener separados los parámetros de configuración y el código fuente.

Estructura esperada:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

| Propiedad | Tipo | Descripción |
|---|---|---|
| `instalacion` | cadena | Directorio raíz en el que se crean las bases de datos. |
| `tamanoRegistro` | entero | Tamaño fijo, en bytes, reservado para cada registro. |

La configuración se carga una sola vez durante la construcción de `AndreiBBDD`.

```python
bbdd = AndreiBBDD()
```

No es necesario abrir ni leer manualmente `config.json` desde el programa que utiliza la biblioteca.

### Ubicación de `config.json`

La distribución recomendada es:

```text
proyecto/
├── AndreiBBDD.py
├── config.json
└── programa.py
```

La biblioteca busca `config.json` junto al propio archivo `AndreiBBDD.py`, no junto al programa que importa la librería.

---

## 3. Arquitectura de almacenamiento

La configuración de la biblioteca está separada del código y se encuentra en el archivo:

```text
config.json
```

Configuración por defecto:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

La propiedad `instalacion` indica el directorio raíz donde se almacenan las bases de datos. La propiedad `tamanoRegistro` determina el tamaño fijo, en bytes, de cada registro.

El archivo `config.json` debe estar en el mismo directorio que `AndreiBBDD.py`. La biblioteca localiza la configuración mediante `__file__`, por lo que no depende del directorio desde el que se ejecute el programa.

Cada base de datos es un directorio:

```text
/var/Andrei-basededatos/
└── empresa/
    ├── clientes.csv
    ├── clientes.esquema
    └── clientes.idx
```

Para cambiar la ruta de almacenamiento de forma permanente, se modifica `config.json`:

```json
{
  "instalacion": "/otra/ruta/",
  "tamanoRegistro": 512
}
```

De esta forma, la configuración queda separada de la implementación de la biblioteca.

Para pruebas automatizadas sigue siendo posible sobrescribir temporalmente el atributo después de crear el objeto:

```python
bbdd = AndreiBBDD()
bbdd.instalacion = "/tmp/pruebas/"
```

Esta modificación solo afecta a esa instancia y no altera `config.json`.

---

## 3. Formato del esquema

Al crear una tabla:

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

el esquema almacenado será:

```text
id,activo,nombre,apellidos,email
```

Los campos `id` y `activo` son añadidos automáticamente por el motor.

### `id`

Identificador numérico del registro.

### `activo`

Indica si el registro está activo:

```text
1 = activo
0 = eliminado
```

El borrado es, por tanto, un **borrado lógico**.

---

## 4. Registros de tamaño fijo

Cada registro ocupa:

```python
tamanoRegistro = 512
```

bytes.

Un registro lógico como:

```text
1,1,Andrei Vicente,Carratala,Andrei@example.com
```

se codifica en UTF-8, se rellena con espacios y termina con un salto de línea hasta completar exactamente 512 bytes.

Conceptualmente:

```text
| registro 1 - 512 bytes |
| registro 2 - 512 bytes |
| registro 3 - 512 bytes |
```

Esto permite usar:

```python
archivo.seek(posicion)
```

para acceder directamente al bloque correspondiente.

La implementación evita cargar el archivo completo durante `leerRegistro`, `actualizar` y `eliminar`.

---

## 5. Índice

El archivo `.idx` relaciona cada identificador con su posición física.

Ejemplo:

```text
1,0
2,512
3,1024
```

Esto significa:

```text
id 1 → byte 0
id 2 → byte 512
id 3 → byte 1024
```

`buscarPosicion()` consulta este archivo para localizar un registro.

Actualmente el índice se recorre secuencialmente, por lo que la búsqueda en el `.idx` es O(n), aunque el acceso posterior al registro de datos es directo.

---

## 6. AndreiSerializador

### serializar(lista, delimitador=",")

Convierte una lista en una cadena.

```python
serial = AndreiSerializador()

cadena = serial.serializar(
  ["Andrei","Valencia",48]
)
```

Resultado:

```text
Andrei,Valencia,48
```

También admite otro delimitador:

```python
serial.serializar(["uno","dos","tres"],"|")
```

Resultado:

```text
uno|dos|tres
```

### desserializar(cadena, delimitador=",")

Realiza la operación inversa:

```python
serial.desserializar(
  "Andrei,Valencia,48"
)
```

Resultado:

```python
["Andrei","Valencia","48"]
```

Todos los valores recuperados son cadenas.

---

## 7. AndreiBBDD

### Constructor

```python
bbdd = AndreiBBDD()
```

Al construir el objeto, `AndreiBBDD` carga automáticamente `config.json`.

Conceptualmente:

```python
bbdd = AndreiBBDD()
```

produce una instancia cuyos valores configurables proceden de:

```json
{
  "instalacion": "/var/Andrei-basededatos/",
  "tamanoRegistro": 512
}
```

`self.basededatos` continúa siendo estado interno de ejecución y se inicializa como una cadena vacía hasta llamar a `usaBaseDatos()`.

Si `config.json` no existe, contiene JSON inválido o no incluye las propiedades obligatorias, el constructor muestra un mensaje de depuración claro y lanza la excepción para impedir que la biblioteca continúe con una configuración incompleta.

---

## 8. creaBaseDatos(nombre)

Crea el directorio correspondiente a una base de datos.

```python
bbdd.creaBaseDatos("empresa")
```

Produce:

```text
/var/Andrei-basededatos/empresa/
```

La operación falla si la base de datos ya existe.

---

## 9. usaBaseDatos(nombre)

Selecciona la base de datos activa.

```python
bbdd.usaBaseDatos("empresa")
```

A partir de ese momento las operaciones se ejecutan sobre `empresa`.

---

## 10. creaTabla(nombre, esquema)

Crea los tres archivos necesarios para una tabla.

```python
bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)
```

Genera:

```text
clientes.csv
clientes.esquema
clientes.idx
```

El esquema interno incluye automáticamente:

```text
id,activo
```

---

## 11. obtenerEsquema(tabla)

Recupera el esquema como lista.

```python
esquema = bbdd.obtenerEsquema("clientes")
```

Resultado:

```python
[
  "id",
  "activo",
  "nombre",
  "apellidos",
  "email"
]
```

---

## 12. siguienteId(tabla)

Obtiene el próximo identificador disponible leyendo el índice.

```python
id = bbdd.siguienteId("clientes")
```

Si el último registro tiene id `3`, devuelve:

```text
4
```

Los identificadores eliminados no se reutilizan.

---

## 13. insertarDatos(tabla, datos)

Inserta un nuevo registro.

```python
id = bbdd.insertarDatos(
  "clientes",
  [
    "Andrei Vicente",
    "Carratala",
    "Andrei@example.com"
  ]
)
```

Internamente se construye:

```text
id,1,nombre,apellidos,email
```

El método:

1. calcula el siguiente id;
2. serializa los datos;
3. comprueba que caben en 511 bytes de contenido;
4. completa el bloque hasta 512 bytes;
5. añade el bloque al `.csv`;
6. añade `id,posicion` al `.idx`.

Devuelve el nuevo identificador o `None` si se produce un error.

---

## 14. buscarPosicion(tabla, id)

Busca en el índice la posición física de un registro.

```python
posicion = bbdd.buscarPosicion(
  "clientes",
  2
)
```

Puede devolver, por ejemplo:

```text
512
```

Si no encuentra el registro devuelve:

```text
-1
```

---

## 15. leerRegistro(tabla, id)

Lee directamente el bloque de 512 bytes correspondiente al identificador.

```python
registro = bbdd.leerRegistro(
  "clientes",
  1
)
```

Resultado:

```python
[
  "1",
  "1",
  "Andrei Vicente",
  "Carratala",
  "Andrei@example.com"
]
```

Un registro marcado con `activo=0` no se devuelve.

---

## 16. seleccionar(tabla, id)

Convierte un registro en un diccionario utilizando el esquema.

```python
cliente = bbdd.seleccionar(
  "clientes",
  1
)
```

Resultado:

```python
{
  "id":"1",
  "activo":"1",
  "nombre":"Andrei Vicente",
  "apellidos":"Carratala",
  "email":"Andrei@example.com"
}
```

Esta es la forma más cómoda de recuperar un registro individual.

---

## 17. listarTodo(tabla)

Recorre secuencialmente la tabla e imprime todos los registros activos.

```python
bbdd.listarTodo("clientes")
```

Los registros con:

```text
activo = 0
```

son ignorados.

Este método no carga toda la tabla en memoria: procesa un bloque de 512 bytes cada vez.

---

## 18. buscarColumna(tabla, columna, valor)

Busca registros activos cuyo campo coincida exactamente con un valor.

```python
bbdd.buscarColumna(
  "clientes",
  "nombre",
  "Ana"
)
```

La búsqueda es secuencial sobre el archivo de datos.

La columna debe existir en el esquema.

---

## 19. actualizar(tabla, id, datos)

Actualiza un registro existente **en su misma posición física**.

```python
bbdd.actualizar(
  "clientes",
  2,
  [
    "Ana Maria",
    "Garcia Perez",
    "anamaria@example.com"
  ]
)
```

El procedimiento es:

```text
buscar id en índice
        ↓
obtener posición
        ↓
leer registro actual
        ↓
crear nuevo bloque de 512 bytes
        ↓
seek(posición)
        ↓
sobrescribir únicamente ese bloque
```

No se reescribe el archivo completo y el índice no necesita modificarse.

El número de campos recibidos debe coincidir con el esquema excluyendo `id` y `activo`.

---

## 20. eliminar(tabla, id)

Realiza un borrado lógico.

```python
bbdd.eliminar(
  "clientes",
  3
)
```

No elimina físicamente el bloque.

Modifica:

```text
activo = 1
```

a:

```text
activo = 0
```

y vuelve a escribir únicamente los 512 bytes del registro.

Ventajas:

- no desplaza registros;
- no modifica posiciones;
- no obliga a reconstruir el índice;
- el coste de escritura es constante.

---

## 21. Gestión de errores

Los métodos siguen el patrón:

```python
try:
  # operación
except Exception as error:
  print("Se ha producido un error:")
  print(error)
```

También se utilizan `assert` para expresar condiciones que deben cumplirse:

```python
assert os.path.exists(ruta), "La tabla no existe"
```

Los métodos que producen un resultado suelen devolver un valor especial cuando ocurre un error:

```text
None
-1
```

dependiendo del método.

---

## 22. Ejemplo completo

```python
from Andrei_bbdd import AndreiBBDD

bbdd = AndreiBBDD()

bbdd.creaBaseDatos("empresa")
bbdd.usaBaseDatos("empresa")

bbdd.creaTabla(
  "clientes",
  "nombre,apellidos,email"
)

id = bbdd.insertarDatos(
  "clientes",
  [
    "Andrei Vicente",
    "Carratala",
    "Andrei@example.com"
  ]
)

cliente = bbdd.seleccionar(
  "clientes",
  id
)

print(cliente)

bbdd.actualizar(
  "clientes",
  id,
  [
    "Andrei Vicente",
    "Carratala Sanchis",
    "nuevo@example.com"
  ]
)

bbdd.eliminar(
  "clientes",
  id
)
```

---

## 23. Pruebas

El archivo:

```text
pruebas_Andrei_bbdd.py
```

crea una instalación temporal y comprueba, entre otras cosas:

- serialización;
- desserialización;
- creación de bases de datos;
- selección de bases de datos;
- creación de tablas;
- esquema;
- generación de ids;
- inserción;
- índice;
- lectura;
- selección;
- listado;
- búsqueda por columna;
- actualización in-place;
- borrado lógico;
- registros demasiado grandes;
- ids inexistentes;
- tablas y bases de datos inexistentes;
- duplicados;
- número incorrecto de campos.

La prueba utiliza un directorio temporal y lo elimina al finalizar, por lo que no debería afectar a `/var/Andrei-basededatos/`.

Ejecución:

```bash
python3 pruebas_Andrei_bbdd.py
```

Si el módulo principal no se llama:

```text
Andrei_bbdd.py
```

hay que modificar el `import` inicial del archivo de pruebas.

---

## 24. Complejidad y comportamiento con bases grandes

### Inserción

Los datos se añaden al final del archivo.

El registro de datos se escribe directamente, aunque `siguienteId()` recorre actualmente el índice para localizar el último id.

### Lectura por id

El índice se recorre hasta encontrar el id y después el acceso al `.csv` es directo mediante `seek()`.

### Actualización

Solo se sobrescribe un bloque de 512 bytes.

### Eliminación

Solo se sobrescribe un bloque de 512 bytes.

### Listado y búsqueda por columna

Requieren recorrer la tabla secuencialmente, pero mantienen únicamente un registro en memoria cada vez.

---

## 25. Limitaciones actuales

El diseño es deliberadamente sencillo y didáctico.

Conviene tener presentes estas limitaciones:

- el serializador no escapa delimitadores incluidos dentro de los valores;
- no existe tipado de columnas;
- no hay bloqueo para escrituras concurrentes;
- no hay transacciones;
- el índice se busca secuencialmente;
- no existe compactación de registros eliminados;
- los registros tienen un máximo fijo de 511 bytes de contenido;
- `listarTodo()` y `buscarColumna()` imprimen los resultados en lugar de devolver una colección;
- los datos recuperados por el serializador son cadenas;
- no existe todavía validación automática del número de campos durante la inserción.

Estas características son buenos puntos de extensión para futuras versiones.

---

## 26. Posibles evoluciones

Sin cambiar la filosofía general del proyecto, una evolución natural sería incorporar:

```text
validación de campos al insertar
índice cargado o indexado eficientemente
compactación/VACUUM
bloqueo de escritura
tipos de datos
índices secundarios
consultas que devuelvan generadores
escape robusto de delimitadores
metadatos de tabla
transacciones simples
```

Una mejora especialmente interesante para tablas grandes sería convertir los métodos de listado y búsqueda en **generadores Python**, manteniendo el procesamiento streaming sin acumular resultados en memoria.

```
**config.json**
```json
{
  "instalacion": "C:\\htdocs\\andrei-basededatos\\",
  "tamanoRegistro": 512
}

```
**demo_empresa.py**
```python
#!/usr/bin/env python3

from AndreiBBDD import AndreiBBDD
import os


class Colores:
  RESET = "\033[0m"
  NEGRITA = "\033[1m"
  SUAVE = "\033[2m"
  ROJO = "\033[91m"
  VERDE = "\033[92m"
  AMARILLO = "\033[93m"
  AZUL = "\033[94m"
  MAGENTA = "\033[95m"
  CYAN = "\033[96m"
  BLANCO = "\033[97m"


class AplicacionEmpresa:

  def __init__(self):
    self.bbdd = AndreiBBDD()
    self.nombreBaseDatos = "empresa_demo"
    self.ancho = 86


  def limpiar(self):
    os.system("cls" if os.name == "nt" else "clear")


  def linea(self, caracter="─"):
    print(Colores.CYAN + caracter * self.ancho + Colores.RESET)


  def centrar(self, texto, color=Colores.BLANCO):
    print(color + texto.center(self.ancho) + Colores.RESET)


  def cabecera(self, titulo, subtitulo="Aplicación empresarial CRUD"):
    self.limpiar()
    print(Colores.CYAN + "╔" + "═" * (self.ancho - 2) + "╗" + Colores.RESET)
    print(
      Colores.CYAN + "║" + Colores.RESET
      + Colores.NEGRITA + Colores.BLANCO
      + titulo.center(self.ancho - 2)
      + Colores.RESET + Colores.CYAN + "║" + Colores.RESET
    )
    print(
      Colores.CYAN + "║" + Colores.RESET
      + Colores.SUAVE
      + subtitulo.center(self.ancho - 2)
      + Colores.RESET + Colores.CYAN + "║" + Colores.RESET
    )
    print(Colores.CYAN + "╚" + "═" * (self.ancho - 2) + "╝" + Colores.RESET)
    print()


  def mensaje(self, simbolo, texto, color):
    print("  " + color + simbolo + Colores.RESET + "  " + texto)


  def exito(self, texto):
    self.mensaje("✔", texto, Colores.VERDE)


  def error(self, texto):
    self.mensaje("✘", texto, Colores.ROJO)


  def aviso(self, texto):
    self.mensaje("!", texto, Colores.AMARILLO)


  def info(self, texto):
    self.mensaje("●", texto, Colores.CYAN)


  def pausa(self):
    input("\n  " + Colores.SUAVE + "Pulsa ENTER para continuar..." + Colores.RESET)


  def pedir(self, texto, defecto=""):
    if defecto != "":
      respuesta = input(
        "  " + Colores.AMARILLO + "› " + Colores.RESET
        + texto + " "
        + Colores.SUAVE + "[" + str(defecto) + "]" + Colores.RESET
        + ": "
      ).strip()

      if respuesta == "":
        return str(defecto)

      return respuesta

    return input(
      "  " + Colores.AMARILLO + "› " + Colores.RESET + texto + ": "
    ).strip()


  def confirmar(self, texto):
    respuesta = input(
      "\n  " + Colores.AMARILLO + "? " + Colores.RESET
      + texto + " "
      + Colores.SUAVE + "[s/N]" + Colores.RESET + " "
    ).strip().lower()

    return respuesta in ["s", "si", "sí", "y", "yes"]


  def prepararBaseDatos(self):
    try:
      ruta = self.bbdd.instalacion + self.nombreBaseDatos

      if not os.path.isdir(ruta):
        self.bbdd.creaBaseDatos(self.nombreBaseDatos)

      self.bbdd.usaBaseDatos(self.nombreBaseDatos)

      rutaClientes = ruta + "/clientes.csv"

      if not os.path.isfile(rutaClientes):
        self.bbdd.creaTabla(
          "clientes",
          "nombre,apellidos,email,telefono,empresa"
        )

      rutaProductos = ruta + "/productos.csv"

      if not os.path.isfile(rutaProductos):
        self.bbdd.creaTabla(
          "productos",
          "nombre,categoria,precio,stock"
        )

    except Exception as error:
      print("Se ha producido un error preparando la base de datos:")
      print(error)
      raise


  def obtenerTodos(self, tabla):
    try:
      esquema = self.bbdd.obtenerEsquema(tabla)

      assert esquema != None, \
        "No se ha podido obtener el esquema"

      ruta = (
        self.bbdd.instalacion
        + self.bbdd.basededatos
        + "/"
        + tabla
        + ".csv"
      )

      resultados = []

      archivo = open(ruta, "rb")

      while True:
        bloque = archivo.read(self.bbdd.tamanoRegistro)

        if bloque == b"":
          break

        cadena = bloque.decode("utf-8").rstrip("\n").rstrip()

        if cadena != "":
          elementos = cadena.split(",")

          if len(elementos) == len(esquema):
            if elementos[1] == "1":
              registro = {}

              for i in range(len(esquema)):
                registro[esquema[i]] = elementos[i]

              resultados.append(registro)

      archivo.close()

      return resultados

    except Exception as error:
      self.error("No se han podido recuperar los registros.")
      print(error)
      return []


  def tabla(self, registros, columnas):
    if len(registros) == 0:
      self.aviso("No hay registros para mostrar.")
      return

    anchos = []

    for clave, titulo, ancho in columnas:
      anchos.append(ancho)

    borde = "  +"

    for ancho in anchos:
      borde += "-" * (ancho + 2) + "+"

    print(Colores.SUAVE + borde + Colores.RESET)

    cabecera = "  |"

    for i in range(len(columnas)):
      titulo = columnas[i][1]
      ancho = columnas[i][2]
      cabecera += " " + titulo[:ancho].ljust(ancho) + " |"

    print(Colores.NEGRITA + cabecera + Colores.RESET)
    print(Colores.SUAVE + borde + Colores.RESET)

    for registro in registros:
      fila = "  |"

      for clave, titulo, ancho in columnas:
        valor = str(registro.get(clave, ""))
        fila += " " + valor[:ancho].ljust(ancho) + " |"

      print(fila)

    print(Colores.SUAVE + borde + Colores.RESET)
    print(
      "\n  "
      + Colores.SUAVE
      + str(len(registros))
      + " registro(s)"
      + Colores.RESET
    )


  # ============================================================
  # CLIENTES
  # ============================================================

  def listarClientes(self):
    self.cabecera("CLIENTES", "Listado de clientes")

    clientes = self.obtenerTodos("clientes")

    self.tabla(
      clientes,
      [
        ("id", "ID", 4),
        ("nombre", "Nombre", 15),
        ("apellidos", "Apellidos", 20),
        ("email", "Email", 24),
        ("telefono", "Teléfono", 13)
      ]
    )


  def crearCliente(self):
    self.cabecera("NUEVO CLIENTE")

    nombre = self.pedir("Nombre")
    apellidos = self.pedir("Apellidos")
    email = self.pedir("Email")
    telefono = self.pedir("Teléfono")
    empresa = self.pedir("Empresa")

    if nombre == "":
      self.error("El nombre es obligatorio.")
      self.pausa()
      return

    id = self.bbdd.insertarDatos(
      "clientes",
      [nombre, apellidos, email, telefono, empresa]
    )

    if id != None:
      self.exito("Cliente creado con ID " + str(id))

    self.pausa()


  def editarCliente(self):
    self.listarClientes()

    id = self.pedir("ID del cliente que quieres editar")

    try:
      id = int(id)
    except:
      self.error("El ID debe ser numérico.")
      self.pausa()
      return

    cliente = self.bbdd.seleccionar("clientes", id)

    if cliente == None:
      self.error("No se ha encontrado el cliente.")
      self.pausa()
      return

    print()
    self.info("Deja el campo vacío para conservar el valor actual.")
    print()

    nombre = self.pedir("Nombre", cliente["nombre"])
    apellidos = self.pedir("Apellidos", cliente["apellidos"])
    email = self.pedir("Email", cliente["email"])
    telefono = self.pedir("Teléfono", cliente["telefono"])
    empresa = self.pedir("Empresa", cliente["empresa"])

    self.bbdd.actualizar(
      "clientes",
      id,
      [nombre, apellidos, email, telefono, empresa]
    )

    self.exito("Cliente actualizado.")
    self.pausa()


  def eliminarCliente(self):
    self.listarClientes()

    id = self.pedir("ID del cliente que quieres eliminar")

    try:
      id = int(id)
    except:
      self.error("El ID debe ser numérico.")
      self.pausa()
      return

    cliente = self.bbdd.seleccionar("clientes", id)

    if cliente == None:
      self.error("No se ha encontrado el cliente.")
      self.pausa()
      return

    print()
    self.info(
      "Cliente: "
      + cliente["nombre"]
      + " "
      + cliente["apellidos"]
    )

    if self.confirmar("¿Eliminar este cliente?"):
      self.bbdd.eliminar("clientes", id)
      self.exito("Cliente eliminado.")
    else:
      self.aviso("Operación cancelada.")

    self.pausa()


  def menuClientes(self):
    while True:
      self.cabecera("GESTIÓN DE CLIENTES")

      print("  " + Colores.CYAN + "[1]" + Colores.RESET + " Listar clientes")
      print("  " + Colores.CYAN + "[2]" + Colores.RESET + " Nuevo cliente")
      print("  " + Colores.CYAN + "[3]" + Colores.RESET + " Editar cliente")
      print("  " + Colores.CYAN + "[4]" + Colores.RESET + " Eliminar cliente")
      print()
      print("  " + Colores.SUAVE + "[0] Volver" + Colores.RESET)

      opcion = self.pedir("Selecciona una opción")

      if opcion == "1":
        self.listarClientes()
        self.pausa()
      elif opcion == "2":
        self.crearCliente()
      elif opcion == "3":
        self.editarCliente()
      elif opcion == "4":
        self.eliminarCliente()
      elif opcion == "0":
        break


  # ============================================================
  # PRODUCTOS
  # ============================================================

  def listarProductos(self):
    self.cabecera("PRODUCTOS", "Catálogo de productos")

    productos = self.obtenerTodos("productos")

    self.tabla(
      productos,
      [
        ("id", "ID", 4),
        ("nombre", "Producto", 28),
        ("categoria", "Categoría", 20),
        ("precio", "Precio", 12),
        ("stock", "Stock", 8)
      ]
    )


  def crearProducto(self):
    self.cabecera("NUEVO PRODUCTO")

    nombre = self.pedir("Nombre")
    categoria = self.pedir("Categoría")
    precio = self.pedir("Precio")
    stock = self.pedir("Stock")

    if nombre == "":
      self.error("El nombre es obligatorio.")
      self.pausa()
      return

    id = self.bbdd.insertarDatos(
      "productos",
      [nombre, categoria, precio, stock]
    )

    if id != None:
      self.exito("Producto creado con ID " + str(id))

    self.pausa()


  def editarProducto(self):
    self.listarProductos()

    id = self.pedir("ID del producto que quieres editar")

    try:
      id = int(id)
    except:
      self.error("El ID debe ser numérico.")
      self.pausa()
      return

    producto = self.bbdd.seleccionar("productos", id)

    if producto == None:
      self.error("No se ha encontrado el producto.")
      self.pausa()
      return

    print()
    self.info("Pulsa ENTER para conservar el valor actual.")
    print()

    nombre = self.pedir("Nombre", producto["nombre"])
    categoria = self.pedir("Categoría", producto["categoria"])
    precio = self.pedir("Precio", producto["precio"])
    stock = self.pedir("Stock", producto["stock"])

    self.bbdd.actualizar(
      "productos",
      id,
      [nombre, categoria, precio, stock]
    )

    self.exito("Producto actualizado.")
    self.pausa()


  def eliminarProducto(self):
    self.listarProductos()

    id = self.pedir("ID del producto que quieres eliminar")

    try:
      id = int(id)
    except:
      self.error("El ID debe ser numérico.")
      self.pausa()
      return

    producto = self.bbdd.seleccionar("productos", id)

    if producto == None:
      self.error("No se ha encontrado el producto.")
      self.pausa()
      return

    print()
    self.info("Producto: " + producto["nombre"])

    if self.confirmar("¿Eliminar este producto?"):
      self.bbdd.eliminar("productos", id)
      self.exito("Producto eliminado.")
    else:
      self.aviso("Operación cancelada.")

    self.pausa()


  def menuProductos(self):
    while True:
      self.cabecera("GESTIÓN DE PRODUCTOS")

      print("  " + Colores.CYAN + "[1]" + Colores.RESET + " Listar productos")
      print("  " + Colores.CYAN + "[2]" + Colores.RESET + " Nuevo producto")
      print("  " + Colores.CYAN + "[3]" + Colores.RESET + " Editar producto")
      print("  " + Colores.CYAN + "[4]" + Colores.RESET + " Eliminar producto")
      print()
      print("  " + Colores.SUAVE + "[0] Volver" + Colores.RESET)

      opcion = self.pedir("Selecciona una opción")

      if opcion == "1":
        self.listarProductos()
        self.pausa()
      elif opcion == "2":
        self.crearProducto()
      elif opcion == "3":
        self.editarProducto()
      elif opcion == "4":
        self.eliminarProducto()
      elif opcion == "0":
        break


  # ============================================================
  # DASHBOARD
  # ============================================================

  def dashboard(self):
    clientes = self.obtenerTodos("clientes")
    productos = self.obtenerTodos("productos")

    stockTotal = 0
    valorInventario = 0.0

    for producto in productos:
      try:
        stock = int(producto["stock"])
        precio = float(producto["precio"].replace(",", "."))

        stockTotal += stock
        valorInventario += stock * precio
      except:
        pass

    self.cabecera(
      "ANDREI EMPRESA",
      "Demostración empresarial utilizando AndreiBBDD"
    )

    print(
      "  ┌──────────────────────┐  "
      "┌──────────────────────┐  "
      "┌──────────────────────────────┐"
    )

    print(
      "  │ "
      + Colores.CYAN
      + "CLIENTES"
      + Colores.RESET
      + "             │  │ "
      + Colores.MAGENTA
      + "PRODUCTOS"
      + Colores.RESET
      + "            │  │ "
      + Colores.VERDE
      + "VALOR INVENTARIO"
      + Colores.RESET
      + "             │"
    )

    print(
      "  │ "
      + Colores.NEGRITA
      + str(len(clientes)).ljust(20)
      + Colores.RESET
      + " │  │ "
      + Colores.NEGRITA
      + str(len(productos)).ljust(20)
      + Colores.RESET
      + " │  │ "
      + Colores.NEGRITA
      + (("%.2f €" % valorInventario).ljust(28))
      + Colores.RESET
      + " │"
    )

    print(
      "  └──────────────────────┘  "
      "└──────────────────────┘  "
      "└──────────────────────────────┘"
    )

    print()
    print(
      "  "
      + Colores.SUAVE
      + "Unidades totales en inventario: "
      + str(stockTotal)
      + Colores.RESET
    )


  def ejecutar(self):
    try:
      self.prepararBaseDatos()

      while True:
        self.dashboard()

        print()
        self.linea()
        print()

        print(
          "  "
          + Colores.NEGRITA
          + "MENÚ PRINCIPAL"
          + Colores.RESET
        )
        print()
        print("  " + Colores.CYAN + "[1]" + Colores.RESET + " Gestión de clientes")
        print("  " + Colores.CYAN + "[2]" + Colores.RESET + " Gestión de productos")
        print("  " + Colores.CYAN + "[3]" + Colores.RESET + " Actualizar dashboard")
        print()
        print("  " + Colores.SUAVE + "[0] Salir" + Colores.RESET)

        opcion = self.pedir("Selecciona una opción")

        if opcion == "1":
          self.menuClientes()

        elif opcion == "2":
          self.menuProductos()

        elif opcion == "3":
          pass

        elif opcion == "0":
          self.cabecera("ANDREI EMPRESA")
          self.centrar(
            "Gracias por utilizar la demostración.",
            Colores.VERDE
          )
          print()
          break

        else:
          self.aviso("Opción no válida.")
          self.pausa()

    except KeyboardInterrupt:
      print()
      self.aviso("Aplicación finalizada por el usuario.")

    except Exception as error:
      print()
      self.error("Se ha producido un error general:")
      self.error(str(error))


if __name__ == "__main__":
  aplicacion = AplicacionEmpresa()
  aplicacion.ejecutar()

```
**instalar.py**
```python
#!/usr/bin/env python3

import json
import os
import shutil
import sys
import time


class Colores:
    RESET = "\033[0m"
    NEGRITA = "\033[1m"
    SUAVE = "\033[2m"

    ROJO = "\033[91m"
    VERDE = "\033[92m"
    AMARILLO = "\033[93m"
    AZUL = "\033[94m"
    MAGENTA = "\033[95m"
    CYAN = "\033[96m"
    BLANCO = "\033[97m"

    FONDO_AZUL = "\033[44m"
    FONDO_VERDE = "\033[42m"


class InstaladorAndreiBBDD:

    def __init__(self):
        self.directorioInstalador = os.path.dirname(os.path.abspath(__file__))
        self.archivoConfiguracion = os.path.join(
            self.directorioInstalador,
            "config.json"
        )
        self.ancho = 72


    def limpiar(self):
        os.system("cls" if os.name == "nt" else "clear")


    def linea(self, caracter="─"):
        print(
            Colores.CYAN
            + caracter * self.ancho
            + Colores.RESET
        )


    def centrar(self, texto, color=Colores.BLANCO):
        print(
            color
            + texto.center(self.ancho)
            + Colores.RESET
        )


    def titulo(self):
        self.limpiar()

        print(Colores.CYAN + "╔" + "═" * (self.ancho - 2) + "╗" + Colores.RESET)
        print(
            Colores.CYAN
            + "║"
            + Colores.RESET
            + (
                Colores.NEGRITA
                + Colores.BLANCO
                + "Andrei BBDD".center(self.ancho - 2)
                + Colores.RESET
            )
            + Colores.CYAN
            + "║"
            + Colores.RESET
        )
        print(
            Colores.CYAN
            + "║"
            + Colores.RESET
            + (
                Colores.SUAVE
                + "Instalador y configurador".center(self.ancho - 2)
                + Colores.RESET
            )
            + Colores.CYAN
            + "║"
            + Colores.RESET
        )
        print(Colores.CYAN + "╚" + "═" * (self.ancho - 2) + "╝" + Colores.RESET)
        print()


    def mensaje(self, simbolo, texto, color):
        print(
            "  "
            + color
            + simbolo
            + Colores.RESET
            + "  "
            + texto
        )


    def exito(self, texto):
        self.mensaje("✔", texto, Colores.VERDE)


    def aviso(self, texto):
        self.mensaje("!", texto, Colores.AMARILLO)


    def error(self, texto):
        self.mensaje("✘", texto, Colores.ROJO)


    def info(self, texto):
        self.mensaje("●", texto, Colores.CYAN)


    def preguntaSiNo(self, texto, defecto=None):
        while True:

            if defecto is True:
                opciones = "[S/n]"
            elif defecto is False:
                opciones = "[s/N]"
            else:
                opciones = "[s/n]"

            respuesta = input(
                "\n  "
                + Colores.AMARILLO
                + "?"
                + Colores.RESET
                + "  "
                + texto
                + " "
                + Colores.SUAVE
                + opciones
                + Colores.RESET
                + " "
            ).strip().lower()

            if respuesta == "" and defecto is not None:
                return defecto

            if respuesta in ["s", "si", "sí", "y", "yes"]:
                return True

            if respuesta in ["n", "no"]:
                return False

            self.aviso("Escribe 's' para sí o 'n' para no.")


    def preguntarTexto(self, texto, defecto):
        respuesta = input(
            "  "
            + Colores.AMARILLO
            + "›"
            + Colores.RESET
            + "  "
            + texto
            + "\n     "
            + Colores.SUAVE
            + "Valor por defecto: "
            + str(defecto)
            + Colores.RESET
            + "\n     > "
        ).strip()

        if respuesta == "":
            return defecto

        return respuesta


    def preguntarEntero(self, texto, defecto):
        while True:
            valor = self.preguntarTexto(texto, defecto)

            try:
                valor = int(valor)

                assert valor > 1, \
                    "El tamaño del registro debe ser mayor que 1"

                return valor

            except Exception as error:
                self.error(str(error))


    def normalizarRuta(self, ruta):
        ruta = os.path.expanduser(ruta)
        ruta = os.path.abspath(ruta)

        if not ruta.endswith(os.sep):
            ruta += os.sep

        return ruta


    def cargarConfiguracionActual(self):
        try:
            archivo = open(
                self.archivoConfiguracion,
                "r",
                encoding="utf-8"
            )
            configuracion = json.load(archivo)
            archivo.close()

            return configuracion

        except Exception as error:
            self.aviso(
                "El config.json existente no se ha podido leer correctamente."
            )
            self.error(str(error))
            return {}


    def mostrarConfiguracion(self, configuracion):
        print()
        self.linea()
        self.centrar(
            "CONFIGURACIÓN",
            Colores.NEGRITA + Colores.BLANCO
        )
        self.linea()

        instalacion = configuracion.get(
            "instalacion",
            "(sin definir)"
        )
        tamano = configuracion.get(
            "tamanoRegistro",
            "(sin definir)"
        )

        print()
        print(
            "  "
            + Colores.CYAN
            + "Directorio de datos : "
            + Colores.RESET
            + str(instalacion)
        )
        print(
            "  "
            + Colores.CYAN
            + "Tamaño de registro  : "
            + Colores.RESET
            + str(tamano)
            + " bytes"
        )
        print()


    def crearConfiguracion(self, configuracionAnterior=None):
        if configuracionAnterior is None:
            configuracionAnterior = {}

        instalacionDefecto = configuracionAnterior.get(
            "instalacion",
            "/var/andrei-basededatos/"
        )

        tamanoDefecto = configuracionAnterior.get(
            "tamanoRegistro",
            512
        )

        print()
        self.info("Vamos a configurar AndreiBBDD.")
        print()

        instalacion = self.preguntarTexto(
            "Directorio donde se almacenarán las bases de datos:",
            instalacionDefecto
        )

        instalacion = self.normalizarRuta(instalacion)

        print()

        tamanoRegistro = self.preguntarEntero(
            "Tamaño fijo de cada registro, en bytes:",
            tamanoDefecto
        )

        configuracion = {
            "instalacion": instalacion,
            "tamanoRegistro": tamanoRegistro
        }

        self.mostrarConfiguracion(configuracion)

        if not self.preguntaSiNo(
            "¿Guardar esta configuración?",
            True
        ):
            self.aviso("Configuración cancelada.")
            return None

        return configuracion


    def guardarConfiguracion(self, configuracion):
        try:
            temporal = self.archivoConfiguracion + ".tmp"

            archivo = open(
                temporal,
                "w",
                encoding="utf-8"
            )

            json.dump(
                configuracion,
                archivo,
                indent=2,
                ensure_ascii=False
            )

            archivo.write("\n")
            archivo.close()

            os.replace(
                temporal,
                self.archivoConfiguracion
            )

            self.exito("config.json guardado correctamente.")
            return True

        except Exception as error:
            self.error("No se ha podido guardar config.json.")
            self.error(str(error))
            return False


    def crearDirectorioDatos(self, configuracion):
        try:
            ruta = configuracion["instalacion"]

            if os.path.isdir(ruta):
                self.exito(
                    "El directorio de datos ya existe: " + ruta
                )
                return True

            self.info(
                "El directorio de datos todavía no existe: " + ruta
            )

            if not self.preguntaSiNo(
                "¿Quieres crearlo ahora?",
                True
            ):
                self.aviso(
                    "No se ha creado el directorio de datos."
                )
                return True

            os.makedirs(
                ruta,
                exist_ok=True
            )

            self.exito(
                "Directorio creado: " + ruta
            )

            return True

        except PermissionError:
            self.error(
                "No hay permisos para crear el directorio."
            )

            if os.name != "nt":
                self.info(
                    "Prueba a ejecutar el instalador con sudo:"
                )
                print(
                    "\n     "
                    + Colores.NEGRITA
                    + "sudo python3 instalar.py"
                    + Colores.RESET
                )

            return False

        except Exception as error:
            self.error(
                "No se ha podido crear el directorio de datos."
            )
            self.error(str(error))
            return False


    def comprobarBiblioteca(self):
        ruta = os.path.join(
            self.directorioInstalador,
            "AndreiBBDD.py"
        )

        if os.path.isfile(ruta):
            self.exito("Biblioteca AndreiBBDD.py encontrada.")
            return True

        self.error(
            "No se encuentra AndreiBBDD.py junto al instalador."
        )
        return False


    def pausa(self):
        print()
        input(
            "  "
            + Colores.SUAVE
            + "Pulsa ENTER para finalizar..."
            + Colores.RESET
        )


    def ejecutar(self):
        try:
            self.titulo()

            self.info(
                "Directorio del instalador: "
                + self.directorioInstalador
            )

            print()
            self.linea()

            if not self.comprobarBiblioteca():
                self.pausa()
                return

            print()

            if os.path.isfile(self.archivoConfiguracion):

                self.aviso(
                    "Se ha encontrado un archivo config.json existente."
                )

                configuracionActual = self.cargarConfiguracionActual()

                if configuracionActual:
                    self.mostrarConfiguracion(
                        configuracionActual
                    )

                sobrescribir = self.preguntaSiNo(
                    "¿Quieres sobrescribir config.json?",
                    False
                )

                if sobrescribir:

                    configuracion = self.crearConfiguracion(
                        configuracionActual
                    )

                    if configuracion is None:
                        self.pausa()
                        return

                    if not self.guardarConfiguracion(
                        configuracion
                    ):
                        self.pausa()
                        return

                else:

                    self.exito(
                        "Se conserva el config.json existente."
                    )

                    configuracion = configuracionActual

                    if not configuracion:
                        self.error(
                            "El archivo existente no contiene "
                            "una configuración válida."
                        )
                        self.pausa()
                        return

            else:

                self.aviso(
                    "No existe config.json."
                )

                self.info(
                    "Se creará una nueva configuración."
                )

                configuracion = self.crearConfiguracion()

                if configuracion is None:
                    self.pausa()
                    return

                if not self.guardarConfiguracion(
                    configuracion
                ):
                    self.pausa()
                    return

            print()
            self.linea()

            if not self.crearDirectorioDatos(
                configuracion
            ):
                self.pausa()
                return

            print()
            self.linea("═")
            print()

            self.centrar(
                "✔ INSTALACIÓN COMPLETADA",
                Colores.NEGRITA + Colores.VERDE
            )

            print()

            self.centrar(
                "AndreiBBDD está preparada para utilizarse.",
                Colores.BLANCO
            )

            print()
            self.linea("═")

            self.pausa()

        except KeyboardInterrupt:
            print()
            print()
            self.aviso(
                "Instalación cancelada por el usuario."
            )

        except Exception as error:
            print()
            self.error(
                "Se ha producido un error durante la instalación:"
            )
            self.error(str(error))


if __name__ == "__main__":
    instalador = InstaladorAndreiBBDD()
    instalador.ejecutar()

```
**pruebas_Andrei_bbdd.py**
```python
import os
import shutil
import tempfile
from contextlib import redirect_stdout
from io import StringIO

# Ajusta este import al nombre real del archivo que contiene las clases.
# Ejemplo: from andrei_bbdd import AndreiSerializador, AndreiBBDD
try:
  from AndreiBBDD import AndreiSerializador, AndreiBBDD
except Exception as error:
  print("Se ha producido un error al importar las clases:")
  print(error)
  print("Edita la línea 'from andrei_bbdd import ...' con el nombre de tu módulo.")
  raise


class PruebasAndreiBBDD:
  def __init__(self):
    self.correctas = 0
    self.incorrectas = 0
    self.directorio = tempfile.mkdtemp(prefix="andrei-bbdd-pruebas-")+"/"

  def comprobar(self,nombre,condicion):
    try:
      assert condicion, "La condición de la prueba no se ha cumplido"
      self.correctas += 1
      print("[OK] "+nombre)
    except Exception as error:
      self.incorrectas += 1
      print("[ERROR] "+nombre)
      print(error)

  def captura(self,funcion,*argumentos):
    salida = StringIO()
    try:
      with redirect_stdout(salida):
        resultado = funcion(*argumentos)
      return resultado,salida.getvalue()
    except Exception as error:
      print("Se ha producido un error al capturar la salida:")
      print(error)
      return None,salida.getvalue()

  def ejecutar(self):
    try:
      print("========================================")
      print(" PRUEBAS EXHAUSTIVAS ANDREI BBDD")
      print("========================================")
      print("Directorio temporal:",self.directorio)

      serial = AndreiSerializador()

      self.comprobar(
        "serializar lista",
        serial.serializar(["Jose","Valencia",48]) == "Jose,Valencia,48"
      )

      self.comprobar(
        "serializar con delimitador personalizado",
        serial.serializar(["uno","dos","tres"],"|") == "uno|dos|tres"
      )

      self.comprobar(
        "desserializar cadena",
        serial.desserializar("Jose,Valencia,48") == ["Jose","Valencia","48"]
      )

      self.comprobar(
        "desserializar con delimitador personalizado",
        serial.desserializar("uno|dos|tres","|") == ["uno","dos","tres"]
      )

      bbdd = AndreiBBDD()
      bbdd.instalacion = self.directorio

      bbdd.creaBaseDatos("empresa")
      self.comprobar(
        "crear base de datos",
        os.path.isdir(self.directorio+"empresa")
      )

      _,salida = self.captura(bbdd.creaBaseDatos,"empresa")
      self.comprobar(
        "impedir crear una base de datos duplicada",
        "ya existe" in salida
      )

      bbdd.usaBaseDatos("empresa")
      self.comprobar(
        "usar base de datos",
        bbdd.basededatos == "empresa"
      )

      bbdd2 = AndreiBBDD()
      bbdd2.instalacion = self.directorio
      _,salida = self.captura(bbdd2.usaBaseDatos,"inexistente")
      self.comprobar(
        "detectar base de datos inexistente",
        "no existe" in salida
      )

      bbdd.creaTabla("clientes","nombre,apellidos,email")
      self.comprobar(
        "crear archivo de datos",
        os.path.isfile(self.directorio+"empresa/clientes.csv")
      )
      self.comprobar(
        "crear archivo de esquema",
        os.path.isfile(self.directorio+"empresa/clientes.esquema")
      )
      self.comprobar(
        "crear archivo de índice",
        os.path.isfile(self.directorio+"empresa/clientes.idx")
      )

      self.comprobar(
        "obtener esquema",
        bbdd.obtenerEsquema("clientes") == ["id","activo","nombre","apellidos","email"]
      )

      self.comprobar(
        "siguiente id en tabla vacía",
        bbdd.siguienteId("clientes") == 1
      )

      id1 = bbdd.insertarDatos(
        "clientes",
        ["Jose Vicente","Carratala","jose@example.com"]
      )
      id2 = bbdd.insertarDatos(
        "clientes",
        ["Ana","Garcia","ana@example.com"]
      )
      id3 = bbdd.insertarDatos(
        "clientes",
        ["Luis","Lopez","luis@example.com"]
      )

      self.comprobar("insertar primer registro",id1 == 1)
      self.comprobar("insertar segundo registro",id2 == 2)
      self.comprobar("insertar tercer registro",id3 == 3)
      self.comprobar("siguiente id tras inserciones",bbdd.siguienteId("clientes") == 4)

      posicion1 = bbdd.buscarPosicion("clientes",id1)
      posicion2 = bbdd.buscarPosicion("clientes",id2)
      posicion3 = bbdd.buscarPosicion("clientes",id3)

      self.comprobar("posición registro 1",posicion1 == 0)
      self.comprobar("posición registro 2",posicion2 == bbdd.tamanoRegistro)
      self.comprobar("posición registro 3",posicion3 == bbdd.tamanoRegistro*2)

      self.comprobar(
        "buscar id inexistente",
        bbdd.buscarPosicion("clientes",999999) == -1
      )

      registro = bbdd.leerRegistro("clientes",id1)
      self.comprobar(
        "leer registro",
        registro == ["1","1","Jose Vicente","Carratala","jose@example.com"]
      )

      cliente = bbdd.seleccionar("clientes",id1)
      self.comprobar(
        "seleccionar devuelve diccionario",
        cliente == {
          "id":"1",
          "activo":"1",
          "nombre":"Jose Vicente",
          "apellidos":"Carratala",
          "email":"jose@example.com"
        }
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar("listarTodo incluye Jose","Jose Vicente" in salida)
      self.comprobar("listarTodo incluye Ana","Ana" in salida)
      self.comprobar("listarTodo incluye Luis","Luis" in salida)

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Ana")
      self.comprobar(
        "buscar por columna",
        "Ana" in salida and "ana@example.com" in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","columna_inexistente","Ana")
      self.comprobar(
        "detectar columna inexistente",
        "no existe" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_antes = bbdd.buscarPosicion("clientes",id2)

      bbdd.actualizar(
        "clientes",
        id2,
        ["Ana Maria","Garcia Perez","anamaria@example.com"]
      )

      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")
      posicion_despues = bbdd.buscarPosicion("clientes",id2)
      actualizado = bbdd.seleccionar("clientes",id2)

      self.comprobar(
        "actualizar modifica los datos",
        actualizado["nombre"] == "Ana Maria"
        and actualizado["apellidos"] == "Garcia Perez"
        and actualizado["email"] == "anamaria@example.com"
      )
      self.comprobar(
        "actualizar mantiene tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "actualizar mantiene posición física",
        posicion_antes == posicion_despues
      )

      _,salida = self.captura(
        bbdd.actualizar,
        "clientes",
        id2,
        ["solo","dos"]
      )
      self.comprobar(
        "actualización con número incorrecto de campos",
        "Se esperaban" in salida
      )

      datos_grandes = ["A"*600,"Apellido","correo@example.com"]
      resultado,salida = self.captura(bbdd.insertarDatos,"clientes",datos_grandes)
      self.comprobar(
        "impedir insertar registro mayor que el bloque",
        resultado == None and "máximo permitido" in salida
      )

      tamano_antes = os.path.getsize(self.directorio+"empresa/clientes.csv")
      bbdd.eliminar("clientes",id3)
      tamano_despues = os.path.getsize(self.directorio+"empresa/clientes.csv")

      self.comprobar(
        "eliminar es borrado lógico",
        bbdd.leerRegistro(id3 if False else "clientes",id3) == None
      )
      self.comprobar(
        "eliminar no cambia tamaño del archivo",
        tamano_antes == tamano_despues
      )
      self.comprobar(
        "registro eliminado conserva posición en índice",
        bbdd.buscarPosicion("clientes",id3) == posicion3
      )

      _,salida = self.captura(bbdd.eliminar,"clientes",id3)
      self.comprobar(
        "detectar doble eliminación",
        "ya estaba eliminado" in salida
      )

      _,salida = self.captura(bbdd.listarTodo,"clientes")
      self.comprobar(
        "listarTodo oculta eliminados",
        "Luis" not in salida
      )

      _,salida = self.captura(bbdd.buscarColumna,"clientes","nombre","Luis")
      self.comprobar(
        "buscarColumna oculta eliminados",
        "{" not in salida
      )

      self.comprobar(
        "seleccionar id inexistente devuelve None",
        bbdd.seleccionar("clientes",999999) == None
      )

      bbdd3 = AndreiBBDD()
      bbdd3.instalacion = self.directorio
      _,salida = self.captura(bbdd3.creaTabla,"sinbbdd","campo")
      self.comprobar(
        "impedir crear tabla sin seleccionar BBDD",
        "No se ha seleccionado" in salida
      )

      _,salida = self.captura(bbdd.creaTabla,"clientes","campo")
      self.comprobar(
        "impedir tabla duplicada",
        "ya existe" in salida
      )

      self.comprobar(
        "esquema inexistente devuelve None",
        bbdd.obtenerEsquema("tabla_inexistente") == None
      )

      print("")
      print("========================================")
      print(" RESULTADO")
      print("========================================")
      print("Pruebas correctas:",self.correctas)
      print("Pruebas incorrectas:",self.incorrectas)
      print("Total:",self.correctas+self.incorrectas)

      if self.incorrectas == 0:
        print("RESULTADO FINAL: TODAS LAS PRUEBAS HAN PASADO")
      else:
        print("RESULTADO FINAL: HAY PRUEBAS QUE REVISAR")

    except Exception as error:
      print("Se ha producido un error general durante las pruebas:")
      print(error)
    finally:
      try:
        shutil.rmtree(self.directorio)
        print("Directorio temporal eliminado correctamente")
      except Exception as error:
        print("Se ha producido un error al limpiar las pruebas:")
        print(error)


if __name__ == "__main__":
  pruebas = PruebasAndreiBBDD()
  pruebas.ejecutar()

```
##### .terminal
## Proyecto
**clientes_export.json**
```json
[
  {
    "nombre": "Andrei",
    "apellidos": "Buga Mihailescu",
    "telefono": "343212213",
    "created": "2026-09-28T13:10:21.475695"
  },
  {
    "nombre": "Juan",
    "apellidos": "Magan",
    "telefono": "9874323678",
    "created": "2026-09-28T13:10:37.562223"
  },
  {
    "nombre": "Luis",
    "apellidos": "Gonzalez",
    "telefono": "543212872",
    "created": "2026-09-28T13:10:55.472278"
  },
  {
    "nombre": "Ejemplo",
    "apellidos": "Agenda",
    "telefono": "00000000",
    "created": "2026-09-28T13:11:45.813047"
  },
  {
    "nombre": "Andrei",
    "apellidos": "Buga Mihailescu",
    "telefono": "343212213",
    "created": "2026-09-28T13:10:21.475695"
  },
  {
    "nombre": "Juan",
    "apellidos": "Magan",
    "telefono": "9874323678",
    "created": "2026-09-28T13:10:37.562223"
  },
  {
    "nombre": "Luis",
    "apellidos": "Gonzalez",
    "telefono": "543212872",
    "created": "2026-09-28T13:10:55.472278"
  },
  {
    "nombre": "Ejemplo",
    "apellidos": "Agenda",
    "telefono": "00000000",
    "created": "2026-09-28T13:11:45.813047"
  },
  {
    "nombre": "Raul",
    "apellidos": "Perez",
    "telefono": "542321321",
    "created": "2026-09-28T13:14:21.746110"
  }
]
```
**proyecto.py**
```python
#!/usr/bin/env python3
'''
    Programa agenda
    (c) 2026 Andrei Buga
    Agenda de clientes con clases, manejo de ficheros, conversiones,
    gestión de excepciones y tests básicos integrados.
'''

import os
import json
from datetime import datetime

# -------------------------
# Configuración básica
# -------------------------
DATA_DIR = "datos"
DATA_FILE = "clientes.txt"  # formato interno: nombre;apellidos;telefono;created
PATH = os.path.join(DATA_DIR, DATA_FILE)


# -------------------------
# Utilidad: carpeta del script
# -------------------------
def script_dir():
    # devuelve la carpeta donde está este .py; si no está disponible, usa cwd
    try:
        return os.path.dirname(os.path.abspath(__file__)) or os.getcwd()
    except NameError:
        return os.getcwd()


# -------------------------
# Excepciones
# -------------------------
class FormatError(Exception):
    """Error en formato de fichero o datos."""
    pass


# -------------------------
# Gestión de directorios y ficheros
# -------------------------
class DirectoryManager:
    @staticmethod
    def ensure_dir(path: str) -> None:
        if not os.path.exists(path):
            try:
                os.makedirs(path, exist_ok=True)
            except OSError as e:
                raise OSError(f"No se pudo crear el directorio {path}: {e}")

    @staticmethod
    def exists(path: str) -> bool:
        return os.path.exists(path)


class FileManager:
    @staticmethod
    def read_lines(path: str):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return [ln.rstrip("\n") for ln in f.readlines()]
        except FileNotFoundError:
            return []
        except OSError as e:
            raise OSError(f"Error leyendo fichero {path}: {e}")

    @staticmethod
    def write_lines(path: str, lines):
        try:
            with open(path, "w", encoding="utf-8") as f:
                for ln in lines:
                    f.write(ln + "\n")
        except OSError as e:
            raise OSError(f"Error escribiendo fichero {path}: {e}")

    @staticmethod
    def append_line(path: str, line: str):
        try:
            with open(path, "a", encoding="utf-8") as f:
                f.write(line + "\n")
        except OSError as e:
            raise OSError(f"Error añadiendo línea a {path}: {e}")


# -------------------------
# Modelo Cliente
# -------------------------
def make_timestamp():
    return datetime.utcnow().isoformat()


def escape_field(s: str) -> str:
    return s.replace("\\", "\\\\").replace(";", "\\;").replace("\n", "\\n")


def unescape_field(s: str) -> str:
    return s.replace("\\n", "\n").replace("\\;", ";").replace("\\\\", "\\")


class Client:
    def __init__(self, nombre: str, apellidos: str, telefono: str, created: str = None):
        self.nombre = nombre
        self.apellidos = apellidos
        self.telefono = telefono
        self.created = created or make_timestamp()

    def to_line(self) -> str:
        return ";".join([
            escape_field(self.nombre),
            escape_field(self.apellidos),
            escape_field(self.telefono),
            escape_field(self.created)
        ])

    @staticmethod
    def from_line(line: str):
        parts = []
        cur = ""
        esc = False
        i = 0
        while i < len(line):
            ch = line[i]
            if esc:
                cur += ch
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == ";":
                parts.append(cur)
                cur = ""
            else:
                cur += ch
            i += 1
        parts.append(cur)
        while len(parts) < 4:
            parts.append("")
        nombre = unescape_field(parts[0])
        apellidos = unescape_field(parts[1])
        telefono = unescape_field(parts[2])
        created = unescape_field(parts[3])
        return Client(nombre=nombre, apellidos=apellidos, telefono=telefono, created=created)


# -------------------------
# Repositorio de clientes
# -------------------------
class ClientRepository:
    def __init__(self, data_dir: str = DATA_DIR, data_file: str = DATA_FILE):
        self.data_dir = data_dir
        self.data_file = data_file
        DirectoryManager.ensure_dir(self.data_dir)
        self.path = os.path.join(self.data_dir, self.data_file)
        if not os.path.exists(self.path):
            FileManager.write_lines(self.path, ["NOMBRE;APELLIDOS;TELEFONO;CREATED"])

    def _read_all(self):
        lines = FileManager.read_lines(self.path)
        if lines and lines[0].upper().startswith("NOMBRE;"):
            lines = lines[1:]
        clients = []
        for ln in lines:
            if not ln.strip():
                continue
            try:
                clients.append(Client.from_line(ln))
            except Exception:
                continue
        return clients

    def _write_all(self, clients):
        lines = ["NOMBRE;APELLIDOS;TELEFONO;CREATED"]
        for c in clients:
            lines.append(c.to_line())
        FileManager.write_lines(self.path, lines)

    def add_client(self, client: Client):
        FileManager.append_line(self.path, client.to_line())

    def list_clients(self):
        return self._read_all()

    def get_by_index(self, index: int) -> Client:
        clients = self._read_all()
        if index < 1 or index > len(clients):
            raise IndexError("Índice fuera de rango")
        return clients[index - 1]

    def update_by_index(self, index: int, new_client: Client) -> bool:
        clients = self._read_all()
        if index < 1 or index > len(clients):
            return False
        clients[index - 1] = new_client
        self._write_all(clients)
        return True

    def delete_by_index(self, index: int) -> bool:
        clients = self._read_all()
        if index < 1 or index > len(clients):
            return False
        del clients[index - 1]
        self._write_all(clients)
        return True

    def search(self, query: str):
        q = query.strip().lower()
        results = []
        for i, c in enumerate(self._read_all(), start=1):
            if q in c.nombre.lower() or q in c.apellidos.lower() or q in c.telefono.lower():
                results.append((i, c))
        return results


# -------------------------
# Conversión entre formatos (export en carpeta del script)
# -------------------------
class Converter:
    def __init__(self, repo: ClientRepository):
        self.repo = repo

    def export_csv(self, filename: str = "clientes_export.csv") -> str:
        clients = self.repo.list_clients()
        # Guardar en la misma carpeta donde está el .py
        base = script_dir()
        path = os.path.join(base, filename)
        try:
            with open(path, "w", encoding="utf-8") as f:
                f.write("nombre;apellidos;telefono;created\n")
                for c in clients:
                    line = "{};{};{};{}\n".format(
                        c.nombre.replace(";", "\\;").replace("\n", "\\n"),
                        c.apellidos.replace(";", "\\;").replace("\n", "\\n"),
                        c.telefono.replace(";", "\\;").replace("\n", "\\n"),
                        c.created
                    )
                    f.write(line)
            return path
        except OSError as e:
            raise OSError(f"Error exportando CSV: {e}")

    def import_csv(self, csv_path: str):
        if not os.path.exists(csv_path):
            raise FileNotFoundError(f"CSV no encontrado: {csv_path}")
        imported = []
        try:
            with open(csv_path, "r", encoding="utf-8") as f:
                header = f.readline()
                for line in f:
                    parts = line.rstrip("\n").split(";")
                    if len(parts) < 3:
                        continue
                    nombre = parts[0].replace("\\;", ";").replace("\\n", "\n")
                    apellidos = parts[1].replace("\\;", ";").replace("\\n", "\n")
                    telefono = parts[2].replace("\\;", ";").replace("\\n", "\n")
                    created = parts[3] if len(parts) > 3 else make_timestamp()
                    client = Client(nombre=nombre, apellidos=apellidos, telefono=telefono, created=created)
                    self.repo.add_client(client)
                    imported.append(client)
            return imported
        except OSError as e:
            raise OSError(f"Error importando CSV: {e}")

    def export_json(self, filename: str = "clientes_export.json") -> str:
        clients = self.repo.list_clients()
        base = script_dir()
        path = os.path.join(base, filename)
        try:
            with open(path, "w", encoding="utf-8") as f:
                json.dump([{
                    "nombre": c.nombre,
                    "apellidos": c.apellidos,
                    "telefono": c.telefono,
                    "created": c.created
                } for c in clients], f, ensure_ascii=False, indent=2)
            return path
        except OSError as e:
            raise OSError(f"Error exportando JSON: {e}")

    def import_json(self, json_path: str):
        if not os.path.exists(json_path):
            raise FileNotFoundError(f"JSON no encontrado: {json_path}")
        imported = []
        try:
            with open(json_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if not isinstance(data, list):
                    raise FormatError("JSON debe contener una lista de clientes")
                for item in data:
                    nombre = item.get("nombre", "")
                    apellidos = item.get("apellidos", "")
                    telefono = item.get("telefono", "")
                    created = item.get("created", make_timestamp())
                    client = Client(nombre=nombre, apellidos=apellidos, telefono=telefono, created=created)
                    self.repo.add_client(client)
                    imported.append(client)
            return imported
        except json.JSONDecodeError as e:
            raise FormatError(f"JSON mal formado: {e}")
        except OSError as e:
            raise OSError(f"Error importando JSON: {e}")


# -------------------------
# Validaciones simples
# -------------------------
def simple_validate_phone(phone: str) -> bool:
    digits = [c for c in phone if c.isdigit()]
    return len(digits) >= 6


# -------------------------
# Tests básicos (criterio g)
# -------------------------
def run_basic_tests():
    print("Ejecutando tests básicos...")
    repo = ClientRepository(data_dir="test_datos", data_file="test_clientes.txt")
    if os.path.exists(repo.path):
        os.remove(repo.path)
    c1 = Client("Ana", "García", "+34 600000000")
    c2 = Client("Luis", "Pérez", "600111222")
    repo.add_client(c1)
    repo.add_client(c2)
    clients = repo.list_clients()
    assert len(clients) == 2, "Debe haber 2 clientes"
    repo.update_by_index(1, Client("Ana", "Gómez", "600000000"))
    c = repo.get_by_index(1)
    assert c.apellidos == "Gómez", "Apellido actualizado"
    repo.delete_by_index(2)
    clients = repo.list_clients()
    assert len(clients) == 1, "Debe quedar 1 cliente"
    conv = Converter(repo)
    csvp = conv.export_csv("test_export.csv")
    assert os.path.exists(csvp), "CSV exportado"
    jsonp = conv.export_json("test_export.json")
    assert os.path.exists(jsonp), "JSON exportado"
    try:
        os.remove(repo.path)
        os.remove(os.path.join(script_dir(), "test_export.csv"))
        os.remove(os.path.join(script_dir(), "test_export.json"))
        os.rmdir(repo.data_dir)
    except Exception:
        pass
    print("Tests básicos completados correctamente.")


# -------------------------
# Interfaz de usuario (muy simple)
# -------------------------
def ensure_storage():
    DirectoryManager.ensure_dir(DATA_DIR)
    if not os.path.exists(PATH):
        FileManager.write_lines(PATH, ["NOMBRE;APELLIDOS;TELEFONO;CREATED"])


def menu():
    ensure_storage()
    repo = ClientRepository()
    conv = Converter(repo)
    TITULO = "Programa agenda"
    CREADOR = "Andrei Buga"
    print(TITULO, "por", CREADOR, "(2026)")

    while True:
        print("\nEscoge una opción")
        print("1.-Insertar")
        print("2.-Listar")
        print("3.-Actualizar")
        print("4.-Eliminar")
        print("5.-Buscar")
        print("6.-Exportar CSV (se guarda junto al .py)")
        print("7.-Exportar JSON (se guarda junto al .py)")
        print("8.-Ejecutar tests básicos")
        print("9.-Importar CSV")
        print("10.-Importar JSON")
        print("11.-Salir del programa")

        opcion = input("Por favor seleccione una opción (1-11): ").strip()
        print("Usted ha seleccionado la opción número:", opcion)

        try:
            if opcion == "1":
                nombre = input("Nombre: ").strip()
                apellidos = input("Apellidos: ").strip()
                telefono = input("Teléfono: ").strip()
                if not nombre or not apellidos:
                    print("Nombre y apellidos son obligatorios. Operación cancelada.")
                    continue
                if not simple_validate_phone(telefono):
                    print("Teléfono inválido (mínimo 6 dígitos). Operación cancelada.")
                    continue
                repo.add_client(Client(nombre, apellidos, telefono))
                print("Cliente añadido correctamente.")

            elif opcion == "2":
                clients = repo.list_clients()
                if not clients:
                    print("No hay clientes registrados.")
                else:
                    for i, c in enumerate(clients, start=1):
                        print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono} | creado: {c.created}")

            elif opcion == "3":
                clients = repo.list_clients()
                if not clients:
                    print("No hay clientes para actualizar.")
                    continue
                for i, c in enumerate(clients, start=1):
                    print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono}")
                idx = int(input("Número del cliente a actualizar: ").strip())
                if idx < 1 or idx > len(clients):
                    print("Índice fuera de rango.")
                    continue
                nombre = input("Nuevo nombre (enter para mantener): ").strip()
                apellidos = input("Nuevos apellidos (enter para mantener): ").strip()
                telefono = input("Nuevo teléfono (enter para mantener): ").strip()
                cur = clients[idx - 1]
                new_nombre = nombre if nombre else cur.nombre
                new_apellidos = apellidos if apellidos else cur.apellidos
                new_telefono = cur.telefono
                if telefono:
                    if not simple_validate_phone(telefono):
                        print("Teléfono inválido. No se actualizó el teléfono.")
                    else:
                        new_telefono = telefono
                repo.update_by_index(idx, Client(new_nombre, new_apellidos, new_telefono))
                print("Cliente actualizado.")

            elif opcion == "4":
                clients = repo.list_clients()
                if not clients:
                    print("No hay clientes para eliminar.")
                    continue
                for i, c in enumerate(clients, start=1):
                    print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono}")
                idx = int(input("Número del cliente a eliminar: ").strip())
                if repo.delete_by_index(idx):
                    print("Cliente eliminado.")
                else:
                    print("Índice inválido.")

            elif opcion == "5":
                q = input("Texto de búsqueda: ").strip()
                results = repo.search(q)
                if not results:
                    print("No se encontraron coincidencias.")
                else:
                    for i, c in results:
                        print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono} | creado: {c.created}")

            elif opcion == "6":
                p = conv.export_csv()
                print("Exportado a:", p)

            elif opcion == "7":
                p = conv.export_json()
                print("Exportado a:", p)

            elif opcion == "8":
                run_basic_tests()

            elif opcion == "9":
                path = input("Ruta al CSV a importar: ").strip()
                try:
                    imported = conv.import_csv(path)
                    print(f"Importados {len(imported)} clientes.")
                except Exception as e:
                    print("Error importando CSV:", e)

            elif opcion == "10":
                path = input("Ruta al JSON a importar: ").strip()
                try:
                    imported = conv.import_json(path)
                    print(f"Importados {len(imported)} clientes.")
                except Exception as e:
                    print("Error importando JSON:", e)

            elif opcion == "11":
                print("Saliendo del programa. Adiós.")
                break

            else:
                print("Opción no válida. Intente de nuevo.")

        except ValueError:
            print("Entrada numérica inválida.")
        except IndexError as e:
            print("Error:", e)
        except FileNotFoundError as e:
            print("Error:", e)
        except FormatError as e:
            print("Error de formato:", e)
        except OSError as e:
            print("Error de fichero:", e)
        except Exception as e:
            print("Error inesperado:", e)


if __name__ == "__main__":
    menu()

```
## Resultado de aprendizaje
**RA1-Acceso.md**
```markdown
# Reporte de proyecto

## Estructura del proyecto

```
C:\xampp\htdocs\dam2\Acceso a datos\001- Manejo de ficheros\009-Entrega
├── clientes_export.csv
├── clientes_export.json
├── ejercicio.py
└── explicacion.md
```

## Código (intercalado)

# 009-Entrega
**clientes_export.json**
```json
[
  {
    "nombre": "Andrei",
    "apellidos": "Buga Mihailescu",
    "telefono": "343212213",
    "created": "2026-09-28T13:10:21.475695"
  },
  {
    "nombre": "Juan",
    "apellidos": "Magan",
    "telefono": "9874323678",
    "created": "2026-09-28T13:10:37.562223"
  },
  {
    "nombre": "Luis",
    "apellidos": "Gonzalez",
    "telefono": "543212872",
    "created": "2026-09-28T13:10:55.472278"
  },
  {
    "nombre": "Ejemplo",
    "apellidos": "Agenda",
    "telefono": "00000000",
    "created": "2026-09-28T13:11:45.813047"
  },
  {
    "nombre": "Andrei",
    "apellidos": "Buga Mihailescu",
    "telefono": "343212213",
    "created": "2026-09-28T13:10:21.475695"
  },
  {
    "nombre": "Juan",
    "apellidos": "Magan",
    "telefono": "9874323678",
    "created": "2026-09-28T13:10:37.562223"
  },
  {
    "nombre": "Luis",
    "apellidos": "Gonzalez",
    "telefono": "543212872",
    "created": "2026-09-28T13:10:55.472278"
  },
  {
    "nombre": "Ejemplo",
    "apellidos": "Agenda",
    "telefono": "00000000",
    "created": "2026-09-28T13:11:45.813047"
  },
  {
    "nombre": "Raul",
    "apellidos": "Perez",
    "telefono": "542321321",
    "created": "2026-09-28T13:14:21.746110"
  }
]
```
**ejercicio.py**
```python
#!/usr/bin/env python3
'''
    Programa agenda
    (c) 2026 Andrei Buga
    Agenda de clientes con clases, manejo de ficheros, conversiones,
    gestión de excepciones y tests básicos integrados.
'''

import os
import json
from datetime import datetime

# -------------------------
# Configuración básica
# -------------------------
DATA_DIR = "datos"
DATA_FILE = "clientes.txt"  # formato interno: nombre;apellidos;telefono;created
PATH = os.path.join(DATA_DIR, DATA_FILE)


# -------------------------
# Utilidad: carpeta del script
# -------------------------
def script_dir():
    # devuelve la carpeta donde está este .py; si no está disponible, usa cwd
    try:
        return os.path.dirname(os.path.abspath(__file__)) or os.getcwd()
    except NameError:
        return os.getcwd()


# -------------------------
# Excepciones
# -------------------------
class FormatError(Exception):
    """Error en formato de fichero o datos."""
    pass


# -------------------------
# Gestión de directorios y ficheros
# -------------------------
class DirectoryManager:
    @staticmethod
    def ensure_dir(path: str) -> None:
        if not os.path.exists(path):
            try:
                os.makedirs(path, exist_ok=True)
            except OSError as e:
                raise OSError(f"No se pudo crear el directorio {path}: {e}")

    @staticmethod
    def exists(path: str) -> bool:
        return os.path.exists(path)


class FileManager:
    @staticmethod
    def read_lines(path: str):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return [ln.rstrip("\n") for ln in f.readlines()]
        except FileNotFoundError:
            return []
        except OSError as e:
            raise OSError(f"Error leyendo fichero {path}: {e}")

    @staticmethod
    def write_lines(path: str, lines):
        try:
            with open(path, "w", encoding="utf-8") as f:
                for ln in lines:
                    f.write(ln + "\n")
        except OSError as e:
            raise OSError(f"Error escribiendo fichero {path}: {e}")

    @staticmethod
    def append_line(path: str, line: str):
        try:
            with open(path, "a", encoding="utf-8") as f:
                f.write(line + "\n")
        except OSError as e:
            raise OSError(f"Error añadiendo línea a {path}: {e}")


# -------------------------
# Modelo Cliente
# -------------------------
def make_timestamp():
    return datetime.utcnow().isoformat()


def escape_field(s: str) -> str:
    return s.replace("\\", "\\\\").replace(";", "\\;").replace("\n", "\\n")


def unescape_field(s: str) -> str:
    return s.replace("\\n", "\n").replace("\\;", ";").replace("\\\\", "\\")


class Client:
    def __init__(self, nombre: str, apellidos: str, telefono: str, created: str = None):
        self.nombre = nombre
        self.apellidos = apellidos
        self.telefono = telefono
        self.created = created or make_timestamp()

    def to_line(self) -> str:
        return ";".join([
            escape_field(self.nombre),
            escape_field(self.apellidos),
            escape_field(self.telefono),
            escape_field(self.created)
        ])

    @staticmethod
    def from_line(line: str):
        parts = []
        cur = ""
        esc = False
        i = 0
        while i < len(line):
            ch = line[i]
            if esc:
                cur += ch
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == ";":
                parts.append(cur)
                cur = ""
            else:
                cur += ch
            i += 1
        parts.append(cur)
        while len(parts) < 4:
            parts.append("")
        nombre = unescape_field(parts[0])
        apellidos = unescape_field(parts[1])
        telefono = unescape_field(parts[2])
        created = unescape_field(parts[3])
        return Client(nombre=nombre, apellidos=apellidos, telefono=telefono, created=created)


# -------------------------
# Repositorio de clientes
# -------------------------
class ClientRepository:
    def __init__(self, data_dir: str = DATA_DIR, data_file: str = DATA_FILE):
        self.data_dir = data_dir
        self.data_file = data_file
        DirectoryManager.ensure_dir(self.data_dir)
        self.path = os.path.join(self.data_dir, self.data_file)
        if not os.path.exists(self.path):
            FileManager.write_lines(self.path, ["NOMBRE;APELLIDOS;TELEFONO;CREATED"])

    def _read_all(self):
        lines = FileManager.read_lines(self.path)
        if lines and lines[0].upper().startswith("NOMBRE;"):
            lines = lines[1:]
        clients = []
        for ln in lines:
            if not ln.strip():
                continue
            try:
                clients.append(Client.from_line(ln))
            except Exception:
                continue
        return clients

    def _write_all(self, clients):
        lines = ["NOMBRE;APELLIDOS;TELEFONO;CREATED"]
        for c in clients:
            lines.append(c.to_line())
        FileManager.write_lines(self.path, lines)

    def add_client(self, client: Client):
        FileManager.append_line(self.path, client.to_line())

    def list_clients(self):
        return self._read_all()

    def get_by_index(self, index: int) -> Client:
        clients = self._read_all()
        if index < 1 or index > len(clients):
            raise IndexError("Índice fuera de rango")
        return clients[index - 1]

    def update_by_index(self, index: int, new_client: Client) -> bool:
        clients = self._read_all()
        if index < 1 or index > len(clients):
            return False
        clients[index - 1] = new_client
        self._write_all(clients)
        return True

    def delete_by_index(self, index: int) -> bool:
        clients = self._read_all()
        if index < 1 or index > len(clients):
            return False
        del clients[index - 1]
        self._write_all(clients)
        return True

    def search(self, query: str):
        q = query.strip().lower()
        results = []
        for i, c in enumerate(self._read_all(), start=1):
            if q in c.nombre.lower() or q in c.apellidos.lower() or q in c.telefono.lower():
                results.append((i, c))
        return results


# -------------------------
# Conversión entre formatos (export en carpeta del script)
# -------------------------
class Converter:
    def __init__(self, repo: ClientRepository):
        self.repo = repo

    def export_csv(self, filename: str = "clientes_export.csv") -> str:
        clients = self.repo.list_clients()
        # Guardar en la misma carpeta donde está el .py
        base = script_dir()
        path = os.path.join(base, filename)
        try:
            with open(path, "w", encoding="utf-8") as f:
                f.write("nombre;apellidos;telefono;created\n")
                for c in clients:
                    line = "{};{};{};{}\n".format(
                        c.nombre.replace(";", "\\;").replace("\n", "\\n"),
                        c.apellidos.replace(";", "\\;").replace("\n", "\\n"),
                        c.telefono.replace(";", "\\;").replace("\n", "\\n"),
                        c.created
                    )
                    f.write(line)
            return path
        except OSError as e:
            raise OSError(f"Error exportando CSV: {e}")

    def import_csv(self, csv_path: str):
        if not os.path.exists(csv_path):
            raise FileNotFoundError(f"CSV no encontrado: {csv_path}")
        imported = []
        try:
            with open(csv_path, "r", encoding="utf-8") as f:
                header = f.readline()
                for line in f:
                    parts = line.rstrip("\n").split(";")
                    if len(parts) < 3:
                        continue
                    nombre = parts[0].replace("\\;", ";").replace("\\n", "\n")
                    apellidos = parts[1].replace("\\;", ";").replace("\\n", "\n")
                    telefono = parts[2].replace("\\;", ";").replace("\\n", "\n")
                    created = parts[3] if len(parts) > 3 else make_timestamp()
                    client = Client(nombre=nombre, apellidos=apellidos, telefono=telefono, created=created)
                    self.repo.add_client(client)
                    imported.append(client)
            return imported
        except OSError as e:
            raise OSError(f"Error importando CSV: {e}")

    def export_json(self, filename: str = "clientes_export.json") -> str:
        clients = self.repo.list_clients()
        base = script_dir()
        path = os.path.join(base, filename)
        try:
            with open(path, "w", encoding="utf-8") as f:
                json.dump([{
                    "nombre": c.nombre,
                    "apellidos": c.apellidos,
                    "telefono": c.telefono,
                    "created": c.created
                } for c in clients], f, ensure_ascii=False, indent=2)
            return path
        except OSError as e:
            raise OSError(f"Error exportando JSON: {e}")

    def import_json(self, json_path: str):
        if not os.path.exists(json_path):
            raise FileNotFoundError(f"JSON no encontrado: {json_path}")
        imported = []
        try:
            with open(json_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if not isinstance(data, list):
                    raise FormatError("JSON debe contener una lista de clientes")
                for item in data:
                    nombre = item.get("nombre", "")
                    apellidos = item.get("apellidos", "")
                    telefono = item.get("telefono", "")
                    created = item.get("created", make_timestamp())
                    client = Client(nombre=nombre, apellidos=apellidos, telefono=telefono, created=created)
                    self.repo.add_client(client)
                    imported.append(client)
            return imported
        except json.JSONDecodeError as e:
            raise FormatError(f"JSON mal formado: {e}")
        except OSError as e:
            raise OSError(f"Error importando JSON: {e}")


# -------------------------
# Validaciones simples
# -------------------------
def simple_validate_phone(phone: str) -> bool:
    digits = [c for c in phone if c.isdigit()]
    return len(digits) >= 6


# -------------------------
# Tests básicos (criterio g)
# -------------------------
def run_basic_tests():
    print("Ejecutando tests básicos...")
    repo = ClientRepository(data_dir="test_datos", data_file="test_clientes.txt")
    if os.path.exists(repo.path):
        os.remove(repo.path)
    c1 = Client("Ana", "García", "+34 600000000")
    c2 = Client("Luis", "Pérez", "600111222")
    repo.add_client(c1)
    repo.add_client(c2)
    clients = repo.list_clients()
    assert len(clients) == 2, "Debe haber 2 clientes"
    repo.update_by_index(1, Client("Ana", "Gómez", "600000000"))
    c = repo.get_by_index(1)
    assert c.apellidos == "Gómez", "Apellido actualizado"
    repo.delete_by_index(2)
    clients = repo.list_clients()
    assert len(clients) == 1, "Debe quedar 1 cliente"
    conv = Converter(repo)
    csvp = conv.export_csv("test_export.csv")
    assert os.path.exists(csvp), "CSV exportado"
    jsonp = conv.export_json("test_export.json")
    assert os.path.exists(jsonp), "JSON exportado"
    try:
        os.remove(repo.path)
        os.remove(os.path.join(script_dir(), "test_export.csv"))
        os.remove(os.path.join(script_dir(), "test_export.json"))
        os.rmdir(repo.data_dir)
    except Exception:
        pass
    print("Tests básicos completados correctamente.")


# -------------------------
# Interfaz de usuario (muy simple)
# -------------------------
def ensure_storage():
    DirectoryManager.ensure_dir(DATA_DIR)
    if not os.path.exists(PATH):
        FileManager.write_lines(PATH, ["NOMBRE;APELLIDOS;TELEFONO;CREATED"])


def menu():
    ensure_storage()
    repo = ClientRepository()
    conv = Converter(repo)
    TITULO = "Programa agenda"
    CREADOR = "Andrei Buga"
    print(TITULO, "por", CREADOR, "(2026)")

    while True:
        print("\nEscoge una opción")
        print("1.-Insertar")
        print("2.-Listar")
        print("3.-Actualizar")
        print("4.-Eliminar")
        print("5.-Buscar")
        print("6.-Exportar CSV (se guarda junto al .py)")
        print("7.-Exportar JSON (se guarda junto al .py)")
        print("8.-Ejecutar tests básicos")
        print("9.-Importar CSV")
        print("10.-Importar JSON")
        print("11.-Salir del programa")

        opcion = input("Por favor seleccione una opción (1-11): ").strip()
        print("Usted ha seleccionado la opción número:", opcion)

        try:
            if opcion == "1":
                nombre = input("Nombre: ").strip()
                apellidos = input("Apellidos: ").strip()
                telefono = input("Teléfono: ").strip()
                if not nombre or not apellidos:
                    print("Nombre y apellidos son obligatorios. Operación cancelada.")
                    continue
                if not simple_validate_phone(telefono):
                    print("Teléfono inválido (mínimo 6 dígitos). Operación cancelada.")
                    continue
                repo.add_client(Client(nombre, apellidos, telefono))
                print("Cliente añadido correctamente.")

            elif opcion == "2":
                clients = repo.list_clients()
                if not clients:
                    print("No hay clientes registrados.")
                else:
                    for i, c in enumerate(clients, start=1):
                        print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono} | creado: {c.created}")

            elif opcion == "3":
                clients = repo.list_clients()
                if not clients:
                    print("No hay clientes para actualizar.")
                    continue
                for i, c in enumerate(clients, start=1):
                    print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono}")
                idx = int(input("Número del cliente a actualizar: ").strip())
                if idx < 1 or idx > len(clients):
                    print("Índice fuera de rango.")
                    continue
                nombre = input("Nuevo nombre (enter para mantener): ").strip()
                apellidos = input("Nuevos apellidos (enter para mantener): ").strip()
                telefono = input("Nuevo teléfono (enter para mantener): ").strip()
                cur = clients[idx - 1]
                new_nombre = nombre if nombre else cur.nombre
                new_apellidos = apellidos if apellidos else cur.apellidos
                new_telefono = cur.telefono
                if telefono:
                    if not simple_validate_phone(telefono):
                        print("Teléfono inválido. No se actualizó el teléfono.")
                    else:
                        new_telefono = telefono
                repo.update_by_index(idx, Client(new_nombre, new_apellidos, new_telefono))
                print("Cliente actualizado.")

            elif opcion == "4":
                clients = repo.list_clients()
                if not clients:
                    print("No hay clientes para eliminar.")
                    continue
                for i, c in enumerate(clients, start=1):
                    print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono}")
                idx = int(input("Número del cliente a eliminar: ").strip())
                if repo.delete_by_index(idx):
                    print("Cliente eliminado.")
                else:
                    print("Índice inválido.")

            elif opcion == "5":
                q = input("Texto de búsqueda: ").strip()
                results = repo.search(q)
                if not results:
                    print("No se encontraron coincidencias.")
                else:
                    for i, c in results:
                        print(f"{i}. {c.nombre} {c.apellidos} | {c.telefono} | creado: {c.created}")

            elif opcion == "6":
                p = conv.export_csv()
                print("Exportado a:", p)

            elif opcion == "7":
                p = conv.export_json()
                print("Exportado a:", p)

            elif opcion == "8":
                run_basic_tests()

            elif opcion == "9":
                path = input("Ruta al CSV a importar: ").strip()
                try:
                    imported = conv.import_csv(path)
                    print(f"Importados {len(imported)} clientes.")
                except Exception as e:
                    print("Error importando CSV:", e)

            elif opcion == "10":
                path = input("Ruta al JSON a importar: ").strip()
                try:
                    imported = conv.import_json(path)
                    print(f"Importados {len(imported)} clientes.")
                except Exception as e:
                    print("Error importando JSON:", e)

            elif opcion == "11":
                print("Saliendo del programa. Adiós.")
                break

            else:
                print("Opción no válida. Intente de nuevo.")

        except ValueError:
            print("Entrada numérica inválida.")
        except IndexError as e:
            print("Error:", e)
        except FileNotFoundError as e:
            print("Error:", e)
        except FormatError as e:
            print("Error de formato:", e)
        except OSError as e:
            print("Error de fichero:", e)
        except Exception as e:
            print("Error inesperado:", e)


if __name__ == "__main__":
    menu()

```
**explicacion.md**
```markdown
A- Se han utilizado clases para la gestión de ficheros y directorios.

DirectoryManager y FileManager encapsulan creación de carpetas, lectura/escritura y append, centralizando la lógica de I/O y facilitando mantenimiento y pruebas.

B- Se han valorado las ventajas y los inconvenientes de las distintas formas de acceso.

Ventajas: acceso secuencial (muy simple y bajo consumo de memoria), CSV (fácil intercambio con hojas de cálculo), JSON (estructura clara y mapeo directo a objetos).

Inconvenientes: acceso secuencial (búsqueda y acceso directo lentos), CSV (requiere escaping y reescritura para editar), JSON (carga toda la colección en memoria, menos eficiente con muchos registros).

C- Se han utilizado clases para recuperar información almacenada en ficheros.

ClientRepository y Client.from_line leen y parsean líneas escapadas, convierten registros en objetos Client y permiten listar, acceder por índice y buscar.

D- Se han utilizado clases para almacenar información en ficheros.

ClientRepository y FileManager serializan Client a líneas escapadas y escriben/reescriben el fichero interno; se usa índice en lugar de IDs para mantener la implementación simple.

E- Se han utilizado clases para realizar conversiones entre diferentes formatos de ficheros.

La clase Converter implementa export_csv/import_csv y export_json/import_json, transformando entre la representación interna, CSV y JSON; los export se guardan junto al script para fácil localización.

F- Se han previsto y gestionado las excepciones.

Se capturan y envuelven errores de I/O y formato (p. ej. OSError, FileNotFoundError, FormatError), y el menú atrapa las excepciones comunes mostrando mensajes claros sin interrumpir la ejecución.

G- Se han probado y documentado las aplicaciones desarrolladas.

run_basic_tests automatiza añadir, listar, actualizar, borrar y exportar/importar con assert; el código incluye encabezado, comentarios y mensajes de uso; se sugiere migrar a unittest y añadir un README para pruebas formales.
```
```