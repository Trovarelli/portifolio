import nlw from "@/public/projects/nlw.png";
import tahr from "@/public/projects/tahr.svg";
import vueCrud from "@/public/projects/vue-crud.svg";
import animatedChess from "@/public/projects/animated-chess.png";

import { StaticImageData } from "next/image";

export type ProjectMetric = {
  label: string;
  value: string;
  icon?: string;
};

export type Project = {
  image: string | StaticImageData;
  title: string;
  description: string;
  stack: string[];
  live?: string;
  repo: {
    label: string;
    url: string;
  }[];
  metrics?: ProjectMetric[];
  highlights?: string[];
  role?: string;
};

export const projects: Project[] = [
  {
    image: tahr,
    title: "TAHR - Gestão de RH e Triagem Inteligente",
    description:
      "Plataforma completa de gestão de RH com arquitetura distribuída. Desenvolvi o backend escalável utilizando Node.js e MongoDB, implementando parsing inteligente de documentos, autenticação segura com JWT e fluxos de trabalho assíncronos. Desenvolvi o frontend utilizando React e Next.js.",
    stack: ["Node.js", "Express", "MongoDB", "TypeScript", "Docker", "JWT", "React", "Next.js"],
    live: "https://tahr.vercel.app/",
    repo: [
      {
        label: "GitHub - Back-end",
        url: "https://github.com/Trovarelli/TCC-Back-end",
      },
      {
        label: "GitHub - Front-end",
        url: "https://github.com/Trovarelli/TCC-Front-end",
      },
    ],
    role: "Lead Backend Developer",
    metrics: [
      { label: "Segurança", value: "JWT Auth" },
      { label: "Upload", value: "Parsing via Backend" },
      { label: "Infra", value: "Dockerizada" },
    ],
    highlights: [
      "Arquitetura de API robusta e escalável",
      "Parsing inteligente de documentos PDF/Docx",
      "Modelagem de dados complexa em MongoDB",
      "Sistema de autenticação e autorização seguro",
    ],
  },
  {
    image: animatedChess,
    title: "Animated Chess - Engine & Lógica de Jogo",
    description:
      "Um simulador de xadrez focado na implementação de lógica de jogo complexa e gerenciamento de estado determinístico. O projeto demonstra a aplicação de algoritmos de validação de movimentos e integridade de estado em tempo real.",
    stack: ["TypeScript", "Next.js", "Jest", "Cypress", "Framer Motion"],
    live: "https://animated-chess.vercel.app/",
    repo: [
      {
        label: "GitHub",
        url: "https://github.com/Trovarelli/animated-chess",
      },
    ],
    role: "Software Engineer",
    metrics: [
      { label: "Lógica", value: "Validação Real" },
      { label: "Qualidade", value: "Testes Unitários" },
      { label: "Estado", value: "Gestão Complexa" },
    ],
    highlights: [
      "Implementação integral das regras da FIDE",
      "Arquitetura de estado previsível e testável",
      "Cobertura abrangente de testes de lógica",
      "Otimização de performance de renderização",
    ],
  },
];
