"use strict";

/**
 * ========================================
 * COMPONENTE BOTÓN DE ACCIÓN
 * ========================================
 *
 * Representa un botón reutilizable
 * para la interfaz.
 *
 * Propiedades:
 * - texto
 * - icono
 * - identificador
 * - clase
 *
 * Métodos:
 * - render()
 * - asignarEvento()
 *
 */

class BotonAccion{

    constructor({
        texto = "Botón",
        icono = "⚙️",
        identificador = "",
        clase = ""
    } = {}){

        this.texto = texto;
        this.icono = icono;
        this.identificador = identificador;
        this.clase = clase;

    }

    render(){

        const boton =
        document.createElement(
            "button"
        );

        boton.id =
        this.identificador;

        boton.className =
        this.clase;

        boton.innerHTML =
        `${this.icono} ${this.texto}`;

        return boton;

    }

    asignarEvento(
        boton,
        evento,
        accion
    ){

        if(
            !boton ||
            !evento ||
            !accion
        ){
            return;
        }

        boton.addEventListener(
            evento,
            accion
        );

    }

    actualizarTexto(
        nuevoTexto
    ){

        this.texto =
        nuevoTexto;

    }

    obtenerTexto(){

        return this.texto;

    }

    obtenerIcono(){

        return this.icono;

    }

}

/* ========================================
   EXPORTACIÓN GLOBAL
======================================== */

window.BotonAccion =
BotonAccion;