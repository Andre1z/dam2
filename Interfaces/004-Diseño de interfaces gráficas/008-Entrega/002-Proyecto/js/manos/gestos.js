"use strict";

/* ========================================
   DETECTOR DE GESTOS
======================================== */

function detectarGestos(manos){

    if(
        !manos ||
        manos.length === 0
    ){
        return;
    }

    const mano = manos[0];

    if(!mano){
        return;
    }

    /*
    =======================================
    PUNTOS DE REFERENCIA
    =======================================
    */

    const pulgar = mano[4];

    const indice = mano[8];
    const medio = mano[12];
    const anular = mano[16];
    const menique = mano[20];

    /*
    =======================================
    ARTICULACIONES
    =======================================
    */

    const indiceBase = mano[6];
    const medioBase = mano[10];
    const anularBase = mano[14];
    const meniqueBase = mano[18];

    /*
    =======================================
    MANO ABIERTA
    =======================================
    */

    const manoAbierta =
        indice.y < indiceBase.y &&
        medio.y < medioBase.y &&
        anular.y < anularBase.y &&
        menique.y < meniqueBase.y;

    /*
    =======================================
    PUÑO CERRADO
    =======================================
    */

    const punoCerrado =
        indice.y > indiceBase.y &&
        medio.y > medioBase.y &&
        anular.y > anularBase.y &&
        menique.y > meniqueBase.y;

    /*
    =======================================
    PULGAR ARRIBA
    =======================================
    */

    const pulgarArriba =
        pulgar.y < mano[3].y &&
        indice.y > indiceBase.y &&
        medio.y > medioBase.y;

    /*
    =======================================
    ACCIONES
    =======================================
    */

    if(manoAbierta){

        actualizarIndicadorManos(
            "✋ Mano abierta"
        );

        accionManoAbierta();

        return;
    }

    if(punoCerrado){

        actualizarIndicadorManos(
            "✊ Puño cerrado"
        );

        accionPunoCerrado();

        return;
    }

    if(pulgarArriba){

        actualizarIndicadorManos(
            "👍 Pulgar arriba"
        );

        accionPulgarArriba();

        return;
    }

    /*
    =======================================
    DETECCIÓN NORMAL
    =======================================
    */

    actualizarIndicadorManos(
        "✋ Mano detectada"
    );

}