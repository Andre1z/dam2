document.addEventListener('DOMContentLoaded', () => {

    console.log('ERP-CRM VentasPro iniciado');

    const tarjetas =
        document.querySelectorAll('.tarjeta');

    tarjetas.forEach((tarjeta) => {

        tarjeta.addEventListener('mouseenter', () => {

            tarjeta.style.transition =
                'all 0.3s ease';

        });

    });

    const fechaActual =
        new Date();

    console.log(
        'Fecha:',
        fechaActual.toLocaleString()
    );

});