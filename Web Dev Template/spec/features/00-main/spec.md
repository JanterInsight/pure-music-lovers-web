# 00-main - Estructura Base

## Objetivo

Crear el esqueleto de la página web incluyendo la barra de menú, hero y Sobre Nosotros. Esta es la feature foundational que debe implementarse primero.

## Disposición de Elementos

Barra Menú → Hero → Sobre Nosotros → Eventos (feature 01) → Galería (feature 02) → Reseñas (feature 03) → Contáctanos (feature 05) → Pie Página (feature 06)

## Especificaciones

### Menú de Navegación
- **Comportamiento**: Barra de menú fija (sticky) al moverse por la página web
- **Posición izquierda**: Icono de nota musical + nombre del proyecto "Puros Melómanos"
- **Posición derecha**: Opciones de navegación (Sobre nosotros, Eventos, Galería, Reseñas, Contáctanos)
- **Estilos**:
  - "Contáctanos" debe tener borde ovalado
  - Los demás items: al hacer hover aparece un subrayado por debajo con transición
  - Al quitar el hover, el subrayado desaparece con transición

### Hero Section
- **Título principal**: "Puros Melómanos"
- **Subtítulo**: "Tu comunidad de amantes de la música"
- **Descripción**: "Descubre eventos musicales increíbles, conecta con otros amantes de la música y vive experiencias únicas en cada concierto"
- **Botones**: "Conócenos" y "Contáctanos"

### Sobre Nosotros
- **Título**: "Puros Melómanos" (en negrita)
- **Contenido**: Texto descriptivo sobre la comunidad, su misión y visión
- **Mensaje final**: "¡Únete a nuestra comunidad y vive la música como nunca antes!"

## Criterios de Aceptación

1. La barra de menú permanece fija al hacer scroll
2. El icono de nota musical y el nombre "Puros Melómanos" están visibles en el lado izquierdo
3. Todos los enlaces de navegación funcionan correctamente
4. El hover en los items de menú (excepto Contáctanos) muestra un subrayado con transición suave
5. El item "Contáctanos" tiene borde ovalado visible
6. El Hero muestra correctamente el título, subtítulo, descripción y botones
7. La sección "Sobre Nosotros" muestra el contenido completo
8. El diseño es responsive y funciona en móviles y desktop
9. Las transiciones son suaves y no afectan el rendimiento