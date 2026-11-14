document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById(
            'formEditarUsuario'
        );

    if (!formulario) {
        return;
    }

    formulario.addEventListener(
        'submit',
        (evento) => {

            const password =
                document.getElementById(
                    'password'
                ).value;

            if (
                password !== '' &&
                password.length < 4
            ) {

                alert(
                    'La contraseña debe tener al menos 4 caracteres.'
                );

                evento.preventDefault();
            }

        }
    );

});