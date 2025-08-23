export type Project = {
  title: string
  description: string
  stack: string[]
  live?: string
  repo: string
}

export const projects: Project[] = [
  {
    title: 'Dashboard SaaS',
    description: 'Painel administrativo com React, Next, Tailwind. Auth JWT, charts e tabelas virtuais.',
    stack: ['React', 'Next.js', 'Tailwind', 'Node.js'],
    live: '#',
    repo: '#',
  },
  {
    title: 'API Catálogo Go',
    description: 'API REST em Golang com Gin + GORM, testes, Swagger e Docker Compose.',
    stack: ['Golang', 'Gin', 'GORM', 'Postgres', 'Docker'],
    repo: '#',
  },
  {
    title: 'App Mobile RN',
    description: 'Aplicativo React Native (Expo) consumindo API, offline-first e navegação aninhada.',
    stack: ['React Native', 'Expo', 'TypeScript'],
    repo: '#',
  },
]
