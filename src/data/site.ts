/**
 * Datos centrales del sitio. Editar aca y el change se propaga a toda la
 * pagina: SEO, nav, footer y JSON-LD leen de esta unica fuente.
 */
export const SITE = {
  name: 'Daniel Díaz',
  shortName: 'DaniielDz',
  role: 'Backend Software Engineer',
  tagline: 'Sistemas backend, APIs y arquitectura escalable',
  url: 'https://daniieldz.dev',
  locale: 'es_AR',
  description:
    'Backend Software Engineer en Córdoba, Argentina. Diseño y desarrollo APIs REST, sistemas distribuidos y arquitecturas orientadas a eventos con Java, Spring Boot, Node.js y TypeScript.',
  email: 'daniieldz10@gmail.com',
  location: {
    city: 'Córdoba',
    country: 'Argentina',
    countryCode: 'AR',
  },
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/DaniielDz', icon: 'github' },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniiel-diazz/',
      icon: 'linkedin',
    },
    { name: 'Fiverr', href: 'https://www.fiverr.com/daniieldz', icon: 'fiverr' },
  ],
} as const;

export const NAV_LINKS = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
] as const;

/**
 * Stack agrupado por dominio.
 *
 * Antes era una lista plana de 15 items con icono, que ademas declaraba
 * Bootstrap y Sass mientras el trabajo real del repo es backend
 * distribuido. Esta version sigue la posicionacion del README de perfil de
 * GitHub y lo que los repos publicos sostienen.
 */
export const SKILL_GROUPS = [
  {
    title: 'Lenguajes',
    items: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: [
      'Spring Boot',
      'Spring Security',
      'Node.js',
      'NestJS',
      'Express',
      'REST APIs',
      'Webhooks',
      'JWT',
    ],
  },
  {
    title: 'Datos',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Prisma',
      'JPA / Hibernate',
      'Supabase',
    ],
  },
  {
    title: 'Arquitectura',
    items: [
      'Microservicios',
      'Event-Driven',
      'Clean Architecture',
      'System Design',
      'Colas / BullMQ',
      'S3 / MinIO',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Docker Compose', 'AWS', 'GitHub Actions', 'Linux', 'CI/CD'],
  },
  {
    title: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Radix UI'],
  },
  {
    title: 'Testing',
    items: ['JUnit', 'Jest', 'Supertest', 'Swagger / OpenAPI'],
  },
] as const;

export const EDUCATION = [
  {
    degree: 'Licenciatura en Ciencias de la Computación',
    institution: 'FaMAF — Universidad Nacional de Córdoba',
    period: '2025 — presente',
    detail:
      'Cursando la licenciatura en Ciencias de la Computación. Interés en sistemas distribuidos, bases de datos y arquitectura web.',
  },
  {
    degree: 'Técnico Programador',
    institution: 'IPET 379 — Alfredo Benoit Molet',
    period: '2015 — 2021',
    detail:
      'Egresé como Técnico Programador con formación en desarrollo de software, bases de datos y redes.',
  },
] as const;
