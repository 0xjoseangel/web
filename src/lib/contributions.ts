export interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

export interface ContributionWeek {
  days: ContributionDay[];
}

export async function fetchContributions(username: string): Promise<ContributionWeek[]> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    { headers: { "User-Agent": "portfolio" } }
  );

  if (!res.ok) {
    console.error(`Contributions API error: ${res.status}`);
    return [];
  }

  const data = await res.json();
  const contributions: { date: string; count: number; level: number }[] = data.contributions || [];

  // Group by week (7 days per column)
  const weeks: ContributionWeek[] = [];
  let currentWeek: ContributionDay[] = [];

  for (const day of contributions) {
    const dayOfWeek = new Date(day.date).getDay();

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push({ days: currentWeek });
      currentWeek = [];
    }

    currentWeek.push({
      date: day.date,
      count: day.count,
      level: day.level,
    });
  }

  if (currentWeek.length > 0) {
    weeks.push({ days: currentWeek });
  }

  return weeks;
}

const levelColors = [
  "#1a1a24",  // level 0 - no contributions (dark bg)
  "#003d1f",  // level 1
  "#006b36",  // level 2
  "#00a853",  // level 3
  "#00ff9f",  // level 4 - max (accent)
];

export function getLevelColor(level: number): string {
  return levelColors[Math.min(level, 4)];
}
