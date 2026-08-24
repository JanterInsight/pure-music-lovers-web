# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

## [1.2.0] - 2026-08-24

### Added

- Animaciones de aparición al hacer scroll (`IntersectionObserver`) en todas las
  secciones, con variantes `up` / `left` / `right` / `scale`, delays escalonados y
  soporte de `prefers-reduced-motion`
  (`src/hooks/useRevealOnScroll.ts`, `src/components/Reveal/`)
- Eventos nuevos con cuenta regresiva: Noche de Jazz (15/sep), Rock Clásico
  (15/oct) y Salsa y Son Cubano (15/nov) de 2026, 8:00 PM, Radio Banes
- Icono de marca en la barra de navegación (`Icon-Main-Full-64x64.png`)
- Script `npm run typecheck`

### Changed

- **Migración completa del proyecto de JavaScript a TypeScript** con `strict`
  mode y `noUncheckedIndexedAccess` activados
  - Componentes `.jsx` → `.tsx`
  - Tipos compartidos en `src/types.ts`
  - Datos de eventos en `src/data/events.ts`
  - Utilidades de tiempo en `src/utils/time.ts`
  - Configuración de Vite migrada a `vite.config.ts`
- Favicon PNG de 32x32 con fondo exterior transparente (interior del logo intacto)
- Transición de entrada del hero más lenta y cinematográfica (1.8s)
- Footer: crédito único para Janlier Rojas Santana

### Fixed

- Favicon roto (apuntaba a `vite.svg` inexistente)
- Espacio faltante entre el autor y el texto en los créditos del footer
- Referencia a `hero-bg.jpg` inexistente en los estilos del hero
- Observer que se registraba antes del primer pintado, lo que hacía que la
  animación del hero se saltara la transición

## [1.1.0] - 2026-08

### Added

- Sección de eventos con cuenta regresiva y estados (en espera, en curso,
  finalizado, oculto)
- Galería de imágenes con lightbox, navegación por teclado (Escape, flechas)
- Formulario de contacto con validación y información de contacto
- Footer con enlaces rápidos y créditos

## [1.0.0] - 2026-07-25

### Added

- Lanzamiento inicial del sitio de Puros Melómanos
- Navbar fija, Hero, sección Sobre Nosotros
- Configuración de despliegue automático a GitHub Pages mediante GitHub Actions
- Flujo de Spec-Driven Development documentado en `spec/`
