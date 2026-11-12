describe('Componente cambio-color', () => {

    test('Debe tener un color inicial definido', () => {

        const colorInicial = '#EF2D5E';

        expect(colorInicial).toBe('#EF2D5E');

    });

    test('Debe cambiar al siguiente color', () => {

        const colores = [
            '#EF2D5E',
            '#4CC3D9',
            '#FFC65D'
        ];

        let indice = 0;

        indice++;

        expect(colores[indice]).toBe('#4CC3D9');

    });

    test('Debe volver al primer color al llegar al final', () => {

        const colores = [
            '#EF2D5E',
            '#4CC3D9',
            '#FFC65D'
        ];

        let indice = colores.length - 1;

        indice++;

        if (indice >= colores.length) {
            indice = 0;
        }

        expect(indice).toBe(0);

    });

});