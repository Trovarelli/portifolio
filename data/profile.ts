import { calcularTempoExperiencia } from "@/utils";

const inicio = new Date("2021-09-01");
const experienciaCalculada = calcularTempoExperiencia(inicio);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "José Trovarelli Neto",
  headline: "Front-end (React/Next.js) • Back-end (Golang)",
  about: `Desenvolvedor web com ${experienciaCalculada} de experiência na criação de soluções escaláveis e de alta performance, com especialização em Golang e Node.js. Tenho forte foco em arquitetura de sistemas, qualidade de código e eficiência no processamento de dados. Atuei em produtos B2B e B2C, participando ativamente desde a concepção técnica até a entrega em produção. Busco oportunidades remotas que permitam aprofundar meu domínio em backend, contribuir com times técnicos engajados e participar de projetos desafiadores com impacto real no negócio.`,
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
