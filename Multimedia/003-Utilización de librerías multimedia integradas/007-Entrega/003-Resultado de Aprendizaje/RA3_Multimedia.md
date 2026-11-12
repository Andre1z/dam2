# Reporte de proyecto

## Estructura del proyecto

```
C:\xampp\htdocs\dam2\Multimedia\003-Utilización de librerías multimedia integradas\007-Entrega
├── 001-Ejercicios
│   ├── 001-Conceptos sobre aplicaciones multimedia
│   │   ├── 000-Introducción.md
│   │   ├── 001-demostracion video.html
│   │   ├── 002-controles del video.html
│   │   ├── 003-boton de play manual.html
│   │   ├── 004-ahora boton de parar.html
│   │   ├── 005-ahora volumen.html
│   │   ├── 006-ir a tiempo.html
│   │   ├── 007-progreso y numeros.html
│   │   ├── 008-un poco de interfaz.html
│   │   ├── 009-meto el video en un contenedor.html
│   │   ├── 010-contenedor con controles.html
│   │   ├── 011-reproductor personalizado.html
│   │   └── andrei.mp4
│   ├── 002-Arquitectura del API utilizado
│   │   ├── 000-Introducción.md
│   │   ├── 001-audio.html
│   │   ├── 002-muestras.html
│   │   ├── 003-pintar.html
│   │   ├── 004-tipo spotify.html
│   │   ├── 005-avance.html
│   │   ├── 006-reproductor completo.html
│   │   ├── 007-personalizacion.html
│   │   ├── 0802.mp3
│   │   └── 0802.vtt
│   ├── 003-Fuentes de datos multimedia. Clases
│   │   ├── 000-Introducción.md
│   │   ├── 001-parto desde la subunidad 1.html
│   │   ├── 002-instalar whisperai.md
│   │   ├── 002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.srt
│   │   ├── 002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.vtt
│   │   ├── 002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm
│   │   ├── 003-procesar vtt.html
│   │   ├── 004-quiero partir mas.html
│   │   ├── 005-quiero partir todavia mas.html
│   │   ├── 006-subtitulos burdos.html
│   │   ├── 007-subtitulos.html
│   │   ├── 008-empezamos a automatizar.html
│   │   ├── 009-me traigo el reproductor anterior.html
│   │   ├── 010-fusion.html
│   │   ├── 011-subtitulos opcionales.html
│   │   ├── 012-traducir.py
│   │   └── subtitulos
│   │       └── 002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.srt
│   ├── 004-Procesamiento de objetos multimedia
│   │   ├── 000-Introducción.md
│   │   ├── 001-version anterior.html
│   │   ├── 002-convertimos con whisperAI.md
│   │   ├── 003-audio con subtitulos.html
│   │   ├── letyougo.mp3
│   │   └── letyougo.vtt
│   ├── 005-Reproducción de objetos multimedia
│   │   ├── 000-Introducción.md
│   │   ├── 001-cargar un video.html
│   │   ├── 002-con requestanimationframe.html
│   │   ├── 002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.vtt
│   │   ├── 002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm
│   │   ├── 003-gris.html
│   │   ├── 004-operaciones de color.html
│   │   ├── 005-integracion de los proyectos.html
│   │   ├── andrei.mp4
│   │   └── andrei.vtt
│   └── 006-Animación de objetos
│       ├── 000-Introducción.md
│       ├── 001-demostracion animacion.html
│       ├── 002-animacion.html
│       ├── 003-tambien color.html
│       ├── 004-tambien transformaciones.html
│       ├── 005-tostada.html
│       ├── 006-tostada en accion.html
│       └── 007-animaciones para las tostadas.html
├── 002-Proyecto
│   ├── backend
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── server.js
│   │   ├── subtitulos
│   │   │   ├── 1794493561018.json
│   │   │   ├── 1794493561018.srt
│   │   │   ├── 1794493561018.tsv
│   │   │   ├── 1794493561018.txt
│   │   │   └── 1794493561018.vtt
│   │   ├── uploads
│   │   │   ├── 1794491978917.mp4
│   │   │   ├── 1794492915855.mp4
│   │   │   ├── 1794492929949.mp4
│   │   │   └── 1794493561018.mp4
│   │   └── whisper.js
│   ├── css
│   │   ├── animaciones.css
│   │   ├── estilos.css
│   │   ├── reproductor.css
│   │   ├── toast.css
│   │   └── variables.css
│   ├── index.html
│   └── js
│       ├── almacenamiento_local.js
│       ├── animaciones.js
│       ├── arrastrar_soltar.js
│       ├── exportador_subtitulos.js
│       ├── gestor_subtitulos.js
│       ├── gestor_toasts.js
│       ├── gestor_video.js
│       ├── principal.js
│       └── utilidades.js
└── 003-Resultado de Aprendizaje
```

## Código (intercalado)

# 007-Entrega
## 001-Ejercicios
### 001-Conceptos sobre aplicaciones multimedia
**000-Introducción.md**
```markdown
# Conceptos sobre aplicaciones multimedia
- Conceptos sobre aplicaciones multimedia
	- Conceptos fundamentales
	- Recursos y componentes
	- Representación y renderizado
	- Interacción y actualización
	- Optimización y rendimiento
	- Ejemplo práctico

```
**001-demostracion video.html**
```html
<video src="andrei.mp4"></video>
```
**002-controles del video.html**
```html
<video src="andrei.mp4" controls></video>
```
**003-boton de play manual.html**
```html
<video src="andrei.mp4" controls></video>
<button>Reproducir</button>
<script>
  let video = document.querySelector("video")
  let boton = document.querySelector("button")
  boton.onclick = function(){
  	video.play()
  }
</script>
```
**004-ahora boton de parar.html**
```html
<video src="andrei.mp4" controls></video>
<button id="reproducir">Reproducir</button>
<button id="parar">Parar</button>
<script>
  let video = document.querySelector("video")
  let reproducir = document.querySelector("#reproducir")
  let parar = document.querySelector("#parar")
  reproducir.onclick = function(){
  	video.play()
  }
  parar.onclick = function(){
  	video.pause()
  }
</script>
```
**005-ahora volumen.html**
```html
<video src="andrei.mp4" controls></video>

<button id="reproducir">Reproducir</button>
<button id="parar">Parar</button>

<input type="range" id="volumen" min="0" max="1" step="0.01" value="1">

<script>
  let video = document.querySelector("video")
  let reproducir = document.querySelector("#reproducir")
  let parar = document.querySelector("#parar")
  let volumen = document.querySelector("#volumen")

  reproducir.onclick = function(){
    video.play()
  }

  parar.onclick = function(){
    video.pause()
  }

  volumen.oninput = function(){
    video.volume = this.value
  }
</script>
```
**006-ir a tiempo.html**
```html
<video src="andrei.mp4" controls></video>

<button id="reproducir">Reproducir</button>
<button id="parar">Parar</button>

<button id="adelante">Adelante</button>
<button id="atras">Atras</button>

<input type="range" id="volumen" min="0" max="1" step="0.01" value="1">

<script>
  let video = document.querySelector("video")
  let reproducir = document.querySelector("#reproducir")
  let parar = document.querySelector("#parar")
  let volumen = document.querySelector("#volumen")
  
  let adelante = document.querySelector("#adelante")
  let atras = document.querySelector("#atras")

  reproducir.onclick = function(){
    video.play()
  }

  parar.onclick = function(){
    video.pause()
  }
  
  adelante.onclick = function(){
    video.currentTime += 1
  }
  atras.onclick = function(){
    video.currentTime -= 1
  }

  volumen.oninput = function(){
    video.volume = this.value
  }
  
  
  console.log(video)
</script>
```
**007-progreso y numeros.html**
```html
<video src="andrei.mp4" controls></video>

<button id="reproducir">Reproducir</button>
<button id="parar">Parar</button>

<button id="adelante">Adelante</button>
<button id="atras">Atras</button>

<input type="range" id="volumen" min="0" max="1" step="0.01" value="1">
<input type="range" id="progreso" max=1 min=0 step=0.01>

<script>
  let video = document.querySelector("video")
  let reproducir = document.querySelector("#reproducir")
  let parar = document.querySelector("#parar")
  let volumen = document.querySelector("#volumen")
  
  let adelante = document.querySelector("#adelante")
  let atras = document.querySelector("#atras")
  let progreso = document.querySelector("#progreso")

  reproducir.onclick = function(){
    video.play()
  }

  parar.onclick = function(){
    video.pause()
  }
  
  adelante.onclick = function(){
    video.currentTime += 1
  }
  atras.onclick = function(){
    video.currentTime -= 1
  }

  volumen.oninput = function(){
    video.volume = this.value
  }
  
  video.ontimeupdate = function(){
      progreso.setAttribute("value",video.currentTime/video.duration)
  }
  progreso.onchange = function(){
  	video.currentTime = this.value*video.duration
  }
  
  console.log(video)
</script>
```
**008-un poco de interfaz.html**
```html
<video src="andrei.mp4"></video>
<div id="controles">
  <button id="reproducir">Reproducir</button>
  <button id="parar">Parar</button>

  <button id="adelante">Adelante</button>
  <button id="atras">Atras</button>

  <input type="range" id="volumen" min="0" max="1" step="0.01" value="1">
  <input type="range" id="progreso" max=1 min=0 step=0.01>
</div>

<script>
  let video = document.querySelector("video")
  let reproducir = document.querySelector("#reproducir")
  let parar = document.querySelector("#parar")
  let volumen = document.querySelector("#volumen")
  
  let adelante = document.querySelector("#adelante")
  let atras = document.querySelector("#atras")
  let progreso = document.querySelector("#progreso")

  reproducir.onclick = function(){
    video.play()
  }

  parar.onclick = function(){
    video.pause()
  }
  
  adelante.onclick = function(){
    video.currentTime += 1
  }
  atras.onclick = function(){
    video.currentTime -= 1
  }

  volumen.oninput = function(){
    video.volume = this.value
  }
  
  video.ontimeupdate = function(){
      progreso.setAttribute("value",video.currentTime/video.duration)
  }
  progreso.onchange = function(){
  	video.currentTime = this.value*video.duration
  }
  
  console.log(video)
</script>
```
**009-meto el video en un contenedor.html**
```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <video src="andrei.mp4"></video>
<div id="controles">
  <button id="reproducir">Reproducir</button>
  <button id="parar">Parar</button>

  <button id="adelante">Adelante</button>
  <button id="atras">Atras</button>

  <input type="range" id="volumen" min="0" max="1" step="0.01" value="1">
  <input type="range" id="progreso" max=1 min=0 step=0.01>
</div>

<script>
  let video = document.querySelector("video")
  let reproducir = document.querySelector("#reproducir")
  let parar = document.querySelector("#parar")
  let volumen = document.querySelector("#volumen")
  
  let adelante = document.querySelector("#adelante")
  let atras = document.querySelector("#atras")
  let progreso = document.querySelector("#progreso")

  reproducir.onclick = function(){
    video.play()
  }

  parar.onclick = function(){
    video.pause()
  }
  
  adelante.onclick = function(){
    video.currentTime += 1
  }
  atras.onclick = function(){
    video.currentTime -= 1
  }

  volumen.oninput = function(){
    video.volume = this.value
  }
  
  video.ontimeupdate = function(){
      progreso.setAttribute("value",video.currentTime/video.duration)
  }
  progreso.onchange = function(){
  	video.currentTime = this.value*video.duration
  }
  
  console.log(video)
  
  let videos = document.querySelectorAll("video")
  videos.forEach(function(video){
  	console.log("He atrapado un video")
    let contenedor = document.createElement("div")
    contenedor.classList.add("jvvideo")
    document.querySelector("body").appendChild(contenedor)
    video.remove()
    contenedor.appendChild(video)
  })
</script>
  </body>
</html>
```
**010-contenedor con controles.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    body{
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial, Helvetica, sans-serif;
      padding:20px;
    }

    .jvvideo{
      display:inline-block;
      padding:12px;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:10px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
    }

    .jvvideo video{
      display:block;
      width:600px;
      border-radius:6px;
      background:#000;
    }

    .controles{
      display:flex;
      gap:6px;
      padding:12px 0 2px;
      align-items:center;
    }

    .controles button{
      background:var(--azul);
      color:var(--blanco);
      border:none;
      border-radius:6px;
      padding:7px 12px;
      font-weight:bold;
      cursor:pointer;
      transition:background 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
    }

    .controles input[type=range]{
      accent-color:var(--naranja);
      cursor:pointer;
    }

    .progreso{
      flex:1;
    }

    .tiempo{
      color:var(--blanco);
      font-family:monospace;
      font-size:14px;
      white-space:nowrap;
      min-width:95px;
      text-align:right;
    }

    .tiempo .total{
      color:var(--naranja);
    }

    /* Toast */
    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }
  </style>
</head>

<body>

<video src="andrei.mp4"></video>

<script>

// ----------------------------
// UTILIDADES
// ----------------------------

// Convierte segundos a mm:ss
function formatoTiempo(segundos){
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0")
}

// Toast (un único elemento reutilizable)
let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}

let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // Crear contenedor
  let contenedor = document.createElement("div")
  contenedor.classList.add("jvvideo")

  // Insertarlo antes del vídeo
  video.parentNode.insertBefore(contenedor, video)

  // Meter vídeo dentro
  contenedor.appendChild(video)


  // ----------------------------
  // CREAR CONTROLES
  // ----------------------------

  let controles = document.createElement("div")
  controles.classList.add("controles")
  contenedor.appendChild(controles)


  // Reproducir
  let reproducir = document.createElement("button")
  reproducir.textContent = "Reproducir"
  controles.appendChild(reproducir)


  // Parar
  let parar = document.createElement("button")
  parar.textContent = "Parar"
  controles.appendChild(parar)


  // Atrás
  let atras = document.createElement("button")
  atras.textContent = "Atrás"
  controles.appendChild(atras)


  // Adelante
  let adelante = document.createElement("button")
  adelante.textContent = "Adelante"
  controles.appendChild(adelante)


  // Volumen
  let volumen = document.createElement("input")
  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1
  controles.appendChild(volumen)


  // Progreso
  let progreso = document.createElement("input")
  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0
  progreso.classList.add("progreso")
  controles.appendChild(progreso)


  // Tiempo / duración
  let tiempo = document.createElement("span")
  tiempo.classList.add("tiempo")
  tiempo.innerHTML = '00:00 / <span class="total">00:00</span>'
  controles.appendChild(tiempo)

  function actualizarTiempo(){
    let total = video.duration ? formatoTiempo(video.duration) : "00:00"
    tiempo.innerHTML = formatoTiempo(video.currentTime) + ' / <span class="total">' + total + '</span>'
  }

  video.onloadedmetadata = actualizarTiempo


  // ----------------------------
  // EVENTOS
  // ----------------------------

  reproducir.onclick = function(){
    video.play()
    mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
  }

  parar.onclick = function(){
    video.pause()
    mostrarToast("Parar", "El vídeo se ha pausado.")
  }

  adelante.onclick = function(){
    video.currentTime += 1
    mostrarToast("Adelante", "Avanzando 1 segundo...")
  }

  atras.onclick = function(){
    video.currentTime -= 1
    mostrarToast("Atrás", "Retrocediendo 1 segundo...")
  }

  volumen.oninput = function(){
    video.volume = this.value
  }

  video.ontimeupdate = function(){
    if(video.duration){
      progreso.value = video.currentTime / video.duration
    }
    actualizarTiempo()
  }

  progreso.oninput = function(){
    video.currentTime = this.value * video.duration
  }

})

</script>

</body>
</html>
```
**011-reproductor personalizado.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* REPRODUCTOR */
    .jvvideo{
      position:relative;
      display:inline-block;
      overflow:hidden;
      border-radius:14px;
      background:var(--negro);
      border:3px solid var(--azul);
      box-shadow:0 20px 60px rgba(17,24,39,0.45);
    }

    .jvvideo video{
      display:block;
      width:800px;
      max-width:100%;
    }


    /* ========================= */
    /* CONTROLES */
    /* ========================= */

    .controles{
      position:absolute;
      left:0;
      right:0;
      bottom:0;

      display:flex;
      align-items:center;
      gap:8px;

      padding:35px 14px 12px 14px;

      background:
        linear-gradient(
          transparent,
          rgba(17,24,39,0.92)
        );

      opacity:0;
      transform:translateY(15px);

      transition:
        opacity 0.3s ease,
        transform 0.3s ease;

      pointer-events:none;
    }


    /* MOSTRAR AL PASAR EL RATÓN */

    .jvvideo:hover .controles{
      opacity:1;
      transform:translateY(0);
      pointer-events:auto;
    }


    /* ========================= */
    /* BOTONES */
    /* ========================= */

    .controles button{
      width:38px;
      height:38px;
      flex-shrink:0;

      border:none;
      border-radius:50%;

      background:var(--azul);
      color:var(--blanco);

      font-size:17px;

      cursor:pointer;

      display:flex;
      justify-content:center;
      align-items:center;

      transition:
        background 0.2s,
        transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }


    /* ========================= */
    /* SLIDERS */
    /* ========================= */

    .controles input[type="range"]{
      appearance:none;
      height:4px;

      background:rgba(255,255,255,0.3);

      border-radius:10px;

      cursor:pointer;

      outline:none;
    }

    .controles input[type="range"]::-webkit-slider-thumb{
      appearance:none;

      width:13px;
      height:13px;

      border-radius:50%;

      background:var(--naranja);

      box-shadow:0 0 5px rgba(0,0,0,0.5);
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* VOLUMEN */

    .volumen{
      width:80px;
    }


    /* PROGRESO */

    .progreso{
      flex:1;
    }


    /* TIEMPO / DURACIÓN */

    .tiempo{
      color:var(--blanco);
      font-family:monospace;
      font-size:14px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>

<body>

<video src="andrei.mp4"></video>


<script>

// =========================
// UTILIDADES
// =========================

// Convierte segundos a mm:ss
function formatoTiempo(segundos){
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0")
}

// Toast (un único elemento reutilizable)
let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}


let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // =========================
  // CONTENEDOR
  // =========================

  let contenedor = document.createElement("div")
  contenedor.classList.add("jvvideo")

  video.parentNode.insertBefore(contenedor,video)

  contenedor.appendChild(video)


  // =========================
  // CONTROLES
  // =========================

  let controles = document.createElement("div")
  controles.classList.add("controles")

  contenedor.appendChild(controles)


  // ATRÁS

  let atras = document.createElement("button")
  atras.textContent = "↶"
  atras.title = "Retroceder"

  controles.appendChild(atras)


  // PLAY

  let reproducir = document.createElement("button")
  reproducir.textContent = "▶"
  reproducir.title = "Reproducir"

  controles.appendChild(reproducir)


  // ADELANTE

  let adelante = document.createElement("button")
  adelante.textContent = "↷"
  adelante.title = "Avanzar"

  controles.appendChild(adelante)


  // PROGRESO

  let progreso = document.createElement("input")

  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0

  progreso.classList.add("progreso")

  controles.appendChild(progreso)


  // TIEMPO / DURACIÓN

  let tiempo = document.createElement("span")
  tiempo.classList.add("tiempo")
  tiempo.innerHTML = '00:00 / <span class="total">00:00</span>'

  controles.appendChild(tiempo)

  function actualizarTiempo(){
    let total = video.duration ? formatoTiempo(video.duration) : "00:00"
    tiempo.innerHTML = formatoTiempo(video.currentTime) + ' / <span class="total">' + total + '</span>'
  }

  video.onloadedmetadata = actualizarTiempo


  // VOLUMEN

  let volumen = document.createElement("input")

  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1

  volumen.classList.add("volumen")

  controles.appendChild(volumen)


  // =========================
  // EVENTOS
  // =========================

  // Play / pausa (lo usan el botón y el clic en el vídeo)
  function alternarReproduccion(){

    if(video.paused){

      video.play()

      reproducir.textContent = "❚❚"
      reproducir.title = "Pausar"

      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")

    }else{

      video.pause()

      reproducir.textContent = "▶"
      reproducir.title = "Reproducir"

      mostrarToast("Pausar", "El vídeo se ha pausado.")

    }

  }

  reproducir.onclick = alternarReproduccion


  adelante.onclick = function(){

    video.currentTime += 5

    mostrarToast("Avanzar", "Avanzando 5 segundos...")

  }


  atras.onclick = function(){

    video.currentTime -= 5

    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")

  }


  volumen.oninput = function(){

    video.volume = this.value

  }


  video.ontimeupdate = function(){

    if(video.duration){

      progreso.value =
        video.currentTime / video.duration

    }

    actualizarTiempo()

  }


  progreso.oninput = function(){

    video.currentTime =
      this.value * video.duration

  }


  // CLICK EN EL VIDEO = PLAY / PAUSE

  video.onclick = alternarReproduccion

})

</script>

</body>
</html>

```
### 002-Arquitectura del API utilizado
**000-Introducción.md**
```markdown
# Arquitectura del API utilizado
- Arquitectura del API utilizado
	- Concepto y finalidad
	- Características principales
	- Elementos que intervienen
	- Funcionamiento y operaciones
	- Aplicación práctica
	- Buenas prácticas

```
**001-audio.html**
```html
<audio src="0802.mp3" controls></audio>
```
**002-muestras.html**
```html
<audio src="0802.mp3" controls></audio>

<script>
fetch("0802.mp3")
  .then(respuesta => respuesta.arrayBuffer())
  .then(datos => {
    let contexto = new AudioContext()

    contexto.decodeAudioData(datos, function(buffer){
      let samples = buffer.getChannelData(0)

      console.log(samples)
    })
  })
</script>
```
**003-pintar.html**
```html
<audio src="0802.mp3" controls></audio>
<canvas width="800" height="200"></canvas>

<script>
let lienzo = document.querySelector("canvas")
let contextolienzo = lienzo.getContext("2d")

fetch("0802.mp3")
  .then(respuesta => respuesta.arrayBuffer())
  .then(datos => {
    let contexto = new AudioContext()

    contexto.decodeAudioData(datos, function(buffer){

      let samples = buffer.getChannelData(0)

      let ancho = 800
      let medio = 100

      // Cuántos samples saltamos por cada píxel
      let salto = Math.floor(samples.length / ancho)

      for(let x = 0; x < ancho; x++){

        let i = x * salto
        let valor = samples[i]

        contextolienzo.fillRect(
          x,
          medio,
          1,
          valor * 100
        )
      }
    })
  })
</script>
```
**004-tipo spotify.html**
```html
<audio src="0802.mp3" controls></audio>

<br><br>

<canvas width="800" height="200"></canvas>

<script>
let lienzo = document.querySelector("canvas")
let ctx = lienzo.getContext("2d")

fetch("0802.mp3")
  .then(respuesta => respuesta.arrayBuffer())
  .then(datos => {

    let contexto = new AudioContext()

    contexto.decodeAudioData(datos, function(buffer){

      let samples = buffer.getChannelData(0)

      let ancho = lienzo.width
      let alto = lienzo.height
      let medio = alto / 2

      // Número de barras
      let barras = 100

      // Separación entre barras
      let separacion = 3

      // Anchura de cada barra
      let anchoBarra = ancho / barras - separacion

      // Samples contenidos en cada barra
      let salto = Math.floor(samples.length / barras)

      for(let x = 0; x < barras; x++){

        // Buscamos el máximo dentro de este bloque
        let maximo = 0

        for(let i = 0; i < salto; i++){
          let valor = Math.abs(samples[x * salto + i])

          if(valor > maximo){
            maximo = valor
          }
        }

        // Altura visual
        let altura = maximo * medio * 0.9

        // Altura mínima
        altura = Math.max(altura, 3)

        let posicionX = x * (anchoBarra + separacion)

        // Barra simétrica respecto al centro
        ctx.beginPath()

        ctx.roundRect(
          posicionX,
          medio - altura,
          anchoBarra,
          altura * 2,
          anchoBarra / 2
        )

        ctx.fill()
      }
    })
  })
</script>
```
**005-avance.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:20px;
      padding:30px 16px;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* ========================= */
    /* REPRODUCTOR */
    /* ========================= */

    .reproductor{
      width:100%;
      max-width:840px;
      padding:20px;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:14px;
      box-shadow:0 20px 60px rgba(17,24,39,0.35);
    }

    canvas{
      display:block;
      width:100%;
      height:auto;
      cursor:pointer;
    }

    .controles{
      display:flex;
      align-items:center;
      gap:8px;
      margin-top:14px;
    }

    .controles button{
      width:38px;
      height:38px;
      flex-shrink:0;
      border:none;
      border-radius:50%;
      background:var(--azul);
      color:var(--blanco);
      font-size:17px;
      cursor:pointer;
      display:flex;
      justify-content:center;
      align-items:center;
      transition:background 0.2s, transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }

    .tiempo{
      color:var(--blanco);
      font-family:monospace;
      font-size:14px;
      white-space:nowrap;
      margin-left:6px;
    }

    .tiempo .total{
      color:var(--naranja);
    }

    .espacio{
      flex:1;
    }

    .volumen{
      width:90px;
      accent-color:var(--naranja);
      cursor:pointer;
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:100%;
      max-width:840px;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }
  </style>
</head>

<body>

<!-- Sin "controls": usamos nuestros propios controles -->
<audio src="0802.mp3"></audio>

<div class="reproductor">

  <canvas width="800" height="200"></canvas>

  <div class="controles">
    <button class="atras" title="Retroceder">↶</button>
    <button class="reproducir" title="Reproducir">▶</button>
    <button class="adelante" title="Avanzar">↷</button>

    <span class="tiempo">00:00 / <span class="total">00:00</span></span>

    <span class="espacio"></span>

    <input class="volumen" type="range" min="0" max="1" step="0.01" value="1" title="Volumen">
  </div>

</div>

<div class="transcripcion">
  <h2>Transcripción</h2>
  <div class="lineas">
    <div class="aviso">Cargando transcripción...</div>
  </div>
</div>


<script>

// =========================
// ELEMENTOS
// =========================

let audio = document.querySelector("audio")
let lienzo = document.querySelector("canvas")
let ctx = lienzo.getContext("2d")

let botonAtras = document.querySelector(".atras")
let botonReproducir = document.querySelector(".reproducir")
let botonAdelante = document.querySelector(".adelante")
let tiempo = document.querySelector(".tiempo")
let volumen = document.querySelector(".volumen")
let lineas = document.querySelector(".lineas")

let alturas = []


// =========================
// UTILIDADES
// =========================

// Convierte segundos a mm:ss
function formatoTiempo(segundos){
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0")
}

// Toast (un único elemento reutilizable)
let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}


// =========================
// FORMA DE ONDA
// =========================

fetch("0802.mp3")
  .then(respuesta => respuesta.arrayBuffer())
  .then(datos => {

    let contexto = new AudioContext()

    contexto.decodeAudioData(datos, function(buffer){

      let samples = buffer.getChannelData(0)

      let barras = 70
      let salto = Math.floor(samples.length / barras)

      // Calculamos las alturas una sola vez
      for(let x = 0; x < barras; x++){

        let maximo = 0

        for(let i = 0; i < salto; i++){

          let valor = Math.abs(
            samples[x * salto + i]
          )

          if(valor > maximo){
            maximo = valor
          }
        }

        alturas.push(maximo)
      }

      dibujar(0)
    })
  })


function dibujar(progreso){

  let ancho = lienzo.width
  let alto = lienzo.height
  let medio = alto / 2

  let barras = alturas.length
  let separacion = 5
  let anchoBarra = ancho / barras - separacion

  // Limpiamos canvas
  ctx.clearRect(0,0,ancho,alto)

  for(let x = 0; x < barras; x++){

    let altura = alturas[x] * medio * 0.85

    // Altura mínima
    altura = Math.max(altura,4)

    let posicionX = x * (anchoBarra + separacion)

    // ¿Esta barra ya se ha reproducido?
    if(x / barras < progreso){
      ctx.fillStyle = "#f97316"   // naranja
    }else{
      ctx.fillStyle = "#1d4ed8"   // azul
    }

    ctx.beginPath()

    ctx.roundRect(
      posicionX,
      medio - altura,
      anchoBarra,
      altura * 2,
      anchoBarra / 2
    )

    ctx.fill()
  }
}


// Clic en la onda = saltar a ese punto
lienzo.addEventListener("click", function(e){
  if(!audio.duration) return
  let proporcion = e.offsetX / lienzo.clientWidth
  audio.currentTime = proporcion * audio.duration
  mostrarToast("Onda", "Saltando a " + formatoTiempo(audio.currentTime))
})


// =========================
// CONTROLES
// =========================

function actualizarTiempo(){
  let total = audio.duration ? formatoTiempo(audio.duration) : "00:00"
  tiempo.innerHTML = formatoTiempo(audio.currentTime) + ' / <span class="total">' + total + '</span>'
}

audio.addEventListener("loadedmetadata", actualizarTiempo)

botonReproducir.addEventListener("click", function(){
  if(audio.paused){
    audio.play()
    mostrarToast("Reproducir", "El audio se está reproduciendo...")
  }else{
    audio.pause()
    mostrarToast("Pausar", "El audio se ha pausado.")
  }
})

botonAdelante.addEventListener("click", function(){
  audio.currentTime += 5
  mostrarToast("Avanzar", "Avanzando 5 segundos...")
})

botonAtras.addEventListener("click", function(){
  audio.currentTime -= 5
  mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
})

volumen.addEventListener("input", function(){
  audio.volume = this.value
})

// Cambiar el icono según el estado
audio.addEventListener("play", function(){
  botonReproducir.textContent = "❚❚"
  botonReproducir.title = "Pausar"
})

audio.addEventListener("pause", function(){
  botonReproducir.textContent = "▶"
  botonReproducir.title = "Reproducir"
})


// Conforme avanza el audio
audio.addEventListener("timeupdate", function(){

  let progreso = audio.currentTime / audio.duration

  dibujar(progreso)
  actualizarTiempo()
  resaltarLinea()
})


// =========================
// TRANSCRIPCIÓN (archivo WebVTT)
// =========================

let frases = []   // [{inicio, fin, texto, elemento}]

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

fetch("0802.vtt")
  .then(function(respuesta){
    if(!respuesta.ok) throw new Error("No existe")
    return respuesta.text()
  })
  .then(function(texto){

    // Cada bloque separado por una línea en blanco es una frase
    let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

    bloques.forEach(function(bloque){
      let filas = bloque.split("\n")
      let indice = filas.findIndex(f => f.includes("-->"))
      if(indice === -1) return

      let tiempos = filas[indice].split("-->")
      frases.push({
        inicio: aSegundos(tiempos[0]),
        fin: aSegundos(tiempos[1].trim().split(" ")[0]),
        texto: filas.slice(indice + 1).join(" ")
      })
    })

    pintarTranscripcion()
  })
  .catch(function(){
    lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (0802.vtt).</div>'
  })


function pintarTranscripcion(){

  lineas.innerHTML = ""

  frases.forEach(function(frase){

    let linea = document.createElement("div")
    linea.classList.add("linea")

    let marca = document.createElement("span")
    marca.classList.add("marca")
    marca.textContent = formatoTiempo(frase.inicio)

    let texto = document.createElement("span")
    texto.textContent = frase.texto

    linea.appendChild(marca)
    linea.appendChild(texto)
    lineas.appendChild(linea)

    // Clic en una frase = saltar a ese momento
    linea.addEventListener("click", function(){
      audio.currentTime = frase.inicio
      mostrarToast("Transcripción", "Saltando a " + formatoTiempo(frase.inicio))
    })

    frase.elemento = linea
  })
}


function resaltarLinea(){

  frases.forEach(function(frase){

    let activa = audio.currentTime >= frase.inicio && audio.currentTime < frase.fin

    if(activa && !frase.elemento.classList.contains("activa")){
      frase.elemento.classList.add("activa")
      // Desplazar la lista para que se vea la frase actual
      lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
    }

    if(!activa){
      frase.elemento.classList.remove("activa")
    }
  })
}

</script>

</body>
</html>

```
**006-reproductor completo.html**
```html
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  min-height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;

  padding:30px 0;

  background:var(--blanco);
  color:var(--negro);

  font-family:Arial,sans-serif;
}


/* ======================================== */
/* REPRODUCTOR */
/* ======================================== */

.jvaudio{

  width:800px;
  max-width:90vw;

  padding:20px;

  display:flex;
  align-items:center;

  gap:12px;

  background:var(--negro);

  border:3px solid var(--azul);

  border-radius:18px;

  box-shadow:
    0 20px 60px rgba(17,24,39,0.35);

  overflow:hidden;
}


/* Ocultamos el reproductor original */

.jvaudio audio{
  display:none;
}


/* ======================================== */
/* BOTONES */
/* ======================================== */

.jvaudio button{

  flex:0 0 44px;

  width:44px;
  height:44px;

  border:none;
  border-radius:50%;

  background:var(--azul);
  color:var(--blanco);

  font-size:17px;

  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  transition:
    transform 0.2s,
    background 0.2s;
}


.jvaudio button:hover{

  transform:scale(1.08);

  background:var(--naranja);

}


.jvaudio button:active{

  transform:scale(0.95);

}


/* ======================================== */
/* TIEMPO */
/* ======================================== */

.tiempo{
  flex:0 0 auto;

  white-space:nowrap;

  font-family:monospace;

  font-size:13px;

  color:var(--blanco);

  text-align:center;

}


/* ======================================== */
/* WAVEFORM */
/* ======================================== */

.waveform{

  /*
    Ocupa únicamente el espacio
    que queda disponible
  */

  flex:1 1 0;

  min-width:0;

  width:0;

  height:80px;

  display:block;

  cursor:pointer;

}


/* ======================================== */
/* VOLUMEN */
/* ======================================== */

.volumen{

  flex:0 0 80px;

  width:80px;

  appearance:none;
  -webkit-appearance:none;

  height:4px;

  background:rgba(255,255,255,0.3);

  border-radius:10px;

  cursor:pointer;

  outline:none;

}


.volumen::-webkit-slider-thumb{

  appearance:none;
  -webkit-appearance:none;

  width:13px;
  height:13px;

  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;

}


.volumen::-moz-range-thumb{

  width:13px;
  height:13px;

  border:none;

  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;

}


/* ======================================== */
/* RESPONSIVE */
/* ======================================== */

@media(max-width:600px){

  .jvaudio{

    gap:7px;

    padding:12px;

  }


  .jvaudio button{

    flex-basis:36px;

    width:36px;
    height:36px;

  }


  .volumen{

    flex-basis:50px;

    width:50px;

  }


  .tiempo{
    font-size:10px;

  }

}

/* ======================================== */
/* PALETA */
/* ======================================== */

:root{
  --azul:#1d4ed8;
  --naranja:#f97316;
  --blanco:#ffffff;
  --negro:#111827;
}

.tiempo .total{
  color:var(--naranja);
}


/* ======================================== */
/* TRANSCRIPCIÓN */
/* ======================================== */

.transcripcion{
  width:800px;
  max-width:90vw;
  border:2px solid var(--negro);
  border-radius:14px;
  overflow:hidden;
  background:var(--blanco);
}

.transcripcion h2{
  margin:0;
  padding:12px 18px;
  font-size:17px;
  background:var(--azul);
  color:var(--blanco);
}

.lineas{
  max-height:260px;
  overflow-y:auto;
  padding:8px;
}

.linea{
  display:flex;
  gap:12px;
  padding:8px 10px;
  border-radius:8px;
  cursor:pointer;
  line-height:1.4;
  transition:background 0.2s;
}

.linea:hover{
  background:#eff6ff;
}

.linea .marca{
  color:var(--azul);
  font-family:monospace;
  font-weight:bold;
  flex-shrink:0;
}

.linea.activa{
  background:var(--naranja);
  color:var(--blanco);
}

.linea.activa .marca{
  color:var(--negro);
}

.aviso{
  padding:12px 10px;
  color:#6b7280;
}


/* ======================================== */
/* TOAST */
/* ======================================== */

.toast{
  position:fixed;
  bottom:24px;
  right:24px;
  background:var(--negro);
  color:var(--blanco);
  border-left:6px solid var(--naranja);
  border-radius:8px;
  padding:12px 18px;
  box-shadow:0 6px 18px rgba(17,24,39,0.35);
  opacity:0;
  transform:translateY(20px);
  transition:opacity 0.3s, transform 0.3s;
  pointer-events:none;
  z-index:1000;
}

.toast.visible{
  opacity:1;
  transform:translateY(0);
}

.toast strong{
  display:block;
  color:var(--naranja);
  margin-bottom:3px;
}

</style>
</head>

<body>


<!-- ======================================== -->
<!-- AUDIO ORIGINAL -->
<!-- ======================================== -->

<audio src="0802.mp3"></audio>



<script>

// ========================================
// TOAST
// ========================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================
// TRANSCRIPCIÓN (archivo WebVTT)
// ========================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

// segundos -> m:ss
function marcaCorta(segundos){
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el audio
  (0802.mp3 -> 0802.vtt).
*/
function crearTranscripcion(audio, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = audio.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          audio.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  audio.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = audio.currentTime >= frase.inicio && audio.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let audios = document.querySelectorAll("audio")


audios.forEach(function(audio){


  // ========================================
  // CONTENEDOR
  // ========================================

  let contenedor = document.createElement("div")

  contenedor.classList.add("jvaudio")


  audio.parentNode.insertBefore(
    contenedor,
    audio
  )


  contenedor.appendChild(audio)


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(audio, contenedor)



  // ========================================
  // BOTÓN ATRÁS
  // ========================================

  let atras = document.createElement("button")

  atras.textContent = "↶"

  atras.title = "Retroceder 5 segundos"

  contenedor.appendChild(atras)



  // ========================================
  // BOTÓN PLAY
  // ========================================

  let reproducir = document.createElement("button")

  reproducir.textContent = "▶"

  reproducir.title = "Reproducir"

  contenedor.appendChild(reproducir)



  // ========================================
  // BOTÓN ADELANTE
  // ========================================

  let adelante = document.createElement("button")

  adelante.textContent = "↷"

  adelante.title = "Avanzar 5 segundos"

  contenedor.appendChild(adelante)



  // ========================================
  // TIEMPO
  // ========================================

  let tiempo = document.createElement("div")

  tiempo.classList.add("tiempo")

  tiempo.innerHTML = '0:00 / <span class="total">0:00</span>'

  contenedor.appendChild(tiempo)



  // ========================================
  // CANVAS WAVEFORM
  // ========================================

  let canvas = document.createElement("canvas")

  canvas.height = 80

  canvas.classList.add("waveform")

  contenedor.appendChild(canvas)


  let ctx = canvas.getContext("2d")



  // ========================================
  // VOLUMEN
  // ========================================

  let volumen = document.createElement("input")

  volumen.type = "range"

  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1

  volumen.classList.add("volumen")

  contenedor.appendChild(volumen)



  // ========================================
  // DATOS WAVEFORM
  // ========================================

  let alturas = []

  let numeroBarras = 90



  // ========================================
  // CARGAR AUDIO
  // ========================================

  fetch(audio.src)

    .then(function(respuesta){

      return respuesta.arrayBuffer()

    })

    .then(function(datos){

      let contextoAudio = new AudioContext()


      contextoAudio.decodeAudioData(

        datos,

        function(buffer){


          let samples =
            buffer.getChannelData(0)


          let salto =
            Math.floor(
              samples.length /
              numeroBarras
            )



          // =================================
          // CALCULAR ALTURAS
          // =================================

          for(
            let barra = 0;
            barra < numeroBarras;
            barra++
          ){

            let maximo = 0


            let inicio =
              barra * salto


            let final =
              Math.min(
                inicio + salto,
                samples.length
              )



            /*
              Tomamos aproximadamente
              100 muestras por barra.

              Así no recorremos millones
              de samples innecesariamente.
            */

            let subSalto =
              Math.max(
                1,
                Math.floor(salto / 100)
              )



            for(
              let i = inicio;
              i < final;
              i += subSalto
            ){

              let valor =
                Math.abs(samples[i])


              if(valor > maximo){

                maximo = valor

              }

            }



            alturas.push(maximo)

          }


          dibujar()

        }

      )

    })



  // ========================================
  // DIBUJAR WAVEFORM
  // ========================================

  function dibujar(){


    /*
      Adaptamos la resolución interna
      del canvas al ancho real disponible.
    */

    let anchoReal =
      Math.floor(canvas.clientWidth)


    if(anchoReal <= 0){
      return
    }


    if(canvas.width != anchoReal){

      canvas.width = anchoReal

    }



    let ancho = canvas.width

    let alto = canvas.height

    let medio = alto / 2



    // ========================================
    // CONFIGURACIÓN VISUAL
    // ========================================

    let separacion = 3



    /*
      Restamos primero TODAS las
      separaciones.

      El espacio restante se divide
      entre las barras.
    */

    let espacioSeparaciones =
      separacion *
      (numeroBarras - 1)


    let anchoBarra =
      (
        ancho -
        espacioSeparaciones
      )
      /
      numeroBarras



    /*
      Si el reproductor es extremadamente
      pequeño reducimos automáticamente
      la separación.
    */

    if(anchoBarra < 1){

      separacion = 1


      espacioSeparaciones =
        separacion *
        (numeroBarras - 1)


      anchoBarra =
        (
          ancho -
          espacioSeparaciones
        )
        /
        numeroBarras

    }



    ctx.clearRect(
      0,
      0,
      ancho,
      alto
    )



    // ========================================
    // PROGRESO
    // ========================================

    let progreso = 0


    if(
      audio.duration &&
      !isNaN(audio.duration)
    ){

      progreso =
        audio.currentTime /
        audio.duration

    }



    // ========================================
    // BARRAS
    // ========================================

    for(
      let i = 0;
      i < alturas.length;
      i++
    ){


      let altura =
        alturas[i] *
        medio *
        0.85



      // Altura mínima

      altura =
        Math.max(
          altura,
          3
        )



      // Posición horizontal

      let x =
        i *
        (
          anchoBarra +
          separacion
        )



      // =====================================
      // COLOR SEGÚN PROGRESO
      // =====================================

      if(
        i / numeroBarras
        <= progreso
      ){

        ctx.fillStyle = "#f97316"   // naranja (reproducido)

      }else{

        ctx.fillStyle = "#1d4ed8"   // azul (pendiente)

      }



      // =====================================
      // BARRA REDONDEADA
      // =====================================

      ctx.beginPath()


      ctx.roundRect(

        x,

        medio - altura,

        Math.max(1,anchoBarra),

        altura * 2,

        Math.max(1,anchoBarra) / 2

      )


      ctx.fill()

    }

  }



  // ========================================
  // PLAY / PAUSE
  // ========================================

  reproducir.onclick = function(){

    if(audio.paused){

      audio.play()

      mostrarToast("Reproducir", "El audio se está reproduciendo...")

    }else{

      audio.pause()

      mostrarToast("Pausar", "El audio se ha pausado.")

    }

  }



  audio.onplay = function(){

    reproducir.textContent = "❚❚"

  }



  audio.onpause = function(){

    reproducir.textContent = "▶"

  }



  audio.onended = function(){

    reproducir.textContent = "▶"

  }



  // ========================================
  // ADELANTE
  // ========================================

  adelante.onclick = function(){


    if(!audio.duration){
      return
    }


    audio.currentTime =
      Math.min(
        audio.currentTime + 5,
        audio.duration
      )

    mostrarToast("Avanzar", "Avanzando 5 segundos...")

  }



  // ========================================
  // ATRÁS
  // ========================================

  atras.onclick = function(){


    audio.currentTime =
      Math.max(
        audio.currentTime - 5,
        0
      )

    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")

  }



  // ========================================
  // VOLUMEN
  // ========================================

  volumen.oninput = function(){

    audio.volume =
      this.value

  }



  // ========================================
  // TIEMPO ACTUAL / DURACIÓN
  // ========================================

  function actualizarTiempo(){

    let total = audio.duration
      ? formatearTiempo(audio.duration)
      : "0:00"

    tiempo.innerHTML =
      formatearTiempo(audio.currentTime) +
      ' / <span class="total">' + total + '</span>'

  }


  audio.onloadedmetadata = actualizarTiempo



  // ========================================
  // ACTUALIZAR REPRODUCCIÓN
  // ========================================

  audio.ontimeupdate = function(){


    dibujar()


    actualizarTiempo()

  }



  // ========================================
  // CLICK EN WAVEFORM
  // ========================================

  canvas.onclick = function(evento){

    cambiarPosicion(evento)

    mostrarToast("Onda", "Saltando a " + formatearTiempo(audio.currentTime))

  }



  // ========================================
  // ARRASTRAR WAVEFORM
  // ========================================

  let arrastrando = false



  canvas.onmousedown = function(evento){

    arrastrando = true

    cambiarPosicion(evento)

  }



  window.addEventListener(

    "mousemove",

    function(evento){


      if(arrastrando){

        cambiarPosicion(evento)

      }

    }

  )



  window.addEventListener(

    "mouseup",

    function(){

      arrastrando = false

    }

  )



  // ========================================
  // CAMBIAR POSICIÓN
  // ========================================

  function cambiarPosicion(evento){


    if(
      !audio.duration ||
      isNaN(audio.duration)
    ){
      return
    }


    let rect =
      canvas.getBoundingClientRect()


    let x =
      evento.clientX -
      rect.left



    // Limitamos al canvas

    x =
      Math.max(
        0,
        Math.min(
          x,
          rect.width
        )
      )



    let porcentaje =
      x /
      rect.width



    audio.currentTime =
      porcentaje *
      audio.duration


    dibujar()

  }



  // ========================================
  // FORMATEAR TIEMPO
  // ========================================

  function formatearTiempo(segundos){


    if(isNaN(segundos)){
      return "0:00"
    }


    let minutos =
      Math.floor(
        segundos / 60
      )


    let resto =
      Math.floor(
        segundos % 60
      )


    if(resto < 10){

      resto =
        "0" + resto

    }


    return minutos + ":" + resto

  }



  // ========================================
  // REDIMENSIONAR
  // ========================================

  window.addEventListener(

    "resize",

    function(){

      dibujar()

    }

  )


})

</script>

</body>
</html>
```
**007-personalizacion.html**
```html
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  min-height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;

  padding:30px 0;

  background:var(--blanco);
  color:var(--negro);

  font-family:Arial,sans-serif;
}


/* ======================================== */
/* REPRODUCTOR */
/* ======================================== */

.jvaudio{
  width:800px;
  max-width:90vw;

  padding:20px;

  display:flex;
  align-items:center;
  gap:12px;

  background:var(--negro);

  border:3px solid var(--azul);

  border-radius:18px;

  box-shadow:
    0 20px 60px rgba(17,24,39,0.35);

  overflow:hidden;
}

.jvaudio audio{
  display:none;
}


/* ======================================== */
/* BOTONES */
/* ======================================== */

.jvaudio button{
  flex:0 0 44px;

  width:44px;
  height:44px;

  border:none;
  border-radius:50%;

  background:var(--azul);
  color:var(--blanco);

  font-size:17px;

  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  transition:
    transform 0.2s,
    background 0.2s;
}

.jvaudio button:hover{
  transform:scale(1.08);
  background:var(--naranja);
}

.jvaudio button:active{
  transform:scale(0.95);
}


/* ======================================== */
/* TIEMPO */
/* ======================================== */

.tiempo{
  flex:0 0 auto;

  white-space:nowrap;

  font-family:monospace;

  font-size:13px;

  color:var(--blanco);

  text-align:center;
}


/* ======================================== */
/* WAVEFORM */
/* ======================================== */

.waveform{
  flex:1 1 0;

  min-width:0;

  width:0;
  height:80px;

  display:block;

  cursor:pointer;
}


/* ======================================== */
/* VOLUMEN */
/* ======================================== */

.volumen{
  flex:0 0 80px;

  width:80px;

  appearance:none;
  -webkit-appearance:none;

  height:4px;

  background:rgba(255,255,255,0.3);

  border-radius:10px;

  cursor:pointer;

  outline:none;
}

.volumen::-webkit-slider-thumb{
  appearance:none;
  -webkit-appearance:none;

  width:13px;
  height:13px;

  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;
}

.volumen::-moz-range-thumb{
  width:13px;
  height:13px;

  border:none;
  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;
}


/* ======================================== */
/* RESPONSIVE */
/* ======================================== */

@media(max-width:600px){

  .jvaudio{
    gap:7px;
    padding:12px;
  }

  .jvaudio button{
    flex-basis:36px;
    width:36px;
    height:36px;
  }

  .volumen{
    flex-basis:50px;
    width:50px;
  }

  .tiempo{
    font-size:10px;
  }

}

/* ======================================== */
/* PALETA */
/* ======================================== */

:root{
  --azul:#1d4ed8;
  --naranja:#f97316;
  --blanco:#ffffff;
  --negro:#111827;
}

.tiempo .total{
  color:var(--naranja);
}


/* ======================================== */
/* TRANSCRIPCIÓN */
/* ======================================== */

.transcripcion{
  width:800px;
  max-width:90vw;
  border:2px solid var(--negro);
  border-radius:14px;
  overflow:hidden;
  background:var(--blanco);
}

.transcripcion h2{
  margin:0;
  padding:12px 18px;
  font-size:17px;
  background:var(--azul);
  color:var(--blanco);
}

.lineas{
  max-height:260px;
  overflow-y:auto;
  padding:8px;
}

.linea{
  display:flex;
  gap:12px;
  padding:8px 10px;
  border-radius:8px;
  cursor:pointer;
  line-height:1.4;
  transition:background 0.2s;
}

.linea:hover{
  background:#eff6ff;
}

.linea .marca{
  color:var(--azul);
  font-family:monospace;
  font-weight:bold;
  flex-shrink:0;
}

.linea.activa{
  background:var(--naranja);
  color:var(--blanco);
}

.linea.activa .marca{
  color:var(--negro);
}

.aviso{
  padding:12px 10px;
  color:#6b7280;
}


/* ======================================== */
/* TOAST */
/* ======================================== */

.toast{
  position:fixed;
  bottom:24px;
  right:24px;
  background:var(--negro);
  color:var(--blanco);
  border-left:6px solid var(--naranja);
  border-radius:8px;
  padding:12px 18px;
  box-shadow:0 6px 18px rgba(17,24,39,0.35);
  opacity:0;
  transform:translateY(20px);
  transition:opacity 0.3s, transform 0.3s;
  pointer-events:none;
  z-index:1000;
}

.toast.visible{
  opacity:1;
  transform:translateY(0);
}

.toast strong{
  display:block;
  color:var(--naranja);
  margin-bottom:3px;
}

</style>
</head>

<body>


<audio src="0802.mp3"></audio>


<script>

// ========================================
// TOAST
// ========================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================
// TRANSCRIPCIÓN (archivo WebVTT)
// ========================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

// segundos -> m:ss
function marcaCorta(segundos){
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el audio
  (0802.mp3 -> 0802.vtt).
*/
function crearTranscripcion(audio, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = audio.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          audio.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  audio.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = audio.currentTime >= frase.inicio && audio.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let audios = document.querySelectorAll("audio")

audios.forEach(function(audio){


  // ========================================
  // CONTENEDOR
  // ========================================

  let contenedor = document.createElement("div")

  contenedor.classList.add("jvaudio")

  audio.parentNode.insertBefore(
    contenedor,
    audio
  )

  contenedor.appendChild(audio)


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(audio, contenedor)



  // ========================================
  // ATRÁS
  // ========================================

  let atras = document.createElement("button")

  atras.textContent = "↶"
  atras.title = "Retroceder 5 segundos"

  contenedor.appendChild(atras)



  // ========================================
  // PLAY
  // ========================================

  let reproducir = document.createElement("button")

  reproducir.textContent = "▶"
  reproducir.title = "Reproducir"

  contenedor.appendChild(reproducir)



  // ========================================
  // ADELANTE
  // ========================================

  let adelante = document.createElement("button")

  adelante.textContent = "↷"
  adelante.title = "Avanzar 5 segundos"

  contenedor.appendChild(adelante)



  // ========================================
  // TIEMPO
  // ========================================

  let tiempo = document.createElement("div")

  tiempo.classList.add("tiempo")

  tiempo.innerHTML = '0:00 / <span class="total">0:00</span>'

  contenedor.appendChild(tiempo)



  // ========================================
  // CANVAS
  // ========================================

  let canvas = document.createElement("canvas")

  canvas.height = 80

  canvas.classList.add("waveform")

  contenedor.appendChild(canvas)

  let ctx = canvas.getContext("2d")



  // ========================================
  // VOLUMEN
  // ========================================

  let volumen = document.createElement("input")

  volumen.type = "range"

  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1

  volumen.classList.add("volumen")

  contenedor.appendChild(volumen)



  // ========================================
  // CONFIGURACIÓN
  // ========================================

  let numeroBarras = 90

  let canales = []

  let esEstereo = false



  // ========================================
  // CARGAR AUDIO
  // ========================================

  fetch(audio.src)

    .then(function(respuesta){

      return respuesta.arrayBuffer()

    })

    .then(function(datos){

      let contextoAudio = new AudioContext()

      contextoAudio.decodeAudioData(

        datos,

        function(buffer){


          // =================================
          // DETECTAR CANALES
          // =================================

          esEstereo =
            buffer.numberOfChannels === 2


          /*
            MONO:
            canales[0]

            ESTÉREO:
            canales[0] = izquierdo
            canales[1] = derecho
          */


          let numeroCanales =
            esEstereo ? 2 : 1


          for(
            let canal = 0;
            canal < numeroCanales;
            canal++
          ){

            let samples =
              buffer.getChannelData(canal)


            canales.push(
              calcularWaveform(samples)
            )

          }


          dibujar()

        }

      )

    })



  // ========================================
  // CALCULAR WAVEFORM
  // ========================================

  function calcularWaveform(samples){

    let alturas = []


    let salto =
      Math.floor(
        samples.length /
        numeroBarras
      )


    for(
      let barra = 0;
      barra < numeroBarras;
      barra++
    ){

      let maximo = 0


      let inicio =
        barra * salto


      let final =
        Math.min(
          inicio + salto,
          samples.length
        )


      let subSalto =
        Math.max(
          1,
          Math.floor(salto / 100)
        )


      for(
        let i = inicio;
        i < final;
        i += subSalto
      ){

        let valor =
          Math.abs(samples[i])


        if(valor > maximo){

          maximo = valor

        }

      }


      alturas.push(maximo)

    }


    return alturas

  }



  // ========================================
  // DIBUJAR
  // ========================================

  function dibujar(){

    if(canales.length === 0){
      return
    }


    // ========================================
    // TAMAÑO REAL DEL CANVAS
    // ========================================

    let anchoReal =
      Math.floor(canvas.clientWidth)


    if(anchoReal <= 0){
      return
    }


    if(canvas.width !== anchoReal){

      canvas.width = anchoReal

    }


    let ancho = canvas.width
    let alto = canvas.height



    ctx.clearRect(
      0,
      0,
      ancho,
      alto
    )



    // ========================================
    // PROGRESO
    // ========================================

    let progreso = 0


    if(
      audio.duration &&
      !isNaN(audio.duration)
    ){

      progreso =
        audio.currentTime /
        audio.duration

    }



    // ========================================
    // DIMENSIONES DE LAS BARRAS
    // ========================================

    let separacion = 3


    let anchoBarra =
      (
        ancho -
        separacion *
        (numeroBarras - 1)
      )
      /
      numeroBarras


    if(anchoBarra < 1){

      separacion = 1


      anchoBarra =
        (
          ancho -
          separacion *
          (numeroBarras - 1)
        )
        /
        numeroBarras

    }



    // ========================================
    // POSICIÓN ACTUAL
    // ========================================

    let barraActual =
      progreso *
      (numeroBarras - 1)



    // ========================================
    // MONO
    // ========================================

    if(!esEstereo){

      dibujarMono(
        canales[0],
        anchoBarra,
        separacion,
        barraActual
      )

    }


    // ========================================
    // ESTÉREO
    // ========================================

    else{

      dibujarEstereo(
        canales[0],
        canales[1],
        anchoBarra,
        separacion,
        barraActual
      )

    }

  }



  // ========================================
  // MONO
  // ========================================

  function dibujarMono(
    alturas,
    anchoBarra,
    separacion,
    barraActual
  ){

    let alto = canvas.height

    let medio =
      alto / 2


    for(
      let i = 0;
      i < alturas.length;
      i++
    ){

      let altura =
        alturas[i] *
        medio *
        0.85


      altura =
        Math.max(
          altura,
          3
        )


      let x =
        i *
        (
          anchoBarra +
          separacion
        )


      ctx.fillStyle =
        obtenerColor(
          i,
          barraActual
        )


      ctx.beginPath()


      ctx.roundRect(

        x,

        medio - altura,

        Math.max(
          1,
          anchoBarra
        ),

        altura * 2,

        Math.max(
          1,
          anchoBarra
        ) / 2

      )


      ctx.fill()

    }

  }



  // ========================================
  // ESTÉREO
  // ========================================

  function dibujarEstereo(
    izquierdo,
    derecho,
    anchoBarra,
    separacion,
    barraActual
  ){

    let alto =
      canvas.height


    /*
      Dejamos un pequeño espacio
      central entre L y R.
    */

    let separacionCentral = 4


    let alturaCanal =
      (
        alto -
        separacionCentral
      ) / 2


    let centroSuperior =
      alturaCanal / 2


    let centroInferior =
      alturaCanal +
      separacionCentral +
      alturaCanal / 2



    // ========================================
    // CANAL IZQUIERDO
    // ========================================

    dibujarCanal(

      izquierdo,

      centroSuperior,

      alturaCanal,

      anchoBarra,

      separacion,

      barraActual

    )



    // ========================================
    // CANAL DERECHO
    // ========================================

    dibujarCanal(

      derecho,

      centroInferior,

      alturaCanal,

      anchoBarra,

      separacion,

      barraActual

    )

  }



  // ========================================
  // DIBUJAR UN CANAL ESTÉREO
  // ========================================

  function dibujarCanal(
    alturas,
    centro,
    alturaDisponible,
    anchoBarra,
    separacion,
    barraActual
  ){

    for(
      let i = 0;
      i < alturas.length;
      i++
    ){

      let altura =
        alturas[i] *
        alturaDisponible *
        0.40


      altura =
        Math.max(
          altura,
          2
        )


      let x =
        i *
        (
          anchoBarra +
          separacion
        )


      ctx.fillStyle =
        obtenerColor(
          i,
          barraActual
        )


      ctx.beginPath()


      ctx.roundRect(

        x,

        centro - altura,

        Math.max(
          1,
          anchoBarra
        ),

        altura * 2,

        Math.max(
          1,
          anchoBarra
        ) / 2

      )


      ctx.fill()

    }

  }



  // ========================================
  // COLOR SEGÚN DISTANCIA AL PUNTO ACTUAL
  // ========================================

  function obtenerColor(
    barra,
    barraActual
  ){

    /*
      Colores de la paleta en RGB:

      azul    #1d4ed8 -> todavía no reproducido
      naranja #f97316 -> punto actual
    */

    let azul = [29, 78, 216]

    let naranja = [249, 115, 22]



    // ========================================
    // FUTURO
    // ========================================

    if(barra > barraActual){

      return "rgb(" + azul.join(",") + ")"

    }



    // ========================================
    // PASADO
    // ========================================

    /*
      Distancia de esta barra respecto
      al punto actual.
    */

    let distancia =
      barraActual -
      barra



    /*
      Número de barras durante las que
      el naranja se va convirtiendo en azul.

      Puedes modificar este valor.

      15 = degradado corto
      30 = degradado medio
      60 = degradado largo
    */

    let distanciaDegradado = 35



    let intensidad =
      1 -
      (
        distancia /
        distanciaDegradado
      )


    intensidad =
      Math.max(
        0,
        Math.min(
          1,
          intensidad
        )
      )



    /*
      intensidad = 1
      naranja

      intensidad = 0
      azul
    */

    let color = azul.map(function(valor, i){

      return Math.round(
        valor +
        (naranja[i] - valor) * intensidad
      )

    })


    return "rgb(" + color.join(",") + ")"

  }



  // ========================================
  // PLAY / PAUSE
  // ========================================

  reproducir.onclick = function(){

    if(audio.paused){

      audio.play()

      mostrarToast("Reproducir", "El audio se está reproduciendo...")

    }else{

      audio.pause()

      mostrarToast("Pausar", "El audio se ha pausado.")

    }

  }


  audio.onplay = function(){

    reproducir.textContent = "❚❚"

  }


  audio.onpause = function(){

    reproducir.textContent = "▶"

  }


  audio.onended = function(){

    reproducir.textContent = "▶"

  }



  // ========================================
  // ADELANTE
  // ========================================

  adelante.onclick = function(){

    if(!audio.duration){
      return
    }


    audio.currentTime =
      Math.min(
        audio.currentTime + 5,
        audio.duration
      )

    mostrarToast("Avanzar", "Avanzando 5 segundos...")

  }



  // ========================================
  // ATRÁS
  // ========================================

  atras.onclick = function(){

    audio.currentTime =
      Math.max(
        audio.currentTime - 5,
        0
      )

    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")

  }



  // ========================================
  // VOLUMEN
  // ========================================

  volumen.oninput = function(){

    audio.volume =
      this.value

  }



  // ========================================
  // TIEMPO ACTUAL / DURACIÓN
  // ========================================

  function actualizarTiempo(){

    let total = audio.duration
      ? formatearTiempo(audio.duration)
      : "0:00"

    tiempo.innerHTML =
      formatearTiempo(audio.currentTime) +
      ' / <span class="total">' + total + '</span>'

  }


  audio.onloadedmetadata = actualizarTiempo



  // ========================================
  // ACTUALIZAR
  // ========================================

  audio.ontimeupdate = function(){

    dibujar()


    actualizarTiempo()

  }



  // ========================================
  // CLICK EN WAVEFORM
  // ========================================

  canvas.onclick = function(evento){

    cambiarPosicion(evento)

    mostrarToast("Onda", "Saltando a " + formatearTiempo(audio.currentTime))

  }



  // ========================================
  // ARRASTRAR
  // ========================================

  let arrastrando = false


  canvas.onmousedown = function(evento){

    arrastrando = true

    cambiarPosicion(evento)

  }


  window.addEventListener(
    "mousemove",
    function(evento){

      if(arrastrando){

        cambiarPosicion(evento)

      }

    }
  )


  window.addEventListener(
    "mouseup",
    function(){

      arrastrando = false

    }
  )



  // ========================================
  // CAMBIAR POSICIÓN
  // ========================================

  function cambiarPosicion(evento){

    if(
      !audio.duration ||
      isNaN(audio.duration)
    ){
      return
    }


    let rect =
      canvas.getBoundingClientRect()


    let x =
      evento.clientX -
      rect.left


    x =
      Math.max(
        0,
        Math.min(
          x,
          rect.width
        )
      )


    let porcentaje =
      x /
      rect.width


    audio.currentTime =
      porcentaje *
      audio.duration


    dibujar()

  }



  // ========================================
  // FORMATEAR TIEMPO
  // ========================================

  function formatearTiempo(segundos){

    if(isNaN(segundos)){

      return "0:00"

    }


    let minutos =
      Math.floor(
        segundos / 60
      )


    let resto =
      Math.floor(
        segundos % 60
      )


    if(resto < 10){

      resto =
        "0" + resto

    }


    return minutos + ":" + resto

  }



  // ========================================
  // REDIMENSIONAR
  // ========================================

  window.addEventListener(
    "resize",
    function(){

      dibujar()

    }
  )

})

</script>

</body>
</html>
```
### 003-Fuentes de datos multimedia. Clases
**000-Introducción.md**
```markdown
# Fuentes de datos multimedia. Clases
- Fuentes de datos multimedia. Clases
	- Conceptos y finalidad
	- Elementos principales
	- Propiedades y atributos
	- Métodos y operaciones
	- Relaciones entre elementos
	- Ejemplos de uso

```
**001-parto desde la subunidad 1.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#111;
      font-family:Arial,sans-serif;
    }

    /* REPRODUCTOR */
    .jvvideo{
      position:relative;
      display:inline-block;
      overflow:hidden;
      border-radius:14px;
      background:black;
      box-shadow:0 20px 60px rgba(0,0,0,0.5);
    }

    .jvvideo video{
      display:block;
      width:800px;
      max-width:100%;
    }


    /* ========================= */
    /* CONTROLES */
    /* ========================= */

    .controles{
      position:absolute;
      left:0;
      right:0;
      bottom:0;

      display:flex;
      align-items:center;
      gap:8px;

      padding:35px 14px 12px 14px;

      background:
        linear-gradient(
          transparent,
          rgba(0,0,0,0.85)
        );

      opacity:0;
      transform:translateY(15px);

      transition:
        opacity 0.3s ease,
        transform 0.3s ease;

      pointer-events:none;
    }


    /* MOSTRAR AL PASAR EL RATÓN */

    .jvvideo:hover .controles{
      opacity:1;
      transform:translateY(0);
      pointer-events:auto;
    }


    /* ========================= */
    /* BOTONES */
    /* ========================= */

    .controles button{
      width:38px;
      height:38px;

      border:none;
      border-radius:50%;

      background:rgba(255,255,255,0.12);
      color:white;

      font-size:17px;

      cursor:pointer;

      display:flex;
      justify-content:center;
      align-items:center;

      backdrop-filter:blur(10px);

      transition:
        background 0.2s,
        transform 0.2s;
    }

    .controles button:hover{
      background:rgba(255,255,255,0.28);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }


    /* ========================= */
    /* SLIDERS */
    /* ========================= */

    .controles input[type="range"]{
      appearance:none;
      height:4px;

      background:rgba(255,255,255,0.3);

      border-radius:10px;

      cursor:pointer;

      outline:none;
    }

    .controles input[type="range"]::-webkit-slider-thumb{
      appearance:none;

      width:13px;
      height:13px;

      border-radius:50%;

      background:white;

      box-shadow:0 0 5px rgba(0,0,0,0.5);
    }


    /* VOLUMEN */

    .volumen{
      width:80px;
    }


    /* PROGRESO */

    .progreso{
      flex:1;
    }

  </style>
</head>

<body>

<video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm"></video>


<script>

let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // =========================
  // CONTENEDOR
  // =========================

  let contenedor = document.createElement("div")
  contenedor.classList.add("jvvideo")

  video.parentNode.insertBefore(contenedor,video)

  contenedor.appendChild(video)


  // =========================
  // CONTROLES
  // =========================

  let controles = document.createElement("div")
  controles.classList.add("controles")

  contenedor.appendChild(controles)


  // ATRÁS

  let atras = document.createElement("button")
  atras.textContent = "↶"
  atras.title = "Retroceder"

  controles.appendChild(atras)


  // PLAY

  let reproducir = document.createElement("button")
  reproducir.textContent = "▶"
  reproducir.title = "Reproducir"

  controles.appendChild(reproducir)


  // ADELANTE

  let adelante = document.createElement("button")
  adelante.textContent = "↷"
  adelante.title = "Avanzar"

  controles.appendChild(adelante)


  // PROGRESO

  let progreso = document.createElement("input")

  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0

  progreso.classList.add("progreso")

  controles.appendChild(progreso)


  // VOLUMEN

  let volumen = document.createElement("input")

  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1

  volumen.classList.add("volumen")

  controles.appendChild(volumen)


  // =========================
  // EVENTOS
  // =========================

  reproducir.onclick = function(){

    if(video.paused){

      video.play()

      reproducir.textContent = "❚❚"

    }else{

      video.pause()

      reproducir.textContent = "▶"

    }

  }


  adelante.onclick = function(){

    video.currentTime += 5

  }


  atras.onclick = function(){

    video.currentTime -= 5

  }


  volumen.oninput = function(){

    video.volume = this.value

  }


  video.ontimeupdate = function(){

    if(video.duration){

      progreso.value =
        video.currentTime / video.duration

    }

  }


  progreso.oninput = function(){

    video.currentTime =
      this.value * video.duration

  }


  // CLICK EN EL VIDEO = PLAY / PAUSE

  video.onclick = function(){

    if(video.paused){

      video.play()

      reproducir.textContent = "❚❚"

    }else{

      video.pause()

      reproducir.textContent = "▶"

    }

  }

})

</script>

</body>
</html>
```
**002-instalar whisperai.md**
```markdown
Prerrequisitos:

sudo apt update

sudo apt install -y \
  python3 \ 
  python3-venv \
  python3-pip \
  ffmpeg
  
python3 -m pip install -U openai-whisper --break-system-packages

whisper 002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm \
  --model medium \
  --language Spanish \
  --output_format srt 
 
Formato para HTML5
whisper clase.webm \
  --model medium \
  --language Spanish \
  --device cuda \
  --output_format vtt 
```
**003-procesar vtt.html**
```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm" controls></video>
    <script>
      fetch("002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.vtt")
      .then(function(resultado){return resultado.text()})
      .then(function(datos){
      	let partido = datos.split("\n\n")
        console.log(partido)
      })
    </script>
  </body>
</html>
```
**004-quiero partir mas.html**
```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm" controls></video>
    <script>
      fetch("002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.vtt")
      .then(function(resultado){return resultado.text()})
      .then(function(datos){
      	let partido = datos.split("\n\n")
        partido.forEach(function(pieza){
        	let maspartido = pieza.split("\n")
          console.log(maspartido)
        })
      })
    </script>
  </body>
</html>
```
**005-quiero partir todavia mas.html**
```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm" controls></video>
    <script>
      let transcripcion = []
      fetch("002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.vtt")
      .then(function(resultado){return resultado.text()})
      .then(function(datos){
      	let partido = datos.split("\n\n")
        partido.forEach(function(pieza){
        	let maspartido = pieza.split("\n")
          let texto = maspartido[1];
          let muchomaspartido = maspartido[0].split(" --> ")
          let inicio = muchomaspartido[0]
          let final = muchomaspartido[1]
          transcripcion.push({"inicio":inicio,"final":final,"texto":texto})
        })
        console.log(transcripcion)
      })
    </script>
  </body>
</html>
```
**006-subtitulos burdos.html**
```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm" controls></video>
    <div id="subtitulos"></div>
    <script>
      let transcripcion = []
      fetch("002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.vtt")
      .then(function(resultado){return resultado.text()})
      .then(function(datos){
      	let partido = datos.split("\n\n")
        partido.forEach(function(pieza){
        	let maspartido = pieza.split("\n")
          let texto = maspartido[1];
          let muchomaspartido = maspartido[0].split(" --> ")
          let inicio = muchomaspartido[0]
          let final = muchomaspartido[1]
          transcripcion.push({"inicio":inicio,"final":final,"texto":texto})
        })
        console.log(transcripcion)
      })
      
      let video = document.querySelector("video")
      video.ontimeupdate = function(){
        console.log("Playing:", video.currentTime);
      };
    </script>
  </body>
</html>
```
**007-subtitulos.html**
```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm" controls></video>
    <div id="subtitulos"></div>
    <script>
      
      function tiempoASegundos(tiempo){
        let partes = tiempo.split(":");

        let minutos = parseInt(partes[0]);
        let segundos = parseFloat(partes[1]);

        return minutos * 60 + segundos;
    }
      
      let transcripcion = []
      fetch("002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.vtt")
      .then(function(resultado){return resultado.text()})
      .then(function(datos){
      	let partido = datos.split("\n\n")
        partido.forEach(function(pieza){
        	let maspartido = pieza.split("\n")
          let texto = maspartido[1];
          let muchomaspartido = maspartido[0].split(" --> ")
          let inicio = muchomaspartido[0]
          let final = muchomaspartido[1]
          transcripcion.push({"inicio":inicio,"final":final,"texto":texto})
        })
        console.log(transcripcion)
      })
      
      let video = document.querySelector("video")
      let  contenedor_transcripcion = document.querySelector("#subtitulos")
      video.ontimeupdate = function(){
        console.log("Playing:", video.currentTime);
        transcripcion.forEach(function(frase){
        	if(
            video.currentTime > tiempoASegundos(frase.inicio)
          	&&
            video.currentTime < tiempoASegundos(frase.final)
          ){
          	contenedor_transcripcion.textContent = frase.texto;
          }
        })
      };
    </script>
  </body>
</html>
```
**008-empezamos a automatizar.html**
```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm" controls></video>
    <div id="subtitulos"></div>
    <script>
      
      function tiempoASegundos(tiempo){
        let partes = tiempo.split(":");

        let minutos = parseInt(partes[0]);
        let segundos = parseFloat(partes[1]);

        return minutos * 60 + segundos;
    }
      let video = document.querySelector("video")
      let origenvideo = video.getAttribute("src")
      let nombrevideo = origenvideo.split(".")[0]
      let nombretranscripcion = nombrevideo+".vtt"
      let transcripcion = []
      fetch(nombretranscripcion)
      .then(function(resultado){return resultado.text()})
      .then(function(datos){
      	let partido = datos.split("\n\n")
        partido.forEach(function(pieza){
        	let maspartido = pieza.split("\n")
          let texto = maspartido[1];
          let muchomaspartido = maspartido[0].split(" --> ")
          let inicio = muchomaspartido[0]
          let final = muchomaspartido[1]
          transcripcion.push({"inicio":inicio,"final":final,"texto":texto})
        })
        console.log(transcripcion)
      })
      
      
      let  contenedor_transcripcion = document.querySelector("#subtitulos")
      video.ontimeupdate = function(){
        console.log("Playing:", video.currentTime);
        transcripcion.forEach(function(frase){
        	if(
            video.currentTime > tiempoASegundos(frase.inicio)
          	&&
            video.currentTime < tiempoASegundos(frase.final)
          ){
          	contenedor_transcripcion.textContent = frase.texto;
          }
        })
      };
    </script>
  </body>
</html>
```
**009-me traigo el reproductor anterior.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      gap:20px;
      padding:30px 0;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* REPRODUCTOR */
    .jvvideo{
      position:relative;
      display:inline-block;
      overflow:hidden;
      border-radius:14px;
      background:var(--negro);
      border:3px solid var(--azul);
      box-shadow:0 20px 60px rgba(17,24,39,0.35);
    }

    .jvvideo video{
      display:block;
      width:800px;
      max-width:100%;
    }


    /* ========================= */
    /* CONTROLES */
    /* ========================= */

    .controles{
      position:absolute;
      left:0;
      right:0;
      bottom:0;

      display:flex;
      align-items:center;
      gap:8px;

      padding:35px 14px 12px 14px;

      background:
        linear-gradient(
          transparent,
          rgba(17,24,39,0.92)
        );

      opacity:0;
      transform:translateY(15px);

      transition:
        opacity 0.3s ease,
        transform 0.3s ease;

      pointer-events:none;
    }


    /* MOSTRAR AL PASAR EL RATÓN */

    .jvvideo:hover .controles{
      opacity:1;
      transform:translateY(0);
      pointer-events:auto;
    }


    /* ========================= */
    /* BOTONES */
    /* ========================= */

    .controles button{
      width:38px;
      height:38px;

      border:none;
      border-radius:50%;

      background:var(--azul);
      color:var(--blanco);

      font-size:17px;

      cursor:pointer;

      display:flex;
      justify-content:center;
      align-items:center;

      transition:
        background 0.2s,
        transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }


    /* ========================= */
    /* SLIDERS */
    /* ========================= */

    .controles input[type="range"]{
      appearance:none;
      height:4px;

      background:rgba(255,255,255,0.3);

      border-radius:10px;

      cursor:pointer;

      outline:none;
    }

    .controles input[type="range"]::-webkit-slider-thumb{
      appearance:none;

      width:13px;
      height:13px;

      border-radius:50%;

      background:var(--naranja);

      box-shadow:0 0 5px rgba(0,0,0,0.5);
    }


    /* VOLUMEN */

    .volumen{
      width:80px;
    }


    /* PROGRESO */

    .progreso{
      flex:1;
    }

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>

<body>

<video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm"></video>


<script>

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // =========================
  // CONTENEDOR
  // =========================

  let contenedor = document.createElement("div")
  contenedor.classList.add("jvvideo")

  video.parentNode.insertBefore(contenedor,video)

  contenedor.appendChild(video)


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(video, contenedor)


  // =========================
  // CONTROLES
  // =========================

  let controles = document.createElement("div")
  controles.classList.add("controles")

  contenedor.appendChild(controles)


  // ATRÁS

  let atras = document.createElement("button")
  atras.textContent = "↶"
  atras.title = "Retroceder"

  controles.appendChild(atras)


  // PLAY

  let reproducir = document.createElement("button")
  reproducir.textContent = "▶"
  reproducir.title = "Reproducir"

  controles.appendChild(reproducir)


  // ADELANTE

  let adelante = document.createElement("button")
  adelante.textContent = "↷"
  adelante.title = "Avanzar"

  controles.appendChild(adelante)


  // PROGRESO

  let progreso = document.createElement("input")

  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0

  progreso.classList.add("progreso")

  controles.appendChild(progreso)



  // ======================================================
  // TIEMPO / DURACIÓN
  // ======================================================

  let tiempo = document.createElement("span")

  tiempo.classList.add("tiempo")

  controles.appendChild(tiempo)


  function actualizarTiempo(){

    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>'

  }

  actualizarTiempo()

  video.addEventListener("loadedmetadata", actualizarTiempo)
  video.addEventListener("timeupdate", actualizarTiempo)



  // ======================================================
  // TOASTS
  // ======================================================

  /*
    Se registran antes que los onclick de abajo,
    así que se ejecutan primero: video.paused
    todavía indica el estado ANTES del clic.
  */

  function toastPlayPause(){

    if(video.paused){
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
    }else{
      mostrarToast("Pausar", "El vídeo se ha pausado.")
    }

  }

  reproducir.addEventListener("click", toastPlayPause)
  video.addEventListener("click", toastPlayPause)

  adelante.addEventListener("click", function(){
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })


  // VOLUMEN

  let volumen = document.createElement("input")

  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1

  volumen.classList.add("volumen")

  controles.appendChild(volumen)


  // =========================
  // EVENTOS
  // =========================

  reproducir.onclick = function(){

    if(video.paused){

      video.play()

      reproducir.textContent = "❚❚"

    }else{

      video.pause()

      reproducir.textContent = "▶"

    }

  }


  adelante.onclick = function(){

    video.currentTime += 5

  }


  atras.onclick = function(){

    video.currentTime -= 5

  }


  volumen.oninput = function(){

    video.volume = this.value

  }


  video.ontimeupdate = function(){

    if(video.duration){

      progreso.value =
        video.currentTime / video.duration

    }

  }


  progreso.oninput = function(){

    video.currentTime =
      this.value * video.duration

  }


  // CLICK EN EL VIDEO = PLAY / PAUSE

  video.onclick = function(){

    if(video.paused){

      video.play()

      reproducir.textContent = "❚❚"

    }else{

      video.pause()

      reproducir.textContent = "▶"

    }

  }

})

</script>

</body>
</html>
```
**010-fusion.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      gap:20px;
      padding:30px 0;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* ========================= */
    /* REPRODUCTOR */
    /* ========================= */

    .jvvideo{
      position:relative;
      display:inline-block;
      overflow:hidden;
      border-radius:14px;
      background:var(--negro);
      border:3px solid var(--azul);
      box-shadow:0 20px 60px rgba(17,24,39,0.35);
    }

    .jvvideo video{
      display:block;
      width:800px;
      max-width:100%;
    }


    /* ========================= */
    /* SUBTÍTULOS */
    /* ========================= */

    .subtitulos{
      position:absolute;

      left:50%;
      bottom:80px;

      transform:translateX(-50%);

      width:85%;

      text-align:center;

      color:white;
      font-size:22px;
      font-weight:bold;

      text-shadow:
        2px 2px 3px black,
        -2px -2px 3px black,
        2px -2px 3px black,
        -2px 2px 3px black;

      pointer-events:none;

      z-index:10;
    }


    /* ========================= */
    /* CONTROLES */
    /* ========================= */

    .controles{
      position:absolute;
      left:0;
      right:0;
      bottom:0;

      display:flex;
      align-items:center;
      gap:8px;

      padding:35px 14px 12px 14px;

      background:
        linear-gradient(
          transparent,
          rgba(17,24,39,0.92)
        );

      opacity:0;
      transform:translateY(15px);

      transition:
        opacity 0.3s ease,
        transform 0.3s ease;

      pointer-events:none;

      z-index:20;
    }


    /* MOSTRAR AL PASAR EL RATÓN */

    .jvvideo:hover .controles{
      opacity:1;
      transform:translateY(0);
      pointer-events:auto;
    }


    /* ========================= */
    /* BOTONES */
    /* ========================= */

    .controles button{
      width:38px;
      height:38px;

      border:none;
      border-radius:50%;

      background:var(--azul);
      color:var(--blanco);

      font-size:17px;

      cursor:pointer;

      display:flex;
      justify-content:center;
      align-items:center;

      transition:
        background 0.2s,
        transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }


    /* ========================= */
    /* SLIDERS */
    /* ========================= */

    .controles input[type="range"]{
      appearance:none;

      height:4px;

      background:rgba(255,255,255,0.3);

      border-radius:10px;

      cursor:pointer;

      outline:none;
    }

    .controles input[type="range"]::-webkit-slider-thumb{
      appearance:none;

      width:13px;
      height:13px;

      border-radius:50%;

      background:var(--naranja);

      box-shadow:0 0 5px rgba(0,0,0,0.5);
    }


    /* VOLUMEN */

    .volumen{
      width:80px;
    }


    /* PROGRESO */

    .progreso{
      flex:1;
    }

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>

<body>

<video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm"></video>


<script>


// ============================================
// CONVERTIR TIEMPO VTT A SEGUNDOS
// ============================================

function tiempoASegundos(tiempo){

  let partes = tiempo.split(":");

  // MM:SS.mmm

  if(partes.length == 2){

    let minutos = parseInt(partes[0]);
    let segundos = parseFloat(partes[1]);

    return minutos * 60 + segundos;

  }


  // HH:MM:SS.mmm

  if(partes.length == 3){

    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let segundos = parseFloat(partes[2]);

    return horas * 3600 +
           minutos * 60 +
           segundos;

  }

  return 0;

}



// ============================================
// BUSCAMOS TODOS LOS VÍDEOS
// ============================================

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video")


videos.forEach(function(video){


  // =========================
  // CONTENEDOR
  // =========================

  let contenedor = document.createElement("div")

  contenedor.classList.add("jvvideo")


  video.parentNode.insertBefore(
    contenedor,
    video
  )


  contenedor.appendChild(video)


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(video, contenedor)



  // =========================
  // SUBTÍTULOS
  // =========================

  let contenedor_transcripcion =
    document.createElement("div")

  contenedor_transcripcion.classList.add(
    "subtitulos"
  )

  contenedor.appendChild(
    contenedor_transcripcion
  )



  // =========================
  // CONTROLES
  // =========================

  let controles =
    document.createElement("div")

  controles.classList.add("controles")

  contenedor.appendChild(controles)



  // ATRÁS

  let atras =
    document.createElement("button")

  atras.textContent = "↶"
  atras.title = "Retroceder 5 segundos"

  controles.appendChild(atras)



  // PLAY

  let reproducir =
    document.createElement("button")

  reproducir.textContent = "▶"
  reproducir.title = "Reproducir"

  controles.appendChild(reproducir)



  // ADELANTE

  let adelante =
    document.createElement("button")

  adelante.textContent = "↷"
  adelante.title = "Avanzar 5 segundos"

  controles.appendChild(adelante)



  // PROGRESO

  let progreso =
    document.createElement("input")

  progreso.type = "range"

  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0

  progreso.classList.add("progreso")

  controles.appendChild(progreso)



  // ======================================================
  // TIEMPO / DURACIÓN
  // ======================================================

  let tiempo = document.createElement("span")

  tiempo.classList.add("tiempo")

  controles.appendChild(tiempo)


  function actualizarTiempo(){

    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>'

  }

  actualizarTiempo()

  video.addEventListener("loadedmetadata", actualizarTiempo)
  video.addEventListener("timeupdate", actualizarTiempo)



  // ======================================================
  // TOASTS
  // ======================================================

  /*
    Se registran antes que los onclick de abajo,
    así que se ejecutan primero: video.paused
    todavía indica el estado ANTES del clic.
  */

  function toastPlayPause(){

    if(video.paused){
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
    }else{
      mostrarToast("Pausar", "El vídeo se ha pausado.")
    }

  }

  reproducir.addEventListener("click", toastPlayPause)
  video.addEventListener("click", toastPlayPause)

  adelante.addEventListener("click", function(){
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })



  // VOLUMEN

  let volumen =
    document.createElement("input")

  volumen.type = "range"

  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1

  volumen.classList.add("volumen")

  controles.appendChild(volumen)



  // ============================================
  // CARGAR TRANSCRIPCIÓN
  // ============================================

  let origenvideo =
    video.getAttribute("src")


  // Quitamos extensión del vídeo

  let nombrevideo =
    origenvideo.substring(
      0,
      origenvideo.lastIndexOf(".")
    )


  // Mismo nombre pero .vtt

  let nombretranscripcion =
    nombrevideo + ".vtt"


  let transcripcion = []


  fetch(nombretranscripcion)

  .then(function(resultado){

    return resultado.text()

  })

  .then(function(datos){


    // Quitamos WEBVTT

    datos = datos.replace(/^WEBVTT.*\n/, "")


    // Normalizamos saltos de línea

    datos = datos.replace(/\r/g, "")


    let partido =
      datos.split("\n\n")


    partido.forEach(function(pieza){


      let lineas =
        pieza.trim().split("\n")


      if(lineas.length < 2){
        return
      }


      let lineaTiempo = -1


      // Buscamos la línea que contiene -->

      lineas.forEach(function(linea,indice){

        if(linea.includes("-->")){

          lineaTiempo = indice

        }

      })


      if(lineaTiempo == -1){
        return
      }


      let tiempos =
        lineas[lineaTiempo].split(" --> ")


      if(tiempos.length != 2){
        return
      }


      let inicio =
        tiempos[0].trim()


      let final =
        tiempos[1].trim()


      // Todo lo que viene después
      // de la línea temporal es texto

      let texto =
        lineas
        .slice(lineaTiempo + 1)
        .join(" ")


      transcripcion.push({

        inicio:inicio,

        final:final,

        texto:texto

      })

    })


    console.log(
      "Transcripción cargada:",
      transcripcion
    )

  })

  .catch(function(error){

    console.log(
      "No se pudo cargar:",
      nombretranscripcion
    )

  })



  // =========================
  // PLAY / PAUSE
  // =========================

  reproducir.onclick = function(){

    if(video.paused){

      video.play()

    }else{

      video.pause()

    }

  }



  // =========================
  // ADELANTE
  // =========================

  adelante.onclick = function(){

    video.currentTime =
      Math.min(
        video.currentTime + 5,
        video.duration
      )

  }



  // =========================
  // ATRÁS
  // =========================

  atras.onclick = function(){

    video.currentTime =
      Math.max(
        video.currentTime - 5,
        0
      )

  }



  // =========================
  // VOLUMEN
  // =========================

  volumen.oninput = function(){

    video.volume =
      this.value

  }



  // =========================
  // ACTUALIZACIÓN DEL VÍDEO
  // =========================

  video.ontimeupdate = function(){


    // -------------------------
    // PROGRESO
    // -------------------------

    if(video.duration){

      progreso.value =
        video.currentTime /
        video.duration

    }



    // -------------------------
    // SUBTÍTULOS
    // -------------------------

    let textoActual = ""


    transcripcion.forEach(function(frase){

      if(

        video.currentTime >=
        tiempoASegundos(frase.inicio)

        &&

        video.currentTime <=
        tiempoASegundos(frase.final)

      ){

        textoActual =
          frase.texto

      }

    })


    contenedor_transcripcion.textContent =
      textoActual

  }



  // =========================
  // MOVER PROGRESO
  // =========================

  progreso.oninput = function(){

    video.currentTime =
      this.value *
      video.duration

  }



  // =========================
  // CLICK EN VÍDEO
  // =========================

  video.onclick = function(){

    if(video.paused){

      video.play()

    }else{

      video.pause()

    }

  }



  // =========================
  // SINCRONIZAR ICONO PLAY
  // =========================

  video.onplay = function(){

    reproducir.textContent = "❚❚"

  }


  video.onpause = function(){

    reproducir.textContent = "▶"

  }


  video.onended = function(){

    reproducir.textContent = "▶"

  }


})

</script>

</body>
</html>
```
**011-subtitulos opcionales.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      gap:20px;
      padding:30px 0;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* ========================= */
    /* REPRODUCTOR */
    /* ========================= */

    .jvvideo{
      position:relative;
      display:inline-block;
      overflow:hidden;
      border-radius:14px;
      background:var(--negro);
      border:3px solid var(--azul);
      box-shadow:0 20px 60px rgba(17,24,39,0.35);
    }

    .jvvideo video{
      display:block;
      width:800px;
      max-width:100%;
    }


    /* ========================= */
    /* SUBTÍTULOS */
    /* ========================= */

    .subtitulos{
      position:absolute;

      left:50%;
      bottom:80px;

      transform:translateX(-50%);

      width:85%;

      text-align:center;

      color:white;
      font-size:22px;
      font-weight:bold;
      line-height:1.4;

      text-shadow:
        2px 2px 3px black,
        -2px -2px 3px black,
        2px -2px 3px black,
        -2px 2px 3px black;

      pointer-events:none;

      z-index:10;
    }


    /* ========================= */
    /* CONTROLES */
    /* ========================= */

    .controles{
      position:absolute;
      left:0;
      right:0;
      bottom:0;

      display:flex;
      align-items:center;
      gap:8px;

      padding:35px 14px 12px 14px;

      background:
        linear-gradient(
          transparent,
          rgba(17,24,39,0.92)
        );

      opacity:0;
      transform:translateY(15px);

      transition:
        opacity 0.3s ease,
        transform 0.3s ease;

      pointer-events:none;

      z-index:20;
    }


    /* MOSTRAR CONTROLES */

    .jvvideo:hover .controles{
      opacity:1;
      transform:translateY(0);
      pointer-events:auto;
    }


    /* ========================= */
    /* BOTONES */
    /* ========================= */

    .controles button{
      width:38px;
      height:38px;

      flex-shrink:0;

      border:none;
      border-radius:50%;

      background:var(--azul);
      color:var(--blanco);

      font-size:17px;

      cursor:pointer;

      display:flex;
      justify-content:center;
      align-items:center;

      transition:
        background 0.2s,
        color 0.2s,
        transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }


    /* BOTÓN ACTIVO */

    .controles button.activo{
      background:var(--naranja);
      color:var(--blanco);
      box-shadow:0 0 0 2px var(--blanco);
    }


    /* BOTÓN CC */

    .boton-subtitulos{
      font-size:12px !important;
      font-weight:bold;
    }


    /* ========================= */
    /* SLIDERS */
    /* ========================= */

    .controles input[type="range"]{
      appearance:none;

      height:4px;

      background:rgba(255,255,255,0.3);

      border-radius:10px;

      cursor:pointer;

      outline:none;
    }

    .controles input[type="range"]::-webkit-slider-thumb{
      appearance:none;

      width:13px;
      height:13px;

      border-radius:50%;

      background:var(--naranja);

      box-shadow:0 0 5px rgba(0,0,0,0.5);
    }


    /* PROGRESO */

    .progreso{
      flex:1;
    }


    /* VOLUMEN */

    .volumen{
      width:80px;
    }

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>

<body>


<video src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm"></video>



<script>


// ========================================================
// CONVERTIR TIEMPO VTT A SEGUNDOS
// ========================================================

function tiempoASegundos(tiempo){

  let partes = tiempo.split(":")


  // MM:SS.mmm

  if(partes.length == 2){

    let minutos = parseInt(partes[0])
    let segundos = parseFloat(partes[1])

    return minutos * 60 + segundos

  }


  // HH:MM:SS.mmm

  if(partes.length == 3){

    let horas = parseInt(partes[0])
    let minutos = parseInt(partes[1])
    let segundos = parseFloat(partes[2])

    return (
      horas * 3600 +
      minutos * 60 +
      segundos
    )

  }


  return 0

}



// ========================================================
// BUSCAMOS TODOS LOS VÍDEOS
// ========================================================

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video")


videos.forEach(function(video){


  // ======================================================
  // CONTENEDOR
  // ======================================================

  let contenedor = document.createElement("div")

  contenedor.classList.add("jvvideo")


  video.parentNode.insertBefore(
    contenedor,
    video
  )


  contenedor.appendChild(video)


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(video, contenedor)



  // ======================================================
  // CONTENEDOR DE SUBTÍTULOS
  // ======================================================

  let contenedor_transcripcion =
    document.createElement("div")


  contenedor_transcripcion.classList.add(
    "subtitulos"
  )


  contenedor.appendChild(
    contenedor_transcripcion
  )



  // ======================================================
  // CONTROLES
  // ======================================================

  let controles =
    document.createElement("div")


  controles.classList.add("controles")


  contenedor.appendChild(controles)



  // ======================================================
  // ATRÁS
  // ======================================================

  let atras =
    document.createElement("button")


  atras.textContent = "↶"

  atras.title =
    "Retroceder 5 segundos"


  controles.appendChild(atras)



  // ======================================================
  // PLAY
  // ======================================================

  let reproducir =
    document.createElement("button")


  reproducir.textContent = "▶"

  reproducir.title =
    "Reproducir"


  controles.appendChild(reproducir)



  // ======================================================
  // ADELANTE
  // ======================================================

  let adelante =
    document.createElement("button")


  adelante.textContent = "↷"

  adelante.title =
    "Avanzar 5 segundos"


  controles.appendChild(adelante)



  // ======================================================
  // BOTÓN SUBTÍTULOS
  // ======================================================

  let botonSubtitulos =
    document.createElement("button")


  botonSubtitulos.textContent = "CC"

  botonSubtitulos.title =
    "Activar subtítulos"


  botonSubtitulos.classList.add(
    "boton-subtitulos"
  )


  controles.appendChild(
    botonSubtitulos
  )



  // ======================================================
  // PROGRESO
  // ======================================================

  let progreso =
    document.createElement("input")


  progreso.type = "range"

  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0


  progreso.classList.add("progreso")


  controles.appendChild(progreso)



  // ======================================================
  // TIEMPO / DURACIÓN
  // ======================================================

  let tiempo = document.createElement("span")

  tiempo.classList.add("tiempo")

  controles.appendChild(tiempo)


  function actualizarTiempo(){

    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>'

  }

  actualizarTiempo()

  video.addEventListener("loadedmetadata", actualizarTiempo)
  video.addEventListener("timeupdate", actualizarTiempo)



  // ======================================================
  // TOASTS
  // ======================================================

  /*
    Se registran antes que los onclick de abajo,
    así que se ejecutan primero: video.paused
    todavía indica el estado ANTES del clic.
  */

  function toastPlayPause(){

    if(video.paused){
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
    }else{
      mostrarToast("Pausar", "El vídeo se ha pausado.")
    }

  }

  reproducir.addEventListener("click", toastPlayPause)
  video.addEventListener("click", toastPlayPause)

  adelante.addEventListener("click", function(){
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })

  botonSubtitulos.addEventListener("click", function(){
    // Se ejecuta antes del onclick: el estado aún no ha cambiado
    if(subtitulosActivos){
      mostrarToast("Subtítulos", "Subtítulos desactivados.")
    }else{
      mostrarToast("Subtítulos", "Subtítulos activados.")
    }
  })



  // ======================================================
  // VOLUMEN
  // ======================================================

  let volumen =
    document.createElement("input")


  volumen.type = "range"

  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1


  volumen.classList.add("volumen")


  controles.appendChild(volumen)



  // ======================================================
  // ESTADO DE LOS SUBTÍTULOS
  // ======================================================

  let subtitulosActivos = false


  let transcripcion = []



  // ======================================================
  // OBTENER NOMBRE DEL VTT
  // ======================================================

  let origenvideo =
    video.getAttribute("src")


  let nombrevideo =
    origenvideo.substring(
      0,
      origenvideo.lastIndexOf(".")
    )


  let nombretranscripcion =
    nombrevideo + ".vtt"


  console.log(
    "Buscando subtítulos:",
    nombretranscripcion
  )



  // ======================================================
  // CARGAR VTT
  // ======================================================

  fetch(nombretranscripcion)

  .then(function(resultado){

    if(!resultado.ok){

      throw new Error(
        "No existe el archivo VTT"
      )

    }

    return resultado.text()

  })

  .then(function(datos){


    // Quitamos retornos de carro

    datos =
      datos.replace(/\r/g, "")


    // Quitamos cabecera WEBVTT

    datos =
      datos.replace(
        /^WEBVTT.*\n/,
        ""
      )


    // Dividimos bloques

    let partido =
      datos.split(/\n\n+/)



    partido.forEach(function(pieza){


      let lineas =
        pieza.trim().split("\n")


      if(lineas.length < 2){

        return

      }



      // Buscamos línea temporal

      let lineaTiempo = -1


      lineas.forEach(
        function(linea,indice){

          if(linea.includes("-->")){

            lineaTiempo = indice

          }

        }
      )



      if(lineaTiempo == -1){

        return

      }



      // Dividimos inicio y final

      let tiempos =
        lineas[lineaTiempo]
        .split(" --> ")



      if(tiempos.length != 2){

        return

      }



      let inicio =
        tiempos[0].trim()


      let final =
        tiempos[1].trim()



      // Por si el VTT incluye
      // parámetros después del tiempo

      final =
        final.split(" ")[0]



      // Texto del subtítulo

      let texto =
        lineas
        .slice(lineaTiempo + 1)
        .join(" ")



      transcripcion.push({

        inicio:inicio,

        final:final,

        texto:texto

      })


    })



    console.log(
      "Transcripción cargada:",
      transcripcion
    )


  })

  .catch(function(error){

    console.log(
      "No se pudieron cargar subtítulos:",
      nombretranscripcion
    )

  })



  // ======================================================
  // BOTÓN SUBTÍTULOS
  // ======================================================

  botonSubtitulos.onclick =
  function(){


    subtitulosActivos =
      !subtitulosActivos



    if(subtitulosActivos){


      botonSubtitulos.classList.add(
        "activo"
      )


      botonSubtitulos.title =
        "Desactivar subtítulos"



      // Actualizamos inmediatamente
      // por si el vídeo está pausado

      actualizarSubtitulos()


    }else{


      botonSubtitulos.classList.remove(
        "activo"
      )


      botonSubtitulos.title =
        "Activar subtítulos"


      contenedor_transcripcion.textContent =
        ""


    }


  }



  // ======================================================
  // FUNCIÓN ACTUALIZAR SUBTÍTULOS
  // ======================================================

  function actualizarSubtitulos(){


    if(!subtitulosActivos){

      contenedor_transcripcion.textContent =
        ""

      return

    }



    let textoActual = ""



    transcripcion.forEach(
      function(frase){


        let inicio =
          tiempoASegundos(
            frase.inicio
          )


        let final =
          tiempoASegundos(
            frase.final
          )



        if(
          video.currentTime >= inicio
          &&
          video.currentTime <= final
        ){

          textoActual =
            frase.texto

        }


      }
    )



    contenedor_transcripcion.textContent =
      textoActual


  }



  // ======================================================
  // PLAY / PAUSE
  // ======================================================

  reproducir.onclick =
  function(){


    if(video.paused){

      video.play()

    }else{

      video.pause()

    }


  }



  // ======================================================
  // ADELANTE 5 SEGUNDOS
  // ======================================================

  adelante.onclick =
  function(){


    video.currentTime =
      Math.min(
        video.currentTime + 5,
        video.duration
      )


  }



  // ======================================================
  // ATRÁS 5 SEGUNDOS
  // ======================================================

  atras.onclick =
  function(){


    video.currentTime =
      Math.max(
        video.currentTime - 5,
        0
      )


  }



  // ======================================================
  // VOLUMEN
  // ======================================================

  volumen.oninput =
  function(){


    video.volume =
      this.value


  }



  // ======================================================
  // ACTUALIZACIÓN DEL VÍDEO
  // ======================================================

  video.ontimeupdate =
  function(){


    // -------------------------
    // PROGRESO
    // -------------------------

    if(video.duration){

      progreso.value =
        video.currentTime /
        video.duration

    }



    // -------------------------
    // SUBTÍTULOS
    // -------------------------

    actualizarSubtitulos()


  }



  // ======================================================
  // CAMBIAR POSICIÓN DEL VÍDEO
  // ======================================================

  progreso.oninput =
  function(){


    if(video.duration){

      video.currentTime =
        this.value *
        video.duration

    }


  }



  // ======================================================
  // CLICK SOBRE EL VÍDEO
  // ======================================================

  video.onclick =
  function(){


    if(video.paused){

      video.play()

    }else{

      video.pause()

    }


  }



  // ======================================================
  // SINCRONIZAR BOTÓN PLAY
  // ======================================================

  video.onplay =
  function(){

    reproducir.textContent =
      "❚❚"

  }


  video.onpause =
  function(){

    reproducir.textContent =
      "▶"

  }


  video.onended =
  function(){

    reproducir.textContent =
      "▶"

  }


})


</script>

</body>
</html>

```
**012-traducir.py**
```python
#!/usr/bin/env python3

import sys
import json
import re
import time
import urllib.request
import urllib.error
from pathlib import Path


# ============================================================
# CONFIGURACIÓN
# ============================================================

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"

MODELO = "granite4.2:latest"

IDIOMAS = {
    "en": "English",
    "fr": "French",
    "de": "German",
    "it": "Italian",
    "pt": "Portuguese"
}

# Número de subtítulos enviados juntos.
# 20 da contexto suficiente sin hacer prompts demasiado grandes.
TAMANO_BLOQUE = 20

# Contexto máximo de Ollama.
# IMPORTANTE:
# Granite estaba intentando usar 131072 tokens y generaba
# una KV cache enorme en RAM.
NUM_CTX = 4096

# Mantener modelo cargado entre traducciones
KEEP_ALIVE = "30m"

# Timeout de cada petición
TIMEOUT = 600

# Número de intentos por bloque
MAX_REINTENTOS = 3


# ============================================================
# CONVERTIR VTT EN SUBTÍTULOS
# ============================================================

def leer_vtt(ruta):

    contenido = ruta.read_text(
        encoding="utf-8"
    )

    # Normalizamos saltos de línea
    contenido = contenido.replace(
        "\r\n",
        "\n"
    )

    contenido = contenido.replace(
        "\r",
        "\n"
    )

    # Dividir por bloques separados por líneas vacías
    bloques = re.split(
        r"\n\s*\n",
        contenido.strip()
    )

    subtitulos = []

    for bloque in bloques:

        bloque = bloque.strip()

        if not bloque:
            continue

        lineas = bloque.split("\n")

        # Ignorar cabecera WEBVTT
        if lineas[0].strip().startswith("WEBVTT"):
            continue

        # Buscar línea que contiene -->
        indice_tiempo = None

        for i, linea in enumerate(lineas):

            if "-->" in linea:

                indice_tiempo = i

                break

        # No es un bloque de subtítulos
        if indice_tiempo is None:
            continue

        tiempo = lineas[
            indice_tiempo
        ].strip()

        # Todo lo que viene después de la línea temporal
        # forma parte del texto.
        texto = "\n".join(
            lineas[indice_tiempo + 1:]
        ).strip()

        if not texto:
            continue

        subtitulos.append({
            "tiempo": tiempo,
            "texto": texto
        })

    return subtitulos


# ============================================================
# COMPROBAR OLLAMA
# ============================================================

def comprobar_ollama():

    url = "http://127.0.0.1:11434/api/tags"

    try:

        with urllib.request.urlopen(
            url,
            timeout=10
        ) as respuesta:

            return respuesta.status == 200

    except Exception:

        return False


# ============================================================
# LLAMAR A OLLAMA
# ============================================================

def llamar_ollama(prompt):

    datos = {

        "model": MODELO,

        "prompt": prompt,

        "stream": False,

        # Mantener Granite cargado mientras traducimos
        # todos los idiomas.
        "keep_alive": KEEP_ALIVE,

        "options": {

            # Traducción lo más determinista posible
            "temperature": 0,

            # MUY IMPORTANTE:
            # limitar contexto para evitar el OOM.
            "num_ctx": NUM_CTX
        }
    }

    cuerpo = json.dumps(
        datos
    ).encode("utf-8")

    peticion = urllib.request.Request(

        OLLAMA_URL,

        data=cuerpo,

        headers={
            "Content-Type": "application/json"
        },

        method="POST"
    )

    with urllib.request.urlopen(
        peticion,
        timeout=TIMEOUT
    ) as respuesta:

        contenido = respuesta.read().decode(
            "utf-8"
        )

        resultado = json.loads(
            contenido
        )

    if "response" not in resultado:

        raise RuntimeError(
            "Ollama no devolvió el campo 'response'"
        )

    return resultado[
        "response"
    ].strip()


# ============================================================
# EXTRAER JSON DE LA RESPUESTA
# ============================================================

def extraer_json(texto):

    texto = texto.strip()

    # El modelo puede decidir envolver el resultado en:
    #
    # ```json
    # [...]
    # ```
    #
    # Lo eliminamos.

    texto = re.sub(
        r"^```(?:json)?\s*",
        "",
        texto,
        flags=re.IGNORECASE
    )

    texto = re.sub(
        r"\s*```$",
        "",
        texto
    )

    # Buscamos el primer [
    # y el último ]

    inicio = texto.find("[")
    final = texto.rfind("]")

    if inicio == -1 or final == -1:

        raise ValueError(
            "Ollama no devolvió un array JSON válido.\n\n"
            "Respuesta recibida:\n"
            + texto[:1000]
        )

    json_texto = texto[
        inicio:final + 1
    ]

    try:

        return json.loads(
            json_texto
        )

    except json.JSONDecodeError as error:

        raise ValueError(
            "No se pudo interpretar el JSON devuelto "
            "por Ollama:\n"
            + json_texto[:1000]
        ) from error


# ============================================================
# TRADUCIR UN BLOQUE
# ============================================================

def traducir_bloque(
    bloque,
    idioma
):

    elementos = []

    for i, subtitulo in enumerate(
        bloque
    ):

        elementos.append({

            "id": i,

            "text": subtitulo[
                "texto"
            ]
        })

    entrada_json = json.dumps(
        elementos,
        ensure_ascii=False,
        indent=2
    )

    prompt = f"""
You are a professional subtitle translator.

Translate the following subtitles from Spanish to {idioma}.

CONTEXT:

The subtitles come from a technical programming and computer science course.
The speaker is a programming teacher explaining concepts, source code,
web development, databases, multimedia and software development.

Technical terminology may include:

HTML
CSS
JavaScript
Python
PHP
SQL
API
JSON
DOM
input
button
form
array
object
function
variable
class
method
database
server
client
frontend
backend
framework
library
HTTP
URL
JSON
XML
code
source code

TRANSLATION RULES:

1. Translate ONLY the value of "text".

2. NEVER change "id".

3. Return EXACTLY the same number of elements.

4. Preserve programming terminology when appropriate.

5. Do not translate programming identifiers, variable names,
   function names or literal source-code expressions unnecessarily.

6. Produce natural, fluent {idioma}.

7. These are subtitles, so keep translations reasonably concise.

8. Use surrounding subtitles as context.

9. Do NOT explain your translation.

10. Do NOT add comments.

11. Do NOT add markdown.

12. Return ONLY valid JSON.

13. The output MUST have exactly this structure:

[
  {{
    "id": 0,
    "text": "translated text"
  }},
  {{
    "id": 1,
    "text": "translated text"
  }}
]

INPUT:

{entrada_json}
"""

    respuesta = llamar_ollama(
        prompt
    )

    resultado = extraer_json(
        respuesta
    )

    # ========================================================
    # VALIDAR CANTIDAD
    # ========================================================

    if len(resultado) != len(bloque):

        raise ValueError(

            f"Se esperaban {len(bloque)} "
            f"subtítulos pero Ollama devolvió "
            f"{len(resultado)}"

        )

    # ========================================================
    # VALIDAR IDS
    # ========================================================

    traducciones = {}

    for elemento in resultado:

        if not isinstance(
            elemento,
            dict
        ):

            raise ValueError(
                "Ollama devolvió un elemento "
                "que no es un objeto JSON"
            )

        if "id" not in elemento:

            raise ValueError(
                "Falta 'id' en un elemento"
            )

        if "text" not in elemento:

            raise ValueError(
                "Falta 'text' en un elemento"
            )

        identificador = int(
            elemento["id"]
        )

        traducciones[
            identificador
        ] = str(
            elemento["text"]
        )

    # ========================================================
    # REORDENAR
    # ========================================================

    salida = []

    for i in range(
        len(bloque)
    ):

        if i not in traducciones:

            raise ValueError(
                f"Falta el subtítulo con id {i}"
            )

        salida.append(
            traducciones[i]
        )

    return salida


# ============================================================
# TRADUCIR TODOS LOS SUBTÍTULOS
# ============================================================

def traducir_subtitulos(
    subtitulos,
    idioma
):

    traducciones = []

    total = len(
        subtitulos
    )

    for inicio in range(
        0,
        total,
        TAMANO_BLOQUE
    ):

        final = min(
            inicio + TAMANO_BLOQUE,
            total
        )

        bloque = subtitulos[
            inicio:final
        ]

        print(
            f"    "
            f"{inicio + 1:04d}-{final:04d}"
            f" / "
            f"{total:04d}",
            flush=True
        )

        exito = False

        ultimo_error = None

        # ====================================================
        # REINTENTOS
        # ====================================================

        for intento in range(
            1,
            MAX_REINTENTOS + 1
        ):

            try:

                traducido = traducir_bloque(
                    bloque,
                    idioma
                )

                traducciones.extend(
                    traducido
                )

                exito = True

                break

            except Exception as error:

                ultimo_error = error

                print(
                    f"        Error intento "
                    f"{intento}/{MAX_REINTENTOS}: "
                    f"{error}"
                )

                # Si Ollama se ha caído,
                # esperamos antes de reintentar.

                if intento < MAX_REINTENTOS:

                    print(
                        "        Esperando 3 segundos..."
                    )

                    time.sleep(3)

                    if not comprobar_ollama():

                        print(
                            "        Ollama no responde."
                        )

                    else:

                        print(
                            "        Ollama responde. "
                            "Reintentando..."
                        )

        # ====================================================
        # SI TODOS LOS INTENTOS FALLAN
        # ====================================================

        if not exito:

            raise RuntimeError(
                "\nNo se pudo traducir el bloque "
                f"{inicio + 1}-{final} "
                f"después de {MAX_REINTENTOS} intentos.\n"
                f"Último error: {ultimo_error}"
            )

    return traducciones


# ============================================================
# GUARDAR VTT
# ============================================================

def guardar_vtt(
    ruta,
    subtitulos,
    traducciones
):

    if len(subtitulos) != len(
        traducciones
    ):

        raise ValueError(
            "El número de traducciones no coincide "
            "con el número de subtítulos."
        )

    with ruta.open(
        "w",
        encoding="utf-8"
    ) as archivo:

        archivo.write(
            "WEBVTT\n\n"
        )

        for subtitulo, traduccion in zip(
            subtitulos,
            traducciones
        ):

            # IMPORTANTE:
            # copiamos literalmente el timestamp original.
            archivo.write(
                subtitulo["tiempo"]
            )

            archivo.write(
                "\n"
            )

            archivo.write(
                traduccion.strip()
            )

            archivo.write(
                "\n\n"
            )


# ============================================================
# MOSTRAR CONFIGURACIÓN
# ============================================================

def mostrar_configuracion():

    print(
        "=" * 60
    )

    print(
        "TRADUCTOR AUTOMÁTICO DE SUBTÍTULOS"
    )

    print(
        "=" * 60
    )

    print(
        "Modelo       :",
        MODELO
    )

    print(
        "Contexto     :",
        NUM_CTX,
        "tokens"
    )

    print(
        "Bloque       :",
        TAMANO_BLOQUE,
        "subtítulos"
    )

    print(
        "Keep alive   :",
        KEEP_ALIVE
    )

    print(
        "Reintentos   :",
        MAX_REINTENTOS
    )

    print()


# ============================================================
# MAIN
# ============================================================

def main():

    mostrar_configuracion()

    # ========================================================
    # COMPROBAR ARGUMENTOS
    # ========================================================

    if len(sys.argv) < 2:

        print(
            "Uso:"
        )

        print()

        print(
            "python3 012-traducir.py archivo.vtt"
        )

        print()

        sys.exit(1)

    ruta = Path(
        sys.argv[1]
    )

    # ========================================================
    # COMPROBAR ARCHIVO
    # ========================================================

    if not ruta.exists():

        print(
            "ERROR: No existe el archivo:"
        )

        print(
            ruta
        )

        sys.exit(1)

    if ruta.suffix.lower() != ".vtt":

        print(
            "ERROR: El archivo debe ser .vtt"
        )

        sys.exit(1)

    # ========================================================
    # COMPROBAR OLLAMA
    # ========================================================

    print(
        "Comprobando Ollama..."
    )

    if not comprobar_ollama():

        print()

        print(
            "ERROR: Ollama no responde en:"
        )

        print(
            "http://127.0.0.1:11434"
        )

        print()

        print(
            "Comprueba:"
        )

        print()

        print(
            "systemctl status ollama"
        )

        sys.exit(1)

    print(
        "Ollama: OK"
    )

    print()

    # ========================================================
    # LEER VTT
    # ========================================================

    print(
        "Archivo:",
        ruta
    )

    subtitulos = leer_vtt(
        ruta
    )

    print(
        "Subtítulos:",
        len(subtitulos)
    )

    print()

    if not subtitulos:

        print(
            "ERROR: No se encontraron subtítulos."
        )

        sys.exit(1)

    # ========================================================
    # MOSTRAR PRIMER SUBTÍTULO
    # ========================================================

    print(
        "Primer subtítulo:"
    )

    print(
        "   ",
        subtitulos[0]["tiempo"]
    )

    print(
        "   ",
        subtitulos[0]["texto"]
    )

    print()

    # ========================================================
    # TRADUCIR TODOS LOS IDIOMAS
    # ========================================================

    archivos_generados = []

    for codigo, idioma in IDIOMAS.items():

        print(
            "=" * 60
        )

        print(
            f"{codigo.upper()} -> {idioma}"
        )

        print(
            "=" * 60
        )

        # ----------------------------------------------------
        # NOMBRE DEL ARCHIVO
        # ----------------------------------------------------

        salida = ruta.with_name(

            ruta.stem
            +
            "."
            +
            codigo
            +
            ".vtt"

        )

        print(
            "Salida:",
            salida
        )

        print()

        # ----------------------------------------------------
        # TRADUCIR
        # ----------------------------------------------------

        traducciones = traducir_subtitulos(
            subtitulos,
            idioma
        )

        # ----------------------------------------------------
        # GUARDAR
        # ----------------------------------------------------

        guardar_vtt(
            salida,
            subtitulos,
            traducciones
        )

        archivos_generados.append(
            salida
        )

        print()

        print(
            "    OK:",
            salida
        )

        print()

    # ========================================================
    # FIN
    # ========================================================

    print(
        "=" * 60
    )

    print(
        "PROCESO FINALIZADO"
    )

    print(
        "=" * 60
    )

    print()

    print(
        "Archivos generados:"
    )

    print()

    for archivo in archivos_generados:

        print(
            "  ",
            archivo
        )

    print()


if __name__ == "__main__":

    try:

        main()

    except KeyboardInterrupt:

        print()
        print()
        print(
            "Proceso cancelado por el usuario."
        )

        sys.exit(130)

    except Exception as error:

        print()
        print(
            "=" * 60
        )

        print(
            "ERROR"
        )

        print(
            "=" * 60
        )

        print(
            error
        )

        sys.exit(1)
```
#### subtitulos
### 004-Procesamiento de objetos multimedia
**000-Introducción.md**
```markdown
# Procesamiento de objetos multimedia
- Procesamiento de objetos multimedia
	- Conceptos fundamentales
	- Recursos y componentes
	- Representación y renderizado
	- Interacción y actualización
	- Optimización y rendimiento
	- Ejemplo práctico

```
**001-version anterior.html**
```html
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  min-height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;

  padding:30px 0;

  background:var(--blanco);
  color:var(--negro);

  font-family:Arial,sans-serif;
}


/* ======================================== */
/* REPRODUCTOR */
/* ======================================== */

.jvaudio{
  width:800px;
  max-width:90vw;

  padding:20px;

  display:flex;
  align-items:center;
  gap:12px;

  background:var(--negro);

  border:3px solid var(--azul);

  border-radius:18px;

  box-shadow:
    0 20px 60px rgba(17,24,39,0.35);

  overflow:hidden;
}

.jvaudio audio{
  display:none;
}


/* ======================================== */
/* BOTONES */
/* ======================================== */

.jvaudio button{
  flex:0 0 44px;

  width:44px;
  height:44px;

  border:none;
  border-radius:50%;

  background:var(--azul);
  color:var(--blanco);

  font-size:17px;

  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  transition:
    transform 0.2s,
    background 0.2s;
}

.jvaudio button:hover{
  transform:scale(1.08);
  background:var(--naranja);
}

.jvaudio button:active{
  transform:scale(0.95);
}


/* ======================================== */
/* TIEMPO */
/* ======================================== */

.tiempo{
  flex:0 0 auto;

  white-space:nowrap;

  font-family:monospace;

  font-size:13px;

  color:var(--blanco);

  text-align:center;
}


/* ======================================== */
/* WAVEFORM */
/* ======================================== */

.waveform{
  flex:1 1 0;

  min-width:0;

  width:0;
  height:80px;

  display:block;

  cursor:pointer;
}


/* ======================================== */
/* VOLUMEN */
/* ======================================== */

.volumen{
  flex:0 0 80px;

  width:80px;

  appearance:none;
  -webkit-appearance:none;

  height:4px;

  background:rgba(255,255,255,0.3);

  border-radius:10px;

  cursor:pointer;

  outline:none;
}

.volumen::-webkit-slider-thumb{
  appearance:none;
  -webkit-appearance:none;

  width:13px;
  height:13px;

  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;
}

.volumen::-moz-range-thumb{
  width:13px;
  height:13px;

  border:none;
  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;
}


/* ======================================== */
/* RESPONSIVE */
/* ======================================== */

@media(max-width:600px){

  .jvaudio{
    gap:7px;
    padding:12px;
  }

  .jvaudio button{
    flex-basis:36px;
    width:36px;
    height:36px;
  }

  .volumen{
    flex-basis:50px;
    width:50px;
  }

  .tiempo{
    font-size:10px;
  }

}

/* ======================================== */
/* PALETA */
/* ======================================== */

:root{
  --azul:#1d4ed8;
  --naranja:#f97316;
  --blanco:#ffffff;
  --negro:#111827;
}

.tiempo .total{
  color:var(--naranja);
}


/* ======================================== */
/* TRANSCRIPCIÓN */
/* ======================================== */

.transcripcion{
  width:800px;
  max-width:90vw;
  border:2px solid var(--negro);
  border-radius:14px;
  overflow:hidden;
  background:var(--blanco);
}

.transcripcion h2{
  margin:0;
  padding:12px 18px;
  font-size:17px;
  background:var(--azul);
  color:var(--blanco);
}

.lineas{
  max-height:260px;
  overflow-y:auto;
  padding:8px;
}

.linea{
  display:flex;
  gap:12px;
  padding:8px 10px;
  border-radius:8px;
  cursor:pointer;
  line-height:1.4;
  transition:background 0.2s;
}

.linea:hover{
  background:#eff6ff;
}

.linea .marca{
  color:var(--azul);
  font-family:monospace;
  font-weight:bold;
  flex-shrink:0;
}

.linea.activa{
  background:var(--naranja);
  color:var(--blanco);
}

.linea.activa .marca{
  color:var(--negro);
}

.aviso{
  padding:12px 10px;
  color:#6b7280;
}


/* ======================================== */
/* TOAST */
/* ======================================== */

.toast{
  position:fixed;
  bottom:24px;
  right:24px;
  background:var(--negro);
  color:var(--blanco);
  border-left:6px solid var(--naranja);
  border-radius:8px;
  padding:12px 18px;
  box-shadow:0 6px 18px rgba(17,24,39,0.35);
  opacity:0;
  transform:translateY(20px);
  transition:opacity 0.3s, transform 0.3s;
  pointer-events:none;
  z-index:1000;
}

.toast.visible{
  opacity:1;
  transform:translateY(0);
}

.toast strong{
  display:block;
  color:var(--naranja);
  margin-bottom:3px;
}

</style>
</head>

<body>


<audio src="letyougo.mp3"></audio>


<script>

// ========================================
// TOAST
// ========================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================
// TRANSCRIPCIÓN (archivo WebVTT)
// ========================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

// segundos -> m:ss
function marcaCorta(segundos){
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el audio
  (0802.mp3 -> 0802.vtt).
*/
function crearTranscripcion(audio, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = audio.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          audio.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  audio.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = audio.currentTime >= frase.inicio && audio.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let audios = document.querySelectorAll("audio")

audios.forEach(function(audio){


  // ========================================
  // CONTENEDOR
  // ========================================

  let contenedor = document.createElement("div")

  contenedor.classList.add("jvaudio")

  audio.parentNode.insertBefore(
    contenedor,
    audio
  )

  contenedor.appendChild(audio)


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(audio, contenedor)



  // ========================================
  // ATRÁS
  // ========================================

  let atras = document.createElement("button")

  atras.textContent = "↶"
  atras.title = "Retroceder 5 segundos"

  contenedor.appendChild(atras)



  // ========================================
  // PLAY
  // ========================================

  let reproducir = document.createElement("button")

  reproducir.textContent = "▶"
  reproducir.title = "Reproducir"

  contenedor.appendChild(reproducir)



  // ========================================
  // ADELANTE
  // ========================================

  let adelante = document.createElement("button")

  adelante.textContent = "↷"
  adelante.title = "Avanzar 5 segundos"

  contenedor.appendChild(adelante)



  // ========================================
  // TIEMPO
  // ========================================

  let tiempo = document.createElement("div")

  tiempo.classList.add("tiempo")

  tiempo.innerHTML = '0:00 / <span class="total">0:00</span>'

  contenedor.appendChild(tiempo)



  // ========================================
  // CANVAS
  // ========================================

  let canvas = document.createElement("canvas")

  canvas.height = 80

  canvas.classList.add("waveform")

  contenedor.appendChild(canvas)

  let ctx = canvas.getContext("2d")



  // ========================================
  // VOLUMEN
  // ========================================

  let volumen = document.createElement("input")

  volumen.type = "range"

  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1

  volumen.classList.add("volumen")

  contenedor.appendChild(volumen)



  // ========================================
  // CONFIGURACIÓN
  // ========================================

  let numeroBarras = 90

  let canales = []

  let esEstereo = false



  // ========================================
  // CARGAR AUDIO
  // ========================================

  fetch(audio.src)

    .then(function(respuesta){

      return respuesta.arrayBuffer()

    })

    .then(function(datos){

      let contextoAudio = new AudioContext()

      contextoAudio.decodeAudioData(

        datos,

        function(buffer){


          // =================================
          // DETECTAR CANALES
          // =================================

          esEstereo =
            buffer.numberOfChannels === 2


          /*
            MONO:
            canales[0]

            ESTÉREO:
            canales[0] = izquierdo
            canales[1] = derecho
          */


          let numeroCanales =
            esEstereo ? 2 : 1


          for(
            let canal = 0;
            canal < numeroCanales;
            canal++
          ){

            let samples =
              buffer.getChannelData(canal)


            canales.push(
              calcularWaveform(samples)
            )

          }


          dibujar()

        }

      )

    })



  // ========================================
  // CALCULAR WAVEFORM
  // ========================================

  function calcularWaveform(samples){

    let alturas = []


    let salto =
      Math.floor(
        samples.length /
        numeroBarras
      )


    for(
      let barra = 0;
      barra < numeroBarras;
      barra++
    ){

      let maximo = 0


      let inicio =
        barra * salto


      let final =
        Math.min(
          inicio + salto,
          samples.length
        )


      let subSalto =
        Math.max(
          1,
          Math.floor(salto / 100)
        )


      for(
        let i = inicio;
        i < final;
        i += subSalto
      ){

        let valor =
          Math.abs(samples[i])


        if(valor > maximo){

          maximo = valor

        }

      }


      alturas.push(maximo)

    }


    return alturas

  }



  // ========================================
  // DIBUJAR
  // ========================================

  function dibujar(){

    if(canales.length === 0){
      return
    }


    // ========================================
    // TAMAÑO REAL DEL CANVAS
    // ========================================

    let anchoReal =
      Math.floor(canvas.clientWidth)


    if(anchoReal <= 0){
      return
    }


    if(canvas.width !== anchoReal){

      canvas.width = anchoReal

    }


    let ancho = canvas.width
    let alto = canvas.height



    ctx.clearRect(
      0,
      0,
      ancho,
      alto
    )



    // ========================================
    // PROGRESO
    // ========================================

    let progreso = 0


    if(
      audio.duration &&
      !isNaN(audio.duration)
    ){

      progreso =
        audio.currentTime /
        audio.duration

    }



    // ========================================
    // DIMENSIONES DE LAS BARRAS
    // ========================================

    let separacion = 3


    let anchoBarra =
      (
        ancho -
        separacion *
        (numeroBarras - 1)
      )
      /
      numeroBarras


    if(anchoBarra < 1){

      separacion = 1


      anchoBarra =
        (
          ancho -
          separacion *
          (numeroBarras - 1)
        )
        /
        numeroBarras

    }



    // ========================================
    // POSICIÓN ACTUAL
    // ========================================

    let barraActual =
      progreso *
      (numeroBarras - 1)



    // ========================================
    // MONO
    // ========================================

    if(!esEstereo){

      dibujarMono(
        canales[0],
        anchoBarra,
        separacion,
        barraActual
      )

    }


    // ========================================
    // ESTÉREO
    // ========================================

    else{

      dibujarEstereo(
        canales[0],
        canales[1],
        anchoBarra,
        separacion,
        barraActual
      )

    }

  }



  // ========================================
  // MONO
  // ========================================

  function dibujarMono(
    alturas,
    anchoBarra,
    separacion,
    barraActual
  ){

    let alto = canvas.height

    let medio =
      alto / 2


    for(
      let i = 0;
      i < alturas.length;
      i++
    ){

      let altura =
        alturas[i] *
        medio *
        0.85


      altura =
        Math.max(
          altura,
          3
        )


      let x =
        i *
        (
          anchoBarra +
          separacion
        )


      ctx.fillStyle =
        obtenerColor(
          i,
          barraActual
        )


      ctx.beginPath()


      ctx.roundRect(

        x,

        medio - altura,

        Math.max(
          1,
          anchoBarra
        ),

        altura * 2,

        Math.max(
          1,
          anchoBarra
        ) / 2

      )


      ctx.fill()

    }

  }



  // ========================================
  // ESTÉREO
  // ========================================

  function dibujarEstereo(
    izquierdo,
    derecho,
    anchoBarra,
    separacion,
    barraActual
  ){

    let alto =
      canvas.height


    /*
      Dejamos un pequeño espacio
      central entre L y R.
    */

    let separacionCentral = 4


    let alturaCanal =
      (
        alto -
        separacionCentral
      ) / 2


    let centroSuperior =
      alturaCanal / 2


    let centroInferior =
      alturaCanal +
      separacionCentral +
      alturaCanal / 2



    // ========================================
    // CANAL IZQUIERDO
    // ========================================

    dibujarCanal(

      izquierdo,

      centroSuperior,

      alturaCanal,

      anchoBarra,

      separacion,

      barraActual

    )



    // ========================================
    // CANAL DERECHO
    // ========================================

    dibujarCanal(

      derecho,

      centroInferior,

      alturaCanal,

      anchoBarra,

      separacion,

      barraActual

    )

  }



  // ========================================
  // DIBUJAR UN CANAL ESTÉREO
  // ========================================

  function dibujarCanal(
    alturas,
    centro,
    alturaDisponible,
    anchoBarra,
    separacion,
    barraActual
  ){

    for(
      let i = 0;
      i < alturas.length;
      i++
    ){

      let altura =
        alturas[i] *
        alturaDisponible *
        0.40


      altura =
        Math.max(
          altura,
          2
        )


      let x =
        i *
        (
          anchoBarra +
          separacion
        )


      ctx.fillStyle =
        obtenerColor(
          i,
          barraActual
        )


      ctx.beginPath()


      ctx.roundRect(

        x,

        centro - altura,

        Math.max(
          1,
          anchoBarra
        ),

        altura * 2,

        Math.max(
          1,
          anchoBarra
        ) / 2

      )


      ctx.fill()

    }

  }



  // ========================================
  // COLOR SEGÚN DISTANCIA AL PUNTO ACTUAL
  // ========================================

  function obtenerColor(
    barra,
    barraActual
  ){

    /*
      Colores de la paleta en RGB:

      azul    #1d4ed8 -> todavía no reproducido
      naranja #f97316 -> punto actual
    */

    let azul = [29, 78, 216]

    let naranja = [249, 115, 22]



    // ========================================
    // FUTURO
    // ========================================

    if(barra > barraActual){

      return "rgb(" + azul.join(",") + ")"

    }



    // ========================================
    // PASADO
    // ========================================

    /*
      Distancia de esta barra respecto
      al punto actual.
    */

    let distancia =
      barraActual -
      barra



    /*
      Número de barras durante las que
      el naranja se va convirtiendo en azul.

      Puedes modificar este valor.

      15 = degradado corto
      30 = degradado medio
      60 = degradado largo
    */

    let distanciaDegradado = 35



    let intensidad =
      1 -
      (
        distancia /
        distanciaDegradado
      )


    intensidad =
      Math.max(
        0,
        Math.min(
          1,
          intensidad
        )
      )



    /*
      intensidad = 1
      naranja

      intensidad = 0
      azul
    */

    let color = azul.map(function(valor, i){

      return Math.round(
        valor +
        (naranja[i] - valor) * intensidad
      )

    })


    return "rgb(" + color.join(",") + ")"

  }



  // ========================================
  // PLAY / PAUSE
  // ========================================

  reproducir.onclick = function(){

    if(audio.paused){

      audio.play()

      mostrarToast("Reproducir", "El audio se está reproduciendo...")

    }else{

      audio.pause()

      mostrarToast("Pausar", "El audio se ha pausado.")

    }

  }


  audio.onplay = function(){

    reproducir.textContent = "❚❚"

  }


  audio.onpause = function(){

    reproducir.textContent = "▶"

  }


  audio.onended = function(){

    reproducir.textContent = "▶"

  }



  // ========================================
  // ADELANTE
  // ========================================

  adelante.onclick = function(){

    if(!audio.duration){
      return
    }


    audio.currentTime =
      Math.min(
        audio.currentTime + 5,
        audio.duration
      )

    mostrarToast("Avanzar", "Avanzando 5 segundos...")

  }



  // ========================================
  // ATRÁS
  // ========================================

  atras.onclick = function(){

    audio.currentTime =
      Math.max(
        audio.currentTime - 5,
        0
      )

    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")

  }



  // ========================================
  // VOLUMEN
  // ========================================

  volumen.oninput = function(){

    audio.volume =
      this.value

  }



  // ========================================
  // TIEMPO ACTUAL / DURACIÓN
  // ========================================

  function actualizarTiempo(){

    let total = audio.duration
      ? formatearTiempo(audio.duration)
      : "0:00"

    tiempo.innerHTML =
      formatearTiempo(audio.currentTime) +
      ' / <span class="total">' + total + '</span>'

  }


  audio.onloadedmetadata = actualizarTiempo



  // ========================================
  // ACTUALIZAR
  // ========================================

  audio.ontimeupdate = function(){

    dibujar()


    actualizarTiempo()

  }



  // ========================================
  // CLICK EN WAVEFORM
  // ========================================

  canvas.onclick = function(evento){

    cambiarPosicion(evento)

    mostrarToast("Onda", "Saltando a " + formatearTiempo(audio.currentTime))

  }



  // ========================================
  // ARRASTRAR
  // ========================================

  let arrastrando = false


  canvas.onmousedown = function(evento){

    arrastrando = true

    cambiarPosicion(evento)

  }


  window.addEventListener(
    "mousemove",
    function(evento){

      if(arrastrando){

        cambiarPosicion(evento)

      }

    }
  )


  window.addEventListener(
    "mouseup",
    function(){

      arrastrando = false

    }
  )



  // ========================================
  // CAMBIAR POSICIÓN
  // ========================================

  function cambiarPosicion(evento){

    if(
      !audio.duration ||
      isNaN(audio.duration)
    ){
      return
    }


    let rect =
      canvas.getBoundingClientRect()


    let x =
      evento.clientX -
      rect.left


    x =
      Math.max(
        0,
        Math.min(
          x,
          rect.width
        )
      )


    let porcentaje =
      x /
      rect.width


    audio.currentTime =
      porcentaje *
      audio.duration


    dibujar()

  }



  // ========================================
  // FORMATEAR TIEMPO
  // ========================================

  function formatearTiempo(segundos){

    if(isNaN(segundos)){

      return "0:00"

    }


    let minutos =
      Math.floor(
        segundos / 60
      )


    let resto =
      Math.floor(
        segundos % 60
      )


    if(resto < 10){

      resto =
        "0" + resto

    }


    return minutos + ":" + resto

  }



  // ========================================
  // REDIMENSIONAR
  // ========================================

  window.addEventListener(
    "resize",
    function(){

      dibujar()

    }
  )

})

</script>

</body>
</html>
```
**002-convertimos con whisperAI.md**
```markdown
Prueba sencilla:

whisper letyougo.mp3 \
  --model medium \
  --language en \
  --device cuda \
  --output_format vtt
  
Prueba profunda:
whisper letyougo.mp3 \
  --model large-v3 \
  --language en \
  --device cuda \
  --output_format vtt
```
**003-audio con subtitulos.html**
```html
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  min-height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;

  padding:30px 0;

  background:var(--blanco);
  color:var(--negro);

  font-family:Arial,sans-serif;
}


/* ======================================== */
/* REPRODUCTOR */
/* ======================================== */

.jvaudio{

  width:800px;
  max-width:90vw;

  padding:20px;

  display:flex;
  flex-wrap:wrap;

  align-items:center;

  gap:12px;

  background:var(--negro);

  border:3px solid var(--azul);

  border-radius:18px;

  box-shadow:
    0 20px 60px rgba(17,24,39,0.35);

  overflow:hidden;
}


.jvaudio audio{
  display:none;
}



/* ======================================== */
/* BOTONES */
/* ======================================== */

.jvaudio button{

  flex:0 0 44px;

  width:44px;
  height:44px;

  border:none;
  border-radius:50%;

  background:var(--azul);
  color:var(--blanco);

  font-size:17px;

  cursor:pointer;

  display:flex;

  justify-content:center;
  align-items:center;

  transition:
    transform 0.2s,
    background 0.2s,
    color 0.2s;
}


.jvaudio button:hover{

  transform:scale(1.08);

  background:var(--naranja);

}


.jvaudio button:active{

  transform:scale(0.95);

}



/* ======================================== */
/* BOTÓN CC */
/* ======================================== */

.jvaudio .boton-subtitulos{

  font-size:12px;

  font-weight:bold;

}


.jvaudio .boton-subtitulos.activo{

  background:var(--naranja);

  color:var(--blanco);

  box-shadow:0 0 0 2px var(--blanco);

}



/* ======================================== */
/* TIEMPO */
/* ======================================== */

.tiempo{

  flex:0 0 auto;

  white-space:nowrap;

  font-family:monospace;

  font-size:13px;

  color:var(--blanco);

  text-align:center;

}



/* ======================================== */
/* WAVEFORM */
/* ======================================== */

.waveform{

  flex:1 1 0;

  min-width:0;

  width:0;

  height:80px;

  display:block;

  cursor:pointer;

}



/* ======================================== */
/* VOLUMEN */
/* ======================================== */

.volumen{

  flex:0 0 80px;

  width:80px;

  appearance:none;
  -webkit-appearance:none;

  height:4px;

  background:rgba(255,255,255,0.3);

  border-radius:10px;

  cursor:pointer;

  outline:none;

}


.volumen::-webkit-slider-thumb{

  appearance:none;
  -webkit-appearance:none;

  width:13px;
  height:13px;

  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;

}


.volumen::-moz-range-thumb{

  width:13px;
  height:13px;

  border:none;

  border-radius:50%;

  background:var(--naranja);

  cursor:pointer;

}



/* ======================================== */
/* SUBTÍTULOS */
/* ======================================== */

.subtitulos{

  order:100;

  flex:0 0 100%;

  width:100%;

  min-height:32px;

  padding:
    8px
    20px
    0
    20px;

  text-align:center;

  font-size:18px;

  font-weight:bold;

  line-height:1.4;

  color:var(--blanco);

}



/* ======================================== */
/* RESPONSIVE */
/* ======================================== */

@media(max-width:600px){

  .jvaudio{

    gap:7px;

    padding:12px;

  }


  .jvaudio button{

    flex-basis:36px;

    width:36px;
    height:36px;

  }


  .volumen{

    flex-basis:50px;

    width:50px;

  }


  .tiempo{

    font-size:10px;

  }


  .subtitulos{

    font-size:15px;

  }

}

/* ======================================== */
/* PALETA */
/* ======================================== */

:root{
  --azul:#1d4ed8;
  --naranja:#f97316;
  --blanco:#ffffff;
  --negro:#111827;
}

.tiempo .total{
  color:var(--naranja);
}


/* ======================================== */
/* TRANSCRIPCIÓN */
/* ======================================== */

.transcripcion{
  width:800px;
  max-width:90vw;
  border:2px solid var(--negro);
  border-radius:14px;
  overflow:hidden;
  background:var(--blanco);
}

.transcripcion h2{
  margin:0;
  padding:12px 18px;
  font-size:17px;
  background:var(--azul);
  color:var(--blanco);
}

.lineas{
  max-height:260px;
  overflow-y:auto;
  padding:8px;
}

.linea{
  display:flex;
  gap:12px;
  padding:8px 10px;
  border-radius:8px;
  cursor:pointer;
  line-height:1.4;
  transition:background 0.2s;
}

.linea:hover{
  background:#eff6ff;
}

.linea .marca{
  color:var(--azul);
  font-family:monospace;
  font-weight:bold;
  flex-shrink:0;
}

.linea.activa{
  background:var(--naranja);
  color:var(--blanco);
}

.linea.activa .marca{
  color:var(--negro);
}

.aviso{
  padding:12px 10px;
  color:#6b7280;
}


/* ======================================== */
/* TOAST */
/* ======================================== */

.toast{
  position:fixed;
  bottom:24px;
  right:24px;
  background:var(--negro);
  color:var(--blanco);
  border-left:6px solid var(--naranja);
  border-radius:8px;
  padding:12px 18px;
  box-shadow:0 6px 18px rgba(17,24,39,0.35);
  opacity:0;
  transform:translateY(20px);
  transition:opacity 0.3s, transform 0.3s;
  pointer-events:none;
  z-index:1000;
}

.toast.visible{
  opacity:1;
  transform:translateY(0);
}

.toast strong{
  display:block;
  color:var(--naranja);
  margin-bottom:3px;
}

</style>
</head>

<body>


<audio src="letyougo.mp3"></audio>


<script>


// ========================================================
// CONVERTIR TIEMPO VTT A SEGUNDOS
// ========================================================

function tiempoASegundos(tiempo){

  let partes =
    tiempo.split(":")


  // ----------------------------------------
  // MM:SS.mmm
  // ----------------------------------------

  if(partes.length == 2){

    let minutos =
      parseInt(partes[0])

    let segundos =
      parseFloat(partes[1])


    return (
      minutos * 60
      +
      segundos
    )

  }


  // ----------------------------------------
  // HH:MM:SS.mmm
  // ----------------------------------------

  if(partes.length == 3){

    let horas =
      parseInt(partes[0])

    let minutos =
      parseInt(partes[1])

    let segundos =
      parseFloat(partes[2])


    return (
      horas * 3600
      +
      minutos * 60
      +
      segundos
    )

  }


  return 0

}



// ========================================================
// BUSCAR TODOS LOS AUDIOS
// ========================================================

// ========================================
// TOAST
// ========================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================
// TRANSCRIPCIÓN (archivo WebVTT)
// ========================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

// segundos -> m:ss
function marcaCorta(segundos){
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el audio
  (0802.mp3 -> 0802.vtt).
*/
function crearTranscripcion(audio, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = audio.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          audio.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  audio.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = audio.currentTime >= frase.inicio && audio.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let audios = document.querySelectorAll("audio")



audios.forEach(function(audio){


  // ======================================================
  // CONTENEDOR
  // ======================================================

  let contenedor =
    document.createElement("div")


  contenedor.classList.add(
    "jvaudio"
  )


  audio.parentNode.insertBefore(
    contenedor,
    audio
  )


  contenedor.appendChild(
    audio
  )


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(audio, contenedor)



  // ======================================================
  // ATRÁS
  // ======================================================

  let atras =
    document.createElement("button")


  atras.textContent =
    "↶"


  atras.title =
    "Retroceder 5 segundos"


  contenedor.appendChild(
    atras
  )



  // ======================================================
  // PLAY
  // ======================================================

  let reproducir =
    document.createElement("button")


  reproducir.textContent =
    "▶"


  reproducir.title =
    "Reproducir"


  contenedor.appendChild(
    reproducir
  )



  // ======================================================
  // ADELANTE
  // ======================================================

  let adelante =
    document.createElement("button")


  adelante.textContent =
    "↷"


  adelante.title =
    "Avanzar 5 segundos"


  contenedor.appendChild(
    adelante
  )



  // ======================================================
  // BOTÓN SUBTÍTULOS
  // ======================================================

  let botonSubtitulos =
    document.createElement("button")


  botonSubtitulos.textContent =
    "CC"


  botonSubtitulos.title =
    "Desactivar subtítulos"


  botonSubtitulos.classList.add(
    "boton-subtitulos"
  )


  botonSubtitulos.classList.add(
    "activo"
  )


  contenedor.appendChild(
    botonSubtitulos
  )



  // ======================================================
  // TIEMPO
  // ======================================================

  let tiempo =
    document.createElement("div")


  tiempo.classList.add(
    "tiempo"
  )


  tiempo.innerHTML =
    '0:00 / <span class="total">0:00</span>'


  contenedor.appendChild(
    tiempo
  )



  // ======================================================
  // CANVAS
  // ======================================================

  let canvas =
    document.createElement("canvas")


  canvas.height =
    80


  canvas.classList.add(
    "waveform"
  )


  contenedor.appendChild(
    canvas
  )


  let ctx =
    canvas.getContext("2d")



  // ======================================================
  // VOLUMEN
  // ======================================================

  let volumen =
    document.createElement("input")


  volumen.type =
    "range"


  volumen.min =
    0


  volumen.max =
    1


  volumen.step =
    0.01


  volumen.value =
    1


  volumen.classList.add(
    "volumen"
  )


  contenedor.appendChild(
    volumen
  )



  // ======================================================
  // CONTENEDOR SUBTÍTULOS
  // ======================================================

  let contenedorSubtitulos =
    document.createElement("div")


  contenedorSubtitulos.classList.add(
    "subtitulos"
  )


  contenedor.appendChild(
    contenedorSubtitulos
  )



  // ======================================================
  // TIEMPO ACTUAL / DURACIÓN
  // ======================================================

  function actualizarTiempo(){

    let total = audio.duration
      ? formatearTiempo(audio.duration)
      : "0:00"

    tiempo.innerHTML =
      formatearTiempo(audio.currentTime) +
      ' / <span class="total">' + total + '</span>'

  }


  audio.addEventListener("loadedmetadata", actualizarTiempo)



  // ======================================================
  // TOASTS
  // ======================================================

  /*
    Se registran antes que los onclick de abajo,
    así que se ejecutan primero: audio.paused y
    subtitulosActivos todavía tienen el valor
    de ANTES del clic.
  */

  reproducir.addEventListener("click", function(){
    if(audio.paused){
      mostrarToast("Reproducir", "El audio se está reproduciendo...")
    }else{
      mostrarToast("Pausar", "El audio se ha pausado.")
    }
  })

  adelante.addEventListener("click", function(){
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })

  botonSubtitulos.addEventListener("click", function(){
    if(subtitulosActivos){
      mostrarToast("Subtítulos", "Subtítulos desactivados.")
    }else{
      mostrarToast("Subtítulos", "Subtítulos activados.")
    }
  })

  canvas.addEventListener("click", function(){
    mostrarToast("Onda", "Saltando a " + formatearTiempo(audio.currentTime))
  })



  // ======================================================
  // CONFIGURACIÓN
  // ======================================================

  let numeroBarras =
    90


  let canales =
    []


  let esEstereo =
    false


  let subtitulosActivos =
    true


  let subtitulosDisponibles =
    false


  let transcripcion =
    []



  // ======================================================
  // CALCULAR NOMBRE DEL VTT
  // ======================================================

  let origenAudio =
    audio.getAttribute("src")


  let posicionPunto =
    origenAudio.lastIndexOf(".")


  let nombreAudio


  if(posicionPunto !== -1){

    nombreAudio =
      origenAudio.substring(
        0,
        posicionPunto
      )

  }else{

    nombreAudio =
      origenAudio

  }


  let nombreTranscripcion =
    nombreAudio + ".vtt"



  console.log(

    "Buscando subtítulos:",

    nombreTranscripcion

  )



  // ======================================================
  // CARGAR VTT
  // ======================================================

  fetch(nombreTranscripcion)

  .then(function(resultado){


    if(!resultado.ok){

      throw new Error(
        "No existe el archivo VTT"
      )

    }


    return resultado.text()

  })


  .then(function(datos){


    // --------------------------------------
    // LIMPIAR RETORNOS
    // --------------------------------------

    datos =
      datos.replace(
        /\r/g,
        ""
      )



    // --------------------------------------
    // DIVIDIR EN BLOQUES
    // --------------------------------------

    let bloques =
      datos.split(
        /\n\n+/
      )



    bloques.forEach(
      function(bloque){


        let lineas =
          bloque
          .trim()
          .split("\n")



        if(lineas.length < 2){

          return

        }



        // ----------------------------------
        // BUSCAR -->
        // ----------------------------------

        let lineaTiempo =
          -1


        for(
          let i = 0;
          i < lineas.length;
          i++
        ){

          if(
            lineas[i].includes("-->")
          ){

            lineaTiempo =
              i

            break

          }

        }



        if(lineaTiempo == -1){

          return

        }



        // ----------------------------------
        // SEPARAR INICIO / FINAL
        // ----------------------------------

        let tiempos =
          lineas[lineaTiempo]
          .split(
            /\s+-->\s+/
          )



        if(tiempos.length != 2){

          return

        }



        let inicio =
          tiempos[0].trim()



        let final =
          tiempos[1]
          .trim()
          .split(/\s+/)[0]



        // ----------------------------------
        // TEXTO
        // ----------------------------------

        let texto =
          lineas
          .slice(
            lineaTiempo + 1
          )
          .join(" ")
          .trim()



        if(texto == ""){

          return

        }



        // ----------------------------------
        // GUARDAR
        // ----------------------------------

        transcripcion.push({

          inicio:
            tiempoASegundos(
              inicio
            ),

          final:
            tiempoASegundos(
              final
            ),

          texto:
            texto

        })


      }

    )



    // --------------------------------------
    // ORDENAR
    // --------------------------------------

    transcripcion.sort(
      function(a,b){

        return (
          a.inicio -
          b.inicio
        )

      }
    )



    subtitulosDisponibles =
      transcripcion.length > 0



    console.log(
      "Subtítulos cargados:",
      transcripcion
    )



    // --------------------------------------
    // SI NO HAY SUBTÍTULOS
    // --------------------------------------

    if(!subtitulosDisponibles){

      botonSubtitulos.style.display =
        "none"

      contenedorSubtitulos.style.display =
        "none"

      return

    }



    // --------------------------------------
    // ACTIVADOS POR DEFECTO
    // --------------------------------------

    subtitulosActivos =
      true


    botonSubtitulos.classList.add(
      "activo"
    )


    botonSubtitulos.title =
      "Desactivar subtítulos"



    actualizarSubtitulos()


  })


  .catch(function(error){


    console.log(

      "No se pudieron cargar subtítulos:",

      nombreTranscripcion

    )


    console.log(error)



    botonSubtitulos.style.display =
      "none"


    contenedorSubtitulos.style.display =
      "none"


  })



  // ======================================================
  // BOTÓN CC
  // ======================================================

  botonSubtitulos.onclick =
  function(){


    if(!subtitulosDisponibles){

      return

    }



    subtitulosActivos =
      !subtitulosActivos



    if(subtitulosActivos){


      botonSubtitulos.classList.add(
        "activo"
      )


      botonSubtitulos.title =
        "Desactivar subtítulos"


      actualizarSubtitulos()


    }else{


      botonSubtitulos.classList.remove(
        "activo"
      )


      botonSubtitulos.title =
        "Activar subtítulos"


      contenedorSubtitulos.textContent =
        ""


    }


  }



  // ======================================================
  // ACTUALIZAR SUBTÍTULOS
  // ======================================================

  function actualizarSubtitulos(){


    if(
      !subtitulosActivos
      ||
      !subtitulosDisponibles
    ){

      contenedorSubtitulos.textContent =
        ""

      return

    }



    let tiempoActual =
      audio.currentTime



    let textoActual =
      ""



    for(
      let i = 0;
      i < transcripcion.length;
      i++
    ){


      let frase =
        transcripcion[i]



      if(
        tiempoActual >= frase.inicio
        &&
        tiempoActual <= frase.final
      ){

        textoActual =
          frase.texto

        break

      }


    }



    contenedorSubtitulos.textContent =
      textoActual

  }



  // ======================================================
  // CARGAR AUDIO PARA WAVEFORM
  // ======================================================

  fetch(audio.src)

  .then(function(respuesta){

    return respuesta.arrayBuffer()

  })

  .then(function(datos){


    let contextoAudio =
      new AudioContext()



    contextoAudio.decodeAudioData(

      datos,

      function(buffer){


        // ----------------------------------
        // DETECTAR CANALES
        // ----------------------------------

        esEstereo =
          buffer.numberOfChannels === 2



        let numeroCanales =
          esEstereo ? 2 : 1



        for(
          let canal = 0;
          canal < numeroCanales;
          canal++
        ){


          let samples =
            buffer.getChannelData(
              canal
            )



          canales.push(

            calcularWaveform(
              samples
            )

          )


        }



        dibujar()


      }

    )


  })



  // ======================================================
  // CALCULAR WAVEFORM
  // ======================================================

  function calcularWaveform(samples){


    let alturas =
      []



    let salto =
      Math.floor(

        samples.length /
        numeroBarras

      )



    for(
      let barra = 0;
      barra < numeroBarras;
      barra++
    ){


      let maximo =
        0



      let inicio =
        barra * salto



      let final =
        Math.min(

          inicio + salto,

          samples.length

        )



      let subSalto =
        Math.max(

          1,

          Math.floor(
            salto / 100
          )

        )



      for(
        let i = inicio;
        i < final;
        i += subSalto
      ){


        let valor =
          Math.abs(
            samples[i]
          )



        if(valor > maximo){

          maximo =
            valor

        }


      }



      alturas.push(
        maximo
      )


    }



    return alturas

  }



  // ======================================================
  // DIBUJAR WAVEFORM
  // ======================================================

  function dibujar(){


    if(canales.length === 0){

      return

    }



    let anchoReal =
      Math.floor(
        canvas.clientWidth
      )



    if(anchoReal <= 0){

      return

    }



    if(canvas.width !== anchoReal){

      canvas.width =
        anchoReal

    }



    let ancho =
      canvas.width


    let alto =
      canvas.height



    ctx.clearRect(

      0,
      0,
      ancho,
      alto

    )



    // --------------------------------------
    // PROGRESO
    // --------------------------------------

    let progreso =
      0



    if(
      audio.duration
      &&
      !isNaN(audio.duration)
    ){

      progreso =
        audio.currentTime /
        audio.duration

    }



    // --------------------------------------
    // BARRAS
    // --------------------------------------

    let separacion =
      3



    let anchoBarra =
      (
        ancho
        -
        separacion *
        (numeroBarras - 1)
      )
      /
      numeroBarras



    if(anchoBarra < 1){


      separacion =
        1



      anchoBarra =
        (
          ancho
          -
          separacion *
          (numeroBarras - 1)
        )
        /
        numeroBarras


    }



    let barraActual =
      progreso *
      (numeroBarras - 1)



    // --------------------------------------
    // MONO
    // --------------------------------------

    if(!esEstereo){


      dibujarMono(

        canales[0],

        anchoBarra,

        separacion,

        barraActual

      )


    }

    // --------------------------------------
    // ESTÉREO
    // --------------------------------------

    else{


      dibujarEstereo(

        canales[0],

        canales[1],

        anchoBarra,

        separacion,

        barraActual

      )


    }


  }



  // ======================================================
  // DIBUJAR MONO
  // ======================================================

  function dibujarMono(

    alturas,

    anchoBarra,

    separacion,

    barraActual

  ){


    let alto =
      canvas.height



    let medio =
      alto / 2



    for(
      let i = 0;
      i < alturas.length;
      i++
    ){


      let altura =
        alturas[i]
        *
        medio
        *
        0.85



      altura =
        Math.max(
          altura,
          3
        )



      let x =
        i
        *
        (
          anchoBarra
          +
          separacion
        )



      ctx.fillStyle =
        obtenerColor(
          i,
          barraActual
        )



      ctx.beginPath()



      ctx.roundRect(

        x,

        medio - altura,

        Math.max(
          1,
          anchoBarra
        ),

        altura * 2,

        Math.max(
          1,
          anchoBarra
        ) / 2

      )



      ctx.fill()


    }


  }



  // ======================================================
  // DIBUJAR ESTÉREO
  // ======================================================

  function dibujarEstereo(

    izquierdo,

    derecho,

    anchoBarra,

    separacion,

    barraActual

  ){


    let alto =
      canvas.height



    let separacionCentral =
      4



    let alturaCanal =
      (
        alto
        -
        separacionCentral
      )
      /
      2



    let centroSuperior =
      alturaCanal / 2



    let centroInferior =
      alturaCanal
      +
      separacionCentral
      +
      alturaCanal / 2



    dibujarCanal(

      izquierdo,

      centroSuperior,

      alturaCanal,

      anchoBarra,

      separacion,

      barraActual

    )



    dibujarCanal(

      derecho,

      centroInferior,

      alturaCanal,

      anchoBarra,

      separacion,

      barraActual

    )


  }



  // ======================================================
  // DIBUJAR CANAL
  // ======================================================

  function dibujarCanal(

    alturas,

    centro,

    alturaDisponible,

    anchoBarra,

    separacion,

    barraActual

  ){


    for(
      let i = 0;
      i < alturas.length;
      i++
    ){


      let altura =
        alturas[i]
        *
        alturaDisponible
        *
        0.40



      altura =
        Math.max(
          altura,
          2
        )



      let x =
        i
        *
        (
          anchoBarra
          +
          separacion
        )



      ctx.fillStyle =
        obtenerColor(
          i,
          barraActual
        )



      ctx.beginPath()



      ctx.roundRect(

        x,

        centro - altura,

        Math.max(
          1,
          anchoBarra
        ),

        altura * 2,

        Math.max(
          1,
          anchoBarra
        ) / 2

      )



      ctx.fill()


    }


  }



  // ======================================================
  // COLOR DEL WAVEFORM
  // ======================================================

  function obtenerColor(
    barra,
    barraActual
  ){

    /*
      Colores de la paleta en RGB:

      azul    #1d4ed8 -> todavía no reproducido
      naranja #f97316 -> punto actual
    */

    let azul = [29, 78, 216]

    let naranja = [249, 115, 22]



    // ========================================
    // FUTURO
    // ========================================

    if(barra > barraActual){

      return "rgb(" + azul.join(",") + ")"

    }



    // ========================================
    // PASADO
    // ========================================

    /*
      Distancia de esta barra respecto
      al punto actual.
    */

    let distancia =
      barraActual -
      barra



    /*
      Número de barras durante las que
      el naranja se va convirtiendo en azul.

      Puedes modificar este valor.

      15 = degradado corto
      30 = degradado medio
      60 = degradado largo
    */

    let distanciaDegradado = 35



    let intensidad =
      1 -
      (
        distancia /
        distanciaDegradado
      )


    intensidad =
      Math.max(
        0,
        Math.min(
          1,
          intensidad
        )
      )



    /*
      intensidad = 1
      naranja

      intensidad = 0
      azul
    */

    let color = azul.map(function(valor, i){

      return Math.round(
        valor +
        (naranja[i] - valor) * intensidad
      )

    })


    return "rgb(" + color.join(",") + ")"

  }



  // ======================================================
  // PLAY / PAUSE
  // ======================================================

  reproducir.onclick =
  function(){


    if(audio.paused){

      audio.play()

    }else{

      audio.pause()

    }


  }



  audio.onplay =
  function(){

    reproducir.textContent =
      "❚❚"

  }



  audio.onpause =
  function(){

    reproducir.textContent =
      "▶"

  }



  audio.onended =
  function(){

    reproducir.textContent =
      "▶"

  }



  // ======================================================
  // ADELANTE 5 SEGUNDOS
  // ======================================================

  adelante.onclick =
  function(){


    if(!audio.duration){

      return

    }



    audio.currentTime =
      Math.min(

        audio.currentTime + 5,

        audio.duration

      )



    actualizarSubtitulos()


  }



  // ======================================================
  // ATRÁS 5 SEGUNDOS
  // ======================================================

  atras.onclick =
  function(){


    audio.currentTime =
      Math.max(

        audio.currentTime - 5,

        0

      )



    actualizarSubtitulos()


  }



  // ======================================================
  // VOLUMEN
  // ======================================================

  volumen.oninput =
  function(){


    audio.volume =
      this.value


  }



  // ======================================================
  // ACTUALIZACIÓN DEL AUDIO
  // ======================================================

  audio.ontimeupdate =
  function(){


    // --------------------------------------
    // WAVEFORM
    // --------------------------------------

    dibujar()



    // --------------------------------------
    // TIEMPO
    // --------------------------------------

    actualizarTiempo()



    // --------------------------------------
    // SUBTÍTULOS
    // --------------------------------------

    actualizarSubtitulos()


  }



  // ======================================================
  // CLICK EN WAVEFORM
  // ======================================================

  canvas.onclick =
  function(evento){


    cambiarPosicion(
      evento
    )


  }



  // ======================================================
  // ARRASTRAR WAVEFORM
  // ======================================================

  let arrastrando =
    false



  canvas.onmousedown =
  function(evento){


    arrastrando =
      true


    cambiarPosicion(
      evento
    )


  }



  window.addEventListener(

    "mousemove",

    function(evento){


      if(arrastrando){


        cambiarPosicion(
          evento
        )


      }


    }

  )



  window.addEventListener(

    "mouseup",

    function(){


      arrastrando =
        false


    }

  )



  // ======================================================
  // CAMBIAR POSICIÓN
  // ======================================================

  function cambiarPosicion(evento){


    if(
      !audio.duration
      ||
      isNaN(audio.duration)
    ){

      return

    }



    let rect =
      canvas.getBoundingClientRect()



    let x =
      evento.clientX
      -
      rect.left



    x =
      Math.max(

        0,

        Math.min(
          x,
          rect.width
        )

      )



    let porcentaje =
      x
      /
      rect.width



    audio.currentTime =
      porcentaje
      *
      audio.duration



    dibujar()


    actualizarSubtitulos()


  }



  // ======================================================
  // FORMATEAR TIEMPO
  // ======================================================

  function formatearTiempo(segundos){


    if(isNaN(segundos)){

      return "0:00"

    }



    let minutos =
      Math.floor(
        segundos / 60
      )



    let resto =
      Math.floor(
        segundos % 60
      )



    if(resto < 10){

      resto =
        "0" + resto

    }



    return (
      minutos
      +
      ":"
      +
      resto
    )


  }



  // ======================================================
  // REDIMENSIONAR
  // ======================================================

  window.addEventListener(

    "resize",

    function(){


      dibujar()


    }

  )


})

</script>

</body>
</html>
```
### 005-Reproducción de objetos multimedia
**000-Introducción.md**
```markdown
# Reproducción de objetos multimedia
- Reproducción de objetos multimedia
	- Conceptos fundamentales
	- Recursos y componentes
	- Representación y renderizado
	- Interacción y actualización
	- Optimización y rendimiento
	- Ejemplo práctico

```
**001-cargar un video.html**
```html
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">

  <!-- ==================================================== -->
  <!-- INTERFAZ: paleta, barra de controles, toasts y       -->
  <!-- transcripción. El ejercicio de abajo no cambia.      -->
  <!-- ==================================================== -->

  <style>
    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:16px;
      padding:30px 16px;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* Vídeo original y canvas procesado */
    video, canvas{
      display:block;
      width:800px;
      max-width:100%;
      height:auto;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
      box-shadow:0 10px 30px rgba(17,24,39,0.25);
    }

    video{
      cursor:pointer;
    }

    /* Deslizadores de los ejercicios (brillo, contraste...) */
    body > p{
      margin:0;
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:10px;
      padding:8px 14px;
      background:var(--negro);
      color:var(--blanco);
      border-radius:8px;
    }

    body > p input[type="range"]{
      flex:1;
      accent-color:var(--naranja);
    }

    body > p span{
      color:var(--naranja);
      font-family:monospace;
      font-weight:bold;
    }

    /* Barra de controles */
    .controles{
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:8px;
      padding:10px 14px;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
    }

    .controles button{
      width:38px;
      height:38px;
      flex-shrink:0;
      border:none;
      border-radius:50%;
      background:var(--azul);
      color:var(--blanco);
      font-size:17px;
      cursor:pointer;
      display:flex;
      justify-content:center;
      align-items:center;
      transition:background 0.2s, transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }

    .controles input[type="range"]{
      accent-color:var(--naranja);
      cursor:pointer;
    }

    .progreso{
      flex:1;
    }

    .volumen{
      width:80px;
    }

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>
  <body>
    <video src="andrei.mp4" controls></video>
    <canvas></canvas>
    <script>
      let video = document.querySelector("video")
      let lienzo = document.querySelector("canvas")
      video.onload = function(){
        lienzo.width = video.width
        lienzo.height = video.height
        let fotograma;
        let contexto = lienzo.getContext("2d")
        video.ontimeupdate = function(){
          contexto.drawImage(video,0,0)
          console.log("hola")
        } 
      }
    </script>

<!-- ==================================================== -->
<!-- INTERFAZ: barra de controles, toasts y transcripción -->
<!-- ==================================================== -->

<script>

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // Quitamos los controles nativos: usamos los nuestros
  video.controls = false


  // ========================================================
  // BARRA DE CONTROLES (debajo del vídeo)
  // ========================================================

  let controles = document.createElement("div")
  controles.classList.add("controles")
  video.after(controles)

  function crearBoton(icono, titulo){
    let boton = document.createElement("button")
    boton.textContent = icono
    boton.title = titulo
    controles.appendChild(boton)
    return boton
  }

  let atras = crearBoton("↶", "Retroceder 5 segundos")
  let reproducir = crearBoton("▶", "Reproducir")
  let adelante = crearBoton("↷", "Avanzar 5 segundos")

  let tiempo = document.createElement("span")
  tiempo.classList.add("tiempo")
  controles.appendChild(tiempo)

  let progreso = document.createElement("input")
  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0
  progreso.classList.add("progreso")
  controles.appendChild(progreso)

  let volumen = document.createElement("input")
  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1
  volumen.title = "Volumen"
  volumen.classList.add("volumen")
  controles.appendChild(volumen)


  // ========================================================
  // EVENTOS
  // ========================================================

  function alternarReproduccion(){
    if(video.paused){
      video.play()
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
    }else{
      video.pause()
      mostrarToast("Pausar", "El vídeo se ha pausado.")
    }
  }

  reproducir.addEventListener("click", alternarReproduccion)
  video.addEventListener("click", alternarReproduccion)

  adelante.addEventListener("click", function(){
    video.currentTime = Math.min(video.currentTime + 5, video.duration || 0)
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    video.currentTime = Math.max(video.currentTime - 5, 0)
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })

  volumen.addEventListener("input", function(){
    video.volume = this.value
  })

  progreso.addEventListener("input", function(){
    if(video.duration){
      video.currentTime = this.value * video.duration
    }
  })

  function actualizarTiempo(){
    if(video.duration){
      progreso.value = video.currentTime / video.duration
    }
    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>'
  }

  actualizarTiempo()
  video.addEventListener("loadedmetadata", actualizarTiempo)
  video.addEventListener("timeupdate", actualizarTiempo)

  video.addEventListener("play", function(){
    reproducir.textContent = "❚❚"
    reproducir.title = "Pausar"
  })

  video.addEventListener("pause", function(){
    reproducir.textContent = "▶"
    reproducir.title = "Reproducir"
  })


  // ========================================================
  // TRANSCRIPCIÓN (al final de la página)
  // ========================================================

  let ultimo = document.querySelector("canvas") || controles
  crearTranscripcion(video, ultimo)

})

</script>

</body>
</html>
```
**002-con requestanimationframe.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">

  <!-- ==================================================== -->
  <!-- INTERFAZ: paleta, barra de controles, toasts y       -->
  <!-- transcripción. El ejercicio de abajo no cambia.      -->
  <!-- ==================================================== -->

  <style>
    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:16px;
      padding:30px 16px;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* Vídeo original y canvas procesado */
    video, canvas{
      display:block;
      width:800px;
      max-width:100%;
      height:auto;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
      box-shadow:0 10px 30px rgba(17,24,39,0.25);
    }

    video{
      cursor:pointer;
    }

    /* Deslizadores de los ejercicios (brillo, contraste...) */
    body > p{
      margin:0;
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:10px;
      padding:8px 14px;
      background:var(--negro);
      color:var(--blanco);
      border-radius:8px;
    }

    body > p input[type="range"]{
      flex:1;
      accent-color:var(--naranja);
    }

    body > p span{
      color:var(--naranja);
      font-family:monospace;
      font-weight:bold;
    }

    /* Barra de controles */
    .controles{
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:8px;
      padding:10px 14px;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
    }

    .controles button{
      width:38px;
      height:38px;
      flex-shrink:0;
      border:none;
      border-radius:50%;
      background:var(--azul);
      color:var(--blanco);
      font-size:17px;
      cursor:pointer;
      display:flex;
      justify-content:center;
      align-items:center;
      transition:background 0.2s, transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }

    .controles input[type="range"]{
      accent-color:var(--naranja);
      cursor:pointer;
    }

    .progreso{
      flex:1;
    }

    .volumen{
      width:80px;
    }

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>
<body>

  <video src="andrei.mp4" controls></video>
  <canvas></canvas>

  <script>
    let video = document.querySelector("video");
    let lienzo = document.querySelector("canvas");
    let contexto = lienzo.getContext("2d");

    video.onloadedmetadata = function(){

      lienzo.width = video.videoWidth;
      lienzo.height = video.videoHeight;

      function fotograma(){

        contexto.drawImage(
          video,
          0,
          0,
          lienzo.width,
          lienzo.height
        );

        requestAnimationFrame(fotograma);
      }

      fotograma();
    };
  </script>

<!-- ==================================================== -->
<!-- INTERFAZ: barra de controles, toasts y transcripción -->
<!-- ==================================================== -->

<script>

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // Quitamos los controles nativos: usamos los nuestros
  video.controls = false


  // ========================================================
  // BARRA DE CONTROLES (debajo del vídeo)
  // ========================================================

  let controles = document.createElement("div")
  controles.classList.add("controles")
  video.after(controles)

  function crearBoton(icono, titulo){
    let boton = document.createElement("button")
    boton.textContent = icono
    boton.title = titulo
    controles.appendChild(boton)
    return boton
  }

  let atras = crearBoton("↶", "Retroceder 5 segundos")
  let reproducir = crearBoton("▶", "Reproducir")
  let adelante = crearBoton("↷", "Avanzar 5 segundos")

  let tiempo = document.createElement("span")
  tiempo.classList.add("tiempo")
  controles.appendChild(tiempo)

  let progreso = document.createElement("input")
  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0
  progreso.classList.add("progreso")
  controles.appendChild(progreso)

  let volumen = document.createElement("input")
  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1
  volumen.title = "Volumen"
  volumen.classList.add("volumen")
  controles.appendChild(volumen)


  // ========================================================
  // EVENTOS
  // ========================================================

  function alternarReproduccion(){
    if(video.paused){
      video.play()
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
    }else{
      video.pause()
      mostrarToast("Pausar", "El vídeo se ha pausado.")
    }
  }

  reproducir.addEventListener("click", alternarReproduccion)
  video.addEventListener("click", alternarReproduccion)

  adelante.addEventListener("click", function(){
    video.currentTime = Math.min(video.currentTime + 5, video.duration || 0)
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    video.currentTime = Math.max(video.currentTime - 5, 0)
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })

  volumen.addEventListener("input", function(){
    video.volume = this.value
  })

  progreso.addEventListener("input", function(){
    if(video.duration){
      video.currentTime = this.value * video.duration
    }
  })

  function actualizarTiempo(){
    if(video.duration){
      progreso.value = video.currentTime / video.duration
    }
    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>'
  }

  actualizarTiempo()
  video.addEventListener("loadedmetadata", actualizarTiempo)
  video.addEventListener("timeupdate", actualizarTiempo)

  video.addEventListener("play", function(){
    reproducir.textContent = "❚❚"
    reproducir.title = "Pausar"
  })

  video.addEventListener("pause", function(){
    reproducir.textContent = "▶"
    reproducir.title = "Reproducir"
  })


  // ========================================================
  // TRANSCRIPCIÓN (al final de la página)
  // ========================================================

  let ultimo = document.querySelector("canvas") || controles
  crearTranscripcion(video, ultimo)

})

</script>

</body>
</html>
```
**003-gris.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">

  <!-- ==================================================== -->
  <!-- INTERFAZ: paleta, barra de controles, toasts y       -->
  <!-- transcripción. El ejercicio de abajo no cambia.      -->
  <!-- ==================================================== -->

  <style>
    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:16px;
      padding:30px 16px;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* Vídeo original y canvas procesado */
    video, canvas{
      display:block;
      width:800px;
      max-width:100%;
      height:auto;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
      box-shadow:0 10px 30px rgba(17,24,39,0.25);
    }

    video{
      cursor:pointer;
    }

    /* Deslizadores de los ejercicios (brillo, contraste...) */
    body > p{
      margin:0;
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:10px;
      padding:8px 14px;
      background:var(--negro);
      color:var(--blanco);
      border-radius:8px;
    }

    body > p input[type="range"]{
      flex:1;
      accent-color:var(--naranja);
    }

    body > p span{
      color:var(--naranja);
      font-family:monospace;
      font-weight:bold;
    }

    /* Barra de controles */
    .controles{
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:8px;
      padding:10px 14px;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
    }

    .controles button{
      width:38px;
      height:38px;
      flex-shrink:0;
      border:none;
      border-radius:50%;
      background:var(--azul);
      color:var(--blanco);
      font-size:17px;
      cursor:pointer;
      display:flex;
      justify-content:center;
      align-items:center;
      transition:background 0.2s, transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }

    .controles input[type="range"]{
      accent-color:var(--naranja);
      cursor:pointer;
    }

    .progreso{
      flex:1;
    }

    .volumen{
      width:80px;
    }

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>
<body>

  <video src="andrei.mp4" controls></video>
  <canvas></canvas>

  <script>
    let video = document.querySelector("video");
    let lienzo = document.querySelector("canvas");
    let contexto = lienzo.getContext("2d");

    video.onloadedmetadata = function(){

      lienzo.width = video.videoWidth;
      lienzo.height = video.videoHeight;

      function fotograma(){

        // Dibujamos el vídeo
        contexto.drawImage(
          video,
          0,
          0,
          lienzo.width,
          lienzo.height
        );

        // Obtenemos los píxeles
        let imagen = contexto.getImageData(
          0,
          0,
          lienzo.width,
          lienzo.height
        );

        let pixeles = imagen.data;

        // Recorremos los píxeles
        for(let i = 0; i < pixeles.length; i += 4){

          let rojo = pixeles[i];
          let verde = pixeles[i + 1];
          let azul = pixeles[i + 2];

          // Calculamos gris
          let gris = (rojo + verde + azul) / 3;

          pixeles[i]     = gris; // R
          pixeles[i + 1] = gris; // G
          pixeles[i + 2] = gris; // B

          // pixeles[i + 3] es Alpha
        }

        // Volvemos a colocar la imagen
        contexto.putImageData(imagen, 0, 0);

        requestAnimationFrame(fotograma);
      }

      fotograma();
    };
  </script>

<!-- ==================================================== -->
<!-- INTERFAZ: barra de controles, toasts y transcripción -->
<!-- ==================================================== -->

<script>

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // Quitamos los controles nativos: usamos los nuestros
  video.controls = false


  // ========================================================
  // BARRA DE CONTROLES (debajo del vídeo)
  // ========================================================

  let controles = document.createElement("div")
  controles.classList.add("controles")
  video.after(controles)

  function crearBoton(icono, titulo){
    let boton = document.createElement("button")
    boton.textContent = icono
    boton.title = titulo
    controles.appendChild(boton)
    return boton
  }

  let atras = crearBoton("↶", "Retroceder 5 segundos")
  let reproducir = crearBoton("▶", "Reproducir")
  let adelante = crearBoton("↷", "Avanzar 5 segundos")

  let tiempo = document.createElement("span")
  tiempo.classList.add("tiempo")
  controles.appendChild(tiempo)

  let progreso = document.createElement("input")
  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0
  progreso.classList.add("progreso")
  controles.appendChild(progreso)

  let volumen = document.createElement("input")
  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1
  volumen.title = "Volumen"
  volumen.classList.add("volumen")
  controles.appendChild(volumen)


  // ========================================================
  // EVENTOS
  // ========================================================

  function alternarReproduccion(){
    if(video.paused){
      video.play()
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
    }else{
      video.pause()
      mostrarToast("Pausar", "El vídeo se ha pausado.")
    }
  }

  reproducir.addEventListener("click", alternarReproduccion)
  video.addEventListener("click", alternarReproduccion)

  adelante.addEventListener("click", function(){
    video.currentTime = Math.min(video.currentTime + 5, video.duration || 0)
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    video.currentTime = Math.max(video.currentTime - 5, 0)
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })

  volumen.addEventListener("input", function(){
    video.volume = this.value
  })

  progreso.addEventListener("input", function(){
    if(video.duration){
      video.currentTime = this.value * video.duration
    }
  })

  function actualizarTiempo(){
    if(video.duration){
      progreso.value = video.currentTime / video.duration
    }
    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>'
  }

  actualizarTiempo()
  video.addEventListener("loadedmetadata", actualizarTiempo)
  video.addEventListener("timeupdate", actualizarTiempo)

  video.addEventListener("play", function(){
    reproducir.textContent = "❚❚"
    reproducir.title = "Pausar"
  })

  video.addEventListener("pause", function(){
    reproducir.textContent = "▶"
    reproducir.title = "Reproducir"
  })


  // ========================================================
  // TRANSCRIPCIÓN (al final de la página)
  // ========================================================

  let ultimo = document.querySelector("canvas") || controles
  crearTranscripcion(video, ultimo)

})

</script>

</body>
</html>
```
**004-operaciones de color.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">

  <!-- ==================================================== -->
  <!-- INTERFAZ: paleta, barra de controles, toasts y       -->
  <!-- transcripción. El ejercicio de abajo no cambia.      -->
  <!-- ==================================================== -->

  <style>
    body{
      margin:0;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:16px;
      padding:30px 16px;
      background:var(--blanco);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    /* Vídeo original y canvas procesado */
    video, canvas{
      display:block;
      width:800px;
      max-width:100%;
      height:auto;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
      box-shadow:0 10px 30px rgba(17,24,39,0.25);
    }

    video{
      cursor:pointer;
    }

    /* Deslizadores de los ejercicios (brillo, contraste...) */
    body > p{
      margin:0;
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:10px;
      padding:8px 14px;
      background:var(--negro);
      color:var(--blanco);
      border-radius:8px;
    }

    body > p input[type="range"]{
      flex:1;
      accent-color:var(--naranja);
    }

    body > p span{
      color:var(--naranja);
      font-family:monospace;
      font-weight:bold;
    }

    /* Barra de controles */
    .controles{
      width:800px;
      max-width:100%;
      display:flex;
      align-items:center;
      gap:8px;
      padding:10px 14px;
      background:var(--negro);
      border:3px solid var(--azul);
      border-radius:12px;
    }

    .controles button{
      width:38px;
      height:38px;
      flex-shrink:0;
      border:none;
      border-radius:50%;
      background:var(--azul);
      color:var(--blanco);
      font-size:17px;
      cursor:pointer;
      display:flex;
      justify-content:center;
      align-items:center;
      transition:background 0.2s, transform 0.2s;
    }

    .controles button:hover{
      background:var(--naranja);
      transform:scale(1.1);
    }

    .controles button:active{
      transform:scale(0.95);
    }

    .controles input[type="range"]{
      accent-color:var(--naranja);
      cursor:pointer;
    }

    .progreso{
      flex:1;
    }

    .volumen{
      width:80px;
    }

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

  </style>
</head>
<body>

  <video src="andrei.mp4" controls></video>

  <p>
    Brillo:
    <input type="range" id="brillo"
           min="-100" max="100" value="0">
    <span id="valorBrillo">0</span>
  </p>

  <p>
    Contraste:
    <input type="range" id="contraste"
           min="-100" max="100" value="0">
    <span id="valorContraste">0</span>
  </p>

  <p>
    Saturación:
    <input type="range" id="saturacion"
           min="0" max="200" value="100">
    <span id="valorSaturacion">100</span>%
  </p>

  <p>
    Gamma:
    <input type="range" id="gamma"
           min="10" max="300" value="100">
    <span id="valorGamma">1.00</span>
  </p>

  <canvas></canvas>

  <script>

    let video = document.querySelector("video");
    let lienzo = document.querySelector("canvas");
    let contexto = lienzo.getContext("2d");

    let brillo = document.querySelector("#brillo");
    let contraste = document.querySelector("#contraste");
    let saturacion = document.querySelector("#saturacion");
    let gamma = document.querySelector("#gamma");

    let valorBrillo = document.querySelector("#valorBrillo");
    let valorContraste = document.querySelector("#valorContraste");
    let valorSaturacion = document.querySelector("#valorSaturacion");
    let valorGamma = document.querySelector("#valorGamma");


    // Mostrar valores de los sliders

    brillo.oninput = function(){
      valorBrillo.textContent = brillo.value;
    }

    contraste.oninput = function(){
      valorContraste.textContent = contraste.value;
    }

    saturacion.oninput = function(){
      valorSaturacion.textContent = saturacion.value;
    }

    gamma.oninput = function(){
      valorGamma.textContent = (gamma.value / 100).toFixed(2);
    }


    video.onloadedmetadata = function(){

      lienzo.width = video.videoWidth;
      lienzo.height = video.videoHeight;

      function fotograma(){

        // Dibujamos el vídeo original
        contexto.drawImage(
          video,
          0,
          0,
          lienzo.width,
          lienzo.height
        );


        // Obtenemos todos los píxeles
        let imagen = contexto.getImageData(
          0,
          0,
          lienzo.width,
          lienzo.height
        );

        let pixeles = imagen.data;


        // Valores actuales de los controles

        let valorB = parseFloat(brillo.value);

        let valorC = parseFloat(contraste.value);

        let valorS = parseFloat(saturacion.value) / 100;

        let valorG = parseFloat(gamma.value) / 100;


        // Factor de contraste
        let factorContraste =
          (259 * (valorC + 255)) /
          (255 * (259 - valorC));


        // Recorremos todos los píxeles

        for(let i = 0; i < pixeles.length; i += 4){

          let r = pixeles[i];
          let g = pixeles[i + 1];
          let b = pixeles[i + 2];


          // -------------------------
          // BRILLO
          // -------------------------

          r += valorB;
          g += valorB;
          b += valorB;


          // -------------------------
          // CONTRASTE
          // -------------------------

          r = factorContraste * (r - 128) + 128;
          g = factorContraste * (g - 128) + 128;
          b = factorContraste * (b - 128) + 128;


          // -------------------------
          // SATURACIÓN
          // -------------------------

          let gris =
              r * 0.299 +
              g * 0.587 +
              b * 0.114;

          r = gris + (r - gris) * valorS;
          g = gris + (g - gris) * valorS;
          b = gris + (b - gris) * valorS;


          // -------------------------
          // GAMMA
          // -------------------------

          r = 255 * Math.pow(r / 255, 1 / valorG);
          g = 255 * Math.pow(g / 255, 1 / valorG);
          b = 255 * Math.pow(b / 255, 1 / valorG);


          // -------------------------
          // LIMITAMOS 0 - 255
          // -------------------------

          r = Math.max(0, Math.min(255, r));
          g = Math.max(0, Math.min(255, g));
          b = Math.max(0, Math.min(255, b));


          // Guardamos el píxel

          pixeles[i]     = r;
          pixeles[i + 1] = g;
          pixeles[i + 2] = b;

          // pixeles[i + 3] = alpha
        }


        // Pintamos el resultado
        contexto.putImageData(imagen, 0, 0);

        requestAnimationFrame(fotograma);
      }

      fotograma();
    };

  </script>

<!-- ==================================================== -->
<!-- INTERFAZ: barra de controles, toasts y transcripción -->
<!-- ==================================================== -->

<script>

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video")

videos.forEach(function(video){

  // Quitamos los controles nativos: usamos los nuestros
  video.controls = false


  // ========================================================
  // BARRA DE CONTROLES (debajo del vídeo)
  // ========================================================

  let controles = document.createElement("div")
  controles.classList.add("controles")
  video.after(controles)

  function crearBoton(icono, titulo){
    let boton = document.createElement("button")
    boton.textContent = icono
    boton.title = titulo
    controles.appendChild(boton)
    return boton
  }

  let atras = crearBoton("↶", "Retroceder 5 segundos")
  let reproducir = crearBoton("▶", "Reproducir")
  let adelante = crearBoton("↷", "Avanzar 5 segundos")

  let tiempo = document.createElement("span")
  tiempo.classList.add("tiempo")
  controles.appendChild(tiempo)

  let progreso = document.createElement("input")
  progreso.type = "range"
  progreso.min = 0
  progreso.max = 1
  progreso.step = 0.001
  progreso.value = 0
  progreso.classList.add("progreso")
  controles.appendChild(progreso)

  let volumen = document.createElement("input")
  volumen.type = "range"
  volumen.min = 0
  volumen.max = 1
  volumen.step = 0.01
  volumen.value = 1
  volumen.title = "Volumen"
  volumen.classList.add("volumen")
  controles.appendChild(volumen)


  // ========================================================
  // EVENTOS
  // ========================================================

  function alternarReproduccion(){
    if(video.paused){
      video.play()
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...")
    }else{
      video.pause()
      mostrarToast("Pausar", "El vídeo se ha pausado.")
    }
  }

  reproducir.addEventListener("click", alternarReproduccion)
  video.addEventListener("click", alternarReproduccion)

  adelante.addEventListener("click", function(){
    video.currentTime = Math.min(video.currentTime + 5, video.duration || 0)
    mostrarToast("Avanzar", "Avanzando 5 segundos...")
  })

  atras.addEventListener("click", function(){
    video.currentTime = Math.max(video.currentTime - 5, 0)
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...")
  })

  volumen.addEventListener("input", function(){
    video.volume = this.value
  })

  progreso.addEventListener("input", function(){
    if(video.duration){
      video.currentTime = this.value * video.duration
    }
  })

  function actualizarTiempo(){
    if(video.duration){
      progreso.value = video.currentTime / video.duration
    }
    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>'
  }

  actualizarTiempo()
  video.addEventListener("loadedmetadata", actualizarTiempo)
  video.addEventListener("timeupdate", actualizarTiempo)

  video.addEventListener("play", function(){
    reproducir.textContent = "❚❚"
    reproducir.title = "Pausar"
  })

  video.addEventListener("pause", function(){
    reproducir.textContent = "▶"
    reproducir.title = "Reproducir"
  })


  // ========================================================
  // TRANSCRIPCIÓN (al final de la página)
  // ========================================================

  let ultimo = document.querySelector("canvas") || controles
  crearTranscripcion(video, ultimo)

})

</script>

</body>
</html>
```
**005-integracion de los proyectos.html**
```html
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;
  padding:30px 0;
  background:var(--blanco);
  color:var(--negro);
  font-family:Arial,sans-serif;
}


/* ======================================================== */
/* REPRODUCTOR                                               */
/* ======================================================== */

.jvvideo{
  position:relative;
  display:inline-block;
  overflow:hidden;
  border-radius:14px;
  background:var(--negro);
  border:3px solid var(--azul);
  box-shadow:0 20px 60px rgba(17,24,39,0.35);
}


/* El vídeo sigue existiendo, pero queda oculto */

.jvvideo video{
  display:none;
}


/* El canvas es la pantalla visible */

.jvvideo canvas{
  display:block;
  width:800px;
  max-width:100%;
  cursor:pointer;
}


/* ======================================================== */
/* SUBTÍTULOS                                                */
/* ======================================================== */

.subtitulos{
  position:absolute;

  left:50%;
  bottom:80px;

  transform:translateX(-50%);

  width:85%;

  text-align:center;

  color:white;
  font-size:22px;
  font-weight:bold;
  line-height:1.4;

  text-shadow:
    2px 2px 3px black,
    -2px -2px 3px black,
    2px -2px 3px black,
    -2px 2px 3px black;

  pointer-events:none;

  z-index:100;
}


/* ======================================================== */
/* CONTROLES                                                 */
/* ======================================================== */

.controles{
  position:absolute;

  left:0;
  right:0;
  bottom:0;

  display:flex;
  align-items:center;
  gap:8px;

  padding:35px 14px 12px 14px;

  background:
    linear-gradient(
      transparent,
      rgba(17,24,39,0.92)
    );

  opacity:0;

  transform:translateY(15px);

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  pointer-events:none;

  z-index:200;
}


.jvvideo:hover .controles{
  opacity:1;
  transform:translateY(0);
  pointer-events:auto;
}


/* ======================================================== */
/* BOTONES                                                   */
/* ======================================================== */

.controles button{
  width:38px;
  height:38px;

  flex-shrink:0;

  border:none;
  border-radius:50%;

  background:var(--azul);
  color:var(--blanco);

  font-size:15px;

  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  transition:
    background 0.2s,
    color 0.2s,
    transform 0.2s;
}


.controles button:hover{
  background:var(--naranja);
  transform:scale(1.1);
}


.controles button:active{
  transform:scale(0.95);
}


.controles button.activo{
  background:var(--naranja);
  color:var(--blanco);
  box-shadow:0 0 0 2px var(--blanco);
}


.boton-subtitulos{
  font-size:12px !important;
  font-weight:bold;
}


.boton-efectos{
  font-size:11px !important;
  font-weight:bold;
}


/* ======================================================== */
/* SLIDERS CONTROLES                                         */
/* ======================================================== */

.controles input[type="range"]{
  appearance:none;

  height:4px;

  background:rgba(255,255,255,0.3);

  border-radius:10px;

  cursor:pointer;
  outline:none;
}


.controles input[type="range"]::-webkit-slider-thumb{
  appearance:none;

  width:13px;
  height:13px;

  border-radius:50%;

  background:var(--naranja);

  box-shadow:0 0 5px rgba(0,0,0,0.5);
}


.progreso{
  flex:1;
}


.volumen{
  width:80px;
}


/* ======================================================== */
/* PANEL DE EFECTOS                                          */
/* ======================================================== */

.panel-efectos{

  position:absolute;

  top:15px;
  right:15px;

  width:300px;

  max-height:calc(100% - 100px);

  overflow-y:auto;

  padding:18px;

  background:rgba(17,24,39,0.95);

  backdrop-filter:blur(15px);

  border:2px solid var(--azul);

  border-radius:12px;

  color:white;

  z-index:300;

  display:none;

  box-shadow:
    0 10px 40px
    rgba(0,0,0,0.5);
}


.panel-efectos.visible{
  display:block;
}


.panel-efectos h3{
  margin:0 0 15px 0;
  font-size:16px;
}


.panel-efectos h4{

  margin:20px 0 10px 0;

  padding-bottom:5px;

  border-bottom:
    1px solid
    rgba(255,255,255,0.15);

  font-size:12px;

  text-transform:uppercase;

  color:var(--naranja);
}


.control-efecto{
  margin-bottom:12px;
}


.control-efecto label{

  display:flex;

  justify-content:
    space-between;

  margin-bottom:5px;

  font-size:12px;
}


.control-efecto input[type="range"]{
  width:100%;
}


.efecto-check{

  display:flex;

  align-items:center;

  gap:8px;

  margin:8px 0;

  font-size:13px;

  cursor:pointer;
}


.botones-efecto{

  display:grid;

  grid-template-columns:
    repeat(2,1fr);

  gap:6px;
}


.botones-efecto button{

  padding:8px;

  border:0;

  border-radius:6px;

  background:var(--azul);

  color:white;

  cursor:pointer;
}


.botones-efecto button.activo{

  background:var(--naranja);

  color:var(--blanco);
}


.reset-efectos{

  width:100%;

  margin-top:15px;

  padding:10px;

  border:0;

  border-radius:6px;

  background:var(--azul);

  color:white;

  cursor:pointer;
}


.reset-efectos:hover{
  background:var(--naranja);
}


/* ======================================================== */
/* PANEL FX CON LA PALETA                                    */
/* ======================================================== */

.panel-efectos input{
  accent-color:var(--naranja);
}

    /* ========================= */
    /* PALETA */
    /* ========================= */

    :root{
      --azul:#1d4ed8;
      --naranja:#f97316;
      --blanco:#ffffff;
      --negro:#111827;
    }

    .controles input[type="range"]::-moz-range-thumb{
      width:13px;
      height:13px;
      border:none;
      border-radius:50%;
      background:var(--naranja);
    }


    /* ========================= */
    /* TIEMPO / DURACIÓN */
    /* ========================= */

    .tiempo{
      flex-shrink:0;
      color:var(--blanco);
      font-family:monospace;
      font-size:13px;
      white-space:nowrap;
    }

    .tiempo .total{
      color:var(--naranja);
    }


    /* ========================= */
    /* TRANSCRIPCIÓN */
    /* ========================= */

    .transcripcion{
      width:800px;
      max-width:90vw;
      border:2px solid var(--negro);
      border-radius:14px;
      overflow:hidden;
      background:var(--blanco);
    }

    .transcripcion h2{
      margin:0;
      padding:12px 18px;
      font-size:17px;
      background:var(--azul);
      color:var(--blanco);
    }

    .lineas{
      max-height:260px;
      overflow-y:auto;
      padding:8px;
    }

    .linea{
      display:flex;
      gap:12px;
      padding:8px 10px;
      border-radius:8px;
      cursor:pointer;
      line-height:1.4;
      transition:background 0.2s;
    }

    .linea:hover{
      background:#eff6ff;
    }

    .linea .marca{
      color:var(--azul);
      font-family:monospace;
      font-weight:bold;
      flex-shrink:0;
    }

    .linea.activa{
      background:var(--naranja);
      color:var(--blanco);
    }

    .linea.activa .marca{
      color:var(--negro);
    }

    .aviso{
      padding:12px 10px;
      color:#6b7280;
    }


    /* ========================= */
    /* TOAST */
    /* ========================= */

    .toast{
      position:fixed;
      bottom:24px;
      right:24px;
      background:var(--negro);
      color:var(--blanco);
      border-left:6px solid var(--naranja);
      border-radius:8px;
      padding:12px 18px;
      box-shadow:0 6px 18px rgba(17,24,39,0.35);
      opacity:0;
      transform:translateY(20px);
      transition:opacity 0.3s, transform 0.3s;
      pointer-events:none;
      z-index:1000;
    }

    .toast.visible{
      opacity:1;
      transform:translateY(0);
    }

    .toast strong{
      display:block;
      color:var(--naranja);
      margin-bottom:3px;
    }

</style>
</head>


<body>


<video
src="002-utilizacion-de-formularios-desde-codigo-2026-10-05_13-44-07.webm">
</video>


<script>


// ========================================================
// CONVERTIR TIEMPO VTT A SEGUNDOS
// ========================================================

function tiempoASegundos(tiempo){

  let partes =
    tiempo.split(":");


  // MM:SS.mmm

  if(partes.length == 2){

    let minutos =
      parseInt(partes[0]);

    let segundos =
      parseFloat(partes[1]);

    return minutos * 60 + segundos;

  }


  // HH:MM:SS.mmm

  if(partes.length == 3){

    let horas =
      parseInt(partes[0]);

    let minutos =
      parseInt(partes[1]);

    let segundos =
      parseFloat(partes[2]);

    return (
      horas * 3600 +
      minutos * 60 +
      segundos
    );

  }


  return 0;

}



// ========================================================
// TODOS LOS VÍDEOS
// ========================================================

// ========================================================
// TOAST
// ========================================================

let toast = document.createElement("div")
toast.classList.add("toast")
document.body.appendChild(toast)
let temporizadorToast

function mostrarToast(boton, mensaje){
  toast.innerHTML = "<strong>" + boton + "</strong>Mensaje: " + mensaje
  toast.classList.add("visible")
  clearTimeout(temporizadorToast)
  temporizadorToast = setTimeout(function(){
    toast.classList.remove("visible")
  }, 2500)
}



// ========================================================
// TIEMPO EN FORMATO m:ss
// ========================================================

function marcaCorta(segundos){
  if(!segundos || isNaN(segundos)) segundos = 0
  let m = Math.floor(segundos / 60)
  let s = Math.floor(segundos % 60)
  return m + ":" + String(s).padStart(2, "0")
}



// ========================================================
// PANEL DE TRANSCRIPCIÓN (archivo WebVTT)
// ========================================================

// "00:01:02.500" o "01:02.500" -> segundos
function aSegundos(marca){
  let partes = marca.trim().replace(",", ".").split(":").map(Number)
  let segundos = 0
  partes.forEach(function(p){ segundos = segundos * 60 + p })
  return segundos
}

/*
  Crea un panel debajo del reproductor y carga
  el .vtt con el mismo nombre que el vídeo.
*/
function crearTranscripcion(media, despuesDe){

  let panel = document.createElement("div")
  panel.classList.add("transcripcion")
  panel.innerHTML =
    '<h2>Transcripción</h2>' +
    '<div class="lineas"><div class="aviso">Cargando transcripción...</div></div>'

  despuesDe.after(panel)

  let lineas = panel.querySelector(".lineas")
  let frases = []

  let rutaVtt = media.getAttribute("src").replace(/\.[^.]+$/, ".vtt")

  fetch(rutaVtt)
    .then(function(respuesta){
      if(!respuesta.ok) throw new Error("No existe")
      return respuesta.text()
    })
    .then(function(texto){

      // Cada bloque separado por una línea en blanco es una frase
      let bloques = texto.replace(/\r/g, "").split(/\n\n+/)

      bloques.forEach(function(bloque){
        let filas = bloque.trim().split("\n")
        let indice = filas.findIndex(f => f.includes("-->"))
        if(indice === -1) return

        let tiempos = filas[indice].split("-->")
        frases.push({
          inicio: aSegundos(tiempos[0]),
          fin: aSegundos(tiempos[1].trim().split(" ")[0]),
          texto: filas.slice(indice + 1).join(" ")
        })
      })

      lineas.innerHTML = ""

      frases.forEach(function(frase){

        let linea = document.createElement("div")
        linea.classList.add("linea")

        let marca = document.createElement("span")
        marca.classList.add("marca")
        marca.textContent = marcaCorta(frase.inicio)

        let textoFrase = document.createElement("span")
        textoFrase.textContent = frase.texto

        linea.appendChild(marca)
        linea.appendChild(textoFrase)
        lineas.appendChild(linea)

        // Clic en una frase = saltar a ese momento
        linea.addEventListener("click", function(){
          media.currentTime = frase.inicio
          mostrarToast("Transcripción", "Saltando a " + marcaCorta(frase.inicio))
        })

        frase.elemento = linea
      })
    })
    .catch(function(){
      lineas.innerHTML = '<div class="aviso">No se ha encontrado la transcripción (' + rutaVtt + ').</div>'
    })


  // Resaltar la frase que está sonando
  media.addEventListener("timeupdate", function(){

    frases.forEach(function(frase){

      let activa = media.currentTime >= frase.inicio && media.currentTime < frase.fin

      if(activa && !frase.elemento.classList.contains("activa")){
        frase.elemento.classList.add("activa")
        lineas.scrollTop = frase.elemento.offsetTop - lineas.offsetTop - lineas.clientHeight / 2
      }

      if(!activa){
        frase.elemento.classList.remove("activa")
      }
    })
  })
}



let videos = document.querySelectorAll("video");


videos.forEach(function(video){



  // ======================================================
  // CONTENEDOR
  // ======================================================

  let contenedor =
    document.createElement("div");


  contenedor.classList.add(
    "jvvideo"
  );


  video.parentNode.insertBefore(
    contenedor,
    video
  );


  contenedor.appendChild(
    video
  );


  // Panel de transcripción debajo del reproductor

  crearTranscripcion(video, contenedor);



  // ======================================================
  // CANVAS
  // ======================================================

  let lienzo =
    document.createElement(
      "canvas"
    );


  let contexto =
    lienzo.getContext(
      "2d",
      {
        willReadFrequently:true
      }
    );


  contenedor.appendChild(
    lienzo
  );



  // ======================================================
  // SUBTÍTULOS
  // ======================================================

  let contenedor_transcripcion =
    document.createElement(
      "div"
    );


  contenedor_transcripcion
    .classList.add(
      "subtitulos"
    );


  contenedor.appendChild(
    contenedor_transcripcion
  );



  // ======================================================
  // CONTROLES
  // ======================================================

  let controles =
    document.createElement(
      "div"
    );


  controles.classList.add(
    "controles"
  );


  contenedor.appendChild(
    controles
  );



  // ======================================================
  // ATRÁS
  // ======================================================

  let atras =
    document.createElement(
      "button"
    );


  atras.textContent = "↶";

  atras.title =
    "Retroceder 5 segundos";


  controles.appendChild(
    atras
  );



  // ======================================================
  // PLAY
  // ======================================================

  let reproducir =
    document.createElement(
      "button"
    );


  reproducir.textContent =
    "▶";


  reproducir.title =
    "Reproducir";


  controles.appendChild(
    reproducir
  );



  // ======================================================
  // ADELANTE
  // ======================================================

  let adelante =
    document.createElement(
      "button"
    );


  adelante.textContent =
    "↷";


  adelante.title =
    "Avanzar 5 segundos";


  controles.appendChild(
    adelante
  );



  // ======================================================
  // CC
  // ======================================================

  let botonSubtitulos =
    document.createElement(
      "button"
    );


  botonSubtitulos.textContent =
    "CC";


  botonSubtitulos.title =
    "Activar subtítulos";


  botonSubtitulos.classList.add(
    "boton-subtitulos"
  );


  controles.appendChild(
    botonSubtitulos
  );



  // ======================================================
  // FX
  // ======================================================

  let botonEfectos =
    document.createElement(
      "button"
    );


  botonEfectos.textContent =
    "FX";


  botonEfectos.title =
    "Efectos de vídeo";


  botonEfectos.classList.add(
    "boton-efectos"
  );


  controles.appendChild(
    botonEfectos
  );



  // ======================================================
  // PROGRESO
  // ======================================================

  let progreso =
    document.createElement(
      "input"
    );


  progreso.type =
    "range";


  progreso.min = 0;

  progreso.max = 1;

  progreso.step =
    0.001;

  progreso.value =
    0;


  progreso.classList.add(
    "progreso"
  );


  controles.appendChild(
    progreso
  );



  // ======================================================
  // TIEMPO / DURACIÓN
  // ======================================================

  let tiempo =
    document.createElement(
      "span"
    );


  tiempo.classList.add(
    "tiempo"
  );


  controles.appendChild(
    tiempo
  );


  function actualizarTiempo(){

    tiempo.innerHTML =
      marcaCorta(video.currentTime) +
      ' / <span class="total">' + marcaCorta(video.duration) + '</span>';

  }


  actualizarTiempo();

  video.addEventListener("loadedmetadata", actualizarTiempo);
  video.addEventListener("timeupdate", actualizarTiempo);



  // ======================================================
  // TOASTS (botones de la barra)
  // ======================================================

  /*
    Se registran antes que los onclick de abajo,
    así que se ejecutan primero: video.paused,
    subtitulosActivos y el panel FX todavía
    tienen el estado de ANTES del clic.
  */

  function toastPlayPause(){

    if(video.paused){
      mostrarToast("Reproducir", "El vídeo se está reproduciendo...");
    }else{
      mostrarToast("Pausar", "El vídeo se ha pausado.");
    }

  }


  reproducir.addEventListener("click", toastPlayPause);
  lienzo.addEventListener("click", toastPlayPause);


  adelante.addEventListener("click", function(){
    mostrarToast("Avanzar", "Avanzando 5 segundos...");
  });


  atras.addEventListener("click", function(){
    mostrarToast("Retroceder", "Retrocediendo 5 segundos...");
  });


  botonSubtitulos.addEventListener("click", function(){
    if(subtitulosActivos){
      mostrarToast("Subtítulos", "Subtítulos desactivados.");
    }else{
      mostrarToast("Subtítulos", "Subtítulos activados.");
    }
  });


  botonEfectos.addEventListener("click", function(){
    if(panelEfectos.classList.contains("visible")){
      mostrarToast("Efectos", "Panel de efectos cerrado.");
    }else{
      mostrarToast("Efectos", "Panel de efectos abierto.");
    }
  });



  // ======================================================
  // VOLUMEN
  // ======================================================

  let volumen =
    document.createElement(
      "input"
    );


  volumen.type =
    "range";


  volumen.min = 0;

  volumen.max = 1;

  volumen.step =
    0.01;

  volumen.value =
    1;


  volumen.classList.add(
    "volumen"
  );


  controles.appendChild(
    volumen
  );



  // ======================================================
  // PANEL EFECTOS
  // ======================================================

  let panelEfectos =
    document.createElement(
      "div"
    );


  panelEfectos.classList.add(
    "panel-efectos"
  );


  panelEfectos.innerHTML = `

    <h3>Efectos de vídeo</h3>


    <h4>Ajustes</h4>


    <div class="control-efecto">

      <label>
        <span>Brillo</span>
        <span class="valor-brillo">
          0
        </span>
      </label>

      <input
        type="range"
        class="fx-brillo"
        min="-100"
        max="100"
        value="0">

    </div>


    <div class="control-efecto">

      <label>
        <span>Contraste</span>
        <span class="valor-contraste">
          0
        </span>
      </label>

      <input
        type="range"
        class="fx-contraste"
        min="-100"
        max="100"
        value="0">

    </div>


    <div class="control-efecto">

      <label>
        <span>Saturación</span>
        <span class="valor-saturacion">
          100%
        </span>
      </label>

      <input
        type="range"
        class="fx-saturacion"
        min="0"
        max="200"
        value="100">

    </div>


    <div class="control-efecto">

      <label>
        <span>Gamma</span>
        <span class="valor-gamma">
          1.00
        </span>
      </label>

      <input
        type="range"
        class="fx-gamma"
        min="10"
        max="300"
        value="100">

    </div>



    <h4>Color</h4>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-gris">

      Escala de grises

    </label>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-negativo">

      Negativo

    </label>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-sepia">

      Sepia

    </label>



    <h4>Canales RGB</h4>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-rojo"
        checked>

      Canal rojo

    </label>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-verde"
        checked>

      Canal verde

    </label>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-azul"
        checked>

      Canal azul

    </label>



    <h4>Umbral</h4>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-umbral">

      Activar umbral

    </label>


    <div class="control-efecto">

      <label>
        <span>Umbral</span>
        <span class="valor-umbral">
          128
        </span>
      </label>

      <input
        type="range"
        class="fx-valor-umbral"
        min="0"
        max="255"
        value="128">

    </div>



    <h4>Posterización</h4>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-posterizar">

      Activar posterización

    </label>


    <div class="control-efecto">

      <label>
        <span>Niveles</span>
        <span class="valor-posterizar">
          4
        </span>
      </label>

      <input
        type="range"
        class="fx-niveles"
        min="2"
        max="16"
        value="4">

    </div>



    <h4>Pixelado</h4>


    <label class="efecto-check">

      <input
        type="checkbox"
        class="fx-pixelado">

      Activar pixelado

    </label>


    <div class="control-efecto">

      <label>
        <span>Tamaño</span>
        <span class="valor-pixelado">
          8
        </span>
      </label>

      <input
        type="range"
        class="fx-tamano-pixel"
        min="2"
        max="50"
        value="8">

    </div>



    <h4>Convoluciones</h4>


    <div class="botones-efecto">

      <button
        class="fx-convolucion activo"
        data-efecto="ninguno">

        Normal

      </button>


      <button
        class="fx-convolucion"
        data-efecto="blur">

        Blur

      </button>


      <button
        class="fx-convolucion"
        data-efecto="sharpen">

        Sharpen

      </button>


      <button
        class="fx-convolucion"
        data-efecto="bordes">

        Bordes

      </button>

    </div>


    <button
      class="reset-efectos">

      Restablecer efectos

    </button>

  `;


  contenedor.appendChild(
    panelEfectos
  );



  // ======================================================
  // REFERENCIAS FX
  // ======================================================

  let fxBrillo =
    panelEfectos.querySelector(
      ".fx-brillo"
    );


  let fxContraste =
    panelEfectos.querySelector(
      ".fx-contraste"
    );


  let fxSaturacion =
    panelEfectos.querySelector(
      ".fx-saturacion"
    );


  let fxGamma =
    panelEfectos.querySelector(
      ".fx-gamma"
    );


  let fxGris =
    panelEfectos.querySelector(
      ".fx-gris"
    );


  let fxNegativo =
    panelEfectos.querySelector(
      ".fx-negativo"
    );


  let fxSepia =
    panelEfectos.querySelector(
      ".fx-sepia"
    );


  let fxRojo =
    panelEfectos.querySelector(
      ".fx-rojo"
    );


  let fxVerde =
    panelEfectos.querySelector(
      ".fx-verde"
    );


  let fxAzul =
    panelEfectos.querySelector(
      ".fx-azul"
    );


  let fxUmbral =
    panelEfectos.querySelector(
      ".fx-umbral"
    );


  let fxValorUmbral =
    panelEfectos.querySelector(
      ".fx-valor-umbral"
    );


  let fxPosterizar =
    panelEfectos.querySelector(
      ".fx-posterizar"
    );


  let fxNiveles =
    panelEfectos.querySelector(
      ".fx-niveles"
    );


  let fxPixelado =
    panelEfectos.querySelector(
      ".fx-pixelado"
    );


  let fxTamanoPixel =
    panelEfectos.querySelector(
      ".fx-tamano-pixel"
    );


  let resetEfectos =
    panelEfectos.querySelector(
      ".reset-efectos"
    );



  // ======================================================
  // MOSTRAR VALORES
  // ======================================================

  fxBrillo.oninput =
  function(){

    panelEfectos.querySelector(
      ".valor-brillo"
    ).textContent =
      this.value;

  };


  fxContraste.oninput =
  function(){

    panelEfectos.querySelector(
      ".valor-contraste"
    ).textContent =
      this.value;

  };


  fxSaturacion.oninput =
  function(){

    panelEfectos.querySelector(
      ".valor-saturacion"
    ).textContent =
      this.value + "%";

  };


  fxGamma.oninput =
  function(){

    panelEfectos.querySelector(
      ".valor-gamma"
    ).textContent =
      (
        this.value / 100
      ).toFixed(2);

  };


  fxValorUmbral.oninput =
  function(){

    panelEfectos.querySelector(
      ".valor-umbral"
    ).textContent =
      this.value;

  };


  fxNiveles.oninput =
  function(){

    panelEfectos.querySelector(
      ".valor-posterizar"
    ).textContent =
      this.value;

  };


  fxTamanoPixel.oninput =
  function(){

    panelEfectos.querySelector(
      ".valor-pixelado"
    ).textContent =
      this.value;

  };



  // ======================================================
  // MOSTRAR PANEL FX
  // ======================================================

  botonEfectos.onclick =
  function(){

    panelEfectos.classList.toggle(
      "visible"
    );


    botonEfectos.classList.toggle(
      "activo"
    );

  };



  // ======================================================
  // CONVOLUCIÓN
  // ======================================================

  let convolucionActual =
    "ninguno";


  let botonesConvolucion =
    panelEfectos.querySelectorAll(
      ".fx-convolucion"
    );


  botonesConvolucion.forEach(
    function(boton){


      boton.onclick =
      function(){


        convolucionActual =
          this.dataset.efecto;


        botonesConvolucion.forEach(
          function(b){

            b.classList.remove(
              "activo"
            );

          }
        );


        this.classList.add(
          "activo"
        );


      };


    }
  );



  // ======================================================
  // RESET FX
  // ======================================================

  resetEfectos.onclick =
  function(){


    fxBrillo.value = 0;

    fxContraste.value = 0;

    fxSaturacion.value = 100;

    fxGamma.value = 100;


    fxGris.checked = false;

    fxNegativo.checked = false;

    fxSepia.checked = false;


    fxRojo.checked = true;

    fxVerde.checked = true;

    fxAzul.checked = true;


    fxUmbral.checked = false;

    fxValorUmbral.value = 128;


    fxPosterizar.checked = false;

    fxNiveles.value = 4;


    fxPixelado.checked = false;

    fxTamanoPixel.value = 8;


    convolucionActual =
      "ninguno";


    botonesConvolucion.forEach(
      function(boton){

        boton.classList.remove(
          "activo"
        );

      }
    );


    panelEfectos.querySelector(
      '[data-efecto="ninguno"]'
    ).classList.add(
      "activo"
    );


    panelEfectos.querySelector(
      ".valor-brillo"
    ).textContent =
      "0";


    panelEfectos.querySelector(
      ".valor-contraste"
    ).textContent =
      "0";


    panelEfectos.querySelector(
      ".valor-saturacion"
    ).textContent =
      "100%";


    panelEfectos.querySelector(
      ".valor-gamma"
    ).textContent =
      "1.00";


    panelEfectos.querySelector(
      ".valor-umbral"
    ).textContent =
      "128";


    panelEfectos.querySelector(
      ".valor-posterizar"
    ).textContent =
      "4";


    panelEfectos.querySelector(
      ".valor-pixelado"
    ).textContent =
      "8";


    dibujarFotograma();

  };



  // ======================================================
  // SUBTÍTULOS
  // ======================================================

  let subtitulosActivos =
    false;


  let transcripcion =
    [];



  // ======================================================
  // CALCULAR ARCHIVO VTT
  // ======================================================

  let origenvideo =
    video.getAttribute(
      "src"
    );


  let nombrevideo =
    origenvideo.substring(
      0,
      origenvideo.lastIndexOf(".")
    );


  let nombretranscripcion =
    nombrevideo + ".vtt";


  console.log(
    "Buscando subtítulos:",
    nombretranscripcion
  );



  // ======================================================
  // CARGAR VTT
  // ======================================================

  fetch(
    nombretranscripcion
  )

  .then(function(resultado){


    if(!resultado.ok){

      throw new Error(
        "No existe el archivo VTT"
      );

    }


    return resultado.text();


  })

  .then(function(datos){


    datos =
      datos.replace(
        /\r/g,
        ""
      );


    datos =
      datos.replace(
        /^WEBVTT.*\n/,
        ""
      );


    let partido =
      datos.split(
        /\n\n+/
      );


    partido.forEach(
      function(pieza){


        let lineas =
          pieza
          .trim()
          .split("\n");


        if(
          lineas.length < 2
        ){

          return;

        }


        let lineaTiempo =
          -1;


        lineas.forEach(
          function(
            linea,
            indice
          ){


            if(
              linea.includes(
                "-->"
              )
            ){

              lineaTiempo =
                indice;

            }


          }
        );


        if(
          lineaTiempo == -1
        ){

          return;

        }


        let tiempos =
          lineas[lineaTiempo]
          .split(" --> ");


        if(
          tiempos.length != 2
        ){

          return;

        }


        let inicio =
          tiempos[0]
          .trim();


        let final =
          tiempos[1]
          .trim()
          .split(" ")[0];


        let texto =
          lineas
          .slice(
            lineaTiempo + 1
          )
          .join(" ");


        transcripcion.push({

          inicio:inicio,

          final:final,

          texto:texto

        });


      }
    );


    console.log(
      "Subtítulos cargados:",
      transcripcion.length
    );


  })

  .catch(function(error){


    console.error(
      "Error cargando subtítulos:",
      nombretranscripcion,
      error
    );


  });



  // ======================================================
  // ACTUALIZAR SUBTÍTULOS
  // ======================================================

  function actualizarSubtitulos(){


    if(
      !subtitulosActivos
    ){

      contenedor_transcripcion
        .textContent =
        "";

      return;

    }


    let textoActual =
      "";


    for(
      let i = 0;
      i < transcripcion.length;
      i++
    ){


      let frase =
        transcripcion[i];


      let inicio =
        tiempoASegundos(
          frase.inicio
        );


      let final =
        tiempoASegundos(
          frase.final
        );


      if(
        video.currentTime >= inicio
        &&
        video.currentTime <= final
      ){

        textoActual =
          frase.texto;

        break;

      }


    }


    contenedor_transcripcion
      .textContent =
      textoActual;

  }



  // ======================================================
  // BOTÓN CC
  // ======================================================

  botonSubtitulos.onclick =
  function(){


    subtitulosActivos =
      !subtitulosActivos;


    if(
      subtitulosActivos
    ){


      botonSubtitulos
        .classList.add(
          "activo"
        );


      botonSubtitulos.title =
        "Desactivar subtítulos";


      actualizarSubtitulos();


    }else{


      botonSubtitulos
        .classList.remove(
          "activo"
        );


      botonSubtitulos.title =
        "Activar subtítulos";


      contenedor_transcripcion
        .textContent =
        "";


    }


  };



  // ======================================================
  // PROCESAMIENTO DE COLOR
  // ======================================================

  function procesarColor(
    imagen
  ){


    let pixeles =
      imagen.data;


    let brillo =
      parseFloat(
        fxBrillo.value
      );


    let contraste =
      parseFloat(
        fxContraste.value
      );


    let saturacion =
      parseFloat(
        fxSaturacion.value
      ) / 100;


    let gamma =
      parseFloat(
        fxGamma.value
      ) / 100;


    let factorContraste =
      (
        259 *
        (
          contraste + 255
        )
      )
      /
      (
        255 *
        (
          259 - contraste
        )
      );


    for(
      let i = 0;
      i < pixeles.length;
      i += 4
    ){


      let r =
        pixeles[i];


      let g =
        pixeles[i + 1];


      let b =
        pixeles[i + 2];



      // BRILLO

      r += brillo;

      g += brillo;

      b += brillo;



      // CONTRASTE

      r =
        factorContraste *
        (r - 128) +
        128;


      g =
        factorContraste *
        (g - 128) +
        128;


      b =
        factorContraste *
        (b - 128) +
        128;



      // SATURACIÓN

      let gris =
        r * 0.299 +
        g * 0.587 +
        b * 0.114;


      r =
        gris +
        (r - gris) *
        saturacion;


      g =
        gris +
        (g - gris) *
        saturacion;


      b =
        gris +
        (b - gris) *
        saturacion;



      // LIMITAR

      r =
        Math.max(
          0,
          Math.min(
            255,
            r
          )
        );


      g =
        Math.max(
          0,
          Math.min(
            255,
            g
          )
        );


      b =
        Math.max(
          0,
          Math.min(
            255,
            b
          )
        );



      // GAMMA

      r =
        255 *
        Math.pow(
          r / 255,
          1 / gamma
        );


      g =
        255 *
        Math.pow(
          g / 255,
          1 / gamma
        );


      b =
        255 *
        Math.pow(
          b / 255,
          1 / gamma
        );



      // ESCALA DE GRISES

      if(
        fxGris.checked
      ){


        let gris =
          r * 0.299 +
          g * 0.587 +
          b * 0.114;


        r = gris;

        g = gris;

        b = gris;


      }



      // SEPIA

      if(
        fxSepia.checked
      ){


        let nr =
          r * 0.393 +
          g * 0.769 +
          b * 0.189;


        let ng =
          r * 0.349 +
          g * 0.686 +
          b * 0.168;


        let nb =
          r * 0.272 +
          g * 0.534 +
          b * 0.131;


        r = nr;

        g = ng;

        b = nb;


      }



      // NEGATIVO

      if(
        fxNegativo.checked
      ){


        r =
          255 - r;


        g =
          255 - g;


        b =
          255 - b;


      }



      // UMBRAL

      if(
        fxUmbral.checked
      ){


        let gris =
          r * 0.299 +
          g * 0.587 +
          b * 0.114;


        let valor =
          gris >=
          parseFloat(
            fxValorUmbral.value
          )
          ?
          255
          :
          0;


        r = valor;

        g = valor;

        b = valor;


      }



      // POSTERIZACIÓN

      if(
        fxPosterizar.checked
      ){


        let niveles =
          parseInt(
            fxNiveles.value
          );


        let salto =
          255 /
          (niveles - 1);


        r =
          Math.round(
            r / salto
          ) *
          salto;


        g =
          Math.round(
            g / salto
          ) *
          salto;


        b =
          Math.round(
            b / salto
          ) *
          salto;


      }



      // CANALES RGB

      if(
        !fxRojo.checked
      ){

        r = 0;

      }


      if(
        !fxVerde.checked
      ){

        g = 0;

      }


      if(
        !fxAzul.checked
      ){

        b = 0;

      }



      // GUARDAR

      pixeles[i] =
        Math.max(
          0,
          Math.min(
            255,
            r
          )
        );


      pixeles[i + 1] =
        Math.max(
          0,
          Math.min(
            255,
            g
          )
        );


      pixeles[i + 2] =
        Math.max(
          0,
          Math.min(
            255,
            b
          )
        );


    }


    return imagen;

  }



  // ======================================================
  // CONVOLUCIÓN
  // ======================================================

  function aplicarConvolucion(
    imagen,
    kernel,
    divisor = 1,
    offset = 0
  ){


    let ancho =
      imagen.width;


    let alto =
      imagen.height;


    let origen =
      imagen.data;


    let salida =
      new ImageData(
        ancho,
        alto
      );


    let destino =
      salida.data;


    for(
      let y = 1;
      y < alto - 1;
      y++
    ){


      for(
        let x = 1;
        x < ancho - 1;
        x++
      ){


        let r = 0;

        let g = 0;

        let b = 0;


        for(
          let ky = -1;
          ky <= 1;
          ky++
        ){


          for(
            let kx = -1;
            kx <= 1;
            kx++
          ){


            let indice =
              (
                (
                  y + ky
                ) *
                ancho +
                (
                  x + kx
                )
              ) * 4;


            let peso =
              kernel[
                (
                  ky + 1
                ) *
                3 +
                (
                  kx + 1
                )
              ];


            r +=
              origen[indice] *
              peso;


            g +=
              origen[indice + 1] *
              peso;


            b +=
              origen[indice + 2] *
              peso;


          }


        }


        let indiceDestino =
          (
            y * ancho +
            x
          ) * 4;


        destino[indiceDestino] =
          r / divisor +
          offset;


        destino[indiceDestino + 1] =
          g / divisor +
          offset;


        destino[indiceDestino + 2] =
          b / divisor +
          offset;


        destino[indiceDestino + 3] =
          255;


      }


    }


    return salida;

  }



  // ======================================================
  // PIXELADO
  // ======================================================

  function aplicarPixelado(){


    let tamano =
      parseInt(
        fxTamanoPixel.value
      );


    let anchoPequeno =
      Math.max(
        1,
        Math.floor(
          lienzo.width /
          tamano
        )
      );


    let altoPequeno =
      Math.max(
        1,
        Math.floor(
          lienzo.height /
          tamano
        )
      );


    let temporal =
      document.createElement(
        "canvas"
      );


    temporal.width =
      anchoPequeno;


    temporal.height =
      altoPequeno;


    let ctxTemporal =
      temporal.getContext(
        "2d"
      );


    ctxTemporal
      .imageSmoothingEnabled =
      false;


    ctxTemporal.drawImage(
      lienzo,
      0,
      0,
      anchoPequeno,
      altoPequeno
    );


    contexto
      .imageSmoothingEnabled =
      false;


    contexto.drawImage(
      temporal,
      0,
      0,
      anchoPequeno,
      altoPequeno,
      0,
      0,
      lienzo.width,
      lienzo.height
    );


    contexto
      .imageSmoothingEnabled =
      true;

  }



  // ======================================================
  // DIBUJAR FOTOGRAMA
  // ======================================================

  function dibujarFotograma(){


    if(
      lienzo.width == 0
      ||
      lienzo.height == 0
    ){

      return;

    }


    contexto.drawImage(
      video,
      0,
      0,
      lienzo.width,
      lienzo.height
    );


    let imagen =
      contexto.getImageData(
        0,
        0,
        lienzo.width,
        lienzo.height
      );


    imagen =
      procesarColor(
        imagen
      );



    // BLUR

    if(
      convolucionActual ==
      "blur"
    ){


      imagen =
        aplicarConvolucion(
          imagen,
          [
            1,1,1,
            1,1,1,
            1,1,1
          ],
          9
        );


    }



    // SHARPEN

    if(
      convolucionActual ==
      "sharpen"
    ){


      imagen =
        aplicarConvolucion(
          imagen,
          [
             0,-1, 0,
            -1, 5,-1,
             0,-1, 0
          ]
        );


    }



    // BORDES

    if(
      convolucionActual ==
      "bordes"
    ){


      imagen =
        aplicarConvolucion(
          imagen,
          [
            -1,-1,-1,
            -1, 8,-1,
            -1,-1,-1
          ]
        );


    }



    contexto.putImageData(
      imagen,
      0,
      0
    );



    // PIXELADO

    if(
      fxPixelado.checked
    ){

      aplicarPixelado();

    }


  }



  // ======================================================
  // LOOP DE VÍDEO
  // ======================================================

  let loopActivo =
    false;


  function siguienteFotograma(){


    // Procesamos imagen

    dibujarFotograma();


    // Actualizamos subtítulos
    // exactamente junto al fotograma

    actualizarSubtitulos();


    // Actualizamos progreso

    if(
      video.duration
    ){

      progreso.value =
        video.currentTime /
        video.duration;

    }


    // Continuamos solamente
    // mientras el vídeo reproduce

    if(
      !video.paused
      &&
      !video.ended
    ){


      if(
        video.requestVideoFrameCallback
      ){


        video.requestVideoFrameCallback(
          siguienteFotograma
        );


      }else{


        requestAnimationFrame(
          siguienteFotograma
        );


      }


    }else{

      loopActivo =
        false;

    }


  }



  // ======================================================
  // INICIAR LOOP
  // ======================================================

  function iniciarLoop(){


    if(
      loopActivo
    ){

      return;

    }


    loopActivo =
      true;


    if(
      video.requestVideoFrameCallback
    ){


      video.requestVideoFrameCallback(
        siguienteFotograma
      );


    }else{


      requestAnimationFrame(
        siguienteFotograma
      );


    }


  }



  // ======================================================
  // METADATOS
  // ======================================================

  video.onloadedmetadata =
  function(){


    lienzo.width =
      video.videoWidth;


    lienzo.height =
      video.videoHeight;


    dibujarFotograma();

    actualizarSubtitulos();


  };




  // ======================================================
  // TOASTS (panel de efectos)
  // ======================================================

  resetEfectos.addEventListener("click", function(){
    mostrarToast("Restablecer efectos", "Se han quitado todos los efectos.");
  });


  botonesConvolucion.forEach(function(boton){

    boton.addEventListener("click", function(){
      mostrarToast(
        "Convolución",
        "Efecto aplicado: " + boton.textContent.trim()
      );
    });

  });



  // ======================================================
  // PLAY / PAUSE
  // ======================================================

  reproducir.onclick =
  function(){


    if(
      video.paused
    ){

      video.play();

    }else{

      video.pause();

    }


  };



  // ======================================================
  // CLICK CANVAS
  // ======================================================

  lienzo.onclick =
  function(){


    if(
      video.paused
    ){

      video.play();

    }else{

      video.pause();

    }


  };



  // ======================================================
  // ADELANTE
  // ======================================================

  adelante.onclick =
  function(){


    video.currentTime =
      Math.min(
        video.currentTime + 5,
        video.duration
      );


    actualizarSubtitulos();


    if(
      video.paused
    ){

      dibujarFotograma();

    }


  };



  // ======================================================
  // ATRÁS
  // ======================================================

  atras.onclick =
  function(){


    video.currentTime =
      Math.max(
        video.currentTime - 5,
        0
      );


    actualizarSubtitulos();


    if(
      video.paused
    ){

      dibujarFotograma();

    }


  };



  // ======================================================
  // VOLUMEN
  // ======================================================

  volumen.oninput =
  function(){


    video.volume =
      parseFloat(
        this.value
      );


  };



  // ======================================================
  // TIME UPDATE
  // ======================================================

  video.ontimeupdate =
  function(){


    if(
      video.duration
    ){

      progreso.value =
        video.currentTime /
        video.duration;

    }


    actualizarSubtitulos();


  };



  // ======================================================
  // SEEK
  // ======================================================

  progreso.oninput =
  function(){


    if(
      video.duration
    ){


      video.currentTime =
        this.value *
        video.duration;


      actualizarSubtitulos();


    }


  };



  progreso.onchange =
  function(){


    if(
      video.paused
    ){

      dibujarFotograma();

      actualizarSubtitulos();

    }


  };



  // ======================================================
  // PLAY
  // ======================================================

  video.onplay =
  function(){


    reproducir.textContent =
      "❚❚";


    iniciarLoop();


  };



  // ======================================================
  // PAUSE
  // ======================================================

  video.onpause =
  function(){


    reproducir.textContent =
      "▶";


    loopActivo =
      false;


    dibujarFotograma();

    actualizarSubtitulos();


  };



  // ======================================================
  // ENDED
  // ======================================================

  video.onended =
  function(){


    reproducir.textContent =
      "▶";


    loopActivo =
      false;


    actualizarSubtitulos();


  };



  // ======================================================
  // ACTUALIZAR FRAME CUANDO CAMBIAMOS EFECTOS
  // ======================================================

  panelEfectos.addEventListener(
    "input",
    function(){


      if(
        video.paused
      ){

        dibujarFotograma();

      }


    }
  );


  panelEfectos.addEventListener(
    "change",
    function(){


      if(
        video.paused
      ){

        dibujarFotograma();

      }


    }
  );


});


</script>

</body>
</html>
```
### 006-Animación de objetos
**000-Introducción.md**
```markdown
# Animación de objetos
- Animación de objetos
	- Conceptos fundamentales
	- Recursos y componentes
	- Representación y renderizado
	- Interacción y actualización
	- Optimización y rendimiento
	- Ejemplo práctico

```
**001-demostracion animacion.html**
```html
<!doctype html>
<html lang="es">
	<head>
	<meta charset="UTF-8">
    <style>
      :root{
        --azul:#1d4ed8;
        --naranja:#f97316;
        --blanco:#ffffff;
        --negro:#111827;
      }
      body{
        background:var(--negro);
      }
      #contenedor{
        width:50px;
      	height:50px;
      	background:var(--azul);
      }
    </style>
  </head>
  <body>
    <div id="contenedor"></div>

    <!-- Cargamos la librería GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script>
      // gsap.to(objetivo, {propiedades}) anima desde el estado actual hasta estos valores
      gsap.to("#contenedor", {x:100, duration:2})
    </script>
	</body>
</html>

```
**002-animacion.html**
```html
<!doctype html>
<html lang="es">
	<head>
	<meta charset="UTF-8">
    <style>
      :root{
        --azul:#1d4ed8;
        --naranja:#f97316;
        --blanco:#ffffff;
        --negro:#111827;
      }
      body{
        background:var(--negro);
      }
      #contenedor{
        width:50px;
      	height:50px;
      	background:var(--azul);
      }
    </style>
  </head>
  <body>
    <div id="contenedor"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script>
      // Una timeline encadena animaciones como los % de un @keyframes
      // 10s en total → 4 tramos de 2.5s
      let tl = gsap.timeline({defaults:{duration:2.5, ease:"none"}})
      tl.to("#contenedor", {x:100, y:0})
        .to("#contenedor", {x:100, y:100})
        .to("#contenedor", {x:0,   y:100})
        .to("#contenedor", {x:0,   y:0})
    </script>
	</body>
</html>

```
**003-tambien color.html**
```html
<!doctype html>
<html lang="es">
	<head>
	<meta charset="UTF-8">
    <style>
      :root{
        --azul:#1d4ed8;
        --naranja:#f97316;
        --blanco:#ffffff;
        --negro:#111827;
      }
      body{
        background:var(--negro);
      }
      #contenedor{
        width:50px;
      	height:50px;
      	background:var(--azul);
      }
    </style>
  </head>
  <body>
    <div id="contenedor"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script>
      // GSAP también interpola colores
      let tl = gsap.timeline({defaults:{duration:2.5, ease:"none"}})
      tl.to("#contenedor", {x:100, y:0,   backgroundColor:"#f97316"})
        .to("#contenedor", {x:100, y:100, backgroundColor:"#ffffff"})
        .to("#contenedor", {x:0,   y:100, backgroundColor:"#f97316"})
        .to("#contenedor", {x:0,   y:0,   backgroundColor:"#1d4ed8"})
    </script>
	</body>
</html>

```
**004-tambien transformaciones.html**
```html
<!doctype html>
<html lang="es">
	<head>
	<meta charset="UTF-8">
    <style>
      :root{
        --azul:#1d4ed8;
        --naranja:#f97316;
        --blanco:#ffffff;
        --negro:#111827;
      }
      body{
        background:var(--negro);
      }
      #contenedor{
        width:50px;
      	height:50px;
      	background:var(--azul);
      }
    </style>
  </head>
  <body>
    <div id="contenedor"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script>
      // Y transformaciones: rotation equivale a transform:rotate()
      let tl = gsap.timeline({defaults:{duration:2.5, ease:"none"}})
      tl.to("#contenedor", {x:100, y:0,   backgroundColor:"#f97316", rotation:270})
        .to("#contenedor", {x:100, y:100, backgroundColor:"#ffffff", rotation:100})
        .to("#contenedor", {x:0,   y:100, backgroundColor:"#f97316", rotation:360})
        .to("#contenedor", {x:0,   y:0,   backgroundColor:"#1d4ed8", rotation:0})
    </script>
	</body>
</html>

```
**005-tostada.html**
```html
<!doctype html>
<html lang="es">
	<head>
	<meta charset="UTF-8">
    <style>
      :root{
        --azul:#1d4ed8;
        --naranja:#f97316;
        --blanco:#ffffff;
        --negro:#111827;
      }
      body{
        background:var(--blanco);
      }
      #tostada{
      	position:fixed;
        right:20px;
        bottom:20px;
        width:200px;
        height:50px;
        padding:20px;
        font-family:sans-serif;
        font-size:11px;
        background:var(--negro);
        color:var(--blanco);
        border:1px solid var(--azul);
        border-left:10px solid var(--naranja);
      }
    </style>
  </head>
  <body>
    <div id="tostada">
    	Esto es una tostada
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script>
      // gsap.from anima DESDE estos valores hasta como está definida en el CSS
      gsap.from("#tostada", {opacity:0, y:30, duration:1})
    </script>
	</body>
</html>

```
**006-tostada en accion.html**
```html
<!doctype html>
<html lang="es">
	<head>
	<meta charset="UTF-8">
    <style>
      :root{
        --azul:#1d4ed8;
        --naranja:#f97316;
        --blanco:#ffffff;
        --negro:#111827;
      }
      body{
        background:var(--blanco);
      }
      button{
        background:var(--azul);
        color:var(--blanco);
        border:none;
        padding:8px 14px;
        cursor:pointer;
      }
      #tostada{
      	position:fixed;
        right:20px;
        bottom:20px;
        width:200px;
        height:50px;
        padding:20px;
        font-family:sans-serif;
        font-size:11px;
        background:var(--negro);
        color:var(--blanco);
        border:1px solid var(--azul);
        border-left:10px solid var(--naranja);
        display:none;
      }
    </style>
  </head>
  <body>
    <button>Mostrar</button>
    <div id="tostada">
    	Esto es una tostada
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script>
      let boton = document.querySelector("button")
      let tostada = document.querySelector("#tostada")
      boton.onclick = function(){
        // gsap.set cambia propiedades al instante, sin animación
      	gsap.set(tostada, {display:"block"})
        // gsap.delayedCall sustituye a setTimeout (los segundos van en segundos, no ms)
        gsap.delayedCall(5, function(){
        	gsap.set(tostada, {display:"none"})
        })
      }
    </script>
	</body>
</html>

```
**007-animaciones para las tostadas.html**
```html
<!doctype html>
<html lang="es">
	<head>
	<meta charset="UTF-8">
    <style>
      :root{
        --azul:#1d4ed8;
        --naranja:#f97316;
        --blanco:#ffffff;
        --negro:#111827;
      }
      body{
        background:var(--blanco);
      }
      button{
        background:var(--azul);
        color:var(--blanco);
        border:none;
        padding:8px 14px;
        cursor:pointer;
      }
      #tostada{
      	position:fixed;
        right:20px;
        bottom:20px;
        width:200px;
        height:50px;
        padding:20px;
        font-family:sans-serif;
        font-size:11px;
        background:var(--negro);
        color:var(--blanco);
        border:1px solid var(--azul);
        border-left:10px solid var(--naranja);
        display:none;
      }
    </style>
  </head>
  <body>
    <button>Mostrar</button>
    <div id="tostada">
    	Esto es una tostada
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script>
      let boton = document.querySelector("button")
      let tostada = document.querySelector("#tostada")
      boton.onclick = function(){
        // Ya no hacen falta las clases .aparece/.desaparece ni los setTimeout:
        // una timeline encadena aparecer → esperar → desaparecer
        let tl = gsap.timeline()
        tl.set(tostada, {display:"block"})
          .fromTo(tostada, {x:100, opacity:0}, {x:0, opacity:1, duration:1})   // aparece
          .to(tostada, {opacity:0, duration:1}, "+=3")                           // espera 3s y desaparece
          .set(tostada, {display:"none"})
      }
    </script>
	</body>
</html>

```
## 002-Proyecto
**index.html**
```html
<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>
        Subtitulador Inteligente de Vídeos
    </title>

    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/reproductor.css">
    <link rel="stylesheet" href="css/animaciones.css">
    <link rel="stylesheet" href="css/toast.css">

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

</head>

<body>

    <header class="cabecera">

        <div class="logo">
            🎬
        </div>

        <div class="titulo_principal">

            <h1>
                Subtitulador Inteligente IA
            </h1>

            <p>
                Generación automática de subtítulos mediante Whisper
            </p>

        </div>

    </header>

    <main class="contenedor_principal">

        <!-- =======================
             ZONA DE CARGA
        ======================== -->

        <section
            id="zona_carga"
            class="zona_carga">

            <div class="icono_carga">
                📂
            </div>

            <h2>
                Arrastra un vídeo aquí
            </h2>

            <p>
                o selecciona un archivo desde tu ordenador
            </p>

            <input
                type="file"
                id="selector_video"
                accept="video/*"
                hidden>

            <button
                id="btn_seleccionar_video"
                class="boton_principal">

                Seleccionar vídeo

            </button>

        </section>

        <!-- =======================
             INFORMACIÓN DEL VÍDEO
        ======================== -->

        <section
            id="panel_informacion"
            class="panel panel_oculto">

            <h2>
                Información del vídeo
            </h2>

            <div class="grid_informacion">

                <div class="tarjeta_info">
                    <span class="etiqueta">Nombre</span>
                    <span id="nombre_video">-</span>
                </div>

                <div class="tarjeta_info">
                    <span class="etiqueta">Duración</span>
                    <span id="duracion_video">-</span>
                </div>

                <div class="tarjeta_info">
                    <span class="etiqueta">Tamaño</span>
                    <span id="tamano_video">-</span>
                </div>

                <div class="tarjeta_info">
                    <span class="etiqueta">Resolución</span>
                    <span id="resolucion_video">-</span>
                </div>

                <div class="tarjeta_info">
                    <span class="etiqueta">Formato</span>
                    <span id="formato_video">-</span>
                </div>

            </div>

        </section>

        <!-- =======================
             REPRODUCTOR
        ======================== -->

        <section
            id="seccion_reproductor"
            class="panel panel_oculto">

            <h2>
                Reproductor multimedia
            </h2>

            <div class="contenedor_reproductor">

                <img
                    id="miniatura_video"
                    class="miniatura_video"
                    alt="Miniatura del vídeo"
                    hidden>

                <video
                    id="reproductor_video"
                    preload="metadata">

                    <track
                        id="pista_subtitulos"
                        kind="subtitles"
                        srclang="es"
                        label="Español">

                </video>

                <!-- =======================
                     CONTROLES
                ======================== -->

                <div class="controles_video">

                    <button
                        id="btn_reproducir"
                        class="control_video">

                        ▶️

                    </button>

                    <button
                        id="btn_pausar"
                        class="control_video">

                        ⏸️

                    </button>

                    <button
                        id="btn_detener"
                        class="control_video">

                        ⏹️

                    </button>

                    <!-- TIEMPO -->

                    <span id="tiempo_actual">

                        00:00

                    </span>

                    <!-- BARRA -->

                    <div
                        id="barra_reproduccion"
                        class="barra_reproduccion">

                        <div
                            id="barra_progreso_video"
                            class="barra_progreso_video">

                        </div>

                    </div>

                    <span
                        id="tiempo_total">

                        00:00

                    </span>

                    <!-- VOLUMEN -->

                    <button
                        id="btn_volumen"
                        class="control_video">

                        🔊

                    </button>

                    <input
                        id="control_volumen"
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value="1">

                    <!-- SUBTÍTULOS -->

                    <button
                        id="btn_subtitulos"
                        class="control_video"
                        title="Activar o desactivar subtítulos">

                        💬

                    </button>

                    <!-- MODO CINE -->

                    <button
                        id="btn_cine"
                        class="control_video"
                        title="Modo cine">

                        📺

                    </button>

                    <!-- PANTALLA COMPLETA -->

                    <button
                        id="btn_pantalla_completa"
                        class="control_video"
                        title="Pantalla completa">

                        ⛶

                    </button>

                </div>

            </div>

        </section>

        <!-- =======================
             PROCESAMIENTO
        ======================== -->

        <section
            id="panel_procesamiento"
            class="panel panel_oculto">

            <h2>
                Procesamiento con IA
            </h2>

            <div class="loader_whisper"></div>

            <div class="modelo_whisper">
                Modelo: Whisper Small
            </div>

            <div class="barra_progreso_contenedor">

                <div
                    id="barra_progreso"
                    class="barra_progreso">
                </div>

            </div>

            <p id="texto_estado">

                Esperando vídeo...

            </p>

        </section>

        <!-- =======================
             SUBTÍTULOS
        ======================== -->

        <section
            id="panel_subtitulos"
            class="panel panel_oculto">

            <div class="cabecera_panel">

                <h2>
                    Subtítulos generados
                </h2>

                <div class="acciones_subtitulos">

                    <button
                        id="btn_descargar_srt"
                        class="boton_secundario">

                        Descargar SRT

                    </button>

                    <button
                        id="btn_descargar_vtt"
                        class="boton_secundario">

                        Descargar VTT

                    </button>

                    <button
                        id="btn_copiar_subtitulos"
                        class="boton_secundario">

                        Copiar texto

                    </button>

                </div>

            </div>

            <textarea
                id="contenido_subtitulos"
                spellcheck="false"
                placeholder="Los subtítulos aparecerán aquí...">
            </textarea>

        </section>

    </main>

    <!-- TOASTS -->

    <div id="contenedor_toasts"></div>

    <!-- VIDEO METADATOS -->

    <video
        id="video_metadatos"
        hidden>
    </video>

    <!-- JAVASCRIPT -->

    <script src="js/utilidades.js"></script>
    <script src="js/gestor_toasts.js"></script>
    <script src="js/almacenamiento_local.js"></script>
    <script src="js/arrastrar_soltar.js"></script>
    <script src="js/gestor_video.js"></script>
    <script src="js/gestor_subtitulos.js"></script>
    <script src="js/exportador_subtitulos.js"></script>
    <script src="js/animaciones.js"></script>
    <script src="js/principal.js"></script>

</body>

</html>
```
### backend
**package-lock.json**
```json
{
    "name": "subtitulador_video_ia",
    "version": "1.0.0",
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
        "": {
            "name": "subtitulador_video_ia",
            "version": "1.0.0",
            "dependencies": {
                "cors": "^2.8.5",
                "express": "^4.21.2",
                "multer": "^1.4.5-lts.1"
            },
            "devDependencies": {
                "nodemon": "^3.1.7"
            }
        },
        "node_modules/accepts": {
            "version": "1.3.8",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
            "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
            "license": "MIT",
            "dependencies": {
                "mime-types": "~2.1.34",
                "negotiator": "0.6.3"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/anymatch": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
            "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "normalize-path": "^3.0.0",
                "picomatch": "^2.0.4"
            },
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/append-field": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
            "integrity": "sha512-klpgFSWLW1ZEs8svjfb7g4qWY0YS5imI82dTg+QahUvJ8YqAY0P10Uk8tTyh9ZGuYEZEMaeJYCF5BFuX552hsw==",
            "license": "MIT"
        },
        "node_modules/array-flatten": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
            "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
            "license": "MIT"
        },
        "node_modules/balanced-match": {
            "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
            "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": "18 || 20 || >=22"
            }
        },
        "node_modules/binary-extensions": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
            "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/body-parser": {
            "version": "1.20.9",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.9.tgz",
            "integrity": "sha512-FISIQxV5u91Y9gvuFq3q/tA/qTqLJn3AhRcEvyozyhJTh5OBFFtv827AdHU7Rbyct4r+Ba1/99oFa1Y3yuFsdw==",
            "license": "MIT",
            "dependencies": {
                "bytes": "~3.1.2",
                "content-type": "~1.0.5",
                "debug": "2.6.9",
                "depd": "2.0.0",
                "destroy": "~1.2.0",
                "http-errors": "~2.0.1",
                "iconv-lite": "~0.4.24",
                "on-finished": "~2.4.1",
                "qs": "~6.16.0",
                "raw-body": "~2.5.3",
                "type-is": "~1.6.18",
                "unpipe": "~1.0.0"
            },
            "engines": {
                "node": ">= 0.8",
                "npm": "1.2.8000 || >= 1.4.16"
            }
        },
        "node_modules/brace-expansion": {
            "version": "5.0.13",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.13.tgz",
            "integrity": "sha512-Vh3dmFbc4wZeox7M9I/0L9GfFd83Su4+yCck/OF9Gi/P/dAHn0RT7X4K9R7gMNMhDck3DvhR6QXsnQdjjgwNvQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "balanced-match": "^4.0.2"
            },
            "engines": {
                "node": "20 || >=22"
            }
        },
        "node_modules/braces": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
            "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "fill-range": "^7.1.1"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/buffer-from": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
            "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
            "license": "MIT"
        },
        "node_modules/busboy": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
            "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
            "dependencies": {
                "streamsearch": "^1.1.0"
            },
            "engines": {
                "node": ">=10.16.0"
            }
        },
        "node_modules/bytes": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
            "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/call-bind-apply-helpers": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
            "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0",
                "function-bind": "^1.1.2"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/call-bound": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
            "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
            "license": "MIT",
            "dependencies": {
                "call-bind-apply-helpers": "^1.0.2",
                "get-intrinsic": "^1.3.0"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/chokidar": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
            "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "anymatch": "~3.1.2",
                "braces": "~3.0.2",
                "glob-parent": "~5.1.2",
                "is-binary-path": "~2.1.0",
                "is-glob": "~4.0.1",
                "normalize-path": "~3.0.0",
                "readdirp": "~3.6.0"
            },
            "engines": {
                "node": ">= 8.10.0"
            },
            "funding": {
                "url": "https://paulmillr.com/funding/"
            },
            "optionalDependencies": {
                "fsevents": "~2.3.2"
            }
        },
        "node_modules/concat-stream": {
            "version": "1.6.2",
            "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
            "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
            "engines": [
                "node >= 0.8"
            ],
            "license": "MIT",
            "dependencies": {
                "buffer-from": "^1.0.0",
                "inherits": "^2.0.3",
                "readable-stream": "^2.2.2",
                "typedarray": "^0.0.6"
            }
        },
        "node_modules/content-disposition": {
            "version": "0.5.4",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
            "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
            "license": "MIT",
            "dependencies": {
                "safe-buffer": "5.2.1"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/content-type": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
            "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/cookie": {
            "version": "0.7.2",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
            "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/cookie-signature": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.7.tgz",
            "integrity": "sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA==",
            "license": "MIT"
        },
        "node_modules/core-util-is": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
            "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
            "license": "MIT"
        },
        "node_modules/cors": {
            "version": "2.8.6",
            "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
            "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
            "license": "MIT",
            "dependencies": {
                "object-assign": "^4",
                "vary": "^1"
            },
            "engines": {
                "node": ">= 0.10"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "license": "MIT",
            "dependencies": {
                "ms": "2.0.0"
            }
        },
        "node_modules/depd": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
            "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/destroy": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
            "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8",
                "npm": "1.2.8000 || >= 1.4.16"
            }
        },
        "node_modules/dunder-proto": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
            "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
            "license": "MIT",
            "dependencies": {
                "call-bind-apply-helpers": "^1.0.1",
                "es-errors": "^1.3.0",
                "gopd": "^1.2.0"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/ee-first": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
            "license": "MIT"
        },
        "node_modules/encodeurl": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.2.tgz",
            "integrity": "sha512-ddmxiyS6ETq/v5/+mdA4fykK7JgEmqcShrGmQFTaKf5o43tL8XLuMzNLLsspuIC3/qGupS7Ci2TF+feJRkYY0w==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/es-define-property": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
            "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/es-errors": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
            "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/es-object-atoms": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
            "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/escape-html": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
            "license": "MIT"
        },
        "node_modules/etag": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/express": {
            "version": "4.22.3",
            "resolved": "https://registry.npmjs.org/express/-/express-4.22.3.tgz",
            "integrity": "sha512-Bdcs4+3qlpVlx2NRn6fgX2Ue2/gGRaPeawebgclM0ERSCqDpA+owF1fdPwjJUTAJWMTuAaxjDf+hzb0/4eKvvw==",
            "license": "MIT",
            "dependencies": {
                "accepts": "~1.3.8",
                "array-flatten": "1.1.1",
                "body-parser": "~1.20.5",
                "content-disposition": "~0.5.4",
                "content-type": "~1.0.4",
                "cookie": "~0.7.1",
                "cookie-signature": "~1.0.6",
                "debug": "2.6.9",
                "depd": "2.0.0",
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "finalhandler": "~1.3.1",
                "fresh": "~0.5.2",
                "http-errors": "~2.0.0",
                "merge-descriptors": "1.0.3",
                "methods": "~1.1.2",
                "on-finished": "~2.4.1",
                "parseurl": "~1.3.3",
                "path-to-regexp": "~0.1.13",
                "proxy-addr": "~2.0.7",
                "qs": "~6.16.0",
                "range-parser": "~1.2.1",
                "safe-buffer": "5.2.1",
                "send": "~0.19.0",
                "serve-static": "~1.16.2",
                "setprototypeof": "1.2.0",
                "statuses": "~2.0.1",
                "type-is": "~1.6.18",
                "utils-merge": "1.0.1",
                "vary": "~1.1.2"
            },
            "engines": {
                "node": ">= 0.10.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/fill-range": {
            "version": "7.1.1",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
            "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "to-regex-range": "^5.0.1"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/finalhandler": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.2.tgz",
            "integrity": "sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg==",
            "license": "MIT",
            "dependencies": {
                "debug": "2.6.9",
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "on-finished": "~2.4.1",
                "parseurl": "~1.3.3",
                "statuses": "~2.0.2",
                "unpipe": "~1.0.0"
            },
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/forwarded": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
            "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/fresh": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/fsevents": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
            "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
            "dev": true,
            "hasInstallScript": true,
            "license": "MIT",
            "optional": true,
            "os": [
                "darwin"
            ],
            "engines": {
                "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
            }
        },
        "node_modules/function-bind": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
            "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
            "license": "MIT",
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/get-intrinsic": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
            "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
            "license": "MIT",
            "dependencies": {
                "call-bind-apply-helpers": "^1.0.2",
                "es-define-property": "^1.0.1",
                "es-errors": "^1.3.0",
                "es-object-atoms": "^1.1.1",
                "function-bind": "^1.1.2",
                "get-proto": "^1.0.1",
                "gopd": "^1.2.0",
                "has-symbols": "^1.1.0",
                "hasown": "^2.0.2",
                "math-intrinsics": "^1.1.0"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/get-proto": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
            "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
            "license": "MIT",
            "dependencies": {
                "dunder-proto": "^1.0.1",
                "es-object-atoms": "^1.0.0"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/glob-parent": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
            "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "is-glob": "^4.0.1"
            },
            "engines": {
                "node": ">= 6"
            }
        },
        "node_modules/gopd": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
            "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/has-flag": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
            "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/has-symbols": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
            "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/hasown": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
            "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
            "license": "MIT",
            "dependencies": {
                "function-bind": "^1.1.2"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/http-errors": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
            "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
            "license": "MIT",
            "dependencies": {
                "depd": "~2.0.0",
                "inherits": "~2.0.4",
                "setprototypeof": "~1.2.0",
                "statuses": "~2.0.2",
                "toidentifier": "~1.0.1"
            },
            "engines": {
                "node": ">= 0.8"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/iconv-lite": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
            "license": "MIT",
            "dependencies": {
                "safer-buffer": ">= 2.1.2 < 3"
            },
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/ignore-by-default": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
            "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
            "license": "ISC"
        },
        "node_modules/ipaddr.js": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
            "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.10"
            }
        },
        "node_modules/is-binary-path": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
            "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "binary-extensions": "^2.0.0"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/is-extglob": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
            "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/is-glob": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
            "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "is-extglob": "^2.1.1"
            },
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/is-number": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.12.0"
            }
        },
        "node_modules/isarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
            "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
            "license": "MIT"
        },
        "node_modules/math-intrinsics": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
            "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/media-typer": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/merge-descriptors": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
            "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
            "license": "MIT",
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/methods": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/mime": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
            "license": "MIT",
            "bin": {
                "mime": "cli.js"
            },
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/mime-db": {
            "version": "1.52.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
            "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/mime-types": {
            "version": "2.1.35",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
            "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
            "license": "MIT",
            "dependencies": {
                "mime-db": "1.52.0"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/minimatch": {
            "version": "10.2.6",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.6.tgz",
            "integrity": "sha512-vpLQEs+VLCr1nU0BXS07maYoFwlDAH0gngQuuttxIwutDFEMHq2blX+8vpgxDdK3J1PwjCJiep77OitTZ4Ll1A==",
            "dev": true,
            "license": "BlueOak-1.0.0",
            "dependencies": {
                "brace-expansion": "^5.0.8"
            },
            "engines": {
                "node": "18 || 20 || >=22"
            },
            "funding": {
                "url": "https://github.com/sponsors/isaacs"
            }
        },
        "node_modules/minimist": {
            "version": "1.2.8",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
            "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
            "license": "MIT",
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/mkdirp": {
            "version": "0.5.6",
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
            "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
            "license": "MIT",
            "dependencies": {
                "minimist": "^1.2.6"
            },
            "bin": {
                "mkdirp": "bin/cmd.js"
            }
        },
        "node_modules/ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
            "license": "MIT"
        },
        "node_modules/multer": {
            "version": "1.4.5-lts.2",
            "resolved": "https://registry.npmjs.org/multer/-/multer-1.4.5-lts.2.tgz",
            "integrity": "sha512-VzGiVigcG9zUAoCNU+xShztrlr1auZOlurXynNvO9GiWD1/mTBbUljOKY+qMeazBqXgRnjzeEgJI/wyjJUHg9A==",
            "deprecated": "Multer 1.x is impacted by a number of vulnerabilities, which have been patched in 2.x. You should upgrade to the latest 2.x version.",
            "license": "MIT",
            "dependencies": {
                "append-field": "^1.0.0",
                "busboy": "^1.0.0",
                "concat-stream": "^1.5.2",
                "mkdirp": "^0.5.4",
                "object-assign": "^4.1.1",
                "type-is": "^1.6.4",
                "xtend": "^4.0.0"
            },
            "engines": {
                "node": ">= 6.0.0"
            }
        },
        "node_modules/negotiator": {
            "version": "0.6.3",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
            "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/nodemon": {
            "version": "3.1.14",
            "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.14.tgz",
            "integrity": "sha512-jakjZi93UtB3jHMWsXL68FXSAosbLfY0In5gtKq3niLSkrWznrVBzXFNOEMJUfc9+Ke7SHWoAZsiMkNP3vq6Jw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "chokidar": "^3.5.2",
                "debug": "^4",
                "ignore-by-default": "^1.0.1",
                "minimatch": "^10.2.1",
                "pstree.remy": "^1.1.8",
                "semver": "^7.5.3",
                "simple-update-notifier": "^2.0.0",
                "supports-color": "^5.5.0",
                "touch": "^3.1.0",
                "undefsafe": "^2.0.5"
            },
            "bin": {
                "nodemon": "bin/nodemon.js"
            },
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/nodemon"
            }
        },
        "node_modules/nodemon/node_modules/debug": {
            "version": "4.4.3",
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
            "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "ms": "^2.1.3"
            },
            "engines": {
                "node": ">=6.0"
            },
            "peerDependenciesMeta": {
                "supports-color": {
                    "optional": true
                }
            }
        },
        "node_modules/nodemon/node_modules/ms": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/object-assign": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
            "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/object-inspect": {
            "version": "1.13.4",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
            "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/on-finished": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.2.tgz",
            "integrity": "sha512-ATWUv387i+nLD49EiDoOft5scf32Vsdz3ktrQJG9bi7jRFmaXTssvyvj1EmeKVVgvesbqUtvQQvaS2TpTukAZQ==",
            "license": "MIT",
            "dependencies": {
                "ee-first": "1.1.1"
            },
            "engines": {
                "node": ">= 0.8"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/parseurl": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/path-to-regexp": {
            "version": "0.1.13",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.13.tgz",
            "integrity": "sha512-A/AGNMFN3c8bOlvV9RreMdrv7jsmF9XIfDeCd87+I8RNg6s78BhJxMu69NEMHBSJFxKidViTEdruRwEk/WIKqA==",
            "license": "MIT"
        },
        "node_modules/picomatch": {
            "version": "2.3.2",
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
            "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8.6"
            },
            "funding": {
                "url": "https://github.com/sponsors/jonschlinkert"
            }
        },
        "node_modules/process-nextick-args": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
            "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
            "license": "MIT"
        },
        "node_modules/proxy-addr": {
            "version": "2.0.8",
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.8.tgz",
            "integrity": "sha512-5nnx0yGyVUcY6t9RnWcARWtwT9F1D8O9rt08htPvnd49W1IgZtmLkhu9WfMzQj1cFxjHIO6connUNVW5k7AVyQ==",
            "license": "MIT",
            "dependencies": {
                "forwarded": "0.2.0",
                "ipaddr.js": "1.9.1"
            },
            "engines": {
                "node": ">= 0.10"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/express"
            }
        },
        "node_modules/pstree.remy": {
            "version": "1.1.8",
            "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
            "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/qs": {
            "version": "6.16.2",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.16.2.tgz",
            "integrity": "sha512-VYdnB5S7/0IeXzBacUtwNAaM6d7Y/PgYnNC7bJCI6meqA/OgnsQbZMtVW8Dt2D1PHgbHGtYmhSoEIgvt7xZ2ZA==",
            "license": "BSD-3-Clause",
            "dependencies": {
                "es-define-property": "^1.0.1",
                "side-channel": "^1.1.1"
            },
            "engines": {
                "node": ">=0.6"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/range-parser": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
            "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/raw-body": {
            "version": "2.5.3",
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.3.tgz",
            "integrity": "sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA==",
            "license": "MIT",
            "dependencies": {
                "bytes": "~3.1.2",
                "http-errors": "~2.0.1",
                "iconv-lite": "~0.4.24",
                "unpipe": "~1.0.0"
            },
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/readable-stream": {
            "version": "2.3.8",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
            "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
            "license": "MIT",
            "dependencies": {
                "core-util-is": "~1.0.0",
                "inherits": "~2.0.3",
                "isarray": "~1.0.0",
                "process-nextick-args": "~2.0.0",
                "safe-buffer": "~5.1.1",
                "string_decoder": "~1.1.1",
                "util-deprecate": "~1.0.1"
            }
        },
        "node_modules/readable-stream/node_modules/safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
            "license": "MIT"
        },
        "node_modules/readdirp": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
            "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "picomatch": "^2.2.1"
            },
            "engines": {
                "node": ">=8.10.0"
            }
        },
        "node_modules/safe-buffer": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
            "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
            "funding": [
                {
                    "type": "github",
                    "url": "https://github.com/sponsors/feross"
                },
                {
                    "type": "patreon",
                    "url": "https://www.patreon.com/feross"
                },
                {
                    "type": "consulting",
                    "url": "https://feross.org/support"
                }
            ],
            "license": "MIT"
        },
        "node_modules/safer-buffer": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
            "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
            "license": "MIT"
        },
        "node_modules/semver": {
            "version": "7.8.6",
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.6.tgz",
            "integrity": "sha512-9lpSSU4Mly3mrtruwLs1eLK6+gzbzqeBFwRNjIjE+9LuDpWdYctrQlQ3ej1Ilgi7gknpsTRnPoLP8DpCHqHIJw==",
            "dev": true,
            "license": "ISC",
            "bin": {
                "semver": "bin/semver.js"
            },
            "engines": {
                "node": ">=10"
            }
        },
        "node_modules/send": {
            "version": "0.19.2",
            "resolved": "https://registry.npmjs.org/send/-/send-0.19.2.tgz",
            "integrity": "sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg==",
            "license": "MIT",
            "dependencies": {
                "debug": "2.6.9",
                "depd": "2.0.0",
                "destroy": "1.2.0",
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "fresh": "~0.5.2",
                "http-errors": "~2.0.1",
                "mime": "1.6.0",
                "ms": "2.1.3",
                "on-finished": "~2.4.1",
                "range-parser": "~1.2.1",
                "statuses": "~2.0.2"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/send/node_modules/ms": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
            "license": "MIT"
        },
        "node_modules/serve-static": {
            "version": "1.16.3",
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.3.tgz",
            "integrity": "sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA==",
            "license": "MIT",
            "dependencies": {
                "encodeurl": "~2.0.0",
                "escape-html": "~1.0.3",
                "parseurl": "~1.3.3",
                "send": "~0.19.1"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/setprototypeof": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
            "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
            "license": "ISC"
        },
        "node_modules/side-channel": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
            "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0",
                "object-inspect": "^1.13.4",
                "side-channel-list": "^1.0.1",
                "side-channel-map": "^1.0.1",
                "side-channel-weakmap": "^1.0.2"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/side-channel-list": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
            "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
            "license": "MIT",
            "dependencies": {
                "es-errors": "^1.3.0",
                "object-inspect": "^1.13.4"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/side-channel-map": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
            "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
            "license": "MIT",
            "dependencies": {
                "call-bound": "^1.0.2",
                "es-errors": "^1.3.0",
                "get-intrinsic": "^1.2.5",
                "object-inspect": "^1.13.3"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/side-channel-weakmap": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
            "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
            "license": "MIT",
            "dependencies": {
                "call-bound": "^1.0.2",
                "es-errors": "^1.3.0",
                "get-intrinsic": "^1.2.5",
                "object-inspect": "^1.13.3",
                "side-channel-map": "^1.0.1"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/simple-update-notifier": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
            "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "semver": "^7.5.3"
            },
            "engines": {
                "node": ">=10"
            }
        },
        "node_modules/statuses": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
            "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/streamsearch": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
            "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
            "engines": {
                "node": ">=10.0.0"
            }
        },
        "node_modules/string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "license": "MIT",
            "dependencies": {
                "safe-buffer": "~5.1.0"
            }
        },
        "node_modules/string_decoder/node_modules/safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
            "license": "MIT"
        },
        "node_modules/supports-color": {
            "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
            "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "has-flag": "^3.0.0"
            },
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/to-regex-range": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
            "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "is-number": "^7.0.0"
            },
            "engines": {
                "node": ">=8.0"
            }
        },
        "node_modules/toidentifier": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
            "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
            "license": "MIT",
            "engines": {
                "node": ">=0.6"
            }
        },
        "node_modules/touch": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
            "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
            "dev": true,
            "license": "ISC",
            "bin": {
                "nodetouch": "bin/nodetouch.js"
            }
        },
        "node_modules/type-is": {
            "version": "1.6.18",
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
            "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
            "license": "MIT",
            "dependencies": {
                "media-typer": "0.3.0",
                "mime-types": "~2.1.24"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/typedarray": {
            "version": "0.0.6",
            "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
            "integrity": "sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA==",
            "license": "MIT"
        },
        "node_modules/undefsafe": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
            "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/unpipe": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
            "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/util-deprecate": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
            "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
            "license": "MIT"
        },
        "node_modules/utils-merge": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
            "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.4.0"
            }
        },
        "node_modules/vary": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/xtend": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
            "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
            "license": "MIT",
            "engines": {
                "node": ">=0.4"
            }
        }
    }
}

```
**package.json**
```json
{
    "name": "subtitulador_video_ia",
    "version": "1.0.0",
    "description": "Subtitulador automático mediante Whisper",
    "main": "server.js",
    "type": "module",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    },
    "dependencies": {
        "cors": "^2.8.5",
        "express": "^4.21.2",
        "multer": "^1.4.5-lts.1"
    },
    "devDependencies": {
        "nodemon": "^3.1.7"
    }
}
```
**server.js**
```js
import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename =
    fileURLToPath(
        import.meta.url
    );

const __dirname =
    path.dirname(
        __filename
    );

const app = express();

app.use(cors());

app.use(express.json());

const puerto = 3000;

/*
=========================================
CARPETAS
=========================================
*/

const uploads_dir =
    path.join(
        __dirname,
        "uploads"
    );

const subtitulos_dir =
    path.join(
        __dirname,
        "subtitulos"
    );

if (!fs.existsSync(uploads_dir)) {

    fs.mkdirSync(
        uploads_dir,
        {
            recursive: true
        }
    );

}

if (!fs.existsSync(subtitulos_dir)) {

    fs.mkdirSync(
        subtitulos_dir,
        {
            recursive: true
        }
    );

}

/*
=========================================
LIMPIAR ARCHIVOS
=========================================
*/

function eliminar_archivo(
    ruta
) {

    try {

        if (
            fs.existsSync(ruta)
        ) {

            fs.unlinkSync(ruta);

        }

    }

    catch (error) {

        console.error(
            "Error eliminando:",
            ruta
        );

    }

}

/*
=========================================
MULTER
=========================================
*/

const storage =
    multer.diskStorage({

        destination:
            uploads_dir,

        filename:
            (
                req,
                file,
                callback
            ) => {

                const extension =
                    path.extname(
                        file.originalname
                    );

                callback(
                    null,
                    Date.now() + extension
                );

            }

    });

const upload =
    multer({
        storage
    });

/*
=========================================
HEALTH
=========================================
*/

app.get(
    "/health",
    (
        req,
        res
    ) => {

        res.json({

            estado: "ok"

        });

    }
);

/*
=========================================
TRANSCRIBIR
=========================================
*/

app.post(
    "/transcribir",

    upload.single("video"),

    async (
        req,
        res
    ) => {

        try {

            if (!req.file) {

                return res.status(400).json({

                    error:
                        "No se recibió ningún vídeo"

                });

            }

            const ruta_video =
                req.file.path;

            const nombre_base =
                path.parse(
                    req.file.filename
                ).name;

            console.log(
                "Procesando:",
                req.file.originalname
            );

            const proceso =
                spawn(
                    "python",
                    [
                        "-m",
                        "whisper",

                        ruta_video,

                        "--model",
                        "small",

                        "--language",
                        "es",

                        "--output_format",
                        "all",

                        "--output_dir",
                        subtitulos_dir
                    ]
                );

            let errores = "";

            proceso.stderr.on(
                "data",
                dato => {

                    errores +=
                        dato.toString();

                }
            );

            proceso.on(
                "close",
                codigo => {

                    if (
                        codigo !== 0
                    ) {

                        eliminar_archivo(
                            ruta_video
                        );

                        return res
                            .status(500)
                            .json({

                                error:
                                    errores

                            });

                    }

                    try {

                        const ruta_txt =
                            path.join(
                                subtitulos_dir,
                                `${nombre_base}.txt`
                            );

                        const ruta_srt =
                            path.join(
                                subtitulos_dir,
                                `${nombre_base}.srt`
                            );

                        const ruta_vtt =
                            path.join(
                                subtitulos_dir,
                                `${nombre_base}.vtt`
                            );

                        const texto =
                            fs.readFileSync(
                                ruta_txt,
                                "utf8"
                            );

                        const srt =
                            fs.readFileSync(
                                ruta_srt,
                                "utf8"
                            );

                        const vtt =
                            fs.readFileSync(
                                ruta_vtt,
                                "utf8"
                            );

                        res.json({

                            exito: true,

                            texto,

                            srt,

                            vtt

                        });

                        eliminar_archivo(
                            ruta_video
                        );

                        eliminar_archivo(
                            ruta_txt
                        );

                        eliminar_archivo(
                            ruta_srt
                        );

                        eliminar_archivo(
                            ruta_vtt
                        );

                        console.log(
                            "Proceso completado"
                        );

                    }

                    catch (error) {

                        console.error(
                            error
                        );

                        res.status(500)
                        .json({

                            error:
                                "No se pudieron leer los subtítulos generados"

                        });

                    }

                }
            );

        }

        catch (error) {

            console.error(
                error
            );

            res.status(500)
            .json({

                error:
                    error.message

            });

        }

    }
);

/*
=========================================
ARRANQUE
=========================================
*/

app.listen(
    puerto,
    () => {

        console.log(
            `Servidor iniciado en http://localhost:${puerto}`
        );

    }
);
```
**whisper.js**
```js

```
#### subtitulos
**1794493561018.json**
```json
{"text": " Hola muy buenas a todos, en este v\u00eddeo os vamos a explicar unas cuantas cosas sobre sistemas inform\u00e1ticos, vamos a empezar primero de todo por las operaciones b\u00e1sicas que sobre los comandos que hemos aprendido en la l\u00ednea de comandos, es decir, como pod\u00e9is ver aqu\u00ed en pantalla, tenemos diferentes comandos del INUS en este caso y los que los cuandos del INUS estos comandos son bastante, bastante los m\u00e1s usados por decirlo a manera que clear, clear significa borra pantalla, esto significa ser vais a patch 2, es que inicia y par el servicio, me cabe el significa que crea una carpeta nueva con ese nombre, p de change director y eso va a sacar la carpeta que ha creado, crea otra carpeta, me cabe el script como pod\u00e9is ver aqu\u00ed, fe de 2 puntos, fe de espacio 2 puntos, punto punto, baja de carpeta, luego bajo 3 de carpeta, de acuerdo con esto, con estos 2 puntos aqu\u00ed y el config sirve para ver nuestra IP de red que tenemos por ejemplo, luego doble de nuestro directorio y historia en este caso que nos resube un poco todo, el historial de todos los comandos que hemos hecho y estos son algunos comandos b\u00e1sicos del INUS que est\u00e1n aqu\u00ed, tambi\u00e9n est\u00e1n los de Windows que para estar para estar un directorio ser\u00eda dir, en cambio en el INUS ser\u00eda ls, eso ser\u00eda un par de comandos b\u00e1sicos para sistemas operativos del INUS en este caso, los que m\u00e1s abundan, tambi\u00e9n los sistemas operativos tienen diferentes tipos de carpetas, aqu\u00ed tenemos una peque\u00f1a tabla comparativa de las carpetas de Windows, las que tienen Windows y las que tienen el INUS, en este caso empezamos con la carpeta Rive del sistema que en Windows empieja por un fe, fe 2 puntos barra invertida, en cambio Linux es una barra, la Rive, los archivos de programas, en este caso, en Windows es fe 2 puntos barra invertida, program files o program files y el Linux ser\u00eda barra usr y barra opete, ahora si vos es el sistema de Windows es fe 2 puntos barra invertida Windows y el Linux ser\u00eda barra pin, barra ese pin, barra lito, la carpeta usuario, fe 2 puntos barrimente a users y barra invertida usuarios, el usuario que sea en cambio el Linux ser\u00eda home usuario, para que tengamos la tabla esta resumen que no var\u00eda tanto de lo que parece, pero depende, depende del sistema operativo, porque en este caso si metemos algo parativa en Windows es que la fe fe 2 puntos siempre est\u00e1n todos los lados, en cambio Linux es la barra, la barra est\u00e1n todos los lados, una caracter\u00edstica de configuraci\u00f3n, sobre todo Windows es que est\u00e1n si estoy en 32, en cambio Linux es en ETF, la diferencia entre Windows y Linux es que Linux se puede es un sistema operativo como tal, pero es una distrucci\u00f3n donde las distrucciones de Linux, en este caso de Debian, pues en barra tefe se pueden cambiar diferentes archivos de configuraci\u00f3n, en este caso, en cambio Windows no se puede hacer porque eso es un sistema operativo propietario, y por eso no se puede hacer, vale, a continuaci\u00f3n os vamos a ense\u00f1ar un poco c\u00f3mo trabajamos en en torno de comando de Linux, en este caso me conecto a VIA, SSH en mi Windows, de acuerdo, en una m\u00e1quina virtual, entonces a un sudo, sudo apt update, por ejemplo, en otro lado, en otro lado de la se\u00f1a, el update normal y corriente, de acuerdo, y ahora por ejemplo, querramos instar un pavete, por ejemplo de Apache 2, RCC, se nos instala correctamente, no voy a ser aqu\u00ed, pantalla, se nos ha instalado, vale, hacemos instarando paquetes, cosas, vamos a instar paquetes de esta manera en l\u00ednea en comando, podemos irnos a VIA, vamos a un ls, vamos a, vamos a Andrei, el s, hay nada, pide 2 puntos para cambiar el directorio, vamos a ir, vamos con ls, estamos en la barra, por ejemplo, que querramos hacer un cambiar la configuraci\u00f3n de red y de feconfi, hacemos en instar net tools, todo apete instar met tools, de acuerdo, ahora s\u00ed de feconfi, vamos a ir pegatemos aqu\u00ed, de acuerdo, este es nuestro IP, la podemos cambiar con su nano barra de fe, guarda network, bueno, la podemos cambiar de esta manera de acuerdo, nuestro wifi, sin un tipo de problema, nuestro IP, y as\u00ed es como trabajaremos en un turno de l\u00ednea en comando el linux, claro, pero ahora en windows podemos hacerlo de forma gr\u00e1fica, muy simple, me dando, navegando por carpetas y todo, vamos a proceder ahora con la instalaci\u00f3n de la creaci\u00f3n a m\u00e1quina virtual del linux, para ello le vamos a nuevo, tenemos aqu\u00ed un punto desktop, por ejemplo, le hacemos la iso, lo tenemos, vamos a otros, la buscamos aqu\u00ed, ya tengamos la iso, es esta, abrir, linux terbalo, me tiene eso atentida, de acuerdo, de hardware, le metemos aqu\u00ed con los 8 higas, porque nos sobra el espacio, y la tenemos aqu\u00ed unos 5 higores, el lujo duro con 55, ya vamos bien, la hemos creado, abrimos, esperamos, pero vamos a ver el cargue, se debe tardar un poco, est\u00e1 preparando un punto, ahora tenemos siguiente, siguiente, espa\u00f1ol, compramos la e\u00f1a y la fe trencada, siguiente, otelifar borgable, instalamos un punto, interactiva, se le fiebaron de hardware, esto nos interesa, son opciones que no nos interesa, le vamos a borrar todo el disco, siguiente, nuestro nombre, lo completo, de lo cual lo dejamos de esto, ah\u00ed de as\u00ed, contra ase\u00f1a, contra ase\u00f1a, vamos a la siguiente, cuando habr\u00eda madrid de Espa\u00f1a, si en de instalar, si nos est\u00e1 instalando, vamos a esperar que se instale, y enseguya volvemos, vale, ya se me ha terminado la instalaci\u00f3n, le vamos a reiniciar ahora, de acuerdo, est\u00e1 reiniciando, vamos a editarle la agon\u00eda de fd, vamos a dar quitado todo regamente, le vamos a enter, de acuerdo, estamos esperando que el sistema va a ver a ti o a arranque, vale, enf\u00edjamos con nuestra cuenta, nuestro nombre ase\u00f1a, y as\u00ed ser\u00eda la instalaci\u00f3n de Linus, vamos a pasar con Windows, eso ser\u00eda todo, lo puedes ver aqu\u00ed, algo en partir, siguiente, el termedal, y as\u00ed ser\u00eda la instalaci\u00f3n de Linus subunto, eso ser\u00eda todo, vamos a pasar con Windows, vamos a proceder ahora con la instalaci\u00f3n de Windows, le vamos a nuevo, vamos a Windows 10, de acuerdo, se enaf\u00edjamos la ISO, en los edificos, de acuerdo, le vamos a enter, en los 16, 64 est\u00e1n haciendo esa atent\u00eda, le metemos aqu\u00ed, uno, seis cores, y fuentag\u00eda, vamos a enter 40, terminamos, vamos a la siguiente, le iniciamos ahora, vamos a proceder con la instalaci\u00f3n de Windows 10, vale, est\u00e1 agarrando Windows 10, vale, vamos a la siguiente, instaramos, no te va a clave, queramos la Pro, siguiente, aceptamos los t\u00e9rminos del licencia, siguiente, personalizada, tal cual, vamos a esperar a que esto termine y volvemos, le vamos a rendeciar ahora, est\u00e1 rendeciando Windows, no queremos expresar nueva tecla, porque si vamos a arrancar el WB, y vamos puesto de la ISO, est\u00e1 arrancando ahora en el discuduro, para proceder a instalaci\u00f3n de Windows 10, vale, se refearon a esa regi\u00f3n que se Espa\u00f1a, la desrofei\u00f3n del teclado es adecuada, le vamos a emitir, est\u00e1 configurando la retabora, dejamos que configure todo la red, el solito, el solito, vale, vamos aqu\u00ed a configurar para uso personal, siguiente, iniciar con cuenta sin conexi\u00f3n, experiencia limitada, entonces nuestro nombre, siguiente, la otra se\u00f1a de la desea, siguiente, confirmar la otra se\u00f1a, siguiente, una pregunta, va a poder lo que sea, como esta m\u00e1quina se proba, no importa, siguiente, la acuerdo, ya tenemos la cuenta creada, ahora no, la verdad todo, vale, omitir, ahora no, no queremos cortana, s\u00ed, nos da bienvenida, en Windows, ahora mismo. vale, ya tenemos Windows configurado, y as\u00ed es como se hace la instalaci\u00f3n de Windows, y as\u00ed es como es la instalaci\u00f3n de Windows, ahora mismo, el Chrome Tab de Linux, es una herramienta que te permite configurar y programar tareas, repetitivas para que se juzguten de manera autom\u00e1tica, en segundo plano, Chrome Tab, integrado por defecto, en la configuraci\u00f3n inicial del sistema, es uno de los recursos automatizados del administrado de tareas de Linux llamado Chrome. Chrome Tab, nosotros podemos configurar, por ejemplo, que nos da copias de seguridad, por ejemplo, cada cu\u00e1nto tiempo, es muy importante tambi\u00e9n, y tambi\u00e9n lo podemos asociar a Maya SQL, por ejemplo.", "segments": [{"id": 0, "seek": 0, "start": 0.0, "end": 6.28, "text": " Hola muy buenas a todos, en este v\u00eddeo os vamos a explicar unas cuantas cosas sobre", "tokens": [50364, 22637, 5323, 43852, 257, 6321, 11, 465, 4065, 8071, 3003, 5295, 257, 26682, 25405, 2702, 49153, 12218, 5473, 50678], "temperature": 0.0, "avg_logprob": -0.3213327489000686, "compression_ratio": 1.6294642857142858, "no_speech_prob": 0.39426279067993164}, {"id": 1, "seek": 0, "start": 6.28, "end": 17.240000000000002, "text": " sistemas inform\u00e1ticos, vamos a empezar primero de todo por las operaciones b\u00e1sicas que sobre", "tokens": [50678, 48720, 1356, 7656, 9940, 11, 5295, 257, 31168, 21289, 368, 5149, 1515, 2439, 2208, 9188, 25545, 9150, 631, 5473, 51226], "temperature": 0.0, "avg_logprob": -0.3213327489000686, "compression_ratio": 1.6294642857142858, "no_speech_prob": 0.39426279067993164}, {"id": 2, "seek": 0, "start": 17.240000000000002, "end": 22.080000000000002, "text": " los comandos que hemos aprendido en la l\u00ednea de comandos, es decir, como pod\u00e9is ver aqu\u00ed en", "tokens": [51226, 1750, 395, 474, 329, 631, 15396, 21003, 2925, 465, 635, 37452, 368, 395, 474, 329, 11, 785, 10235, 11, 2617, 45728, 1306, 6661, 465, 51468], "temperature": 0.0, "avg_logprob": -0.3213327489000686, "compression_ratio": 1.6294642857142858, "no_speech_prob": 0.39426279067993164}, {"id": 3, "seek": 0, "start": 22.080000000000002, "end": 28.04, "text": " pantalla, tenemos diferentes comandos del INUS en este caso y los que los cuandos del INUS", "tokens": [51468, 44449, 11, 9914, 17686, 395, 474, 329, 1103, 6892, 3447, 465, 4065, 9666, 288, 1750, 631, 1750, 2702, 474, 329, 1103, 6892, 3447, 51766], "temperature": 0.0, "avg_logprob": -0.3213327489000686, "compression_ratio": 1.6294642857142858, "no_speech_prob": 0.39426279067993164}, {"id": 4, "seek": 2804, "start": 28.119999999999997, "end": 36.6, "text": " estos comandos son bastante, bastante los m\u00e1s usados por decirlo a manera que clear, clear", "tokens": [50368, 12585, 395, 474, 329, 1872, 14651, 11, 14651, 1750, 3573, 505, 4181, 1515, 10235, 752, 257, 13913, 631, 1850, 11, 1850, 50792], "temperature": 0.0, "avg_logprob": -0.378834647101325, "compression_ratio": 1.6057142857142856, "no_speech_prob": 0.01619034633040428}, {"id": 5, "seek": 2804, "start": 36.6, "end": 46.8, "text": " significa borra pantalla, esto significa ser vais a patch 2, es que inicia y par el servicio,", "tokens": [50792, 19957, 14828, 424, 44449, 11, 7433, 19957, 816, 9369, 257, 9972, 568, 11, 785, 631, 294, 15341, 288, 971, 806, 43078, 11, 51302], "temperature": 0.0, "avg_logprob": -0.378834647101325, "compression_ratio": 1.6057142857142856, "no_speech_prob": 0.01619034633040428}, {"id": 6, "seek": 2804, "start": 46.8, "end": 55.4, "text": " me cabe el significa que crea una carpeta nueva con ese nombre, p de change director y eso va a", "tokens": [51302, 385, 18893, 806, 19957, 631, 1197, 64, 2002, 18119, 64, 28963, 416, 10167, 13000, 11, 280, 368, 1319, 5391, 288, 7287, 2773, 257, 51732], "temperature": 0.0, "avg_logprob": -0.378834647101325, "compression_ratio": 1.6057142857142856, "no_speech_prob": 0.01619034633040428}, {"id": 7, "seek": 5540, "start": 55.4, "end": 61.16, "text": " sacar la carpeta que ha creado, crea otra carpeta, me cabe el script como pod\u00e9is ver aqu\u00ed,", "tokens": [50364, 43823, 635, 18119, 64, 631, 324, 1197, 1573, 11, 1197, 64, 13623, 18119, 64, 11, 385, 18893, 806, 5755, 2617, 45728, 1306, 6661, 11, 50652], "temperature": 0.0, "avg_logprob": -0.3952324390411377, "compression_ratio": 1.668639053254438, "no_speech_prob": 0.011562589555978775}, {"id": 8, "seek": 5540, "start": 61.16, "end": 71.12, "text": " fe de 2 puntos, fe de espacio 2 puntos, punto punto, baja de carpeta, luego bajo 3 de carpeta,", "tokens": [50652, 579, 368, 568, 34375, 11, 579, 368, 33845, 568, 34375, 11, 14326, 14326, 11, 49427, 368, 18119, 64, 11, 17222, 30139, 805, 368, 18119, 64, 11, 51150], "temperature": 0.0, "avg_logprob": -0.3952324390411377, "compression_ratio": 1.668639053254438, "no_speech_prob": 0.011562589555978775}, {"id": 9, "seek": 5540, "start": 71.12, "end": 82.4, "text": " de acuerdo con esto, con estos 2 puntos aqu\u00ed y el config sirve para ver nuestra IP de red que", "tokens": [51150, 368, 28113, 416, 7433, 11, 416, 12585, 568, 34375, 6661, 288, 806, 6662, 4735, 303, 1690, 1306, 16825, 8671, 368, 2182, 631, 51714], "temperature": 0.0, "avg_logprob": -0.3952324390411377, "compression_ratio": 1.668639053254438, "no_speech_prob": 0.011562589555978775}, {"id": 10, "seek": 8240, "start": 82.4, "end": 90.16000000000001, "text": " tenemos por ejemplo, luego doble de nuestro directorio y historia en este caso que nos", "tokens": [50364, 9914, 1515, 13358, 11, 17222, 360, 638, 368, 14726, 5391, 1004, 288, 18385, 465, 4065, 9666, 631, 3269, 50752], "temperature": 0.0, "avg_logprob": -0.40248401129423683, "compression_ratio": 1.4775280898876404, "no_speech_prob": 0.033670686185359955}, {"id": 11, "seek": 8240, "start": 90.16000000000001, "end": 98.04, "text": " resube un poco todo, el historial de todos los comandos que hemos hecho y estos son", "tokens": [50752, 725, 1977, 517, 10639, 5149, 11, 806, 4058, 831, 368, 6321, 1750, 395, 474, 329, 631, 15396, 13064, 288, 12585, 1872, 51146], "temperature": 0.0, "avg_logprob": -0.40248401129423683, "compression_ratio": 1.4775280898876404, "no_speech_prob": 0.033670686185359955}, {"id": 12, "seek": 8240, "start": 98.04, "end": 107.24000000000001, "text": " algunos comandos b\u00e1sicos del INUS que est\u00e1n aqu\u00ed, tambi\u00e9n est\u00e1n los de Windows que para", "tokens": [51146, 21078, 395, 474, 329, 25545, 9940, 1103, 6892, 3447, 631, 10368, 6661, 11, 6407, 10368, 1750, 368, 8591, 631, 1690, 51606], "temperature": 0.0, "avg_logprob": -0.40248401129423683, "compression_ratio": 1.4775280898876404, "no_speech_prob": 0.033670686185359955}, {"id": 13, "seek": 10724, "start": 107.24, "end": 114.32, "text": " estar para estar un directorio ser\u00eda dir, en cambio en el INUS ser\u00eda ls, eso ser\u00eda un", "tokens": [50364, 8755, 1690, 8755, 517, 5391, 1004, 23679, 4746, 11, 465, 28731, 465, 806, 6892, 3447, 23679, 287, 82, 11, 7287, 23679, 517, 50718], "temperature": 0.0, "avg_logprob": -0.3688266520597497, "compression_ratio": 1.7716894977168949, "no_speech_prob": 0.07476832717657089}, {"id": 14, "seek": 10724, "start": 114.32, "end": 123.0, "text": " par de comandos b\u00e1sicos para sistemas operativos del INUS en este caso, los que m\u00e1s abundan,", "tokens": [50718, 971, 368, 395, 474, 329, 25545, 9940, 1690, 48720, 2208, 36945, 1103, 6892, 3447, 465, 4065, 9666, 11, 1750, 631, 3573, 14809, 282, 11, 51152], "temperature": 0.0, "avg_logprob": -0.3688266520597497, "compression_ratio": 1.7716894977168949, "no_speech_prob": 0.07476832717657089}, {"id": 15, "seek": 10724, "start": 123.0, "end": 129.4, "text": " tambi\u00e9n los sistemas operativos tienen diferentes tipos de carpetas, aqu\u00ed tenemos una peque\u00f1a tabla", "tokens": [51152, 6407, 1750, 48720, 2208, 36945, 12536, 17686, 37105, 368, 18119, 296, 11, 6661, 9914, 2002, 47177, 4421, 875, 51472], "temperature": 0.0, "avg_logprob": -0.3688266520597497, "compression_ratio": 1.7716894977168949, "no_speech_prob": 0.07476832717657089}, {"id": 16, "seek": 10724, "start": 129.4, "end": 135.64, "text": " comparativa de las carpetas de Windows, las que tienen Windows y las que tienen el INUS, en este caso", "tokens": [51472, 6311, 18740, 368, 2439, 18119, 296, 368, 8591, 11, 2439, 631, 12536, 8591, 288, 2439, 631, 12536, 806, 6892, 3447, 11, 465, 4065, 9666, 51784], "temperature": 0.0, "avg_logprob": -0.3688266520597497, "compression_ratio": 1.7716894977168949, "no_speech_prob": 0.07476832717657089}, {"id": 17, "seek": 13564, "start": 135.95999999999998, "end": 141.92, "text": " empezamos con la carpeta Rive del sistema que en Windows empieja por un fe, fe 2 puntos barra", "tokens": [50380, 18730, 2151, 416, 635, 18119, 64, 497, 488, 1103, 13245, 631, 465, 8591, 4012, 414, 2938, 1515, 517, 579, 11, 579, 568, 34375, 2159, 424, 50678], "temperature": 0.0, "avg_logprob": -0.36926227145724827, "compression_ratio": 1.6627218934911243, "no_speech_prob": 0.036653582006692886}, {"id": 18, "seek": 13564, "start": 141.92, "end": 149.64, "text": " invertida, en cambio Linux es una barra, la Rive, los archivos de programas, en este caso,", "tokens": [50678, 33966, 2887, 11, 465, 28731, 18734, 785, 2002, 2159, 424, 11, 635, 497, 488, 11, 1750, 3912, 16501, 368, 1461, 296, 11, 465, 4065, 9666, 11, 51064], "temperature": 0.0, "avg_logprob": -0.36926227145724827, "compression_ratio": 1.6627218934911243, "no_speech_prob": 0.036653582006692886}, {"id": 19, "seek": 13564, "start": 149.64, "end": 160.16, "text": " en Windows es fe 2 puntos barra invertida, program files o program files y el Linux ser\u00eda barra", "tokens": [51064, 465, 8591, 785, 579, 568, 34375, 2159, 424, 33966, 2887, 11, 1461, 7098, 277, 1461, 7098, 288, 806, 18734, 23679, 2159, 424, 51590], "temperature": 0.0, "avg_logprob": -0.36926227145724827, "compression_ratio": 1.6627218934911243, "no_speech_prob": 0.036653582006692886}, {"id": 20, "seek": 16016, "start": 160.16, "end": 167.84, "text": " usr y barra opete, ahora si vos es el sistema de Windows es fe 2 puntos barra invertida", "tokens": [50364, 505, 81, 288, 2159, 424, 999, 3498, 11, 9923, 1511, 13845, 785, 806, 13245, 368, 8591, 785, 579, 568, 34375, 2159, 424, 33966, 2887, 50748], "temperature": 0.0, "avg_logprob": -0.44348558173122177, "compression_ratio": 1.8092105263157894, "no_speech_prob": 0.12238302826881409}, {"id": 21, "seek": 16016, "start": 167.84, "end": 178.92, "text": " Windows y el Linux ser\u00eda barra pin, barra ese pin, barra lito, la carpeta usuario, fe 2 puntos", "tokens": [50748, 8591, 288, 806, 18734, 23679, 2159, 424, 5447, 11, 2159, 424, 10167, 5447, 11, 2159, 424, 7997, 78, 11, 635, 18119, 64, 32247, 4912, 11, 579, 568, 34375, 51302], "temperature": 0.0, "avg_logprob": -0.44348558173122177, "compression_ratio": 1.8092105263157894, "no_speech_prob": 0.12238302826881409}, {"id": 22, "seek": 16016, "start": 178.92, "end": 187.04, "text": " barrimente a users y barra invertida usuarios, el usuario que sea en cambio el Linux ser\u00eda", "tokens": [51302, 2159, 5565, 1576, 257, 5022, 288, 2159, 424, 33966, 2887, 32247, 9720, 11, 806, 32247, 4912, 631, 4158, 465, 28731, 806, 18734, 23679, 51708], "temperature": 0.0, "avg_logprob": -0.44348558173122177, "compression_ratio": 1.8092105263157894, "no_speech_prob": 0.12238302826881409}, {"id": 23, "seek": 18704, "start": 187.04, "end": 197.32, "text": " home usuario, para que tengamos la tabla esta resumen que no var\u00eda tanto de lo que parece,", "tokens": [50364, 1280, 32247, 4912, 11, 1690, 631, 10370, 2151, 635, 4421, 875, 5283, 725, 16988, 631, 572, 1374, 2686, 10331, 368, 450, 631, 14120, 11, 50878], "temperature": 0.0, "avg_logprob": -0.3337776596481736, "compression_ratio": 1.5191256830601092, "no_speech_prob": 0.0236580278724432}, {"id": 24, "seek": 18704, "start": 197.32, "end": 208.39999999999998, "text": " pero depende, depende del sistema operativo, porque en este caso si metemos algo parativa", "tokens": [50878, 4768, 47091, 11, 47091, 1103, 13245, 2208, 18586, 11, 4021, 465, 4065, 9666, 1511, 1131, 4485, 8655, 971, 18740, 51432], "temperature": 0.0, "avg_logprob": -0.3337776596481736, "compression_ratio": 1.5191256830601092, "no_speech_prob": 0.0236580278724432}, {"id": 25, "seek": 18704, "start": 208.39999999999998, "end": 215.84, "text": " en Windows es que la fe fe 2 puntos siempre est\u00e1n todos los lados, en cambio Linux es la barra,", "tokens": [51432, 465, 8591, 785, 631, 635, 579, 579, 568, 34375, 12758, 10368, 6321, 1750, 40301, 11, 465, 28731, 18734, 785, 635, 2159, 424, 11, 51804], "temperature": 0.0, "avg_logprob": -0.3337776596481736, "compression_ratio": 1.5191256830601092, "no_speech_prob": 0.0236580278724432}, {"id": 26, "seek": 21584, "start": 215.84, "end": 225.84, "text": " la barra est\u00e1n todos los lados, una caracter\u00edstica de configuraci\u00f3n, sobre todo Windows es que est\u00e1n", "tokens": [50364, 635, 2159, 424, 10368, 6321, 1750, 40301, 11, 2002, 34297, 2262, 368, 22192, 3482, 11, 5473, 5149, 8591, 785, 631, 10368, 50864], "temperature": 0.0, "avg_logprob": -0.3704826767380173, "compression_ratio": 1.5360824742268042, "no_speech_prob": 0.021385543048381805}, {"id": 27, "seek": 21584, "start": 225.84, "end": 232.48000000000002, "text": " si estoy en 32, en cambio Linux es en ETF, la diferencia entre Windows y Linux es que Linux se puede", "tokens": [50864, 1511, 15796, 465, 8858, 11, 465, 28731, 18734, 785, 465, 37436, 11, 635, 38844, 3962, 8591, 288, 18734, 785, 631, 18734, 369, 8919, 51196], "temperature": 0.0, "avg_logprob": -0.3704826767380173, "compression_ratio": 1.5360824742268042, "no_speech_prob": 0.021385543048381805}, {"id": 28, "seek": 21584, "start": 232.48000000000002, "end": 242.24, "text": " es un sistema operativo como tal, pero es una distrucci\u00f3n donde las distrucciones de Linux,", "tokens": [51196, 785, 517, 13245, 2208, 18586, 2617, 4023, 11, 4768, 785, 2002, 1483, 894, 14735, 10488, 2439, 1483, 894, 35560, 368, 18734, 11, 51684], "temperature": 0.0, "avg_logprob": -0.3704826767380173, "compression_ratio": 1.5360824742268042, "no_speech_prob": 0.021385543048381805}, {"id": 29, "seek": 24224, "start": 243.20000000000002, "end": 252.52, "text": " en este caso de Debian, pues en barra tefe se pueden cambiar diferentes archivos de configuraci\u00f3n,", "tokens": [50412, 465, 4065, 9666, 368, 1346, 20196, 11, 11059, 465, 2159, 424, 535, 2106, 369, 14714, 37738, 17686, 3912, 16501, 368, 22192, 3482, 11, 50878], "temperature": 0.0, "avg_logprob": -0.42264135781820716, "compression_ratio": 1.608695652173913, "no_speech_prob": 0.11730038374662399}, {"id": 30, "seek": 24224, "start": 252.52, "end": 257.92, "text": " en este caso, en cambio Windows no se puede hacer porque eso es un sistema operativo propietario,", "tokens": [50878, 465, 4065, 9666, 11, 465, 28731, 8591, 572, 369, 8919, 6720, 4021, 7287, 785, 517, 13245, 2208, 18586, 2365, 1684, 4912, 11, 51148], "temperature": 0.0, "avg_logprob": -0.42264135781820716, "compression_ratio": 1.608695652173913, "no_speech_prob": 0.11730038374662399}, {"id": 31, "seek": 24224, "start": 257.92, "end": 266.36, "text": " y por eso no se puede hacer, vale, a continuaci\u00f3n os vamos a ense\u00f1ar un poco c\u00f3mo trabajamos en", "tokens": [51148, 288, 1515, 7287, 572, 369, 8919, 6720, 11, 15474, 11, 257, 2993, 3482, 3003, 5295, 257, 31275, 289, 517, 10639, 12826, 9618, 2151, 465, 51570], "temperature": 0.0, "avg_logprob": -0.42264135781820716, "compression_ratio": 1.608695652173913, "no_speech_prob": 0.11730038374662399}, {"id": 32, "seek": 26636, "start": 266.36, "end": 275.24, "text": " en torno de comando de Linux, en este caso me conecto a VIA, SSH en mi Windows, de acuerdo,", "tokens": [50364, 465, 3930, 1771, 368, 395, 1806, 368, 18734, 11, 465, 4065, 9666, 385, 30458, 78, 257, 691, 6914, 11, 318, 17308, 465, 2752, 8591, 11, 368, 28113, 11, 50808], "temperature": 0.0, "avg_logprob": -0.5584976628141584, "compression_ratio": 1.296875, "no_speech_prob": 0.02014784701168537}, {"id": 33, "seek": 26636, "start": 275.24, "end": 285.64, "text": " en una m\u00e1quina virtual, entonces a un sudo, sudo apt update, por ejemplo,", "tokens": [50808, 465, 2002, 49360, 6374, 11, 13003, 257, 517, 459, 2595, 11, 459, 2595, 29427, 5623, 11, 1515, 13358, 11, 51328], "temperature": 0.0, "avg_logprob": -0.5584976628141584, "compression_ratio": 1.296875, "no_speech_prob": 0.02014784701168537}, {"id": 34, "seek": 28564, "start": 285.64, "end": 296.64, "text": " en otro lado, en otro lado de la se\u00f1a, el update normal y corriente, de acuerdo, y ahora por ejemplo,", "tokens": [50364, 465, 11921, 11631, 11, 465, 11921, 11631, 368, 635, 369, 12150, 11, 806, 5623, 2710, 288, 47908, 1576, 11, 368, 28113, 11, 288, 9923, 1515, 13358, 11, 50914], "temperature": 0.0, "avg_logprob": -0.6828397977150092, "compression_ratio": 1.4393939393939394, "no_speech_prob": 0.10995962470769882}, {"id": 35, "seek": 28564, "start": 296.64, "end": 312.88, "text": " querramos instar un pavete, por ejemplo de Apache 2, RCC, se nos instala correctamente,", "tokens": [50914, 7083, 81, 2151, 1058, 289, 517, 280, 706, 3498, 11, 1515, 13358, 368, 46597, 568, 11, 497, 11717, 11, 369, 3269, 1058, 5159, 3006, 3439, 11, 51726], "temperature": 0.0, "avg_logprob": -0.6828397977150092, "compression_ratio": 1.4393939393939394, "no_speech_prob": 0.10995962470769882}, {"id": 36, "seek": 31288, "start": 312.88, "end": 319.84, "text": " no voy a ser aqu\u00ed, pantalla, se nos ha instalado, vale,", "tokens": [50364, 572, 7552, 257, 816, 6661, 11, 44449, 11, 369, 3269, 324, 34059, 1573, 11, 15474, 11, 50712], "temperature": 0.0, "avg_logprob": -0.5483529567718506, "compression_ratio": 1.1219512195121952, "no_speech_prob": 0.026508191600441933}, {"id": 37, "seek": 31288, "start": 327.52, "end": 329.71999999999997, "text": " hacemos instarando paquetes, cosas,", "tokens": [51096, 33839, 1058, 289, 1806, 2502, 19343, 279, 11, 12218, 11, 51206], "temperature": 0.0, "avg_logprob": -0.5483529567718506, "compression_ratio": 1.1219512195121952, "no_speech_prob": 0.026508191600441933}, {"id": 38, "seek": 32972, "start": 329.72, "end": 343.88000000000005, "text": " vamos a instar paquetes de esta manera en l\u00ednea en comando, podemos irnos a VIA,", "tokens": [50364, 5295, 257, 1058, 289, 2502, 19343, 279, 368, 5283, 13913, 465, 37452, 465, 395, 1806, 11, 12234, 3418, 16751, 257, 691, 6914, 11, 51072], "temperature": 0.0, "avg_logprob": -0.6413220551054356, "compression_ratio": 1.376923076923077, "no_speech_prob": 0.2749952971935272}, {"id": 39, "seek": 32972, "start": 345.64000000000004, "end": 356.36, "text": " vamos a un ls, vamos a, vamos a Andrei, el s, hay nada, pide 2 puntos para cambiar el directorio,", "tokens": [51160, 5295, 257, 517, 287, 82, 11, 5295, 257, 11, 5295, 257, 400, 10271, 11, 806, 262, 11, 4842, 8096, 11, 280, 482, 568, 34375, 1690, 37738, 806, 5391, 1004, 11, 51696], "temperature": 0.0, "avg_logprob": -0.6413220551054356, "compression_ratio": 1.376923076923077, "no_speech_prob": 0.2749952971935272}, {"id": 40, "seek": 35636, "start": 357.08000000000004, "end": 366.32, "text": " vamos a ir, vamos con ls, estamos en la barra, por ejemplo, que querramos hacer un cambiar la", "tokens": [50400, 5295, 257, 3418, 11, 5295, 416, 287, 82, 11, 10382, 465, 635, 2159, 424, 11, 1515, 13358, 11, 631, 7083, 81, 2151, 6720, 517, 37738, 635, 50862], "temperature": 0.0, "avg_logprob": -0.5608187892980743, "compression_ratio": 1.4841269841269842, "no_speech_prob": 0.02612195909023285}, {"id": 41, "seek": 35636, "start": 366.32, "end": 378.92, "text": " configuraci\u00f3n de red y de feconfi, hacemos en instar net tools, todo apete instar met tools,", "tokens": [50862, 22192, 3482, 368, 2182, 288, 368, 579, 1671, 13325, 11, 33839, 465, 1058, 289, 2533, 3873, 11, 5149, 1882, 3498, 1058, 289, 1131, 3873, 11, 51492], "temperature": 0.0, "avg_logprob": -0.5608187892980743, "compression_ratio": 1.4841269841269842, "no_speech_prob": 0.02612195909023285}, {"id": 42, "seek": 37892, "start": 379.92, "end": 386.84000000000003, "text": " de acuerdo, ahora s\u00ed de feconfi, vamos a ir pegatemos aqu\u00ed,", "tokens": [50414, 368, 28113, 11, 9923, 8600, 368, 579, 1671, 13325, 11, 5295, 257, 3418, 17199, 267, 4485, 6661, 11, 50760], "temperature": 0.0, "avg_logprob": -0.8909776861017401, "compression_ratio": 0.9384615384615385, "no_speech_prob": 0.007576020900160074}, {"id": 43, "seek": 38684, "start": 386.84, "end": 401.23999999999995, "text": " de acuerdo, este es nuestro IP, la podemos cambiar con su nano barra de fe, guarda network,", "tokens": [50364, 368, 28113, 11, 4065, 785, 14726, 8671, 11, 635, 12234, 37738, 416, 459, 30129, 2159, 424, 368, 579, 11, 6290, 64, 2533, 1902, 11, 51084], "temperature": 0.0, "avg_logprob": -0.6514162336077008, "compression_ratio": 1.1518987341772151, "no_speech_prob": 0.03221064805984497}, {"id": 44, "seek": 40124, "start": 401.24, "end": 416.64, "text": " bueno, la podemos cambiar de esta manera de acuerdo, nuestro wifi,", "tokens": [50364, 11974, 11, 635, 12234, 37738, 368, 5283, 13913, 368, 28113, 11, 14726, 35246, 11, 51134], "temperature": 0.0, "avg_logprob": -0.5052567923941264, "compression_ratio": 1.3076923076923077, "no_speech_prob": 0.020770886912941933}, {"id": 45, "seek": 40124, "start": 416.64, "end": 424.92, "text": " sin un tipo de problema, nuestro IP, y as\u00ed es como trabajaremos en un turno de l\u00ednea", "tokens": [51134, 3343, 517, 9746, 368, 12395, 11, 14726, 8671, 11, 288, 8582, 785, 2617, 9618, 23118, 465, 517, 1261, 78, 368, 37452, 51548], "temperature": 0.0, "avg_logprob": -0.5052567923941264, "compression_ratio": 1.3076923076923077, "no_speech_prob": 0.020770886912941933}, {"id": 46, "seek": 42492, "start": 424.92, "end": 433.68, "text": " en comando el linux, claro, pero ahora en windows podemos hacerlo de forma gr\u00e1fica,", "tokens": [50364, 465, 395, 1806, 806, 22896, 2449, 11, 16742, 11, 4768, 9923, 465, 9309, 12234, 32039, 368, 8366, 34613, 64, 11, 50802], "temperature": 0.0, "avg_logprob": -0.4139976501464844, "compression_ratio": 1.5301204819277108, "no_speech_prob": 0.06499999761581421}, {"id": 47, "seek": 42492, "start": 433.68, "end": 441.96000000000004, "text": " muy simple, me dando, navegando por carpetas y todo, vamos a proceder ahora con la", "tokens": [50802, 5323, 2199, 11, 385, 274, 1806, 11, 39376, 70, 1806, 1515, 18119, 296, 288, 5149, 11, 5295, 257, 6682, 260, 9923, 416, 635, 51216], "temperature": 0.0, "avg_logprob": -0.4139976501464844, "compression_ratio": 1.5301204819277108, "no_speech_prob": 0.06499999761581421}, {"id": 48, "seek": 42492, "start": 441.96000000000004, "end": 446.52000000000004, "text": " instalaci\u00f3n de la creaci\u00f3n a m\u00e1quina virtual del linux, para ello le vamos a nuevo,", "tokens": [51216, 34059, 3482, 368, 635, 1197, 3482, 257, 49360, 6374, 1103, 22896, 2449, 11, 1690, 33549, 476, 5295, 257, 18591, 11, 51444], "temperature": 0.0, "avg_logprob": -0.4139976501464844, "compression_ratio": 1.5301204819277108, "no_speech_prob": 0.06499999761581421}, {"id": 49, "seek": 44652, "start": 446.52, "end": 457.88, "text": " tenemos aqu\u00ed un punto desktop, por ejemplo, le hacemos la iso, lo tenemos,", "tokens": [50364, 9914, 6661, 517, 14326, 14502, 11, 1515, 13358, 11, 476, 33839, 635, 307, 78, 11, 450, 9914, 11, 50932], "temperature": 0.0, "avg_logprob": -0.6098607870248648, "compression_ratio": 1.5414012738853504, "no_speech_prob": 0.1845124363899231}, {"id": 50, "seek": 44652, "start": 459.88, "end": 467.71999999999997, "text": " vamos a otros, la buscamos aqu\u00ed, ya tengamos la iso, es esta, abrir, linux terbalo,", "tokens": [51032, 5295, 257, 16422, 11, 635, 1255, 66, 2151, 6661, 11, 2478, 10370, 2151, 635, 307, 78, 11, 785, 5283, 11, 27446, 11, 22896, 2449, 1796, 2645, 78, 11, 51424], "temperature": 0.0, "avg_logprob": -0.6098607870248648, "compression_ratio": 1.5414012738853504, "no_speech_prob": 0.1845124363899231}, {"id": 51, "seek": 44652, "start": 467.71999999999997, "end": 474.35999999999996, "text": " me tiene eso atentida, de acuerdo, de hardware, le metemos aqu\u00ed con los 8 higas,", "tokens": [51424, 385, 7066, 7287, 412, 317, 2887, 11, 368, 28113, 11, 368, 8837, 11, 476, 1131, 4485, 6661, 416, 1750, 1649, 276, 328, 296, 11, 51756], "temperature": 0.0, "avg_logprob": -0.6098607870248648, "compression_ratio": 1.5414012738853504, "no_speech_prob": 0.1845124363899231}, {"id": 52, "seek": 47436, "start": 475.16, "end": 483.24, "text": " porque nos sobra el espacio, y la tenemos aqu\u00ed unos 5 higores, el lujo duro con", "tokens": [50404, 4021, 3269, 370, 6198, 806, 33845, 11, 288, 635, 9914, 6661, 17780, 1025, 276, 328, 2706, 11, 806, 287, 4579, 78, 1581, 340, 416, 50808], "temperature": 0.0, "avg_logprob": -0.6366739484998915, "compression_ratio": 1.2135922330097086, "no_speech_prob": 0.0027275944594293833}, {"id": 53, "seek": 47436, "start": 483.24, "end": 487.76, "text": " 55, ya vamos bien, la hemos creado, abrimos,", "tokens": [50808, 12330, 11, 2478, 5295, 3610, 11, 635, 15396, 1197, 1573, 11, 410, 5565, 329, 11, 51034], "temperature": 0.0, "avg_logprob": -0.6366739484998915, "compression_ratio": 1.2135922330097086, "no_speech_prob": 0.0027275944594293833}, {"id": 54, "seek": 48776, "start": 487.76, "end": 510.08, "text": " esperamos, pero vamos a ver el cargue, se debe tardar un poco,", "tokens": [50364, 10045, 2151, 11, 4768, 5295, 257, 1306, 806, 1032, 11929, 11, 369, 27422, 21057, 289, 517, 10639, 11, 51480], "temperature": 0.0, "avg_logprob": -0.6532181331089565, "compression_ratio": 1.0333333333333334, "no_speech_prob": 0.015752574428915977}, {"id": 55, "seek": 51776, "start": 518.64, "end": 520.08, "text": " est\u00e1 preparando un punto,", "tokens": [50408, 3192, 8231, 1806, 517, 14326, 11, 50480], "temperature": 0.0, "avg_logprob": -0.6862822063898636, "compression_ratio": 1.4728682170542635, "no_speech_prob": 0.01575636863708496}, {"id": 56, "seek": 51776, "start": 531.36, "end": 537.24, "text": " ahora tenemos siguiente, siguiente, espa\u00f1ol, compramos la e\u00f1a y la fe trencada,", "tokens": [51044, 9923, 9914, 25666, 11, 25666, 11, 31177, 11, 16802, 2151, 635, 308, 12150, 288, 635, 579, 23136, 66, 1538, 11, 51338], "temperature": 0.0, "avg_logprob": -0.6862822063898636, "compression_ratio": 1.4728682170542635, "no_speech_prob": 0.01575636863708496}, {"id": 57, "seek": 51776, "start": 537.24, "end": 543.52, "text": " siguiente, otelifar borgable, instalamos un punto, interactiva, se le fiebaron de", "tokens": [51338, 25666, 11, 4337, 338, 351, 289, 14828, 70, 712, 11, 34059, 2151, 517, 14326, 11, 4648, 5931, 11, 369, 476, 283, 414, 5356, 266, 368, 51652], "temperature": 0.0, "avg_logprob": -0.6862822063898636, "compression_ratio": 1.4728682170542635, "no_speech_prob": 0.01575636863708496}, {"id": 58, "seek": 54352, "start": 543.52, "end": 549.12, "text": " hardware, esto nos interesa, son opciones que no nos interesa, le vamos a borrar todo el", "tokens": [50364, 8837, 11, 7433, 3269, 728, 13708, 11, 1872, 999, 23469, 631, 572, 3269, 728, 13708, 11, 476, 5295, 257, 14828, 5352, 5149, 806, 50644], "temperature": 0.0, "avg_logprob": -0.5150722156871449, "compression_ratio": 1.6419753086419753, "no_speech_prob": 0.036591578274965286}, {"id": 59, "seek": 54352, "start": 549.12, "end": 559.28, "text": " disco, siguiente, nuestro nombre, lo completo, de lo cual lo dejamos de esto, ah\u00ed de as\u00ed,", "tokens": [50644, 3622, 11, 25666, 11, 14726, 13000, 11, 450, 40135, 11, 368, 450, 10911, 450, 21259, 2151, 368, 7433, 11, 12571, 368, 8582, 11, 51152], "temperature": 0.0, "avg_logprob": -0.5150722156871449, "compression_ratio": 1.6419753086419753, "no_speech_prob": 0.036591578274965286}, {"id": 60, "seek": 54352, "start": 562.3199999999999, "end": 568.24, "text": " contra ase\u00f1a, contra ase\u00f1a, vamos a la siguiente, cuando habr\u00eda madrid de Espa\u00f1a,", "tokens": [51304, 10742, 382, 68, 12150, 11, 10742, 382, 68, 12150, 11, 5295, 257, 635, 25666, 11, 7767, 32794, 2686, 5244, 8558, 368, 31729, 11, 51600], "temperature": 0.0, "avg_logprob": -0.5150722156871449, "compression_ratio": 1.6419753086419753, "no_speech_prob": 0.036591578274965286}, {"id": 61, "seek": 56824, "start": 568.24, "end": 573.92, "text": " si en de instalar, si nos est\u00e1 instalando, vamos a esperar que se instale, y enseguya volvemos,", "tokens": [50364, 1511, 465, 368, 1058, 12031, 11, 1511, 3269, 3192, 34059, 1806, 11, 5295, 257, 37577, 631, 369, 1058, 1220, 11, 288, 465, 405, 2794, 3016, 1996, 303, 3415, 11, 50648], "temperature": 0.0, "avg_logprob": -0.6480170940530712, "compression_ratio": 1.4715447154471544, "no_speech_prob": 0.012881334871053696}, {"id": 62, "seek": 56824, "start": 577.92, "end": 582.08, "text": " vale, ya se me ha terminado la instalaci\u00f3n, le vamos a reiniciar ahora, de acuerdo,", "tokens": [50848, 15474, 11, 2478, 369, 385, 324, 10761, 1573, 635, 34059, 3482, 11, 476, 5295, 257, 6561, 8787, 289, 9923, 11, 368, 28113, 11, 51056], "temperature": 0.0, "avg_logprob": -0.6480170940530712, "compression_ratio": 1.4715447154471544, "no_speech_prob": 0.012881334871053696}, {"id": 63, "seek": 58208, "start": 582.08, "end": 589.72, "text": " est\u00e1 reiniciando, vamos a editarle la agon\u00eda de fd,", "tokens": [50364, 3192, 6561, 8787, 1806, 11, 5295, 257, 1257, 3981, 306, 635, 623, 266, 2686, 368, 283, 67, 11, 50746], "temperature": 0.0, "avg_logprob": -0.7086716628656154, "compression_ratio": 1.2795698924731183, "no_speech_prob": 0.1848481446504593}, {"id": 64, "seek": 58208, "start": 597.0, "end": 600.12, "text": " vamos a dar quitado todo regamente, le vamos a enter, de acuerdo,", "tokens": [51110, 5295, 257, 4072, 10366, 1573, 5149, 1121, 3439, 11, 476, 5295, 257, 3242, 11, 368, 28113, 11, 51266], "temperature": 0.0, "avg_logprob": -0.7086716628656154, "compression_ratio": 1.2795698924731183, "no_speech_prob": 0.1848481446504593}, {"id": 65, "seek": 60012, "start": 600.12, "end": 609.36, "text": " estamos esperando que el sistema va a ver a ti o a arranque,", "tokens": [50364, 10382, 46587, 631, 806, 13245, 2773, 257, 1306, 257, 8757, 277, 257, 50235, 1077, 11, 50826], "temperature": 0.0, "avg_logprob": -0.71101544354413, "compression_ratio": 1.2371134020618557, "no_speech_prob": 0.0517696775496006}, {"id": 66, "seek": 60012, "start": 618.5600000000001, "end": 621.44, "text": " vale, enf\u00edjamos con nuestra cuenta, nuestro nombre ase\u00f1a,", "tokens": [51286, 15474, 11, 465, 69, 870, 73, 2151, 416, 16825, 17868, 11, 14726, 13000, 382, 68, 12150, 11, 51430], "temperature": 0.0, "avg_logprob": -0.71101544354413, "compression_ratio": 1.2371134020618557, "no_speech_prob": 0.0517696775496006}, {"id": 67, "seek": 66012, "start": 660.12, "end": 672.44, "text": " y as\u00ed ser\u00eda la instalaci\u00f3n de Linus, vamos a pasar con Windows, eso ser\u00eda todo,", "tokens": [50364, 288, 8582, 23679, 635, 34059, 3482, 368, 9355, 301, 11, 5295, 257, 25344, 416, 8591, 11, 7287, 23679, 5149, 11, 50980], "temperature": 0.0, "avg_logprob": -0.40312583491487325, "compression_ratio": 1.5118110236220472, "no_speech_prob": 0.015400094911456108}, {"id": 68, "seek": 66012, "start": 672.44, "end": 683.84, "text": " lo puedes ver aqu\u00ed, algo en partir, siguiente, el termedal, y as\u00ed ser\u00eda la instalaci\u00f3n de Linus subunto,", "tokens": [50980, 450, 19010, 1306, 6661, 11, 8655, 465, 13906, 11, 25666, 11, 806, 1433, 292, 304, 11, 288, 8582, 23679, 635, 34059, 3482, 368, 9355, 301, 1422, 24052, 11, 51550], "temperature": 0.0, "avg_logprob": -0.40312583491487325, "compression_ratio": 1.5118110236220472, "no_speech_prob": 0.015400094911456108}, {"id": 69, "seek": 69012, "start": 691.12, "end": 700.6, "text": " eso ser\u00eda todo, vamos a pasar con Windows, vamos a proceder ahora con la instalaci\u00f3n de Windows,", "tokens": [50414, 7287, 23679, 5149, 11, 5295, 257, 25344, 416, 8591, 11, 5295, 257, 6682, 260, 9923, 416, 635, 34059, 3482, 368, 8591, 11, 50888], "temperature": 0.0, "avg_logprob": -0.32253753221952, "compression_ratio": 1.1951219512195121, "no_speech_prob": 0.024887315928936005}, {"id": 70, "seek": 70060, "start": 701.6, "end": 707.48, "text": " le vamos a nuevo, vamos a Windows 10, de acuerdo, se enaf\u00edjamos la ISO,", "tokens": [50414, 476, 5295, 257, 18591, 11, 5295, 257, 8591, 1266, 11, 368, 28113, 11, 369, 465, 2792, 870, 73, 2151, 635, 25042, 11, 50708], "temperature": 0.0, "avg_logprob": -0.6625657964635778, "compression_ratio": 1.3360655737704918, "no_speech_prob": 0.1530734896659851}, {"id": 71, "seek": 70060, "start": 712.76, "end": 720.6, "text": " en los edificos, de acuerdo, le vamos a enter, en los 16, 64 est\u00e1n haciendo esa atent\u00eda,", "tokens": [50972, 465, 1750, 1257, 1089, 329, 11, 368, 28113, 11, 476, 5295, 257, 3242, 11, 465, 1750, 3165, 11, 12145, 10368, 20509, 11342, 412, 317, 2686, 11, 51364], "temperature": 0.0, "avg_logprob": -0.6625657964635778, "compression_ratio": 1.3360655737704918, "no_speech_prob": 0.1530734896659851}, {"id": 72, "seek": 72060, "start": 720.6, "end": 732.6, "text": " le metemos aqu\u00ed, uno, seis cores, y fuentag\u00eda, vamos a enter 40, terminamos,", "tokens": [50364, 476, 1131, 4485, 6661, 11, 8526, 11, 28233, 1181, 279, 11, 288, 8536, 317, 559, 2686, 11, 5295, 257, 3242, 3356, 11, 10761, 2151, 11, 50964], "temperature": 0.0, "avg_logprob": -0.5768407065913362, "compression_ratio": 1.3543307086614174, "no_speech_prob": 0.017921531572937965}, {"id": 73, "seek": 72060, "start": 732.6, "end": 738.6, "text": " vamos a la siguiente, le iniciamos ahora, vamos a proceder con la instalaci\u00f3n de Windows 10,", "tokens": [50964, 5295, 257, 635, 25666, 11, 476, 43043, 2151, 9923, 11, 5295, 257, 6682, 260, 416, 635, 34059, 3482, 368, 8591, 1266, 11, 51264], "temperature": 0.0, "avg_logprob": -0.5768407065913362, "compression_ratio": 1.3543307086614174, "no_speech_prob": 0.017921531572937965}, {"id": 74, "seek": 73860, "start": 739.6, "end": 755.6, "text": " vale, est\u00e1 agarrando Windows 10, vale, vamos a la siguiente, instaramos,", "tokens": [50414, 15474, 11, 3192, 623, 289, 19845, 8591, 1266, 11, 15474, 11, 5295, 257, 635, 25666, 11, 1058, 289, 2151, 11, 51214], "temperature": 0.0, "avg_logprob": -0.44124309221903485, "compression_ratio": 0.9733333333333334, "no_speech_prob": 0.09563438594341278}, {"id": 75, "seek": 75560, "start": 755.6, "end": 766.6, "text": " no te va a clave, queramos la Pro, siguiente,", "tokens": [50364, 572, 535, 2773, 257, 596, 946, 11, 7083, 2151, 635, 1705, 11, 25666, 11, 50914], "temperature": 0.0, "avg_logprob": -0.45151732949649587, "compression_ratio": 1.3833333333333333, "no_speech_prob": 0.04865453392267227}, {"id": 76, "seek": 75560, "start": 766.6, "end": 773.6, "text": " aceptamos los t\u00e9rminos del licencia, siguiente, personalizada, tal cual,", "tokens": [50914, 43568, 2151, 1750, 45198, 329, 1103, 6169, 10974, 11, 25666, 11, 2973, 39600, 11, 4023, 10911, 11, 51264], "temperature": 0.0, "avg_logprob": -0.45151732949649587, "compression_ratio": 1.3833333333333333, "no_speech_prob": 0.04865453392267227}, {"id": 77, "seek": 75560, "start": 773.6, "end": 777.6, "text": " vamos a esperar a que esto termine y volvemos,", "tokens": [51264, 5295, 257, 37577, 257, 631, 7433, 1433, 533, 288, 1996, 303, 3415, 11, 51464], "temperature": 0.0, "avg_logprob": -0.45151732949649587, "compression_ratio": 1.3833333333333333, "no_speech_prob": 0.04865453392267227}, {"id": 78, "seek": 87560, "start": 876.6, "end": 879.6, "text": " le vamos a rendeciar ahora,", "tokens": [50414, 476, 5295, 257, 6125, 68, 537, 289, 9923, 11, 50564], "temperature": 0.0, "avg_logprob": -0.42995025089808875, "compression_ratio": 1.45, "no_speech_prob": 0.016577957198023796}, {"id": 79, "seek": 87560, "start": 881.6, "end": 886.6, "text": " est\u00e1 rendeciando Windows, no queremos expresar nueva tecla,", "tokens": [50664, 3192, 6125, 68, 537, 1806, 8591, 11, 572, 26813, 33397, 289, 28963, 535, 46265, 11, 50914], "temperature": 0.0, "avg_logprob": -0.42995025089808875, "compression_ratio": 1.45, "no_speech_prob": 0.016577957198023796}, {"id": 80, "seek": 87560, "start": 886.6, "end": 890.6, "text": " porque si vamos a arrancar el WB, y vamos puesto de la ISO,", "tokens": [50914, 4021, 1511, 5295, 257, 50235, 6166, 806, 343, 33, 11, 288, 5295, 35136, 368, 635, 25042, 11, 51114], "temperature": 0.0, "avg_logprob": -0.42995025089808875, "compression_ratio": 1.45, "no_speech_prob": 0.016577957198023796}, {"id": 81, "seek": 87560, "start": 890.6, "end": 895.6, "text": " est\u00e1 arrancando ahora en el discuduro, para proceder a instalaci\u00f3n de Windows 10,", "tokens": [51114, 3192, 50235, 29585, 9923, 465, 806, 2983, 532, 7052, 11, 1690, 6682, 260, 257, 34059, 3482, 368, 8591, 1266, 11, 51364], "temperature": 0.0, "avg_logprob": -0.42995025089808875, "compression_ratio": 1.45, "no_speech_prob": 0.016577957198023796}, {"id": 82, "seek": 99560, "start": 995.6, "end": 1004.6, "text": " vale, se refearon a esa regi\u00f3n que se Espa\u00f1a,", "tokens": [50364, 15474, 11, 369, 1895, 68, 6372, 257, 11342, 45163, 631, 369, 31729, 11, 50814], "temperature": 0.0, "avg_logprob": -0.4037286341190338, "compression_ratio": 1.4153846153846155, "no_speech_prob": 0.03808220848441124}, {"id": 83, "seek": 99560, "start": 1004.6, "end": 1010.6, "text": " la desrofei\u00f3n del teclado es adecuada, le vamos a emitir,", "tokens": [50814, 635, 730, 340, 2106, 2560, 1103, 535, 3474, 1573, 785, 614, 3045, 84, 1538, 11, 476, 5295, 257, 32084, 347, 11, 51114], "temperature": 0.0, "avg_logprob": -0.4037286341190338, "compression_ratio": 1.4153846153846155, "no_speech_prob": 0.03808220848441124}, {"id": 84, "seek": 99560, "start": 1010.6, "end": 1013.6, "text": " est\u00e1 configurando la retabora,", "tokens": [51114, 3192, 22192, 1806, 635, 1533, 455, 3252, 11, 51264], "temperature": 0.0, "avg_logprob": -0.4037286341190338, "compression_ratio": 1.4153846153846155, "no_speech_prob": 0.03808220848441124}, {"id": 85, "seek": 99560, "start": 1013.6, "end": 1024.6, "text": " dejamos que configure todo la red, el solito,", "tokens": [51264, 21259, 2151, 631, 22162, 5149, 635, 2182, 11, 806, 1404, 3528, 11, 51814], "temperature": 0.0, "avg_logprob": -0.4037286341190338, "compression_ratio": 1.4153846153846155, "no_speech_prob": 0.03808220848441124}, {"id": 86, "seek": 102460, "start": 1024.6, "end": 1026.6, "text": " el solito,", "tokens": [50364, 806, 1404, 3528, 11, 50464], "temperature": 0.0, "avg_logprob": -0.5741017205374581, "compression_ratio": 0.5555555555555556, "no_speech_prob": 0.48329147696495056}, {"id": 87, "seek": 105460, "start": 1054.6, "end": 1076.6, "text": " vale, vamos aqu\u00ed a configurar para uso personal,", "tokens": [50364, 15474, 11, 5295, 6661, 257, 22192, 289, 1690, 22728, 2973, 11, 51464], "temperature": 0.0, "avg_logprob": -0.37412252426147463, "compression_ratio": 0.875, "no_speech_prob": 0.03514665365219116}, {"id": 88, "seek": 107660, "start": 1077.6, "end": 1081.6, "text": " siguiente, iniciar con cuenta sin conexi\u00f3n,", "tokens": [50414, 25666, 11, 43043, 289, 416, 17868, 3343, 49509, 2560, 11, 50614], "temperature": 0.0, "avg_logprob": -0.39108912150065106, "compression_ratio": 1.6136363636363635, "no_speech_prob": 0.47347259521484375}, {"id": 89, "seek": 107660, "start": 1081.6, "end": 1084.6, "text": " experiencia limitada,", "tokens": [50614, 36489, 4948, 1538, 11, 50764], "temperature": 0.0, "avg_logprob": -0.39108912150065106, "compression_ratio": 1.6136363636363635, "no_speech_prob": 0.47347259521484375}, {"id": 90, "seek": 107660, "start": 1084.6, "end": 1087.6, "text": " entonces nuestro nombre,", "tokens": [50764, 13003, 14726, 13000, 11, 50914], "temperature": 0.0, "avg_logprob": -0.39108912150065106, "compression_ratio": 1.6136363636363635, "no_speech_prob": 0.47347259521484375}, {"id": 91, "seek": 107660, "start": 1087.6, "end": 1091.6, "text": " siguiente, la otra se\u00f1a de la desea,", "tokens": [50914, 25666, 11, 635, 13623, 369, 12150, 368, 635, 27118, 64, 11, 51114], "temperature": 0.0, "avg_logprob": -0.39108912150065106, "compression_ratio": 1.6136363636363635, "no_speech_prob": 0.47347259521484375}, {"id": 92, "seek": 107660, "start": 1091.6, "end": 1096.6, "text": " siguiente, confirmar la otra se\u00f1a,", "tokens": [51114, 25666, 11, 9064, 289, 635, 13623, 369, 12150, 11, 51364], "temperature": 0.0, "avg_logprob": -0.39108912150065106, "compression_ratio": 1.6136363636363635, "no_speech_prob": 0.47347259521484375}, {"id": 93, "seek": 107660, "start": 1096.6, "end": 1099.6, "text": " siguiente, una pregunta,", "tokens": [51364, 25666, 11, 2002, 24252, 11, 51514], "temperature": 0.0, "avg_logprob": -0.39108912150065106, "compression_ratio": 1.6136363636363635, "no_speech_prob": 0.47347259521484375}, {"id": 94, "seek": 107660, "start": 1099.6, "end": 1101.6, "text": " va a poder lo que sea,", "tokens": [51514, 2773, 257, 8152, 450, 631, 4158, 11, 51614], "temperature": 0.0, "avg_logprob": -0.39108912150065106, "compression_ratio": 1.6136363636363635, "no_speech_prob": 0.47347259521484375}, {"id": 95, "seek": 110160, "start": 1101.6, "end": 1106.6, "text": " como esta m\u00e1quina se proba, no importa,", "tokens": [50364, 2617, 5283, 49360, 369, 1239, 64, 11, 572, 33218, 11, 50614], "temperature": 0.0, "avg_logprob": -0.4350832675365692, "compression_ratio": 1.2571428571428571, "no_speech_prob": 0.011766917072236538}, {"id": 96, "seek": 110160, "start": 1106.6, "end": 1109.6, "text": " siguiente,", "tokens": [50614, 25666, 11, 50764], "temperature": 0.0, "avg_logprob": -0.4350832675365692, "compression_ratio": 1.2571428571428571, "no_speech_prob": 0.011766917072236538}, {"id": 97, "seek": 110160, "start": 1109.6, "end": 1114.6, "text": " la acuerdo, ya tenemos la cuenta creada, ahora no,", "tokens": [50764, 635, 28113, 11, 2478, 9914, 635, 17868, 1197, 1538, 11, 9923, 572, 11, 51014], "temperature": 0.0, "avg_logprob": -0.4350832675365692, "compression_ratio": 1.2571428571428571, "no_speech_prob": 0.011766917072236538}, {"id": 98, "seek": 110160, "start": 1114.6, "end": 1117.6, "text": " la verdad todo,", "tokens": [51014, 635, 13692, 5149, 11, 51164], "temperature": 0.0, "avg_logprob": -0.4350832675365692, "compression_ratio": 1.2571428571428571, "no_speech_prob": 0.011766917072236538}, {"id": 99, "seek": 110160, "start": 1123.6, "end": 1127.6, "text": " vale, omitir,", "tokens": [51464, 15474, 11, 3406, 270, 347, 11, 51664], "temperature": 0.0, "avg_logprob": -0.4350832675365692, "compression_ratio": 1.2571428571428571, "no_speech_prob": 0.011766917072236538}, {"id": 100, "seek": 112760, "start": 1128.6, "end": 1131.6, "text": " ahora no, no queremos cortana,", "tokens": [50414, 9923, 572, 11, 572, 26813, 11278, 2095, 11, 50564], "temperature": 0.0, "avg_logprob": -0.4007460378831433, "compression_ratio": 1.0128205128205128, "no_speech_prob": 0.0055793458595871925}, {"id": 101, "seek": 112760, "start": 1131.6, "end": 1134.6, "text": " s\u00ed,", "tokens": [50564, 8600, 11, 50714], "temperature": 0.0, "avg_logprob": -0.4007460378831433, "compression_ratio": 1.0128205128205128, "no_speech_prob": 0.0055793458595871925}, {"id": 102, "seek": 112760, "start": 1134.6, "end": 1136.6, "text": " nos da bienvenida,", "tokens": [50714, 3269, 1120, 3610, 553, 2887, 11, 50814], "temperature": 0.0, "avg_logprob": -0.4007460378831433, "compression_ratio": 1.0128205128205128, "no_speech_prob": 0.0055793458595871925}, {"id": 103, "seek": 112760, "start": 1136.6, "end": 1139.6, "text": " en Windows, ahora mismo.", "tokens": [50814, 465, 8591, 11, 9923, 12461, 13, 50964], "temperature": 0.0, "avg_logprob": -0.4007460378831433, "compression_ratio": 1.0128205128205128, "no_speech_prob": 0.0055793458595871925}, {"id": 104, "seek": 118760, "start": 1187.6, "end": 1207.6, "text": " vale, ya tenemos Windows configurado,", "tokens": [50364, 15474, 11, 2478, 9914, 8591, 22192, 1573, 11, 51364], "temperature": 0.0, "avg_logprob": -0.2792549377832657, "compression_ratio": 1.488888888888889, "no_speech_prob": 0.0293434951454401}, {"id": 105, "seek": 118760, "start": 1207.6, "end": 1211.6, "text": " y as\u00ed es como se hace la instalaci\u00f3n de Windows,", "tokens": [51364, 288, 8582, 785, 2617, 369, 10032, 635, 34059, 3482, 368, 8591, 11, 51564], "temperature": 0.0, "avg_logprob": -0.2792549377832657, "compression_ratio": 1.488888888888889, "no_speech_prob": 0.0293434951454401}, {"id": 106, "seek": 118760, "start": 1211.6, "end": 1214.6, "text": " y as\u00ed es como es la instalaci\u00f3n de Windows,", "tokens": [51564, 288, 8582, 785, 2617, 785, 635, 34059, 3482, 368, 8591, 11, 51714], "temperature": 0.0, "avg_logprob": -0.2792549377832657, "compression_ratio": 1.488888888888889, "no_speech_prob": 0.0293434951454401}, {"id": 107, "seek": 121460, "start": 1214.6, "end": 1217.6, "text": " ahora mismo,", "tokens": [50364, 9923, 12461, 11, 50514], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 108, "seek": 121460, "start": 1217.6, "end": 1219.6, "text": " el Chrome Tab de Linux,", "tokens": [50514, 806, 15327, 14106, 368, 18734, 11, 50614], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 109, "seek": 121460, "start": 1219.6, "end": 1223.6, "text": " es una herramienta que te permite configurar y programar tareas,", "tokens": [50614, 785, 2002, 38271, 64, 631, 535, 31105, 22192, 289, 288, 1461, 289, 49423, 296, 11, 50814], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 110, "seek": 121460, "start": 1223.6, "end": 1227.6, "text": " repetitivas para que se juzguten de manera autom\u00e1tica,", "tokens": [50814, 1085, 302, 270, 24759, 1690, 631, 369, 361, 3334, 70, 325, 268, 368, 13913, 3553, 23432, 11, 51014], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 111, "seek": 121460, "start": 1227.6, "end": 1229.6, "text": " en segundo plano,", "tokens": [51014, 465, 17954, 40259, 11, 51114], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 112, "seek": 121460, "start": 1229.6, "end": 1232.6, "text": " Chrome Tab, integrado por defecto,", "tokens": [51114, 15327, 14106, 11, 3572, 1573, 1515, 16445, 78, 11, 51264], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 113, "seek": 121460, "start": 1232.6, "end": 1234.6, "text": " en la configuraci\u00f3n inicial del sistema,", "tokens": [51264, 465, 635, 22192, 3482, 44076, 1103, 13245, 11, 51364], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 114, "seek": 121460, "start": 1234.6, "end": 1239.6, "text": " es uno de los recursos automatizados del administrado de tareas", "tokens": [51364, 785, 8526, 368, 1750, 30409, 28034, 590, 4181, 1103, 9737, 1573, 368, 49423, 296, 51614], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 115, "seek": 121460, "start": 1239.6, "end": 1241.6, "text": " de Linux llamado Chrome.", "tokens": [51614, 368, 18734, 47055, 15327, 13, 51714], "temperature": 0.0, "avg_logprob": -0.4222069542006691, "compression_ratio": 1.586046511627907, "no_speech_prob": 0.2243509143590927}, {"id": 116, "seek": 124160, "start": 1241.6, "end": 1243.6, "text": " Chrome Tab, nosotros podemos configurar, por ejemplo,", "tokens": [50364, 15327, 14106, 11, 13863, 12234, 22192, 289, 11, 1515, 13358, 11, 50464], "temperature": 0.0, "avg_logprob": -0.3226944824744915, "compression_ratio": 1.4225352112676057, "no_speech_prob": 0.1298234760761261}, {"id": 117, "seek": 124160, "start": 1243.6, "end": 1245.6, "text": " que nos da copias de seguridad, por ejemplo,", "tokens": [50464, 631, 3269, 1120, 2971, 4609, 368, 35415, 11, 1515, 13358, 11, 50564], "temperature": 0.0, "avg_logprob": -0.3226944824744915, "compression_ratio": 1.4225352112676057, "no_speech_prob": 0.1298234760761261}, {"id": 118, "seek": 124160, "start": 1245.6, "end": 1248.6, "text": " cada cu\u00e1nto tiempo,", "tokens": [50564, 8411, 44256, 78, 11772, 11, 50714], "temperature": 0.0, "avg_logprob": -0.3226944824744915, "compression_ratio": 1.4225352112676057, "no_speech_prob": 0.1298234760761261}, {"id": 119, "seek": 124160, "start": 1248.6, "end": 1251.6, "text": " es muy importante tambi\u00e9n,", "tokens": [50714, 785, 5323, 9416, 6407, 11, 50864], "temperature": 0.0, "avg_logprob": -0.3226944824744915, "compression_ratio": 1.4225352112676057, "no_speech_prob": 0.1298234760761261}, {"id": 120, "seek": 124160, "start": 1251.6, "end": 1258.6, "text": " y tambi\u00e9n lo podemos asociar a Maya SQL, por ejemplo.", "tokens": [50864, 288, 6407, 450, 12234, 382, 78, 537, 289, 257, 21695, 19200, 11, 1515, 13358, 13, 51214], "temperature": 0.0, "avg_logprob": -0.3226944824744915, "compression_ratio": 1.4225352112676057, "no_speech_prob": 0.1298234760761261}], "language": "es"}
```
#### uploads
### css
**animaciones.css**
```css
/* ==========================
   ANIMACIONES GENERALES
========================== */

@keyframes aparecer{

    from{
        opacity: 0;
        transform: translateY(20px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }

}

@keyframes desaparecer{

    from{
        opacity: 1;
        transform: translateY(0);
    }

    to{
        opacity: 0;
        transform: translateY(-20px);
    }

}

/* ==========================
   PULSO
========================== */

@keyframes pulso{

    0%{
        transform: scale(1);
    }

    50%{
        transform: scale(1.05);
    }

    100%{
        transform: scale(1);
    }

}

/* ==========================
   FLOTANTE
========================== */

@keyframes flotante{

    0%{
        transform: translateY(0px);
    }

    50%{
        transform: translateY(-10px);
    }

    100%{
        transform: translateY(0px);
    }

}

/* ==========================
   GIRO
========================== */

@keyframes girar{

    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

}

/* ==========================
   BRILLO
========================== */

@keyframes brillo{

    0%{
        background-position: -300px 0;
    }

    100%{
        background-position: 300px 0;
    }

}

/* ==========================
   PARPADEO
========================== */

@keyframes parpadeo{

    0%{
        opacity: 1;
    }

    50%{
        opacity: 0.3;
    }

    100%{
        opacity: 1;
    }

}

/* ==========================
   CLASES UTILITARIAS
========================== */

.animar_aparecer{
    animation: aparecer 0.6s ease forwards;
}

.animar_desaparecer{
    animation: desaparecer 0.4s ease forwards;
}

.animar_pulso{
    animation: pulso 2s infinite;
}

.animar_flotante{
    animation: flotante 3s ease-in-out infinite;
}

.animar_girar{
    animation: girar 1s linear infinite;
}

.animar_parpadeo{
    animation: parpadeo 1.5s infinite;
}

/* ==========================
   ICONO PRINCIPAL
========================== */

.icono_carga{
    animation: flotante 3s ease-in-out infinite;
}

/* ==========================
   BOTONES
========================== */

.boton_principal,
.boton_secundario{
    position: relative;
    overflow: hidden;
}

.boton_principal:active,
.boton_secundario:active{
    transform: scale(0.98);
}

/* ==========================
   PANEL HOVER
========================== */

.panel{
    transition:
        transform var(--transicion-normal),
        box-shadow var(--transicion-normal);
}

.panel:hover{
    transform: translateY(-2px);
}

/* ==========================
   TARJETAS INFO
========================== */

.tarjeta_info{
    transition:
        transform var(--transicion-normal),
        box-shadow var(--transicion-normal);
}

.tarjeta_info:hover{
    transform: translateY(-4px);
    box-shadow: var(--sombra-media);
}

/* ==========================
   ZONA DRAG & DROP
========================== */

.zona_carga.activa{
    animation: pulso 1.2s infinite;
}

/* ==========================
   LOADER WHISPER
========================== */

.loader_whisper{
    width: 60px;
    height: 60px;

    border: 6px solid rgba(29,78,216,0.2);

    border-top: 6px solid var(--azul);

    border-radius: 50%;

    animation: girar 1s linear infinite;

    margin: 20px auto;
}

/* ==========================
   TEXTO PROCESANDO
========================== */

.texto_procesando{
    color: var(--azul);
    font-weight: 600;
    animation: parpadeo 1.5s infinite;
}

/* ==========================
   BARRA DE PROGRESO BRILLO
========================== */

.barra_progreso{
    position: relative;
}

.barra_progreso::after{

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.45),
            transparent
        );

    animation: brillo 2s infinite;
}

/* ==========================
   TRANSICIONES SUAVES
========================== */

.panel,
.tarjeta_info,
.zona_carga,
#contenido_subtitulos,
#reproductor_video{
    transition: all 0.3s ease;
}

/* ==========================
   ACCESIBILIDAD
========================== */

@media (prefers-reduced-motion: reduce){

    *,
    *::before,
    *::after{

        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;

        transition-duration: 0.01ms !important;

    }

}
```
**estilos.css**
```css
/* ==========================
   RESET
========================== */

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    scroll-behavior: smooth;
}

body{

    font-family: var(--fuente-principal);

    min-height: 100vh;

    color: var(--texto-principal);

    background:
    linear-gradient(
        135deg,
        #f8fafc,
        #eef4ff
    );
}

/* ==========================
   CABECERA
========================== */

.cabecera{

    background:
    linear-gradient(
        135deg,
        var(--azul),
        #2563eb
    );

    color: white;

    display: flex;

    align-items: center;

    gap: 20px;

    padding: 25px 35px;

    box-shadow:
        0 10px 40px rgba(29,78,216,0.25);
}


.logo{
    font-size: 3.5rem;
}

.titulo_principal h1{

    font-size: 2.6rem;

    font-weight: 800;

    margin-bottom: 5px;
}

.titulo_principal p{
    opacity: 0.9;
}

/* ==========================
   CONTENIDO PRINCIPAL
========================== */

.contenedor_principal{
    width: 100%;
    max-width: 1400px;

    margin: 0 auto;

    padding: 40px 20px;
}

/* ==========================
   ZONA DE CARGA
========================== */

.zona_carga{
    background: var(--blanco);

    border: 4px dashed var(--azul);

    border-radius: 24px;

    padding: 80px 40px;

    text-align: center;

    box-shadow: 0 15px 40px rgba(29,78,216,0.12);

    transition: all 0.3s ease;

    opacity: 1 !important;
    transform: none;

    max-width: 1200px;
    margin: 0 auto;
}

.zona_carga:hover{
    transform: translateY(-4px);

    box-shadow:
        0 25px 60px rgba(29,78,216,0.18);
}

.zona_carga.activa{

    border-color: var(--naranja);

    background: #fff7ed;

    box-shadow:
        0 30px 70px rgba(249,115,22,0.25);
}

.icono_carga{
    font-size: 6rem;

    opacity: 1 !important;

    margin-bottom: 30px;
}

.zona_carga h2{

    font-size: 3rem;

    color: var(--azul);

    opacity: 1 !important;

    margin-bottom: 15px;

    font-weight: 700;
}

.zona_carga p{

    color: var(--gris-oscuro);

    opacity: 1 !important;

    font-size: 1.2rem;

    margin-bottom: 35px;
}

/* ==========================
   BOTONES
========================== */

.boton_principal{

    background: var(--naranja);

    opacity: 1 !important;

    color: var(--blanco);

    border: none;

    border-radius: 14px;

    padding: 18px 36px;

    font-size: 1.05rem;

    font-weight: 700;

    cursor: pointer;

    transition: all 0.3s ease;

    box-shadow:
        0 10px 25px rgba(249,115,22,0.35);
}

.boton_principal:hover{

    transform: translateY(-3px);

    background: #ea580c;

    box-shadow:
        0 18px 40px rgba(249,115,22,0.45);
}

.boton_secundario{
    background: var(--azul);
    color: var(--blanco);

    border: none;

    border-radius: var(--radio-pequeno);

    padding: 0.8rem 1.2rem;

    cursor: pointer;

    transition: var(--transicion-normal);
}

.boton_secundario:hover{
    background: #1e40af;
}

/* ==========================
   PANELES
========================== */

.panel{
    background: var(--fondo-panel);

    border-radius: var(--radio-grande);

    padding: var(--espaciado-xl);

    margin-top: var(--espaciado-xl);

    box-shadow: var(--sombra-pequena);
}

.panel h2{
    margin-bottom: var(--espaciado-lg);
    color: var(--azul);
}

/* ==========================
   OCULTAR PANELES
========================== */

.panel_oculto{
    display: none;
}

/* ==========================
   INFORMACIÓN DEL VÍDEO
========================== */

.grid_informacion{
    display: grid;

    grid-template-columns:
        repeat(auto-fit,minmax(220px,1fr));

    gap: var(--espaciado-lg);
}

.tarjeta_info{
    background: var(--gris-claro);

    border-radius: var(--radio-medio);

    padding: var(--espaciado-lg);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.etiqueta{
    font-size: var(--tamano-sm);
    color: var(--texto-secundario);
    font-weight: 600;
}

/* ==========================
   PROCESAMIENTO
========================== */

.barra_progreso_contenedor{
    width: 100%;
    height: 20px;

    background: var(--gris-claro);

    border-radius: 999px;

    overflow: hidden;
}

.barra_progreso{
    width: 0%;

    height: 100%;

    background: linear-gradient(
        90deg,
        var(--azul),
        var(--naranja)
    );

    transition: width 0.3s ease;
}

#texto_estado{
    margin-top: var(--espaciado-md);
    color: var(--texto-secundario);
}

/* ==========================
   SUBTÍTULOS
========================== */

.cabecera_panel{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--espaciado-md);

    margin-bottom: var(--espaciado-lg);

    flex-wrap: wrap;
}

.acciones_subtitulos{
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

#contenido_subtitulos{
    width: 100%;
    min-height: 350px;

    resize: vertical;

    border: 2px solid #d1d5db;

    border-radius: var(--radio-medio);

    padding: var(--espaciado-lg);

    font-family: Consolas, monospace;

    outline: none;
}

#contenido_subtitulos:focus{
    border-color: var(--azul);
}

/* ==========================
   RESPONSIVE
========================== */

@media (max-width: 768px){

    .cabecera{
        flex-direction: column;
        text-align: center;
    }

    .titulo_principal h1{
        font-size: 1.8rem;
    }

    .contenedor_principal{
        padding: var(--espaciado-md);
    }

    .zona_carga{
        padding: 3rem 1rem;
    }

    .cabecera_panel{
        flex-direction: column;
        align-items: stretch;
    }

    .acciones_subtitulos{
        width: 100%;
    }

    .acciones_subtitulos button{
        width: 100%;
    }

}
::selection{
    background: var(--naranja);
    color: white;
}
```
**reproductor.css**
```css
/* =========================================
   REPRODUCTOR
========================================= */

#seccion_reproductor{
    width: 100%;
}

.contenedor_reproductor{

    background: var(--negro);

    border-radius: 20px;

    overflow: hidden;

    box-shadow:
        0 20px 50px rgba(17,24,39,0.25);

    border: 2px solid rgba(29,78,216,0.10);

}

/* =========================================
   VIDEO
========================================= */

#reproductor_video{

    width: 100%;

    display: block;

    background: #000;

    max-height: 700px;

    object-fit: contain;

}

/* =========================================
   CONTROLES
========================================= */

.controles_video{

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 18px;

    background: var(--negro);

    border-top: 1px solid rgba(255,255,255,0.08);

    flex-wrap: wrap;

}

/* =========================================
   BOTONES
========================================= */

.control_video{

    width: 45px;
    height: 45px;

    border: none;

    background: var(--azul);

    color: var(--blanco);

    border-radius: 12px;

    font-size: 1rem;

    cursor: pointer;

    transition: all 0.25s ease;

    display: flex;

    align-items: center;

    justify-content: center;

}

.control_video:hover{

    background: var(--naranja);

    transform: translateY(-2px);

}

.control_video.activo{

    background: var(--naranja);

}

/* =========================================
   TIEMPOS
========================================= */

#tiempo_actual,
#tiempo_total{

    color: var(--blanco);

    font-size: 0.9rem;

    font-weight: 600;

    min-width: 55px;

    text-align: center;

}

/* =========================================
   BARRA REPRODUCCIÓN
========================================= */

.barra_reproduccion{

    flex: 1;

    min-width: 200px;

    height: 10px;

    background: rgba(255,255,255,0.15);

    border-radius: 999px;

    cursor: pointer;

    overflow: hidden;

    position: relative;

}

.barra_progreso_video{

    width: 0%;

    height: 100%;

    background:
    linear-gradient(
        90deg,
        var(--naranja),
        var(--azul)
    );

    border-radius: 999px;

    transition: width 0.1s linear;

}

/* =========================================
   VOLUMEN
========================================= */

#control_volumen{

    width: 120px;

    accent-color: var(--naranja);

    cursor: pointer;

}

/* =========================================
   EFECTOS
========================================= */

.controles_video button:active{

    transform: scale(0.95);

}

.contenedor_reproductor:hover{

    box-shadow:
        0 25px 60px rgba(29,78,216,0.15);

}

/* =========================================
   SUBTÍTULOS NATIVOS
========================================= */

video::cue{

    background: rgba(17,24,39,0.85);

    color: var(--blanco);

    font-size: 1.2rem;

    padding: 4px 8px;

}

/* =========================================
   MODO CINE
========================================= */

.modo_cine{

    background: #000 !important;

}

.modo_cine .cabecera{

    opacity: 0.2;

}

.modo_cine .panel{

    opacity: 0.5;

}

.modo_cine #seccion_reproductor{

    opacity: 1 !important;

}

/* =========================================
   RESPONSIVE TABLET
========================================= */

@media (max-width: 992px){

    .controles_video{

        gap: 10px;

    }

    .barra_reproduccion{

        min-width: 150px;

    }

}

/* =========================================
   RESPONSIVE MÓVIL
========================================= */

@media (max-width: 768px){

    .controles_video{

        justify-content: center;

        padding: 15px;

    }

    .barra_reproduccion{

        width: 100%;

        order: 99;

    }

    #control_volumen{

        width: 100px;

    }

    .control_video{

        width: 42px;
        height: 42px;

    }

}

/* =========================================
   RESPONSIVE MÓVIL PEQUEÑO
========================================= */

@media (max-width: 480px){

    .controles_video{

        gap: 6px;

    }

    .control_video{

        width: 38px;
        height: 38px;

        font-size: 0.85rem;

    }

    #tiempo_actual,
    #tiempo_total{

        font-size: 0.75rem;

    }

}
```
**toast.css**
```css
/* ==========================
   CONTENEDOR DE TOASTS
========================== */

#contenedor_toasts{
    position: fixed;

    top: 20px;
    right: 20px;

    width: 380px;

    display: flex;
    flex-direction: column;

    gap: 12px;

    z-index: var(--z-toast);

    pointer-events: none;
}

/* ==========================
   TOAST BASE
========================== */

.toast{
    background: var(--blanco);

    border-left: 6px solid var(--azul);

    border-radius: var(--radio-medio);

    padding: 16px;

    box-shadow: var(--sombra-grande);

    pointer-events: auto;

    overflow: hidden;

    position: relative;

    display: flex;
    align-items: flex-start;
    gap: 12px;
}

/* ==========================
   ICONO
========================== */

.toast_icono{
    font-size: 1.4rem;

    flex-shrink: 0;
}

/* ==========================
   CONTENIDO
========================== */

.toast_contenido{
    flex: 1;
}

.toast_titulo{
    font-weight: 700;
    margin-bottom: 4px;
}

.toast_mensaje{
    color: var(--texto-secundario);
    line-height: 1.5;
    font-size: 0.95rem;
}

/* ==========================
   BOTÓN CERRAR
========================== */

.toast_cerrar{
    background: transparent;

    border: none;

    cursor: pointer;

    font-size: 1.1rem;

    color: var(--texto-secundario);

    transition: var(--transicion-normal);
}

.toast_cerrar:hover{
    color: var(--negro);
}

/* ==========================
   TIPOS
========================== */

.toast_exito{
    border-left-color: var(--exito);
}

.toast_exito .toast_titulo{
    color: var(--exito);
}

.toast_error{
    border-left-color: var(--error);
}

.toast_error .toast_titulo{
    color: var(--error);
}

.toast_advertencia{
    border-left-color: var(--advertencia);
}

.toast_advertencia .toast_titulo{
    color: #ca8a04;
}

.toast_informacion{
    border-left-color: var(--informacion);
}

.toast_informacion .toast_titulo{
    color: var(--informacion);
}

/* ==========================
   BARRA TEMPORAL
========================== */

.toast_progreso{
    position: absolute;

    left: 0;
    bottom: 0;

    height: 4px;

    width: 100%;

    background: rgba(0,0,0,0.08);
}

.toast_progreso::after{
    content: "";

    position: absolute;

    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background: var(--azul);

    transform-origin: left;

    animation: tiempo_toast 5s linear forwards;
}

.toast_exito .toast_progreso::after{
    background: var(--exito);
}

.toast_error .toast_progreso::after{
    background: var(--error);
}

.toast_advertencia .toast_progreso::after{
    background: var(--advertencia);
}

.toast_informacion .toast_progreso::after{
    background: var(--informacion);
}

/* ==========================
   ANIMACIONES CSS FALLBACK
========================== */

.toast_entrada{
    animation: toast_entrada 0.35s ease forwards;
}

.toast_salida{
    animation: toast_salida 0.25s ease forwards;
}

@keyframes toast_entrada{

    from{
        opacity: 0;
        transform: translateX(120%);
    }

    to{
        opacity: 1;
        transform: translateX(0);
    }

}

@keyframes toast_salida{

    from{
        opacity: 1;
        transform: translateX(0);
    }

    to{
        opacity: 0;
        transform: translateX(120%);
    }

}

@keyframes tiempo_toast{

    from{
        transform: scaleX(1);
    }

    to{
        transform: scaleX(0);
    }

}

/* ==========================
   HOVER
========================== */

.toast:hover{
    transform: translateY(-2px);
}

/* ==========================
   RESPONSIVE
========================== */

@media (max-width: 768px){

    #contenedor_toasts{

        top: 10px;
        right: 10px;
        left: 10px;

        width: auto;
    }

    .toast{

        padding: 14px;
    }

}
```
**variables.css**
```css
:root{

    /* COLORES PRINCIPALES */
    --azul: #1d4ed8;
    --naranja: #f97316;
    --blanco: #ffffff;
    --negro: #111827;

    /* COLORES SECUNDARIOS */
    --gris-claro: #f3f4f6;
    --gris-medio: #9ca3af;
    --gris-oscuro: #374151;

    /* MENSAJES */
    --exito: #22c55e;
    --error: #ef4444;
    --advertencia: #facc15;
    --informacion: #0ea5e9;

    /* FONDOS */
    --fondo-principal: #ffffff;
    --fondo-secundario: #f9fafb;
    --fondo-panel: #ffffff;

    /* TEXTOS */
    --texto-principal: #111827;
    --texto-secundario: #6b7280;
    --texto-claro: #ffffff;

    /* SOMBRAS */
    --sombra-pequena: 0 2px 8px rgba(0, 0, 0, 0.08);

    --sombra-media: 0 8px 24px rgba(0, 0, 0, 0.12);

    --sombra-grande: 0 15px 40px rgba(0, 0, 0, 0.15);

    /* BORDES */
    --radio-pequeno: 8px;
    --radio-medio: 12px;
    --radio-grande: 20px;

    /* ESPACIADOS */
    --espaciado-xs: 0.25rem;
    --espaciado-sm: 0.5rem;
    --espaciado-md: 1rem;
    --espaciado-lg: 1.5rem;
    --espaciado-xl: 2rem;
    --espaciado-xxl: 3rem;

    /* TIPOGRAFÍA */
    --fuente-principal:
        "Segoe UI",
        Tahoma,
        Geneva,
        Verdana,
        sans-serif;

    --tamano-xs: 0.75rem;
    --tamano-sm: 0.875rem;
    --tamano-md: 1rem;
    --tamano-lg: 1.25rem;
    --tamano-xl: 1.5rem;
    --tamano-xxl: 2rem;
    --tamano-titulo: 3rem;

    /* TRANSICIONES */
    --transicion-rapida: 0.2s ease;
    --transicion-normal: 0.3s ease;
    --transicion-lenta: 0.5s ease;

    /* Z-INDEX */
    --z-toast: 9999;
    --z-modal: 9000;
    --z-menu: 8000;

    /* DIMENSIONES */
    --ancho-maximo: 1400px;
    --altura-video: 600px;
}
```
### js
**almacenamiento_local.js**
```js
"use strict";

/*
=========================================
CLAVES DE ALMACENAMIENTO
=========================================
*/

const CLAVES_STORAGE = {

    subtitulos: "subtitulos_generados",
    preferencias: "preferencias_usuario",
    posicion_video: "posicion_video",
    ultimo_video: "ultimo_video"

};

/*
=========================================
GUARDAR DATO
=========================================
*/

function guardar_dato(
    clave,
    valor
) {

    try {

        localStorage.setItem(
            clave,
            JSON.stringify(valor)
        );

        return true;

    } catch (error) {

        console.error(
            "Error al guardar datos:",
            error
        );

        return false;

    }

}

/*
=========================================
LEER DATO
=========================================
*/

function leer_dato(
    clave
) {

    try {

        const valor =
            localStorage.getItem(clave);

        if (!valor) {
            return null;
        }

        return JSON.parse(valor);

    } catch (error) {

        console.error(
            "Error al leer datos:",
            error
        );

        return null;

    }

}

/*
=========================================
ELIMINAR DATO
=========================================
*/

function eliminar_dato(
    clave
) {

    try {

        localStorage.removeItem(clave);

        return true;

    } catch (error) {

        console.error(
            "Error al eliminar dato:",
            error
        );

        return false;

    }

}

/*
=========================================
LIMPIAR TODO
=========================================
*/

function limpiar_datos() {

    try {

        Object.values(
            CLAVES_STORAGE
        ).forEach(clave => {

            localStorage.removeItem(
                clave
            );

        });

        return true;

    } catch (error) {

        console.error(
            "Error al limpiar almacenamiento:",
            error
        );

        return false;

    }

}

/*
=========================================
GUARDAR SUBTÍTULOS
=========================================
*/

function guardar_subtitulos(
    contenido
) {

    return guardar_dato(
        CLAVES_STORAGE.subtitulos,
        {
            contenido,
            fecha: new Date().toISOString()
        }
    );

}

/*
=========================================
OBTENER SUBTÍTULOS
=========================================
*/

function obtener_subtitulos() {

    return leer_dato(
        CLAVES_STORAGE.subtitulos
    );

}

/*
=========================================
GUARDAR PREFERENCIAS
=========================================
*/

function guardar_preferencias(
    preferencias
) {

    return guardar_dato(
        CLAVES_STORAGE.preferencias,
        preferencias
    );

}

/*
=========================================
OBTENER PREFERENCIAS
=========================================
*/

function obtener_preferencias() {

    return (
        leer_dato(
            CLAVES_STORAGE.preferencias
        ) || {}
    );

}

/*
=========================================
GUARDAR POSICIÓN DE VÍDEO
=========================================
*/

function guardar_posicion_video(
    segundos
) {

    return guardar_dato(
        CLAVES_STORAGE.posicion_video,
        segundos
    );

}

/*
=========================================
OBTENER POSICIÓN DE VÍDEO
=========================================
*/

function obtener_posicion_video() {

    return (
        leer_dato(
            CLAVES_STORAGE.posicion_video
        ) || 0
    );

}

/*
=========================================
GUARDAR INFORMACIÓN VÍDEO
=========================================
*/

function guardar_ultimo_video(
    informacion
) {

    return guardar_dato(
        CLAVES_STORAGE.ultimo_video,
        informacion
    );

}

/*
=========================================
OBTENER INFORMACIÓN VÍDEO
=========================================
*/

function obtener_ultimo_video() {

    return leer_dato(
        CLAVES_STORAGE.ultimo_video
    );

}

/*
=========================================
COMPROBAR DISPONIBILIDAD
=========================================
*/

function almacenamiento_disponible() {

    try {

        const prueba =
            "__prueba_storage__";

        localStorage.setItem(
            prueba,
            prueba
        );

        localStorage.removeItem(
            prueba
        );

        return true;

    } catch {

        return false;

    }

}

/*
=========================================
RESTAURAR SUBTÍTULOS
=========================================
*/

function restaurar_subtitulos() {

    const datos =
        obtener_subtitulos();

    if (!datos) {
        return;
    }

    const area_subtitulos =
        document.getElementById(
            "contenido_subtitulos"
        );

    if (!area_subtitulos) {
        return;
    }

    area_subtitulos.value =
        datos.contenido;
}

/*
=========================================
GUARDAR AUTOSAVE
=========================================
*/

function iniciar_autoguardado() {

    const area_subtitulos =
        document.getElementById(
            "contenido_subtitulos"
        );

    if (!area_subtitulos) {
        return;
    }

    area_subtitulos.addEventListener(
        "input",
        debounce(() => {

            guardar_subtitulos(
                area_subtitulos.value
            );

        }, 1000)
    );

}
```
**animaciones.js**
```js
"use strict";

/*
=========================================
ANIMACIÓN INICIAL
=========================================
*/

function animar_inicio() {

    if (typeof gsap === "undefined") {
        return;
    }

    gsap.killTweensOf("*");

    gsap.set(".cabecera", {
        clearProps: "all"
    });

    gsap.set(".zona_carga", {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        clearProps: "all"
    });

    gsap.set(".icono_carga", {
        opacity: 1,
        scale: 1,
        rotation: 0,
        clearProps: "all"
    });

    gsap.from(".cabecera", {
        y: -30,
        opacity: 0,
        duration: 0.6
    });

    gsap.from(".zona_carga", {
        y: 20,
        opacity: 0,
        duration: 0.6
    });

}

/*
=========================================
PANEL APARECER
=========================================
*/

function animar_panel(
    elemento
) {

    if (
        typeof gsap === "undefined" ||
        !elemento
    ) {
        return;
    }

    gsap.fromTo(
        elemento,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        }
    );

}

/*
=========================================
PANEL DESAPARECER
=========================================
*/

function animar_ocultar_panel(
    elemento
) {

    if (
        typeof gsap === "undefined" ||
        !elemento
    ) {
        return;
    }

    gsap.to(
        elemento,
        {
            opacity: 0,
            y: -20,
            duration: 0.3
        }
    );

}

/*
=========================================
ZONA ACTIVA DRAG & DROP
=========================================
*/

function animar_drag_activo() {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    gsap.to(
        ".zona_carga",
        {
            scale: 1.03,
            duration: 0.3
        }
    );

}

/*
=========================================
ZONA NORMAL
=========================================
*/

function animar_drag_normal() {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    gsap.to(
        ".zona_carga",
        {
            scale: 1,
            duration: 0.3
        }
    );

}

/*
=========================================
ANIMAR VIDEO CARGADO
=========================================
*/

function animar_video_cargado() {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    gsap.fromTo(
        "#reproductor_video",
        {
            opacity: 0,
            scale: 0.95
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        }
    );

}

/*
=========================================
ANIMAR INFORMACIÓN
=========================================
*/

function animar_tarjetas_info() {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    gsap.from(
        ".tarjeta_info",
        {
            y: 25,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out"
        }
    );

}

/*
=========================================
ANIMAR SUBTÍTULOS
=========================================
*/

function animar_subtitulos() {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    gsap.fromTo(
        "#contenido_subtitulos",
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6
        }
    );

}

/*
=========================================
ANIMAR TOAST
=========================================
*/

function animar_toast(
    toast
) {

    if (
        typeof gsap === "undefined" ||
        !toast
    ) {
        return;
    }

    gsap.fromTo(
        toast,
        {
            x: 400,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
        }
    );

}

/*
=========================================
SALIDA TOAST
=========================================
*/

function animar_cierre_toast(
    toast,
    callback
) {

    if (
        typeof gsap === "undefined" ||
        !toast
    ) {

        if (callback) {
            callback();
        }

        return;
    }

    gsap.to(
        toast,
        {
            x: 400,
            opacity: 0,
            duration: 0.3,
            onComplete: callback
        }
    );

}

/*
=========================================
ACTUALIZAR PROGRESO
=========================================
*/

function animar_progreso(
    porcentaje
) {

    const barra =
        document.getElementById(
            "barra_progreso"
        );

    if (
        typeof gsap === "undefined" ||
        !barra
    ) {
        return;
    }

    gsap.to(
        barra,
        {
            width: porcentaje + "%",
            duration: 0.6,
            ease: "power2.out"
        }
    );

}

/*
=========================================
LOADER WHISPER
=========================================
*/

function animar_loader_whisper() {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    gsap.to(
        ".loader_whisper",
        {
            rotation: 360,
            repeat: -1,
            duration: 1,
            ease: "linear"
        }
    );

}

/*
=========================================
TEXTO PROCESANDO
=========================================
*/

function animar_texto_procesando() {

    if (
        typeof gsap === "undefined"
    ) {
        return;
    }

    gsap.to(
        ".texto_procesando",
        {
            opacity: 0.3,
            repeat: -1,
            yoyo: true,
            duration: 0.7
        }
    );

}
```
**arrastrar_soltar.js**
```js
"use strict";

/*
=========================================
ELEMENTOS DOM
=========================================
*/

const zona_carga =
    document.getElementById(
        "zona_carga"
    );

const selector_video =
    document.getElementById(
        "selector_video"
    );

const btn_seleccionar_video =
    document.getElementById(
        "btn_seleccionar_video"
    );

/*
=========================================
INICIALIZAR
=========================================
*/

function inicializar_arrastrar_soltar() {

    if (!zona_carga) {
        return;
    }

    configurar_drag_and_drop();
    configurar_selector_archivos();

}

/*
=========================================
BOTÓN SELECCIONAR
=========================================
*/

function configurar_selector_archivos() {

    if (
        !btn_seleccionar_video ||
        !selector_video
    ) {
        return;
    }

    btn_seleccionar_video.addEventListener(
        "click",
        () => {

            selector_video.click();

        }
    );

    selector_video.addEventListener(
        "change",
        manejar_selector_archivo
    );

}

/*
=========================================
DRAG & DROP
=========================================
*/

function configurar_drag_and_drop() {

    const eventos = [
        "dragenter",
        "dragover",
        "dragleave",
        "drop"
    ];

    eventos.forEach(evento => {

        zona_carga.addEventListener(
            evento,
            cancelar_evento,
            false
        );

        document.body.addEventListener(
            evento,
            cancelar_evento,
            false
        );

    });

    zona_carga.addEventListener(
        "dragenter",
        activar_zona
    );

    zona_carga.addEventListener(
        "dragover",
        activar_zona
    );

    zona_carga.addEventListener(
        "dragleave",
        desactivar_zona
    );

    zona_carga.addEventListener(
        "drop",
        manejar_drop
    );

}

/*
=========================================
CANCELAR EVENTO
=========================================
*/

function cancelar_evento(evento) {

    evento.preventDefault();
    evento.stopPropagation();

}

/*
=========================================
ACTIVAR ZONA
=========================================
*/

function activar_zona() {

    zona_carga.classList.add(
        "activa"
    );

}

/*
=========================================
DESACTIVAR ZONA
=========================================
*/

function desactivar_zona() {

    zona_carga.classList.remove(
        "activa"
    );

}

/*
=========================================
DROP
=========================================
*/

function manejar_drop(evento) {

    desactivar_zona();

    const archivos =
        evento.dataTransfer.files;

    if (
        !archivos ||
        archivos.length === 0
    ) {
        return;
    }

    procesar_video(
        archivos[0]
    );

}

/*
=========================================
SELECTOR
=========================================
*/

function manejar_selector_archivo(
    evento
) {

    const archivo =
        evento.target.files[0];

    if (!archivo) {
        return;
    }

    procesar_video(
        archivo
    );

}

/*
=========================================
PROCESAR VÍDEO
=========================================
*/

function procesar_video(
    archivo
) {

    const validacion =
        validar_video(
            archivo
        );

    if (!validacion.valido) {

        toast_error(
            validacion.mensaje
        );

        return;
    }

    toast_video_cargado(
        archivo.name
    );

    if (
        typeof cargar_video ===
        "function"
    ) {

        cargar_video(
            archivo
        );

    }

}

/*
=========================================
UTILIDAD
=========================================
*/

function obtener_archivo_video() {

    if (
        selector_video &&
        selector_video.files.length > 0
    ) {

        return selector_video.files[0];

    }

    return null;

}
```
**exportador_subtitulos.js**
```js
"use strict";

/*
=========================================
ELEMENTOS
=========================================
*/

const btn_descargar_srt =
    document.getElementById(
        "btn_descargar_srt"
    );

const btn_descargar_vtt =
    document.getElementById(
        "btn_descargar_vtt"
    );

const btn_copiar_subtitulos =
    document.getElementById(
        "btn_copiar_subtitulos"
    );

/*
=========================================
INICIALIZAR
=========================================
*/

function inicializar_exportador() {

    configurar_boton_srt();

    configurar_boton_vtt();

    configurar_boton_copiar();

}

/*
=========================================
BOTÓN SRT
=========================================
*/

function configurar_boton_srt() {

    if (!btn_descargar_srt) {
        return;
    }

    btn_descargar_srt.addEventListener(
        "click",
        exportar_srt
    );

}

/*
=========================================
BOTÓN VTT
=========================================
*/

function configurar_boton_vtt() {

    if (!btn_descargar_vtt) {
        return;
    }

    btn_descargar_vtt.addEventListener(
        "click",
        exportar_vtt
    );

}

/*
=========================================
BOTÓN COPIAR
=========================================
*/

function configurar_boton_copiar() {

    if (!btn_copiar_subtitulos) {
        return;
    }

    btn_copiar_subtitulos.addEventListener(
        "click",
        copiar_subtitulos_portapapeles
    );

}

/*
=========================================
EXPORTAR SRT
=========================================
*/

function exportar_srt() {

    try {

        const contenido =
            generar_srt();

        if (!contenido.trim()) {

            toast_advertencia(
                "No existen subtítulos para exportar."
            );

            return;

        }

        descargar_archivo(
            contenido,
            "subtitulos.srt",
            "text/plain"
        );

        toast_exportacion_srt();

    } catch (error) {

        console.error(error);

        toast_error(
            "No fue posible exportar el archivo SRT."
        );

    }

}

/*
=========================================
EXPORTAR VTT
=========================================
*/

function exportar_vtt() {

    try {

        const contenido =
            generar_vtt();

        if (!contenido.trim()) {

            toast_advertencia(
                "No existen subtítulos para exportar."
            );

            return;

        }

        descargar_archivo(
            contenido,
            "subtitulos.vtt",
            "text/vtt"
        );

        toast_exportacion_vtt();

    } catch (error) {

        console.error(error);

        toast_error(
            "No fue posible exportar el archivo VTT."
        );

    }

}

/*
=========================================
COPIAR SUBTÍTULOS
=========================================
*/

async function copiar_subtitulos_portapapeles() {

    try {

        const texto =
            obtener_subtitulos();

        if (!texto.trim()) {

            toast_advertencia(
                "No existen subtítulos para copiar."
            );

            return;

        }

        const copiado =
            await copiar_texto(
                texto
            );

        if (copiado) {

            toast_copia_portapapeles();

        } else {

            toast_error(
                "No fue posible copiar el contenido."
            );

        }

    } catch (error) {

        console.error(error);

        toast_error(
            "Error al copiar subtítulos."
        );

    }

}

/*
=========================================
EXPORTAR JSON (FUTURO)
=========================================
*/

function exportar_json() {

    const segmentos =
        obtener_segmentos();

    const contenido =
        JSON.stringify(
            segmentos,
            null,
            2
        );

    descargar_archivo(
        contenido,
        "subtitulos.json",
        "application/json"
    );

}

/*
=========================================
EXPORTAR TXT (FUTURO)
=========================================
*/

function exportar_txt() {

    const texto =
        obtener_subtitulos();

    descargar_archivo(
        texto,
        "subtitulos.txt",
        "text/plain"
    );

}

/*
=========================================
GENERAR NOMBRE
=========================================
*/

function generar_nombre_archivo(
    extension
) {

    const fecha =
        new Date()
        .toISOString()
        .slice(0, 19)
        .replaceAll(":", "-");

    return (
        "subtitulos_" +
        fecha +
        "." +
        extension
    );

}
```
**gestor_subtitulos.js**
```js
"use strict";

/*
=========================================
ELEMENTOS
=========================================
*/

const contenido_subtitulos =
    document.getElementById(
        "contenido_subtitulos"
    );

const pista_subtitulos =
    document.getElementById(
        "pista_subtitulos"
    );

/*
=========================================
VARIABLES
=========================================
*/

let subtitulos_actuales = "";

let subtitulos_srt = "";

let subtitulos_vtt = "";

let url_vtt_actual = null;

/*
=========================================
GENERAR SUBTÍTULOS
=========================================
*/

async function generar_subtitulos(
    archivo_video
) {

    try {

        actualizar_estado(
            "Enviando vídeo a Whisper..."
        );

        actualizar_progreso(50);

        const datos =
            await enviar_video_a_whisper(
                archivo_video
            );

        subtitulos_actuales =
            datos.texto;

        subtitulos_srt =
            datos.srt;

        subtitulos_vtt =
            datos.vtt;

        mostrar_subtitulos(
            subtitulos_actuales
        );

        cargar_subtitulos_video(
            subtitulos_vtt
        );
        if (
            typeof activar_boton_subtitulos ===
            "function"
           ) {

                activar_boton_subtitulos();

            }

        guardar_subtitulos(
            subtitulos_actuales
        );

        mostrar_panel(
            "panel_subtitulos"
        );

        actualizar_progreso(100);

        actualizar_estado(
            "Subtítulos generados correctamente."
        );

        toast_subtitulos_generados();

        if (
            typeof animar_subtitulos ===
            "function"
        ) {

            animar_subtitulos();

        }

    }

    catch (error) {

        console.error(error);

        actualizar_estado(
            "Error generando subtítulos."
        );

        toast_error(
            error.message
        );

    }

}

/*
=========================================
PETICIÓN AL BACKEND
=========================================
*/

async function enviar_video_a_whisper(
    archivo_video
) {

    const formData =
        new FormData();

    formData.append(
        "video",
        archivo_video
    );

    actualizar_estado(
        "Whisper está transcribiendo..."
    );

    actualizar_progreso(75);

    const respuesta =
        await fetch(
            "http://localhost:3000/transcribir",
            {
                method: "POST",
                body: formData
            }
        );

    const datos =
        await respuesta.json();

    if (!respuesta.ok) {

        throw new Error(
            datos.error ||
            "Error durante la transcripción."
        );

    }

    return datos;

}

/*
=========================================
MOSTRAR TEXTO
=========================================
*/

function mostrar_subtitulos(
    texto
) {

    if (!contenido_subtitulos) {
        return;
    }

    contenido_subtitulos.value =
        texto;

}

/*
=========================================
CARGAR VTT EN EL VIDEO
=========================================
*/

function cargar_subtitulos_video(
    contenido_vtt
) {

    if (
        !pista_subtitulos
    ) {

        return;

    }

    if (
        url_vtt_actual
    ) {

        URL.revokeObjectURL(
            url_vtt_actual
        );

    }

    const blob =
        new Blob(
            [contenido_vtt],
            {
                type: "text/vtt"
            }
        );

    url_vtt_actual =
        URL.createObjectURL(
            blob
        );

    pista_subtitulos.src =
        url_vtt_actual;

    pista_subtitulos.default =
        true;

    setTimeout(() => {

        const video =
            document.getElementById(
                "reproductor_video"
            );

        if (
            video &&
            video.textTracks &&
            video.textTracks.length > 0
        ) {

            video.textTracks[0].mode =
                "showing";

        }

    }, 500);

}

/*
=========================================
OBTENER TEXTO
=========================================
*/

function obtener_subtitulos() {

    if (!contenido_subtitulos) {

        return "";

    }

    return contenido_subtitulos.value;

}

/*
=========================================
OBTENER SRT
=========================================
*/

function generar_srt() {

    return subtitulos_srt;

}

/*
=========================================
OBTENER VTT
=========================================
*/

function generar_vtt() {

    return subtitulos_vtt;

}

/*
=========================================
OBTENER SEGMENTOS
=========================================
*/

function obtener_segmentos() {

    return [];

}

/*
=========================================
LIMPIAR
=========================================
*/

function limpiar_subtitulos() {

    subtitulos_actuales = "";

    subtitulos_srt = "";

    subtitulos_vtt = "";

    if (
        contenido_subtitulos
    ) {

        contenido_subtitulos.value =
            "";

    }

    if (
        pista_subtitulos
    ) {

        pista_subtitulos.src = "";

    }

    if (
        url_vtt_actual
    ) {

        URL.revokeObjectURL(
            url_vtt_actual
        );

        url_vtt_actual = null;

    }

}

/*
=========================================
DESTRUCCIÓN
=========================================
*/

window.addEventListener(
    "beforeunload",
    () => {

        if (
            url_vtt_actual
        ) {

            URL.revokeObjectURL(
                url_vtt_actual
            );

        }

    }
);
```
**gestor_toasts.js**
```js
"use strict";

/*
=========================================
CONTENEDOR
=========================================
*/

const contenedor_toasts =
    document.getElementById(
        "contenedor_toasts"
    );

/*
=========================================
MOSTRAR TOAST
=========================================
*/

function mostrar_toast(
    tipo = "informacion",
    titulo = "Información",
    mensaje = ""
) {

    if (!contenedor_toasts) {
        return;
    }

    const iconos = {

        exito: "✅",
        error: "❌",
        advertencia: "⚠️",
        informacion: "ℹ️"

    };

    const toast =
        document.createElement("div");

    toast.className =
        `toast toast_${tipo} toast_entrada`;

    toast.innerHTML = `
        <div class="toast_icono">
            ${iconos[tipo] || "ℹ️"}
        </div>

        <div class="toast_contenido">

            <div class="toast_titulo">
                ${escapar_html(titulo)}
            </div>

            <div class="toast_mensaje">
                ${escapar_html(mensaje)}
            </div>

        </div>

        <button
            class="toast_cerrar"
            aria-label="Cerrar notificación"
        >
            ✕
        </button>

        <div class="toast_progreso"></div>
    `;

    contenedor_toasts.appendChild(
        toast
    );

    const boton_cerrar =
        toast.querySelector(
            ".toast_cerrar"
        );

    boton_cerrar.addEventListener(
        "click",
        () => eliminar_toast(toast)
    );

    setTimeout(
        () => eliminar_toast(toast),
        5000
    );
}

/*
=========================================
ELIMINAR TOAST
=========================================
*/

function eliminar_toast(
    toast
) {

    if (!toast) {
        return;
    }

    toast.classList.remove(
        "toast_entrada"
    );

    toast.classList.add(
        "toast_salida"
    );

    setTimeout(() => {

        if (
            toast &&
            toast.parentNode
        ) {

            toast.remove();

        }

    }, 250);

}

/*
=========================================
TOAST ÉXITO
=========================================
*/

function toast_exito(
    mensaje,
    titulo = "Operación completada"
) {

    mostrar_toast(
        "exito",
        titulo,
        mensaje
    );

}

/*
=========================================
TOAST ERROR
=========================================
*/

function toast_error(
    mensaje,
    titulo = "Ha ocurrido un error"
) {

    mostrar_toast(
        "error",
        titulo,
        mensaje
    );

}

/*
=========================================
TOAST ADVERTENCIA
=========================================
*/

function toast_advertencia(
    mensaje,
    titulo = "Advertencia"
) {

    mostrar_toast(
        "advertencia",
        titulo,
        mensaje
    );

}

/*
=========================================
TOAST INFORMACIÓN
=========================================
*/

function toast_informacion(
    mensaje,
    titulo = "Información"
) {

    mostrar_toast(
        "informacion",
        titulo,
        mensaje
    );

}

/*
=========================================
TOASTS ESPECÍFICOS
=========================================
*/

function toast_video_cargado(
    nombre_video
) {

    toast_exito(
        `Vídeo cargado correctamente: ${nombre_video}`,
        "Vídeo preparado"
    );

}

function toast_subtitulos_generados() {

    toast_exito(
        "Los subtítulos se han generado correctamente.",
        "Proceso finalizado"
    );

}

function toast_exportacion_srt() {

    toast_exito(
        "Archivo SRT descargado correctamente.",
        "Exportación SRT"
    );

}

function toast_exportacion_vtt() {

    toast_exito(
        "Archivo VTT descargado correctamente.",
        "Exportación VTT"
    );

}

function toast_copia_portapapeles() {

    toast_exito(
        "Texto copiado al portapapeles.",
        "Copia realizada"
    );

}

function toast_inicio_procesamiento() {

    toast_informacion(
        "Whisper está procesando el vídeo.",
        "Generando subtítulos"
    );

}

function toast_archivo_invalido() {

    toast_error(
        "Selecciona un archivo de vídeo válido."
    );

}

function toast_error_whisper() {

    toast_error(
        "No se han podido generar los subtítulos."
    );

}
```
**gestor_video.js**
```js
"use strict";

/*
=========================================
ELEMENTOS
=========================================
*/

const reproductor_video =
    document.getElementById(
        "reproductor_video"
    );

const video_metadatos =
    document.getElementById(
        "video_metadatos"
    );

const btn_reproducir =
    document.getElementById(
        "btn_reproducir"
    );

const btn_pausar =
    document.getElementById(
        "btn_pausar"
    );

const btn_detener =
    document.getElementById(
        "btn_detener"
    );

const btn_volumen =
    document.getElementById(
        "btn_volumen"
    );

const btn_subtitulos =
    document.getElementById(
        "btn_subtitulos"
    );

const btn_cine =
    document.getElementById(
        "btn_cine"
    );

const btn_pantalla_completa =
    document.getElementById(
        "btn_pantalla_completa"
    );

const control_volumen =
    document.getElementById(
        "control_volumen"
    );

const barra_reproduccion =
    document.getElementById(
        "barra_reproduccion"
    );

const barra_progreso_video =
    document.getElementById(
        "barra_progreso_video"
    );

const tiempo_actual =
    document.getElementById(
        "tiempo_actual"
    );

const tiempo_total =
    document.getElementById(
        "tiempo_total"
    );

/*
=========================================
VARIABLES
=========================================
*/

let archivo_video_actual = null;
let url_video_actual = null;

/*
=========================================
CARGAR VIDEO
=========================================
*/

function cargar_video(
    archivo
) {

    try {

        archivo_video_actual =
            archivo;

        liberar_video_anterior();

        url_video_actual =
            URL.createObjectURL(
                archivo
            );

        reproductor_video.src =
            url_video_actual;

        video_metadatos.src =
            url_video_actual;

        mostrar_panel(
            "panel_informacion"
        );

        mostrar_panel(
            "seccion_reproductor"
        );

        mostrar_panel(
            "panel_procesamiento"
        );

        registrar_eventos_video();

        if (
            typeof animar_video_cargado ===
            "function"
        ) {

            animar_video_cargado();

        }

    }

    catch (error) {

        console.error(error);

        toast_error(
            "No se pudo cargar el vídeo."
        );

    }

}

/*
=========================================
EVENTOS VIDEO
=========================================
*/

function registrar_eventos_video() {

    reproductor_video.onloadedmetadata =
        cargar_metadatos;

    reproductor_video.ontimeupdate =
        actualizar_interfaz_reproduccion;

    reproductor_video.onended =
        manejar_fin_video;

    reproductor_video.onerror =
        manejar_error_video;

}

/*
=========================================
METADATOS
=========================================
*/

function cargar_metadatos() {

    document.getElementById(
        "nombre_video"
    ).textContent =
        archivo_video_actual.name;

    document.getElementById(
        "formato_video"
    ).textContent =
        obtener_extension(
            archivo_video_actual.name
        ).toUpperCase();

    document.getElementById(
        "tamano_video"
    ).textContent =
        formatear_tamano(
            archivo_video_actual.size
        );

    document.getElementById(
        "duracion_video"
    ).textContent =
        formatear_tiempo(
            reproductor_video.duration
        );

    document.getElementById(
        "resolucion_video"
    ).textContent =
        `${reproductor_video.videoWidth} x ${reproductor_video.videoHeight}`;

    tiempo_total.textContent =
        formatear_tiempo(
            reproductor_video.duration
        );

    guardar_ultimo_video({
        nombre: archivo_video_actual.name,
        tamano: archivo_video_actual.size,
        duracion: reproductor_video.duration
    });

    actualizar_progreso(25);

    actualizar_estado(
        "Vídeo cargado correctamente."
    );

    iniciar_generacion_subtitulos(
        archivo_video_actual
    );

}

/*
=========================================
PLAY
=========================================
*/

function reproducir_video() {

    reproductor_video.play();

}

/*
=========================================
PAUSE
=========================================
*/

function pausar_video() {

    reproductor_video.pause();

}

/*
=========================================
STOP
=========================================
*/

function detener_video() {

    reproductor_video.pause();

    reproductor_video.currentTime = 0;

}

/*
=========================================
BOTONES
=========================================
*/

btn_reproducir?.addEventListener(
    "click",
    reproducir_video
);

btn_pausar?.addEventListener(
    "click",
    pausar_video
);

btn_detener?.addEventListener(
    "click",
    detener_video
);

/*
=========================================
VOLUMEN
=========================================
*/

control_volumen?.addEventListener(
    "input",
    evento => {

        reproductor_video.volume =
            evento.target.value;

    }
);

btn_volumen?.addEventListener(
    "click",
    () => {

        reproductor_video.muted =
            !reproductor_video.muted;

        btn_volumen.textContent =
            reproductor_video.muted
                ? "🔇"
                : "🔊";

    }
);

/*
=========================================
PROGRESO
=========================================
*/

function actualizar_interfaz_reproduccion() {

    const actual =
        reproductor_video.currentTime;

    const total =
        reproductor_video.duration;

    if (!total) {
        return;
    }

    const porcentaje =
        (actual / total) * 100;

    barra_progreso_video.style.width =
        porcentaje + "%";

    tiempo_actual.textContent =
        formatear_tiempo(actual);

    guardar_posicion_video(
        actual
    );

}

/*
=========================================
CLICK BARRA
=========================================
*/

barra_reproduccion?.addEventListener(
    "click",
    evento => {

        const rect =
            barra_reproduccion.getBoundingClientRect();

        const porcentaje =
            (evento.clientX - rect.left) /
            rect.width;

        reproductor_video.currentTime =
            porcentaje *
            reproductor_video.duration;

    }
);

/*
=========================================
SUBTÍTULOS
=========================================
*/

btn_subtitulos?.addEventListener(
    "click",
    alternar_subtitulos
);

function alternar_subtitulos() {

    const pistas =
        reproductor_video.textTracks;

    if (!pistas.length) {

        toast_advertencia(
            "Todavía no hay subtítulos."
        );

        return;

    }

    const pista =
        pistas[0];

    if (
        pista.mode === "showing"
    ) {

        pista.mode = "hidden";

        btn_subtitulos.classList.remove(
            "activo"
        );

        toast_informacion(
            "Subtítulos desactivados."
        );

    }

    else {

        pista.mode = "showing";

        btn_subtitulos.classList.add(
            "activo"
        );

        toast_informacion(
            "Subtítulos activados."
        );

    }

}

/*
=========================================
SUBTÍTULOS DISPONIBLES
=========================================
*/

function activar_boton_subtitulos() {

    btn_subtitulos?.classList.add(
        "activo"
    );

}

/*
=========================================
MODO CINE
=========================================
*/

btn_cine?.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "modo_cine"
        );

        btn_cine.classList.toggle(
            "activo"
        );

    }
);

/*
=========================================
FULLSCREEN
=========================================
*/

btn_pantalla_completa?.addEventListener(
    "click",
    pantalla_completa
);

function pantalla_completa() {

    const contenedor =
        document.querySelector(
            ".contenedor_reproductor"
        );

    if (
        !document.fullscreenElement
    ) {

        contenedor.requestFullscreen();

    }

    else {

        document.exitFullscreen();

    }

}

/*
=========================================
FIN VIDEO
=========================================
*/

function manejar_fin_video() {

    barra_progreso_video.style.width =
        "100%";

}

/*
=========================================
ERROR VIDEO
=========================================
*/

function manejar_error_video() {

    toast_error(
        "Error al reproducir el vídeo."
    );

}

/*
=========================================
GENERACIÓN SUBTÍTULOS
=========================================
*/

function iniciar_generacion_subtitulos(
    archivo
) {

    actualizar_progreso(40);

    actualizar_estado(
        "Preparando transcripción..."
    );

    toast_inicio_procesamiento();

    if (
        typeof generar_subtitulos ===
        "function"
    ) {

        generar_subtitulos(
            archivo
        );

    }

}

/*
=========================================
POSICIÓN GUARDADA
=========================================
*/

function restaurar_posicion_video() {

    const posicion =
        obtener_posicion_video();

    if (
        posicion > 0
    ) {

        reproductor_video.currentTime =
            posicion;

    }

}

/*
=========================================
VIDEO ACTUAL
=========================================
*/

function obtener_video_actual() {

    return archivo_video_actual;

}

/*
=========================================
LIBERAR RECURSOS
=========================================
*/

function liberar_video_anterior() {

    if (
        url_video_actual
    ) {

        URL.revokeObjectURL(
            url_video_actual
        );

    }

}

/*
=========================================
CIERRE
=========================================
*/

window.addEventListener(
    "beforeunload",
    liberar_video_anterior
);
```
**principal.js**
```js
"use strict";

/*
=========================================
INICIALIZACIÓN GENERAL
=========================================
*/

document.addEventListener(
    "DOMContentLoaded",
    inicializar_aplicacion
);

/*
=========================================
APLICACIÓN
=========================================
*/

function inicializar_aplicacion() {

    console.log(
        "Subtitulador Inteligente iniciado."
    );

    comprobar_dependencias();

    inicializar_interfaces();

    inicializar_eventos();

    restaurar_datos();

    lanzar_animaciones_inicio();

    setTimeout(() => {

    const zona =
        document.getElementById(
            "zona_carga"
        );

        zona.style.opacity = "1";

    }, 500);

}

/*
=========================================
COMPROBACIONES
=========================================
*/

function comprobar_dependencias() {

    if (
        !almacenamiento_disponible()
    ) {

        toast_advertencia(
            "El navegador no permite almacenamiento local."
        );

    }

    if (
        typeof gsap === "undefined"
    ) {

        console.warn(
            "GSAP no está disponible."
        );

    } else {

        console.log(
            "GSAP cargado correctamente."
        );

    }

}

/*
=========================================
INTERFAZ
=========================================
*/

function inicializar_interfaces() {

    ocultar_panel(
        "panel_informacion"
    );

    ocultar_panel(
        "seccion_reproductor"
    );

    ocultar_panel(
        "panel_procesamiento"
    );

    ocultar_panel(
        "panel_subtitulos"
    );

}

/*
=========================================
EVENTOS
=========================================
*/

function inicializar_eventos() {

    inicializar_arrastrar_soltar();

    inicializar_exportador();

    registrar_eventos_globales();

}

/*
=========================================
EVENTOS GLOBALES
=========================================
*/

function registrar_eventos_globales() {

    window.addEventListener(
        "online",
        manejar_conexion_recuperada
    );

    window.addEventListener(
        "offline",
        manejar_sin_conexion
    );

}

/*
=========================================
ONLINE
=========================================
*/

function manejar_conexion_recuperada() {

    toast_exito(
        "Conexión restaurada."
    );

}

/*
=========================================
OFFLINE
=========================================
*/

function manejar_sin_conexion() {

    toast_advertencia(
        "No hay conexión a Internet."
    );

}

/*
=========================================
RECUPERACIÓN DATOS
=========================================
*/

function restaurar_datos() {

    restaurar_subtitulos();

}

/*
=========================================
ANIMACIONES
=========================================
*/

function lanzar_animaciones_inicio() {

    console.log("Iniciando animaciones");

    if (
        typeof animar_inicio ===
        "function"
    ) {

        animar_inicio();

    }

}


/*
=========================================
UTILIDADES VISUALES
=========================================
*/

function mostrar_panel_animado(
    id_panel
) {

    const panel =
        document.getElementById(
            id_panel
        );

    if (!panel) {
        return;
    }

    panel.classList.remove(
        "panel_oculto"
    );

    if (
        typeof animar_panel ===
        "function"
    ) {

        animar_panel(panel);

    }

}

/*
=========================================
OCULTAR PANEL ANIMADO
=========================================
*/

function ocultar_panel_animado(
    id_panel
) {

    const panel =
        document.getElementById(
            id_panel
        );

    if (!panel) {
        return;
    }

    if (
        typeof animar_ocultar_panel ===
        "function"
    ) {

        animar_ocultar_panel(
            panel
        );
    }

    setTimeout(() => {

        panel.classList.add(
            "panel_oculto"
        );

    }, 300);

}

/*
=========================================
ESTADO GLOBAL
=========================================
*/

function reiniciar_aplicacion() {

    limpiar_subtitulos();

    actualizar_progreso(0);

    actualizar_estado(
        "Esperando vídeo..."
    );

    ocultar_panel(
        "panel_informacion"
    );

    ocultar_panel(
        "seccion_reproductor"
    );

    ocultar_panel(
        "panel_subtitulos"
    );

    toast_informacion(
        "Aplicación reiniciada."
    );

}

/*
=========================================
DEBUG
=========================================
*/

function depurar_aplicacion() {

    console.group(
        "Depuración"
    );

    console.log(
        "Vídeo actual:",
        obtener_video_actual?.()
    );

    console.log(
        "Subtítulos:",
        obtener_subtitulos?.()
    );

    console.log(
        "Segmentos:",
        obtener_segmentos?.()
    );

    console.groupEnd();

}
```
**utilidades.js**
```js
"use strict";

/*
=========================================
FORMATEAR TIEMPO
=========================================
*/

function formatear_tiempo(segundos) {

    if (!Number.isFinite(segundos)) {
        return "00:00";
    }

    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundos_restantes = Math.floor(segundos % 60);

    if (horas > 0) {
        return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos_restantes).padStart(2, "0")}`;
    }

    return `${String(minutos).padStart(2, "0")}:${String(segundos_restantes).padStart(2, "0")}`;
}

/*
=========================================
FORMATEAR TAMAÑO
=========================================
*/

function formatear_tamano(bytes) {

    if (!bytes || bytes <= 0) {
        return "0 Bytes";
    }

    const unidades = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB"
    ];

    const indice = Math.floor(
        Math.log(bytes) / Math.log(1024)
    );

    return (
        (bytes / Math.pow(1024, indice)).toFixed(2) +
        " " +
        unidades[indice]
    );
}

/*
=========================================
OBTENER EXTENSIÓN
=========================================
*/

function obtener_extension(nombre_archivo) {

    const partes = nombre_archivo.split(".");

    if (partes.length < 2) {
        return "";
    }

    return partes.pop().toLowerCase();
}

/*
=========================================
VALIDAR VÍDEO
=========================================
*/

function validar_video(archivo) {

    if (!archivo) {

        return {
            valido: false,
            mensaje: "No se ha seleccionado ningún archivo."
        };

    }

    if (!archivo.type.startsWith("video/")) {

        return {
            valido: false,
            mensaje: "El archivo seleccionado no es un vídeo."
        };

    }

    const tamano_maximo = 2 * 1024 * 1024 * 1024;

    if (archivo.size > tamano_maximo) {

        return {
            valido: false,
            mensaje: "El vídeo supera el límite permitido (2 GB)."
        };

    }

    return {
        valido: true,
        mensaje: "Archivo válido."
    };
}

/*
=========================================
CREAR ID ÚNICO
=========================================
*/

function generar_id() {

    return (
        Date.now().toString(36) +
        Math.random().toString(36).substring(2, 9)
    );
}

/*
=========================================
CREAR ELEMENTO HTML
=========================================
*/

function crear_elemento(
    etiqueta,
    clases = [],
    contenido = ""
) {

    const elemento = document.createElement(etiqueta);

    if (clases.length > 0) {
        elemento.classList.add(...clases);
    }

    if (contenido) {
        elemento.innerHTML = contenido;
    }

    return elemento;
}

/*
=========================================
DESCARGAR ARCHIVO
=========================================
*/

function descargar_archivo(
    contenido,
    nombre_archivo,
    tipo_mime
) {

    const blob = new Blob(
        [contenido],
        {
            type: tipo_mime
        }
    );

    const url = URL.createObjectURL(blob);

    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = nombre_archivo;

    document.body.appendChild(enlace);

    enlace.click();

    enlace.remove();

    URL.revokeObjectURL(url);
}

/*
=========================================
COPIAR AL PORTAPAPELES
=========================================
*/

async function copiar_texto(texto) {

    try {

        await navigator.clipboard.writeText(texto);

        return true;

    } catch (error) {

        console.error(
            "Error al copiar:",
            error
        );

        return false;
    }

}

/*
=========================================
MOSTRAR PANEL
=========================================
*/

function mostrar_panel(id_panel) {

    const panel = document.getElementById(id_panel);

    if (!panel) {
        return;
    }

    panel.classList.remove("panel_oculto");
}

/*
=========================================
OCULTAR PANEL
=========================================
*/

function ocultar_panel(id_panel) {

    const panel = document.getElementById(id_panel);

    if (!panel) {
        return;
    }

    panel.classList.add("panel_oculto");
}

/*
=========================================
ACTUALIZAR BARRA DE PROGRESO
=========================================
*/

function actualizar_progreso(
    porcentaje
) {

    const barra =
        document.getElementById(
            "barra_progreso"
        );

    if (!barra) {
        return;
    }

    const valor = Math.max(
        0,
        Math.min(
            100,
            porcentaje
        )
    );

    barra.style.width =
        `${valor}%`;
}

/*
=========================================
ACTUALIZAR TEXTO ESTADO
=========================================
*/

function actualizar_estado(
    mensaje
) {

    const texto_estado =
        document.getElementById(
            "texto_estado"
        );

    if (!texto_estado) {
        return;
    }

    texto_estado.textContent =
        mensaje;
}

/*
=========================================
DEBOUNCE
=========================================
*/

function debounce(
    funcion,
    retraso = 300
) {

    let temporizador;

    return (...argumentos) => {

        clearTimeout(
            temporizador
        );

        temporizador = setTimeout(
            () => funcion(...argumentos),
            retraso
        );

    };

}

/*
=========================================
ESCAPAR HTML
=========================================
*/

function escapar_html(texto) {

    const div =
        document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;
}
```
## 003-Resultado de Aprendizaje

# A- Se han analizado entornos de desarrollo multimedia

Para el desarrollo del proyecto se analizaron diferentes tecnologías orientadas al tratamiento de contenidos multimedia. Finalmente se seleccionó una arquitectura basada en tecnologías web utilizando HTML5, CSS3 y JavaScript para la interfaz de usuario, Node.js y Express para el servidor, Whisper para el reconocimiento de voz y FFmpeg para el procesamiento multimedia.

La elección de estas herramientas se realizó teniendo en cuenta la necesidad de capturar, procesar, reproducir y convertir contenidos multimedia de forma eficiente.

---

# B- Se han reconocido las clases que permiten la captura, procesamiento y almacenamiento de datos multimedia

La aplicación utiliza diferentes componentes destinados a la captura y tratamiento de información multimedia.

Para la captura de vídeos se emplean:

- Input File de HTML5.
- API Drag & Drop.

Para el procesamiento multimedia se utilizan:

- HTMLVideoElement.
- FFmpeg.
- Whisper.

Para el almacenamiento y persistencia se utilizan:

- localStorage.
- Sistema de archivos gestionado mediante Node.js.
- Carpetas temporales para procesamiento de vídeos.

Estas tecnologías permiten capturar vídeos proporcionados por el usuario, analizarlos y procesarlos posteriormente.

---

# C- Se han utilizado clases para la conversión de datos multimedia de un formato a otro

La aplicación realiza conversiones automáticas a partir del contenido multimedia cargado.

Proceso realizado:

Vídeo MP4
↓
Procesamiento mediante Whisper
↓
Texto transcrito

Texto transcrito
↓
Conversión a formato SRT

Texto transcrito
↓
Conversión a formato VTT

La aplicación permite además exportar los subtítulos generados en diferentes formatos compatibles con distintos reproductores multimedia.

---

# D- Se han utilizado clases para procesar datos multimedia

El núcleo principal del proyecto consiste precisamente en el procesamiento multimedia.

Cuando el usuario selecciona un vídeo:

1. El vídeo es enviado al servidor.
2. Whisper procesa el contenido de audio.
3. Se realiza el reconocimiento automático del habla.
4. Se genera la transcripción.
5. Se crean los archivos TXT, SRT y VTT.
6. Los resultados son enviados nuevamente al navegador.

Por tanto, la aplicación realiza procesamiento real sobre contenido multimedia utilizando herramientas especializadas.

---

# E- Se han utilizado clases para el control de eventos, tipos de media y excepciones, entre otros

Durante el desarrollo se han implementado numerosos eventos de programación.

Eventos utilizados:

- click
- input
- dragenter
- dragleave
- dragover
- drop
- loadedmetadata
- timeupdate
- play
- pause
- ended
- error

También se ha realizado gestión de excepciones mediante:

- try/catch en frontend.
- try/catch en backend.
- Validación de archivos.
- Control de errores del servidor.
- Gestión de errores de transcripción.

Además, la aplicación es capaz de gestionar distintos formatos multimedia de vídeo.

---

# F- Se han utilizado clases para la creación y control de animaciones

La aplicación incorpora animaciones mediante la librería GSAP.

Entre las animaciones desarrolladas destacan:

- Aparición progresiva de la interfaz.
- Transiciones entre paneles.
- Animaciones del reproductor.
- Aparición de subtítulos.
- Animaciones de notificaciones Toast.
- Efectos visuales de interacción.

Estas animaciones mejoran la experiencia de usuario y permiten cumplir los requisitos de diseño multimedia.

---

# G- Se han utilizado clases para reproducir contenidos multimedia

La aplicación incorpora un reproductor multimedia personalizado basado en HTMLVideoElement.

Funcionalidades implementadas:

- Reproducción de vídeo.
- Pausa de vídeo.
- Detención de vídeo.
- Barra de progreso personalizada.
- Control de volumen.
- Pantalla completa.
- Modo cine.
- Activación y desactivación de subtítulos.
- Visualización sincronizada mediante WebVTT.

Estas funcionalidades permiten gestionar completamente la reproducción de contenidos multimedia.

---

# H- Se han depurado y documentado los programas desarrollados

Durante el desarrollo se realizaron diversas tareas de depuración:

- Corrección de errores JavaScript.
- Corrección de errores CSS.
- Corrección de la integración entre frontend y backend.
- Configuración de Whisper.
- Configuración de FFmpeg.
- Resolución de problemas relacionados con Node.js y rutas de sistema.

Además, se ha elaborado documentación técnica y de usuario:

- manual_usuario.md
- manual_instalacion.md

La aplicación también presenta una estructura modular organizada en carpetas separadas para CSS, JavaScript, backend y documentación, facilitando el mantenimiento y futuras ampliaciones.