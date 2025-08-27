import { calcularTempoExperiencia } from "@/utils";

const inicio = new Date("2021-09-01");
const experienciaCalculada = calcularTempoExperiencia(inicio);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "José Trovarelli Neto",
  headline: "Front-end (React/Next.js) • Back-end (Golang)",
  about: `Desenvolvedor com ${experienciaCalculada} de experiência no desenvolvimento de softwares escaláveis, com forte interesse em criar soluções digitais de alta performance. Tenho foco em qualidade de código, experiência do usuário e geração de valor para o negócio. Atuei em produtos B2B e B2C, participando desde a concepção até a entrega em produção. Atualmente, busco oportunidades remotas que me permitam evoluir profissionalmente, aprofundar conhecimentos em front-end e colaborar com equipes engajadas em projetos desafiadores.`,
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
