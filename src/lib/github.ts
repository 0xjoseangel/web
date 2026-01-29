export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
}

const GITHUB_API = "https://api.github.com";

export async function fetchUserRepos(username: string, maxRepos: number): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=stars&direction=desc&per_page=100&type=owner`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio",
      },
    }
  );

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status}`);
    return [];
  }

  const repos: GitHubRepo[] = await res.json();
  return repos
    .filter((repo) => !repo.fork)
    .slice(0, maxRepos);
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dockerfile: "#384d54",
  Makefile: "#427819",
  CMake: "#DA3434",
  Jupyter: "#DA5B0B",
};

export function getLanguageColor(language: string | null): string {
  if (!language) return "#6e7681";
  return languageColors[language] || "#6e7681";
}
