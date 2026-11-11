"use strict";

/* ========================================
   VARIABLES
======================================== */

let detectorPose = null;
let poseInicializada = false;

/* ========================================
   INICIAR POSE
======================================== */

async function iniciarDeteccionPose(){

    if(poseInicializada){
        return;
    }

    if(typeof Pose === "undefined"){

        registrarEvento(
            "❌ MediaPipe Pose no encontrado"
        );

        return;
    }

    detectorPose = new Pose({

        locateFile:(archivo)=>{

            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${archivo}`;

        }

    });

    detectorPose.setOptions({

        modelComplexity:1,

        smoothLandmarks:true,

        minDetectionConfidence:0.7,

        minTrackingConfidence:0.5

    });

    detectorPose.onResults(
        procesarResultadosPose
    );

    iniciarSeguimientoPose();

    poseInicializada = true;

    sistema.poseActiva = true;

    registrarEvento(
        "👤 Detección corporal iniciada"
    );

}

/* ========================================
   SEGUIMIENTO
======================================== */

function iniciarSeguimientoPose(){

    if(!videoCamara){

        registrarEvento(
            "❌ Cámara no disponible"
        );

        return;
    }

    const camaraPose =
    new Camera(
        videoCamara,
        {

            onFrame:async()=>{

                if(!detectorPose){
                    return;
                }

                await detectorPose.send({
                    image:videoCamara
                });

            },

            width:1280,
            height:720

        }
    );

    camaraPose.start();

}

/* ========================================
   RESULTADOS
======================================== */

function procesarResultadosPose(resultados){

    if(!resultados.poseLandmarks){

        actualizarIndicadorPose(
            "Esperando movimiento"
        );

        if(
            typeof actualizarPoseAR ===
            "function"
        ){

            actualizarPoseAR(
                "Sin detectar"
            );

        }

        return;
    }

    actualizarIndicadorPose(
        "👤 Cuerpo detectado"
    );

    if(
        typeof actualizarPoseAR ===
        "function"
    ){

        actualizarPoseAR(
            "Detectado"
        );

    }

    detectarMovimientoCorporal(
        resultados.poseLandmarks
    );

}

/* ========================================
   DETENER
======================================== */

function detenerDeteccionPose(){

    sistema.poseActiva = false;

    actualizarIndicadorPose(
        "Detenida"
    );

    registrarEvento(
        "👤 Detección corporal detenida"
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.iniciarDeteccionPose =
iniciarDeteccionPose;

window.detenerDeteccionPose =
detenerDeteccionPose;