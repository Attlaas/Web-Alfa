import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// BASE_PATH: carpeta desde la que se sirve la web. Ahora es /Web-Alfa/ (attlaas.github.io/Web-Alfa/).
// Si el repo se renombra a attlaas.github.io, cambia esto a '/' y las URLs de index.html, public/robots.txt y public/sitemap.xml.
export default defineConfig({
  base: process.env.BASE_PATH || '/Web-Alfa/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
});
