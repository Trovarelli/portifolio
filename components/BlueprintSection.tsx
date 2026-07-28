import type { ReactNode } from "react";

interface BlueprintSectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function BlueprintSection({
  id,
  index,
  eyebrow,
  title,
  children,
}: BlueprintSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className="bp-section" aria-labelledby={titleId}>
      <div className="bp-section-heading">
        <h2 id={titleId}>{title}</h2>
        <span className="bp-mono">{index} / {eyebrow}</span>
      </div>
      {children}
    </section>
  );
}
