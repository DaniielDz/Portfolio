---
title: MyAI
summary: 'Interfaz de chat para crear personajes conversacionales propios, con respuestas en streaming y system prompts personalizados.'
stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel AI SDK']
year: 2025
category: producto
featured: false
codeUrl: https://github.com/DaniielDz/MyAI
highlights:
  - 'Streaming de respuestas token a token'
  - 'System prompts por personaje, editables desde la UI'
  - 'Next.js 16 y React 19'
---

Chat donde cada personaje es un **system prompt** editable desde la interfaz.

- Crear, editar y borrar personajes con avatar y prompt propio.
- **Streaming** de la respuesta con el SDK de Google Generative AI.
- Historial por personaje persistido en localStorage.

El streaming fue lo interesante de construir: hay que manejar el estado del
mensaje mientras llega a trozos, y que la UI se sienta responsiva sin esperar a
que termine la respuesta completa.
