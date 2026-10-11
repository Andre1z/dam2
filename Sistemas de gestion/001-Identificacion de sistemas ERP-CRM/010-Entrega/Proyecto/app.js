/* ============================
   Navegación entre secciones
============================ */

const content = document.getElementById("content");
const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.dataset.section;
        if (section) showSection(section);
    });
});

function showSection(id) {
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}


/* ============================
   CLIENTES (CRUD + LocalStorage)
============================ */

const formClientes = document.getElementById("form-clientes");
const listaClientes = document.getElementById("lista-clientes");

function cargarClientes() {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    listaClientes.innerHTML = "";

    clientes.forEach((c, index) => {
        const li = document.createElement("li");
        li.textContent = `${c.nombre} - ${c.email} - ${c.telefono}`;
        li.addEventListener("click", () => eliminarCliente(index));
        listaClientes.appendChild(li);
    });
}

function guardarCliente(nombre, email, telefono) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.push({ nombre, email, telefono });
    localStorage.setItem("clientes", JSON.stringify(clientes));
    cargarClientes();
}

function eliminarCliente(index) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.splice(index, 1);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    cargarClientes();
}

formClientes.addEventListener("submit", e => {
    e.preventDefault();
    guardarCliente(
        document.getElementById("cliente-nombre").value,
        document.getElementById("cliente-email").value,
        document.getElementById("cliente-telefono").value
    );
    formClientes.reset();
});


/* ============================
   PRODUCTOS (CRUD + LocalStorage)
============================ */

const formProductos = document.getElementById("form-productos");
const listaProductos = document.getElementById("lista-productos");

function cargarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    listaProductos.innerHTML = "";

    productos.forEach((p, index) => {
        const li = document.createElement("li");
        li.textContent = `${p.nombre} - ${p.precio}€`;
        li.addEventListener("click", () => eliminarProducto(index));
        listaProductos.appendChild(li);
    });
}

function guardarProducto(nombre, precio) {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push({ nombre, precio });
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarProductos();
}

function eliminarProducto(index) {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarProductos();
}

formProductos.addEventListener("submit", e => {
    e.preventDefault();
    guardarProducto(
        document.getElementById("producto-nombre").value,
        document.getElementById("producto-precio").value
    );
    formProductos.reset();
});


/* ============================
   TAREAS (CRUD + LocalStorage)
============================ */

const formTareas = document.getElementById("form-tareas");
const listaTareas = document.getElementById("lista-tareas");

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    listaTareas.innerHTML = "";

    tareas.forEach((t, index) => {
        const li = document.createElement("li");
        li.textContent = `${t.nombre} - ${t.estado}`;
        li.addEventListener("click", () => eliminarTarea(index));
        listaTareas.appendChild(li);
    });
}

function guardarTarea(nombre, estado) {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push({ nombre, estado });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    cargarTareas();
}

function eliminarTarea(index) {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    cargarTareas();
}

formTareas.addEventListener("submit", e => {
    e.preventDefault();
    guardarTarea(
        document.getElementById("tarea-nombre").value,
        document.getElementById("tarea-estado").value
    );
    formTareas.reset();
});


/* ============================
   DIAGNÓSTICO DEL SISTEMA
============================ */

const diagLista = document.getElementById("diagnostico-lista");

function diagnostico() {
    diagLista.innerHTML = "";

    const checks = [
        { nombre: "JavaScript activo", ok: true },
        { nombre: "LocalStorage disponible", ok: typeof(Storage) !== "undefined" },
        { nombre: "Datos de clientes cargados", ok: localStorage.getItem("clientes") !== null },
        { nombre: "Datos de productos cargados", ok: localStorage.getItem("productos") !== null },
        { nombre: "Datos de tareas cargados", ok: localStorage.getItem("tareas") !== null }
    ];

    checks.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.nombre}: ${c.ok ? "OK" : "ERROR"}`;
        diagLista.appendChild(li);
    });
}


/* ============================
   DOCUMENTACIÓN
============================ */

const docOperaciones = document.getElementById("doc-operaciones");
const docIncidencias = document.getElementById("doc-incidencias");

function cargarDocumentacion() {
    docOperaciones.value = localStorage.getItem("doc_operaciones") || "";
    docIncidencias.value = localStorage.getItem("doc_incidencias") || "";
}

docOperaciones.addEventListener("input", () => {
    localStorage.setItem("doc_operaciones", docOperaciones.value);
});

docIncidencias.addEventListener("input", () => {
    localStorage.setItem("doc_incidencias", docIncidencias.value);
});


/* ============================
   CARGAR datos.json
============================ */

async function cargarJSON() {
    try {
        const respuesta = await fetch("data/datos.json");
        const datos = await respuesta.json();

        localStorage.setItem("clientes", JSON.stringify(datos.clientes));
        localStorage.setItem("productos", JSON.stringify(datos.productos));
        localStorage.setItem("tareas", JSON.stringify(datos.tareas));

        localStorage.setItem("doc_operaciones", datos.documentacion.operaciones);
        localStorage.setItem("doc_incidencias", datos.documentacion.incidencias);

        cargarClientes();
        cargarProductos();
        cargarTareas();
        cargarDocumentacion();
        diagnostico();

        console.log("JSON cargado correctamente.");

    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
}


/* ============================
   INICIALIZACIÓN
============================ */

function init() {
    cargarClientes();
    cargarProductos();
    cargarTareas();
    diagnostico();
    cargarDocumentacion();
}

init();