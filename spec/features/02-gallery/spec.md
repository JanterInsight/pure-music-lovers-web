# 02-gallery - Galería

## Objetivo

Crear una sección tipo galería que contenga muchas imágenes de los eventos, con funcionalidad de zoom y navegación entre imágenes.

## Disposición de Elementos

Grid de imágenes → Click en imagen → Modal con zoom → Navegación (flechas izquierda/derecha)

## Especificaciones

### Galería de Imágenes
- **Contenido**: Múltiples imágenes de eventos pasados
- **Ubicación**: Las imágenes se guardarán dentro de la carpeta `gallery/`
- **Layout**: Grid responsive de imágenes en miniatura
- **Cantidad**: Sin límite específico, adaptable según contenido disponible

### Interacción con Imágenes
- **Click**: Al hacer clic en cualquier imagen, se abre en modal con zoom
- **Zoom**: La imagen se muestra en tamaño grande dentro de un modal/lightbox
- **Navegación**: 
  - Flecha izquierda: imagen anterior
  - Flecha derecha: imagen siguiente
  - Navegación secuencial a través de todas las imágenes

### Modal/Lightbox
- **Overlay**: Fondo oscuro semitransparente
- **Cierre**: Botón de cerrar (X) y posibilidad de cerrar con click fuera o tecla ESC
- **Responsivo**: El modal debe adaptarse al tamaño de pantalla
- **Transiciones**: Animaciones suaves de apertura y cierre

### Navegación
- **Flechas**: Flechas izquierda y derecha visibles en el modal
- **Teclado**: Soporte para teclas de flecha del teclado
- **Click fuera**: Cerrar modal al hacer clic fuera de la imagen
- **Botón cerrar**: Icono X visible para cerrar el modal

### Responsividad
- **Grid**: Adaptar número de columnas según tamaño de pantalla
  - Mobile: 1-2 columnas
  - Tablet: 2-3 columnas
  - Desktop: 3-4 columnas
- **Modal**: La imagen debe ajustarse al viewport sin desbordar
- **Touch**: Soporte para gestos táctiles (swipe) en móviles (opcional)

### Performance
- **Lazy loading**: Cargar imágenes bajo demanda
- **Optimización**: Imágenes optimizadas para web (WebP, compresión)
- **Transiciones**: Usar CSS transforms para mejor performance

## Criterios de Aceptación

1. La galería muestra todas las imágenes disponibles en formato grid
2. Al hacer clic en una imagen se abre un modal con la imagen en tamaño grande
3. El modal tiene flechas de navegación izquierda y derecha
4. Se puede navegar entre todas las imágenes secuencialmente
5. El modal se puede cerrar con:
   - Botón X
   - Click fuera de la imagen
   - Tecla ESC del teclado
   - Teclas de flecha del teclado para navegación
6. Las transiciones de apertura/cierre son suaves
7. El grid de imágenes es responsive
8. Las imágenes se cargan correctamente desde la carpeta `gallery/`
9. El rendimiento es bueno incluso con muchas imágenes
10. El diseño es consistente con el resto del sitio