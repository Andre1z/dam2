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

    manosInicializadas = true;

    registrarConsumidorHolistico(
        "manos",
        (resultados)=>{

            if(!sistema.manosActivas){
                return;
            }

            const mano =
            resultados.rightHandLandmarks ||
            resultados.leftHandLandmarks;

            procesarResultadosManos({
                multiHandLandmarks: mano ? [mano] : []
            });

        }
    );

    sistema.manosActivas = true;

    try{

        await asegurarDeteccionHolistica();

        registrarEvento(
            "✋ Detección de manos iniciada"
        );

    }catch(error){

        manosInicializadas = false;
        sistema.manosActivas = false;

        registrarEvento(
            "❌ " + error.message
        );

    }

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