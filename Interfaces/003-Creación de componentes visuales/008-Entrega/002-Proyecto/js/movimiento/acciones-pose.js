"use strict";

/* ========================================
   CONTROL ANTI REPETICIÓN
======================================== */

let ultimoMovimiento = "";
let tiempoMovimiento = 0;

function movimientoPermitido(nombre){

    const ahora = Date.now();

    if(
        nombre === ultimoMovimiento &&
        ahora - tiempoMovimiento < 3000
    ){
        return false;
    }

    ultimoMovimiento = nombre;
    tiempoMovimiento = ahora;

    return true;

}

/* ========================================
   BRAZOS ARRIBA
   MODO CLARO
======================================== */

function accionBrazosArriba(){

    if(
        !movimientoPermitido(
            "brazos-arriba"
        )
    ){
        return;
    }

    activarModoClaro();

    actualizarIndicadorPose(
        "🙌 Brazos arriba"
    );

    registrarEvento(
        "🙌 Movimiento detectado: modo claro"
    );

}

/* ========================================
   BRAZOS ABAJO
   MODO OSCURO
======================================== */

function accionBrazosAbajo(){

    if(
        !movimientoPermitido(
            "brazos-abajo"
        )
    ){
        return;
    }

    activarModoOscuro();

    actualizarIndicadorPose(
        "👇 Brazos abajo"
    );

    registrarEvento(
        "👇 Movimiento detectado: modo oscuro"
    );

}

/* ========================================
   INCLINACIÓN DERECHA
   ACTIVAR AR
======================================== */

function accionInclinadoDerecha(){

    if(
        !movimientoPermitido(
            "derecha"
        )
    ){
        return;
    }

    actualizarIndicadorPose(
        "➡️ Inclinación derecha"
    );

    registrarEvento(
        "➡️ Activando realidad aumentada"
    );

    if(
        typeof activarRealidadAumentada ===
        "function"
    ){
        activarRealidadAumentada();
    }

}

/* ========================================
   INCLINACIÓN IZQUIERDA
   MOSTRAR ESTADO
======================================== */

function accionInclinadoIzquierda(){

    if(
        !movimientoPermitido(
            "izquierda"
        )
    ){
        return;
    }

    const tema =
        sistema.modoOscuro
        ? "🌙 Oscuro"
        : "🌞 Claro";

    actualizarIndicadorPose(
        "⬅️ Inclinación izquierda"
    );

    registrarEvento(
        `ℹ️ Tema actual: ${tema}`
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.accionBrazosArriba =
accionBrazosArriba;

window.accionBrazosAbajo =
accionBrazosAbajo;

window.accionInclinadoDerecha =
accionInclinadoDerecha;

window.accionInclinadoIzquierda =
accionInclinadoIzquierda;