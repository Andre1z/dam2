document.addEventListener('DOMContentLoaded', () => {

    const enlacesEliminar =
        document.querySelectorAll('.eliminar');

    enlacesEliminar.forEach((enlace) => {

        enlace.addEventListener(
            'click',
            (evento) => {

                if (
                    !confirm(
                        '¿Eliminar usuario?'
                    )
                ) {

                    evento.preventDefault();
                }

            }
        );

    });

});