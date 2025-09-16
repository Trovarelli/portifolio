import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import Image from "next/image";

export default function ProjectCard({ p }: { p: Project }) {
  const hasLive = !!p.live && p.live !== "#";
  const repos = p.repo ?? [];
  const stack = p.stack ?? [];
  return (
    <article className="bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl p-5 flex flex-col justify-between">
      <div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 mb-4">
        <Image
          src={p.image}
          alt={`Capa do projeto ${p.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
      <h3 className="text-base font-semibold">{p.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
        {p.description}
      </p>
      <div>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="text-[10px] px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-950 ring-1 ring-slate-300 dark:ring-slate-800 text-slate-600 dark:text-slate-400"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {hasLive && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-1 hover:underline text-indigo-600 dark:text-indigo-400"
              aria-label={`Abrir demo de ${p.title} em nova aba`}
            >
              Demo <ExternalLink size={14} />
            </a>
          )}
          {repos.length > 0 && (
            <p className="flex flex-wrap gap-3">
              {repos.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-1 hover:underline text-indigo-600 dark:text-indigo-400"
                  aria-label={`Abrir repositório ${r.label} em nova aba`}
                >
                  {r.label} <Github size={14} />
                </a>
              ))}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
