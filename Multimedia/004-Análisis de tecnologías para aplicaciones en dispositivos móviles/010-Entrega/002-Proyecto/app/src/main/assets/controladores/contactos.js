const formulario =
    contenedor.querySelector("#formulario-contactos");

const tabla =
    contenedor.querySelector("#tabla-contactos tbody");

const nombre =
    contenedor.querySelector("#nombre");

const apellidos =
    contenedor.querySelector("#apellidos");

const telefono =
    contenedor.querySelector("#telefono");

const email =
    contenedor.querySelector("#email");

/*
=====================================
OBTENER CONTACTOS
=====================================
*/

function obtenerContactos() {

    return AndreiCRM.obtenerDatos(
        "contactos"
    );
}

/*
=====================================
GUARDAR CONTACTOS
=====================================
*/

function guardarContactos(contactos) {

    AndreiCRM.guardarDatos(
        "contactos",
        contactos
    );
}

/*
=====================================
ELIMINAR CONTACTO
=====================================
*/

function eliminarContacto(indice) {

    const contactos =
        obtenerContactos();

    contactos.splice(indice, 1);

    guardarContactos(contactos);

    renderizarTabla();
}

/*
=====================================
RENDER TABLA
=====================================
*/

function renderizarTabla() {

 *  tabla.innerHTML = "";

    const*contactos =
        obtenerContact*s();

    if (contactos.length ===*0) {

        tabla.innerHTML = `
*           <tr>
                <t* colspan="6">
                    *o hay contactos registrados.
     *          </td>
            </tr>
*       `;

        return;
    }

*   contactos.forEach((contacto, in*ice) => {

        const fila =
  *         document.createElement("t*");

        fila.innerHTML = `
            <td>${indice + 1}</td>
            <td>${contacto.nombre}</td>
            <td>${contacto.apellidos}</td>
            <td>${contacto.telefono}</td>
            <td>${contacto.email}</td>
            <td>
                <button
                    type="button"
                    class="ui-boton secundario eliminar-contacto"
                    data-id="${indice}"
                >
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });

    tabla
        .querySelectorAll(".eliminar-contacto")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    eliminarContacto(
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
GUARDAR CONTACTO
=====================================
*/

function guardarContacto(evento) {

    evento.preventDefault();

    const contacto = {

        nombre:
            nombre.value.trim(),

        apellidos:
            apellidos.value.trim(),

        telefono:
            telefono.value.trim(),

        email:
            email.value.trim()

    };

    if (
        !contacto.nombre ||
        !contacto.apellidos ||
        !contacto.telefono ||
        !contacto.email
    ) {

        alert(
            "Debes completar todos los campos."
        );

        return;
    }

    const contactos =
        obtenerContactos();

    contactos.push(
        contacto
    );

    guardarContactos(
        contactos
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
    guardarContacto
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
        guardarContacto
    );
};