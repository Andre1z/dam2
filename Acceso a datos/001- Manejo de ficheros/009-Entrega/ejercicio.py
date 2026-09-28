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
