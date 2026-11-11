"use strict";

/* ========================================
   CONTROL ANTI REPETICIÓN
======================================== */

let ultimoGesto = "";
let ultimoTiempo = 0;

function gestoPermitido(nombre){

    const ahora = Date.now();

    if(
        nombre === ultimoGesto &&
        ahora - ultimoTiempo < 2500
    ){
        return false;
    }

    ultimoGesto = nombre;
    ultimoTiempo = ahora;

    return true;

}

/* ========================================
   MANO ABIERTA
   MODO CLARO
======================================== */

function accionManoAbierta(){

    if(
        !gestoPermitido(
            "mano-abierta"
        )
    ){
        return;
    }

    activarModoClaro();

    actualizarIndicadorManos(
        "✋ Mano abierta"
    );

    registrarEvento(
        "✋ Gesto detectado: modo claro"
    );

}

/* ========================================
   PUÑO CERRADO
   MODO OSCURO
======================================== */

function accionPunoCerrado(){

    if(
        !gestoPermitido(
            "puno-cerrado"
        )
    ){
        return;
    }

    activarModoOscuro();

    actualizarIndicadorManos(
        "✊ Puño cerrado"
    );

    registrarEvento(
        "✊ Gesto detectado: modo oscuro"
    );

}

/* ========================================
   PULGAR ARRIBA
   ACTIVAR AR
======================================== */

function accionPulgarArriba(){

    if(
        !gestoPermitido(
            "pulgar-arriba"
        )
    ){
        return;
    }

    actualizarIndicadorManos(
        "👍 Pulgar arriba"
    );

    registrarEvento(
        "👍 Activando realidad aumentada"
    );

    if(
        typeof activarRealidadAumentada ===
        "function"
    ){

        activarRealidadAumentada();

    }

}

/* ========================================
   EXPORTACIONES
======================================== */

window.accionManoAbierta =
accionManoAbierta;

window.accionPunoCerrado =
accionPunoCerrado;

window.accionPulgarArriba =
accionPulgarArriba;