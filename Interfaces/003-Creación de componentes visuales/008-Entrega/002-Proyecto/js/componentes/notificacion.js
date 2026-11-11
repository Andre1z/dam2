"use strict";

/**
 * ========================================
 * COMPONENTE NOTIFICACIÓN
 * ========================================
 *
 * Componente reutilizable para mostrar
 * mensajes informativos al usuario.
 *
 * Propiedades:
 * - mensaje
 * - tipo
 * - duracion
 *
 * Métodos:
 * - render()
 * - mostrar()
 *
 */

class Notificacion{

    constructor({
        mensaje = "Notificación",
        tipo = "info",
        duracion = 3000
    } = {}){

        this.mensaje = mensaje;
        this.tipo = tipo;
        this.duracion = duracion;

    }

    render(){

        const elemento =
        document.createElement(
            "div"
        );

        elemento.className =
        `notificacion ${this.tipo}`;

        elemento.textContent =
        this.mensaje;

        return elemento;

    }

    mostrar(
        contenedor
    ){

        if(!contenedor){
            return;
        }

        const elemento =
        this.render();

        contenedor.appendChild(
            elemento
        );

        setTimeout(
            () => {

                elemento.classList.add(
                    "mostrar"
                );

            },
            50
        );

        setTimeout(
            () => {

                elemento.classList.remove(
                    "mostrar"
                );

                setTimeout(
                    () => {

                        elemento.remove();

                    },
                    300
                );

            },
            this.duracion
        );

    }

    actualizarMensaje(
        mensaje
    ){

        this.mensaje =
        mensaje;

    }

    actualizarTipo(
        tipo
    ){

        this.tipo =
        tipo;

    }

}

/* ========================================
   EXPORTACIÓN GLOBAL
======================================== */

window.Notificacion =
Notificacion;