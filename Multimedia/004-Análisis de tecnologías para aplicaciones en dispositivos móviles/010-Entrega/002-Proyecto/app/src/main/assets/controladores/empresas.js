const formulario =
    contenedor.querySelector("#formulario-empresas");

const tabla =
    contenedor.querySelector("#tabla-empresas tbody");

const nombre =
    contenedor.querySelector("#nombre");

const cif =
    contenedor.querySelector("#cif");

const telefono =
    contenedor.querySelector("#telefono");

const email =
    contenedor.querySelector("#email");

const ciudad =
    contenedor.querySelector("#ciudad");

function obtenerEmpresas() {

    return AndreiCRM.obtenerDatos(
        "empresas"
    );
}

function guardarEmpresas(empresas) {

    AndreiCRM.guardarDatos(
        "empresas",
        empresas
    );
}

function eliminarEmpresa(indice) {

    const empresas =
        obtenerEmpresas();

    empresas.splice(indice, 1);

    guardarEmpresas(empresas);

    renderizarTabla();
}

function renderizarTabla() {

    tabla.innerHTML = "";

    const empresas =
        obtenerEmpresas();

    if (empresas.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="7">
                    No hay empresas registradas.
                </td>
            </tr>
        `;

        return;
    }

    empresas.forEach((empresa, indice) => {

        const fila =
            document.createElement("tr");

        fila.innerHTML = `
            <td>${indice + 1}</td>
            <td>${empresa.nombre}</td>
            <td>${empresa.cif}</td>
            <td>${empresa.telefono}</td>
            <td>${empresa.email}</td>
            <td>${empresa.ciudad}</td>
            <td>
                <button
                    type="button"
                    class="ui-boton secundario eliminar-empresa"
                    data-id="${indice}"
                >
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });

    tabla
        .querySelectorAll(".eliminar-empresa")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    eliminarEmpresa(
                        Number(
                            boton.dataset.id
                        )
                    );
                }
            );
        });
}

function guardarEmpresa(evento) {

    evento.preventDefault();

    const empresa = {

        nombre:
            nombre.value.trim(),

        cif:
            cif.value.trim(),

        telefono:
            telefono.value.trim(),

        email:
            email.value.trim(),

        ciudad:
            ciudad.value.trim()

    };

    if (
        !empresa.nombre ||
        !empresa.cif ||
        !empresa.telefono ||
        !empresa.email ||
        !empresa.ciudad
    ) {

        alert(
            "Debes rellenar todos los campos."
        );

        return;
    }

    const empresas =
        obtenerEmpresas();

    empresas.push(
        empresa
    );

    guardarEmpresas(
        empresas
    );

    formulario.reset();

    renderizarTabla();
}

formulario.addEventListener(
    "submit",
    guardarEmpresa
);

renderizarTabla();

return () => {

    formulario.removeEventListener(
        "submit",
        guardarEmpresa
    );
};