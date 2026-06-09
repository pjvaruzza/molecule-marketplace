# Green Molecule Marketplace — Cold Start Simulator

An interactive web app that tells the story of building a market-maker for green molecules
(green/byproduct hydrogen first) and lets you simulate the path from zero to critical mass.

Two modes:

- **Story walkthrough** — a six-stage narrative of the cold-start sequence
  (lock supply → find demand → convert to LOIs → first manual deal → stack credit margin →
  reach critical mass). Built to click through in a pitch.
- **Live model** — drag six assumptions (producers signed, buyer acquisition rate, volume,
  molecule spread, credit fee, churn) and watch active buyers and net revenue compound over
  24 months, with the critical-mass month flagged.

It's a planning and storytelling tool. The figures are illustrative assumptions, not forecasts.

## Run locally

No build step. Open `index.html` in a browser, or serve it:

```bash
npm run serve      # serves on http://localhost:3000
npm test           # runs the model sanity tests
```

## Project structure

```
index.html            Page shell and layout
src/styles.css        Design system, light/dark mode
src/stages.js         Story-walkthrough content (edit the narrative here)
src/model.js          Pure simulation math (no DOM) — the part to trust and test
src/app.js            Wiring: tabs, navigation, chart, controls, share links
test/model.test.js    Zero-dependency tests for the model
netlify.toml          Netlify config (publish root, security headers)
.github/workflows/    CI: runs npm test on push and PR
```

Editing the story copy or model assumptions is intentionally easy: narrative lives in
`src/stages.js`, and the model's tunable constants are at the top of `src/model.js`
(`MODEL_CONFIG` and `MODEL_DEFAULTS`).

## Shareable scenarios

The "Copy shareable scenario" button encodes the current slider values into the URL hash,
so you can send a colleague a link that opens with your exact assumptions loaded.

## Deploy

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: green molecule marketplace simulator"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Host on Netlify

Easiest path (no CLI):

1. Log in to Netlify → **Add new site** → **Import an existing project**.
2. Connect your GitHub account and pick this repo.
3. Build settings are read from `netlify.toml` automatically — publish directory is the
   repo root and there's no build command. Click **Deploy**.

Every push to `main` redeploys automatically.

Or via CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Dependencies

Chart.js, Inter, and Tabler Icons load from CDN at runtime — there are no installed
npm dependencies and nothing to bundle. Node is only used to run the test script.

## License

MIT — see [LICENSE](LICENSE).
