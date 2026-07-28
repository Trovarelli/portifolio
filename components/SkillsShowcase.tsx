import { skills, categoryLabels } from "@/data/skills";
import type { Skill } from "@/data/skills";

const categories = ["frontend", "backend", "mobile", "devops"] as const;
const categoryCodes = {
  frontend: "A",
  backend: "B",
  mobile: "C",
  devops: "D",
} as const;

const levelCode: Record<Skill["level"], string> = {
  expert: "EXP",
  advanced: "ADV",
  intermediate: "INT",
};

export default function SkillsShowcase() {
  return (
    <>
      <div className="bp-skill-grid">
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category);

          return (
            <div className="bp-skill-column" key={category}>
              <p className="bp-skill-heading bp-mono">
                {categoryCodes[category]} / {categoryLabels[category].toUpperCase()}
              </p>
              {categorySkills.length > 0 ? (
                <div className="bp-skill-list">
                  {categorySkills.map((skill) => (
                    <div className="bp-skill-row" key={skill.name}>
                      <span
                        className={`bp-skill-marker bp-skill-marker-${skill.level}`}
                        aria-hidden="true"
                      />
                      <span>{skill.name}</span>
                      <span className="bp-skill-level bp-mono">{levelCode[skill.level]}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="bp-empty-skill bp-mono">
                  Sem tecnologias móveis listadas no perfil atual.
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="bp-skill-legend bp-mono" aria-label="Legenda de níveis">
        <span><i className="bp-skill-marker bp-skill-marker-expert" /> EXP / Expert</span>
        <span><i className="bp-skill-marker bp-skill-marker-advanced" /> ADV / Avançado</span>
        <span><i className="bp-skill-marker bp-skill-marker-intermediate" /> INT / Intermediário</span>
      </div>
    </>
  );
}
