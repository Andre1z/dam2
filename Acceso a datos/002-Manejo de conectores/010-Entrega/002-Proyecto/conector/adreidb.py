import socket
import json


class ErrorAndreiDB(Exception):
    pass


class Cursor:

    def __init__(self, conexion):
        self.conexion = conexion
        self.resultado = None

    def execute(self, sql):
        self.resultado = self.conexion._enviar(sql)
        return self.resultado

    def fetchall(self):

        if not self.resultado:
            return []

        return self.resultado.get(
            "rows",
            []
        )

    def fetchone(self):

        filas = self.fetchall()

        if len(filas) == 0:
            return None

        return filas[0]

    def callproc(
        self,
        nombre
    ):
        return self.execute(
            f"CALL {nombre}"
        )

    def close(self):
        self.resultado = None


class Conexion:

    def __init__(
        self,
        host="127.0.0.1",
        puerto=5555
    ):
        self.host = host
        self.puerto = puerto
        self.conectado = True

    def _enviar(
        self,
        sql
    ):
        try:

            with socket.create_connection(
                (
                    self.host,
                    self.puerto
                ),
                timeout=10
            ) as cliente:

                cliente.sendall(
                    sql.encode("utf-8")
                )

                # Indica al servidor que la consulta está completa.
                cliente.shutdown(
                    socket.SHUT_WR
                )

                # La respuesta puede llegar en varios trozos:
                # se lee hasta que el servidor cierra la conexión.
                partes = []

                while True:
                    parte = cliente.recv(65536)

                    if not parte:
                        break

                    partes.append(parte)

            respuesta = b"".join(partes)

            return json.loads(
                respuesta.decode("utf-8")
            )

        except Exception as e:

            raise ErrorAndreiDB(
                str(e)
            ) from e

    def execute(
        self,
        sql
    ):
        return self._enviar(sql)

    def begin(self):
        return self.execute(
            "BEGIN"
        )

    def commit(self):
        return self.execute(
            "COMMIT"
        )

    def rollback(self):
        return self.execute(
            "ROLLBACK"
        )

    def cursor(self):
        return Cursor(self)

    def callproc(
        self,
        nombre
    ):
        return self.execute(
            f"CALL {nombre}"
        )

    def close(self):
        self.conectado = False


def connect(
    host="127.0.0.1",
    puerto=5555
):
    return Conexion(
        host,
        puerto
    )


def conectar(
    host="127.0.0.1",
    puerto=5555
):
    return connect(
        host,
        puerto
    )