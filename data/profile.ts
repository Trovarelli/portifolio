import { calcularTempoExperiencia } from "@/utils";

const inicio = new Date("2021-09-01");
const experienciaCalculada = calcularTempoExperiencia(inicio);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "José Trovarelli Neto",
  headline: "Backend Developer & Golang Specialist",
  about: `Engenheiro de Software com foco em Backend Development e Golang, acumulando ${experienciaCalculada} de experiência na construção de sistemas distribuídos de alta performance e microsserviços. Sou aluno da pós-graduação 'Go Expert' da Full Cycle, aprofundando meus conhecimentos em concorrência (Goroutines e Channels), gRPC, Clean Architecture e Mensageria (RabbitMQ/Kafka). Possuo sólida experiência na criação de APIs REST robustas, modelagem de bancos de dados e infraestrutura com Docker e CI/CD.`,
  location: "Brasil • Remoto",
  email: "jtneto.dev@gmail.com",
  github: "https://github.com/Trovarelli",
  githubUsername: "Trovarelli",
  linkedin: "https://www.linkedin.com/in/jose-trovarelli-neto/",
  resumeUrl: `${basePath}/cv`,
  tech: [
    "Golang",
    "gRPC",
    "RabbitMQ",
    "Kafka",
    "Microservices",
    "PostgreSQL",
    "Docker",
    "Node.js",
  ],
} as const;
