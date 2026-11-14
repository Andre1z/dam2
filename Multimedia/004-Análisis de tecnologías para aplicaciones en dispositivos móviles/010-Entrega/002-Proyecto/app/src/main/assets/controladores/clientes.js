const formulario =
    contenedor.querySelector("#formulario-clientes");

const tabla =
    contenedor.querySelector("#tabla-clientes tbody");

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
OBTENER CLIENTES
=====================================
*/

function obtenerClientes() {

    return AndreiCRM.obtenerDatos(
        "clientes"
    );
}

/*
=====================================
GUARDAR CLIENTES
=====================================
*/

function guardarClientes(clientes) {

    AndreiCRM.guardarDatos(
        "clientes",
        clientes
    );
}

/*
=====================================
ELIMINAR CLIENTE
=====================================
*/

function eliminarCliente(indice) {

    const clientes =
        obtenerClientes();

    clientes.splice(indice, 1);

    guardarClientes(clientes);

    renderizarTabla();
}

/*
=====================================
RENDERIZAR TABLA
=====================================
*/

function renderizarTabla() {

    tabla.innerHTML = "";

    const clientes =
        obtenerClientes();

    if (clientes.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="6">
                    No hay clientes registrados.
                </td>
            </tr>
        `;

        return;
    }

    clientes.forEach((cliente, indice) => {

        const fila =
            document.createElement("tr");

        fila.innerHTML = `
            <td>${indice + 1}</td>

            <td>${cliente.nombre}</td>

            <td>${cliente.apellidos}</td>

            <td>${cliente.telefono}</td>

            <td>${cliente.email}</td>

            <td>
                <button
                    type="button"
                    class="ui-boton secundario eliminar-cliente"
                    data-id="${indice}"
                >
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });

    tabla
        .querySelectorAll(".eliminar-cliente")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    const indice =
                        Number(
                            boton.dataset.id
                        );

                    eliminarCliente(
                        indice
                    );
                }
            );
        });
}

/*
=====================================
GUARDAR CLIENTE
=====================================
*/

function guardarCliente(evento) {

    evento.preventDefault();

    const nuevoCliente = {

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
        !nuevoCliente.nombre ||
        !nuevoCliente.apellidos ||
        !nuevoCliente.telefono ||
        !nuevoCliente.email
    ) {

        alert(
            "Debes rellenar todos los campos."
        );

        return;
    }

    const clientes =
        obtenerClientes();

    clientes.push(
        nuevoCliente
    );

    guardarClientes(
        clientes
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
    guardarCliente
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
        guardarCliente
    );
};