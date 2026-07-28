"use client";

import { useEffect, useState } from "react";
import { fetchGitHubRepos, type GitHubRepo } from "@/utils/github";
import { projects } from "@/data/projects";

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Go: "#00ADD8",
  Vue: "#41b883",
  React: "#61dafb",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572A5",
  Rust: "#dea584",
};

export default function GitHubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const featuredRepoNames = projects
      .flatMap((project) => project.repo)
      .map((repo) => repo.url.match(/github\.com\/[^/]+\/([^/]+)/)?.[1] ?? null)
      .filter((name): name is string => name !== null);

    fetchGitHubRepos(username, featuredRepoNames).then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, [username]);

  return (
    <section id="repos" className="bp-section" aria-labelledby="repos-title">
      <div className="bp-section-heading">
        <h2 id="repos-title">Outros Repositórios</h2>
        <span className="bp-mono">
          05 / GITHUB INDEX · {loading ? "..." : `${repos.length} REPOSITÓRIOS`}
        </span>
      </div>

      {loading ? (
        <div className="bp-repo-state bp-mono">Consultando GitHub...</div>
      ) : repos.length === 0 ? (
        <div className="bp-repo-state bp-mono">
          Nenhum repositório adicional disponível no momento.
        </div>
      ) : (
        <>
          <div className="bp-repo-index">
            <div className="bp-repo-head bp-mono">
              <span>Repository</span>
              <span>Description</span>
              <span>Language</span>
              <span>Signals</span>
              <span aria-hidden="true" />
            </div>
            {repos.slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bp-repo-row bp-link bp-focus"
              >
                <span className="bp-repo-name bp-mono">{repo.name}</span>
                <span className="bp-repo-description">
                  {repo.description || "Sem descrição"}
                </span>
                <span className="bp-repo-language bp-mono">
                  {repo.language && (
                    <i
                      className="bp-language-dot"
                      style={{ backgroundColor: languageColors[repo.language] || "#64748b" }}
                      aria-hidden="true"
                    />
                  )}
                  {repo.language || "—"}
                </span>
                <span className="bp-repo-signals bp-mono">
                  {repo.stargazers_count > 0 ? `★ ${repo.stargazers_count}` : "—"}
                  {repo.forks_count > 0 ? ` · ${repo.forks_count} forks` : ""}
                </span>
                <span className="bp-repo-arrow text-xs" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <p className="bp-repo-more bp-mono">
            Showing {String(Math.min(repos.length, 6)).padStart(2, "0")} ·{" "}
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-link bp-focus bp-accent-text"
            >
              ver todos os repositórios ↗
            </a>
          </p>
        </>
      )}
    </section>
  );
}
