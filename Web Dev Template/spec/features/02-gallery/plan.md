# 02-gallery - Plan de Implementación

## Enfoque Técnico

### Arquitectura
- **Tipo**: Componente React funcional con hooks
- **Enfoque**: Componente `Gallery.jsx` con lightbox integrado
- **Responsividad**: Mobile-first con grid adaptativo

### Estructura de Archivos
```
code/client/src/
├── components/
│   └── Gallery/
│       ├── Gallery.jsx
│       ├── Gallery.module.css
│       └── Lightbox.jsx
├── App.jsx
└── main.jsx
```

### Decisiones Técnicas

#### 1. Estructura HTML
- **Sección**: `<section id="galeria">` con título
- **Grid**: Contenedor con clase `.gallery-grid`
- **Imágenes**: `<img>` dentro de `.gallery-item` con:
  - `src` apuntando a `gallery/imagen.jpg`
  - `alt` descriptivo
  - `loading="lazy"` para optimización
- **Modal**: Contenedor oculto `.lightbox` con:
  - Overlay de fondo
  - Contenedor de imagen
  - Botón cerrar (X)
  - Flechas de navegación (izquierda/derecha)

#### 2. CSS y Diseño
- **Grid Layout**: CSS Grid con `auto-fill` y `minmax`
  - Mobile: `minmax(250px, 1fr)` - 1-2 columnas
  - Tablet: `minmax(300px, 1fr)` - 2-3 columnas
  - Desktop: `minmax(350px, 1fr)` - 3-4 columnas
- **Gap**: `1rem` o `1.5rem` entre imágenes
- **Hover effect**: 
  - `transform: scale(1.05)` con transición
  - `cursor: pointer`
  - Sombra sutil
- **Lightbox**:
  - `position: fixed` con `z-index: 2000`
  - Overlay: `background: rgba(0,0,0,0.9)`
  - Transiciones: `opacity` y `visibility`
  - Imagen centrada con `max-width: 90vw` y `max-height: 90vh`

#### 3. Lógica React (Hooks)
- **Estado**: useState para imágenes, índice actual, lightbox abierto/cerrado
- **Efecto**: useEffect para event listeners (teclado)
- **Detección de imágenes**: 
  - Escanear directorio `gallery/` (si es posible)
  - O mantener array hardcodeado de imágenes
- **Carga de imágenes**: 
  - Usar `loading="lazy"` en HTML
  - O implementar Intersection Observer para lazy loading avanzado
- **Apertura de lightbox**:
  - Función `openLightbox(index)`
  - Actualizar estado `currentIndex` y `isLightboxOpen`
  - Mostrar lightbox con animación CSS
- **Navegación**:
  - Funciones `showNext()` y `showPrev()`
  - Actualizar `currentIndex` en estado
  - Manejar límites (primera/última imagen)
- **Cierre**:
  - Click en botón X
  - Click en overlay (fuera de imagen)
  - Tecla ESC
  - Actualizar estado `isLightboxOpen = false`

#### 4. Eventos de Teclado
- **ESC**: Cerrar lightbox
- **Flecha izquierda**: Imagen anterior
- **Flecha derecha**: Imagen siguiente
- **Prevenir comportamiento por defecto** cuando lightbox está abierto

#### 5. Responsividad
- **Grid**: Auto-adaptativo con CSS Grid
- **Lightbox**: 
  - Imagen con `max-width: 90vw` y `max-height: 90vh`
  - Flechas posicionadas absolutamente
  - Botón X en esquina superior derecha
- **Mobile**: Flechas más pequeñas, spacing reducido

#### 6. Performance
- **Lazy loading**: `loading="lazy"` en imágenes del grid
- **Transiciones**: Usar `transform` y `opacity` (GPU accelerated)
- **Preload**: Precargar imagen siguiente y anterior (opcional)
- **Event listeners**: Remover cuando no sean necesarios

## Datos de Imágenes

Las imágenes se organizan en la carpeta `gallery/`:

```
gallery/
├── event-1-1.jpg
├── event-1-2.jpg
├── event-1-3.jpg
├── event-2-1.jpg
├── event-2-2.jpg
└── ...
```

Opcionalmente, se puede mantener un array con metadata:

```javascript
const galleryImages = [
  { src: 'gallery/event-1-1.jpg', alt: 'Evento Trova - Foto 1' },
  { src: 'gallery/event-1-2.jpg', alt: 'Evento Trova - Foto 2' },
  // ...
];
```

## Dependencias

- 00-main (debe estar implementado primero)
- React 18+
- React Router DOM (para navegación)

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|-----------|
| Muchas imágenes ralentizan la página | Implementar lazy loading y optimizar imágenes |
| Lightbox no funciona en móvil | Probar touch events, considerar swipe gestures |
| Imágenes muy grandes | Comprimir imágenes, usar WebP, definir max-width/max-height |
| Navegación por teclado conflictiva | Prevenir default solo cuando lightbox está abierto |

## Próximos Pasos

1. Crear estructura HTML de la sección de galería
2. Implementar estilos CSS para grid y lightbox
3. Crear lógica JavaScript de galería
4. Implementar lightbox con navegación
5. Agregar eventos de teclado
6. Probar responsividad
7. Optimizar rendimiento