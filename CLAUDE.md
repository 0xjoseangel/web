# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio personal de José Ángel Carretero Montes. Dark mode con estética terminal, integración con GitHub API y CV generado en LaTeX.

## Tech Stack

- **Astro**: Generador de sitios estáticos
- **Tailwind CSS v4**: Framework CSS utility-first con plugin Vite
- **TypeScript**: Configuración type-safe
- **marked**: Renderizado de Markdown (READMEs en modal)
- **LaTeX**: Generación del CV en PDF

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

Arquitectura basada en componentes con configuración centralizada en `src/config.ts`:

- **Components** (`src/components/`): Hero, About, Projects, GitHubRepos, Experience, Education, Header, Footer
- **Main Layout** (`src/pages/index.astro`): Layout single-page que importa todos los componentes
- **Configuration** (`src/config.ts`): Fuente única de contenido y personalización
- **GitHub API** (`src/lib/github.ts`): Fetch de repos y READMEs en build time
- **CV** (`cv/cv.tex`): CV en LaTeX, compilado a `public/cv.pdf`

### Key Architectural Decisions

1. **Single Configuration File**: Todo el contenido se gestiona desde `src/config.ts`
2. **Conditional Rendering**: Las secciones se ocultan si no hay datos en el config
3. **Component Independence**: Cada sección es un componente autocontenido
4. **Dark Mode**: Variables CSS en `global.css` para el tema oscuro
5. **GitHub Integration**: Repos se obtienen de la API en build time (SSG)
6. **CV en LaTeX**: Se compila en CI/CD y se sirve como PDF estático

## Important Implementation Details

- Tailwind CSS v4 con plugin Vite
- Dos fuentes: IBM Plex Mono (body) y JetBrains Mono (elementos terminal)
- Accent color: `#00ff9f` (verde terminal)
- Scroll reveal con IntersectionObserver
- Modal compartido para READMEs (Projects y GitHubRepos)
- Deploy en GitHub Pages con GitHub Actions

## Working with Components

1. Los componentes leen directamente de `siteConfig`
2. Usar clases Tailwind con variables CSS (`var(--color-*)`)
3. Mantener la estética dark mode / terminal
4. Iconos inline SVG (Tabler Icons)

## Configuration Structure

`src/config.ts` exporta `siteConfig` con:
- Basic info: name, title, description, accentColor
- Social links: email, linkedin, twitter, github (opcionales)
- github: { username, maxRepos }
- cv: { enabled, pdfPath }
- aboutMe: string
- skills: string[]
- projects: array of {name, description, link, skills}
- education: array of {school, degree, dateRange, achievements}
