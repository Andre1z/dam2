import json
import sqlite3
from pathlib import Path


def identificador_sql(nombre):
    return '"' + nombre.replace('"', '""') + '"'


directorio = Path(__file__).resolve().parent
ruta_archivo = directorio / "curriculum2.json"
nombre_de_la_tabla = ruta_archivo.stem
nombre_de_la_base_de_datos = ruta_archivo.with_suffix(".db")

with ruta_archivo.open("r", encoding="utf-8") as archivo:
    contenido_json = json.load(archivo)

if not isinstance(contenido_json, dict):
    raise TypeError("El archivo JSON debe contener un objeto.")

valores_simples = {
    clave: valor
    for clave, valor in contenido_json.items()
    if not isinstance(valor, list)
}
listas = {
    clave: valor
    for clave, valor in contenido_json.items()
    if isinstance(valor, list)
}

conexion = sqlite3.connect(nombre_de_la_base_de_datos)
conexion.row_factory = sqlite3.Row
conexion.execute("PRAGMA foreign_keys = ON")

try:
    with conexion:
        columnas_sql = ", ".join(
            f"{identificador_sql(clave)} TEXT" for clave in valores_simples
        )
        if columnas_sql:
            columnas_sql = ", " + columnas_sql

        conexion.execute(
            f"CREATE TABLE IF NOT EXISTS {identificador_sql(nombre_de_la_tabla)} "
            f"(id INTEGER PRIMARY KEY AUTOINCREMENT{columnas_sql})"
        )

        columnas_existentes = {
            fila["name"]
            for fila in conexion.execute(
                f"PRAGMA table_info({identificador_sql(nombre_de_la_tabla)})"
            ).fetchall()
        }
        for clave in valores_simples:
            if clave not in columnas_existentes:
                conexion.execute(
                    f"ALTER TABLE {identificador_sql(nombre_de_la_tabla)} "
                    f"ADD COLUMN {identificador_sql(clave)} TEXT"
                )

        tablas_existentes = conexion.execute(
            "SELECT name FROM sqlite_master WHERE type = 'table'"
        ).fetchall()
        for (tabla,) in tablas_existentes:
            if tabla in (nombre_de_la_tabla, "sqlite_sequence"):
                continue
            claves_foraneas = conexion.execute(
                f"PRAGMA foreign_key_list({identificador_sql(tabla)})"
            ).fetchall()
            depende_de_curriculum = any(
                clave_foranea["table"] == nombre_de_la_tabla
                for clave_foranea in claves_foraneas
            )
            if depende_de_curriculum and tabla not in listas:
                conexion.execute(f"DROP TABLE {identificador_sql(tabla)}")

        fila = conexion.execute(
            f"SELECT id FROM {identificador_sql(nombre_de_la_tabla)} "
            "ORDER BY id LIMIT 1"
        ).fetchone()
        if fila is None:
            columnas = list(valores_simples)
            if columnas:
                nombres_columnas = ", ".join(
                    identificador_sql(clave) for clave in columnas
                )
                marcadores = ", ".join("?" for _ in columnas)
                cursor = conexion.execute(
                    f"INSERT INTO {identificador_sql(nombre_de_la_tabla)} "
                    f"({nombres_columnas}) VALUES ({marcadores})",
                    [valores_simples[clave] for clave in columnas],
                )
            else:
                cursor = conexion.execute(
                    f"INSERT INTO {identificador_sql(nombre_de_la_tabla)} "
                    "DEFAULT VALUES"
                )
            id_principal = cursor.lastrowid
        else:
            id_principal = fila["id"]
            for clave, valor in valores_simples.items():
                conexion.execute(
                    f"UPDATE {identificador_sql(nombre_de_la_tabla)} "
                    f"SET {identificador_sql(clave)} = ? WHERE id = ?",
                    (valor, id_principal),
                )

        nombre_clave_foranea = nombre_de_la_tabla + "_id"
        for clave, valores in listas.items():
            nombre_tabla_secundaria = identificador_sql(clave)
            clave_foranea_sql = identificador_sql(nombre_clave_foranea)
            conexion.execute(
                f"CREATE TABLE IF NOT EXISTS {nombre_tabla_secundaria} ("
                "id INTEGER PRIMARY KEY AUTOINCREMENT, "
                f"{clave_foranea_sql} INTEGER, valor, "
                f"FOREIGN KEY ({clave_foranea_sql}) "
                f"REFERENCES {identificador_sql(nombre_de_la_tabla)}(id))"
            )
            conexion.execute(
                f"DELETE FROM {nombre_tabla_secundaria} "
                f"WHERE {clave_foranea_sql} = ?",
                (id_principal,),
            )

            for dato in valores:
                if isinstance(dato, (dict, list)):
                    dato = json.dumps(dato, ensure_ascii=False)
                conexion.execute(
                    f"INSERT INTO {nombre_tabla_secundaria} "
                    f"({clave_foranea_sql}, valor) VALUES (?, ?)",
                    (id_principal, dato),
                )
                print(dato)

    print("Datos guardados en:", nombre_de_la_base_de_datos)
finally:
    conexion.close()
