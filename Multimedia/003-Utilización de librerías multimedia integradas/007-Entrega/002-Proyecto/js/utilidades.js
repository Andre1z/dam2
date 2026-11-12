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