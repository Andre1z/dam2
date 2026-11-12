AFRAME.registerComponent('panel-info', {

    schema: {
        visible: {
            type: 'boolean',
            default: true
        }
    },

    init: function () {

        const boton = this.el;

        const panel = document.querySelector(
            '#panel-informacion'
        );

        const texto = document.querySelector(
            '#texto-panel'
        );

        boton.addEventListener('click', () => {

            this.data.visible = !this.data.visible;

            panel.setAttribute(
                'visible',
                this.data.visible
            );

            texto.setAttribute(
                'visible',
                this.data.visible
            );

            if (this.data.visible) {

                boton.setAttribute(
                    'color',
                    '#4CC3D9'
                );

                console.log(
                    'Panel visible'
                );

            } else {

                boton.setAttribute(
                    'color',
                    '#666666'
                );

                console.log(
                    'Panel oculto'
                );

            }

        });

        boton.addEventListener('mouseenter', () => {

            boton.setAttribute(
                'scale',
                '1.1 1.1 1.1'
            );

        });

        boton.addEventListener('mouseleave', () => {

            boton.setAttribute(
                'scale',
                '1 1 1'
            );

        });

    }

});