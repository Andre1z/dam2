# Componente panel-info

## Descripción

El componente `panel-info` permite mostrar u ocultar un panel informativo dentro de la escena 3D mediante la interacción del usuario con un botón.

## Archivo

```text
componentes/panel_info.js
```

## Propiedades

| Propiedad | Tipo | Valor por defecto |
|------------|--------|------------------|
| visible | boolean | true |

## Eventos

### click

Muestra u oculta el panel informativo.

### mouseenter

Aumenta ligeramente el tamaño del botón para indicar que está activo.

### mouseleave

Restaura el tamaño original del botón.

## Funcionamiento

Cuando el usuario pulsa el botón:

- Si el panel está visible, se oculta.
- Si el panel está oculto, vuelve a mostrarse.
- El color del botón cambia para indicar el estado actual.
- Se registra una acción en la consola del navegador.

## Ejemplo de uso

```html
<a-box
    panel-info
    color="#4CC3D9">
</a-box>
```

## Métodos utilizados

- init()

## Dependencias

El componente utiliza los siguientes elementos de la escena:

```html
<a-plane id="panel-informacion"></a-plane>

<a-text id="texto-panel"></a-text>
```

## Autor

Andrei

## Versión

1.0