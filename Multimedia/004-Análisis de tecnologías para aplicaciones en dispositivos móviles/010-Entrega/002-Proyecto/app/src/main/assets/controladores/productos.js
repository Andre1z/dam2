const formulario =
    contenedor.querySelector("#formulario-productos");

const tabla =
    contenedor.querySelector("#tabla-productos tbody");

const nombre =
    contenedor.querySelector("#nombre");

const categoria =
    contenedor.querySelector("#categoria");

const precio =
    contenedor.querySelector("#precio");

const stock =
    contenedor.querySelector("#stock");

/*
=====================================
OBTENER PRODUCTOS
=====================================
*/

function obtenerProductos() {

    return AndreiCRM.obtenerDatos(
        "productos"
    );
}

/*
=====================================
GUARDAR PRODUCTOS
=====================================
*/

function guardarProductos(productos) {

    AndreiCRM.guardarDatos(
        "productos",
        productos
    );
}

/*
=====================================
ELIMINAR PRODUCTO
=====================================
*/

function eliminarProducto(indice) {

    const productos =
        obtenerProductos();

    productos.splice(indice, 1);

    guardarProductos(productos);

    renderizarTabla();
}

/*
=====================================
RENDERIZAR TABLA
=====================================
*/

function renderizarTabla() {

    tabla.innerHTML = "";

    const productos =
        obtenerProductos();

    if (productos.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="6">
                    No hay productos registrados.
                </td>
            </tr>
        `;

        return;
    }

    productos.forEach((producto, indice) => {

        const fila =
            document.createElement("tr");

        fila.innerHTML = `
            <td>${indice + 1}</td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.precio} €</td>
            <td>${producto.stock}</td>
            <td>
                <button
                    type="button"
                    class="ui-boton secundario eliminar-producto"
                    data-id="${indice}"
                >
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });

    tabla
        .querySelectorAll(".eliminar-producto")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    eliminarProducto(
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
GUARDAR PRODUCTO
=====================================
*/

function guardarProducto(evento) {

    evento.preventDefault();

    const producto = {

        nombre:
            nombre.value.trim(),

        categoria:
            categoria.value.trim(),

        precio:
            precio.value.trim(),

        stock:
            stock.value.trim()

    };

    if (
        !producto.nombre ||
        !producto.categoria ||
        !producto.precio ||
        !producto.stock
    ) {

        alert(
            "Debes rellenar todos los campos."
        );

        return;
    }

    const productos =
        obtenerProductos();

    productos.push(producto);

    guardarProductos(
        productos
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
    guardarProducto
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
        guardarProducto
    );
};