# 03-reviews - Plan de Implementación

## Enfoque Técnico

### Arquitectura
- **Tipo**: Componente React funcional con hooks
- **Enfoque**: Componente `Reviews.jsx` con datos hardcodeados (por ahora)
- **Responsividad**: Mobile-first con grid adaptativo

### Estructura de Archivos
```
code/client/src/
├── components/
│   └── Reviews/
│       ├── Reviews.jsx
│       ├── Reviews.module.css
│       └── ReviewCard.jsx
├── App.jsx
└── main.jsx
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
  - Fondo: #1A1A1A (gris oscuro)
  - Sombra sutil
  - Border radius
  - Padding interno
  - Border: 1px solid #B8860B (dorado oscuro)
- **Tipografía**:
  - Fuente principal: Libre Baskerville
  - Autor: Negrita, tamaño mediano, color #FFD700 (dorado)
  - Contenido: Legible, tamaño normal, color #FFFFFF (blanco)
  - Fecha: Pequeña, color #F5F0E8 (beige claro)
- **Calificación**: Estrellas doradas (si se implementa)

#### 3. Contenido
- **Inicial**: 3-6 reseñas de ejemplo
- **Hardcodeado**: Array de objetos en JavaScript dentro del componente
- **Dinámico**: Preparar estructura para futuro backend con API (opcional)

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

## Diseño

### Paleta de Colores (Oficial)
- **Títulos**: #FFD700 (dorado)
- **Bordes, Detalles y hover**: #B8860B (dorado oscuro)
- **Fondo Principal**: #0A0A0A (negro)
- **Tarjetas y secciones secundarias**: #1A1A1A (gris oscuro)
- **Textos Principales**: #FFFFFF (blanco)
- **Textos Secundarios**: #F5F0E8 (beige claro)

### Tipografía
- **Fuente principal**: Libre Baskerville

## Dependencias

- 00-main (debe estar implementado primero)
- React 18+
- React Router DOM (para navegación)

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