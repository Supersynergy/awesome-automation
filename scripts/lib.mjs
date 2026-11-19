// Parses data/list.txt (the single source of truth) and renders README.md.
import { readFileSync } from 'node:fs';

export const SOURCE = new URL('../data/list.txt', import.meta.url);
export const README = new URL('../README.md', import.meta.url);

export const TITLE = 'Awesome Automation';
export const TAGLINE =
  'Curated list of open-source tools for automating workflows, browsers, desktops, homes, infrastructure and software tests.';

export function urlOf(ref) {
  return /^https?:\/\//.test(ref) ? ref : `https://github.com/${ref}`;
}

/** @returns {{title:string, intro:string[], entries:object[], children:object[], level:number}[]} */
export function parse(text) {
  const root = { title: '', intro: [], entries: [], children: [], level: 0 };
  const stack = [root];
  text.split('\n').forEach((raw, i) => {
    const line = raw.trimEnd();
    if (!line) return;
    const h = /^(#{1,3}) (.+)$/.exec(line);
    if (h) {
      const level = h[1].length;
      while (stack[stack.length - 1].level >= level) stack.pop();
      const node = { title: h[2], intro: [], entries: [], children: [], level };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
      return;
    }
    const cur = stack[stack.length - 1];
    if (line.startsWith('> ')) return void cur.intro.push(line.slice(2));
    const parts = line.split(' | ');
    if (parts.length !== 3) throw new Error(`data/list.txt:${i + 1}: expected "Name | ref | Description."`);
    const [name, ref, desc] = parts;
    cur.entries.push({ name, ref, url: urlOf(ref), desc, line: i + 1 });
  });
  return root;
}

export function allEntries(node, out = []) {
  out.push(...node.entries);
  node.children.forEach((c) => allEntries(c, out));
  return out;
}

const byName = (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en');
const anchor = (t) => t.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s/g, '-');

export function render(root) {
  const out = [];
  out.push(`# ${TITLE} [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)`, '', `> ${TAGLINE}`, '');
  out.push('## Contents', '');
  for (const s of root.children) {
    out.push(`- [${s.title}](#${anchor(s.title)})`);
    for (const c of s.children) out.push(`  - [${c.title}](#${anchor(c.title)})`);
  }
  out.push('- [Contributing](#contributing)', '- [License](#license)', '');
  const walk = (n) => {
    out.push(`${'#'.repeat(n.level + 1)} ${n.title}`, '');
    n.intro.forEach((l) => out.push(l.startsWith('>') ? l : `_${l}_`, ''));
    if (n.entries.length) {
      [...n.entries].sort(byName).forEach((e) => out.push(`- [${e.name}](${e.url}) - ${e.desc}`));
      out.push('');
    }
    n.children.forEach(walk);
  };
  root.children.forEach(walk);
  out.push(
    '## Contributing',
    '',
    'Contributions are welcome. Read the [contribution guidelines](CONTRIBUTING.md) first.',
    '',
    '## License',
    '',
    '[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)',
    '',
  );
  return out.join('\n');
}

export const load = () => parse(readFileSync(SOURCE, 'utf8'));
