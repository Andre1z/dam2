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