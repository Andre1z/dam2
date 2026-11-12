# Manual de Usuario

## Proyecto

Subtitulador Inteligente de Vídeos mediante IA

---

# 1. Introducción

Esta aplicación permite generar subtítulos automáticamente a partir de vídeos utilizando Inteligencia Artificial mediante Whisper.

El usuario puede cargar un vídeo, reproducirlo, visualizar los subtítulos generados y exportarlos en diferentes formatos.

---

# 2. Requisitos previos

Para utilizar la aplicación es necesario:

- Navegador web moderno.
- Servidor Node.js ejecutándose.
- Whisper configurado correctamente.
- FFmpeg instalado.

---

# 3. Inicio de la aplicación

Iniciar el servidor backend:

```bash
cd backend
npm start
```

Una vez iniciado correctamente aparecerá:

```text
Servidor iniciado en http://localhost:3000
```

Abrir el archivo:

```text
index.html
```

en el navegador.

---

# 4. Pantalla principal

Al cargar la aplicación aparecerá una pantalla con:

- Zona de arrastrar y soltar.
- Botón de selección de vídeo.
- Encabezado principal.

El usuario podrá:

- Arrastrar un vídeo.
- Seleccionar un vídeo mediante el explorador de archivos.

---

# 5. Cargar un vídeo

Método 1:

Pulsar:

```text
Seleccionar vídeo
```

y elegir un archivo compatible.

Método 2:

Arrastrar un archivo de vídeo sobre la zona de carga.

Formatos recomendados:

- MP4
- AVI
- MKV
- MOV
- WEBM

---

# 6. Generación automática de subtítulos

Tras seleccionar un vídeo:

1. El vídeo se carga en el reproductor.
2. Se analizan los metadatos.
3. Se envía el archivo al servidor.
4. Whisper procesa el contenido.
5. Se generan subtítulos automáticamente.

Durante el proceso se mostrará una barra de progreso e información del estado actual.

---

# 7. Reproductor multimedia

El reproductor dispone de controles personalizados.

## Reproducir

Botón:

```text
▶️
```

Permite iniciar la reproducción del vídeo.

---

## Pausar

Botón:

```text
⏸️
```

Permite pausar la reproducción.

---

## Detener

Botón:

```text
⏹️
```

Detiene completamente la reproducción.

---

## Volumen

Botón:

```text
🔊
```

Activa o silencia el audio.

El deslizador permite ajustar el volumen manualmente.

---

## Subtítulos

Botón:

```text
💬
```

Activa o desactiva la visualización de subtítulos sobre el vídeo.

Cuando existen subtítulos disponibles el botón aparecerá resaltado en color naranja.

---

## Modo cine

Botón:

```text
📺
```

Oscurece la interfaz para mejorar la experiencia de visualización.

---

## Pantalla completa

Botón:

```text
⛶
```

Activa el modo de pantalla completa.

---

# 8. Información del vídeo

La aplicación muestra automáticamente:

- Nombre del archivo.
- Duración.
- Resolución.
- Tamaño.
- Formato de vídeo.

---

# 9. Gestión de subtítulos

Los subtítulos generados aparecen en la zona inferior de la aplicación.

Desde esta sección el usuario puede:

- Visualizar la transcripción completa.
- Revisar el contenido generado.
- Copiar el texto al portapapeles.

---

# 10. Exportación de subtítulos

La aplicación permite descargar los subtítulos generados en distintos formatos.

## Exportar SRT

Botón:

```text
Descargar SRT
```

Genera un archivo compatible con la mayoría de reproductores multimedia.

---

## Exportar VTT

Botón:

```text
Descargar VTT
```

Genera un archivo compatible con reproductores HTML5.

---

## Copiar texto

Botón:

```text
Copiar texto
```

Permite copiar la transcripción directamente al portapapeles.

---

# 11. Notificaciones

La aplicación utiliza mensajes emergentes tipo Toast para informar sobre:

- Vídeo cargado correctamente.
- Inicio de procesamiento.
- Finalización de la transcripción.
- Exportaciones realizadas.
- Errores detectados.

---

# 12. Solución de problemas

## No se generan subtítulos

Verificar:

- Que Node.js está funcionando.
- Que Whisper está instalado.
- Que FFmpeg está instalado.
- Que el servidor backend está iniciado.
- Que el puerto 3000 no está bloqueado.

---

## El vídeo no se reproduce

Verificar:

- Que el formato de vídeo es compatible.
- Que el archivo no está dañado.
- Que el navegador soporta dicho formato.

---

## Error al exportar subtítulos

Verificar:

- Que la transcripción se ha completado.
- Que existen subtítulos generados.
- Que el navegador permite descargas locales.

---

## Error de conexión con el servidor

Comprobar:

```bash
npm start
```

y acceder a:

```text
http://localhost:3000/health
```

Debe devolverse:

```json
{
  "estado":"ok"
}
```

---

# 13. Recomendaciones

Para obtener mejores resultados:

- Utilizar vídeos con audio claro.
- Minimizar el ruido de fondo.
- Utilizar grabaciones con buena calidad de sonido.
- Utilizar el modelo Whisper Small o superior.
- Mantener actualizado Node.js.

---

# 14. Funcionalidades implementadas

La aplicación incorpora:

- Carga de vídeo mediante selector.
- Carga de vídeo mediante Drag & Drop.
- Reproducción multimedia.
- Controles personalizados.
- Barra de progreso personalizada.
- Control de volumen.
- Activación y desactivación de subtítulos.
- Pantalla completa.
- Modo cine.
- Integración con Whisper.
- Generación automática de subtítulos.
- Exportación SRT.
- Exportación VTT.
- Copia al portapapeles.
- Persistencia local.
- Notificaciones visuales.
- Animaciones mediante GSAP.

---

# 15. Finalización

Para finalizar el uso de la aplicación basta con cerrar la ventana del navegador.

Los archivos temporales utilizados durante el procesamiento son eliminados automáticamente por el servidor.