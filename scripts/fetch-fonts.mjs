/**
 * Descarga las fuentes variables (woff2) desde Google Fonts una sola vez.
 *
 *   node scripts/fetch-fonts.mjs
 *
 * Se self-hostean a proposito, por dos razones:
 *  1. Pedir la hoja de estilos a fonts.googleapis.com filtra la IP de cada
 *     visitante, y desde la UE eso ya es motivo de consentimiento.
 *  2. Depender de la red en cada build hace que el deploy falle por causas
 *     que no tienen que ver con el codigo.
 *
 * Se piden los ejes variables (wght@100..900), asi que cada familia es un solo
 * archivo para todos los pesos en vez de uno por peso.
 *
 * Los archivos quedan en public/fonts/ y son parte del repo: volver a correr
 * este script solo hace falta para actualizar la version de la fuente.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const FAMILIES = [
  { name: 'Work Sans', slug: 'work-sans', query: 'Work+Sans:ital,wght@0,100..900;1,100..900' },
  { name: 'Oswald', slug: 'oswald', query: 'Oswald:wght@200..700' },
];

const OUT = 'public/fonts';

/**
 * Solo el subset `latin` (U+0000-00FF + puntuacion general).
 *
 * La version anterior descargaba tambien `latin-ext`, que sonaba a precaution
 * pero costaba 58 KB de fuente: todos los caracteres del espanol estan en el
 * rango Latin-1 basico, que ya incluye n-tilde, vocales acentuadas, inverted
 * exclamation y question.
 *
 * Si alguna vez hace falta un caracteres fuera de Latin-1 (polaco, hungaro,
 * turco), agregar 'latin-ext' a este Set y volver a correr el script.
 */
const KEEP_SUBSETS = new Set(['latin']);

mkdirSync(OUT, { recursive: true });

for (const family of FAMILIES) {
  const url = `https://fonts.googleapis.com/css2?family=${family.query}&display=swap`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${family.name}: HTTP ${res.status}`);

  const css = await res.text();

  // Cada bloque @font-face trae el subset en un comentario previo.
  // Se parsean en pares: comentario de subset + bloque.
  const blocks = css.split('/*').slice(1);
  let downloaded = 0;

  for (const block of blocks) {
    const subset = block.slice(0, block.indexOf('*/')).trim();
    if (!KEEP_SUBSETS.has(subset)) continue;

    const style = /font-style:\s*(\w+)/.exec(block)?.[1] ?? 'normal';
    const weight = /font-weight:\s*([\d\s]+);/.exec(block)?.[1]?.trim() ?? '400';
    const href = /url\((https:[^)]+\.woff2)\)/.exec(block)?.[1];
    const range = /unicode-range:\s*([^;]+);/.exec(block)?.[1]?.trim();
    if (!href) continue;

    const filename = `${family.slug}-${style}-${subset}.woff2`;
    const bin = Buffer.from(await (await fetch(href, { headers: { 'User-Agent': UA } })).arrayBuffer());
    writeFileSync(join(OUT, filename), bin);
    downloaded++;

    console.log(`  ${filename}  ${(bin.length / 1024).toFixed(1)} KB  weight ${weight}`);

    // Se guarda el unicode-range por subset para rearmar el @font-face.
    const metaFile = join(OUT, `${family.slug}-${style}-${subset}.range`);
    writeFileSync(metaFile, range ?? '');
  }

  console.log(`${family.name}: ${downloaded} archivo(s) en ${OUT}/\n`);
}

console.log('Listo. Los @font-face estan en src/styles/fonts.css');
