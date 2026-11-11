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