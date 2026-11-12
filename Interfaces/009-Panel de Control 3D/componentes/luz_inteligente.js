AFRAME.registerComponent('luz-inteligente', {

    schema: {
        encendida: {
            type: 'boolean',
            default: true
        },
        intensidad: {
            type: 'number',
            default: 1
        }
    },

    init: function () {

        const boton = this.el;
        const luz = document.querySelector('#luz-principal');

        boton.addEventListener('click', () => {

            this.data.encendida = !this.data.encendida;

            if (this.data.encendida) {

                luz.setAttribute(
                    'light',
                    'type: point; color: #ffffff; intensity: 1'
                );

                boton.setAttribute('color', '#FFD700');

                console.log('Luz encendida');

            } else {

                luz.setAttribute(
                    'light',
                    'type: point; color: #ffffff; intensity: 0'
                );

                boton.setAttribute('color', '#666666');

                console.log('Luz apagada');
            }

        });

    }

});