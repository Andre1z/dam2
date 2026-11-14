document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formUsuario');

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

        if (usuario.length < 3) {

            alert(
                'El usuario debe tener al menos 3 caracteres.'
            );

            evento.preventDefault();
            return;
        }

        if (password.length < 4) {

            alert(
                'La contraseña debe tener al menos 4 caracteres.'
            );

            evento.preventDefault();
        }

    });

});