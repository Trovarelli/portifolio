"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Award, Zap } from "lucide-react";
import type { Project } from "@/data/projects";
import Image from "next/image";

export default function ProjectCard({ p }: { p: Project }) {
  const hasLive = !!p.live && p.live !== "#";
  const repos = p.repo ?? [];
  const stack = p.stack ?? [];
  const metrics = p.metrics ?? [];
  const highlights = p.highlights ?? [];

  return (
    <motion.article 
      className="group bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl p-5 flex flex-col justify-between card-hover h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
        <Image
          src={p.image}
          alt={`Capa do projeto ${p.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>

      <div className="mb-2">
        <h3 className="text-lg font-bold">{p.title}</h3>
        {p.role && (
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
            {p.role}
          </p>
        )}
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
        {p.description}
      </p>

      {metrics.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 text-xs bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded-full"
            >
              <Zap size={12} className="text-slate-600 dark:text-slate-400" />
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {metric.label}:
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {highlights.length > 0 && (
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-2">
            <Award size={14} className="text-slate-600 dark:text-slate-400" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Destaques:
            </span>
          </div>
          <ul className="space-y-1">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-800">
        <div className="mb-3 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-950 ring-1 ring-slate-200 dark:ring-slate-800 text-slate-600 dark:text-slate-400"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {hasLive && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-slate-700 text-white font-medium hover:bg-slate-700 dark:hover:bg-slate-600 transition-all"
              aria-label={`Abrir demo de ${p.title} em nova aba`}
            >
              Demo <ExternalLink size={14} />
            </a>
          )}
          {repos.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {repos.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-1 hover:underline text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  aria-label={`Abrir repositório ${r.label} em nova aba`}
                >
                  <Github size={14} /> {r.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
