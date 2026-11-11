"use strict";

/* ========================================
   COMANDOS DE VOZ
======================================== */

function procesarComandoVoz(texto){

    if(!texto){
        return;
    }

    console.log(
        "Comando recibido:",
        texto
    );

    actualizarIndicadorVoz(
        texto
    );

    if(
        typeof actualizarVozAR ===
        "function"
    ){
        actualizarVozAR(texto);
    }

    /* ====================================
       MODO CLARO
    ==================================== */

    if(
        texto.includes("modo claro") ||
        texto.includes("tema claro") ||
        texto.includes("activar modo claro") ||
        texto.includes("activar tema claro")
    ){

        activarModoClaro();

        registrarEvento(
            "🎤 Comando detectado: modo claro"
        );

        return;
    }

    /* ====================================
       MODO OSCURO
    ==================================== */

    if(
        texto.includes("modo oscuro") ||
        texto.includes("tema oscuro") ||
        texto.includes("activar modo oscuro") ||
        texto.includes("activar tema oscuro")
    ){

        activarModoOscuro();

        registrarEvento(
            "🎤 Comando detectado: modo oscuro"
        );

        return;
    }

    /* ====================================
       REALIDAD AUMENTADA
    ==================================== */

    if(
        texto.includes("realidad aumentada") ||
        texto.includes("activar realidad aumentada") ||
        texto.includes("abrir realidad aumentada")
    ){

        if(
            typeof activarRealidadAumentada ===
            "function"
        ){

            activarRealidadAumentada();

            registrarEvento(
                "🎤 Realidad aumentada activada"
            );

        }

        return;
    }

    /* ====================================
       ESTADO DEL SISTEMA
    ==================================== */

    if(
        texto.includes("estado") ||
        texto.includes("estado del sistema")
    ){

        informarEstadoSistema();

        return;
    }

    /* ====================================
       AYUDA
    ==================================== */

    if(
        texto.includes("ayuda") ||
        texto.includes("comandos") ||
        texto.includes("qué puedes hacer") ||
        texto.includes("que puedes hacer")
    ){

        mostrarAyuda();

        return;
    }

}

/* ========================================
   INFORMACIÓN DEL SISTEMA
======================================== */

function informarEstadoSistema(){

    const tema =
    sistema.modoOscuro
        ? "Oscuro"
        : "Claro";

    const mensaje =
        `Tema actual: ${tema}`;

    actualizarIndicadorVoz(
        mensaje
    );

    registrarEvento(
        "ℹ️ " + mensaje
    );

}

/* ========================================
   AYUDA
======================================== */

function mostrarAyuda(){

    const mensaje =
        `
        Comandos disponibles:
        modo claro,
        modo oscuro,
        realidad aumentada,
        estado del sistema
        `;

    actualizarIndicadorVoz(
        mensaje
    );

    registrarEvento(
        "📖 Ayuda de voz mostrada"
    );

}

/* ========================================
   BOTÓN DE VOZ
======================================== */

const botonVoz =
document.getElementById(
    "btn-voz"
);

if(botonVoz){

    botonVoz.addEventListener(
        "click",
        () => {

            if(
                typeof iniciarReconocimientoVoz ===
                "function"
            ){

                iniciarReconocimientoVoz();

                registrarEvento(
                    "🎤 Reconocimiento de voz activado"
                );

            }

        }
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.procesarComandoVoz =
procesarComandoVoz;

window.informarEstadoSistema =
informarEstadoSistema;

window.mostrarAyuda =
mostrarAyuda;