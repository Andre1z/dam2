
import re
import uuid
from pathlib import Path

import yaml


class GestorYAML:

    def __init__(self):
        self.carpeta = Path(__file__).resolve().parent / "datos"
        self.carpeta.mkdir(parents=True, exist_ok=True)

    @staticmethod
    def _validar_nombre(nombre):
        if not isinstance(nombre, str) or not re.fullmatch(
            r"[a-zA-Z0-9_-]+", nombre
        ):
            raise ValueError("Nombre de base de datos o colección no válido")

    def ruta(self, base_datos, coleccion):
        self._validar_nombre(base_datos)
        self._validar_nombre(coleccion)
        ruta = self.carpeta / base_datos / coleccion
        ruta.mkdir(parents=True, exist_ok=True)
        return ruta

    def guardar(self, base_datos, coleccion, objeto):
        ruta = self.ruta(base_datos, coleccion)

        # Generamos un identificador único
        identificador = str(uuid.uuid4())

        # Copiamos el objeto para no modificar el original
        documento = objeto.copy()
        documento["_id"] = identificador

        archivo = ruta / (identificador + ".yaml")

        with archivo.open("x", encoding="utf-8") as fichero:
            yaml.safe_dump(
                documento,
                fichero,
                allow_unicode=True,
                sort_keys=False
            )

        return identificador

    def listar(self, base_datos, coleccion):
        ruta = self.ruta(base_datos, coleccion)
        documentos = []

        for archivo in sorted(ruta.glob("*.yaml")):
            with archivo.open("r", encoding="utf-8") as fichero:
                documentos.append(yaml.safe_load(fichero))

        return documentos

    def buscar(self, base_datos, coleccion, identificador):
        ruta = self.ruta(base_datos, coleccion)

        try:
            identificador = str(uuid.UUID(identificador))
        except (ValueError, AttributeError, TypeError):
            return None

        archivo = ruta / (identificador + ".yaml")

        if not archivo.exists():
            return None

        with archivo.open("r", encoding="utf-8") as fichero:
            return yaml.safe_load(fichero)

    def actualizar(self, base_datos, coleccion, identificador, objeto):
        ruta = self.ruta(base_datos, coleccion)

        try:
            identificador = str(uuid.UUID(identificador))
        except (ValueError, AttributeError, TypeError):
            return False

        archivo = ruta / (identificador + ".yaml")

        if not archivo.exists():
            return False

        documento = objeto.copy()
        documento["_id"] = identificador

        # Escritura mediante archivo temporal
        temporal = archivo.with_name(archivo.name + "." + str(uuid.uuid4()) + ".tmp")

        try:
            with temporal.open("w", encoding="utf-8") as fichero:
                yaml.safe_dump(
                    documento,
                    fichero,
                    allow_unicode=True,
                    sort_keys=False
                )

            temporal.replace(archivo)
        finally:
            if temporal.exists():
                temporal.unlink()

        return True

    def eliminar(self, base_datos, coleccion, identificador):
        ruta = self.ruta(base_datos, coleccion)

        try:
            identificador = str(uuid.UUID(identificador))
        except (ValueError, AttributeError, TypeError):
            return False

        archivo = ruta / (identificador + ".yaml")

        if archivo.exists():
            archivo.unlink()
            return True

        return False

    def bases_de_datos(self):
        return sorted([
            ruta.name for ruta in self.carpeta.iterdir()
            if ruta.is_dir()
        ])

    def colecciones(self, base_datos):
        self._validar_nombre(base_datos)
        ruta = self.carpeta / base_datos
        if not ruta.is_dir():
            return []

        return sorted([
            coleccion.name for coleccion in ruta.iterdir()
            if coleccion.is_dir()
        ])
