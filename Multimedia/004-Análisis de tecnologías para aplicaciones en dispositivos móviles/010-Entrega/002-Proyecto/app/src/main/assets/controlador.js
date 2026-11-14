const contenedor = document.querySelector("#contenedor");

let vistaActual = "";
let controladorActual = null;
let navegando = false;

/*
=====================================
ACTUALIZAR MENÚ ACTIVO
=====================================
*/

function actualizarMenu(vista) {

    document
        .querySelectorAll(".navegacion-principal [data-url]")
        .forEach(boton => {

            const activo =
                boton.dataset.url === vista;

            boton.classList.toggle(
                "activo",
                activo
            );

        });
}

/*
=====================================
MOSTRAR ERROR
=====================================
*/

function mostrarError(mensaje) {

    contenedor.innerHTML = `
        <div class="card">
            <h2>Error</h2>
            <p>${mensaje}</p>
        </div>
    `;
}

/*
=====================================
CARGAR VISTA
=====================================
*/

async function cargarVista(nombreVista) {

    if (!nombreVista) {
        return;
    }

    if (navegando) {
        return;
    }

    if (vistaActual === nombreVista) {
        return;
    }

    navegando = true;

    try {

        const respuestaVista = await fetch(
            `vistas/${nombreVista}.html?t=${Date.now()}`,
            {
                cache: "no-store"
            }
        );

        if (!respuestaVista.ok) {
            throw new Error(
                `No se encontró la vista "${nombreVista}"`
            );
        }

        const html = await respuestaVista.text();

        const pantalla = document.createElement("div");

        pantalla.className = "pantalla fade-in";

        pantalla.innerHTML = html;

        await Componentes.renderizar(pantalla);

        /*
        =============================
        LIMPIEZA CONTROLADOR ANTERIOR
        =============================
        */

        if (
            controladorActual &&
            typeof controladorActual === "function"
        ) {

            try {

                controladorActual();

            } catch (error) {

                console.error(
                    "Error cerrando controlador:",
                    error
                );
            }
        }

        controladorActual = null;

        contenedor.replaceChildren(
            pantalla
        );

        /*
        =============================
        CARGAR CONTROLADOR JS
        =============================
        */

        try {

            const respuestaJS = await fetch(
                `controladores/${nombreVista}.js?t=${Date.now()}`,
                {
                    cache: "no-store"
                }
            );

            if (respuestaJS.ok) {

                const codigo =
                    await respuestaJS.text();

                const iniciar =
                    new Function(
                        "contenedor",
                        codigo
                    );

                const resultado =
                    iniciar(pantalla);

                if (
                    typeof resultado === "function"
                ) {
                    controladorActual =
                        resultado;
                }
            }

        } catch (error) {

            console.warn(
                `No existe controlador para ${nombreVista}`
            );

            console.error(error);
        }

        vistaActual = nombreVista;

        actualizarMenu(nombreVista);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (error) {

        console.error(error);

        mostrarError(
            error.message
        );
    }

    navegando = false;
}

/*
=====================================
NAVEGACIÓN MENÚ
=====================================
*/

document.addEventListener(
    "click",
    evento => {

        const boton =
            evento.target.closest(
                "[data-url]"
            );

        if (!boton) {
            return;
        }

        evento.preventDefault();

        const destino =
            boton.dataset.url;

        cargarVista(destino);
    }
);

/*
=====================================
CARGA INICIAL
=====================================
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cargarVista("inicio");
    }
);

/*
=====================================
API GLOBAL
=====================================
*/

window.AndreiCRM = {

    cargarVista,

    obtenerDatos(clave) {

        try {

            const datos = JSON.parse(
                localStorage.getItem(clave)
                || "[]"
            );

            return Array.isArray(datos)
                ? datos
                : [];

        } catch {

            return [];
        }
    },

    guardarDatos(clave, datos) {

        localStorage.setItem(
            clave,
            JSON.stringify(datos)
        );
    }

};