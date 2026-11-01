let elementos = document.querySelectorAll("jocarsa-texto");

elementos.forEach(function(elemento){

  let elementoenmemoria = elemento;

  // Guardamos los atributos importantes
  // ANTES de eliminar el elemento original
  let nombre = elementoenmemoria.getAttribute("name");


  // ==============================
  // CONTENEDOR PRINCIPAL
  // ==============================

  let contenedor = document.createElement("div");

  contenedor.classList.add("jocarsa-texto");

  elementoenmemoria.after(contenedor);

  elemento.remove();


  // ==============================
  // BARRA DE HERRAMIENTAS
  // ==============================

  let barra = document.createElement("div");

  barra.classList.add("barra");
  barra.setAttribute("role", "toolbar");
  barra.setAttribute("aria-label", "Formato de texto");

  contenedor.appendChild(barra);


  // ==============================
  // FUNCIÓN PARA CREAR BOTONES
  // ==============================

  function crearBoton(texto, comando, valor = null){

    let boton = document.createElement("button");

    // Muy importante:
    // evitamos que los botones de la barra
    // envíen el formulario
    boton.type = "button";

    boton.innerHTML = texto;
    const nombresFormato = {
      bold: "negrita",
      italic: "cursiva",
      underline: "subrayado",
      strikeThrough: "tachado",
      formatBlock: "bloque " + valor,
      insertUnorderedList: "lista con viñetas",
      insertOrderedList: "lista numerada",
      justifyLeft: "alinear a la izquierda",
      justifyCenter: "centrar",
      justifyRight: "alinear a la derecha",
      undo: "deshacer",
      redo: "rehacer"
    };
    boton.setAttribute("aria-label", "Aplicar " + nombresFormato[comando]);

    barra.appendChild(boton);

    boton.onclick = function(){

      document.execCommand(
        comando,
        false,
        valor
      );

      contenedor_rico.focus();

      actualizarHTML();

    };

    return boton;

  }


  // ==============================
  // BOTONES
  // ==============================

  crearBoton("<b>B</b>", "bold");

  crearBoton("<i>I</i>", "italic");

  crearBoton("<u>U</u>", "underline");

  crearBoton("<s>S</s>", "strikeThrough");

  crearBoton("H1", "formatBlock", "h1");

  crearBoton("H2", "formatBlock", "h2");

  crearBoton("P", "formatBlock", "p");

  crearBoton("•", "insertUnorderedList");

  crearBoton("1.", "insertOrderedList");

  crearBoton("←", "justifyLeft");

  crearBoton("↔", "justifyCenter");

  crearBoton("→", "justifyRight");

  crearBoton("↶", "undo");

  crearBoton("↷", "redo");


  // ==============================
  // BOTÓN ENLACE
  // ==============================

  let boton_enlace = document.createElement("button");

  boton_enlace.type = "button";

  boton_enlace.textContent = "🔗";
  boton_enlace.setAttribute("aria-label", "Insertar enlace");

  barra.appendChild(boton_enlace);

  boton_enlace.onclick = function(){

    let url = prompt("Introduce la URL:");

    if(url){

      document.execCommand(
        "createLink",
        false,
        url
      );

    }

    actualizarHTML();

  };


  // ==============================
  // QUITAR FORMATO
  // ==============================

  let boton_limpiar = document.createElement("button");

  boton_limpiar.type = "button";

  boton_limpiar.textContent = "Tx";
  boton_limpiar.setAttribute("aria-label", "Quitar formato");

  barra.appendChild(boton_limpiar);

  boton_limpiar.onclick = function(){

    document.execCommand(
      "removeFormat",
      false,
      null
    );

    actualizarHTML();

  };


  // ==============================
  // EDITOR VISUAL
  // ==============================

  let contenedor_rico = document.createElement("article");

  contenedor_rico.setAttribute(
    "contenteditable",
    "true"
  );
  contenedor_rico.setAttribute("role", "textbox");
  contenedor_rico.setAttribute("aria-label", "Editor de texto");
  contenedor_rico.setAttribute("aria-multiline", "true");

  contenedor.appendChild(contenedor_rico);


  // ==============================
  // TEXTAREA HTML
  // ==============================

  let contenedor_pobre = document.createElement("textarea");
  contenedor_pobre.setAttribute("aria-label", "Código HTML del texto");


  // ==============================
  // HEREDAR NAME
  // ==============================

  if(nombre){

    contenedor_pobre.setAttribute(
      "name",
      nombre
    );

  }


  contenedor.appendChild(contenedor_pobre);

  contenedor_pobre.style.display = "none";


  // ==============================
  // SINCRONIZACIÓN
  // ==============================

  function actualizarHTML(){

    contenedor_pobre.value =
      contenedor_rico.innerHTML;

  }


  contenedor_rico.oninput = function(){

    actualizarHTML();

  };


  // Si modificamos directamente
  // el código HTML del textarea,
  // actualizamos también el editor visual

  contenedor_pobre.oninput = function(){

    contenedor_rico.innerHTML =
      contenedor_pobre.value;

  };


  // ==============================
  // MOSTRAR / OCULTAR HTML
  // ==============================

  let boton_html = document.createElement("button");

  boton_html.type = "button";

  boton_html.textContent = "</>";
  boton_html.setAttribute("aria-label", "Mostrar u ocultar código HTML");

  barra.appendChild(boton_html);

  boton_html.onclick = function(){

    if(contenedor_pobre.style.display == "none"){

      actualizarHTML();

      contenedor_pobre.style.display = "block";

      contenedor_rico.style.display = "none";

    }else{

      contenedor_rico.innerHTML =
        contenedor_pobre.value;

      contenedor_pobre.style.display = "none";

      contenedor_rico.style.display = "block";

    }

  };

});