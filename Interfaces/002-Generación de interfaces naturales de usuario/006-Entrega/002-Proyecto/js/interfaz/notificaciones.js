"use strict";

/* ========================================
   CONTENEDOR
======================================== */

let contenedorNotificaciones = null;

/* ========================================
   INICIALIZACIÓN
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarNotificaciones
);

function iniciarNotificaciones(){

    contenedorNotificaciones =
    document.createElement("div");

    contenedorNotificaciones.id =
    "contenedor-notificaciones";

    document.body.appendChild(
        contenedorNotificaciones
    );

}

/* ========================================
   MOSTRAR NOTIFICACIÓN
======================================== */

function mostrarNotificacion(
    mensaje,
    tipo = "info"
){

    if(!contenedorNotificaciones){
        return;
    }

    const notificacion =
    document.createElement("div");

    notificacion.className =
    `notificacion ${tipo}`;

    notificacion.textContent =
    mensaje;

    contenedorNotificaciones.appendChild(
        notificacion
    );

    setTimeout(
        () => {

            notificacion.classList.add(
                "mostrar"
            );

        },
        50
    );

    setTimeout(
        () => {

            notificacion.classList.remove(
                "mostrar"
            );

            setTimeout(
                () => {

                    notificacion.remove();

                },
                300
            );

        },
        3000
    );

}

/* ========================================
   EXPORTACIÓN
======================================== */

window.mostrarNotificacion =
mostrarNotificacion;