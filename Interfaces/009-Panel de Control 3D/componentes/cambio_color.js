AFRAME.registerComponent('cambio-color', {

    schema: {
        colorInicial: {
            type: 'color',
            default: '#EF2D5E'
        }
    },

    init: function () {

        const colores = [
            '#EF2D5E',
            '#4CC3D9',
            '#FFC65D',
            '#7BC8A4',
            '#9B59B6',
            '#E74C3C'
        ];

        let indiceColor = 0;

        this.el.addEventListener('click', () => {

            indiceColor++;

            if (indiceColor >= colores.length) {
                indiceColor = 0;
            }

            this.el.setAttribute(
                'color',
                colores[indiceColor]
            );

            console.log(
                `Nuevo color: ${colores[indiceColor]}`
            );

        });

        this.el.addEventListener('mouseenter', () => {

            this.el.setAttribute(
                'scale',
                '1.2 1.2 1.2'
            );

        });

        this.el.addEventListener('mouseleave', () => {

            this.el.setAttribute(
                'scale',
                '1 1 1'
            );

        });

    }

});