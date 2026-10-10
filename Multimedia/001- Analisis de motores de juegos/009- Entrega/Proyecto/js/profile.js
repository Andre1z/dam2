export function detectDeviceProfile() {
  const ua = navigator.userAgent || 'unknown';
  const pixelRatio = window.devicePixelRatio || 1;
  const width = Math.max(window.screen.width, window.screen.height);
  const deviceMemory = navigator.deviceMemory || null;
  const hasDeviceMotion = 'DeviceMotionEvent' in window;
  // Reglas simples
  let profile = 'Mid';
  if (deviceMemory && deviceMemory < 2) profile = 'Low';
  if (deviceMemory && deviceMemory >= 4) profile = 'High';
  if (hasDeviceMotion) profile += '-SensorRich';
  return { ua, pixelRatio, width, deviceMemory, hasDeviceMotion, profile };
}