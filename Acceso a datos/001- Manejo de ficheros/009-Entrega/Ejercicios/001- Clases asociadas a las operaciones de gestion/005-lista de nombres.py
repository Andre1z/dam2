coches = ['Seat','Audi','BMW','Mercedes','Ferrari']

archivo = open("datos.bin","wb")
archivo.write(b''.join(map(str.encode, coches)))

archivo.close()