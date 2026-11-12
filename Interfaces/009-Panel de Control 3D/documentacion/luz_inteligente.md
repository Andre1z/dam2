# Componente luz-inteligente

## Descripción

El componente `luz-inteligente` permite encender y apagar una luz de la escena A-Frame mediante la interacción del usuario sobre un objeto 3D.

## Archivo

```text
componentes/luz_inteligente.js
```

## Propiedades

| Propiedad | Tipo | Valor por defecto |
|------------|--------|------------------|
| encendida | boolean | true |
| intensidad | number | 1 |

## Eventos

### click

Alterna el estado de la luz entre encendida y apagada.

## Funcionamiento

Cuando el usuario pulsa sobre el botón asociado:

- Si la luz está encendida, se apaga.
- Si la luz está apagada, se enciende.
- El color del botón cambia para indicar el estado actual.

## Ejemplo de uso

```html
<a-box
    luz-inteligente
    color="#FFD700">
</a-box>
```

## Métodos utilizados

- init()

## Autor

Andrei

## Versión

1.0