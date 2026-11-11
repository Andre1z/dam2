"use strict";

/* ========================================
   ACTUALIZAR PANEL GENERAL
======================================== */

function actualizarPanelEstado(){

    actualizarIndicadorTema();
    actualizarIndicadorVozEstado();
    actualizarIndicadorManosEstado();
    actualizarIndicadorPoseEstado();

}

/* ========================================
   TEMA
======================================== */

function actualizarIndicadorTema(){

    const elemento =
    document.getElementById(
        "estado-tema-ar"
    );

    if(!elemento){
        return;
    }

    if(sistema.modoOscuro){

        elemento.textContent =
        "🌙 Oscuro";

    }else{

        elemento.textContent =
        "🌞 Claro";

    }

}

/* ========================================
   VOZ
======================================== */

function actualizarIndicadorVozEstado(){

    const elemento =
    document.getElementById(
        "estado-voz-ar"
    );

    if(!elemento){
        return;
    }

    elemento.textContent =
    sistema.vozActiva
        ? "🎤 Activa"
        : "⏸️ Inactiva";

}

/* ========================================
   MANOS
======================================== */

function actualizarIndicadorManosEstado(){

    const elemento =
    document.getElementById(
        "estado-manos-ar"
    );

    if(!elemento){
        return;
    }

    elemento.textContent =
    sistema.manosActivas
        ? "✋ Activas"
        : "⏸️ Inactivas";

}

/* ========================================
   POSE
======================================== */

function actualizarIndicadorPoseEstado(){

    const elemento =
    document.getElementById(
        "estado-pose-ar"
    );

    if(!elemento){
        return;
    }

    elemento.textContent =
    sistema.poseActiva
        ? "👤 Detectando"
        : "⏸️ Inactiva";

}

/* ========================================
   ACTUALIZACIÓN AUTOMÁTICA
======================================== */

setInterval(
    actualizarPanelEstado,
    1000
);

/* ========================================
   EXPORTACIÓN
======================================== */

window.actualizarPanelEstado =
actualizarPanelEstado;

window.actualizarIndicadorTema =
actualizarIndicadorTema;

window.actualizarIndicadorVozEstado =
actualizarIndicadorVozEstado;

window.actualizarIndicadorManosEstado =
actualizarIndicadorManosEstado;

window.actualizarIndicadorPoseEstado =
actualizarIndicadorPoseEstado;