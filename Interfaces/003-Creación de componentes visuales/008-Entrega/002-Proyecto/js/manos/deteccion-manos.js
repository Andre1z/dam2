"use strict";

/* ========================================
   VARIABLES
======================================== */

let detectorManos = null;
let manosInicializadas = false;

/* ========================================
   INICIAR MEDIAPIPE HANDS
======================================== */

async function iniciarDeteccionManos(){

    if(manosInicializadas){
        return;
    }

    if(typeof Hands === "undefined"){

        registrarEvento(
            "❌ MediaPipe Hands no disponible"
        );

        return;
    }

    detectorManos = new Hands({

        locateFile:(archivo)=>{

            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${archivo}`;

        }

    });

    detectorManos.setOptions({

        maxNumHands:1,

        modelComplexity:1,

        minDetectionConfidence:0.7,

        minTrackingConfidence:0.5

    });

    detectorManos.onResults(
        procesarResultadosManos
    );

    iniciarSeguimientoManos();

    sistema.manosActivas = true;

    manosInicializadas = true;

    registrarEvento(
        "✋ Detección de manos iniciada"
    );

}

/* ========================================
   CÁMARA PARA MANOS
======================================== */

function iniciarSeguimientoManos(){

    if(!videoCamara){

        registrarEvento(
            "❌ Cámara no disponible"
        );

        return;
    }

    const camara = new Camera(
        videoCamara,
        {

            onFrame:async()=>{

                if(!detectorManos){
                    return;
                }

                await detectorManos.send({
                    image:videoCamara
                });

            },

            width:1280,
            height:720

        }
    );

    camara.start();

}

/* ========================================
   RESULTADOS
======================================== */

function procesarResultadosManos(resultados){

    if(
        !resultados.multiHandLandmarks ||
        resultados.multiHandLandmarks.length === 0
    ){

        actualizarIndicadorManos(
            "Esperando gestos"
        );

        if(
            typeof actualizarManosAR ===
            "function"
        ){

            actualizarManosAR(
                "Sin detectar"
            );

        }

        return;
    }

    actualizarIndicadorManos(
        "✋ Mano detectada"
    );

    if(
        typeof actualizarManosAR ===
        "function"
    ){

        actualizarManosAR(
            "Detectada"
        );

    }

    detectarGestos(
        resultados.multiHandLandmarks
    );

}

/* ========================================
   DETENER
======================================== */

function detenerDeteccionManos(){

    sistema.manosActivas = false;

    actualizarIndicadorManos(
        "Detenida"
    );

    registrarEvento(
        "✋ Detección de manos detenida"
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.iniciarDeteccionManos =
iniciarDeteccionManos;

window.detenerDeteccionManos =
detenerDeteccionManos;