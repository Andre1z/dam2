"use strict";

/* ========================================
   PANEL DE CONTROL
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    inicializarPanelControl
);

function inicializarPanelControl(){

    configurarBotonModoClaro();
    configurarBotonModoOscuro();
    configurarBotonAR();

}

/* ========================================
   MODO CLARO
======================================== */

function configurarBotonModoClaro(){

    const boton =
    document.getElementById(
        "modo-claro"
    );

    if(!boton){
        return;
    }

    boton.addEventListener(
        "click",
        ()=>{

            activarModoClaro();

            if(
                typeof mostrarNotificacion ===
                "function"
            ){

                mostrarNotificacion(
                    "🌞 Modo claro activado",
                    "correcto"
                );

            }

        }
    );

}

/* ========================================
   MODO OSCURO
======================================== */

function configurarBotonModoOscuro(){

    const boton =
    document.getElementById(
        "modo-oscuro"
    );

    if(!boton){
        return;
    }

    boton.addEventListener(
        "click",
        ()=>{

            activarModoOscuro();

            if(
                typeof mostrarNotificacion ===
                "function"
            ){

                mostrarNotificacion(
                    "🌙 Modo oscuro activado",
                    "correcto"
                );

            }

        }
    );

}

/* ========================================
   REALIDAD AUMENTADA
======================================== */

function configurarBotonAR(){

    const boton =
    document.getElementById(
        "btn-ar"
    );

    if(!boton){
        return;
    }

    boton.addEventListener(
        "click",
        ()=>{

            if(
                typeof activarRealidadAumentada ===
                "function"
            ){

                activarRealidadAumentada();

            }

            if(
                typeof mostrarNotificacion ===
                "function"
            ){

                mostrarNotificacion(
                    "📱 Panel AR activado",
                    "info"
                );

            }

            registrarEvento(
                "📱 Panel de realidad aumentada activado"
            );

        }
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.inicializarPanelControl =
inicializarPanelControl;