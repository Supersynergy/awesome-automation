import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { README, SOURCE, load, render, allEntries } from '../scripts/lib.mjs';

const root = load();
const entries = allEntries(root);

test('README.md is up to date with data/list.txt (run `npm run build`)', () => {
  assert.equal(readFileSync(README, 'utf8'), render(root));
});

test('every entry has a name, a resolvable URL and a well-formed description', () => {
  for (const e of entries) {
    const where = `line ${e.line} (${e.name})`;
    assert.ok(e.name.trim() && e.name === e.name.trim(), `${where}: bad name`);
    assert.ok(/^https:\/\/\S+$/.test(e.url) && !/[()]/.test(e.url), `${where}: bad URL ${e.url}`);
    assert.ok(/^[A-Z0-9]/.test(e.desc), `${where}: description must start uppercase`);
    assert.ok(e.desc.endsWith('.') && !e.desc.endsWith('..'), `${where}: description must end with one dot`);
    assert.ok(!/\s{2,}/.test(e.desc), `${where}: repeated spaces`);
    assert.ok(e.desc.length <= 130, `${where}: description longer than 130 chars`);
  }
});

test('no URL or name appears twice', () => {
  const seenUrl = new Map();
  const seenName = new Map();
  for (const e of entries) {
    const u = e.url.toLowerCase().replace(/\/$/, '');
    assert.ok(!seenUrl.has(u), `duplicate URL ${e.url} (lines ${seenUrl.get(u)}, ${e.line})`);
    seenUrl.set(u, e.line);
    const n = e.name.toLowerCase();
    assert.ok(!seenName.has(n), `duplicate name ${e.name} (lines ${seenName.get(n)}, ${e.line})`);
    seenName.set(n, e.line);
  }
});

test('entries inside each category are alphabetical in the generated README', () => {
  const lines = readFileSync(README, 'utf8').split('\n');
  let prev = null;
  for (const line of lines) {
    const m = /^- \[([^\]]+)\]\(https:/.exec(line);
    if (!m) { prev = null; continue; }
    if (prev) assert.ok(prev.toLowerCase().localeCompare(m[1].toLowerCase(), 'en') <= 0, `${prev} should come after ${m[1]}`);
    prev = m[1];
  }
});

test('every section has content and the table of contents matches the headings', () => {
  const walk = (n) => {
    assert.ok(n.entries.length || n.children.length, `empty category: ${n.title}`);
    n.children.forEach(walk);
  };
  root.children.forEach(walk);
  const md = readFileSync(README, 'utf8');
  const toc = [...md.matchAll(/^ *- \[([^\]]+)\]\(#([^)]+)\)$/gm)];
  assert.ok(toc.length > 10);
  const headings = new Set([...md.matchAll(/^#{2,4} (.+)$/gm)].map((m) => m[1]));
  for (const [, title] of toc) assert.ok(headings.has(title), `TOC entry without heading: ${title}`);
});

test('README starts with the title and the Awesome badge, ends with the CC0 license', () => {
  const md = readFileSync(README, 'utf8');
  assert.match(md, /^# Awesome Automation \[!\[Awesome\]\(https:\/\/awesome\.re\/badge\.svg\)\]\(https:\/\/awesome\.re\)\n/);
  assert.match(md, /## License\n\n\[!\[CC0\]/);
  assert.ok(SOURCE.pathname.endsWith('data/list.txt'));
});

test('list is broad enough: test automation and every main area are covered', () => {
  const titles = root.children.map((c) => c.title);
  for (const t of ['Workflow Automation', 'Browser Automation', 'Test Automation', 'Home Automation', 'Desktop Automation and RPA', 'CI/CD and Release Automation'])
    assert.ok(titles.includes(t), `missing section ${t}`);
  assert.ok(entries.length >= 300);
});
