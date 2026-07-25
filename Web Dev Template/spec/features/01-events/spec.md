# 01-events - Eventos

## Objetivo

Crear una sección que pueda contener máximo tres contadores diferentes según la cantidad de eventos que hayan. Si no hay ningún evento, esta sección debe ocultarse hasta que se añadan nuevos eventos.

## Disposición de Elementos

Título → (dd:hh:mm:ss) → días:horas:minutos:segundos → Estado → Lugar

## Especificaciones

### Contadores Regresivos
- **Cantidad**: Máximo 3 contadores simultáneos
- **Formato de tiempo**: (dd:hh:mm:ss) - días:horas:minutos:segundos
- **Inicio**: Cada contador debe empezar desde la fecha y hora actual
- **Comportamiento**: Funcionar como cronómetro con cuenta regresiva hasta el inicio del evento

### Estados del Evento
Cada contador tendrá tres estados que cambiarán automáticamente:

1. **En espera** (Amarillo)
   - Cuando todavía no ha llegado el inicio del evento
   - Finaliza cuando el evento ha dado inicio
   
2. **En curso** (Verde)
   - Cuando el evento ha dado inicio
   - Finaliza cuando el evento ha terminado
   
3. **Finalizado** (Rojo)
   - Se mantiene hasta por 1 día después de haber finalizado el evento

### Información del Evento
- **Título**: Temática del evento
- **Tiempo restante**: Formato (dd:hh:mm:ss) con leyenda "días:horas:minutos:segundos"
- **Estado**: Indicador visual con color según el estado
- **Lugar**: Clickeable, lleva a Google Maps con la ubicación exacta

### Actualización
- Al actualizarse el tiempo del contador debe utilizar transiciones ligeras
- Actualización en tiempo real (cada segundo)

### Visibilidad
- Si no hay eventos, la sección completa debe estar oculta
- Mostrar sección solo cuando haya al menos un evento

## Eventos de Ejemplo

### Primer Evento
- **Inicio**: 31-07-2026 3:00pm
- **Fin**: 31-07-2026 6:00pm
- **Lugar**: Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior
- **Temática**: Trova

### Segundo Evento
- **Inicio**: 14-08-2026 8:00pm
- **Fin**: 14-08-2026 11:00pm
- **Lugar**: Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior
- **Temática**: Hip-Hop y Rap

## Criterios de Aceptación

1. La sección se oculta completamente si no hay eventos
2. Se muestran máximo 3 contadores simultáneamente
3. Cada contador muestra el tiempo restante en formato dd:hh:mm:ss
4. Los contadores se actualizan en tiempo real cada segundo
5. Los estados cambian automáticamente según las fechas:
   - En espera: color amarillo
   - En curso: color verde
   - Finalizado: color rojo (hasta 1 día después)
6. El lugar del evento es clickeable y abre Google Maps
7. Las transiciones de tiempo son suaves
8. El diseño es responsive
9. Los eventos de ejemplo se muestran correctamente con sus fechas