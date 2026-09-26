/**
 * Genera la imagen Open Graph y el apple-touch-icon.
 *
 *   node scripts/generate-og.mjs
 *
 * La imagen OG es la que se ve al compartir el link en WhatsApp, LinkedIn o
 * Twitter. Sin ella, esas plataformas muestran un link pelado.
 *
 * Corre como `prebuild`, asi que el texto nunca queda desactualizado respecto
 * de src/data/site.ts.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { SITE } from '../src/data/site.ts';

const W = 1200;
const H = 630;
const BG = '#14181b';
const TEXT = '#f2f5f6';
const MUTED = '#9aa5ab';
const ACCENT = '#f43f3f';

/** SVG -> PNG. sharp renderiza texto con la librsvg del sistema. */
function card({ role, tagline }) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b2024"/>
      <stop offset="100%" stop-color="${BG}"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="12%" r="62%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <rect x="0" y="0" width="${W}" height="6" fill="${ACCENT}"/>

  <text x="80" y="150" font-family="DejaVu Sans, sans-serif" font-size="30"
        font-weight="700" letter-spacing="7" fill="${ACCENT}">DANIEL DÍAZ</text>

  <text x="80" y="245" font-family="DejaVu Sans, sans-serif" font-size="62"
        font-weight="700" fill="${TEXT}">${esc(role)}</text>

  <text x="80" y="330" font-family="DejaVu Sans, sans-serif" font-size="34"
        fill="${MUTED}">${esc(tagline)}</text>

  <rect x="80" y="392" width="110" height="4" rx="2" fill="${ACCENT}"/>

  <text x="80" y="480" font-family="DejaVu Sans, sans-serif" font-size="26"
        fill="${MUTED}">Córdoba, Argentina</text>
  <text x="80" y="522" font-family="DejaVu Sans, sans-serif" font-size="26"
        fill="${MUTED}">github.com/DaniielDz</text>
  <text x="80" y="564" font-family="DejaVu Sans, sans-serif" font-size="26"
        fill="${MUTED}">daniieldz.dev</text>
</svg>`);
}

mkdirSync('public', { recursive: true });

await sharp(card({
  role: SITE.role,
  tagline: SITE.tagline,
}))
  .png({ quality: 92, compressionLevel: 9 })
  .toFile('public/og-image.png');

// apple-touch-icon: iOS no lee SVG, necesita PNG de 180x180.
await sharp(card({
  role: 'Fullstack',
  tagline: SITE.shortName,
}))
  .resize(180, 180, { fit: 'cover' })
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('OK: public/og-image.png (1200x630), public/apple-touch-icon.png (180x180)');
