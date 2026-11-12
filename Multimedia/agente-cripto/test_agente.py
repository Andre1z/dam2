
import unittest

import pandas as pd

from agente import calcular_senal


def crear_datos(precios):
    fechas = pd.date_range(
        end=pd.Timestamp.now(tz="UTC").normalize()
        - pd.Timedelta(days=1),
        periods=len(precios),
        freq="D",
    )
    return pd.DataFrame({
        "fecha": fechas,
        "close": precios,
    })


class TestSenales(unittest.TestCase):

    def test_tendencia_favorable(self):
        # Precio ascendente y media móvil creciente.
        df = crear_datos(list(range(100, 350)))
        resultado = calcular_senal(df)
        self.assertEqual(
            resultado["senal"], "TENDENCIA FAVORABLE"
        )

    def test_tendencia_debil(self):
        # Precio descendente y media móvil decreciente.
        df = crear_datos(list(range(350, 100, -1)))
        resultado = calcular_senal(df)
        self.assertEqual(
            resultado["senal"], "TENDENCIA DEBIL"
        )

    def test_datos_insuficientes(self):
        df = crear_datos(list(range(100, 200)))
        resultado = calcular_senal(df)
        self.assertEqual(
            resultado["senal"], "DATOS INSUFICIENTES"
        )
        self.assertIsNone(resultado["sma200"])


if __name__ == "__main__":
    unittest.main(verbosity=2)