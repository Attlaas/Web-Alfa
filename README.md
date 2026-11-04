# Web de ALFA

Web pública del proyecto ALFA (asistente de IA local para Windows), por Atlas.
Sitio estático (React + Vite + Tailwind) que se publica gratis en **GitHub Pages**:
https://attlaas.github.io/Web-Alfa/

Antes vivía en Base44 (https://mi-pagina-web-63210b27.base44.app/). Se mudó aquí el 4 de noviembre de 2026
para no depender de créditos de pago: el contenido, los textos SEO y las imágenes son los mismos.

## Cómo se actualiza

Todo el contenido está en `src/data/`:

| Archivo | Qué contiene |
| --- | --- |
| `alfa.js` | versión, cifras, capacidades, hoja de ruta, preguntas frecuentes, **enlace de donativos**, **correo de contacto** y **cifras de donativos** |
| `updates.js` | la bitácora («Últimas novedades») |
| `history.js` | historial de hitos |
| `system.js` | panel lateral de sistema |
| `team.js`, `terms.js`, `coverage.js`, `sections.js` | voluntariado, términos, mapa y buscador |

Al subir un cambio a `main`, la web se compila y se publica sola en un par de minutos
(`.github/workflows/deploy.yml`).

## Pendiente de Atlas

- `DONATE_URL` en `src/data/alfa.js`: pegar el enlace de Ko-fi o PayPal.me cuando exista.
  Mientras esté vacío, el botón «Donar» avisa de que los donativos vuelven en unos días.
- `CONTACT_EMAIL` en `src/data/alfa.js`: el correo público donde quieres recibir mensajes y candidaturas.
  Los formularios abren el programa de correo de quien escribe con el mensaje preparado (no hay servidor).

## Probar en local

```
npm install
npm run dev
```

`npm run build` deja la web lista en `dist/`.
