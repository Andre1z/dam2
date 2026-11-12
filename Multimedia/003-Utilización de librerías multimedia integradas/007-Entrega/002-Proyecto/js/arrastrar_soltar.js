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