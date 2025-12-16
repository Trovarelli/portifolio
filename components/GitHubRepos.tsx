"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, ExternalLink, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { fetchGitHubRepos, type GitHubRepo } from "@/utils/github";
import { projects } from "@/data/projects";

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  React: "#61dafb",
  Angular: "#dd0031",
  Shell: "#89e051",
};

const getLanguageColor = (language: string): string => {
  return languageColors[language] || "#6b7280"; // fallback gray
};

export default function GitHubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const featuredRepoNames = projects
      .flatMap(p => p.repo)
      .map(r => {
        const match = r.url.match(/github\.com\/[^/]+\/([^/]+)/);
        return match ? match[1] : null;
      })
      .filter((name): name is string => name !== null);

    fetchGitHubRepos(username, featuredRepoNames).then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, [username]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 dark:border-slate-100"></div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Carregando repositórios...
        </p>
      </div>
    );
  }

  if (repos.length === 0) {
    return null;
  }

  const reposPerSlide = 6;
  const slides = [];
  for (let i = 0; i < repos.length; i += reposPerSlide) {
    slides.push(repos.slice(i, i + reposPerSlide));
  }

  return (
    <section className="mt-12 group/carousel">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code2 size={20} className="text-slate-600 dark:text-slate-400" />
          <h2 className="text-2xl font-bold">Outros Repositórios</h2>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">
          {repos.length} repositórios
        </span>
      </div>

      <div className="relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          modules={[Mousewheel]}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.5,
            thresholdDelta: 10,
            thresholdTime: 300,
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          className="pb-4"
        >
          {slides.map((slideRepos, slideIdx) => (
            <SwiperSlide key={slideIdx}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {slideRepos.map((repo, idx) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group bg-white dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 rounded-xl p-4 hover:ring-slate-300 dark:hover:ring-slate-700 transition-all hover:shadow-md flex flex-col min-h-[140px]"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm truncate flex-1 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                        {repo.name}
                      </h3>
                      <ExternalLink size={14} className="text-slate-400 flex-shrink-0 ml-2" />
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-3 flex-grow">
                      {repo.description || "Sem descrição"}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mt-auto">
                      <div className="flex items-center gap-3 flex-wrap">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <div 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            ></div>
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star size={12} />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1">
                            <GitFork size={12} />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Repositórios anteriores"
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
          className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 ${
            isBeginning
              ? "!opacity-0 cursor-not-allowed pointer-events-none"
              : "hover:scale-110"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Próximos repositórios"
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
          className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 ${
            isEnd
              ? "!opacity-0 cursor-not-allowed pointer-events-none"
              : "hover:scale-110"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
        Veja todos os repositórios no{" "}
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 dark:text-slate-300 hover:underline font-medium"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
