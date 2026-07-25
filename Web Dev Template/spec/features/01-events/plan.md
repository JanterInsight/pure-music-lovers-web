# 01-events - Plan de Implementación

## Enfoque Técnico

### Arquitectura
- **Tipo**: Componente JavaScript vanilla con HTML/CSS
- **Enfoque**: Módulo independiente que se integra en la página principal
- **Responsividad**: Mobile-first, grid/flexbox para layout de contadores

### Estructura de Archivos
```
code/
├── index.html          # Se agrega sección #eventos
├── css/
│   └── main.css        # Estilos para eventos y contadores
└── js/
    └── events.js       # Lógica de contadores regresivos
```

### Decisiones Técnicas

#### 1. Estructura HTML
- **Sección**: `<section id="eventos">` con título de la sección
- **Contenedor**: Div contenedor para los contadores (grid layout)
- **Cada contador**: Card con:
  - Título del evento
  - Display del contador (dd:hh:mm:ss)
  - Indicador de estado (con color)
  - Lugar clickeable (enlace a Google Maps)

#### 2. CSS y Diseño
- **Layout**: CSS Grid para mostrar hasta 3 contadores
  - Mobile: 1 columna
  - Tablet: 2 columnas
  - Desktop: 3 columnas
- **Colores de estado**:
  - En espera: `#f39c12` (amarillo)
  - En curso: `#27ae60` (verde)
  - Finalizado: `#e74c3c` (rojo)
- **Transiciones**: `transition: all 0.3s ease` para cambios de color
- **Tipografía**: Monospace para los números del contador (mejor legibilidad)

#### 3. Lógica JavaScript
- **Formato de fechas**: Usar ISO 8601 para consistencia
- **Cálculo de tiempo**: Función que calcula diferencia entre fecha actual y fecha objetivo
- **Actualización**: `setInterval` cada 1 segundo
- **Estados**: Determinar estado basado en:
  - Si `ahora < inicio` → En espera
  - Si `inicio <= ahora < fin` → En curso
  - Si `fin <= ahora <= fin + 1 día` → Finalizado
  - Si `ahora > fin + 1 día` → Ocultar contador
- **Formato**: Función para convertir milisegundos a dd:hh:mm:ss
- **Visibilidad**: Mostrar/ocultar sección según cantidad de eventos activos

#### 4. Google Maps
- **URL**: Usar formato `https://www.google.com/maps/search/?api=1&query=...`
- **Codificación**: URL-encode de la dirección
- **Target**: Abrir en nueva pestaña (`target="_blank"`)

#### 5. Responsividad
- **Mobile** (< 768px): 1 contador por fila
- **Tablet** (768px - 1024px): 2 contadores por fila
- **Desktop** (> 1024px): 3 contadores por fila
- **Padding**: Ajustar espaciado según breakpoint

#### 6. Performance
- Actualización eficiente: Solo actualizar el texto, no re-renderizar DOM completo
- Usar `requestAnimationFrame` para actualizaciones suaves
- Limpiar intervalos cuando no sean necesarios

## Datos de Eventos

Los eventos se definen como array de objetos JavaScript:

```javascript
const events = [
  {
    id: 1,
    title: "Trova",
    start: "2026-07-31T15:00:00",
    end: "2026-07-31T18:00:00",
    location: "Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior",
    mapsQuery: "Cuba, Holguín, Banes, Radio Banes, Calle Máximo Gómez"
  },
  {
    id: 2,
    title: "Hip-Hop y Rap",
    start: "2026-08-14T20:00:00",
    end: "2026-08-14T23:00:00",
    location: "Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior",
    mapsQuery: "Cuba, Holguín, Banes, Radio Banes, Calle Máximo Gómez"
  }
];
```

## Dependencias

- 00-main (debe estar implementado primero)

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|-----------|
| Zona horaria incorrecta | Usar ISO 8601 y UTC, convertir a hora local |
| Performance con múltiples contadores | Limitar a 3, usar efficient DOM updates |
| Google Maps no carga | Probar URLs, tener fallback con dirección visible |
| Contadores desincronizados | Usar una sola fuente de tiempo (Date.now()) |

## Próximos Pasos

1. Crear estructura HTML de la sección de eventos
2. Implementar estilos CSS para contadores
3. Crear lógica JavaScript de contadores regresivos
4. Implementar sistema de estados
5. Agregar integración con Google Maps
6. Probar con eventos de ejemplo
7. Verificar responsividad