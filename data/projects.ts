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
    image: animatedChess,
    title: "Animated Chess - Humanos vs. Orcs",
    description:
      "Um jogo de xadrez moderno e interativo com estética pixel-art única. Foca em uma experiência fluida através de animações complexas de estado e transições suaves de peças.",
    stack: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS", "Cypress", "Jest"],
    live: "https://animated-chess.vercel.app/",
    repo: [
      {
        label: "GitHub",
        url: "https://github.com/Trovarelli/animated-chess",
      },
    ],
    role: "Frontend Developer",
    metrics: [
      { label: "Animações", value: "Framer Motion" },
      { label: "Qualidade", value: "Cypress & Jest" },
      { label: "Estilo", value: "Pixel Art" },
    ],
    highlights: [
      "Animações fluidas de movimento de peças",
      "Lógica de xadrez completa com validação real",
      "Interface customizada inspirada em RPGs clássicos",
      "Cobertura de testes para mecânicas de jogo",
    ],
  },
  {
    image: tahr,
    title: "TAHR - Technology Applied to Human Resources",
    description:
      "Plataforma de gestão de RH focada em UX e acessibilidade, com interface totalmente responsiva e componentes modulares. Automatiza a triagem de currículos garantindo uma experiência fluida para recrutadores e candidatos.",
    stack: ["React", "Next.js", "Tailwind", "Node.js", "Express", "MongoDB", "TypeScript", "Docker", "JWT"],
    live: "https://tahr.vercel.app/",
    repo: [
      {
        label: "GitHub - Front-end",
        url: "https://github.com/Trovarelli/TCC-Front-end",
      },
      {
        label: "GitHub - Back-end",
        url: "https://github.com/Trovarelli/TCC-Back-end",
      },
    ],
    role: "Full Stack Developer & Tech Lead",
    metrics: [
      { label: "Performance", value: "95+ Lighthouse" },
      { label: "Upload", value: "< 2s para PDFs" },
      { label: "Autenticação", value: "JWT seguro" },
    ],
    highlights: [
      "Interface responsiva e acessível (a11y)",
      "Sistema de design modular e componentizado",
      "Experiência de usuário (UX) otimizada",
      "Upload e parsing inteligente de documentos",
    ],
  },
  {
    image: vueCrud,
    title: "Cadastro de Clientes (vue-crud-app)",
    description:
      "Aplicação de gerenciamento de clientes e produtos com arquitetura Vue 3, state management centralizado via Vuex e interface material design. Implementa padrões modernos de componentização e tipagem forte com TypeScript.",
    stack: ["Vue.js", "Vuex", "Vuetify", "TypeScript"],
    live: "https://vue-crud-app-7e3w.onrender.com/",
    repo: [
      {
        label: "GitHub",
        url: "https://github.com/Trovarelli/vue-crud-app",
      },
    ],
    role: "Frontend Developer",
    metrics: [
      { label: "State Management", value: "Vuex" },
      { label: "UI Framework", value: "Vuetify" },
    ],
    highlights: [
      "CRUD completo com Vue 3",
      "Gerenciamento de estado centralizado",
      "Interface responsiva com Vuetify",
    ],
  },
];
