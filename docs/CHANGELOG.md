# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

## [1.7.0] - 2026-11-27

### Added

- **Tres eventos ficticios** en la timeline de Eventos:
  - **Música Electrónica & Synthwave** — 20 de enero de 2027, 21:00
  - **Fusión Latinoamericana** — 18 de marzo de 2027, 20:00
  - **Tributo a los Clásicos del Rock** — 13 de mayo de 2027, 20:00
  - Todos en Radio Banes (Cuba, Holguín, Banes), con contador regresivo y
    badge de estado «En espera» gestionados por la lógica existente de Eventos

## [1.6.0] - 2026-11-27

### Removed

- **Componente `ReducedMotionNotice` eliminado**: ya no se muestra el modal de
  advertencia «Animaciones desactivadas» al detectar la preferencia de
  reducción de movimiento del sistema
- **Todo el soporte de `prefers-reduced-motion` eliminado**:
  - Bloques `@media (prefers-reduced-motion: reduce)` removidos de
    `App.css`, `Hero.css`, `About.css`, `Events.css`, `Gallery.css`,
    `Contact.css`, `Footer.css`, `ErrorBoundary.css`, `Reveal.css` y
    `KineticText.css` (ya no se desactivan animaciones ni transiciones)
  - Bloques `@media (prefers-reduced-motion: no-preference)` de `About.css`,
    `Events.css` y `Footer.css` desempaquetados: los pulsos de nodos de las
    timelines, del indicador de estado y del corazón del footer ahora corren
    siempre
  - Hook `useReducedMotionScrollProgress` eliminado; los componentes
    `Hero`, `Events` y `About` usan ahora `useScrollProgress` directamente
  - Check de `prefers-reduced-motion` eliminado de `KineticText`

### Changed

- **Las animaciones se cargan siempre**, independientemente de la configuración
  de accesibilidad del dispositivo (móvil, tablet o escritorio)

## [1.5.0] - 2026-11-25

### Added

- **Formulario de contacto inmersivo** con labels flotantes (`.form-group:has()`
  sobre `:placeholder-shown` y `:focus`) y **hairline dorada que crece de
  izquierda a derecha** al enfocar un campo (`background-size` sobre
  `--input-hairline-h`, interpolar con `--ease-expo`)
- **Toast de éxito no bloqueante** arriba a la derecha: región `role="status"` +
  `aria-live="polite"`, auto-descarte a los 4s, cierre manual con botón
  etiquetado, icono SVG dorado de confirmación y foco visible
- **Iconos SVG decorativos** (`aria-hidden`, `focusable="false"`, coloreados por
  `currentColor`) reemplazando los emojis de email, teléfono, ubicación y
  WhatsApp en la información de contacto
- **Tarjetas de contacto translúcidas** con borde dorado tenue, glow de foco
  (`--card-glow-hover`) y lista fija (`sticky`) sobre la columna del formulario
  en viewports anchos
- **Enlaces a grupos de WhatsApp como pills** con flecha animada al hover
- **Sobre Nosotros rediseñado** con letra capital editorial (`::first-letter`
  dorada), pull-quote girando `--pull-quote-rotate`, línea dorada divisoria
  animada (`.hairline`) y **timeline de hitos** con línea vertical dorada que se
  llena al hacer scroll, nodos pulsantes y tarjetas alternadas (mismo lenguaje
  visual que la timeline de Events)
- **Tres tarjetas de valores** (Pasión Musical, Comunidad Inclusiva,
  Experiencias Únicas) con icono SVG dorado y glow al hover
- **CTA de cierre** en Sobre Nosotros con enlace a la sección de contacto
- **Honeypot anti-spam** oculto (`aria-hidden`, `tabIndex={-1}`, `autocomplete="off"`,
  fuera del viewport) que descarta envíos de bots de forma silenciosa
- **Corazón SVG dorado en el footer** con pulso sutil (`heart-pulse-gold`,
  `--pulse-gold-duration`) y hairline dorada animada en el borde superior
- Nav de enlaces rápidos del footer envuelta en `<nav aria-label="Enlaces rápidos">`
- Tokens compartidos en `App.css`: `--input-hairline-h`, `--input-focus-glow`,
  `--card-glow-hover`, `--timeline-about-width`, `--pull-quote-rotate`,
  `--footer-hairline-h`, `--toast-bg`, `--toast-border`, `--pulse-gold-duration`

### Changed

- **Validación en vivo del formulario**: los errores se confirman al salir del
  campo (`onBlur`) en lugar de solo al enviar; al enviar con errores el foco se
  mueve al primer campo inválido
- Inputs del formulario con `autoComplete` semántico (`name`, `email`) e
  `id`/`htmlFor` permanentes para que los labels flotantes conserven la
  asociación accesible
- `.pull-quote` de `App.css` ahora rota con `var(--pull-quote-rotate, -3deg)`
- Texto del teléfono de contacto normalizado ("DJ MonarC - Jose" →
  "DJ MonarC — Jose")
- El `alert()` bloqueante de éxito del formulario fue reemplazado por el toast
  accesible (sin bloquear la interacción ni el lector de pantalla)
- Las clases del timeline de Sobre Nosotros se nombraron con prefijo propio
  (`about-rail`, `milestone-node`) para no colisionar con `.timeline-rail` de
  Events en el CSS global

### Fixed

## [1.4.0] - 2026-11-25

### Added

- **Events rediseñado como timeline inmersiva** ("Frecuencia Visual") con
  línea dorada vertical que se llena progresivamente al hacer scroll
  (IntersectionObserver sobre cada tarjeta), nodos dorados pulsantes en cada
  evento y tarjetas alternadas a izquierda/derecha en layout editorial asimétrico
- **Contadores grandes tipo stage-light**: dígitos `var(--font-mono)` a
  `clamp(2.5rem, 5vw, 4rem)` con `-webkit-text-stroke` dorado y doble glow;
  fallback con `@supports` para navegadores sin text-stroke
- **Badges de estado visual** en eventos (`En espera` / `En curso` /
  `Finalizado`) con color dinámico vía `--status-color`, dot de estado animado
  solo para eventos en curso y mensajería `aria-label` contextual del contador
- **Galería rediseñada como visor full-bleed manual** (sin auto-play): foto
  principal a ancho de viewport con flechas laterales, captión + indicador
  `n / total`, disparo del lightbox mediante botón de expansión y navegación
  por teclado (←/→) cuando el lightbox está cerrado
- **Film strip tipo tira de película** bajo el visor: miniaturas horizontales
  con `scroll-snap`, miniatura activa resaltada en oro, scroll automático
  (`scrollIntoView`) para mantener la miniatura activa visible, y selección
  manual por click
- Tokens compartidos en `App.css`: `--gold-line-vertical`,
  `--timeline-width`, `--timeline-dot-size`, `--timeline-fill-duration`,
  `--counter-font-size`, `--counter-glow`, `--carousel-height`,
  `--film-strip-height`, `--film-strip-gap`
- Estados de foco visibles (`:focus-visible`) en navegación del carrusel,
  film strip y botón de expansión, preservados también en el lightbox

### Changed

- Events y Gallery dejan de usar grillas de tarjetas uniformes por layouts
  asimétricos y a sangre (`full-bleed`) con superficies translúcidas
  (`backdrop-filter`) y hairlines doradas
- La navegación de la galería ya no depende solo del lightbox: ahora el visor
  principal es la superficie primaria y el lightbox queda como acción explícita
  de "ampliar"
- Ambos contadores (`role="timer"` de eventos, `aria-live` del lightbox) y el
  diálogo del lightbox (`role="dialog"`, `aria-modal`, focus trap, retorno de
  foco) se conservan sin regresión de accesibilidad

### Fixed

## [1.3.0] - 2026-11-22

### Added

- **Sistema de motion experimental** en `App.css`: tokens expresivos
  `--gold-ambient`, `--gold-vignette`, `--gold-glow-soft`,
  `--gold-line-gradient`, y lenguaje de movimiento `--ease-expo`,
  `--ease-smooth`, duraciones `--duration-fast/base/slow/hero`, y tokens
  de layout `--container-narrow`, `--container-wide`, `--space-unit`
- **Componente `KineticText`** que divide el texto en caracteres con
  entrada escalonada; preserva el ajuste de línea por palabras
  (`inline-block` + espacios reales como puntos de corte) y soporta `\n`
  para saltos duros. Opción `outlineFill` para titular con borde dorado
  que se rellena de izquierda a derecha al asentarse la entrada
- Utilidades compartidas `.stage-glow`, `.hairline`, `.pull-quote`

### Changed

- **Hero rediseñado** como pieza statement: eyebrow dorado espaciado sobre
  el titular, titular "Puros Melómanos" con borde dorado que rellena en
  barrido, parallax sutil del glow ambiental al hacer scroll, glow de foco
  (`stage light`) superior, y cue de scroll animado en la base
- Bounce easing retirado del lenguaje de motion (reemplazado por
  `--ease-smooth`/`--ease-expo`, sin overshoot) tras hallazgo del detector

### Fixed

- Titular del hero que se partía a media palabra al convertir espacios en
  `\u00A0`; ahora el ajuste de línea ocurre entre palabras correctamente
- Eliminado el scroll-cue (línea vertical + "SCROLL") que quedaba visualmente
  entre los botones "Conócenos" y "Contáctanos"; ya no aparece en el Hero

## [1.2.1] - 2026-11-22

### Changed (Accesibilidad y Craft)

- **Lightbox de galería accesible**: `role="dialog"`, `aria-modal`, `aria-labelledby`,
  focus trap completo (Tab/Escape), foco restaurado al cerrar y `aria-label`
  descriptivos en botones prev/next/close con contexto de la imagen
- **Contador de eventos**: `role="timer"` con `aria-live="polite"` y `aria-atomic`;
  separadores `:` marcados con `aria-hidden`
- **Formulario de contacto**: `aria-describedby` en inputs vinculados a los mensajes
  de error (`id` + `role="alert"`), `aria-invalid` y atributo `required`
- **Navbar móvil**: focus trap al abrir el menú, `aria-controls`, cierre con Escape y
  devolución del foco al toggle; `aria-label` dinámico según estado abierto/cerrado
- **Pulse del indicador de estado** envuelto en `@media (prefers-reduced-motion: no-preference)`

### Changed (Theming y Layout)

- Tokens de diseño ampliados en `App.css`: `--font-mono`, `--shadow-sm/md/lg`,
  `--shadow-glow`, `--shadow-glow-strong`, `--radius-sm/md/lg`, `--container-max`,
  `--navbar-height`; utilidad `.visually-hidden` añadida
- `--font-mono` aplicado al `.time-value` del contador (antes hardcoded)
- Stripe rígida `::before` de 4px en `event-card` reemplazada por un glow superior
  degradado (`--status-color`) más sofisticado y sin el "tell" de UI generada
- Galería responsive: `minmax(160px, 1fr)` y una columna por debajo de 480px
  (antes 150px provocaba touch targets < 44px y overflow en viewports estrechos)
- Footer reorganizado a grid de 3 columnas equilibradas (`1.5fr 1fr 1fr`)
- `max-width` del container usando `var(--container-max)`

### Fixed

- Errores de tipo TS con `noUncheckedIndexedAccess` en los `aria-label` del lightbox

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
