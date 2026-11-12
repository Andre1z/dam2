import csv
import io
import logging
import time
from datetime import datetime, timezone
from pathlib import Path

import pandas as pd
import requests
from flask import Flask, jsonify, render_template, request

BASE_DIR = Path(__file__).resolve().parent
INFORMES_DIR = BASE_DIR / "informes"
INFORMES_DIR.mkdir(exist_ok=True)

KRAKEN_API = "https://api.kraken.com/0/public"
SMA_DIAS = 200
COMPARACION_DIAS = 20
MIN_VELAS = SMA_DIAS + COMPARACION_DIAS
MAX_PARES_POR_ANALISIS = 10
TIMEOUT = 20
PAUSA_ENTRE_PARES = 1

app = Flask(__name__)
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("agente-cripto")

session = requests.Session()
session.headers.update({"User-Agent": "AgenteSenalesKraken/1.1"})


def kraken_get(endpoint, params=None):
    """Llama a un endpoint público de Kraken y propaga sus errores."""
    response = session.get(f"{KRAKEN_API}/{endpoint}", params=params or {}, timeout=TIMEOUT)
    response.raise_for_status()
    payload = response.json()
    errors = payload.get("error") or []
    if errors:
        raise RuntimeError("Kraken: " + "; ".join(errors))
    return payload.get("result") or {}


def obtener_pares_eur():
    """
    Devuelve pares EUR con nombre completo y símbolo para la interfaz.
    Kraken suele identificar Bitcoin como XBT; en la interfaz lo mostramos
    como BTC, manteniendo el identificador interno de Kraken para OHLC.
    """
    nombres = {
        "BTC": "Bitcoin",
        "ETH": "Ethereum",
        "SOL": "Solana",
        "XRP": "XRP",
        "ADA": "Cardano",
        "DOT": "Polkadot",
        "DOGE": "Dogecoin",
        "LTC": "Litecoin",
        "BCH": "Bitcoin Cash",
        "LINK": "Chainlink",
        "XLM": "Stellar",
        "AVAX": "Avalanche",
        "UNI": "Uniswap",
        "ATOM": "Cosmos",
        "ETC": "Ethereum Classic",
        "FIL": "Filecoin",
        "AAVE": "Aave",
        "ALGO": "Algorand",
        "TRX": "TRON",
        "XTZ": "Tezos",
        "EOS": "EOS",
        "MANA": "Decentraland",
        "SAND": "The Sandbox",
        "SHIB": "Shiba Inu",
        "NEAR": "NEAR Protocol",
        "ICP": "Internet Computer",
        "APT": "Aptos",
        "ARB": "Arbitrum",
        "OP": "Optimism",
        "INJ": "Injective",
        "TIA": "Celestia",
        "PEPE": "Pepe",
        "TON": "Toncoin",
        "USDT": "Tether",
        "USDC": "USD Coin",
        "DAI": "Dai",
    }

    datos = kraken_get("AssetPairs")
    pares = []
    vistos = set()

    for identificador, info in datos.items():
        wsname = info.get("wsname") or ""
        estado = info.get("status")

        if not wsname or "/" not in wsname or not wsname.upper().endswith("/EUR"):
            continue
        if estado and estado != "online":
            continue
        if ".d" in identificador.lower() or ".d" in wsname.lower():
            continue

        simbolo_raw = wsname.split("/", 1)[0].upper()
        simbolo = "BTC" if simbolo_raw == "XBT" else simbolo_raw
        nombre_par = f"{simbolo}/EUR"

        if nombre_par in vistos:
            continue
        vistos.add(nombre_par)

        pares.append({
            "nombre": nombre_par,
            "identificador": identificador,
            "simbolo": simbolo,
            "nombre_completo": nombres.get(simbolo, simbolo),
            "etiqueta": f"{nombres.get(simbolo, simbolo)} / {simbolo}",
        })

    pares.sort(key=lambda par: (par["nombre_completo"].lower(), par["simbolo"]))
    log.info("Pares EUR encontrados en Kraken: %s", len(pares))
    return pares


def obtener_velas_diarias(identificador):
    result = kraken_get("OHLC", {"pair": identificador, "interval": 1440})
    keys = [key for key in result if key != "last"]
    if not keys:
        raise ValueError("Kraken no devolvió velas para este par")

    rows = result[keys[0]]
    if not rows:
        raise ValueError("Kraken devolvió una lista de velas vacía")

    df = pd.DataFrame(rows, columns=[
        "timestamp", "open", "high", "low", "close",
        "vwap", "volume", "count"
    ])
    df["fecha"] = pd.to_datetime(df["timestamp"], unit="s", utc=True)
    for col in ["open", "high", "low", "close", "vwap", "volume"]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    df = (df.dropna(subset=["fecha", "close"])
            .sort_values("fecha")
            .drop_duplicates(subset=["fecha"])
            .reset_index(drop=True))

    # Descarta la vela diaria que aún no ha cerrado.
    now = pd.Timestamp.now(tz="UTC")
    df = df[df["fecha"] + pd.Timedelta(days=1) <= now]
    return df.reset_index(drop=True)


def fecha_actual():
    return datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")


def calcular_senal(df):
    if df.empty:
        raise ValueError("No hay velas cerradas para analizar")

    df = df.copy()
    df["sma200"] = df["close"].rolling(SMA_DIAS).mean()
    precio = float(df["close"].iloc[-1])

    if len(df) < MIN_VELAS:
        return {
            "fecha": df["fecha"].iloc[-1].strftime("%Y-%m-%d"),
            "precio": precio, "sma200": None,
            "variacion_sma_pct": None,
            "senal": "DATOS INSUFICIENTES",
            "motivo": f"Se necesitan al menos {MIN_VELAS} velas diarias cerradas.",
            "velas": int(len(df)),
        }

    sma_actual = float(df["sma200"].iloc[-1])
    sma_anterior = float(df["sma200"].iloc[-1 - COMPARACION_DIAS])

    if pd.isna(sma_actual) or pd.isna(sma_anterior) or sma_anterior == 0:
        raise ValueError("No se pudo calcular la SMA200")

    variacion = (sma_actual - sma_anterior) / sma_anterior * 100

    if precio > sma_actual and variacion > 0:
        senal = "ALCISTA"
        motivo = "Precio por encima de SMA200 y SMA200 ascendente."
    elif precio < sma_actual and variacion < 0:
        senal = "BAJISTA"
        motivo = "Precio por debajo de SMA200 y SMA200 descendente."
    else:
        senal = "NEUTRAL"
        motivo = "El precio y la tendencia de SMA200 no coinciden en una señal direccional."

    return {
        "fecha": df["fecha"].iloc[-1].strftime("%Y-%m-%d"),
        "precio": round(precio, 8),
        "sma200": round(sma_actual, 8),
        "variacion_sma_pct": round(variacion, 4),
        "senal": senal,
        "motivo": motivo,
        "velas": int(len(df)),
    }


def analizar_par(par):
    df = obtener_velas_diarias(par["identificador"])
    resultado = calcular_senal(df)
    resultado["par"] = par["nombre"]
    return resultado


def generar_csv(resultados):
    salida = io.StringIO()
    campos = ["par", "fecha", "precio", "sma200", "variacion_sma_pct", "senal", "motivo", "velas"]
    writer = csv.DictWriter(salida, fieldnames=campos, extrasaction="ignore")
    writer.writeheader()
    writer.writerows(resultados)
    return salida.getvalue()


def generar_markdown(resultados):
    lines = [
        "# Informe de señales de Kraken", "",
        f"Generado: {fecha_actual()}", "",
        "> Datos históricos informativos; no es asesoramiento financiero.", "",
        "| Par | Fecha | Precio EUR | SMA200 | Variación SMA | Señal |",
        "|---|---|---:|---:|---:|---|",
    ]
    for r in resultados:
        lines.append(
            f"| {r.get('par')} | {r.get('fecha')} | {r.get('precio')} | "
            f"{r.get('sma200') if r.get('sma200') is not None else 'N/D'} | "
            f"{r.get('variacion_sma_pct') if r.get('variacion_sma_pct') is not None else 'N/D'}% | {r.get('senal')} |"
        )
    lines += ["", "## Motivos", ""]
    for r in resultados:
        lines += [f"### {r.get('par')}", "", r.get("motivo", ""), ""]
    return "\n".join(lines)


def guardar_informes(resultados):
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    csv_path = INFORMES_DIR / f"senales_{stamp}.csv"
    md_path = INFORMES_DIR / f"senales_{stamp}.md"
    csv_path.write_text(generar_csv(resultados), encoding="utf-8-sig")
    md_path.write_text(generar_markdown(resultados), encoding="utf-8")
    return {"csv": csv_path.name, "markdown": md_path.name}


@app.get("/")
def inicio():
    return render_template("index.html")


@app.get("/api/estado")
def api_estado():
    return jsonify({"estado": "ok", "actualizado": fecha_actual()})


@app.get("/api/pares")
def api_pares():
    try:
        pares = obtener_pares_eur()
        # El frontend usa una lista, no un diccionario; así puede iterar con forEach.
        return jsonify({"pares": pares, "total": len(pares)})
    except Exception as exc:
        log.exception("Error obteniendo pares de Kraken")
        return jsonify({"error": str(exc), "pares": [], "total": 0}), 502


@app.post("/api/analizar")
def api_analizar():
    body = request.get_json(silent=True) or {}
    solicitados = body.get("pares")

    try:
        disponibles = obtener_pares_eur()
    except Exception as exc:
        log.exception("Error consultando pares antes del análisis")
        return jsonify({"error": f"No se pudo consultar Kraken: {exc}"}), 502

    por_nombre = {p["nombre"]: p for p in disponibles}

    if solicitados is None:
        favoritos = ["BTC/EUR", "ETH/EUR", "SOL/EUR", "XRP/EUR", "ADA/EUR", "DOT/EUR"]
        solicitados = [nombre for nombre in favoritos if nombre in por_nombre]

    if not isinstance(solicitados, list):
        return jsonify({"error": "'pares' debe ser una lista de nombres como BTC/EUR."}), 400

    solicitados = list(dict.fromkeys(
        p.strip() for p in solicitados if isinstance(p, str) and p.strip()
    ))[:MAX_PARES_POR_ANALISIS]

    if not solicitados:
        return jsonify({"error": "Selecciona al menos un par disponible."}), 400

    resultados, errores = [], []
    for i, nombre in enumerate(solicitados):
        par = por_nombre.get(nombre)
        if not par:
            errores.append({"par": nombre, "error": "Par no disponible en la lista EUR de Kraken."})
            continue
        try:
            resultados.append(analizar_par(par))
        except Exception as exc:
            log.exception("Error analizando %s", nombre)
            errores.append({"par": nombre, "error": str(exc)})
        if i < len(solicitados) - 1:
            time.sleep(PAUSA_ENTRE_PARES)

    if not resultados:
        return jsonify({
            "error": "No se pudo analizar ningún par.",
            "errores": errores,
        }), 502

    try:
        informes = guardar_informes(resultados)
    except Exception:
        log.exception("No se pudieron guardar los informes")
        informes = {"csv": None, "markdown": None}

    return jsonify({
        "resultados": resultados,
        "errores": errores,
        "actualizado": fecha_actual(),
        "informes": informes,
        "csv": generar_csv(resultados),
        "markdown": generar_markdown(resultados),
        "aviso": "Señales técnicas simplificadas; no garantizan resultados futuros.",
    })


if __name__ == "__main__":
    # Solo escucha en este ordenador. No exponer directamente a Internet.
    app.run(host="127.0.0.1", port=5000, debug=False)
