// js/app.js
// Aplicación principal para HabitSensor Web (Vanilla JS, módulos)
// Asegúrate de que los archivos sensor.js, profile.js y storage.js estén en la misma carpeta js/

import SensorManager from './sensor.js';
import { detectDeviceProfile } from './profile.js';
import { loadData, saveData } from './storage.js';

/* ---------- Elementos del DOM ---------- */
const deviceText = document.getElementById('deviceText');
const detectedProfileEl = document.getElementById('detectedProfile');
const dbgUa = document.getElementById('dbgUa');
const dbgMem = document.getElementById('dbgMem');
const dbgPR = document.getElementById('dbgPR');

const habitInput = document.getElementById('habitInput');
const addHabitBtn = document.getElementById('addHabit');
const habitListEl = document.getElementById('habitList');

const topHabitEl = document.getElementById('topHabit');
const totalHabitsEl = document.getElementById('totalHabits');

const sensorStatusEl = document.getElementById('sensorStatus');
const stepsEl = document.getElementById('steps');
const startBtn = document.getElementById('startSensor');
const stopBtn = document.getElementById('stopSensor');

const applyProfileBtn = document.getElementById('applyProfile');
const applyAutoBtn = document.getElementById('applyAuto');
const openSettingsBtn = document.getElementById('openSettings');

/* ---------- Estado y datos ---------- */
let data = loadData(); // { habits: [...] }
if (!data || !Array.isArray(data.habits)) data = { habits: [] };

/* ---------- Utilidades ---------- */
function nowString() {
  return new Date().toLocaleString();
}

function saveAndRender() {
  saveData(data);
  renderHabits();
  renderStats();
}

/* ---------- Renderizado de hábitos ---------- */
function renderHabits() {
  habitListEl.innerHTML = '';
  if (!data.habits.length) {
    const li = document.createElement('li');
    li.textContent = 'No hay hábitos registrados aún.';
    li.className = 'muted';
    habitListEl.appendChild(li);
    return;
  }

  data.habits.slice().reverse().forEach((h, idx) => {
    const li = document.createElement('li');

    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.flexDirection = 'column';

    const title = document.createElement('div');
    title.textContent = h.text;
    title.style.fontWeight = '700';

    const meta = document.createElement('div');
    meta.textContent = h.date;
    meta.className = 'habit-meta';

    left.appendChild(title);
    left.appendChild(meta);

    const right = document.createElement('div');
    right.style.display = 'flex';
    right.style.gap = '8px';
    right.style.alignItems = 'center';

    const del = document.createElement('button');
    del.textContent = 'Eliminar';
    del.className = 'secondary';
    del.addEventListener('click', () => {
      const index = data.habits.indexOf(h);
      if (index > -1) {
        data.habits.splice(index, 1);
        saveAndRender();
      }
    });

    right.appendChild(del);
    li.appendChild(left);
    li.appendChild(right);
    habitListEl.appendChild(li);
  });
}

/* ---------- Estadísticas simples ---------- */
function renderStats() {
  const total = data.habits.length;
  totalHabitsEl.textContent = total;

  if (!total) {
    topHabitEl.textContent = '—';
    return;
  }

  // Hábito más frecuente (conteo simple por texto)
  const counts = {};
  data.habits.forEach(h => {
    const key = (h.text || '').trim().toLowerCase();
    if (!key) return;
    counts[key] = (counts[key] || 0) + 1;
  });
  const entries = Object.entries(counts);
  if (!entries.length) {
    topHabitEl.textContent = '—';
    return;
  }
  entries.sort((a, b) => b[1] - a[1]);
  topHabitEl.textContent = entries[0][0];
}

/* ---------- Device detection y perfiles ---------- */
const profile = detectDeviceProfile();
deviceText.textContent = JSON.stringify(profile, null, 2);
detectedProfileEl.textContent = profile.profile || '—';
dbgUa.textContent = profile.ua || navigator.userAgent || '—';
dbgMem.textContent = profile.deviceMemory !== undefined ? String(profile.deviceMemory) : '—';
dbgPR.textContent = String(profile.pixelRatio || window.devicePixelRatio || 1);

// Aplicar clase al body para estilos por perfil
function applyProfileClass(p) {
  document.body.classList.remove('profile-Low', 'profile-Mid', 'profile-High', 'profile-SensorRich');
  if (!p) return;
  // Normalizar: p puede ser "High-SensorRich"
  const base = p.split('-')[0];
  document.body.classList.add('profile-' + base);
}
applyProfileClass(profile.profile);

/* ---------- Sensor manager y conexión UI ---------- */
function setSensorStatus(obj) {
  // obj: { text: string, ok: boolean }
  sensorStatusEl.textContent = obj.text || '';
  sensorStatusEl.classList.toggle('ok', !!obj.ok);
  // indicador visual opcional: cambiar color del texto
  sensorStatusEl.style.color = obj.ok ? 'var(--accent-2)' : 'var(--muted)';
}

const sensor = new SensorManager({
  onStep: (count) => {
    stepsEl.textContent = count;
  },
  onStatus: setSensorStatus
});

// Desactivar/activar botones para evitar múltiples solicitudes
function setSensorButtons(running) {
  startBtn.disabled = running;
  stopBtn.disabled = !running;
  startBtn.style.opacity = running ? '0.6' : '1';
  stopBtn.style.opacity = running ? '1' : '0.6';
}

/* ---------- Eventos UI ---------- */
addHabitBtn.addEventListener('click', () => {
  const text = (habitInput.value || '').trim();
  if (!text) return;
  data.habits.push({ text, date: nowString() });
  habitInput.value = '';
  saveAndRender();
});

habitInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addHabitBtn.click();
});

startBtn.addEventListener('click', async () => {
  try {
    setSensorStatus({ text: 'Iniciando sensor...', ok: false });
    setSensorButtons(true);
    await sensor.start();
    // sensor.start() actualizará el estado vía onStatus
    setSensorButtons(sensor.enabled);
  } catch (err) {
    console.error('Error iniciando sensor:', err);
    setSensorStatus({ text: 'Error iniciando sensor', ok: false });
    setSensorButtons(false);
  }
});

stopBtn.addEventListener('click', () => {
  sensor.stop();
  setSensorButtons(false);
});

applyProfileBtn.addEventListener('click', () => {
  applyProfileClass(profile.profile);
  setSensorStatus({ text: 'Perfil aplicado: ' + profile.profile, ok: true });
});

applyAutoBtn && applyAutoBtn.addEventListener('click', () => {
  applyProfileClass(profile.profile);
  setSensorStatus({ text: 'Aplicación automática del perfil', ok: true });
});

openSettingsBtn && openSettingsBtn.addEventListener('click', () => {
  alert('Abrir ajustes (no implementado en esta versión).');
});

/* ---------- Inicialización ---------- */
function init() {
  renderHabits();
  renderStats();
  stepsEl.textContent = '0';
  setSensorStatus({ text: 'Esperando permiso / disponibilidad', ok: false });
  setSensorButtons(false);

  // Si el navegador no soporta DeviceMotion, avisar
  if (!('DeviceMotionEvent' in window)) {
    setSensorStatus({ text: 'DeviceMotion no disponible en este navegador', ok: false });
  }

  // Si se detecta que el perfil es Low, ajustar umbral o comportamiento (ejemplo)
  if (profile.profile && profile.profile.toLowerCase().includes('low')) {
    // ejemplo: reducir frecuencia de muestreo lógica (no aplicable directamente aquí)
    console.debug('Perfil Low detectado: aplicar ajustes de rendimiento');
  }

  // Intentar cargar gráfico si Chart.js está presente
  try {
    if (window.Chart && document.getElementById('chart')) {
      const ctx = document.getElementById('chart').getContext('2d');
      // Datos simples: conteo por hábito (top 5)
      const counts = {};
      data.habits.forEach(h => {
        const k = h.text || '—';
        counts[k] = (counts[k] || 0) + 1;
      });
      const labels = Object.keys(counts).slice(0, 6);
      const values = labels.map(l => counts[l]);
      // Crear gráfico si hay datos
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Registros',
            data: values,
            backgroundColor: 'rgba(96,165,250,0.9)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#ffffff' } },
            y: { ticks: { color: '#ffffff' } }
          }
        }
      });
    }
  } catch (err) {
    console.debug('Chart init skipped or failed:', err);
  }
}

/* Ejecutar init al cargar el módulo */
init();

/* ---------- Export (opcional) ---------- */
export default {
  getData: () => data,
  resetSteps: () => {
    sensor.reset();
    stepsEl.textContent = '0';
  }
};