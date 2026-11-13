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

    poseInicializada = true;

    registrarConsumidorHolistico(
        "pose",
        (resultados)=>{

            if(!sistema.poseActiva){
                return;
            }

            procesarResultadosPose(resultados);

        }
    );

    sistema.poseActiva = true;

    try{

        await asegurarDeteccionHolistica();

        registrarEvento(
            "👤 Detección corporal iniciada"
        );

    }catch(error){

        poseInicializada = false;
        sistema.poseActiva = false;

        registrarEvento(
            "❌ " + error.message
        );

    }

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