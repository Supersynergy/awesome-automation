import { writeFileSync } from 'node:fs';
import { README, load, render, allEntries } from './lib.mjs';

const root = load();
writeFileSync(README, render(root));
console.log(`README.md written: ${allEntries(root).length} entries, ${root.children.length} sections`);
