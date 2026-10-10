const KEY = 'habitSensorData';
export function loadData() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || { habits: [] };
  } catch {
    return { habits: [] };
  }
}
export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}