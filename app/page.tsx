"use client";

import Header from "@/components/Header";
import ProjectIndex from "@/components/ProjectIndex";
import ExperienceItem from "@/components/ExperienceItem";
import SkillsShowcase from "@/components/SkillsShowcase";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedSection from "@/components/AnimatedSection";
import GitHubRepos from "@/components/GitHubRepos";
import BlueprintSection from "@/components/BlueprintSection";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

const navItems = [
  { href: "#about", label: "Sobre mim" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#repos", label: "Repositórios" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="bp-shell">
      <ScrollProgress />
      <div className="bp-layout">
        <Header navItems={navItems} />

        <main className="bp-main">
          <div className="bp-shell-pad">
            <header className="bp-masthead">
              <div className="bp-masthead-copy">
                <p className="bp-kicker bp-accent-text">
                  SOFTWARE ENGINEER / BACKEND SYSTEMS
                </p>
                <h1 className="bp-hero-title">
                  José
                  <br />
                  <span>Trovarelli Neto</span>
                </h1>
                <div className="bp-hero-intro">
                  <span className="bp-mono bp-accent-text">01—</span>
                  <p>
                    Construo sistemas distribuídos, APIs robustas e produtos
                    digitais com foco em performance, clareza arquitetural e
                    impacto real.
                  </p>
                </div>
                <div className="bp-actions">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bp-button bp-button-primary bp-focus"
                  >
                    GitHub
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                  <a
                    href="#projetos"
                    className="bp-button bp-button-secondary bp-focus"
                  >
                    Ver projetos
                    <ArrowDown aria-hidden="true" size={15} />
                  </a>
                </div>
              </div>

              <div className="bp-masthead-meta bp-mono">
                <div className="bp-meta-block">
                  <span className="bp-meta-title">SYSTEMS / {year}</span>
                  <span>{profile.location.replace(" • ", " — ").toUpperCase()}</span>
                </div>
                <div className="bp-meta-note">
                  <span>01 / 06</span>
                  <span>Designing reliable software</span>
                  <span>one system at a time.</span>
                </div>
              </div>
            </header>

            <AnimatedSection>
              <BlueprintSection id="about" index="02" eyebrow="PROFILE" title="Sobre mim">
                <div className="bp-facts">
                  <div className="bp-facts-copy">
                    <p>{profile.about}</p>
                  </div>
                  <div className="bp-facts-aside">
                    <div className="bp-fact-block">
                      <p className="bp-label">Disponibilidade</p>
                      <p className="bp-fact-value">Remoto / Brasil</p>
                      <p className="bp-fact-copy">
                        Aberto a projetos e oportunidades com problemas técnicos
                        relevantes.
                      </p>
                    </div>
                    <div className="bp-fact-block bp-contact-fact">
                      <p className="bp-label">Contato direto</p>
                      <a href={`mailto:${profile.email}`} className="bp-link bp-focus">
                        {profile.email}
                      </a>
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bp-link bp-focus"
                      >
                        LinkedIn <span className="bp-accent-text">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </BlueprintSection>
            </AnimatedSection>

            <AnimatedSection>
              <BlueprintSection id="skills" index="03" eyebrow="TOOLKIT" title="Skills & Tecnologias">
                <SkillsShowcase />
              </BlueprintSection>
            </AnimatedSection>

            <AnimatedSection>
              <BlueprintSection
                id="projetos"
                index="04"
                eyebrow={`SELECTED WORK · ${String(projects.length).padStart(2, "0")} ITEMS`}
                title="Projetos em destaque"
              >
                <ProjectIndex projects={projects} />
              </BlueprintSection>
            </AnimatedSection>

            <AnimatedSection>
              <GitHubRepos username={profile.githubUsername} />
            </AnimatedSection>

            <AnimatedSection>
              <BlueprintSection id="experiencia" index="06" eyebrow="CAREER LEDGER" title="Experiência Profissional">
                <div className="bp-ledger-head">
                  <span>Período / Localização</span>
                  <span>Função / Empresa</span>
                  <span>Conquistas</span>
                </div>
                <div className="bp-ledger-list">
                  {experiences.map((experience) => (
                    <ExperienceItem key={`${experience.company}-${experience.period}`} e={experience} />
                  ))}
                </div>
              </BlueprintSection>
            </AnimatedSection>

            <AnimatedSection>
              <section id="contato" className="bp-contact-section">
                <div className="bp-contact-panel">
                  <div>
                    <p className="bp-kicker bp-contact-kicker">07 / OPEN CHANNEL</p>
                    <h2>Vamos trabalhar juntos?</h2>
                    <p className="bp-contact-copy">
                      Estou sempre aberto a discutir novos projetos, ideias criativas
                      ou oportunidades para fazer parte da sua visão.
                    </p>
                  </div>
                  <div className="bp-contact-actions">
                    <a href={`mailto:${profile.email}`} className="bp-contact-button bp-focus">
                      <Mail aria-hidden="true" size={16} />
                      Enviar e-mail <span>↗</span>
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bp-contact-link bp-focus"
                    >
                      LinkedIn <span>↗</span>
                    </a>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            <footer className="bp-footer">
              <span>
                © {year} {profile.name} — Construído com Next.js, TypeScript,
                Tailwind CSS e Framer Motion.
              </span>
              <span>PORTFOLIO / JT-001</span>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
