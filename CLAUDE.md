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
- `src/layouts/base.astro` → layout único: head/SEO, nav, footer, cursor custom, loader, tokens y todo el CSS global (incluye scroll reveals y año del footer)
- `src/pages/index.astro` → página principal; los datos de proyectos están en el frontmatter
- `src/pages/proyecto/[slug].astro` → página de case study, generada desde la content collection
- `public/_redirects` → 301 de Netlify; `/proyectos/dr-matias-crespo` → `/proyecto/crespo/`
- `src/pages/404.astro` → página de error
- `public/og.jpg` → imagen Open Graph (1200×630)
- `src/pages/prodar.astro` → landing standalone de PRODAR (HTML propio, tokens propios); se publica en `/prodar`. Pendiente de pasar a la content collection

## Proyectos (content collection)
Los proyectos viven en `src/content/proyectos/`, que también es un vault de Obsidian.
- Un archivo `index.md` por carpeta de proyecto, con sus imágenes al lado.
- Markdown estándar, sin wikilinks. Imágenes con rutas relativas: `![alt](./cover.webp)`.
- Ignorar la carpeta `.obsidian/` y cualquier archivo que empiece con `_` (plantillas).
- No publicar los que tengan `draft: true`.
- Frontmatter: title, line, did (array), year, role, cover, tools (array), ai (boolean), order, draft.
- Cuerpo: tres bloques (Diagnosis / Decision / Result) más Gallery.
- Contenido en inglés. No reescribir ni "mejorar" el texto: renderizarlo como está.

### Cómo está implementado
- `src/content.config.ts` → collection `proyectos` con el glob loader; el id se
  genera slugificando el nombre de la carpeta ("Cosqui Rock" → `cosqui-rock`).
- `src/pages/proyecto/[slug].astro` → título, línea, tags de `did`, portada, los
  tres bloques + galería (render directo del markdown), ficha y siguiente proyecto.
- `src/pages/index.astro` → la lista de la home mezcla la collection con
  `proyectosLegacy` (los que todavía enlazan a Behance) y ordena las dos fuentes
  juntas por `order`, así un proyecto del vault puede quedar entre dos de Behance.
  Los legacy llevan su `order` en el propio objeto; los del vault, en el frontmatter.
  Mantener la numeración sin huecos: el `num` 01, 02… se recalcula sobre la lista final.
- Las portadas se resuelven con `import.meta.glob` en vez del helper `image()` del
  schema: así un `cover:` que apunta a una imagen todavía no exportada deja la
  ficha sin portada en lugar de romper el build.
- **Ojo:** las imágenes del *cuerpo* del markdown sí son obligatorias. Astro compila
  todos los `.md` de la collection antes de filtrar drafts, así que un
  `![alt](./01-diagnosis.webp)` que no existe rompe el build aunque el proyecto
  esté en `draft: true`.

## Case studies
- Los case studies ya no son páginas `.astro` a mano: salen de la content collection.
- Estructura visual: `cs-hero` (volver, título, línea, tags de `did`, portada) + el
  cuerpo del markdown (Diagnostic / Decision / Result / Gallery) + ficha + siguiente proyecto.
- Clases `cs-*` y `pr-*` en base.astro. Las `cs-*` son las heredadas del case study
  hecho a mano y se siguen usando en la cabecera y la ficha.
- Las imágenes del cuerpo se revelan con `.img-reveal` (clip-path + desescalado), que
  se envuelve en runtime porque salen del markdown. Ver el bloque IMAGE REVEAL.

## Estética y diseño
Estilo editorial cálido, tipo suizo.
- Paleta: fondo `#fcfcfc`, texto casi negro `#1a1814`, acento azul `#003aff` (tokens en `:root`)
- Tipografía: Stack Sans Notch (titulares, `--sans`) + Space Mono (cuerpo, `--mono`) via Google Fonts
  - Stack Sans Notch solo llega a peso 700 — no usar `font-weight: 800` (genera bold sintético)
- Detalles: cursor custom, loader con porcentaje, partículas en canvas en el hero, preview flotante de proyectos al hover, marquee de skills
- Proyectos en móvil (≤900px): miniatura `.p-thumb` con `<picture>` — en desktop el `<source>` sirve un pixel transparente para no descargar las imágenes de Behance (el preview flotante ya las carga al hover)

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
- [ ] Migrar los proyectos de `proyectosLegacy` (index.astro) al vault: hoy enlazan a Behance y hotlinkean sus imágenes
- [ ] PRODAR: pasar la landing a un case study en el vault
- [ ] Formulario de contacto (Netlify Forms, Formspree o Resend)
