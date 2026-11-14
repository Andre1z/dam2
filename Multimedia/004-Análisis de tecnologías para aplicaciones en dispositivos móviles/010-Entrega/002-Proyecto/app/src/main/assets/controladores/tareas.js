const formulario =
    contenedor.querySelector("#formulario-tareas");

const tabla =
    contenedor.querySelector("#tabla-tareas tbody");

const titulo =
    contenedor.querySelector("#titulo");

const descripcion =
    contenedor.querySelector("#descripcion");

const fecha =
    contenedor.querySelector("#fecha");

const prioridad =
    contenedor.querySelector("#prioridad");

const estado =
    contenedor.querySelector("#estado");

/*
=====================================
OBTENER TAREAS
=====================================
*/

function obtenerTareas() {

    return AndreiCRM.obtenerDatos(
        "tareas"
    );
}

/*
=====================================
GUARDAR TAREAS
=====================================
*/

function guardarTareas(tareas) {

    AndreiCRM.guardarDatos(
        "tareas",
        tareas
    );
}

/*
=====================================
ELIMINAR TAREA
=====================================
*/

function eliminarTarea(indice) {

    const tareas =
        obtenerTareas();

    tareas.splice(indice, 1);

    guardarTareas(tareas);

    renderizarTabla();
}

/*
=====================================
RENDER TABLA
=====================================
*/

function renderizarTabla() {

    tabla.innerHTML = "";

    const tareas =
        obtenerTareas();

    if (tareas.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="6">
                    No hay tareas registradas.
                </td>
            </tr>
        `;

        return;
    }

    tareas.forEach((tarea, indice) => {

        const fila =
            document.createElement("tr");

        fila.innerHTML = `
            <td>${indice + 1}</td>
            <td>${tarea.titulo}</td>
            <td>${tarea.fecha}</td>
            <td>${tarea.prioridad}</td>
            <td>${tarea.estado}</td>
            <td>
                <button
                    type="button"
                    class="ui-boton secundario eliminar-tarea"
                    data-id="${indice}"
                >
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });

    tabla
        .querySelectorAll(".eliminar-tarea")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    eliminarTarea(
                        Number(
                            boton.dataset.id
                        )
                    );
                }
            );
        });
}

/*
=====================================
GUARDAR TAREA
=====================================
*/

function guardarTarea(evento) {

    evento.preventDefault();

    const tarea = {

        titulo:
            titulo.value.trim(),

        descripcion:
            descripcion.value.trim(),

        fecha:
            fecha.value,

        prioridad:
            prioridad.value,

        estado:
            estado.value

    };

    if (
        !tarea.titulo ||
        !tarea.fecha
    ) {

        alert(
            "Debes completar los campos obligatorios."
        );

        return;
    }

    const tareas =
        obtenerTareas();

    tareas.push(
        tarea
    );

    guardarTareas(
        tareas
    );

    formulario.reset();

    renderizarTabla();
}

/*
=====================================
EVENTOS
=====================================
*/

formulario.addEventListener(
    "submit",
    guardarTarea
);

/*
=====================================
INICIO
=====================================
*/

renderizarTabla();

/*
=====================================
LIMPIEZA
=====================================
*/

return () => {

    formulario.removeEventListener(
        "submit",
        guardarTarea
    );
};