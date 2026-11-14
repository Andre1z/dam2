function obtenerColeccion(nombre){

    try{

        const datos = JSON.parse(
            localStorage.getItem(nombre) || "[]"
        );

        if(Array.isArray(datos)){
            return datos;
        }

        return [];

    }catch{

        return [];
    }
}

document.querySelector("#total-clientes").textContent =
    obtenerColeccion("clientes").length;

document.querySelector("#total-empresas").textContent =
    obtenerColeccion("empresas").length;

document.querySelector("#total-tareas").textContent =
    obtenerColeccion("tareas").length;

document.querySelector("#total-productos").textContent =
    obtenerColeccion("productos").length;