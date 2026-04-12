import { calcularTempoExperiencia } from "@/utils";

const inicio = new Date("2021-09-01");
const experienciaCalculada = calcularTempoExperiencia(inicio);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "José Trovarelli Neto",
  headline: "Engenharia de Software & Desenvolvimento Backend",
  about: `Engenheiro de Software com foco em Backend e Desenvolvimento Full Stack, acumulando ${experienciaCalculada} de experiência na construção de sistemas escaláveis e de alta performance. Especialista na criação de APIs REST robustas e microsserviços utilizando Golang e Node.js, com profundo conhecimento em integrações complexas (WhatsApp Business API, sistemas de mensageria assíncrona) e segurança (JWT/RBAC). Possuo sólida experiência em modelagem e otimização de bancos de dados (PostgreSQL, MongoDB) e infraestrutura com Docker e CI/CD. No frontend, complemento as soluções com interfaces performáticas em React/Next.js e Vue/Nuxt.`,
  location: "Brasil • Remoto",
  email: "jtneto.dev@gmail.com",
  github: "https://github.com/Trovarelli",
  githubUsername: "Trovarelli",
  linkedin: "https://www.linkedin.com/in/jose-trovarelli-neto/",
  resumeUrl: `${basePath}/cv`,
  tech: [
    "Golang",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
  ],
} as const;
