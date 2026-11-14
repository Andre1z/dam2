const tarjetas =
    contenedor.querySelectorAll(
        ".acceso-modulo"
    );

function abrirModulo(evento) {

    const destino =
        evento.currentTarget.dataset.url;

    AndreiCRM.cargarVista(
        destino
    );
}

tarjetas.forEach(tarjeta => {

    tarjeta.style.cursor =
        "pointer";

    tarjeta.addEventListener(
        "click",
        abrirModulo
    );

});

return () => {

    tarjetas.forEach(tarjeta => {

        tarjeta.removeEventListener(
            "click",
            abrirModulo
        );

    });

};