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