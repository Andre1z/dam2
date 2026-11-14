document.addEventListener('DOMContentLoaded', () => {

    const producto =
        document.getElementById('producto_id');

    const cantidad =
        document.getElementById('cantidad');

    const totalVista =
        document.getElementById('totalVista');

    function calcularTotal() {

        const opcion =
            producto.options[
                producto.selectedIndex
            ];

        const precio =
            parseFloat(
                opcion.dataset.precio || 0
            );

        const cantidadSeleccionada =
            parseInt(cantidad.value) || 0;

        const total =
            precio * cantidadSeleccionada;

        totalVista.textContent =
            total.toFixed(2) + ' €';
    }

    producto.addEventListener(
        'change',
        calcularTotal
    );

    cantidad.addEventListener(
        'input',
        calcularTotal
    );

});