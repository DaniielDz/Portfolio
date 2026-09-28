# daniieldz.dev

Portfolio personal. Static site generado con [Astro](https://astro.build).

## Comandos

```bash
npm install
npm run dev        # servidor de desarrollo en :4321
npm run build      # genera dist/
npm run preview    # sirve dist/ para verificar el build
npm run check      # astro check: tipos y errores de plantilla
npm run og         # regenera public/og-image.png y apple-touch-icon.png
npm run weight     # auditoria de peso de primera carga
npm run fonts      # re-descarga los woff2 de public/fonts/
```

## Estructura

```
src/
  content/
    projects/      un .md por proyecto (frontmatter = datos, cuerpo = detalle)
  data/
    site.ts        nombre, rol, links, skills, educacion, metricas
  components/      un .astro por seccion, con su .module.css
  content.config.ts  schema de la coleccion de proyectos
  layouts/
    BaseLayout.astro  <head> completo: SEO, Open Graph, JSON-LD, fuentes
  pages/
    index.astro    composicion de la unica pagina
  styles/
    global.css     design tokens, reset, utilidades
    fonts.css      @font-face de las fuentes self-hosteadas
public/
  fonts/           woff2 variables (latin), servidos desde el mismo origen
  cv/              PDF del CV
scripts/           utilidades de mantenimiento, no forman parte del sitio
```

## Editar contenido

Casi todo el contenido vive fuera del codigo:

- **Proyectos**: un archivo en `src/content/projects/`. Para sumar uno, copiá
  cualquiera existente y cambiale el frontmatter. El cuerpo en markdown se usa
  como detalle; si no lo necesitás, puede quedar vacío.
- **Skills, educación, links, rol, email**: `src/data/site.ts`.
- **Redes, dominio, imagen OG**: `src/data/site.ts` y `astro.config.mjs`.

## Imágenes

Las capturas van en `src/assets/projects/` y se referencian desde el
frontmatter. El componente `Image` las recorta y recodifica en build a WebP y
AVIF con `srcset`, así que **no hace falta optimizar nada a mano**:_subir la
captura original y listo. Evitá subirlas a `public/`, que se sirve tal cual.

## Decisiones que conviene no deshacer

- **Sin React en el sitio.** La integración está activa en
  `astro.config.mjs` por si hace falta un island, pero hoy nada la usa: un solo
  `client:*` arrastra ~225 KB de runtime de react-dom, y el menú móvil son 30
  líneas de script nativo.
- **Fuentes self-hosteadas**, no el CDN de Google Fonts: no depender de la red
  en cada build y no filtrar la IP de los visitantes. Cada familia es un
  woff2 variable con todo el eje de pesos.
- **Solo el subset `latin`** de las fuentes. Todo el español entra en Latin-1;
  sumar `latin-ext` costaba 58 KB sin aportar un glifo.
- **Fondo del hero en CSS**, no en una imagen. La foto de stock anterior pesaba
  137 KB y no tenía licencia atribuible.
- **`svh` en vez de `vh`** en el hero, para que la barra de direcciones del
  móvil no desplace el contenido.

## Pendientes

- [ ] Configurar el DNS de `daniieldz.dev` (no resuelve todavía).
- [ ] `daniieldz.online` expiró: el proyecto MenuYa apunta a
      `menuya.netlify.app`. El README del perfil de GitHub todavía linkea el
      dominio muerto.
- [ ] La landing de `menuya.netlify.app` tiene lorem ipsum en el hero.
- [ ] Capturas para PixelForge, DuoRating, MyAI, Aurelia CRM y E-commerce API
      (hoy se muestran sin imagen porque no hay captura).
- [ ] Si existen repos públicos de Spring Boot / AWS, agregarlos como
      proyectos: el perfil de GitHub declara ese stack y los repos actuales
      no lo respaldan.
