document.addEventListener('DOMContentLoaded', () => {

    const enlacesEliminar =
        document.querySelectorAll('.eliminar');

    enlacesEliminar.forEach(enlace => {

        enlace.addEventListener('click', (evento) => {

            const confirmar = confirm(
                '¿Seguro que deseas eliminar este cliente?'
            );

            if (!confirmar) {

                evento.preventDefault();

            }

        });

    });

});