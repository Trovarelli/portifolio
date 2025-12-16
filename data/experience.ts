export type Experience = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'DOMTEC SISTEMAS',
    period: '2022 — Presente',
    bullets: [
      'Desenvolvimento e manutenção de aplicações full stack com React.js/Next.js + TypeScript no front-end e Golang/Node.js no back-end, atendendo demandas corporativas e operações em larga escala.',
      'Criação e evolução de APIs REST para integrações corporativas, incluindo integração com API oficial do WhatsApp, implementação de filas de processamento e serviços de mensageria para comunicação assíncrona.',
      'Implementação de sistemas de autenticação JWT e controle de permissões baseado em roles (RBAC), garantindo segurança e conformidade com políticas corporativas de acesso.',
      'Otimização de consultas críticas em PostgreSQL, reduzindo tempos de resposta de rotinas intensivas e melhorando performance de endpoints com alto volume de requisições.',
      'Construção de dashboards administrativos e módulos de gestão com foco em UX, performance e escalabilidade, incluindo visualização de dados e interfaces responsivas.',
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
