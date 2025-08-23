export type Experience = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Atual',
    period: '2022 — Presente',
    bullets: [
      'Liderei migração de front-end para React/TypeScript, reduzindo bugs e tempo de entrega.',
      'Implementei APIs em Go (Gin) e pipelines CI/CD, melhorando lead time em 30%.',
    ],
  },
  {
    role: 'Desenvolvedor Front-end',
    company: 'Anterior',
    period: '2020 — 2022',
    bullets: [
      'Criação de design system com componentes acessíveis e testáveis.',
      'Integração com back-end e monitoramento de performance (Web Vitals).',
    ],
  },
]
