---
title: Aurelia CRM
summary: 'Sistema de gestión de relaciones con clientes en monorepo: backend y frontend juntos, para centralizar el seguimiento de leads y el contacto por múltiples canales.'
stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'pnpm']
year: 2026
category: arquitectura
featured: false
codeUrl: https://github.com/DaniielDz/Aurelia-CRM
highlights:
  - 'Monorepo con pnpm workspaces, front y back en un solo repo'
  - 'PostgreSQL y Redis orquestados con Docker Compose'
  - 'Levantado completo con un solo comando'
---

CRM para centralizar el seguimiento de leads y el contacto por varios canales.

- **Monorepo** con pnpm workspaces: backend y frontend conviven en un solo
  repositorio, lo que evita el clásico problema de las versiones desalineadas.
- PostgreSQL y Redis en Docker Compose, con datos de ejemplo precargados.
- Un comando levanta la aplicación completa.

El valor de un monorepo aparece cuando el front y el back comparten los tipos:
un cambio en el contrato de la API se rompe en el build, no en producción.
