document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formLogin');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const usuario =
            document.getElementById('usuario')
            .value
            .trim();

        const password =
            document.getElementById('password')
            .value
            .trim();

        if (
            usuario.length < 3 ||
            password.length < 3
        ) {

            alert(
                'Usuario y contraseña no válidos.'
            );

            evento.preventDefault();
        }

    });

});