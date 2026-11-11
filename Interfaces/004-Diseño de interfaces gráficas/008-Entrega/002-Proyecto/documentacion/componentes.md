# DOCUMENTACIÓN DE COMPONENTES

## Proyecto

Interfaces Naturales de Usuario

---

# 1. Componente TarjetaEstado

Archivo:

js/componentes/tarjeta-estado.js

## Descripción

Componente reutilizable utilizado para mostrar
información de estado dentro de la aplicación.

Puede emplearse para visualizar:

- Estado de voz
- Estado de manos
- Estado de pose
- Estado de realidad aumentada
- Estado general del sistema

## Propiedades

| Propiedad | Tipo | Valor por defecto |
|------------|--------|-------------------|
| titulo | String | Estado |
| valor | String | Sin información |
| color | String | #1d4ed8 |

## Métodos

### render()

Genera el elemento HTML del componente.

### actualizar(nuevoValor)

Actualiza el valor mostrado.

### obtenerValor()

Devuelve el valor actual.

### obtenerTitulo()

Devuelve el título configurado.

---

# 2. Componente BotonAccion

Archivo:

js/componentes/boton-accion.js

## Descripción

Componente reutilizable para crear botones de acción.

Se utiliza para ejecutar operaciones dentro de la interfaz.

Ejemplos:

- Modo claro
- Modo oscuro
- Realidad aumentada

## Propiedades

| Propiedad | Tipo | Valor por defecto |
|------------|--------|-------------------|
| texto | String | Botón |
| icono | String | ⚙️ |
| identificador | String | "" |
| clase | String | "" |

## Métodos

### render()

Genera el botón HTML.

### asignarEvento()

Asocia un evento a una acción.

### actualizarTexto()

Modifica el texto mostrado.

### obtenerTexto()

Devuelve el texto configurado.

### obtenerIcono()

Devuelve el icono configurado.

---

# 3. Componente Notificacion

Archivo:

js/componentes/notificacion.js

## Descripción

Componente reutilizable para mostrar mensajes
informativos al usuario.

Se emplea para comunicar cambios de estado
y acciones detectadas por el sistema.

Ejemplos:

- Modo oscuro activado
- Comando de voz detectado
- Gesto reconocido
- Error del sistema

## Propiedades

| Propiedad | Tipo | Valor por defecto |
|------------|--------|-------------------|
| mensaje | String | Notificación |
| tipo | String | info |
| duracion | Number | 3000 |

## Métodos

### render()

Genera el elemento visual.

### mostrar()

Muestra la notificación.

### actualizarMensaje()

Actualiza el mensaje.

### actualizarTipo()

Actualiza el tipo visual.

---

# Eventos Gestionados

## Voz

Archivo:

js/voz/comandos-voz.js

Eventos:

- modo claro
- modo oscuro
- realidad aumentada
- estado del sistema

---

## Gestos de Mano

Archivo:

js/manos/gestos.js

Eventos:

- Mano abierta
- Puño cerrado
- Pulgar arriba

---

## Movimiento Corporal

Archivo:

js/movimiento/estados-pose.js

Eventos:

- Brazos arriba
- Brazos abajo
- Inclinación derecha
- Inclinación izquierda

---

# Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript ES6
- MediaPipe Hands
- MediaPipe Pose
- Web Speech API

---

# Reutilización

Todos los componentes desarrollados han sido diseñados
para ser reutilizados en otras aplicaciones web mediante
su inclusión dentro de la carpeta:

js/componentes/

Los componentes pueden emplearse de forma independiente
sin necesidad de modificar su implementación interna.