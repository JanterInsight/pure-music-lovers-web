# 02-gallery - Tareas de Implementación

## Tareas

### 1. Crear componente Gallery
- [ ] Crear componente `Gallery.jsx` en `code/client/src/components/Gallery/`
- [ ] Crear componente `Lightbox.jsx` para el modal
- [ ] Crear archivo `Gallery.module.css` con estilos
- [ ] Implementar estado con useState para imágenes, índice y lightbox
- [ ] Implementar useEffect para event listeners de teclado

### 2. Implementar estilos CSS para galería
- [ ] Crear estilos del componente Gallery en `Gallery.module.css`
- [ ] Implementar grid layout responsive (1/2/3/4 columnas según breakpoint)
- [ ] Crear estilos de `.gallery-item` con hover effect
- [ ] Implementar estilos del lightbox/modal
- [ ] Estilizar flechas de navegación (izquierda/derecha)
- [ ] Estilizar botón de cerrar (X)
- [ ] Agregar transiciones suaves para apertura/cierre de lightbox
- [ ] Asegurar responsividad en todos los breakpoints

### 3. Implementar lógica de galería
- [ ] Definir array de imágenes (hardcodeado o dinámico)
- [ ] Crear función para cargar imágenes en el grid
- [ ] Implementar evento de click en imágenes para abrir lightbox
- [ ] Crear función `openLightbox(index)` para mostrar imagen
- [ ] Crear función `closeLightbox()` para cerrar lightbox
- [ ] Implementar navegación entre imágenes (siguiente/anterior)
- [ ] Manejar límites del array (primera/última imagen)

### 4. Implementar eventos de teclado
- [ ] Agregar event listener para tecla ESC (cerrar lightbox) con useEffect
- [ ] Agregar event listener para flecha izquierda (imagen anterior)
- [ ] Agregar event listener para flecha derecha (imagen siguiente)
- [ ] Prevenir comportamiento por defecto cuando lightbox está abierto
- [ ] Limpiar event listeners en cleanup de useEffect

### 5. Implementar cierre de lightbox
- [ ] Click en botón X cierra lightbox (actualizar estado)
- [ ] Click en overlay (fuera de imagen) cierra lightbox
- [ ] Tecla ESC cierra lightbox
- [ ] Animación suave de cierre con CSS transitions

### 6. Responsividad y testing
- [ ] Probar grid mobile (1-2 columnas)
- [ ] Probar grid tablet (2-3 columnas)
- [ ] Probar grid desktop (3-4 columnas)
- [ ] Probar lightbox en diferentes tamaños de pantalla
- [ ] Verificar navegación con flechas
- [ ] Verificar cierre con X, click fuera y ESC
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari, Edge)

### 7. Optimización
- [ ] Implementar lazy loading en imágenes del grid
- [ ] Optimizar tamaño de imágenes (comprimir, usar WebP)
- [ ] Verificar performance de transiciones
- [ ] Agregar comentarios al código

## Notas

- Depende de 00-main (estructura base debe estar implementada)
- Las imágenes se almacenan en la carpeta `gallery/`
- El lightbox debe ser responsive y funcionar en móviles
- Implementar lazy loading para mejor performance
- Las transiciones deben ser suaves (usar transform y opacity)