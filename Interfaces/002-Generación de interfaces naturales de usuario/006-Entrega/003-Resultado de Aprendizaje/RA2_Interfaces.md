# Reporte de proyecto

## Estructura del proyecto

```
C:\xampp\htdocs\dam2\Interfaces\002-Generación de interfaces naturales de usuario\006-Entrega
├── 001-Ejercicios
│   ├── 001-Herramientas para el aprendizaje automático
│   │   ├── 000-Introducción.md
│   │   ├── 001-chabotollama.html
│   │   └── ollama.php
│   ├── 002-Interfaces naturales
│   │   ├── 000-Introducción.md
│   │   ├── 001-Resumen.md
│   │   ├── 002-andrei-ui-modal-drawer
│   │   │   ├── README.md
│   │   │   ├── css
│   │   │   │   └── estilo.css
│   │   │   ├── data
│   │   │   │   ├── clientes.json
│   │   │   │   ├── datos.json
│   │   │   │   ├── entidades.json
│   │   │   │   ├── menu.json
│   │   │   │   └── productos.json
│   │   │   ├── formularios.html
│   │   │   ├── index.html
│   │   │   ├── js
│   │   │   │   ├── componentes.js
│   │   │   │   └── demo-ui.js
│   │   │   ├── login.html
│   │   │   ├── templates
│   │   │   │   ├── article.html
│   │   │   │   ├── celda.html
│   │   │   │   ├── fila.html
│   │   │   │   ├── formulario-ui.html
│   │   │   │   ├── formulario.html
│   │   │   │   ├── nav.html
│   │   │   │   └── toast.html
│   │   │   └── toasts.html
│   │   ├── 003-con chatgpt
│   │   │   ├── README.md
│   │   │   ├── css
│   │   │   │   └── estilo.css
│   │   │   ├── data
│   │   │   │   ├── clientes.json
│   │   │   │   ├── datos.json
│   │   │   │   ├── entidades.json
│   │   │   │   ├── menu.json
│   │   │   │   └── productos.json
│   │   │   ├── formularios.html
│   │   │   ├── index.html
│   │   │   ├── js
│   │   │   │   ├── componentes.js
│   │   │   │   └── demo-ui.js
│   │   │   ├── login.html
│   │   │   ├── ollama.php
│   │   │   ├── templates
│   │   │   │   ├── article.html
│   │   │   │   ├── celda.html
│   │   │   │   ├── fila.html
│   │   │   │   ├── formulario-ui.html
│   │   │   │   ├── formulario.html
│   │   │   │   ├── nav.html
│   │   │   │   └── toast.html
│   │   │   └── toasts.html
│   │   ├── 004-ajustes
│   │   │   ├── README.md
│   │   │   ├── css
│   │   │   │   └── estilo.css
│   │   │   ├── data
│   │   │   │   ├── clientes.json
│   │   │   │   ├── datos.json
│   │   │   │   ├── entidades.json
│   │   │   │   ├── menu.json
│   │   │   │   └── productos.json
│   │   │   ├── formularios.html
│   │   │   ├── index.html
│   │   │   ├── js
│   │   │   │   ├── componentes.js
│   │   │   │   └── demo-ui.js
│   │   │   ├── login.html
│   │   │   ├── ollama.php
│   │   │   ├── templates
│   │   │   │   ├── article.html
│   │   │   │   ├── celda.html
│   │   │   │   ├── fila.html
│   │   │   │   ├── formulario-ui.html
│   │   │   │   ├── formulario.html
│   │   │   │   ├── nav.html
│   │   │   │   └── toast.html
│   │   │   └── toasts.html
│   │   └── 005-Habla
│   │       ├── README.md
│   │       ├── css
│   │       │   └── estilo.css
│   │       ├── data
│   │       │   ├── clientes.json
│   │       │   ├── datos.json
│   │       │   ├── entidades.json
│   │       │   ├── menu.json
│   │       │   └── productos.json
│   │       ├── formularios.html
│   │       ├── index.html
│   │       ├── js
│   │       │   ├── componentes.js
│   │       │   └── demo-ui.js
│   │       ├── login.html
│   │       ├── ollama.php
│   │       ├── templates
│   │       │   ├── article.html
│   │       │   ├── celda.html
│   │       │   ├── fila.html
│   │       │   ├── formulario-ui.html
│   │       │   ├── formulario.html
│   │       │   ├── nav.html
│   │       │   └── toast.html
│   │       └── toasts.html
│   ├── 003-Voz y Habla
│   │   ├── 000-Introducción.md
│   │   ├── 001-que el ordenador hable.html
│   │   ├── 002-mas parametros.html
│   │   ├── 003-boton.html
│   │   ├── 004-reconocimientos de voz.html
│   │   ├── 005-repetidor.html
│   │   ├── 006-chat.html
│   │   └── 007-chatbot.html
│   ├── 004-Partes y movimientos del cuerpo
│   │   ├── 000-Introducción.md
│   │   ├── 001-reconocimiento de cara.html
│   │   ├── 002-manos.html
│   │   ├── 003-malla de la cara.html
│   │   ├── 004-spritesheet.html
│   │   ├── 005-con suavizado.html
│   │   ├── 006-integrafo.html
│   │   ├── 006-raton.html
│   │   ├── 007-avatar-chatbot-lipsync.html
│   │   ├── 008-avatar-minimal-ollama.html
│   │   ├── 009-avatar-minimal-corregido.html
│   │   ├── 010-avatar-face-landmarker.html
│   │   ├── ollama.php
│   │   ├── spritesheet.png
│   │   └── spritesheetA.png
│   └── 005-Realidad aumentada
│       ├── 000-Introducción.md
│       ├── 001-aframe.html
│       ├── 002-denso.html
│       ├── 003-denso.html
│       ├── 004-indice.html
│       ├── 005-gradual.html
│       ├── 006-gradual.html
│       ├── 007-ciudad.html
│       └── 008-ciudad.html
├── 002-Proyecto
│   ├── css
│   │   ├── componentes.css
│   │   ├── general.css
│   │   ├── navegacion.css
│   │   ├── panel-control.css
│   │   ├── realidad-aumentada.css
│   │   └── variables.css
│   ├── index.html
│   ├── js
│   │   ├── interfaz
│   │   │   ├── indicadores.js
│   │   │   ├── notificaciones.js
│   │   │   └── panel-control.js
│   │   ├── manos
│   │   │   ├── acciones-manos.js
│   │   │   ├── deteccion-manos.js
│   │   │   └── gestos.js
│   │   ├── movimiento
│   │   │   ├── acciones-pose.js
│   │   │   ├── deteccion-pose.js
│   │   │   └── estados-pose.js
│   │   ├── principal.js
│   │   ├── realidad-aumentada
│   │   │   ├── ar.js
│   │   │   ├── escena-ar.js
│   │   │   └── objetos-ar.js
│   │   └── voz
│   │       ├── comandos-voz.js
│   │       └── reconocimiento-voz.js
│   └── recursos
│       ├── iconos
│       │   ├── cam_off.svg
│       │   ├── cam_on.svg
│       │   ├── mic_off.svg
│       │   └── mic_on.svg
│       └── imagenes
│           ├── logo-horizontal.png
│           └── logo.png
└── 003-Resultado de Aprendizaje
```

## Código (intercalado)

# 006-Entrega
## 001-Ejercicios
### 001-Herramientas para el aprendizaje automático
**000-Introducción.md**
```markdown
# Herramientas para el aprendizaje automático
- Modelos de IA
	- Uso de modelos remotos
	- Uso de modelos locales
	- Entrenamiento de modelos locales (afinación)

```
**001-chabotollama.html**
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">

    <title>Asistente con Ollama</title>

    <style>
      :root{
        --naranja:#f97316;
        --azul:#1d4ed8;
        --blanco:#ffffff;
        --negro:#111827;
      }

      body{
        font-family:Arial,sans-serif;
        color:var(--negro);
        background:var(--blanco);
      }

      /* -------------------------
         VENTANA DEL CHAT
      ------------------------- */

      #chat{
        position:fixed;
        right:30px;
        bottom:105px;

        width:350px;
        height:450px;

        background:var(--blanco);

        border:2px solid var(--azul);
        border-radius:15px;
        box-shadow:0 5px 30px #0004;

        display:none;
        flex-direction:column;

        overflow:hidden;
      }


      /* Cabecera */

      #cabecera{
        background:var(--azul);
        color:var(--blanco);

        padding:15px;

        display:flex;
        justify-content:space-between;
        align-items:center;

        font-weight:bold;
      }

      #cerrar{
        cursor:pointer;
        font-size:20px;
        color:var(--naranja);
      }


      /* Conversación */

      #conversacion{
        flex:1;

        padding:20px;

        display:flex;
        flex-direction:column;
        gap:15px;

        overflow-y:auto;
      }


      /* Bocadillos */

      .bocadillo{
        padding:10px 15px;
        border-radius:18px;

        max-width:75%;

        line-height:1.4;
      }

      .yo{
        background:var(--naranja);
        color:var(--blanco);

        align-self:flex-end;

        border-bottom-right-radius:4px;
      }

      .maquina{
        background:var(--blanco);
        color:var(--negro);

        align-self:flex-start;

        border-bottom-left-radius:4px;

        box-shadow:0 2px 8px #0002;
      }


      /* -------------------------
         BOTÓN FLOTANTE
      ------------------------- */

      #microfono{
        position:fixed;

        right:30px;
        bottom:30px;

        width:60px;
        height:60px;

        border:0;
        border-radius:50%;

        background:var(--naranja);
        color:var(--blanco);

        font-size:28px;

        cursor:pointer;

        box-shadow:0 4px 15px #0004;

        transition:0.2s;
      }

      #microfono:hover{
        background:var(--azul);
        transform:scale(1.1);
      }

    </style>
  </head>

  <body>


    <!-- Aquí estaría tu web normal -->

    <h1>Mi página web</h1>

    <p>
      Este es el contenido normal de mi página.
    </p>



    <!-- CHAT FLOTANTE -->

    <div id="chat">

      <div id="cabecera">

        <span>Asistente IA</span>

        <span id="cerrar" onclick="cerrarChat()">
          ×
        </span>

      </div>


      <div id="conversacion">

        <div class="bocadillo maquina">
          Hola, pulsa el micrófono y háblame.
        </div>

      </div>

    </div>



    <!-- BOTÓN FLOTANTE -->

    <button id="microfono" onclick="escuchar()">
      🎤
    </button>



    <script>

      function bocadillo(texto, quien){

        let mensaje = document.createElement("div");

        mensaje.classList.add("bocadillo");
        mensaje.classList.add(quien);

        mensaje.textContent = texto;


        let conversacion =
          document.querySelector("#conversacion");

        conversacion.appendChild(mensaje);


        // Scroll automático

        conversacion.scrollTop =
          conversacion.scrollHeight;

      }



      function escuchar(){

        // Mostrar chat

        document.querySelector("#chat")
          .style.display = "flex";


        // Crear reconocimiento de voz

        let reconocimiento =
          new webkitSpeechRecognition();


        reconocimiento.lang = "es-ES";


        // Cuando reconoce la voz

        reconocimiento.onresult = function(evento){

          let texto =
            evento.results[0][0].transcript;


          // Mostrar mensaje del usuario

          bocadillo(texto,"yo");


          // Mostrar mensaje mientras piensa

          let pensando = document.createElement("div");

          pensando.classList.add(
            "bocadillo",
            "maquina"
          );

          pensando.textContent =
            "Pensando...";

          document
            .querySelector("#conversacion")
            .appendChild(pensando);



          // -------------------------
          // LLAMADA AL PHP
          // -------------------------

          fetch("ollama.php",{

            method:"POST",

            headers:{
              "Content-Type":
                "application/json"
            },

            body:JSON.stringify({

              mensaje:texto

            })

          })


          // Convertimos respuesta a JSON

          .then(function(respuesta){

            return respuesta.json();

          })


          // Recibimos respuesta de Ollama

          .then(function(datos){

            // Quitamos "Pensando..."

            pensando.remove();


            let respuesta =
              datos.respuesta;


            // Mostrar respuesta

            bocadillo(
              respuesta,
              "maquina"
            );


            // -------------------------
            // LEER RESPUESTA
            // -------------------------

            let mensaje =
              new SpeechSynthesisUtterance(
                respuesta
              );


            mensaje.lang = "es-ES";


            // Cancelamos cualquier voz anterior

            speechSynthesis.cancel();


            // Hablar

            speechSynthesis.speak(
              mensaje
            );

          })


          // Error

          .catch(function(error){

            pensando.remove();


            console.error(error);


            bocadillo(
              "No he podido conectar con Ollama.",
              "maquina"
            );

          });

        };



        // Error de reconocimiento

        reconocimiento.onerror =
          function(evento){

            console.error(
              "Error de reconocimiento:",
              evento.error
            );

        };



        // Empezar a escuchar

        reconocimiento.start();

      }



      function cerrarChat(){

        document.querySelector("#chat")
          .style.display = "none";

        // Detener voz si está hablando

        speechSynthesis.cancel();

      }

    </script>

  </body>
</html>
```
**ollama.php**
```php
<?php

header("Content-Type: application/json; charset=utf-8");


// Recoger JSON enviado desde JavaScript

$entrada = json_decode(
    file_get_contents("php://input"),
    true
);

$mensaje = $entrada["mensaje"] ?? "";


// Petición para Ollama

$datos = [
    "model" => "phi3:mini",

    "prompt" => $mensaje,

    "stream" => false
];


// Conectar con Ollama

$ch = curl_init(
    "http://localhost:11434/api/generate"
);

curl_setopt(
    $ch,
    CURLOPT_POST,
    true
);

curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "Content-Type: application/json"
    ]
);

curl_setopt(
    $ch,
    CURLOPT_POSTFIELDS,
    json_encode($datos)
);

curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);


// Ejecutar

$respuesta = curl_exec($ch);

curl_close($ch);


// Decodificar respuesta de Ollama

$resultado = json_decode(
    $respuesta,
    true
);


// Obtener únicamente el texto

$texto = $resultado["response"] ?? "No he podido responder.";


// Responder al navegador

echo json_encode([
    "respuesta" => $texto
]);
```
### 002-Interfaces naturales
**000-Introducción.md**
```markdown
# Interfaces naturales
- Interfaces naturales
	- Voz y lenguaje natural.
	- Gestos corporales o de las manos.
	- Tacto y movimientos multitáctiles.
	- Mirada y seguimiento ocular.
	- Expresiones faciales.
	- Movimiento corporal.
	- Escritura manual.
	- Reconocimiento de objetos o del entorno.

```
**001-Resumen.md**
```markdown
En mi caso en la unidad 1 empecé la jocarsa | iu
Ahora en la unidad 2, he creado ejercicios de demostración de interfaces naturales

Lo que yo tengo que hacer:
crear un ejercicio de final de unidad
Una cierta intermodularidad
Demostraros que los conocimientos son integrables.

Interfaces - SSGG = un sistema con interfaz
Acceso a datos motor de bases de datos propio
Interfaces + SSGG + Base de datos = super software empresarial

Lo que vosotros tenéis que hacer:
1.-O bien hacéis lo mismo que yo
2.-O bien podéis hacer un proyecto independiente


```
#### 002-andrei-ui-modal-drawer
**README.md**
```markdown
# jocarsa · subunidad 007 integrada v3

Proyecto integrado de componentes, plantillas, orígenes de datos y eventos.

## Demostraciones

- `index.html`: aplicación integrada con menús, fichas, tabla, formulario dinámico, drag & drop, columnas minimizables y separadores redimensionables.
- `login.html`: pantalla de login jocarsa-iu. Busca `jocarsa.png` en la raíz del proyecto y la usa como fondo a pantalla completa.
- `formularios.html`: catálogo demostrativo de formularios y controles.
- `toasts.html`: demostración independiente de mensajes toast success/info/warning/danger.

## Fondo del login

Coloca la imagen con este nombre exacto:

`jocarsa.png`

en la raíz del proyecto, junto a `index.html` y `login.html`.

## Ejecución

Como el proyecto usa `fetch()` para los orígenes JSON, servir por HTTP:

`python3 -m http.server 8000`

Abrir `http://localhost:8000/`.


## Refactorización de código

Esta versión mantiene la estructura visual y funcional de la versión 5, pero presenta HTML, templates, CSS, JSON y JavaScript en formato legible y no minificado.

El JavaScript de control se ha reorganizado con programación orientada a objetos. El namespace conceptual solicitado es `jocarsa | iu`; como el carácter `|` es un operador de JavaScript y no puede formar parte de un identificador, el namespace técnico utilizado es:


```
**formularios.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | formularios
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formulario completo
      </span>
     </a>
     <a class="" href="#controles">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Controles
      </span>
     </a>
     <a class="" href="#eventos">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Eventos
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Formulario completo
     </h2>
     <p>
      Ejemplo de controles reutilizables manteniendo el escenario de jocarsa-iu.
     </p>
     <form class="ju-form-grid" id="formDemo">
      <label>
       <span>
        Nombre
       </span>
       <input name="nombre" required=""/>
      </label>
      <label>
       <span>
        Email
       </span>
       <input name="email" required="" type="email"/>
      </label>
      <label>
       <span>
        Tipo
       </span>
       <select name="tipo">
        <option>
         Cliente
        </option>
        <option>
         Proveedor
        </option>
        <option>
         Alumno
        </option>
       </select>
      </label>
      <label>
       <span>
        Fecha
       </span>
       <input name="fecha" type="date"/>
      </label>
      <label>
       <span>
        Teléfono
       </span>
       <input name="telefono" type="tel"/>
      </label>
      <label>
       <span>
        Web
       </span>
       <input name="web" placeholder="https://" type="url"/>
      </label>
      <label class="ju-form-full">
       <span>
        Descripción
       </span>
       <textarea name="descripcion"></textarea>
      </label>
      <fieldset class="ju-fieldset ju-form-full">
       <strong>
        Preferencias
       </strong>
       <div class="ju-check-group">
        <label class="ju-check">
         <input name="activo" type="checkbox"/>
         <span>
          Activo
         </span>
        </label>
        <label class="ju-check">
         <input checked="" name="nivel" type="radio" value="normal"/>
         <span>
          Normal
         </span>
        </label>
        <label class="ju-check">
         <input name="nivel" type="radio" value="prioritario"/>
         <span>
          Prioritario
         </span>
        </label>
       </div>
      </fieldset>
      <div class="ju-form-full ju-button-row">
       <button class="ju-btn" type="submit">
        Guardar
       </button>
       <button class="ju-btn secondary" type="reset">
        Limpiar
       </button>
      </div>
     </form>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
**index.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | interfaz integrada
  </title>
  <link href="https://static.jocarsa.com/logos/white.svg" rel="shortcut icon" type="image/svg+xml"/>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="jocarsa-iu">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     jocarsa | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input id="buscador" placeholder="Buscar en clientes…" type="search"/>
    <button id="nuevo">
     + Nuevo
    </button>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav id="navegacion">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </nav>
   <div class="separador" data-left="navegacion">
   </div>
   <section id="entidades">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </section>
   <div class="separador" data-left="entidades">
   </div>
   <div class="escenario" id="escenario">
   </div>
  </main>
  <template id="tpl-nav">
   <a href="#">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </a>
  </template>
  <template id="tpl-card">
   <article draggable="true">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </article>
  </template>
  <template id="tpl-fila">
   <tr>
   </tr>
  </template>
  <!-- Componentes flotantes globales -->
  <div class="ju-drawer-overlay" id="juDrawerOverlay" aria-hidden="true"></div>
  <aside class="ju-drawer" id="juDrawer" aria-hidden="true" aria-label="Editor lateral">
   <div class="ju-drawer-resizer" id="juDrawerResizer" title="Arrastra para redimensionar"></div>
   <header class="ju-drawer-header">
    <div>
     <small id="juDrawerMode">CREAR</small>
     <h2 id="juDrawerTitle">Nuevo registro</h2>
    </div>
    <button class="ju-drawer-close" id="juDrawerClose" type="button" aria-label="Cerrar">×</button>
   </header>
   <div class="ju-drawer-body" id="juDrawerBody"></div>
  </aside>

  <div class="ju-modal-layer" id="juModal" aria-hidden="true">
   <div class="ju-modal-backdrop" data-modal-close></div>
   <section class="ju-modal-window" role="dialog" aria-modal="true" aria-labelledby="juModalTitle">
    <header class="ju-modal-header">
     <h2 id="juModalTitle">Ventana modal</h2>
     <button class="ju-modal-close" type="button" data-modal-close aria-label="Cerrar">×</button>
    </header>
    <div class="ju-modal-body" id="juModalBody"></div>
   </section>
  </div>

  <script src="js/componentes.js">
  </script>
 </body>
</html>

```
**login.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | login
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-login-page">
  <main class="ju-login-layout">
   <article class="ju-login-side">
    <div class="ju-login-brand">
     <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
     <h1 class="ju-login-product-title">
      Andrei | interfaz integrada
     </h1>
     <p>
      Accede a tu espacio de trabajo.
     </p>
    </div>
   </article>
   <article class="ju-login-card">
    <h2>
     Iniciar sesión
    </h2>
    <p>
     Introduce tus credenciales.
    </p>
    <form action="index.html" class="ju-form-grid">
     <label class="ju-form-full">
      <span>
       Email
      </span>
      <input placeholder="nombre@ejemplo.com" required="" type="email"/>
     </label>
     <label class="ju-form-full">
      <span>
       Contraseña
      </span>
      <input placeholder="••••••••" required="" type="password"/>
     </label>
     <label class="ju-check ju-form-full">
      <input type="checkbox"/>
      <span>
       Mantener la sesión iniciada
      </span>
     </label>
     <div class="ju-form-full ju-login-actions">
      <button class="ju-btn" type="submit">
       Entrar
      </button>
      <a class="ju-text-link" href="#">
       ¿Olvidaste la contraseña?
      </a>
     </div>
    </form>
    <div class="ju-button-row">
     <a class="ju-btn secondary" href="formularios.html">
      Formularios
     </a>
     <a class="ju-btn secondary" href="toasts.html">
      Toasts
     </a>
    </div>
   </article>
  </main>
 </body>
</html>


```
**toasts.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | toasts
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     jocarsa | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Mensajes toast
      </span>
     </a>
     <a class="" href="#success">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Éxito
      </span>
     </a>
     <a class="" href="#info">
      <span class="ficha">
       I
      </span>
      <span class="etiqueta">
       Información
      </span>
     </a>
     <a class="" href="#warning">
      <span class="ficha">
       A
      </span>
      <span class="etiqueta">
       Aviso
      </span>
     </a>
     <a class="" href="#danger">
      <span class="ficha">
       X
      </span>
      <span class="etiqueta">
       Error
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Mensajes emergentes Toast
     </h2>
     <p>
      El escenario conserva la misma estructura de la aplicación principal. Pulsa un estado para generar el mensaje.
     </p>
     <div class="ju-button-row">
      <button class="ju-btn" data-toast="success">
       Éxito
      </button>
      <button class="ju-btn secondary" data-toast="info">
       Información
      </button>
      <button class="ju-btn secondary" data-toast="warning">
       Aviso
      </button>
      <button class="ju-btn secondary" data-toast="danger">
       Error
      </button>
     </div>
     <div style="margin-top:24px">
      <h3>
       Comportamiento
      </h3>
      <p>
       Los mensajes se apilan abajo a la derecha, permiten cierre manual y desaparecen automáticamente.
      </p>
     </div>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
##### css
**estilo.css**
```css
:root {
  --naranja:#f97316;
  --azul:#1d4ed8;
  --azul-medio:#1e40af;
  --azul-claro:#eff6ff;
  --azul-palido:#dbeafe;
  --blanco:#ffffff;
  --negro:#111827;
  --relleno:12px;
  --texto:12px;
  --chaflan:12px;
  --color0:var(--negro);
  --color:var(--azul);
  --color2:var(--azul-medio);
  --color3:var(--azul-claro);
  --color4:var(--azul-palido);
  --texto-nav:var(--blanco);
  --ancho-nav:210px;
  --ancho-section:260px
}
* {
  box-sizing:border-box
}
html,body {
  width:100%;
  height:100%;
  margin:0
}
.jocarsa-iu {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
header {
  height:54px;
  flex:none;
  background:var(--color);
  display:flex;
  align-items:center;
  gap:12px;
  padding:12px;
  color:var(--texto-nav)
}
.corporativo {
  display:flex;
  align-items:center;
  gap:10px;
  flex:1
}
.corporativo img {
  width:28px;
  height:28px
}
.corporativo h1 {
  font-size:20px;
  font-weight:bold;
  margin:0
}
header input,header button {
  border:0;
  padding:8px 10px;
  background:var(--color2);
  color:inherit;
  outline:none
}
header input {
  min-width:260px;
  background:var(--color0)
}
main {
  display:flex;
  flex:1;
  min-height:0
}
nav,section {
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  padding:12px;
  background:var(--color);
  color:white;
  overflow:hidden;
  flex:none;
  transition:width .25s
}
nav {
  width:var(--ancho-nav)
}
section {
  width:var(--ancho-section);
  background:var(--color3);
  color:var(--negro);
  padding-left:3px;
}
.titulo-columna {
  font-weight:bold;
  opacity:.75
}
.contenido-columna {
  display:flex;
  flex-direction:column;
  gap:10px;
  overflow:auto;
  min-height:0
}
.contenido-columna a,.contenido-columna article {
  display:flex;
  align-items:center;
  gap:9px;
  padding:9px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  cursor:pointer;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%);
  transition:.2s
}
.contenido-columna article {
  background:var(--color3)
}
.contenido-columna .activo {
  transform:translateX(8px);
  background:var(--naranja);
  color:var(--blanco);
}
.ficha {
  width:28px;
  height:28px;
  display:grid;
  place-items:center;
  border-radius:50%;
  color:var(--blanco);
  background:var(--azul);
  font-weight:bold;
  flex:none
}
.minimizar {
  position:absolute;
  right:5px;
  bottom:5px;
  border:0;
  width:28px;
  height:28px;
  cursor:pointer
}
.compacto {
  width:58px!important
}
.compacto .titulo-columna,.compacto .etiqueta {
  display:none
}
.compacto .contenido-columna {
  overflow:hidden
}
.separador {
  width:5px;
  cursor:col-resize;
  background:var(--color0);
  flex:none
}
.escenario {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3);
  padding-left: 5px;position:relative;z-index:1000;
}
table {
  width:100%;
  border-collapse:collapse;
  background:white
}
caption {
  text-align:left;
  padding:12px;
  background:var(--color3);
  font-weight:bold
}
th,td {
  padding:10px;
  border-bottom:1px solid rgba(17,24,39,.18);
  text-align:left
}
thead {
  background:var(--color)
}
tbody tr:hover {
  background:var(--color4)
}
.panel {
  background:white;
  padding:16px;
  max-width:1000px
}
.campos {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:12px
}
.campo {
  display:flex;
  flex-direction:column;
  gap:5px
}
.campo input,.campo textarea,.campo select {
  padding:9px;
  border:1px solid rgba(17,24,39,.35)
}
.campo textarea {
  min-height:90px
}
.acciones {
  display:flex;
  gap:8px;
  margin-top:14px
}
.acciones button {
  padding:9px 14px;
  border:0;
  background:var(--naranja);
  color:var(--blanco)
}
.drag-over {
  outline:3px dashed var(--color0)
}
.estado {
  margin:0 0 10px;
  padding:8px;
  background:rgba(255,255,255,.55)
}
/* =========================================================
   REGLAS 010: SEPARADORES + MENUS CONTRAIDOS
   ========================================================= */
nav,section {
  transition:width .3s ease,flex-basis .3s ease,padding .3s ease
}
.separador {
  flex:0 0 7px;
  width:7px;
  min-width:7px;
  padding:0;
  cursor:col-resize;
  position:relative;
  z-index:4;
  transition:background .3s ease
}
nav + .separador {
  background:var(--color2)
}
section + .separador {
  background:var(--color3)
}
.separador:hover {
  background:var(--color4)
}
body.redimensionando {
  cursor:col-resize;
  user-select:none
}
body.redimensionando * {
  cursor:col-resize!important
}
.minimizar {
  position:absolute;
  bottom:var(--relleno);
  left:var(--relleno);
  right:var(--relleno);
  width:auto;
  height:28px;
  border:0;
  background:var(--color2);
  color:inherit;
  cursor:pointer;
  font:inherit;
  z-index:20;
  transition:left .3s,right .3s,width .3s,background .3s
}
section .minimizar {
  background:var(--color3)
}
.minimizar:hover {
  background:var(--color4)
}
nav.compacto,section.compacto {
  flex-basis:52px!important;
  width:52px!important;
  padding-left:6px;
  padding-right:6px;
  align-items:center
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  width:40px;
  overflow:hidden;
  align-items:center
}
nav.compacto .contenido-columna a,section.compacto .contenido-columna article {
  width:40px!important;
  min-width:40px;
  max-width:40px;
  height:40px;
  min-height:40px;
  max-height:40px;
  padding:6px;
  justify-content:center;
  overflow:hidden;
  flex:none;
  transform:none!important
}
nav.compacto .titulo-columna,section.compacto .titulo-columna,nav.compacto .etiqueta,section.compacto .etiqueta {
  display:none
}
nav.compacto .minimizar,section.compacto .minimizar {
  left:6px;
  right:6px;
  width:40px
}
/* =========================================================
   LIBRERIA: FORMULARIOS
   ========================================================= */
.ju-card {
  background:var(--blanco);
  padding:18px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-form-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
  margin-top:16px
}
.ju-form-full {
  grid-column:1/-1
}
.ju-form-grid label {
  display:flex;
  flex-direction:column;
  gap:8px;
  font-size:14px;
  font-weight:500
}
.ju-form-grid input,.ju-form-grid select,.ju-form-grid textarea {
  width:100%;
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  color:var(--negro);
  padding:12px 14px;
  font:inherit;
  outline:none;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-form-grid textarea {
  min-height:110px;
  resize:vertical
}
.ju-form-grid input:focus,.ju-form-grid select:focus,.ju-form-grid textarea:focus {
  border-color:var(--naranja);
  box-shadow:0 0 0 4px color-mix(in srgb,var(--naranja) 18%,transparent);
  background:var(--blanco)
}
.ju-check {
  display:inline-flex!important;
  flex-direction:row!important;
  align-items:center;
  gap:10px!important
}
.ju-check input {
  width:18px!important;
  height:18px;
  clip-path:none!important
}
.ju-btn {
  border:0;
  padding:11px 16px;
  background:var(--naranja);
  color:var(--blanco);
  cursor:pointer;
  font:inherit;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-btn.secondary {
  background:var(--color4);
  color:var(--negro)
}
.ju-button-row {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:16px
}
/* LOGIN jocarsa-iu */
.ju-login-page {
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:radial-gradient(circle at top left,var(--color4),transparent 35%),linear-gradient(180deg,var(--color3),var(--color4));
  padding:30px
}
.ju-login-layout {
  width:min(920px,100%);
  display:grid;
  grid-template-columns:minmax(280px,400px) minmax(320px,520px);
  gap:24px
}
.ju-login-side,.ju-login-card {
  padding:28px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-login-side {
  background:linear-gradient(180deg,var(--color0),var(--color));
  color:white;
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-card {
  background:var(--blanco)
}
.ju-login-brand {
  text-align:center
}
.ju-login-brand img {
  width:72px;
  height:72px
}
.ju-login-product-title {
  font-size:28px;
  margin:12px 0 6px
}
.ju-login-card h2 {
  margin-top:0
}
.ju-login-actions {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px
}
.ju-text-link {
  color:var(--color);
  font-weight:bold;
  text-decoration:none
}
/* TOASTS jocarsa-iu */
.ju-toast-stack {
  position:fixed;
  right:22px;
  bottom:22px;
  z-index:1000;
  width:min(420px,calc(100vw - 44px));
  display:flex;
  flex-direction:column;
  gap:12px;
  pointer-events:none
}
.ju-toast {
  pointer-events:auto;
  position:relative;
  display:grid;
  grid-template-columns:42px 1fr auto;
  gap:12px;
  align-items:start;
  padding:14px;
  background:var(--blanco);
  box-shadow:0 18px 38px rgba(0,0,0,.14);
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%);
  transform:translateX(22px);
  opacity:0;
  animation:juToastIn .28s ease forwards
}
.ju-toast:before {
  content:"";
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:7px;
  background:var(--azul)
}
.ju-toast.is-success:before {
  background:var(--azul-medio)
}
.ju-toast.is-warning:before {
  background:var(--naranja)
}
.ju-toast.is-danger:before {
  background:var(--negro)
}
.ju-toast-icon {
  width:42px;
  height:42px;
  display:grid;
  place-items:center;
  background:var(--color3);
  font-weight:800
}
.ju-toast-title {
  margin:0 0 3px;
  font-weight:800
}
.ju-toast-text {
  margin:0;
  color:var(--negro);
  opacity:.7;
  font-size:13px
}
.ju-toast-close {
  border:0;
  background:transparent;
  font-size:20px;
  cursor:pointer
}
.ju-toast.is-leaving {
  animation:juToastOut .22s ease forwards
}
@keyframes juToastIn {
  to {
    transform:translateX(0);
    opacity:1
  }
}
@keyframes juToastOut {
  to {
    transform:translateX(24px);
    opacity:0
  }
}
@media(max-width:800px) {
  .ju-form-grid,.ju-login-layout {
    grid-template-columns:1fr
  }
}
/* =========================================================
   V3 · AJUSTES DE COHERENCIA JOCARSA-IU
   ========================================================= */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
html,body,button,input,select,textarea {
  font-family:Ubuntu,Arial,sans-serif
}
/* Las cajas de ambas columnas quedan centradas dentro de su menú. */
nav .contenido-columna,section .contenido-columna {
  align-items:center;
  width:100%
}
nav .contenido-columna>a,section .contenido-columna>article {
  width:100%;
  margin-left:auto;
  margin-right:auto
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  margin-left:auto;
  margin-right:auto
}
/* Login: composición centrada y fondo de proyecto. jocarsa.png vive en la raíz. */
.ju-login-page {
  position:relative;
  isolation:isolate;
  min-height:100vh;
  margin:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 20px;
  background-image:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
}
.ju-login-layout {
  width:min(980px,100%);
  margin:auto;
  align-items:stretch
}
.ju-login-side,.ju-login-card {
  min-height:450px
}
.ju-login-card {
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-brand {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center
}
/* Páginas de demostración de la librería */
.ju-demo-page {
  min-height:100vh;
  overflow:auto;
  background:var(--color3);
  color:var(--negro)
}
.ju-demo-header {
  min-height:64px;
  background:var(--naranja);
  color:var(--blanco);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:12px 20px
}
.ju-demo-header h1 {
  margin:0;
  font-size:20px;
  font-weight:500
}
.ju-demo-header p {
  margin:3px 0 0;
  opacity:.75
}
.ju-demo-header nav {
  width:auto!important;
  background:transparent;
  padding:0;
  display:flex;
  flex-direction:row;
  gap:8px;
  overflow:visible
}
.ju-demo-header a {
  color:white;
  text-decoration:none;
  padding:10px 14px;
  background:var(--color2);
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-demo-main {
  width:min(1100px,calc(100% - 40px));
  margin:32px auto;
  display:grid;
  gap:20px
}
.ju-demo-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:20px
}
.ju-demo-page .ju-card h2,.ju-demo-page .ju-card h3 {
  margin-top:0
}
.ju-fieldset {
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:12px
}
.ju-check-group {
  display:flex;
  gap:18px;
  flex-wrap:wrap
}
@media(max-width:800px) {
  .ju-demo-grid {
    grid-template-columns:1fr
  }
  .ju-demo-header {
    align-items:flex-start;
    flex-direction:column
  }
  .ju-demo-header nav {
    flex-wrap:wrap
  }
}
/* =========================================================
   V4 · fidelidad jocarsa-iu 010
   ========================================================= */
/* Header completo: corporativo / herramientas / usuario */
header .corporativo {
  flex:1
}
header #herramientas {
  display:flex;
  gap:var(--relleno);
  align-items:center;
  justify-content:center;
  flex:2;
  height:100%
}
header #usuario {
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:var(--relleno);
  flex:1;
  height:100%
}
header #usuario .imagen {
  width:28px;
  height:28px;
  background:var(--color2);
  border-radius:100px;
  flex:none
}
header #usuario>div:last-child {
  display:flex;
  align-items:center;
  gap:var(--relleno);
  flex:none
}
header #usuario p {
  margin:0;
  white-space:nowrap
}
header #usuario a {
  background:var(--color2);
  border:0;
  padding:calc(var(--relleno)/2);
  height:28px;
  display:flex;
  align-items:center;
  color:var(--texto-nav);
  text-decoration:none;
  font:inherit
}
/* Las fichas de letra son cuadrados achaflanados, nunca círculos */
.ficha {
  border-radius:0!important;
  clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)
}
/* El destacado atraviesa visualmente el separador, sin provocar scroll horizontal. */
nav {
  overflow:visible!important;
  z-index:3
}
nav .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
section {
  overflow:visible!important;
  z-index:200;
}
section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
.contenido-columna .activo {
  transform:none
}
#navegacion .contenido-columna a,#entidades .contenido-columna article {
  width:100%;
  height:40px;
  flex:none;
  transition:width .3s ease,background .3s ease
}
#navegacion .contenido-columna a:hover,#entidades .contenido-columna article:hover {
  width:calc(100% + var(--relleno)*.9)
}
#navegacion .contenido-columna a.activo,#entidades .contenido-columna article.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
nav.compacto .contenido-columna a:hover,nav.compacto .contenido-columna a.activo,section.compacto .contenido-columna article:hover,section.compacto .contenido-columna article.activo {
  width:40px!important
}
/* Login realmente centrado + fondo jocarsa.png de la raíz */
body.ju-login-page {
  width:100%;
  height:100vh;
  min-height:100vh;
  margin:0;
  display:grid!important;
  place-items:center;
  overflow:auto;
  padding:30px;
  background:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png') center center/cover no-repeat fixed
}
body.ju-login-page main.ju-login-layout {
  flex:none!important;
  min-height:0!important;
  margin:0!important;
  width:min(920px,calc(100vw - 60px));
  align-self:center;
  justify-self:center
}
/* Páginas de demostración: mismo esqueleto de dos menús + escenario */
body.ju-library-page {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
body.ju-library-page main {
  display:flex;
  flex:1;
  min-height:0;
  overflow:hidden
}
body.ju-library-page .library-nav {
  width:var(--ancho-nav);
  flex:0 0 var(--ancho-nav);
  background:var(--color);
  color:white;
  padding:12px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-section {
  width:var(--ancho-section);
  flex:0 0 var(--ancho-section);
  background:var(--color4);
  color:var(--negro);
  padding:12px 12px 12px 3px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-nav .contenido-columna,body.ju-library-page .library-section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible
}
body.ju-library-page .library-nav a,body.ju-library-page .library-section a {
  height:40px;
  flex:none;
  display:flex;
  align-items:center;
  gap:9px;
  padding:6px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%)
}
body.ju-library-page .library-section a {
  background:var(--color3)
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  background:var(--naranja);
  color:var(--blanco)
}
body.ju-library-page .library-stage {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3)
}
body.ju-library-page .library-stage>.ju-card {
  max-width:1100px
}
/* =========================================================
   V5 · continuidad entre columnas sin scroll horizontal
   ========================================================= */
/*
  No usamos un contenedor scrollable alrededor de las fichas: cuando un
  elemento activo es más ancho que su columna, overflow:auto convierte el
  desbordamiento horizontal en una barra de scroll. En jocarsa-iu el
  destacado debe poder atravesar el límite de la columna y cubrir el
  separador visualmente.
*/
.jocarsa-iu nav .contenido-columna, .jocarsa-iu section .contenido-columna, body.ju-library-page .library-nav .contenido-columna, body.ju-library-page .library-section .contenido-columna {
  overflow:visible !important;
  width:100%;
  min-width:0;
  align-items:stretch;
}
/* Las fichas normales ocupan siempre todo el ancho útil de su columna. */
.jocarsa-iu nav .contenido-columna > a, .jocarsa-iu section .contenido-columna > article, body.ju-library-page .library-nav .contenido-columna > a, body.ju-library-page .library-section .contenido-columna > a {
  width:100%;
  max-width:none;
  margin:0;
  flex:0 0 40px;
}
/* Hover y selección continúan físicamente hacia la columna siguiente. */
.jocarsa-iu nav .contenido-columna > a:hover, .jocarsa-iu section .contenido-columna > article:hover, body.ju-library-page .library-nav .contenido-columna > a:hover, body.ju-library-page .library-section .contenido-columna > a:hover {
  width:calc(100% + (var(--relleno) * .9));
  position:relative;
  z-index:9;
}
.jocarsa-iu nav .contenido-columna > a.activo, .jocarsa-iu section .contenido-columna > article.activo, body.ju-library-page .library-nav .contenido-columna > a.activo, body.ju-library-page .library-section .contenido-columna > a.activo {
  width:calc(100% + (var(--relleno) * 2));
  position:relative;
  z-index:10;
}
/* El separador queda por debajo del destacado, como en 010. */
.jocarsa-iu main .separador, body.ju-library-page main .separador {
  z-index:4
}
.jocarsa-iu nav, body.ju-library-page .library-nav {
  z-index:6
}
.jocarsa-iu section, body.ju-library-page .library-section {
  z-index:500
}
/* La columna central de las demos conserva exactamente la misma geometría
   que la columna central de index.html. */
body.ju-library-page .library-section {
  padding:var(--relleno);
  padding-left:3px;
}
body.ju-library-page .library-section .contenido-columna > a {
  padding:calc(var(--relleno) / 2);
  height:40px;
  min-height:40px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  gap:calc(var(--relleno) / 2);
  background:var(--color3);
}
/* Contraído: conserva la misma continuidad visual hacia la columna siguiente. */
.jocarsa-iu nav.compacto .contenido-columna,
.jocarsa-iu section.compacto .contenido-columna {
  width:40px;
  align-items:center;
  overflow:visible !important;
}

/* Estado normal: la ficha permanece dentro de los 40px de la columna compacta. */
.jocarsa-iu nav.compacto .contenido-columna > a,
.jocarsa-iu section.compacto .contenido-columna > article {
  width:40px !important;
  min-width:40px;
  max-width:none;
  overflow:visible;
  position:relative;
}

/* Hover: sobresale ligeramente hacia la siguiente sección. */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover {
  width:calc(40px + (var(--relleno) * .9)) !important;
  z-index:9;
}

/* Activo: atraviesa el separador igual que en el estado desplegado. */
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  width:calc(50px + (var(--relleno) * 2)) !important;
  z-index:10;
}


/* =========================================================
   V6 · DRAWER DERECHO REDIMENSIONABLE + MODAL
   ========================================================= */
.ju-drawer-overlay{position:fixed;inset:54px 0 0 0;background:rgba(17,24,39,.12);z-index:70;opacity:0;pointer-events:none;transition:opacity .25s ease}
.ju-drawer-overlay.abierto{opacity:1;pointer-events:auto}
.ju-drawer{--drawer-width:440px;position:fixed;z-index:80;top:54px;right:0;bottom:0;width:var(--drawer-width);max-width:50vw;background:var(--blanco);box-shadow:-18px 0 45px rgba(0,0,0,.18);transform:translateX(calc(100% + 20px));transition:transform .3s ease;display:flex;flex-direction:column;color:var(--negro)}
.ju-drawer.abierto{transform:translateX(0)}
.ju-drawer-resizer{position:absolute;left:-7px;top:0;bottom:0;width:7px;background:var(--color0);cursor:col-resize;z-index:3;transition:background .2s}
.ju-drawer-resizer:hover{background:var(--color)}
.ju-drawer-header{height:auto;min-height:76px;flex:none;background:var(--color);padding:14px 16px;color:white;display:flex;align-items:center;justify-content:space-between;gap:12px}
.ju-drawer-header small{display:block;opacity:.7;font-weight:700;letter-spacing:.12em;margin-bottom:3px}
.ju-drawer-header h2{margin:0;font-size:20px}
.ju-drawer-close,.ju-modal-close{border:0;background:var(--color4);color:var(--negro);width:36px;height:36px;font-size:24px;cursor:pointer;flex:none}
.ju-drawer-body{padding:18px;overflow:auto;flex:1;min-height:0;background:var(--color3)}
.ju-drawer-body .ju-card{min-height:100%}
.ju-drawer-body .ju-form-grid{grid-template-columns:1fr}
.ju-drawer-body .ju-form-full{grid-column:auto}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-full{grid-column:1/-1}
.ju-row-editable{cursor:pointer}
.ju-row-editable:hover{background:color-mix(in srgb,var(--color2) 35%,white)!important}
.ju-row-editable:after{content:""}
.ju-modal-layer{position:fixed;inset:0;z-index:120;display:grid;place-items:center;opacity:0;pointer-events:none;transition:opacity .22s ease;padding:24px}
.ju-modal-layer.abierto{opacity:1;pointer-events:auto}
.ju-modal-backdrop{position:absolute;inset:0;background:rgba(17,24,39,.62);backdrop-filter:blur(2px)}
.ju-modal-window{position:relative;z-index:1;width:min(650px,calc(100vw - 48px));max-height:calc(100vh - 48px);background:var(--blanco);box-shadow:0 28px 80px rgba(0,0,0,.3);clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%);transform:translateY(16px) scale(.98);transition:transform .22s ease;overflow:hidden}
.ju-modal-layer.abierto .ju-modal-window{transform:none}
.ju-modal-header{height:auto;min-height:62px;background:var(--color);color:white;padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
.ju-modal-header h2{margin:0;font-size:19px}
.ju-modal-body{padding:22px;max-height:calc(100vh - 120px);overflow:auto}
.ju-showcase-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:18px}
.ju-showcase-box{padding:18px;background:var(--color3);min-height:150px;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)}
.ju-showcase-box h3{margin-top:0}
body.redimensionando-drawer,body.redimensionando-drawer *{cursor:col-resize!important;user-select:none!important}
@media(max-width:700px){.ju-drawer{--drawer-width:50vw;max-width:50vw}.ju-showcase-grid{grid-template-columns:1fr}}


/* =========================================================
   V7 · compacto: fusionar visualmente con la sección derecha
   ========================================================= */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover,
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  transform:translateX(16px) !important;
}

```
##### data
**clientes.json**
```json
{
  "titulo": "Listado de clientes",
  "columnas": [
    {
      "campo": "id",
      "etiqueta": "ID"
    },
    {
      "campo": "nombre",
      "etiqueta": "Nombre"
    },
    {
      "campo": "apellidos",
      "etiqueta": "Apellidos"
    },
    {
      "campo": "email",
      "etiqueta": "Email"
    },
    {
      "campo": "telefono",
      "etiqueta": "Teléfono"
    },
    {
      "campo": "empresa",
      "etiqueta": "Empresa"
    }
  ],
  "registros": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "+34 612 345 678",
      "empresa": "Soluciones Levante S.L."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Navarro Pérez",
      "email": "carlos.navarro@example.com",
      "telefono": "+34 623 456 789",
      "empresa": "Innovación Digital S.A."
    }
  ]
}

```
**datos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre",
      "tipo": "text"
    },
    {
      "nombre": "apellidos",
      "etiqueta": "Apellidos",
      "tipo": "text"
    },
    {
      "nombre": "email",
      "etiqueta": "Correo electrónico",
      "tipo": "email"
    },
    {
      "nombre": "telefono",
      "etiqueta": "Teléfono",
      "tipo": "tel"
    },
    {
      "nombre": "fecha_nacimiento",
      "etiqueta": "Fecha de nacimiento",
      "tipo": "date"
    },
    {
      "nombre": "numero_empleados",
      "etiqueta": "Número de empleados",
      "tipo": "number"
    },
    {
      "nombre": "facturacion",
      "etiqueta": "Facturación anual",
      "tipo": "number"
    },
    {
      "nombre": "web",
      "etiqueta": "Página web",
      "tipo": "url"
    },
    {
      "nombre": "tipo_cliente",
      "etiqueta": "Tipo de cliente",
      "tipo": "select",
      "opciones": [
        "Particular",
        "Autónomo",
        "Empresa",
        "Administración"
      ]
    },
    {
      "nombre": "activo",
      "etiqueta": "Cliente activo",
      "tipo": "checkbox"
    },
    {
      "nombre": "observaciones",
      "etiqueta": "Observaciones",
      "tipo": "textarea"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "612345678",
      "fecha_nacimiento": "1987-04-12",
      "numero_empleados": 1,
      "facturacion": 42000,
      "web": "https://example.com/laura",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Cliente desde 2023."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Sánchez López",
      "email": "carlos.sanchez@example.com",
      "telefono": "623456789",
      "fecha_nacimiento": "1979-11-03",
      "numero_empleados": 18,
      "facturacion": 380000,
      "web": "https://example.com/carlos",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Interesado en servicios de desarrollo."
    },
    {
      "id": 3,
      "nombre": "Marta",
      "apellidos": "Ruiz Navarro",
      "email": "marta.ruiz@example.com",
      "telefono": "634567890",
      "fecha_nacimiento": "1992-07-21",
      "numero_empleados": 1,
      "facturacion": 31500,
      "web": "https://example.com/marta",
      "tipo_cliente": "Particular",
      "activo": false,
      "observaciones": "Actualmente sin proyectos activos."
    },
    {
      "id": 4,
      "nombre": "Javier",
      "apellidos": "Torres Romero",
      "email": "javier.torres@example.com",
      "telefono": "645678901",
      "fecha_nacimiento": "1984-02-15",
      "numero_empleados": 42,
      "facturacion": 920000,
      "web": "https://example.com/javier",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Solicita mantenimiento periódico."
    },
    {
      "id": 5,
      "nombre": "Ana",
      "apellidos": "Gómez Pérez",
      "email": "ana.gomez@example.com",
      "telefono": "656789012",
      "fecha_nacimiento": "1990-09-28",
      "numero_empleados": 6,
      "facturacion": 125000,
      "web": "https://example.com/ana",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Contacto preferente por correo electrónico."
    }
  ]
}

```
**entidades.json**
```json
[
  {
    "emoji": "👤",
    "texto": "Clientes",
    "activo": true
  },
  {
    "emoji": "🏢",
    "texto": "Empresas"
  },
  {
    "emoji": "📞",
    "texto": "Contactos"
  },
  {
    "emoji": "📋",
    "texto": "Seguimiento"
  },
  {
    "texto": "Formulario"
  },
  {
    "texto": "Login"
  },
  {
    "texto": "Toasts"
  },
  {
    "texto": "Modal / paneles"
  }
]

```
**menu.json**
```json
[
  {
    "emoji": "👥",
    "texto": "Clientes",
    "url": "#clientes",
    "activo": true
  },
  {
    "emoji": "📦",
    "texto": "Productos",
    "url": "#productos",
    "activo": false
  },
  {
    "emoji": "🧾",
    "texto": "Pedidos",
    "url": "#pedidos",
    "activo": false
  },
  {
    "emoji": "⚙️",
    "texto": "Configuración",
    "url": "#configuracion",
    "activo": false
  }
]

```
**productos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre del producto",
      "tipo": "text"
    },
    {
      "nombre": "descripcion",
      "etiqueta": "Descripción",
      "tipo": "textarea"
    },
    {
      "nombre": "categoria",
      "etiqueta": "Categoría",
      "tipo": "select",
      "opciones": [
        "Informática",
        "Periféricos",
        "Telefonía",
        "Oficina",
        "Almacenamiento"
      ]
    },
    {
      "nombre": "precio",
      "etiqueta": "Precio",
      "tipo": "number"
    },
    {
      "nombre": "stock",
      "etiqueta": "Stock",
      "tipo": "number"
    },
    {
      "nombre": "fecha_alta",
      "etiqueta": "Fecha de alta",
      "tipo": "date"
    },
    {
      "nombre": "fabricante",
      "etiqueta": "Fabricante",
      "tipo": "text"
    },
    {
      "nombre": "web",
      "etiqueta": "Página del producto",
      "tipo": "url"
    },
    {
      "nombre": "disponible",
      "etiqueta": "Disponible",
      "tipo": "checkbox"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Portátil ProBook 15",
      "descripcion": "Portátil profesional de 15 pulgadas para oficina y desarrollo.",
      "categoria": "Informática",
      "precio": 749.99,
      "stock": 12,
      "fecha_alta": "2026-01-15",
      "fabricante": "TechNova",
      "web": "https://example.com/probook15",
      "disponible": true
    },
    {
      "id": 2,
      "nombre": "Monitor UltraView 27",
      "descripcion": "Monitor IPS de 27 pulgadas con resolución 2560x1440.",
      "categoria": "Informática",
      "precio": 229.9,
      "stock": 25,
      "fecha_alta": "2026-02-03",
      "fabricante": "UltraView",
      "web": "https://example.com/ultraview27",
      "disponible": true
    },
    {
      "id": 3,
      "nombre": "Teclado Mecánico K500",
      "descripcion": "Teclado mecánico USB para programación y uso intensivo.",
      "categoria": "Periféricos",
      "precio": 79.95,
      "stock": 40,
      "fecha_alta": "2026-02-20",
      "fabricante": "KeyMaster",
      "web": "https://example.com/k500",
      "disponible": true
    },
    {
      "id": 4,
      "nombre": "SSD Portable 2 TB",
      "descripcion": "Unidad SSD externa USB-C de alta velocidad.",
      "categoria": "Almacenamiento",
      "precio": 149.5,
      "stock": 18,
      "fecha_alta": "2026-03-12",
      "fabricante": "DataFast",
      "web": "https://example.com/ssd2tb",
      "disponible": true
    },
    {
      "id": 5,
      "nombre": "Smartphone Nova X",
      "descripcion": "Teléfono móvil con pantalla OLED y 256 GB de almacenamiento.",
      "categoria": "Telefonía",
      "precio": 499.0,
      "stock": 0,
      "fecha_alta": "2026-04-08",
      "fabricante": "NovaMobile",
      "web": "https://example.com/novax",
      "disponible": false
    }
  ]
}

```
##### js
**componentes.js**
```js
/**
 * Andrei | iu
 * Control principal de la interfaz mediante programación orientada a objetos.
 *
 * Nota sobre el namespace:
 * JavaScript no admite "|" dentro de un identificador. Por ello el namespace
 * técnico equivalente es `andrei.iu`.
 */
window.jocarsa = window.jocarsa || {};
window.jocarsa.iu = window.jocarsa.iu || {};

(() => {
  "use strict";

  class DOM {
    static uno(selector, contexto = document) {
      return contexto.querySelector(selector);
    }

    static todos(selector, contexto = document) {
      return [...contexto.querySelectorAll(selector)];
    }
  }

  class Utilidades {
    static hashTexto(texto) {
      let hash = 0;

      for (const caracter of texto) {
        hash = caracter.charCodeAt(0) + ((hash << 5) - hash);
      }

      return Math.abs(hash);
    }

    static colorTexto(texto) {
      return Utilidades.hashTexto(texto) % 2
        ? "var(--naranja)"
        : "var(--azul)";
    }
  }

  class OrigenDatos {
    static async cargarJSON(url) {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(url);
      }

      return respuesta.json();
    }
  }

  class EstadoIU {
    constructor() {
      this.menu = [];
      this.entidades = [];
      this.clientes = null;
      this.formulario = null;
      this.seleccion = "Listado";
    }
  }

  class FichaIU {
    static completar(elemento, texto) {
      const ficha = DOM.uno(".ficha", elemento);
      const etiqueta = DOM.uno(".etiqueta", elemento);

      ficha.textContent = texto.charAt(0).toUpperCase();
      ficha.style.background = Utilidades.colorTexto(texto);
      etiqueta.textContent = texto;
    }
  }

  class ToastIU {
    constructor(selectorPila = "#toastStack") {
      this.selectorPila = selectorPila;
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    obtenerPila() {
      let pila = DOM.uno(this.selectorPila);

      if (!pila) {
        pila = document.createElement("div");
        pila.id = this.selectorPila.replace(/^#/, "");
        pila.className = "ju-toast-stack";
        document.body.appendChild(pila);
      }

      return pila;
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Operación realizada") {
      const pila = this.obtenerPila();
      const toast = document.createElement("article");

      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      DOM.uno("button", toast).addEventListener("click", cerrar);
      pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class ModalIU {
    constructor() {
      this.capa = DOM.uno("#juModal");
      this.titulo = DOM.uno("#juModalTitle");
      this.cuerpo = DOM.uno("#juModalBody");
      DOM.todos("[data-modal-close]", this.capa).forEach((nodo) => nodo.addEventListener("click", () => this.cerrar()));
    }
    abrir(titulo, contenido) {
      this.titulo.textContent = titulo;
      this.cuerpo.innerHTML = contenido;
      this.capa.classList.add("abierto");
      this.capa.setAttribute("aria-hidden", "false");
    }
    cerrar() {
      this.capa.classList.remove("abierto");
      this.capa.setAttribute("aria-hidden", "true");
    }
  }

  class DrawerIU {
    constructor(aplicacion) {
      this.aplicacion = aplicacion;
      this.panel = DOM.uno("#juDrawer");
      this.overlay = DOM.uno("#juDrawerOverlay");
      this.cuerpo = DOM.uno("#juDrawerBody");
      this.modo = DOM.uno("#juDrawerMode");
      this.titulo = DOM.uno("#juDrawerTitle");
      this.resizer = DOM.uno("#juDrawerResizer");
      this.anchoMinimo = 300;
      // El máximo real se calcula siempre como el 50% del viewport.
      this.anchoMaximo = () => Math.max(this.anchoMinimo, window.innerWidth * 0.5);
      DOM.uno("#juDrawerClose").addEventListener("click", () => this.cerrar());
      this.overlay.addEventListener("click", () => this.cerrar());
      this.resizer.addEventListener("pointerdown", (e) => this.iniciarRedimension(e));
      window.addEventListener("resize", () => this.ajustarAlViewport());
      this.actualizarColumnasFormulario();
    }
    abrirCrear() { this.renderFormulario("create", null); }
    abrirActualizar(registro) { this.renderFormulario("update", registro); }
    renderFormulario(modo, registro) {
      const esCrear = modo === "create";
      this.modo.textContent = esCrear ? "CREAR" : "ACTUALIZAR";
      this.titulo.textContent = esCrear ? "Nuevo cliente" : `Editar ${registro.nombre || "registro"}`;
      const campos = this.aplicacion.estado.formulario.campos;
      this.cuerpo.innerHTML = `<article class="ju-card"><form id="juDrawerForm" class="ju-form-grid">${campos.map(c => this.campoHTML(c, registro)).join("")}<div class="ju-form-full ju-button-row"><button class="ju-btn" type="submit">${esCrear ? "Crear" : "Guardar cambios"}</button><button class="ju-btn secondary" type="button" id="juDrawerCancel">Cancelar</button></div></form></article>`;
      DOM.uno("#juDrawerCancel").addEventListener("click", () => this.cerrar());
      DOM.uno("#juDrawerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const nuevo = {};
        campos.forEach(c => {
          if (c.tipo === "checkbox") nuevo[c.nombre] = fd.has(c.nombre);
          else if (c.tipo === "number") nuevo[c.nombre] = fd.get(c.nombre) === "" ? "" : Number(fd.get(c.nombre));
          else nuevo[c.nombre] = fd.get(c.nombre) ?? "";
        });
        if (esCrear) {
          const ids = this.aplicacion.estado.clientes.registros.map(r => Number(r.id) || 0);
          if (!nuevo.id) nuevo.id = Math.max(0, ...ids) + 1;
          this.aplicacion.estado.clientes.registros.push(nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente creado", "El nuevo registro se ha añadido a la tabla.");
        } else {
          Object.assign(registro, nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente actualizado", "Los cambios se muestran inmediatamente en la tabla.");
        }
        this.aplicacion.mostrarTabla(DOM.uno("#buscador").value);
        this.cerrar();
      });
      this.ajustarAlViewport();
      this.actualizarColumnasFormulario();
      this.panel.classList.add("abierto"); this.overlay.classList.add("abierto");
      this.panel.setAttribute("aria-hidden", "false"); this.overlay.setAttribute("aria-hidden", "false");
      setTimeout(() => DOM.uno("input,select,textarea", this.cuerpo)?.focus(), 320);
    }
    campoHTML(c, registro) {
      const valor = registro?.[c.nombre] ?? "";
      const esc = (v) => String(v).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;");
      if (c.tipo === "textarea") return `<label class="ju-form-full"><span>${c.etiqueta}</span><textarea name="${c.nombre}">${esc(valor)}</textarea></label>`;
      if (c.tipo === "select") return `<label><span>${c.etiqueta}</span><select name="${c.nombre}">${(c.opciones||[]).map(o=>`<option${o===valor?' selected':''}>${o}</option>`).join("")}</select></label>`;
      if (c.tipo === "checkbox") return `<label class="ju-check ju-form-full"><input type="checkbox" name="${c.nombre}"${valor?' checked':''}><span>${c.etiqueta}</span></label>`;
      return `<label><span>${c.etiqueta}</span><input name="${c.nombre}" type="${c.tipo || 'text'}" value="${esc(valor)}"${c.nombre==='id'?' min="1"':''}></label>`;
    }
    cerrar() { this.panel.classList.remove("abierto"); this.overlay.classList.remove("abierto"); this.panel.setAttribute("aria-hidden","true"); this.overlay.setAttribute("aria-hidden","true"); }
    iniciarRedimension(e) {
      e.preventDefault(); const inicio=e.clientX, anchoInicial=this.panel.getBoundingClientRect().width;
      this.resizer.setPointerCapture(e.pointerId); document.body.classList.add("redimensionando-drawer"); this.panel.style.transition="none";
      const mover=(ev)=>{
        const ancho=Math.min(this.anchoMaximo(),Math.max(this.anchoMinimo,anchoInicial+(inicio-ev.clientX)));
        this.panel.style.setProperty("--drawer-width",`${ancho}px`);
        this.actualizarColumnasFormulario(ancho);
      };
      const fin=()=>{ this.resizer.removeEventListener("pointermove",mover); this.panel.style.transition=""; document.body.classList.remove("redimensionando-drawer"); };
      this.resizer.addEventListener("pointermove",mover); this.resizer.addEventListener("pointerup",fin,{once:true}); this.resizer.addEventListener("pointercancel",fin,{once:true});
    }
    actualizarColumnasFormulario(ancho = this.panel.getBoundingClientRect().width) {
      // <= 25% del navegador: una columna. > 25% y hasta 50%: dos columnas.
      this.panel.classList.toggle("ju-drawer-dos-columnas", ancho > window.innerWidth * 0.25);
    }
    ajustarAlViewport() {
      const actual = this.panel.getBoundingClientRect().width;
      const maximo = this.anchoMaximo();
      if (actual > maximo) {
        this.panel.style.setProperty("--drawer-width", `${maximo}px`);
        this.actualizarColumnasFormulario(maximo);
      } else {
        this.actualizarColumnasFormulario(actual);
      }
    }
  }

  class GestorColumnas {
    constructor() {
      this.anchoMinimo = 100;
      this.anchoMaximo = 600;
    }

    activar() {
      this.activarMinimizacion();
      this.activarSeparadores();
    }

    activarMinimizacion() {
      DOM.todos(".minimizar").forEach((boton) => {
        const columna = boton.closest("nav,section");
        columna.dataset.ancho = columna.getBoundingClientRect().width;

        boton.addEventListener("click", () => {
          this.alternarColumna(columna, boton);
        });
      });
    }

    alternarColumna(columna, boton) {
      if (columna.classList.contains("compacto")) {
        const ancho = parseFloat(columna.dataset.ancho) || 250;

        columna.classList.remove("compacto");
        columna.style.flexBasis = `${ancho}px`;
        columna.style.width = `${ancho}px`;
        boton.textContent = "◀";
        return;
      }

      columna.dataset.ancho = columna.getBoundingClientRect().width;
      columna.style.flexBasis = `${columna.dataset.ancho}px`;
      columna.style.width = `${columna.dataset.ancho}px`;

      void columna.offsetWidth;

      columna.classList.add("compacto");
      boton.textContent = "▶";
    }

    activarSeparadores() {
      DOM.todos(".separador").forEach((separador) => {
        separador.addEventListener("pointerdown", (evento) => {
          this.iniciarRedimension(separador, evento);
        });
      });
    }

    iniciarRedimension(separador, evento) {
      evento.preventDefault();

      const columna = separador.previousElementSibling;

      if (!columna || columna.classList.contains("compacto")) {
        return;
      }

      const inicio = evento.clientX;
      const anchoInicial = columna.getBoundingClientRect().width;

      columna.style.transition = "none";
      document.body.classList.add("redimensionando");
      separador.setPointerCapture(evento.pointerId);

      const mover = (eventoMovimiento) => {
        const ancho = Math.min(
          this.anchoMaximo,
          Math.max(this.anchoMinimo, anchoInicial + eventoMovimiento.clientX - inicio)
        );

        columna.style.width = `${ancho}px`;
        columna.style.flexBasis = `${ancho}px`;
        columna.dataset.ancho = ancho;
      };

      const terminar = () => {
        separador.removeEventListener("pointermove", mover);
        columna.style.transition = "";
        document.body.classList.remove("redimensionando");
      };

      separador.addEventListener("pointermove", mover);
      separador.addEventListener("pointerup", terminar, { once: true });
      separador.addEventListener("pointercancel", terminar, { once: true });
    }
  }

  class AplicacionIU {
    constructor() {
      this.estado = new EstadoIU();
      this.toast = new ToastIU();
      this.columnas = new GestorColumnas();
      this.modal = null;
      this.drawer = null;
    }

    async iniciar() {
      try {
        [
          this.estado.menu,
          this.estado.entidades,
          this.estado.clientes,
          this.estado.formulario
        ] = await Promise.all([
          OrigenDatos.cargarJSON("data/menu.json"),
          OrigenDatos.cargarJSON("data/entidades.json"),
          OrigenDatos.cargarJSON("data/clientes.json"),
          OrigenDatos.cargarJSON("data/datos.json")
        ]);

        this.modal = new ModalIU();
        this.drawer = new DrawerIU(this);
        this.renderMenu();
        this.renderEntidades();
        this.mostrarTabla();
        this.columnas.activar();
        this.activarEventos();
      } catch (error) {
        DOM.uno("#escenario").innerHTML = `
          <div class="panel">
            <h2>No se pudieron cargar los orígenes de datos</h2>
            <p>Sirve esta carpeta mediante HTTP, por ejemplo: <code>python3 -m http.server 8000</code></p>
            <pre>${error}</pre>
          </div>
        `;
      }
    }

    renderMenu() {
      const contenedor = DOM.uno("#navegacion .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.menu.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-nav").content.cloneNode(true);
        const enlace = DOM.uno("a", nodo);

        FichaIU.completar(enlace, elemento.texto);
        enlace.classList.toggle("activo", Boolean(elemento.activo));
        enlace.dataset.indice = indice;

        enlace.addEventListener("click", (evento) => {
          evento.preventDefault();
          DOM.todos("#navegacion a").forEach((item) => item.classList.remove("activo"));
          enlace.classList.add("activo");
          this.mostrarTabla();
        });

        contenedor.appendChild(nodo);
      });
    }

    renderEntidades() {
      const contenedor = DOM.uno("#entidades .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.entidades.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-card").content.cloneNode(true);
        const articulo = DOM.uno("article", nodo);

        FichaIU.completar(articulo, elemento.texto);
        articulo.classList.toggle("activo", elemento.texto === this.estado.seleccion);
        articulo.dataset.indice = indice;

        articulo.addEventListener("click", () => {
          this.estado.seleccion = elemento.texto;
          this.renderEntidades();
          this.mostrarVista(elemento.texto);
        });

        articulo.addEventListener("dragstart", (evento) => {
          evento.dataTransfer.setData("text/plain", elemento.texto);
        });

        contenedor.appendChild(nodo);
      });
    }

    mostrarVista(vista) {
      if (vista === "Elemento" || vista === "Formulario") {
        this.mostrarFormularioUI();
      } else if (vista === "Login") {
        this.mostrarLoginDemo();
      } else if (vista === "Toasts") {
        this.mostrarToastsDemo();
      } else if (vista === "Modal / paneles") {
        this.mostrarModalPanelesDemo();
      } else {
        this.mostrarTabla();
      }
    }

    mostrarTabla(filtro = "") {
      const datos = this.estado.clientes;
      const registros = datos.registros.filter((registro) =>
        Object.values(registro)
          .join(" ")
          .toLowerCase()
          .includes(filtro.toLowerCase())
      );
      const escenario = DOM.uno("#escenario");
      const tabla = document.createElement("table");

      escenario.innerHTML = "";
      tabla.innerHTML = `
        <caption>${datos.titulo}</caption>
        <thead>
          <tr>${datos.columnas.map((columna) => `<th>${columna.etiqueta}</th>`).join("")}</tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th colspan="${Math.max(1, datos.columnas.length - 1)}">Total</th>
            <td>${registros.length}</td>
          </tr>
        </tfoot>
      `;

      const cuerpo = DOM.uno("tbody", tabla);

      registros.forEach((registro) => {
        const fila = DOM.uno("#tpl-fila").content.cloneNode(true).querySelector("tr");

        datos.columnas.forEach((columna) => {
          const celda = document.createElement("td");
          celda.textContent = registro[columna.campo] ?? "";
          fila.appendChild(celda);
        });

        fila.classList.add("ju-row-editable");
        fila.title = "Clic para editar en el panel lateral";
        fila.addEventListener("click", () => this.drawer.abrirActualizar(registro));
        cuerpo.appendChild(fila);
      });

      escenario.appendChild(tabla);
    }

    mostrarFormularioUI() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Formularios</h2>
          <p>Controles reutilizables con el lenguaje visual jocarsa-iu.</p>
          <form id="demoForm" class="ju-form-grid">
            <label>
              <span>Nombre</span>
              <input name="nombre" required>
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required>
            </label>
            <label>
              <span>Tipo</span>
              <select name="tipo">
                <option>Cliente</option>
                <option>Proveedor</option>
                <option>Alumno</option>
              </select>
            </label>
            <label>
              <span>Fecha</span>
              <input name="fecha" type="date">
            </label>
            <label class="ju-form-full">
              <span>Descripción</span>
              <textarea name="descripcion"></textarea>
            </label>
            <label class="ju-check ju-form-full">
              <input type="checkbox" name="activo">
              <span>Registro activo</span>
            </label>
            <div class="ju-form-full ju-button-row">
              <button class="ju-btn" type="submit">Guardar</button>
              <button class="ju-btn secondary" type="reset">Limpiar</button>
            </div>
          </form>
        </article>
      `;

      DOM.uno("#demoForm").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }

    mostrarLoginDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <div class="ju-login-layout" style="margin:auto">
          <article class="ju-login-side">
            <div class="ju-login-brand">
              <img src="https://static.jocarsa.com/logos/white.svg" alt="">
              <h1 class="ju-login-product-title">jocarsa | interfaz integrada</h1>
              <p>Pantalla de acceso basada en jocarsa-iu.</p>
            </div>
          </article>
          <article class="ju-login-card">
            <h2>Iniciar sesión</h2>
            <form id="loginDemo" class="ju-form-grid">
              <label class="ju-form-full">
                <span>Email</span>
                <input type="email" required>
              </label>
              <label class="ju-form-full">
                <span>Contraseña</span>
                <input type="password" required>
              </label>
              <label class="ju-check ju-form-full">
                <input type="checkbox">
                <span>Mantener sesión</span>
              </label>
              <div class="ju-form-full ju-login-actions">
                <button class="ju-btn">Entrar</button>
                <a class="ju-text-link" href="login.html">Abrir pantalla completa</a>
              </div>
            </form>
          </article>
        </div>
      `;

      DOM.uno("#loginDemo").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Acceso simulado",
          "Login capturado como componente reutilizable."
        );
      });
    }

    mostrarToastsDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Toasts</h2>
          <p>Mensajes emergentes reutilizables con autocierre y cierre manual.</p>
          <div class="ju-button-row">
            <button class="ju-btn" data-t="success">Éxito</button>
            <button class="ju-btn secondary" data-t="info">Información</button>
            <button class="ju-btn secondary" data-t="warning">Aviso</button>
            <button class="ju-btn secondary" data-t="danger">Error</button>
          </div>
        </article>
      `;

      const titulos = {
        success: "Correcto",
        info: "Información",
        warning: "Revisar",
        danger: "Error"
      };

      DOM.todos("[data-t]", escenario).forEach((boton) => {
        boton.addEventListener("click", () => {
          this.toast.mostrar(
            boton.dataset.t,
            titulos[boton.dataset.t],
            "Ejemplo de mensaje emergente de la librería."
          );
        });
      });
    }

    mostrarModalPanelesDemo() {
      const escenario = DOM.uno("#escenario");
      escenario.innerHTML = `<article class="ju-card"><h2>Librería · Modal y panel lateral</h2><p>Dos patrones reutilizables para acciones que no deben sustituir el contenido del escenario.</p><div class="ju-showcase-grid"><div class="ju-showcase-box"><h3>Ventana modal</h3><p>Bloquea temporalmente la interfaz para confirmaciones, avisos o contenido focal.</p><button class="ju-btn" id="demoModal">Abrir modal</button></div><div class="ju-showcase-box"><h3>Panel lateral</h3><p>Entra desde la derecha, mantiene visible el contexto y puede redimensionarse arrastrando su borde izquierdo.</p><button class="ju-btn" id="demoDrawer">Abrir panel de creación</button></div></div></article>`;
      DOM.uno("#demoModal").addEventListener("click", () => {
        this.modal.abrir("Ejemplo de ventana modal", `<p>Esta es la nueva ventana modal reutilizable de <strong>jocarsa | iu</strong>.</p><p>Se puede cerrar con el botón ×, haciendo clic fuera o pulsando Escape.</p><div class="ju-button-row"><button class="ju-btn" id="modalAceptar">Aceptar</button></div>`);
        DOM.uno("#modalAceptar").addEventListener("click", () => this.modal.cerrar());
      });
      DOM.uno("#demoDrawer").addEventListener("click", () => this.drawer.abrirCrear());
    }

    activarEventos() {
      DOM.uno("#buscador").addEventListener("input", (evento) => {
        this.mostrarTabla(evento.target.value);
      });

      DOM.uno("#nuevo").addEventListener("click", () => {
        this.drawer.abrirCrear();
      });

      const escenario = DOM.uno("#escenario");

      escenario.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        escenario.classList.add("drag-over");
      });

      escenario.addEventListener("dragleave", () => {
        escenario.classList.remove("drag-over");
      });

      escenario.addEventListener("drop", (evento) => {
        evento.preventDefault();
        escenario.classList.remove("drag-over");

        const vista = evento.dataTransfer.getData("text/plain");
        this.estado.seleccion = vista;
        this.renderEntidades();
        this.mostrarVista(vista);
      });

      document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
          this.drawer?.cerrar();
          this.modal?.cerrar();
        }
      });
    }
  }

  window.jocarsa.iu.DOM = DOM;
  window.jocarsa.iu.Utilidades = Utilidades;
  window.jocarsa.iu.OrigenDatos = OrigenDatos;
  window.jocarsa.iu.EstadoIU = EstadoIU;
  window.jocarsa.iu.FichaIU = FichaIU;
  window.jocarsa.iu.ToastIU = ToastIU;
  window.jocarsa.iu.ModalIU = ModalIU;
  window.jocarsa.iu.DrawerIU = DrawerIU;
  window.jocarsa.iu.GestorColumnas = GestorColumnas;
  window.jocarsa.iu.AplicacionIU = AplicacionIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.aplicacion = new AplicacionIU();
    window.jocarsa.iu.aplicacion.iniciar();
  });
})();

```
**demo-ui.js**
```js
/**
 * Andrei | iu · demostraciones
 * Namespace técnico: andrei.iu
 */
window.jocarsa = window.jocarsa || {};
window.jocarsa.iu = window.jocarsa.iu || {};

(() => {
  "use strict";

  class ToastDemo {
    constructor(selectorPila = "#toastStack") {
      this.pila = document.querySelector(selectorPila);
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Mensaje de ejemplo") {
      if (!this.pila) {
        return;
      }

      const toast = document.createElement("article");
      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button" aria-label="Cerrar">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      toast.querySelector(".ju-toast-close").addEventListener("click", cerrar);
      this.pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class DemoIU {
    constructor() {
      this.toast = new ToastDemo();
      this.textos = {
        success: ["Guardado correctamente", "La operación se ha completado."],
        info: ["Información", "Este es un mensaje informativo."],
        warning: ["Revisión necesaria", "Conviene revisar los datos antes de continuar."],
        danger: ["Operación fallida", "No se ha podido completar la operación."]
      };
    }

    iniciar() {
      document.addEventListener("click", (evento) => {
        const boton = evento.target.closest("[data-toast]");

        if (!boton) {
          return;
        }

        const tipo = boton.dataset.toast;
        this.toast.mostrar(tipo, ...this.textos[tipo]);
      });

      document.getElementById("formDemo")?.addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }
  }

  window.jocarsa.iu.ToastDemo = ToastDemo;
  window.jocarsa.iu.DemoIU = DemoIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.demo = new DemoIU();
    window.jocarsa.iu.demo.iniciar();
  });
})();

```
##### templates
**article.html**
```html
<article draggable="true">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</article>


```
**celda.html**
```html
<td>
</td>


```
**fila.html**
```html
<tr>
</tr>


```
**formulario-ui.html**
```html
<article class="ju-card">
 <h2>
  {{titulo}}
 </h2>
 <form class="ju-form-grid">
  {{campos}}
  <div class="ju-form-full ju-button-row">
   <button class="ju-btn" type="submit">
    Guardar
   </button>
   <button class="ju-btn secondary" type="reset">
    Limpiar
   </button>
  </div>
 </form>
</article>


```
**formulario.html**
```html
<form class="formulario-dinamico">
 <div class="campos">
 </div>
 <div class="acciones">
  <button type="submit">
   Guardar
  </button>
  <button type="reset">
   Limpiar
  </button>
 </div>
</form>


```
**nav.html**
```html
<a href="#">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</a>


```
**toast.html**
```html
<article class="ju-toast is-{{tipo}}" role="status">
 <div class="ju-toast-icon">
  {{icono}}
 </div>
 <div>
  <p class="ju-toast-title">
   {{titulo}}
  </p>
  <p class="ju-toast-text">
   {{texto}}
  </p>
 </div>
 <button aria-label="Cerrar" class="ju-toast-close" type="button">
  ×
 </button>
</article>


```
#### 003-con chatgpt
**README.md**
```markdown
# jocarsa · subunidad 007 integrada v3

Proyecto integrado de componentes, plantillas, orígenes de datos y eventos.

## Demostraciones

- `index.html`: aplicación integrada con menús, fichas, tabla, formulario dinámico, drag & drop, columnas minimizables y separadores redimensionables.
- `login.html`: pantalla de login jocarsa-iu. Busca `jocarsa.png` en la raíz del proyecto y la usa como fondo a pantalla completa.
- `formularios.html`: catálogo demostrativo de formularios y controles.
- `toasts.html`: demostración independiente de mensajes toast success/info/warning/danger.

## Fondo del login

Coloca la imagen con este nombre exacto:

`jocarsa.png`

en la raíz del proyecto, junto a `index.html` y `login.html`.

## Ejecución

Como el proyecto usa `fetch()` para los orígenes JSON, servir por HTTP:

`python3 -m http.server 8000`

Abrir `http://localhost:8000/`.


## Refactorización de código

Esta versión mantiene la estructura visual y funcional de la versión 5, pero presenta HTML, templates, CSS, JSON y JavaScript en formato legible y no minificado.

El JavaScript de control se ha reorganizado con programación orientada a objetos. El namespace conceptual solicitado es `jocarsa | iu`; como el carácter `|` es un operador de JavaScript y no puede formar parte de un identificador, el namespace técnico utilizado es:

```
**formularios.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | formularios
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     jocarsa | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formulario completo
      </span>
     </a>
     <a class="" href="#controles">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Controles
      </span>
     </a>
     <a class="" href="#eventos">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Eventos
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Formulario completo
     </h2>
     <p>
      Ejemplo de controles reutilizables manteniendo el escenario de jocarsa-iu.
     </p>
     <form class="ju-form-grid" id="formDemo">
      <label>
       <span>
        Nombre
       </span>
       <input name="nombre" required=""/>
      </label>
      <label>
       <span>
        Email
       </span>
       <input name="email" required="" type="email"/>
      </label>
      <label>
       <span>
        Tipo
       </span>
       <select name="tipo">
        <option>
         Cliente
        </option>
        <option>
         Proveedor
        </option>
        <option>
         Alumno
        </option>
       </select>
      </label>
      <label>
       <span>
        Fecha
       </span>
       <input name="fecha" type="date"/>
      </label>
      <label>
       <span>
        Teléfono
       </span>
       <input name="telefono" type="tel"/>
      </label>
      <label>
       <span>
        Web
       </span>
       <input name="web" placeholder="https://" type="url"/>
      </label>
      <label class="ju-form-full">
       <span>
        Descripción
       </span>
       <textarea name="descripcion"></textarea>
      </label>
      <fieldset class="ju-fieldset ju-form-full">
       <strong>
        Preferencias
       </strong>
       <div class="ju-check-group">
        <label class="ju-check">
         <input name="activo" type="checkbox"/>
         <span>
          Activo
         </span>
        </label>
        <label class="ju-check">
         <input checked="" name="nivel" type="radio" value="normal"/>
         <span>
          Normal
         </span>
        </label>
        <label class="ju-check">
         <input name="nivel" type="radio" value="prioritario"/>
         <span>
          Prioritario
         </span>
        </label>
       </div>
      </fieldset>
      <div class="ju-form-full ju-button-row">
       <button class="ju-btn" type="submit">
        Guardar
       </button>
       <button class="ju-btn secondary" type="reset">
        Limpiar
       </button>
      </div>
     </form>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
**index.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | interfaz integrada
  </title>
  <link href="https://static.jocarsa.com/logos/white.svg" rel="shortcut icon" type="image/svg+xml"/>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="andrei-iu">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input id="buscador" placeholder="Buscar en clientes…" type="search"/>
    <button id="nuevo">
     + Nuevo
    </button>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav id="navegacion">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </nav>
   <div class="separador" data-left="navegacion">
   </div>
   <section id="entidades">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </section>
   <div class="separador" data-left="entidades">
   </div>
   <div class="escenario" id="escenario">
   </div>
  </main>
  <template id="tpl-nav">
   <a href="#">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </a>
  </template>
  <template id="tpl-card">
   <article draggable="true">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </article>
  </template>
  <template id="tpl-fila">
   <tr>
   </tr>
  </template>
  <!-- Componentes flotantes globales -->
  <div class="ju-drawer-overlay" id="juDrawerOverlay" aria-hidden="true"></div>
  <aside class="ju-drawer" id="juDrawer" aria-hidden="true" aria-label="Editor lateral">
   <div class="ju-drawer-resizer" id="juDrawerResizer" title="Arrastra para redimensionar"></div>
   <header class="ju-drawer-header">
    <div>
     <small id="juDrawerMode">CREAR</small>
     <h2 id="juDrawerTitle">Nuevo registro</h2>
    </div>
    <button class="ju-drawer-close" id="juDrawerClose" type="button" aria-label="Cerrar">×</button>
   </header>
   <div class="ju-drawer-body" id="juDrawerBody"></div>
  </aside>

  <div class="ju-modal-layer" id="juModal" aria-hidden="true">
   <div class="ju-modal-backdrop" data-modal-close></div>
   <section class="ju-modal-window" role="dialog" aria-modal="true" aria-labelledby="juModalTitle">
    <header class="ju-modal-header">
     <h2 id="juModalTitle">Ventana modal</h2>
     <button class="ju-modal-close" type="button" data-modal-close aria-label="Cerrar">×</button>
    </header>
    <div class="ju-modal-body" id="juModalBody"></div>
   </section>
  </div>


  <!-- Prompt IA flotante -->
  <div class="ju-ai-prompt" id="juAiPrompt" aria-label="Prompt de inteligencia artificial">
   <div class="ju-ai-drag" id="juAiDrag" title="Arrastra para mover">
    <span class="ju-ai-spark">✦</span>
    <span>Asistente local</span>
    <span class="ju-ai-grip">⠿</span>
   </div>
   <div class="ju-ai-compose">
    <textarea id="juAiInput" rows="1" placeholder="Pide a Ollama que transforme el escenario…"></textarea>
    <button class="ju-ai-mic" id="juAiMic" type="button" title="Entrada por voz" aria-label="Entrada por voz">🎤</button>
    <button class="ju-ai-send" id="juAiSend" type="button" title="Enviar" aria-label="Enviar">➜</button>
   </div>
   <div class="ju-ai-status" id="juAiStatus" aria-live="polite"></div>
  </div>

  <script src="js/componentes.js">
  </script>
 </body>
</html>

```
**login.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | login
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-login-page">
  <main class="ju-login-layout">
   <article class="ju-login-side">
    <div class="ju-login-brand">
     <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
     <h1 class="ju-login-product-title">
      Andrei | interfaz integrada
     </h1>
     <p>
      Accede a tu espacio de trabajo.
     </p>
    </div>
   </article>
   <article class="ju-login-card">
    <h2>
     Iniciar sesión
    </h2>
    <p>
     Introduce tus credenciales.
    </p>
    <form action="index.html" class="ju-form-grid">
     <label class="ju-form-full">
      <span>
       Email
      </span>
      <input placeholder="nombre@ejemplo.com" required="" type="email"/>
     </label>
     <label class="ju-form-full">
      <span>
       Contraseña
      </span>
      <input placeholder="••••••••" required="" type="password"/>
     </label>
     <label class="ju-check ju-form-full">
      <input type="checkbox"/>
      <span>
       Mantener la sesión iniciada
      </span>
     </label>
     <div class="ju-form-full ju-login-actions">
      <button class="ju-btn" type="submit">
       Entrar
      </button>
      <a class="ju-text-link" href="#">
       ¿Olvidaste la contraseña?
      </a>
     </div>
    </form>
    <div class="ju-button-row">
     <a class="ju-btn secondary" href="formularios.html">
      Formularios
     </a>
     <a class="ju-btn secondary" href="toasts.html">
      Toasts
     </a>
    </div>
   </article>
  </main>
 </body>
</html>

```
**ollama.php**
```php
<?php

header("Content-Type: application/json; charset=utf-8");


// Recoger JSON enviado desde JavaScript

$entrada = json_decode(
    file_get_contents("php://input"),
    true
);

$mensaje = trim($entrada["mensaje"] ?? "");

if ($mensaje === "") {
    http_response_code(400);
    echo json_encode(["respuesta" => "El prompt está vacío."]);
    exit;
}


// Petición para Ollama

$datos = [
    "model" => "phi3:mini",

    "prompt" => $mensaje,

    "stream" => false
];


// Conectar con Ollama

$ch = curl_init(
    "http://localhost:11434/api/generate"
);

curl_setopt(
    $ch,
    CURLOPT_POST,
    true
);

curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "Content-Type: application/json"
    ]
);

curl_setopt(
    $ch,
    CURLOPT_POSTFIELDS,
    json_encode($datos)
);

curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);


// Ejecutar

$respuesta = curl_exec($ch);

curl_close($ch);


// Decodificar respuesta de Ollama

$resultado = json_decode(
    $respuesta,
    true
);


// Obtener únicamente el texto

$texto = $resultado["response"] ?? "No he podido responder.";


// Responder al navegador

echo json_encode([
    "respuesta" => $texto
]);
```
**toasts.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | toasts
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Mensajes toast
      </span>
     </a>
     <a class="" href="#success">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Éxito
      </span>
     </a>
     <a class="" href="#info">
      <span class="ficha">
       I
      </span>
      <span class="etiqueta">
       Información
      </span>
     </a>
     <a class="" href="#warning">
      <span class="ficha">
       A
      </span>
      <span class="etiqueta">
       Aviso
      </span>
     </a>
     <a class="" href="#danger">
      <span class="ficha">
       X
      </span>
      <span class="etiqueta">
       Error
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Mensajes emergentes Toast
     </h2>
     <p>
      El escenario conserva la misma estructura de la aplicación principal. Pulsa un estado para generar el mensaje.
     </p>
     <div class="ju-button-row">
      <button class="ju-btn" data-toast="success">
       Éxito
      </button>
      <button class="ju-btn secondary" data-toast="info">
       Información
      </button>
      <button class="ju-btn secondary" data-toast="warning">
       Aviso
      </button>
      <button class="ju-btn secondary" data-toast="danger">
       Error
      </button>
     </div>
     <div style="margin-top:24px">
      <h3>
       Comportamiento
      </h3>
      <p>
       Los mensajes se apilan abajo a la derecha, permiten cierre manual y desaparecen automáticamente.
      </p>
     </div>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
##### css
**estilo.css**
```css
:root {
  --naranja:#f97316;
  --azul:#1d4ed8;
  --azul-medio:#1e40af;
  --azul-claro:#eff6ff;
  --azul-palido:#dbeafe;
  --blanco:#ffffff;
  --negro:#111827;
  --relleno:12px;
  --texto:12px;
  --chaflan:12px;
  --color0:var(--negro);
  --color:var(--azul);
  --color2:var(--azul-medio);
  --color3:var(--azul-claro);
  --color4:var(--azul-palido);
  --texto-nav:var(--blanco);
  --ancho-nav:210px;
  --ancho-section:260px
}
* {
  box-sizing:border-box
}
html,body {
  width:100%;
  height:100%;
  margin:0
}
.jocarsa-iu {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
header {
  height:54px;
  flex:none;
  background:var(--color);
  display:flex;
  align-items:center;
  gap:12px;
  padding:12px;
  color:var(--texto-nav)
}
.corporativo {
  display:flex;
  align-items:center;
  gap:10px;
  flex:1
}
.corporativo img {
  width:28px;
  height:28px
}
.corporativo h1 {
  font-size:20px;
  font-weight:bold;
  margin:0
}
header input,header button {
  border:0;
  padding:8px 10px;
  background:var(--color2);
  color:inherit;
  outline:none
}
header input {
  min-width:260px;
  background:var(--color0)
}
main {
  display:flex;
  flex:1;
  min-height:0
}
nav,section {
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  padding:12px;
  background:var(--naranja);
  color:var(--blanco);
  overflow:hidden;
  flex:none;
  transition:width .25s
}
nav {
  width:var(--ancho-nav)
}
section {
  width:var(--ancho-section);
  background:var(--color3);
  color:var(--negro);
  padding-left:3px;
}
.titulo-columna {
  font-weight:bold;
  opacity:.75
}
.contenido-columna {
  display:flex;
  flex-direction:column;
  gap:10px;
  overflow:auto;
  min-height:0
}
.contenido-columna a,.contenido-columna article {
  display:flex;
  align-items:center;
  gap:9px;
  padding:9px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  cursor:pointer;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%);
  transition:.2s
}
.contenido-columna article {
  background:var(--color3)
}
.contenido-columna .activo {
  transform:translateX(8px);
  background:var(--naranja);
  color:var(--blanco);
}
.ficha {
  width:28px;
  height:28px;
  display:grid;
  place-items:center;
  border-radius:50%;
  color:var(--blanco);
  background:var(--azul);
  font-weight:bold;
  flex:none
}
.minimizar {
  position:absolute;
  right:5px;
  bottom:5px;
  border:0;
  width:28px;
  height:28px;
  cursor:pointer
}
.compacto {
  width:58px!important
}
.compacto .titulo-columna,.compacto .etiqueta {
  display:none
}
.compacto .contenido-columna {
  overflow:hidden
}
.separador {
  width:5px;
  cursor:col-resize;
  background:var(--color0);
  flex:none
}
.escenario {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3);
  padding-left: 5px;position:relative;z-index:1000;
}
table {
  width:100%;
  border-collapse:collapse;
  background:var(--blanco)
}
caption {
  text-align:left;
  padding:12px;
  background:var(--color3);
  font-weight:bold
}
th,td {
  padding:10px;
  border-bottom:1px solid rgba(17,24,39,.18);
  text-align:left
}
thead {
  background:var(--color)
}
tbody tr:hover {
  background:var(--color4)
}
.panel {
  background:var(--blanco);
  padding:16px;
  max-width:1000px
}
.campos {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:12px
}
.campo {
  display:flex;
  flex-direction:column;
  gap:5px
}
.campo input,.campo textarea,.campo select {
  padding:9px;
  border:1px solid rgba(17,24,39,.35)
}
.campo textarea {
  min-height:90px
}
.acciones {
  display:flex;
  gap:8px;
  margin-top:14px
}
.acciones button {
  padding:9px 14px;
  border:0;
  background:var(--naranja);
  color:var(--blanco)
}
.drag-over {
  outline:3px dashed var(--color0)
}
.estado {
  margin:0 0 10px;
  padding:8px;
  background:rgba(255,255,255,.55)
}
/* =========================================================
   REGLAS 010: SEPARADORES + MENUS CONTRAIDOS
   ========================================================= */
nav,section {
  transition:width .3s ease,flex-basis .3s ease,padding .3s ease
}
.separador {
  flex:0 0 7px;
  width:7px;
  min-width:7px;
  padding:0;
  cursor:col-resize;
  position:relative;
  z-index:4;
  transition:background .3s ease
}
nav + .separador {
  background:var(--color2)
}
section + .separador {
  background:var(--color3)
}
.separador:hover {
  background:var(--color4)
}
body.redimensionando {
  cursor:col-resize;
  user-select:none
}
body.redimensionando * {
  cursor:col-resize!important
}
.minimizar {
  position:absolute;
  bottom:var(--relleno);
  left:var(--relleno);
  right:var(--relleno);
  width:auto;
  height:28px;
  border:0;
  background:var(--color2);
  color:inherit;
  cursor:pointer;
  font:inherit;
  z-index:20;
  transition:left .3s,right .3s,width .3s,background .3s
}
section .minimizar {
  background:var(--color3)
}
.minimizar:hover {
  background:var(--color4)
}
nav.compacto,section.compacto {
  flex-basis:52px!important;
  width:52px!important;
  padding-left:6px;
  padding-right:6px;
  align-items:center
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  width:40px;
  overflow:hidden;
  align-items:center
}
nav.compacto .contenido-columna a,section.compacto .contenido-columna article {
  width:40px!important;
  min-width:40px;
  max-width:40px;
  height:40px;
  min-height:40px;
  max-height:40px;
  padding:6px;
  justify-content:center;
  overflow:hidden;
  flex:none;
  transform:none!important
}
nav.compacto .titulo-columna,section.compacto .titulo-columna,nav.compacto .etiqueta,section.compacto .etiqueta {
  display:none
}
nav.compacto .minimizar,section.compacto .minimizar {
  left:6px;
  right:6px;
  width:40px
}
/* =========================================================
   LIBRERIA: FORMULARIOS
   ========================================================= */
.ju-card {
  background:var(--blanco);
  padding:18px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-form-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
  margin-top:16px
}
.ju-form-full {
  grid-column:1/-1
}
.ju-form-grid label {
  display:flex;
  flex-direction:column;
  gap:8px;
  font-size:14px;
  font-weight:500
}
.ju-form-grid input,.ju-form-grid select,.ju-form-grid textarea {
  width:100%;
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  color:var(--negro);
  padding:12px 14px;
  font:inherit;
  outline:none;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-form-grid textarea {
  min-height:110px;
  resize:vertical
}
.ju-form-grid input:focus,.ju-form-grid select:focus,.ju-form-grid textarea:focus {
  border-color:var(--naranja);
  box-shadow:0 0 0 4px color-mix(in srgb,var(--naranja) 18%,transparent);
  background:var(--blanco)
}
.ju-check {
  display:inline-flex!important;
  flex-direction:row!important;
  align-items:center;
  gap:10px!important
}
.ju-check input {
  width:18px!important;
  height:18px;
  clip-path:none!important
}
.ju-btn {
  border:0;
  padding:11px 16px;
  background:var(--naranja);
  color:var(--blanco);
  cursor:pointer;
  font:inherit;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-btn.secondary {
  background:var(--color4);
  color:var(--negro)
}
.ju-button-row {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:16px
}
/* LOGIN jocarsa-iu */
.ju-login-page {
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:radial-gradient(circle at top left,var(--color4),transparent 35%),linear-gradient(180deg,var(--color3),var(--color4));
  padding:30px
}
.ju-login-layout {
  width:min(920px,100%);
  display:grid;
  grid-template-columns:minmax(280px,400px) minmax(320px,520px);
  gap:24px
}
.ju-login-side,.ju-login-card {
  padding:28px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-login-side {
  background:linear-gradient(180deg,var(--color0),var(--color));
  color:var(--blanco);
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-card {
  background:var(--blanco)
}
.ju-login-brand {
  text-align:center
}
.ju-login-brand img {
  width:72px;
  height:72px
}
.ju-login-product-title {
  font-size:28px;
  margin:12px 0 6px
}
.ju-login-card h2 {
  margin-top:0
}
.ju-login-actions {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px
}
.ju-text-link {
  color:var(--color);
  font-weight:bold;
  text-decoration:none
}
/* TOASTS jocarsa-iu */
.ju-toast-stack {
  position:fixed;
  right:22px;
  bottom:22px;
  z-index:1000;
  width:min(420px,calc(100vw - 44px));
  display:flex;
  flex-direction:column;
  gap:12px;
  pointer-events:none
}
.ju-toast {
  pointer-events:auto;
  position:relative;
  display:grid;
  grid-template-columns:42px 1fr auto;
  gap:12px;
  align-items:start;
  padding:14px;
  background:rgba(255,255,255,.97);
  box-shadow:0 18px 38px rgba(0,0,0,.14);
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%);
  transform:translateX(22px);
  opacity:0;
  animation:juToastIn .28s ease forwards
}
.ju-toast:before {
  content:"";
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:7px;
  background:var(--azul)
}
.ju-toast.is-success:before {
  background:var(--azul-medio)
}
.ju-toast.is-warning:before {
  background:var(--naranja)
}
.ju-toast.is-danger:before {
  background:var(--negro)
}
.ju-toast-icon {
  width:42px;
  height:42px;
  display:grid;
  place-items:center;
  background:var(--color3);
  font-weight:800
}
.ju-toast-title {
  margin:0 0 3px;
  font-weight:800
}
.ju-toast-text {
  margin:0;
  color:var(--negro);
  opacity:.7;
  font-size:13px
}
.ju-toast-close {
  border:0;
  background:transparent;
  font-size:20px;
  cursor:pointer
}
.ju-toast.is-leaving {
  animation:juToastOut .22s ease forwards
}
@keyframes juToastIn {
  to {
    transform:translateX(0);
    opacity:1
  }
}
@keyframes juToastOut {
  to {
    transform:translateX(24px);
    opacity:0
  }
}
@media(max-width:800px) {
  .ju-form-grid,.ju-login-layout {
    grid-template-columns:1fr
  }
}
/* =========================================================
   V3 · AJUSTES DE COHERENCIA JOCARSA-IU
   ========================================================= */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
html,body,button,input,select,textarea {
  font-family:Ubuntu,Arial,sans-serif
}
/* Las cajas de ambas columnas quedan centradas dentro de su menú. */
nav .contenido-columna,section .contenido-columna {
  align-items:center;
  width:100%
}
nav .contenido-columna>a,section .contenido-columna>article {
  width:100%;
  margin-left:auto;
  margin-right:auto
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  margin-left:auto;
  margin-right:auto
}
/* Login: composición centrada y fondo de proyecto. jocarsa.png vive en la raíz. */
.ju-login-page {
  position:relative;
  isolation:isolate;
  min-height:100vh;
  margin:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 20px;
  background-image:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
}
.ju-login-layout {
  width:min(980px,100%);
  margin:auto;
  align-items:stretch
}
.ju-login-side,.ju-login-card {
  min-height:450px
}
.ju-login-card {
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-brand {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center
}
/* Páginas de demostración de la librería */
.ju-demo-page {
  min-height:100vh;
  overflow:auto;
  background:var(--color3);
  color:var(--negro)
}
.ju-demo-header {
  min-height:64px;
  background:var(--color);
  color:var(--blanco);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:12px 20px
}
.ju-demo-header h1 {
  margin:0;
  font-size:20px;
  font-weight:500
}
.ju-demo-header p {
  margin:3px 0 0;
  opacity:.75
}
.ju-demo-header nav {
  width:auto!important;
  background:transparent;
  padding:0;
  display:flex;
  flex-direction:row;
  gap:8px;
  overflow:visible
}
.ju-demo-header a {
  color:var(--blanco);
  text-decoration:none;
  padding:10px 14px;
  background:var(--color2);
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-demo-main {
  width:min(1100px,calc(100% - 40px));
  margin:32px auto;
  display:grid;
  gap:20px
}
.ju-demo-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:20px
}
.ju-demo-page .ju-card h2,.ju-demo-page .ju-card h3 {
  margin-top:0
}
.ju-fieldset {
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:12px
}
.ju-check-group {
  display:flex;
  gap:18px;
  flex-wrap:wrap
}
@media(max-width:800px) {
  .ju-demo-grid {
    grid-template-columns:1fr
  }
  .ju-demo-header {
    align-items:flex-start;
    flex-direction:column
  }
  .ju-demo-header nav {
    flex-wrap:wrap
  }
}
/* =========================================================
   V4 · fidelidad jocarsa-iu 010
   ========================================================= */
/* Header completo: corporativo / herramientas / usuario */
header .corporativo {
  flex:1
}
header #herramientas {
  display:flex;
  gap:var(--relleno);
  align-items:center;
  justify-content:center;
  flex:2;
  height:100%
}
header #usuario {
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:var(--relleno);
  flex:1;
  height:100%
}
header #usuario .imagen {
  width:28px;
  height:28px;
  background:var(--color2);
  border-radius:100px;
  flex:none
}
header #usuario>div:last-child {
  display:flex;
  align-items:center;
  gap:var(--relleno);
  flex:none
}
header #usuario p {
  margin:0;
  white-space:nowrap
}
header #usuario a {
  background:var(--color2);
  border:0;
  padding:calc(var(--relleno)/2);
  height:28px;
  display:flex;
  align-items:center;
  color:var(--texto-nav);
  text-decoration:none;
  font:inherit
}
/* Las fichas de letra son cuadrados achaflanados, nunca círculos */
.ficha {
  border-radius:0!important;
  clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)
}
/* El destacado atraviesa visualmente el separador, sin provocar scroll horizontal. */
nav {
  overflow:visible!important;
  z-index:3
}
nav .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
section {
  overflow:visible!important;
  z-index:200;
}
section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
.contenido-columna .activo {
  transform:none
}
#navegacion .contenido-columna a,#entidades .contenido-columna article {
  width:100%;
  height:40px;
  flex:none;
  transition:width .3s ease,background .3s ease
}
#navegacion .contenido-columna a:hover,#entidades .contenido-columna article:hover {
  width:calc(100% + var(--relleno)*.9)
}
#navegacion .contenido-columna a.activo,#entidades .contenido-columna article.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
nav.compacto .contenido-columna a:hover,nav.compacto .contenido-columna a.activo,section.compacto .contenido-columna article:hover,section.compacto .contenido-columna article.activo {
  width:40px!important
}
/* Login realmente centrado + fondo jocarsa.png de la raíz */
body.ju-login-page {
  width:100%;
  height:100vh;
  min-height:100vh;
  margin:0;
  display:grid!important;
  place-items:center;
  overflow:auto;
  padding:30px;
  background:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png') center center/cover no-repeat fixed
}
body.ju-login-page main.ju-login-layout {
  flex:none!important;
  min-height:0!important;
  margin:0!important;
  width:min(920px,calc(100vw - 60px));
  align-self:center;
  justify-self:center
}
/* Páginas de demostración: mismo esqueleto de dos menús + escenario */
body.ju-library-page {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
body.ju-library-page main {
  display:flex;
  flex:1;
  min-height:0;
  overflow:hidden
}
body.ju-library-page .library-nav {
  width:var(--ancho-nav);
  flex:0 0 var(--ancho-nav);
  background:var(--color);
  color:var(--blanco);
  padding:12px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-section {
  width:var(--ancho-section);
  flex:0 0 var(--ancho-section);
  background:var(--color3);
  color:var(--negro);
  padding:12px 12px 12px 3px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-nav .contenido-columna,body.ju-library-page .library-section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible
}
body.ju-library-page .library-nav a,body.ju-library-page .library-section a {
  height:40px;
  flex:none;
  display:flex;
  align-items:center;
  gap:9px;
  padding:6px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%)
}
body.ju-library-page .library-section a {
  background:var(--color3)
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  background:var(--naranja);
  color:var(--blanco)
}
body.ju-library-page .library-stage {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3)
}
body.ju-library-page .library-stage>.ju-card {
  max-width:1100px
}
/* =========================================================
   V5 · continuidad entre columnas sin scroll horizontal
   ========================================================= */
/*
  No usamos un contenedor scrollable alrededor de las fichas: cuando un
  elemento activo es más ancho que su columna, overflow:auto convierte el
  desbordamiento horizontal en una barra de scroll. En jocarsa-iu el
  destacado debe poder atravesar el límite de la columna y cubrir el
  separador visualmente.
*/
.jocarsa-iu nav .contenido-columna, .jocarsa-iu section .contenido-columna, body.ju-library-page .library-nav .contenido-columna, body.ju-library-page .library-section .contenido-columna {
  overflow:visible !important;
  width:100%;
  min-width:0;
  align-items:stretch;
}
/* Las fichas normales ocupan siempre todo el ancho útil de su columna. */
.jocarsa-iu nav .contenido-columna > a, .jocarsa-iu section .contenido-columna > article, body.ju-library-page .library-nav .contenido-columna > a, body.ju-library-page .library-section .contenido-columna > a {
  width:100%;
  max-width:none;
  margin:0;
  flex:0 0 40px;
}
/* Hover y selección continúan físicamente hacia la columna siguiente. */
.jocarsa-iu nav .contenido-columna > a:hover, .jocarsa-iu section .contenido-columna > article:hover, body.ju-library-page .library-nav .contenido-columna > a:hover, body.ju-library-page .library-section .contenido-columna > a:hover {
  width:calc(100% + (var(--relleno) * .9));
  position:relative;
  z-index:9;
}
.jocarsa-iu nav .contenido-columna > a.activo, .jocarsa-iu section .contenido-columna > article.activo, body.ju-library-page .library-nav .contenido-columna > a.activo, body.ju-library-page .library-section .contenido-columna > a.activo {
  width:calc(100% + (var(--relleno) * 2));
  position:relative;
  z-index:10;
}
/* El separador queda por debajo del destacado, como en 010. */
.jocarsa-iu main .separador, body.ju-library-page main .separador {
  z-index:4
}
.jocarsa-iu nav, body.ju-library-page .library-nav {
  z-index:6
}
.jocarsa-iu section, body.ju-library-page .library-section {
  z-index:500
}
/* La columna central de las demos conserva exactamente la misma geometría
   que la columna central de index.html. */
body.ju-library-page .library-section {
  padding:var(--relleno);
  padding-left:3px;
}
body.ju-library-page .library-section .contenido-columna > a {
  padding:calc(var(--relleno) / 2);
  height:40px;
  min-height:40px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  gap:calc(var(--relleno) / 2);
  background:var(--color3);
}
/* Contraído: conserva la misma continuidad visual hacia la columna siguiente. */
.jocarsa-iu nav.compacto .contenido-columna,
.jocarsa-iu section.compacto .contenido-columna {
  width:40px;
  align-items:center;
  overflow:visible !important;
}

/* Estado normal: la ficha permanece dentro de los 40px de la columna compacta. */
.jocarsa-iu nav.compacto .contenido-columna > a,
.jocarsa-iu section.compacto .contenido-columna > article {
  width:40px !important;
  min-width:40px;
  max-width:none;
  overflow:visible;
  position:relative;
}

/* Hover: sobresale ligeramente hacia la siguiente sección. */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover {
  width:calc(40px + (var(--relleno) * .9)) !important;
  z-index:9;
}

/* Activo: atraviesa el separador igual que en el estado desplegado. */
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  width:calc(50px + (var(--relleno) * 2)) !important;
  z-index:10;
}


/* =========================================================
   V6 · DRAWER DERECHO REDIMENSIONABLE + MODAL
   ========================================================= */
.ju-drawer-overlay{position:fixed;inset:54px 0 0 0;background:rgba(17,24,39,.12);z-index:70;opacity:0;pointer-events:none;transition:opacity .25s ease}
.ju-drawer-overlay.abierto{opacity:1;pointer-events:auto}
.ju-drawer{--drawer-width:440px;position:fixed;z-index:80;top:54px;right:0;bottom:0;width:var(--drawer-width);max-width:50vw;background:var(--blanco);box-shadow:-18px 0 45px rgba(0,0,0,.18);transform:translateX(calc(100% + 20px));transition:transform .3s ease;display:flex;flex-direction:column;color:var(--negro)}
.ju-drawer.abierto{transform:translateX(0)}
.ju-drawer-resizer{position:absolute;left:-7px;top:0;bottom:0;width:7px;background:var(--color0);cursor:col-resize;z-index:3;transition:background .2s}
.ju-drawer-resizer:hover{background:var(--color)}
.ju-drawer-header{height:auto;min-height:76px;flex:none;background:var(--color);padding:14px 16px;color:var(--blanco);display:flex;align-items:center;justify-content:space-between;gap:12px}
.ju-drawer-header small{display:block;opacity:.7;font-weight:700;letter-spacing:.12em;margin-bottom:3px}
.ju-drawer-header h2{margin:0;font-size:20px}
.ju-drawer-close,.ju-modal-close{border:0;background:var(--color4);color:var(--negro);width:36px;height:36px;font-size:24px;cursor:pointer;flex:none}
.ju-drawer-body{padding:18px;overflow:auto;flex:1;min-height:0;background:var(--color3)}
.ju-drawer-body .ju-card{min-height:100%}
.ju-drawer-body .ju-form-grid{grid-template-columns:1fr}
.ju-drawer-body .ju-form-full{grid-column:auto}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-full{grid-column:1/-1}
.ju-row-editable{cursor:pointer}
.ju-row-editable:hover{background:color-mix(in srgb,var(--color2) 35%,var(--blanco))!important}
.ju-row-editable:after{content:""}
.ju-modal-layer{position:fixed;inset:0;z-index:120;display:grid;place-items:center;opacity:0;pointer-events:none;transition:opacity .22s ease;padding:24px}
.ju-modal-layer.abierto{opacity:1;pointer-events:auto}
.ju-modal-backdrop{position:absolute;inset:0;background:rgba(17,24,39,.62);backdrop-filter:blur(2px)}
.ju-modal-window{position:relative;z-index:1;width:min(650px,calc(100vw - 48px));max-height:calc(100vh - 48px);background:var(--blanco);box-shadow:0 28px 80px rgba(0,0,0,.3);clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%);transform:translateY(16px) scale(.98);transition:transform .22s ease;overflow:hidden}
.ju-modal-layer.abierto .ju-modal-window{transform:none}
.ju-modal-header{height:auto;min-height:62px;background:var(--color);color:var(--blanco);padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
.ju-modal-header h2{margin:0;font-size:19px}
.ju-modal-body{padding:22px;max-height:calc(100vh - 120px);overflow:auto}
.ju-showcase-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:18px}
.ju-showcase-box{padding:18px;background:var(--color3);min-height:150px;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)}
.ju-showcase-box h3{margin-top:0}
body.redimensionando-drawer,body.redimensionando-drawer *{cursor:col-resize!important;user-select:none!important}
@media(max-width:700px){.ju-drawer{--drawer-width:50vw;max-width:50vw}.ju-showcase-grid{grid-template-columns:1fr}}


/* =========================================================
   V7 · compacto: fusionar visualmente con la sección derecha
   ========================================================= */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover,
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  transform:translateX(16px) !important;
}
/* =========================================================
   PROMPT IA FLOTANTE + CORRECCION DE CAPAS
   ========================================================= */
.escenario{
  z-index:1 !important;
}

.ju-drawer-overlay{z-index:2000 !important}
.ju-drawer{z-index:2100 !important}
.ju-modal-layer{z-index:3000 !important}

.ju-ai-prompt{
  position:fixed;
  left:50%;
  bottom:26px;
  transform:translateX(-50%);
  width:min(720px,calc(100vw - 40px));
  background:var(--blanco);
  box-shadow:0 18px 55px rgba(0,0,0,.22);
  z-index:1500;
  color:var(--negro);
  clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  user-select:none;
}
.ju-ai-prompt.is-dragging{box-shadow:0 24px 70px rgba(0,0,0,.3)}
.ju-ai-drag{
  height:30px;
  display:flex;
  align-items:center;
  gap:8px;
  padding:0 12px;
  background:var(--color);
  color:var(--blanco);
  cursor:grab;
  font-size:11px;
  font-weight:700;
  letter-spacing:.04em;
}
.ju-ai-drag:active{cursor:grabbing}
.ju-ai-spark{font-size:15px}
.ju-ai-grip{margin-left:auto;opacity:.65;font-size:16px}
.ju-ai-compose{
  display:grid;
  grid-template-columns:1fr 42px 42px;
  gap:8px;
  align-items:end;
  padding:10px;
}
.ju-ai-compose textarea{
  width:100%;
  min-height:42px;
  max-height:150px;
  resize:none;
  border:0;
  outline:0;
  padding:11px 12px;
  background:var(--color3);
  color:var(--negro);
  font:inherit;
  line-height:1.45;
  user-select:text;
}
.ju-ai-mic,.ju-ai-send{
  width:42px;
  height:42px;
  border:0;
  cursor:pointer;
  font:inherit;
  font-size:17px;
}
.ju-ai-mic{background:var(--naranja);color:var(--blanco)}
.ju-ai-send{background:var(--azul);color:var(--blanco)}
.ju-ai-mic.is-listening{outline:3px solid color-mix(in srgb,var(--naranja) 35%,var(--blanco));filter:brightness(1.15)}
.ju-ai-send:disabled,.ju-ai-mic:disabled{opacity:.45;cursor:not-allowed}
.ju-ai-status{
  display:none;
  padding:0 12px 9px;
  font-size:11px;
  color:var(--negro);
  opacity:.7;
}
.ju-ai-status:not(:empty){display:block}
@media(max-width:700px){
  .ju-ai-prompt{width:calc(100vw - 20px);bottom:10px}
}

```
##### data
**clientes.json**
```json
{
  "titulo": "Listado de clientes",
  "columnas": [
    {
      "campo": "id",
      "etiqueta": "ID"
    },
    {
      "campo": "nombre",
      "etiqueta": "Nombre"
    },
    {
      "campo": "apellidos",
      "etiqueta": "Apellidos"
    },
    {
      "campo": "email",
      "etiqueta": "Email"
    },
    {
      "campo": "telefono",
      "etiqueta": "Teléfono"
    },
    {
      "campo": "empresa",
      "etiqueta": "Empresa"
    }
  ],
  "registros": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "+34 612 345 678",
      "empresa": "Soluciones Levante S.L."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Navarro Pérez",
      "email": "carlos.navarro@example.com",
      "telefono": "+34 623 456 789",
      "empresa": "Innovación Digital S.A."
    }
  ]
}
```
**datos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre",
      "tipo": "text"
    },
    {
      "nombre": "apellidos",
      "etiqueta": "Apellidos",
      "tipo": "text"
    },
    {
      "nombre": "email",
      "etiqueta": "Correo electrónico",
      "tipo": "email"
    },
    {
      "nombre": "telefono",
      "etiqueta": "Teléfono",
      "tipo": "tel"
    },
    {
      "nombre": "fecha_nacimiento",
      "etiqueta": "Fecha de nacimiento",
      "tipo": "date"
    },
    {
      "nombre": "numero_empleados",
      "etiqueta": "Número de empleados",
      "tipo": "number"
    },
    {
      "nombre": "facturacion",
      "etiqueta": "Facturación anual",
      "tipo": "number"
    },
    {
      "nombre": "web",
      "etiqueta": "Página web",
      "tipo": "url"
    },
    {
      "nombre": "tipo_cliente",
      "etiqueta": "Tipo de cliente",
      "tipo": "select",
      "opciones": [
        "Particular",
        "Autónomo",
        "Empresa",
        "Administración"
      ]
    },
    {
      "nombre": "activo",
      "etiqueta": "Cliente activo",
      "tipo": "checkbox"
    },
    {
      "nombre": "observaciones",
      "etiqueta": "Observaciones",
      "tipo": "textarea"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "612345678",
      "fecha_nacimiento": "1987-04-12",
      "numero_empleados": 1,
      "facturacion": 42000,
      "web": "https://example.com/laura",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Cliente desde 2023."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Sánchez López",
      "email": "carlos.sanchez@example.com",
      "telefono": "623456789",
      "fecha_nacimiento": "1979-11-03",
      "numero_empleados": 18,
      "facturacion": 380000,
      "web": "https://example.com/carlos",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Interesado en servicios de desarrollo."
    },
    {
      "id": 3,
      "nombre": "Marta",
      "apellidos": "Ruiz Navarro",
      "email": "marta.ruiz@example.com",
      "telefono": "634567890",
      "fecha_nacimiento": "1992-07-21",
      "numero_empleados": 1,
      "facturacion": 31500,
      "web": "https://example.com/marta",
      "tipo_cliente": "Particular",
      "activo": false,
      "observaciones": "Actualmente sin proyectos activos."
    },
    {
      "id": 4,
      "nombre": "Javier",
      "apellidos": "Torres Romero",
      "email": "javier.torres@example.com",
      "telefono": "645678901",
      "fecha_nacimiento": "1984-02-15",
      "numero_empleados": 42,
      "facturacion": 920000,
      "web": "https://example.com/javier",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Solicita mantenimiento periódico."
    },
    {
      "id": 5,
      "nombre": "Ana",
      "apellidos": "Gómez Pérez",
      "email": "ana.gomez@example.com",
      "telefono": "656789012",
      "fecha_nacimiento": "1990-09-28",
      "numero_empleados": 6,
      "facturacion": 125000,
      "web": "https://example.com/ana",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Contacto preferente por correo electrónico."
    }
  ]
}
```
**entidades.json**
```json
[
  {
    "emoji": "👤",
    "texto": "Clientes",
    "activo": true
  },
  {
    "emoji": "🏢",
    "texto": "Empresas"
  },
  {
    "emoji": "📞",
    "texto": "Contactos"
  },
  {
    "emoji": "📋",
    "texto": "Seguimiento"
  },
  {
    "texto": "Formulario"
  },
  {
    "texto": "Login"
  },
  {
    "texto": "Toasts"
  },
  {
    "texto": "Modal / paneles"
  }
]
```
**menu.json**
```json
[
  {
    "emoji": "👥",
    "texto": "Clientes",
    "url": "#clientes",
    "activo": true
  },
  {
    "emoji": "📦",
    "texto": "Productos",
    "url": "#productos",
    "activo": false
  },
  {
    "emoji": "🧾",
    "texto": "Pedidos",
    "url": "#pedidos",
    "activo": false
  },
  {
    "emoji": "⚙️",
    "texto": "Configuración",
    "url": "#configuracion",
    "activo": false
  }
]
```
**productos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre del producto",
      "tipo": "text"
    },
    {
      "nombre": "descripcion",
      "etiqueta": "Descripción",
      "tipo": "textarea"
    },
    {
      "nombre": "categoria",
      "etiqueta": "Categoría",
      "tipo": "select",
      "opciones": [
        "Informática",
        "Periféricos",
        "Telefonía",
        "Oficina",
        "Almacenamiento"
      ]
    },
    {
      "nombre": "precio",
      "etiqueta": "Precio",
      "tipo": "number"
    },
    {
      "nombre": "stock",
      "etiqueta": "Stock",
      "tipo": "number"
    },
    {
      "nombre": "fecha_alta",
      "etiqueta": "Fecha de alta",
      "tipo": "date"
    },
    {
      "nombre": "fabricante",
      "etiqueta": "Fabricante",
      "tipo": "text"
    },
    {
      "nombre": "web",
      "etiqueta": "Página del producto",
      "tipo": "url"
    },
    {
      "nombre": "disponible",
      "etiqueta": "Disponible",
      "tipo": "checkbox"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Portátil ProBook 15",
      "descripcion": "Portátil profesional de 15 pulgadas para oficina y desarrollo.",
      "categoria": "Informática",
      "precio": 749.99,
      "stock": 12,
      "fecha_alta": "2026-01-15",
      "fabricante": "TechNova",
      "web": "https://example.com/probook15",
      "disponible": true
    },
    {
      "id": 2,
      "nombre": "Monitor UltraView 27",
      "descripcion": "Monitor IPS de 27 pulgadas con resolución 2560x1440.",
      "categoria": "Informática",
      "precio": 229.9,
      "stock": 25,
      "fecha_alta": "2026-02-03",
      "fabricante": "UltraView",
      "web": "https://example.com/ultraview27",
      "disponible": true
    },
    {
      "id": 3,
      "nombre": "Teclado Mecánico K500",
      "descripcion": "Teclado mecánico USB para programación y uso intensivo.",
      "categoria": "Periféricos",
      "precio": 79.95,
      "stock": 40,
      "fecha_alta": "2026-02-20",
      "fabricante": "KeyMaster",
      "web": "https://example.com/k500",
      "disponible": true
    },
    {
      "id": 4,
      "nombre": "SSD Portable 2 TB",
      "descripcion": "Unidad SSD externa USB-C de alta velocidad.",
      "categoria": "Almacenamiento",
      "precio": 149.5,
      "stock": 18,
      "fecha_alta": "2026-03-12",
      "fabricante": "DataFast",
      "web": "https://example.com/ssd2tb",
      "disponible": true
    },
    {
      "id": 5,
      "nombre": "Smartphone Nova X",
      "descripcion": "Teléfono móvil con pantalla OLED y 256 GB de almacenamiento.",
      "categoria": "Telefonía",
      "precio": 499.0,
      "stock": 0,
      "fecha_alta": "2026-04-08",
      "fabricante": "NovaMobile",
      "web": "https://example.com/novax",
      "disponible": false
    }
  ]
}
```
##### js
**componentes.js**
```js
/**
 * Andrei | iu
 * Control principal de la interfaz mediante programación orientada a objetos.
 *
 * Nota sobre el namespace:
 * JavaScript no admite "|" dentro de un identificador. Por ello el namespace
 * técnico equivalente es `andrei.iu`.
 */
window.andrei = window.andrei || {};
window.andrei.iu = window.andrei.iu || {};

(() => {
  "use strict";

  class DOM {
    static uno(selector, contexto = document) {
      return contexto.querySelector(selector);
    }

    static todos(selector, contexto = document) {
      return [...contexto.querySelectorAll(selector)];
    }
  }

  class Utilidades {
    static hashTexto(texto) {
      let hash = 0;

      for (const caracter of texto) {
        hash = caracter.charCodeAt(0) + ((hash << 5) - hash);
      }

      return Math.abs(hash);
    }

    static colorTexto(texto) {
      return Utilidades.hashTexto(texto) % 2
        ? "var(--naranja)"
        : "var(--azul)";
    }
  }

  class OrigenDatos {
    static async cargarJSON(url) {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(url);
      }

      return respuesta.json();
    }
  }

  class EstadoIU {
    constructor() {
      this.menu = [];
      this.entidades = [];
      this.clientes = null;
      this.formulario = null;
      this.seleccion = "Listado";
    }
  }

  class FichaIU {
    static completar(elemento, texto) {
      const ficha = DOM.uno(".ficha", elemento);
      const etiqueta = DOM.uno(".etiqueta", elemento);

      ficha.textContent = texto.charAt(0).toUpperCase();
      ficha.style.background = Utilidades.colorTexto(texto);
      etiqueta.textContent = texto;
    }
  }

  class ToastIU {
    constructor(selectorPila = "#toastStack") {
      this.selectorPila = selectorPila;
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    obtenerPila() {
      let pila = DOM.uno(this.selectorPila);

      if (!pila) {
        pila = document.createElement("div");
        pila.id = this.selectorPila.replace(/^#/, "");
        pila.className = "ju-toast-stack";
        document.body.appendChild(pila);
      }

      return pila;
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Operación realizada") {
      const pila = this.obtenerPila();
      const toast = document.createElement("article");

      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      DOM.uno("button", toast).addEventListener("click", cerrar);
      pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class ModalIU {
    constructor() {
      this.capa = DOM.uno("#juModal");
      this.titulo = DOM.uno("#juModalTitle");
      this.cuerpo = DOM.uno("#juModalBody");
      DOM.todos("[data-modal-close]", this.capa).forEach((nodo) => nodo.addEventListener("click", () => this.cerrar()));
    }
    abrir(titulo, contenido) {
      this.titulo.textContent = titulo;
      this.cuerpo.innerHTML = contenido;
      this.capa.classList.add("abierto");
      this.capa.setAttribute("aria-hidden", "false");
    }
    cerrar() {
      this.capa.classList.remove("abierto");
      this.capa.setAttribute("aria-hidden", "true");
    }
  }

  class DrawerIU {
    constructor(aplicacion) {
      this.aplicacion = aplicacion;
      this.panel = DOM.uno("#juDrawer");
      this.overlay = DOM.uno("#juDrawerOverlay");
      this.cuerpo = DOM.uno("#juDrawerBody");
      this.modo = DOM.uno("#juDrawerMode");
      this.titulo = DOM.uno("#juDrawerTitle");
      this.resizer = DOM.uno("#juDrawerResizer");
      this.anchoMinimo = 300;
      // El máximo real se calcula siempre como el 50% del viewport.
      this.anchoMaximo = () => Math.max(this.anchoMinimo, window.innerWidth * 0.5);
      DOM.uno("#juDrawerClose").addEventListener("click", () => this.cerrar());
      this.overlay.addEventListener("click", () => this.cerrar());
      this.resizer.addEventListener("pointerdown", (e) => this.iniciarRedimension(e));
      window.addEventListener("resize", () => this.ajustarAlViewport());
      this.actualizarColumnasFormulario();
    }
    abrirCrear() { this.renderFormulario("create", null); }
    abrirActualizar(registro) { this.renderFormulario("update", registro); }
    renderFormulario(modo, registro) {
      const esCrear = modo === "create";
      this.modo.textContent = esCrear ? "CREAR" : "ACTUALIZAR";
      this.titulo.textContent = esCrear ? "Nuevo cliente" : `Editar ${registro.nombre || "registro"}`;
      const campos = this.aplicacion.estado.formulario.campos;
      this.cuerpo.innerHTML = `<article class="ju-card"><form id="juDrawerForm" class="ju-form-grid">${campos.map(c => this.campoHTML(c, registro)).join("")}<div class="ju-form-full ju-button-row"><button class="ju-btn" type="submit">${esCrear ? "Crear" : "Guardar cambios"}</button><button class="ju-btn secondary" type="button" id="juDrawerCancel">Cancelar</button></div></form></article>`;
      DOM.uno("#juDrawerCancel").addEventListener("click", () => this.cerrar());
      DOM.uno("#juDrawerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const nuevo = {};
        campos.forEach(c => {
          if (c.tipo === "checkbox") nuevo[c.nombre] = fd.has(c.nombre);
          else if (c.tipo === "number") nuevo[c.nombre] = fd.get(c.nombre) === "" ? "" : Number(fd.get(c.nombre));
          else nuevo[c.nombre] = fd.get(c.nombre) ?? "";
        });
        if (esCrear) {
          const ids = this.aplicacion.estado.clientes.registros.map(r => Number(r.id) || 0);
          if (!nuevo.id) nuevo.id = Math.max(0, ...ids) + 1;
          this.aplicacion.estado.clientes.registros.push(nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente creado", "El nuevo registro se ha añadido a la tabla.");
        } else {
          Object.assign(registro, nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente actualizado", "Los cambios se muestran inmediatamente en la tabla.");
        }
        this.aplicacion.mostrarTabla(DOM.uno("#buscador").value);
        this.cerrar();
      });
      this.ajustarAlViewport();
      this.actualizarColumnasFormulario();
      this.panel.classList.add("abierto"); this.overlay.classList.add("abierto");
      this.panel.setAttribute("aria-hidden", "false"); this.overlay.setAttribute("aria-hidden", "false");
      setTimeout(() => DOM.uno("input,select,textarea", this.cuerpo)?.focus(), 320);
    }
    campoHTML(c, registro) {
      const valor = registro?.[c.nombre] ?? "";
      const esc = (v) => String(v).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;");
      if (c.tipo === "textarea") return `<label class="ju-form-full"><span>${c.etiqueta}</span><textarea name="${c.nombre}">${esc(valor)}</textarea></label>`;
      if (c.tipo === "select") return `<label><span>${c.etiqueta}</span><select name="${c.nombre}">${(c.opciones||[]).map(o=>`<option${o===valor?' selected':''}>${o}</option>`).join("")}</select></label>`;
      if (c.tipo === "checkbox") return `<label class="ju-check ju-form-full"><input type="checkbox" name="${c.nombre}"${valor?' checked':''}><span>${c.etiqueta}</span></label>`;
      return `<label><span>${c.etiqueta}</span><input name="${c.nombre}" type="${c.tipo || 'text'}" value="${esc(valor)}"${c.nombre==='id'?' min="1"':''}></label>`;
    }
    cerrar() { this.panel.classList.remove("abierto"); this.overlay.classList.remove("abierto"); this.panel.setAttribute("aria-hidden","true"); this.overlay.setAttribute("aria-hidden","true"); }
    iniciarRedimension(e) {
      e.preventDefault(); const inicio=e.clientX, anchoInicial=this.panel.getBoundingClientRect().width;
      this.resizer.setPointerCapture(e.pointerId); document.body.classList.add("redimensionando-drawer"); this.panel.style.transition="none";
      const mover=(ev)=>{
        const ancho=Math.min(this.anchoMaximo(),Math.max(this.anchoMinimo,anchoInicial+(inicio-ev.clientX)));
        this.panel.style.setProperty("--drawer-width",`${ancho}px`);
        this.actualizarColumnasFormulario(ancho);
      };
      const fin=()=>{ this.resizer.removeEventListener("pointermove",mover); this.panel.style.transition=""; document.body.classList.remove("redimensionando-drawer"); };
      this.resizer.addEventListener("pointermove",mover); this.resizer.addEventListener("pointerup",fin,{once:true}); this.resizer.addEventListener("pointercancel",fin,{once:true});
    }
    actualizarColumnasFormulario(ancho = this.panel.getBoundingClientRect().width) {
      // <= 25% del navegador: una columna. > 25% y hasta 50%: dos columnas.
      this.panel.classList.toggle("ju-drawer-dos-columnas", ancho > window.innerWidth * 0.25);
    }
    ajustarAlViewport() {
      const actual = this.panel.getBoundingClientRect().width;
      const maximo = this.anchoMaximo();
      if (actual > maximo) {
        this.panel.style.setProperty("--drawer-width", `${maximo}px`);
        this.actualizarColumnasFormulario(maximo);
      } else {
        this.actualizarColumnasFormulario(actual);
      }
    }
  }

  class GestorColumnas {
    constructor() {
      this.anchoMinimo = 100;
      this.anchoMaximo = 600;
    }

    activar() {
      this.activarMinimizacion();
      this.activarSeparadores();
    }

    activarMinimizacion() {
      DOM.todos(".minimizar").forEach((boton) => {
        const columna = boton.closest("nav,section");
        columna.dataset.ancho = columna.getBoundingClientRect().width;

        boton.addEventListener("click", () => {
          this.alternarColumna(columna, boton);
        });
      });
    }

    alternarColumna(columna, boton) {
      if (columna.classList.contains("compacto")) {
        const ancho = parseFloat(columna.dataset.ancho) || 250;

        columna.classList.remove("compacto");
        columna.style.flexBasis = `${ancho}px`;
        columna.style.width = `${ancho}px`;
        boton.textContent = "◀";
        return;
      }

      columna.dataset.ancho = columna.getBoundingClientRect().width;
      columna.style.flexBasis = `${columna.dataset.ancho}px`;
      columna.style.width = `${columna.dataset.ancho}px`;

      void columna.offsetWidth;

      columna.classList.add("compacto");
      boton.textContent = "▶";
    }

    activarSeparadores() {
      DOM.todos(".separador").forEach((separador) => {
        separador.addEventListener("pointerdown", (evento) => {
          this.iniciarRedimension(separador, evento);
        });
      });
    }

    iniciarRedimension(separador, evento) {
      evento.preventDefault();

      const columna = separador.previousElementSibling;

      if (!columna || columna.classList.contains("compacto")) {
        return;
      }

      const inicio = evento.clientX;
      const anchoInicial = columna.getBoundingClientRect().width;

      columna.style.transition = "none";
      document.body.classList.add("redimensionando");
      separador.setPointerCapture(evento.pointerId);

      const mover = (eventoMovimiento) => {
        const ancho = Math.min(
          this.anchoMaximo,
          Math.max(this.anchoMinimo, anchoInicial + eventoMovimiento.clientX - inicio)
        );

        columna.style.width = `${ancho}px`;
        columna.style.flexBasis = `${ancho}px`;
        columna.dataset.ancho = ancho;
      };

      const terminar = () => {
        separador.removeEventListener("pointermove", mover);
        columna.style.transition = "";
        document.body.classList.remove("redimensionando");
      };

      separador.addEventListener("pointermove", mover);
      separador.addEventListener("pointerup", terminar, { once: true });
      separador.addEventListener("pointercancel", terminar, { once: true });
    }
  }

  class AplicacionIU {
    constructor() {
      this.estado = new EstadoIU();
      this.toast = new ToastIU();
      this.columnas = new GestorColumnas();
      this.modal = null;
      this.drawer = null;
    }

    async iniciar() {
      try {
        [
          this.estado.menu,
          this.estado.entidades,
          this.estado.clientes,
          this.estado.formulario
        ] = await Promise.all([
          OrigenDatos.cargarJSON("data/menu.json"),
          OrigenDatos.cargarJSON("data/entidades.json"),
          OrigenDatos.cargarJSON("data/clientes.json"),
          OrigenDatos.cargarJSON("data/datos.json")
        ]);

        this.modal = new ModalIU();
        this.drawer = new DrawerIU(this);
        this.renderMenu();
        this.renderEntidades();
        this.mostrarTabla();
        this.columnas.activar();
        this.activarEventos();
      } catch (error) {
        DOM.uno("#escenario").innerHTML = `
          <div class="panel">
            <h2>No se pudieron cargar los orígenes de datos</h2>
            <p>Sirve esta carpeta mediante HTTP, por ejemplo: <code>python3 -m http.server 8000</code></p>
            <pre>${error}</pre>
          </div>
        `;
      }
    }

    renderMenu() {
      const contenedor = DOM.uno("#navegacion .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.menu.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-nav").content.cloneNode(true);
        const enlace = DOM.uno("a", nodo);

        FichaIU.completar(enlace, elemento.texto);
        enlace.classList.toggle("activo", Boolean(elemento.activo));
        enlace.dataset.indice = indice;

        enlace.addEventListener("click", (evento) => {
          evento.preventDefault();
          DOM.todos("#navegacion a").forEach((item) => item.classList.remove("activo"));
          enlace.classList.add("activo");
          this.mostrarTabla();
        });

        contenedor.appendChild(nodo);
      });
    }

    renderEntidades() {
      const contenedor = DOM.uno("#entidades .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.entidades.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-card").content.cloneNode(true);
        const articulo = DOM.uno("article", nodo);

        FichaIU.completar(articulo, elemento.texto);
        articulo.classList.toggle("activo", elemento.texto === this.estado.seleccion);
        articulo.dataset.indice = indice;

        articulo.addEventListener("click", () => {
          this.estado.seleccion = elemento.texto;
          this.renderEntidades();
          this.mostrarVista(elemento.texto);
        });

        articulo.addEventListener("dragstart", (evento) => {
          evento.dataTransfer.setData("text/plain", elemento.texto);
        });

        contenedor.appendChild(nodo);
      });
    }

    mostrarVista(vista) {
      if (vista === "Elemento" || vista === "Formulario") {
        this.mostrarFormularioUI();
      } else if (vista === "Login") {
        this.mostrarLoginDemo();
      } else if (vista === "Toasts") {
        this.mostrarToastsDemo();
      } else if (vista === "Modal / paneles") {
        this.mostrarModalPanelesDemo();
      } else {
        this.mostrarTabla();
      }
    }

    mostrarTabla(filtro = "") {
      const datos = this.estado.clientes;
      const registros = datos.registros.filter((registro) =>
        Object.values(registro)
          .join(" ")
          .toLowerCase()
          .includes(filtro.toLowerCase())
      );
      const escenario = DOM.uno("#escenario");
      const tabla = document.createElement("table");

      escenario.innerHTML = "";
      tabla.innerHTML = `
        <caption>${datos.titulo}</caption>
        <thead>
          <tr>${datos.columnas.map((columna) => `<th>${columna.etiqueta}</th>`).join("")}</tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th colspan="${Math.max(1, datos.columnas.length - 1)}">Total</th>
            <td>${registros.length}</td>
          </tr>
        </tfoot>
      `;

      const cuerpo = DOM.uno("tbody", tabla);

      registros.forEach((registro) => {
        const fila = DOM.uno("#tpl-fila").content.cloneNode(true).querySelector("tr");

        datos.columnas.forEach((columna) => {
          const celda = document.createElement("td");
          celda.textContent = registro[columna.campo] ?? "";
          fila.appendChild(celda);
        });

        fila.classList.add("ju-row-editable");
        fila.title = "Clic para editar en el panel lateral";
        fila.addEventListener("click", () => this.drawer.abrirActualizar(registro));
        cuerpo.appendChild(fila);
      });

      escenario.appendChild(tabla);
    }

    mostrarFormularioUI() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Formularios</h2>
          <p>Controles reutilizables con el lenguaje visual jocarsa-iu.</p>
          <form id="demoForm" class="ju-form-grid">
            <label>
              <span>Nombre</span>
              <input name="nombre" required>
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required>
            </label>
            <label>
              <span>Tipo</span>
              <select name="tipo">
                <option>Cliente</option>
                <option>Proveedor</option>
                <option>Alumno</option>
              </select>
            </label>
            <label>
              <span>Fecha</span>
              <input name="fecha" type="date">
            </label>
            <label class="ju-form-full">
              <span>Descripción</span>
              <textarea name="descripcion"></textarea>
            </label>
            <label class="ju-check ju-form-full">
              <input type="checkbox" name="activo">
              <span>Registro activo</span>
            </label>
            <div class="ju-form-full ju-button-row">
              <button class="ju-btn" type="submit">Guardar</button>
              <button class="ju-btn secondary" type="reset">Limpiar</button>
            </div>
          </form>
        </article>
      `;

      DOM.uno("#demoForm").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }

    mostrarLoginDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <div class="ju-login-layout" style="margin:auto">
          <article class="ju-login-side">
            <div class="ju-login-brand">
              <img src="https://static.jocarsa.com/logos/white.svg" alt="">
              <h1 class="ju-login-product-title">jocarsa | interfaz integrada</h1>
              <p>Pantalla de acceso basada en jocarsa-iu.</p>
            </div>
          </article>
          <article class="ju-login-card">
            <h2>Iniciar sesión</h2>
            <form id="loginDemo" class="ju-form-grid">
              <label class="ju-form-full">
                <span>Email</span>
                <input type="email" required>
              </label>
              <label class="ju-form-full">
                <span>Contraseña</span>
                <input type="password" required>
              </label>
              <label class="ju-check ju-form-full">
                <input type="checkbox">
                <span>Mantener sesión</span>
              </label>
              <div class="ju-form-full ju-login-actions">
                <button class="ju-btn">Entrar</button>
                <a class="ju-text-link" href="login.html">Abrir pantalla completa</a>
              </div>
            </form>
          </article>
        </div>
      `;

      DOM.uno("#loginDemo").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Acceso simulado",
          "Login capturado como componente reutilizable."
        );
      });
    }

    mostrarToastsDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Toasts</h2>
          <p>Mensajes emergentes reutilizables con autocierre y cierre manual.</p>
          <div class="ju-button-row">
            <button class="ju-btn" data-t="success">Éxito</button>
            <button class="ju-btn secondary" data-t="info">Información</button>
            <button class="ju-btn secondary" data-t="warning">Aviso</button>
            <button class="ju-btn secondary" data-t="danger">Error</button>
          </div>
        </article>
      `;

      const titulos = {
        success: "Correcto",
        info: "Información",
        warning: "Revisar",
        danger: "Error"
      };

      DOM.todos("[data-t]", escenario).forEach((boton) => {
        boton.addEventListener("click", () => {
          this.toast.mostrar(
            boton.dataset.t,
            titulos[boton.dataset.t],
            "Ejemplo de mensaje emergente de la librería."
          );
        });
      });
    }

    mostrarModalPanelesDemo() {
      const escenario = DOM.uno("#escenario");
      escenario.innerHTML = `<article class="ju-card"><h2>Librería · Modal y panel lateral</h2><p>Dos patrones reutilizables para acciones que no deben sustituir el contenido del escenario.</p><div class="ju-showcase-grid"><div class="ju-showcase-box"><h3>Ventana modal</h3><p>Bloquea temporalmente la interfaz para confirmaciones, avisos o contenido focal.</p><button class="ju-btn" id="demoModal">Abrir modal</button></div><div class="ju-showcase-box"><h3>Panel lateral</h3><p>Entra desde la derecha, mantiene visible el contexto y puede redimensionarse arrastrando su borde izquierdo.</p><button class="ju-btn" id="demoDrawer">Abrir panel de creación</button></div></div></article>`;
      DOM.uno("#demoModal").addEventListener("click", () => {
        this.modal.abrir("Ejemplo de ventana modal", `<p>Esta es la nueva ventana modal reutilizable de <strong>jocarsa | iu</strong>.</p><p>Se puede cerrar con el botón ×, haciendo clic fuera o pulsando Escape.</p><div class="ju-button-row"><button class="ju-btn" id="modalAceptar">Aceptar</button></div>`);
        DOM.uno("#modalAceptar").addEventListener("click", () => this.modal.cerrar());
      });
      DOM.uno("#demoDrawer").addEventListener("click", () => this.drawer.abrirCrear());
    }

    activarEventos() {
      DOM.uno("#buscador").addEventListener("input", (evento) => {
        this.mostrarTabla(evento.target.value);
      });

      DOM.uno("#nuevo").addEventListener("click", () => {
        this.drawer.abrirCrear();
      });

      const escenario = DOM.uno("#escenario");

      escenario.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        escenario.classList.add("drag-over");
      });

      escenario.addEventListener("dragleave", () => {
        escenario.classList.remove("drag-over");
      });

      escenario.addEventListener("drop", (evento) => {
        evento.preventDefault();
        escenario.classList.remove("drag-over");

        const vista = evento.dataTransfer.getData("text/plain");
        this.estado.seleccion = vista;
        this.renderEntidades();
        this.mostrarVista(vista);
      });

      document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
          this.drawer?.cerrar();
          this.modal?.cerrar();
        }
      });
    }
  }

  window.jocarsa.iu.DOM = DOM;
  window.jocarsa.iu.Utilidades = Utilidades;
  window.jocarsa.iu.OrigenDatos = OrigenDatos;
  window.jocarsa.iu.EstadoIU = EstadoIU;
  window.jocarsa.iu.FichaIU = FichaIU;
  window.jocarsa.iu.ToastIU = ToastIU;
  window.jocarsa.iu.ModalIU = ModalIU;
  window.jocarsa.iu.DrawerIU = DrawerIU;
  window.jocarsa.iu.GestorColumnas = GestorColumnas;
  window.jocarsa.iu.AplicacionIU = AplicacionIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.aplicacion = new AplicacionIU();
    window.jocarsa.iu.aplicacion.iniciar();
  });
})();
/* =========================================================
   Prompt IA flotante · Ollama local
   ========================================================= */
(() => {
  const iniciarPromptIA = () => {
    const prompt = document.querySelector('#juAiPrompt');
    const drag = document.querySelector('#juAiDrag');
    const input = document.querySelector('#juAiInput');
    const mic = document.querySelector('#juAiMic');
    const send = document.querySelector('#juAiSend');
    const status = document.querySelector('#juAiStatus');
    const escenario = document.querySelector('#escenario');
    if (!prompt || !drag || !input || !mic || !send || !status || !escenario) return;

    let enviando = false;
    let reconocimiento = null;
    let escuchando = false;

    const autoResize = () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 150) + 'px';
    };

    const fijarDentroViewport = (left, top) => {
      const r = prompt.getBoundingClientRect();
      const margen = 8;
      return {
        left: Math.max(margen, Math.min(left, window.innerWidth - r.width - margen)),
        top: Math.max(62, Math.min(top, window.innerHeight - r.height - margen))
      };
    };

    // Al primer drag se abandona el centrado CSS y se trabaja con coordenadas absolutas de viewport.
    drag.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      const r = prompt.getBoundingClientRect();
      const offsetX = e.clientX - r.left;
      const offsetY = e.clientY - r.top;
      prompt.style.transform = 'none';
      prompt.style.bottom = 'auto';
      prompt.style.left = r.left + 'px';
      prompt.style.top = r.top + 'px';
      prompt.classList.add('is-dragging');
      drag.setPointerCapture(e.pointerId);

      const mover = (ev) => {
        const p = fijarDentroViewport(ev.clientX - offsetX, ev.clientY - offsetY);
        prompt.style.left = p.left + 'px';
        prompt.style.top = p.top + 'px';
      };
      const soltar = (ev) => {
        prompt.classList.remove('is-dragging');
        drag.releasePointerCapture(ev.pointerId);
        drag.removeEventListener('pointermove', mover);
        drag.removeEventListener('pointerup', soltar);
        drag.removeEventListener('pointercancel', soltar);
      };
      drag.addEventListener('pointermove', mover);
      drag.addEventListener('pointerup', soltar);
      drag.addEventListener('pointercancel', soltar);
    });

    window.addEventListener('resize', () => {
      if (!prompt.style.top) return;
      const r = prompt.getBoundingClientRect();
      const p = fijarDentroViewport(r.left, r.top);
      prompt.style.left = p.left + 'px';
      prompt.style.top = p.top + 'px';
    });

    const enviar = async () => {
      const texto = input.value.trim();
      if (!texto || enviando) return;
      enviando = true;
      send.disabled = true;
      mic.disabled = true;
      status.textContent = 'Ollama está generando el nuevo contenido del escenario…';

      try {
        const respuesta = await fetch('ollama.php', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({mensaje:texto})
        });
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
        const datos = await respuesta.json();
        const contenido = datos.respuesta ?? 'No he podido responder.';

        // La respuesta sustituye el escenario principal. Permite HTML generado por el modelo.
        escenario.innerHTML = contenido;
        status.textContent = 'Escenario actualizado.';
        input.value = '';
        autoResize();
        setTimeout(() => { if (status.textContent === 'Escenario actualizado.') status.textContent = ''; }, 2200);
      } catch (error) {
        console.error(error);
        status.textContent = 'No se ha podido conectar con Ollama.';
      } finally {
        enviando = false;
        send.disabled = false;
        mic.disabled = false;
        input.focus();
      }
    };

    send.addEventListener('click', enviar);
    input.addEventListener('input', autoResize);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        enviar();
      }
    });

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      mic.disabled = true;
      mic.title = 'Reconocimiento de voz no disponible en este navegador';
    } else {
      mic.addEventListener('click', () => {
        if (escuchando && reconocimiento) {
          reconocimiento.stop();
          return;
        }
        reconocimiento = new SpeechRecognition();
        reconocimiento.lang = 'es-ES';
        reconocimiento.interimResults = false;
        reconocimiento.continuous = false;
        reconocimiento.onstart = () => {
          escuchando = true;
          mic.classList.add('is-listening');
          status.textContent = 'Escuchando…';
        };
        reconocimiento.onresult = (evento) => {
          const texto = evento.results[0][0].transcript;
          input.value = input.value.trim() ? input.value.trim() + ' ' + texto : texto;
          autoResize();
          input.focus();
        };
        reconocimiento.onerror = (evento) => {
          console.error('Error de reconocimiento:', evento.error);
          status.textContent = 'No se ha podido reconocer la voz.';
        };
        reconocimiento.onend = () => {
          escuchando = false;
          mic.classList.remove('is-listening');
          if (status.textContent === 'Escuchando…') status.textContent = '';
        };
        reconocimiento.start();
      });
    }

    autoResize();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciarPromptIA);
  else iniciarPromptIA();
})();

```
**demo-ui.js**
```js
/**
 * Andrei | iu · demostraciones
 * Namespace técnico: andrei.iu
 */
window.andrei = window.andrei || {};
window.andrei.iu = window.andrei.iu || {};

(() => {
  "use strict";

  class ToastDemo {
    constructor(selectorPila = "#toastStack") {
      this.pila = document.querySelector(selectorPila);
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Mensaje de ejemplo") {
      if (!this.pila) {
        return;
      }

      const toast = document.createElement("article");
      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button" aria-label="Cerrar">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      toast.querySelector(".ju-toast-close").addEventListener("click", cerrar);
      this.pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class DemoIU {
    constructor() {
      this.toast = new ToastDemo();
      this.textos = {
        success: ["Guardado correctamente", "La operación se ha completado."],
        info: ["Información", "Este es un mensaje informativo."],
        warning: ["Revisión necesaria", "Conviene revisar los datos antes de continuar."],
        danger: ["Operación fallida", "No se ha podido completar la operación."]
      };
    }

    iniciar() {
      document.addEventListener("click", (evento) => {
        const boton = evento.target.closest("[data-toast]");

        if (!boton) {
          return;
        }

        const tipo = boton.dataset.toast;
        this.toast.mostrar(tipo, ...this.textos[tipo]);
      });

      document.getElementById("formDemo")?.addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }
  }

  window.jocarsa.iu.ToastDemo = ToastDemo;
  window.jocarsa.iu.DemoIU = DemoIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.demo = new DemoIU();
    window.jocarsa.iu.demo.iniciar();
  });
})();
```
##### templates
**article.html**
```html
<article draggable="true">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</article>

```
**celda.html**
```html
<td>
</td>

```
**fila.html**
```html
<tr>
</tr>

```
**formulario-ui.html**
```html
<article class="ju-card">
 <h2>
  {{titulo}}
 </h2>
 <form class="ju-form-grid">
  {{campos}}
  <div class="ju-form-full ju-button-row">
   <button class="ju-btn" type="submit">
    Guardar
   </button>
   <button class="ju-btn secondary" type="reset">
    Limpiar
   </button>
  </div>
 </form>
</article>

```
**formulario.html**
```html
<form class="formulario-dinamico">
 <div class="campos">
 </div>
 <div class="acciones">
  <button type="submit">
   Guardar
  </button>
  <button type="reset">
   Limpiar
  </button>
 </div>
</form>

```
**nav.html**
```html
<a href="#">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</a>

```
**toast.html**
```html
<article class="ju-toast is-{{tipo}}" role="status">
 <div class="ju-toast-icon">
  {{icono}}
 </div>
 <div>
  <p class="ju-toast-title">
   {{titulo}}
  </p>
  <p class="ju-toast-text">
   {{texto}}
  </p>
 </div>
 <button aria-label="Cerrar" class="ju-toast-close" type="button">
  ×
 </button>
</article>

```
#### 004-ajustes
**README.md**
```markdown
# jocarsa · subunidad 007 integrada v3

Proyecto integrado de componentes, plantillas, orígenes de datos y eventos.

## Demostraciones

- `index.html`: aplicación integrada con menús, fichas, tabla, formulario dinámico, drag & drop, columnas minimizables y separadores redimensionables.
- `login.html`: pantalla de login jocarsa-iu. Busca `jocarsa.png` en la raíz del proyecto y la usa como fondo a pantalla completa.
- `formularios.html`: catálogo demostrativo de formularios y controles.
- `toasts.html`: demostración independiente de mensajes toast success/info/warning/danger.

## Fondo del login

Coloca la imagen con este nombre exacto:

`jocarsa.png`

en la raíz del proyecto, junto a `index.html` y `login.html`.

## Ejecución

Como el proyecto usa `fetch()` para los orígenes JSON, servir por HTTP:

`python3 -m http.server 8000`

Abrir `http://localhost:8000/`.


## Refactorización de código

Esta versión mantiene la estructura visual y funcional de la versión 5, pero presenta HTML, templates, CSS, JSON y JavaScript en formato legible y no minificado.

El JavaScript de control se ha reorganizado con programación orientada a objetos. El namespace conceptual solicitado es `jocarsa | iu`; como el carácter `|` es un operador de JavaScript y no puede formar parte de un identificador, el namespace técnico utilizado es:

## v4
El renderizador Markdown normaliza barras verticales y guiones Unicode generados por LLM, espacios invisibles/NBSP y tablas con separadores de longitud variable. También desenvuelve bloques ```markdown antes de procesar tablas, manteniendo los bloques de código reales.

```
**formularios.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | formularios
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formulario completo
      </span>
     </a>
     <a class="" href="#controles">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Controles
      </span>
     </a>
     <a class="" href="#eventos">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Eventos
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Formulario completo
     </h2>
     <p>
      Ejemplo de controles reutilizables manteniendo el escenario de jocarsa-iu.
     </p>
     <form class="ju-form-grid" id="formDemo">
      <label>
       <span>
        Nombre
       </span>
       <input name="nombre" required=""/>
      </label>
      <label>
       <span>
        Email
       </span>
       <input name="email" required="" type="email"/>
      </label>
      <label>
       <span>
        Tipo
       </span>
       <select name="tipo">
        <option>
         Cliente
        </option>
        <option>
         Proveedor
        </option>
        <option>
         Alumno
        </option>
       </select>
      </label>
      <label>
       <span>
        Fecha
       </span>
       <input name="fecha" type="date"/>
      </label>
      <label>
       <span>
        Teléfono
       </span>
       <input name="telefono" type="tel"/>
      </label>
      <label>
       <span>
        Web
       </span>
       <input name="web" placeholder="https://" type="url"/>
      </label>
      <label class="ju-form-full">
       <span>
        Descripción
       </span>
       <textarea name="descripcion"></textarea>
      </label>
      <fieldset class="ju-fieldset ju-form-full">
       <strong>
        Preferencias
       </strong>
       <div class="ju-check-group">
        <label class="ju-check">
         <input name="activo" type="checkbox"/>
         <span>
          Activo
         </span>
        </label>
        <label class="ju-check">
         <input checked="" name="nivel" type="radio" value="normal"/>
         <span>
          Normal
         </span>
        </label>
        <label class="ju-check">
         <input name="nivel" type="radio" value="prioritario"/>
         <span>
          Prioritario
         </span>
        </label>
       </div>
      </fieldset>
      <div class="ju-form-full ju-button-row">
       <button class="ju-btn" type="submit">
        Guardar
       </button>
       <button class="ju-btn secondary" type="reset">
        Limpiar
       </button>
      </div>
     </form>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
**index.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | interfaz integrada
  </title>
  <link href="https://static.jocarsa.com/logos/white.svg" rel="shortcut icon" type="image/svg+xml"/>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="andrei-iu">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input id="buscador" placeholder="Buscar en clientes…" type="search"/>
    <button id="nuevo">
     + Nuevo
    </button>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav id="navegacion">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </nav>
   <div class="separador" data-left="navegacion">
   </div>
   <section id="entidades">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </section>
   <div class="separador" data-left="entidades">
   </div>
   <div class="escenario" id="escenario">
   </div>
  </main>
  <template id="tpl-nav">
   <a href="#">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </a>
  </template>
  <template id="tpl-card">
   <article draggable="true">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </article>
  </template>
  <template id="tpl-fila">
   <tr>
   </tr>
  </template>
  <!-- Componentes flotantes globales -->
  <div class="ju-drawer-overlay" id="juDrawerOverlay" aria-hidden="true"></div>
  <aside class="ju-drawer" id="juDrawer" aria-hidden="true" aria-label="Editor lateral">
   <div class="ju-drawer-resizer" id="juDrawerResizer" title="Arrastra para redimensionar"></div>
   <header class="ju-drawer-header">
    <div>
     <small id="juDrawerMode">CREAR</small>
     <h2 id="juDrawerTitle">Nuevo registro</h2>
    </div>
    <button class="ju-drawer-close" id="juDrawerClose" type="button" aria-label="Cerrar">×</button>
   </header>
   <div class="ju-drawer-body" id="juDrawerBody"></div>
  </aside>

  <div class="ju-modal-layer" id="juModal" aria-hidden="true">
   <div class="ju-modal-backdrop" data-modal-close></div>
   <section class="ju-modal-window" role="dialog" aria-modal="true" aria-labelledby="juModalTitle">
    <header class="ju-modal-header">
     <h2 id="juModalTitle">Ventana modal</h2>
     <button class="ju-modal-close" type="button" data-modal-close aria-label="Cerrar">×</button>
    </header>
    <div class="ju-modal-body" id="juModalBody"></div>
   </section>
  </div>


  <!-- Prompt IA flotante -->
  <div class="ju-ai-prompt" id="juAiPrompt" aria-label="Prompt de inteligencia artificial">
   <div class="ju-ai-drag" id="juAiDrag" title="Arrastra para mover">
    <span class="ju-ai-spark">✦</span>
    <span>Asistente local</span>
    <span class="ju-ai-window-actions"><button id="juAiMinimize" type="button" title="Minimizar" aria-label="Minimizar">—</button><span class="ju-ai-grip" title="Arrastra para mover">⠿</span></span>
   </div>
   <div class="ju-ai-compose">
    <textarea id="juAiInput" rows="1" placeholder="Pide a Ollama que transforme el escenario…"></textarea>
    <button class="ju-ai-mic" id="juAiMic" type="button" title="Entrada por voz" aria-label="Entrada por voz">🎤</button>
    <button class="ju-ai-send" id="juAiSend" type="button" title="Enviar" aria-label="Enviar">➜</button>
   </div>
   <div class="ju-ai-status" id="juAiStatus" aria-live="polite"></div>
   <div class="ju-ai-resizer" id="juAiResizer" title="Arrastra para redimensionar"></div>
  </div>

  <script src="js/componentes.js">
  </script>
 </body>
</html>

```
**login.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | login
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-login-page">
  <main class="ju-login-layout">
   <article class="ju-login-side">
    <div class="ju-login-brand">
     <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
     <h1 class="ju-login-product-title">
      Andrei | interfaz integrada
     </h1>
     <p>
      Accede a tu espacio de trabajo.
     </p>
    </div>
   </article>
   <article class="ju-login-card">
    <h2>
     Iniciar sesión
    </h2>
    <p>
     Introduce tus credenciales.
    </p>
    <form action="index.html" class="ju-form-grid">
     <label class="ju-form-full">
      <span>
       Email
      </span>
      <input placeholder="nombre@ejemplo.com" required="" type="email"/>
     </label>
     <label class="ju-form-full">
      <span>
       Contraseña
      </span>
      <input placeholder="••••••••" required="" type="password"/>
     </label>
     <label class="ju-check ju-form-full">
      <input type="checkbox"/>
      <span>
       Mantener la sesión iniciada
      </span>
     </label>
     <div class="ju-form-full ju-login-actions">
      <button class="ju-btn" type="submit">
       Entrar
      </button>
      <a class="ju-text-link" href="#">
       ¿Olvidaste la contraseña?
      </a>
     </div>
    </form>
    <div class="ju-button-row">
     <a class="ju-btn secondary" href="formularios.html">
      Formularios
     </a>
     <a class="ju-btn secondary" href="toasts.html">
      Toasts
     </a>
    </div>
   </article>
  </main>
 </body>
</html>

```
**ollama.php**
```php
<?php

header("Content-Type: application/json; charset=utf-8");


// Recoger JSON enviado desde JavaScript

$entrada = json_decode(
    file_get_contents("php://input"),
    true
);

$mensaje = trim($entrada["mensaje"] ?? "");

if ($mensaje === "") {
    http_response_code(400);
    echo json_encode(["respuesta" => "El prompt está vacío."]);
    exit;
}


// Petición para Ollama

$datos = [
    "model" => "phi3:mini",

    "prompt" => $mensaje,

    "stream" => false
];


// Conectar con Ollama

$ch = curl_init(
    "http://localhost:11434/api/generate"
);

curl_setopt(
    $ch,
    CURLOPT_POST,
    true
);

curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "Content-Type: application/json"
    ]
);

curl_setopt(
    $ch,
    CURLOPT_POSTFIELDS,
    json_encode($datos)
);

curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);


// Ejecutar

$respuesta = curl_exec($ch);

curl_close($ch);


// Decodificar respuesta de Ollama

$resultado = json_decode(
    $respuesta,
    true
);


// Obtener únicamente el texto

$texto = $resultado["response"] ?? "No he podido responder.";


// Responder al navegador

echo json_encode([
    "respuesta" => $texto
]);
```
**toasts.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | toasts
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Mensajes toast
      </span>
     </a>
     <a class="" href="#success">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Éxito
      </span>
     </a>
     <a class="" href="#info">
      <span class="ficha">
       I
      </span>
      <span class="etiqueta">
       Información
      </span>
     </a>
     <a class="" href="#warning">
      <span class="ficha">
       A
      </span>
      <span class="etiqueta">
       Aviso
      </span>
     </a>
     <a class="" href="#danger">
      <span class="ficha">
       X
      </span>
      <span class="etiqueta">
       Error
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Mensajes emergentes Toast
     </h2>
     <p>
      El escenario conserva la misma estructura de la aplicación principal. Pulsa un estado para generar el mensaje.
     </p>
     <div class="ju-button-row">
      <button class="ju-btn" data-toast="success">
       Éxito
      </button>
      <button class="ju-btn secondary" data-toast="info">
       Información
      </button>
      <button class="ju-btn secondary" data-toast="warning">
       Aviso
      </button>
      <button class="ju-btn secondary" data-toast="danger">
       Error
      </button>
     </div>
     <div style="margin-top:24px">
      <h3>
       Comportamiento
      </h3>
      <p>
       Los mensajes se apilan abajo a la derecha, permiten cierre manual y desaparecen automáticamente.
      </p>
     </div>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
##### css
**estilo.css**
```css
:root {
  --naranja:#f97316;
  --azul:#1d4ed8;
  --azul-medio:#1e40af;
  --azul-claro:#eff6ff;
  --azul-palido:#dbeafe;
  --blanco:#ffffff;
  --negro:#111827;
  --relleno:12px;
  --texto:12px;
  --chaflan:12px;
  --color0:var(--negro);
  --color:var(--azul);
  --color2:var(--azul-medio);
  --color3:var(--azul-claro);
  --color4:var(--azul-palido);
  --texto-nav:var(--blanco);
  --ancho-nav:210px;
  --ancho-section:260px
}
* {
  box-sizing:border-box
}
html,body {
  width:100%;
  height:100%;
  margin:0
}
.jocarsa-iu {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
header {
  height:54px;
  flex:none;
  background:var(--color);
  display:flex;
  align-items:center;
  gap:12px;
  padding:12px;
  color:var(--texto-nav)
}
.corporativo {
  display:flex;
  align-items:center;
  gap:10px;
  flex:1
}
.corporativo img {
  width:28px;
  height:28px
}
.corporativo h1 {
  font-size:20px;
  font-weight:bold;
  margin:0
}
header input,header button {
  border:0;
  padding:8px 10px;
  background:var(--color2);
  color:inherit;
  outline:none
}
header input {
  min-width:260px;
  background:var(--color0)
}
main {
  display:flex;
  flex:1;
  min-height:0
}
nav,section {
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  padding:12px;
  background:var(--color);
  color:white;
  overflow:hidden;
  flex:none;
  transition:width .25s
}
nav {
  width:var(--ancho-nav)
}
section {
  width:var(--ancho-section);
  background:var(--color3);
  color:var(--negro);
  padding-left:3px;
}
.titulo-columna {
  font-weight:bold;
  opacity:.75
}
.contenido-columna {
  display:flex;
  flex-direction:column;
  gap:10px;
  overflow:auto;
  min-height:0
}
.contenido-columna a,.contenido-columna article {
  display:flex;
  align-items:center;
  gap:9px;
  padding:9px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  cursor:pointer;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%);
  transition:.2s
}
.contenido-columna article {
  background:var(--color3)
}
.contenido-columna .activo {
  transform:translateX(8px);
  background:var(--naranja);
  color:var(--blanco);
}
.ficha {
  width:28px;
  height:28px;
  display:grid;
  place-items:center;
  border-radius:50%;
  color:var(--blanco);
  background:var(--azul);
  font-weight:bold;
  flex:none
}
.minimizar {
  position:absolute;
  right:5px;
  bottom:5px;
  border:0;
  width:28px;
  height:28px;
  cursor:pointer
}
.compacto {
  width:58px!important
}
.compacto .titulo-columna,.compacto .etiqueta {
  display:none
}
.compacto .contenido-columna {
  overflow:hidden
}
.separador {
  width:5px;
  cursor:col-resize;
  background:var(--color0);
  flex:none
}
.escenario {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3);
  padding-left: 5px;position:relative;z-index:1000;
}
table {
  width:100%;
  border-collapse:collapse;
  background:var(--blanco)
}
caption {
  text-align:left;
  padding:12px;
  background:var(--color3);
  font-weight:bold
}
th,td {
  padding:10px;
  border-bottom:1px solid rgba(17,24,39,.18);
  text-align:left
}
thead {
  background:var(--color)
}
tbody tr:hover {
  background:var(--color4)
}
.panel {
  background:var(--blanco);
  padding:16px;
  max-width:1000px
}
.campos {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:12px
}
.campo {
  display:flex;
  flex-direction:column;
  gap:5px
}
.campo input,.campo textarea,.campo select {
  padding:9px;
  border:1px solid rgba(17,24,39,.35)
}
.campo textarea {
  min-height:90px
}
.acciones {
  display:flex;
  gap:8px;
  margin-top:14px
}
.acciones button {
  padding:9px 14px;
  border:0;
  background:var(--naranja);
  color:var(--blanco)
}
.drag-over {
  outline:3px dashed var(--color0)
}
.estado {
  margin:0 0 10px;
  padding:8px;
  background:rgba(255,255,255,.55)
}
/* =========================================================
   REGLAS 010: SEPARADORES + MENUS CONTRAIDOS
   ========================================================= */
nav,section {
  transition:width .3s ease,flex-basis .3s ease,padding .3s ease
}
.separador {
  flex:0 0 7px;
  width:7px;
  min-width:7px;
  padding:0;
  cursor:col-resize;
  position:relative;
  z-index:4;
  transition:background .3s ease
}
nav + .separador {
  background:var(--color2)
}
section + .separador {
  background:var(--color3)
}
.separador:hover {
  background:var(--color4)
}
body.redimensionando {
  cursor:col-resize;
  user-select:none
}
body.redimensionando * {
  cursor:col-resize!important
}
.minimizar {
  position:absolute;
  bottom:var(--relleno);
  left:var(--relleno);
  right:var(--relleno);
  width:auto;
  height:28px;
  border:0;
  background:var(--color2);
  color:inherit;
  cursor:pointer;
  font:inherit;
  z-index:20;
  transition:left .3s,right .3s,width .3s,background .3s
}
section .minimizar {
  background:var(--color3)
}
.minimizar:hover {
  background:var(--color4)
}
nav.compacto,section.compacto {
  flex-basis:52px!important;
  width:52px!important;
  padding-left:6px;
  padding-right:6px;
  align-items:center
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  width:40px;
  overflow:hidden;
  align-items:center
}
nav.compacto .contenido-columna a,section.compacto .contenido-columna article {
  width:40px!important;
  min-width:40px;
  max-width:40px;
  height:40px;
  min-height:40px;
  max-height:40px;
  padding:6px;
  justify-content:center;
  overflow:hidden;
  flex:none;
  transform:none!important
}
nav.compacto .titulo-columna,section.compacto .titulo-columna,nav.compacto .etiqueta,section.compacto .etiqueta {
  display:none
}
nav.compacto .minimizar,section.compacto .minimizar {
  left:6px;
  right:6px;
  width:40px
}
/* =========================================================
   LIBRERIA: FORMULARIOS
   ========================================================= */
.ju-card {
  background:white;
  padding:18px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-form-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
  margin-top:16px
}
.ju-form-full {
  grid-column:1/-1
}
.ju-form-grid label {
  display:flex;
  flex-direction:column;
  gap:8px;
  font-size:14px;
  font-weight:500
}
.ju-form-grid input,.ju-form-grid select,.ju-form-grid textarea {
  width:100%;
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  color:var(--negro);
  padding:12px 14px;
  font:inherit;
  outline:none;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-form-grid textarea {
  min-height:110px;
  resize:vertical
}
.ju-form-grid input:focus,.ju-form-grid select:focus,.ju-form-grid textarea:focus {
  border-color:var(--naranja);
  box-shadow:0 0 0 4px color-mix(in srgb,var(--naranja) 18%,transparent);
  background:var(--blanco)
}
.ju-check {
  display:inline-flex!important;
  flex-direction:row!important;
  align-items:center;
  gap:10px!important
}
.ju-check input {
  width:18px!important;
  height:18px;
  clip-path:none!important
}
.ju-btn {
  border:0;
  padding:11px 16px;
  background:var(--naranja);
  color:var(--blanco);
  cursor:pointer;
  font:inherit;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-btn.secondary {
  background:var(--color4);
  color:var(--negro)
}
.ju-button-row {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:16px
}
/* LOGIN jocarsa-iu */
.ju-login-page {
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:radial-gradient(circle at top left,var(--color4),transparent 35%),linear-gradient(180deg,var(--color3),var(--color4));
  padding:30px
}
.ju-login-layout {
  width:min(920px,100%);
  display:grid;
  grid-template-columns:minmax(280px,400px) minmax(320px,520px);
  gap:24px
}
.ju-login-side,.ju-login-card {
  padding:28px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-login-side {
  background:linear-gradient(180deg,var(--color0),var(--color));
  color:white;
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-card {
  background:var(--blanco)
}
.ju-login-brand {
  text-align:center
}
.ju-login-brand img {
  width:72px;
  height:72px
}
.ju-login-product-title {
  font-size:28px;
  margin:12px 0 6px
}
.ju-login-card h2 {
  margin-top:0
}
.ju-login-actions {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px
}
.ju-text-link {
  color:var(--color);
  font-weight:bold;
  text-decoration:none
}
/* TOASTS jocarsa-iu */
.ju-toast-stack {
  position:fixed;
  right:22px;
  bottom:22px;
  z-index:1000;
  width:min(420px,calc(100vw - 44px));
  display:flex;
  flex-direction:column;
  gap:12px;
  pointer-events:none
}
.ju-toast {
  pointer-events:auto;
  position:relative;
  display:grid;
  grid-template-columns:42px 1fr auto;
  gap:12px;
  align-items:start;
  padding:14px;
  background:rgba(255,255,255,.97);
  box-shadow:0 18px 38px rgba(0,0,0,.14);
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%);
  transform:translateX(22px);
  opacity:0;
  animation:juToastIn .28s ease forwards
}
.ju-toast:before {
  content:"";
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:7px;
  background:var(--azul)
}
.ju-toast.is-success:before {
  background:var(--azul-medio)
}
.ju-toast.is-warning:before {
  background:var(--naranja)
}
.ju-toast.is-danger:before {
  background:var(--negro)
}
.ju-toast-icon {
  width:42px;
  height:42px;
  display:grid;
  place-items:center;
  background:var(--color3);
  font-weight:800
}
.ju-toast-title {
  margin:0 0 3px;
  font-weight:800
}
.ju-toast-text {
  margin:0;
  color:var(--negro);
  opacity:.7;
  font-size:13px
}
.ju-toast-close {
  border:0;
  background:transparent;
  font-size:20px;
  cursor:pointer
}
.ju-toast.is-leaving {
  animation:juToastOut .22s ease forwards
}
@keyframes juToastIn {
  to {
    transform:translateX(0);
    opacity:1
  }
}
@keyframes juToastOut {
  to {
    transform:translateX(24px);
    opacity:0
  }
}
@media(max-width:800px) {
  .ju-form-grid,.ju-login-layout {
    grid-template-columns:1fr
  }
}
/* =========================================================
   V3 · AJUSTES DE COHERENCIA JOCARSA-IU
   ========================================================= */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
html,body,button,input,select,textarea {
  font-family:Ubuntu,Arial,sans-serif
}
/* Las cajas de ambas columnas quedan centradas dentro de su menú. */
nav .contenido-columna,section .contenido-columna {
  align-items:center;
  width:100%
}
nav .contenido-columna>a,section .contenido-columna>article {
  width:100%;
  margin-left:auto;
  margin-right:auto
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  margin-left:auto;
  margin-right:auto
}
/* Login: composición centrada y fondo de proyecto. jocarsa.png vive en la raíz. */
.ju-login-page {
  position:relative;
  isolation:isolate;
  min-height:100vh;
  margin:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 20px;
  background-image:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
}
.ju-login-layout {
  width:min(980px,100%);
  margin:auto;
  align-items:stretch
}
.ju-login-side,.ju-login-card {
  min-height:450px
}
.ju-login-card {
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-brand {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center
}
/* Páginas de demostración de la librería */
.ju-demo-page {
  min-height:100vh;
  overflow:auto;
  background:var(--color3);
  color:var(--negro)
}
.ju-demo-header {
  min-height:64px;
  background:var(--color);
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:12px 20px
}
.ju-demo-header h1 {
  margin:0;
  font-size:20px;
  font-weight:500
}
.ju-demo-header p {
  margin:3px 0 0;
  opacity:.75
}
.ju-demo-header nav {
  width:auto!important;
  background:transparent;
  padding:0;
  display:flex;
  flex-direction:row;
  gap:8px;
  overflow:visible
}
.ju-demo-header a {
  color:white;
  text-decoration:none;
  padding:10px 14px;
  background:var(--color2);
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-demo-main {
  width:min(1100px,calc(100% - 40px));
  margin:32px auto;
  display:grid;
  gap:20px
}
.ju-demo-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:20px
}
.ju-demo-page .ju-card h2,.ju-demo-page .ju-card h3 {
  margin-top:0
}
.ju-fieldset {
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:12px
}
.ju-check-group {
  display:flex;
  gap:18px;
  flex-wrap:wrap
}
@media(max-width:800px) {
  .ju-demo-grid {
    grid-template-columns:1fr
  }
  .ju-demo-header {
    align-items:flex-start;
    flex-direction:column
  }
  .ju-demo-header nav {
    flex-wrap:wrap
  }
}
/* =========================================================
   V4 · fidelidad jocarsa-iu 010
   ========================================================= */
/* Header completo: corporativo / herramientas / usuario */
header .corporativo {
  flex:1
}
header #herramientas {
  display:flex;
  gap:var(--relleno);
  align-items:center;
  justify-content:center;
  flex:2;
  height:100%
}
header #usuario {
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:var(--relleno);
  flex:1;
  height:100%
}
header #usuario .imagen {
  width:28px;
  height:28px;
  background:var(--color2);
  border-radius:100px;
  flex:none
}
header #usuario>div:last-child {
  display:flex;
  align-items:center;
  gap:var(--relleno);
  flex:none
}
header #usuario p {
  margin:0;
  white-space:nowrap
}
header #usuario a {
  background:var(--color2);
  border:0;
  padding:calc(var(--relleno)/2);
  height:28px;
  display:flex;
  align-items:center;
  color:var(--texto-nav);
  text-decoration:none;
  font:inherit
}
/* Las fichas de letra son cuadrados achaflanados, nunca círculos */
.ficha {
  border-radius:0!important;
  clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)
}
/* El destacado atraviesa visualmente el separador, sin provocar scroll horizontal. */
nav {
  overflow:visible!important;
  z-index:3
}
nav .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
section {
  overflow:visible!important;
  z-index:200;
}
section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
.contenido-columna .activo {
  transform:none
}
#navegacion .contenido-columna a,#entidades .contenido-columna article {
  width:100%;
  height:40px;
  flex:none;
  transition:width .3s ease,background .3s ease
}
#navegacion .contenido-columna a:hover,#entidades .contenido-columna article:hover {
  width:calc(100% + var(--relleno)*.9)
}
#navegacion .contenido-columna a.activo,#entidades .contenido-columna article.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
nav.compacto .contenido-columna a:hover,nav.compacto .contenido-columna a.activo,section.compacto .contenido-columna article:hover,section.compacto .contenido-columna article.activo {
  width:40px!important
}
/* Login realmente centrado + fondo jocarsa.png de la raíz */
body.ju-login-page {
  width:100%;
  height:100vh;
  min-height:100vh;
  margin:0;
  display:grid!important;
  place-items:center;
  overflow:auto;
  padding:30px;
  background:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png') center center/cover no-repeat fixed
}
body.ju-login-page main.ju-login-layout {
  flex:none!important;
  min-height:0!important;
  margin:0!important;
  width:min(920px,calc(100vw - 60px));
  align-self:center;
  justify-self:center
}
/* Páginas de demostración: mismo esqueleto de dos menús + escenario */
body.ju-library-page {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
body.ju-library-page main {
  display:flex;
  flex:1;
  min-height:0;
  overflow:hidden
}
body.ju-library-page .library-nav {
  width:var(--ancho-nav);
  flex:0 0 var(--ancho-nav);
  background:var(--color);
  color:white;
  padding:12px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-section {
  width:var(--ancho-section);
  flex:0 0 var(--ancho-section);
  background:var(--color3);
  color:var(--negro);
  padding:12px 12px 12px 3px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-nav .contenido-columna,body.ju-library-page .library-section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible
}
body.ju-library-page .library-nav a,body.ju-library-page .library-section a {
  height:40px;
  flex:none;
  display:flex;
  align-items:center;
  gap:9px;
  padding:6px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%)
}
body.ju-library-page .library-section a {
  background:var(--color3)
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  background:var(--naranja);
  color:var(--blanco)
}
body.ju-library-page .library-stage {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3)
}
body.ju-library-page .library-stage>.ju-card {
  max-width:1100px
}
/* =========================================================
   V5 · continuidad entre columnas sin scroll horizontal
   ========================================================= */
/*
  No usamos un contenedor scrollable alrededor de las fichas: cuando un
  elemento activo es más ancho que su columna, overflow:auto convierte el
  desbordamiento horizontal en una barra de scroll. En jocarsa-iu el
  destacado debe poder atravesar el límite de la columna y cubrir el
  separador visualmente.
*/
.jocarsa-iu nav .contenido-columna, .jocarsa-iu section .contenido-columna, body.ju-library-page .library-nav .contenido-columna, body.ju-library-page .library-section .contenido-columna {
  overflow:visible !important;
  width:100%;
  min-width:0;
  align-items:stretch;
}
/* Las fichas normales ocupan siempre todo el ancho útil de su columna. */
.jocarsa-iu nav .contenido-columna > a, .jocarsa-iu section .contenido-columna > article, body.ju-library-page .library-nav .contenido-columna > a, body.ju-library-page .library-section .contenido-columna > a {
  width:100%;
  max-width:none;
  margin:0;
  flex:0 0 40px;
}
/* Hover y selección continúan físicamente hacia la columna siguiente. */
.jocarsa-iu nav .contenido-columna > a:hover, .jocarsa-iu section .contenido-columna > article:hover, body.ju-library-page .library-nav .contenido-columna > a:hover, body.ju-library-page .library-section .contenido-columna > a:hover {
  width:calc(100% + (var(--relleno) * .9));
  position:relative;
  z-index:9;
}
.jocarsa-iu nav .contenido-columna > a.activo, .jocarsa-iu section .contenido-columna > article.activo, body.ju-library-page .library-nav .contenido-columna > a.activo, body.ju-library-page .library-section .contenido-columna > a.activo {
  width:calc(100% + (var(--relleno) * 2));
  position:relative;
  z-index:10;
}
/* El separador queda por debajo del destacado, como en 010. */
.jocarsa-iu main .separador, body.ju-library-page main .separador {
  z-index:4
}
.jocarsa-iu nav, body.ju-library-page .library-nav {
  z-index:6
}
.jocarsa-iu section, body.ju-library-page .library-section {
  z-index:500
}
/* La columna central de las demos conserva exactamente la misma geometría
   que la columna central de index.html. */
body.ju-library-page .library-section {
  padding:var(--relleno);
  padding-left:3px;
}
body.ju-library-page .library-section .contenido-columna > a {
  padding:calc(var(--relleno) / 2);
  height:40px;
  min-height:40px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  gap:calc(var(--relleno) / 2);
  background:var(--color3);
}
/* Contraído: conserva la misma continuidad visual hacia la columna siguiente. */
.jocarsa-iu nav.compacto .contenido-columna,
.jocarsa-iu section.compacto .contenido-columna {
  width:40px;
  align-items:center;
  overflow:visible !important;
}

/* Estado normal: la ficha permanece dentro de los 40px de la columna compacta. */
.jocarsa-iu nav.compacto .contenido-columna > a,
.jocarsa-iu section.compacto .contenido-columna > article {
  width:40px !important;
  min-width:40px;
  max-width:none;
  overflow:visible;
  position:relative;
}

/* Hover: sobresale ligeramente hacia la siguiente sección. */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover {
  width:calc(40px + (var(--relleno) * .9)) !important;
  z-index:9;
}

/* Activo: atraviesa el separador igual que en el estado desplegado. */
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  width:calc(50px + (var(--relleno) * 2)) !important;
  z-index:10;
}


/* =========================================================
   V6 · DRAWER DERECHO REDIMENSIONABLE + MODAL
   ========================================================= */
.ju-drawer-overlay{position:fixed;inset:54px 0 0 0;background:rgba(17,24,39,.12);z-index:70;opacity:0;pointer-events:none;transition:opacity .25s ease}
.ju-drawer-overlay.abierto{opacity:1;pointer-events:auto}
.ju-drawer{--drawer-width:440px;position:fixed;z-index:80;top:54px;right:0;bottom:0;width:var(--drawer-width);max-width:50vw;background:var(--blanco);box-shadow:-18px 0 45px rgba(0,0,0,.18);transform:translateX(calc(100% + 20px));transition:transform .3s ease;display:flex;flex-direction:column;color:var(--negro)}
.ju-drawer.abierto{transform:translateX(0)}
.ju-drawer-resizer{position:absolute;left:-7px;top:0;bottom:0;width:7px;background:var(--color0);cursor:col-resize;z-index:3;transition:background .2s}
.ju-drawer-resizer:hover{background:var(--color)}
.ju-drawer-header{height:auto;min-height:76px;flex:none;background:var(--color);padding:14px 16px;color:var(--blanco);display:flex;align-items:center;justify-content:space-between;gap:12px}
.ju-drawer-header small{display:block;opacity:.7;font-weight:700;letter-spacing:.12em;margin-bottom:3px}
.ju-drawer-header h2{margin:0;font-size:20px}
.ju-drawer-close,.ju-modal-close{border:0;background:var(--color4);color:var(--negro);width:36px;height:36px;font-size:24px;cursor:pointer;flex:none}
.ju-drawer-body{padding:18px;overflow:auto;flex:1;min-height:0;background:var(--color3)}
.ju-drawer-body .ju-card{min-height:100%}
.ju-drawer-body .ju-form-grid{grid-template-columns:1fr}
.ju-drawer-body .ju-form-full{grid-column:auto}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-full{grid-column:1/-1}
.ju-row-editable{cursor:pointer}
.ju-row-editable:hover{background:color-mix(in srgb,var(--color2) 35%,var(--blanco))!important}
.ju-row-editable:after{content:""}
.ju-modal-layer{position:fixed;inset:0;z-index:120;display:grid;place-items:center;opacity:0;pointer-events:none;transition:opacity .22s ease;padding:24px}
.ju-modal-layer.abierto{opacity:1;pointer-events:auto}
.ju-modal-backdrop{position:absolute;inset:0;background:rgba(17,24,39,.62);backdrop-filter:blur(2px)}
.ju-modal-window{position:relative;z-index:1;width:min(650px,calc(100vw - 48px));max-height:calc(100vh - 48px);background:var(--blanco);box-shadow:0 28px 80px rgba(0,0,0,.3);clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%);transform:translateY(16px) scale(.98);transition:transform .22s ease;overflow:hidden}
.ju-modal-layer.abierto .ju-modal-window{transform:none}
.ju-modal-header{height:auto;min-height:62px;background:var(--color);color:var(--blanco);padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
.ju-modal-header h2{margin:0;font-size:19px}
.ju-modal-body{padding:22px;max-height:calc(100vh - 120px);overflow:auto}
.ju-showcase-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:18px}
.ju-showcase-box{padding:18px;background:var(--color3);min-height:150px;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)}
.ju-showcase-box h3{margin-top:0}
body.redimensionando-drawer,body.redimensionando-drawer *{cursor:col-resize!important;user-select:none!important}
@media(max-width:700px){.ju-drawer{--drawer-width:50vw;max-width:50vw}.ju-showcase-grid{grid-template-columns:1fr}}


/* =========================================================
   V7 · compacto: fusionar visualmente con la sección derecha
   ========================================================= */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover,
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  transform:translateX(16px) !important;
}
/* =========================================================
   PROMPT IA FLOTANTE + CORRECCION DE CAPAS
   ========================================================= */
.escenario{
  z-index:1 !important;
}

.ju-drawer-overlay{z-index:2000 !important}
.ju-drawer{z-index:2100 !important}
.ju-modal-layer{z-index:3000 !important}

.ju-ai-prompt{
  position:fixed;
  left:50%;
  bottom:26px;
  transform:translateX(-50%);
  width:min(720px,calc(100vw - 40px));
  background:var(--blanco);
  box-shadow:0 18px 55px rgba(0,0,0,.22);
  z-index:1500;
  color:var(--negro);
  clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  user-select:none;
}
.ju-ai-prompt.is-dragging{box-shadow:0 24px 70px rgba(0,0,0,.3)}
.ju-ai-drag{
  height:30px;
  display:flex;
  align-items:center;
  gap:8px;
  padding:0 12px;
  background:var(--color);
  color:var(--blanco);
  cursor:grab;
  font-size:11px;
  font-weight:700;
  letter-spacing:.04em;
}
.ju-ai-drag:active{cursor:grabbing}
.ju-ai-spark{font-size:15px}
.ju-ai-grip{margin-left:auto;opacity:.65;font-size:16px}
.ju-ai-compose{
  display:grid;
  grid-template-columns:1fr 42px 42px;
  gap:8px;
  align-items:end;
  padding:10px;
}
.ju-ai-compose textarea{
  width:100%;
  min-height:42px;
  max-height:150px;
  resize:none;
  border:0;
  outline:0;
  padding:11px 12px;
  background:var(--color3);
  color:var(--negro);
  font:inherit;
  line-height:1.45;
  user-select:text;
}
.ju-ai-mic,.ju-ai-send{
  width:42px;
  height:42px;
  border:0;
  cursor:pointer;
  font:inherit;
  font-size:17px;
}
.ju-ai-mic{background:var(--naranja);color:var(--blanco)}
.ju-ai-send{background:var(--azul);color:var(--blanco)}
.ju-ai-mic.is-listening{outline:3px solid color-mix(in srgb,var(--naranja) 35%,var(--blanco));filter:brightness(1.15)}
.ju-ai-send:disabled,.ju-ai-mic:disabled{opacity:.45;cursor:not-allowed}
.ju-ai-status{
  display:none;
  padding:0 12px 9px;
  font-size:11px;
  color:var(--negro);
  opacity:.7;
}
.ju-ai-status:not(:empty){display:block}
@media(max-width:700px){
  .ju-ai-prompt{width:calc(100vw - 20px);bottom:10px}
}

/* V2 prompt: minimizar, redimensionar y salida IA maquetada */
.ju-ai-prompt{
  min-width:360px;min-height:82px;max-width:calc(100vw - 16px);max-height:calc(100vh - 70px);
  overflow:hidden;resize:none;
}
.ju-ai-window-actions{margin-left:auto;display:flex;align-items:center;gap:8px}
.ju-ai-window-actions button{width:24px;height:22px;border:0;background:rgba(255,255,255,.14);color:var(--blanco);cursor:pointer;font:inherit;font-weight:800;line-height:1}
.ju-ai-window-actions button:hover{background:rgba(255,255,255,.28)}
.ju-ai-grip{margin-left:0!important;cursor:grab}
.ju-ai-prompt.is-minimized{width:230px!important;min-width:230px;min-height:30px;height:30px!important}
.ju-ai-prompt.is-minimized .ju-ai-compose,.ju-ai-prompt.is-minimized .ju-ai-status,.ju-ai-prompt.is-minimized .ju-ai-resizer{display:none}
.ju-ai-resizer{position:absolute;right:0;bottom:0;width:18px;height:18px;cursor:nwse-resize;z-index:3}
.ju-ai-resizer:after{content:"";position:absolute;right:4px;bottom:4px;width:8px;height:8px;border-right:2px solid var(--color);border-bottom:2px solid var(--color);opacity:.75}

/* Salida del asistente: panel de lectura integrado en el escenario */
.ju-ai-result{background:var(--blanco);max-width:1200px;margin:0 auto;padding:22px 24px;box-shadow:0 8px 26px rgba(0,0,0,.08);clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%);color:var(--negro);line-height:1.55}
.ju-ai-result h1,.ju-ai-result h2,.ju-ai-result h3{color:var(--color0);margin:1.1em 0 .55em}
.ju-ai-result h1:first-child,.ju-ai-result h2:first-child,.ju-ai-result h3:first-child{margin-top:0}
.ju-ai-result p{margin:.65em 0}
.ju-ai-result ul,.ju-ai-result ol{padding-left:24px}
.ju-ai-result code{background:var(--color3);padding:2px 5px}
.ju-ai-result pre{background:var(--negro);color:var(--blanco);padding:14px;overflow:auto;white-space:pre-wrap}
.ju-ai-result pre code{background:transparent;padding:0;color:inherit}
.ju-ai-result blockquote{margin:12px 0;padding:10px 14px;border-left:5px solid var(--color);background:var(--color3)}
.ju-ai-result table{width:100%;border-collapse:collapse;margin:16px 0;background:var(--blanco)}
.ju-ai-result caption{background:var(--color2);padding:12px;text-align:left;font-weight:bold}
.ju-ai-result thead{background:var(--azul);color:var(--blanco)}
.ju-ai-result th,.ju-ai-result td{padding:10px;border-bottom:1px solid rgba(17,24,39,.18);text-align:left}
.ju-ai-result tbody tr:hover{background:var(--color4)}
.ju-ai-result .ju-ai-table-wrap{width:100%;overflow:auto;margin:16px 0}
.ju-ai-result .ju-ai-table-wrap table{margin:0;min-width:520px}
@media(max-width:700px){.ju-ai-prompt{min-width:280px}.ju-ai-result{padding:16px}}

```
##### data
**clientes.json**
```json
{
  "titulo": "Listado de clientes",
  "columnas": [
    {
      "campo": "id",
      "etiqueta": "ID"
    },
    {
      "campo": "nombre",
      "etiqueta": "Nombre"
    },
    {
      "campo": "apellidos",
      "etiqueta": "Apellidos"
    },
    {
      "campo": "email",
      "etiqueta": "Email"
    },
    {
      "campo": "telefono",
      "etiqueta": "Teléfono"
    },
    {
      "campo": "empresa",
      "etiqueta": "Empresa"
    }
  ],
  "registros": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "+34 612 345 678",
      "empresa": "Soluciones Levante S.L."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Navarro Pérez",
      "email": "carlos.navarro@example.com",
      "telefono": "+34 623 456 789",
      "empresa": "Innovación Digital S.A."
    }
  ]
}
```
**datos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre",
      "tipo": "text"
    },
    {
      "nombre": "apellidos",
      "etiqueta": "Apellidos",
      "tipo": "text"
    },
    {
      "nombre": "email",
      "etiqueta": "Correo electrónico",
      "tipo": "email"
    },
    {
      "nombre": "telefono",
      "etiqueta": "Teléfono",
      "tipo": "tel"
    },
    {
      "nombre": "fecha_nacimiento",
      "etiqueta": "Fecha de nacimiento",
      "tipo": "date"
    },
    {
      "nombre": "numero_empleados",
      "etiqueta": "Número de empleados",
      "tipo": "number"
    },
    {
      "nombre": "facturacion",
      "etiqueta": "Facturación anual",
      "tipo": "number"
    },
    {
      "nombre": "web",
      "etiqueta": "Página web",
      "tipo": "url"
    },
    {
      "nombre": "tipo_cliente",
      "etiqueta": "Tipo de cliente",
      "tipo": "select",
      "opciones": [
        "Particular",
        "Autónomo",
        "Empresa",
        "Administración"
      ]
    },
    {
      "nombre": "activo",
      "etiqueta": "Cliente activo",
      "tipo": "checkbox"
    },
    {
      "nombre": "observaciones",
      "etiqueta": "Observaciones",
      "tipo": "textarea"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "612345678",
      "fecha_nacimiento": "1987-04-12",
      "numero_empleados": 1,
      "facturacion": 42000,
      "web": "https://example.com/laura",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Cliente desde 2023."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Sánchez López",
      "email": "carlos.sanchez@example.com",
      "telefono": "623456789",
      "fecha_nacimiento": "1979-11-03",
      "numero_empleados": 18,
      "facturacion": 380000,
      "web": "https://example.com/carlos",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Interesado en servicios de desarrollo."
    },
    {
      "id": 3,
      "nombre": "Marta",
      "apellidos": "Ruiz Navarro",
      "email": "marta.ruiz@example.com",
      "telefono": "634567890",
      "fecha_nacimiento": "1992-07-21",
      "numero_empleados": 1,
      "facturacion": 31500,
      "web": "https://example.com/marta",
      "tipo_cliente": "Particular",
      "activo": false,
      "observaciones": "Actualmente sin proyectos activos."
    },
    {
      "id": 4,
      "nombre": "Javier",
      "apellidos": "Torres Romero",
      "email": "javier.torres@example.com",
      "telefono": "645678901",
      "fecha_nacimiento": "1984-02-15",
      "numero_empleados": 42,
      "facturacion": 920000,
      "web": "https://example.com/javier",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Solicita mantenimiento periódico."
    },
    {
      "id": 5,
      "nombre": "Ana",
      "apellidos": "Gómez Pérez",
      "email": "ana.gomez@example.com",
      "telefono": "656789012",
      "fecha_nacimiento": "1990-09-28",
      "numero_empleados": 6,
      "facturacion": 125000,
      "web": "https://example.com/ana",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Contacto preferente por correo electrónico."
    }
  ]
}
```
**entidades.json**
```json
[
  {
    "emoji": "👤",
    "texto": "Clientes",
    "activo": true
  },
  {
    "emoji": "🏢",
    "texto": "Empresas"
  },
  {
    "emoji": "📞",
    "texto": "Contactos"
  },
  {
    "emoji": "📋",
    "texto": "Seguimiento"
  },
  {
    "texto": "Formulario"
  },
  {
    "texto": "Login"
  },
  {
    "texto": "Toasts"
  },
  {
    "texto": "Modal / paneles"
  }
]
```
**menu.json**
```json
[
  {
    "emoji": "👥",
    "texto": "Clientes",
    "url": "#clientes",
    "activo": true
  },
  {
    "emoji": "📦",
    "texto": "Productos",
    "url": "#productos",
    "activo": false
  },
  {
    "emoji": "🧾",
    "texto": "Pedidos",
    "url": "#pedidos",
    "activo": false
  },
  {
    "emoji": "⚙️",
    "texto": "Configuración",
    "url": "#configuracion",
    "activo": false
  }
]
```
**productos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre del producto",
      "tipo": "text"
    },
    {
      "nombre": "descripcion",
      "etiqueta": "Descripción",
      "tipo": "textarea"
    },
    {
      "nombre": "categoria",
      "etiqueta": "Categoría",
      "tipo": "select",
      "opciones": [
        "Informática",
        "Periféricos",
        "Telefonía",
        "Oficina",
        "Almacenamiento"
      ]
    },
    {
      "nombre": "precio",
      "etiqueta": "Precio",
      "tipo": "number"
    },
    {
      "nombre": "stock",
      "etiqueta": "Stock",
      "tipo": "number"
    },
    {
      "nombre": "fecha_alta",
      "etiqueta": "Fecha de alta",
      "tipo": "date"
    },
    {
      "nombre": "fabricante",
      "etiqueta": "Fabricante",
      "tipo": "text"
    },
    {
      "nombre": "web",
      "etiqueta": "Página del producto",
      "tipo": "url"
    },
    {
      "nombre": "disponible",
      "etiqueta": "Disponible",
      "tipo": "checkbox"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Portátil ProBook 15",
      "descripcion": "Portátil profesional de 15 pulgadas para oficina y desarrollo.",
      "categoria": "Informática",
      "precio": 749.99,
      "stock": 12,
      "fecha_alta": "2026-01-15",
      "fabricante": "TechNova",
      "web": "https://example.com/probook15",
      "disponible": true
    },
    {
      "id": 2,
      "nombre": "Monitor UltraView 27",
      "descripcion": "Monitor IPS de 27 pulgadas con resolución 2560x1440.",
      "categoria": "Informática",
      "precio": 229.9,
      "stock": 25,
      "fecha_alta": "2026-02-03",
      "fabricante": "UltraView",
      "web": "https://example.com/ultraview27",
      "disponible": true
    },
    {
      "id": 3,
      "nombre": "Teclado Mecánico K500",
      "descripcion": "Teclado mecánico USB para programación y uso intensivo.",
      "categoria": "Periféricos",
      "precio": 79.95,
      "stock": 40,
      "fecha_alta": "2026-02-20",
      "fabricante": "KeyMaster",
      "web": "https://example.com/k500",
      "disponible": true
    },
    {
      "id": 4,
      "nombre": "SSD Portable 2 TB",
      "descripcion": "Unidad SSD externa USB-C de alta velocidad.",
      "categoria": "Almacenamiento",
      "precio": 149.5,
      "stock": 18,
      "fecha_alta": "2026-03-12",
      "fabricante": "DataFast",
      "web": "https://example.com/ssd2tb",
      "disponible": true
    },
    {
      "id": 5,
      "nombre": "Smartphone Nova X",
      "descripcion": "Teléfono móvil con pantalla OLED y 256 GB de almacenamiento.",
      "categoria": "Telefonía",
      "precio": 499.0,
      "stock": 0,
      "fecha_alta": "2026-04-08",
      "fabricante": "NovaMobile",
      "web": "https://example.com/novax",
      "disponible": false
    }
  ]
}
```
##### js
**componentes.js**
```js
/**
 * andrei | iu
 * Control principal de la interfaz mediante programación orientada a objetos.
 *
 * Nota sobre el namespace:
 * JavaScript no admite "|" dentro de un identificador. Por ello el namespace
 * técnico equivalente es `andrei.iu`.
 */
window.andrei = window.andrei || {};
window.andrei.iu = window.andrei.iu || {};

(() => {
  "use strict";

  class DOM {
    static uno(selector, contexto = document) {
      return contexto.querySelector(selector);
    }

    static todos(selector, contexto = document) {
      return [...contexto.querySelectorAll(selector)];
    }
  }

  class Utilidades {
    static hashTexto(texto) {
      let hash = 0;

      for (const caracter of texto) {
        hash = caracter.charCodeAt(0) + ((hash << 5) - hash);
      }

      return Math.abs(hash);
    }

    static colorTexto(texto) {
      return Utilidades.hashTexto(texto) % 2
        ? "var(--naranja)"
        : "var(--azul)";
    }
  }

  class OrigenDatos {
    static async cargarJSON(url) {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(url);
      }

      return respuesta.json();
    }
  }

  class EstadoIU {
    constructor() {
      this.menu = [];
      this.entidades = [];
      this.clientes = null;
      this.formulario = null;
      this.seleccion = "Listado";
    }
  }

  class FichaIU {
    static completar(elemento, texto) {
      const ficha = DOM.uno(".ficha", elemento);
      const etiqueta = DOM.uno(".etiqueta", elemento);

      ficha.textContent = texto.charAt(0).toUpperCase();
      ficha.style.background = Utilidades.colorTexto(texto);
      etiqueta.textContent = texto;
    }
  }

  class ToastIU {
    constructor(selectorPila = "#toastStack") {
      this.selectorPila = selectorPila;
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    obtenerPila() {
      let pila = DOM.uno(this.selectorPila);

      if (!pila) {
        pila = document.createElement("div");
        pila.id = this.selectorPila.replace(/^#/, "");
        pila.className = "ju-toast-stack";
        document.body.appendChild(pila);
      }

      return pila;
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Operación realizada") {
      const pila = this.obtenerPila();
      const toast = document.createElement("article");

      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      DOM.uno("button", toast).addEventListener("click", cerrar);
      pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class ModalIU {
    constructor() {
      this.capa = DOM.uno("#juModal");
      this.titulo = DOM.uno("#juModalTitle");
      this.cuerpo = DOM.uno("#juModalBody");
      DOM.todos("[data-modal-close]", this.capa).forEach((nodo) => nodo.addEventListener("click", () => this.cerrar()));
    }
    abrir(titulo, contenido) {
      this.titulo.textContent = titulo;
      this.cuerpo.innerHTML = contenido;
      this.capa.classList.add("abierto");
      this.capa.setAttribute("aria-hidden", "false");
    }
    cerrar() {
      this.capa.classList.remove("abierto");
      this.capa.setAttribute("aria-hidden", "true");
    }
  }

  class DrawerIU {
    constructor(aplicacion) {
      this.aplicacion = aplicacion;
      this.panel = DOM.uno("#juDrawer");
      this.overlay = DOM.uno("#juDrawerOverlay");
      this.cuerpo = DOM.uno("#juDrawerBody");
      this.modo = DOM.uno("#juDrawerMode");
      this.titulo = DOM.uno("#juDrawerTitle");
      this.resizer = DOM.uno("#juDrawerResizer");
      this.anchoMinimo = 300;
      // El máximo real se calcula siempre como el 50% del viewport.
      this.anchoMaximo = () => Math.max(this.anchoMinimo, window.innerWidth * 0.5);
      DOM.uno("#juDrawerClose").addEventListener("click", () => this.cerrar());
      this.overlay.addEventListener("click", () => this.cerrar());
      this.resizer.addEventListener("pointerdown", (e) => this.iniciarRedimension(e));
      window.addEventListener("resize", () => this.ajustarAlViewport());
      this.actualizarColumnasFormulario();
    }
    abrirCrear() { this.renderFormulario("create", null); }
    abrirActualizar(registro) { this.renderFormulario("update", registro); }
    renderFormulario(modo, registro) {
      const esCrear = modo === "create";
      this.modo.textContent = esCrear ? "CREAR" : "ACTUALIZAR";
      this.titulo.textContent = esCrear ? "Nuevo cliente" : `Editar ${registro.nombre || "registro"}`;
      const campos = this.aplicacion.estado.formulario.campos;
      this.cuerpo.innerHTML = `<article class="ju-card"><form id="juDrawerForm" class="ju-form-grid">${campos.map(c => this.campoHTML(c, registro)).join("")}<div class="ju-form-full ju-button-row"><button class="ju-btn" type="submit">${esCrear ? "Crear" : "Guardar cambios"}</button><button class="ju-btn secondary" type="button" id="juDrawerCancel">Cancelar</button></div></form></article>`;
      DOM.uno("#juDrawerCancel").addEventListener("click", () => this.cerrar());
      DOM.uno("#juDrawerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const nuevo = {};
        campos.forEach(c => {
          if (c.tipo === "checkbox") nuevo[c.nombre] = fd.has(c.nombre);
          else if (c.tipo === "number") nuevo[c.nombre] = fd.get(c.nombre) === "" ? "" : Number(fd.get(c.nombre));
          else nuevo[c.nombre] = fd.get(c.nombre) ?? "";
        });
        if (esCrear) {
          const ids = this.aplicacion.estado.clientes.registros.map(r => Number(r.id) || 0);
          if (!nuevo.id) nuevo.id = Math.max(0, ...ids) + 1;
          this.aplicacion.estado.clientes.registros.push(nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente creado", "El nuevo registro se ha añadido a la tabla.");
        } else {
          Object.assign(registro, nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente actualizado", "Los cambios se muestran inmediatamente en la tabla.");
        }
        this.aplicacion.mostrarTabla(DOM.uno("#buscador").value);
        this.cerrar();
      });
      this.ajustarAlViewport();
      this.actualizarColumnasFormulario();
      this.panel.classList.add("abierto"); this.overlay.classList.add("abierto");
      this.panel.setAttribute("aria-hidden", "false"); this.overlay.setAttribute("aria-hidden", "false");
      setTimeout(() => DOM.uno("input,select,textarea", this.cuerpo)?.focus(), 320);
    }
    campoHTML(c, registro) {
      const valor = registro?.[c.nombre] ?? "";
      const esc = (v) => String(v).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;");
      if (c.tipo === "textarea") return `<label class="ju-form-full"><span>${c.etiqueta}</span><textarea name="${c.nombre}">${esc(valor)}</textarea></label>`;
      if (c.tipo === "select") return `<label><span>${c.etiqueta}</span><select name="${c.nombre}">${(c.opciones||[]).map(o=>`<option${o===valor?' selected':''}>${o}</option>`).join("")}</select></label>`;
      if (c.tipo === "checkbox") return `<label class="ju-check ju-form-full"><input type="checkbox" name="${c.nombre}"${valor?' checked':''}><span>${c.etiqueta}</span></label>`;
      return `<label><span>${c.etiqueta}</span><input name="${c.nombre}" type="${c.tipo || 'text'}" value="${esc(valor)}"${c.nombre==='id'?' min="1"':''}></label>`;
    }
    cerrar() { this.panel.classList.remove("abierto"); this.overlay.classList.remove("abierto"); this.panel.setAttribute("aria-hidden","true"); this.overlay.setAttribute("aria-hidden","true"); }
    iniciarRedimension(e) {
      e.preventDefault(); const inicio=e.clientX, anchoInicial=this.panel.getBoundingClientRect().width;
      this.resizer.setPointerCapture(e.pointerId); document.body.classList.add("redimensionando-drawer"); this.panel.style.transition="none";
      const mover=(ev)=>{
        const ancho=Math.min(this.anchoMaximo(),Math.max(this.anchoMinimo,anchoInicial+(inicio-ev.clientX)));
        this.panel.style.setProperty("--drawer-width",`${ancho}px`);
        this.actualizarColumnasFormulario(ancho);
      };
      const fin=()=>{ this.resizer.removeEventListener("pointermove",mover); this.panel.style.transition=""; document.body.classList.remove("redimensionando-drawer"); };
      this.resizer.addEventListener("pointermove",mover); this.resizer.addEventListener("pointerup",fin,{once:true}); this.resizer.addEventListener("pointercancel",fin,{once:true});
    }
    actualizarColumnasFormulario(ancho = this.panel.getBoundingClientRect().width) {
      // <= 25% del navegador: una columna. > 25% y hasta 50%: dos columnas.
      this.panel.classList.toggle("ju-drawer-dos-columnas", ancho > window.innerWidth * 0.25);
    }
    ajustarAlViewport() {
      const actual = this.panel.getBoundingClientRect().width;
      const maximo = this.anchoMaximo();
      if (actual > maximo) {
        this.panel.style.setProperty("--drawer-width", `${maximo}px`);
        this.actualizarColumnasFormulario(maximo);
      } else {
        this.actualizarColumnasFormulario(actual);
      }
    }
  }

  class GestorColumnas {
    constructor() {
      this.anchoMinimo = 100;
      this.anchoMaximo = 600;
    }

    activar() {
      this.activarMinimizacion();
      this.activarSeparadores();
    }

    activarMinimizacion() {
      DOM.todos(".minimizar").forEach((boton) => {
        const columna = boton.closest("nav,section");
        columna.dataset.ancho = columna.getBoundingClientRect().width;

        boton.addEventListener("click", () => {
          this.alternarColumna(columna, boton);
        });
      });
    }

    alternarColumna(columna, boton) {
      if (columna.classList.contains("compacto")) {
        const ancho = parseFloat(columna.dataset.ancho) || 250;

        columna.classList.remove("compacto");
        columna.style.flexBasis = `${ancho}px`;
        columna.style.width = `${ancho}px`;
        boton.textContent = "◀";
        return;
      }

      columna.dataset.ancho = columna.getBoundingClientRect().width;
      columna.style.flexBasis = `${columna.dataset.ancho}px`;
      columna.style.width = `${columna.dataset.ancho}px`;

      void columna.offsetWidth;

      columna.classList.add("compacto");
      boton.textContent = "▶";
    }

    activarSeparadores() {
      DOM.todos(".separador").forEach((separador) => {
        separador.addEventListener("pointerdown", (evento) => {
          this.iniciarRedimension(separador, evento);
        });
      });
    }

    iniciarRedimension(separador, evento) {
      evento.preventDefault();

      const columna = separador.previousElementSibling;

      if (!columna || columna.classList.contains("compacto")) {
        return;
      }

      const inicio = evento.clientX;
      const anchoInicial = columna.getBoundingClientRect().width;

      columna.style.transition = "none";
      document.body.classList.add("redimensionando");
      separador.setPointerCapture(evento.pointerId);

      const mover = (eventoMovimiento) => {
        const ancho = Math.min(
          this.anchoMaximo,
          Math.max(this.anchoMinimo, anchoInicial + eventoMovimiento.clientX - inicio)
        );

        columna.style.width = `${ancho}px`;
        columna.style.flexBasis = `${ancho}px`;
        columna.dataset.ancho = ancho;
      };

      const terminar = () => {
        separador.removeEventListener("pointermove", mover);
        columna.style.transition = "";
        document.body.classList.remove("redimensionando");
      };

      separador.addEventListener("pointermove", mover);
      separador.addEventListener("pointerup", terminar, { once: true });
      separador.addEventListener("pointercancel", terminar, { once: true });
    }
  }

  class AplicacionIU {
    constructor() {
      this.estado = new EstadoIU();
      this.toast = new ToastIU();
      this.columnas = new GestorColumnas();
      this.modal = null;
      this.drawer = null;
    }

    async iniciar() {
      try {
        [
          this.estado.menu,
          this.estado.entidades,
          this.estado.clientes,
          this.estado.formulario
        ] = await Promise.all([
          OrigenDatos.cargarJSON("data/menu.json"),
          OrigenDatos.cargarJSON("data/entidades.json"),
          OrigenDatos.cargarJSON("data/clientes.json"),
          OrigenDatos.cargarJSON("data/datos.json")
        ]);

        this.modal = new ModalIU();
        this.drawer = new DrawerIU(this);
        this.renderMenu();
        this.renderEntidades();
        this.mostrarTabla();
        this.columnas.activar();
        this.activarEventos();
      } catch (error) {
        DOM.uno("#escenario").innerHTML = `
          <div class="panel">
            <h2>No se pudieron cargar los orígenes de datos</h2>
            <p>Sirve esta carpeta mediante HTTP, por ejemplo: <code>python3 -m http.server 8000</code></p>
            <pre>${error}</pre>
          </div>
        `;
      }
    }

    renderMenu() {
      const contenedor = DOM.uno("#navegacion .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.menu.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-nav").content.cloneNode(true);
        const enlace = DOM.uno("a", nodo);

        FichaIU.completar(enlace, elemento.texto);
        enlace.classList.toggle("activo", Boolean(elemento.activo));
        enlace.dataset.indice = indice;

        enlace.addEventListener("click", (evento) => {
          evento.preventDefault();
          DOM.todos("#navegacion a").forEach((item) => item.classList.remove("activo"));
          enlace.classList.add("activo");
          this.mostrarTabla();
        });

        contenedor.appendChild(nodo);
      });
    }

    renderEntidades() {
      const contenedor = DOM.uno("#entidades .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.entidades.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-card").content.cloneNode(true);
        const articulo = DOM.uno("article", nodo);

        FichaIU.completar(articulo, elemento.texto);
        articulo.classList.toggle("activo", elemento.texto === this.estado.seleccion);
        articulo.dataset.indice = indice;

        articulo.addEventListener("click", () => {
          this.estado.seleccion = elemento.texto;
          this.renderEntidades();
          this.mostrarVista(elemento.texto);
        });

        articulo.addEventListener("dragstart", (evento) => {
          evento.dataTransfer.setData("text/plain", elemento.texto);
        });

        contenedor.appendChild(nodo);
      });
    }

    mostrarVista(vista) {
      if (vista === "Elemento" || vista === "Formulario") {
        this.mostrarFormularioUI();
      } else if (vista === "Login") {
        this.mostrarLoginDemo();
      } else if (vista === "Toasts") {
        this.mostrarToastsDemo();
      } else if (vista === "Modal / paneles") {
        this.mostrarModalPanelesDemo();
      } else {
        this.mostrarTabla();
      }
    }

    mostrarTabla(filtro = "") {
      const datos = this.estado.clientes;
      const registros = datos.registros.filter((registro) =>
        Object.values(registro)
          .join(" ")
          .toLowerCase()
          .includes(filtro.toLowerCase())
      );
      const escenario = DOM.uno("#escenario");
      const tabla = document.createElement("table");

      escenario.innerHTML = "";
      tabla.innerHTML = `
        <caption>${datos.titulo}</caption>
        <thead>
          <tr>${datos.columnas.map((columna) => `<th>${columna.etiqueta}</th>`).join("")}</tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th colspan="${Math.max(1, datos.columnas.length - 1)}">Total</th>
            <td>${registros.length}</td>
          </tr>
        </tfoot>
      `;

      const cuerpo = DOM.uno("tbody", tabla);

      registros.forEach((registro) => {
        const fila = DOM.uno("#tpl-fila").content.cloneNode(true).querySelector("tr");

        datos.columnas.forEach((columna) => {
          const celda = document.createElement("td");
          celda.textContent = registro[columna.campo] ?? "";
          fila.appendChild(celda);
        });

        fila.classList.add("ju-row-editable");
        fila.title = "Clic para editar en el panel lateral";
        fila.addEventListener("click", () => this.drawer.abrirActualizar(registro));
        cuerpo.appendChild(fila);
      });

      escenario.appendChild(tabla);
    }

    mostrarFormularioUI() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Formularios</h2>
          <p>Controles reutilizables con el lenguaje visual jocarsa-iu.</p>
          <form id="demoForm" class="ju-form-grid">
            <label>
              <span>Nombre</span>
              <input name="nombre" required>
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required>
            </label>
            <label>
              <span>Tipo</span>
              <select name="tipo">
                <option>Cliente</option>
                <option>Proveedor</option>
                <option>Alumno</option>
              </select>
            </label>
            <label>
              <span>Fecha</span>
              <input name="fecha" type="date">
            </label>
            <label class="ju-form-full">
              <span>Descripción</span>
              <textarea name="descripcion"></textarea>
            </label>
            <label class="ju-check ju-form-full">
              <input type="checkbox" name="activo">
              <span>Registro activo</span>
            </label>
            <div class="ju-form-full ju-button-row">
              <button class="ju-btn" type="submit">Guardar</button>
              <button class="ju-btn secondary" type="reset">Limpiar</button>
            </div>
          </form>
        </article>
      `;

      DOM.uno("#demoForm").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }

    mostrarLoginDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <div class="ju-login-layout" style="margin:auto">
          <article class="ju-login-side">
            <div class="ju-login-brand">
              <img src="https://static.jocarsa.com/logos/white.svg" alt="">
              <h1 class="ju-login-product-title">jocarsa | interfaz integrada</h1>
              <p>Pantalla de acceso basada en jocarsa-iu.</p>
            </div>
          </article>
          <article class="ju-login-card">
            <h2>Iniciar sesión</h2>
            <form id="loginDemo" class="ju-form-grid">
              <label class="ju-form-full">
                <span>Email</span>
                <input type="email" required>
              </label>
              <label class="ju-form-full">
                <span>Contraseña</span>
                <input type="password" required>
              </label>
              <label class="ju-check ju-form-full">
                <input type="checkbox">
                <span>Mantener sesión</span>
              </label>
              <div class="ju-form-full ju-login-actions">
                <button class="ju-btn">Entrar</button>
                <a class="ju-text-link" href="login.html">Abrir pantalla completa</a>
              </div>
            </form>
          </article>
        </div>
      `;

      DOM.uno("#loginDemo").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Acceso simulado",
          "Login capturado como componente reutilizable."
        );
      });
    }

    mostrarToastsDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Toasts</h2>
          <p>Mensajes emergentes reutilizables con autocierre y cierre manual.</p>
          <div class="ju-button-row">
            <button class="ju-btn" data-t="success">Éxito</button>
            <button class="ju-btn secondary" data-t="info">Información</button>
            <button class="ju-btn secondary" data-t="warning">Aviso</button>
            <button class="ju-btn secondary" data-t="danger">Error</button>
          </div>
        </article>
      `;

      const titulos = {
        success: "Correcto",
        info: "Información",
        warning: "Revisar",
        danger: "Error"
      };

      DOM.todos("[data-t]", escenario).forEach((boton) => {
        boton.addEventListener("click", () => {
          this.toast.mostrar(
            boton.dataset.t,
            titulos[boton.dataset.t],
            "Ejemplo de mensaje emergente de la librería."
          );
        });
      });
    }

    mostrarModalPanelesDemo() {
      const escenario = DOM.uno("#escenario");
      escenario.innerHTML = `<article class="ju-card"><h2>Librería · Modal y panel lateral</h2><p>Dos patrones reutilizables para acciones que no deben sustituir el contenido del escenario.</p><div class="ju-showcase-grid"><div class="ju-showcase-box"><h3>Ventana modal</h3><p>Bloquea temporalmente la interfaz para confirmaciones, avisos o contenido focal.</p><button class="ju-btn" id="demoModal">Abrir modal</button></div><div class="ju-showcase-box"><h3>Panel lateral</h3><p>Entra desde la derecha, mantiene visible el contexto y puede redimensionarse arrastrando su borde izquierdo.</p><button class="ju-btn" id="demoDrawer">Abrir panel de creación</button></div></div></article>`;
      DOM.uno("#demoModal").addEventListener("click", () => {
        this.modal.abrir("Ejemplo de ventana modal", `<p>Esta es la nueva ventana modal reutilizable de <strong>jocarsa | iu</strong>.</p><p>Se puede cerrar con el botón ×, haciendo clic fuera o pulsando Escape.</p><div class="ju-button-row"><button class="ju-btn" id="modalAceptar">Aceptar</button></div>`);
        DOM.uno("#modalAceptar").addEventListener("click", () => this.modal.cerrar());
      });
      DOM.uno("#demoDrawer").addEventListener("click", () => this.drawer.abrirCrear());
    }

    activarEventos() {
      DOM.uno("#buscador").addEventListener("input", (evento) => {
        this.mostrarTabla(evento.target.value);
      });

      DOM.uno("#nuevo").addEventListener("click", () => {
        this.drawer.abrirCrear();
      });

      const escenario = DOM.uno("#escenario");

      escenario.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        escenario.classList.add("drag-over");
      });

      escenario.addEventListener("dragleave", () => {
        escenario.classList.remove("drag-over");
      });

      escenario.addEventListener("drop", (evento) => {
        evento.preventDefault();
        escenario.classList.remove("drag-over");

        const vista = evento.dataTransfer.getData("text/plain");
        this.estado.seleccion = vista;
        this.renderEntidades();
        this.mostrarVista(vista);
      });

      document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
          this.drawer?.cerrar();
          this.modal?.cerrar();
        }
      });
    }
  }

  window.jocarsa.iu.DOM = DOM;
  window.jocarsa.iu.Utilidades = Utilidades;
  window.jocarsa.iu.OrigenDatos = OrigenDatos;
  window.jocarsa.iu.EstadoIU = EstadoIU;
  window.jocarsa.iu.FichaIU = FichaIU;
  window.jocarsa.iu.ToastIU = ToastIU;
  window.jocarsa.iu.ModalIU = ModalIU;
  window.jocarsa.iu.DrawerIU = DrawerIU;
  window.jocarsa.iu.GestorColumnas = GestorColumnas;
  window.jocarsa.iu.AplicacionIU = AplicacionIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.aplicacion = new AplicacionIU();
    window.jocarsa.iu.aplicacion.iniciar();
  });
})();
/* =========================================================
   Prompt IA flotante · Ollama local · v2
   ========================================================= */
(() => {
  const iniciarPromptIA = () => {
    const prompt = document.querySelector('#juAiPrompt');
    const drag = document.querySelector('#juAiDrag');
    const input = document.querySelector('#juAiInput');
    const mic = document.querySelector('#juAiMic');
    const send = document.querySelector('#juAiSend');
    const status = document.querySelector('#juAiStatus');
    const escenario = document.querySelector('#escenario');
    const minimizar = document.querySelector('#juAiMinimize');
    const resizer = document.querySelector('#juAiResizer');
    if (!prompt || !drag || !input || !mic || !send || !status || !escenario || !minimizar || !resizer) return;

    let enviando=false, reconocimiento=null, escuchando=false;
    const escapeHTML = t => String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const inline = t => escapeHTML(t)
      .replace(/`([^`]+)`/g,'<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g,'<em>$1</em>');

    // Markdown ligero, incluyendo tablas, sin dependencias externas.
    const markdown = md => {
      md=String(md||'').replace(/\r/g,'').replace(/\u00a0/g,' ').replace(/[\u200B-\u200D\uFEFF]/g,'').trim();
      // Los LLM envuelven a veces TODO el Markdown en ```markdown ... ```.
      // Lo desenvolvemos antes de proteger los bloques de código reales.
      md=md.replace(/```(?:markdown|md)\s*\n([\s\S]*?)```/gi,(_,body)=>body.trim());
      const code=[];
      md=md.replace(/```([^\n]*)\n([\s\S]*?)```/g,(_,lang,body)=>`@@CODE${code.push({lang,body})-1}@@`);
      const lines=md.split('\n'), out=[];
      for(let i=0;i<lines.length;){
        const line=lines[i];
        // Tabla Markdown GFM. No exigimos que las filas terminen en |, porque
        // los LLM suelen omitir esa barra final. La segunda fila debe estar
        // formada exclusivamente por separadores --- / :--- / ---: / :---:.
        const normalizaTabla = x => String(x||'')
          .replace(/[｜¦│]/g,'|')
          .replace(/[‐‑‒–—−]/g,'-')
          .replace(/\u00a0/g,' ')
          .replace(/[\u200B-\u200D\uFEFF]/g,'');
        const tableCells = x => normalizaTabla(x).trim().replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(v=>v.trim());
        const isTableRow = x => normalizaTabla(x).includes('|') && tableCells(x).length >= 2;
        const isTableSeparator = x => {
          if(!isTableRow(x)) return false;
          const c=tableCells(x);
          return c.length>=2 && c.every(v=>/^:?-+:?$/.test(v.replace(/\s+/g,'')));
        };
        if(isTableRow(line) && i+1<lines.length && isTableSeparator(lines[i+1])){
          const heads=tableCells(line); i+=2; const rows=[];
          while(i<lines.length && lines[i].trim() && isTableRow(lines[i]) && !isTableSeparator(lines[i])) rows.push(tableCells(lines[i++]));
          out.push('<div class="ju-ai-table-wrap"><table><thead><tr>'+heads.map(x=>`<th>${inline(x)}</th>`).join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+heads.map((_,j)=>`<td>${inline(r[j]||'')}</td>`).join('')+'</tr>').join('')+'</tbody></table></div>'); continue;
        }
        let m;
        if((m=line.match(/^###\s+(.+)/))) out.push(`<h3>${inline(m[1])}</h3>`);
        else if((m=line.match(/^##\s+(.+)/))) out.push(`<h2>${inline(m[1])}</h2>`);
        else if((m=line.match(/^#\s+(.+)/))) out.push(`<h1>${inline(m[1])}</h1>`);
        else if((m=line.match(/^>\s?(.+)/))) out.push(`<blockquote>${inline(m[1])}</blockquote>`);
        else if(/^\s*[-*]\s+/.test(line)){
          let items=[]; while(i<lines.length && /^\s*[-*]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*]\s+/,''));
          out.push('<ul>'+items.map(x=>`<li>${inline(x)}</li>`).join('')+'</ul>'); continue;
        } else if(/^\s*\d+\.\s+/.test(line)){
          let items=[]; while(i<lines.length && /^\s*\d+\.\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+\.\s+/,''));
          out.push('<ol>'+items.map(x=>`<li>${inline(x)}</li>`).join('')+'</ol>'); continue;
        } else if(/^@@CODE\d+@@$/.test(line.trim())){
          const n=+line.match(/\d+/)[0], c=code[n]; out.push(`<pre><code>${escapeHTML(c.body)}</code></pre>`);
        } else if(line.trim()) out.push(`<p>${inline(line)}</p>`);
        i++;
      }
      return out.join('\n');
    };

    const autoResize=()=>{input.style.height='auto';input.style.height=Math.min(input.scrollHeight,150)+'px'};
    const fijar=(left,top)=>{const r=prompt.getBoundingClientRect(),m=8;return {left:Math.max(m,Math.min(left,window.innerWidth-r.width-m)),top:Math.max(62,Math.min(top,window.innerHeight-r.height-m))}};
    const convertirPosicion=()=>{const r=prompt.getBoundingClientRect();prompt.style.transform='none';prompt.style.bottom='auto';prompt.style.left=r.left+'px';prompt.style.top=r.top+'px'};

    drag.addEventListener('pointerdown',e=>{
      if(e.button!==0 || e.target.closest('button')) return;
      convertirPosicion(); const r=prompt.getBoundingClientRect(), ox=e.clientX-r.left, oy=e.clientY-r.top;
      prompt.classList.add('is-dragging'); drag.setPointerCapture(e.pointerId);
      const mover=ev=>{const p=fijar(ev.clientX-ox,ev.clientY-oy);prompt.style.left=p.left+'px';prompt.style.top=p.top+'px'};
      const soltar=ev=>{prompt.classList.remove('is-dragging');try{drag.releasePointerCapture(ev.pointerId)}catch{};drag.removeEventListener('pointermove',mover);drag.removeEventListener('pointerup',soltar);drag.removeEventListener('pointercancel',soltar)};
      drag.addEventListener('pointermove',mover);drag.addEventListener('pointerup',soltar);drag.addEventListener('pointercancel',soltar);
    });

    minimizar.addEventListener('click',e=>{
      e.stopPropagation(); convertirPosicion(); prompt.classList.toggle('is-minimized');
      minimizar.textContent=prompt.classList.contains('is-minimized')?'□':'—'; minimizar.title=prompt.classList.contains('is-minimized')?'Restaurar':'Minimizar';
      requestAnimationFrame(()=>{const r=prompt.getBoundingClientRect(),p=fijar(r.left,r.top);prompt.style.left=p.left+'px';prompt.style.top=p.top+'px'});
    });

    resizer.addEventListener('pointerdown',e=>{
      e.preventDefault();e.stopPropagation();convertirPosicion();
      const r=prompt.getBoundingClientRect(), sx=e.clientX,sy=e.clientY,sw=r.width,sh=r.height;
      resizer.setPointerCapture(e.pointerId);
      const mover=ev=>{prompt.style.width=Math.max(360,Math.min(sw+ev.clientX-sx,window.innerWidth-r.left-8))+'px';prompt.style.height=Math.max(82,Math.min(sh+ev.clientY-sy,window.innerHeight-r.top-8))+'px'};
      const fin=ev=>{try{resizer.releasePointerCapture(ev.pointerId)}catch{};resizer.removeEventListener('pointermove',mover);resizer.removeEventListener('pointerup',fin);resizer.removeEventListener('pointercancel',fin)};
      resizer.addEventListener('pointermove',mover);resizer.addEventListener('pointerup',fin);resizer.addEventListener('pointercancel',fin);
    });

    window.addEventListener('resize',()=>{if(!prompt.style.top)return;const r=prompt.getBoundingClientRect(),p=fijar(r.left,r.top);prompt.style.left=p.left+'px';prompt.style.top=p.top+'px'});

    const enviar=async()=>{
      const texto=input.value.trim(); if(!texto||enviando)return; enviando=true;send.disabled=true;mic.disabled=true;status.textContent='Ollama está generando el nuevo contenido del escenario…';
      try{
        const respuesta=await fetch('ollama.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mensaje:texto})});
        if(!respuesta.ok)throw new Error(`HTTP ${respuesta.status}`); const datos=await respuesta.json(); const contenido=datos.respuesta??'No he podido responder.';
        escenario.innerHTML='<article class="ju-ai-result">'+markdown(contenido)+'</article>';
        status.textContent='Escenario actualizado.';input.value='';autoResize();setTimeout(()=>{if(status.textContent==='Escenario actualizado.')status.textContent=''},2200);
      }catch(error){console.error(error);status.textContent='No se ha podido conectar con Ollama.'}
      finally{enviando=false;send.disabled=false;mic.disabled=false;input.focus()}
    };
    send.addEventListener('click',enviar);input.addEventListener('input',autoResize);input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();enviar()}});
    const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SpeechRecognition){mic.disabled=true;mic.title='Reconocimiento de voz no disponible en este navegador'}else mic.addEventListener('click',()=>{
      if(escuchando&&reconocimiento){reconocimiento.stop();return} reconocimiento=new SpeechRecognition();reconocimiento.lang='es-ES';reconocimiento.interimResults=false;reconocimiento.continuous=false;
      reconocimiento.onstart=()=>{escuchando=true;mic.classList.add('is-listening');status.textContent='Escuchando…'};
      reconocimiento.onresult=evento=>{const texto=evento.results[0][0].transcript;input.value=input.value.trim()?input.value.trim()+' '+texto:texto;autoResize();input.focus()};
      reconocimiento.onerror=evento=>{console.error('Error de reconocimiento:',evento.error);status.textContent='No se ha podido reconocer la voz.'};
      reconocimiento.onend=()=>{escuchando=false;mic.classList.remove('is-listening');if(status.textContent==='Escuchando…')status.textContent=''};reconocimiento.start();
    });
    autoResize();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciarPromptIA);else iniciarPromptIA();
})();

```
**demo-ui.js**
```js
/**
 * andrei | iu · demostraciones
 * Namespace técnico: andrei.iu
 */
window.andrei = window.andrei || {};
window.andrei.iu = window.andrei.iu || {};

(() => {
  "use strict";

  class ToastDemo {
    constructor(selectorPila = "#toastStack") {
      this.pila = document.querySelector(selectorPila);
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Mensaje de ejemplo") {
      if (!this.pila) {
        return;
      }

      const toast = document.createElement("article");
      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button" aria-label="Cerrar">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      toast.querySelector(".ju-toast-close").addEventListener("click", cerrar);
      this.pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class DemoIU {
    constructor() {
      this.toast = new ToastDemo();
      this.textos = {
        success: ["Guardado correctamente", "La operación se ha completado."],
        info: ["Información", "Este es un mensaje informativo."],
        warning: ["Revisión necesaria", "Conviene revisar los datos antes de continuar."],
        danger: ["Operación fallida", "No se ha podido completar la operación."]
      };
    }

    iniciar() {
      document.addEventListener("click", (evento) => {
        const boton = evento.target.closest("[data-toast]");

        if (!boton) {
          return;
        }

        const tipo = boton.dataset.toast;
        this.toast.mostrar(tipo, ...this.textos[tipo]);
      });

      document.getElementById("formDemo")?.addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }
  }

  window.jocarsa.iu.ToastDemo = ToastDemo;
  window.jocarsa.iu.DemoIU = DemoIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.demo = new DemoIU();
    window.jocarsa.iu.demo.iniciar();
  });
})();
```
##### templates
**article.html**
```html
<article draggable="true">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</article>

```
**celda.html**
```html
<td>
</td>

```
**fila.html**
```html
<tr>
</tr>

```
**formulario-ui.html**
```html
<article class="ju-card">
 <h2>
  {{titulo}}
 </h2>
 <form class="ju-form-grid">
  {{campos}}
  <div class="ju-form-full ju-button-row">
   <button class="ju-btn" type="submit">
    Guardar
   </button>
   <button class="ju-btn secondary" type="reset">
    Limpiar
   </button>
  </div>
 </form>
</article>

```
**formulario.html**
```html
<form class="formulario-dinamico">
 <div class="campos">
 </div>
 <div class="acciones">
  <button type="submit">
   Guardar
  </button>
  <button type="reset">
   Limpiar
  </button>
 </div>
</form>

```
**nav.html**
```html
<a href="#">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</a>

```
**toast.html**
```html
<article class="ju-toast is-{{tipo}}" role="status">
 <div class="ju-toast-icon">
  {{icono}}
 </div>
 <div>
  <p class="ju-toast-title">
   {{titulo}}
  </p>
  <p class="ju-toast-text">
   {{texto}}
  </p>
 </div>
 <button aria-label="Cerrar" class="ju-toast-close" type="button">
  ×
 </button>
</article>

```
#### 005-Habla
**README.md**
```markdown
# jocarsa · subunidad 007 integrada v3

Proyecto integrado de componentes, plantillas, orígenes de datos y eventos.

## Demostraciones

- `index.html`: aplicación integrada con menús, fichas, tabla, formulario dinámico, drag & drop, columnas minimizables y separadores redimensionables.
- `login.html`: pantalla de login jocarsa-iu. Busca `jocarsa.png` en la raíz del proyecto y la usa como fondo a pantalla completa.
- `formularios.html`: catálogo demostrativo de formularios y controles.
- `toasts.html`: demostración independiente de mensajes toast success/info/warning/danger.

## Fondo del login

Coloca la imagen con este nombre exacto:

`jocarsa.png`

en la raíz del proyecto, junto a `index.html` y `login.html`.

## Ejecución

Como el proyecto usa `fetch()` para los orígenes JSON, servir por HTTP:

`python3 -m http.server 8000`

Abrir `http://localhost:8000/`.


## Refactorización de código

Esta versión mantiene la estructura visual y funcional de la versión 5, pero presenta HTML, templates, CSS, JSON y JavaScript en formato legible y no minificado.

El JavaScript de control se ha reorganizado con programación orientada a objetos. El namespace conceptual solicitado es `jocarsa | iu`; como el carácter `|` es un operador de JavaScript y no puede formar parte de un identificador, el namespace técnico utilizado es:

## v4
El renderizador Markdown normaliza barras verticales y guiones Unicode generados por LLM, espacios invisibles/NBSP y tablas con separadores de longitud variable. También desenvuelve bloques ```markdown antes de procesar tablas, manteniendo los bloques de código reales.


## V5
- Detecta tablas Markdown incluso cuando Ollama las envuelve accidentalmente en un bloque ``` sin lenguaje o ```text.
- Conserva los fences de código reales.
- Añade switch «Hablar respuesta» en el prompt; al activarlo usa SpeechSynthesisUtterance con `es-ES`.

```
**formularios.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | formularios
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formulario completo
      </span>
     </a>
     <a class="" href="#controles">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Controles
      </span>
     </a>
     <a class="" href="#eventos">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Eventos
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Formulario completo
     </h2>
     <p>
      Ejemplo de controles reutilizables manteniendo el escenario de jocarsa-iu.
     </p>
     <form class="ju-form-grid" id="formDemo">
      <label>
       <span>
        Nombre
       </span>
       <input name="nombre" required=""/>
      </label>
      <label>
       <span>
        Email
       </span>
       <input name="email" required="" type="email"/>
      </label>
      <label>
       <span>
        Tipo
       </span>
       <select name="tipo">
        <option>
         Cliente
        </option>
        <option>
         Proveedor
        </option>
        <option>
         Alumno
        </option>
       </select>
      </label>
      <label>
       <span>
        Fecha
       </span>
       <input name="fecha" type="date"/>
      </label>
      <label>
       <span>
        Teléfono
       </span>
       <input name="telefono" type="tel"/>
      </label>
      <label>
       <span>
        Web
       </span>
       <input name="web" placeholder="https://" type="url"/>
      </label>
      <label class="ju-form-full">
       <span>
        Descripción
       </span>
       <textarea name="descripcion"></textarea>
      </label>
      <fieldset class="ju-fieldset ju-form-full">
       <strong>
        Preferencias
       </strong>
       <div class="ju-check-group">
        <label class="ju-check">
         <input name="activo" type="checkbox"/>
         <span>
          Activo
         </span>
        </label>
        <label class="ju-check">
         <input checked="" name="nivel" type="radio" value="normal"/>
         <span>
          Normal
         </span>
        </label>
        <label class="ju-check">
         <input name="nivel" type="radio" value="prioritario"/>
         <span>
          Prioritario
         </span>
        </label>
       </div>
      </fieldset>
      <div class="ju-form-full ju-button-row">
       <button class="ju-btn" type="submit">
        Guardar
       </button>
       <button class="ju-btn secondary" type="reset">
        Limpiar
       </button>
      </div>
     </form>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
**index.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | interfaz integrada
  </title>
  <link href="https://static.jocarsa.com/logos/white.svg" rel="shortcut icon" type="image/svg+xml"/>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="andrei-iu">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input id="buscador" placeholder="Buscar en clientes…" type="search"/>
    <button id="nuevo">
     + Nuevo
    </button>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav id="navegacion">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </nav>
   <div class="separador" data-left="navegacion">
   </div>
   <section id="entidades">
    <div class="contenido-columna">
    </div>
    <button class="minimizar" title="Minimizar">
     ◀
    </button>
   </section>
   <div class="separador" data-left="entidades">
   </div>
   <div class="escenario" id="escenario">
   </div>
  </main>
  <template id="tpl-nav">
   <a href="#">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </a>
  </template>
  <template id="tpl-card">
   <article draggable="true">
    <span class="ficha">
    </span>
    <span class="etiqueta">
    </span>
   </article>
  </template>
  <template id="tpl-fila">
   <tr>
   </tr>
  </template>
  <!-- Componentes flotantes globales -->
  <div class="ju-drawer-overlay" id="juDrawerOverlay" aria-hidden="true"></div>
  <aside class="ju-drawer" id="juDrawer" aria-hidden="true" aria-label="Editor lateral">
   <div class="ju-drawer-resizer" id="juDrawerResizer" title="Arrastra para redimensionar"></div>
   <header class="ju-drawer-header">
    <div>
     <small id="juDrawerMode">CREAR</small>
     <h2 id="juDrawerTitle">Nuevo registro</h2>
    </div>
    <button class="ju-drawer-close" id="juDrawerClose" type="button" aria-label="Cerrar">×</button>
   </header>
   <div class="ju-drawer-body" id="juDrawerBody"></div>
  </aside>

  <div class="ju-modal-layer" id="juModal" aria-hidden="true">
   <div class="ju-modal-backdrop" data-modal-close></div>
   <section class="ju-modal-window" role="dialog" aria-modal="true" aria-labelledby="juModalTitle">
    <header class="ju-modal-header">
     <h2 id="juModalTitle">Ventana modal</h2>
     <button class="ju-modal-close" type="button" data-modal-close aria-label="Cerrar">×</button>
    </header>
    <div class="ju-modal-body" id="juModalBody"></div>
   </section>
  </div>


  <!-- Prompt IA flotante -->
  <div class="ju-ai-prompt" id="juAiPrompt" aria-label="Prompt de inteligencia artificial">
   <div class="ju-ai-drag" id="juAiDrag" title="Arrastra para mover">
    <span class="ju-ai-spark">✦</span>
    <span>Asistente local</span>
    <span class="ju-ai-window-actions"><button id="juAiMinimize" type="button" title="Minimizar" aria-label="Minimizar">—</button><span class="ju-ai-grip" title="Arrastra para mover">⠿</span></span>
   </div>
   <div class="ju-ai-compose">
    <textarea id="juAiInput" rows="1" placeholder="Pide a Ollama que transforme el escenario…"></textarea>
    <button class="ju-ai-mic" id="juAiMic" type="button" title="Entrada por voz" aria-label="Entrada por voz">🎤</button>
    <button class="ju-ai-send" id="juAiSend" type="button" title="Enviar" aria-label="Enviar">➜</button>
   </div>
   <div class="ju-ai-options">
    <label class="ju-ai-switch" title="Leer en voz alta la respuesta de la IA">
     <input id="juAiSpeak" type="checkbox">
     <span class="ju-ai-switch-track"><span class="ju-ai-switch-thumb"></span></span>
     <span>Hablar respuesta</span>
    </label>
   </div>
   <div class="ju-ai-status" id="juAiStatus" aria-live="polite"></div>
   <div class="ju-ai-resizer" id="juAiResizer" title="Arrastra para redimensionar"></div>
  </div>

  <script src="js/componentes.js">
  </script>
 </body>
</html>

```
**login.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | login
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-login-page">
  <main class="ju-login-layout">
   <article class="ju-login-side">
    <div class="ju-login-brand">
     <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
     <h1 class="ju-login-product-title">
      Andrei | interfaz integrada
     </h1>
     <p>
      Accede a tu espacio de trabajo.
     </p>
    </div>
   </article>
   <article class="ju-login-card">
    <h2>
     Iniciar sesión
    </h2>
    <p>
     Introduce tus credenciales.
    </p>
    <form action="index.html" class="ju-form-grid">
     <label class="ju-form-full">
      <span>
       Email
      </span>
      <input placeholder="nombre@ejemplo.com" required="" type="email"/>
     </label>
     <label class="ju-form-full">
      <span>
       Contraseña
      </span>
      <input placeholder="••••••••" required="" type="password"/>
     </label>
     <label class="ju-check ju-form-full">
      <input type="checkbox"/>
      <span>
       Mantener la sesión iniciada
      </span>
     </label>
     <div class="ju-form-full ju-login-actions">
      <button class="ju-btn" type="submit">
       Entrar
      </button>
      <a class="ju-text-link" href="#">
       ¿Olvidaste la contraseña?
      </a>
     </div>
    </form>
    <div class="ju-button-row">
     <a class="ju-btn secondary" href="formularios.html">
      Formularios
     </a>
     <a class="ju-btn secondary" href="toasts.html">
      Toasts
     </a>
    </div>
   </article>
  </main>
 </body>
</html>

```
**ollama.php**
```php
<?php

header("Content-Type: application/json; charset=utf-8");


// Recoger JSON enviado desde JavaScript

$entrada = json_decode(
    file_get_contents("php://input"),
    true
);

$mensaje = trim($entrada["mensaje"] ?? "");

if ($mensaje === "") {
    http_response_code(400);
    echo json_encode(["respuesta" => "El prompt está vacío."]);
    exit;
}


// Petición para Ollama

$datos = [
    "model" => "phi3:mini",

    "prompt" => $mensaje,

    "stream" => false
];


// Conectar con Ollama

$ch = curl_init(
    "http://localhost:11434/api/generate"
);

curl_setopt(
    $ch,
    CURLOPT_POST,
    true
);

curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "Content-Type: application/json"
    ]
);

curl_setopt(
    $ch,
    CURLOPT_POSTFIELDS,
    json_encode($datos)
);

curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);


// Ejecutar

$respuesta = curl_exec($ch);

curl_close($ch);


// Decodificar respuesta de Ollama

$resultado = json_decode(
    $respuesta,
    true
);


// Obtener únicamente el texto

$texto = $resultado["response"] ?? "No he podido responder.";


// Responder al navegador

echo json_encode([
    "respuesta" => $texto
]);
```
**toasts.html**
```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>
   Andrei | toasts
  </title>
  <link href="css/estilo.css" rel="stylesheet"/>
 </head>
 <body class="ju-library-page">
  <header>
   <div class="corporativo">
    <img alt="" src="https://static.jocarsa.com/logos/white.svg"/>
    <h1>
     Andrei | interfaz integrada
    </h1>
   </div>
   <div id="herramientas">
    <input placeholder="Buscar..." type="search"/>
    <a href="index.html">
     Aplicación
    </a>
   </div>
   <div id="usuario">
    <div class="imagen">
    </div>
    <div>
     <p>
      Andrei Buga
     </p>
     <a href="login.html">
      Cerrar sesión
     </a>
    </div>
   </div>
  </header>
  <main>
   <nav class="library-nav">
    <div class="titulo-columna">
     Módulos
    </div>
    <div class="contenido-columna">
     <a class="" href="index.html">
      <span class="ficha">
       C
      </span>
      <span class="etiqueta">
       Clientes
      </span>
     </a>
     <a class="" href="formularios.html">
      <span class="ficha">
       F
      </span>
      <span class="etiqueta">
       Formularios
      </span>
     </a>
     <a class="" href="toasts.html">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Toasts
      </span>
     </a>
     <a class="" href="login.html">
      <span class="ficha">
       L
      </span>
      <span class="etiqueta">
       Login
      </span>
     </a>
    </div>
   </nav>
   <div class="separador">
   </div>
   <section class="library-section">
    <div class="titulo-columna">
     Vistas
    </div>
    <div class="contenido-columna">
     <a class="activo" href="#">
      <span class="ficha">
       T
      </span>
      <span class="etiqueta">
       Mensajes toast
      </span>
     </a>
     <a class="" href="#success">
      <span class="ficha">
       E
      </span>
      <span class="etiqueta">
       Éxito
      </span>
     </a>
     <a class="" href="#info">
      <span class="ficha">
       I
      </span>
      <span class="etiqueta">
       Información
      </span>
     </a>
     <a class="" href="#warning">
      <span class="ficha">
       A
      </span>
      <span class="etiqueta">
       Aviso
      </span>
     </a>
     <a class="" href="#danger">
      <span class="ficha">
       X
      </span>
      <span class="etiqueta">
       Error
      </span>
     </a>
    </div>
   </section>
   <div class="separador">
   </div>
   <div class="library-stage">
    <article class="ju-card">
     <h2>
      Mensajes emergentes Toast
     </h2>
     <p>
      El escenario conserva la misma estructura de la aplicación principal. Pulsa un estado para generar el mensaje.
     </p>
     <div class="ju-button-row">
      <button class="ju-btn" data-toast="success">
       Éxito
      </button>
      <button class="ju-btn secondary" data-toast="info">
       Información
      </button>
      <button class="ju-btn secondary" data-toast="warning">
       Aviso
      </button>
      <button class="ju-btn secondary" data-toast="danger">
       Error
      </button>
     </div>
     <div style="margin-top:24px">
      <h3>
       Comportamiento
      </h3>
      <p>
       Los mensajes se apilan abajo a la derecha, permiten cierre manual y desaparecen automáticamente.
      </p>
     </div>
    </article>
   </div>
  </main>
  <div aria-live="polite" class="ju-toast-stack" id="toastStack">
  </div>
  <script src="js/demo-ui.js">
  </script>
 </body>
</html>

```
##### css
**estilo.css**
```css
:root {
  --naranja:#f97316;
  --azul:#1d4ed8;
  --azul-medio:#1e40af;
  --azul-claro:#eff6ff;
  --azul-palido:#dbeafe;
  --blanco:#ffffff;
  --negro:#111827;
  --relleno:12px;
  --texto:12px;
  --chaflan:12px;
  --color0:var(--negro);
  --color:var(--azul);
  --color2:var(--azul-medio);
  --color3:var(--azul-claro);
  --color4:var(--azul-palido);
  --texto-nav:var(--blanco);
  --ancho-nav:210px;
  --ancho-section:260px
}
* {
  box-sizing:border-box
}
html,body {
  width:100%;
  height:100%;
  margin:0
}
.jocarsa-iu {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
header {
  height:54px;
  flex:none;
  background:var(--color);
  display:flex;
  align-items:center;
  gap:12px;
  padding:12px;
  color:var(--texto-nav)
}
.corporativo {
  display:flex;
  align-items:center;
  gap:10px;
  flex:1
}
.corporativo img {
  width:28px;
  height:28px
}
.corporativo h1 {
  font-size:20px;
  font-weight:bold;
  margin:0
}
header input,header button {
  border:0;
  padding:8px 10px;
  background:var(--color2);
  color:inherit;
  outline:none
}
header input {
  min-width:260px;
  background:var(--color0)
}
main {
  display:flex;
  flex:1;
  min-height:0
}
nav,section {
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  padding:12px;
  background:var(--color);
  color:white;
  overflow:hidden;
  flex:none;
  transition:width .25s
}
nav {
  width:var(--ancho-nav)
}
section {
  width:var(--ancho-section);
  background:var(--color3);
  color:var(--negro);
  padding-left:3px;
}
.titulo-columna {
  font-weight:bold;
  opacity:.75
}
.contenido-columna {
  display:flex;
  flex-direction:column;
  gap:10px;
  overflow:auto;
  min-height:0
}
.contenido-columna a,.contenido-columna article {
  display:flex;
  align-items:center;
  gap:9px;
  padding:9px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  cursor:pointer;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%);
  transition:.2s
}
.contenido-columna article {
  background:var(--color3)
}
.contenido-columna .activo {
  transform:translateX(8px);
  background:var(--naranja);
  color:var(--blanco);
}
.ficha {
  width:28px;
  height:28px;
  display:grid;
  place-items:center;
  border-radius:50%;
  color:var(--blanco);
  background:var(--azul);
  font-weight:bold;
  flex:none
}
.minimizar {
  position:absolute;
  right:5px;
  bottom:5px;
  border:0;
  width:28px;
  height:28px;
  cursor:pointer
}
.compacto {
  width:58px!important
}
.compacto .titulo-columna,.compacto .etiqueta {
  display:none
}
.compacto .contenido-columna {
  overflow:hidden
}
.separador {
  width:5px;
  cursor:col-resize;
  background:var(--color0);
  flex:none
}
.escenario {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3);
  padding-left: 5px;position:relative;z-index:1000;
}
table {
  width:100%;
  border-collapse:collapse;
  background:var(--blanco)
}
caption {
  text-align:left;
  padding:12px;
  background:var(--color3);
  font-weight:bold
}
th,td {
  padding:10px;
  border-bottom:1px solid rgba(17,24,39,.18);
  text-align:left
}
thead {
  background:var(--color)
}
tbody tr:hover {
  background:var(--color4)
}
.panel {
  background:var(--blanco);
  padding:16px;
  max-width:1000px
}
.campos {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:12px
}
.campo {
  display:flex;
  flex-direction:column;
  gap:5px
}
.campo input,.campo textarea,.campo select {
  padding:9px;
  border:1px solid rgba(17,24,39,.35)
}
.campo textarea {
  min-height:90px
}
.acciones {
  display:flex;
  gap:8px;
  margin-top:14px
}
.acciones button {
  padding:9px 14px;
  border:0;
  background:var(--naranja);
  color:var(--blanco)
}
.drag-over {
  outline:3px dashed var(--color0)
}
.estado {
  margin:0 0 10px;
  padding:8px;
  background:rgba(255,255,255,.55)
}
/* =========================================================
   REGLAS 010: SEPARADORES + MENUS CONTRAIDOS
   ========================================================= */
nav,section {
  transition:width .3s ease,flex-basis .3s ease,padding .3s ease
}
.separador {
  flex:0 0 7px;
  width:7px;
  min-width:7px;
  padding:0;
  cursor:col-resize;
  position:relative;
  z-index:4;
  transition:background .3s ease
}
nav + .separador {
  background:var(--color2)
}
section + .separador {
  background:var(--color3)
}
.separador:hover {
  background:var(--color4)
}
body.redimensionando {
  cursor:col-resize;
  user-select:none
}
body.redimensionando * {
  cursor:col-resize!important
}
.minimizar {
  position:absolute;
  bottom:var(--relleno);
  left:var(--relleno);
  right:var(--relleno);
  width:auto;
  height:28px;
  border:0;
  background:var(--color2);
  color:inherit;
  cursor:pointer;
  font:inherit;
  z-index:20;
  transition:left .3s,right .3s,width .3s,background .3s
}
section .minimizar {
  background:var(--color3)
}
.minimizar:hover {
  background:var(--color4)
}
nav.compacto,section.compacto {
  flex-basis:52px!important;
  width:52px!important;
  padding-left:6px;
  padding-right:6px;
  align-items:center
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  width:40px;
  overflow:hidden;
  align-items:center
}
nav.compacto .contenido-columna a,section.compacto .contenido-columna article {
  width:40px!important;
  min-width:40px;
  max-width:40px;
  height:40px;
  min-height:40px;
  max-height:40px;
  padding:6px;
  justify-content:center;
  overflow:hidden;
  flex:none;
  transform:none!important
}
nav.compacto .titulo-columna,section.compacto .titulo-columna,nav.compacto .etiqueta,section.compacto .etiqueta {
  display:none
}
nav.compacto .minimizar,section.compacto .minimizar {
  left:6px;
  right:6px;
  width:40px
}
/* =========================================================
   LIBRERIA: FORMULARIOS
   ========================================================= */
.ju-card {
  background:white;
  padding:18px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-form-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
  margin-top:16px
}
.ju-form-full {
  grid-column:1/-1
}
.ju-form-grid label {
  display:flex;
  flex-direction:column;
  gap:8px;
  font-size:14px;
  font-weight:500
}
.ju-form-grid input,.ju-form-grid select,.ju-form-grid textarea {
  width:100%;
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  color:var(--negro);
  padding:12px 14px;
  font:inherit;
  outline:none;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-form-grid textarea {
  min-height:110px;
  resize:vertical
}
.ju-form-grid input:focus,.ju-form-grid select:focus,.ju-form-grid textarea:focus {
  border-color:var(--naranja);
  box-shadow:0 0 0 4px color-mix(in srgb,var(--naranja) 18%,transparent);
  background:var(--blanco)
}
.ju-check {
  display:inline-flex!important;
  flex-direction:row!important;
  align-items:center;
  gap:10px!important
}
.ju-check input {
  width:18px!important;
  height:18px;
  clip-path:none!important
}
.ju-btn {
  border:0;
  padding:11px 16px;
  background:var(--naranja);
  color:var(--blanco);
  cursor:pointer;
  font:inherit;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-btn.secondary {
  background:var(--color4);
  color:var(--negro)
}
.ju-button-row {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:16px
}
/* LOGIN jocarsa-iu */
.ju-login-page {
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:radial-gradient(circle at top left,var(--color4),transparent 35%),linear-gradient(180deg,var(--color3),var(--color4));
  padding:30px
}
.ju-login-layout {
  width:min(920px,100%);
  display:grid;
  grid-template-columns:minmax(280px,400px) minmax(320px,520px);
  gap:24px
}
.ju-login-side,.ju-login-card {
  padding:28px;
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)
}
.ju-login-side {
  background:linear-gradient(180deg,var(--color0),var(--color));
  color:white;
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-card {
  background:var(--blanco)
}
.ju-login-brand {
  text-align:center
}
.ju-login-brand img {
  width:72px;
  height:72px
}
.ju-login-product-title {
  font-size:28px;
  margin:12px 0 6px
}
.ju-login-card h2 {
  margin-top:0
}
.ju-login-actions {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px
}
.ju-text-link {
  color:var(--color);
  font-weight:bold;
  text-decoration:none
}
/* TOASTS jocarsa-iu */
.ju-toast-stack {
  position:fixed;
  right:22px;
  bottom:22px;
  z-index:1000;
  width:min(420px,calc(100vw - 44px));
  display:flex;
  flex-direction:column;
  gap:12px;
  pointer-events:none
}
.ju-toast {
  pointer-events:auto;
  position:relative;
  display:grid;
  grid-template-columns:42px 1fr auto;
  gap:12px;
  align-items:start;
  padding:14px;
  background:rgba(255,255,255,.97);
  box-shadow:0 18px 38px rgba(0,0,0,.14);
  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%);
  transform:translateX(22px);
  opacity:0;
  animation:juToastIn .28s ease forwards
}
.ju-toast:before {
  content:"";
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:7px;
  background:var(--azul)
}
.ju-toast.is-success:before {
  background:var(--azul-medio)
}
.ju-toast.is-warning:before {
  background:var(--naranja)
}
.ju-toast.is-danger:before {
  background:var(--negro)
}
.ju-toast-icon {
  width:42px;
  height:42px;
  display:grid;
  place-items:center;
  background:var(--color3);
  font-weight:800
}
.ju-toast-title {
  margin:0 0 3px;
  font-weight:800
}
.ju-toast-text {
  margin:0;
  color:var(--negro);
  opacity:.7;
  font-size:13px
}
.ju-toast-close {
  border:0;
  background:transparent;
  font-size:20px;
  cursor:pointer
}
.ju-toast.is-leaving {
  animation:juToastOut .22s ease forwards
}
@keyframes juToastIn {
  to {
    transform:translateX(0);
    opacity:1
  }
}
@keyframes juToastOut {
  to {
    transform:translateX(24px);
    opacity:0
  }
}
@media(max-width:800px) {
  .ju-form-grid,.ju-login-layout {
    grid-template-columns:1fr
  }
}
/* =========================================================
   V3 · AJUSTES DE COHERENCIA JOCARSA-IU
   ========================================================= */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
html,body,button,input,select,textarea {
  font-family:Ubuntu,Arial,sans-serif
}
/* Las cajas de ambas columnas quedan centradas dentro de su menú. */
nav .contenido-columna,section .contenido-columna {
  align-items:center;
  width:100%
}
nav .contenido-columna>a,section .contenido-columna>article {
  width:100%;
  margin-left:auto;
  margin-right:auto
}
nav.compacto .contenido-columna,section.compacto .contenido-columna {
  margin-left:auto;
  margin-right:auto
}
/* Login: composición centrada y fondo de proyecto. jocarsa.png vive en la raíz. */
.ju-login-page {
  position:relative;
  isolation:isolate;
  min-height:100vh;
  margin:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 20px;
  background-image:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
}
.ju-login-layout {
  width:min(980px,100%);
  margin:auto;
  align-items:stretch
}
.ju-login-side,.ju-login-card {
  min-height:450px
}
.ju-login-card {
  display:flex;
  flex-direction:column;
  justify-content:center
}
.ju-login-brand {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center
}
/* Páginas de demostración de la librería */
.ju-demo-page {
  min-height:100vh;
  overflow:auto;
  background:var(--color3);
  color:var(--negro)
}
.ju-demo-header {
  min-height:64px;
  background:var(--color);
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:12px 20px
}
.ju-demo-header h1 {
  margin:0;
  font-size:20px;
  font-weight:500
}
.ju-demo-header p {
  margin:3px 0 0;
  opacity:.75
}
.ju-demo-header nav {
  width:auto!important;
  background:transparent;
  padding:0;
  display:flex;
  flex-direction:row;
  gap:8px;
  overflow:visible
}
.ju-demo-header a {
  color:white;
  text-decoration:none;
  padding:10px 14px;
  background:var(--color2);
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)
}
.ju-demo-main {
  width:min(1100px,calc(100% - 40px));
  margin:32px auto;
  display:grid;
  gap:20px
}
.ju-demo-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:20px
}
.ju-demo-page .ju-card h2,.ju-demo-page .ju-card h3 {
  margin-top:0
}
.ju-fieldset {
  border:1px solid rgba(17,24,39,.2);
  background:var(--blanco);
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:12px
}
.ju-check-group {
  display:flex;
  gap:18px;
  flex-wrap:wrap
}
@media(max-width:800px) {
  .ju-demo-grid {
    grid-template-columns:1fr
  }
  .ju-demo-header {
    align-items:flex-start;
    flex-direction:column
  }
  .ju-demo-header nav {
    flex-wrap:wrap
  }
}
/* =========================================================
   V4 · fidelidad jocarsa-iu 010
   ========================================================= */
/* Header completo: corporativo / herramientas / usuario */
header .corporativo {
  flex:1
}
header #herramientas {
  display:flex;
  gap:var(--relleno);
  align-items:center;
  justify-content:center;
  flex:2;
  height:100%
}
header #usuario {
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:var(--relleno);
  flex:1;
  height:100%
}
header #usuario .imagen {
  width:28px;
  height:28px;
  background:var(--color2);
  border-radius:100px;
  flex:none
}
header #usuario>div:last-child {
  display:flex;
  align-items:center;
  gap:var(--relleno);
  flex:none
}
header #usuario p {
  margin:0;
  white-space:nowrap
}
header #usuario a {
  background:var(--color2);
  border:0;
  padding:calc(var(--relleno)/2);
  height:28px;
  display:flex;
  align-items:center;
  color:var(--texto-nav);
  text-decoration:none;
  font:inherit
}
/* Las fichas de letra son cuadrados achaflanados, nunca círculos */
.ficha {
  border-radius:0!important;
  clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)
}
/* El destacado atraviesa visualmente el separador, sin provocar scroll horizontal. */
nav {
  overflow:visible!important;
  z-index:3
}
nav .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
section {
  overflow:visible!important;
  z-index:200;
}
section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible;
  padding-right:0
}
.contenido-columna .activo {
  transform:none
}
#navegacion .contenido-columna a,#entidades .contenido-columna article {
  width:100%;
  height:40px;
  flex:none;
  transition:width .3s ease,background .3s ease
}
#navegacion .contenido-columna a:hover,#entidades .contenido-columna article:hover {
  width:calc(100% + var(--relleno)*.9)
}
#navegacion .contenido-columna a.activo,#entidades .contenido-columna article.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
nav.compacto .contenido-columna a:hover,nav.compacto .contenido-columna a.activo,section.compacto .contenido-columna article:hover,section.compacto .contenido-columna article.activo {
  width:40px!important
}
/* Login realmente centrado + fondo jocarsa.png de la raíz */
body.ju-login-page {
  width:100%;
  height:100vh;
  min-height:100vh;
  margin:0;
  display:grid!important;
  place-items:center;
  overflow:auto;
  padding:30px;
  background:linear-gradient(rgba(255,255,255,.78),rgba(255,255,255,.78)),url('../jocarsa.png') center center/cover no-repeat fixed
}
body.ju-login-page main.ju-login-layout {
  flex:none!important;
  min-height:0!important;
  margin:0!important;
  width:min(920px,calc(100vw - 60px));
  align-self:center;
  justify-self:center
}
/* Páginas de demostración: mismo esqueleto de dos menús + escenario */
body.ju-library-page {
  font-family:Ubuntu,Arial,sans-serif;
  font-size:var(--texto);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:var(--color3)
}
body.ju-library-page main {
  display:flex;
  flex:1;
  min-height:0;
  overflow:hidden
}
body.ju-library-page .library-nav {
  width:var(--ancho-nav);
  flex:0 0 var(--ancho-nav);
  background:var(--color);
  color:white;
  padding:12px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-section {
  width:var(--ancho-section);
  flex:0 0 var(--ancho-section);
  background:var(--color3);
  color:var(--negro);
  padding:12px 12px 12px 3px;
  position:relative;
  overflow:visible;
  display:flex;
  flex-direction:column;
  gap:10px
}
body.ju-library-page .library-nav .contenido-columna,body.ju-library-page .library-section .contenido-columna {
  overflow-y:auto;
  overflow-x:visible
}
body.ju-library-page .library-nav a,body.ju-library-page .library-section a {
  height:40px;
  flex:none;
  display:flex;
  align-items:center;
  gap:9px;
  padding:6px;
  background:var(--color2);
  color:inherit;
  text-decoration:none;
  clip-path:polygon(0 0,calc(100% - var(--chaflan)) 0,100% var(--chaflan),100% 100%,0 100%)
}
body.ju-library-page .library-section a {
  background:var(--color3)
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  width:calc(100% + var(--relleno)*2);
  position:relative;
  z-index:10
}
body.ju-library-page .library-nav a.activo,body.ju-library-page .library-section a.activo {
  background:var(--naranja);
  color:var(--blanco)
}
body.ju-library-page .library-stage {
  flex:1;
  min-width:0;
  padding:14px;
  overflow:auto;
  background:var(--color3)
}
body.ju-library-page .library-stage>.ju-card {
  max-width:1100px
}
/* =========================================================
   V5 · continuidad entre columnas sin scroll horizontal
   ========================================================= */
/*
  No usamos un contenedor scrollable alrededor de las fichas: cuando un
  elemento activo es más ancho que su columna, overflow:auto convierte el
  desbordamiento horizontal en una barra de scroll. En jocarsa-iu el
  destacado debe poder atravesar el límite de la columna y cubrir el
  separador visualmente.
*/
.jocarsa-iu nav .contenido-columna, .jocarsa-iu section .contenido-columna, body.ju-library-page .library-nav .contenido-columna, body.ju-library-page .library-section .contenido-columna {
  overflow:visible !important;
  width:100%;
  min-width:0;
  align-items:stretch;
}
/* Las fichas normales ocupan siempre todo el ancho útil de su columna. */
.jocarsa-iu nav .contenido-columna > a, .jocarsa-iu section .contenido-columna > article, body.ju-library-page .library-nav .contenido-columna > a, body.ju-library-page .library-section .contenido-columna > a {
  width:100%;
  max-width:none;
  margin:0;
  flex:0 0 40px;
}
/* Hover y selección continúan físicamente hacia la columna siguiente. */
.jocarsa-iu nav .contenido-columna > a:hover, .jocarsa-iu section .contenido-columna > article:hover, body.ju-library-page .library-nav .contenido-columna > a:hover, body.ju-library-page .library-section .contenido-columna > a:hover {
  width:calc(100% + (var(--relleno) * .9));
  position:relative;
  z-index:9;
}
.jocarsa-iu nav .contenido-columna > a.activo, .jocarsa-iu section .contenido-columna > article.activo, body.ju-library-page .library-nav .contenido-columna > a.activo, body.ju-library-page .library-section .contenido-columna > a.activo {
  width:calc(100% + (var(--relleno) * 2));
  position:relative;
  z-index:10;
}
/* El separador queda por debajo del destacado, como en 010. */
.jocarsa-iu main .separador, body.ju-library-page main .separador {
  z-index:4
}
.jocarsa-iu nav, body.ju-library-page .library-nav {
  z-index:6
}
.jocarsa-iu section, body.ju-library-page .library-section {
  z-index:500
}
/* La columna central de las demos conserva exactamente la misma geometría
   que la columna central de index.html. */
body.ju-library-page .library-section {
  padding:var(--relleno);
  padding-left:3px;
}
body.ju-library-page .library-section .contenido-columna > a {
  padding:calc(var(--relleno) / 2);
  height:40px;
  min-height:40px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  gap:calc(var(--relleno) / 2);
  background:var(--color3);
}
/* Contraído: conserva la misma continuidad visual hacia la columna siguiente. */
.jocarsa-iu nav.compacto .contenido-columna,
.jocarsa-iu section.compacto .contenido-columna {
  width:40px;
  align-items:center;
  overflow:visible !important;
}

/* Estado normal: la ficha permanece dentro de los 40px de la columna compacta. */
.jocarsa-iu nav.compacto .contenido-columna > a,
.jocarsa-iu section.compacto .contenido-columna > article {
  width:40px !important;
  min-width:40px;
  max-width:none;
  overflow:visible;
  position:relative;
}

/* Hover: sobresale ligeramente hacia la siguiente sección. */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover {
  width:calc(40px + (var(--relleno) * .9)) !important;
  z-index:9;
}

/* Activo: atraviesa el separador igual que en el estado desplegado. */
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  width:calc(50px + (var(--relleno) * 2)) !important;
  z-index:10;
}


/* =========================================================
   V6 · DRAWER DERECHO REDIMENSIONABLE + MODAL
   ========================================================= */
.ju-drawer-overlay{position:fixed;inset:54px 0 0 0;background:rgba(17,24,39,.12);z-index:70;opacity:0;pointer-events:none;transition:opacity .25s ease}
.ju-drawer-overlay.abierto{opacity:1;pointer-events:auto}
.ju-drawer{--drawer-width:440px;position:fixed;z-index:80;top:54px;right:0;bottom:0;width:var(--drawer-width);max-width:50vw;background:var(--blanco);box-shadow:-18px 0 45px rgba(0,0,0,.18);transform:translateX(calc(100% + 20px));transition:transform .3s ease;display:flex;flex-direction:column;color:var(--negro)}
.ju-drawer.abierto{transform:translateX(0)}
.ju-drawer-resizer{position:absolute;left:-7px;top:0;bottom:0;width:7px;background:var(--color0);cursor:col-resize;z-index:3;transition:background .2s}
.ju-drawer-resizer:hover{background:var(--color)}
.ju-drawer-header{height:auto;min-height:76px;flex:none;background:var(--color);padding:14px 16px;color:var(--blanco);display:flex;align-items:center;justify-content:space-between;gap:12px}
.ju-drawer-header small{display:block;opacity:.7;font-weight:700;letter-spacing:.12em;margin-bottom:3px}
.ju-drawer-header h2{margin:0;font-size:20px}
.ju-drawer-close,.ju-modal-close{border:0;background:var(--color4);color:var(--negro);width:36px;height:36px;font-size:24px;cursor:pointer;flex:none}
.ju-drawer-body{padding:18px;overflow:auto;flex:1;min-height:0;background:var(--color3)}
.ju-drawer-body .ju-card{min-height:100%}
.ju-drawer-body .ju-form-grid{grid-template-columns:1fr}
.ju-drawer-body .ju-form-full{grid-column:auto}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.ju-drawer.ju-drawer-dos-columnas .ju-drawer-body .ju-form-full{grid-column:1/-1}
.ju-row-editable{cursor:pointer}
.ju-row-editable:hover{background:color-mix(in srgb,var(--color2) 35%,var(--blanco))!important}
.ju-row-editable:after{content:""}
.ju-modal-layer{position:fixed;inset:0;z-index:120;display:grid;place-items:center;opacity:0;pointer-events:none;transition:opacity .22s ease;padding:24px}
.ju-modal-layer.abierto{opacity:1;pointer-events:auto}
.ju-modal-backdrop{position:absolute;inset:0;background:rgba(17,24,39,.62);backdrop-filter:blur(2px)}
.ju-modal-window{position:relative;z-index:1;width:min(650px,calc(100vw - 48px));max-height:calc(100vh - 48px);background:var(--blanco);box-shadow:0 28px 80px rgba(0,0,0,.3);clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%);transform:translateY(16px) scale(.98);transition:transform .22s ease;overflow:hidden}
.ju-modal-layer.abierto .ju-modal-window{transform:none}
.ju-modal-header{height:auto;min-height:62px;background:var(--color);color:var(--blanco);padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
.ju-modal-header h2{margin:0;font-size:19px}
.ju-modal-body{padding:22px;max-height:calc(100vh - 120px);overflow:auto}
.ju-showcase-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:18px}
.ju-showcase-box{padding:18px;background:var(--color3);min-height:150px;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)}
.ju-showcase-box h3{margin-top:0}
body.redimensionando-drawer,body.redimensionando-drawer *{cursor:col-resize!important;user-select:none!important}
@media(max-width:700px){.ju-drawer{--drawer-width:50vw;max-width:50vw}.ju-showcase-grid{grid-template-columns:1fr}}


/* =========================================================
   V7 · compacto: fusionar visualmente con la sección derecha
   ========================================================= */
.jocarsa-iu nav.compacto .contenido-columna > a:hover,
.jocarsa-iu section.compacto .contenido-columna > article:hover,
.jocarsa-iu nav.compacto .contenido-columna > a.activo,
.jocarsa-iu section.compacto .contenido-columna > article.activo {
  transform:translateX(16px) !important;
}
/* =========================================================
   PROMPT IA FLOTANTE + CORRECCION DE CAPAS
   ========================================================= */
.escenario{
  z-index:1 !important;
}

.ju-drawer-overlay{z-index:2000 !important}
.ju-drawer{z-index:2100 !important}
.ju-modal-layer{z-index:3000 !important}

.ju-ai-prompt{
  position:fixed;
  left:50%;
  bottom:26px;
  transform:translateX(-50%);
  width:min(720px,calc(100vw - 40px));
  background:var(--blanco);
  box-shadow:0 18px 55px rgba(0,0,0,.22);
  z-index:1500;
  color:var(--negro);
  clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  user-select:none;
}
.ju-ai-prompt.is-dragging{box-shadow:0 24px 70px rgba(0,0,0,.3)}
.ju-ai-drag{
  height:30px;
  display:flex;
  align-items:center;
  gap:8px;
  padding:0 12px;
  background:var(--color);
  color:var(--blanco);
  cursor:grab;
  font-size:11px;
  font-weight:700;
  letter-spacing:.04em;
}
.ju-ai-drag:active{cursor:grabbing}
.ju-ai-spark{font-size:15px}
.ju-ai-grip{margin-left:auto;opacity:.65;font-size:16px}
.ju-ai-compose{
  display:grid;
  grid-template-columns:1fr 42px 42px;
  gap:8px;
  align-items:end;
  padding:10px;
}
.ju-ai-compose textarea{
  width:100%;
  min-height:42px;
  max-height:150px;
  resize:none;
  border:0;
  outline:0;
  padding:11px 12px;
  background:var(--color3);
  color:var(--negro);
  font:inherit;
  line-height:1.45;
  user-select:text;
}
.ju-ai-mic,.ju-ai-send{
  width:42px;
  height:42px;
  border:0;
  cursor:pointer;
  font:inherit;
  font-size:17px;
}
.ju-ai-mic{background:var(--naranja);color:var(--blanco)}
.ju-ai-send{background:var(--azul);color:var(--blanco)}
.ju-ai-mic.is-listening{outline:3px solid color-mix(in srgb,var(--naranja) 35%,var(--blanco));filter:brightness(1.15)}
.ju-ai-send:disabled,.ju-ai-mic:disabled{opacity:.45;cursor:not-allowed}
.ju-ai-status{
  display:none;
  padding:0 12px 9px;
  font-size:11px;
  color:var(--negro);
  opacity:.7;
}
.ju-ai-status:not(:empty){display:block}
@media(max-width:700px){
  .ju-ai-prompt{width:calc(100vw - 20px);bottom:10px}
}

/* V2 prompt: minimizar, redimensionar y salida IA maquetada */
.ju-ai-prompt{
  min-width:360px;min-height:82px;max-width:calc(100vw - 16px);max-height:calc(100vh - 70px);
  overflow:hidden;resize:none;
}
.ju-ai-window-actions{margin-left:auto;display:flex;align-items:center;gap:8px}
.ju-ai-window-actions button{width:24px;height:22px;border:0;background:rgba(255,255,255,.14);color:var(--blanco);cursor:pointer;font:inherit;font-weight:800;line-height:1}
.ju-ai-window-actions button:hover{background:rgba(255,255,255,.28)}
.ju-ai-grip{margin-left:0!important;cursor:grab}
.ju-ai-prompt.is-minimized{width:230px!important;min-width:230px;min-height:30px;height:30px!important}
.ju-ai-prompt.is-minimized .ju-ai-compose,.ju-ai-prompt.is-minimized .ju-ai-status,.ju-ai-prompt.is-minimized .ju-ai-resizer{display:none}
.ju-ai-resizer{position:absolute;right:0;bottom:0;width:18px;height:18px;cursor:nwse-resize;z-index:3}
.ju-ai-resizer:after{content:"";position:absolute;right:4px;bottom:4px;width:8px;height:8px;border-right:2px solid var(--color);border-bottom:2px solid var(--color);opacity:.75}

/* Salida del asistente: panel de lectura integrado en el escenario */
.ju-ai-result{background:var(--blanco);max-width:1200px;margin:0 auto;padding:22px 24px;box-shadow:0 8px 26px rgba(0,0,0,.08);clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%);color:var(--negro);line-height:1.55}
.ju-ai-result h1,.ju-ai-result h2,.ju-ai-result h3{color:var(--color0);margin:1.1em 0 .55em}
.ju-ai-result h1:first-child,.ju-ai-result h2:first-child,.ju-ai-result h3:first-child{margin-top:0}
.ju-ai-result p{margin:.65em 0}
.ju-ai-result ul,.ju-ai-result ol{padding-left:24px}
.ju-ai-result code{background:var(--color3);padding:2px 5px}
.ju-ai-result pre{background:var(--negro);color:var(--blanco);padding:14px;overflow:auto;white-space:pre-wrap}
.ju-ai-result pre code{background:transparent;padding:0;color:inherit}
.ju-ai-result blockquote{margin:12px 0;padding:10px 14px;border-left:5px solid var(--color);background:var(--color3)}
.ju-ai-result table{width:100%;border-collapse:collapse;margin:16px 0;background:var(--blanco)}
.ju-ai-result caption{background:var(--color2);padding:12px;text-align:left;font-weight:bold}
.ju-ai-result thead{background:var(--azul);color:var(--blanco)}
.ju-ai-result th,.ju-ai-result td{padding:10px;border-bottom:1px solid rgba(17,24,39,.18);text-align:left}
.ju-ai-result tbody tr:hover{background:var(--color4)}
.ju-ai-result .ju-ai-table-wrap{width:100%;overflow:auto;margin:16px 0}
.ju-ai-result .ju-ai-table-wrap table{margin:0;min-width:520px}
@media(max-width:700px){.ju-ai-prompt{min-width:280px}.ju-ai-result{padding:16px}}

/* V5 · salida hablada opcional */
.ju-ai-options{display:flex;align-items:center;padding:0 14px 8px;background:var(--blanco)}
.ju-ai-switch{display:inline-flex;align-items:center;gap:8px;cursor:pointer;user-select:none;font-size:12px;color:var(--negro)}
.ju-ai-switch input{position:absolute;opacity:0;pointer-events:none}
.ju-ai-switch-track{width:34px;height:18px;background:var(--azul-palido);position:relative;transition:.2s;clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,0 100%)}
.ju-ai-switch-thumb{position:absolute;width:12px;height:12px;left:3px;top:3px;background:var(--blanco);transition:.2s}
.ju-ai-switch input:checked + .ju-ai-switch-track{background:var(--color)}
.ju-ai-switch input:checked + .ju-ai-switch-track .ju-ai-switch-thumb{transform:translateX(16px)}
.ju-ai-switch input:focus-visible + .ju-ai-switch-track{outline:2px solid var(--color0);outline-offset:2px}
.ju-ai-prompt.is-minimized .ju-ai-options{display:none}

```
##### data
**clientes.json**
```json
{
  "titulo": "Listado de clientes",
  "columnas": [
    {
      "campo": "id",
      "etiqueta": "ID"
    },
    {
      "campo": "nombre",
      "etiqueta": "Nombre"
    },
    {
      "campo": "apellidos",
      "etiqueta": "Apellidos"
    },
    {
      "campo": "email",
      "etiqueta": "Email"
    },
    {
      "campo": "telefono",
      "etiqueta": "Teléfono"
    },
    {
      "campo": "empresa",
      "etiqueta": "Empresa"
    }
  ],
  "registros": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "+34 612 345 678",
      "empresa": "Soluciones Levante S.L."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Navarro Pérez",
      "email": "carlos.navarro@example.com",
      "telefono": "+34 623 456 789",
      "empresa": "Innovación Digital S.A."
    }
  ]
}
```
**datos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre",
      "tipo": "text"
    },
    {
      "nombre": "apellidos",
      "etiqueta": "Apellidos",
      "tipo": "text"
    },
    {
      "nombre": "email",
      "etiqueta": "Correo electrónico",
      "tipo": "email"
    },
    {
      "nombre": "telefono",
      "etiqueta": "Teléfono",
      "tipo": "tel"
    },
    {
      "nombre": "fecha_nacimiento",
      "etiqueta": "Fecha de nacimiento",
      "tipo": "date"
    },
    {
      "nombre": "numero_empleados",
      "etiqueta": "Número de empleados",
      "tipo": "number"
    },
    {
      "nombre": "facturacion",
      "etiqueta": "Facturación anual",
      "tipo": "number"
    },
    {
      "nombre": "web",
      "etiqueta": "Página web",
      "tipo": "url"
    },
    {
      "nombre": "tipo_cliente",
      "etiqueta": "Tipo de cliente",
      "tipo": "select",
      "opciones": [
        "Particular",
        "Autónomo",
        "Empresa",
        "Administración"
      ]
    },
    {
      "nombre": "activo",
      "etiqueta": "Cliente activo",
      "tipo": "checkbox"
    },
    {
      "nombre": "observaciones",
      "etiqueta": "Observaciones",
      "tipo": "textarea"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Laura",
      "apellidos": "Martínez García",
      "email": "laura.martinez@example.com",
      "telefono": "612345678",
      "fecha_nacimiento": "1987-04-12",
      "numero_empleados": 1,
      "facturacion": 42000,
      "web": "https://example.com/laura",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Cliente desde 2023."
    },
    {
      "id": 2,
      "nombre": "Carlos",
      "apellidos": "Sánchez López",
      "email": "carlos.sanchez@example.com",
      "telefono": "623456789",
      "fecha_nacimiento": "1979-11-03",
      "numero_empleados": 18,
      "facturacion": 380000,
      "web": "https://example.com/carlos",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Interesado en servicios de desarrollo."
    },
    {
      "id": 3,
      "nombre": "Marta",
      "apellidos": "Ruiz Navarro",
      "email": "marta.ruiz@example.com",
      "telefono": "634567890",
      "fecha_nacimiento": "1992-07-21",
      "numero_empleados": 1,
      "facturacion": 31500,
      "web": "https://example.com/marta",
      "tipo_cliente": "Particular",
      "activo": false,
      "observaciones": "Actualmente sin proyectos activos."
    },
    {
      "id": 4,
      "nombre": "Javier",
      "apellidos": "Torres Romero",
      "email": "javier.torres@example.com",
      "telefono": "645678901",
      "fecha_nacimiento": "1984-02-15",
      "numero_empleados": 42,
      "facturacion": 920000,
      "web": "https://example.com/javier",
      "tipo_cliente": "Empresa",
      "activo": true,
      "observaciones": "Solicita mantenimiento periódico."
    },
    {
      "id": 5,
      "nombre": "Ana",
      "apellidos": "Gómez Pérez",
      "email": "ana.gomez@example.com",
      "telefono": "656789012",
      "fecha_nacimiento": "1990-09-28",
      "numero_empleados": 6,
      "facturacion": 125000,
      "web": "https://example.com/ana",
      "tipo_cliente": "Autónomo",
      "activo": true,
      "observaciones": "Contacto preferente por correo electrónico."
    }
  ]
}
```
**entidades.json**
```json
[
  {
    "emoji": "👤",
    "texto": "Clientes",
    "activo": true
  },
  {
    "emoji": "🏢",
    "texto": "Empresas"
  },
  {
    "emoji": "📞",
    "texto": "Contactos"
  },
  {
    "emoji": "📋",
    "texto": "Seguimiento"
  },
  {
    "texto": "Formulario"
  },
  {
    "texto": "Login"
  },
  {
    "texto": "Toasts"
  },
  {
    "texto": "Modal / paneles"
  }
]
```
**menu.json**
```json
[
  {
    "emoji": "👥",
    "texto": "Clientes",
    "url": "#clientes",
    "activo": true
  },
  {
    "emoji": "📦",
    "texto": "Productos",
    "url": "#productos",
    "activo": false
  },
  {
    "emoji": "🧾",
    "texto": "Pedidos",
    "url": "#pedidos",
    "activo": false
  },
  {
    "emoji": "⚙️",
    "texto": "Configuración",
    "url": "#configuracion",
    "activo": false
  }
]
```
**productos.json**
```json
{
  "campos": [
    {
      "nombre": "id",
      "etiqueta": "ID",
      "tipo": "number"
    },
    {
      "nombre": "nombre",
      "etiqueta": "Nombre del producto",
      "tipo": "text"
    },
    {
      "nombre": "descripcion",
      "etiqueta": "Descripción",
      "tipo": "textarea"
    },
    {
      "nombre": "categoria",
      "etiqueta": "Categoría",
      "tipo": "select",
      "opciones": [
        "Informática",
        "Periféricos",
        "Telefonía",
        "Oficina",
        "Almacenamiento"
      ]
    },
    {
      "nombre": "precio",
      "etiqueta": "Precio",
      "tipo": "number"
    },
    {
      "nombre": "stock",
      "etiqueta": "Stock",
      "tipo": "number"
    },
    {
      "nombre": "fecha_alta",
      "etiqueta": "Fecha de alta",
      "tipo": "date"
    },
    {
      "nombre": "fabricante",
      "etiqueta": "Fabricante",
      "tipo": "text"
    },
    {
      "nombre": "web",
      "etiqueta": "Página del producto",
      "tipo": "url"
    },
    {
      "nombre": "disponible",
      "etiqueta": "Disponible",
      "tipo": "checkbox"
    }
  ],
  "datos": [
    {
      "id": 1,
      "nombre": "Portátil ProBook 15",
      "descripcion": "Portátil profesional de 15 pulgadas para oficina y desarrollo.",
      "categoria": "Informática",
      "precio": 749.99,
      "stock": 12,
      "fecha_alta": "2026-01-15",
      "fabricante": "TechNova",
      "web": "https://example.com/probook15",
      "disponible": true
    },
    {
      "id": 2,
      "nombre": "Monitor UltraView 27",
      "descripcion": "Monitor IPS de 27 pulgadas con resolución 2560x1440.",
      "categoria": "Informática",
      "precio": 229.9,
      "stock": 25,
      "fecha_alta": "2026-02-03",
      "fabricante": "UltraView",
      "web": "https://example.com/ultraview27",
      "disponible": true
    },
    {
      "id": 3,
      "nombre": "Teclado Mecánico K500",
      "descripcion": "Teclado mecánico USB para programación y uso intensivo.",
      "categoria": "Periféricos",
      "precio": 79.95,
      "stock": 40,
      "fecha_alta": "2026-02-20",
      "fabricante": "KeyMaster",
      "web": "https://example.com/k500",
      "disponible": true
    },
    {
      "id": 4,
      "nombre": "SSD Portable 2 TB",
      "descripcion": "Unidad SSD externa USB-C de alta velocidad.",
      "categoria": "Almacenamiento",
      "precio": 149.5,
      "stock": 18,
      "fecha_alta": "2026-03-12",
      "fabricante": "DataFast",
      "web": "https://example.com/ssd2tb",
      "disponible": true
    },
    {
      "id": 5,
      "nombre": "Smartphone Nova X",
      "descripcion": "Teléfono móvil con pantalla OLED y 256 GB de almacenamiento.",
      "categoria": "Telefonía",
      "precio": 499.0,
      "stock": 0,
      "fecha_alta": "2026-04-08",
      "fabricante": "NovaMobile",
      "web": "https://example.com/novax",
      "disponible": false
    }
  ]
}
```
##### js
**componentes.js**
```js
/**
 * andrei | iu
 * Control principal de la interfaz mediante programación orientada a objetos.
 *
 * Nota sobre el namespace:
 * JavaScript no admite "|" dentro de un identificador. Por ello el namespace
 * técnico equivalente es `andrei.iu`.
 */
window.andrei = window.andrei || {};
window.andrei.iu = window.andrei.iu || {};

(() => {
  "use strict";

  class DOM {
    static uno(selector, contexto = document) {
      return contexto.querySelector(selector);
    }

    static todos(selector, contexto = document) {
      return [...contexto.querySelectorAll(selector)];
    }
  }

  class Utilidades {
    static hashTexto(texto) {
      let hash = 0;

      for (const caracter of texto) {
        hash = caracter.charCodeAt(0) + ((hash << 5) - hash);
      }

      return Math.abs(hash);
    }

    static colorTexto(texto) {
      return Utilidades.hashTexto(texto) % 2
        ? "var(--naranja)"
        : "var(--azul)";
    }
  }

  class OrigenDatos {
    static async cargarJSON(url) {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(url);
      }

      return respuesta.json();
    }
  }

  class EstadoIU {
    constructor() {
      this.menu = [];
      this.entidades = [];
      this.clientes = null;
      this.formulario = null;
      this.seleccion = "Listado";
    }
  }

  class FichaIU {
    static completar(elemento, texto) {
      const ficha = DOM.uno(".ficha", elemento);
      const etiqueta = DOM.uno(".etiqueta", elemento);

      ficha.textContent = texto.charAt(0).toUpperCase();
      ficha.style.background = Utilidades.colorTexto(texto);
      etiqueta.textContent = texto;
    }
  }

  class ToastIU {
    constructor(selectorPila = "#toastStack") {
      this.selectorPila = selectorPila;
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    obtenerPila() {
      let pila = DOM.uno(this.selectorPila);

      if (!pila) {
        pila = document.createElement("div");
        pila.id = this.selectorPila.replace(/^#/, "");
        pila.className = "ju-toast-stack";
        document.body.appendChild(pila);
      }

      return pila;
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Operación realizada") {
      const pila = this.obtenerPila();
      const toast = document.createElement("article");

      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      DOM.uno("button", toast).addEventListener("click", cerrar);
      pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class ModalIU {
    constructor() {
      this.capa = DOM.uno("#juModal");
      this.titulo = DOM.uno("#juModalTitle");
      this.cuerpo = DOM.uno("#juModalBody");
      DOM.todos("[data-modal-close]", this.capa).forEach((nodo) => nodo.addEventListener("click", () => this.cerrar()));
    }
    abrir(titulo, contenido) {
      this.titulo.textContent = titulo;
      this.cuerpo.innerHTML = contenido;
      this.capa.classList.add("abierto");
      this.capa.setAttribute("aria-hidden", "false");
    }
    cerrar() {
      this.capa.classList.remove("abierto");
      this.capa.setAttribute("aria-hidden", "true");
    }
  }

  class DrawerIU {
    constructor(aplicacion) {
      this.aplicacion = aplicacion;
      this.panel = DOM.uno("#juDrawer");
      this.overlay = DOM.uno("#juDrawerOverlay");
      this.cuerpo = DOM.uno("#juDrawerBody");
      this.modo = DOM.uno("#juDrawerMode");
      this.titulo = DOM.uno("#juDrawerTitle");
      this.resizer = DOM.uno("#juDrawerResizer");
      this.anchoMinimo = 300;
      // El máximo real se calcula siempre como el 50% del viewport.
      this.anchoMaximo = () => Math.max(this.anchoMinimo, window.innerWidth * 0.5);
      DOM.uno("#juDrawerClose").addEventListener("click", () => this.cerrar());
      this.overlay.addEventListener("click", () => this.cerrar());
      this.resizer.addEventListener("pointerdown", (e) => this.iniciarRedimension(e));
      window.addEventListener("resize", () => this.ajustarAlViewport());
      this.actualizarColumnasFormulario();
    }
    abrirCrear() { this.renderFormulario("create", null); }
    abrirActualizar(registro) { this.renderFormulario("update", registro); }
    renderFormulario(modo, registro) {
      const esCrear = modo === "create";
      this.modo.textContent = esCrear ? "CREAR" : "ACTUALIZAR";
      this.titulo.textContent = esCrear ? "Nuevo cliente" : `Editar ${registro.nombre || "registro"}`;
      const campos = this.aplicacion.estado.formulario.campos;
      this.cuerpo.innerHTML = `<article class="ju-card"><form id="juDrawerForm" class="ju-form-grid">${campos.map(c => this.campoHTML(c, registro)).join("")}<div class="ju-form-full ju-button-row"><button class="ju-btn" type="submit">${esCrear ? "Crear" : "Guardar cambios"}</button><button class="ju-btn secondary" type="button" id="juDrawerCancel">Cancelar</button></div></form></article>`;
      DOM.uno("#juDrawerCancel").addEventListener("click", () => this.cerrar());
      DOM.uno("#juDrawerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const nuevo = {};
        campos.forEach(c => {
          if (c.tipo === "checkbox") nuevo[c.nombre] = fd.has(c.nombre);
          else if (c.tipo === "number") nuevo[c.nombre] = fd.get(c.nombre) === "" ? "" : Number(fd.get(c.nombre));
          else nuevo[c.nombre] = fd.get(c.nombre) ?? "";
        });
        if (esCrear) {
          const ids = this.aplicacion.estado.clientes.registros.map(r => Number(r.id) || 0);
          if (!nuevo.id) nuevo.id = Math.max(0, ...ids) + 1;
          this.aplicacion.estado.clientes.registros.push(nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente creado", "El nuevo registro se ha añadido a la tabla.");
        } else {
          Object.assign(registro, nuevo);
          this.aplicacion.toast.mostrar("success", "Cliente actualizado", "Los cambios se muestran inmediatamente en la tabla.");
        }
        this.aplicacion.mostrarTabla(DOM.uno("#buscador").value);
        this.cerrar();
      });
      this.ajustarAlViewport();
      this.actualizarColumnasFormulario();
      this.panel.classList.add("abierto"); this.overlay.classList.add("abierto");
      this.panel.setAttribute("aria-hidden", "false"); this.overlay.setAttribute("aria-hidden", "false");
      setTimeout(() => DOM.uno("input,select,textarea", this.cuerpo)?.focus(), 320);
    }
    campoHTML(c, registro) {
      const valor = registro?.[c.nombre] ?? "";
      const esc = (v) => String(v).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;");
      if (c.tipo === "textarea") return `<label class="ju-form-full"><span>${c.etiqueta}</span><textarea name="${c.nombre}">${esc(valor)}</textarea></label>`;
      if (c.tipo === "select") return `<label><span>${c.etiqueta}</span><select name="${c.nombre}">${(c.opciones||[]).map(o=>`<option${o===valor?' selected':''}>${o}</option>`).join("")}</select></label>`;
      if (c.tipo === "checkbox") return `<label class="ju-check ju-form-full"><input type="checkbox" name="${c.nombre}"${valor?' checked':''}><span>${c.etiqueta}</span></label>`;
      return `<label><span>${c.etiqueta}</span><input name="${c.nombre}" type="${c.tipo || 'text'}" value="${esc(valor)}"${c.nombre==='id'?' min="1"':''}></label>`;
    }
    cerrar() { this.panel.classList.remove("abierto"); this.overlay.classList.remove("abierto"); this.panel.setAttribute("aria-hidden","true"); this.overlay.setAttribute("aria-hidden","true"); }
    iniciarRedimension(e) {
      e.preventDefault(); const inicio=e.clientX, anchoInicial=this.panel.getBoundingClientRect().width;
      this.resizer.setPointerCapture(e.pointerId); document.body.classList.add("redimensionando-drawer"); this.panel.style.transition="none";
      const mover=(ev)=>{
        const ancho=Math.min(this.anchoMaximo(),Math.max(this.anchoMinimo,anchoInicial+(inicio-ev.clientX)));
        this.panel.style.setProperty("--drawer-width",`${ancho}px`);
        this.actualizarColumnasFormulario(ancho);
      };
      const fin=()=>{ this.resizer.removeEventListener("pointermove",mover); this.panel.style.transition=""; document.body.classList.remove("redimensionando-drawer"); };
      this.resizer.addEventListener("pointermove",mover); this.resizer.addEventListener("pointerup",fin,{once:true}); this.resizer.addEventListener("pointercancel",fin,{once:true});
    }
    actualizarColumnasFormulario(ancho = this.panel.getBoundingClientRect().width) {
      // <= 25% del navegador: una columna. > 25% y hasta 50%: dos columnas.
      this.panel.classList.toggle("ju-drawer-dos-columnas", ancho > window.innerWidth * 0.25);
    }
    ajustarAlViewport() {
      const actual = this.panel.getBoundingClientRect().width;
      const maximo = this.anchoMaximo();
      if (actual > maximo) {
        this.panel.style.setProperty("--drawer-width", `${maximo}px`);
        this.actualizarColumnasFormulario(maximo);
      } else {
        this.actualizarColumnasFormulario(actual);
      }
    }
  }

  class GestorColumnas {
    constructor() {
      this.anchoMinimo = 100;
      this.anchoMaximo = 600;
    }

    activar() {
      this.activarMinimizacion();
      this.activarSeparadores();
    }

    activarMinimizacion() {
      DOM.todos(".minimizar").forEach((boton) => {
        const columna = boton.closest("nav,section");
        columna.dataset.ancho = columna.getBoundingClientRect().width;

        boton.addEventListener("click", () => {
          this.alternarColumna(columna, boton);
        });
      });
    }

    alternarColumna(columna, boton) {
      if (columna.classList.contains("compacto")) {
        const ancho = parseFloat(columna.dataset.ancho) || 250;

        columna.classList.remove("compacto");
        columna.style.flexBasis = `${ancho}px`;
        columna.style.width = `${ancho}px`;
        boton.textContent = "◀";
        return;
      }

      columna.dataset.ancho = columna.getBoundingClientRect().width;
      columna.style.flexBasis = `${columna.dataset.ancho}px`;
      columna.style.width = `${columna.dataset.ancho}px`;

      void columna.offsetWidth;

      columna.classList.add("compacto");
      boton.textContent = "▶";
    }

    activarSeparadores() {
      DOM.todos(".separador").forEach((separador) => {
        separador.addEventListener("pointerdown", (evento) => {
          this.iniciarRedimension(separador, evento);
        });
      });
    }

    iniciarRedimension(separador, evento) {
      evento.preventDefault();

      const columna = separador.previousElementSibling;

      if (!columna || columna.classList.contains("compacto")) {
        return;
      }

      const inicio = evento.clientX;
      const anchoInicial = columna.getBoundingClientRect().width;

      columna.style.transition = "none";
      document.body.classList.add("redimensionando");
      separador.setPointerCapture(evento.pointerId);

      const mover = (eventoMovimiento) => {
        const ancho = Math.min(
          this.anchoMaximo,
          Math.max(this.anchoMinimo, anchoInicial + eventoMovimiento.clientX - inicio)
        );

        columna.style.width = `${ancho}px`;
        columna.style.flexBasis = `${ancho}px`;
        columna.dataset.ancho = ancho;
      };

      const terminar = () => {
        separador.removeEventListener("pointermove", mover);
        columna.style.transition = "";
        document.body.classList.remove("redimensionando");
      };

      separador.addEventListener("pointermove", mover);
      separador.addEventListener("pointerup", terminar, { once: true });
      separador.addEventListener("pointercancel", terminar, { once: true });
    }
  }

  class AplicacionIU {
    constructor() {
      this.estado = new EstadoIU();
      this.toast = new ToastIU();
      this.columnas = new GestorColumnas();
      this.modal = null;
      this.drawer = null;
    }

    async iniciar() {
      try {
        [
          this.estado.menu,
          this.estado.entidades,
          this.estado.clientes,
          this.estado.formulario
        ] = await Promise.all([
          OrigenDatos.cargarJSON("data/menu.json"),
          OrigenDatos.cargarJSON("data/entidades.json"),
          OrigenDatos.cargarJSON("data/clientes.json"),
          OrigenDatos.cargarJSON("data/datos.json")
        ]);

        this.modal = new ModalIU();
        this.drawer = new DrawerIU(this);
        this.renderMenu();
        this.renderEntidades();
        this.mostrarTabla();
        this.columnas.activar();
        this.activarEventos();
      } catch (error) {
        DOM.uno("#escenario").innerHTML = `
          <div class="panel">
            <h2>No se pudieron cargar los orígenes de datos</h2>
            <p>Sirve esta carpeta mediante HTTP, por ejemplo: <code>python3 -m http.server 8000</code></p>
            <pre>${error}</pre>
          </div>
        `;
      }
    }

    renderMenu() {
      const contenedor = DOM.uno("#navegacion .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.menu.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-nav").content.cloneNode(true);
        const enlace = DOM.uno("a", nodo);

        FichaIU.completar(enlace, elemento.texto);
        enlace.classList.toggle("activo", Boolean(elemento.activo));
        enlace.dataset.indice = indice;

        enlace.addEventListener("click", (evento) => {
          evento.preventDefault();
          DOM.todos("#navegacion a").forEach((item) => item.classList.remove("activo"));
          enlace.classList.add("activo");
          this.mostrarTabla();
        });

        contenedor.appendChild(nodo);
      });
    }

    renderEntidades() {
      const contenedor = DOM.uno("#entidades .contenido-columna");
      contenedor.innerHTML = "";

      this.estado.entidades.forEach((elemento, indice) => {
        const nodo = DOM.uno("#tpl-card").content.cloneNode(true);
        const articulo = DOM.uno("article", nodo);

        FichaIU.completar(articulo, elemento.texto);
        articulo.classList.toggle("activo", elemento.texto === this.estado.seleccion);
        articulo.dataset.indice = indice;

        articulo.addEventListener("click", () => {
          this.estado.seleccion = elemento.texto;
          this.renderEntidades();
          this.mostrarVista(elemento.texto);
        });

        articulo.addEventListener("dragstart", (evento) => {
          evento.dataTransfer.setData("text/plain", elemento.texto);
        });

        contenedor.appendChild(nodo);
      });
    }

    mostrarVista(vista) {
      if (vista === "Elemento" || vista === "Formulario") {
        this.mostrarFormularioUI();
      } else if (vista === "Login") {
        this.mostrarLoginDemo();
      } else if (vista === "Toasts") {
        this.mostrarToastsDemo();
      } else if (vista === "Modal / paneles") {
        this.mostrarModalPanelesDemo();
      } else {
        this.mostrarTabla();
      }
    }

    mostrarTabla(filtro = "") {
      const datos = this.estado.clientes;
      const registros = datos.registros.filter((registro) =>
        Object.values(registro)
          .join(" ")
          .toLowerCase()
          .includes(filtro.toLowerCase())
      );
      const escenario = DOM.uno("#escenario");
      const tabla = document.createElement("table");

      escenario.innerHTML = "";
      tabla.innerHTML = `
        <caption>${datos.titulo}</caption>
        <thead>
          <tr>${datos.columnas.map((columna) => `<th>${columna.etiqueta}</th>`).join("")}</tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th colspan="${Math.max(1, datos.columnas.length - 1)}">Total</th>
            <td>${registros.length}</td>
          </tr>
        </tfoot>
      `;

      const cuerpo = DOM.uno("tbody", tabla);

      registros.forEach((registro) => {
        const fila = DOM.uno("#tpl-fila").content.cloneNode(true).querySelector("tr");

        datos.columnas.forEach((columna) => {
          const celda = document.createElement("td");
          celda.textContent = registro[columna.campo] ?? "";
          fila.appendChild(celda);
        });

        fila.classList.add("ju-row-editable");
        fila.title = "Clic para editar en el panel lateral";
        fila.addEventListener("click", () => this.drawer.abrirActualizar(registro));
        cuerpo.appendChild(fila);
      });

      escenario.appendChild(tabla);
    }

    mostrarFormularioUI() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Formularios</h2>
          <p>Controles reutilizables con el lenguaje visual jocarsa-iu.</p>
          <form id="demoForm" class="ju-form-grid">
            <label>
              <span>Nombre</span>
              <input name="nombre" required>
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required>
            </label>
            <label>
              <span>Tipo</span>
              <select name="tipo">
                <option>Cliente</option>
                <option>Proveedor</option>
                <option>Alumno</option>
              </select>
            </label>
            <label>
              <span>Fecha</span>
              <input name="fecha" type="date">
            </label>
            <label class="ju-form-full">
              <span>Descripción</span>
              <textarea name="descripcion"></textarea>
            </label>
            <label class="ju-check ju-form-full">
              <input type="checkbox" name="activo">
              <span>Registro activo</span>
            </label>
            <div class="ju-form-full ju-button-row">
              <button class="ju-btn" type="submit">Guardar</button>
              <button class="ju-btn secondary" type="reset">Limpiar</button>
            </div>
          </form>
        </article>
      `;

      DOM.uno("#demoForm").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }

    mostrarLoginDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <div class="ju-login-layout" style="margin:auto">
          <article class="ju-login-side">
            <div class="ju-login-brand">
              <img src="https://static.jocarsa.com/logos/white.svg" alt="">
              <h1 class="ju-login-product-title">jocarsa | interfaz integrada</h1>
              <p>Pantalla de acceso basada en jocarsa-iu.</p>
            </div>
          </article>
          <article class="ju-login-card">
            <h2>Iniciar sesión</h2>
            <form id="loginDemo" class="ju-form-grid">
              <label class="ju-form-full">
                <span>Email</span>
                <input type="email" required>
              </label>
              <label class="ju-form-full">
                <span>Contraseña</span>
                <input type="password" required>
              </label>
              <label class="ju-check ju-form-full">
                <input type="checkbox">
                <span>Mantener sesión</span>
              </label>
              <div class="ju-form-full ju-login-actions">
                <button class="ju-btn">Entrar</button>
                <a class="ju-text-link" href="login.html">Abrir pantalla completa</a>
              </div>
            </form>
          </article>
        </div>
      `;

      DOM.uno("#loginDemo").addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Acceso simulado",
          "Login capturado como componente reutilizable."
        );
      });
    }

    mostrarToastsDemo() {
      const escenario = DOM.uno("#escenario");

      escenario.innerHTML = `
        <article class="ju-card">
          <h2>Librería · Toasts</h2>
          <p>Mensajes emergentes reutilizables con autocierre y cierre manual.</p>
          <div class="ju-button-row">
            <button class="ju-btn" data-t="success">Éxito</button>
            <button class="ju-btn secondary" data-t="info">Información</button>
            <button class="ju-btn secondary" data-t="warning">Aviso</button>
            <button class="ju-btn secondary" data-t="danger">Error</button>
          </div>
        </article>
      `;

      const titulos = {
        success: "Correcto",
        info: "Información",
        warning: "Revisar",
        danger: "Error"
      };

      DOM.todos("[data-t]", escenario).forEach((boton) => {
        boton.addEventListener("click", () => {
          this.toast.mostrar(
            boton.dataset.t,
            titulos[boton.dataset.t],
            "Ejemplo de mensaje emergente de la librería."
          );
        });
      });
    }

    mostrarModalPanelesDemo() {
      const escenario = DOM.uno("#escenario");
      escenario.innerHTML = `<article class="ju-card"><h2>Librería · Modal y panel lateral</h2><p>Dos patrones reutilizables para acciones que no deben sustituir el contenido del escenario.</p><div class="ju-showcase-grid"><div class="ju-showcase-box"><h3>Ventana modal</h3><p>Bloquea temporalmente la interfaz para confirmaciones, avisos o contenido focal.</p><button class="ju-btn" id="demoModal">Abrir modal</button></div><div class="ju-showcase-box"><h3>Panel lateral</h3><p>Entra desde la derecha, mantiene visible el contexto y puede redimensionarse arrastrando su borde izquierdo.</p><button class="ju-btn" id="demoDrawer">Abrir panel de creación</button></div></div></article>`;
      DOM.uno("#demoModal").addEventListener("click", () => {
        this.modal.abrir("Ejemplo de ventana modal", `<p>Esta es la nueva ventana modal reutilizable de <strong>jocarsa | iu</strong>.</p><p>Se puede cerrar con el botón ×, haciendo clic fuera o pulsando Escape.</p><div class="ju-button-row"><button class="ju-btn" id="modalAceptar">Aceptar</button></div>`);
        DOM.uno("#modalAceptar").addEventListener("click", () => this.modal.cerrar());
      });
      DOM.uno("#demoDrawer").addEventListener("click", () => this.drawer.abrirCrear());
    }

    activarEventos() {
      DOM.uno("#buscador").addEventListener("input", (evento) => {
        this.mostrarTabla(evento.target.value);
      });

      DOM.uno("#nuevo").addEventListener("click", () => {
        this.drawer.abrirCrear();
      });

      const escenario = DOM.uno("#escenario");

      escenario.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        escenario.classList.add("drag-over");
      });

      escenario.addEventListener("dragleave", () => {
        escenario.classList.remove("drag-over");
      });

      escenario.addEventListener("drop", (evento) => {
        evento.preventDefault();
        escenario.classList.remove("drag-over");

        const vista = evento.dataTransfer.getData("text/plain");
        this.estado.seleccion = vista;
        this.renderEntidades();
        this.mostrarVista(vista);
      });

      document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
          this.drawer?.cerrar();
          this.modal?.cerrar();
        }
      });
    }
  }

  window.jocarsa.iu.DOM = DOM;
  window.jocarsa.iu.Utilidades = Utilidades;
  window.jocarsa.iu.OrigenDatos = OrigenDatos;
  window.jocarsa.iu.EstadoIU = EstadoIU;
  window.jocarsa.iu.FichaIU = FichaIU;
  window.jocarsa.iu.ToastIU = ToastIU;
  window.jocarsa.iu.ModalIU = ModalIU;
  window.jocarsa.iu.DrawerIU = DrawerIU;
  window.jocarsa.iu.GestorColumnas = GestorColumnas;
  window.jocarsa.iu.AplicacionIU = AplicacionIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.aplicacion = new AplicacionIU();
    window.jocarsa.iu.aplicacion.iniciar();
  });
})();
/* =========================================================
   Prompt IA flotante · Ollama local · v2
   ========================================================= */
(() => {
  const iniciarPromptIA = () => {
    const prompt = document.querySelector('#juAiPrompt');
    const drag = document.querySelector('#juAiDrag');
    const input = document.querySelector('#juAiInput');
    const mic = document.querySelector('#juAiMic');
    const send = document.querySelector('#juAiSend');
    const status = document.querySelector('#juAiStatus');
    const escenario = document.querySelector('#escenario');
    const minimizar = document.querySelector('#juAiMinimize');
    const resizer = document.querySelector('#juAiResizer');
    const speakToggle = document.querySelector('#juAiSpeak');
    if (!prompt || !drag || !input || !mic || !send || !status || !escenario || !minimizar || !resizer || !speakToggle) return;

    let enviando=false, reconocimiento=null, escuchando=false;
    const escapeHTML = t => String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const inline = t => escapeHTML(t)
      .replace(/`([^`]+)`/g,'<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g,'<em>$1</em>');

    // Markdown ligero, incluyendo tablas, sin dependencias externas.
    const markdown = md => {
      md=String(md||'').replace(/\r/g,'').replace(/\u00a0/g,' ').replace(/[\u200B-\u200D\uFEFF]/g,'').trim();
      // Los LLM envuelven a veces TODO el Markdown en ```markdown ... ```.
      // Lo desenvolvemos antes de proteger los bloques de código reales.
      md=md.replace(/```(?:markdown|md)\s*\n([\s\S]*?)```/gi,(_,body)=>body.trim());
      const normalizeFenceTable = body => String(body||'')
        .replace(/[｜¦│]/g,'|').replace(/[‐‑‒–—−]/g,'-')
        .replace(/\u00a0/g,' ').replace(/[\u200B-\u200D\uFEFF]/g,'').trim();
      const fenceLooksLikeTable = body => {
        const ls=normalizeFenceTable(body).split('\n').filter(x=>x.trim());
        if(ls.length<2 || !ls[0].includes('|')) return false;
        const cells=x=>x.trim().replace(/^\s*\|/,'').replace(/\|\s*$/,'').split('|').map(v=>v.trim());
        const sep=cells(ls[1]);
        return cells(ls[0]).length>=2 && sep.length>=2 && sep.every(v=>/^:?-{2,}:?$/.test(v.replace(/\s+/g,'')));
      };
      // Algunos modelos meten una tabla Markdown dentro de un fence ``` sin lenguaje.
      // Si el contenido tiene estructura de tabla, lo sacamos del fence; el código real se conserva.
      md=md.replace(/```([^\n]*)\n([\s\S]*?)```/g,(all,lang,body)=>{
        if((!lang.trim() || /^(text|txt)$/i.test(lang.trim())) && fenceLooksLikeTable(body)) return normalizeFenceTable(body);
        return all;
      });
      const code=[];
      md=md.replace(/```([^\n]*)\n([\s\S]*?)```/g,(_,lang,body)=>`@@CODE${code.push({lang,body})-1}@@`);
      const lines=md.split('\n'), out=[];
      for(let i=0;i<lines.length;){
        const line=lines[i];
        // Tabla Markdown GFM. No exigimos que las filas terminen en |, porque
        // los LLM suelen omitir esa barra final. La segunda fila debe estar
        // formada exclusivamente por separadores --- / :--- / ---: / :---:.
        const normalizaTabla = x => String(x||'')
          .replace(/[｜¦│]/g,'|')
          .replace(/[‐‑‒–—−]/g,'-')
          .replace(/\u00a0/g,' ')
          .replace(/[\u200B-\u200D\uFEFF]/g,'');
        const tableCells = x => normalizaTabla(x).trim().replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(v=>v.trim());
        const isTableRow = x => normalizaTabla(x).includes('|') && tableCells(x).length >= 2;
        const isTableSeparator = x => {
          if(!isTableRow(x)) return false;
          const c=tableCells(x);
          return c.length>=2 && c.every(v=>/^:?-+:?$/.test(v.replace(/\s+/g,'')));
        };
        if(isTableRow(line) && i+1<lines.length && isTableSeparator(lines[i+1])){
          const heads=tableCells(line); i+=2; const rows=[];
          while(i<lines.length && lines[i].trim() && isTableRow(lines[i]) && !isTableSeparator(lines[i])) rows.push(tableCells(lines[i++]));
          out.push('<div class="ju-ai-table-wrap"><table><thead><tr>'+heads.map(x=>`<th>${inline(x)}</th>`).join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+heads.map((_,j)=>`<td>${inline(r[j]||'')}</td>`).join('')+'</tr>').join('')+'</tbody></table></div>'); continue;
        }
        let m;
        if((m=line.match(/^###\s+(.+)/))) out.push(`<h3>${inline(m[1])}</h3>`);
        else if((m=line.match(/^##\s+(.+)/))) out.push(`<h2>${inline(m[1])}</h2>`);
        else if((m=line.match(/^#\s+(.+)/))) out.push(`<h1>${inline(m[1])}</h1>`);
        else if((m=line.match(/^>\s?(.+)/))) out.push(`<blockquote>${inline(m[1])}</blockquote>`);
        else if(/^\s*[-*]\s+/.test(line)){
          let items=[]; while(i<lines.length && /^\s*[-*]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*]\s+/,''));
          out.push('<ul>'+items.map(x=>`<li>${inline(x)}</li>`).join('')+'</ul>'); continue;
        } else if(/^\s*\d+\.\s+/.test(line)){
          let items=[]; while(i<lines.length && /^\s*\d+\.\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+\.\s+/,''));
          out.push('<ol>'+items.map(x=>`<li>${inline(x)}</li>`).join('')+'</ol>'); continue;
        } else if(/^@@CODE\d+@@$/.test(line.trim())){
          const n=+line.match(/\d+/)[0], c=code[n]; out.push(`<pre><code>${escapeHTML(c.body)}</code></pre>`);
        } else if(line.trim()) out.push(`<p>${inline(line)}</p>`);
        i++;
      }
      return out.join('\n');
    };

    const autoResize=()=>{input.style.height='auto';input.style.height=Math.min(input.scrollHeight,150)+'px'};
    const fijar=(left,top)=>{const r=prompt.getBoundingClientRect(),m=8;return {left:Math.max(m,Math.min(left,window.innerWidth-r.width-m)),top:Math.max(62,Math.min(top,window.innerHeight-r.height-m))}};
    const convertirPosicion=()=>{const r=prompt.getBoundingClientRect();prompt.style.transform='none';prompt.style.bottom='auto';prompt.style.left=r.left+'px';prompt.style.top=r.top+'px'};

    drag.addEventListener('pointerdown',e=>{
      if(e.button!==0 || e.target.closest('button')) return;
      convertirPosicion(); const r=prompt.getBoundingClientRect(), ox=e.clientX-r.left, oy=e.clientY-r.top;
      prompt.classList.add('is-dragging'); drag.setPointerCapture(e.pointerId);
      const mover=ev=>{const p=fijar(ev.clientX-ox,ev.clientY-oy);prompt.style.left=p.left+'px';prompt.style.top=p.top+'px'};
      const soltar=ev=>{prompt.classList.remove('is-dragging');try{drag.releasePointerCapture(ev.pointerId)}catch{};drag.removeEventListener('pointermove',mover);drag.removeEventListener('pointerup',soltar);drag.removeEventListener('pointercancel',soltar)};
      drag.addEventListener('pointermove',mover);drag.addEventListener('pointerup',soltar);drag.addEventListener('pointercancel',soltar);
    });

    minimizar.addEventListener('click',e=>{
      e.stopPropagation(); convertirPosicion(); prompt.classList.toggle('is-minimized');
      minimizar.textContent=prompt.classList.contains('is-minimized')?'□':'—'; minimizar.title=prompt.classList.contains('is-minimized')?'Restaurar':'Minimizar';
      requestAnimationFrame(()=>{const r=prompt.getBoundingClientRect(),p=fijar(r.left,r.top);prompt.style.left=p.left+'px';prompt.style.top=p.top+'px'});
    });

    resizer.addEventListener('pointerdown',e=>{
      e.preventDefault();e.stopPropagation();convertirPosicion();
      const r=prompt.getBoundingClientRect(), sx=e.clientX,sy=e.clientY,sw=r.width,sh=r.height;
      resizer.setPointerCapture(e.pointerId);
      const mover=ev=>{prompt.style.width=Math.max(360,Math.min(sw+ev.clientX-sx,window.innerWidth-r.left-8))+'px';prompt.style.height=Math.max(82,Math.min(sh+ev.clientY-sy,window.innerHeight-r.top-8))+'px'};
      const fin=ev=>{try{resizer.releasePointerCapture(ev.pointerId)}catch{};resizer.removeEventListener('pointermove',mover);resizer.removeEventListener('pointerup',fin);resizer.removeEventListener('pointercancel',fin)};
      resizer.addEventListener('pointermove',mover);resizer.addEventListener('pointerup',fin);resizer.addEventListener('pointercancel',fin);
    });

    window.addEventListener('resize',()=>{if(!prompt.style.top)return;const r=prompt.getBoundingClientRect(),p=fijar(r.left,r.top);prompt.style.left=p.left+'px';prompt.style.top=p.top+'px'});

    const enviar=async()=>{
      const texto=input.value.trim(); if(!texto||enviando)return; enviando=true;send.disabled=true;mic.disabled=true;status.textContent='Ollama está generando el nuevo contenido del escenario…';
      try{
        const respuesta=await fetch('ollama.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mensaje:texto})});
        if(!respuesta.ok)throw new Error(`HTTP ${respuesta.status}`); const datos=await respuesta.json(); const contenido=datos.respuesta??'No he podido responder.';
        escenario.innerHTML='<article class="ju-ai-result">'+markdown(contenido)+'</article>';
        if(speakToggle.checked && 'speechSynthesis' in window){
          speechSynthesis.cancel();
          const voz=new SpeechSynthesisUtterance(String(contenido).replace(/```[\s\S]*?```/g,' ').replace(/\|/g,' ').replace(/[#*_>`~-]/g,' '));
          voz.lang='es-ES'; speechSynthesis.speak(voz);
        }
        status.textContent='Escenario actualizado.';input.value='';autoResize();setTimeout(()=>{if(status.textContent==='Escenario actualizado.')status.textContent=''},2200);
      }catch(error){console.error(error);status.textContent='No se ha podido conectar con Ollama.'}
      finally{enviando=false;send.disabled=false;mic.disabled=false;input.focus()}
    };
    send.addEventListener('click',enviar);input.addEventListener('input',autoResize);input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();enviar()}});
    const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SpeechRecognition){mic.disabled=true;mic.title='Reconocimiento de voz no disponible en este navegador'}else mic.addEventListener('click',()=>{
      if(escuchando&&reconocimiento){reconocimiento.stop();return} reconocimiento=new SpeechRecognition();reconocimiento.lang='es-ES';reconocimiento.interimResults=false;reconocimiento.continuous=false;
      reconocimiento.onstart=()=>{escuchando=true;mic.classList.add('is-listening');status.textContent='Escuchando…'};
      reconocimiento.onresult=evento=>{const texto=evento.results[0][0].transcript;input.value=input.value.trim()?input.value.trim()+' '+texto:texto;autoResize();input.focus()};
      reconocimiento.onerror=evento=>{console.error('Error de reconocimiento:',evento.error);status.textContent='No se ha podido reconocer la voz.'};
      reconocimiento.onend=()=>{escuchando=false;mic.classList.remove('is-listening');if(status.textContent==='Escuchando…')status.textContent=''};reconocimiento.start();
    });
    autoResize();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciarPromptIA);else iniciarPromptIA();
})();

```
**demo-ui.js**
```js
/**
 * andrei | iu · demostraciones
 * Namespace técnico: andrei.iu
 */
window.andrei = window.andrei || {};
window.andrei.iu = window.andrei.iu || {};

(() => {
  "use strict";

  class ToastDemo {
    constructor(selectorPila = "#toastStack") {
      this.pila = document.querySelector(selectorPila);
      this.iconos = {
        success: "✓",
        info: "i",
        warning: "!",
        danger: "×"
      };
    }

    mostrar(tipo = "info", titulo = "Información", texto = "Mensaje de ejemplo") {
      if (!this.pila) {
        return;
      }

      const toast = document.createElement("article");
      toast.className = `ju-toast is-${tipo}`;
      toast.innerHTML = `
        <div class="ju-toast-icon">${this.iconos[tipo] || "i"}</div>
        <div>
          <p class="ju-toast-title">${titulo}</p>
          <p class="ju-toast-text">${texto}</p>
        </div>
        <button class="ju-toast-close" type="button" aria-label="Cerrar">×</button>
      `;

      const cerrar = () => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 240);
      };

      toast.querySelector(".ju-toast-close").addEventListener("click", cerrar);
      this.pila.appendChild(toast);
      setTimeout(cerrar, 5000);
    }
  }

  class DemoIU {
    constructor() {
      this.toast = new ToastDemo();
      this.textos = {
        success: ["Guardado correctamente", "La operación se ha completado."],
        info: ["Información", "Este es un mensaje informativo."],
        warning: ["Revisión necesaria", "Conviene revisar los datos antes de continuar."],
        danger: ["Operación fallida", "No se ha podido completar la operación."]
      };
    }

    iniciar() {
      document.addEventListener("click", (evento) => {
        const boton = evento.target.closest("[data-toast]");

        if (!boton) {
          return;
        }

        const tipo = boton.dataset.toast;
        this.toast.mostrar(tipo, ...this.textos[tipo]);
      });

      document.getElementById("formDemo")?.addEventListener("submit", (evento) => {
        evento.preventDefault();
        this.toast.mostrar(
          "success",
          "Formulario guardado",
          "El evento submit se ha capturado correctamente."
        );
      });
    }
  }

  window.jocarsa.iu.ToastDemo = ToastDemo;
  window.jocarsa.iu.DemoIU = DemoIU;

  document.addEventListener("DOMContentLoaded", () => {
    window.jocarsa.iu.demo = new DemoIU();
    window.jocarsa.iu.demo.iniciar();
  });
})();
```
##### templates
**article.html**
```html
<article draggable="true">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</article>

```
**celda.html**
```html
<td>
</td>

```
**fila.html**
```html
<tr>
</tr>

```
**formulario-ui.html**
```html
<article class="ju-card">
 <h2>
  {{titulo}}
 </h2>
 <form class="ju-form-grid">
  {{campos}}
  <div class="ju-form-full ju-button-row">
   <button class="ju-btn" type="submit">
    Guardar
   </button>
   <button class="ju-btn secondary" type="reset">
    Limpiar
   </button>
  </div>
 </form>
</article>

```
**formulario.html**
```html
<form class="formulario-dinamico">
 <div class="campos">
 </div>
 <div class="acciones">
  <button type="submit">
   Guardar
  </button>
  <button type="reset">
   Limpiar
  </button>
 </div>
</form>

```
**nav.html**
```html
<a href="#">
 <span class="ficha">
 </span>
 <span class="etiqueta">
 </span>
</a>

```
**toast.html**
```html
<article class="ju-toast is-{{tipo}}" role="status">
 <div class="ju-toast-icon">
  {{icono}}
 </div>
 <div>
  <p class="ju-toast-title">
   {{titulo}}
  </p>
  <p class="ju-toast-text">
   {{texto}}
  </p>
 </div>
 <button aria-label="Cerrar" class="ju-toast-close" type="button">
  ×
 </button>
</article>

```
### 003-Voz y Habla
**000-Introducción.md**
```markdown
# Voz y Habla
* Web Speech API

  * SpeechSynthesis

    * Texto a voz
    * `SpeechSynthesisUtterance`
    * `speechSynthesis.speak()`
    * Selección de voz
    * Idioma
    * Velocidad
    * Tono
    * Volumen
  * SpeechRecognition

    * Voz a texto
    * `SpeechRecognition`
    * `recognition.start()`
    * `recognition.stop()`
    * Idioma
    * Reconocimiento continuo
    * Resultados provisionales
    * Evento `result`
    * Evento `error`


```
**001-que el ordenador hable.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Texto a voz | Voz y habla</title>
    <style>
      :root {
        color-scheme: light;
        --naranja: #f97316;
        --azul: #1d4ed8;
        --azul-claro: #eff6ff;
        --blanco: #ffffff;
        --negro: #111827;
        --gris: #4b5563;
      }

      * {
        box-sizing: border-box;
      }

      body {
        min-height: 100vh;
        margin: 0;
        padding: 32px 18px;
        display: grid;
        place-items: center;
        background: var(--azul-claro);
        color: var(--negro);
        font-family: Arial, sans-serif;
      }

      main {
        width: min(100%, 680px);
        padding: clamp(22px, 5vw, 40px);
        border-top: 6px solid var(--naranja);
        border-radius: 16px;
        background: var(--blanco);
        box-shadow: 0 18px 50px #1118271a;
      }

      h1 {
        margin: 0 0 8px;
        color: var(--azul);
        font-size: clamp(1.7rem, 5vw, 2.2rem);
      }

      p {
        color: var(--gris);
        line-height: 1.6;
      }

      .campo {
        display: grid;
        gap: 8px;
        margin-top: 20px;
      }

      label,
      output {
        font-weight: 700;
      }

      textarea,
      select {
        width: 100%;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        background: var(--blanco);
        color: var(--negro);
        font: inherit;
      }

      textarea {
        min-height: 130px;
        padding: 12px;
        resize: vertical;
      }

      select {
        min-height: 42px;
        padding: 8px 10px;
      }

      textarea:focus,
      select:focus,
      input:focus-visible,
      button:focus-visible {
        outline: 3px solid #1d4ed855;
        outline-offset: 2px;
      }

      .contador {
        justify-self: end;
        color: var(--gris);
        font-size: .875rem;
      }

      .ajustes {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }

      .ajustes .campo {
        min-width: 0;
      }

      input[type="range"] {
        width: 100%;
        accent-color: var(--azul);
      }

      output {
        color: var(--azul);
      }

      .acciones {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 24px;
      }

      button {
        min-height: 44px;
        padding: 10px 16px;
        border: 0;
        border-radius: 8px;
        background: var(--naranja);
        color: var(--blanco);
        cursor: pointer;
        font: inherit;
        font-weight: 700;
      }

      button.secundario {
        background: var(--azul);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: .5;
      }

      #estado {
        min-height: 1.5em;
        margin: 18px 0 0;
        color: var(--negro);
        font-weight: 700;
      }

      @media (max-width: 520px) {
        body {
          padding: 16px 12px;
        }

        .ajustes {
          grid-template-columns: 1fr;
          gap: 0;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Texto a voz</h1>
      <p>Escribe un texto, elige una voz y escucha cómo lo lee el navegador.</p>

      <div class="campo">
        <label for="texto">Texto para leer</label>
        <textarea id="texto" maxlength="1000">Hola, soy el navegador. Escribe aquí el texto que quieras escuchar.</textarea>
        <span class="contador" id="contador">0 / 1000</span>
      </div>

      <div class="campo">
        <label for="voz">Voz disponible</label>
        <select id="voz">
          <option value="">Voz predeterminada del navegador</option>
        </select>
      </div>

      <div class="ajustes">
        <div class="campo">
          <label for="velocidad">Velocidad <output id="valor-velocidad">1</output></label>
          <input id="velocidad" type="range" min="0.5" max="2" step="0.1" value="1">
        </div>
        <div class="campo">
          <label for="tono">Tono <output id="valor-tono">1</output></label>
          <input id="tono" type="range" min="0" max="2" step="0.1" value="1">
        </div>
        <div class="campo">
          <label for="volumen">Volumen <output id="valor-volumen">1</output></label>
          <input id="volumen" type="range" min="0" max="1" step="0.1" value="1">
        </div>
      </div>

      <div class="acciones">
        <button id="hablar" type="button">▶ Hablar</button>
        <button id="pausar" class="secundario" type="button" disabled>Pausar</button>
        <button id="detener" class="secundario" type="button" disabled>Detener</button>
      </div>
      <p id="estado" role="status" aria-live="polite">Preparando voces disponibles…</p>
    </main>

    <script>
      const sintetizador = window.speechSynthesis;
      const texto = document.querySelector("#texto");
      const selectorVoz = document.querySelector("#voz");
      const botonHablar = document.querySelector("#hablar");
      const botonPausar = document.querySelector("#pausar");
      const botonDetener = document.querySelector("#detener");
      const estado = document.querySelector("#estado");
      const controles = [
        ["velocidad", "valor-velocidad"],
        ["tono", "valor-tono"],
        ["volumen", "valor-volumen"]
      ];
      let voces = [];
      let mensajeActual = null;

      function actualizarContador() {
        document.querySelector("#contador").textContent =
          `${texto.value.length} / ${texto.maxLength}`;
      }

      function cargarVoces() {
        voces = sintetizador.getVoices();
        const vozSeleccionada = selectorVoz.value;

        selectorVoz.replaceChildren(
          new Option("Voz predeterminada del navegador", "")
        );

        voces.forEach((voz, indice) => {
          const opcion = new Option(
            `${voz.name} (${voz.lang})${voz.default ? " — predeterminada" : ""}`,
            String(indice)
          );
          selectorVoz.add(opcion);
        });

        if (voces.some((voz, indice) => String(indice) === vozSeleccionada)) {
          selectorVoz.value = vozSeleccionada;
        }

        estado.textContent = voces.length
          ? "Listo. Las voces disponibles dependen del navegador y del sistema."
          : "No se encontraron voces instaladas; se usará la voz predeterminada si está disponible.";
      }

      function actualizarBotones() {
        const hablando = mensajeActual !== null;
        botonPausar.disabled = !hablando;
        botonPausar.textContent = sintetizador.paused ? "Reanudar" : "Pausar";
        botonDetener.disabled = !hablando;
      }

      function hablar() {
        const contenido = texto.value.trim();

        if (!contenido) {
          estado.textContent = "Escribe un texto antes de iniciar la lectura.";
          texto.focus();
          return;
        }

        sintetizador.cancel();

        const mensaje = new SpeechSynthesisUtterance(contenido);
        mensaje.lang = "es-ES";
        mensaje.rate = Number(document.querySelector("#velocidad").value);
        mensaje.pitch = Number(document.querySelector("#tono").value);
        mensaje.volume = Number(document.querySelector("#volumen").value);

        const vozElegida = selectorVoz.value === ""
          ? null
          : voces[Number(selectorVoz.value)];
        if (vozElegida) {
          mensaje.voice = vozElegida;
          mensaje.lang = vozElegida.lang;
        }

        mensajeActual = mensaje;
        mensaje.onstart = () => {
          if (mensajeActual === mensaje) {
            estado.textContent = "Leyendo el texto…";
            actualizarBotones();
          }
        };
        mensaje.onend = () => {
          if (mensajeActual === mensaje) {
            mensajeActual = null;
            estado.textContent = "Lectura finalizada.";
            actualizarBotones();
          }
        };
        mensaje.onerror = (evento) => {
          if (mensajeActual === mensaje) {
            mensajeActual = null;
            estado.textContent = `No se pudo completar la lectura (${evento.error}).`;
            actualizarBotones();
          }
        };

        estado.textContent = "Iniciando lectura…";
        actualizarBotones();
        sintetizador.speak(mensaje);
      }

      if (!sintetizador || typeof SpeechSynthesisUtterance === "undefined") {
        estado.textContent = "Este navegador no admite la síntesis de voz.";
        botonHablar.disabled = true;
        selectorVoz.disabled = true;
        controles.forEach(([id]) => {
          document.querySelector(`#${id}`).disabled = true;
        });
      } else {
        sintetizador.addEventListener("voiceschanged", cargarVoces);
        cargarVoces();

        botonHablar.addEventListener("click", hablar);
        botonPausar.addEventListener("click", () => {
          if (sintetizador.paused) {
            sintetizador.resume();
            estado.textContent = "Lectura reanudada.";
          } else {
            sintetizador.pause();
            estado.textContent = "Lectura en pausa.";
          }
          actualizarBotones();
        });
        botonDetener.addEventListener("click", () => {
          mensajeActual = null;
          sintetizador.cancel();
          estado.textContent = "Lectura detenida.";
          actualizarBotones();
        });
      }

      texto.addEventListener("input", actualizarContador);
      actualizarContador();

      controles.forEach(([id, idSalida]) => {
        const control = document.querySelector(`#${id}`);
        const salida = document.querySelector(`#${idSalida}`);
        control.addEventListener("input", () => {
          salida.value = control.value;
          salida.textContent = control.value;
        });
      });
    </script>
  </body>
</html>

```
**002-mas parametros.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Parámetros de voz | Voz y habla</title>
    <style>
      :root{color-scheme:light;--naranja:#f97316;--azul:#1d4ed8;--azul-claro:#eff6ff;--blanco:#fff;--negro:#111827;--gris:#4b5563}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0;padding:32px 18px;display:grid;place-items:center;background:var(--azul-claro);color:var(--negro);font-family:Arial,sans-serif}
      main{width:min(100%,680px);padding:clamp(22px,5vw,40px);border-top:6px solid var(--naranja);border-radius:16px;background:var(--blanco);box-shadow:0 18px 50px #1118271a}
      h1{margin:0 0 8px;color:var(--azul);font-size:clamp(1.7rem,5vw,2.2rem)}
      p{color:var(--gris);line-height:1.6}
      .campo{display:grid;gap:8px;margin-top:20px}
      label,output{font-weight:700}
      textarea,select{width:100%;border:1px solid #cbd5e1;border-radius:8px;background:var(--blanco);color:var(--negro);font:inherit}
      textarea{min-height:130px;padding:12px;resize:vertical}
      select{min-height:42px;padding:8px 10px}
      textarea:focus,select:focus,input:focus-visible,button:focus-visible{outline:3px solid #1d4ed855;outline-offset:2px}
      .ajustes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
      .ajustes .campo{min-width:0}
      input[type=range]{width:100%;accent-color:var(--azul)}
      output{color:var(--azul)}
      .acciones{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
      button{min-height:44px;padding:10px 16px;border:0;border-radius:8px;background:var(--naranja);color:var(--blanco);cursor:pointer;font:inherit;font-weight:700}
      button.secundario{background:var(--azul)}
      button:disabled{cursor:not-allowed;opacity:.5}
      #estado{min-height:1.5em;margin:18px 0 0;color:var(--negro);font-weight:700}
      @media(max-width:520px){body{padding:16px 12px}.ajustes{grid-template-columns:1fr;gap:0}}
    </style>
  </head>
  <body>
    <main>
      <h1>Configura la voz</h1>
      <p>Prueba cómo cambian la lectura la voz seleccionada, la velocidad, el tono y el volumen.</p>
      <div class="campo">
        <label for="texto">Texto para leer</label>
        <textarea id="texto" maxlength="1000">Hola, soy el navegador Chrome. Puedes cambiar los parámetros de mi voz.</textarea>
      </div>
      <div class="campo">
        <label for="voz">Voz disponible</label>
        <select id="voz"><option value="">Voz predeterminada del navegador</option></select>
      </div>
      <div class="ajustes">
        <div class="campo"><label for="velocidad">Velocidad <output id="valor-velocidad">1</output></label><input id="velocidad" type="range" min="0.5" max="2" step="0.1" value="1"></div>
        <div class="campo"><label for="tono">Tono <output id="valor-tono">1</output></label><input id="tono" type="range" min="0" max="2" step="0.1" value="1"></div>
        <div class="campo"><label for="volumen">Volumen <output id="valor-volumen">1</output></label><input id="volumen" type="range" min="0" max="1" step="0.1" value="1"></div>
      </div>
      <div class="acciones">
        <button id="hablar" type="button">▶ Reproducir</button>
        <button id="detener" class="secundario" type="button" disabled>Detener</button>
      </div>
      <p id="estado" role="status" aria-live="polite">Preparando voces disponibles…</p>
    </main>
    <script>
      const sintetizador = window.speechSynthesis;
      const texto = document.querySelector("#texto");
      const selectorVoz = document.querySelector("#voz");
      const botonHablar = document.querySelector("#hablar");
      const botonDetener = document.querySelector("#detener");
      const estado = document.querySelector("#estado");
      const controles = [["velocidad","valor-velocidad"],["tono","valor-tono"],["volumen","valor-volumen"]];
      let voces = [];
      let mensajeActual = null;

      function cargarVoces(){
        const seleccion = selectorVoz.value;
        voces = sintetizador.getVoices();
        selectorVoz.replaceChildren(new Option("Voz predeterminada del navegador",""));
        voces.forEach((voz,indice)=>selectorVoz.add(new Option(`${voz.name} (${voz.lang})${voz.default?" — predeterminada":""}`,String(indice))));
        if(voces.some((voz,indice)=>String(indice)===seleccion)) selectorVoz.value=seleccion;
        estado.textContent=voces.length?"Voces listas. La lista depende del navegador y del sistema.":"No hay voces instaladas; se usará la predeterminada si está disponible.";
      }

      function actualizarControles(){
        controles.forEach(([id,salidaId])=>{
          const control=document.querySelector(`#${id}`);
          const salida=document.querySelector(`#${salidaId}`);
          salida.value=control.value;
          salida.textContent=control.value;
        });
      }

      function reproducir(){
        const contenido=texto.value.trim();
        if(!contenido){estado.textContent="Escribe un texto antes de reproducirlo.";texto.focus();return;}
        sintetizador.cancel();
        const mensaje=new SpeechSynthesisUtterance(contenido);
        mensaje.lang="es-ES";
        mensaje.rate=Number(document.querySelector("#velocidad").value);
        mensaje.pitch=Number(document.querySelector("#tono").value);
        mensaje.volume=Number(document.querySelector("#volumen").value);
        const voz=selectorVoz.value===""?null:voces[Number(selectorVoz.value)];
        if(voz){mensaje.voice=voz;mensaje.lang=voz.lang;}
        mensajeActual=mensaje;
        mensaje.onstart=()=>{if(mensajeActual===mensaje)estado.textContent="Reproduciendo…";};
        mensaje.onend=()=>{if(mensajeActual===mensaje){mensajeActual=null;botonDetener.disabled=true;estado.textContent="Lectura finalizada."; }};
        mensaje.onerror=(evento)=>{if(mensajeActual===mensaje){mensajeActual=null;botonDetener.disabled=true;estado.textContent=`No se pudo completar la lectura (${evento.error}).`;}};
        botonDetener.disabled=false;
        estado.textContent="Iniciando lectura…";
        sintetizador.speak(mensaje);
      }

      if(!sintetizador||typeof SpeechSynthesisUtterance==="undefined"){
        estado.textContent="Este navegador no admite la síntesis de voz.";
        botonHablar.disabled=true;selectorVoz.disabled=true;
        controles.forEach(([id])=>document.querySelector(`#${id}`).disabled=true);
      }else{
        sintetizador.addEventListener("voiceschanged",cargarVoces);
        cargarVoces();
        botonHablar.addEventListener("click",reproducir);
        botonDetener.addEventListener("click",()=>{
          mensajeActual=null;sintetizador.cancel();botonDetener.disabled=true;estado.textContent="Lectura detenida.";
        });
      }
      controles.forEach(([id])=>document.querySelector(`#${id}`).addEventListener("input",actualizarControles));
    </script>
  </body>
</html>

```
**003-boton.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Botón de voz | Voz y habla</title>
    <style>
      :root{color-scheme:light;--naranja:#f97316;--azul:#1d4ed8;--azul-claro:#eff6ff;--blanco:#fff;--negro:#111827;--gris:#4b5563}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0;padding:32px 18px;display:grid;place-items:center;background:var(--azul-claro);color:var(--negro);font-family:Arial,sans-serif}
      main{width:min(100%,680px);padding:clamp(22px,5vw,40px);border-top:6px solid var(--naranja);border-radius:16px;background:var(--blanco);box-shadow:0 18px 50px #1118271a}
      h1{margin:0 0 8px;color:var(--azul);font-size:clamp(1.7rem,5vw,2.2rem)}
      p{color:var(--gris);line-height:1.6}
      label{font-weight:700}
      .campo{display:grid;gap:8px;margin-top:20px}
      textarea{width:100%;min-height:130px;padding:12px;border:1px solid #cbd5e1;border-radius:8px;background:var(--blanco);color:var(--negro);font:inherit;resize:vertical}
      textarea:focus,button:focus-visible{outline:3px solid #1d4ed855;outline-offset:2px}
      .acciones{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
      button{min-height:44px;padding:10px 16px;border:0;border-radius:8px;background:var(--naranja);color:var(--blanco);cursor:pointer;font:inherit;font-weight:700}
      button.secundario{background:var(--azul)}
      button:disabled{cursor:not-allowed;opacity:.5}
      #estado{min-height:1.5em;margin:18px 0 0;color:var(--negro);font-weight:700}
    </style>
  </head>
  <body>
    <main>
      <h1>Habla con el navegador</h1>
      <p>Esta práctica convierte en voz el texto que escribas cuando pulses el botón.</p>
      <div class="campo">
        <label for="texto">Texto para leer</label>
        <textarea id="texto" maxlength="1000">Hola, soy el navegador Chrome. Pulsa el botón para escucharme.</textarea>
      </div>
      <div class="acciones">
        <button id="hablar" type="button">▶ Hablar</button>
        <button id="detener" class="secundario" type="button" disabled>Detener</button>
      </div>
      <p id="estado" role="status" aria-live="polite">Listo para leer el texto.</p>
    </main>
    <script>
      const sintetizador=window.speechSynthesis;
      const texto=document.querySelector("#texto");
      const hablar=document.querySelector("#hablar");
      const detener=document.querySelector("#detener");
      const estado=document.querySelector("#estado");
      let mensajeActual=null;

      if(!sintetizador||typeof SpeechSynthesisUtterance==="undefined"){
        estado.textContent="Este navegador no admite la síntesis de voz.";
        hablar.disabled=true;
      }else{
        hablar.addEventListener("click",()=>{
          const contenido=texto.value.trim();
          if(!contenido){estado.textContent="Escribe un texto antes de iniciar la lectura.";texto.focus();return;}
          sintetizador.cancel();
          const mensaje=new SpeechSynthesisUtterance(contenido);
          mensaje.lang="es-ES";
          mensajeActual=mensaje;
          mensaje.onstart=()=>{if(mensajeActual===mensaje)estado.textContent="Leyendo…";};
          mensaje.onend=()=>{if(mensajeActual===mensaje){mensajeActual=null;detener.disabled=true;estado.textContent="Lectura finalizada."; }};
          mensaje.onerror=(evento)=>{if(mensajeActual===mensaje){mensajeActual=null;detener.disabled=true;estado.textContent=`No se pudo completar la lectura (${evento.error}).`;}};
          detener.disabled=false;
          estado.textContent="Iniciando lectura…";
          sintetizador.speak(mensaje);
        });
        detener.addEventListener("click",()=>{
          mensajeActual=null;sintetizador.cancel();detener.disabled=true;estado.textContent="Lectura detenida.";
        });
      }
    </script>
  </body>
</html>

```
**004-reconocimientos de voz.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Reconocimiento de voz | Voz y habla</title>
    <style>
      :root{color-scheme:light;--naranja:#f97316;--azul:#1d4ed8;--azul-claro:#eff6ff;--blanco:#fff;--negro:#111827;--gris:#4b5563}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0;padding:32px 18px;display:grid;place-items:center;background:var(--azul-claro);color:var(--negro);font-family:Arial,sans-serif}
      main{width:min(100%,680px);padding:clamp(22px,5vw,40px);border-top:6px solid var(--naranja);border-radius:16px;background:var(--blanco);box-shadow:0 18px 50px #1118271a}
      h1{margin:0 0 8px;color:var(--azul);font-size:clamp(1.7rem,5vw,2.2rem)}
      p{color:var(--gris);line-height:1.6}
      .acciones{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
      button{min-height:44px;padding:10px 16px;border:0;border-radius:8px;background:var(--naranja);color:var(--blanco);cursor:pointer;font:inherit;font-weight:700}
      button.secundario{background:var(--azul)}
      button:disabled{cursor:not-allowed;opacity:.5}
      button:focus-visible{outline:3px solid #1d4ed855;outline-offset:2px}
      .resultado{min-height:130px;margin-top:22px;padding:16px;border:1px solid #cbd5e1;border-radius:10px;background:var(--azul-claro);line-height:1.6;overflow-wrap:anywhere}
      #interino{color:var(--gris)}
      #estado{min-height:1.5em;margin:18px 0 0;color:var(--negro);font-weight:700}
    </style>
  </head>
  <body>
    <main>
      <h1>Reconocimiento de voz</h1>
      <p>Pulsa «Empezar a escuchar» y concede permiso al micrófono para transcribir tu voz en español.</p>
      <div class="acciones">
        <button id="empezar" type="button">🎤 Empezar a escuchar</button>
        <button id="detener" class="secundario" type="button" disabled>Detener</button>
      </div>
      <div class="resultado" aria-label="Transcripción">
        <span id="final"></span><span id="interino"></span>
      </div>
      <p id="estado" role="status" aria-live="polite">Listo para escuchar.</p>
    </main>
    <script>
      const Reconocimiento=window.SpeechRecognition||window.webkitSpeechRecognition;
      const empezar=document.querySelector("#empezar");
      const detener=document.querySelector("#detener");
      const final=document.querySelector("#final");
      const interino=document.querySelector("#interino");
      const estado=document.querySelector("#estado");
      let reconocimiento=null;

      if(!Reconocimiento){
        estado.textContent="Este navegador no admite reconocimiento de voz. Prueba con Chrome o Edge.";
        empezar.disabled=true;
      }else{
        empezar.addEventListener("click",()=>{
          if(reconocimiento)return;
          reconocimiento=new Reconocimiento();
          reconocimiento.lang="es-ES";
          reconocimiento.continuous=true;
          reconocimiento.interimResults=true;
          reconocimiento.onstart=()=>{
            estado.textContent="Escuchando…";
            empezar.disabled=true;detener.disabled=false;
          };
          reconocimiento.onresult=(evento)=>{
            let textoInterino="";
            for(let indice=evento.resultIndex;indice<evento.results.length;indice++){
              const resultado=evento.results[indice];
              if(resultado.isFinal)final.textContent+=`${resultado[0].transcript} `;
              else textoInterino+=resultado[0].transcript;
            }
            interino.textContent=textoInterino;
          };
          reconocimiento.onerror=(evento)=>{
            estado.textContent=evento.error==="not-allowed"
              ?"No hay permiso para usar el micrófono."
              :`Error de reconocimiento: ${evento.error}.`;
          };
          reconocimiento.onend=()=>{
            reconocimiento=null;interino.textContent="";
            empezar.disabled=false;detener.disabled=true;
            if(estado.textContent==="Escuchando…")estado.textContent="Escucha finalizada.";
          };
          try{reconocimiento.start();}
          catch(error){reconocimiento=null;estado.textContent=`No se pudo iniciar el reconocimiento: ${error.message}`;}
        });
        detener.addEventListener("click",()=>{
          if(reconocimiento){estado.textContent="Deteniendo escucha…";reconocimiento.stop();}
        });
      }
    </script>
  </body>
</html>

```
**005-repetidor.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Escucha y repite | Voz y habla</title>
    <style>
      :root{color-scheme:light;--naranja:#f97316;--azul:#1d4ed8;--azul-claro:#eff6ff;--blanco:#fff;--negro:#111827;--gris:#4b5563}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0;padding:32px 18px;display:grid;place-items:center;background:var(--azul-claro);color:var(--negro);font-family:Arial,sans-serif}
      main{width:min(100%,680px);padding:clamp(22px,5vw,40px);border-top:6px solid var(--naranja);border-radius:16px;background:var(--blanco);box-shadow:0 18px 50px #1118271a}
      h1{margin:0 0 8px;color:var(--azul);font-size:clamp(1.7rem,5vw,2.2rem)}
      p{color:var(--gris);line-height:1.6}
      .acciones{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
      button{min-height:44px;padding:10px 16px;border:0;border-radius:8px;background:var(--naranja);color:var(--blanco);cursor:pointer;font:inherit;font-weight:700}
      button.secundario{background:var(--azul)}
      button:disabled{cursor:not-allowed;opacity:.5}
      button:focus-visible{outline:3px solid #1d4ed855;outline-offset:2px}
      .resultado{min-height:130px;margin-top:22px;padding:16px;border:1px solid #cbd5e1;border-radius:10px;background:var(--azul-claro);line-height:1.6;overflow-wrap:anywhere}
      #estado{min-height:1.5em;margin:18px 0 0;color:var(--negro);font-weight:700}
    </style>
  </head>
  <body>
    <main>
      <h1>Escucha y repite</h1>
      <p>Di una frase al micrófono. El navegador la transcribirá y la leerá en voz alta.</p>
      <div class="acciones">
        <button id="empezar" type="button">🎤 Hablar</button>
        <button id="detener" class="secundario" type="button" disabled>Detener escucha</button>
        <button id="limpiar" class="secundario" type="button">Limpiar</button>
      </div>
      <div class="resultado" id="resultado" aria-label="Texto reconocido">Aquí aparecerá lo que digas.</div>
      <p id="estado" role="status" aria-live="polite">Listo para escuchar.</p>
    </main>
    <script>
      const Reconocimiento=window.SpeechRecognition||window.webkitSpeechRecognition;
      const sintetizador=window.speechSynthesis;
      const empezar=document.querySelector("#empezar");
      const detener=document.querySelector("#detener");
      const limpiar=document.querySelector("#limpiar");
      const resultado=document.querySelector("#resultado");
      const estado=document.querySelector("#estado");
      let reconocimiento=null;

      if(!Reconocimiento){
        estado.textContent="Este navegador no admite reconocimiento de voz. Prueba con Chrome o Edge.";
        empezar.disabled=true;
      }else{
        empezar.addEventListener("click",()=>{
          if(reconocimiento)return;
          reconocimiento=new Reconocimiento();
          reconocimiento.lang="es-ES";
          reconocimiento.continuous=false;
          reconocimiento.interimResults=false;
          reconocimiento.onstart=()=>{
            estado.textContent="Escuchando…";
            empezar.disabled=true;detener.disabled=false;
          };
          reconocimiento.onresult=(evento)=>{
            const texto=evento.results[0][0].transcript.trim();
            resultado.textContent=texto;
            estado.textContent="Repitiendo lo que has dicho…";
            if(sintetizador&&typeof SpeechSynthesisUtterance!=="undefined"){
              sintetizador.cancel();
              const mensaje=new SpeechSynthesisUtterance(texto);
              mensaje.lang="es-ES";
              mensaje.onend=()=>{estado.textContent="Repetición finalizada.";};
              mensaje.onerror=(error)=>{estado.textContent=`No se pudo reproducir la voz (${error.error}).`;};
              sintetizador.speak(mensaje);
            }else{
              estado.textContent="Texto reconocido. Este navegador no admite la síntesis de voz.";
            }
          };
          reconocimiento.onerror=(evento)=>{
            estado.textContent=evento.error==="not-allowed"
              ?"No hay permiso para usar el micrófono."
              :`Error de reconocimiento: ${evento.error}.`;
          };
          reconocimiento.onend=()=>{
            reconocimiento=null;empezar.disabled=false;detener.disabled=true;
            if(estado.textContent==="Escuchando…")estado.textContent="No se detectó ninguna frase. Inténtalo otra vez.";
          };
          try{reconocimiento.start();}
          catch(error){reconocimiento=null;empezar.disabled=false;detener.disabled=true;estado.textContent=`No se pudo iniciar el reconocimiento: ${error.message}`;}
        });
        detener.addEventListener("click",()=>{
          if(reconocimiento){estado.textContent="Deteniendo escucha…";reconocimiento.stop();}
        });
      }

      limpiar.addEventListener("click",()=>{
        if(reconocimiento)reconocimiento.stop();
        if(sintetizador)sintetizador.cancel();
        resultado.textContent="Aquí aparecerá lo que digas.";
        estado.textContent="Contenido limpiado.";
      });
    </script>
  </body>
</html>

```
**006-chat.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Chat de voz | Voz y habla</title>
    <style>
      :root{color-scheme:light;--naranja:#f97316;--azul:#1d4ed8;--azul-claro:#eff6ff;--blanco:#fff;--negro:#111827;--gris:#4b5563}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0;padding:32px 18px;display:grid;place-items:center;background:var(--azul-claro);color:var(--negro);font-family:Arial,sans-serif}
      main{width:min(100%,760px);padding:clamp(22px,5vw,40px);border-top:6px solid var(--naranja);border-radius:16px;background:var(--blanco);box-shadow:0 18px 50px #1118271a}
      h1{margin:0 0 8px;color:var(--azul);font-size:clamp(1.7rem,5vw,2.2rem)}
      p{color:var(--gris);line-height:1.6}
      #conversacion{height:min(48vh,380px);min-height:220px;display:flex;flex-direction:column;gap:12px;overflow-y:auto;margin-top:22px;padding:16px;border:1px solid #cbd5e1;border-radius:10px;background:var(--azul-claro)}
      .bocadillo{max-width:80%;padding:11px 15px;border-radius:16px;background:var(--blanco);line-height:1.5;overflow-wrap:anywhere;box-shadow:0 2px 8px #11182712}
      .yo{align-self:flex-end;border-bottom-right-radius:4px;background:var(--azul);color:var(--blanco)}
      .maquina{align-self:flex-start;border-bottom-left-radius:4px;color:var(--negro)}
      .acciones{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
      button{min-height:44px;padding:10px 16px;border:0;border-radius:8px;background:var(--naranja);color:var(--blanco);cursor:pointer;font:inherit;font-weight:700}
      button.secundario{background:var(--azul)}
      button:disabled{cursor:not-allowed;opacity:.5}
      button:focus-visible{outline:3px solid #1d4ed855;outline-offset:2px}
      #estado{min-height:1.5em;margin:16px 0 0;color:var(--negro);font-weight:700}
    </style>
  </head>
  <body>
    <main>
      <h1>Chat de voz</h1>
      <p>Habla con el navegador: esta demo transcribe tu frase y la repite en voz alta.</p>
      <section id="conversacion" aria-label="Conversación" aria-live="polite">
        <div class="bocadillo maquina">Hola. Pulsa «Hablar» y dime algo.</div>
      </section>
      <div class="acciones">
        <button id="hablar" type="button">🎤 Hablar</button>
        <button id="detener" class="secundario" type="button" disabled>Detener</button>
        <button id="limpiar" class="secundario" type="button">Limpiar conversación</button>
      </div>
      <p id="estado" role="status" aria-live="polite">Listo para conversar.</p>
    </main>
    <script>
      const Reconocimiento=window.SpeechRecognition||window.webkitSpeechRecognition;
      const sintetizador=window.speechSynthesis;
      const conversacion=document.querySelector("#conversacion");
      const botonHablar=document.querySelector("#hablar");
      const botonDetener=document.querySelector("#detener");
      const estado=document.querySelector("#estado");
      let reconocimiento=null;

      function agregarMensaje(texto,clase){
        const mensaje=document.createElement("div");
        mensaje.className=`bocadillo ${clase}`;
        mensaje.textContent=texto;
        conversacion.appendChild(mensaje);
        conversacion.scrollTop=conversacion.scrollHeight;
      }

      if(!Reconocimiento){
        estado.textContent="Este navegador no admite reconocimiento de voz. Prueba con Chrome o Edge.";
        botonHablar.disabled=true;
      }else{
        botonHablar.addEventListener("click",()=>{
          if(reconocimiento)return;
          reconocimiento=new Reconocimiento();
          reconocimiento.lang="es-ES";
          reconocimiento.continuous=false;
          reconocimiento.interimResults=false;
          reconocimiento.onstart=()=>{
            estado.textContent="Escuchando…";
            botonHablar.disabled=true;botonDetener.disabled=false;
          };
          reconocimiento.onresult=(evento)=>{
            const texto=evento.results[0][0].transcript.trim();
            agregarMensaje(texto,"yo");
            agregarMensaje(`Has dicho: ${texto}`,"maquina");
            if(sintetizador&&typeof SpeechSynthesisUtterance!=="undefined"){
              const respuesta=new SpeechSynthesisUtterance(`Has dicho: ${texto}`);
              respuesta.lang="es-ES";
              respuesta.onstart=()=>{estado.textContent="El navegador está respondiendo…";};
              respuesta.onend=()=>{estado.textContent="Listo para conversar.";};
              respuesta.onerror=(error)=>{estado.textContent=`La respuesta no pudo reproducirse (${error.error}).`;};
              sintetizador.cancel();
              sintetizador.speak(respuesta);
            }else{
              estado.textContent="Frase transcrita. Este navegador no admite síntesis de voz.";
            }
          };
          reconocimiento.onerror=(evento)=>{
            estado.textContent=evento.error==="not-allowed"
              ?"No hay permiso para usar el micrófono."
              :`Error de reconocimiento: ${evento.error}.`;
          };
          reconocimiento.onend=()=>{
            reconocimiento=null;botonHablar.disabled=false;botonDetener.disabled=true;
            if(estado.textContent==="Escuchando…")estado.textContent="No se detectó ninguna frase. Inténtalo de nuevo.";
          };
          try{reconocimiento.start();}
          catch(error){reconocimiento=null;botonHablar.disabled=false;botonDetener.disabled=true;estado.textContent=`No se pudo iniciar el reconocimiento: ${error.message}`;}
        });
        botonDetener.addEventListener("click",()=>{
          if(reconocimiento){estado.textContent="Deteniendo escucha…";reconocimiento.stop();}
        });
      }

      document.querySelector("#limpiar").addEventListener("click",()=>{
        if(reconocimiento)reconocimiento.stop();
        if(sintetizador)sintetizador.cancel();
        conversacion.replaceChildren();
        agregarMensaje("Conversación limpiada. Pulsa «Hablar» para empezar otra vez.","maquina");
        estado.textContent="Conversación limpiada.";
      });
    </script>
  </body>
</html>

```
**007-chatbot.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Asistente de voz | Voz y habla</title>
    <style>
      :root{color-scheme:light;--naranja:#f97316;--azul:#1d4ed8;--azul-claro:#eff6ff;--blanco:#fff;--negro:#111827;--gris:#4b5563}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0;padding:32px 18px;display:grid;place-items:center;background:var(--azul-claro);color:var(--negro);font-family:Arial,sans-serif}
      main{width:min(100%,760px);padding:clamp(22px,5vw,40px);border-top:6px solid var(--naranja);border-radius:16px;background:var(--blanco);box-shadow:0 18px 50px #1118271a}
      h1{margin:0 0 8px;color:var(--azul);font-size:clamp(1.7rem,5vw,2.2rem)}
      p{color:var(--gris);line-height:1.6}
      #chat{display:none;flex-direction:column;gap:12px;margin-top:22px}
      #chat.abierto{display:flex}
      #cabecera{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:var(--azul);color:var(--blanco);font-weight:700}
      #cerrar{width:36px;height:36px;border:0;border-radius:8px;background:var(--naranja);color:var(--blanco);cursor:pointer;font-size:22px}
      #conversacion{height:min(45vh,350px);min-height:200px;display:flex;flex-direction:column;gap:12px;overflow-y:auto;padding:16px;border:1px solid #cbd5e1;border-radius:10px;background:var(--azul-claro)}
      .bocadillo{max-width:80%;padding:11px 15px;border-radius:16px;background:var(--blanco);line-height:1.5;overflow-wrap:anywhere;box-shadow:0 2px 8px #11182712}
      .yo{align-self:flex-end;border-bottom-right-radius:4px;background:var(--azul);color:var(--blanco)}
      .maquina{align-self:flex-start;border-bottom-left-radius:4px;color:var(--negro)}
      .acciones{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
      button{min-height:44px;padding:10px 16px;border:0;border-radius:8px;background:var(--naranja);color:var(--blanco);cursor:pointer;font:inherit;font-weight:700}
      button.secundario{background:var(--azul)}
      button:disabled{cursor:not-allowed;opacity:.5}
      button:focus-visible,#cerrar:focus-visible{outline:3px solid #1d4ed855;outline-offset:2px}
      #estado{min-height:1.5em;margin:16px 0 0;color:var(--negro);font-weight:700}
      #microfono{position:fixed;right:26px;bottom:26px;width:62px;height:62px;padding:0;border:0;border-radius:50%;background:var(--naranja);color:var(--blanco);font-size:26px;box-shadow:0 8px 24px #11182730;transition:transform .2s,background .2s}
      #microfono:hover{transform:scale(1.06);background:var(--azul)}
      @media(max-width:520px){body{padding:18px 12px 100px}#microfono{right:18px;bottom:18px}}
    </style>
  </head>
  <body>
    <main>
      <h1>Asistente de voz</h1>
      <p>Abre el chat y habla. En esta práctica el asistente repite la frase reconocida; no utiliza un servicio de inteligencia artificial.</p>
      <section id="chat" aria-label="Chat de voz">
        <div id="cabecera">
          <span>Asistente de demostración</span>
          <button id="cerrar" type="button" aria-label="Cerrar chat">×</button>
        </div>
        <div id="conversacion" aria-live="polite">
          <div class="bocadillo maquina">Hola. Pulsa el micrófono para empezar a hablar.</div>
        </div>
        <div class="acciones">
          <button id="hablar" type="button">🎤 Hablar</button>
          <button id="detener" class="secundario" type="button" disabled>Detener</button>
          <button id="limpiar" class="secundario" type="button">Limpiar conversación</button>
        </div>
        <p id="estado" role="status" aria-live="polite">Listo para escuchar.</p>
      </section>
    </main>
    <button id="microfono" type="button" aria-label="Abrir chat y empezar a hablar">🎤</button>
    <script>
      const Reconocimiento=window.SpeechRecognition||window.webkitSpeechRecognition;
      const sintetizador=window.speechSynthesis;
      const chat=document.querySelector("#chat");
      const conversacion=document.querySelector("#conversacion");
      const botonMicrofono=document.querySelector("#microfono");
      const botonHablar=document.querySelector("#hablar");
      const botonDetener=document.querySelector("#detener");
      const estado=document.querySelector("#estado");
      let reconocimiento=null;

      function agregarMensaje(texto,clase){
        const mensaje=document.createElement("div");
        mensaje.className=`bocadillo ${clase}`;
        mensaje.textContent=texto;
        conversacion.appendChild(mensaje);
        conversacion.scrollTop=conversacion.scrollHeight;
      }

      function iniciarEscucha(){
        chat.classList.add("abierto");
        if(!Reconocimiento){
          estado.textContent="Este navegador no admite reconocimiento de voz. Prueba con Chrome o Edge.";
          botonHablar.disabled=true;botonMicrofono.disabled=true;
          return;
        }
        if(reconocimiento)return;

        reconocimiento=new Reconocimiento();
        reconocimiento.lang="es-ES";
        reconocimiento.continuous=false;
        reconocimiento.interimResults=false;
        reconocimiento.onstart=()=>{
          estado.textContent="Escuchando…";
          botonHablar.disabled=true;botonDetener.disabled=false;
        };
        reconocimiento.onresult=(evento)=>{
          const texto=evento.results[0][0].transcript.trim();
          agregarMensaje(texto,"yo");
          const respuesta=`Has dicho: ${texto}`;
          agregarMensaje(respuesta,"maquina");
          if(sintetizador&&typeof SpeechSynthesisUtterance!=="undefined"){
            const mensaje=new SpeechSynthesisUtterance(respuesta);
            mensaje.lang="es-ES";
            mensaje.onstart=()=>{estado.textContent="El asistente está respondiendo…";};
            mensaje.onend=()=>{estado.textContent="Listo para escuchar.";};
            mensaje.onerror=(error)=>{estado.textContent=`La respuesta no pudo reproducirse (${error.error}).`;};
            sintetizador.cancel();
            sintetizador.speak(mensaje);
          }else{
            estado.textContent="Frase transcrita. Este navegador no admite síntesis de voz.";
          }
        };
        reconocimiento.onerror=(evento)=>{
          estado.textContent=evento.error==="not-allowed"
            ?"No hay permiso para usar el micrófono."
            :`Error de reconocimiento: ${evento.error}.`;
        };
        reconocimiento.onend=()=>{
          reconocimiento=null;botonHablar.disabled=false;botonDetener.disabled=true;
          if(estado.textContent==="Escuchando…")estado.textContent="No se detectó ninguna frase. Inténtalo otra vez.";
        };
        try{reconocimiento.start();}
        catch(error){
          reconocimiento=null;botonHablar.disabled=false;botonDetener.disabled=true;
          estado.textContent=`No se pudo iniciar el reconocimiento: ${error.message}`;
        }
      }

      botonMicrofono.addEventListener("click",iniciarEscucha);
      botonHablar.addEventListener("click",iniciarEscucha);
      document.querySelector("#detener").addEventListener("click",()=>{
        if(reconocimiento){estado.textContent="Deteniendo escucha…";reconocimiento.stop();}
      });
      document.querySelector("#cerrar").addEventListener("click",()=>{
        if(reconocimiento)reconocimiento.stop();
        if(sintetizador)sintetizador.cancel();
        chat.classList.remove("abierto");
        botonMicrofono.focus();
      });
      document.querySelector("#limpiar").addEventListener("click",()=>{
        if(reconocimiento)reconocimiento.stop();
        if(sintetizador)sintetizador.cancel();
        conversacion.replaceChildren();
        agregarMensaje("Conversación limpiada. Pulsa «Hablar» para empezar otra vez.","maquina");
        estado.textContent="Conversación limpiada.";
      });
    </script>
  </body>
</html>

```
### 004-Partes y movimientos del cuerpo
**000-Introducción.md**
```markdown
# Partes y movimientos del cuerpo
* MediaPipe

  * Face Detection / Face Mesh

    * Rostro
    * Ojos
    * Cejas
    * Nariz
    * Boca
    * Orientación de la cabeza
  * Hands

    * Mano
    * Dedos
    * Palma
    * Apertura y cierre
    * Gestos
  * Pose

    * Cabeza
    * Hombros
    * Codos
    * Muñecas
    * Cadera
    * Rodillas
    * Tobillos
  * Movimientos detectables

    * Levantar brazos
    * Flexionar brazos
    * Girar la cabeza
    * Inclinar el cuerpo
    * Caminar
    * Agacharse
    * Saltar
    * Señalar
    * Abrir o cerrar la mano
  * Python

    * `mediapipe`
    * `opencv-python`
    * Captura de cámara con `cv2.VideoCapture()`
    * Detección de landmarks
    * Coordenadas `x`, `y`, `z`
    * Cálculo de distancias
    * Cálculo de ángulos
    * Reconocimiento de gestos y posturas


```
**001-reconocimiento de cara.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MediaPipe Face Detector</title>

  <style>
    body{
      background:#222;
      color:white;
      font-family:monospace;
    }

    #contenedor{
      position:relative;
      width:640px;
      height:480px;
    }

    video,
    canvas{
      position:absolute;
      left:0;
      top:0;
      width:640px;
      height:480px;
    }

    video{
      opacity:0;
    }

    canvas{
      z-index:2;
    }

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body{
      min-height:100vh;
      margin:0;
      padding:32px 18px;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:18px;
      background:var(--azul-claro);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    h1{
      width:min(100%,800px);
      margin:0;
      padding:18px 22px;
      border-top:5px solid var(--naranja);
      border-radius:12px;
      background:var(--blanco);
      color:var(--azul);
      font-size:clamp(1.4rem,4vw,2rem);
      box-shadow:0 10px 30px #11182714;
    }

    #contenedor{
      width:min(100%,800px);
      height:auto;
      aspect-ratio:4/3;
      overflow:hidden;
      border:3px solid var(--azul);
      border-radius:12px;
      background:var(--negro);
      box-shadow:0 16px 36px #11182724;
    }

    video,canvas{
      width:100%;
      height:100%;
    }

    @media(max-width:520px){
      body{padding:18px 12px}
    }
  </style>
</head>

<body>

  <h1>MediaPipe Face Detector</h1>

  <div id="contenedor">
    <video
      id="video"
      width="640"
      height="480"
      autoplay
      muted
      playsinline>
    </video>

    <canvas
      id="canvas"
      width="640"
      height="480">
    </canvas>
  </div>


  <script type="module">

    import {
      FaceDetector,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


    const video = document.querySelector("#video");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    // ============================================
    // 1. WEBCAM
    // ============================================

    const stream = await navigator.mediaDevices.getUserMedia({
      video:{
        width:640,
        height:480
      }
    });

    video.srcObject = stream;

    await video.play();

    console.log("Webcam funcionando");
    console.log(
      "Resolución:",
      video.videoWidth,
      video.videoHeight
    );


    // ============================================
    // 2. MEDIAPIPE
    // ============================================

    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );


    const detector = await FaceDetector.createFromOptions(
      vision,
      {
        baseOptions:{
          modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"
        },

        runningMode:"VIDEO",

        minDetectionConfidence:0.5
      }
    );


    console.log("MediaPipe cargado");


    // ============================================
    // 3. LOOP
    // ============================================

    function detectar(){

      // Dibujar webcam
      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );


      // Detectar caras
      const resultado = detector.detectForVideo(
        video,
        performance.now()
      );


      // ============================================
      // DEBUG GLOBAL
      // ============================================

      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.fillRect(10,10,150,50);

      ctx.fillStyle = "white";
      ctx.font = "14px monospace";

      ctx.fillText(
        "Faces: " + resultado.detections.length,
        20,
        32
      );

      ctx.fillText(
        "Video: " + video.readyState,
        20,
        52
      );


      // ============================================
      // CARAS
      // ============================================

      for(const cara of resultado.detections){

        const caja = cara.boundingBox;

        const x = caja.originX;
        const y = caja.originY;
        const w = caja.width;
        const h = caja.height;

        const cx = x + w/2;
        const cy = y + h/2;


        // ------------------------------------------
        // Bounding box
        // ------------------------------------------

        ctx.strokeStyle = "lime";
        ctx.lineWidth = 3;

        ctx.strokeRect(
          x,
          y,
          w,
          h
        );


        // ------------------------------------------
        // Diagonales
        // ------------------------------------------

        ctx.strokeStyle = "lime";
        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.moveTo(x,y);
        ctx.lineTo(x+w,y+h);

        ctx.moveTo(x+w,y);
        ctx.lineTo(x,y+h);

        ctx.stroke();


        // ------------------------------------------
        // Centro
        // ------------------------------------------

        ctx.strokeStyle = "yellow";

        ctx.beginPath();

        ctx.moveTo(cx-20,cy);
        ctx.lineTo(cx+20,cy);

        ctx.moveTo(cx,cy-20);
        ctx.lineTo(cx,cy+20);

        ctx.stroke();


        // ------------------------------------------
        // Líneas horizontales / verticales
        // ------------------------------------------

        ctx.strokeStyle = "rgba(255,255,0,0.3)";

        ctx.beginPath();

        ctx.moveTo(cx,0);
        ctx.lineTo(cx,canvas.height);

        ctx.moveTo(0,cy);
        ctx.lineTo(canvas.width,cy);

        ctx.stroke();


        // ------------------------------------------
        // Keypoints
        // ------------------------------------------

        for(const punto of cara.keypoints){

          const px = punto.x * canvas.width;
          const py = punto.y * canvas.height;

          ctx.fillStyle = "red";

          ctx.beginPath();

          ctx.arc(
            px,
            py,
            5,
            0,
            Math.PI*2
          );

          ctx.fill();


          // coordenadas

          ctx.fillStyle = "white";
          ctx.font = "11px monospace";

          ctx.fillText(
            Math.round(px) + "," + Math.round(py),
            px + 8,
            py
          );
        }


        // ------------------------------------------
        // Confianza
        // ------------------------------------------

        const confianza =
          cara.categories[0]?.score ?? 0;

        ctx.fillStyle = "lime";
        ctx.font = "16px monospace";

        ctx.fillText(
          "FACE " +
          Math.round(confianza*100) +
          "%",
          x,
          Math.max(20,y-10)
        );

      }


      requestAnimationFrame(detectar);
    }


    // ============================================
    // 4. START
    // ============================================

    detectar();

  </script>

</body>
</html>
```
**002-manos.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MediaPipe Hand Detector</title>

  <style>
    body{
      background:#222;
      color:white;
      font-family:monospace;
    }

    #contenedor{
      position:relative;
      width:640px;
      height:480px;
    }

    video,
    canvas{
      position:absolute;
      left:0;
      top:0;
      width:640px;
      height:480px;
    }

    video{
      opacity:0;
    }

    canvas{
      z-index:2;
    }

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body{
      min-height:100vh;
      margin:0;
      padding:32px 18px;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:18px;
      background:var(--azul-claro);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    h1{
      width:min(100%,800px);
      margin:0;
      padding:18px 22px;
      border-top:5px solid var(--naranja);
      border-radius:12px;
      background:var(--blanco);
      color:var(--azul);
      font-size:clamp(1.4rem,4vw,2rem);
      box-shadow:0 10px 30px #11182714;
    }

    #contenedor{
      width:min(100%,800px);
      height:auto;
      aspect-ratio:4/3;
      overflow:hidden;
      border:3px solid var(--azul);
      border-radius:12px;
      background:var(--negro);
      box-shadow:0 16px 36px #11182724;
    }

    video,canvas{
      width:100%;
      height:100%;
    }

    @media(max-width:520px){
      body{padding:18px 12px}
    }
  </style>
</head>

<body>

  <h1>MediaPipe Hand Detector</h1>

  <div id="contenedor">

    <video
      id="video"
      width="640"
      height="480"
      autoplay
      muted
      playsinline>
    </video>

    <canvas
      id="canvas"
      width="640"
      height="480">
    </canvas>

  </div>


  <script type="module">

    import {
      HandLandmarker,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


    const video = document.querySelector("#video");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    // ============================================
    // 1. WEBCAM
    // ============================================

    const stream = await navigator.mediaDevices.getUserMedia({
      video:{
        width:640,
        height:480
      }
    });

    video.srcObject = stream;

    await video.play();

    console.log("Webcam funcionando");
    console.log(
      "Resolución:",
      video.videoWidth,
      video.videoHeight
    );


    // ============================================
    // 2. MEDIAPIPE
    // ============================================

    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );


    const detector = await HandLandmarker.createFromOptions(
      vision,
      {
        baseOptions:{
          modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task"
        },

        runningMode:"VIDEO",

        numHands:2,

        minHandDetectionConfidence:0.5,
        minHandPresenceConfidence:0.5,
        minTrackingConfidence:0.5
      }
    );


    console.log("MediaPipe Hand Landmarker cargado");


    // ============================================
    // 3. CONEXIONES DEL ESQUELETO
    // ============================================

    const conexiones = [

      // Pulgar
      [0,1],
      [1,2],
      [2,3],
      [3,4],

      // Índice
      [0,5],
      [5,6],
      [6,7],
      [7,8],

      // Corazón
      [5,9],
      [9,10],
      [10,11],
      [11,12],

      // Anular
      [9,13],
      [13,14],
      [14,15],
      [15,16],

      // Meñique
      [13,17],
      [17,18],
      [18,19],
      [19,20],

      // Base de la palma
      [0,17]

    ];


    // ============================================
    // 4. LOOP
    // ============================================

    function detectar(){

      // Dibujar webcam

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );


      // Detectar manos

      const resultado = detector.detectForVideo(
        video,
        performance.now()
      );


      // ============================================
      // DEBUG GLOBAL
      // ============================================

      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.fillRect(10,10,170,55);

      ctx.fillStyle = "white";
      ctx.font = "14px monospace";

      ctx.fillText(
        "Hands: " + resultado.landmarks.length,
        20,
        32
      );

      ctx.fillText(
        "Video: " + video.readyState,
        20,
        52
      );


      // ============================================
      // CADA MANO
      // ============================================

      for(
        let mano = 0;
        mano < resultado.landmarks.length;
        mano++
      ){

        const puntos = resultado.landmarks[mano];


        // ==========================================
        // DIBUJAR LÍNEAS
        // ==========================================

        ctx.strokeStyle = "lime";
        ctx.lineWidth = 3;

        for(const conexion of conexiones){

          const a = puntos[conexion[0]];
          const b = puntos[conexion[1]];

          const ax = a.x * canvas.width;
          const ay = a.y * canvas.height;

          const bx = b.x * canvas.width;
          const by = b.y * canvas.height;

          ctx.beginPath();

          ctx.moveTo(ax,ay);
          ctx.lineTo(bx,by);

          ctx.stroke();
        }


        // ==========================================
        // DIBUJAR PUNTOS
        // ==========================================

        for(
          let i = 0;
          i < puntos.length;
          i++
        ){

          const punto = puntos[i];

          const x = punto.x * canvas.width;
          const y = punto.y * canvas.height;


          // Punto

          ctx.fillStyle = "red";

          ctx.beginPath();

          ctx.arc(
            x,
            y,
            5,
            0,
            Math.PI*2
          );

          ctx.fill();


          // Número del landmark

          ctx.fillStyle = "white";
          ctx.font = "12px monospace";

          ctx.fillText(
            i,
            x + 7,
            y - 7
          );

        }


        // ==========================================
        // TIPO DE MANO
        // ==========================================

        const info = resultado.handedness[mano];

        if(info && info.length > 0){

          const tipo = info[0].categoryName;

          const confianza =
            Math.round(info[0].score * 100);


          // Landmark de la muñeca

          const wrist = puntos[0];

          const x = wrist.x * canvas.width;
          const y = wrist.y * canvas.height;


          ctx.fillStyle = "yellow";
          ctx.font = "18px monospace";

          ctx.fillText(
            tipo + " " + confianza + "%",
            x,
            y + 30
          );

        }

      }


      requestAnimationFrame(detectar);
    }


    // ============================================
    // 5. START
    // ============================================

    detectar();

  </script>

</body>
</html>
```
**003-malla de la cara.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MediaPipe Face Mesh</title>

  <style>
    body{
      background:#222;
      color:white;
      font-family:monospace;
    }

    #contenedor{
      position:relative;
      width:640px;
      height:480px;
    }

    video,
    canvas{
      position:absolute;
      left:0;
      top:0;
      width:640px;
      height:480px;
    }

    video{
      opacity:0;
    }

    canvas{
      z-index:2;
    }

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body{
      min-height:100vh;
      margin:0;
      padding:32px 18px;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:18px;
      background:var(--azul-claro);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    h1{
      width:min(100%,800px);
      margin:0;
      padding:18px 22px;
      border-top:5px solid var(--naranja);
      border-radius:12px;
      background:var(--blanco);
      color:var(--azul);
      font-size:clamp(1.4rem,4vw,2rem);
      box-shadow:0 10px 30px #11182714;
    }

    #contenedor{
      width:min(100%,800px);
      height:auto;
      aspect-ratio:4/3;
      overflow:hidden;
      border:3px solid var(--azul);
      border-radius:12px;
      background:var(--negro);
      box-shadow:0 16px 36px #11182724;
    }

    video,canvas{
      width:100%;
      height:100%;
    }

    @media(max-width:520px){
      body{padding:18px 12px}
    }
  </style>
</head>

<body>

  <h1>MediaPipe Face Mesh</h1>

  <div id="contenedor">

    <video
      id="video"
      width="640"
      height="480"
      autoplay
      muted
      playsinline>
    </video>

    <canvas
      id="canvas"
      width="640"
      height="480">
    </canvas>

  </div>


  <script type="module">

    import {
      FaceLandmarker,
      FilesetResolver,
      DrawingUtils
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


    const video = document.querySelector("#video");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    // ============================================
    // 1. WEBCAM
    // ============================================

    const stream = await navigator.mediaDevices.getUserMedia({
      video:{
        width:640,
        height:480
      }
    });

    video.srcObject = stream;

    await video.play();

    console.log("Webcam funcionando");

    console.log(
      "Resolución:",
      video.videoWidth,
      video.videoHeight
    );


    // ============================================
    // 2. MEDIAPIPE
    // ============================================

    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );


    const detector = await FaceLandmarker.createFromOptions(
      vision,
      {
        baseOptions:{
          modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task"
        },

        runningMode:"VIDEO",

        numFaces:1,

        minFaceDetectionConfidence:0.5,
        minFacePresenceConfidence:0.5,
        minTrackingConfidence:0.5
      }
    );


    console.log("MediaPipe Face Landmarker cargado");


    // ============================================
    // 3. DRAWING UTILS
    // ============================================

    const dibujo = new DrawingUtils(ctx);


    // ============================================
    // 4. LOOP
    // ============================================

    function detectar(){

      // ------------------------------------------
      // Webcam
      // ------------------------------------------

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );


      // ------------------------------------------
      // Detectar
      // ------------------------------------------

      const resultado = detector.detectForVideo(
        video,
        performance.now()
      );


      // ==========================================
      // DEBUG
      // ==========================================

      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.fillRect(10,10,180,55);

      ctx.fillStyle = "white";
      ctx.font = "14px monospace";

      ctx.fillText(
        "Faces: " + resultado.faceLandmarks.length,
        20,
        32
      );

      ctx.fillText(
        "Video: " + video.readyState,
        20,
        52
      );


      // ==========================================
      // CADA CARA
      // ==========================================

      for(const puntos of resultado.faceLandmarks){


        // ========================================
        // MALLA COMPLETA
        // ========================================

        dibujo.drawConnectors(
          puntos,
          FaceLandmarker.FACE_LANDMARKS_TESSELATION,
          {
            color:"rgba(0,255,0,0.35)",
            lineWidth:1
          }
        );


        // ========================================
        // CONTORNO
        // ========================================

        dibujo.drawConnectors(
          puntos,
          FaceLandmarker.FACE_LANDMARKS_FACE_OVAL,
          {
            color:"lime",
            lineWidth:2
          }
        );


        // ========================================
        // OJO IZQUIERDO
        // ========================================

        dibujo.drawConnectors(
          puntos,
          FaceLandmarker.FACE_LANDMARKS_LEFT_EYE,
          {
            color:"yellow",
            lineWidth:2
          }
        );


        // ========================================
        // OJO DERECHO
        // ========================================

        dibujo.drawConnectors(
          puntos,
          FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE,
          {
            color:"yellow",
            lineWidth:2
          }
        );


        // ========================================
        // CEJA IZQUIERDA
        // ========================================

        dibujo.drawConnectors(
          puntos,
          FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW,
          {
            color:"cyan",
            lineWidth:2
          }
        );


        // ========================================
        // CEJA DERECHA
        // ========================================

        dibujo.drawConnectors(
          puntos,
          FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW,
          {
            color:"cyan",
            lineWidth:2
          }
        );


        // ========================================
        // LABIOS
        // ========================================

        dibujo.drawConnectors(
          puntos,
          FaceLandmarker.FACE_LANDMARKS_LIPS,
          {
            color:"red",
            lineWidth:2
          }
        );


        // ========================================
        // LANDMARKS
        // ========================================

        for(
          let i = 0;
          i < puntos.length;
          i++
        ){

          const punto = puntos[i];

          const x = punto.x * canvas.width;
          const y = punto.y * canvas.height;

          ctx.fillStyle = "white";

          ctx.beginPath();

          ctx.arc(
            x,
            y,
            1.5,
            0,
            Math.PI*2
          );

          ctx.fill();

        }

      }


      requestAnimationFrame(detectar);
    }


    // ============================================
    // 5. START
    // ============================================

    detectar();

  </script>

</body>
</html>
```
**004-spritesheet.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Face → Anime Sprite</title>

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      background:#222;
      color:white;
      font-family:monospace;
    }

    h1{
      text-align:center;
    }

    #pantalla{
      display:flex;
      width:1280px;
      height:480px;
      margin:auto;
      border:1px solid #555;
    }

    .mitad{
      position:relative;
      width:640px;
      height:480px;
      overflow:hidden;
    }

    #webcam{
      background:black;
    }

    #avatar{
      background:#eee;
    }

    video,
    canvas{
      position:absolute;
      left:0;
      top:0;

      width:640px;
      height:480px;
    }

    video{
      opacity:0;
    }

    canvas{
      z-index:2;
    }

    .titulo{
      position:absolute;
      z-index:10;

      left:10px;
      top:10px;

      background:#000a;
      padding:8px 12px;
      border-radius:5px;
    }

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body{
      min-height:100vh;
      margin:0;
      padding:28px 18px;
      background:var(--azul-claro);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    h1{
      margin:0 auto 18px;
      padding:16px 20px;
      border-top:5px solid var(--naranja);
      border-radius:12px;
      background:var(--blanco);
      color:var(--azul);
      font-size:clamp(1.4rem,4vw,2rem);
      box-shadow:0 10px 30px #11182714;
    }

    #pantalla{
      width:min(1280px,100%);
      height:auto;
      aspect-ratio:8/3;
      overflow:hidden;
      border:3px solid var(--azul);
      border-radius:12px;
      background:var(--blanco);
      box-shadow:0 16px 36px #11182724;
    }

    .mitad{
      width:50%;
      height:auto;
      aspect-ratio:4/3;
    }

    #webcam{background:var(--negro)}
    #avatar{background:var(--blanco)}

    video,canvas{width:100%;height:100%}

    .titulo{
      border-left:4px solid var(--naranja);
      border-radius:7px;
      background:var(--azul);
      color:var(--blanco);
      font-family:Arial,sans-serif;
      font-weight:700;
    }

    @media(max-width:700px){
      body{padding:18px 12px}
      #pantalla{flex-direction:column;aspect-ratio:auto}
      .mitad{width:100%;height:auto;aspect-ratio:4/3}
    }
  </style>
</head>

<body>

<h1>Face → Anime Sprite</h1>

<div id="pantalla">

  <!-- ========================================= -->
  <!-- IZQUIERDA: WEBCAM -->
  <!-- ========================================= -->

  <div class="mitad" id="webcam">

    <div class="titulo">
      Webcam
    </div>

    <video
      id="video"
      width="640"
      height="480"
      autoplay
      muted
      playsinline>
    </video>

    <canvas
      id="canvasWebcam"
      width="640"
      height="480">
    </canvas>

  </div>


  <!-- ========================================= -->
  <!-- DERECHA: SPRITE -->
  <!-- ========================================= -->

  <div class="mitad" id="avatar">

    <div class="titulo">
      Sprite
    </div>

    <canvas
      id="canvasSprite"
      width="640"
      height="480">
    </canvas>

  </div>

</div>


<script type="module">

import {
  FaceDetector,
  FilesetResolver
} from
"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


// ======================================================
// ELEMENTOS
// ======================================================

const video =
  document.querySelector("#video");

const canvasWebcam =
  document.querySelector("#canvasWebcam");

const ctx =
  canvasWebcam.getContext("2d");

const canvasSprite =
  document.querySelector("#canvasSprite");

const ctxSprite =
  canvasSprite.getContext("2d");


// ======================================================
// SPRITESHEET
// ======================================================

const spritesheet = new Image();

spritesheet.src = "spritesheet.png";

await new Promise(resolve => {

  spritesheet.onload = resolve;

});

console.log(
  "Spritesheet:",
  spritesheet.width,
  spritesheet.height
);


// ======================================================
// TAMAÑO DE CADA SPRITE
// ======================================================

const COLUMNAS = 5;
const FILAS = 5;

const spriteW =
  spritesheet.width / COLUMNAS;

const spriteH =
  spritesheet.height / FILAS;


// ======================================================
// WEBCAM
// ======================================================

const stream =
  await navigator.mediaDevices.getUserMedia({

    video:{
      width:640,
      height:480
    }

  });

video.srcObject = stream;

await video.play();

console.log("Webcam funcionando");


// ======================================================
// MEDIAPIPE
// ======================================================

const vision =
  await FilesetResolver.forVisionTasks(

    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

  );


const detector =
  await FaceDetector.createFromOptions(

    vision,

    {

      baseOptions:{

        modelAssetPath:

        "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"

      },

      runningMode:"VIDEO",

      minDetectionConfidence:0.5

    }

  );

console.log("MediaPipe cargado");


// ======================================================
// DIBUJAR SPRITE
// ======================================================

function dibujarSprite(fila,columna){

  ctxSprite.clearRect(
    0,
    0,
    canvasSprite.width,
    canvasSprite.height
  );


  // --------------------------------------------
  // Posición dentro del spritesheet
  // --------------------------------------------

  const sx =
    columna * spriteW;

  const sy =
    fila * spriteH;


  // --------------------------------------------
  // Escalar manteniendo proporción
  // --------------------------------------------

  const escala = Math.min(

    canvasSprite.width / spriteW,
    canvasSprite.height / spriteH

  );


  const ancho =
    spriteW * escala;

  const alto =
    spriteH * escala;


  const dx =
    (canvasSprite.width - ancho) / 2;

  const dy =
    (canvasSprite.height - alto) / 2;


  // --------------------------------------------
  // Dibujar únicamente el sprite seleccionado
  // --------------------------------------------

  ctxSprite.drawImage(

    spritesheet,

    sx,
    sy,
    spriteW,
    spriteH,

    dx,
    dy,
    ancho,
    alto

  );


  // --------------------------------------------
  // DEBUG
  // --------------------------------------------

  ctxSprite.fillStyle =
    "rgba(0,0,0,0.7)";

  ctxSprite.fillRect(
    10,
    420,
    220,
    45
  );

  ctxSprite.fillStyle =
    "white";

  ctxSprite.font =
    "16px monospace";

  ctxSprite.fillText(

    "Sprite: [" +
    fila +
    "," +
    columna +
    "]",

    20,
    448

  );

}


// ======================================================
// SPRITE INICIAL
// centro = mirando hacia delante
// ======================================================

dibujarSprite(2,2);


// ======================================================
// LOOP
// ======================================================

function detectar(){


  // ====================================================
  // DIBUJAR WEBCAM
  // ====================================================

  ctx.drawImage(

    video,

    0,
    0,
    canvasWebcam.width,
    canvasWebcam.height

  );


  // ====================================================
  // DETECTAR CARA
  // ====================================================

  const resultado =
    detector.detectForVideo(

      video,
      performance.now()

    );


// ======================================================
// DIBUJAR GRID 5x5
// ======================================================

const sectorW =
  canvasWebcam.width / 5;

const sectorH =
  canvasWebcam.height / 5;


ctx.strokeStyle =
  "rgba(255,255,255,0.4)";

ctx.lineWidth = 1;


// líneas verticales

for(let i=1;i<5;i++){

  const x =
    i * sectorW;

  ctx.beginPath();

  ctx.moveTo(
    x,
    0
  );

  ctx.lineTo(
    x,
    canvasWebcam.height
  );

  ctx.stroke();

}


// líneas horizontales

for(let i=1;i<5;i++){

  const y =
    i * sectorH;

  ctx.beginPath();

  ctx.moveTo(
    0,
    y
  );

  ctx.lineTo(
    canvasWebcam.width,
    y
  );

  ctx.stroke();

}


// ======================================================
// SI HAY CARA
// ======================================================

if(resultado.detections.length > 0){

  const cara =
    resultado.detections[0];

  const caja =
    cara.boundingBox;


  const x =
    caja.originX;

  const y =
    caja.originY;

  const w =
    caja.width;

  const h =
    caja.height;


  // ====================================================
  // CENTRO DE LA CARA
  // ====================================================

  const cx =
    x + w/2;

  const cy =
    y + h/2;


// ======================================================
// CALCULAR SECTOR
// ======================================================

let columna =
  Math.floor(
    cx / sectorW
  );

let fila =
  Math.floor(
    cy / sectorH
  );


// Seguridad

columna =
  Math.max(
    0,
    Math.min(
      4,
      columna
    )
  );

fila =
  Math.max(
    0,
    Math.min(
      4,
      fila
    )
  );


// ======================================================
// DESTACAR SECTOR ACTUAL
// ======================================================

ctx.fillStyle =
  "rgba(255,255,0,0.15)";

ctx.fillRect(

  columna * sectorW,
  fila * sectorH,

  sectorW,
  sectorH

);


// ======================================================
// BOUNDING BOX
// ======================================================

ctx.strokeStyle =
  "lime";

ctx.lineWidth = 3;

ctx.strokeRect(
  x,
  y,
  w,
  h
);


// ======================================================
// CENTRO DE CARA
// ======================================================

ctx.fillStyle =
  "red";

ctx.beginPath();

ctx.arc(
  cx,
  cy,
  7,
  0,
  Math.PI*2
);

ctx.fill();


// cruz

ctx.strokeStyle =
  "yellow";

ctx.lineWidth = 2;

ctx.beginPath();

ctx.moveTo(
  cx-20,
  cy
);

ctx.lineTo(
  cx+20,
  cy
);

ctx.moveTo(
  cx,
  cy-20
);

ctx.lineTo(
  cx,
  cy+20
);

ctx.stroke();


// ======================================================
// TEXTO DEBUG
// ======================================================

ctx.fillStyle =
  "rgba(0,0,0,0.7)";

ctx.fillRect(
  10,
  410,
  260,
  60
);


ctx.fillStyle =
  "white";

ctx.font =
  "14px monospace";


ctx.fillText(

  "Cara: " +
  Math.round(cx) +
  "," +
  Math.round(cy),

  20,
  435

);


ctx.fillText(

  "Sector: [" +
  fila +
  "," +
  columna +
  "]",

  20,
  458

);


// ======================================================
// MOSTRAR SPRITE CORRESPONDIENTE
// ======================================================

dibujarSprite(
  fila,
  columna
);

}


// ======================================================
// SIGUIENTE FRAME
// ======================================================

requestAnimationFrame(
  detectar
);

}


// ======================================================
// START
// ======================================================

detectar();

</script>

</body>
</html>
```
**005-con suavizado.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MediaPipe Face → Sprite Fade 5x5</title>

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      background:#222;
      color:white;
      font-family:monospace;
    }

    h1{
      text-align:center;
    }

    #pantalla{
      display:flex;
      width:1280px;
      max-width:100%;
      height:480px;
      margin:auto;
      border:1px solid #555;
    }

    .mitad{
      position:relative;
      width:50%;
      height:480px;
      overflow:hidden;
    }

    #webcam{
      background:black;
    }

    #avatar{
      background:#eee;
    }

    video,
    canvas{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:480px;
    }

    video{
      opacity:0;
    }

    canvas{
      z-index:2;
    }

    .titulo{
      position:absolute;
      z-index:10;
      left:10px;
      top:10px;
      background:#000a;
      padding:8px 12px;
      border-radius:5px;
      pointer-events:none;
    }

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body{
      min-height:100vh;
      margin:0;
      padding:28px 18px;
      background:var(--azul-claro);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    h1{
      margin:0 auto 18px;
      padding:16px 20px;
      border-top:5px solid var(--naranja);
      border-radius:12px;
      background:var(--blanco);
      color:var(--azul);
      font-size:clamp(1.4rem,4vw,2rem);
      box-shadow:0 10px 30px #11182714;
    }

    #pantalla{
      width:min(1280px,100%);
      height:auto;
      aspect-ratio:8/3;
      overflow:hidden;
      border:3px solid var(--azul);
      border-radius:12px;
      background:var(--blanco);
      box-shadow:0 16px 36px #11182724;
    }

    .mitad{
      width:50%;
      height:auto;
      aspect-ratio:4/3;
    }

    #webcam{background:var(--negro)}
    #avatar{background:var(--blanco)}

    video,canvas{width:100%;height:100%}

    .titulo{
      border-left:4px solid var(--naranja);
      border-radius:7px;
      background:var(--azul);
      color:var(--blanco);
      font-family:Arial,sans-serif;
      font-weight:700;
    }

    @media(max-width:700px){
      body{padding:18px 12px}
      #pantalla{flex-direction:column;aspect-ratio:auto}
      .mitad{width:100%;height:auto;aspect-ratio:4/3}
    }
  </style>
</head>

<body>

<h1>Face → Anime Sprite con Fade</h1>

<div id="pantalla">

  <div class="mitad" id="webcam">
    <div class="titulo">Webcam</div>

    <video
      id="video"
      width="640"
      height="480"
      autoplay
      muted
      playsinline>
    </video>

    <canvas
      id="canvasWebcam"
      width="640"
      height="480">
    </canvas>
  </div>

  <div class="mitad" id="avatar">
    <div class="titulo">Sprite interpolado</div>

    <canvas
      id="canvasSprite"
      width="640"
      height="480">
    </canvas>
  </div>

</div>


<script type="module">

import {
  FaceDetector,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


// ======================================================
// ELEMENTOS
// ======================================================

const video = document.querySelector("#video");

const canvasWebcam =
  document.querySelector("#canvasWebcam");

const ctx =
  canvasWebcam.getContext("2d");

const canvasSprite =
  document.querySelector("#canvasSprite");

const ctxSprite =
  canvasSprite.getContext("2d");


// ======================================================
// SPRITESHEET
// Debe ser una imagen 5x5 llamada spritesheet.png
// ======================================================

const spritesheet = new Image();

spritesheet.src = "spritesheet.png";

await new Promise((resolve,reject) => {

  spritesheet.onload = resolve;

  spritesheet.onerror = () => {
    reject(
      new Error(
        "No se ha podido cargar spritesheet.png"
      )
    );
  };

});

console.log(
  "Spritesheet:",
  spritesheet.width,
  spritesheet.height
);


// ======================================================
// CONFIGURACIÓN DEL SPRITESHEET
// ======================================================

const COLUMNAS = 5;
const FILAS = 5;

const spriteW =
  spritesheet.width / COLUMNAS;

const spriteH =
  spritesheet.height / FILAS;


// ======================================================
// WEBCAM
// ======================================================

const stream =
  await navigator.mediaDevices.getUserMedia({

    video:{
      width:640,
      height:480
    }

  });

video.srcObject = stream;

await video.play();

console.log("Webcam funcionando");


// ======================================================
// MEDIAPIPE
// ======================================================

const vision =
  await FilesetResolver.forVisionTasks(

    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

  );


const detector =
  await FaceDetector.createFromOptions(

    vision,

    {

      baseOptions:{

        modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"

      },

      runningMode:"VIDEO",

      minDetectionConfidence:0.5

    }

  );

console.log("MediaPipe cargado");


// ======================================================
// SUAVIZADO DE LA POSICIÓN
// Reduce el temblor del detector.
// 0.05 = muy suave/lento
// 0.15 = suave
// 0.30 = más rápido
// 1.00 = sin suavizado
// ======================================================

const SUAVIZADO = 0.15;

let cxSuave = null;
let cySuave = null;


// ======================================================
// DIBUJAR UNA CAPA DEL SPRITE
// ======================================================

function dibujarCapa(fila, columna, alpha){

  if(alpha <= 0){
    return;
  }

  const sx =
    columna * spriteW;

  const sy =
    fila * spriteH;


  const escala = Math.min(

    canvasSprite.width / spriteW,
    canvasSprite.height / spriteH

  );


  const ancho =
    spriteW * escala;

  const alto =
    spriteH * escala;


  const dx =
    (canvasSprite.width - ancho) / 2;

  const dy =
    (canvasSprite.height - alto) / 2;


  ctxSprite.globalAlpha = alpha;

  ctxSprite.drawImage(

    spritesheet,

    sx,
    sy,
    spriteW,
    spriteH,

    dx,
    dy,
    ancho,
    alto

  );
}


// ======================================================
// INTERPOLACIÓN BILINEAL ENTRE 4 SPRITES
// ======================================================

function dibujarSpriteInterpolado(fila, columna){

  ctxSprite.clearRect(
    0,
    0,
    canvasSprite.width,
    canvasSprite.height
  );


  // limitar al rango del spritesheet

  fila =
    Math.max(
      0,
      Math.min(4,fila)
    );

  columna =
    Math.max(
      0,
      Math.min(4,columna)
    );


  // sprites vecinos

  const col0 =
    Math.floor(columna);

  const col1 =
    Math.min(4,col0 + 1);

  const fila0 =
    Math.floor(fila);

  const fila1 =
    Math.min(4,fila0 + 1);


  // parte decimal

  const fx =
    columna - col0;

  const fy =
    fila - fila0;


  // pesos bilineales

  const peso00 =
    (1-fx) * (1-fy);

  const peso10 =
    fx * (1-fy);

  const peso01 =
    (1-fx) * fy;

  const peso11 =
    fx * fy;


  // dibujar las cuatro capas

  dibujarCapa(
    fila0,
    col0,
    peso00
  );

  dibujarCapa(
    fila0,
    col1,
    peso10
  );

  dibujarCapa(
    fila1,
    col0,
    peso01
  );

  dibujarCapa(
    fila1,
    col1,
    peso11
  );


  ctxSprite.globalAlpha = 1;


  // ----------------------------------------------
  // DEBUG
  // ----------------------------------------------

  ctxSprite.fillStyle =
    "rgba(0,0,0,0.7)";

  ctxSprite.fillRect(
    10,
    375,
    300,
    95
  );

  ctxSprite.fillStyle =
    "white";

  ctxSprite.font =
    "14px monospace";

  ctxSprite.fillText(
    "Pos sprite: " +
    columna.toFixed(2) +
    ", " +
    fila.toFixed(2),
    20,
    400
  );

  ctxSprite.fillText(
    "["+fila0+","+col0+"] " +
    Math.round(peso00*100)+"%",
    20,
    423
  );

  ctxSprite.fillText(
    "["+fila0+","+col1+"] " +
    Math.round(peso10*100)+"%",
    160,
    423
  );

  ctxSprite.fillText(
    "["+fila1+","+col0+"] " +
    Math.round(peso01*100)+"%",
    20,
    446
  );

  ctxSprite.fillText(
    "["+fila1+","+col1+"] " +
    Math.round(peso11*100)+"%",
    160,
    446
  );
}


// ======================================================
// SPRITE INICIAL
// ======================================================

dibujarSpriteInterpolado(
  2,
  2
);


// ======================================================
// LOOP
// ======================================================

function detectar(){


  // ====================================================
  // WEBCAM
  // ====================================================

  ctx.drawImage(

    video,

    0,
    0,
    canvasWebcam.width,
    canvasWebcam.height

  );


  // ====================================================
  // DETECTAR CARA
  // ====================================================

  const resultado =
    detector.detectForVideo(

      video,
      performance.now()

    );


  // ====================================================
  // GRID 5x5
  // ====================================================

  const sectorW =
    canvasWebcam.width / 5;

  const sectorH =
    canvasWebcam.height / 5;


  ctx.strokeStyle =
    "rgba(255,255,255,0.35)";

  ctx.lineWidth = 1;


  for(let i=1;i<5;i++){

    const x =
      i * sectorW;

    ctx.beginPath();

    ctx.moveTo(
      x,
      0
    );

    ctx.lineTo(
      x,
      canvasWebcam.height
    );

    ctx.stroke();

  }


  for(let i=1;i<5;i++){

    const y =
      i * sectorH;

    ctx.beginPath();

    ctx.moveTo(
      0,
      y
    );

    ctx.lineTo(
      canvasWebcam.width,
      y
    );

    ctx.stroke();

  }


  // ====================================================
  // SI HAY CARA
  // ====================================================

  if(resultado.detections.length > 0){

    const cara =
      resultado.detections[0];

    const caja =
      cara.boundingBox;


    const x =
      caja.originX;

    const y =
      caja.originY;

    const w =
      caja.width;

    const h =
      caja.height;


    // centro real detectado

    const cx =
      x + w/2;

    const cy =
      y + h/2;


    // ==================================================
    // SUAVIZAR CENTRO
    // ==================================================

    if(cxSuave === null){

      cxSuave = cx;
      cySuave = cy;

    }else{

      cxSuave +=
        (cx - cxSuave) *
        SUAVIZADO;

      cySuave +=
        (cy - cySuave) *
        SUAVIZADO;

    }


    // ==================================================
    // POSICIÓN DECIMAL DENTRO DEL 5x5
    //
    // El centro de cada sector coincide exactamente
    // con un sprite entero:
    //
    // centro pantalla => 2,2
    // ==================================================

    let columna =
      cxSuave /
      canvasWebcam.width *
      5 -
      0.5;

    let fila =
      cySuave /
      canvasWebcam.height *
      5 -
      0.5;


    columna =
      Math.max(
        0,
        Math.min(4,columna)
      );

    fila =
      Math.max(
        0,
        Math.min(4,fila)
      );


    // ==================================================
    // SECTOR PRINCIPAL PARA DEBUG
    // ==================================================

    const columnaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cxSuave / sectorW
          )
        )
      );

    const filaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cySuave / sectorH
          )
        )
      );


    // ==================================================
    // DESTACAR SECTOR
    // ==================================================

    ctx.fillStyle =
      "rgba(255,255,0,0.12)";

    ctx.fillRect(

      columnaSector * sectorW,
      filaSector * sectorH,

      sectorW,
      sectorH

    );


    // ==================================================
    // BOUNDING BOX
    // ==================================================

    ctx.strokeStyle =
      "lime";

    ctx.lineWidth = 3;

    ctx.strokeRect(
      x,
      y,
      w,
      h
    );


    // ==================================================
    // CENTRO REAL
    // ==================================================

    ctx.fillStyle =
      "red";

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      5,
      0,
      Math.PI*2
    );

    ctx.fill();


    // ==================================================
    // CENTRO SUAVIZADO
    // ==================================================

    ctx.fillStyle =
      "yellow";

    ctx.beginPath();

    ctx.arc(
      cxSuave,
      cySuave,
      7,
      0,
      Math.PI*2
    );

    ctx.fill();


    // cruz

    ctx.strokeStyle =
      "yellow";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
      cxSuave-20,
      cySuave
    );

    ctx.lineTo(
      cxSuave+20,
      cySuave
    );

    ctx.moveTo(
      cxSuave,
      cySuave-20
    );

    ctx.lineTo(
      cxSuave,
      cySuave+20
    );

    ctx.stroke();


    // ==================================================
    // DEBUG WEBCAM
    // ==================================================

    ctx.fillStyle =
      "rgba(0,0,0,0.7)";

    ctx.fillRect(
      10,
      390,
      300,
      80
    );


    ctx.fillStyle =
      "white";

    ctx.font =
      "14px monospace";


    ctx.fillText(
      "Centro: " +
      Math.round(cxSuave) +
      ", " +
      Math.round(cySuave),
      20,
      415
    );


    ctx.fillText(
      "Sprite X: " +
      columna.toFixed(2),
      20,
      438
    );


    ctx.fillText(
      "Sprite Y: " +
      fila.toFixed(2),
      20,
      461
    );


    // ==================================================
    // SPRITE CON FADE
    // ==================================================

    dibujarSpriteInterpolado(
      fila,
      columna
    );

  }


  requestAnimationFrame(
    detectar
  );

}


// ======================================================
// START
// ======================================================

detectar();

</script>

</body>
</html>
```
**006-integrafo.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MediaPipe Face → Sprite Fade 5x5</title>

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      background:#222;
      color:white;
      font-family:monospace;
    }

    h1{
      text-align:center;
    }

    #pantalla{
      display:flex;
      width:1280px;
      max-width:100%;
      height:480px;
      margin:auto;
      border:1px solid #555;
    }

    .mitad{
      position:relative;
      width:50%;
      height:480px;
      overflow:hidden;
    }

    #webcam{
      background:black;
    }

    #avatar{
      background:#eee;
    }

    video,
    canvas{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:480px;
    }

    video{
      opacity:0;
    }

    canvas{
      z-index:2;
    }

    .titulo{
      position:absolute;
      z-index:10;
      left:10px;
      top:10px;
      background:#000a;
      padding:8px 12px;
      border-radius:5px;
      pointer-events:none;
    }
  

    #controlesChat{max-width:1280px;margin:14px auto;display:flex;gap:10px;padding:0 10px;}
    #textoUsuario{flex:1;padding:12px;border-radius:8px;border:1px solid #666;background:#111;color:white;}
    #enviar,#microfono{padding:12px 18px;border:0;border-radius:8px;background:dodgerblue;color:white;cursor:pointer;}
    #conversacion{max-width:1280px;height:180px;margin:0 auto 20px;padding:12px;overflow:auto;background:#111;border:1px solid #555;border-radius:8px;}
    .mensaje{margin:7px 0;padding:8px 12px;border-radius:10px;max-width:75%;}
    .yo{margin-left:auto;background:dodgerblue;}
    .maquina{background:#333;}

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body{
      min-height:100vh;
      margin:0;
      padding:22px;
      background:var(--azul-claro);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    h1{
      max-width:1280px;
      margin:0 auto 16px;
      padding:15px 20px;
      border-top:5px solid var(--naranja);
      border-radius:12px;
      background:var(--blanco);
      color:var(--azul);
      font-size:clamp(1.35rem,4vw,2rem);
      box-shadow:0 10px 30px #11182714;
    }

    #pantalla{
      width:min(1280px,100%);
      height:auto;
      aspect-ratio:8/3;
      overflow:hidden;
      border:3px solid var(--azul);
      border-radius:12px;
      background:var(--blanco);
      box-shadow:0 16px 36px #11182724;
    }

    .mitad{width:50%;height:auto;aspect-ratio:4/3}
    #webcam{background:var(--negro)}
    #avatar{background:var(--blanco)}
    video,canvas{width:100%;height:100%}

    .titulo{
      border-left:4px solid var(--naranja);
      border-radius:7px;
      background:var(--azul);
      color:var(--blanco);
      font-family:Arial,sans-serif;
      font-weight:700;
    }

    #controlesChat{
      width:min(1280px,100%);
      margin:16px auto 10px;
      padding:12px;
      border:1px solid #dbeafe;
      border-radius:12px;
      background:var(--blanco);
      box-shadow:0 8px 24px #11182710;
    }

    #textoUsuario{
      min-width:0;
      border:1px solid #cbd5e1;
      background:var(--blanco);
      color:var(--negro);
      font:inherit;
    }

    #enviar,#microfono{
      min-height:44px;
      background:var(--naranja);
      color:var(--blanco);
      font:inherit;
      font-weight:700;
    }

    #microfono{background:var(--azul)}

    #conversacion{
      width:min(1280px,100%);
      height:180px;
      margin:0 auto 20px;
      border:1px solid #cbd5e1;
      background:var(--blanco);
      color:var(--negro);
    }

    .mensaje{background:var(--azul-claro);color:var(--negro)}
    .yo{background:var(--azul);color:var(--blanco)}
    .maquina{border-left:4px solid var(--naranja)}

    @media(max-width:700px){
      body{padding:14px 12px}
      #pantalla{flex-direction:column;aspect-ratio:auto}
      .mitad{width:100%;height:auto;aspect-ratio:4/3}
      #controlesChat{flex-wrap:wrap}
      #textoUsuario{flex-basis:100%}
    }
  </style>
</head>

<body>

<h1>Face → Anime Sprite con Fade</h1>

<div id="pantalla">

  <div class="mitad" id="webcam">
    <div class="titulo">Webcam</div>

    <video
      id="video"
      width="640"
      height="480"
      autoplay
      muted
      playsinline>
    </video>

    <canvas
      id="canvasWebcam"
      width="640"
      height="480">
    </canvas>
  </div>

  <div class="mitad" id="avatar">
    <div class="titulo">Sprite interpolado</div>

    <canvas
      id="canvasSprite"
      width="640"
      height="480">
    </canvas>
  </div>

</div>


<div id="controlesChat">
  <input id="textoUsuario" placeholder="Escribe o pulsa el micrófono para hablar con el avatar...">
  <button id="enviar">Enviar</button>
  <button id="microfono">🎤</button>
</div>
<div id="conversacion"><div class="mensaje maquina">Hola, soy tu avatar. ¿En qué puedo ayudarte?</div></div>

<script type="module">

import {
  FaceDetector,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


// ======================================================
// ELEMENTOS
// ======================================================

const video = document.querySelector("#video");

const canvasWebcam =
  document.querySelector("#canvasWebcam");

const ctx =
  canvasWebcam.getContext("2d");

const canvasSprite =
  document.querySelector("#canvasSprite");

const ctxSprite =
  canvasSprite.getContext("2d");


// ======================================================
// SPRITESHEET
// Debe ser una imagen 5x5 llamada spritesheet.png
// ======================================================

const spritesheet = new Image();

spritesheet.src = "spritesheet.png";

await new Promise((resolve,reject) => {

  spritesheet.onload = resolve;

  spritesheet.onerror = () => {
    reject(
      new Error(
        "No se ha podido cargar spritesheet.png"
      )
    );
  };

});

console.log(
  "Spritesheet:",
  spritesheet.width,
  spritesheet.height
);


// ======================================================
// CONFIGURACIÓN DEL SPRITESHEET
// ======================================================

const COLUMNAS = 5;
const FILAS = 5;

const spriteW =
  spritesheet.width / COLUMNAS;

const spriteH =
  spritesheet.height / FILAS;


// ======================================================
// WEBCAM
// ======================================================

const stream =
  await navigator.mediaDevices.getUserMedia({

    video:{
      width:640,
      height:480
    }

  });

video.srcObject = stream;

await video.play();

console.log("Webcam funcionando");


// ======================================================
// MEDIAPIPE
// ======================================================

const vision =
  await FilesetResolver.forVisionTasks(

    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

  );


const detector =
  await FaceDetector.createFromOptions(

    vision,

    {

      baseOptions:{

        modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"

      },

      runningMode:"VIDEO",

      minDetectionConfidence:0.5

    }

  );

console.log("MediaPipe cargado");


// ======================================================
// SUAVIZADO DE LA POSICIÓN
// Reduce el temblor del detector.
// 0.05 = muy suave/lento
// 0.15 = suave
// 0.30 = más rápido
// 1.00 = sin suavizado
// ======================================================

const SUAVIZADO = 0.15;

let cxSuave = null;
let cySuave = null;


// ======================================================
// DIBUJAR UNA CAPA DEL SPRITE
// ======================================================

function dibujarCapa(fila, columna, alpha){

  if(alpha <= 0){
    return;
  }

  const sx =
    columna * spriteW;

  const sy =
    fila * spriteH;


  const escala = Math.min(

    canvasSprite.width / spriteW,
    canvasSprite.height / spriteH

  );


  const ancho =
    spriteW * escala;

  const alto =
    spriteH * escala;


  const dx =
    (canvasSprite.width - ancho) / 2;

  const dy =
    (canvasSprite.height - alto) / 2;


  ctxSprite.globalAlpha = alpha;

  ctxSprite.drawImage(

    spritesheet,

    sx,
    sy,
    spriteW,
    spriteH,

    dx,
    dy,
    ancho,
    alto

  );
}


// ======================================================
// TRANSICIÓN SOLO CERCA DE LOS LÍMITES ENTRE SECTORES
// El interior de cada celda muestra un único sprite.
// Solo se hace fade en una banda alrededor de cada frontera.
// ======================================================

const ZONA_FADE = 0.18; // fracción de celda a cada lado del límite (0..0.5)

function mezclaEje(pos){
  pos = Math.max(0, Math.min(4.999999, pos));
  const base = Math.floor(pos);
  const local = pos - base;

  // Cerca del borde izquierdo: mezcla con la celda anterior.
  if(base > 0 && local < ZONA_FADE){
    const t = local / ZONA_FADE;
    return {a:base-1, b:base, t:t};
  }

  // Cerca del borde derecho: mezcla con la celda siguiente.
  if(base < 4 && local > 1-ZONA_FADE){
    const t = (local-(1-ZONA_FADE)) / ZONA_FADE;
    return {a:base, b:base+1, t:t};
  }

  // Interior: sin fade.
  return {a:base, b:base, t:0};
}

function dibujarSpritePorZonas(filaPos, columnaPos){
  ctxSprite.clearRect(0,0,canvasSprite.width,canvasSprite.height);

  const mx = mezclaEje(columnaPos);
  const my = mezclaEje(filaPos);

  // Si solo un eje está en transición, realmente se mezclan 2 sprites.
  // En la intersección de dos fronteras pueden intervenir 4.
  const pesos = [
    [my.a, mx.a, (1-my.t)*(1-mx.t)],
    [my.a, mx.b, (1-my.t)*mx.t],
    [my.b, mx.a, my.t*(1-mx.t)],
    [my.b, mx.b, my.t*mx.t]
  ];

  const acumulados = new Map();
  for(const [f,c,p] of pesos){
    if(p <= 0) continue;
    const k=f+','+c;
    acumulados.set(k,(acumulados.get(k)||0)+p);
  }
  for(const [k,peso] of acumulados){
    const [f,c]=k.split(',').map(Number);
    dibujarCapa(f,c,peso);
  }
  ctxSprite.globalAlpha=1;

  ctxSprite.fillStyle='rgba(0,0,0,0.7)';
  ctxSprite.fillRect(10,410,350,60);
  ctxSprite.fillStyle='white';
  ctxSprite.font='14px monospace';
  ctxSprite.fillText('Sector: '+Math.floor(columnaPos)+','+Math.floor(filaPos),20,434);
  ctxSprite.fillText('Fade límite X: '+mx.t.toFixed(2)+'  Y: '+my.t.toFixed(2),20,457);
}

// ======================================================
// SPRITE INICIAL
// ======================================================

dibujarSpritePorZonas(2.5,2.5);


// ======================================================
// LOOP
// ======================================================

function detectar(){


  // ====================================================
  // WEBCAM
  // ====================================================

  ctx.drawImage(

    video,

    0,
    0,
    canvasWebcam.width,
    canvasWebcam.height

  );


  // ====================================================
  // DETECTAR CARA
  // ====================================================

  const resultado =
    detector.detectForVideo(

      video,
      performance.now()

    );


  // ====================================================
  // GRID 5x5
  // ====================================================

  const sectorW =
    canvasWebcam.width / 5;

  const sectorH =
    canvasWebcam.height / 5;


  ctx.strokeStyle =
    "rgba(255,255,255,0.35)";

  ctx.lineWidth = 1;


  for(let i=1;i<5;i++){

    const x =
      i * sectorW;

    ctx.beginPath();

    ctx.moveTo(
      x,
      0
    );

    ctx.lineTo(
      x,
      canvasWebcam.height
    );

    ctx.stroke();

  }


  for(let i=1;i<5;i++){

    const y =
      i * sectorH;

    ctx.beginPath();

    ctx.moveTo(
      0,
      y
    );

    ctx.lineTo(
      canvasWebcam.width,
      y
    );

    ctx.stroke();

  }


  // ====================================================
  // SI HAY CARA
  // ====================================================

  if(resultado.detections.length > 0){

    const cara =
      resultado.detections[0];

    const caja =
      cara.boundingBox;


    const x =
      caja.originX;

    const y =
      caja.originY;

    const w =
      caja.width;

    const h =
      caja.height;


    // centro real detectado

    const cx =
      x + w/2;

    const cy =
      y + h/2;


    // ==================================================
    // SUAVIZAR CENTRO
    // ==================================================

    if(cxSuave === null){

      cxSuave = cx;
      cySuave = cy;

    }else{

      cxSuave +=
        (cx - cxSuave) *
        SUAVIZADO;

      cySuave +=
        (cy - cySuave) *
        SUAVIZADO;

    }


    // ==================================================
    // POSICIÓN DECIMAL DENTRO DEL 5x5
    //
    // El centro de cada sector coincide exactamente
    // con un sprite entero:
    //
    // centro pantalla => 2,2
    // ==================================================

    let columna = cxSuave / canvasWebcam.width * 5;
    let fila = cySuave / canvasWebcam.height * 5;


    columna =
      Math.max(
        0,
        Math.min(4.999999,columna)
      );

    fila =
      Math.max(
        0,
        Math.min(4.999999,fila)
      );


    // ==================================================
    // SECTOR PRINCIPAL PARA DEBUG
    // ==================================================

    const columnaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cxSuave / sectorW
          )
        )
      );

    const filaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cySuave / sectorH
          )
        )
      );


    // ==================================================
    // DESTACAR SECTOR
    // ==================================================

    ctx.fillStyle =
      "rgba(255,255,0,0.12)";

    ctx.fillRect(

      columnaSector * sectorW,
      filaSector * sectorH,

      sectorW,
      sectorH

    );


    // ==================================================
    // BOUNDING BOX
    // ==================================================

    ctx.strokeStyle =
      "lime";

    ctx.lineWidth = 3;

    ctx.strokeRect(
      x,
      y,
      w,
      h
    );


    // ==================================================
    // CENTRO REAL
    // ==================================================

    ctx.fillStyle =
      "red";

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      5,
      0,
      Math.PI*2
    );

    ctx.fill();


    // ==================================================
    // CENTRO SUAVIZADO
    // ==================================================

    ctx.fillStyle =
      "yellow";

    ctx.beginPath();

    ctx.arc(
      cxSuave,
      cySuave,
      7,
      0,
      Math.PI*2
    );

    ctx.fill();


    // cruz

    ctx.strokeStyle =
      "yellow";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
      cxSuave-20,
      cySuave
    );

    ctx.lineTo(
      cxSuave+20,
      cySuave
    );

    ctx.moveTo(
      cxSuave,
      cySuave-20
    );

    ctx.lineTo(
      cxSuave,
      cySuave+20
    );

    ctx.stroke();


    // ==================================================
    // DEBUG WEBCAM
    // ==================================================

    ctx.fillStyle =
      "rgba(0,0,0,0.7)";

    ctx.fillRect(
      10,
      390,
      300,
      80
    );


    ctx.fillStyle =
      "white";

    ctx.font =
      "14px monospace";


    ctx.fillText(
      "Centro: " +
      Math.round(cxSuave) +
      ", " +
      Math.round(cySuave),
      20,
      415
    );


    ctx.fillText(
      "Sprite X: " +
      columna.toFixed(2),
      20,
      438
    );


    ctx.fillText(
      "Sprite Y: " +
      fila.toFixed(2),
      20,
      461
    );


    // ==================================================
    // SPRITE CON FADE
    // ==================================================

    dibujarSpritePorZonas(fila,columna);

  }


  requestAnimationFrame(
    detectar
  );

}


// ======================================================
// CHATBOT OLLAMA + VOZ: EL AVATAR ES LA INTERFAZ
// ======================================================
const textoUsuario=document.querySelector('#textoUsuario');
const conversacion=document.querySelector('#conversacion');
const btnEnviar=document.querySelector('#enviar');
const btnMicro=document.querySelector('#microfono');

function bocadillo(texto,quien){
  const d=document.createElement('div');
  d.className='mensaje '+quien;
  d.textContent=texto;
  conversacion.appendChild(d);
  conversacion.scrollTop=conversacion.scrollHeight;
  return d;
}

async function preguntar(texto){
  texto=texto.trim();
  if(!texto) return;
  bocadillo(texto,'yo');
  textoUsuario.value='';
  const pensando=bocadillo('Pensando...','maquina');
  try{
    const r=await fetch('ollama.php',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({mensaje:texto})
    });
    if(!r.ok) throw new Error('HTTP '+r.status);
    const datos=await r.json();
    pensando.remove();
    const respuesta=datos.respuesta || 'No he podido responder.';
    bocadillo(respuesta,'maquina');
    speechSynthesis.cancel();
    const voz=new SpeechSynthesisUtterance(respuesta);
    voz.lang='es-ES';
    speechSynthesis.speak(voz);
  }catch(e){
    pensando.remove();
    console.error(e);
    bocadillo('No he podido conectar con Ollama.','maquina');
  }
}

btnEnviar.onclick=()=>preguntar(textoUsuario.value);
textoUsuario.addEventListener('keydown',e=>{if(e.key==='Enter') preguntar(textoUsuario.value);});
btnMicro.onclick=()=>{
  const SR=window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ bocadillo('Este navegador no dispone de SpeechRecognition.','maquina'); return; }
  const rec=new SR();
  rec.lang='es-ES';
  rec.onresult=e=>preguntar(e.results[0][0].transcript);
  rec.onerror=e=>console.error('SpeechRecognition:',e.error);
  rec.start();
};

// ======================================================
// START
// ======================================================

detectar();

</script>

</body>
</html>
```
**006-raton.html**
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Seguimiento del ratón | Movimiento corporal</title>
    <style>
      :root{
        color-scheme:light;
        --naranja:#f97316;
        --azul:#1d4ed8;
        --azul-claro:#eff6ff;
        --blanco:#fff;
        --negro:#111827;
        --gris:#4b5563;
      }

      *{box-sizing:border-box}

      body{
        min-height:100vh;
        margin:0;
        padding:24px;
        display:grid;
        place-items:center;
        background:var(--azul-claro);
        color:var(--negro);
        font-family:Arial,sans-serif;
      }

      main{
        width:min(100%,1000px);
        padding:clamp(20px,4vw,36px);
        border-top:6px solid var(--naranja);
        border-radius:16px;
        background:var(--blanco);
        box-shadow:0 18px 50px #1118271a;
      }

      h1{
        margin:0;
        color:var(--azul);
        font-size:clamp(1.7rem,5vw,2.3rem);
      }

      p{color:var(--gris);line-height:1.6}

      #zona{
        position:relative;
        min-height:clamp(260px,48vh,480px);
        overflow:hidden;
        border:2px solid var(--azul);
        border-radius:12px;
        background-color:var(--azul-claro);
        background-image:linear-gradient(#1d4ed811 1px,transparent 1px),linear-gradient(90deg,#1d4ed811 1px,transparent 1px);
        background-size:32px 32px;
        touch-action:none;
      }

      #centro{
        position:absolute;
        left:50%;
        top:50%;
        width:12px;
        height:12px;
        border:2px solid var(--azul);
        border-radius:50%;
        transform:translate(-50%,-50%);
      }

      #puntero{
        position:absolute;
        left:50%;
        top:50%;
        width:26px;
        height:26px;
        border:4px solid var(--blanco);
        border-radius:50%;
        background:var(--naranja);
        box-shadow:0 2px 12px #11182755;
        transform:translate(-50%,-50%);
        pointer-events:none;
      }

      #coordenadas{
        margin:16px 0 0;
        color:var(--azul);
        font-size:1.2rem;
        font-weight:700;
        font-variant-numeric:tabular-nums;
      }

      @media(max-width:520px){body{padding:14px}}
    </style>
  </head>
  <body>
    <main>
      <h1>Movimiento del ratón</h1>
      <p>Mueve el ratón o el dedo dentro del área. Las coordenadas se calculan respecto al centro de la zona.</p>
      <div id="zona" aria-label="Área de seguimiento del puntero">
        <span id="centro" aria-hidden="true"></span>
        <span id="puntero" aria-hidden="true"></span>
      </div>
      <p id="coordenadas" aria-live="off">X: 0 px · Y: 0 px</p>
    </main>
    <script>
      const zona=document.querySelector("#zona");
      const puntero=document.querySelector("#puntero");
      const coordenadas=document.querySelector("#coordenadas");

      zona.addEventListener("pointermove",(evento)=>{
        const limites=zona.getBoundingClientRect();
        const x=evento.clientX-limites.left;
        const y=evento.clientY-limites.top;
        const relativoX=Math.round(x-limites.width/2);
        const relativoY=Math.round(limites.height/2-y);

        puntero.style.left=`${x}px`;
        puntero.style.top=`${y}px`;
        coordenadas.textContent=`X: ${relativoX} px · Y: ${relativoY} px`;
      });

      zona.addEventListener("pointerleave",()=>{
        puntero.style.left="50%";
        puntero.style.top="50%";
        coordenadas.textContent="X: 0 px · Y: 0 px";
      });
    </script>
  </body>
</html>

```
**007-avatar-chatbot-lipsync.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MediaPipe Face → Sprite Fade 5x5</title>

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      background:#222;
      color:white;
      font-family:monospace;
    }

    h1{
      text-align:center;
    }

    #pantalla{
      display:flex;
      width:1280px;
      max-width:100%;
      height:480px;
      margin:auto;
      border:1px solid #555;
    }

    .mitad{
      position:relative;
      width:50%;
      height:480px;
      overflow:hidden;
    }

    #webcam{
      background:black;
    }

    #avatar{
      background:#eee;
    }

    video,
    canvas{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:480px;
    }

    video{
      opacity:0;
    }

    canvas{
      z-index:2;
    }

    .titulo{
      position:absolute;
      z-index:10;
      left:10px;
      top:10px;
      background:#000a;
      padding:8px 12px;
      border-radius:5px;
      pointer-events:none;
    }
  

    #controlesChat{max-width:1280px;margin:14px auto;display:flex;gap:10px;padding:0 10px;}
    #textoUsuario{flex:1;padding:12px;border-radius:8px;border:1px solid #666;background:#111;color:white;}
    #enviar,#microfono{padding:12px 18px;border:0;border-radius:8px;background:dodgerblue;color:white;cursor:pointer;}
    #conversacion{max-width:1280px;height:180px;margin:0 auto 20px;padding:12px;overflow:auto;background:#111;border:1px solid #555;border-radius:8px;}
    .mensaje{margin:7px 0;padding:8px 12px;border-radius:10px;max-width:75%;}
    .yo{margin-left:auto;background:dodgerblue;}
    .maquina{background:#333;}

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body{
      min-height:100vh;
      margin:0;
      padding:22px;
      background:var(--azul-claro);
      color:var(--negro);
      font-family:Arial,sans-serif;
    }

    h1{
      max-width:1280px;
      margin:0 auto 16px;
      padding:15px 20px;
      border-top:5px solid var(--naranja);
      border-radius:12px;
      background:var(--blanco);
      color:var(--azul);
      font-size:clamp(1.35rem,4vw,2rem);
      box-shadow:0 10px 30px #11182714;
    }

    #pantalla{
      width:min(1280px,100%);
      height:auto;
      aspect-ratio:8/3;
      overflow:hidden;
      border:3px solid var(--azul);
      border-radius:12px;
      background:var(--blanco);
      box-shadow:0 16px 36px #11182724;
    }

    .mitad{width:50%;height:auto;aspect-ratio:4/3}
    #webcam{background:var(--negro)}
    #avatar{background:var(--blanco)}
    video,canvas{width:100%;height:100%}

    .titulo{
      border-left:4px solid var(--naranja);
      border-radius:7px;
      background:var(--azul);
      color:var(--blanco);
      font-family:Arial,sans-serif;
      font-weight:700;
    }

    #controlesChat{
      width:min(1280px,100%);
      margin:16px auto 10px;
      padding:12px;
      border:1px solid #dbeafe;
      border-radius:12px;
      background:var(--blanco);
      box-shadow:0 8px 24px #11182710;
    }

    #textoUsuario{
      min-width:0;
      border:1px solid #cbd5e1;
      background:var(--blanco);
      color:var(--negro);
      font:inherit;
    }

    #enviar,#microfono{
      min-height:44px;
      background:var(--naranja);
      color:var(--blanco);
      font:inherit;
      font-weight:700;
    }

    #microfono{background:var(--azul)}

    #conversacion{
      width:min(1280px,100%);
      height:180px;
      margin:0 auto 20px;
      border:1px solid #cbd5e1;
      background:var(--blanco);
      color:var(--negro);
    }

    .mensaje{background:var(--azul-claro);color:var(--negro)}
    .yo{background:var(--azul);color:var(--blanco)}
    .maquina{border-left:4px solid var(--naranja)}

    @media(max-width:700px){
      body{padding:14px 12px}
      #pantalla{flex-direction:column;aspect-ratio:auto}
      .mitad{width:100%;height:auto;aspect-ratio:4/3}
      #controlesChat{flex-wrap:wrap}
      #textoUsuario{flex-basis:100%}
    }
  </style>
</head>

<body>

<h1>Face → Anime Sprite con Fade</h1>

<div id="pantalla">

  <div class="mitad" id="webcam">
    <div class="titulo">Webcam</div>

    <video
      id="video"
      width="640"
      height="480"
      autoplay
      muted
      playsinline>
    </video>

    <canvas
      id="canvasWebcam"
      width="640"
      height="480">
    </canvas>
  </div>

  <div class="mitad" id="avatar">
    <div class="titulo">Sprite interpolado</div>

    <canvas
      id="canvasSprite"
      width="640"
      height="480">
    </canvas>
  </div>

</div>


<div id="controlesChat">
  <input id="textoUsuario" placeholder="Escribe o pulsa el micrófono para hablar con el avatar...">
  <button id="enviar">Enviar</button>
  <button id="microfono">🎤</button>
</div>
<div id="conversacion"><div class="mensaje maquina">Hola, soy tu avatar. ¿En qué puedo ayudarte?</div></div>

<script type="module">

import {
  FaceDetector,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


// ======================================================
// ELEMENTOS
// ======================================================

const video = document.querySelector("#video");

const canvasWebcam =
  document.querySelector("#canvasWebcam");

const ctx =
  canvasWebcam.getContext("2d");

const canvasSprite =
  document.querySelector("#canvasSprite");

const ctxSprite =
  canvasSprite.getContext("2d");


// ======================================================
// SPRITESHEETS: BOCA CERRADA + BOCA ABIERTA (A)
// Ambos deben ser 5x5 y tener exactamente la misma disposición.
// ======================================================

const spritesheet = new Image();
const spritesheetA = new Image();

spritesheet.src = "spritesheet.png";
spritesheetA.src = "spritesheetA.png";

await Promise.all([spritesheet, spritesheetA].map((img) =>
  new Promise((resolve,reject) => {
    img.onload = resolve;
    img.onerror = () => reject(new Error("No se ha podido cargar " + img.src));
  })
));

const COLUMNAS = 5;
const FILAS = 5;
const spriteW = spritesheet.width / COLUMNAS;
const spriteH = spritesheet.height / FILAS;

// Lip-sync simulado. Durante SpeechSynthesis alternamos las dos bocas.
let hablando = false;
let bocaAbierta = false;
let temporizadorBoca = null;

function iniciarLipSync(){
  detenerLipSync();
  hablando = true;
  bocaAbierta = true;

  const alternar = () => {
    if(!hablando) return;
    bocaAbierta = !bocaAbierta;
    // Ritmo ligeramente variable para que no parezca un metrónomo.
    temporizadorBoca = setTimeout(alternar, 90 + Math.random()*90);
  };

  temporizadorBoca = setTimeout(alternar, 110);
}

function detenerLipSync(){
  hablando = false;
  bocaAbierta = false;
  if(temporizadorBoca){
    clearTimeout(temporizadorBoca);
    temporizadorBoca = null;
  }
}

// ======================================================
// WEBCAM
// ======================================================

const stream =
  await navigator.mediaDevices.getUserMedia({

    video:{
      width:640,
      height:480
    }

  });

video.srcObject = stream;

await video.play();

console.log("Webcam funcionando");


// ======================================================
// MEDIAPIPE
// ======================================================

const vision =
  await FilesetResolver.forVisionTasks(

    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

  );


const detector =
  await FaceDetector.createFromOptions(

    vision,

    {

      baseOptions:{

        modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"

      },

      runningMode:"VIDEO",

      minDetectionConfidence:0.5

    }

  );

console.log("MediaPipe cargado");


// ======================================================
// SUAVIZADO DE LA POSICIÓN
// Reduce el temblor del detector.
// 0.05 = muy suave/lento
// 0.15 = suave
// 0.30 = más rápido
// 1.00 = sin suavizado
// ======================================================

const SUAVIZADO = 0.15;

let cxSuave = null;
let cySuave = null;


// ======================================================
// DIBUJAR UNA CAPA DEL SPRITE
// ======================================================

function dibujarCapa(fila, columna, alpha){

  if(alpha <= 0){
    return;
  }

  const sx =
    columna * spriteW;

  const sy =
    fila * spriteH;


  const escala = Math.min(

    canvasSprite.width / spriteW,
    canvasSprite.height / spriteH

  );


  const ancho =
    spriteW * escala;

  const alto =
    spriteH * escala;


  const dx =
    (canvasSprite.width - ancho) / 2;

  const dy =
    (canvasSprite.height - alto) / 2;


  ctxSprite.globalAlpha = alpha;

  const hojaActiva = (hablando && bocaAbierta) ? spritesheetA : spritesheet;

  ctxSprite.drawImage(

    hojaActiva,

    sx,
    sy,
    spriteW,
    spriteH,

    dx,
    dy,
    ancho,
    alto

  );
}


// ======================================================
// TRANSICIÓN ÚNICA CENTRADA EN CADA FRONTERA
//
// Antes cada frontera se calculaba dos veces:
// - al final de la celda anterior
// - al principio de la celda siguiente
// Eso reiniciaba el fade. Ahora cada frontera tiene UNA sola banda
// continua, centrada exactamente sobre el límite.
// ======================================================

const ZONA_FADE = 0.18; // ancho TOTAL de la transición, en fracción de celda

function mezclaEje(pos){
  // pos usa coordenadas de sector: 0..5.
  pos = Math.max(0, Math.min(5, pos));

  // Buscamos la frontera interior más cercana: 1,2,3,4.
  const frontera = Math.round(pos);
  const mediaZona = ZONA_FADE / 2;

  if(frontera >= 1 && frontera <= 4 &&
     Math.abs(pos - frontera) <= mediaZona){

    // Una única progresión 0 -> 1 atravesando la frontera.
    const inicio = frontera - mediaZona;
    const t = Math.max(0, Math.min(1,
      (pos - inicio) / ZONA_FADE
    ));

    return {
      a: frontera - 1,
      b: frontera,
      t: t,
      fade: true
    };
  }

  // Fuera de la estrecha banda no hay interpolación.
  const celda = Math.max(0, Math.min(4, Math.floor(pos)));
  return {a:celda, b:celda, t:0, fade:false};
}

function dibujarSpritePorZonas(filaPos, columnaPos){
  ctxSprite.clearRect(0,0,canvasSprite.width,canvasSprite.height);

  const mx = mezclaEje(columnaPos);
  const my = mezclaEje(filaPos);

  const pesos = [
    [my.a, mx.a, (1-my.t)*(1-mx.t)],
    [my.a, mx.b, (1-my.t)*mx.t],
    [my.b, mx.a, my.t*(1-mx.t)],
    [my.b, mx.b, my.t*mx.t]
  ];

  const acumulados = new Map();
  for(const [f,c,p] of pesos){
    if(p <= 0) continue;
    const k=f+','+c;
    acumulados.set(k,(acumulados.get(k)||0)+p);
  }

  for(const [k,peso] of acumulados){
    const [f,c]=k.split(',').map(Number);
    dibujarCapa(f,c,peso);
  }
  ctxSprite.globalAlpha=1;

  ctxSprite.fillStyle='rgba(0,0,0,0.7)';
  ctxSprite.fillRect(10,388,390,82);
  ctxSprite.fillStyle='white';
  ctxSprite.font='14px monospace';
  ctxSprite.fillText('Sector: '+Math.min(4,Math.floor(columnaPos))+','+Math.min(4,Math.floor(filaPos)),20,412);
  ctxSprite.fillText('Fade X: '+(mx.fade ? mx.t.toFixed(2) : 'NO')+'  Y: '+(my.fade ? my.t.toFixed(2) : 'NO'),20,435);
  ctxSprite.fillText('Lip sync: '+(hablando ? (bocaAbierta ? 'A' : 'cerrada') : 'reposo'),20,458);
}

// ======================================================
// SPRITE INICIAL
// ======================================================

dibujarSpritePorZonas(2.5,2.5);


// ======================================================
// LOOP
// ======================================================

function detectar(){


  // ====================================================
  // WEBCAM
  // ====================================================

  ctx.drawImage(

    video,

    0,
    0,
    canvasWebcam.width,
    canvasWebcam.height

  );


  // ====================================================
  // DETECTAR CARA
  // ====================================================

  const resultado =
    detector.detectForVideo(

      video,
      performance.now()

    );


  // ====================================================
  // GRID 5x5
  // ====================================================

  const sectorW =
    canvasWebcam.width / 5;

  const sectorH =
    canvasWebcam.height / 5;


  ctx.strokeStyle =
    "rgba(255,255,255,0.35)";

  ctx.lineWidth = 1;


  for(let i=1;i<5;i++){

    const x =
      i * sectorW;

    ctx.beginPath();

    ctx.moveTo(
      x,
      0
    );

    ctx.lineTo(
      x,
      canvasWebcam.height
    );

    ctx.stroke();

  }


  for(let i=1;i<5;i++){

    const y =
      i * sectorH;

    ctx.beginPath();

    ctx.moveTo(
      0,
      y
    );

    ctx.lineTo(
      canvasWebcam.width,
      y
    );

    ctx.stroke();

  }


  // ====================================================
  // SI HAY CARA
  // ====================================================

  if(resultado.detections.length > 0){

    const cara =
      resultado.detections[0];

    const caja =
      cara.boundingBox;


    const x =
      caja.originX;

    const y =
      caja.originY;

    const w =
      caja.width;

    const h =
      caja.height;


    // centro real detectado

    const cx =
      x + w/2;

    const cy =
      y + h/2;


    // ==================================================
    // SUAVIZAR CENTRO
    // ==================================================

    if(cxSuave === null){

      cxSuave = cx;
      cySuave = cy;

    }else{

      cxSuave +=
        (cx - cxSuave) *
        SUAVIZADO;

      cySuave +=
        (cy - cySuave) *
        SUAVIZADO;

    }


    // ==================================================
    // POSICIÓN DECIMAL DENTRO DEL 5x5
    //
    // El centro de cada sector coincide exactamente
    // con un sprite entero:
    //
    // centro pantalla => 2,2
    // ==================================================

    let columna = cxSuave / canvasWebcam.width * 5;
    let fila = cySuave / canvasWebcam.height * 5;


    columna =
      Math.max(
        0,
        Math.min(4.999999,columna)
      );

    fila =
      Math.max(
        0,
        Math.min(4.999999,fila)
      );


    // ==================================================
    // SECTOR PRINCIPAL PARA DEBUG
    // ==================================================

    const columnaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cxSuave / sectorW
          )
        )
      );

    const filaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cySuave / sectorH
          )
        )
      );


    // ==================================================
    // DESTACAR SECTOR
    // ==================================================

    ctx.fillStyle =
      "rgba(255,255,0,0.12)";

    ctx.fillRect(

      columnaSector * sectorW,
      filaSector * sectorH,

      sectorW,
      sectorH

    );


    // ==================================================
    // BOUNDING BOX
    // ==================================================

    ctx.strokeStyle =
      "lime";

    ctx.lineWidth = 3;

    ctx.strokeRect(
      x,
      y,
      w,
      h
    );


    // ==================================================
    // CENTRO REAL
    // ==================================================

    ctx.fillStyle =
      "red";

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      5,
      0,
      Math.PI*2
    );

    ctx.fill();


    // ==================================================
    // CENTRO SUAVIZADO
    // ==================================================

    ctx.fillStyle =
      "yellow";

    ctx.beginPath();

    ctx.arc(
      cxSuave,
      cySuave,
      7,
      0,
      Math.PI*2
    );

    ctx.fill();


    // cruz

    ctx.strokeStyle =
      "yellow";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
      cxSuave-20,
      cySuave
    );

    ctx.lineTo(
      cxSuave+20,
      cySuave
    );

    ctx.moveTo(
      cxSuave,
      cySuave-20
    );

    ctx.lineTo(
      cxSuave,
      cySuave+20
    );

    ctx.stroke();


    // ==================================================
    // DEBUG WEBCAM
    // ==================================================

    ctx.fillStyle =
      "rgba(0,0,0,0.7)";

    ctx.fillRect(
      10,
      390,
      300,
      80
    );


    ctx.fillStyle =
      "white";

    ctx.font =
      "14px monospace";


    ctx.fillText(
      "Centro: " +
      Math.round(cxSuave) +
      ", " +
      Math.round(cySuave),
      20,
      415
    );


    ctx.fillText(
      "Sprite X: " +
      columna.toFixed(2),
      20,
      438
    );


    ctx.fillText(
      "Sprite Y: " +
      fila.toFixed(2),
      20,
      461
    );


    // ==================================================
    // SPRITE CON FADE
    // ==================================================

    dibujarSpritePorZonas(fila,columna);

  }


  requestAnimationFrame(
    detectar
  );

}


// ======================================================
// CHATBOT OLLAMA + VOZ: EL AVATAR ES LA INTERFAZ
// ======================================================
const textoUsuario=document.querySelector('#textoUsuario');
const conversacion=document.querySelector('#conversacion');
const btnEnviar=document.querySelector('#enviar');
const btnMicro=document.querySelector('#microfono');

function bocadillo(texto,quien){
  const d=document.createElement('div');
  d.className='mensaje '+quien;
  d.textContent=texto;
  conversacion.appendChild(d);
  conversacion.scrollTop=conversacion.scrollHeight;
  return d;
}

async function preguntar(texto){
  texto=texto.trim();
  if(!texto) return;
  bocadillo(texto,'yo');
  textoUsuario.value='';
  const pensando=bocadillo('Pensando...','maquina');
  try{
    const r=await fetch('ollama.php',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({mensaje:texto})
    });
    if(!r.ok) throw new Error('HTTP '+r.status);
    const datos=await r.json();
    pensando.remove();
    const respuesta=datos.respuesta || 'No he podido responder.';
    bocadillo(respuesta,'maquina');
    speechSynthesis.cancel();
    detenerLipSync();

    const voz=new SpeechSynthesisUtterance(respuesta);
    voz.lang='es-ES';

    voz.onstart = () => iniciarLipSync();
    voz.onend = () => detenerLipSync();
    voz.onerror = () => detenerLipSync();

    speechSynthesis.speak(voz);
  }catch(e){
    pensando.remove();
    console.error(e);
    bocadillo('No he podido conectar con Ollama.','maquina');
  }
}

btnEnviar.onclick=()=>preguntar(textoUsuario.value);
textoUsuario.addEventListener('keydown',e=>{if(e.key==='Enter') preguntar(textoUsuario.value);});
btnMicro.onclick=()=>{
  const SR=window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ bocadillo('Este navegador no dispone de SpeechRecognition.','maquina'); return; }
  const rec=new SR();
  rec.lang='es-ES';
  rec.onresult=e=>preguntar(e.results[0][0].transcript);
  rec.onerror=e=>console.error('SpeechRecognition:',e.error);
  rec.start();
};

// ======================================================
// START
// ======================================================

detectar();

</script>

</body>
</html>
```
**008-avatar-minimal-ollama.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Avatar IA con Ollama</title>

  <style>
    *{box-sizing:border-box}
    html,body{width:100%;height:100%;margin:0;overflow:hidden}
    body{background:#eee;font-family:Arial,sans-serif}

    /* El avatar es la interfaz principal */
    #pantalla{position:fixed;inset:0;background:#eee}
    #avatar{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
    #canvasSprite{width:100%;height:100%;object-fit:contain;display:block}

    /* Webcam PiP */
    #webcam{
      position:fixed;right:22px;top:22px;
      width:220px;height:165px;
      border-radius:16px;overflow:hidden;
      background:#111;
      box-shadow:0 8px 30px #0005;
      z-index:20;
      transition:.25s ease;
    }
    #webcam.minimizada{width:48px;height:48px;border-radius:24px}
    #video{
      position:absolute;inset:0;width:100%;height:100%;
      object-fit:cover;transform:scaleX(-1);
    }
    #canvasWebcam{display:none}

    #minimizarWebcam{
      position:absolute;right:8px;top:8px;z-index:22;
      width:32px;height:32px;border:0;border-radius:50%;
      background:#0009;color:white;font-size:20px;line-height:30px;
      cursor:pointer;backdrop-filter:blur(5px);
    }
    #webcam.minimizada #video{opacity:0}
    #webcam.minimizada #minimizarWebcam{right:8px;top:8px}

    /* Dictado flotante */
    #microfono{
      position:fixed;right:30px;bottom:30px;z-index:30;
      width:68px;height:68px;border:0;border-radius:50%;
      background:dodgerblue;color:white;font-size:30px;
      cursor:pointer;box-shadow:0 6px 24px #0004;
      transition:.2s ease;
    }
    #microfono:hover{transform:scale(1.08)}
    #microfono.escuchando{transform:scale(1.12);box-shadow:0 0 0 10px #1e90ff33,0 6px 24px #0004}
    #microfono.pensando{opacity:.65;cursor:wait}

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body,#pantalla{
      background:var(--azul-claro);
      color:var(--negro);
    }

    #pantalla{
      background:radial-gradient(ellipse at center,#fff 0%,var(--azul-claro) 72%);
    }

    #webcam{
      border:2px solid var(--azul);
      background:var(--negro);
      box-shadow:0 12px 32px #11182730;
    }

    #minimizarWebcam{
      background:var(--azul);
      color:var(--blanco);
    }

    #microfono{
      background:var(--naranja);
      color:var(--blanco);
      box-shadow:0 8px 26px #11182730;
    }

    #microfono:hover{background:var(--azul)}
    #microfono.escuchando{box-shadow:0 0 0 10px #f9731633,0 8px 26px #11182730}
    #microfono:focus-visible,#minimizarWebcam:focus-visible{outline:3px solid var(--naranja);outline-offset:3px}

    @media(max-width:600px){
      #webcam{right:12px;top:12px;width:144px;height:108px;border-radius:12px}
      #webcam.minimizada{width:44px;height:44px}
      #microfono{right:16px;bottom:16px;width:58px;height:58px}
    }
  </style>
</head>

<body>
<div id="pantalla">
  <div id="avatar">
    <canvas id="canvasSprite" width="640" height="480"></canvas>
  </div>

  <div id="webcam">
    <video id="video" width="640" height="480" autoplay muted playsinline></video>
    <canvas id="canvasWebcam" width="640" height="480"></canvas>
    <button id="minimizarWebcam" title="Minimizar webcam">−</button>
  </div>
</div>

<button id="microfono" title="Hablar con el avatar">🎤</button>

<script type="module">

import {
  FaceDetector,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


// ======================================================
// ELEMENTOS
// ======================================================

const video = document.querySelector("#video");

const canvasWebcam =
  document.querySelector("#canvasWebcam");

const ctx =
  canvasWebcam.getContext("2d");

const canvasSprite =
  document.querySelector("#canvasSprite");

const ctxSprite =
  canvasSprite.getContext("2d");


// ======================================================
// SPRITESHEETS: BOCA CERRADA + BOCA ABIERTA (A)
// Ambos deben ser 5x5 y tener exactamente la misma disposición.
// ======================================================

const spritesheet = new Image();
const spritesheetA = new Image();

spritesheet.src = "spritesheet.png";
spritesheetA.src = "spritesheetA.png";

await Promise.all([spritesheet, spritesheetA].map((img) =>
  new Promise((resolve,reject) => {
    img.onload = resolve;
    img.onerror = () => reject(new Error("No se ha podido cargar " + img.src));
  })
));

const COLUMNAS = 5;
const FILAS = 5;
const spriteW = spritesheet.width / COLUMNAS;
const spriteH = spritesheet.height / FILAS;

// Lip-sync simulado. Durante SpeechSynthesis alternamos las dos bocas.
let hablando = false;
let bocaAbierta = false;
let temporizadorBoca = null;

function iniciarLipSync(){
  detenerLipSync();
  hablando = true;
  bocaAbierta = true;

  const alternar = () => {
    if(!hablando) return;
    bocaAbierta = !bocaAbierta;
    // Ritmo ligeramente variable para que no parezca un metrónomo.
    temporizadorBoca = setTimeout(alternar, 90 + Math.random()*90);
  };

  temporizadorBoca = setTimeout(alternar, 110);
}

function detenerLipSync(){
  hablando = false;
  bocaAbierta = false;
  if(temporizadorBoca){
    clearTimeout(temporizadorBoca);
    temporizadorBoca = null;
  }
}

// ======================================================
// WEBCAM
// ======================================================

const stream =
  await navigator.mediaDevices.getUserMedia({

    video:{
      width:640,
      height:480
    }

  });

video.srcObject = stream;

await video.play();

console.log("Webcam funcionando");


// ======================================================
// MEDIAPIPE
// ======================================================

const vision =
  await FilesetResolver.forVisionTasks(

    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

  );


const detector =
  await FaceDetector.createFromOptions(

    vision,

    {

      baseOptions:{

        modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"

      },

      runningMode:"VIDEO",

      minDetectionConfidence:0.5

    }

  );

console.log("MediaPipe cargado");


// ======================================================
// SUAVIZADO DE LA POSICIÓN
// Reduce el temblor del detector.
// 0.05 = muy suave/lento
// 0.15 = suave
// 0.30 = más rápido
// 1.00 = sin suavizado
// ======================================================

const SUAVIZADO = 0.15;

let cxSuave = null;
let cySuave = null;


// ======================================================
// DIBUJAR UNA CAPA DEL SPRITE
// ======================================================

function dibujarCapa(fila, columna, alpha){

  if(alpha <= 0){
    return;
  }

  const sx =
    columna * spriteW;

  const sy =
    fila * spriteH;


  const escala = Math.min(

    canvasSprite.width / spriteW,
    canvasSprite.height / spriteH

  );


  const ancho =
    spriteW * escala;

  const alto =
    spriteH * escala;


  const dx =
    (canvasSprite.width - ancho) / 2;

  const dy =
    (canvasSprite.height - alto) / 2;


  ctxSprite.globalAlpha = alpha;

  const hojaActiva = (hablando && bocaAbierta) ? spritesheetA : spritesheet;

  ctxSprite.drawImage(

    hojaActiva,

    sx,
    sy,
    spriteW,
    spriteH,

    dx,
    dy,
    ancho,
    alto

  );
}


// ======================================================
// TRANSICIÓN ÚNICA CENTRADA EN CADA FRONTERA
//
// Antes cada frontera se calculaba dos veces:
// - al final de la celda anterior
// - al principio de la celda siguiente
// Eso reiniciaba el fade. Ahora cada frontera tiene UNA sola banda
// continua, centrada exactamente sobre el límite.
// ======================================================

const ZONA_FADE = 0.18; // ancho TOTAL de la transición, en fracción de celda

function mezclaEje(pos){
  // pos usa coordenadas de sector: 0..5.
  pos = Math.max(0, Math.min(5, pos));

  // Buscamos la frontera interior más cercana: 1,2,3,4.
  const frontera = Math.round(pos);
  const mediaZona = ZONA_FADE / 2;

  if(frontera >= 1 && frontera <= 4 &&
     Math.abs(pos - frontera) <= mediaZona){

    // Una única progresión 0 -> 1 atravesando la frontera.
    const inicio = frontera - mediaZona;
    const t = Math.max(0, Math.min(1,
      (pos - inicio) / ZONA_FADE
    ));

    return {
      a: frontera - 1,
      b: frontera,
      t: t,
      fade: true
    };
  }

  // Fuera de la estrecha banda no hay interpolación.
  const celda = Math.max(0, Math.min(4, Math.floor(pos)));
  return {a:celda, b:celda, t:0, fade:false};
}

function dibujarSpritePorZonas(filaPos, columnaPos){
  ctxSprite.clearRect(0,0,canvasSprite.width,canvasSprite.height);

  const mx = mezclaEje(columnaPos);
  const my = mezclaEje(filaPos);

  const pesos = [
    [my.a, mx.a, (1-my.t)*(1-mx.t)],
    [my.a, mx.b, (1-my.t)*mx.t],
    [my.b, mx.a, my.t*(1-mx.t)],
    [my.b, mx.b, my.t*mx.t]
  ];

  const acumulados = new Map();
  for(const [f,c,p] of pesos){
    if(p <= 0) continue;
    const k=f+','+c;
    acumulados.set(k,(acumulados.get(k)||0)+p);
  }

  for(const [k,peso] of acumulados){
    const [f,c]=k.split(',').map(Number);
    dibujarCapa(f,c,peso);
  }
  ctxSprite.globalAlpha=1;
}

// ======================================================
// SPRITE INICIAL
// ======================================================

dibujarSpritePorZonas(2.5,2.5);


// ======================================================
// LOOP
// ======================================================

function detectar(){


  // ====================================================
  // WEBCAM
  // ====================================================

  ctx.drawImage(

    video,

    0,
    0,
    canvasWebcam.width,
    canvasWebcam.height

  );


  // ====================================================
  // DETECTAR CARA
  // ====================================================

  const resultado =
    detector.detectForVideo(

      video,
      performance.now()

    );


  // ====================================================
  // GRID 5x5
  // ====================================================

  const sectorW =
    canvasWebcam.width / 5;

  const sectorH =
    canvasWebcam.height / 5;


  ctx.strokeStyle =
    "rgba(255,255,255,0.35)";

  ctx.lineWidth = 1;


  for(let i=1;i<5;i++){

    const x =
      i * sectorW;

    ctx.beginPath();

    ctx.moveTo(
      x,
      0
    );

    ctx.lineTo(
      x,
      canvasWebcam.height
    );

    ctx.stroke();

  }


  for(let i=1;i<5;i++){

    const y =
      i * sectorH;

    ctx.beginPath();

    ctx.moveTo(
      0,
      y
    );

    ctx.lineTo(
      canvasWebcam.width,
      y
    );

    ctx.stroke();

  }


  // ====================================================
  // SI HAY CARA
  // ====================================================

  if(resultado.detections.length > 0){

    const cara =
      resultado.detections[0];

    const caja =
      cara.boundingBox;


    const x =
      caja.originX;

    const y =
      caja.originY;

    const w =
      caja.width;

    const h =
      caja.height;


    // centro real detectado

    const cx =
      x + w/2;

    const cy =
      y + h/2;


    // ==================================================
    // SUAVIZAR CENTRO
    // ==================================================

    if(cxSuave === null){

      cxSuave = cx;
      cySuave = cy;

    }else{

      cxSuave +=
        (cx - cxSuave) *
        SUAVIZADO;

      cySuave +=
        (cy - cySuave) *
        SUAVIZADO;

    }


    // ==================================================
    // POSICIÓN DECIMAL DENTRO DEL 5x5
    //
    // El centro de cada sector coincide exactamente
    // con un sprite entero:
    //
    // centro pantalla => 2,2
    // ==================================================

    let columna = cxSuave / canvasWebcam.width * 5;
    let fila = cySuave / canvasWebcam.height * 5;


    columna =
      Math.max(
        0,
        Math.min(4.999999,columna)
      );

    fila =
      Math.max(
        0,
        Math.min(4.999999,fila)
      );


    // ==================================================
    // SECTOR PRINCIPAL PARA DEBUG
    // ==================================================

    const columnaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cxSuave / sectorW
          )
        )
      );

    const filaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cySuave / sectorH
          )
        )
      );


    // ==================================================
    // DESTACAR SECTOR
    // ==================================================

    ctx.fillStyle =
      "rgba(255,255,0,0.12)";

    ctx.fillRect(

      columnaSector * sectorW,
      filaSector * sectorH,

      sectorW,
      sectorH

    );


    // ==================================================
    // BOUNDING BOX
    // ==================================================

    ctx.strokeStyle =
      "lime";

    ctx.lineWidth = 3;

    ctx.strokeRect(
      x,
      y,
      w,
      h
    );


    // ==================================================
    // CENTRO REAL
    // ==================================================

    ctx.fillStyle =
      "red";

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      5,
      0,
      Math.PI*2
    );

    ctx.fill();


    // ==================================================
    // CENTRO SUAVIZADO
    // ==================================================

    ctx.fillStyle =
      "yellow";

    ctx.beginPath();

    ctx.arc(
      cxSuave,
      cySuave,
      7,
      0,
      Math.PI*2
    );

    ctx.fill();


    // cruz

    ctx.strokeStyle =
      "yellow";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
      cxSuave-20,
      cySuave
    );

    ctx.lineTo(
      cxSuave+20,
      cySuave
    );

    ctx.moveTo(
      cxSuave,
      cySuave-20
    );

    ctx.lineTo(
      cxSuave,
      cySuave+20
    );

    ctx.stroke();


    // ==================================================
    // DEBUG WEBCAM
    // ==================================================

    ctx.fillStyle =
      "rgba(0,0,0,0.7)";

    ctx.fillRect(
      10,
      390,
      300,
      80
    );


    ctx.fillStyle =
      "white";

    ctx.font =
      "14px monospace";


    ctx.fillText(
      "Centro: " +
      Math.round(cxSuave) +
      ", " +
      Math.round(cySuave),
      20,
      415
    );


    ctx.fillText(
      "Sprite X: " +
      columna.toFixed(2),
      20,
      438
    );


    ctx.fillText(
      "Sprite Y: " +
      fila.toFixed(2),
      20,
      461
    );


    // ==================================================
    // SPRITE CON FADE
    // ==================================================

    dibujarSpritePorZonas(fila,columna);

  }


  requestAnimationFrame(
    detectar
  );

}


// ======================================================
// CHATBOT OLLAMA + VOZ — INTERFAZ MÍNIMA
// ======================================================
const btnMicro = document.querySelector('#microfono');
const webcam = document.querySelector('#webcam');
const btnMinimizar = document.querySelector('#minimizarWebcam');

btnMinimizar.addEventListener('click', () => {
  webcam.classList.toggle('minimizada');
  btnMinimizar.textContent =
    webcam.classList.contains('minimizada') ? '+' : '−';
});

async function preguntar(texto){
  texto = texto.trim();
  if(!texto) return;

  btnMicro.classList.remove('escuchando');
  btnMicro.classList.add('pensando');
  btnMicro.textContent = '…';

  try{
    const r = await fetch('ollama.php',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({mensaje:texto})
    });

    if(!r.ok) throw new Error('HTTP '+r.status);

    const datos = await r.json();
    const respuesta = datos.respuesta || 'No he podido responder.';

    speechSynthesis.cancel();
    detenerLipSync();

    const voz = new SpeechSynthesisUtterance(respuesta);
    voz.lang = 'es-ES';

    voz.onstart = () => {
      btnMicro.classList.remove('pensando');
      btnMicro.textContent = '🎤';
      iniciarLipSync();
    };

    voz.onend = () => {
      detenerLipSync();
      btnMicro.textContent = '🎤';
    };

    voz.onerror = () => {
      detenerLipSync();
      btnMicro.classList.remove('pensando');
      btnMicro.textContent = '🎤';
    };

    speechSynthesis.speak(voz);

  }catch(e){
    console.error(e);
    detenerLipSync();
    btnMicro.classList.remove('pensando');
    btnMicro.textContent = '🎤';
  }
}

btnMicro.addEventListener('click', () => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(!SR){
    console.error('Este navegador no dispone de SpeechRecognition.');
    return;
  }

  speechSynthesis.cancel();
  detenerLipSync();

  const rec = new SR();
  rec.lang = 'es-ES';
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  btnMicro.classList.add('escuchando');
  btnMicro.textContent = '●';

  rec.onresult = e => {
    const texto = e.results[0][0].transcript;
    preguntar(texto);
  };

  rec.onerror = e => {
    console.error('SpeechRecognition:',e.error);
    btnMicro.classList.remove('escuchando');
    btnMicro.textContent = '🎤';
  };

  rec.onend = () => {
    if(!btnMicro.classList.contains('pensando')){
      btnMicro.classList.remove('escuchando');
      btnMicro.textContent = '🎤';
    }
  };

  rec.start();
});

// ======================================================
// START
// ======================================================

detectar();

</script>

</body>
</html>
```
**009-avatar-minimal-corregido.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Avatar IA con Ollama</title>

  <style>
    *{box-sizing:border-box}
    html,body{width:100%;height:100%;margin:0;overflow:hidden}
    body{background:#eee;font-family:Arial,sans-serif}

    /* El avatar es la interfaz principal */
    #pantalla{position:fixed;inset:0;background:#eee}
    #avatar{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
    #canvasSprite{width:100%;height:100%;object-fit:contain;display:block}

    /* Webcam PiP */
    #webcam{
      position:fixed;right:22px;top:22px;
      width:220px;height:165px;
      border-radius:16px;overflow:hidden;
      background:#111;
      box-shadow:0 8px 30px #0005;
      z-index:20;
      transition:.25s ease;
    }
    #webcam.minimizada{width:48px;height:48px;border-radius:24px}
    #video{
      position:absolute;inset:0;width:100%;height:100%;
      object-fit:cover;transform:scaleX(-1);
    }
    #canvasWebcam{display:none}

    #minimizarWebcam{
      position:absolute;right:8px;top:8px;z-index:22;
      width:32px;height:32px;border:0;border-radius:50%;
      background:#0009;color:white;font-size:20px;line-height:30px;
      cursor:pointer;backdrop-filter:blur(5px);
    }
    #webcam.minimizada #video{opacity:0}
    #webcam.minimizada #minimizarWebcam{right:8px;top:8px}

    /* Dictado flotante */
    #microfono{
      position:fixed;right:30px;bottom:30px;z-index:30;
      width:68px;height:68px;border:0;border-radius:50%;
      background:dodgerblue;color:white;font-size:30px;
      cursor:pointer;box-shadow:0 6px 24px #0004;
      transition:.2s ease;
    }
    #microfono:hover{transform:scale(1.08)}
    #microfono.escuchando{transform:scale(1.12);box-shadow:0 0 0 10px #1e90ff33,0 6px 24px #0004}
    #microfono.pensando{opacity:.65;cursor:wait}

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body,#pantalla{
      background:var(--azul-claro);
      color:var(--negro);
    }

    #pantalla{
      background:radial-gradient(ellipse at center,#fff 0%,var(--azul-claro) 72%);
    }

    #webcam{
      border:2px solid var(--azul);
      background:var(--negro);
      box-shadow:0 12px 32px #11182730;
    }

    #minimizarWebcam{
      background:var(--azul);
      color:var(--blanco);
    }

    #microfono{
      background:var(--naranja);
      color:var(--blanco);
      box-shadow:0 8px 26px #11182730;
    }

    #microfono:hover{background:var(--azul)}
    #microfono.escuchando{box-shadow:0 0 0 10px #f9731633,0 8px 26px #11182730}
    #microfono:focus-visible,#minimizarWebcam:focus-visible{outline:3px solid var(--naranja);outline-offset:3px}

    @media(max-width:600px){
      #webcam{right:12px;top:12px;width:144px;height:108px;border-radius:12px}
      #webcam.minimizada{width:44px;height:44px}
      #microfono{right:16px;bottom:16px;width:58px;height:58px}
    }
  </style>
</head>

<body>
<div id="pantalla">
  <div id="avatar">
    <canvas id="canvasSprite" width="640" height="480"></canvas>
  </div>

  <div id="webcam">
    <video id="video" width="640" height="480" autoplay muted playsinline></video>
    <canvas id="canvasWebcam" width="640" height="480"></canvas>
    <button id="minimizarWebcam" title="Minimizar webcam">−</button>
  </div>
</div>

<button id="microfono" title="Hablar con el avatar">🎤</button>

<script type="module">

import {
  FaceDetector,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


// ======================================================
// ELEMENTOS
// ======================================================

const video = document.querySelector("#video");

const canvasWebcam =
  document.querySelector("#canvasWebcam");

const ctx =
  canvasWebcam.getContext("2d");

const canvasSprite =
  document.querySelector("#canvasSprite");

const ctxSprite =
  canvasSprite.getContext("2d");


// ======================================================
// SPRITESHEETS: BOCA CERRADA + BOCA ABIERTA (A)
// Ambos deben ser 5x5 y tener exactamente la misma disposición.
// ======================================================

const spritesheet = new Image();
const spritesheetA = new Image();

spritesheet.src = "spritesheet.png";
spritesheetA.src = "spritesheetA.png";

await Promise.all([spritesheet, spritesheetA].map((img) =>
  new Promise((resolve,reject) => {
    img.onload = resolve;
    img.onerror = () => reject(new Error("No se ha podido cargar " + img.src));
  })
));

const COLUMNAS = 5;
const FILAS = 5;
const spriteW = spritesheet.width / COLUMNAS;
const spriteH = spritesheet.height / FILAS;

// Píxeles que se recortan POR CADA LADO de cada sprite.
// Súbelo si todavía aparecen líneas negras entre las celdas.
// Ejemplos: 0 = sin recorte, 2 = ligero, 4 = más agresivo.
const RECORTE_SPRITE = 3;

// Lip-sync simulado. Durante SpeechSynthesis alternamos las dos bocas.
let hablando = false;
let bocaAbierta = false;
let temporizadorBoca = null;

function iniciarLipSync(){
  detenerLipSync();
  hablando = true;
  bocaAbierta = true;

  const alternar = () => {
    if(!hablando) return;
    bocaAbierta = !bocaAbierta;
    // Ritmo ligeramente variable para que no parezca un metrónomo.
    temporizadorBoca = setTimeout(alternar, 90 + Math.random()*90);
  };

  temporizadorBoca = setTimeout(alternar, 110);
}

function detenerLipSync(){
  hablando = false;
  bocaAbierta = false;
  if(temporizadorBoca){
    clearTimeout(temporizadorBoca);
    temporizadorBoca = null;
  }
}

// ======================================================
// WEBCAM
// ======================================================

const stream =
  await navigator.mediaDevices.getUserMedia({

    video:{
      width:640,
      height:480
    }

  });

video.srcObject = stream;

await video.play();

console.log("Webcam funcionando");


// ======================================================
// MEDIAPIPE
// ======================================================

const vision =
  await FilesetResolver.forVisionTasks(

    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

  );


const detector =
  await FaceDetector.createFromOptions(

    vision,

    {

      baseOptions:{

        modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite"

      },

      runningMode:"VIDEO",

      minDetectionConfidence:0.5

    }

  );

console.log("MediaPipe cargado");


// ======================================================
// SUAVIZADO DE LA POSICIÓN
// Reduce el temblor del detector.
// 0.05 = muy suave/lento
// 0.15 = suave
// 0.30 = más rápido
// 1.00 = sin suavizado
// ======================================================

const SUAVIZADO = 0.15;

let cxSuave = null;
let cySuave = null;


// ======================================================
// DIBUJAR UNA CAPA DEL SPRITE
// ======================================================

function dibujarCapa(fila, columna, alpha){

  if(alpha <= 0){
    return;
  }

  const sx =
    columna * spriteW + RECORTE_SPRITE;

  const sy =
    fila * spriteH + RECORTE_SPRITE;

  const sw =
    spriteW - RECORTE_SPRITE * 2;

  const sh =
    spriteH - RECORTE_SPRITE * 2;


  const escala = Math.min(

    canvasSprite.width / spriteW,
    canvasSprite.height / spriteH

  );


  const ancho =
    spriteW * escala;

  const alto =
    spriteH * escala;


  const dx =
    (canvasSprite.width - ancho) / 2;

  const dy =
    (canvasSprite.height - alto) / 2;


  ctxSprite.globalAlpha = alpha;

  const hojaActiva = (hablando && bocaAbierta) ? spritesheetA : spritesheet;

  ctxSprite.drawImage(

    hojaActiva,

    sx,
    sy,
    sw,
    sh,

    dx,
    dy,
    ancho,
    alto

  );
}


// ======================================================
// TRANSICIÓN ÚNICA CENTRADA EN CADA FRONTERA
//
// Antes cada frontera se calculaba dos veces:
// - al final de la celda anterior
// - al principio de la celda siguiente
// Eso reiniciaba el fade. Ahora cada frontera tiene UNA sola banda
// continua, centrada exactamente sobre el límite.
// ======================================================

const ZONA_FADE = 0.18; // ancho TOTAL de la transición, en fracción de celda

function mezclaEje(pos){
  // pos usa coordenadas de sector: 0..5.
  pos = Math.max(0, Math.min(5, pos));

  // Buscamos la frontera interior más cercana: 1,2,3,4.
  const frontera = Math.round(pos);
  const mediaZona = ZONA_FADE / 2;

  if(frontera >= 1 && frontera <= 4 &&
     Math.abs(pos - frontera) <= mediaZona){

    // Una única progresión 0 -> 1 atravesando la frontera.
    const inicio = frontera - mediaZona;
    const t = Math.max(0, Math.min(1,
      (pos - inicio) / ZONA_FADE
    ));

    return {
      a: frontera - 1,
      b: frontera,
      t: t,
      fade: true
    };
  }

  // Fuera de la estrecha banda no hay interpolación.
  const celda = Math.max(0, Math.min(4, Math.floor(pos)));
  return {a:celda, b:celda, t:0, fade:false};
}

function dibujarSpritePorZonas(filaPos, columnaPos){
  ctxSprite.clearRect(0,0,canvasSprite.width,canvasSprite.height);

  const mx = mezclaEje(columnaPos);
  const my = mezclaEje(filaPos);

  const pesos = [
    [my.a, mx.a, (1-my.t)*(1-mx.t)],
    [my.a, mx.b, (1-my.t)*mx.t],
    [my.b, mx.a, my.t*(1-mx.t)],
    [my.b, mx.b, my.t*mx.t]
  ];

  const acumulados = new Map();
  for(const [f,c,p] of pesos){
    if(p <= 0) continue;
    const k=f+','+c;
    acumulados.set(k,(acumulados.get(k)||0)+p);
  }

  for(const [k,peso] of acumulados){
    const [f,c]=k.split(',').map(Number);
    dibujarCapa(f,c,peso);
  }
  ctxSprite.globalAlpha=1;
}

// ======================================================
// SPRITE INICIAL
// ======================================================

dibujarSpritePorZonas(2.5,2.5);


// ======================================================
// LOOP
// ======================================================

function detectar(){


  // ====================================================
  // WEBCAM
  // ====================================================

  ctx.drawImage(

    video,

    0,
    0,
    canvasWebcam.width,
    canvasWebcam.height

  );


  // ====================================================
  // DETECTAR CARA
  // ====================================================

  const resultado =
    detector.detectForVideo(

      video,
      performance.now()

    );


  // ====================================================
  // GRID 5x5
  // ====================================================

  const sectorW =
    canvasWebcam.width / 5;

  const sectorH =
    canvasWebcam.height / 5;


  ctx.strokeStyle =
    "rgba(255,255,255,0.35)";

  ctx.lineWidth = 1;


  for(let i=1;i<5;i++){

    const x =
      i * sectorW;

    ctx.beginPath();

    ctx.moveTo(
      x,
      0
    );

    ctx.lineTo(
      x,
      canvasWebcam.height
    );

    ctx.stroke();

  }


  for(let i=1;i<5;i++){

    const y =
      i * sectorH;

    ctx.beginPath();

    ctx.moveTo(
      0,
      y
    );

    ctx.lineTo(
      canvasWebcam.width,
      y
    );

    ctx.stroke();

  }


  // ====================================================
  // SI HAY CARA
  // ====================================================

  if(resultado.detections.length > 0){

    const cara =
      resultado.detections[0];

    const caja =
      cara.boundingBox;


    const x =
      caja.originX;

    const y =
      caja.originY;

    const w =
      caja.width;

    const h =
      caja.height;


    // centro real detectado

    const cx =
      x + w/2;

    const cy =
      y + h/2;


    // ==================================================
    // SUAVIZAR CENTRO
    // ==================================================

    if(cxSuave === null){

      cxSuave = cx;
      cySuave = cy;

    }else{

      cxSuave +=
        (cx - cxSuave) *
        SUAVIZADO;

      cySuave +=
        (cy - cySuave) *
        SUAVIZADO;

    }


    // ==================================================
    // POSICIÓN DECIMAL DENTRO DEL 5x5
    //
    // El centro de cada sector coincide exactamente
    // con un sprite entero:
    //
    // centro pantalla => 2,2
    // ==================================================

    // Horizontal invertido para que el avatar gire en la dirección correcta.
    // Vertical se mantiene tal cual.
    let columna = 5 - (cxSuave / canvasWebcam.width * 5);
    let fila = cySuave / canvasWebcam.height * 5;


    columna =
      Math.max(
        0,
        Math.min(4.999999,columna)
      );

    fila =
      Math.max(
        0,
        Math.min(4.999999,fila)
      );


    // ==================================================
    // SECTOR PRINCIPAL PARA DEBUG
    // ==================================================

    const columnaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cxSuave / sectorW
          )
        )
      );

    const filaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cySuave / sectorH
          )
        )
      );


    // ==================================================
    // DESTACAR SECTOR
    // ==================================================

    ctx.fillStyle =
      "rgba(255,255,0,0.12)";

    ctx.fillRect(

      columnaSector * sectorW,
      filaSector * sectorH,

      sectorW,
      sectorH

    );


    // ==================================================
    // BOUNDING BOX
    // ==================================================

    ctx.strokeStyle =
      "lime";

    ctx.lineWidth = 3;

    ctx.strokeRect(
      x,
      y,
      w,
      h
    );


    // ==================================================
    // CENTRO REAL
    // ==================================================

    ctx.fillStyle =
      "red";

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      5,
      0,
      Math.PI*2
    );

    ctx.fill();


    // ==================================================
    // CENTRO SUAVIZADO
    // ==================================================

    ctx.fillStyle =
      "yellow";

    ctx.beginPath();

    ctx.arc(
      cxSuave,
      cySuave,
      7,
      0,
      Math.PI*2
    );

    ctx.fill();


    // cruz

    ctx.strokeStyle =
      "yellow";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
      cxSuave-20,
      cySuave
    );

    ctx.lineTo(
      cxSuave+20,
      cySuave
    );

    ctx.moveTo(
      cxSuave,
      cySuave-20
    );

    ctx.lineTo(
      cxSuave,
      cySuave+20
    );

    ctx.stroke();


    // ==================================================
    // DEBUG WEBCAM
    // ==================================================

    ctx.fillStyle =
      "rgba(0,0,0,0.7)";

    ctx.fillRect(
      10,
      390,
      300,
      80
    );


    ctx.fillStyle =
      "white";

    ctx.font =
      "14px monospace";


    ctx.fillText(
      "Centro: " +
      Math.round(cxSuave) +
      ", " +
      Math.round(cySuave),
      20,
      415
    );


    ctx.fillText(
      "Sprite X: " +
      columna.toFixed(2),
      20,
      438
    );


    ctx.fillText(
      "Sprite Y: " +
      fila.toFixed(2),
      20,
      461
    );


    // ==================================================
    // SPRITE CON FADE
    // ==================================================

    dibujarSpritePorZonas(fila,columna);

  }


  requestAnimationFrame(
    detectar
  );

}


// ======================================================
// CHATBOT OLLAMA + VOZ — INTERFAZ MÍNIMA
// ======================================================
const btnMicro = document.querySelector('#microfono');
const webcam = document.querySelector('#webcam');
const btnMinimizar = document.querySelector('#minimizarWebcam');

btnMinimizar.addEventListener('click', () => {
  webcam.classList.toggle('minimizada');
  btnMinimizar.textContent =
    webcam.classList.contains('minimizada') ? '+' : '−';
});

async function preguntar(texto){
  texto = texto.trim();
  if(!texto) return;

  btnMicro.classList.remove('escuchando');
  btnMicro.classList.add('pensando');
  btnMicro.textContent = '…';

  try{
    const r = await fetch('ollama.php',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({mensaje:texto})
    });

    if(!r.ok) throw new Error('HTTP '+r.status);

    const datos = await r.json();
    const respuesta = datos.respuesta || 'No he podido responder.';

    speechSynthesis.cancel();
    detenerLipSync();

    const voz = new SpeechSynthesisUtterance(respuesta);
    voz.lang = 'es-EN';

    voz.onstart = () => {
      btnMicro.classList.remove('pensando');
      btnMicro.textContent = '🎤';
      iniciarLipSync();
    };

    voz.onend = () => {
      detenerLipSync();
      btnMicro.textContent = '🎤';
    };

    voz.onerror = () => {
      detenerLipSync();
      btnMicro.classList.remove('pensando');
      btnMicro.textContent = '🎤';
    };

    speechSynthesis.speak(voz);

  }catch(e){
    console.error(e);
    detenerLipSync();
    btnMicro.classList.remove('pensando');
    btnMicro.textContent = '🎤';
  }
}

btnMicro.addEventListener('click', () => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(!SR){
    console.error('Este navegador no dispone de SpeechRecognition.');
    return;
  }

  speechSynthesis.cancel();
  detenerLipSync();

  const rec = new SR();
  rec.lang = 'es-EN';
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  btnMicro.classList.add('escuchando');
  btnMicro.textContent = '●';

  rec.onresult = e => {
    const texto = e.results[0][0].transcript;
    preguntar(texto);
  };

  rec.onerror = e => {
    console.error('SpeechRecognition:',e.error);
    btnMicro.classList.remove('escuchando');
    btnMicro.textContent = '🎤';
  };

  rec.onend = () => {
    if(!btnMicro.classList.contains('pensando')){
      btnMicro.classList.remove('escuchando');
      btnMicro.textContent = '🎤';
    }
  };

  rec.start();
});

// ======================================================
// START
// ======================================================

detectar();

</script>

</body>
</html>

```
**010-avatar-face-landmarker.html**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Avatar IA con Ollama</title>

  <style>
    *{box-sizing:border-box}
    html,body{width:100%;height:100%;margin:0;overflow:hidden}
    body{background:#eee;font-family:Arial,sans-serif}

    /* El avatar es la interfaz principal */
    #pantalla{position:fixed;inset:0;background:#eee}
    #avatar{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
    #canvasSprite{width:100%;height:100%;object-fit:contain;display:block}

    /* Webcam PiP */
    #webcam{
      position:fixed;right:22px;top:22px;
      width:220px;height:165px;
      border-radius:16px;overflow:hidden;
      background:#111;
      box-shadow:0 8px 30px #0005;
      z-index:20;
      transition:.25s ease;
    }
    #webcam.minimizada{width:48px;height:48px;border-radius:24px}
    #video{
      position:absolute;inset:0;width:100%;height:100%;
      object-fit:cover;transform:scaleX(-1);
    }
    #canvasWebcam{display:none}

    #minimizarWebcam{
      position:absolute;right:8px;top:8px;z-index:22;
      width:32px;height:32px;border:0;border-radius:50%;
      background:#0009;color:white;font-size:20px;line-height:30px;
      cursor:pointer;backdrop-filter:blur(5px);
    }
    #webcam.minimizada #video{opacity:0}
    #webcam.minimizada #minimizarWebcam{right:8px;top:8px}

    /* Dictado flotante */
    #microfono{
      position:fixed;right:30px;bottom:30px;z-index:30;
      width:68px;height:68px;border:0;border-radius:50%;
      background:dodgerblue;color:white;font-size:30px;
      cursor:pointer;box-shadow:0 6px 24px #0004;
      transition:.2s ease;
    }
    #microfono:hover{transform:scale(1.08)}
    #microfono.escuchando{transform:scale(1.12);box-shadow:0 0 0 10px #1e90ff33,0 6px 24px #0004}
    #microfono.pensando{opacity:.65;cursor:wait}

    :root{
      color-scheme:light;
      --naranja:#f97316;
      --azul:#1d4ed8;
      --azul-claro:#eff6ff;
      --blanco:#fff;
      --negro:#111827;
    }

    body,#pantalla{
      background:var(--azul-claro);
      color:var(--negro);
    }

    #pantalla{
      background:radial-gradient(ellipse at center,#fff 0%,var(--azul-claro) 72%);
    }

    #webcam{
      border:2px solid var(--azul);
      background:var(--negro);
      box-shadow:0 12px 32px #11182730;
    }

    #minimizarWebcam{
      background:var(--azul);
      color:var(--blanco);
    }

    #microfono{
      background:var(--naranja);
      color:var(--blanco);
      box-shadow:0 8px 26px #11182730;
    }

    #microfono:hover{background:var(--azul)}
    #microfono.escuchando{box-shadow:0 0 0 10px #f9731633,0 8px 26px #11182730}
    #microfono:focus-visible,#minimizarWebcam:focus-visible{outline:3px solid var(--naranja);outline-offset:3px}

    @media(max-width:600px){
      #webcam{right:12px;top:12px;width:144px;height:108px;border-radius:12px}
      #webcam.minimizada{width:44px;height:44px}
      #microfono{right:16px;bottom:16px;width:58px;height:58px}
    }
  </style>
</head>

<body>
<div id="pantalla">
  <div id="avatar">
    <canvas id="canvasSprite" width="640" height="480"></canvas>
  </div>

  <div id="webcam">
    <video id="video" width="640" height="480" autoplay muted playsinline></video>
    <canvas id="canvasWebcam" width="640" height="480"></canvas>
    <button id="minimizarWebcam" title="Minimizar webcam">−</button>
  </div>
</div>

<button id="microfono" title="Hablar con el avatar">🎤</button>

<script type="module">

import {
  FaceLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";


// ======================================================
// ELEMENTOS
// ======================================================

const video = document.querySelector("#video");

const canvasWebcam =
  document.querySelector("#canvasWebcam");

const ctx =
  canvasWebcam.getContext("2d");

const canvasSprite =
  document.querySelector("#canvasSprite");

const ctxSprite =
  canvasSprite.getContext("2d");


// ======================================================
// SPRITESHEETS: BOCA CERRADA + BOCA ABIERTA (A)
// Ambos deben ser 5x5 y tener exactamente la misma disposición.
// ======================================================

const spritesheet = new Image();
const spritesheetA = new Image();

spritesheet.src = "spritesheet.png";
spritesheetA.src = "spritesheetA.png";

await Promise.all([spritesheet, spritesheetA].map((img) =>
  new Promise((resolve,reject) => {
    img.onload = resolve;
    img.onerror = () => reject(new Error("No se ha podido cargar " + img.src));
  })
));

const COLUMNAS = 5;
const FILAS = 5;
const spriteW = spritesheet.width / COLUMNAS;
const spriteH = spritesheet.height / FILAS;

// Píxeles que se recortan POR CADA LADO de cada sprite.
// Súbelo si todavía aparecen líneas negras entre las celdas.
// Ejemplos: 0 = sin recorte, 2 = ligero, 4 = más agresivo.
const RECORTE_SPRITE = 3;

// Lip-sync simulado. Durante SpeechSynthesis alternamos las dos bocas.
let hablando = false;
let bocaAbierta = false;
let temporizadorBoca = null;

function iniciarLipSync(){
  detenerLipSync();
  hablando = true;
  bocaAbierta = true;

  const alternar = () => {
    if(!hablando) return;
    bocaAbierta = !bocaAbierta;
    // Ritmo ligeramente variable para que no parezca un metrónomo.
    temporizadorBoca = setTimeout(alternar, 90 + Math.random()*90);
  };

  temporizadorBoca = setTimeout(alternar, 110);
}

function detenerLipSync(){
  hablando = false;
  bocaAbierta = false;
  if(temporizadorBoca){
    clearTimeout(temporizadorBoca);
    temporizadorBoca = null;
  }
}

// ======================================================
// WEBCAM
// ======================================================

const stream =
  await navigator.mediaDevices.getUserMedia({

    video:{
      width:640,
      height:480
    }

  });

video.srcObject = stream;

await video.play();

console.log("Webcam funcionando");


// ======================================================
// MEDIAPIPE
// ======================================================

const vision =
  await FilesetResolver.forVisionTasks(

    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"

  );


const detector =
  await FaceLandmarker.createFromOptions(
    vision,
    {
      baseOptions:{
        modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task"
      },
      runningMode:"VIDEO",
      numFaces:1,
      minFaceDetectionConfidence:0.5,
      minFacePresenceConfidence:0.5,
      minTrackingConfidence:0.5
    }
  );

console.log("MediaPipe cargado");


// ======================================================
// SUAVIZADO DE LA POSICIÓN
// Reduce el temblor del detector.
// 0.05 = muy suave/lento
// 0.15 = suave
// 0.30 = más rápido
// 1.00 = sin suavizado
// ======================================================

const SUAVIZADO = 0.15;

let cxSuave = null;
let cySuave = null;
let yawSuave = 0;
let pitchSuave = 0;

// Cuánto influye el GIRO REAL de la cabeza sobre el spritesheet.
// 0 = solo posición; valores mayores = más sensible al giro.
const INFLUENCIA_YAW = 8.0;
const INFLUENCIA_PITCH = 6.0;
const SUAVIZADO_GIRO = 0.12;


// ======================================================
// DIBUJAR UNA CAPA DEL SPRITE
// ======================================================

function dibujarCapa(fila, columna, alpha){

  if(alpha <= 0){
    return;
  }

  const sx =
    columna * spriteW + RECORTE_SPRITE;

  const sy =
    fila * spriteH + RECORTE_SPRITE;

  const sw =
    spriteW - RECORTE_SPRITE * 2;

  const sh =
    spriteH - RECORTE_SPRITE * 2;


  const escala = Math.min(

    canvasSprite.width / spriteW,
    canvasSprite.height / spriteH

  );


  const ancho =
    spriteW * escala;

  const alto =
    spriteH * escala;


  const dx =
    (canvasSprite.width - ancho) / 2;

  const dy =
    (canvasSprite.height - alto) / 2;


  ctxSprite.globalAlpha = alpha;

  const hojaActiva = (hablando && bocaAbierta) ? spritesheetA : spritesheet;

  ctxSprite.drawImage(

    hojaActiva,

    sx,
    sy,
    sw,
    sh,

    dx,
    dy,
    ancho,
    alto

  );
}


// ======================================================
// TRANSICIÓN ÚNICA CENTRADA EN CADA FRONTERA
//
// Antes cada frontera se calculaba dos veces:
// - al final de la celda anterior
// - al principio de la celda siguiente
// Eso reiniciaba el fade. Ahora cada frontera tiene UNA sola banda
// continua, centrada exactamente sobre el límite.
// ======================================================

const ZONA_FADE = 0.18; // ancho TOTAL de la transición, en fracción de celda

function mezclaEje(pos){
  // pos usa coordenadas de sector: 0..5.
  pos = Math.max(0, Math.min(5, pos));

  // Buscamos la frontera interior más cercana: 1,2,3,4.
  const frontera = Math.round(pos);
  const mediaZona = ZONA_FADE / 2;

  if(frontera >= 1 && frontera <= 4 &&
     Math.abs(pos - frontera) <= mediaZona){

    // Una única progresión 0 -> 1 atravesando la frontera.
    const inicio = frontera - mediaZona;
    const t = Math.max(0, Math.min(1,
      (pos - inicio) / ZONA_FADE
    ));

    return {
      a: frontera - 1,
      b: frontera,
      t: t,
      fade: true
    };
  }

  // Fuera de la estrecha banda no hay interpolación.
  const celda = Math.max(0, Math.min(4, Math.floor(pos)));
  return {a:celda, b:celda, t:0, fade:false};
}

function dibujarSpritePorZonas(filaPos, columnaPos){
  ctxSprite.clearRect(0,0,canvasSprite.width,canvasSprite.height);

  const mx = mezclaEje(columnaPos);
  const my = mezclaEje(filaPos);

  const pesos = [
    [my.a, mx.a, (1-my.t)*(1-mx.t)],
    [my.a, mx.b, (1-my.t)*mx.t],
    [my.b, mx.a, my.t*(1-mx.t)],
    [my.b, mx.b, my.t*mx.t]
  ];

  const acumulados = new Map();
  for(const [f,c,p] of pesos){
    if(p <= 0) continue;
    const k=f+','+c;
    acumulados.set(k,(acumulados.get(k)||0)+p);
  }

  for(const [k,peso] of acumulados){
    const [f,c]=k.split(',').map(Number);
    dibujarCapa(f,c,peso);
  }
  ctxSprite.globalAlpha=1;
}

// ======================================================
// SPRITE INICIAL
// ======================================================

dibujarSpritePorZonas(2.5,2.5);


// ======================================================
// LOOP
// ======================================================

function detectar(){


  // ====================================================
  // WEBCAM
  // ====================================================

  ctx.drawImage(

    video,

    0,
    0,
    canvasWebcam.width,
    canvasWebcam.height

  );


  // ====================================================
  // DETECTAR CARA
  // ====================================================

  const resultado = detector.detectForVideo(video, performance.now());


  // ====================================================
  // GRID 5x5
  // ====================================================

  const sectorW =
    canvasWebcam.width / 5;

  const sectorH =
    canvasWebcam.height / 5;


  ctx.strokeStyle =
    "rgba(255,255,255,0.35)";

  ctx.lineWidth = 1;


  for(let i=1;i<5;i++){

    const x =
      i * sectorW;

    ctx.beginPath();

    ctx.moveTo(
      x,
      0
    );

    ctx.lineTo(
      x,
      canvasWebcam.height
    );

    ctx.stroke();

  }


  for(let i=1;i<5;i++){

    const y =
      i * sectorH;

    ctx.beginPath();

    ctx.moveTo(
      0,
      y
    );

    ctx.lineTo(
      canvasWebcam.width,
      y
    );

    ctx.stroke();

  }


  // ====================================================
  // SI HAY CARA
  // ====================================================

  if(resultado.faceLandmarks.length > 0){

    const puntos = resultado.faceLandmarks[0];

    // Bounding box calculado a partir de los landmarks.
    let minX=1, minY=1, maxX=0, maxY=0;
    for(const p of puntos){
      minX=Math.min(minX,p.x); minY=Math.min(minY,p.y);
      maxX=Math.max(maxX,p.x); maxY=Math.max(maxY,p.y);
    }

    const x=minX*canvasWebcam.width;
    const y=minY*canvasWebcam.height;
    const w=(maxX-minX)*canvasWebcam.width;
    const h=(maxY-minY)*canvasWebcam.height;
    const cx=x+w/2;
    const cy=y+h/2;

    // Estimación sencilla del giro usando nariz y extremos laterales de la cara.
    // Landmarks MediaPipe: 1 = punta de nariz, 234/454 = laterales de la cara.
    const nariz=puntos[1];
    const lateralIzq=puntos[234];
    const lateralDer=puntos[454];
    const centroLateralesX=(lateralIzq.x+lateralDer.x)/2;
    const anchoCara=Math.max(0.001, Math.abs(lateralDer.x-lateralIzq.x));
    let yaw=(nariz.x-centroLateralesX)/anchoCara;

    // Pitch aproximado: posición vertical de nariz respecto a ojos y barbilla.
    const entreOjos=puntos[168];
    const barbilla=puntos[152];
    const altoReferencia=Math.max(0.001, barbilla.y-entreOjos.y);
    let pitch=((nariz.y-entreOjos.y)/altoReferencia)-0.48;

    // La webcam se muestra espejada. Ajustamos el signo para movimiento natural.
    yaw=-yaw;

    yawSuave += (yaw-yawSuave)*SUAVIZADO_GIRO;
    pitchSuave += (pitch-pitchSuave)*SUAVIZADO_GIRO;

    // ==================================================
    // SUAVIZAR CENTRO
    // ==================================================

    if(cxSuave === null){

      cxSuave = cx;
      cySuave = cy;

    }else{

      cxSuave +=
        (cx - cxSuave) *
        SUAVIZADO;

      cySuave +=
        (cy - cySuave) *
        SUAVIZADO;

    }


    // ==================================================
    // POSICIÓN DECIMAL DENTRO DEL 5x5
    //
    // El centro de cada sector coincide exactamente
    // con un sprite entero:
    //
    // centro pantalla => 2,2
    // ==================================================

    // Horizontal invertido para que el avatar gire en la dirección correcta.
    // Vertical se mantiene tal cual.
    // Combinamos DESPLAZAMIENTO de la cara + GIRO REAL de la cabeza.
    let columnaPosicion = 5 - (cxSuave / canvasWebcam.width * 5);
    let filaPosicion = cySuave / canvasWebcam.height * 5;

    let columna = columnaPosicion + yawSuave * INFLUENCIA_YAW;
    let fila = filaPosicion + pitchSuave * INFLUENCIA_PITCH;


    columna =
      Math.max(
        0,
        Math.min(4.999999,columna)
      );

    fila =
      Math.max(
        0,
        Math.min(4.999999,fila)
      );


    // ==================================================
    // SECTOR PRINCIPAL PARA DEBUG
    // ==================================================

    const columnaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cxSuave / sectorW
          )
        )
      );

    const filaSector =
      Math.max(
        0,
        Math.min(
          4,
          Math.floor(
            cySuave / sectorH
          )
        )
      );


    // ==================================================
    // DESTACAR SECTOR
    // ==================================================

    ctx.fillStyle =
      "rgba(255,255,0,0.12)";

    ctx.fillRect(

      columnaSector * sectorW,
      filaSector * sectorH,

      sectorW,
      sectorH

    );


    // ==================================================
    // BOUNDING BOX
    // ==================================================

    ctx.strokeStyle =
      "lime";

    ctx.lineWidth = 3;

    ctx.strokeRect(
      x,
      y,
      w,
      h
    );


    // ==================================================
    // CENTRO REAL
    // ==================================================

    ctx.fillStyle =
      "red";

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      5,
      0,
      Math.PI*2
    );

    ctx.fill();


    // ==================================================
    // CENTRO SUAVIZADO
    // ==================================================

    ctx.fillStyle =
      "yellow";

    ctx.beginPath();

    ctx.arc(
      cxSuave,
      cySuave,
      7,
      0,
      Math.PI*2
    );

    ctx.fill();


    // cruz

    ctx.strokeStyle =
      "yellow";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
      cxSuave-20,
      cySuave
    );

    ctx.lineTo(
      cxSuave+20,
      cySuave
    );

    ctx.moveTo(
      cxSuave,
      cySuave-20
    );

    ctx.lineTo(
      cxSuave,
      cySuave+20
    );

    ctx.stroke();


    // ==================================================
    // DEBUG WEBCAM
    // ==================================================

    ctx.fillStyle =
      "rgba(0,0,0,0.7)";

    ctx.fillRect(
      10,
      390,
      300,
      80
    );


    ctx.fillStyle =
      "white";

    ctx.font =
      "14px monospace";


    ctx.fillText(
      "Centro: " +
      Math.round(cxSuave) +
      ", " +
      Math.round(cySuave),
      20,
      415
    );


    ctx.fillText(
      "Sprite X: " +
      columna.toFixed(2),
      20,
      438
    );


    ctx.fillText(
      "Giro: " + yawSuave.toFixed(3) + ", " + pitchSuave.toFixed(3),
      20,
      461
    );


    // ==================================================
    // SPRITE CON FADE
    // ==================================================

    dibujarSpritePorZonas(fila,columna);

  }


  requestAnimationFrame(
    detectar
  );

}


// ======================================================
// CHATBOT OLLAMA + VOZ — INTERFAZ MÍNIMA
// ======================================================
const btnMicro = document.querySelector('#microfono');
const webcam = document.querySelector('#webcam');
const btnMinimizar = document.querySelector('#minimizarWebcam');

btnMinimizar.addEventListener('click', () => {
  webcam.classList.toggle('minimizada');
  btnMinimizar.textContent =
    webcam.classList.contains('minimizada') ? '+' : '−';
});

async function preguntar(texto){
  texto = texto.trim();
  if(!texto) return;

  btnMicro.classList.remove('escuchando');
  btnMicro.classList.add('pensando');
  btnMicro.textContent = '…';

  try{
    const r = await fetch('ollama.php',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({mensaje:texto})
    });

    if(!r.ok) throw new Error('HTTP '+r.status);

    const datos = await r.json();
    const respuesta = datos.respuesta || 'No he podido responder.';

    speechSynthesis.cancel();
    detenerLipSync();

    const voz = new SpeechSynthesisUtterance(respuesta);
    voz.lang = 'es-ES';

    // Selección explícita de una voz española femenina cuando esté disponible.
    const vocesDisponibles = speechSynthesis.getVoices();
    const preferidas = ['Monica','Mónica','Elvira','Helena','Lucia','Lucía','Google español','Spanish Female'];
    const vozFemenina =
      vocesDisponibles.find(v => v.lang.toLowerCase().startsWith('es') &&
        preferidas.some(n => v.name.toLowerCase().includes(n.toLowerCase()))) ||
      vocesDisponibles.find(v => v.lang.toLowerCase() === 'es-es') ||
      vocesDisponibles.find(v => v.lang.toLowerCase().startsWith('es'));
    if(vozFemenina) voz.voice = vozFemenina;

    voz.onstart = () => {
      btnMicro.classList.remove('pensando');
      btnMicro.textContent = '🎤';
      iniciarLipSync();
    };

    voz.onend = () => {
      detenerLipSync();
      btnMicro.textContent = '🎤';
    };

    voz.onerror = () => {
      detenerLipSync();
      btnMicro.classList.remove('pensando');
      btnMicro.textContent = '🎤';
    };

    speechSynthesis.speak(voz);

  }catch(e){
    console.error(e);
    detenerLipSync();
    btnMicro.classList.remove('pensando');
    btnMicro.textContent = '🎤';
  }
}

btnMicro.addEventListener('click', () => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(!SR){
    console.error('Este navegador no dispone de SpeechRecognition.');
    return;
  }

  speechSynthesis.cancel();
  detenerLipSync();

  const rec = new SR();
  rec.lang = 'es-ES';
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  btnMicro.classList.add('escuchando');
  btnMicro.textContent = '●';

  rec.onresult = e => {
    const texto = e.results[0][0].transcript;
    preguntar(texto);
  };

  rec.onerror = e => {
    console.error('SpeechRecognition:',e.error);
    btnMicro.classList.remove('escuchando');
    btnMicro.textContent = '🎤';
  };

  rec.onend = () => {
    if(!btnMicro.classList.contains('pensando')){
      btnMicro.classList.remove('escuchando');
      btnMicro.textContent = '🎤';
    }
  };

  rec.start();
});

// ======================================================
// START
// ======================================================

detectar();

</script>

</body>
</html>

```
**ollama.php**
```php
<?php

header("Content-Type: application/json; charset=utf-8");


// Recoger JSON enviado desde JavaScript

$entrada = json_decode(
    file_get_contents("php://input"),
    true
);

$mensaje = $entrada["mensaje"] ?? "";


// Petición para Ollama

$datos = [
    "model" => "phi3:mini",

    "prompt" => $mensaje,

    "stream" => false
];


// Conectar con Ollama

$ch = curl_init(
    "http://localhost:11434/api/generate"
);

curl_setopt(
    $ch,
    CURLOPT_POST,
    true
);

curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "Content-Type: application/json"
    ]
);

curl_setopt(
    $ch,
    CURLOPT_POSTFIELDS,
    json_encode($datos)
);

curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);


// Ejecutar

$respuesta = curl_exec($ch);

curl_close($ch);


// Decodificar respuesta de Ollama

$resultado = json_decode(
    $respuesta,
    true
);


// Obtener únicamente el texto

$texto = $resultado["response"] ?? "No he podido responder.";


// Responder al navegador

echo json_encode([
    "respuesta" => $texto
]);
```
### 005-Realidad aumentada
**000-Introducción.md**
```markdown
# Realidad aumentada
- Realidad aumentada
	- Concepto y finalidad
	- Características principales
	- Elementos que intervienen
	- Funcionamiento y operaciones
	- Aplicación práctica
	- Buenas prácticas

```
**001-aframe.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    <a-plane rotation="-90 0 0" width="30" height="30" color="#b8c4aa"></a-plane>
    <a-box position="-2 0.6 -4" width="1.2" height="1.2" depth="1.2" color="#d66"></a-box>
    <a-sphere position="0 1 -6" radius="1" color="#5aa7d8"></a-sphere>
    <a-cylinder position="2 0.9 -8" radius="0.8" height="1.8" color="#d7b45b"></a-cylinder>
    <a-box position="-3 1.5 -11" width="2" height="3" depth="1" color="#8067b7"></a-box>
    <a-torus position="3 1.6 -13" radius="1.2" radius-tubular="0.22" color="#55a77b"></a-torus>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {FaceDetector, FilesetResolver} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // Ajustes principales del efecto
    const PARALLAX_X = 1.25;   // desplazamiento lateral máximo de cámara
    const PARALLAX_Y = 0.75;   // desplazamiento vertical
    const PARALLAX_Z = 1.00;   // acercarse/alejarse según tamaño de la cara
    const SUAVIZADO   = 0.10;   // 0.05 suave/lento, 0.25 rápido
    const DEBUG_FACE  = true;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let detector;
    let objetivo = {x:0,y:1.6,z:0};
    let actual   = {x:0,y:1.6,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'}, audio:false
    });
    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    detector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    estado.textContent = 'Seguimiento activo — mueve la cabeza lateralmente';

    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      // La primera detección se toma como postura neutra. Así, al activarse
      // MediaPipe, la cámara NO salta aunque tu cara no esté exactamente
      // en el centro geométrico de la webcam.
      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx, y:fy};
      }

      // Desplazamiento relativo respecto a la postura inicial.
      // X se invierte para que coincida con la percepción del PiP espejado.
      const nx = -(fx - centroReferencia.x) * 2;
      const ny =  (fy - centroReferencia.y) * 2;

      const area = (b.width * b.height) / (video.videoWidth * video.videoHeight);
      if(caraReferencia === null) caraReferencia = area;

      const dz = Math.max(-1,Math.min(1,(area/caraReferencia)-1));

      objetivo.x = nx * PARALLAX_X;
      objetivo.y = 1.6 - ny * PARALLAX_Y;
      objetivo.z = dz * PARALLAX_Z;

      if(DEBUG_FACE){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const sx = canvas.width/video.videoWidth;
        const sy = canvas.height/video.videoHeight;
        // Como el canvas entero se espeja con CSS, dibujamos coordenadas normales.
        ctx.strokeStyle='#7CFF72'; ctx.lineWidth=3;
        ctx.strokeRect(b.originX*sx,b.originY*sy,b.width*sx,b.height*sy);
        ctx.fillStyle='#fff'; ctx.beginPath();
        ctx.arc(cx*sx,cy*sy,5,0,Math.PI*2); ctx.fill();
      }
    }

    function loop(){
      if(video.readyState >= 2){
        const r = detector.detectForVideo(video,performance.now());
        if(r.detections.length) procesarCara(r.detections[0]);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
      }

      actual.x += (objetivo.x-actual.x)*SUAVIZADO;
      actual.y += (objetivo.y-actual.y)*SUAVIZADO;
      actual.z += (objetivo.z-actual.z)*SUAVIZADO;
      rig.setAttribute('position',`${actual.x} ${actual.y} ${actual.z}`);

      // IMPORTANTE: no hacemos lookAt(). Para un efecto de ventana 3D /
      // head-coupled perspective la orientación permanece paralela y sólo
      // desplazamos el punto de vista. lookAt() provocaba el salto al empezar
      // el reconocimiento y hacía que la cámara apuntase hacia el suelo.

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>

```
**002-denso.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    <a-plane rotation="-90 0 0" width="60" height="60" color="#aab59e"></a-plane>

    <!-- Escena densa, con muchas referencias a diferentes profundidades -->
    <a-box position="-4 0.65 -3" width="1.2" height="1.3" depth="1.2" color="#c95b5b"></a-box>
    <a-cone position="3.8 0.9 -3.5" radius-bottom="0.9" radius-top="0.15" height="1.8" color="#e29b55"></a-cone>
    <a-sphere position="-1.6 0.7 -4" radius="0.7" color="#5b9bd5"></a-sphere>
    <a-torus position="1.5 1.1 -4.5" radius="0.8" radius-tubular="0.16" color="#55a77b"></a-torus>

    <a-cylinder position="-4.5 1 -6" radius="0.65" height="2" color="#d7b45b"></a-cylinder>
    <a-box position="-2.5 1.4 -6.8" width="1.1" height="2.8" depth="1" color="#8067b7"></a-box>
    <a-sphere position="0 1 -6" radius="1" color="#4d91bb"></a-sphere>
    <a-dodecahedron position="2.7 1.1 -6.5" radius="1" color="#bf6c8d"></a-dodecahedron>
    <a-box position="4.8 0.8 -7.2" width="1.5" height="1.6" depth="1.5" rotation="0 25 0" color="#6b8e9b"></a-box>

    <a-torus-knot position="-4 1.4 -9" radius="0.8" radius-tubular="0.18" color="#b978d0"></a-torus-knot>
    <a-cone position="-1.7 1 -9.5" radius-bottom="1" height="2" color="#5aa879"></a-cone>
    <a-cylinder position="1 1.25 -9" radius="0.75" height="2.5" color="#cf8055"></a-cylinder>
    <a-sphere position="3.8 1.2 -10" radius="1.2" color="#6786c5"></a-sphere>

    <a-box position="-5 1.8 -13" width="1.6" height="3.6" depth="1.2" color="#587d69"></a-box>
    <a-sphere position="-2.5 1.3 -14" radius="1.3" color="#b65f73"></a-sphere>
    <a-torus position="0 1.7 -13" radius="1.3" radius-tubular="0.22" color="#4f8f83"></a-torus>
    <a-box position="2.8 1.2 -14.5" width="2" height="2.4" depth="1.2" rotation="0 -30 0" color="#9b8058"></a-box>
    <a-cone position="5 1.5 -13" radius-bottom="1.2" height="3" color="#7070a8"></a-cone>

    <!-- postes laterales: hacen muy evidente el paralaje -->
    <a-cylinder position="-7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="-7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="-7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>
    <a-cylinder position="7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>

    <a-sphere position="-3 3.5 -5" radius="0.28" color="#eee"></a-sphere>
    <a-sphere position="0 3.2 -8" radius="0.35" color="#eee"></a-sphere>
    <a-sphere position="3 3.8 -11" radius="0.42" color="#eee"></a-sphere>
    <a-sphere position="-1 4 -15" radius="0.5" color="#eee"></a-sphere>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {FaceDetector, FilesetResolver} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // Ajustes principales del efecto
    const PARALLAX_X = 1.25;   // desplazamiento lateral máximo de cámara
    const PARALLAX_Y = 0.75;   // desplazamiento vertical
    const PARALLAX_Z = 1.00;   // acercarse/alejarse según tamaño de la cara
    const SUAVIZADO   = 0.10;   // 0.05 suave/lento, 0.25 rápido
    const DEBUG_FACE  = true;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let detector;
    let objetivo = {x:0,y:1.6,z:0};
    let actual   = {x:0,y:1.6,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'}, audio:false
    });
    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    detector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    estado.textContent = 'Seguimiento activo — mueve la cabeza lateralmente';

    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      // La primera detección se toma como postura neutra. Así, al activarse
      // MediaPipe, la cámara NO salta aunque tu cara no esté exactamente
      // en el centro geométrico de la webcam.
      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx, y:fy};
      }

      // Desplazamiento relativo respecto a la postura inicial.
      // X se invierte para que coincida con la percepción del PiP espejado.
      const nx = -(fx - centroReferencia.x) * 2;
      const ny =  (fy - centroReferencia.y) * 2;

      const area = (b.width * b.height) / (video.videoWidth * video.videoHeight);
      if(caraReferencia === null) caraReferencia = area;

      const dz = Math.max(-1,Math.min(1,(area/caraReferencia)-1));

      objetivo.x = nx * PARALLAX_X;
      objetivo.y = 1.6 - ny * PARALLAX_Y;
      objetivo.z = -dz * PARALLAX_Z; // invertido: acercarse físicamente = cámara hacia delante

      if(DEBUG_FACE){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const sx = canvas.width/video.videoWidth;
        const sy = canvas.height/video.videoHeight;
        // Como el canvas entero se espeja con CSS, dibujamos coordenadas normales.
        ctx.strokeStyle='#7CFF72'; ctx.lineWidth=3;
        ctx.strokeRect(b.originX*sx,b.originY*sy,b.width*sx,b.height*sy);
        ctx.fillStyle='#fff'; ctx.beginPath();
        ctx.arc(cx*sx,cy*sy,5,0,Math.PI*2); ctx.fill();
      }
    }

    function loop(){
      if(video.readyState >= 2){
        const r = detector.detectForVideo(video,performance.now());
        if(r.detections.length) procesarCara(r.detections[0]);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
      }

      actual.x += (objetivo.x-actual.x)*SUAVIZADO;
      actual.y += (objetivo.y-actual.y)*SUAVIZADO;
      actual.z += (objetivo.z-actual.z)*SUAVIZADO;
      rig.setAttribute('position',`${actual.x} ${actual.y} ${actual.z}`);

      // IMPORTANTE: no hacemos lookAt(). Para un efecto de ventana 3D /
      // head-coupled perspective la orientación permanece paralela y sólo
      // desplazamos el punto de vista. lookAt() provocaba el salto al empezar
      // el reconocimiento y hacía que la cámara apuntase hacia el suelo.

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>

```
**003-denso.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    <a-plane rotation="-90 0 0" width="60" height="60" color="#aab59e"></a-plane>

    <!-- Escena densa, con muchas referencias a diferentes profundidades -->
    <a-box position="-4 0.65 -3" width="1.2" height="1.3" depth="1.2" color="#c95b5b"></a-box>
    <a-cone position="3.8 0.9 -3.5" radius-bottom="0.9" radius-top="0.15" height="1.8" color="#e29b55"></a-cone>
    <a-sphere position="-1.6 0.7 -4" radius="0.7" color="#5b9bd5"></a-sphere>
    <a-torus position="1.5 1.1 -4.5" radius="0.8" radius-tubular="0.16" color="#55a77b"></a-torus>

    <a-cylinder position="-4.5 1 -6" radius="0.65" height="2" color="#d7b45b"></a-cylinder>
    <a-box position="-2.5 1.4 -6.8" width="1.1" height="2.8" depth="1" color="#8067b7"></a-box>
    <a-sphere position="0 1 -6" radius="1" color="#4d91bb"></a-sphere>
    <a-dodecahedron position="2.7 1.1 -6.5" radius="1" color="#bf6c8d"></a-dodecahedron>
    <a-box position="4.8 0.8 -7.2" width="1.5" height="1.6" depth="1.5" rotation="0 25 0" color="#6b8e9b"></a-box>

    <a-torus-knot position="-4 1.4 -9" radius="0.8" radius-tubular="0.18" color="#b978d0"></a-torus-knot>
    <a-cone position="-1.7 1 -9.5" radius-bottom="1" height="2" color="#5aa879"></a-cone>
    <a-cylinder position="1 1.25 -9" radius="0.75" height="2.5" color="#cf8055"></a-cylinder>
    <a-sphere position="3.8 1.2 -10" radius="1.2" color="#6786c5"></a-sphere>

    <a-box position="-5 1.8 -13" width="1.6" height="3.6" depth="1.2" color="#587d69"></a-box>
    <a-sphere position="-2.5 1.3 -14" radius="1.3" color="#b65f73"></a-sphere>
    <a-torus position="0 1.7 -13" radius="1.3" radius-tubular="0.22" color="#4f8f83"></a-torus>
    <a-box position="2.8 1.2 -14.5" width="2" height="2.4" depth="1.2" rotation="0 -30 0" color="#9b8058"></a-box>
    <a-cone position="5 1.5 -13" radius-bottom="1.2" height="3" color="#7070a8"></a-cone>

    <!-- postes laterales: hacen muy evidente el paralaje -->
    <a-cylinder position="-7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="-7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="-7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>
    <a-cylinder position="7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>

    <a-sphere position="-3 3.5 -5" radius="0.28" color="#eee"></a-sphere>
    <a-sphere position="0 3.2 -8" radius="0.35" color="#eee"></a-sphere>
    <a-sphere position="3 3.8 -11" radius="0.42" color="#eee"></a-sphere>
    <a-sphere position="-1 4 -15" radius="0.5" color="#eee"></a-sphere>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {
      FaceDetector,
      HandLandmarker,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // ============================================================
    // AJUSTES DE HEAD TRACKING
    // ============================================================
    const PARALLAX_X = 1.25;
    const PARALLAX_Y = 0.75;
    const PARALLAX_Z = 1.00;
    const SUAVIZADO   = 0.10;

    // ============================================================
    // AJUSTES DE CONTROL CON EL ÍNDICE
    // ============================================================
    const VELOCIDAD_AVANCE = 2.2;   // unidades/segundo
    const VELOCIDAD_GIRO   = 65;    // grados/segundo

    // Para evitar cambios de gesto por pequeños temblores.
    // Se compara la dirección 2D del índice: nudillo MCP(5) -> punta(8).
    const UMBRAL_GESTO = 0.45;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let faceDetector;
    let handLandmarker;

    // Head tracking: desplazamiento local respecto al jugador.
    let headObjetivo = {x:0,y:0,z:0};
    let headActual   = {x:0,y:0,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    // Navegación tipo WASD.
    let jugador = {x:0, y:1.6, z:0, yaw:0};
    let gesto = 'NEUTRO';
    let ultimoTiempo = performance.now();

    // ============================================================
    // WEBCAM ÚNICA COMPARTIDA POR CARA + MANOS
    // ============================================================
    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},
      audio:false
    });

    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    // ============================================================
    // MEDIAPIPE FACE
    // ============================================================
    faceDetector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    // ============================================================
    // MEDIAPIPE HANDS
    // ============================================================
    handLandmarker = await HandLandmarker.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task'
      },
      runningMode:'VIDEO',
      numHands:2,
      minHandDetectionConfidence:0.5,
      minHandPresenceConfidence:0.5,
      minTrackingConfidence:0.5
    });

    estado.textContent =
      'Cabeza: paralaje · Índice: ↑ avanzar · ← girar izq. · → girar der.';

    // ============================================================
    // CARA
    // ============================================================
    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx,y:fy};
      }

      const nx = -(fx-centroReferencia.x)*2;
      const ny =  (fy-centroReferencia.y)*2;

      const area =
        (b.width*b.height) /
        (video.videoWidth*video.videoHeight);

      if(caraReferencia === null){
        caraReferencia = area;
      }

      const dz = Math.max(
        -1,
        Math.min(1,(area/caraReferencia)-1)
      );

      headObjetivo.x = nx*PARALLAX_X;
      headObjetivo.y = -ny*PARALLAX_Y;
      headObjetivo.z = -dz*PARALLAX_Z;

      // Bounding box de la cara
      const sx = canvas.width/video.videoWidth;
      const sy = canvas.height/video.videoHeight;

      ctx.strokeStyle='#7CFF72';
      ctx.lineWidth=3;
      ctx.strokeRect(
        b.originX*sx,
        b.originY*sy,
        b.width*sx,
        b.height*sy
      );
    }

    // ============================================================
    // DIRECCIÓN DEL DEDO ÍNDICE
    //
    // Landmark 5 = base del índice
    // Landmark 8 = punta del índice
    //
    // Como el PiP está espejado visualmente, invertimos dx para que
    // "apuntar a la izquierda" coincida con lo que ve el usuario.
    // ============================================================
    function obtenerGesto(puntos){
      const base = puntos[5];
      const punta = puntos[8];

      let dx = -(punta.x-base.x);
      let dy =  (punta.y-base.y);

      const longitud = Math.hypot(dx,dy);

      if(longitud < 0.035){
        return 'NEUTRO';
      }

      dx /= longitud;
      dy /= longitud;

      // En coordenadas de imagen, arriba = Y negativa.
      if(dy < -UMBRAL_GESTO && Math.abs(dy) > Math.abs(dx)){
        return 'AVANZAR';
      }

      if(dx < -UMBRAL_GESTO && Math.abs(dx) > Math.abs(dy)){
        return 'IZQUIERDA';
      }

      if(dx > UMBRAL_GESTO && Math.abs(dx) > Math.abs(dy)){
        return 'DERECHA';
      }

      return 'NEUTRO';
    }

    function dibujarMano(puntos){
      const conexiones = [
        [0,1],[1,2],[2,3],[3,4],
        [0,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[10,11],[11,12],
        [9,13],[13,14],[14,15],[15,16],
        [13,17],[17,18],[18,19],[19,20],
        [0,17]
      ];

      ctx.strokeStyle='#00E5FF';
      ctx.lineWidth=2;

      for(const [ia,ib] of conexiones){
        const a=puntos[ia];
        const b=puntos[ib];

        ctx.beginPath();
        ctx.moveTo(a.x*canvas.width,a.y*canvas.height);
        ctx.lineTo(b.x*canvas.width,b.y*canvas.height);
        ctx.stroke();
      }

      // Resaltamos el índice 5 -> 8.
      const base=puntos[5];
      const punta=puntos[8];

      ctx.strokeStyle='#FFD54A';
      ctx.lineWidth=6;
      ctx.beginPath();
      ctx.moveTo(base.x*canvas.width,base.y*canvas.height);
      ctx.lineTo(punta.x*canvas.width,punta.y*canvas.height);
      ctx.stroke();

      ctx.fillStyle='#FFD54A';
      ctx.beginPath();
      ctx.arc(
        punta.x*canvas.width,
        punta.y*canvas.height,
        7,
        0,
        Math.PI*2
      );
      ctx.fill();
    }

    // ============================================================
    // MOVIMIENTO DEL JUGADOR
    // ============================================================
    function moverJugador(dt){
      if(gesto === 'IZQUIERDA'){
        jugador.yaw += VELOCIDAD_GIRO*dt;
      }

      if(gesto === 'DERECHA'){
        jugador.yaw -= VELOCIDAD_GIRO*dt;
      }

      if(gesto === 'AVANZAR'){
        const rad = THREE.MathUtils.degToRad(jugador.yaw);

        jugador.x += Math.sin(rad)*VELOCIDAD_AVANCE*dt;
        jugador.z -= Math.cos(rad)*VELOCIDAD_AVANCE*dt;
      }
    }

    // ============================================================
    // LOOP
    // ============================================================
    function loop(tiempo){
      const dt = Math.min(
        0.05,
        (tiempo-ultimoTiempo)/1000
      );
      ultimoTiempo=tiempo;

      ctx.clearRect(0,0,canvas.width,canvas.height);

      if(video.readyState >= 2){

        // -------- CARA --------
        const caras =
          faceDetector.detectForVideo(video,tiempo);

        if(caras.detections.length){
          procesarCara(caras.detections[0]);
        }

        // -------- MANOS --------
        const manos =
          handLandmarker.detectForVideo(video,tiempo);

        gesto='NEUTRO';

        if(manos.landmarks.length){
          // Usamos la primera mano detectada como mando.
          const puntos=manos.landmarks[0];

          gesto=obtenerGesto(puntos);
          dibujarMano(puntos);
        }
      }

      moverJugador(dt);

      // Suavizado independiente del movimiento de la cabeza.
      headActual.x +=
        (headObjetivo.x-headActual.x)*SUAVIZADO;

      headActual.y +=
        (headObjetivo.y-headActual.y)*SUAVIZADO;

      headActual.z +=
        (headObjetivo.z-headActual.z)*SUAVIZADO;

      // El head tracking se aplica en coordenadas LOCALES del jugador.
      // Así no se rompe al girar con la mano.
      const yawRad =
        THREE.MathUtils.degToRad(jugador.yaw);

      const hx =
        headActual.x*Math.cos(yawRad) +
        headActual.z*Math.sin(yawRad);

      const hz =
        -headActual.x*Math.sin(yawRad) +
        headActual.z*Math.cos(yawRad);

      rig.setAttribute(
        'position',
        `${jugador.x+hx} ${jugador.y+headActual.y} ${jugador.z+hz}`
      );

      rig.setAttribute(
        'rotation',
        `0 ${jugador.yaw} 0`
      );

      let texto='✋ neutro';

      if(gesto==='AVANZAR') texto='☝ AVANZAR';
      if(gesto==='IZQUIERDA') texto='👈 GIRAR IZQUIERDA';
      if(gesto==='DERECHA') texto='👉 GIRAR DERECHA';

      estado.textContent =
        `Cabeza: paralaje · Mano: ${texto}`;

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  </script>
</body>
</html>

```
**004-indice.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    <a-plane rotation="-90 0 0" width="60" height="60" color="#aab59e"></a-plane>

    <!-- Escena densa, con muchas referencias a diferentes profundidades -->
    <a-box position="-4 0.65 -3" width="1.2" height="1.3" depth="1.2" color="#c95b5b"></a-box>
    <a-cone position="3.8 0.9 -3.5" radius-bottom="0.9" radius-top="0.15" height="1.8" color="#e29b55"></a-cone>
    <a-sphere position="-1.6 0.7 -4" radius="0.7" color="#5b9bd5"></a-sphere>
    <a-torus position="1.5 1.1 -4.5" radius="0.8" radius-tubular="0.16" color="#55a77b"></a-torus>

    <a-cylinder position="-4.5 1 -6" radius="0.65" height="2" color="#d7b45b"></a-cylinder>
    <a-box position="-2.5 1.4 -6.8" width="1.1" height="2.8" depth="1" color="#8067b7"></a-box>
    <a-sphere position="0 1 -6" radius="1" color="#4d91bb"></a-sphere>
    <a-dodecahedron position="2.7 1.1 -6.5" radius="1" color="#bf6c8d"></a-dodecahedron>
    <a-box position="4.8 0.8 -7.2" width="1.5" height="1.6" depth="1.5" rotation="0 25 0" color="#6b8e9b"></a-box>

    <a-torus-knot position="-4 1.4 -9" radius="0.8" radius-tubular="0.18" color="#b978d0"></a-torus-knot>
    <a-cone position="-1.7 1 -9.5" radius-bottom="1" height="2" color="#5aa879"></a-cone>
    <a-cylinder position="1 1.25 -9" radius="0.75" height="2.5" color="#cf8055"></a-cylinder>
    <a-sphere position="3.8 1.2 -10" radius="1.2" color="#6786c5"></a-sphere>

    <a-box position="-5 1.8 -13" width="1.6" height="3.6" depth="1.2" color="#587d69"></a-box>
    <a-sphere position="-2.5 1.3 -14" radius="1.3" color="#b65f73"></a-sphere>
    <a-torus position="0 1.7 -13" radius="1.3" radius-tubular="0.22" color="#4f8f83"></a-torus>
    <a-box position="2.8 1.2 -14.5" width="2" height="2.4" depth="1.2" rotation="0 -30 0" color="#9b8058"></a-box>
    <a-cone position="5 1.5 -13" radius-bottom="1.2" height="3" color="#7070a8"></a-cone>

    <!-- postes laterales: hacen muy evidente el paralaje -->
    <a-cylinder position="-7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="-7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="-7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>
    <a-cylinder position="7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>

    <a-sphere position="-3 3.5 -5" radius="0.28" color="#eee"></a-sphere>
    <a-sphere position="0 3.2 -8" radius="0.35" color="#eee"></a-sphere>
    <a-sphere position="3 3.8 -11" radius="0.42" color="#eee"></a-sphere>
    <a-sphere position="-1 4 -15" radius="0.5" color="#eee"></a-sphere>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {
      FaceDetector,
      HandLandmarker,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // ============================================================
    // AJUSTES DE HEAD TRACKING
    // ============================================================
    const PARALLAX_X = 1.25;
    const PARALLAX_Y = 0.75;
    const PARALLAX_Z = 1.00;
    const SUAVIZADO   = 0.10;

    // ============================================================
    // AJUSTES DE CONTROL CON EL ÍNDICE
    // ============================================================
    const VELOCIDAD_AVANCE = 2.2;   // unidades/segundo
    const VELOCIDAD_GIRO   = 65;    // grados/segundo

    // Para evitar cambios de gesto por pequeños temblores.
    // Se compara la dirección 2D del índice: nudillo MCP(5) -> punta(8).
    const UMBRAL_GESTO = 0.45;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let faceDetector;
    let handLandmarker;

    // Head tracking: desplazamiento local respecto al jugador.
    let headObjetivo = {x:0,y:0,z:0};
    let headActual   = {x:0,y:0,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    // Navegación tipo WASD.
    let jugador = {x:0, y:1.6, z:0, yaw:0};
    let gesto = 'NEUTRO';
    let ultimoTiempo = performance.now();

    // ============================================================
    // WEBCAM ÚNICA COMPARTIDA POR CARA + MANOS
    // ============================================================
    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},
      audio:false
    });

    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    // ============================================================
    // MEDIAPIPE FACE
    // ============================================================
    faceDetector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    // ============================================================
    // MEDIAPIPE HANDS
    // ============================================================
    handLandmarker = await HandLandmarker.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task'
      },
      runningMode:'VIDEO',
      numHands:2,
      minHandDetectionConfidence:0.5,
      minHandPresenceConfidence:0.5,
      minTrackingConfidence:0.5
    });

    estado.textContent =
      'Cabeza: paralaje · Índice: ↑ avanzar · ← girar izq. · → girar der.';

    // ============================================================
    // CARA
    // ============================================================
    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx,y:fy};
      }

      const nx = -(fx-centroReferencia.x)*2;
      const ny =  (fy-centroReferencia.y)*2;

      const area =
        (b.width*b.height) /
        (video.videoWidth*video.videoHeight);

      if(caraReferencia === null){
        caraReferencia = area;
      }

      const dz = Math.max(
        -1,
        Math.min(1,(area/caraReferencia)-1)
      );

      headObjetivo.x = nx*PARALLAX_X;
      headObjetivo.y = -ny*PARALLAX_Y;
      headObjetivo.z = -dz*PARALLAX_Z;

      // Bounding box de la cara
      const sx = canvas.width/video.videoWidth;
      const sy = canvas.height/video.videoHeight;

      ctx.strokeStyle='#7CFF72';
      ctx.lineWidth=3;
      ctx.strokeRect(
        b.originX*sx,
        b.originY*sy,
        b.width*sx,
        b.height*sy
      );
    }

    // ============================================================
    // DIRECCIÓN DEL DEDO ÍNDICE
    //
    // Landmark 5 = base del índice
    // Landmark 8 = punta del índice
    //
    // Como el PiP está espejado visualmente, invertimos dx para que
    // "apuntar a la izquierda" coincida con lo que ve el usuario.
    // ============================================================
    function distancia3D(a,b){
      return Math.hypot(
        a.x-b.x,
        a.y-b.y,
        (a.z ?? 0)-(b.z ?? 0)
      );
    }

    function indiceEstaExtendido(puntos){
      const mcp = puntos[5]; // nudillo
      const pip = puntos[6];
      const dip = puntos[7];
      const tip = puntos[8]; // punta

      // Vector PIP -> MCP
      const ax = mcp.x-pip.x;
      const ay = mcp.y-pip.y;
      const az = (mcp.z ?? 0)-(pip.z ?? 0);

      // Vector PIP -> TIP
      const bx = tip.x-pip.x;
      const by = tip.y-pip.y;
      const bz = (tip.z ?? 0)-(pip.z ?? 0);

      const ma = Math.hypot(ax,ay,az);
      const mb = Math.hypot(bx,by,bz);

      if(ma < 0.0001 || mb < 0.0001){
        return false;
      }

      // Si el dedo está recto, MCP y TIP quedan en direcciones
      // casi opuestas respecto a PIP: ángulo cercano a 180 grados.
      const cosAngulo = Math.max(
        -1,
        Math.min(
          1,
          (ax*bx + ay*by + az*bz)/(ma*mb)
        )
      );

      const anguloPIP =
        Math.acos(cosAngulo)*180/Math.PI;

      // Además la punta debe estar suficientemente separada del nudillo.
      // Esto evita aceptar un índice plegado sobre sí mismo.
      const largoIndice = distancia3D(mcp,tip);
      const largoPalma = distancia3D(puntos[0],puntos[9]);

      return (
        anguloPIP > 155 &&
        largoIndice > largoPalma*0.72
      );
    }

    function obtenerGesto(puntos){

      // REGLA PRINCIPAL:
      // si el índice no está realmente desplegado, no hay comando.
      if(!indiceEstaExtendido(puntos)){
        return 'NEUTRO';
      }

      const base = puntos[5];
      const punta = puntos[8];

      // El vídeo se muestra espejado.
      let dx = -(punta.x-base.x);
      let dy =  (punta.y-base.y);

      const longitud = Math.hypot(dx,dy);

      if(longitud < 0.035){
        return 'NEUTRO';
      }

      dx /= longitud;
      dy /= longitud;

      if(dy < -UMBRAL_GESTO && Math.abs(dy) > Math.abs(dx)){
        return 'AVANZAR';
      }

      if(dx < -UMBRAL_GESTO && Math.abs(dx) > Math.abs(dy)){
        return 'IZQUIERDA';
      }

      if(dx > UMBRAL_GESTO && Math.abs(dx) > Math.abs(dy)){
        return 'DERECHA';
      }

      return 'NEUTRO';
    }

    function dibujarMano(puntos){
      const conexiones = [
        [0,1],[1,2],[2,3],[3,4],
        [0,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[10,11],[11,12],
        [9,13],[13,14],[14,15],[15,16],
        [13,17],[17,18],[18,19],[19,20],
        [0,17]
      ];

      ctx.strokeStyle='#00E5FF';
      ctx.lineWidth=2;

      for(const [ia,ib] of conexiones){
        const a=puntos[ia];
        const b=puntos[ib];

        ctx.beginPath();
        ctx.moveTo(a.x*canvas.width,a.y*canvas.height);
        ctx.lineTo(b.x*canvas.width,b.y*canvas.height);
        ctx.stroke();
      }

      // Resaltamos el índice 5 -> 8.
      const base=puntos[5];
      const punta=puntos[8];

      ctx.strokeStyle='#FFD54A';
      ctx.lineWidth=6;
      ctx.beginPath();
      ctx.moveTo(base.x*canvas.width,base.y*canvas.height);
      ctx.lineTo(punta.x*canvas.width,punta.y*canvas.height);
      ctx.stroke();

      ctx.fillStyle='#FFD54A';
      ctx.beginPath();
      ctx.arc(
        punta.x*canvas.width,
        punta.y*canvas.height,
        7,
        0,
        Math.PI*2
      );
      ctx.fill();
    }

    // ============================================================
    // MOVIMIENTO DEL JUGADOR
    // ============================================================
    function moverJugador(dt){
      if(gesto === 'IZQUIERDA'){
        jugador.yaw += VELOCIDAD_GIRO*dt;
      }

      if(gesto === 'DERECHA'){
        jugador.yaw -= VELOCIDAD_GIRO*dt;
      }

      if(gesto === 'AVANZAR'){
        // Forward de Three.js/A-Frame = eje local -Z.
        // Con yaw positivo hacia la izquierda:
        // yaw 0°   -> ( 0, 0,-1)
        // yaw 90°  -> (-1, 0, 0)
        // yaw -90° -> ( 1, 0, 0)
        const rad = THREE.MathUtils.degToRad(jugador.yaw);

        const forwardX = -Math.sin(rad);
        const forwardZ = -Math.cos(rad);

        jugador.x += forwardX*VELOCIDAD_AVANCE*dt;
        jugador.z += forwardZ*VELOCIDAD_AVANCE*dt;
      }
    }

    // ============================================================
    // LOOP
    // ============================================================
    function loop(tiempo){
      const dt = Math.min(
        0.05,
        (tiempo-ultimoTiempo)/1000
      );
      ultimoTiempo=tiempo;

      ctx.clearRect(0,0,canvas.width,canvas.height);

      if(video.readyState >= 2){

        // -------- CARA --------
        const caras =
          faceDetector.detectForVideo(video,tiempo);

        if(caras.detections.length){
          procesarCara(caras.detections[0]);
        }

        // -------- MANOS --------
        const manos =
          handLandmarker.detectForVideo(video,tiempo);

        gesto='NEUTRO';

        if(manos.landmarks.length){
          // Usamos la primera mano detectada como mando.
          const puntos=manos.landmarks[0];

          gesto=obtenerGesto(puntos);
          dibujarMano(puntos);
        }
      }

      moverJugador(dt);

      // Suavizado independiente del movimiento de la cabeza.
      headActual.x +=
        (headObjetivo.x-headActual.x)*SUAVIZADO;

      headActual.y +=
        (headObjetivo.y-headActual.y)*SUAVIZADO;

      headActual.z +=
        (headObjetivo.z-headActual.z)*SUAVIZADO;

      // Transformamos el pequeño desplazamiento de cabeza desde
      // coordenadas locales del jugador a coordenadas del mundo.
      const yawRad =
        THREE.MathUtils.degToRad(jugador.yaw);

      const hx =
        headActual.x*Math.cos(yawRad) -
        headActual.z*Math.sin(yawRad);

      const hz =
        headActual.x*Math.sin(yawRad) +
        headActual.z*Math.cos(yawRad);

      rig.setAttribute(
        'position',
        `${jugador.x+hx} ${jugador.y+headActual.y} ${jugador.z+hz}`
      );

      rig.setAttribute(
        'rotation',
        `0 ${jugador.yaw} 0`
      );

      let texto='✋ neutro';

      if(gesto==='AVANZAR') texto='☝ AVANZAR';
      if(gesto==='IZQUIERDA') texto='👈 GIRAR IZQUIERDA';
      if(gesto==='DERECHA') texto='👉 GIRAR DERECHA';

      estado.textContent =
        `Cabeza: paralaje · Mano: ${texto}`;

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  </script>
</body>
</html>

```
**005-gradual.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    <a-plane rotation="-90 0 0" width="60" height="60" color="#aab59e"></a-plane>

    <!-- Escena densa, con muchas referencias a diferentes profundidades -->
    <a-box position="-4 0.65 -3" width="1.2" height="1.3" depth="1.2" color="#c95b5b"></a-box>
    <a-cone position="3.8 0.9 -3.5" radius-bottom="0.9" radius-top="0.15" height="1.8" color="#e29b55"></a-cone>
    <a-sphere position="-1.6 0.7 -4" radius="0.7" color="#5b9bd5"></a-sphere>
    <a-torus position="1.5 1.1 -4.5" radius="0.8" radius-tubular="0.16" color="#55a77b"></a-torus>

    <a-cylinder position="-4.5 1 -6" radius="0.65" height="2" color="#d7b45b"></a-cylinder>
    <a-box position="-2.5 1.4 -6.8" width="1.1" height="2.8" depth="1" color="#8067b7"></a-box>
    <a-sphere position="0 1 -6" radius="1" color="#4d91bb"></a-sphere>
    <a-dodecahedron position="2.7 1.1 -6.5" radius="1" color="#bf6c8d"></a-dodecahedron>
    <a-box position="4.8 0.8 -7.2" width="1.5" height="1.6" depth="1.5" rotation="0 25 0" color="#6b8e9b"></a-box>

    <a-torus-knot position="-4 1.4 -9" radius="0.8" radius-tubular="0.18" color="#b978d0"></a-torus-knot>
    <a-cone position="-1.7 1 -9.5" radius-bottom="1" height="2" color="#5aa879"></a-cone>
    <a-cylinder position="1 1.25 -9" radius="0.75" height="2.5" color="#cf8055"></a-cylinder>
    <a-sphere position="3.8 1.2 -10" radius="1.2" color="#6786c5"></a-sphere>

    <a-box position="-5 1.8 -13" width="1.6" height="3.6" depth="1.2" color="#587d69"></a-box>
    <a-sphere position="-2.5 1.3 -14" radius="1.3" color="#b65f73"></a-sphere>
    <a-torus position="0 1.7 -13" radius="1.3" radius-tubular="0.22" color="#4f8f83"></a-torus>
    <a-box position="2.8 1.2 -14.5" width="2" height="2.4" depth="1.2" rotation="0 -30 0" color="#9b8058"></a-box>
    <a-cone position="5 1.5 -13" radius-bottom="1.2" height="3" color="#7070a8"></a-cone>

    <!-- postes laterales: hacen muy evidente el paralaje -->
    <a-cylinder position="-7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="-7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="-7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>
    <a-cylinder position="7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>

    <a-sphere position="-3 3.5 -5" radius="0.28" color="#eee"></a-sphere>
    <a-sphere position="0 3.2 -8" radius="0.35" color="#eee"></a-sphere>
    <a-sphere position="3 3.8 -11" radius="0.42" color="#eee"></a-sphere>
    <a-sphere position="-1 4 -15" radius="0.5" color="#eee"></a-sphere>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {
      FaceDetector,
      HandLandmarker,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // ============================================================
    // AJUSTES DE HEAD TRACKING
    // ============================================================
    const PARALLAX_X = 1.25;
    const PARALLAX_Y = 0.75;
    const PARALLAX_Z = 1.00;
    const SUAVIZADO   = 0.10;

    // ============================================================
    // AJUSTES DE CONTROL CON EL ÍNDICE
    // ============================================================
    const VELOCIDAD_AVANCE = 2.2;   // unidades/segundo
    const VELOCIDAD_GIRO   = 65;    // grados/segundo

    // Para evitar cambios de gesto por pequeños temblores.
    // Se compara la dirección 2D del índice: nudillo MCP(5) -> punta(8).
    const UMBRAL_GESTO = 0.45;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let faceDetector;
    let handLandmarker;

    // Head tracking: desplazamiento local respecto al jugador.
    let headObjetivo = {x:0,y:0,z:0};
    let headActual   = {x:0,y:0,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    // Navegación tipo WASD.
    let jugador = {x:0, y:1.6, z:0, yaw:0};
    let controlMano = {avance:0, giro:0, activo:false};
    let ultimoTiempo = performance.now();

    // ============================================================
    // WEBCAM ÚNICA COMPARTIDA POR CARA + MANOS
    // ============================================================
    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},
      audio:false
    });

    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    // ============================================================
    // MEDIAPIPE FACE
    // ============================================================
    faceDetector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    // ============================================================
    // MEDIAPIPE HANDS
    // ============================================================
    handLandmarker = await HandLandmarker.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task'
      },
      runningMode:'VIDEO',
      numHands:2,
      minHandDetectionConfidence:0.5,
      minHandPresenceConfidence:0.5,
      minTrackingConfidence:0.5
    });

    estado.textContent =
      'Cabeza: paralaje · Índice: ↑ avanzar · ← girar izq. · → girar der.';

    // ============================================================
    // CARA
    // ============================================================
    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx,y:fy};
      }

      const nx = -(fx-centroReferencia.x)*2;
      const ny =  (fy-centroReferencia.y)*2;

      const area =
        (b.width*b.height) /
        (video.videoWidth*video.videoHeight);

      if(caraReferencia === null){
        caraReferencia = area;
      }

      const dz = Math.max(
        -1,
        Math.min(1,(area/caraReferencia)-1)
      );

      headObjetivo.x = nx*PARALLAX_X;
      headObjetivo.y = -ny*PARALLAX_Y;
      headObjetivo.z = -dz*PARALLAX_Z;

      // Bounding box de la cara
      const sx = canvas.width/video.videoWidth;
      const sy = canvas.height/video.videoHeight;

      ctx.strokeStyle='#7CFF72';
      ctx.lineWidth=3;
      ctx.strokeRect(
        b.originX*sx,
        b.originY*sy,
        b.width*sx,
        b.height*sy
      );
    }

    // ============================================================
    // DIRECCIÓN DEL DEDO ÍNDICE
    //
    // Landmark 5 = base del índice
    // Landmark 8 = punta del índice
    //
    // Como el PiP está espejado visualmente, invertimos dx para que
    // "apuntar a la izquierda" coincida con lo que ve el usuario.
    // ============================================================
    function distancia3D(a,b){
      return Math.hypot(
        a.x-b.x,
        a.y-b.y,
        (a.z ?? 0)-(b.z ?? 0)
      );
    }

    function indiceEstaExtendido(puntos){
      const mcp = puntos[5]; // nudillo
      const pip = puntos[6];
      const dip = puntos[7];
      const tip = puntos[8]; // punta

      // Vector PIP -> MCP
      const ax = mcp.x-pip.x;
      const ay = mcp.y-pip.y;
      const az = (mcp.z ?? 0)-(pip.z ?? 0);

      // Vector PIP -> TIP
      const bx = tip.x-pip.x;
      const by = tip.y-pip.y;
      const bz = (tip.z ?? 0)-(pip.z ?? 0);

      const ma = Math.hypot(ax,ay,az);
      const mb = Math.hypot(bx,by,bz);

      if(ma < 0.0001 || mb < 0.0001){
        return false;
      }

      // Si el dedo está recto, MCP y TIP quedan en direcciones
      // casi opuestas respecto a PIP: ángulo cercano a 180 grados.
      const cosAngulo = Math.max(
        -1,
        Math.min(
          1,
          (ax*bx + ay*by + az*bz)/(ma*mb)
        )
      );

      const anguloPIP =
        Math.acos(cosAngulo)*180/Math.PI;

      // Además la punta debe estar suficientemente separada del nudillo.
      // Esto evita aceptar un índice plegado sobre sí mismo.
      const largoIndice = distancia3D(mcp,tip);
      const largoPalma = distancia3D(puntos[0],puntos[9]);

      return (
        anguloPIP > 155 &&
        largoIndice > largoPalma*0.72
      );
    }

    function obtenerControlIndice(puntos){

      if(!indiceEstaExtendido(puntos)){
        return {avance:0, giro:0, activo:false};
      }

      const base = puntos[5];
      const punta = puntos[8];

      // Espejo horizontal para coincidir con el PiP.
      let dx = -(punta.x-base.x);
      let dy =  (punta.y-base.y);

      const longitud = Math.hypot(dx,dy);

      if(longitud < 0.035){
        return {avance:0, giro:0, activo:false};
      }

      dx /= longitud;
      dy /= longitud;

      // Solo usamos el hemisferio superior:
      // arriba aporta avance y horizontal aporta giro.
      //
      // ↑          avance=1.00  giro=0.00
      // ↖ / ↗      avance≈0.71  giro≈0.71
      // ← / →      avance=0.00  giro=1.00
      //
      // De esta forma no existen "sectores" bruscos.
      const avance = Math.max(0,-dy);
      const giro = dx;

      return {
        avance,
        giro,
        activo:true
      };
    }

    function dibujarMano(puntos){
      const conexiones = [
        [0,1],[1,2],[2,3],[3,4],
        [0,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[10,11],[11,12],
        [9,13],[13,14],[14,15],[15,16],
        [13,17],[17,18],[18,19],[19,20],
        [0,17]
      ];

      ctx.strokeStyle='#00E5FF';
      ctx.lineWidth=2;

      for(const [ia,ib] of conexiones){
        const a=puntos[ia];
        const b=puntos[ib];

        ctx.beginPath();
        ctx.moveTo(a.x*canvas.width,a.y*canvas.height);
        ctx.lineTo(b.x*canvas.width,b.y*canvas.height);
        ctx.stroke();
      }

      // Resaltamos el índice 5 -> 8.
      const base=puntos[5];
      const punta=puntos[8];

      ctx.strokeStyle='#FFD54A';
      ctx.lineWidth=6;
      ctx.beginPath();
      ctx.moveTo(base.x*canvas.width,base.y*canvas.height);
      ctx.lineTo(punta.x*canvas.width,punta.y*canvas.height);
      ctx.stroke();

      ctx.fillStyle='#FFD54A';
      ctx.beginPath();
      ctx.arc(
        punta.x*canvas.width,
        punta.y*canvas.height,
        7,
        0,
        Math.PI*2
      );
      ctx.fill();
    }

    // ============================================================
    // MOVIMIENTO DEL JUGADOR
    // ============================================================
    function moverJugador(dt){

      // Giro analógico proporcional a la componente horizontal
      // del dedo. A 45° se gira y se avanza simultáneamente.
      jugador.yaw -=
        controlMano.giro *
        VELOCIDAD_GIRO *
        dt;

      // Avance analógico proporcional a cuánto apunta hacia arriba.
      if(controlMano.avance > 0){
        const rad =
          THREE.MathUtils.degToRad(jugador.yaw);

        const forwardX = -Math.sin(rad);
        const forwardZ = -Math.cos(rad);

        jugador.x +=
          forwardX *
          VELOCIDAD_AVANCE *
          controlMano.avance *
          dt;

        jugador.z +=
          forwardZ *
          VELOCIDAD_AVANCE *
          controlMano.avance *
          dt;
      }
    }

    // ============================================================
    // LOOP
    // ============================================================
    function loop(tiempo){
      const dt = Math.min(
        0.05,
        (tiempo-ultimoTiempo)/1000
      );
      ultimoTiempo=tiempo;

      ctx.clearRect(0,0,canvas.width,canvas.height);

      if(video.readyState >= 2){

        // -------- CARA --------
        const caras =
          faceDetector.detectForVideo(video,tiempo);

        if(caras.detections.length){
          procesarCara(caras.detections[0]);
        }

        // -------- MANOS --------
        const manos =
          handLandmarker.detectForVideo(video,tiempo);

        controlMano={avance:0,giro:0,activo:false};

        if(manos.landmarks.length){
          // Usamos la primera mano detectada como mando.
          const puntos=manos.landmarks[0];

          controlMano=obtenerControlIndice(puntos);
          dibujarMano(puntos);
        }
      }

      moverJugador(dt);

      // Suavizado independiente del movimiento de la cabeza.
      headActual.x +=
        (headObjetivo.x-headActual.x)*SUAVIZADO;

      headActual.y +=
        (headObjetivo.y-headActual.y)*SUAVIZADO;

      headActual.z +=
        (headObjetivo.z-headActual.z)*SUAVIZADO;

      // Transformamos el pequeño desplazamiento de cabeza desde
      // coordenadas locales del jugador a coordenadas del mundo.
      const yawRad =
        THREE.MathUtils.degToRad(jugador.yaw);

      const hx =
        headActual.x*Math.cos(yawRad) -
        headActual.z*Math.sin(yawRad);

      const hz =
        headActual.x*Math.sin(yawRad) +
        headActual.z*Math.cos(yawRad);

      rig.setAttribute(
        'position',
        `${jugador.x+hx} ${jugador.y+headActual.y} ${jugador.z+hz}`
      );

      rig.setAttribute(
        'rotation',
        `0 ${jugador.yaw} 0`
      );

      let texto='✋ neutro';

      if(controlMano.activo){
        const avancePct=Math.round(controlMano.avance*100);
        const giroPct=Math.round(Math.abs(controlMano.giro)*100);

        let direccion='recto';

        if(controlMano.giro < -0.08){
          direccion='izquierda';
        }else if(controlMano.giro > 0.08){
          direccion='derecha';
        }

        texto =
          `☝ avance ${avancePct}% · giro ${direccion} ${giroPct}%`;
      }

      estado.textContent =
        `Cabeza: paralaje · Mano: ${texto}`;

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  </script>
</body>
</html>

```
**006-gradual.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    <a-plane rotation="-90 0 0" width="60" height="60" color="#aab59e"></a-plane>

    <!-- Escena densa, con muchas referencias a diferentes profundidades -->
    <a-box position="-4 0.65 -3" width="1.2" height="1.3" depth="1.2" color="#c95b5b"></a-box>
    <a-cone position="3.8 0.9 -3.5" radius-bottom="0.9" radius-top="0.15" height="1.8" color="#e29b55"></a-cone>
    <a-sphere position="-1.6 0.7 -4" radius="0.7" color="#5b9bd5"></a-sphere>
    <a-torus position="1.5 1.1 -4.5" radius="0.8" radius-tubular="0.16" color="#55a77b"></a-torus>

    <a-cylinder position="-4.5 1 -6" radius="0.65" height="2" color="#d7b45b"></a-cylinder>
    <a-box position="-2.5 1.4 -6.8" width="1.1" height="2.8" depth="1" color="#8067b7"></a-box>
    <a-sphere position="0 1 -6" radius="1" color="#4d91bb"></a-sphere>
    <a-dodecahedron position="2.7 1.1 -6.5" radius="1" color="#bf6c8d"></a-dodecahedron>
    <a-box position="4.8 0.8 -7.2" width="1.5" height="1.6" depth="1.5" rotation="0 25 0" color="#6b8e9b"></a-box>

    <a-torus-knot position="-4 1.4 -9" radius="0.8" radius-tubular="0.18" color="#b978d0"></a-torus-knot>
    <a-cone position="-1.7 1 -9.5" radius-bottom="1" height="2" color="#5aa879"></a-cone>
    <a-cylinder position="1 1.25 -9" radius="0.75" height="2.5" color="#cf8055"></a-cylinder>
    <a-sphere position="3.8 1.2 -10" radius="1.2" color="#6786c5"></a-sphere>

    <a-box position="-5 1.8 -13" width="1.6" height="3.6" depth="1.2" color="#587d69"></a-box>
    <a-sphere position="-2.5 1.3 -14" radius="1.3" color="#b65f73"></a-sphere>
    <a-torus position="0 1.7 -13" radius="1.3" radius-tubular="0.22" color="#4f8f83"></a-torus>
    <a-box position="2.8 1.2 -14.5" width="2" height="2.4" depth="1.2" rotation="0 -30 0" color="#9b8058"></a-box>
    <a-cone position="5 1.5 -13" radius-bottom="1.2" height="3" color="#7070a8"></a-cone>

    <!-- postes laterales: hacen muy evidente el paralaje -->
    <a-cylinder position="-7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="-7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="-7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>
    <a-cylinder position="7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>

    <a-sphere position="-3 3.5 -5" radius="0.28" color="#eee"></a-sphere>
    <a-sphere position="0 3.2 -8" radius="0.35" color="#eee"></a-sphere>
    <a-sphere position="3 3.8 -11" radius="0.42" color="#eee"></a-sphere>
    <a-sphere position="-1 4 -15" radius="0.5" color="#eee"></a-sphere>


    <!-- =========================================================
         MUNDO DENSO PROCEDURAL
         Se genera una gran zona navegable alrededor del origen.
         ========================================================= -->
    <a-entity id="mundoDenso"></a-entity>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {
      FaceDetector,
      HandLandmarker,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // ============================================================
    // AJUSTES DE HEAD TRACKING
    // ============================================================
    const PARALLAX_X = 1.25;
    const PARALLAX_Y = 0.75;
    const PARALLAX_Z = 1.00;
    const SUAVIZADO   = 0.10;

    // ============================================================
    // AJUSTES DE CONTROL CON EL ÍNDICE
    // ============================================================
    const VELOCIDAD_AVANCE = 3.2;   // velocidad máxima, unidades/segundo
    const VELOCIDAD_GIRO   = 72;    // velocidad máxima, grados/segundo

    // Inercia / aceleración.
    // Valores mayores = respuesta más rápida.
    const ACELERACION_AVANCE = 3.2;
    const FRENADO_AVANCE     = 4.2;
    const ACELERACION_GIRO   = 4.5;
    const FRENADO_GIRO       = 5.5;

    // Para evitar cambios de gesto por pequeños temblores.
    // Se compara la dirección 2D del índice: nudillo MCP(5) -> punta(8).
    const UMBRAL_GESTO = 0.45;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let faceDetector;
    let handLandmarker;

    // Head tracking: desplazamiento local respecto al jugador.
    let headObjetivo = {x:0,y:0,z:0};
    let headActual   = {x:0,y:0,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    // Navegación tipo WASD.
    let jugador = {x:0, y:1.6, z:0, yaw:0};
    let controlMano = {avance:0, giro:0, activo:false};

    // Valores reales con inercia. El dedo define el objetivo,
    // pero la velocidad tarda un poco en alcanzarlo o volver a cero.
    let avanceActual = 0;
    let giroActual = 0;
    let ultimoTiempo = performance.now();

    // ============================================================
    // MUNDO 3D MUCHO MÁS DENSO
    // ============================================================
    function randomDeterminista(n){
      const x=Math.sin(n*12.9898+78.233)*43758.5453;
      return x-Math.floor(x);
    }

    function crearMundoDenso(){
      const mundo=document.querySelector('#mundoDenso');

      // Suelo grande con cuadrícula visual.
      const suelo=document.createElement('a-plane');
      suelo.setAttribute('rotation','-90 0 0');
      suelo.setAttribute('width','120');
      suelo.setAttribute('height','120');
      suelo.setAttribute('color','#18232d');
      suelo.setAttribute('roughness','0.95');
      mundo.appendChild(suelo);

      // Corredor central algo despejado para poder empezar a navegar.
      // El resto forma una "ciudad abstracta" muy densa.
      let semilla=1;

      for(let z=-3;z>-58;z-=2.35){
        for(let x=-24;x<=24;x+=2.35){
          semilla++;

          // Dejamos una avenida irregular en torno a x=0.
          if(Math.abs(x)<2.3 && randomDeterminista(semilla)<0.86){
            continue;
          }

          // Algunos huecos hacen que se pueda serpentear entre objetos.
          if(randomDeterminista(semilla+20)<0.12){
            continue;
          }

          const r1=randomDeterminista(semilla);
          const r2=randomDeterminista(semilla+1);
          const r3=randomDeterminista(semilla+2);
          const r4=randomDeterminista(semilla+3);

          const entidad=document.createElement('a-entity');

          const px=x+(r1-.5)*1.0;
          const pz=z+(r2-.5)*1.0;
          const altura=0.7+r3*5.5;
          const ancho=0.35+r4*1.15;

          const tipos=['box','cylinder','cone','dodecahedron'];
          const tipo=tipos[Math.floor(r1*tipos.length)];

          entidad.setAttribute('geometry',
            `primitive:${tipo}; `+
            (tipo==='box'
              ? `width:${ancho}; height:${altura}; depth:${ancho}`
              : tipo==='cylinder'
              ? `radius:${ancho*.48}; height:${altura}; segmentsRadial:10`
              : tipo==='cone'
              ? `radiusBottom:${ancho*.55}; radiusTop:0.05; height:${altura}; segmentsRadial:10`
              : `radius:${ancho*.62}`)
          );

          entidad.setAttribute(
            'position',
            `${px} ${tipo==='dodecahedron' ? 0.5+r3*3.5 : altura/2} ${pz}`
          );

          const hue=Math.floor(175+r2*160);
          entidad.setAttribute(
            'material',
            `color:hsl(${hue},55%,${38+r1*25}%); `+
            `roughness:${0.45+r3*.45}; metalness:${r4*.25}`
          );

          if(tipo==='dodecahedron'){
            entidad.setAttribute(
              'animation',
              `property:rotation; to:${r1*180} 360 ${r2*180}; `+
              `loop:true; dur:${9000+r3*16000}; easing:linear`
            );
          }

          mundo.appendChild(entidad);
        }
      }

      // Anillos suspendidos a diferentes profundidades.
      for(let i=0;i<38;i++){
        const r=randomDeterminista(500+i);
        const aro=document.createElement('a-torus');

        aro.setAttribute(
          'position',
          `${(r-.5)*34} ${1+randomDeterminista(600+i)*7} ${-5-i*1.35}`
        );
        aro.setAttribute(
          'rotation',
          `${randomDeterminista(700+i)*180} ${randomDeterminista(800+i)*180} 0`
        );
        aro.setAttribute('radius',`${0.3+randomDeterminista(900+i)*0.9}`);
        aro.setAttribute('radius-tubular','0.055');
        aro.setAttribute(
          'color',
          `hsl(${Math.floor(randomDeterminista(1000+i)*360)},65%,58%)`
        );
        mundo.appendChild(aro);
      }

      // Luces/postes que marcan la avenida principal y dan referencias
      // de profundidad muy claras al avanzar.
      for(let z=-4;z>-58;z-=3){
        for(const x of [-2.7,2.7]){
          const poste=document.createElement('a-cylinder');
          poste.setAttribute('position',`${x} 0.65 ${z}`);
          poste.setAttribute('radius','0.055');
          poste.setAttribute('height','1.3');
          poste.setAttribute('color','#90a4ae');
          mundo.appendChild(poste);

          const esfera=document.createElement('a-sphere');
          esfera.setAttribute('position',`${x} 1.38 ${z}`);
          esfera.setAttribute('radius','0.13');
          esfera.setAttribute('color','#fff59d');
          esfera.setAttribute(
            'material',
            'emissive:#fff59d; emissiveIntensity:0.65'
          );
          mundo.appendChild(esfera);
        }
      }
    }

    crearMundoDenso();

    // ============================================================
    // WEBCAM ÚNICA COMPARTIDA POR CARA + MANOS
    // ============================================================
    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},
      audio:false
    });

    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    // ============================================================
    // MEDIAPIPE FACE
    // ============================================================
    faceDetector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    // ============================================================
    // MEDIAPIPE HANDS
    // ============================================================
    handLandmarker = await HandLandmarker.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task'
      },
      runningMode:'VIDEO',
      numHands:2,
      minHandDetectionConfidence:0.5,
      minHandPresenceConfidence:0.5,
      minTrackingConfidence:0.5
    });

    estado.textContent =
      'Cabeza: paralaje · Índice: ↑ avanzar · ← girar izq. · → girar der.';

    // ============================================================
    // CARA
    // ============================================================
    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx,y:fy};
      }

      const nx = -(fx-centroReferencia.x)*2;
      const ny =  (fy-centroReferencia.y)*2;

      const area =
        (b.width*b.height) /
        (video.videoWidth*video.videoHeight);

      if(caraReferencia === null){
        caraReferencia = area;
      }

      const dz = Math.max(
        -1,
        Math.min(1,(area/caraReferencia)-1)
      );

      headObjetivo.x = nx*PARALLAX_X;
      headObjetivo.y = -ny*PARALLAX_Y;
      headObjetivo.z = -dz*PARALLAX_Z;

      // Bounding box de la cara
      const sx = canvas.width/video.videoWidth;
      const sy = canvas.height/video.videoHeight;

      ctx.strokeStyle='#7CFF72';
      ctx.lineWidth=3;
      ctx.strokeRect(
        b.originX*sx,
        b.originY*sy,
        b.width*sx,
        b.height*sy
      );
    }

    // ============================================================
    // DIRECCIÓN DEL DEDO ÍNDICE
    //
    // Landmark 5 = base del índice
    // Landmark 8 = punta del índice
    //
    // Como el PiP está espejado visualmente, invertimos dx para que
    // "apuntar a la izquierda" coincida con lo que ve el usuario.
    // ============================================================
    function distancia3D(a,b){
      return Math.hypot(
        a.x-b.x,
        a.y-b.y,
        (a.z ?? 0)-(b.z ?? 0)
      );
    }

    function indiceEstaExtendido(puntos){
      const mcp = puntos[5]; // nudillo
      const pip = puntos[6];
      const dip = puntos[7];
      const tip = puntos[8]; // punta

      // Vector PIP -> MCP
      const ax = mcp.x-pip.x;
      const ay = mcp.y-pip.y;
      const az = (mcp.z ?? 0)-(pip.z ?? 0);

      // Vector PIP -> TIP
      const bx = tip.x-pip.x;
      const by = tip.y-pip.y;
      const bz = (tip.z ?? 0)-(pip.z ?? 0);

      const ma = Math.hypot(ax,ay,az);
      const mb = Math.hypot(bx,by,bz);

      if(ma < 0.0001 || mb < 0.0001){
        return false;
      }

      // Si el dedo está recto, MCP y TIP quedan en direcciones
      // casi opuestas respecto a PIP: ángulo cercano a 180 grados.
      const cosAngulo = Math.max(
        -1,
        Math.min(
          1,
          (ax*bx + ay*by + az*bz)/(ma*mb)
        )
      );

      const anguloPIP =
        Math.acos(cosAngulo)*180/Math.PI;

      // Además la punta debe estar suficientemente separada del nudillo.
      // Esto evita aceptar un índice plegado sobre sí mismo.
      const largoIndice = distancia3D(mcp,tip);
      const largoPalma = distancia3D(puntos[0],puntos[9]);

      return (
        anguloPIP > 155 &&
        largoIndice > largoPalma*0.72
      );
    }

    function obtenerControlIndice(puntos){

      if(!indiceEstaExtendido(puntos)){
        return {avance:0, giro:0, activo:false};
      }

      const base = puntos[5];
      const punta = puntos[8];

      // Espejo horizontal para coincidir con el PiP.
      let dx = -(punta.x-base.x);
      let dy =  (punta.y-base.y);

      const longitud = Math.hypot(dx,dy);

      if(longitud < 0.035){
        return {avance:0, giro:0, activo:false};
      }

      dx /= longitud;
      dy /= longitud;

      // Solo usamos el hemisferio superior:
      // arriba aporta avance y horizontal aporta giro.
      //
      // ↑          avance=1.00  giro=0.00
      // ↖ / ↗      avance≈0.71  giro≈0.71
      // ← / →      avance=0.00  giro=1.00
      //
      // De esta forma no existen "sectores" bruscos.
      const avance = Math.max(0,-dy);
      const giro = dx;

      return {
        avance,
        giro,
        activo:true
      };
    }

    function dibujarMano(puntos){
      const conexiones = [
        [0,1],[1,2],[2,3],[3,4],
        [0,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[10,11],[11,12],
        [9,13],[13,14],[14,15],[15,16],
        [13,17],[17,18],[18,19],[19,20],
        [0,17]
      ];

      ctx.strokeStyle='#00E5FF';
      ctx.lineWidth=2;

      for(const [ia,ib] of conexiones){
        const a=puntos[ia];
        const b=puntos[ib];

        ctx.beginPath();
        ctx.moveTo(a.x*canvas.width,a.y*canvas.height);
        ctx.lineTo(b.x*canvas.width,b.y*canvas.height);
        ctx.stroke();
      }

      // Resaltamos el índice 5 -> 8.
      const base=puntos[5];
      const punta=puntos[8];

      ctx.strokeStyle='#FFD54A';
      ctx.lineWidth=6;
      ctx.beginPath();
      ctx.moveTo(base.x*canvas.width,base.y*canvas.height);
      ctx.lineTo(punta.x*canvas.width,punta.y*canvas.height);
      ctx.stroke();

      ctx.fillStyle='#FFD54A';
      ctx.beginPath();
      ctx.arc(
        punta.x*canvas.width,
        punta.y*canvas.height,
        7,
        0,
        Math.PI*2
      );
      ctx.fill();
    }

    // ============================================================
    // MOVIMIENTO DEL JUGADOR
    // ============================================================
    function acercar(actual, objetivo, rapidez, dt){
      // Interpolación exponencial independiente del framerate.
      const k = 1-Math.exp(-rapidez*dt);
      return actual+(objetivo-actual)*k;
    }

    function moverJugador(dt){

      const objetivoAvance =
        controlMano.activo ? controlMano.avance : 0;

      const objetivoGiro =
        controlMano.activo ? controlMano.giro : 0;

      // Aceleramos y frenamos con constantes distintas.
      avanceActual = acercar(
        avanceActual,
        objetivoAvance,
        objetivoAvance > avanceActual
          ? ACELERACION_AVANCE
          : FRENADO_AVANCE,
        dt
      );

      giroActual = acercar(
        giroActual,
        objetivoGiro,
        Math.abs(objetivoGiro) > Math.abs(giroActual)
          ? ACELERACION_GIRO
          : FRENADO_GIRO,
        dt
      );

      // Eliminamos residuos diminutos al frenar.
      if(Math.abs(avanceActual)<0.002) avanceActual=0;
      if(Math.abs(giroActual)<0.002) giroActual=0;

      jugador.yaw -=
        giroActual *
        VELOCIDAD_GIRO *
        dt;

      if(avanceActual > 0){
        const rad =
          THREE.MathUtils.degToRad(jugador.yaw);

        const forwardX = -Math.sin(rad);
        const forwardZ = -Math.cos(rad);

        jugador.x +=
          forwardX *
          VELOCIDAD_AVANCE *
          avanceActual *
          dt;

        jugador.z +=
          forwardZ *
          VELOCIDAD_AVANCE *
          avanceActual *
          dt;
      }
    }

    // ============================================================
    // LOOP
    // ============================================================
    function loop(tiempo){
      const dt = Math.min(
        0.05,
        (tiempo-ultimoTiempo)/1000
      );
      ultimoTiempo=tiempo;

      ctx.clearRect(0,0,canvas.width,canvas.height);

      if(video.readyState >= 2){

        // -------- CARA --------
        const caras =
          faceDetector.detectForVideo(video,tiempo);

        if(caras.detections.length){
          procesarCara(caras.detections[0]);
        }

        // -------- MANOS --------
        const manos =
          handLandmarker.detectForVideo(video,tiempo);

        controlMano={avance:0,giro:0,activo:false};

        if(manos.landmarks.length){
          // Usamos la primera mano detectada como mando.
          const puntos=manos.landmarks[0];

          controlMano=obtenerControlIndice(puntos);
          dibujarMano(puntos);
        }
      }

      moverJugador(dt);

      // Suavizado independiente del movimiento de la cabeza.
      headActual.x +=
        (headObjetivo.x-headActual.x)*SUAVIZADO;

      headActual.y +=
        (headObjetivo.y-headActual.y)*SUAVIZADO;

      headActual.z +=
        (headObjetivo.z-headActual.z)*SUAVIZADO;

      // Transformamos el pequeño desplazamiento de cabeza desde
      // coordenadas locales del jugador a coordenadas del mundo.
      const yawRad =
        THREE.MathUtils.degToRad(jugador.yaw);

      const hx =
        headActual.x*Math.cos(yawRad) -
        headActual.z*Math.sin(yawRad);

      const hz =
        headActual.x*Math.sin(yawRad) +
        headActual.z*Math.cos(yawRad);

      rig.setAttribute(
        'position',
        `${jugador.x+hx} ${jugador.y+headActual.y} ${jugador.z+hz}`
      );

      rig.setAttribute(
        'rotation',
        `0 ${jugador.yaw} 0`
      );

      let texto='✋ neutro';

      if(controlMano.activo){
        const avancePct=Math.round(controlMano.avance*100);
        const giroPct=Math.round(Math.abs(controlMano.giro)*100);

        let direccion='recto';

        if(controlMano.giro < -0.08){
          direccion='izquierda';
        }else if(controlMano.giro > 0.08){
          direccion='derecha';
        }

        texto =
          `☝ avance ${avancePct}% · giro ${direccion} ${giroPct}%`;
      }

      estado.textContent =
        `Cabeza: paralaje · Mano: ${texto} · velocidad ${Math.round(avanceActual*100)}%`;

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  </script>
</body>
</html>

```
**007-ciudad.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    

    <!-- Escena densa, con muchas referencias a diferentes profundidades -->
    <a-box position="-4 0.65 -3" width="1.2" height="1.3" depth="1.2" color="#c95b5b"></a-box>
    <a-cone position="3.8 0.9 -3.5" radius-bottom="0.9" radius-top="0.15" height="1.8" color="#e29b55"></a-cone>
    <a-sphere position="-1.6 0.7 -4" radius="0.7" color="#5b9bd5"></a-sphere>
    <a-torus position="1.5 1.1 -4.5" radius="0.8" radius-tubular="0.16" color="#55a77b"></a-torus>

    <a-cylinder position="-4.5 1 -6" radius="0.65" height="2" color="#d7b45b"></a-cylinder>
    <a-box position="-2.5 1.4 -6.8" width="1.1" height="2.8" depth="1" color="#8067b7"></a-box>
    <a-sphere position="0 1 -6" radius="1" color="#4d91bb"></a-sphere>
    <a-dodecahedron position="2.7 1.1 -6.5" radius="1" color="#bf6c8d"></a-dodecahedron>
    <a-box position="4.8 0.8 -7.2" width="1.5" height="1.6" depth="1.5" rotation="0 25 0" color="#6b8e9b"></a-box>

    <a-torus-knot position="-4 1.4 -9" radius="0.8" radius-tubular="0.18" color="#b978d0"></a-torus-knot>
    <a-cone position="-1.7 1 -9.5" radius-bottom="1" height="2" color="#5aa879"></a-cone>
    <a-cylinder position="1 1.25 -9" radius="0.75" height="2.5" color="#cf8055"></a-cylinder>
    <a-sphere position="3.8 1.2 -10" radius="1.2" color="#6786c5"></a-sphere>

    <a-box position="-5 1.8 -13" width="1.6" height="3.6" depth="1.2" color="#587d69"></a-box>
    <a-sphere position="-2.5 1.3 -14" radius="1.3" color="#b65f73"></a-sphere>
    <a-torus position="0 1.7 -13" radius="1.3" radius-tubular="0.22" color="#4f8f83"></a-torus>
    <a-box position="2.8 1.2 -14.5" width="2" height="2.4" depth="1.2" rotation="0 -30 0" color="#9b8058"></a-box>
    <a-cone position="5 1.5 -13" radius-bottom="1.2" height="3" color="#7070a8"></a-cone>

    <!-- postes laterales: hacen muy evidente el paralaje -->
    <a-cylinder position="-7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="-7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="-7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>
    <a-cylinder position="7 1.5 -5" radius="0.22" height="3" color="#555"></a-cylinder>
    <a-cylinder position="7 1.5 -9" radius="0.22" height="3" color="#666"></a-cylinder>
    <a-cylinder position="7 1.5 -13" radius="0.22" height="3" color="#777"></a-cylinder>

    <a-sphere position="-3 3.5 -5" radius="0.28" color="#eee"></a-sphere>
    <a-sphere position="0 3.2 -8" radius="0.35" color="#eee"></a-sphere>
    <a-sphere position="3 3.8 -11" radius="0.42" color="#eee"></a-sphere>
    <a-sphere position="-1 4 -15" radius="0.5" color="#eee"></a-sphere>


    <!-- =========================================================
         MUNDO DENSO PROCEDURAL
         Se genera una gran zona navegable alrededor del origen.
         ========================================================= -->
    <a-entity id="mundoDenso"></a-entity>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {
      FaceDetector,
      HandLandmarker,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // ============================================================
    // AJUSTES DE HEAD TRACKING
    // ============================================================
    const PARALLAX_X = 1.25;
    const PARALLAX_Y = 0.75;
    const PARALLAX_Z = 1.00;
    const SUAVIZADO   = 0.10;

    // ============================================================
    // AJUSTES DE CONTROL CON EL ÍNDICE
    // ============================================================
    const VELOCIDAD_AVANCE = 3.2;   // velocidad máxima, unidades/segundo
    const VELOCIDAD_GIRO   = 72;    // velocidad máxima, grados/segundo

    // Inercia / aceleración.
    // Valores mayores = respuesta más rápida.
    const ACELERACION_AVANCE = 3.2;
    const FRENADO_AVANCE     = 4.2;
    const ACELERACION_GIRO   = 4.5;
    const FRENADO_GIRO       = 5.5;

    // Para evitar cambios de gesto por pequeños temblores.
    // Se compara la dirección 2D del índice: nudillo MCP(5) -> punta(8).
    const UMBRAL_GESTO = 0.45;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let faceDetector;
    let handLandmarker;

    // Head tracking: desplazamiento local respecto al jugador.
    let headObjetivo = {x:0,y:0,z:0};
    let headActual   = {x:0,y:0,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    // Navegación tipo WASD.
    let jugador = {x:0, y:1.6, z:0, yaw:0};
    let controlMano = {avance:0, giro:0, activo:false};

    // Valores reales con inercia. El dedo define el objetivo,
    // pero la velocidad tarda un poco en alcanzarlo o volver a cero.
    let avanceActual = 0;
    let giroActual = 0;
    let ultimoTiempo = performance.now();

    // ============================================================
    // MUNDO 3D MUCHO MÁS DENSO
    // ============================================================
    function randomDeterminista(n){
      const x=Math.sin(n*12.9898+78.233)*43758.5453;
      return x-Math.floor(x);
    }

    function crearMundoDenso(){
      const mundo=document.querySelector('#mundoDenso');

      // ------------------------------------------------------------
      // UN SOLO SUELO
      // Evita z-fighting: ninguna segunda superficie coplanar.
      // Las calles se dibujan 2 cm por encima del terreno.
      // ------------------------------------------------------------
      const suelo=document.createElement('a-plane');
      suelo.setAttribute('rotation','-90 0 0');
      suelo.setAttribute('width','150');
      suelo.setAttribute('height','180');
      suelo.setAttribute('position','0 0 -55');
      suelo.setAttribute('color','#20262d');
      suelo.setAttribute('roughness','1');
      mundo.appendChild(suelo);

      function caja(x,y,z,w,h,d,color){
        const e=document.createElement('a-box');
        e.setAttribute('position',`${x} ${y} ${z}`);
        e.setAttribute('width',w);
        e.setAttribute('height',h);
        e.setAttribute('depth',d);
        e.setAttribute('color',color);
        e.setAttribute('roughness','0.8');
        mundo.appendChild(e);
        return e;
      }

      function cilindro(x,y,z,r,h,color){
        const e=document.createElement('a-cylinder');
        e.setAttribute('position',`${x} ${y} ${z}`);
        e.setAttribute('radius',r);
        e.setAttribute('height',h);
        e.setAttribute('segments-radial','10');
        e.setAttribute('color',color);
        mundo.appendChild(e);
        return e;
      }

      function esfera(x,y,z,r,color){
        const e=document.createElement('a-sphere');
        e.setAttribute('position',`${x} ${y} ${z}`);
        e.setAttribute('radius',r);
        e.setAttribute('segments-width','12');
        e.setAttribute('segments-height','8');
        e.setAttribute('color',color);
        mundo.appendChild(e);
        return e;
      }

      // ------------------------------------------------------------
      // RED DE CALLES
      // ------------------------------------------------------------
      // Avenida principal.
      caja(0,0.012,-55,7.2,0.024,110,'#30363d');

      // Calles transversales.
      for(let z=-8;z>=-104;z-=12){
        caja(0,0.014,z,76,0.026,4.4,'#343a40');
      }

      // Aceras: elevadas, no coplanares.
      for(const x of [-4.3,4.3]){
        caja(x,0.09,-55,1.35,0.18,110,'#737b82');
      }

      // Líneas centrales discontinuas, físicamente separadas del asfalto.
      for(let z=-4;z>-108;z-=4.2){
        caja(0,0.035,z,0.11,0.035,1.8,'#d9c96b');
      }

      // ------------------------------------------------------------
      // MANZANAS + EDIFICIOS PROCEDURALES
      // ------------------------------------------------------------
      let semilla=100;

      const centrosX=[-28,-20,-12,12,20,28];

      for(let bloque=0;bloque<9;bloque++){
        const cz=-8-bloque*12;

        for(const cx of centrosX){
          semilla++;

          // Base de la manzana.
          caja(cx,0.12,cz,6.2,0.24,7.1,'#596168');

          // 2-4 edificios por manzana.
          const cantidad=2+Math.floor(randomDeterminista(semilla)*3);

          for(let j=0;j<cantidad;j++){
            const r1=randomDeterminista(semilla*11+j);
            const r2=randomDeterminista(semilla*13+j);
            const r3=randomDeterminista(semilla*17+j);
            const r4=randomDeterminista(semilla*19+j);

            const px=cx+(r1-.5)*3.7;
            const pz=cz+(r2-.5)*4.2;
            const h=2.2+r3*10;
            const w=1.25+r4*2.3;
            const d=1.25+randomDeterminista(semilla*23+j)*2.2;

            const hue=Math.floor(185+r1*150);
            const color=`hsl(${hue},42%,${34+r2*24}%)`;

            // La mayoría son torres cúbicas; algunas son cilíndricas.
            if(r4<0.72){
              caja(px,h/2+0.24,pz,w,h,d,color);

              // Azotea escalonada.
              if(r3>.58){
                caja(
                  px,h+0.48,pz,
                  w*.58,.72,d*.58,
                  `hsl(${hue},35%,48%)`
                );
              }
            }else{
              cilindro(px,h/2+0.24,pz,w*.48,h,color);
            }

            // Ventanas simplificadas: pequeños paneles salientes.
            // No son coplanares con la fachada para evitar z-fighting.
            if(j===0 && h>4){
              for(let fy=1.3;fy<h-0.5;fy+=1.35){
                const ventana=document.createElement('a-box');
                ventana.setAttribute(
                  'position',
                  `${px} ${fy+0.24} ${pz+d/2+0.018}`
                );
                ventana.setAttribute('width',Math.max(.35,w*.45));
                ventana.setAttribute('height','.32');
                ventana.setAttribute('depth','.04');
                ventana.setAttribute('color','#b8e6ff');
                ventana.setAttribute(
                  'material',
                  'emissive:#7fc8e8; emissiveIntensity:0.18'
                );
                mundo.appendChild(ventana);
              }
            }
          }
        }
      }

      // ------------------------------------------------------------
      // PLAZA CENTRAL
      // ------------------------------------------------------------
      caja(0,0.025,-56,18,0.05,8,'#515961');

      // Fuente geométrica.
      cilindro(0,.18,-56,1.65,.35,'#77838c');
      cilindro(0,.32,-56,1.18,.28,'#263f52');
      esfera(0,1.05,-56,.62,'#55b9d1');

      // Obeliscos alrededor de la plaza.
      for(let i=0;i<8;i++){
        const a=(i/8)*Math.PI*2;
        const x=Math.cos(a)*5.7;
        const z=-56+Math.sin(a)*2.7;

        const cono=document.createElement('a-cone');
        cono.setAttribute('position',`${x} 1.35 ${z}`);
        cono.setAttribute('radius-bottom','.42');
        cono.setAttribute('radius-top','.08');
        cono.setAttribute('height','2.7');
        cono.setAttribute('segments-radial','8');
        cono.setAttribute(
          'color',
          `hsl(${Math.floor(i*45)},55%,55%)`
        );
        mundo.appendChild(cono);
      }

      // ------------------------------------------------------------
      // FAROLAS
      // ------------------------------------------------------------
      for(let z=-4;z>-108;z-=4){
        for(const x of [-3.35,3.35]){
          cilindro(x,.85,z,.055,1.7,'#87919a');

          const luz=esfera(x,1.78,z,.13,'#fff0a5');
          luz.setAttribute(
            'material',
            'color:#fff0a5; emissive:#ffe082; emissiveIntensity:0.75'
          );
        }
      }

      // ------------------------------------------------------------
      // ÁRBOLES DE PRIMITIVAS
      // ------------------------------------------------------------
      for(let i=0;i<70;i++){
        const r1=randomDeterminista(3000+i);
        const r2=randomDeterminista(4000+i);

        // Árboles en laterales y algunas plazas.
        const lado=r1<.5 ? -1 : 1;
        const x=lado*(5.5+r2*3.4);
        const z=-4-randomDeterminista(5000+i)*103;

        cilindro(x,.65,z,.12,1.3,'#74543a');

        const copa=document.createElement(
          randomDeterminista(6000+i)>.45
            ? 'a-dodecahedron'
            : 'a-sphere'
        );
        copa.setAttribute('position',`${x} 1.65 ${z}`);
        copa.setAttribute('radius',`${.48+randomDeterminista(7000+i)*.38}`);
        copa.setAttribute(
          'color',
          `hsl(${105+Math.floor(r2*35)},45%,${32+Math.floor(r1*18)}%)`
        );
        mundo.appendChild(copa);
      }

      // ------------------------------------------------------------
      // ARCOS / PUERTAS URBANAS
      // Referencias visuales fuertes para el paralaje.
      // ------------------------------------------------------------
      for(let z=-18;z>-104;z-=24){
        caja(-3.2,2.1,z,.45,4.2,.45,'#8d6e63');
        caja( 3.2,2.1,z,.45,4.2,.45,'#8d6e63');
        caja(0,4.05,z,6.8,.45,.45,'#8d6e63');

        const aro=document.createElement('a-torus');
        aro.setAttribute('position',`0 3.15 ${z-.04}`);
        aro.setAttribute('rotation','0 0 0');
        aro.setAttribute('radius','1.05');
        aro.setAttribute('radius-tubular','.11');
        aro.setAttribute('color','#ffd166');
        mundo.appendChild(aro);
      }

      // ------------------------------------------------------------
      // OBJETOS URBANOS: bancos, bolardos y esculturas
      // ------------------------------------------------------------
      for(let z=-10;z>-102;z-=12){
        for(const x of [-5.1,5.1]){
          // Banco.
          caja(x,.38,z,1.25,.14,.45,'#8b5e3c');
          caja(x,.68,z+.18,1.25,.55,.12,'#8b5e3c');

          // Bolardos.
          for(const dz of [-2.0,2.0]){
            cilindro(x,.3,z+dz,.10,.6,'#626b73');
          }
        }
      }

      // Esculturas flotantes en cruces.
      for(let i=0;i<8;i++){
        const z=-14-i*12;
        const figura=document.createElement(
          i%2 ? 'a-octahedron' : 'a-torus-knot'
        );

        figura.setAttribute(
          'position',
          `${i%2 ? 7.5 : -7.5} ${2.4+(i%3)*.45} ${z}`
        );

        if(i%2){
          figura.setAttribute('radius','0.72');
        }else{
          figura.setAttribute('radius','.52');
          figura.setAttribute('radius-tubular','.13');
        }

        figura.setAttribute(
          'color',
          `hsl(${(i*47)%360},62%,58%)`
        );

        figura.setAttribute(
          'animation',
          `property:rotation; to:0 360 0; loop:true; dur:${9000+i*700}; easing:linear`
        );

        mundo.appendChild(figura);
      }
    }

    crearMundoDenso();

    // ============================================================
    // WEBCAM ÚNICA COMPARTIDA POR CARA + MANOS
    // ============================================================
    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},
      audio:false
    });

    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    // ============================================================
    // MEDIAPIPE FACE
    // ============================================================
    faceDetector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    // ============================================================
    // MEDIAPIPE HANDS
    // ============================================================
    handLandmarker = await HandLandmarker.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task'
      },
      runningMode:'VIDEO',
      numHands:2,
      minHandDetectionConfidence:0.5,
      minHandPresenceConfidence:0.5,
      minTrackingConfidence:0.5
    });

    estado.textContent =
      'Cabeza: paralaje · Índice: ↑ avanzar · ← girar izq. · → girar der.';

    // ============================================================
    // CARA
    // ============================================================
    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx,y:fy};
      }

      const nx = -(fx-centroReferencia.x)*2;
      const ny =  (fy-centroReferencia.y)*2;

      const area =
        (b.width*b.height) /
        (video.videoWidth*video.videoHeight);

      if(caraReferencia === null){
        caraReferencia = area;
      }

      const dz = Math.max(
        -1,
        Math.min(1,(area/caraReferencia)-1)
      );

      headObjetivo.x = nx*PARALLAX_X;
      headObjetivo.y = -ny*PARALLAX_Y;
      headObjetivo.z = -dz*PARALLAX_Z;

      // Bounding box de la cara
      const sx = canvas.width/video.videoWidth;
      const sy = canvas.height/video.videoHeight;

      ctx.strokeStyle='#7CFF72';
      ctx.lineWidth=3;
      ctx.strokeRect(
        b.originX*sx,
        b.originY*sy,
        b.width*sx,
        b.height*sy
      );
    }

    // ============================================================
    // DIRECCIÓN DEL DEDO ÍNDICE
    //
    // Landmark 5 = base del índice
    // Landmark 8 = punta del índice
    //
    // Como el PiP está espejado visualmente, invertimos dx para que
    // "apuntar a la izquierda" coincida con lo que ve el usuario.
    // ============================================================
    function distancia3D(a,b){
      return Math.hypot(
        a.x-b.x,
        a.y-b.y,
        (a.z ?? 0)-(b.z ?? 0)
      );
    }

    function indiceEstaExtendido(puntos){
      const mcp = puntos[5]; // nudillo
      const pip = puntos[6];
      const dip = puntos[7];
      const tip = puntos[8]; // punta

      // Vector PIP -> MCP
      const ax = mcp.x-pip.x;
      const ay = mcp.y-pip.y;
      const az = (mcp.z ?? 0)-(pip.z ?? 0);

      // Vector PIP -> TIP
      const bx = tip.x-pip.x;
      const by = tip.y-pip.y;
      const bz = (tip.z ?? 0)-(pip.z ?? 0);

      const ma = Math.hypot(ax,ay,az);
      const mb = Math.hypot(bx,by,bz);

      if(ma < 0.0001 || mb < 0.0001){
        return false;
      }

      // Si el dedo está recto, MCP y TIP quedan en direcciones
      // casi opuestas respecto a PIP: ángulo cercano a 180 grados.
      const cosAngulo = Math.max(
        -1,
        Math.min(
          1,
          (ax*bx + ay*by + az*bz)/(ma*mb)
        )
      );

      const anguloPIP =
        Math.acos(cosAngulo)*180/Math.PI;

      // Además la punta debe estar suficientemente separada del nudillo.
      // Esto evita aceptar un índice plegado sobre sí mismo.
      const largoIndice = distancia3D(mcp,tip);
      const largoPalma = distancia3D(puntos[0],puntos[9]);

      return (
        anguloPIP > 155 &&
        largoIndice > largoPalma*0.72
      );
    }

    function obtenerControlIndice(puntos){

      if(!indiceEstaExtendido(puntos)){
        return {avance:0, giro:0, activo:false};
      }

      const base = puntos[5];
      const punta = puntos[8];

      // Espejo horizontal para coincidir con el PiP.
      let dx = -(punta.x-base.x);
      let dy =  (punta.y-base.y);

      const longitud = Math.hypot(dx,dy);

      if(longitud < 0.035){
        return {avance:0, giro:0, activo:false};
      }

      dx /= longitud;
      dy /= longitud;

      // Solo usamos el hemisferio superior:
      // arriba aporta avance y horizontal aporta giro.
      //
      // ↑          avance=1.00  giro=0.00
      // ↖ / ↗      avance≈0.71  giro≈0.71
      // ← / →      avance=0.00  giro=1.00
      //
      // De esta forma no existen "sectores" bruscos.
      const avance = Math.max(0,-dy);
      const giro = dx;

      return {
        avance,
        giro,
        activo:true
      };
    }

    function dibujarMano(puntos){
      const conexiones = [
        [0,1],[1,2],[2,3],[3,4],
        [0,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[10,11],[11,12],
        [9,13],[13,14],[14,15],[15,16],
        [13,17],[17,18],[18,19],[19,20],
        [0,17]
      ];

      ctx.strokeStyle='#00E5FF';
      ctx.lineWidth=2;

      for(const [ia,ib] of conexiones){
        const a=puntos[ia];
        const b=puntos[ib];

        ctx.beginPath();
        ctx.moveTo(a.x*canvas.width,a.y*canvas.height);
        ctx.lineTo(b.x*canvas.width,b.y*canvas.height);
        ctx.stroke();
      }

      // Resaltamos el índice 5 -> 8.
      const base=puntos[5];
      const punta=puntos[8];

      ctx.strokeStyle='#FFD54A';
      ctx.lineWidth=6;
      ctx.beginPath();
      ctx.moveTo(base.x*canvas.width,base.y*canvas.height);
      ctx.lineTo(punta.x*canvas.width,punta.y*canvas.height);
      ctx.stroke();

      ctx.fillStyle='#FFD54A';
      ctx.beginPath();
      ctx.arc(
        punta.x*canvas.width,
        punta.y*canvas.height,
        7,
        0,
        Math.PI*2
      );
      ctx.fill();
    }

    // ============================================================
    // MOVIMIENTO DEL JUGADOR
    // ============================================================
    function acercar(actual, objetivo, rapidez, dt){
      // Interpolación exponencial independiente del framerate.
      const k = 1-Math.exp(-rapidez*dt);
      return actual+(objetivo-actual)*k;
    }

    function moverJugador(dt){

      const objetivoAvance =
        controlMano.activo ? controlMano.avance : 0;

      const objetivoGiro =
        controlMano.activo ? controlMano.giro : 0;

      // Aceleramos y frenamos con constantes distintas.
      avanceActual = acercar(
        avanceActual,
        objetivoAvance,
        objetivoAvance > avanceActual
          ? ACELERACION_AVANCE
          : FRENADO_AVANCE,
        dt
      );

      giroActual = acercar(
        giroActual,
        objetivoGiro,
        Math.abs(objetivoGiro) > Math.abs(giroActual)
          ? ACELERACION_GIRO
          : FRENADO_GIRO,
        dt
      );

      // Eliminamos residuos diminutos al frenar.
      if(Math.abs(avanceActual)<0.002) avanceActual=0;
      if(Math.abs(giroActual)<0.002) giroActual=0;

      jugador.yaw -=
        giroActual *
        VELOCIDAD_GIRO *
        dt;

      if(avanceActual > 0){
        const rad =
          THREE.MathUtils.degToRad(jugador.yaw);

        const forwardX = -Math.sin(rad);
        const forwardZ = -Math.cos(rad);

        jugador.x +=
          forwardX *
          VELOCIDAD_AVANCE *
          avanceActual *
          dt;

        jugador.z +=
          forwardZ *
          VELOCIDAD_AVANCE *
          avanceActual *
          dt;
      }
    }

    // ============================================================
    // LOOP
    // ============================================================
    function loop(tiempo){
      const dt = Math.min(
        0.05,
        (tiempo-ultimoTiempo)/1000
      );
      ultimoTiempo=tiempo;

      ctx.clearRect(0,0,canvas.width,canvas.height);

      if(video.readyState >= 2){

        // -------- CARA --------
        const caras =
          faceDetector.detectForVideo(video,tiempo);

        if(caras.detections.length){
          procesarCara(caras.detections[0]);
        }

        // -------- MANOS --------
        const manos =
          handLandmarker.detectForVideo(video,tiempo);

        controlMano={avance:0,giro:0,activo:false};

        if(manos.landmarks.length){
          // Usamos la primera mano detectada como mando.
          const puntos=manos.landmarks[0];

          controlMano=obtenerControlIndice(puntos);
          dibujarMano(puntos);
        }
      }

      moverJugador(dt);

      // Suavizado independiente del movimiento de la cabeza.
      headActual.x +=
        (headObjetivo.x-headActual.x)*SUAVIZADO;

      headActual.y +=
        (headObjetivo.y-headActual.y)*SUAVIZADO;

      headActual.z +=
        (headObjetivo.z-headActual.z)*SUAVIZADO;

      // Transformamos el pequeño desplazamiento de cabeza desde
      // coordenadas locales del jugador a coordenadas del mundo.
      const yawRad =
        THREE.MathUtils.degToRad(jugador.yaw);

      const hx =
        headActual.x*Math.cos(yawRad) -
        headActual.z*Math.sin(yawRad);

      const hz =
        headActual.x*Math.sin(yawRad) +
        headActual.z*Math.cos(yawRad);

      rig.setAttribute(
        'position',
        `${jugador.x+hx} ${jugador.y+headActual.y} ${jugador.z+hz}`
      );

      rig.setAttribute(
        'rotation',
        `0 ${jugador.yaw} 0`
      );

      let texto='✋ neutro';

      if(controlMano.activo){
        const avancePct=Math.round(controlMano.avance*100);
        const giroPct=Math.round(Math.abs(controlMano.giro)*100);

        let direccion='recto';

        if(controlMano.giro < -0.08){
          direccion='izquierda';
        }else if(controlMano.giro > 0.08){
          direccion='derecha';
        }

        texto =
          `☝ avance ${avancePct}% · giro ${direccion} ${giroPct}%`;
      }

      estado.textContent =
        `Cabeza: paralaje · Mano: ${texto} · velocidad ${Math.round(avanceActual*100)}%`;

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  </script>
</body>
</html>

```
**008-ciudad.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Realidad aumentada | Seguimiento con MediaPipe</title>
  <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
  <style>
    :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#111;font-family:Arial,sans-serif}
    #pip{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));width:min(280px,30vw);aspect-ratio:4/3;z-index:20;border-radius:16px;overflow:hidden;border:3px solid var(--naranja);box-shadow:0 12px 36px #0008;background:var(--negro)}
    #pip video,#pip canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)}
    #pip canvas{z-index:2;pointer-events:none}
    #pip::before{content:"CÁMARA";position:absolute;top:10px;left:10px;z-index:3;padding:5px 9px;border-radius:999px;background:var(--azul);color:var(--blanco);font-size:10px;font-weight:700;letter-spacing:.08em;pointer-events:none}
    #estado{position:fixed;left:max(16px,env(safe-area-inset-left));top:max(16px,env(safe-area-inset-top));z-index:20;display:flex;align-items:center;gap:10px;max-width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:12px 16px;border:1px solid #1d4ed844;border-left:5px solid var(--naranja);border-radius:12px;background:#fffF;color:var(--negro);box-shadow:0 8px 28px #11182724;font-size:14px;font-weight:600;line-height:1.4}
    #estado::before{content:"";flex:0 0 9px;width:9px;height:9px;border-radius:50%;background:var(--azul);box-shadow:0 0 0 4px #1d4ed822}
    @media(max-width:600px){#estado{top:max(12px,env(safe-area-inset-top));left:max(12px,env(safe-area-inset-left));max-width:calc(100vw - 24px);padding:10px 12px;font-size:12px}#pip{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(190px,42vw);border-radius:13px}}
    @media(max-height:500px) and (orientation:landscape){#pip{width:min(170px,30vw)}#estado{top:max(8px,env(safe-area-inset-top));padding:8px 11px}}
  </style>
</head>
<body>
  <div id="estado" role="status" aria-live="polite">Cargando webcam y MediaPipe…</div>
  <div id="pip" aria-label="Vista de la cámara">
    <video id="video" autoplay muted playsinline></video>
    <canvas id="debug" width="640" height="480"></canvas>
  </div>

  <a-scene renderer="antialias:true; colorManagement:true" background="color:#dce8f2" fog="type: linear; color: #aeb8c2; near: 38; far: 78">
    <a-entity light="type:ambient; intensity:1.1"></a-entity>
    <a-entity light="type:directional; intensity:1.2" position="-2 4 2"></a-entity>

    <a-entity id="mundoDenso"></a-entity>

    <a-entity id="cameraRig" position="0 1.6 0">
      <a-camera id="camera" position="0 0 0" rotation="0 0 0" look-controls="enabled:false" wasd-controls="enabled:false" fov="60" far="90"></a-camera>
    </a-entity>
  </a-scene>

  <script type="module">
    import {
      FaceDetector,
      HandLandmarker,
      FilesetResolver
    } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

    // ============================================================
    // AJUSTES DE HEAD TRACKING
    // ============================================================
    const PARALLAX_X = 1.25;
    const PARALLAX_Y = 0.75;
    const PARALLAX_Z = 1.00;
    const SUAVIZADO   = 0.10;

    // ============================================================
    // AJUSTES DE CONTROL CON EL ÍNDICE
    // ============================================================
    const VELOCIDAD_AVANCE = 3.2;   // velocidad máxima, unidades/segundo
    const VELOCIDAD_GIRO   = 72;    // velocidad máxima, grados/segundo

    // Inercia / aceleración.
    // Valores mayores = respuesta más rápida.
    const ACELERACION_AVANCE = 3.2;
    const FRENADO_AVANCE     = 4.2;
    const ACELERACION_GIRO   = 4.5;
    const FRENADO_GIRO       = 5.5;

    // Para evitar cambios de gesto por pequeños temblores.
    // Se compara la dirección 2D del índice: nudillo MCP(5) -> punta(8).
    const UMBRAL_GESTO = 0.45;

    const video = document.querySelector('#video');
    const canvas = document.querySelector('#debug');
    const ctx = canvas.getContext('2d');
    const estado = document.querySelector('#estado');
    const rig = document.querySelector('#cameraRig');

    let faceDetector;
    let handLandmarker;

    // Head tracking: desplazamiento local respecto al jugador.
    let headObjetivo = {x:0,y:0,z:0};
    let headActual   = {x:0,y:0,z:0};
    let caraReferencia = null;
    let centroReferencia = null;

    // Navegación tipo WASD.
    let jugador = {x:0, y:1.6, z:0, yaw:0};
    let controlMano = {avance:0, giro:0, activo:false};

    // Valores reales con inercia. El dedo define el objetivo,
    // pero la velocidad tarda un poco en alcanzarlo o volver a cero.
    let avanceActual = 0;
    let giroActual = 0;
    let ultimoTiempo = performance.now();

    // ============================================================
    // MUNDO 3D MUCHO MÁS DENSO
    // ============================================================
    function randomDeterminista(n){
      const x=Math.sin(n*12.9898+78.233)*43758.5453;
      return x-Math.floor(x);
    }

    // ============================================================
    // CIUDAD PROCEDURAL EXTENSA POR CHUNKS
    // ============================================================
    const CIUDAD = {
      chunk: 24,
      radioCarga: 2,       // 5x5 chunks alrededor del jugador
      radioDescarga: 3,    // descarga al alejarse
      separacionCalles: 12
    };

    const chunksCiudad = new Map();

    function claveChunk(cx,cz){
      return `${cx},${cz}`;
    }

    function hash2(x,z,s=0){
      const n=Math.sin(x*127.1+z*311.7+s*74.7)*43758.5453123;
      return n-Math.floor(n);
    }

    function crearCaja(parent,x,y,z,w,h,d,color){
      const e=document.createElement('a-box');
      e.setAttribute('position',`${x} ${y} ${z}`);
      e.setAttribute('width',w);
      e.setAttribute('height',h);
      e.setAttribute('depth',d);
      e.setAttribute('color',color);
      e.setAttribute('roughness','0.86');
      parent.appendChild(e);
      return e;
    }

    function crearCilindro(parent,x,y,z,r,h,color){
      const e=document.createElement('a-cylinder');
      e.setAttribute('position',`${x} ${y} ${z}`);
      e.setAttribute('radius',r);
      e.setAttribute('height',h);
      e.setAttribute('segments-radial','8');
      e.setAttribute('color',color);
      parent.appendChild(e);
      return e;
    }

    function crearChunkCiudad(cx,cz){
      const key=claveChunk(cx,cz);
      if(chunksCiudad.has(key)) return;

      const chunk=document.createElement('a-entity');
      chunk.dataset.chunk=key;

      const ox=cx*CIUDAD.chunk;
      const oz=cz*CIUDAD.chunk;

      // Un solo suelo por chunk, sin superficies coplanares.
      crearCaja(
        chunk,ox,-0.08,oz,
        CIUDAD.chunk+.05,.16,CIUDAD.chunk+.05,
        '#252b31'
      );

      // Calles cada 12 m. Se elevan claramente sobre el terreno.
      for(let lx=-CIUDAD.chunk/2;lx<=CIUDAD.chunk/2;lx+=CIUDAD.separacionCalles){
        crearCaja(chunk,ox+lx,0.015,oz,3.5,.03,CIUDAD.chunk,'#343a40');
      }

      for(let lz=-CIUDAD.chunk/2;lz<=CIUDAD.chunk/2;lz+=CIUDAD.separacionCalles){
        crearCaja(chunk,ox,0.017,oz+lz,CIUDAD.chunk,.034,3.5,'#343a40');
      }

      // Edificios en una retícula de parcelas. Se omiten parcelas cercanas
      // a calles para dejar una ciudad realmente navegable.
      const paso=4;
      let indice=0;

      for(let lx=-10;lx<=10;lx+=paso){
        for(let lz=-10;lz<=10;lz+=paso){
          indice++;

          const wx=ox+lx;
          const wz=oz+lz;

          const modX=Math.abs(((wx+6)%12+12)%12-6);
          const modZ=Math.abs(((wz+6)%12+12)%12-6);

          if(modX<2.6 || modZ<2.6) continue;

          const r1=hash2(cx*31+indice,cz,1);
          const r2=hash2(cx,cz*37+indice,2);
          const r3=hash2(cx+indice,cz-indice,3);
          const r4=hash2(cx-indice,cz+indice,4);

          // Algunos solares vacíos forman pequeñas plazas/patios.
          if(r1<0.10) continue;

          const px=wx+(r1-.5)*.75;
          const pz=wz+(r2-.5)*.75;
          const h=2.4+r3*13.5;
          const w=1.7+r4*1.7;
          const d=1.7+hash2(cx+indice,cz,5)*1.7;
          const hue=Math.floor(175+r2*165);
          const color=`hsl(${hue},38%,${34+r1*24}%)`;

          if(r4<.78){
            crearCaja(chunk,px,h/2+.12,pz,w,h,d,color);

            // Coronación geométrica.
            if(r3>.68){
              crearCaja(
                chunk,px,h+.42,pz,
                w*.56,.6,d*.56,
                `hsl(${hue},32%,48%)`
              );
            }
          }else{
            crearCilindro(chunk,px,h/2+.12,pz,w*.48,h,color);
          }

          // Antena / hito ocasional.
          if(r3>.91){
            crearCilindro(chunk,px,h+1.0,pz,.045,2,'#aab4bc');
          }
        }
      }

      // Farolas junto a las calles.
      for(let i=-9;i<=9;i+=6){
        const r=hash2(cx+i,cz,20);
        const fx=ox+i;
        const fz=oz+(r>.5 ? 4.1 : -4.1);

        crearCilindro(chunk,fx,.72,fz,.045,1.44,'#8c969e');

        const luz=document.createElement('a-sphere');
        luz.setAttribute('position',`${fx} 1.5 ${fz}`);
        luz.setAttribute('radius','.105');
        luz.setAttribute('segments-width','8');
        luz.setAttribute('segments-height','6');
        luz.setAttribute(
          'material',
          'color:#fff1a8; emissive:#ffe082; emissiveIntensity:.65'
        );
        chunk.appendChild(luz);
      }

      // Árboles ocasionales en patios.
      for(let i=0;i<3;i++){
        const tx=ox+(hash2(cx,cz,i+50)-.5)*18;
        const tz=oz+(hash2(cx,cz,i+60)-.5)*18;

        const modX=Math.abs(((tx+6)%12+12)%12-6);
        const modZ=Math.abs(((tz+6)%12+12)%12-6);

        if(modX>2.7 && modZ>2.7){
          crearCilindro(chunk,tx,.5,tz,.09,1,'#76553d');

          const copa=document.createElement('a-dodecahedron');
          copa.setAttribute('position',`${tx} 1.35 ${tz}`);
          copa.setAttribute('radius','.48');
          copa.setAttribute(
            'color',
            `hsl(${105+Math.floor(hash2(cx,cz,i+70)*35)},42%,38%)`
          );
          chunk.appendChild(copa);
        }
      }

      // Escultura/hito ocasional en cruces.
      if(hash2(cx,cz,90)>.82){
        const esc=document.createElement('a-octahedron');
        esc.setAttribute('position',`${ox} 2.1 ${oz}`);
        esc.setAttribute('radius','.72');
        esc.setAttribute(
          'color',
          `hsl(${Math.floor(hash2(cx,cz,91)*360)},62%,58%)`
        );
        esc.setAttribute(
          'animation',
          `property:rotation; to:0 360 0; loop:true; dur:${11000+hash2(cx,cz,92)*8000}; easing:linear`
        );
        chunk.appendChild(esc);
      }

      document.querySelector('#mundoDenso').appendChild(chunk);
      chunksCiudad.set(key,chunk);
    }

    function actualizarChunksCiudad(){
      const cx=Math.floor(jugador.x/CIUDAD.chunk);
      const cz=Math.floor(jugador.z/CIUDAD.chunk);

      // Carga progresiva alrededor del usuario.
      for(let dz=-CIUDAD.radioCarga;dz<=CIUDAD.radioCarga;dz++){
        for(let dx=-CIUDAD.radioCarga;dx<=CIUDAD.radioCarga;dx++){
          crearChunkCiudad(cx+dx,cz+dz);
        }
      }

      // Z-limit / streaming: eliminamos geometría suficientemente lejana.
      for(const [key,elemento] of chunksCiudad){
        const [ex,ez]=key.split(',').map(Number);

        if(
          Math.abs(ex-cx)>CIUDAD.radioDescarga ||
          Math.abs(ez-cz)>CIUDAD.radioDescarga
        ){
          elemento.remove();
          chunksCiudad.delete(key);
        }
      }
    }

    // Precarga inicial.
    for(let z=-CIUDAD.radioCarga;z<=CIUDAD.radioCarga;z++){
      for(let x=-CIUDAD.radioCarga;x<=CIUDAD.radioCarga;x++){
        crearChunkCiudad(x,z);
      }
    }

    let ultimoChunkX=999999;
    let ultimoChunkZ=999999;

    function comprobarStreamingCiudad(){
      const cx=Math.floor(jugador.x/CIUDAD.chunk);
      const cz=Math.floor(jugador.z/CIUDAD.chunk);

      if(cx!==ultimoChunkX || cz!==ultimoChunkZ){
        ultimoChunkX=cx;
        ultimoChunkZ=cz;
        actualizarChunksCiudad();
      }
    }


    // ============================================================
    // WEBCAM ÚNICA COMPARTIDA POR CARA + MANOS
    // ============================================================
    const stream = await navigator.mediaDevices.getUserMedia({
      video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},
      audio:false
    });

    video.srcObject = stream;
    await video.play();

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    // ============================================================
    // MEDIAPIPE FACE
    // ============================================================
    faceDetector = await FaceDetector.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite'
      },
      runningMode:'VIDEO',
      minDetectionConfidence:0.5
    });

    // ============================================================
    // MEDIAPIPE HANDS
    // ============================================================
    handLandmarker = await HandLandmarker.createFromOptions(vision,{
      baseOptions:{
        modelAssetPath:
          'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task'
      },
      runningMode:'VIDEO',
      numHands:2,
      minHandDetectionConfidence:0.5,
      minHandPresenceConfidence:0.5,
      minTrackingConfidence:0.5
    });

    estado.textContent =
      'Cabeza: paralaje · Índice: ↑ avanzar · ← girar izq. · → girar der.';

    // ============================================================
    // CARA
    // ============================================================
    function procesarCara(cara){
      const b = cara.boundingBox;
      const cx = b.originX + b.width/2;
      const cy = b.originY + b.height/2;

      const fx = cx / video.videoWidth;
      const fy = cy / video.videoHeight;

      if(centroReferencia === null){
        centroReferencia = {x:fx,y:fy};
      }

      // Coordenadas de movimiento de la cabeza.
      // El vídeo se muestra espejado mediante CSS, pero MediaPipe trabaja
      // con el vídeo original. Aplicamos UNA sola inversión horizontal.
      const nx = (fx-centroReferencia.x)*2;
      const ny = (fy-centroReferencia.y)*2;

      const area =
        (b.width*b.height) /
        (video.videoWidth*video.videoHeight);

      if(caraReferencia === null){
        caraReferencia = area;
      }

      const dz = Math.max(
        -1,
        Math.min(1,(area/caraReferencia)-1)
      );

      // Ventana 3D: una única inversión en X.
      headObjetivo.x = -nx*PARALLAX_X;
      headObjetivo.y = -ny*PARALLAX_Y;
      headObjetivo.z = -dz*PARALLAX_Z;

      // Bounding box de la cara
      const sx = canvas.width/video.videoWidth;
      const sy = canvas.height/video.videoHeight;

      ctx.strokeStyle='#7CFF72';
      ctx.lineWidth=3;
      ctx.strokeRect(
        b.originX*sx,
        b.originY*sy,
        b.width*sx,
        b.height*sy
      );
    }

    // ============================================================
    // DIRECCIÓN DEL DEDO ÍNDICE
    //
    // Landmark 5 = base del índice
    // Landmark 8 = punta del índice
    //
    // Como el PiP está espejado visualmente, invertimos dx para que
    // "apuntar a la izquierda" coincida con lo que ve el usuario.
    // ============================================================
    function distancia3D(a,b){
      return Math.hypot(
        a.x-b.x,
        a.y-b.y,
        (a.z ?? 0)-(b.z ?? 0)
      );
    }

    function indiceEstaExtendido(puntos){
      const mcp = puntos[5]; // nudillo
      const pip = puntos[6];
      const dip = puntos[7];
      const tip = puntos[8]; // punta

      // Vector PIP -> MCP
      const ax = mcp.x-pip.x;
      const ay = mcp.y-pip.y;
      const az = (mcp.z ?? 0)-(pip.z ?? 0);

      // Vector PIP -> TIP
      const bx = tip.x-pip.x;
      const by = tip.y-pip.y;
      const bz = (tip.z ?? 0)-(pip.z ?? 0);

      const ma = Math.hypot(ax,ay,az);
      const mb = Math.hypot(bx,by,bz);

      if(ma < 0.0001 || mb < 0.0001){
        return false;
      }

      // Si el dedo está recto, MCP y TIP quedan en direcciones
      // casi opuestas respecto a PIP: ángulo cercano a 180 grados.
      const cosAngulo = Math.max(
        -1,
        Math.min(
          1,
          (ax*bx + ay*by + az*bz)/(ma*mb)
        )
      );

      const anguloPIP =
        Math.acos(cosAngulo)*180/Math.PI;

      // Además la punta debe estar suficientemente separada del nudillo.
      // Esto evita aceptar un índice plegado sobre sí mismo.
      const largoIndice = distancia3D(mcp,tip);
      const largoPalma = distancia3D(puntos[0],puntos[9]);

      return (
        anguloPIP > 155 &&
        largoIndice > largoPalma*0.72
      );
    }

    function obtenerControlIndice(puntos){

      if(!indiceEstaExtendido(puntos)){
        return {avance:0, giro:0, activo:false};
      }

      const base = puntos[5];
      const punta = puntos[8];

      // Espejo horizontal para coincidir con el PiP.
      let dx = -(punta.x-base.x);
      let dy =  (punta.y-base.y);

      const longitud = Math.hypot(dx,dy);

      if(longitud < 0.035){
        return {avance:0, giro:0, activo:false};
      }

      dx /= longitud;
      dy /= longitud;

      // Solo usamos el hemisferio superior:
      // arriba aporta avance y horizontal aporta giro.
      //
      // ↑          avance=1.00  giro=0.00
      // ↖ / ↗      avance≈0.71  giro≈0.71
      // ← / →      avance=0.00  giro=1.00
      //
      // De esta forma no existen "sectores" bruscos.
      const avance = Math.max(0,-dy);
      const giro = dx;

      return {
        avance,
        giro,
        activo:true
      };
    }

    function dibujarMano(puntos){
      const conexiones = [
        [0,1],[1,2],[2,3],[3,4],
        [0,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[10,11],[11,12],
        [9,13],[13,14],[14,15],[15,16],
        [13,17],[17,18],[18,19],[19,20],
        [0,17]
      ];

      ctx.strokeStyle='#00E5FF';
      ctx.lineWidth=2;

      for(const [ia,ib] of conexiones){
        const a=puntos[ia];
        const b=puntos[ib];

        ctx.beginPath();
        ctx.moveTo(a.x*canvas.width,a.y*canvas.height);
        ctx.lineTo(b.x*canvas.width,b.y*canvas.height);
        ctx.stroke();
      }

      // Resaltamos el índice 5 -> 8.
      const base=puntos[5];
      const punta=puntos[8];

      ctx.strokeStyle='#FFD54A';
      ctx.lineWidth=6;
      ctx.beginPath();
      ctx.moveTo(base.x*canvas.width,base.y*canvas.height);
      ctx.lineTo(punta.x*canvas.width,punta.y*canvas.height);
      ctx.stroke();

      ctx.fillStyle='#FFD54A';
      ctx.beginPath();
      ctx.arc(
        punta.x*canvas.width,
        punta.y*canvas.height,
        7,
        0,
        Math.PI*2
      );
      ctx.fill();
    }

    // ============================================================
    // MOVIMIENTO DEL JUGADOR
    // ============================================================
    function acercar(actual, objetivo, rapidez, dt){
      // Interpolación exponencial independiente del framerate.
      const k = 1-Math.exp(-rapidez*dt);
      return actual+(objetivo-actual)*k;
    }

    function moverJugador(dt){

      const objetivoAvance =
        controlMano.activo ? controlMano.avance : 0;

      const objetivoGiro =
        controlMano.activo ? controlMano.giro : 0;

      // Aceleramos y frenamos con constantes distintas.
      avanceActual = acercar(
        avanceActual,
        objetivoAvance,
        objetivoAvance > avanceActual
          ? ACELERACION_AVANCE
          : FRENADO_AVANCE,
        dt
      );

      giroActual = acercar(
        giroActual,
        objetivoGiro,
        Math.abs(objetivoGiro) > Math.abs(giroActual)
          ? ACELERACION_GIRO
          : FRENADO_GIRO,
        dt
      );

      // Eliminamos residuos diminutos al frenar.
      if(Math.abs(avanceActual)<0.002) avanceActual=0;
      if(Math.abs(giroActual)<0.002) giroActual=0;

      jugador.yaw -=
        giroActual *
        VELOCIDAD_GIRO *
        dt;

      if(avanceActual > 0){
        const rad =
          THREE.MathUtils.degToRad(jugador.yaw);

        const forwardX = -Math.sin(rad);
        const forwardZ = -Math.cos(rad);

        jugador.x +=
          forwardX *
          VELOCIDAD_AVANCE *
          avanceActual *
          dt;

        jugador.z +=
          forwardZ *
          VELOCIDAD_AVANCE *
          avanceActual *
          dt;
      }
    }

    // ============================================================
    // LOOP
    // ============================================================
    function loop(tiempo){
      const dt = Math.min(
        0.05,
        (tiempo-ultimoTiempo)/1000
      );
      ultimoTiempo=tiempo;

      ctx.clearRect(0,0,canvas.width,canvas.height);

      if(video.readyState >= 2){

        // -------- CARA --------
        const caras =
          faceDetector.detectForVideo(video,tiempo);

        if(caras.detections.length){
          procesarCara(caras.detections[0]);
        }

        // -------- MANOS --------
        const manos =
          handLandmarker.detectForVideo(video,tiempo);

        controlMano={avance:0,giro:0,activo:false};

        if(manos.landmarks.length){
          // Usamos la primera mano detectada como mando.
          const puntos=manos.landmarks[0];

          controlMano=obtenerControlIndice(puntos);
          dibujarMano(puntos);
        }
      }

      moverJugador(dt);

      comprobarStreamingCiudad();

      // Suavizado independiente del movimiento de la cabeza.
      headActual.x +=
        (headObjetivo.x-headActual.x)*SUAVIZADO;

      headActual.y +=
        (headObjetivo.y-headActual.y)*SUAVIZADO;

      headActual.z +=
        (headObjetivo.z-headActual.z)*SUAVIZADO;

      // Transformamos el pequeño desplazamiento de cabeza desde
      // coordenadas locales del jugador a coordenadas del mundo.
      const yawRad =
        THREE.MathUtils.degToRad(jugador.yaw);

      const hx =
        headActual.x*Math.cos(yawRad) -
        headActual.z*Math.sin(yawRad);

      const hz =
        headActual.x*Math.sin(yawRad) +
        headActual.z*Math.cos(yawRad);

      rig.setAttribute(
        'position',
        `${jugador.x+hx} ${jugador.y+headActual.y} ${jugador.z+hz}`
      );

      rig.setAttribute(
        'rotation',
        `0 ${jugador.yaw} 0`
      );

      let texto='✋ neutro';

      if(controlMano.activo){
        const avancePct=Math.round(controlMano.avance*100);
        const giroPct=Math.round(Math.abs(controlMano.giro)*100);

        let direccion='recto';

        if(controlMano.giro < -0.08){
          direccion='izquierda';
        }else if(controlMano.giro > 0.08){
          direccion='derecha';
        }

        texto =
          `☝ avance ${avancePct}% · giro ${direccion} ${giroPct}%`;
      }

      estado.textContent =
        `Cabeza: paralaje · Mano: ${texto} · velocidad ${Math.round(avanceActual*100)}%`;

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        Interfaces Naturales de Usuario
    </title>

    <!-- CSS -->

    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="css/navegacion.css">
    <link rel="stylesheet" href="css/panel-control.css">
    <link rel="stylesheet" href="css/componentes.css">
    <link rel="stylesheet" href="css/realidad-aumentada.css">
    <link rel="icon" type="image/png" href="recursos/imagenes/logo.png">

    <!-- MEDIAPIPE -->

    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js"></script>

</head>

<body>

    <!-- CABECERA -->

    <header class="cabecera">

        <div class="logo">

            <img
                src="recursos/imagenes/logo-horizontal.png"
                alt="Logo">

        </div>

        <div class="estado-aplicacion">

            <span id="estado-sistema">
                Iniciando sistema...
            </span>

        </div>

    </header>

    <!-- CONTENIDO -->

    <main class="contenedor-principal">

        <!-- MENÚ -->

        <nav class="navegacion">

            <h2>Interfaces NUI</h2>

            <button id="btn-voz">
                🎤 Voz
            </button>

            <button id="btn-manos">
                ✋ Manos
            </button>

            <button id="btn-pose">
                👤 Movimiento
            </button>

            <button id="btn-ar">
                📱 Realidad aumentada
            </button>

            <button id="btn-sistema">
                ⚙ Sistema
            </button>

            <hr>

            <section class="acciones-rapidas">

                <h3>Acciones</h3>

                <button id="modo-claro">
                    🌞 Modo claro
                </button>

                <button id="modo-oscuro">
                    🌙 Modo oscuro
                </button>

            </section>

        </nav>

        <!-- CENTRO -->

        <section class="contenido-principal">

            <!-- TARJETAS -->

            <section class="panel-informacion">

                <!-- VOZ -->

                <div class="tarjeta">

                    <h3>
                        Reconocimiento de voz
                    </h3>

                    <div class="estado-audio">

                        <img
                            id="icono-microfono"
                            src="recursos/iconos/mic_off.svg"
                            alt="Micrófono">

                        <p id="texto-voz">
                            Esperando comandos...
                        </p>

                    </div>

                </div>

                <!-- MANOS -->

                <div class="tarjeta">

                    <h3>
                        Detección de manos
                    </h3>

                    <p id="estado-manos">
                        Esperando gestos
                    </p>

                </div>

                <!-- POSE -->

                <div class="tarjeta">

                    <h3>
                        Movimiento corporal
                    </h3>

                    <p id="estado-pose">
                        Esperando movimiento
                    </p>

                </div>

            </section>

            <!-- CAMARA -->

            <section class="contenedor-camara">

                <h2>
                    Cámara e Inteligencia Artificial
                </h2>

                <div class="estado-camara">

                    <img
                        id="icono-camara"
                        src="recursos/iconos/cam_off.svg"
                        alt="Cámara">

                    <span id="estado-camara">
                        Iniciando cámara...
                    </span>

                </div>

                <video
                    id="camara"
                    autoplay
                    muted
                    playsinline>
                </video>

                <canvas id="lienzo"></canvas>

            </section>

            <!-- REALIDAD AUMENTADA -->

            <section class="contenedor-ar">

                <h2>
                    Realidad Aumentada
                </h2>

                <div class="visor-ar">

                    <div class="panel-ar">

                        <div class="indicador-ar">

                            📱 Esperando activación

                        </div>

                        <div id="escena-ar">

                            <p>
                                Pulsa "Realidad aumentada"
                                o utiliza tu voz para activarla.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </section>

        <!-- EVENTOS -->

        <aside class="panel-lateral">

            <h2>
                Eventos
            </h2>

            <div id="registro-eventos">

                <div class="evento">

                    <strong>Sistema</strong>

                    Aplicación iniciada

                </div>

            </div>

        </aside>

    </main>

    <!-- PIE -->

    <footer class="pie">

        <p>
            Proyecto de Interfaces Naturales de Usuario ·
            Voz · Manos · Movimiento Corporal ·
            Realidad Aumentada
        </p>

    </footer>

    <!-- JAVASCRIPT -->

    <script src="js/principal.js"></script>

    <!-- VOZ -->

    <script src="js/voz/reconocimiento-voz.js"></script>
    <script src="js/voz/comandos-voz.js"></script>

    <!-- MANOS -->

    <script src="js/manos/deteccion-manos.js"></script>
    <script src="js/manos/gestos.js"></script>
    <script src="js/manos/acciones-manos.js"></script>

    <!-- MOVIMIENTO -->

    <script src="js/movimiento/deteccion-pose.js"></script>
    <script src="js/movimiento/acciones-pose.js"></script>
    <script src="js/movimiento/estados-pose.js"></script>

    <!-- REALIDAD AUMENTADA -->

    <script src="js/realidad-aumentada/ar.js"></script>
    <script src="js/realidad-aumentada/escena-ar.js"></script>
    <script src="js/realidad-aumentada/objetos-ar.js"></script>

    <!-- INTERFAZ -->

    <script src="js/interfaz/notificaciones.js"></script>
    <script src="js/interfaz/indicadores.js"></script>
    <script src="js/interfaz/panel-control.js"></script>

</body>

</html>
```
### css
**componentes.css**
```css
/* ==========================
   ESTADOS
========================== */

.estado-correcto{
    color:var(--correcto);
    font-weight:bold;
}

.estado-aviso{
    color:var(--aviso);
    font-weight:bold;
}

.estado-error{
    color:var(--error);
    font-weight:bold;
}

/* ==========================
   INSIGNIAS
========================== */

.insignia{
    display:inline-flex;

    align-items:center;

    gap:6px;

    padding:6px 10px;

    border-radius:999px;

    background:var(--azul-palido);

    color:var(--azul);

    font-size:12px;

    font-weight:600;
}

/* ==========================
   TARJETAS ANIMADAS
========================== */

.tarjeta{
    transition:var(--transicion);
}

.tarjeta:hover{
    transform:translateY(-3px);

    box-shadow:var(--sombra-media);
}

/* ==========================
   RESPONSIVE
========================== */

@media (max-width:1200px){

    .panel-lateral{
        display:none;
    }

}

@media (max-width:900px){

    .contenedor-principal{
        flex-direction:column;
    }

    .navegacion{
        width:100%;

        flex-direction:row;

        flex-wrap:wrap;
    }

    .navegacion button{
        flex:1 1 180px;
    }

}

@media (max-width:768px){

    .panel-informacion{
        grid-template-columns:1fr;
    }

    #camara{
        min-height:250px;
    }

}
/* =====================================
   NOTIFICACIONES
===================================== */

#contenedor-notificaciones{
    position:fixed;

    top:80px;
    right:20px;

    width:320px;

    display:flex;
    flex-direction:column;

    gap:10px;

    z-index:9999;
}

.notificacion{
    background:white;

    color:var(--negro);

    padding:14px;

    border-radius:12px;

    box-shadow:
        0 10px 20px rgba(0,0,0,.15);

    transform:
        translateX(120%);

    transition:
        all .3s ease;

    border-left:5px solid
        var(--azul);
}

.notificacion.mostrar{
    transform:
        translateX(0);
}

.notificacion.info{
    border-left-color:
        var(--azul);
}

.notificacion.correcto{
    border-left-color:
        #10b981;
}

.notificacion.aviso{
    border-left-color:
        #f59e0b;
}

.notificacion.error{
    border-left-color:
        #ef4444;
}

body.modo-oscuro .notificacion{
    background:#1e293b;
    color:white;
}
```
**general.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,
body{
    width:100%;
    height:100%;
}

/* =====================================
   BODY
===================================== */

body{
    font-family:
        "Segoe UI",
        Tahoma,
        Geneva,
        Verdana,
        sans-serif;

    background:var(--azul-claro);

    color:var(--negro);

    display:flex;
    flex-direction:column;

    overflow:hidden;

    transition:
        background .4s ease,
        color .4s ease;
}

/* =====================================
   CABECERA
===================================== */

.cabecera{
    height:var(--alto-cabecera);

    background:var(--azul);

    color:var(--blanco);

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:0 20px;

    box-shadow:var(--sombra-suave);

    transition:.4s;
}

.logo{
    display:flex;
    align-items:center;
}

.logo img{
    height:40px;
    width:auto;
    display:block;
}

.estado-aplicacion{
    font-size:14px;
    font-weight:600;
}

/* =====================================
   CONTENEDOR PRINCIPAL
===================================== */

.contenedor-principal{
    flex:1;

    display:grid;

    grid-template-columns:
        var(--ancho-nav)
        1fr
        var(--ancho-section);

    overflow:hidden;
}

/* =====================================
   CONTENIDO CENTRAL
===================================== */

.contenido-principal{
    padding:20px;

    overflow-y:auto;

    background:var(--azul-claro);

    transition:.4s;
}

/* =====================================
   PANEL INFORMACIÓN
===================================== */

.panel-informacion{
    display:grid;

    grid-template-columns:
        repeat(auto-fit,minmax(250px,1fr));

    gap:16px;

    margin-bottom:20px;
}

/* =====================================
   TARJETAS
===================================== */

.tarjeta{
    background:var(--blanco);

    border-radius:var(--chaflan);

    border:1px solid var(--azul-palido);

    padding:16px;

    box-shadow:var(--sombra-suave);

    transition:.4s;
}

.tarjeta h3{
    color:var(--azul);

    margin-bottom:12px;
}

/* =====================================
   MICRÓFONO
===================================== */

.estado-audio{
    display:flex;
    align-items:center;
    gap:12px;
}

.estado-audio img{
    width:30px;
    height:30px;
}

/* =====================================
   CÁMARA
===================================== */

.contenedor-camara{
    width:100%;

    background:var(--blanco);

    border-radius:16px;

    padding:20px;

    box-shadow:var(--sombra-suave);

    transition:.4s;
}

.contenedor-camara h2{
    color:var(--azul);

    margin-bottom:15px;
}

/* Estado cámara */

.estado-camara{
    display:flex;
    align-items:center;
    gap:12px;

    margin-bottom:15px;
}

.estado-camara img{
    width:30px;
    height:30px;
}

#estado-camara{
    font-size:14px;
    font-weight:600;
}

/* Video */

#camara{
    width:100%;

    max-width:960px;

    display:block;

    margin:auto;

    aspect-ratio:16/9;

    object-fit:cover;

    background:black;

    border-radius:16px;

    border:3px solid var(--azul-palido);

    box-shadow:
        0 10px 25px rgba(0,0,0,.15);
}

#lienzo{
    display:none;
}

/* =====================================
   REALIDAD AUMENTADA
===================================== */

.contenedor-ar{
    margin-top:20px;

    background:var(--blanco);

    border-radius:16px;

    padding:20px;

    box-shadow:var(--sombra-suave);

    transition:.4s;
}

.contenedor-ar h2{
    color:var(--azul);

    margin-bottom:15px;
}

/* =====================================
   PIE
===================================== */

.pie{
    height:var(--alto-pie);

    background:var(--blanco);

    border-top:1px solid var(--azul-palido);

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:12px;

    transition:.4s;
}

/* =====================================
   MODO OSCURO
===================================== */

body.modo-oscuro{
    background:#0f172a;
    color:#ffffff;
}

body.modo-oscuro .contenido-principal{
    background:#0f172a;
}

body.modo-oscuro .cabecera{
    background:#020617;
}

body.modo-oscuro .tarjeta{
    background:#1e293b;

    color:white;

    border-color:#334155;
}

body.modo-oscuro .contenedor-camara{
    background:#1e293b;
}

body.modo-oscuro .contenedor-ar{
    background:#1e293b;
}

body.modo-oscuro .panel-lateral{
    background:#1e293b;
}

body.modo-oscuro .pie{
    background:#020617;

    color:white;

    border-top-color:#334155;
}

body.modo-oscuro h1,
body.modo-oscuro h2,
body.modo-oscuro h3{
    color:#93c5fd;
}

body.modo-oscuro #estado-camara{
    color:white;
}

/* =====================================
   SCROLL
===================================== */

::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-track{
    background:#e5e7eb;
}

::-webkit-scrollbar-thumb{
    background:var(--azul);
    border-radius:20px;
}

::-webkit-scrollbar-thumb:hover{
    background:var(--azul-medio);
}

/* =====================================
   RESPONSIVE
===================================== */

@media (max-width:1200px){

    .contenedor-principal{
        grid-template-columns:
            var(--ancho-nav)
            1fr;
    }

    .panel-lateral{
        display:none;
    }

}

@media (max-width:768px){

    .contenedor-principal{
        display:flex;
        flex-direction:column;
    }

    .contenido-principal{
        padding:12px;
    }

    #camara{
        max-width:100%;
    }

}
```
**navegacion.css**
```css
/* ==========================
   NAVEGACIÓN LATERAL
========================== */

.navegacion{
    width:var(--ancho-nav);

    background:var(--azul);

    color:var(--texto-nav);

    padding:20px;

    display:flex;
    flex-direction:column;
    gap:12px;

    overflow-y:auto;
}

.navegacion h2{
    margin-bottom:10px;

    text-align:center;

    font-size:18px;

    color:var(--blanco);
}

.navegacion h3{
    font-size:14px;

    margin-bottom:8px;
}

/* ==========================
   BOTONES MENÚ
========================== */

.navegacion button{
    width:100%;
    height:var(--alto-boton);

    border:none;

    border-radius:var(--chaflan);

    background:rgba(255,255,255,0.15);

    color:var(--blanco);

    cursor:pointer;

    text-align:left;

    padding-left:12px;

    transition:var(--transicion);

    font-size:14px;
}

.navegacion button:hover{
    background:var(--azul-medio);

    transform:translateX(4px);
}

.navegacion button:active{
    transform:scale(0.98);
}

/* ==========================
   SEPARADOR
========================== */

.navegacion hr{
    border:none;

    height:1px;

    background:rgba(255,255,255,0.20);

    margin:10px 0;
}

/* ==========================
   ACCIONES RÁPIDAS
========================== */

.acciones-rapidas{
    display:flex;
    flex-direction:column;
    gap:10px;
}

/* ==========================
   BOTONES DE ACCIÓN
========================== */

#encender-luz,
#apagar-luz,
#abrir-puerta,
#cerrar-puerta{
    background:var(--naranja);

    color:var(--blanco);

    font-weight:600;
}

#encender-luz:hover,
#apagar-luz:hover,
#abrir-puerta:hover,
#cerrar-puerta:hover{
    background:#ea580c;
}

/* ==========================
   SCROLLBAR
========================== */

.navegacion::-webkit-scrollbar{
    width:8px;
}

.navegacion::-webkit-scrollbar-track{
    background:transparent;
}

.navegacion::-webkit-scrollbar-thumb{
    background:rgba(255,255,255,0.25);

    border-radius:20px;
}

.navegacion::-webkit-scrollbar-thumb:hover{
    background:rgba(255,255,255,0.45);
}
```
**panel-control.css**
```css
/* =====================================
   PANEL DERECHO
===================================== */

.panel-lateral{
    width:350px;
    min-width:350px;

    background:#ffffff;

    border-left:2px solid var(--azul-palido);

    padding:20px;

    display:flex;
    flex-direction:column;

    overflow:hidden;
}

.panel-lateral h2{
    color:var(--azul);

    margin-bottom:15px;

    font-size:24px;

    font-weight:700;
}

/* =====================================
   REGISTRO DE EVENTOS
===================================== */

#registro-eventos{
    flex:1;

    display:flex;
    flex-direction:column;

    gap:12px;

    overflow-y:auto;

    padding-right:8px;
}

/* =====================================
   EVENTOS
===================================== */

.evento{
    background:#111827;

    color:#ffffff;

    padding:14px;

    border-radius:12px;

    border-left:5px solid var(--naranja);

    box-shadow:
        0 4px 12px rgba(0,0,0,.15);

    line-height:1.5;

    font-size:14px;

    word-break:break-word;

    transition:all .3s ease;
}

.evento:hover{
    transform:translateY(-2px);
}

.evento strong{
    display:block;

    color:#60a5fa;

    margin-bottom:6px;

    font-size:12px;

    font-weight:700;
}

/* =====================================
   SCROLLBAR
===================================== */

#registro-eventos::-webkit-scrollbar{
    width:10px;
}

#registro-eventos::-webkit-scrollbar-track{
    background:#e5e7eb;
    border-radius:20px;
}

#registro-eventos::-webkit-scrollbar-thumb{
    background:var(--azul);
    border-radius:20px;
}

#registro-eventos::-webkit-scrollbar-thumb:hover{
    background:var(--azul-medio);
}

/* =====================================
   CÁMARA
===================================== */

.contenedor-camara{
    background:var(--blanco);

    border-radius:12px;

    padding:20px;

    box-shadow:var(--sombra-suave);
}

.contenedor-camara h2{
    color:var(--azul);

    margin-bottom:15px;
}

#camara{
    width:100%;

    min-height:500px;

    background:black;

    object-fit:cover;

    border-radius:12px;

    border:2px solid var(--azul-palido);
}

#lienzo{
    display:none;
}
```
**realidad-aumentada.css**
```css
/* =====================================
   CONTENEDOR AR
===================================== */

.contenedor-ar{
    width:100%;

    margin-top:20px;

    background:var(--blanco);

    border-radius:16px;

    padding:20px;

    box-shadow:var(--sombra-suave);
}

.contenedor-ar h2{
    color:var(--azul);

    margin-bottom:20px;
}

.visor-ar{
    min-height:400px;

    border:2px solid var(--azul-palido);

    border-radius:16px;

    background:linear-gradient(
        to bottom,
        #eff6ff,
        #dbeafe
    );

    display:flex;
    justify-content:center;
    align-items:center;

    overflow:hidden;
}

/* =====================================
   PANEL AR
===================================== */

.panel-ar{
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;

    padding:20px;
}

/* =====================================
   ESTADO
===================================== */

.indicador-ar{
    background:var(--azul);

    color:white;

    padding:10px 20px;

    border-radius:999px;

    font-weight:600;
}

/* =====================================
   CASA
===================================== */

.casa-ar{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
}

/* =====================================
   ICONOS
===================================== */

#modelo-casa{
    font-size:120px;

    transition:.3s;
}

#modelo-casa:hover{
    transform:scale(1.05);
}

/* =====================================
   ESTADO SISTEMA
===================================== */

#estado-ar{
    background:white;

    border-radius:12px;

    padding:15px 25px;

    min-width:250px;

    text-align:center;

    box-shadow:var(--sombra-suave);

    font-size:16px;

    font-weight:600;

    color:var(--azul);
}

/* =====================================
   ELEMENTOS
===================================== */

.elementos-ar{
    display:flex;

    gap:40px;

    margin-top:15px;
}

.icono-ar{
    width:100px;
    height:100px;

    background:white;

    border-radius:16px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:40px;

    box-shadow:var(--sombra-suave);

    transition:.3s;
}

.icono-ar.activo{
    background:var(--naranja);

    color:white;

    transform:scale(1.1);
}
```
**variables.css**
```css
:root{

    /* =====================================
       COLORES PRINCIPALES
    ===================================== */

    --naranja:#f97316;

    --azul:#1d4ed8;
    --azul-medio:#1e40af;
    --azul-claro:#eff6ff;
    --azul-palido:#dbeafe;

    --blanco:#ffffff;
    --negro:#111827;

    /* =====================================
       COLORES DEL SISTEMA
    ===================================== */

    --correcto:#10b981;
    --aviso:#f59e0b;
    --error:#ef4444;

    /* =====================================
       MAPA DE COLORES
    ===================================== */

    --color0:var(--negro);

    --color:var(--azul);
    --color2:var(--azul-medio);
    --color3:var(--azul-claro);
    --color4:var(--azul-palido);

    /* =====================================
       COLORES DE INTERFAZ
    ===================================== */

    --texto-nav:var(--blanco);

    --fondo-web:var(--azul-claro);
    --fondo-panel:var(--blanco);
    --fondo-tarjeta:var(--blanco);

    --texto-principal:var(--negro);
    --texto-secundario:#4b5563;

    /* =====================================
       DIMENSIONES
    ===================================== */

    --ancho-nav:210px;

    /* Panel de eventos */
    --ancho-section:350px;

    --alto-cabecera:60px;
    --alto-pie:40px;

    --alto-boton:42px;

    /* =====================================
       ESPACIADOS
    ===================================== */

    --relleno:12px;
    --texto:12px;
    --chaflan:12px;

    --espacio-xs:6px;
    --espacio-sm:10px;
    --espacio-md:16px;
    --espacio-lg:20px;
    --espacio-xl:30px;

    /* =====================================
       BORDES
    ===================================== */

    --borde:
        1px solid var(--azul-palido);

    --borde-fuerte:
        2px solid var(--azul);

    /* =====================================
       SOMBRAS
    ===================================== */

    --sombra-suave:
        0 4px 12px rgba(0,0,0,0.08);

    --sombra-media:
        0 8px 20px rgba(0,0,0,0.12);

    --sombra-fuerte:
        0 12px 30px rgba(0,0,0,0.20);

    /* =====================================
       TRANSICIONES
    ===================================== */

    --transicion:
        all .25s ease;

    --transicion-lenta:
        all .4s ease;

    /* =====================================
       Z-INDEX
    ===================================== */

    --z-cabecera:100;
    --z-menu:90;
    --z-modal:1000;

    /* =====================================
       REALIDAD AUMENTADA
    ===================================== */

    --alto-visor-ar:600px;

    /* =====================================
       CÁMARA
    ===================================== */

    --alto-camara:500px;

    /* =====================================
       EVENTOS
    ===================================== */

    --color-evento-fondo:#111827;
    --color-evento-texto:#ffffff;
    --color-evento-fecha:#60a5fa;

    /* =====================================
       BOTONES
    ===================================== */

    --color-boton:var(--naranja);
    --color-boton-hover:#ea580c;

    /* =====================================
       TARJETAS
    ===================================== */

    --radio-tarjeta:12px;

}
```
### js
**principal.js**
```js
"use strict";

/* ========================================
   ESTADO GLOBAL
======================================== */

const sistema = {
    modoOscuro: false,
    vozActiva: false,
    manosActivas: false,
    poseActiva: false,
    arActiva: false
};

/* ========================================
   ELEMENTOS DOM
======================================== */

const videoCamara =
document.getElementById("camara");

const estadoSistema =
document.getElementById("estado-sistema");

const registroEventos =
document.getElementById("registro-eventos");

const textoVoz =
document.getElementById("texto-voz");

const estadoManos =
document.getElementById("estado-manos");

const estadoPose =
document.getElementById("estado-pose");

const iconoCamara =
document.getElementById("icono-camara");

const estadoCamara =
document.getElementById("estado-camara");

/* ========================================
   INICIO
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacion
);

async function iniciarAplicacion(){

    registrarEvento(
        "🚀 Aplicación iniciada"
    );

    cambiarEstadoSistema(
        "Inicializando sistema..."
    );

    await iniciarCamara();

    if(
        typeof iniciarReconocimientoVoz ===
        "function"
    ){
        iniciarReconocimientoVoz();
    }

    if(
        typeof iniciarDeteccionManos ===
        "function"
    ){
        iniciarDeteccionManos();
    }

    if(
        typeof iniciarDeteccionPose ===
        "function"
    ){
        iniciarDeteccionPose();
    }

    cambiarEstadoSistema(
        "✅ Sistema preparado"
    );

    registrarEvento(
        "✅ Sistema preparado"
    );

}

/* ========================================
   CÁMARA
======================================== */

async function iniciarCamara(){

    if(
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ){

        registrarEvento(
            "❌ Cámara no soportada"
        );

        if(iconoCamara){

            iconoCamara.src =
            "recursos/iconos/cam_off.svg";

        }

        if(estadoCamara){

            estadoCamara.textContent =
            "No compatible";

        }

        return;
    }

    try{

        const flujo =
        await navigator.mediaDevices.getUserMedia({

            video:{
                width:{ ideal:1280 },
                height:{ ideal:720 },
                aspectRatio:1.777777,
                facingMode:"user"
            },

            audio:false

        });

        videoCamara.srcObject =
        flujo;

        videoCamara.setAttribute(
            "playsinline",
            true
        );

        if(iconoCamara){

            iconoCamara.src =
            "recursos/iconos/cam_on.svg";

        }

        if(estadoCamara){

            estadoCamara.textContent =
            "Cámara activa";

        }

        registrarEvento(
            "📷 Cámara iniciada"
        );

    }
    catch(error){

        console.error(error);

        registrarEvento(
            "❌ Error al acceder a la cámara"
        );

        cambiarEstadoSistema(
            "Error de cámara"
        );

        if(iconoCamara){

            iconoCamara.src =
            "recursos/iconos/cam_off.svg";

        }

        if(estadoCamara){

            estadoCamara.textContent =
            "Error";

        }

    }

}

/* ========================================
   MODOS
======================================== */

function activarModoClaro(){

    sistema.modoOscuro = false;

    document.body.classList.remove(
        "modo-oscuro"
    );

    registrarEvento(
        "🌞 Modo claro activado"
    );

    cambiarEstadoSistema(
        "🌞 Modo claro"
    );

    if(
        typeof temaARClaro ===
        "function"
    ){
        temaARClaro();
    }

}

function activarModoOscuro(){

    sistema.modoOscuro = true;

    document.body.classList.add(
        "modo-oscuro"
    );

    registrarEvento(
        "🌙 Modo oscuro activado"
    );

    cambiarEstadoSistema(
        "🌙 Modo oscuro"
    );

    if(
        typeof temaAROscuro ===
        "function"
    ){
        temaAROscuro();
    }

}

/* ========================================
   EVENTOS
======================================== */

function registrarEvento(texto){

    if(!registroEventos){
        return;
    }

    const evento =
    document.createElement("div");

    evento.className =
    "evento";

    const fecha =
    new Date().toLocaleTimeString();

    evento.innerHTML =

        `<strong>${fecha}</strong><br>${texto}`;

    registroEventos.prepend(
        evento
    );

    while(
        registroEventos.children.length > 50
    ){

        registroEventos.removeChild(
            registroEventos.lastChild
        );

    }

}

/* ========================================
   ESTADO SISTEMA
======================================== */

function cambiarEstadoSistema(texto){

    if(!estadoSistema){
        return;
    }

    estadoSistema.textContent =
    texto;

}

/* ========================================
   INDICADORES
======================================== */

function actualizarIndicadorVoz(texto){

    if(textoVoz){

        textoVoz.textContent =
        texto;

    }

}

function actualizarIndicadorManos(texto){

    if(estadoManos){

        estadoManos.textContent =
        texto;

    }

}

function actualizarIndicadorPose(texto){

    if(estadoPose){

        estadoPose.textContent =
        texto;

    }

}

/* ========================================
   EXPORTACIONES
======================================== */

window.sistema =
sistema;

window.activarModoClaro =
activarModoClaro;

window.activarModoOscuro =
activarModoOscuro;

window.registrarEvento =
registrarEvento;

window.cambiarEstadoSistema =
cambiarEstadoSistema;

window.actualizarIndicadorVoz =
actualizarIndicadorVoz;

window.actualizarIndicadorManos =
actualizarIndicadorManos;

window.actualizarIndicadorPose =
actualizarIndicadorPose;
```
#### interfaz
**indicadores.js**
```js
"use strict";

/* ========================================
   ACTUALIZAR PANEL GENERAL
======================================== */

function actualizarPanelEstado(){

    actualizarIndicadorTema();
    actualizarIndicadorVozEstado();
    actualizarIndicadorManosEstado();
    actualizarIndicadorPoseEstado();

}

/* ========================================
   TEMA
======================================== */

function actualizarIndicadorTema(){

    const elemento =
    document.getElementById(
        "estado-tema-ar"
    );

    if(!elemento){
        return;
    }

    if(sistema.modoOscuro){

        elemento.textContent =
        "🌙 Oscuro";

    }else{

        elemento.textContent =
        "🌞 Claro";

    }

}

/* ========================================
   VOZ
======================================== */

function actualizarIndicadorVozEstado(){

    const elemento =
    document.getElementById(
        "estado-voz-ar"
    );

    if(!elemento){
        return;
    }

    elemento.textContent =
    sistema.vozActiva
        ? "🎤 Activa"
        : "⏸️ Inactiva";

}

/* ========================================
   MANOS
======================================== */

function actualizarIndicadorManosEstado(){

    const elemento =
    document.getElementById(
        "estado-manos-ar"
    );

    if(!elemento){
        return;
    }

    elemento.textContent =
    sistema.manosActivas
        ? "✋ Activas"
        : "⏸️ Inactivas";

}

/* ========================================
   POSE
======================================== */

function actualizarIndicadorPoseEstado(){

    const elemento =
    document.getElementById(
        "estado-pose-ar"
    );

    if(!elemento){
        return;
    }

    elemento.textContent =
    sistema.poseActiva
        ? "👤 Detectando"
        : "⏸️ Inactiva";

}

/* ========================================
   ACTUALIZACIÓN AUTOMÁTICA
======================================== */

setInterval(
    actualizarPanelEstado,
    1000
);

/* ========================================
   EXPORTACIÓN
======================================== */

window.actualizarPanelEstado =
actualizarPanelEstado;

window.actualizarIndicadorTema =
actualizarIndicadorTema;

window.actualizarIndicadorVozEstado =
actualizarIndicadorVozEstado;

window.actualizarIndicadorManosEstado =
actualizarIndicadorManosEstado;

window.actualizarIndicadorPoseEstado =
actualizarIndicadorPoseEstado;
```
**notificaciones.js**
```js
"use strict";

/* ========================================
   CONTENEDOR
======================================== */

let contenedorNotificaciones = null;

/* ========================================
   INICIALIZACIÓN
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarNotificaciones
);

function iniciarNotificaciones(){

    contenedorNotificaciones =
    document.createElement("div");

    contenedorNotificaciones.id =
    "contenedor-notificaciones";

    document.body.appendChild(
        contenedorNotificaciones
    );

}

/* ========================================
   MOSTRAR NOTIFICACIÓN
======================================== */

function mostrarNotificacion(
    mensaje,
    tipo = "info"
){

    if(!contenedorNotificaciones){
        return;
    }

    const notificacion =
    document.createElement("div");

    notificacion.className =
    `notificacion ${tipo}`;

    notificacion.textContent =
    mensaje;

    contenedorNotificaciones.appendChild(
        notificacion
    );

    setTimeout(
        () => {

            notificacion.classList.add(
                "mostrar"
            );

        },
        50
    );

    setTimeout(
        () => {

            notificacion.classList.remove(
                "mostrar"
            );

            setTimeout(
                () => {

                    notificacion.remove();

                },
                300
            );

        },
        3000
    );

}

/* ========================================
   EXPORTACIÓN
======================================== */

window.mostrarNotificacion =
mostrarNotificacion;
```
**panel-control.js**
```js
"use strict";

/* ========================================
   PANEL DE CONTROL
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    inicializarPanelControl
);

function inicializarPanelControl(){

    configurarBotonModoClaro();
    configurarBotonModoOscuro();
    configurarBotonAR();

}

/* ========================================
   MODO CLARO
======================================== */

function configurarBotonModoClaro(){

    const boton =
    document.getElementById(
        "modo-claro"
    );

    if(!boton){
        return;
    }

    boton.addEventListener(
        "click",
        ()=>{

            activarModoClaro();

            if(
                typeof mostrarNotificacion ===
                "function"
            ){

                mostrarNotificacion(
                    "🌞 Modo claro activado",
                    "correcto"
                );

            }

        }
    );

}

/* ========================================
   MODO OSCURO
======================================== */

function configurarBotonModoOscuro(){

    const boton =
    document.getElementById(
        "modo-oscuro"
    );

    if(!boton){
        return;
    }

    boton.addEventListener(
        "click",
        ()=>{

            activarModoOscuro();

            if(
                typeof mostrarNotificacion ===
                "function"
            ){

                mostrarNotificacion(
                    "🌙 Modo oscuro activado",
                    "correcto"
                );

            }

        }
    );

}

/* ========================================
   REALIDAD AUMENTADA
======================================== */

function configurarBotonAR(){

    const boton =
    document.getElementById(
        "btn-ar"
    );

    if(!boton){
        return;
    }

    boton.addEventListener(
        "click",
        ()=>{

            if(
                typeof activarRealidadAumentada ===
                "function"
            ){

                activarRealidadAumentada();

            }

            if(
                typeof mostrarNotificacion ===
                "function"
            ){

                mostrarNotificacion(
                    "📱 Panel AR activado",
                    "info"
                );

            }

            registrarEvento(
                "📱 Panel de realidad aumentada activado"
            );

        }
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.inicializarPanelControl =
inicializarPanelControl;
```
#### manos
**acciones-manos.js**
```js
"use strict";

/* ========================================
   CONTROL ANTI REPETICIÓN
======================================== */

let ultimoGesto = "";
let ultimoTiempo = 0;

function gestoPermitido(nombre){

    const ahora = Date.now();

    if(
        nombre === ultimoGesto &&
        ahora - ultimoTiempo < 2500
    ){
        return false;
    }

    ultimoGesto = nombre;
    ultimoTiempo = ahora;

    return true;

}

/* ========================================
   MANO ABIERTA
   MODO CLARO
======================================== */

function accionManoAbierta(){

    if(
        !gestoPermitido(
            "mano-abierta"
        )
    ){
        return;
    }

    activarModoClaro();

    actualizarIndicadorManos(
        "✋ Mano abierta"
    );

    registrarEvento(
        "✋ Gesto detectado: modo claro"
    );

}

/* ========================================
   PUÑO CERRADO
   MODO OSCURO
======================================== */

function accionPunoCerrado(){

    if(
        !gestoPermitido(
            "puno-cerrado"
        )
    ){
        return;
    }

    activarModoOscuro();

    actualizarIndicadorManos(
        "✊ Puño cerrado"
    );

    registrarEvento(
        "✊ Gesto detectado: modo oscuro"
    );

}

/* ========================================
   PULGAR ARRIBA
   ACTIVAR AR
======================================== */

function accionPulgarArriba(){

    if(
        !gestoPermitido(
            "pulgar-arriba"
        )
    ){
        return;
    }

    actualizarIndicadorManos(
        "👍 Pulgar arriba"
    );

    registrarEvento(
        "👍 Activando realidad aumentada"
    );

    if(
        typeof activarRealidadAumentada ===
        "function"
    ){

        activarRealidadAumentada();

    }

}

/* ========================================
   EXPORTACIONES
======================================== */

window.accionManoAbierta =
accionManoAbierta;

window.accionPunoCerrado =
accionPunoCerrado;

window.accionPulgarArriba =
accionPulgarArriba;
```
**deteccion-manos.js**
```js
"use strict";

/* ========================================
   VARIABLES
======================================== */

let detectorManos = null;
let manosInicializadas = false;

/* ========================================
   INICIAR MEDIAPIPE HANDS
======================================== */

async function iniciarDeteccionManos(){

    if(manosInicializadas){
        return;
    }

    if(typeof Hands === "undefined"){

        registrarEvento(
            "❌ MediaPipe Hands no disponible"
        );

        return;
    }

    detectorManos = new Hands({

        locateFile:(archivo)=>{

            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${archivo}`;

        }

    });

    detectorManos.setOptions({

        maxNumHands:1,

        modelComplexity:1,

        minDetectionConfidence:0.7,

        minTrackingConfidence:0.5

    });

    detectorManos.onResults(
        procesarResultadosManos
    );

    iniciarSeguimientoManos();

    sistema.manosActivas = true;

    manosInicializadas = true;

    registrarEvento(
        "✋ Detección de manos iniciada"
    );

}

/* ========================================
   CÁMARA PARA MANOS
======================================== */

function iniciarSeguimientoManos(){

    if(!videoCamara){

        registrarEvento(
            "❌ Cámara no disponible"
        );

        return;
    }

    const camara = new Camera(
        videoCamara,
        {

            onFrame:async()=>{

                if(!detectorManos){
                    return;
                }

                await detectorManos.send({
                    image:videoCamara
                });

            },

            width:1280,
            height:720

        }
    );

    camara.start();

}

/* ========================================
   RESULTADOS
======================================== */

function procesarResultadosManos(resultados){

    if(
        !resultados.multiHandLandmarks ||
        resultados.multiHandLandmarks.length === 0
    ){

        actualizarIndicadorManos(
            "Esperando gestos"
        );

        if(
            typeof actualizarManosAR ===
            "function"
        ){

            actualizarManosAR(
                "Sin detectar"
            );

        }

        return;
    }

    actualizarIndicadorManos(
        "✋ Mano detectada"
    );

    if(
        typeof actualizarManosAR ===
        "function"
    ){

        actualizarManosAR(
            "Detectada"
        );

    }

    detectarGestos(
        resultados.multiHandLandmarks
    );

}

/* ========================================
   DETENER
======================================== */

function detenerDeteccionManos(){

    sistema.manosActivas = false;

    actualizarIndicadorManos(
        "Detenida"
    );

    registrarEvento(
        "✋ Detección de manos detenida"
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.iniciarDeteccionManos =
iniciarDeteccionManos;

window.detenerDeteccionManos =
detenerDeteccionManos;
```
**gestos.js**
```js
"use strict";

/* ========================================
   DETECTOR DE GESTOS
======================================== */

function detectarGestos(manos){

    if(
        !manos ||
        manos.length === 0
    ){
        return;
    }

    const mano = manos[0];

    if(!mano){
        return;
    }

    /*
    =======================================
    PUNTOS DE REFERENCIA
    =======================================
    */

    const pulgar = mano[4];

    const indice = mano[8];
    const medio = mano[12];
    const anular = mano[16];
    const menique = mano[20];

    /*
    =======================================
    ARTICULACIONES
    =======================================
    */

    const indiceBase = mano[6];
    const medioBase = mano[10];
    const anularBase = mano[14];
    const meniqueBase = mano[18];

    /*
    =======================================
    MANO ABIERTA
    =======================================
    */

    const manoAbierta =
        indice.y < indiceBase.y &&
        medio.y < medioBase.y &&
        anular.y < anularBase.y &&
        menique.y < meniqueBase.y;

    /*
    =======================================
    PUÑO CERRADO
    =======================================
    */

    const punoCerrado =
        indice.y > indiceBase.y &&
        medio.y > medioBase.y &&
        anular.y > anularBase.y &&
        menique.y > meniqueBase.y;

    /*
    =======================================
    PULGAR ARRIBA
    =======================================
    */

    const pulgarArriba =
        pulgar.y < mano[3].y &&
        indice.y > indiceBase.y &&
        medio.y > medioBase.y;

    /*
    =======================================
    ACCIONES
    =======================================
    */

    if(manoAbierta){

        actualizarIndicadorManos(
            "✋ Mano abierta"
        );

        accionManoAbierta();

        return;
    }

    if(punoCerrado){

        actualizarIndicadorManos(
            "✊ Puño cerrado"
        );

        accionPunoCerrado();

        return;
    }

    if(pulgarArriba){

        actualizarIndicadorManos(
            "👍 Pulgar arriba"
        );

        accionPulgarArriba();

        return;
    }

    /*
    =======================================
    DETECCIÓN NORMAL
    =======================================
    */

    actualizarIndicadorManos(
        "✋ Mano detectada"
    );

}
```
#### movimiento
**acciones-pose.js**
```js
"use strict";

/* ========================================
   CONTROL ANTI REPETICIÓN
======================================== */

let ultimoMovimiento = "";
let tiempoMovimiento = 0;

function movimientoPermitido(nombre){

    const ahora = Date.now();

    if(
        nombre === ultimoMovimiento &&
        ahora - tiempoMovimiento < 3000
    ){
        return false;
    }

    ultimoMovimiento = nombre;
    tiempoMovimiento = ahora;

    return true;

}

/* ========================================
   BRAZOS ARRIBA
   MODO CLARO
======================================== */

function accionBrazosArriba(){

    if(
        !movimientoPermitido(
            "brazos-arriba"
        )
    ){
        return;
    }

    activarModoClaro();

    actualizarIndicadorPose(
        "🙌 Brazos arriba"
    );

    registrarEvento(
        "🙌 Movimiento detectado: modo claro"
    );

}

/* ========================================
   BRAZOS ABAJO
   MODO OSCURO
======================================== */

function accionBrazosAbajo(){

    if(
        !movimientoPermitido(
            "brazos-abajo"
        )
    ){
        return;
    }

    activarModoOscuro();

    actualizarIndicadorPose(
        "👇 Brazos abajo"
    );

    registrarEvento(
        "👇 Movimiento detectado: modo oscuro"
    );

}

/* ========================================
   INCLINACIÓN DERECHA
   ACTIVAR AR
======================================== */

function accionInclinadoDerecha(){

    if(
        !movimientoPermitido(
            "derecha"
        )
    ){
        return;
    }

    actualizarIndicadorPose(
        "➡️ Inclinación derecha"
    );

    registrarEvento(
        "➡️ Activando realidad aumentada"
    );

    if(
        typeof activarRealidadAumentada ===
        "function"
    ){
        activarRealidadAumentada();
    }

}

/* ========================================
   INCLINACIÓN IZQUIERDA
   MOSTRAR ESTADO
======================================== */

function accionInclinadoIzquierda(){

    if(
        !movimientoPermitido(
            "izquierda"
        )
    ){
        return;
    }

    const tema =
        sistema.modoOscuro
        ? "🌙 Oscuro"
        : "🌞 Claro";

    actualizarIndicadorPose(
        "⬅️ Inclinación izquierda"
    );

    registrarEvento(
        `ℹ️ Tema actual: ${tema}`
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.accionBrazosArriba =
accionBrazosArriba;

window.accionBrazosAbajo =
accionBrazosAbajo;

window.accionInclinadoDerecha =
accionInclinadoDerecha;

window.accionInclinadoIzquierda =
accionInclinadoIzquierda;
```
**deteccion-pose.js**
```js
"use strict";

/* ========================================
   VARIABLES
======================================== */

let detectorPose = null;
let poseInicializada = false;

/* ========================================
   INICIAR POSE
======================================== */

async function iniciarDeteccionPose(){

    if(poseInicializada){
        return;
    }

    if(typeof Pose === "undefined"){

        registrarEvento(
            "❌ MediaPipe Pose no encontrado"
        );

        return;
    }

    detectorPose = new Pose({

        locateFile:(archivo)=>{

            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${archivo}`;

        }

    });

    detectorPose.setOptions({

        modelComplexity:1,

        smoothLandmarks:true,

        minDetectionConfidence:0.7,

        minTrackingConfidence:0.5

    });

    detectorPose.onResults(
        procesarResultadosPose
    );

    iniciarSeguimientoPose();

    poseInicializada = true;

    sistema.poseActiva = true;

    registrarEvento(
        "👤 Detección corporal iniciada"
    );

}

/* ========================================
   SEGUIMIENTO
======================================== */

function iniciarSeguimientoPose(){

    if(!videoCamara){

        registrarEvento(
            "❌ Cámara no disponible"
        );

        return;
    }

    const camaraPose =
    new Camera(
        videoCamara,
        {

            onFrame:async()=>{

                if(!detectorPose){
                    return;
                }

                await detectorPose.send({
                    image:videoCamara
                });

            },

            width:1280,
            height:720

        }
    );

    camaraPose.start();

}

/* ========================================
   RESULTADOS
======================================== */

function procesarResultadosPose(resultados){

    if(!resultados.poseLandmarks){

        actualizarIndicadorPose(
            "Esperando movimiento"
        );

        if(
            typeof actualizarPoseAR ===
            "function"
        ){

            actualizarPoseAR(
                "Sin detectar"
            );

        }

        return;
    }

    actualizarIndicadorPose(
        "👤 Cuerpo detectado"
    );

    if(
        typeof actualizarPoseAR ===
        "function"
    ){

        actualizarPoseAR(
            "Detectado"
        );

    }

    detectarMovimientoCorporal(
        resultados.poseLandmarks
    );

}

/* ========================================
   DETENER
======================================== */

function detenerDeteccionPose(){

    sistema.poseActiva = false;

    actualizarIndicadorPose(
        "Detenida"
    );

    registrarEvento(
        "👤 Detección corporal detenida"
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.iniciarDeteccionPose =
iniciarDeteccionPose;

window.detenerDeteccionPose =
detenerDeteccionPose;
```
**estados-pose.js**
```js
"use strict";

/* ========================================
   DETECCIÓN DE MOVIMIENTOS
======================================== */

function detectarMovimientoCorporal(puntos){

    if(!puntos){
        return;
    }

    const hombroIzquierdo =
    puntos[11];

    const hombroDerecho =
    puntos[12];

    const munecaIzquierda =
    puntos[15];

    const munecaDerecha =
    puntos[16];

    if(
        !hombroIzquierdo ||
        !hombroDerecho ||
        !munecaIzquierda ||
        !munecaDerecha
    ){
        return;
    }

    /* ====================================
       BRAZOS ARRIBA
    ==================================== */

    const brazosArriba =
        munecaIzquierda.y < hombroIzquierdo.y &&
        munecaDerecha.y < hombroDerecho.y;

    if(brazosArriba){

        actualizarIndicadorPose(
            "🙌 Brazos arriba"
        );

        accionBrazosArriba();

        return;
    }

    /* ====================================
       BRAZOS ABAJO
    ==================================== */

    const brazosAbajo =
        munecaIzquierda.y > hombroIzquierdo.y &&
        munecaDerecha.y > hombroDerecho.y;

    if(brazosAbajo){

        actualizarIndicadorPose(
            "👇 Brazos abajo"
        );

        accionBrazosAbajo();

    }

    /* ====================================
       INCLINACIÓN DERECHA
    ==================================== */

    const inclinacion =
        hombroIzquierdo.y -
        hombroDerecho.y;

    if(inclinacion > 0.08){

        actualizarIndicadorPose(
            "➡️ Inclinación derecha"
        );

        accionInclinadoDerecha();

        return;
    }

    /* ====================================
       INCLINACIÓN IZQUIERDA
    ==================================== */

    if(inclinacion < -0.08){

        actualizarIndicadorPose(
            "⬅️ Inclinación izquierda"
        );

        accionInclinadoIzquierda();

        return;
    }

    /* ====================================
       POSICIÓN NEUTRA
    ==================================== */

    actualizarIndicadorPose(
        "🧍 Cuerpo detectado"
    );

}
```
#### realidad-aumentada
**ar.js**
```js
"use strict";

let realidadAumentadaActiva = false;

function activarRealidadAumentada(){

    const visor =
    document.querySelector(
        ".visor-ar"
    );

    if(!visor){
        return;
    }

    realidadAumentadaActiva = true;

    visor.innerHTML = `
        <div class="panel-ar">
            <div class="indicador-ar">
                📱 Realidad aumentada activa
            </div>

            <div id="escena-ar">

            </div>
        </div>
    `;

    crearEscenaAR();

    registrarEvento(
        "📱 Realidad aumentada activada"
    );

}

window.activarRealidadAumentada =
activarRealidadAumentada;
```
**escena-ar.js**
```js
"use strict";

function crearEscenaAR(){

    const escena =
    document.getElementById(
        "escena-ar"
    );

    if(!escena){
        return;
    }

    escena.innerHTML = `

        <div class="panel-domotica">

            <div class="casa-icono">
                🖥️
            </div>

            <div class="estado-item">

                <span>🎨 Tema</span>

                <span
                    id="estado-tema-ar"
                    class="estado-valor">

                    🌞 Claro

                </span>

            </div>

            <div class="estado-item">

                <span>🎤 Voz</span>

                <span
                    id="estado-voz-ar"
                    class="estado-valor">

                    Escuchando

                </span>

            </div>

            <div class="estado-item">

                <span>✋ Manos</span>

                <span
                    id="estado-manos-ar"
                    class="estado-valor">

                    Esperando

                </span>

            </div>

            <div class="estado-item">

                <span>👤 Pose</span>

                <span
                    id="estado-pose-ar"
                    class="estado-valor">

                    Esperando

                </span>

            </div>

            <div class="estado-item">

                <span>📱 AR</span>

                <span
                    id="estado-ar"
                    class="estado-valor">

                    Activa

                </span>

            </div>

        </div>

    `;

}
```
**objetos-ar.js**
```js
"use strict";

/* ========================================
   ACTUALIZAR TEMA EN PANEL AR
======================================== */

function temaARClaro(){

    const estado =
    document.getElementById(
        "estado-tema-ar"
    );

    if(!estado){
        return;
    }

    estado.textContent =
    "🌞 Claro";

    estado.style.color =
    "#f97316";

}

/* ========================================
   MODO OSCURO
======================================== */

function temaAROscuro(){

    const estado =
    document.getElementById(
        "estado-tema-ar"
    );

    if(!estado){
        return;
    }

    estado.textContent =
    "🌙 Oscuro";

    estado.style.color =
    "#1d4ed8";

}

/* ========================================
   VOZ
======================================== */

function actualizarVozAR(texto){

    const estado =
    document.getElementById(
        "estado-voz-ar"
    );

    if(!estado){
        return;
    }

    estado.textContent =
    texto;

}

/* ========================================
   MANOS
======================================== */

function actualizarManosAR(texto){

    const estado =
    document.getElementById(
        "estado-manos-ar"
    );

    if(!estado){
        return;
    }

    estado.textContent =
    texto;

}

/* ========================================
   POSE
======================================== */

function actualizarPoseAR(texto){

    const estado =
    document.getElementById(
        "estado-pose-ar"
    );

    if(!estado){
        return;
    }

    estado.textContent =
    texto;

}

/* ========================================
   ESTADO GENERAL AR
======================================== */

function actualizarEstadoAR(texto){

    const estado =
    document.getElementById(
        "estado-ar"
    );

    if(!estado){
        return;
    }

    estado.textContent =
    texto;

}

/* ========================================
   EXPORTACIONES
======================================== */

window.temaARClaro =
temaARClaro;

window.temaAROscuro =
temaAROscuro;

window.actualizarVozAR =
actualizarVozAR;

window.actualizarManosAR =
actualizarManosAR;

window.actualizarPoseAR =
actualizarPoseAR;

window.actualizarEstadoAR =
actualizarEstadoAR;
```
#### voz
**comandos-voz.js**
```js
"use strict";

/* ========================================
   COMANDOS DE VOZ
======================================== */

function procesarComandoVoz(texto){

    if(!texto){
        return;
    }

    console.log(
        "Comando recibido:",
        texto
    );

    actualizarIndicadorVoz(
        texto
    );

    if(
        typeof actualizarVozAR ===
        "function"
    ){
        actualizarVozAR(texto);
    }

    /* ====================================
       MODO CLARO
    ==================================== */

    if(
        texto.includes("modo claro") ||
        texto.includes("tema claro") ||
        texto.includes("activar modo claro") ||
        texto.includes("activar tema claro")
    ){

        activarModoClaro();

        registrarEvento(
            "🎤 Comando detectado: modo claro"
        );

        return;
    }

    /* ====================================
       MODO OSCURO
    ==================================== */

    if(
        texto.includes("modo oscuro") ||
        texto.includes("tema oscuro") ||
        texto.includes("activar modo oscuro") ||
        texto.includes("activar tema oscuro")
    ){

        activarModoOscuro();

        registrarEvento(
            "🎤 Comando detectado: modo oscuro"
        );

        return;
    }

    /* ====================================
       REALIDAD AUMENTADA
    ==================================== */

    if(
        texto.includes("realidad aumentada") ||
        texto.includes("activar realidad aumentada") ||
        texto.includes("abrir realidad aumentada")
    ){

        if(
            typeof activarRealidadAumentada ===
            "function"
        ){

            activarRealidadAumentada();

            registrarEvento(
                "🎤 Realidad aumentada activada"
            );

        }

        return;
    }

    /* ====================================
       ESTADO DEL SISTEMA
    ==================================== */

    if(
        texto.includes("estado") ||
        texto.includes("estado del sistema")
    ){

        informarEstadoSistema();

        return;
    }

    /* ====================================
       AYUDA
    ==================================== */

    if(
        texto.includes("ayuda") ||
        texto.includes("comandos") ||
        texto.includes("qué puedes hacer") ||
        texto.includes("que puedes hacer")
    ){

        mostrarAyuda();

        return;
    }

}

/* ========================================
   INFORMACIÓN DEL SISTEMA
======================================== */

function informarEstadoSistema(){

    const tema =
    sistema.modoOscuro
        ? "Oscuro"
        : "Claro";

    const mensaje =
        `Tema actual: ${tema}`;

    actualizarIndicadorVoz(
        mensaje
    );

    registrarEvento(
        "ℹ️ " + mensaje
    );

}

/* ========================================
   AYUDA
======================================== */

function mostrarAyuda(){

    const mensaje =
        `
        Comandos disponibles:
        modo claro,
        modo oscuro,
        realidad aumentada,
        estado del sistema
        `;

    actualizarIndicadorVoz(
        mensaje
    );

    registrarEvento(
        "📖 Ayuda de voz mostrada"
    );

}

/* ========================================
   BOTÓN DE VOZ
======================================== */

const botonVoz =
document.getElementById(
    "btn-voz"
);

if(botonVoz){

    botonVoz.addEventListener(
        "click",
        () => {

            if(
                typeof iniciarReconocimientoVoz ===
                "function"
            ){

                iniciarReconocimientoVoz();

                registrarEvento(
                    "🎤 Reconocimiento de voz activado"
                );

            }

        }
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.procesarComandoVoz =
procesarComandoVoz;

window.informarEstadoSistema =
informarEstadoSistema;

window.mostrarAyuda =
mostrarAyuda;
```
**reconocimiento-voz.js**
```js
"use strict";

/* ========================================
   VARIABLES
======================================== */

let reconocimiento = null;

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const iconoMicrofono =
document.getElementById(
    "icono-microfono"
);

/* ========================================
   INICIAR RECONOCIMIENTO
======================================== */

function iniciarReconocimientoVoz(){

    if(!SpeechRecognition){

        registrarEvento(
            "❌ Reconocimiento de voz no compatible"
        );

        actualizarIndicadorVoz(
            "No compatible"
        );

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_off.svg";

        }

        return;
    }

    if(reconocimiento){
        return;
    }

    reconocimiento =
    new SpeechRecognition();

    reconocimiento.lang = "es-ES";

    reconocimiento.continuous = true;

    reconocimiento.interimResults = true;

    reconocimiento.maxAlternatives = 1;

    configurarEventosVoz();

    try{

        reconocimiento.start();

    }
    catch(error){

        console.warn(error);

    }

}

/* ========================================
   EVENTOS
======================================== */

function configurarEventosVoz(){

    reconocimiento.onstart = () => {

        sistema.vozActiva = true;

        actualizarIndicadorVoz(
            "🎤 Escuchando..."
        );

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_on.svg";

        }

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                "🎤 Escuchando"
            );

        }

        if(
            typeof mostrarNotificacion ===
            "function"
        ){

            mostrarNotificacion(
                "🎤 Micrófono activado",
                "correcto"
            );

        }

        registrarEvento(
            "🎤 Reconocimiento de voz iniciado"
        );

    };

    reconocimiento.onresult = (evento) => {

        const resultado =
        evento.results[
            evento.results.length - 1
        ];

        const texto =
        resultado[0]
        .transcript
        .toLowerCase()
        .trim();

        actualizarIndicadorVoz(
            texto
        );

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                texto
            );

        }

        registrarEvento(
            `🗣️ ${texto}`
        );

        procesarComandoVoz(
            texto
        );

    };

    reconocimiento.onerror = (evento) => {

        console.error(evento);

        sistema.vozActiva = false;

        actualizarIndicadorVoz(
            "Error de voz"
        );

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_off.svg";

        }

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                "Error"
            );

        }

        if(
            typeof mostrarNotificacion ===
            "function"
        ){

            mostrarNotificacion(
                "⚠️ Error en reconocimiento de voz",
                "error"
            );

        }

        registrarEvento(
            "⚠️ Error en reconocimiento de voz"
        );

    };

    reconocimiento.onend = () => {

        sistema.vozActiva = false;

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_off.svg";

        }

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                "Reiniciando..."
            );

        }

        registrarEvento(
            "🔄 Reiniciando reconocimiento"
        );

        try{

            reconocimiento.start();

        }
        catch(error){

            console.warn(error);

        }

    };

}

/* ========================================
   DETENER
======================================== */

function detenerReconocimientoVoz(){

    if(!reconocimiento){
        return;
    }

    reconocimiento.stop();

    reconocimiento = null;

    sistema.vozActiva = false;

    actualizarIndicadorVoz(
        "Detenido"
    );

    if(iconoMicrofono){

        iconoMicrofono.src =
        "recursos/iconos/mic_off.svg";

    }

    if(
        typeof actualizarVozAR ===
        "function"
    ){

        actualizarVozAR(
            "Detenido"
        );

    }

    registrarEvento(
        "🎤 Reconocimiento detenido"
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.iniciarReconocimientoVoz =
iniciarReconocimientoVoz;

window.detenerReconocimientoVoz =
detenerReconocimientoVoz;
```
### recursos
#### iconos
#### imagenes
## 003-Resultado de Aprendizaje

A- Se han identificado las herramientas disponibles para el aprendizaje automático relacionadas con las interfaces de usuario.

Para el desarrollo del proyecto se analizaron e identificaron diferentes herramientas relacionadas con el aprendizaje automático y las interfaces naturales de usuario. Entre las tecnologías utilizadas destacan MediaPipe Hands para la detección de manos, MediaPipe Pose para la detección del cuerpo humano y Web Speech API para el reconocimiento de voz. Estas herramientas permiten interactuar con la aplicación mediante métodos naturales sin necesidad de utilizar dispositivos de entrada tradicionales.

--------------------------------------------------------------------------------

B- Se ha creado una interfaz natural de usuario utilizando las herramientas disponibles.

Se ha desarrollado una interfaz web que permite al usuario interactuar mediante voz, gestos de la mano y movimientos corporales. La aplicación está compuesta por diferentes paneles de información, una cámara integrada, indicadores visuales de estado, registro de eventos y un panel de realidad aumentada. El sistema se ha diseñado siguiendo el concepto de Interfaz Natural de Usuario (NUI), reduciendo la dependencia del teclado y del ratón.

--------------------------------------------------------------------------------

C- Se ha utilizado el reconocimiento de voz para implementar acciones en las interfaces naturales de usuario.

Se ha implementado reconocimiento de voz mediante Web Speech API. El sistema es capaz de interpretar diferentes comandos pronunciados por el usuario y ejecutar acciones asociadas. Entre los comandos disponibles se encuentran:

- "Modo claro"
- "Modo oscuro"
- "Realidad aumentada"
- "Estado del sistema"

Los comandos reconocidos son procesados en tiempo real y modifican el comportamiento y la apariencia de la interfaz.

--------------------------------------------------------------------------------

D- Se ha incorporado la detección del movimiento del cuerpo para implementar acciones en las interfaces naturales de usuario.

Mediante MediaPipe Pose se ha integrado la detección del movimiento corporal. El sistema identifica diferentes posiciones del cuerpo y ejecuta acciones en función de ellas. Entre las acciones implementadas destacan:

- Brazos arriba → Activación del modo claro.
- Brazos abajo → Activación del modo oscuro.
- Inclinación hacia la derecha → Activación de la realidad aumentada.
- Inclinación hacia la izquierda → Consulta del estado del sistema.

De esta forma se consigue controlar la aplicación utilizando únicamente movimientos corporales.

--------------------------------------------------------------------------------

E- Se han integrado elementos de detección de partes del cuerpo para implementar acciones en las interfaces naturales de usuario.

Se ha integrado MediaPipe Hands para detectar partes específicas del cuerpo, concretamente las manos y los dedos. El sistema reconoce diferentes gestos y los utiliza para controlar la aplicación.

Los gestos implementados son:

- Mano abierta → Activar modo claro.
- Puño cerrado → Activar modo oscuro.
- Pulgar arriba → Activar realidad aumentada.

Esta funcionalidad demuestra el uso de visión artificial para interpretar movimientos de partes concretas del cuerpo y asociarlos a acciones dentro de la interfaz.

--------------------------------------------------------------------------------

F- Se ha integrado la realidad aumentada en los interfaces de usuario.

Se ha incorporado un panel específico de realidad aumentada dentro de la interfaz. Este panel puede activarse mediante comandos de voz, gestos de las manos o movimientos corporales. La sección de realidad aumentada muestra información contextual del estado del sistema y se integra dentro de la experiencia de usuario como elemento interactivo asociado a las tecnologías de reconocimiento implementadas.