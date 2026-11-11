"use strict";

/* ========================================
   DETECCIÓN DE MOVIMIENTOS
======================================== */

function detectarMovimientoCorporal(puntos){

    if(!puntos){
        return;
    }

    const hombroIzquierdo =
    puntos[11];

    const hombroDerecho =
    puntos[12];

    const munecaIzquierda =
    puntos[15];

    const munecaDerecha =
    puntos[16];

    if(
        !hombroIzquierdo ||
        !hombroDerecho ||
        !munecaIzquierda ||
        !munecaDerecha
    ){
        return;
    }

    /* ====================================
       BRAZOS ARRIBA
    ==================================== */

    const brazosArriba =
        munecaIzquierda.y < hombroIzquierdo.y &&
        munecaDerecha.y < hombroDerecho.y;

    if(brazosArriba){

        actualizarIndicadorPose(
            "🙌 Brazos arriba"
        );

        accionBrazosArriba();

        return;
    }

    /* ====================================
       BRAZOS ABAJO
    ==================================== */

    const brazosAbajo =
        munecaIzquierda.y > hombroIzquierdo.y &&
        munecaDerecha.y > hombroDerecho.y;

    if(brazosAbajo){

        actualizarIndicadorPose(
            "👇 Brazos abajo"
        );

        accionBrazosAbajo();

    }

    /* ====================================
       INCLINACIÓN DERECHA
    ==================================== */

    const inclinacion =
        hombroIzquierdo.y -
        hombroDerecho.y;

    if(inclinacion > 0.08){

        actualizarIndicadorPose(
            "➡️ Inclinación derecha"
        );

        accionInclinadoDerecha();

        return;
    }

    /* ====================================
       INCLINACIÓN IZQUIERDA
    ==================================== */

    if(inclinacion < -0.08){

        actualizarIndicadorPose(
            "⬅️ Inclinación izquierda"
        );

        accionInclinadoIzquierda();

        return;
    }

    /* ====================================
       POSICIÓN NEUTRA
    ==================================== */

    actualizarIndicadorPose(
        "🧍 Cuerpo detectado"
    );

}