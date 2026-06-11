# Portfolio — agufagiano.com

## Sobre el proyecto
Portfolio personal de Agustín Fagiano, diseñador gráfico y web (Vigo, España).
One-page en español: hero, proyectos (links a Behance), skills, experiencia, educación, contacto.

## Stack
- Astro 6 (sitio estático, sin frameworks de UI)
- CSS vanilla con design tokens en `src/layouts/base.astro` (sin Tailwind)
- TypeScript en los `<script>` inline
- Desplegado en Netlify via GitHub
- Dominio: https://agufagiano.com (configurado en `astro.config.mjs`)

## Estructura
- `src/layouts/base.astro` → layout único: head/SEO, nav, cursor custom, loader, tokens y todo el CSS global
- `src/pages/index.astro` → única página de contenido; los datos de proyectos están en el frontmatter
- `src/pages/404.astro` → página de error
- `public/og.jpg` → imagen Open Graph (1200×630)

## Estética y diseño
Estilo editorial cálido, tipo suizo.
- Paleta: fondo crema `#f4f1ec`, texto casi negro `#1a1814`, acento naranja `#c9622a` (tokens en `:root`)
- Tipografía: Stack Sans Notch (titulares, `--sans`) + Space Mono (cuerpo, `--mono`) via Google Fonts
  - Stack Sans Notch solo llega a peso 700 — no usar `font-weight: 800` (genera bold sintético)
- Detalles: cursor custom, loader con porcentaje, partículas en canvas en el hero, preview flotante de proyectos al hover, marquee de skills

## Convenciones
- Contenido y comentarios en español; nombres de clases CSS en inglés/español mezclado (respetar lo existente)
- Animaciones deben respetar `prefers-reduced-motion` (ya hay un bloque global en base.astro — no añadir animaciones fuera de él sin fallback)
- El cursor custom se desactiva en `pointer: coarse` y en móvil (<900px)

## Lo que NO tocar sin preguntar
- La paleta de colores y las dos tipografías
- Las animaciones de entrada del hero y el loader

## Convenciones de contacto
- Email oficial: agufagiano@gmail.com (usar en todos los mailto y textos)

## Tareas pendientes
- [ ] Autohospedar las imágenes de proyectos (hoy hotlinkeadas desde el CDN de Behance)
- [ ] Formulario de contacto (Netlify Forms, Formspree o Resend)
