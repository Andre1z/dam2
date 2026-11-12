"use strict";

/*
=========================================
CLAVES DE ALMACENAMIENTO
=========================================
*/

const CLAVES_STORAGE = {

    subtitulos: "subtitulos_generados",
    preferencias: "preferencias_usuario",
    posicion_video: "posicion_video",
    ultimo_video: "ultimo_video"

};

/*
=========================================
GUARDAR DATO
=========================================
*/

function guardar_dato(
    clave,
    valor
) {

    try {

        localStorage.setItem(
            clave,
            JSON.stringify(valor)
        );

        return true;

    } catch (error) {

        console.error(
            "Error al guardar datos:",
            error
        );

        return false;

    }

}

/*
=========================================
LEER DATO
=========================================
*/

function leer_dato(
    clave
) {

    try {

        const valor =
            localStorage.getItem(clave);

        if (!valor) {
            return null;
        }

        return JSON.parse(valor);

    } catch (error) {

        console.error(
            "Error al leer datos:",
            error
        );

        return null;

    }

}

/*
=========================================
ELIMINAR DATO
=========================================
*/

function eliminar_dato(
    clave
) {

    try {

        localStorage.removeItem(clave);

        return true;

    } catch (error) {

        console.error(
            "Error al eliminar dato:",
            error
        );

        return false;

    }

}

/*
=========================================
LIMPIAR TODO
=========================================
*/

function limpiar_datos() {

    try {

        Object.values(
            CLAVES_STORAGE
        ).forEach(clave => {

            localStorage.removeItem(
                clave
            );

        });

        return true;

    } catch (error) {

        console.error(
            "Error al limpiar almacenamiento:",
            error
        );

        return false;

    }

}

/*
=========================================
GUARDAR SUBTÍTULOS
=========================================
*/

function guardar_subtitulos(
    contenido
) {

    return guardar_dato(
        CLAVES_STORAGE.subtitulos,
        {
            contenido,
            fecha: new Date().toISOString()
        }
    );

}

/*
=========================================
OBTENER SUBTÍTULOS
=========================================
*/

function obtener_subtitulos() {

    return leer_dato(
        CLAVES_STORAGE.subtitulos
    );

}

/*
=========================================
GUARDAR PREFERENCIAS
=========================================
*/

function guardar_preferencias(
    preferencias
) {

    return guardar_dato(
        CLAVES_STORAGE.preferencias,
        preferencias
    );

}

/*
=========================================
OBTENER PREFERENCIAS
=========================================
*/

function obtener_preferencias() {

    return (
        leer_dato(
            CLAVES_STORAGE.preferencias
        ) || {}
    );

}

/*
=========================================
GUARDAR POSICIÓN DE VÍDEO
=========================================
*/

function guardar_posicion_video(
    segundos
) {

    return guardar_dato(
        CLAVES_STORAGE.posicion_video,
        segundos
    );

}

/*
=========================================
OBTENER POSICIÓN DE VÍDEO
=========================================
*/

function obtener_posicion_video() {

    return (
        leer_dato(
            CLAVES_STORAGE.posicion_video
        ) || 0
    );

}

/*
=========================================
GUARDAR INFORMACIÓN VÍDEO
=========================================
*/

function guardar_ultimo_video(
    informacion
) {

    return guardar_dato(
        CLAVES_STORAGE.ultimo_video,
        informacion
    );

}

/*
=========================================
OBTENER INFORMACIÓN VÍDEO
=========================================
*/

function obtener_ultimo_video() {

    return leer_dato(
        CLAVES_STORAGE.ultimo_video
    );

}

/*
=========================================
COMPROBAR DISPONIBILIDAD
=========================================
*/

function almacenamiento_disponible() {

    try {

        const prueba =
            "__prueba_storage__";

        localStorage.setItem(
            prueba,
            prueba
        );

        localStorage.removeItem(
            prueba
        );

        return true;

    } catch {

        return false;

    }

}

/*
=========================================
RESTAURAR SUBTÍTULOS
=========================================
*/

function restaurar_subtitulos() {

    const datos =
        obtener_subtitulos();

    if (!datos) {
        return;
    }

    const area_subtitulos =
        document.getElementById(
            "contenido_subtitulos"
        );

    if (!area_subtitulos) {
        return;
    }

    area_subtitulos.value =
        datos.contenido;
}

/*
=========================================
GUARDAR AUTOSAVE
=========================================
*/

function iniciar_autoguardado() {

    const area_subtitulos =
        document.getElementById(
            "contenido_subtitulos"
        );

    if (!area_subtitulos) {
        return;
    }

    area_subtitulos.addEventListener(
        "input",
        debounce(() => {

            guardar_subtitulos(
                area_subtitulos.value
            );

        }, 1000)
    );

}