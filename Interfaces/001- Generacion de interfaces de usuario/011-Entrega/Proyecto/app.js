// JSON principal
let contactos = [];

// Añadir contacto
function addContact() {
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (nombre === "" || telefono === "") {
        alert("Rellena ambos campos");
        return;
    }

    const nuevo = {
        id: Date.now(),
        nombre: nombre,
        telefono: telefono
    };

    contactos.push(nuevo);
    renderContacts();

    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
}

// Pintar contactos en la tabla
function renderContacts() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    contactos.forEach(contacto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${contacto.nombre}</td>
            <td>${contacto.telefono}</td>
            <td>
                <button onclick="deleteContact(${contacto.id})">Eliminar</button>
            </td>
        `;

        lista.appendChild(fila);
    });
}

// Eliminar contacto
function deleteContact(id) {
    contactos = contactos.filter(c => c.id !== id);
    renderContacts();
}

// Guardar JSON en localStorage
function saveJSON() {
    const jsonString = JSON.stringify(contactos);
    localStorage.setItem("contactosJSON", jsonString);
    alert("Datos guardados en JSON");
}

// Cargar JSON desde localStorage
function loadJSON() {
    const jsonString = localStorage.getItem("contactosJSON");

    if (!jsonString) {
        alert("No hay JSON guardado");
        return;
    }

    contactos = JSON.parse(jsonString);
    renderContacts();
    alert("Datos cargados desde JSON");
}

// Eventos
document.getElementById("btnAdd").addEventListener("click", addContact);
document.getElementById("btnSave").addEventListener("click", saveJSON);
document.getElementById("btnLoad").addEventListener("click", loadJSON);

// Cargar automáticamente si existe JSON
if (localStorage.getItem("contactosJSON")) {
    loadJSON();
}