"use strict";

/* ========================================
   VARIABLES
======================================== */

let reconocimiento = null;

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const iconoMicrofono =
document.getElementById(
    "icono-microfono"
);

/* ========================================
   INICIAR RECONOCIMIENTO
======================================== */

function iniciarReconocimientoVoz(){

    if(!SpeechRecognition){

        registrarEvento(
            "❌ Reconocimiento de voz no compatible"
        );

        actualizarIndicadorVoz(
            "No compatible"
        );

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_off.svg";

        }

        return;
    }

    if(reconocimiento){
        return;
    }

    reconocimiento =
    new SpeechRecognition();

    reconocimiento.lang = "es-ES";

    reconocimiento.continuous = true;

    reconocimiento.interimResults = true;

    reconocimiento.maxAlternatives = 1;

    configurarEventosVoz();

    try{

        reconocimiento.start();

    }
    catch(error){

        console.warn(error);

    }

}

/* ========================================
   EVENTOS
======================================== */

function configurarEventosVoz(){

    reconocimiento.onstart = () => {

        sistema.vozActiva = true;

        actualizarIndicadorVoz(
            "🎤 Escuchando..."
        );

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_on.svg";

        }

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                "🎤 Escuchando"
            );

        }

        if(
            typeof mostrarNotificacion ===
            "function"
        ){

            mostrarNotificacion(
                "🎤 Micrófono activado",
                "correcto"
            );

        }

        registrarEvento(
            "🎤 Reconocimiento de voz iniciado"
        );

    };

    reconocimiento.onresult = (evento) => {

        const resultado =
        evento.results[
            evento.results.length - 1
        ];

        const texto =
        resultado[0]
        .transcript
        .toLowerCase()
        .trim();

        actualizarIndicadorVoz(
            texto
        );

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                texto
            );

        }

        registrarEvento(
            `🗣️ ${texto}`
        );

        procesarComandoVoz(
            texto
        );

    };

    reconocimiento.onerror = (evento) => {

        console.error(evento);

        sistema.vozActiva = false;

        actualizarIndicadorVoz(
            "Error de voz"
        );

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_off.svg";

        }

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                "Error"
            );

        }

        if(
            typeof mostrarNotificacion ===
            "function"
        ){

            mostrarNotificacion(
                "⚠️ Error en reconocimiento de voz",
                "error"
            );

        }

        registrarEvento(
            "⚠️ Error en reconocimiento de voz"
        );

    };

    reconocimiento.onend = () => {

        sistema.vozActiva = false;

        if(iconoMicrofono){

            iconoMicrofono.src =
            "recursos/iconos/mic_off.svg";

        }

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                "Reiniciando..."
            );

        }

        registrarEvento(
            "🔄 Reiniciando reconocimiento"
        );

        try{

            reconocimiento.start();

        }
        catch(error){

            console.warn(error);

        }

    };

}

/* ========================================
   DETENER
======================================== */

function detenerReconocimientoVoz(){

    if(!reconocimiento){
        return;
    }

    reconocimiento.stop();

    reconocimiento = null;

    sistema.vozActiva = false;

    actualizarIndicadorVoz(
        "Detenido"
    );

    if(iconoMicrofono){

        iconoMicrofono.src =
        "recursos/iconos/mic_off.svg";

    }

    if(
        typeof actualizarVozAR ===
        "function"
    ){

        actualizarVozAR(
            "Detenido"
        );

    }

    registrarEvento(
        "🎤 Reconocimiento detenido"
    );

}

/* ========================================
   EXPORTACIONES
======================================== */

window.iniciarReconocimientoVoz =
iniciarReconocimientoVoz;

window.detenerReconocimientoVoz =
detenerReconocimientoVoz;