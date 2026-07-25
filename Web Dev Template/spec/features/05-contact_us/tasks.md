# 05-contact_us - Tareas de Implementación

## Tareas

### 1. Crear estructura HTML de contacto
- [ ] Agregar sección `<section id="contactanos">` en `code/index.html`
- [ ] Crear layout de 2 columnas (información + formulario)
- [ ] Crear sección de información de contacto con iconos
- [ ] Crear formulario con campos: nombre, email, asunto, mensaje
- [ ] Agregar enlace a la sección en el menú de navegación

### 2. Implementar estilos CSS para contacto
- [ ] Agregar estilos de la sección de contacto en `code/css/main.css`
- [ ] Implementar layout de 2 columnas en desktop, 1 en mobile
- [ ] Estilizar información de contacto con iconos
- [ ] Estilizar formulario (inputs, botón, labels)
- [ ] Agregar hover effects en enlaces
- [ ] Estilizar enlaces de WhatsApp
- [ ] Asegurar responsividad en todos los breakpoints

### 3. Crear lógica JavaScript
- [ ] Crear archivo `code/js/contact.js`
- [ ] Implementar validación de campos:
  - Nombre: requerido, mínimo 2 caracteres
  - Email: requerido, formato válido
  - Asunto: requerido, mínimo 5 caracteres
  - Mensaje: requerido, mínimo 10 caracteres
- [ ] Mostrar mensajes de error inline
- [ ] Implementar función de envío por mailto
- [ ] Codificar parámetros con encodeURIComponent()
- [ ] Limpiar formulario después de envío
- [ ] Mostrar confirmación de envío

### 4. Implementar enlaces externos
- [ ] Agregar enlaces a grupos de WhatsApp
- [ ] Abrir enlaces en nueva pestaña (target="_blank")
- [ ] Agregar iconos de WhatsApp
- [ ] Implementar mailto para Gmail
- [ ] Agregar enlace de teléfono (tel:)
- [ ] Agregar enlace de dirección a Google Maps (opcional)

### 5. Responsividad y testing
- [ ] Probar layout desktop (2 columnas)
- [ ] Probar layout mobile (1 columna)
- [ ] Verificar que el formulario se vea bien en todos los tamaños
- [ ] Probar validación de campos
- [ ] Probar envío por mailto
- [ ] Verificar que enlaces de WhatsApp funcionen
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari, Edge)

### 6. Accesibilidad y optimización
- [ ] Verificar labels asociados a inputs
- [ ] Verificar contraste de colores
- [ ] Verificar navegación por teclado
- [ ] Optimizar rendimiento
- [ ] Agregar comentarios al código

## Notas

- Depende de 00-main (estructura base debe estar implementada)
- El formulario usa mailto para enviar por Gmail (no requiere backend)
- Los enlaces de WhatsApp deben abrir en nueva pestaña
- Validación client-side antes de enviar
- Diseño responsive: 2 columnas en desktop, 1 en mobile