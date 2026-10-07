# andrei · subunidad 007 integrada v3

Proyecto integrado de componentes, plantillas, orígenes de datos y eventos.

## Demostraciones

- `index.html`: aplicación integrada con menús, fichas, tabla, formulario dinámico, drag & drop, columnas minimizables y separadores redimensionables.
- `login.html`: pantalla de login andrei-iu con el logo local de marca.
- `formularios.html`: catálogo demostrativo de formularios y controles.
- `toasts.html`: demostración independiente de mensajes toast success/info/warning/danger.

## Identidad visual

Se utiliza el SVG local de la marca:

`../003-Herramientas propietarias y libres de edición de interfaces/IU.svg`

## Ejecución

Como el proyecto usa `fetch()` para los orígenes JSON, servir por HTTP:

`python3 -m http.server 8000`

Abrir `http://localhost:8000/`.

## Refactorización de código

Esta versión mantiene la estructura visual y funcional de la versión 5, pero presenta HTML, templates, CSS, JSON y JavaScript en formato legible y no minificado.

El JavaScript de control se ha reorganizado con programación orientada a objetos. El namespace técnico utilizado queda en `andrei.iu` para mantener coherencia con la marca visual del proyecto.
