# Puros Melómanos

Sitio web oficial de **Puros Melómanos** - Tu comunidad de amantes de la música.

## 🎵 Sobre el Proyecto

**Puros Melómanos** es una comunidad apasionada dedicada a reunir a amantes de la música de todos los géneros y edades. Nuestra misión es crear experiencias musicales inolvidables a través de eventos cuidadosamente organizados, donde la pasión por la música es el lenguaje universal que nos une.

Este sitio web permite:
- Descubrir eventos musicales increíbles
- Conectar con otros amantes de la música
- Vivir experiencias únicas en cada concierto
- Explorar galerías de fotos de eventos pasados
- Leer reseñas de la comunidad
- Contactar con nosotros

## 🚀 Características

- **Menú de Navegación**: Barra de menú fija con acceso a todas las secciones
- **Hero Section**: Presentación impactante de la comunidad
- **Sobre Nosotros**: Información sobre la misión y visión de Puros Melómanos
- **Eventos**: Contadores regresivos con estados (espera, en curso, finalizado)
- **Galería**: Galería de imágenes de eventos con zoom y navegación
- **Reseñas**: Sección de reseñas de la comunidad
- **Contáctanos**: Formulario de contacto e información de contacto
- **Footer**: Enlaces rápidos y información de copyright

## 📁 Estructura del Proyecto

```
.
├── .clinerules          # AI assistant configuration and rules
├── .gitignore           # Git ignore rules for multiple platforms/languages
├── .editorconfig        # Editor configuration for consistency
├── LICENSE              # Project license (MIT)
├── README.md            # This file
├── CHANGELOG.md         # Project changelog
├── docs/                # Documentation directory
│   └── CHANGELOG.md     # Detailed changelog
├── code/                # Código fuente del proyecto (Frontend React + Vite)
│   ├── public/          # Archivos públicos (galería, favicon, etc.)
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── gallery/             # Imágenes de eventos
└── spec/                # Especificaciones del proyecto
    ├── README.md
    ├── constitution/
    │   ├── mission.md
    │   └── roadmap.md
    └── features/
        ├── 00-main/
        ├── 01-events/
        ├── 02-gallery/
        ├── 03-reviews/
        ├── 04-login/
        ├── 05-contact_us/
        └── 06-Footer/
```

## 🛠️ Tecnologías y Estándares

### Frontend
- **React 18+**: Biblioteca para interfaces de usuario
- **Vite**: Bundler y herramienta de desarrollo
- **JavaScript (ES6+)**: Lenguaje de programación

### Herramientas
- **Git**: Control de versiones
- **npm**: Gestión de dependencias
- **Documentación**: Markdown-based siguiendo Keep a Changelog
- **Desarrollo Dirigido por Especificación**: Flujo de trabajo basado en spec/

## 📋 Prerrequisitos

- **Node.js** (v16 o superior) - [Descargar](https://nodejs.org/)
- **npm** (viene con Node.js)
- **Git** (para control de versiones)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code recomendado)

## 🚦 Cómo Empezar

### 1. Clonar o Copiar el Repositorio

```bash
# Clonar el repositorio
git clone <tu-repo-url> puros-melomanos
cd puros-melomanos
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

#### Frontend (React + Vite)

```bash
# Instalar dependencias
cd code
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 📝 Configuración

### `.clinerules`
Define reglas y comportamientos para desarrollo asistido por IA.

### `.gitignore`
Reglas de ignorado para Git cubriendo múltiples plataformas y lenguajes.

### `.editorconfig`
Mantiene estilos de codificación consistentes across diferentes editores.

## 🤝 Contribuir

Cuando contribuyas a este proyecto:

1. Sigue los estándares de código definidos en `.clinerules`
2. Actualiza `CHANGELOG.md` para todos los cambios
3. Escribe mensajes de commit en inglés
4. Nunca commitees archivos sensibles (.env, credenciales)
5. Mantén la documentación actualizada
6. Sigue el flujo de Spec-Driven Development

## 📄 Licencia

Este proyecto está licenciado bajo la MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔄 Versionado

Este proyecto sigue [Semantic Versioning](https://semver.org/):
- **MAJOR** versión para cambios incompatibles en la API
- **MINOR** versión para nueva funcionalidad (compatible con versiones anteriores)
- **PATCH** versión para correcciones de bugs (compatible con versiones anteriores)

## 📚 Recursos Adicionales

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [EditorConfig](https://editorconfig.org/)
- [Spec-Driven Development](spec/README.md)

## 👥 Creadores

- Janlier Rojas Santana
- Alejandro Izada Diaz
- Andrés Alejandro Morales

Hecho con ❤️ para nuestra comunidad de melómanos.

---

**Versión del Proyecto**: 1.0.0  
**Última Actualización**: 2026-07-25