document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formProducto');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const nombre =
            document.getElementById('nombre')
            .value
            .trim();

        const precio =
            parseFloat(
                document.getElementById('precio').value
            );

        const stock =
            parseInt(
                document.getElementById('stock').value
            );

        if (nombre.length < 2) {

            alert(
                'El nombre debe tener al menos 2 caracteres.'
            );

            evento.preventDefault();
            return;
        }

        if (precio < 0) {

            alert(
                'El precio no puede ser negativo.'
            );

            evento.preventDefault();
            return;
        }

        if (stock < 0) {

            alert(
                'El stock no puede ser negativo.'
            );

            evento.preventDefault();
        }

    });

});