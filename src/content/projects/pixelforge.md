---
title: PixelForge
summary: 'Plataforma distribuida de procesamiento de imágenes. Desacopla la ingesta del procesamiento con microservicios y colas, para que la API responda rápido aunque el trabajo pesado sea lento.'
stack: ['Node.js', 'TypeScript', 'BullMQ', 'Redis', 'MinIO', 'PostgreSQL', 'Prisma', 'Docker']
year: 2025
category: arquitectura
featured: true
codeUrl: https://github.com/DaniielDz/PixelForge
highlights:
  - 'Microservicios con API y Worker separados, comunicados por cola'
  - 'Patrón Producer-Consumer con BullMQ sobre Redis'
  - 'Objetos S3-compatible con MinIO y Postgres + Prisma'
  - 'Validación con Zod y orquestación con Docker Compose'
---

El problema que resuelve: procesar una imagen es lento y caro en CPU, pero
hacerlo *dentro* del request hace que la API se bloquee. La solución es separar
las dos cosas.

- La **API** acepta el archivo y encola el trabajo: responde en milisegundos.
- El **Worker** consume la cola, procesa con Sharp y escribe el resultado.

Si el Worker se cae, la API sigue funcionando y el trabajo queda en la cola
para cuando vuelva. Eso es exactamente lo que un diseño **orientado a
eventos** compra, y es el tipo de problema que me interesa: no hacer la cosa
más rápida, sino la que degrada bien.
