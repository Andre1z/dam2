const KEY = "mesas.json";
let mesas = JSON.parse(localStorage.getItem(KEY) || "null") ||
  Array.from({ length: 12 }, (_, i) => ({ id: i + 1, reservada: false, nombre: "" }));

const $ = (id) => document.getElementById(id);

function guardar() { localStorage.setItem(KEY, JSON.stringify(mesas, null, 2)); }

function pintar() {
  const r = mesas.filter((m) => m.reservada).length;
  $("resumen").textContent = `${r} reservadas · ${mesas.length - r} libres`;
  const cont = $("mesas");
  cont.innerHTML = "";
  mesas.forEach((m) => {
    const div = document.createElement("div");
    div.className = "mesa" + (m.reservada ? " reservada" : "");
    div.innerHTML = `<h2>Mesa ${m.id}</h2><div class="estado">${m.reservada ? "Reservada" : "Libre"}</div>`;
    div.onclick = () => { m.reservada = !m.reservada; if (!m.reservada) m.nombre = ""; guardar(); pintar(); };
    if (m.reservada) {
      const inp = document.createElement("input");
      inp.placeholder = "Nombre / hora";
      inp.value = m.nombre;
      inp.onclick = (e) => e.stopPropagation();
      inp.oninput = () => { m.nombre = inp.value; guardar(); };
      div.appendChild(inp);
    }
    cont.appendChild(div);
  });
}

$("descargar").onclick = () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(mesas, null, 2)], { type: "application/json" }));
  a.download = "mesas.json";
  a.click();
};
$("cargarBtn").onclick = () => $("archivo").click();
$("archivo").onchange = async (e) => {
  const f = e.target.files[0];
  if (!f) return;
  try { mesas = JSON.parse(await f.text()); guardar(); pintar(); } catch { alert("Archivo no válido"); }
  e.target.value = "";
};
$("anadir").onclick = () => {
  mesas.push({ id: Math.max(0, ...mesas.map((m) => m.id)) + 1, reservada: false, nombre: "" });
  guardar(); pintar();
};
$("liberar").onclick = () => { mesas.forEach((m) => { m.reservada = false; m.nombre = ""; }); guardar(); pintar(); };

pintar();
