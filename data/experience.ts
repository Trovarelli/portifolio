export type Experience = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Backend Engineer | Golang Developer',
    company: 'DOMTEC SISTEMAS',
    period: '2022 — Presente',
    bullets: [
      'Engenharia de sistema de mensageria robusto integrado à API oficial do WhatsApp, utilizando Node.js e filas de processamento para garantir entregas em larga escala.',
      'Otimização de consultas críticas em PostgreSQL, reduzindo tempos de resposta de rotinas intensivas e melhorando drasticamente a performance de endpoints com alto volume.',
      'Desenvolvimento e evolução de microsserviços e APIs escaláveis utilizando Golang e Node.js para operações corporativas críticas.',
      'Implementação de sistemas de segurança avançados (autenticação JWT e RBAC) para controle de acesso granular em ambiente B2B.',
      'Desenvolvimento de dashboards administrativos de alta performance com React/Next.js, focados em visualização de dados complexos.',
    ],
  },
  {
    role: 'Desenvolvedor Front-end',
    company: 'SUTHUB',
    period: '2021 — 2022',
    bullets: [
      'Desenvolvimento de plataforma de seguros utilizando Vue.js/Nuxt.js + TypeScript, implementando funcionalidades de cotação, contratação e gestão de apólices.',
      'Implementação de sistema de autenticação, políticas de acesso granular e melhorias em Server-Side Rendering (SSR) para otimização de SEO e performance inicial.',
      'Contribuição para estabilidade e padronização da plataforma através de componentização, testes e boas práticas de desenvolvimento, melhorando manutenibilidade do código.',
    ],
  },
]
