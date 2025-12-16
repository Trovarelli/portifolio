"use client";
import Header from "@/components/Header";
import ProjectCarousel from "@/components/ProjectCarousel";
import ExperienceItem from "@/components/ExperienceItem";
import SkillsShowcase from "@/components/SkillsShowcase";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedSection from "@/components/AnimatedSection";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { Globe, Mail, Briefcase, Folder } from "lucide-react";

export default function Page() {
  const year = new Date().getFullYear();
  
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen">
        <Header />

        {/* About Section */}
        <AnimatedSection className="mt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-3 gradient-text">Sobre mim</h2>
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
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 dark:bg-slate-700 text-white font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 transition-all"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  Currículo
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900/40 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl p-6">
              <h3 className="text-base font-semibold mb-3">Disponível para remoto</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-slate-600 dark:text-slate-400" /> {profile.location}
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-slate-600 dark:text-slate-400" /> {profile.email}
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.1}>
          <SkillsShowcase />
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projetos" delay={0.2} className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Folder size={20} className="text-slate-600 dark:text-slate-400" />
              <h2 className="text-2xl font-bold">Projetos em destaque</h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">
              {projects.length} projetos
            </span>
          </div>
          <ProjectCarousel projects={projects} />
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experiencia" delay={0.3} className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={20} className="text-slate-600 dark:text-slate-400" />
            <h2 className="text-2xl font-bold">Experiência Profissional</h2>
          </div>
          <ol className="relative border-s-2 border-gradient-to-b from-indigo-500 to-purple-500 ps-6 space-y-8">
            {experiences.map((e) => (
              <ExperienceItem key={e.role} e={e} />
            ))}
          </ol>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contato" delay={0.4} className="mt-12">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 ring-1 ring-slate-200 dark:ring-slate-800 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Vamos trabalhar juntos?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 dark:bg-slate-700 text-white font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 transition-all"
              >
                <Mail size={18} />
                Enviar E-mail
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="mt-14 pb-6 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {year} {profile.name}.</p>
          <p className="mt-1">Construído com Next.js, TypeScript, Tailwind CSS e Framer Motion.</p>
        </footer>
      </div>
    </>
  );
}
