"use strict";

/**
 * ========================================
 * COMPONENTE TARJETA DE ESTADO
 * ========================================
 *
 * Componente reutilizable para mostrar
 * información de estado dentro de la
 * aplicación.
 *
 * Propiedades:
 * - titulo
 * - valor
 * - color
 *
 * Métodos:
 * - render()
 * - actualizar()
 *
 */

class TarjetaEstado{

    constructor({
        titulo = "Estado",
        valor = "Sin información",
        color = "#1d4ed8"
    } = {}){

        this.titulo = titulo;
        this.valor = valor;
        this.color = color;

    }

    render(){

        const tarjeta =
        document.createElement("div");

        tarjeta.className =
        "tarjeta";

        tarjeta.innerHTML = `

            <h3
                style="
                    color:${this.color};
                "
            >

                ${this.titulo}

            </h3>

            <p>

                ${this.valor}

            </p>

        `;

        return tarjeta;

    }

    actualizar(nuevoValor){

        this.valor =
        nuevoValor;

    }

    obtenerValor(){

        return this.valor;

    }

    obtenerTitulo(){

        return this.titulo;

    }

}

/* ========================================
   EXPORTACIÓN GLOBAL
======================================== */

window.TarjetaEstado =
TarjetaEstado;