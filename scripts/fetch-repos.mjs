/* Збирає статистику репозиторіїв у статичний JSON, щоб сайт не смикав GitHub API
   на кожному відкритті. Запускається GitHub Action раз на добу (або вручну).

   Список репозиторіїв береться прямо з script.js — там, де в CONFIG.projects
   вказані посилання виду https://github.com/<owner>/<repo>.
*/

import fs from "node:fs/promises";
import path from "node:path";

const TOKEN = process.env.GITHUB_TOKEN || "";

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "owenvibe-stats",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

const root = process.cwd();
const scriptPath = path.join(root, "script.js");
const source = await fs.readFile(scriptPath, "utf8");

const stripped = source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^[ \t]*\/\/.*$/gm, "");
const found = [...stripped.matchAll(/url:\s*"https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)"/g)].map((m) => ({
  owner: m[1],
  repo: m[2],
}));

const unique = [...new Map(found.map((item) => [`${item.owner}/${item.repo}`, item])).values()];
if (!unique.length) {
  console.log("no repositories found in script.js");
  process.exit(0);
}

async function getJSON(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    console.log("skip", url, response.status);
    return null;
  }
  return response.json().catch(() => null);
}

const repos = {};

for (const { owner, repo } of unique) {
  const slug = `${owner}/${repo}`;

  const info = await getJSON(`https://api.github.com/repos/${slug}`);
  if (!info) continue;

  const commits = await getJSON(`https://api.github.com/repos/${slug}/commits?per_page=1`);
  const participation = await getJSON(`https://api.github.com/repos/${slug}/stats/participation`);

  const message = commits?.[0]?.commit?.message || "";

  repos[slug] = {
    stars: info.stargazers_count ?? 0,
    language: info.language ?? null,
    pushed_at: info.pushed_at ?? null,
    lastMessage: message.split("\n")[0].slice(0, 64),
    weekly: Array.isArray(participation?.all) ? participation.all : [],
  };

  console.log("ok", slug, repos[slug].stars, repos[slug].language);
}

const outDir = path.join(root, "data");
await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(
  path.join(outDir, "repos.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), repos }, null, 2) + "\n",
  "utf8"
);

console.log("written data/repos.json with", Object.keys(repos).length, "repos");


