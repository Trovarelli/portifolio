import { calcularTempoExperiencia } from "@/utils";

const inicio = new Date("2021-09-01");
const experienciaCalculada = calcularTempoExperiencia(inicio);

export const profile = {
  name: "José Trovarelli Neto",
  headline: "Front-end (React/Next.js) • Back-end (Golang)",
  about:
    `Desenvolvedor com ${experienciaCalculada} de experiência em softwares escaláveis, apaixonado por criar soluções digitais de alta performance. Tenho foco em qualidade de código, experiência do usuário e entrega de valor ao negócio. Atuei em produtos B2B e B2C, participando desde a concepção até a entrega em produção. Busco oportunidades remotas que me permitam crescer profissionalmente, aprofundar meus conhecimentos em front-end e colaborar com times engajados em projetos desafiadores.`,
  location: "Brasil • Remoto",
  email: "jtneto.dev@gmail.com",
  github: "https://github.com/Trovarelli",
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-trovarelli-neto-31b2801b9/",
  resumeUrl: "/cv.pdf",
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
