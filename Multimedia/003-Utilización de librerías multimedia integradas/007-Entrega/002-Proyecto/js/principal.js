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