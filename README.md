# 🎵 Puros Melómanos

**Tu comunidad de amantes de la música**

[![Live Demo](https://img.shields.io/badge/🌐-Live%20Demo-FFD700?style=for-the-badge)](https://janterinsight.github.io/pure-music-lovers-web/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/JanterInsight/pure-music-lovers-web)
[![Version](https://img.shields.io/badge/version-1.6.0-blue?style=for-the-badge)](https://github.com/JanterInsight/pure-music-lovers-web)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

Sitio web oficial de **Puros Melómanos** - Tu comunidad de amantes de la música.

---

## 🎵 Sobre el Proyecto

**Puros Melómanos** es una comunidad apasionada dedicada a reunir a amantes de la música de todos los géneros y edades. Nuestra misión es crear experiencias musicales inolvidables a través de eventos cuidadosamente organizados, donde la pasión por la música es el lenguaje universal que nos une.

Este sitio web permite:

- Descubrir eventos musicales increíbles con contadores regresivos
- Conectar con otros amantes de la música
- Vivir experiencias únicas en cada concierto
- Explorar galerías de fotos de eventos pasados con visor full-bleed
- Contactar con nosotros a través de formulario validado y enlaces directos

---

## 🚀 Características

- **Menú de Navegación**: Barra de menú fija con acceso a todas las secciones e icono de marca
- **Hero Section**: Presentación impactante con titular cinemático (`KineticText`), parallax sutil y botones de acción
- **Sobre Nosotros**: Diseño editorial con letra capital, pull-quote rotada, timeline de hitos animada y tarjetas de valores
- **Eventos**: Timeline inmersiva "Frecuencia Visual" con línea dorada que se llena al scroll, contadores tipo stage-light y badges de estado visual
- **Galería**: Visor full-bleed manual con film strip, lightbox accesible (focus trap, navegación teclado) y sin auto-play
- **Contáctanos**: Formulario con labels flotantes, hairline dorada al foco, validación en vivo, toast de éxito accesible y honeypot anti-spam
- **Footer**: Grid 3 columnas, corazón SVG con pulso dorado, hairline animada y nav semántico
- **Animaciones de scroll**: Aparición progresiva con `IntersectionObserver` (se cargan siempre, sin depender de `prefers-reduced-motion`)
- **Sistema de motion experimental**: Tokens expresivos (`--ease-expo`, `--ease-smooth`, duraciones escalonadas, glow ambiental)

---

## 📁 Estructura del Proyecto

```text
.
├── .clinerules          # AI assistant configuration and rules
├── .gitignore           # Git ignore rules for multiple platforms/languages
├── .editorconfig        # Editor configuration for consistency
├── .github/
│   └── workflows/
│       └── deploy.yml   # Despliegue automático a GitHub Pages
├── .VERSION             # Versión semántica del proyecto
├── LICENSE              # Project license (MIT)
├── README.md            # This file
├── docs/                # Documentation directory
│   └── CHANGELOG.md     # Detailed changelog (Keep a Changelog format)
├── code/                # Código fuente del proyecto (Frontend React + TypeScript + Vite)
│   ├── public/          # Archivos estáticos (galería, iconos, favicon)
│   ├── src/
│   │   ├── components/     # Componentes React (.tsx + .css colocalizado)
│   │   │   ├── About/       # Sección Sobre Nosotros
│   │   │   ├── Contact/     # Formulario e info de contacto
│   │   │   ├── ErrorBoundary/ # Error boundary con UI amigable
│   │   │   ├── Events/      # Timeline de eventos
│   │   │   ├── Footer/      # Pie de página
│   │   │   ├── Gallery/     # Galería con carrusel y lightbox
│   │   │   ├── Hero/        # Sección principal
│   │   │   ├── KineticText/ # Componente de texto animado por caracteres
│   │   │   ├── Navbar/      # Barra de navegación fija
│   │   │   └── Reveal/      # IntersectionObserver reveal animations
│   │   ├── hooks/          # Hooks personalizados
│   │   │   └── useScrollManager.ts  # Shared scroll manager + progress hook
│   │   ├── data/           # Datos de eventos (src/data/events.ts)
│   │   ├── utils/          # Utilidades (cálculos de tiempo)
│   │   ├── types.ts        # Tipos compartidos TypeScript
│   │   ├── App.tsx
│   │   ├── App.css         # Tokens de diseño globales + layout base
│   │   └── main.tsx        # Entry point con ErrorBoundary
│   ├── index.html
│   ├── tsconfig.json       # TypeScript strict mode + noUncheckedIndexedAccess
│   ├── package.json
│   └── vite.config.ts      # Vite + React + imagemin + base path
└── spec/                  # Especificaciones del proyecto (Spec-Driven Development)
    ├── README.md
    ├── constitution/
    │   ├── mission.md      # Propósito, objetivos, stack, principios
    │   └── roadmap.md      # Orden de implementación de features
    └── features/
        ├── 00-main/
        ├── 01-events/
        ├── 02-gallery/
        ├── 03-reviews/
        ├── 04-login/       # No implementar por ahora
        ├── 05-contact_us/
        └── 06-Footer/
```

---

## 🛠️ Tecnologías y Estándares

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.3+ | Biblioteca para interfaces de usuario |
| **TypeScript** | 5.9 (strict mode) | Lenguaje de programación tipado |
| **Vite** | 6.0+ | Bundler y herramienta de desarrollo |
| **IntersectionObserver API** | Nativo | Animaciones de aparición al scroll |

### Herramientas de Desarrollo

- **Git** — Control de versiones
- **npm** — Gestión de dependencias
- **Vitest** — Testing (configurado, sin tests actuales)
- **TypeScript** — `tsc --noEmit` para typecheck
- **vite-plugin-imagemin** — Optimización de imágenes (webp, avif, mozjpeg, optipng, svgo)

### Estándares de Código

- **TypeScript strict mode** con `noUncheckedIndexedAccess`
- **CSS Modules** (component-level) + Custom Properties globales en `App.css`
- **Spec-Driven Development**: specs en `spec/` antes de tocar código
- **Keep a Changelog** en español para `docs/CHANGELOG.md`
- **Semantic Versioning** (archivo `.VERSION`)
- **EditorConfig** para consistencia cross-editor

---

## 📋 Prerrequisitos

- **Node.js** (v18 o superior recomendado) — [Descargar](https://nodejs.org/)
- **npm** (viene con Node.js)
- **Git** (para control de versiones)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code recomendado con extensiones: TypeScript, CSS, ESLint)

---

## 🚦 Cómo Empezar

### 1. Clonar el Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/JanterInsight/pure-music-lovers-web.git
cd pure-music-lovers-web
```

### 2. Ver las Especificaciones

Todas las features y requisitos del proyecto están documentados en `spec/`:

```bash
# Leer la guía de spec-driven development
cat spec/README.md

# Ver las features planificadas
ls spec/features/
```

### 3. Desarrollo

El proyecto sigue un flujo de **Spec-Driven Development**:

1. Leer la especificación en `spec/features/NNN-nombre/spec.md`
2. Revisar el plan técnico en `spec/features/NNN-nombre/plan.md`
3. Seguir las tareas en `spec/features/NNN-nombre/tasks.md`
4. Implementar el código en `code/` (frontend)

#### Frontend (React + TypeScript + Vite)

```bash
# Entrar al directorio del frontend
cd code

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (HMR + CSS hot reload)
npm run dev

# Verificar tipos TypeScript
npm run typecheck

# Build para producción (typecheck + vite build)
npm run build

# Previsualizar build de producción
npm run preview
```

### 4. Generar Imágenes Responsivas (opcional)

```bash
# Optimiza y genera variantes webp/avif en public/
npm run images
```

---

## 🤝 Contribuir

Cuando contribuyas a este proyecto:

1. **Sigue los estándares** definidos en `.clinerules`
2. **Actualiza `docs/CHANGELOG.md`** para todos los cambios (formato Keep a Changelog en español)
3. **Escribe mensajes de commit en inglés** (conventional commits recomendado)
4. **Nunca commitees archivos sensibles** (.env, credenciales, claves)
5. **Mantén la documentación actualizada** (README, specs si cambian requisitos)
6. **Sigue el flujo de Spec-Driven Development**: spec → plan → tasks → código
7. **Ejecuta `npm run typecheck`** antes de commitear
8. **Prueba en móvil y desktop** (responsive first)

---

## 🚀 Despliegue

Este proyecto está configurado para desplegarse automáticamente en **GitHub Pages** mediante GitHub Actions.

### Cómo funciona

1. Cada vez que se hace push a la rama `master`, el workflow de GitHub Actions se ejecuta automáticamente (`.github/workflows/deploy.yml`).
2. El workflow instala dependencias, ejecuta `typecheck`, construye el proyecto (`npm run build`) y despliega el contenido de `code/dist/` en GitHub Pages.
3. El sitio estará disponible en: <https://janterinsight.github.io/pure-music-lovers-web/>

### Despliegue manual

También puedes disparar el despliegue manualmente:

1. Ve a la pestaña **Actions** del repositorio en GitHub
2. Selecciona **Deploy to GitHub Pages**
3. Haz clic en **Run workflow**

### Build local

```bash
cd code
npm run build
```

El build se genera en `code/dist/` y puedes previsualizarlo con:

```bash
npm run preview
```

---

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License** — ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🔄 Versionado

Este proyecto sigue [Semantic Versioning](https://semver.org/):

- **MAJOR** versión para cambios incompatibles en la API
- **MINOR** versión para nueva funcionalidad (compatible con versiones anteriores)
- **PATCH** versión para correcciones de bugs (compatible con versiones anteriores)

La versión actual se encuentra en el archivo `.VERSION` y en `code/package.json`.

---

## 📚 Recursos Adicionales

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [EditorConfig](https://editorconfig.org/)
- [Spec-Driven Development](spec/README.md)
- [React 18 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)

---

## 👥 Creadores

- [Janlier Rojas Santana](https://janterinsight.github.io/professional-portfolio/)

Hecho con ❤️ para nuestra comunidad de melómanos.

---

**Versión del Proyecto**: 1.6.0
**Última Actualización**: 2026-11-27