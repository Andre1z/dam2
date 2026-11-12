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