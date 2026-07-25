
## Objetivo:
Crear una sección que pueda contener máximo tres contadores diferentes según la cantidad de eventos que hallan, si no hay ningún evento está sección debe ocultarse hasta que se añadan nuevos eventos.

## Disposición Elementos:
Título --> (dd:hh:mm:ss) --> días:horas:minutos:segundos --> Estado --> Lugar

## Características:
- Cada contador debe empezar desde la fecha y hora actual e ir reduciendo el tiempo hasta el inicio del evento correspondiente, funcionando como cronómetro con cuenta regresiva
- Se muestra como título la temática del evento
- Se debe mostrar el tiempo restante en el formato (dd:hh:mm:ss), y debajo se específican que son días:horas:minutos:segundos
- El contador tendrá tres estados: 
 1. En espera: Que será cuando todavía no halla llegado el inicio del evento y finalizará cuando halla dado inicio
 2. En curso: Que será Cuando halla dado inicio al evento y finalizará cuando halla terminado el evento
 3. Finalizado: Se mantendrá hasta por 1 día después de haber finalizado el evento
- Cada estado cambiará el color predominante de ese contador:
 1. En espera: Amarillo
 2. En curso: Verde
 3. Finalizado: Rojo
- Al actualizarse el tiempo del contador deberá utilizar transiciones ligeras
- El lugar del evento debe ser clickeable, el cual te llevará al lugar exacto del evento en Google maps

## Próximos Eventos
Primer Evento:
- Inicio: 31-07-26 3:00pm
- fin: 31-07-26 6:00pm
- Lugar: Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior
- temática: Trova

Segundo Evento:
- inicio: 14-08-2026 8:00pm
- fin: 14-08-2026 11:00pm
- Lugar: Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior 
- temática: Hip-Hop y Rap