function obtener(nombre) {

    return AndreiCRM.obtenerDatos(nombre);
}

/*
=====================================
COLECCIONES
=====================================
*/

const clientes =
    obtener("clientes");

const empresas =
    obtener("empresas");

const contactos =
    obtener("contactos");

const tareas =
    obtener("tareas");

const productos =
    obtener("productos");

const presupuestos =
    obtener("presupuestos");

/*
=====================================
TARJETAS SUPERIORES
=====================================
*/

document.querySelector(
    "#total-clientes"
).textContent = clientes.length;

document.querySelector(
    "#total-empresas"
).textContent = empresas.length;

document.querySelector(
    "#total-contactos"
).textContent = contactos.length;

document.querySelector(
    "#total-productos"
).textContent = productos.length;

document.querySelector(
    "#total-tareas"
).textContent = tareas.length;

document.querySelector(
    "#total-presupuestos"
).textContent = presupuestos.length;

/*
=====================================
ESTADÍSTICAS TAREAS
=====================================
*/

const pendientes =
    tareas.filter(
        t => t.estado === "Pendiente"
    ).length;

const progreso =
    tareas.filter(
        t => t.estado === "En progreso"
    ).length;

const completadas =
    tareas.filter(
        t => t.estado === "Completada"
    ).length;

const tablaTareas =
    contenedor.querySelector(
        "#tabla-tareas-resumen tbody"
    );

tablaTareas.innerHTML = `
<tr>
    <td>Pendientes</td>
    <td>${pendientes}</td>
</tr>

<tr>
    <td>En progreso</td>
    <td>${progreso}</td>
</tr>

<tr>
    <td>Completadas</td>
    <td>${completadas}</td>
</tr>
`;

/*
=====================================
ESTADÍSTICAS PRESUPUESTOS
=====================================
*/

const presupuestosPendientes =
    presupuestos.filter(
        p => p.estado === "Pendiente"
    ).length;

const presupuestosAceptados =
    presupuestos.filter(
        p => p.estado === "Aceptado"
    ).length;

const presupuestosRechazados =
    presupuestos.filter(
        p => p.estado === "Rechazado"
    ).length;

const tablaPresupuestos =
    contenedor.querySelector(
        "#tabla-presupuestos-resumen tbody"
    );

tablaPresupuestos.innerHTML = `
<tr>
    <td>Pendientes</td>
    <td>${presupuestosPendientes}</td>
</tr>

<tr>
    <td>Aceptados</td>
    <td>${presupuestosAceptados}</td>
</tr>

<tr>
    <td>Rechazados</td>
    <td>${presupuestosRechazados}</td>
</tr>
`;

/*
=====================================
RESUMEN GENERAL
=====================================
*/

const tablaResumen =
    contenedor.querySelector(
        "#tabla-resumen-general tbody"
    );

tablaResumen.innerHTML = `
<tr>
    <td>Clientes</td>
    <td>${clientes.length}</td>
</tr>

<tr>
    <td>Empresas</td>
    <td>${empresas.length}</td>
</tr>

<tr>
    <td>Contactos</td>
    <td>${contactos.length}</td>
</tr>

<tr>
    <td>Productos</td>
    <td>${productos.length}</td>
</tr>

<tr>
    <td>Tareas</td>
    <td>${tareas.length}</td>
</tr>

<tr>
    <td>Presupuestos</td>
    <td>${presupuestos.length}</td>
</tr>
`;