(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const pairSelect = $("pairs");
  const statusBox = $("status");
  const resultsBody = $("results");
  const countBox = $("count");
  const analyzeButton = $("analyze");
  const reloadButton = $("reload");
  const selectMainButton = $("selectMain");
  const csvButton = $("downloadCsv");
  const mdButton = $("downloadMd");

  let pairs = [];
  let latestCsv = "";
  let latestMarkdown = "";

  const MAIN_PAIRS = ["BTC/EUR", "ETH/EUR", "SOL/EUR", "XRP/EUR", "ADA/EUR", "DOT/EUR"];

  function setStatus(message, type = "") {
    statusBox.textContent = message;
    statusBox.className = `status ${type}`.trim();
  }

  async function getJson(url, options = {}) {
    const response = await fetch(url, options);
    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error(`El servidor devolvió una respuesta no válida (HTTP ${response.status}).`);
    }
    if (!response.ok) {
      throw new Error(data.error || `Error HTTP ${response.status}`);
    }
    return data;
  }

  async function loadPairs() {
    reloadButton.disabled = true;
    analyzeButton.disabled = true;
    setStatus("Conectando con la API pública de Kraken…");
    pairSelect.replaceChildren();

    try {
      const data = await getJson("/api/pares");
      if (!Array.isArray(data.pares)) {
        throw new Error("La API respondió, pero el campo 'pares' no es una lista. Comprueba que agente.py esté actualizado.");
      }

      pairs = data.pares;
      for (const pair of pairs) {
        const option = document.createElement("option");
        option.value = pair.nombre;
        option.textContent = `${pair.nombre_completo || pair.simbolo || pair.nombre} / ${pair.simbolo || pair.nombre.split("/")[0]}`;
        pairSelect.appendChild(option);
      }

      if (!pairs.length) {
        setStatus("Kraken respondió, pero no se encontraron pares EUR. Comprueba el error de la API y la conexión.", "error");
        return;
      }

      selectMainPairs();
      setStatus(`Mercados cargados correctamente: ${pairs.length} pares EUR disponibles.`, "success");
    } catch (error) {
      setStatus(`No se pudieron cargar las criptomonedas: ${error.message}`, "error");
    } finally {
      reloadButton.disabled = false;
      analyzeButton.disabled = pairs.length === 0;
    }
  }

  function selectMainPairs() {
    const names = new Set(pairs.map((p) => p.nombre));
    let selected = 0;
    for (const option of pairSelect.options) {
      option.selected = MAIN_PAIRS.includes(option.value) && names.has(option.value);
      if (option.selected) selected++;
    }
    if (selected === 0) {
      for (let i = 0; i < Math.min(5, pairSelect.options.length); i++) {
        pairSelect.options[i].selected = true;
      }
    }
  }

  function selectedPairs() {
    return Array.from(pairSelect.selectedOptions).map((option) => option.value);
  }

  function formatPrice(value) {
    if (value === null || value === undefined || !Number.isFinite(Number(value))) return "N/D";
    return new Intl.NumberFormat("es-ES", { maximumFractionDigits: 8 }).format(Number(value));
  }

  function formatPercent(value) {
    if (value === null || value === undefined || !Number.isFinite(Number(value))) return "N/D";
    return `${new Intl.NumberFormat("es-ES", { maximumFractionDigits: 4 }).format(Number(value))}%`;
  }

  function addCell(row, text) {
    const cell = document.createElement("td");
    cell.textContent = text ?? "N/D";
    row.appendChild(cell);
    return cell;
  }

  function renderResults(results) {
    resultsBody.replaceChildren();
    countBox.textContent = `${results.length} activos`;

    if (!results.length) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 5;
      cell.className = "empty";
      cell.textContent = "No hay resultados para mostrar.";
      row.appendChild(cell);
      resultsBody.appendChild(row);
      return;
    }

    for (const item of results) {
      const row = document.createElement("tr");
      addCell(row, item.par);
      addCell(row, formatPrice(item.precio));
      addCell(row, formatPrice(item.sma200));

      const signalCell = document.createElement("td");
      const badge = document.createElement("span");
      badge.className = `signal ${String(item.senal || "NEUTRAL").replaceAll(" ", "-")}`;
      badge.textContent = item.senal || "N/D";
      signalCell.appendChild(badge);
      row.appendChild(signalCell);

      addCell(row, item.fecha);
      resultsBody.appendChild(row);
    }
  }

  async function analyze() {
    const chosen = selectedPairs();
    if (!chosen.length) {
      setStatus("Selecciona al menos una criptomoneda.", "error");
      return;
    }
    if (chosen.length > 10) {
      setStatus("Selecciona como máximo 10 pares por análisis.", "error");
      return;
    }

    analyzeButton.disabled = true;
    setStatus(`Analizando ${chosen.length} par(es). Puede tardar unos segundos…`);
    try {
      const data = await getJson("/api/analizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pares: chosen }),
      });
      renderResults(data.resultados || []);
      latestCsv = data.csv || "";
      latestMarkdown = data.markdown || "";
      csvButton.disabled = !latestCsv;
      mdButton.disabled = !latestMarkdown;
      $("updated").textContent = data.actualizado ? `Actualizado: ${data.actualizado}` : "";

      const failures = (data.errores || []).length;
      setStatus(
        failures
          ? `Análisis completado con ${failures} aviso(s). Revisa la consola de PowerShell si faltan activos.`
          : (data.aviso || "Análisis completado."),
        failures ? "" : "success"
      );
    } catch (error) {
      setStatus(`No se pudo completar el análisis: ${error.message}`, "error");
    } finally {
      analyzeButton.disabled = pairs.length === 0;
    }
  }

  function download(content, filename, mime) {
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  selectMainButton.addEventListener("click", selectMainPairs);
  reloadButton.addEventListener("click", loadPairs);
  analyzeButton.addEventListener("click", analyze);
  csvButton.addEventListener("click", () => download(latestCsv, "senales_kraken.csv", "text/csv"));
  mdButton.addEventListener("click", () => download(latestMarkdown, "senales_kraken.md", "text/markdown"));

  loadPairs();
})(); 
