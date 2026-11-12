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