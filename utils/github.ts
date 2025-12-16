export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
    fork: boolean;
}

export async function fetchGitHubRepos(
    username: string,
    excludeRepos: string[] = []
): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
            {
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch GitHub repos');
        }

        const repos: GitHubRepo[] = await response.json();

        return repos
            .filter(repo =>
                !repo.fork &&
                !repo.name.includes('portifolio') &&
                !excludeRepos.includes(repo.name)
            )
            .sort((a, b) => {
                const starDiff = b.stargazers_count - a.stargazers_count;
                if (starDiff !== 0) return starDiff;
                return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            })
            .slice(0, 20);
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
