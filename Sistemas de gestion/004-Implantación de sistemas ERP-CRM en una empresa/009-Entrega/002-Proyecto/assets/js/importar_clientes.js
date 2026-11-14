document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById(
            'formImportacion'
        );

    if (!formulario) {
        return;
    }

    formulario.addEventListener(
        'submit',
        (evento) => {

            const archivo =
                document.getElementById(
                    'archivo_csv'
                );

            if (
                !archivo.files.length
            ) {

                alert(
                    'Seleccione un archivo CSV.'
                );

                evento.preventDefault();
            }

        }
    );

});