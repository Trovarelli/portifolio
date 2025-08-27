import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl p-5">
      <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 mb-4" />
      <h3 className="text-base font-semibold">{p.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="text-[10px] px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-950 ring-1 ring-slate-300 dark:ring-slate-800 text-slate-600 dark:text-slate-400">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {p.live && p.live !== '#' && (
          <a href={p.live} target="_blank" className="text-sm inline-flex items-center gap-1 hover:underline text-indigo-600 dark:text-indigo-400">
            Demo <ExternalLink size={14} />
          </a>
        )}
        <a href={p.repo} target="_blank" className="text-sm inline-flex items-center gap-1 hover:underline text-indigo-600 dark:text-indigo-400">
          Código <Github size={14} />
        </a>
      </div>
    </article>
  )
}
