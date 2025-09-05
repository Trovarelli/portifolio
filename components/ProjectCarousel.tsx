"use client";

import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <div
            key={p.title}
            className="snap-center flex-shrink-0 basis-full sm:basis-1/2"
          >
            <ProjectCard p={p} />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 shadow-md"
        aria-label="Projetos anteriores"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 shadow-md"
        aria-label="Próximos projetos"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

