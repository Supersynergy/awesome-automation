// Checks every GitHub entry through one batched GraphQL query per 40 repos (read-only, cheap on rate limits):
// exists, not archived, not renamed, recently active.
// Usage: node scripts/verify-repos.mjs [--max-age-months=24]   (needs an authenticated `gh`)
import { execFileSync } from 'node:child_process';
import { load, allEntries } from './lib.mjs';

const maxAge = Number((process.argv.find((a) => a.startsWith('--max-age-months=')) ?? '=24').split('=')[1]);
const cutoff = Date.now() - maxAge * 30.44 * 864e5;
const entries = allEntries(load()).filter((e) => !/^https?:/.test(e.ref));
const problems = [];
let ok = 0;

for (let i = 0; i < entries.length; i += 40) {
  const batch = entries.slice(i, i + 40);
  const fields = 'nameWithOwner isArchived pushedAt';
  const query = `{ ${batch
    .map((e, j) => {
      const [owner, name] = e.ref.split('/');
      return `r${j}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { ${fields} }`;
    })
    .join('\n')} }`;
  let res;
  try {
    // gh exits non-zero on partial errors (unknown repos) but still prints the JSON body.
    res = JSON.parse(execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }));
  } catch (err) {
    try {
      res = JSON.parse(err.stdout);
    } catch {
      console.error(`GraphQL request failed (rate limit or auth?): ${String(err.stderr).split('\n')[0]}`);
      process.exit(2);
    }
  }
  batch.forEach((e, j) => {
    const r = res.data?.[`r${j}`];
    if (!r) problems.push(`MISSING  ${e.ref} (line ${e.line})`);
    else if (r.nameWithOwner.toLowerCase() !== e.ref.toLowerCase()) problems.push(`RENAMED  ${e.ref} -> ${r.nameWithOwner}`);
    else if (r.isArchived) problems.push(`ARCHIVED ${e.ref}`);
    else if (Date.parse(r.pushedAt) < cutoff) problems.push(`STALE    ${e.ref} (last push ${r.pushedAt.slice(0, 10)})`);
    else ok++;
  });
}
console.log(`${ok} ok, ${problems.length} problems`);
problems.forEach((p) => console.log(p));
process.exitCode = problems.length ? 1 : 0;
