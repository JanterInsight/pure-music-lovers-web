# Roadmap

Orden de implementación de las features del proyecto **Puros Melómanos**.

## Orden de Implementación

Las features se implementarán en el siguiente orden, basado en la dependencia lógica entre secciones:

### 1. 00-main - Estructura Base
**Estado**: Pendiente  
**Descripción**: Crear el esqueleto de la página web incluyendo la barra de menú, hero y Sobre Nosotros  
**Dependencias**: Ninguna  
**Notas**: Esta es la feature foundational que debe implementarse primero

### 2. 01-events - Eventos
**Estado**: Pendiente  
**Descripción**: Sección de eventos con contadores regresivos y tres estados (espera, en curso, finalizado)  
**Dependencias**: 00-main  
**Notas**: Incluye 2 eventos de ejemplo con fechas específicas

### 3. 02-gallery - Galería
**Estado**: Pendiente  
**Descripción**: Galería de imágenes de eventos con zoom y navegación  
**Dependencias**: 00-main  
**Notas**: Las imágenes se almacenan en `/gallery`

### 4. 03-reviews - Reseñas
**Estado**: Pendiente  
**Descripción**: Sección de reseñas de la comunidad  
**Dependencias**: 00-main  
**Notas**: Archivo de especificación vacío, requiere definición

### 5. 05-contact_us - Contáctanos
**Estado**: Pendiente  
**Descripción**: Formulario de contacto e información de contacto (Gmail, teléfono, dirección, WhatsApp)  
**Dependencias**: 00-main  
**Notas**: Incluye enlaces a grupos de WhatsApp

### 6. 06-Footer - Pie de Página
**Estado**: Pendiente  
**Descripción**: Footer con enlaces rápidos y copyright  
**Dependencias**: 00-main (y todas las secciones anteriores)  
**Notas**: Debe incluir enlaces a todas las secciones del sitio

### 7. 04-login - Login (No implementar)
**Estado**: No implementar  
**Descripción**: Sistema de autenticación de usuarios  
**Dependencias**: N/A  
**Notas**: Esta feature está definida pero **no se implementará por ahora** según la especificación

## Instrucciones

> Cada Feature Nueva se crea como 'spec/features/NNN-nombre' con 'spec.md', 'plan.md' y 'tasks.md' antes de tocar código. Si existe alguna feature que solo contenga un .md general, debes dividirlo en los tres .md anteriores, separados por funcionalidad.

## Notas Adicionales

- El desarrollo sigue el flujo de **Spec-Driven Development**
- Cada feature debe tener su `spec.md`, `plan.md` y `tasks.md` antes de implementarse
- No implementar la feature 04-login hasta que se autorice explícitamente
- Las imágenes de la galería se encuentran en `/gallery`