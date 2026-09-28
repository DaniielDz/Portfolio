import { defineCollection } from 'astro:content';
// `z` desde 'astro/zod' y no desde 'astro:content': el re-export desde
// content esta deprecado y arrastra el hint en cada uso del schema.
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Proyectos.
 *
 * Antes esto vivia hardcodeado en src/layout/Projects.jsx (11 objetos en dos
 * arrays). Ahora cada proyecto es un archivo .md: para sumar, editar o sacar
 * uno se toca solo ese archivo, sin compilar logica.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Texto corto que aparece bajo el titulo en la card. */
      summary: z.string().max(200),
      /** Etiquetas de stack para los chips. */
      stack: z.array(z.string()).default([]),
      /** Anio de entrega, para ordenar. */
      year: z.number(),
      /**
       * Grupo de la seccion. El orden del objeto define el orden en pagina:
       * primero lo mas diferencia, despues productos, al final los encargos.
       */
      category: z.enum(['arquitectura', 'producto', 'cliente']),
      /** Descate en la seccion. */
      featured: z.boolean().default(false),
      /** URL del repositorio. */
      codeUrl: z.url().optional(),
      /** Demo desplegada, si hay. */
      demoUrl: z.url().optional(),
      /**
       * Captura optimizada en build (WebP + AVIF + srcset). Opcional: los
       * proyectos de backend no tienen interfaz que capturar y se renderizan
       * como card de arquitectura.
       */
      screenshot: image().optional(),
      /** Metricas o highlights, se muestran como lista en la card. */
      highlights: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
