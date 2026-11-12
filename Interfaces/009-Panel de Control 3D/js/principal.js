document.addEventListener('DOMContentLoaded', () => {

    console.clear();

    console.log('=================================');
    console.log(' PANEL DE CONTROL 3D');
    console.log('=================================');

    const escena = document.querySelector('a-scene');
    const luz = document.querySelector('#luz-principal');
    const esfera = document.querySelector('#esfera-color');
    const panel = document.querySelector('#panel-informacion');

    escena.addEventListener('loaded', () => {

        console.log('Escena cargada correctamente');
        console.log('Luz encontrada:', !!luz);
        console.log('Esfera encontrada:', !!esfera);
        console.log('Panel encontrado:', !!panel);

    });

});