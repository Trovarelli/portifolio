import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { Globe, Mail, Briefcase } from "lucide-react";

export default function Page() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-zinc-900/60 ring-1 ring-zinc-800 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-2">Olá! 👋</h2>
          <p className="text-zinc-300 leading-relaxed">{profile.about}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-zinc-950 ring-1 ring-zinc-800 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-400 text-emerald-950 font-semibold hover:brightness-95"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-700 hover:bg-zinc-800"
            >
              LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-700 hover:bg-zinc-800"
            >
              Currículo
            </a>
          </div>
        </div>
        <div className="bg-zinc-900/60 ring-1 ring-zinc-800 rounded-2xl p-6">
          <h3 className="text-base font-medium mb-3">Disponível para remoto</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li className="flex items-center gap-2">
              <Globe size={16} /> {profile.location}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> {profile.email}
            </li>
          </ul>
        </div>
      </section>
      <section id="projetos" className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Projetos em destaque</h2>
          <span className="text-xs text-zinc-400">
            {projects.length} projetos
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>
      <section id="experiencia" className="mt-12">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase size={18} />
          <h2 className="text-lg font-medium">Experiência</h2>
        </div>
        <ol className="relative border-s border-zinc-800 ps-6 space-y-8">
          {experiences.map((e) => (
            <ExperienceItem key={e.role} e={e} />
          ))}
        </ol>
      </section>
      <section id="contato" className="mt-12">
        <h2 className="text-lg font-medium mb-2">Contato</h2>
        <p className="text-zinc-300 text-sm">
          Aberto a propostas remotas. Me envie um e-mail ou mensagem no
          LinkedIn.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-700 hover:bg-zinc-800"
          >
            E-mail
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 ring-1 ring-zinc-700 hover:bg-zinc-800"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="mt-14 pb-6 text-zinc-500 text-sm">
        © {year} {profile.name}. Construído com Next.js + Tailwind.
      </footer>
    </div>
  );
}
