"use strict";

function crearEscenaAR(){

    const escena =
    document.getElementById(
        "escena-ar"
    );

    if(!escena){
        return;
    }

    escena.innerHTML = `

        <div class="panel-domotica">

            <div class="casa-icono">
                🖥️
            </div>

            <div class="estado-item">

                <span>🎨 Tema</span>

                <span
                    id="estado-tema-ar"
                    class="estado-valor">

                    🌞 Claro

                </span>

            </div>

            <div class="estado-item">

                <span>🎤 Voz</span>

                <span
                    id="estado-voz-ar"
                    class="estado-valor">

                    Escuchando

                </span>

            </div>

            <div class="estado-item">

                <span>✋ Manos</span>

                <span
                    id="estado-manos-ar"
                    class="estado-valor">

                    Esperando

                </span>

            </div>

            <div class="estado-item">

                <span>👤 Pose</span>

                <span
                    id="estado-pose-ar"
                    class="estado-valor">

                    Esperando

                </span>

            </div>

            <div class="estado-item">

                <span>📱 AR</span>

                <span
                    id="estado-ar"
                    class="estado-valor">

                    Activa

                </span>

            </div>

        </div>

    `;

}