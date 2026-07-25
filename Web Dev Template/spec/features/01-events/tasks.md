# 01-events - Tareas de Implementación

## Tareas

### 1. Crear componente Events
- [ ] Crear componente `Events.jsx` en `code/client/src/components/Events/`
- [ ] Crear componente `EventCard.jsx` para cada contador
- [ ] Crear archivo `Events.module.css` con estilos
- [ ] Implementar estado con useState para eventos y tiempo actual
- [ ] Implementar useEffect con setInterval para actualizar contadores

### 2. Implementar estilos CSS para eventos
- [ ] Crear estilos del componente Events en `Events.module.css`
- [ ] Implementar grid layout para contadores (1/2/3 columnas según breakpoint)
- [ ] Crear estilos de card para cada contador
- [ ] Implementar colores de estado (amarillo, verde, rojo)
- [ ] Agregar transiciones suaves para cambios de color
- [ ] Estilizar el display del contador (formato dd:hh:mm:ss)
- [ ] Hacer el lugar clickeable con estilo de enlace
- [ ] Asegurar responsividad en todos los breakpoints

### 3. Implementar lógica de contadores
- [ ] Definir array de eventos con datos de ejemplo
- [ ] Crear función para calcular tiempo restante (dd:hh:mm:ss)
- [ ] Implementar función de formateo de tiempo
- [ ] Crear función para determinar estado del evento (espera/curso/finalizado)
- [ ] Implementar useEffect con setInterval para actualizar contadores cada 1 segundo
- [ ] Implementar lógica de visibilidad (mostrar/ocultar sección)

### 4. Implementar sistema de estados
- [ ] Crear función que determine estado basado en fechas
- [ ] Aplicar clases CSS según estado (espera/curso/finalizado)
- [ ] Cambiar colores dinámicamente según estado
- [ ] Manejar transición entre estados
- [ ] Ocultar contadores que hayan pasado más de 1 día desde su fin

### 5. Integrar Google Maps
- [ ] Crear función para generar URL de Google Maps
- [ ] Implementar URL-encode de direcciones
- [ ] Hacer el lugar clickeable con enlace a Google Maps
- [ ] Abrir en nueva pestaña (`target="_blank"`)
- [ ] Agregar icono o indicador de enlace externo

### 6. Responsividad y testing
- [ ] Probar layout mobile (1 columna)
- [ ] Probar layout tablet (2 columnas)
- [ ] Probar layout desktop (3 columnas)
- [ ] Verificar que los contadores se vean bien en todos los tamaños
- [ ] Probar con eventos de ejemplo
- [ ] Verificar que los contadores se actualicen correctamente
- [ ] Verificar que los estados cambien correctamente
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari, Edge)

### 7. Optimización
- [ ] Optimizar actualizaciones del DOM (no re-renderizar completo)
- [ ] Limpiar intervalos cuando no sean necesarios
- [ ] Verificar performance de actualizaciones
- [ ] Agregar comentarios al código

## Notas

- Depende de 00-main (estructura base debe estar implementada)
- Usar fechas ISO 8601 para evitar problemas de zona horaria
- Los eventos de ejemplo tienen fechas específicas en julio-agosto 2026
- Máximo 3 contadores visibles simultáneamente
- La sección se oculta si no hay eventos activos