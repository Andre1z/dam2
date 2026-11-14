document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formEditarCliente');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const nombre =
            document.getElementById('nombre')
            .value
            .trim();

        if (nombre.length < 2) {

            alert(
                'El nombre debe tener al menos 2 caracteres.'
            );

            evento.preventDefault();
        }

    });

});