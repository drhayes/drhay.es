import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';

const [, modulePath, redirectSegment, ...links] = process.argv;
const homePath = path.dirname(modulePath);
const redirectPath = path.resolve(homePath, '..', redirectSegment);
const linksPaths = links.map(l => path.resolve(homePath, '..', l));

const redirects = await Promise.all(linksPaths.map(async (linkPath) => {
  const destination = await readFile(linkPath, { encoding: 'utf8' });
  const code = path.basename(linkPath);
  return `${code}	${destination.trim()}`;
}));

redirects.push('/*	https://drhayes.io	301!');

await writeFile(redirectPath, redirects.join('\n'), { encoding: 'utf8' });
