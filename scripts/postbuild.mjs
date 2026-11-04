// Después de compilar: crea una copia de index.html para cada página (para que /about, /contact…
// respondan 200 en GitHub Pages) y un 404.html que también carga la web.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const index = join(dist, 'index.html');
for (const page of ['about', 'contact', 'terminos', 'gracias', 'ThankYou']) {
  mkdirSync(join(dist, page), { recursive: true });
  copyFileSync(index, join(dist, page, 'index.html'));
}
copyFileSync(index, join(dist, '404.html'));
console.log('postbuild: páginas y 404.html listos');
