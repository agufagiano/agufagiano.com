# Mi Portfolio — agufagiano

## Stack
- Astro + Tailwind CSS
- Desplegado en Netlify via GitHub

## Estructura
- src/data/ → datos de proyectos
- src/components/ → componentes separados por responsabilidad
- work/[slug].astro → páginas dinámicas de proyectos

## Convenciones
- TypeScript interfaces para todas las estructuras de datos
- Nombres de clases en inglés, comentarios en español
- Colores: fondo near-black, texto off-white, acento #c8ff00
- Tipografía: DM Mono + Syne

## Lo que NO tocar
- El grid layout principal de index.astro
- Las animaciones de scroll reveal ya configuradas

El resultado práctico
Sin CLAUDE.md, cada sesión tienes que explicarle el contexto. Con él, abres el terminal y puedes escribir directamente:
> Añade un nuevo proyecto al portfolio
...y ya sabe el stack, la estructura, los colores y las convenciones sin que se lo cuentes.

Para tu portfolio en Astro es especialmente útil porque tienes decisiones de diseño muy específicas (la paleta, las fuentes, el grid suizo) que no quieres tener que repetirle cada vez. ¿Quieres que te ayude a escribir uno?SiApr 11Basándome en lo que sé de tu proyecto, aquí tienes un CLAUDE.md listo para usar:
markdown# Portfolio — agufagiano

## Sobre el proyecto
Portfolio personal y de estudio freelance de Gus Fagiano (agufagiano).
Diseño web, branding e identidad visual.
Contacto: hola@gusfagiano.com

## Stack
- Astro (páginas estáticas + rutas dinámicas)
- Tailwind CSS
- TypeScript
- Desplegado en Netlify via GitHub

## Estructura del proyecto
- src/data/        → datos de proyectos (fuente de verdad)
- src/components/  → componentes separados por responsabilidad
- src/pages/work/[slug].astro → páginas dinámicas de proyectos con getStaticPaths()

## Estética y diseño
Estilo Swiss/editorial frío y rígido.
- Grid estricto, tipografía grande en mayúsculas
- Paleta: near-black fondo, off-white texto, acento lima #c8ff00
- Tipografía: DM Mono + Syne
- Sin decoraciones innecesarias, todo tiene una razón en el grid

## Convenciones de código
- TypeScript interfaces para todas las estructuras de datos
- Componentes en inglés, comentarios en español
- Datos siempre en src/data/, nunca hardcodeados en componentes
- Scroll reveal ya configurado — no duplicar animaciones

## Lo que NO tocar sin preguntar
- El sistema de grid principal
- Las animaciones de scroll reveal existentes
- La paleta de colores (no añadir colores fuera del sistema)

## Tareas pendientes
- [ ] Conectar formulario de contacto (Netlify Forms, Formspree o Resend)