---
title: DuoRating
summary: 'App móvil para parejas que califican películas y series juntos, comparten una lista de pendientes y llevan historial de lo que vieron. Publicada en Google Play.'
stack: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Supabase', 'TMDB API']
year: 2026
category: movil
featured: true
codeUrl: https://github.com/DaniielDz/duorating
highlights:
  - 'Publicada en Google Play vía EAS Build'
  - 'Vinculación de pareja por código, sin compartir credenciales'
  - 'Integración con TMDB para búsqueda de contenido'
  - 'Supabase para auth y base de datos'
---

Un problema simple con una detalle interesante: dos personas tienen que calificar
lo mismo **por separado** y después ver el promedio, sin que una vea lo que la
otra puso hasta que ambos califican.

- Cada usuario califica de forma independiente, de 1 a 10.
- La **vinculación por código** conecta las dos cuentas sin que compartan
  usuario ni contraseña.
- Lista de pendientes compartida e historial cronológico.
- Build y publicación con EAS Build.

Es lo primero que hice **fuera del navegador**, y obliga a rethinkar todo: no
hay DOM, hay listas virtualizadas, y la app tiene que arrancar rápido en un
celular de gama media.
