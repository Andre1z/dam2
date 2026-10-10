// sensor.js - SensorManager mejorado
export default class SensorManager {
  constructor({ onStep=null, onStatus=null } = {}) {
    this.onStep = onStep;
    this.onStatus = onStatus;
    this.handleMotion = this.handleMotion.bind(this);
    this.lastMagnitude = 0;
    this.stepCount = 0;
    this.enabled = false;
  }

  _setStatus(msg, ok = false) {
    if (this.onStatus) this.onStatus({ text: msg, ok });
    console.debug('[SensorManager] status:', msg);
  }

  async start() {
    try {
      if (!('DeviceMotionEvent' in window)) {
        this._setStatus('DeviceMotion no disponible en este navegador', false);
        return;
      }

      // iOS 13+ requiere permiso explícito
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        this._setStatus('Solicitando permiso de sensores...', false);
        const response = await DeviceMotionEvent.requestPermission();
        if (response !== 'granted') {
          this._setStatus('Permiso denegado', false);
          return;
        }
      }

      window.addEventListener('devicemotion', this.handleMotion, { passive: true });
      this.enabled = true;
      this._setStatus('Sensor iniciado', true);
    } catch (err) {
      console.error('[SensorManager] start error', err);
      this._setStatus('Error iniciando sensor: ' + (err.message || err), false);
    }
  }

  stop() {
    try {
      window.removeEventListener('devicemotion', this.handleMotion);
      this.enabled = false;
      this._setStatus('Sensor detenido', false);
    } catch (err) {
      console.error('[SensorManager] stop error', err);
      this._setStatus('Error deteniendo sensor', false);
    }
  }

  handleMotion(e) {
    const a = e.accelerationIncludingGravity || e.acceleration;
    if (!a) return;
    const mag = Math.sqrt((a.x||0)**2 + (a.y||0)**2 + (a.z||0)**2);
    const diff = Math.abs(mag - this.lastMagnitude);
    this.lastMagnitude = mag;
    // Umbral simple para detectar "paso"
    if (diff > 1.2) {
      this.stepCount++;
      if (this.onStep) this.onStep(this.stepCount);
    }
  }

  reset() {
    this.stepCount = 0;
    this.lastMagnitude = 0;
    this._setStatus('Contador reiniciado', false);
  }
}