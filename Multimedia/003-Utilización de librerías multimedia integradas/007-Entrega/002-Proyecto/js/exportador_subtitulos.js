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