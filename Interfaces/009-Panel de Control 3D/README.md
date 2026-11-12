# Panel de Control 3D

## Descripción

Panel de Control 3D es una aplicación desarrollada con HTML, CSS, JavaScript y A-Frame que permite interactuar con diferentes elementos de una escena tridimensional mediante componentes personalizados.

La aplicación incluye:

- Control de iluminación.
- Cambio dinámico de color.
- Gestión de un panel informativo.
- Interacción mediante eventos de usuario.

---

# Tecnologías utilizadas

## Diseño

- HTML5
- CSS3
- JavaScript ES6
- A-Frame 1.7.0
- Visual Studio Code

## Pruebas

- Jest
- Chrome DevTools

---

# Estructura del proyecto

```text
001-panel-control-3d/
│
├── index.html
│
├── css/
│   └── estilos.css
│
├── js/
│   └── principal.js
│
├── componentes/
│   ├── luz_inteligente.js
│   ├── cambio_color.js
│   └── panel_info.js
│
├── pruebas/
│   ├── luz_inteligente.test.js
│   ├── cambio_color.test.js
│   └── panel_info.test.js
│
├── documentacion/
│   ├── luz_inteligente.md
│   ├── cambio_color.md
│   └── panel_info.md
│
└── README.md
```

---

# Componentes desarrollados

## luz-inteligente

Permite encender y apagar la luz principal de la escena.

### Propiedades

- encendida
- intensidad

### Evento

- click

---

## cambio-color

Permite modificar el color de una esfera 3D.

### Propiedades

- colorInicial

### Eventos

- click
- mouseenter
- mouseleave

---

## panel-info

Controla la visibilidad de un panel informativo.

### Propiedades

- visible

### Eventos

- click
- mouseenter
- mouseleave

---

# Pruebas realizadas

Se han desarrollado pruebas unitarias para verificar:

- Valores por defecto.
- Cambio de estados.
- Funcionamiento de las propiedades.
- Comportamiento esperado de los componentes.

Archivos:

```text
pruebas/luz_inteligente.test.js
pruebas/cambio_color.test.js
pruebas/panel_info.test.js
```

---

# Autor

Andrei

---

# Versión

1.0