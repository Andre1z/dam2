"use strict";

let realidadAumentadaActiva = false;

function activarRealidadAumentada(){

    const visor =
    document.querySelector(
        ".visor-ar"
    );

    if(!visor){
        return;
    }

    realidadAumentadaActiva = true;

    visor.innerHTML = `
        <div class="panel-ar">
            <div class="indicador-ar">
                📱 Realidad aumentada activa
            </div>

            <div id="escena-ar">

            </div>
        </div>
    `;

    crearEscenaAR();

    registrarEvento(
        "📱 Realidad aumentada activada"
    );

}

window.activarRealidadAumentada =
activarRealidadAumentada;