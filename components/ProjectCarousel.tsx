"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative">
      <style jsx global>{`
        .project-swiper .swiper-wrapper {
          align-items: stretch !important;
        }
        .project-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
      `}</style>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 } }}
        onSwiper={(s) => {
          swiperRef.current = s;
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        onSlideChange={(s) => {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        watchOverflow
        observer
        observeParents
        className="pb-4 project-swiper"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.title} className="h-full">
            <ProjectCard p={p} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Projetos anteriores"
        disabled={isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 shadow-md ${
          isBeginning
            ? "opacity-40 cursor-not-allowed pointer-events-none shadow-none"
            : ""
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Próximos projetos"
        disabled={isEnd}
        onClick={() => swiperRef.current?.slideNext()}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 shadow-md ${
          isEnd
            ? "opacity-40 cursor-not-allowed pointer-events-none shadow-none"
            : ""
        }`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
