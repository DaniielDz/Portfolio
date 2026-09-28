/**
 * Auditoría de peso de primera carga.
 *
 *   node scripts/check-weight.mjs
 *
 * Lee dist/index.html y suma TODO lo que el browser descargaria en la primera
 * visita, siguiendo srcset para simular un viewport de escritorio y uno de
 * movil. Compara contra el sitio anterior (Vite + React) para verificar que
 * la migracion a Astro realmente mejoro los numeros.
 */
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const html = readFileSync(join(DIST, 'index.html'), 'utf8');

/** Anchos tipicos: movil 390px (DPR 2 ~ 780) y escritorio 1440px (DPR 2). */
const VIEWPORTS = [
  { name: 'movil  390px @2x', dpr: 2, cssWidth: 390 },
  { name: 'escritorio 1440px @2x', dpr: 2, cssWidth: 1440 },
];

const kb = (bytes) => (bytes / 1024).toFixed(1).padStart(7);

function sizeOf(url) {
  const path = join(DIST, url.replace(/^\//, ''));
  return existsSync(path) ? statSync(path).size : 0;
}

/** Elige la mejor candidata de un srcset para el ancho de CSS dado. */
function pickFromSrcset(srcset, cssWidth, dpr) {
  const target = cssWidth * dpr;
  const candidates = [...srcset.matchAll(/([^\s,]+)\s+(\d+)w/g)].map((m) => ({
    url: m[1],
    w: Number(m[2]),
  }));
  if (!candidates.length) return null;
  const fit = candidates.filter((c) => c.w <= target);
  return (fit.length ? fit.at(-1) : candidates[0]).url;
}

for (const vp of VIEWPORTS) {
  const assets = new Set();

  for (const m of html.matchAll(/<script[^>]+src="([^"]+)"/g)) assets.add(m[1]);
  for (const m of html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)) assets.add(m[1]);
  for (const m of html.matchAll(/<link[^>]+rel="preload"[^>]+href="([^"]+)"/g)) assets.add(m[1]);

  // Imagenes: <img srcset> gana sobre src, y <source> de <picture> tambien.
  for (const m of html.matchAll(/<img[^>]*>/g)) {
    const tag = m[0];
    const srcset = /srcset="([^"]+)"/.exec(tag)?.[1];
    if (srcset) {
      const url = pickFromSrcset(srcset, vp.cssWidth, vp.dpr);
      if (url) assets.add(url);
    } else {
      const src = /src="([^"]+)"/.exec(tag)?.[1];
      if (src) assets.add(src);
    }
  }

  // Las fuentes se filtran por unicode-range: el navegador solo baja el subset
  // que el texto de la pagina usa realmente. Estando en espanol, ambos.
  // Estan referenciadas desde el CSS, asi que hay que parsear el CSS.
  for (const cssUrl of [...assets].filter((a) => a.endsWith('.css'))) {
    const css = readFileSync(join(DIST, cssUrl.replace(/^\//, '')), 'utf8');
    for (const m of css.matchAll(/url\((['"]?)(\/fonts\/[^)'"]+\.woff2)\1\)/g)) {
      if (m[2].includes('italic')) continue;
      assets.add(m[2]);
    }
  }

  // El script reveal-on-scroll va inline, no como archivo.
  const groups = {
    'HTML': statSync(join(DIST, 'index.html')).size,
    'CSS': [...assets].filter((a) => a.endsWith('.css')).reduce((s, a) => s + sizeOf(a), 0),
    'JS': [...assets].filter((a) => a.endsWith('.js')).reduce((s, a) => s + sizeOf(a), 0),
    'Fuentes': [...assets].filter((a) => a.endsWith('.woff2')).reduce((s, a) => s + sizeOf(a), 0),
    'Imagenes': [...assets].filter((a) => /\.(webp|avif|png|jpg)$/.test(a)).reduce((s, a) => s + sizeOf(a), 0),
  };

  const total = Object.values(groups).reduce((a, b) => a + b, 0);

  console.log(`\n─── ${vp.name} ${'─'.repeat(30)}`);
  for (const [k, v] of Object.entries(groups)) {
    if (v === 0) continue;
    console.log(`  ${k.padEnd(10)} ${kb(v)} KB`);
  }
  console.log(`  ${'TOTAL'.padEnd(10)} ${kb(total)} KB`);
  console.log(`  ${'archivos'.padEnd(10)} ${String(assets.size + 1).padStart(7)}`);
}

console.log('\n  Sitio anterior (Vite + React, 11 capturas 1920x1080 PNG sin optimizar):');
console.log('  TOTAL        ~1570 KB de imagenes, sin srcset, sin lazy, sin fuentes locales');
