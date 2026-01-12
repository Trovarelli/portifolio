import { calcularTempoExperiencia } from "@/utils";

const inicio = new Date("2021-09-01");
const experienciaCalculada = calcularTempoExperiencia(inicio);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "José Trovarelli Neto",
  headline: "Full Stack: React/Next.js • Golang/Node.js",
  about: `Desenvolvedor Full Stack com mais de 4 anos construindo aplicações web modernas e escaláveis. No backend, trabalho com Golang e Node.js desenvolvendo APIs REST robustas, microsserviços e integrações complexas (WhatsApp API, sistemas de mensageria, autenticação JWT/RBAC). No frontend, especializado em React/Next.js e Vue/Nuxt para interfaces performáticas e responsivas. Experiência sólida em otimização de banco de dados (PostgreSQL, MongoDB), arquitetura de software, CI/CD com Docker, e entrega contínua em ambientes B2B de alta demanda.`,
  location: "Brasil • Remoto",
  email: "jtneto.dev@gmail.com",
  github: "https://github.com/Trovarelli",
  githubUsername: "Trovarelli",
  linkedin: "https://www.linkedin.com/in/jose-trovarelli-neto/",
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
