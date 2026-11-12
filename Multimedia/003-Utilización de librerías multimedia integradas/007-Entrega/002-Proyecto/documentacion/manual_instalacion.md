# Manual de Instalación

## Proyecto

Subtitulador Inteligente de Vídeos mediante Inteligencia Artificial

---

# 1. Introducción

Este documento describe el procedimiento de instalación y configuración necesario para ejecutar la aplicación Subtitulador Inteligente de Vídeos mediante IA en un entorno Windows.

La aplicación utiliza las siguientes tecnologías:

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- Whisper
- FFmpeg
- GSAP

---

# 2. Requisitos mínimos

Software necesario:

- Windows 10 o superior.
- Navegador web moderno.
- Node.js.
- Python.
- FFmpeg.
- Conexión a Internet para la descarga inicial de modelos Whisper.

---

# 3. Instalación de Node.js

Acceder al sitio oficial:

```text
https://nodejs.org
```

Descargar la versión LTS.

Durante la instalación activar:

```text
Add to PATH
```

Finalizada la instalación comprobar:

```bash
node -v
```

Ejemplo:

```text
v22.19.0
```

Comprobar npm:

```bash
npm -v
```

Ejemplo:

```text
10.9.3
```

---

# 4. Instalación de Python

Descargar Python desde:

```text
https://www.python.org/downloads/
```

Durante la instalación activar:

```text
Add Python to PATH
```

Finalizada la instalación comprobar:

```bash
python --version
```

Ejemplo:

```text
Python 3.13.0
```

---

# 5. Instalación de Whisper

Abrir PowerShell.

Ejecutar:

```bash
pip install openai-whisper
```

Comprobar instalación:

```bash
python -m whisper --help
```

Si aparece la ayuda del programa la instalación es correcta.

---

# 6. Instalación de FFmpeg

Instalar mediante Winget:

```bash
winget install Gyan.FFmpeg
```

Cerrar la terminal y abrir una nueva ventana.

Verificar:

```bash
ffmpeg -version
```

Ejemplo:

```text
ffmpeg version 7.x
```

---

# 7. Descarga del proyecto

Copiar el proyecto en cualquier carpeta del sistema.

Ejemplo:

```text
C:\proyectos\subtitulador_video_ia
```

---

# 8. Instalación de dependencias Node.js

Abrir una terminal.

Acceder a la carpeta backend:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Se instalarán automáticamente:

- express
- cors
- multer
- nodemon

---

# 9. Estructura del proyecto

La estructura mínima debe ser:

```text
proyecto_subtitulador_video/

backend/
css/
documentacion/
js/
recursos/
index.html
```

Dentro de backend:

```text
backend/

node_modules/
uploads/
subtitulos/

package.json
package-lock.json
server.js
```

---

# 10. Verificación de Whisper

Copiar un vídeo de prueba.

Ejemplo:

```text
prueba.mp4
```

Ejecutar:

```bash
python -m whisper prueba.mp4 --model small --language es
```

Al finalizar deben aparecer:

```text
prueba.txt
prueba.srt
prueba.vtt
```

Si los archivos son generados correctamente Whisper funciona correctamente.

---

# 11. Inicio del servidor

Abrir una terminal dentro de:

```text
backend
```

Ejecutar:

```bash
npm start
```

Debe mostrarse:

```text
Servidor iniciado en http://localhost:3000
```

---

# 12. Comprobación del servidor

Abrir el navegador:

```text
http://localhost:3000/health
```

La respuesta debe ser:

```json
{
    "estado":"ok"
}
```

---

# 13. Ejecución de la aplicación

Abrir el archivo:

```text
index.html
```

en el navegador.

Seleccionar un vídeo mediante:

- Arrastrar y soltar.
- Botón de selección.

La aplicación enviará automáticamente el vídeo al servidor para generar los subtítulos.

---

# 14. Funcionamiento esperado

Flujo completo:

```text
Usuario
↓
Seleccionar vídeo
↓
Frontend
↓
Node.js
↓
Whisper
↓
Generación TXT
↓
Generación SRT
↓
Generación VTT
↓
Respuesta JSON
↓
Frontend
↓
Visualización de subtítulos
```

---

# 15. Solución de problemas

## Error: node no se reconoce

Verificar la instalación de Node.js.

Añadir:

```text
C:\Program Files\nodejs
```

al PATH del sistema.

---

## Error: python no se reconoce

Verificar la instalación de Python.

Añadir Python al PATH.

---

## Error: ffmpeg no se reconoce

Verificar la instalación de FFmpeg.

Añadir la carpeta:

```text
C:\Program Files\ffmpeg\bin
```

al PATH del sistema.

---

## Error: Whisper no se reconoce

Probar:

```bash
python -m whisper --help
```

En lugar de:

```bash
whisper --help
```

---

## Error: No se conecta el frontend

Verificar:

```bash
npm start
```

y comprobar:

```text
http://localhost:3000/health
```

---

# 16. Desinstalación

Para eliminar la aplicación basta con:

1. Detener el servidor Node.js.
2. Borrar la carpeta del proyecto.
3. Eliminar opcionalmente Whisper mediante:

```bash
pip uninstall openai-whisper
```

---

# 17. Mantenimiento

Se recomienda:

- Mantener actualizado Node.js.
- Mantener actualizado Python.
- Mantener actualizado Whisper.
- Verificar periódicamente FFmpeg.
- Realizar copias de seguridad del proyecto.

---

# Instalación completada

Si todos los pasos anteriores se han realizado correctamente, la aplicación estará preparada para generar subtítulos automáticos mediante Inteligencia Artificial utilizando Whisper.