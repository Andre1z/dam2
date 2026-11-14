const formulario =
    contenedor.querySelector(
        "#formulario-presupuestos"
    );

const tabla =
    contenedor.querySelector(
        "#tabla-presupuestos tbody"
    );

const cliente =
    contenedor.querySelector(
        "#cliente"
    );

const concepto =
    contenedor.querySelector(
        "#concepto"
    );

const importe =
    contenedor.querySelector(
        "#importe"
    );

const estado =
    contenedor.querySelector(
        "#estado"
    );

/*
=====================================
OBTENER PRESUPUESTOS
=====================================
*/

function obtenerPresupuestos() {

    return AndreiCRM.obtenerDatos(
        "presupuestos"
    );
}

/*
=====================================
GUARDAR PRESUPUESTOS
=====================================
*/

function guardarPresupuestos(
    presupuestos
) {

    AndreiCRM.guardarDatos(
        "presupuestos",
        presupuestos
    );
}

/*
=====================================
ELIMINAR PRESUPUESTO
=====================================
*/

function eliminarPresupuesto(
    indice
) {

    const presupuestos =
        obtenerPresupuestos();

    presupuestos.splice(
        indice,
        1
    );

    guardarPresupuestos(
        presupuestos
    );

    renderizarTabla();
}

/*
=====================================
RENDER
=====================================
*/

function renderizarTabla() {

    tabla.innerHTML = "";

    const presupuestos =
        obtenerPresupuestos();

    if (
        presupuestos.length === 0
    ) {

        tabla.innerHTML = `
            <tr>
                <td colspan="6">
                    No hay presupuestos registrados.
                </td>
            </tr>
        `;

        return;
    }

    presupuestos.forEach(
        (
            presupuesto,
            indice
        ) => {

            const fila =
                document.createElement(
                    "tr"
                );

            fila.innerHTML = `
                <td>${indice + 1}</td>
                <td>${presupuesto.cliente}</td>
                <td>${presupuesto.concepto}</td>
                <td>${presupuesto.importe} €</td>
                <td>${presupuesto.estado}</td>
                <td>
                    <button
                        type="button"
                        class="ui-boton secundario eliminar-presupuesto"
                        data-id="${indice}"
                    >
                        Eliminar
                    </button>
                </td>
            `;

            tabla.appendChild(
                fila
            );
        }
    );

    tabla
        .querySelectorAll(
            ".eliminar-presupuesto"
        )
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        eliminarPresupuesto(
                            Number(
                                boton.dataset.id
                            )
                        );
                    }
                );
            }
        );
}

/*
=====================================
GUARDAR
=====================================
*/

function guardarPresupuesto(
    evento
) {

    evento.preventDefault();

    const presupuesto = {

        cliente:
            cliente.value.trim(),

        concepto:
            concepto.value.trim(),

        importe:
            importe.value.trim(),

        estado:
            estado.value

    };

    if (
        !presupuesto.cliente ||
        !presupuesto.concepto ||
        !presupuesto.importe
    ) {

        alert(
            "Debes rellenar todos los campos."
        );

        return;
    }

    const presupuestos =
        obtenerPresupuestos();

    presupuestos.push(
        presupuesto
    );

    guardarPresupuestos(
        presupuestos
    );

    formulario.reset();

    renderizarTabla();
}

formulario.addEventListener(
    "submit",
    guardarPresupuesto
);

renderizarTabla();

/*
=====================================
LIMPIEZA
=====================================
*/

return () => {

    formulario.removeEventListener(
        "submit",
        guardarPresupuesto
    );
};