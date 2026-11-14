const boton =
    contenedor.querySelector(
        "#borrar-datos"
    );

function borrarDatos() {

    const confirmar = confirm(
        "¿Seguro que deseas borrar todos los datos del CRM?"
    );

    if (!confirmar) {
        return;
    }

    localStorage.clear();

    alert(
        "Datos eliminados correctamente."
    );

    AndreiCRM.cargarVista(
        "inicio"
    );
}

boton.addEventListener(
    "click",
    borrarDatos
);

return () => {

    boton.removeEventListener(
        "click",
        borrarDatos
    );

};