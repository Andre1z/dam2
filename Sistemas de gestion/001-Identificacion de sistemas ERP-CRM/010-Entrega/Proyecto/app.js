// Navegación simple
const content = document.getElementById("content");
const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        loadSection(btn.dataset.section);
    });
});

// Carga de secciones
function loadSection(section) {
    switch(section) {
        case "clientes":
            content.innerHTML = "<h2>Gestión de Clientes</h2>";
            break;

        case "productos":
            content.innerHTML = "<h2>Gestión de Productos</h2>";
            break;

        case "tareas":
            content.innerHTML = "<h2>Gestión de Tareas</h2>";
            break;

        case "info":
            content.innerHTML = "<h2>Información ERP-CRM</h2>";
            break;

        case "diag":
            content.innerHTML = "<h2>Diagnóstico del Sistema</h2>";
            break;

        case "docs":
            content.innerHTML = "<h2>Documentación del Proyecto</h2>";
            break;
    }
}