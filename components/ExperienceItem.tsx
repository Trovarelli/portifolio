import type { Experience } from "@/data/experience";

export default function ExperienceItem({ e }: { e: Experience }) {
  return (
    <li className="ms-2 relative">
      <div className="absolute -start-5 mt-1.5 w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 ring-2 ring-indigo-200 dark:ring-indigo-900/60" />
      <h3 className="font-semibold">
        {e.role} • <span className="text-indigo-600 dark:text-indigo-400">{e.company}</span>
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">{e.period}</p>
      <ul className="list-disc ms-5 mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
        {e.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </li>
  );
}
