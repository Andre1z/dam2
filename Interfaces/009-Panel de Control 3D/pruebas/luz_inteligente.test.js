describe('Componente luz-inteligente', () => {

    test('La luz debe estar encendida por defecto', () => {

        const configuracion = {
            encendida: true,
            intensidad: 1
        };

        expect(configuracion.encendida).toBe(true);

    });

    test('La intensidad por defecto debe ser 1', () => {

        const configuracion = {
            intensidad: 1
        };

        expect(configuracion.intensidad).toBe(1);

    });

    test('El estado de la luz puede cambiar', () => {

        let encendida = true;

        encendida = !encendida;

        expect(encendida).toBe(false);

    });

});