---
title: E-commerce API
summary: 'API REST completa para plataforma de e-commerce, con autenticación JWT y roles, carrito, órdenes y pagos integrados con MercadoPago.'
stack: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Zod', 'Jest', 'MercadoPago']
year: 2025
category: arquitectura
featured: false
codeUrl: https://github.com/DaniielDz/ecommerce-api-express
highlights:
  - 'Auth JWT con roles ADMIN y CUSTOMER'
  - 'Webhooks de MercadoPago para confirmar pagos'
  - 'Tests unitarios y de integración con Jest y Supertest'
  - 'Validación de datos en cada capa con Zod'
---

El proyecto donde más aprendí a **cerrar el círculo** de una API: no queda
endpoint suelto.

- Login y registro con JWT, con separación de roles.
- CRUD de productos con categorías, carrito por usuario y gestión de órdenes.
- **Webhooks de MercadoPago**: el pago se confirma desde el proveedor, no
  confiando en lo que devuelve el navegador del cliente.
- PostgreSQL con Prisma, y validación con Zod en el borde.

Lo interesante es el manejo de errores: los webhooks llegan duplicados, fuera de
orden y a las 3 AM. El código tiene que ser idempotente aunque la base no lo
sea.
