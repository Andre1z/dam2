from pymongo import MongoClient
from pymongo.errors import ServerSelectionTimeoutError

cliente = MongoClient("mongodb://localhost:27017/", serverSelectionTimeoutMS=5000)

try:
    cliente.admin.command("ping")

    db = cliente["clientes"]
    clientes = db["clientes"]

    datos_clientes = [
        {
            "nombre": "Ana García",
            "email": "ana@correo.com",
            "telefono": "600111222"
        },
        {
            "nombre": "Juan López",
            "email": "juan@correo.com",
            "telefono": "600333444"
        },
        {
            "nombre": "María Pérez",
            "email": "maria@correo.com",
            "telefono": "600555666"
        },
        {
            "nombre": "Pedro Sánchez",
            "email": "pedro@correo.com",
            "telefono": "600777888"
        },
        {
            "nombre": "Laura Gómez",
            "email": "laura@correo.com",
            "telefono": "600999000"
        }
    ]

    for datos_cliente in datos_clientes:
        clientes.update_one(
            {"email": datos_cliente["email"]},
            {"$setOnInsert": datos_cliente},
            upsert=True
        )

    for datos_cliente in clientes.find():
        print(datos_cliente)
except ServerSelectionTimeoutError:
    print(
        "No se puede conectar con MongoDB en localhost:27017. "
        "Instala MongoDB Community Server e inicia el servicio MongoDB."
    )
    raise SystemExit(1)
finally:
    cliente.close()