export type Experience = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer | Golang Developer',
    company: 'DOMTEC SISTEMAS',
    period: '2022 — Presente',
    bullets: [
      'Arquitetura e implementação de um sistema de mensageria escalável integrado à API Oficial do WhatsApp, utilizando Node.js e filas (BullMQ) para garantir controle de concorrência e resiliência a falhas.',
      'Refatoração de pipelines de dados legados e otimização de consultas complexas no PostgreSQL (aplicando estratégias de processamento em lote), reduzindo expressivamente o consumo de recursos e o tempo de execução.',
      'Engenharia de microsserviços e APIs RESTful em Golang e Node.js para operações corporativas B2B, priorizando a estabilidade, a escalabilidade e a adoção de Clean Code para facilitar a manutenção pelo time.',
      'Estruturação de camadas de segurança robustas (autenticação JWT e RBAC), garantindo controle de acesso granular e proteção rigorosa de dados sensíveis da plataforma.',
      'Desenvolvimento Front-end de dashboards administrativos em React/Next.js, alinhando a eficiência e vazão de dados do Back-end com uma interface fluida, acessível e focada na experiência do usuário corporativo.',
    ],
  },
  {
    role: 'Desenvolvedor Front-end',
    company: 'SUTHUB',
    period: '2021 — 2022',
    bullets: [
      'Atuação no desenvolvimento de uma plataforma complexa de seguros (Vue.js, Nuxt.js e TypeScript), construindo fluxos estáveis de cotação e gestão de apólices com foco na conversão e usabilidade do cliente final.',
      'Otimização da performance de renderização da aplicação através de Server-Side Rendering (SSR), melhorando significativamente o tempo de carregamento inicial e as métricas de ranqueamento orgânico (SEO).',
      'Padronização da arquitetura do Front-end através da criação de componentes reutilizáveis, adoção de testes e revisão de código (Code Review), promovendo uma cultura colaborativa e facilitando o processo de onboarding técnica.',
    ],
  },
]
