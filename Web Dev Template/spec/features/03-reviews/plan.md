# 03-reviews - Plan de Implementación

## Enfoque Técnico

### Arquitectura
- **Tipo**: Componente JavaScript vanilla con HTML/CSS
- **Enfoque**: Sección estática con contenido hardcodeado (por ahora)
- **Responsividad**: Mobile-first con grid adaptativo

### Estructura de Archivos
```
code/
├── index.html          # Se agrega sección #reseñas
├── css/
│   └── main.css        # Estilos para reseñas
└── js/
    └── reviews.js      # Lógica de reseñas (si es necesario)
```

### Decisiones Técnicas

#### 1. Estructura HTML
- **Sección**: `<section id="reseñas">` con título
- **Contenedor**: Div contenedor para grid de reseñas
- **Cada reseña**: Card con:
  - Nombre del autor
  - Contenido de la reseña
  - Fecha
  - Calificación (si aplica)

#### 2. CSS y Diseño
- **Layout**: CSS Grid o Flexbox
  - Mobile: 1 columna
  - Tablet: 2 columnas
  - Desktop: 3 columnas
- **Cards**: 
  - Fondo blanco o claro
  - Sombra sutil
  - Border radius
  - Padding interno
- **Tipografía**:
  - Autor: Negrita, tamaño mediano
  - Contenido: Legible, tamaño normal
  - Fecha: Pequeña, color gris
- **Calificación**: Estrellas doradas (si se implementa)

#### 3. Contenido
- **Inicial**: 3-6 reseñas de ejemplo
- **Hardcodeado**: Contenido estático en HTML o array JavaScript
- **Dinámico**: Preparar estructura para futuro backend (opcional)

#### 4. Responsividad
- **Mobile**: 1 reseña por fila
- **Tablet**: 2 reseñas por fila
- **Desktop**: 3 reseñas por fila
- **Padding**: Ajustar espaciado según breakpoint

#### 5. Accesibilidad
- Etiquetas semánticas
- Contraste adecuado
- Jerarquía de texto clara

## Datos de Reseñas

Ejemplo de estructura de reseñas:

```javascript
const reviews = [
  {
    author: "María González",
    content: "Increíble experiencia en el evento de Trova. La organización fue perfecta y el ambiente espectacular.",
    date: "2026-07-31",
    rating: 5,
    event: "Trova"
  },
  // ...
];
```

O en HTML:

```html
<div class="review-card">
  <h3 class="review-author">María González</h3>
  <p class="review-content">Increíble experiencia...</p>
  <span class="review-date">31 de Julio, 2026</span>
  <div class="review-rating">⭐⭐⭐⭐⭐</div>
</div>
```

## Dependencias

- 00-main (debe estar implementado primero)

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|-----------|
| Contenido insuficiente | Empezar con 3-6 reseñas de ejemplo |
| Diseño no escalable | Usar grid flexible que se adapte a cualquier cantidad |
| Falta de autenticidad | Usar contenido real o realista |

## Próximos Pasos

1. Definir contenido de reseñas con el equipo
2. Crear estructura HTML de la sección
3. Implementar estilos CSS
4. Agregar reseñas de ejemplo
5. Probar responsividad
6. Integrar con el resto del sitio