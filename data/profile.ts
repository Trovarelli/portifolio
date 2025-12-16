import { calcularTempoExperiencia } from "@/utils";

const inicio = new Date("2021-09-01");
const experienciaCalculada = calcularTempoExperiencia(inicio);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "José Trovarelli Neto",
  headline: "Front-end (React/Next.js) • Back-end (Golang)",
  about: `Desenvolvedor Full Stack com mais de 4 anos construindo aplicações web modernas e escaláveis. Especializado em React/Next.js e Vue/Nuxt no front-end, com Golang e Node.js no back-end. Experiência sólida em APIs REST, integrações corporativas (WhatsApp API, mensageria), autenticação/autorização (JWT, RBAC) e otimização de performance em PostgreSQL. Forte atuação em produto B2B, com foco em arquitetura sólida, boas práticas de código, testes automatizados e entrega contínua de valor para o negócio.`,
  location: "Brasil • Remoto",
  email: "jtneto.dev@gmail.com",
  github: "https://github.com/Trovarelli",
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-trovarelli-neto-31b2801b9/",
  resumeUrl: `${basePath}/cv.pdf`,
  tech: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Golang",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ],
} as const;
