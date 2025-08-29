import nlw from "@/public/projects/nlw.png";
import tahr from "@/public/projects/tahr.svg";
import vueCrud from "@/public/projects/vue-crud.svg";

import { StaticImageData } from "next/image";

export type Project = {
  image: string | StaticImageData
  title: string;
  description: string;
  stack: string[];
  live?: string;
  repo: {
    label: string;
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    image: tahr,
    title: "TAHR - Technology Applied to Human Resources",
    description:
      "Sistema de upload e gerenciamento de curriculos feito com React, Next, Tailwind. Auth JWT, Express, TypeScript e MongoDB.",
    stack: ["React", "Next.js", "Tailwind", "Node.js"],
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
  },
  {
    image: vueCrud,
    title: "Cadastro de Clientes  (vue-crud-app)",
    description:
      "Sistema simples de cadastro de clientes e associação de produtos feito com Vue.js, Vuex, Vuetify e TypeScript.",
    stack: ["React", "Next.js", "Tailwind", "Node.js"],
    live: "https://vue-crud-app-7e3w.onrender.com/",
    repo: [
      {
        label: "GitHub",
        url: "https://github.com/Trovarelli/vue-crud-app",
      },
    ],
  },
  {
    image: nlw,
    title: "NLW - Next Level Week (Rocketseat)",
    description:
      "Sistema simples desenvolvido com Next.js, o intuito do projeto é auxiliar jogadores encontrarem novos jogadores dos seus games favoritos para jogarem juntos. Desenvolvido com React, Next.js, Tailwind, Node.js, TypeScript, Tailwind, Prisma e PostgreSQL.",
    stack: ["React", "Next.js", "Tailwind", "Node.js"],
    live: "https://rocketseat-nlw-project.netlify.app/",
    repo: [
      {
        label: "GitHub",
        url: "https://github.com/Trovarelli/nlw-web-app-rocketseat-ignite",
      },
    ],
  },
];
