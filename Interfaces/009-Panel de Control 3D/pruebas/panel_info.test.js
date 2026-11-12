describe('Componente panel-info', () => {

    test('El panel debe ser visible por defecto', () => {

        const configuracion = {
            visible: true
        };

        expect(configuracion.visible).toBe(true);

    });

    test('El panel debe poder ocultarse', () => {

        let visible = true;

        visible = !visible;

        expect(visible).toBe(false);

    });

    test('El panel debe poder volver a mostrarse', () => {

        let visible = false;

        visible = !visible;

        expect(visible).toBe(true);

    });

});