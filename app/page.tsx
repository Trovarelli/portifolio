import Header from "@/components/Header";
import ProjectCarousel from "@/components/ProjectCarousel";
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
        <div className="md:col-span-2 bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl p-6">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.about}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-950 ring-1 ring-slate-300 dark:ring-slate-800 text-slate-600 dark:text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-semibold hover:brightness-95"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800"
            >
              LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800"
            >
              Currículo
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-medium mb-3">Disponível para remoto</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
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
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {projects.length} projetos
          </span>
        </div>
        <ProjectCarousel projects={projects} />
      </section>
      <section id="experiencia" className="mt-12">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase size={18} />
          <h2 className="text-lg font-medium">Experiência</h2>
        </div>
        <ol className="relative border-s border-slate-200 dark:border-slate-800 ps-6 space-y-8">
          {experiences.map((e) => (
            <ExperienceItem key={e.role} e={e} />
          ))}
        </ol>
      </section>
      <section id="contato" className="mt-12">
        <h2 className="text-lg font-medium mb-2">Contato</h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          Me envie um e-mail ou mensagem no LinkedIn.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800"
          >
            E-mail
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800"
          >
            LinkedIn
          </a>
        </div>
      </section>
      <footer className="mt-14 pb-6 text-slate-500 dark:text-slate-400 text-sm">
        © {year} {profile.name}. Construído com Next.js + Tailwind.
      </footer>
    </div>
  );
}
