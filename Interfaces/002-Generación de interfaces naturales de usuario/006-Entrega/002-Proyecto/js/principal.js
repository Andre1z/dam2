"use strict";

/* ========================================
   ESTADO GLOBAL
======================================== */

const sistema = {
    modoOscuro: false,
    vozActiva: false,
    manosActivas: false,
    poseActiva: false,
    arActiva: false
};

/* ========================================
   ELEMENTOS DOM
======================================== */

const videoCamara =
document.getElementById("camara");

const estadoSistema =
document.getElementById("estado-sistema");

const registroEventos =
document.getElementById("registro-eventos");

const textoVoz =
document.getElementById("texto-voz");

const estadoManos =
document.getElementById("estado-manos");

const estadoPose =
document.getElementById("estado-pose");

const iconoCamara =
document.getElementById("icono-camara");

const estadoCamara =
document.getElementById("estado-camara");

/* ========================================
   INICIO
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacion
);

async function iniciarAplicacion(){

    registrarEvento(
        "🚀 Aplicación iniciada"
    );

    cambiarEstadoSistema(
        "Inicializando sistema..."
    );

    await iniciarCamara();

    if(
        typeof iniciarReconocimientoVoz ===
        "function"
    ){
        iniciarReconocimientoVoz();
    }

    if(
        typeof iniciarDeteccionManos ===
        "function"
    ){
        iniciarDeteccionManos();
    }

    if(
        typeof iniciarDeteccionPose ===
        "function"
    ){
        iniciarDeteccionPose();
    }

    cambiarEstadoSistema(
        "✅ Sistema preparado"
    );

    registrarEvento(
        "✅ Sistema preparado"
    );

}

/* ========================================
   CÁMARA
======================================== */

async function iniciarCamara(){

    if(
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ){

        registrarEvento(
            "❌ Cámara no soportada"
        );

        if(iconoCamara){

            iconoCamara.src =
            "recursos/iconos/cam_off.svg";

        }

        if(estadoCamara){

            estadoCamara.textContent =
            "No compatible";

        }

        return;
    }

    try{

        const flujo =
        await navigator.mediaDevices.getUserMedia({

            video:{
                width:{ ideal:1280 },
                height:{ ideal:720 },
                aspectRatio:1.777777,
                facingMode:"user"
            },

            audio:false

        });

        videoCamara.srcObject =
        flujo;

        videoCamara.setAttribute(
            "playsinline",
            true
        );

        if(iconoCamara){

            iconoCamara.src =
            "recursos/iconos/cam_on.svg";

        }

        if(estadoCamara){

            estadoCamara.textContent =
            "Cámara activa";

        }

        registrarEvento(
            "📷 Cámara iniciada"
        );

    }
    catch(error){

        console.error(error);

        registrarEvento(
            "❌ Error al acceder a la cámara"
        );

        cambiarEstadoSistema(
            "Error de cámara"
        );

        if(iconoCamara){

            iconoCamara.src =
            "recursos/iconos/cam_off.svg";

        }

        if(estadoCamara){

            estadoCamara.textContent =
            "Error";

        }

    }

}

/* ========================================
   MODOS
======================================== */

function activarModoClaro(){

    sistema.modoOscuro = false;

    document.body.classList.remove(
        "modo-oscuro"
    );

    registrarEvento(
        "🌞 Modo claro activado"
    );

    cambiarEstadoSistema(
        "🌞 Modo claro"
    );

    if(
        typeof temaARClaro ===
        "function"
    ){
        temaARClaro();
    }

}

function activarModoOscuro(){

    sistema.modoOscuro = true;

    document.body.classList.add(
        "modo-oscuro"
    );

    registrarEvento(
        "🌙 Modo oscuro activado"
    );

    cambiarEstadoSistema(
        "🌙 Modo oscuro"
    );

    if(
        typeof temaAROscuro ===
        "function"
    ){
        temaAROscuro();
    }

}

/* ========================================
   EVENTOS
======================================== */

function registrarEvento(texto){

    if(!registroEventos){
        return;
    }

    const evento =
    document.createElement("div");

    evento.className =
    "evento";

    const fecha =
    new Date().toLocaleTimeString();

    evento.innerHTML =

        `<strong>${fecha}</strong><br>${texto}`;

    registroEventos.prepend(
        evento
    );

    while(
        registroEventos.children.length > 50
    ){

        registroEventos.removeChild(
            registroEventos.lastChild
        );

    }

}

/* ========================================
   ESTADO SISTEMA
======================================== */

function cambiarEstadoSistema(texto){

    if(!estadoSistema){
        return;
    }

    estadoSistema.textContent =
    texto;

}

/* ========================================
   INDICADORES
======================================== */

function actualizarIndicadorVoz(texto){

    if(textoVoz){

        textoVoz.textContent =
        texto;

    }

}

function actualizarIndicadorManos(texto){

    if(estadoManos){

        estadoManos.textContent =
        texto;

    }

}

function actualizarIndicadorPose(texto){

    if(estadoPose){

        estadoPose.textContent =
        texto;

    }

}

/* ========================================
   EXPORTACIONES
======================================== */

window.sistema =
sistema;

window.activarModoClaro =
activarModoClaro;

window.activarModoOscuro =
activarModoOscuro;

window.registrarEvento =
registrarEvento;

window.cambiarEstadoSistema =
cambiarEstadoSistema;

window.actualizarIndicadorVoz =
actualizarIndicadorVoz;

window.actualizarIndicadorManos =
actualizarIndicadorManos;

window.actualizarIndicadorPose =
actualizarIndicadorPose;