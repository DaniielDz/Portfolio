// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://daniieldz.dev',
  trailingSlash: 'never',
  integrations: [react(), sitemap()],
  build: {
    // Emite assets optimizados sin inlinear: mantiene el HTML chico y deja
    // que el browser cachee las imagenes por hash.
    assets: '_assets',
  },
  image: {
    // Defaults con overrides minimos. Las capturas se generan en WebP + AVIF
    // con srcset, asi que el cliente elige formato y tamano.
    responsiveStyles: true,
  },
  // Las fuentes van self-hosteadas a mano en public/fonts/ (ver
  // scripts/fetch-fonts.mjs). Se evita el CDN de Google Fonts, que ademas
  // filtra la IP de cada visitante, y se evita una dependencia de red en
  // cada build.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  devToolbar: { enabled: false },
});
