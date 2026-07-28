import Image from "next/image";
import type { Project } from "@/data/projects";

const getBlueprintSignals = (title: string) => {
  if (title.includes("TAHR")) return "JWT AUTH / DOCKER / PARSING";
  if (title.includes("Chess")) return "FIDE RULES / UNIT TESTS";
  if (title.includes("vue-crud-app") || title.includes("vue-crud")) return "VUEX / COMPONENTIZATION";
  return "";
};

export default function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <div className="bp-project-index">
      <div className="bp-project-head bp-mono">
        <span>#</span>
        <span>View</span>
        <span>Projeto / Função</span>
        <span>Escopo</span>
        <span>Stack / Signals</span>
        <span>Links</span>
      </div>

      {projects.map((project, index) => {
        const hasLive = Boolean(project.live && project.live !== "#");
        const signals = getBlueprintSignals(project.title);

        const midPoint = Math.ceil(project.stack.length / 2);
        const firstLine = project.stack.slice(0, midPoint).join(" · ");
        const secondLine = project.stack.slice(midPoint).join(" · ");

        // Match blueprint titles (use em-dash instead of hyphen)
        const displayTitle = project.title.replace(" - ", " — ");

        return (
          <article className="bp-project-row" key={project.title}>
            <span className="bp-project-index bp-mono">{String(index + 1).padStart(2, "0")}</span>
            
            <Image
              src={project.image}
              alt={`Prévia do projeto ${project.title}`}
              width={92}
              height={64}
              priority={index === 0}
              className="bp-project-thumb border bp-rule bg-white object-cover w-[92px] h-16"
            />

            <div>
              <h4 className="bp-display font-semibold text-base leading-tight">
                {displayTitle}
              </h4>
              {project.role && (
                <p className="bp-mono text-[10px] text-[var(--bp-accent)] mt-2 uppercase tracking-wide">
                  {project.role}
                </p>
              )}
            </div>

            <p className="bp-project-detail text-sm leading-6 text-[var(--bp-ink-soft)]">
              {project.description}
            </p>

            <div className="bp-project-detail bp-project-stack bp-mono text-[10px] leading-5 text-[var(--bp-ink-soft)]">
              <p>
                {firstLine}
                <br />
                {secondLine}
                {signals && (
                  <>
                    <br />
                    <span className="text-[var(--bp-accent)]">{signals}</span>
                  </>
                )}
              </p>
            </div>

            <div className="bp-project-detail bp-project-links bp-mono text-[10px] flex flex-col items-start gap-2">
              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp-link bp-focus border-b border-[var(--bp-accent)]"
                  aria-label={`Abrir demo de ${project.title} em nova aba`}
                >
                  Demo ↗
                </a>
              )}
              {project.repo.map((repo) => (
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp-link bp-focus text-[var(--bp-ink-soft)]"
                  key={repo.url}
                  aria-label={`Abrir ${repo.label} de ${project.title} em nova aba`}
                >
                  {repo.label.includes("Back-end")
                    ? "Backend ↗"
                    : repo.label.includes("Front-end")
                    ? "Frontend ↗"
                    : "GitHub ↗"}
                </a>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
