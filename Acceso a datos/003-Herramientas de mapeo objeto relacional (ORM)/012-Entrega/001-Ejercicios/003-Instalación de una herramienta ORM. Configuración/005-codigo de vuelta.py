import json
import sqlite3
from pathlib import Path


def identificador_sql(nombre):
    return '"' + nombre.replace('"', '""') + '"'


directorio = Path(__file__).resolve().parent
nombre_de_la_base_de_datos = directorio / "curriculum2.db"
nombre_de_la_tabla = "curriculum2"
nombre_del_archivo = directorio / "curriculum2_recuperado.json"

conexion = sqlite3.connect(nombre_de_la_base_de_datos)
conexion.row_factory = sqlite3.Row
resultados = []

try:
    tablas = [
        fila["name"]
        for fila in conexion.execute(
            "SELECT name FROM sqlite_master WHERE type = 'table'"
        ).fetchall()
        if fila["name"] not in (nombre_de_la_tabla, "sqlite_sequence")
    ]

    relaciones = []
    for tabla in tablas:
        identificador_tabla = identificador_sql(tabla)
        columnas = {
            fila["name"]
            for fila in conexion.execute(
                f"PRAGMA table_info({identificador_tabla})"
            ).fetchall()
        }
        if "valor" not in columnas:
            continue

        claves_foraneas = conexion.execute(
            f"PRAGMA foreign_key_list({identificador_tabla})"
        ).fetchall()
        for clave_foranea in claves_foraneas:
            if clave_foranea["table"] == nombre_de_la_tabla:
                relaciones.append((tabla, clave_foranea["from"]))

    filas = conexion.execute(
        f"SELECT * FROM {identificador_sql(nombre_de_la_tabla)} ORDER BY id"
    ).fetchall()

    for fila in filas:
        diccionario = dict(fila)
        id_principal = diccionario.pop("id")

        for tabla, nombre_fk in relaciones:
            valores = conexion.execute(
                f"SELECT valor FROM {identificador_sql(tabla)} "
                f"WHERE {identificador_sql(nombre_fk)} = ? ORDER BY id",
                (id_principal,),
            ).fetchall()

            datos = []
            for dato in valores:
                valor = dato["valor"]
                if isinstance(valor, str) and valor[:1] in ("{", "["):
                    try:
                        valor = json.loads(valor)
                    except json.JSONDecodeError:
                        pass
                datos.append(valor)

            diccionario[tabla] = datos

        resultados.append(diccionario)
finally:
    conexion.close()

if len(resultados) == 1:
    resultado_final = resultados[0]
else:
    resultado_final = resultados

with nombre_del_archivo.open("w", encoding="utf-8") as archivo:
    json.dump(resultado_final, archivo, indent=4, ensure_ascii=False)

print(json.dumps(resultado_final, indent=4, ensure_ascii=False))
