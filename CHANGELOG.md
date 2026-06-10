# Changelog

All notable changes to this project are documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/); versions follow semver.

## [1.0.1] - 2026-06-10

### Added
- "The market" section with a log-scale market-map graphic (`src/market.js`): each hydrogen
  supply mode (cylinders, MicroBulk, tube trailer, bulk liquid, on-site generation,
  pipeline/captive) plotted by economic daily-draw band, with the 50–300 kg/day target wedge
  highlighted, supporting stat cards, legend, and sourcing footnote. Dark mode and mobile
  layouts included.
- Customer-language units throughout: dual kg/day + SCFM axis on the market map, a live
  "≈ N SCFH" hint under the volume slider, the 15–90 SCFM band in story stage 2, and a
  conversion key (1 kg H₂ ≈ 423 SCF ≈ 11.1 Nm³) in the market footnote. Unit converters
  (`kgPerDayToScfh`, `kgPerDayToScfm`, `fmtScfh`) live in `src/model.js`.
- Break-even month and monthly-contribution metrics in the growth model and metric cards.
- Zero-dependency test suite for the market map (`test/market.test.js`); model tests extended
  to cover break-even behavior, negative-value money formatting, and unit conversions.

### Changed
- Growth model rebuilt to match `docs/unit-economics-v2.md`: molecule-spread + credit-fee
  sliders replaced by net take ($0.50–3.50/kg, default $2.50) and monthly opex ($30–80K,
  default $55K); volume slider narrowed to 50–300 kg/day (default 100); delivered price for
  GMV raised from $6 to $9/kg; GMV no longer double-counts net revenue; committed supply per
  producer raised to 500 kg/day.
- Story stage 5 rewritten from LCFS/45V credit monetization (excluded from Year 1 in
  unit-economics v2) to the distributor-vs-broker pricing posture, with matching viz and
  metrics.
- Beachhead corrected from California to the Gulf Coast across stage 1 and the thesis cards;
  hero and thesis copy now tell the principal-reseller margin story.
- Target segment corrected from 10–100 kg/day to 50–300 kg/day everywhere it appears.
- Stage 6 GMV-at-scale metric updated to $3–6M/region to match the rebuilt model.

### Removed
- Legacy `spread`/`credit` scenario-URL parameters (old shared links open with defaults).
