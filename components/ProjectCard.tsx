import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="bg-zinc-900/60 ring-1 ring-zinc-800 rounded-2xl p-5">
      <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-zinc-800 mb-4" />
      <h3 className="text-base font-semibold">{p.title}</h3>
      <p className="text-sm text-zinc-300 mt-1">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="text-[10px] px-2 py-1 rounded-full bg-zinc-950 ring-1 ring-zinc-800 text-zinc-400">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {p.live && p.live !== '#' && (
          <a href={p.live} target="_blank" className="text-sm inline-flex items-center gap-1 hover:underline">
            Demo <ExternalLink size={14} />
          </a>
        )}
        <a href={p.repo} target="_blank" className="text-sm inline-flex items-center gap-1 hover:underline">
          Código <Github size={14} />
        </a>
      </div>
    </article>
  )
}
