# Prerender Forensic Report (Local Static Analysis)

Date: 2026-03-28 (UTC)

## Scope
Investigated where prerendering may break without redesigning routes/UI/SEO logic.

## What was verified

1. `npm run build` invokes `node scripts/prerender.mjs` from `package.json`.
2. `scripts/prerender.mjs` does all prerender stages:
   - Vite client build to `dist`
   - Vite SSR build to `.ssr-temp`
   - imports SSR entry and reads `render` + `prerenderRoutes`
   - injects `appHtml` and `headTags` into `dist/index.html` template
   - writes per-route files such as `dist/en/index.html` and `dist/de/index.html`
3. `src/entry-server.tsx` returns `{ appHtml, headTags, htmlAttributes }`, and `headTags` concatenates `helmet.title/meta/link/script`.
4. Route manifest includes `/`, `/en`, and `/de` in `prerenderRoutes`.
5. Deploy workflow `.github/workflows/deploy-netlify.yml` deploys `--dir=dist` and has no step after deploy that mutates build output.

## Environment limitation encountered

- Could not complete an actual local build in this environment due dependency download restrictions:
  - `npm ci` fails with HTTP 403 to npm registry.
  - Therefore `dist/index.html`, `dist/en/index.html`, `dist/de/index.html` could not be regenerated/inspected in this session.

## Forensic conclusion from repo config

- Prerender implementation itself is wired correctly in code paths.
- GitHub Action deploy command is configured to publish `dist`.
- Most likely break is **outside** the checked code path (e.g., live Netlify site not serving artifacts produced by this workflow/deployment stream).
