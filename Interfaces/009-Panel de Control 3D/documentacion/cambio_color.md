# Componente cambio-color

## Descripción

El componente `cambio-color` permite modificar el color de un objeto 3D cada vez que el usuario hace clic sobre él.

## Archivo

```text
componentes/cambio_color.js
```

## Propiedades

| Propiedad | Tipo | Valor por defecto |
|------------|--------|------------------|
| colorInicial | color | #EF2D5E |

## Eventos

### click

Cambia el color del objeto al siguiente color de una lista predefinida.

### mouseenter

Aumenta ligeramente la escala del objeto al pasar el cursor por encima.

### mouseleave

Restaura la escala original del objeto.

## Funcionamiento

El componente dispone de una colección de colores.

Cada vez que el usuario pulsa el objeto:

1. Se avanza al siguiente color.
2. Se actualiza el material del objeto.
3. Se muestra un mensaje informativo en consola.

Cuando se alcanza el último color de la lista, vuelve automáticamente al primero.

## Ejemplo de uso

```html
<a-sphere
    cambio-color
    color="#EF2D5E">
</a-sphere>
```

## Métodos utilizados

- init()

## Autor

Andrei

## Versión

1.0