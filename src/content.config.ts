import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección de proyectos.
 *
 * La carpeta `src/content/proyectos/` es a la vez un vault de Obsidian: cada
 * proyecto es una carpeta con su `index.md` y sus imágenes al lado. Por eso el
 * loader ignora `.obsidian/` y cualquier archivo que empiece con `_`
 * (plantillas de Obsidian).
 *
 * El id se genera a partir del nombre de la carpeta, normalizado a slug, para
 * que "Cosqui Rock" publique en /proyecto/cosqui-rock/.
 */
const slugify = (valor: string) =>
  valor
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const proyectos = defineCollection({
  loader: glob({
    base: './src/content/proyectos',
    pattern: ['**/index.md', '!**/_*', '!**/_*/**', '!.obsidian/**'],
    generateId: ({ entry }) => slugify(entry.replace(/\/index\.md$/, '')),
  }),
  schema: z.object({
    title: z.string(),
    line: z.string(),
    did: z.array(z.string()).default([]),
    // En Obsidian `year` se edita como lista; aceptamos también un valor suelto.
    year: z
      .union([z.string(), z.number(), z.array(z.union([z.string(), z.number()]))])
      .transform((valor) => (Array.isArray(valor) ? valor : [valor]).map(String)),
    role: z.string(),
    // Ruta relativa al index.md, ej. "./cover.webp". Se resuelve en tiempo de
    // render contra el glob de imágenes, así una imagen todavía no exportada
    // no rompe el build.
    cover: z.string().optional(),
    client: z.string().optional(),
    tools: z.array(z.string()).default([]),
    ai: z.boolean().default(false),
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

export const collections = { proyectos };
