import type { Experience } from "@/data/experience";

function getLocation(company: string) {
  return company === "DOMTEC SISTEMAS" ? "Bariri, SP" : "Remoto";
}

function getDiscipline(role: string) {
  return role.toLowerCase().includes("golang")
    ? "BACKEND / GOLANG"
    : "FRONTEND / TYPESCRIPT";
}

export default function ExperienceItem({ e }: { e: Experience }) {
  return (
    <article className="bp-ledger-row">
      <div className="bp-ledger-period bp-mono">
        <p>{e.period}</p>
        <p className="bp-muted-text">{getLocation(e.company)}</p>
      </div>
      <div className="bp-ledger-role">
        <h3>
          {e.role}
          <br />
          <span>{e.company}</span>
        </h3>
        <p className="bp-ledger-discipline bp-mono">{getDiscipline(e.role)}</p>
      </div>
      <ul className="bp-ledger-achievements">
        {e.bullets.map((bullet, index) => (
          <li key={`${e.company}-${index}`}>
            <span className="bp-accent-text bp-mono" aria-hidden="true">→</span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
