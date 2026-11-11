from pathlib import Path
import sqlite3

# Crear/conectar a la base de datos
conexion = sqlite3.connect(Path(__file__).with_name("clientes.db"))
cursor = conexion.cursor()

# Crear tabla
cursor.execute("""
CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT,
    telefono TEXT
)
""")

# Insertar datos de demostración
clientes = [
    ("Ana García", "ana@correo.com", "600111222"),
    ("Juan López", "juan@correo.com", "600333444"),
    ("María Pérez", "maria@correo.com", "600555666"),
    ("Pedro Sánchez", "pedro@correo.com", "600777888"),
    ("Laura Gómez", "laura@correo.com", "600999000"),
]

cursor.executemany("""
INSERT INTO clientes (nombre, email, telefono)
SELECT ?, ?, ?
WHERE NOT EXISTS (
    SELECT 1 FROM clientes WHERE email = ?
)
""", [(nombre, email, telefono, email) for nombre, email, telefono in clientes])

# Guardar cambios
conexion.commit()

# Mostrar clientes
cursor.execute("SELECT * FROM clientes")

for cliente in cursor.fetchall():
    print(cliente)

# Cerrar conexión
conexion.close()