"use strict";

/* ========================================
   VARIABLES
======================================== */

let reconocimiento = null;

// true mientras queramos seguir escuchando (controla el reinicio automático)
let vozDeseada = false;

// errores seguidos sin un resultado bueno entre medias
let fallosVozSeguidos = 0;

let temporizadorReinicioVoz = null;

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const iconoMicrofono =
document.getElementById(
    "icono-microfono"
);

/* Errores que no se arreglan reintentando */
const ERRORES_VOZ_FATALES = {

    "not-allowed":
    "Permiso de micrófono denegado. Permítelo en el candado de la barra de direcciones y recarga.",

    "service-not-allowed":
    "El navegador no permite el reconocimiento de voz (prueba con Chrome o Edge).",

    "audio-capture":
    "No se ha encontrado ningún micrófono.",

    "language-not-supported":
    "Idioma es-ES no soportado por el navegador."

};

/* ========================================
   INICIAR RECONOCIMIENTO
======================================== */

async function iniciarReconocimientoVoz(){

    if(!SpeechRecognition){

        marcarVozApagada(
            "No compatible",
            "❌ Reconocimiento de voz no compatible (usa Chrome o Edge)"
        );

        return;
    }

    // Opera (incl. GX) y Brave exponen la API pero no tienen
    // servicio de reconocimiento: se quedan parados sin error
    const navegadorSinVoz =
        /OPR\/|Opera/.test(navigator.userAgent) ||
        (navigator.brave !== undefined);

    if(navegadorSinVoz){

        marcarVozApagada(
            "Navegador no compatible",
            "❌ Opera/Brave no soportan el reconocimiento de voz. Abre la página en Chrome o Edge."
        );

        return;
    }

    if(!window.isSecureContext){

        marcarVozApagada(
            "Requiere http://localhost",
            "❌ El micrófono solo funciona en https o http://localhost (no abriendo el archivo directamente)"
        );

        return;
    }

    if(reconocimiento){
        return;
    }

    /* 1. Pedir permiso real del micrófono y comprobar que existe */

    actualizarIndicadorVoz(
        "Pidiendo permiso de micrófono..."
    );

    registrarEvento(
        "🎤 Solicitando micrófono (acepta el aviso del navegador)"
    );

    const microOk =
    await comprobarMicrofono();

    if(!microOk){
        return;
    }

    /* 2. Crear el reconocedor */

    reconocimiento =
    new SpeechRecognition();

    reconocimiento.lang = "es-ES";

    reconocimiento.continuous = true;

    reconocimiento.interimResults = true;

    reconocimiento.maxAlternatives = 1;

    configurarEventosVoz();

    vozDeseada = true;

    fallosVozSeguidos = 0;

    actualizarIndicadorVoz(
        "Iniciando reconocimiento..."
    );

    arrancarReconocimiento();

    vigilarArranqueVoz();

}

/* ========================================
   SI NO ARRANCA SOLO: PEDIR UN CLIC
   (Chrome a veces no deja usar el micro
   sin una interacción del usuario)
======================================== */

let vozArrancoAlgunaVez = false;

function vigilarArranqueVoz(){

    setTimeout(()=>{

        if(vozArrancoAlgunaVez || !vozDeseada){
            return;
        }

        actualizarIndicadorVoz(
            "👆 Haz clic en la página para activar el micrófono"
        );

        registrarEvento(
            "⚠️ El micrófono no arrancó solo: haz clic en cualquier parte de la página"
        );

        const alPulsar = ()=>{

            document.removeEventListener("click", alPulsar, true);

            if(vozArrancoAlgunaVez){
                return;
            }

            // Reiniciar desde cero dentro del gesto del usuario
            if(reconocimiento){
                try{ reconocimiento.abort(); }catch(e){}
            }

            arrancarReconocimiento();

        };

        document.addEventListener("click", alPulsar, true);

    }, 4000);

}

/* ========================================
   PERMISO / MICRÓFONO
======================================== */

async function comprobarMicrofono(){

    if(
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ){
        // Sin API: dejamos que SpeechRecognition pida el permiso
        return true;
    }

    try{

        const flujo =
        await navigator.mediaDevices.getUserMedia({
            audio:true
        });

        // Solo queríamos el permiso: liberamos el micro
        flujo.getTracks().forEach(
            (pista)=>pista.stop()
        );

        return true;

    }
    catch(error){

        console.error(error);

        let mensaje =
        "No se pudo acceder al micrófono";

        if(
            error.name === "NotAllowedError" ||
            error.name === "SecurityError"
        ){
            mensaje =
            ERRORES_VOZ_FATALES["not-allowed"];
        }
        else if(
            error.name === "NotFoundError" ||
            error.name === "OverconstrainedError"
        ){
            mensaje =
            ERRORES_VOZ_FATALES["audio-capture"];
        }
        else if(
            error.name === "NotReadableError"
        ){
            mensaje =
            "El micrófono está siendo usado por otra aplicación.";
        }

        marcarVozApagada(
            "Micrófono no disponible",
            "❌ " + mensaje
        );

        return false;

    }

}

function arrancarReconocimiento(){

    if(!reconocimiento || !vozDeseada){
        return;
    }

    try{

        reconocimiento.start();

    }
    catch(error){

        // InvalidStateError = ya estaba arrancado: no pasa nada
        if(error.name !== "InvalidStateError"){

            console.warn(error);

            registrarEvento(
                "⚠️ No se pudo iniciar la voz: " + error.message
            );

        }

    }

}

/* ========================================
   EVENTOS
======================================== */

function configurarEventosVoz(){

    reconocimiento.onstart = () => {

        vozArrancoAlgunaVez = true;

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

        // Solo avisamos la primera vez, no en cada reinicio
        if(fallosVozSeguidos === 0 && !reconocimiento._avisado){

            reconocimiento._avisado = true;

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

        }

    };

    reconocimiento.onresult = (evento) => {

        fallosVozSeguidos = 0;

        for(
            let i = evento.resultIndex;
            i < evento.results.length;
            i++
        ){

            const resultado =
            evento.results[i];

            const texto =
            resultado[0]
            .transcript
            .toLowerCase()
            .trim();

            if(!texto){
                continue;
            }

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

            // Los comandos solo con el resultado definitivo,
            // si no se ejecutarían varias veces por frase
            if(resultado.isFinal){

                registrarEvento(
                    `🗣️ ${texto}`
                );

                procesarComandoVoz(
                    texto
                );

            }

        }

    };

    reconocimiento.onerror = (evento) => {

        // Silencio o cancelación: normal, se reinicia en onend
        if(
            evento.error === "no-speech" ||
            evento.error === "aborted"
        ){
            return;
        }

        console.error(
            "Error de voz:",
            evento.error,
            evento.message
        );

        if(ERRORES_VOZ_FATALES[evento.error]){

            vozDeseada = false;

            marcarVozApagada(
                "Error de voz",
                "❌ " + ERRORES_VOZ_FATALES[evento.error]
            );

            return;
        }

        if(evento.error === "network"){

            fallosVozSeguidos++;

            if(fallosVozSeguidos >= 3){

                vozDeseada = false;

                marcarVozApagada(
                    "Sin servicio de voz",
                    "❌ El reconocimiento de voz necesita internet y un navegador compatible (Chrome o Edge; Brave/Opera no funcionan)"
                );

            }

            return;
        }

        fallosVozSeguidos++;

        registrarEvento(
            "⚠️ Error de voz: " + evento.error
        );

    };

    reconocimiento.onend = () => {

        sistema.vozActiva = false;

        if(!vozDeseada){
            return;
        }

        if(
            typeof actualizarVozAR ===
            "function"
        ){

            actualizarVozAR(
                "Reiniciando..."
            );

        }

        // Pequeña espera (creciente si hay fallos) para no
        // entrar en un bucle infinito de reinicios
        const espera =
        Math.min(
            300 + fallosVozSeguidos * 1000,
            5000
        );

        clearTimeout(temporizadorReinicioVoz);

        temporizadorReinicioVoz =
        setTimeout(
            arrancarReconocimiento,
            espera
        );

    };

}

/* ========================================
   ESTADO APAGADO
======================================== */

function marcarVozApagada(textoIndicador, mensaje){

    sistema.vozActiva = false;

    actualizarIndicadorVoz(
        textoIndicador
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
            textoIndicador
        );

    }

    if(
        typeof mostrarNotificacion ===
        "function"
    ){

        mostrarNotificacion(
            mensaje,
            "error"
        );

    }

    registrarEvento(
        mensaje
    );

    if(reconocimiento && !vozDeseada){

        reconocimiento = null;

    }

}

/* ========================================
   DETENER
======================================== */

function detenerReconocimientoVoz(){

    if(!reconocimiento){
        return;
    }

    vozDeseada = false;

    clearTimeout(temporizadorReinicioVoz);

    const actual = reconocimiento;

    reconocimiento = null;

    actual.stop();

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
