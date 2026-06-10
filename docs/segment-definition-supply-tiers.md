# Hydrogen Marketplace — Segment Definition & Supply-Tier Analysis

**Date:** 2026-06-09
**Companion to:** `hydrogen-marketplace-unit-economics-v2.md` and `hydrogen-conversation-readiness-reading-list.md`
**Purpose:** Define the target customer band in the units the industry actually uses (SCFM/SCFH/SCF-per-month), locate it precisely against incumbent supply modes, and give the qualifying questions that place any prospect in ~30 seconds.

---

## 0. The punchline

**Target band: 50–300 kg/day of hydrogen draw.** In industry units:

| Metric | 50 kg/day (floor) | 150 kg/day (sweet spot) | 300 kg/day (ceiling) |
|---|---|---|---|
| SCF/day | 21,150 | 63,450 | 126,900 |
| SCFH (24h basis) | ~880 | ~2,640 | ~5,290 |
| SCFM (24h basis) | ~14.7 | ~44 | ~88 |
| SCF/month (~30 days) | ~635,000 | ~1.9M | ~3.8M |

Single-shift users run hotter while gas flows: a 50 kg/day single-shift account peaks near **44 SCFM** during operating hours even though its 24h average is ~15 SCFM. Size equipment and trailer-draw cadence to the *peak*, price to the *daily total*.

**Conversion key (memorize):** 1 kg H₂ ≈ 423 SCF ≈ 11.13 Nm³ · 1 Nm³ ≈ 38 SCF · SCFM = SCFH ÷ 60.

---

## 1. The incumbent supply ladder

| Supply mode | Economic when… | ≈ kg/day | ≈ SCFH (24h) | ≈ SCFM | Notes |
|---|---|---|---|---|---|
| Loose cylinders | very low / intermittent | <~1 | <~150 | <~2.5 | 1 large HP cylinder ≈ 300 SCF ≈ 0.7 kg |
| Manifolded cylinder pack (12–18) | a few cylinders/week | ~1–10 | burst, not sustained | — | 12-pack ≈ 3,600 SCF; 18-pack ≈ 5,400 SCF |
| **MicroBulk (liquid)** | ">10–20 cyl/mo"; <150,000 SCF/mo | **up to ~12** | ~210 avg | ~3.5 avg | Incumbent default just above cylinders |
| **Gaseous tube trailer** | steady draw, trailer turns ~monthly | **~50–1,000+** | ~880–17,600 | ~15–290 | **Your zone** |
| Bulk liquid (LH₂ tank) | high volume, fast turnover | ~300+ | ~5,300+ | ~88+ | Boil-off punishes slow users |
| On-site generation (SMR/electrolysis) | continuous high load | ~20+ continuous | from ~380 | from ~6.3 | Capex-heavy; needs steady load + cheap power/gas |

### Sourced boundary facts
- **Cylinder → MicroBulk crossover is very low.** Majors move a customer to MicroBulk for users of *as few as ten cylinders a month* (Air Products), and the mode runs up to roughly **150,000 SCF/month** — above ~20 cylinders/month you're a MicroBulk candidate (DSW / industry).
- **MicroBulk ceiling ≈ 12 kg/day.** 150,000 SCF/month ÷ 30 ÷ 24 ≈ 208 SCFH ≈ 3.5 SCFM average.
- **On-site generation** (e.g., Airgas FLOXAL) targets continuous users from roughly **10 to 1000s of Nm³/h** — i.e., ~380 SCFH and up. Economic only at steady, high load.
- **Tube-trailer capacity** (from the unit-economics doc): steel ≈ 380 kg (~160,000 SCF); composite ≈ 560–900 kg (~340,000–460,000 SCF). A 50 kg/day account empties a steel trailer in ~7.5 days, a composite in ~16 days → the dwell problem that makes small gaseous accounts marginal for incumbents.

---

## 2. Why 50–300 kg/day is a structural gap (not just "majors ignore small customers")

A single large H₂ cylinder is ~300 SCF (~0.7 kg); MicroBulk tops out at ~12 kg/day. **The smallest target customer at 50 kg/day already draws ~635,000 SCF/month — more than 4× the MicroBulk ceiling.** These buyers are decisively past cylinders, packs, and MicroBulk. They *need* bulk. The only question is which bulk — and at this volume every alternative to gaseous tube trailer is structurally wrong:

- **Liquid (LH₂) is actively wasteful here.** A standard ~4,300 kg LH₂ tank boils off near **3%/day** — ~129 kg/day evaporating whether used or not. A 50 kg/day user would lose *more to boil-off than they consume*; even at 150 kg/day it's brutal. Low-throughput liquid setups can vent **as much as 50%** of delivered hydrogen. (Smaller tanks lower the absolute loss but have worse surface-to-volume ratios, so the percentage gets worse, not better.)
- **On-site generation** can't be justified for intermittent furnace duty — the capex needs continuous, high, predictable load.
- **Gaseous tube trailer is the only sensible mode** — but it's exactly the volume where a major's trailer economics are marginal, because the trailer **dwells 8–16 days** at the customer's site per fill. So the incumbent either prices the small gaseous account at a premium or pushes the customer toward liquid they shouldn't buy.

**That mispriced gaseous band — ~50–300 kg/day, ~15–90 SCFM — is the wedge.**

### The segment map in one view

| Draw | Best incumbent fit | Served well today? | Your play |
|---|---|---|---|
| <~12 kg/day (<150k SCF/mo) | Cylinders → MicroBulk | Yes, cheaply | Skip |
| ~12–50 kg/day | Awkward: packs / stretched MicroBulk | Poorly (painful transition) | Edge case; serve only if clustered with bigger accounts |
| **~50–300 kg/day** | **Gaseous tube trailer** | **No — mispriced or pushed to wrong mode** | **Bullseye** |
| >~300–500 kg/day | LH₂ bulk or high-turn trailer / on-site | Yes, majors want it | Compete only with density advantage |

---

## 3. Consumption at target users — the pure-H₂ vs. blend swing

Whether a given heat-treat shop lands in-band depends almost entirely on **pure-H₂ vs. nitrogen-hydrogen blend** — the single biggest variable.

- **Sintering / bright-annealing rule of thumb:** total atmosphere flow ≈ **75–100 SCFH per inch of belt width**. A 24″ continuous furnace ≈ 1,800–2,400 SCFH of atmosphere.
  - **Pure H₂** (the preferred atmosphere for bright annealing) at that size → **~100–135 kg/day** — dead center of band.
  - **N₂–H₂ blend at 10–25% H₂** → only ~8–35 kg/day of actual H₂ — *below* band, MicroBulk territory. A blend shop is a worse fit than a pure-H₂ shop.
- **Fuel-switched furnace** (natural gas → H₂): hydrogen carries ~⅓ the volumetric energy, so you need ~**3× the flow** — a 900 SCFH gas burner becomes ~2,700 SCFH of H₂ ≈ **~153 kg/day**. In band, high side.
- **Lab / small research annealing:** ~350 SCFH N₂–H₂ mix — tiny, out of band.

### Common hydrogen-atmosphere processes (for recognition on calls)
Bright annealing (stainless, copper, alloy — often **pure H₂**), brazing (copper/silver — pure H₂ or dissociated ammonia), sintering of metal powders (H₂ or H₂ blend), neutral hardening, and as a reducing component in N₂–H₂ for general annealing. Dissociated ammonia (75% H₂ / 25% N₂) is the legacy cheap atmosphere your offer competes against — know it as the buyer's BATNA.

---

## 4. The 30-second qualifying script

Three numbers place any heat-treat prospect instantly:

1. **Furnace throughput / belt width** (or natural-gas burn rate if fuel-switching).
2. **Pure H₂ or N₂–H₂ blend — and what % H₂?** ← the swing factor.
3. **How many shifts/day?** (sets peak SCFM vs. daily total.)

Decision logic:
- Pure H₂ + ≥24″ belt (or ≥~2,000 SCFH H₂) → **in band, bullseye** (~100–200 kg/day).
- Blend with low H₂ % → likely **below band** (MicroBulk customer you can't serve economically).
- Fuel-switching a sizeable burner → **in band**, often high side.
- Currently on a liquid tank but drawing <~300 kg/day → **in band and overpaying / venting** — strong wedge.

Ask what they pay delivered and what mode they're on now; a small-gaseous account paying a major's premium, or a slow LH₂ account bleeding boil-off, is your best first conversation.

---

## 5. Honesty caveats

- Every crossover above is a **range, not a line.** Exact thresholds move with distance from the fill point, contract terms (take-or-pay minimums, surcharges), regional competition, and how aggressively a major prices to defend an account.
- Flow figures depend heavily on **furnace type and H₂ fraction**; treat the heat-treat numbers as representative, not universal.
- Treat **50–300 kg/day / 15–90 SCFM** as the center of mass to target, not a hard fence. The ~12–50 kg/day fringe becomes serviceable only when clustered on a multi-stop route with larger accounts.

---

## 6. Sources

- Air Products, pharmaceutical mode-of-supply (MicroBulk economical from ~10 cylinders/month) — airproducts.expert/en/PharmaGasSolution/mode_of_supply.php
- DSW / industry MicroBulk guidance (>20 cylinders or <150,000 SCF/month) — gaseschina.com/microbulk-tanks-advantage/
- Airgas, hydrogen Gases 101 (cylinders → MicroBulk → bulk → on-site ladder; FLOXAL 10–1000s Nm³/h) — airgas.com/resources/gases101/hydrogen
- Cyl-Tec / JT Racking (high-pressure cylinder sizes 20–300 CF) — cyl-tec.com/product/high-pressure-steel-cylinders/ ; jtcylinderracks.com/common-gas-cylinder-sizes-and-their-purposes/
- Air Products, sintering furnace tips (75–100 SCFH atmosphere per inch of belt width) — airproducts.com/-/media/files/en/330/330-11-006-us-techniques-and-tips-sintering-furnace.pdf
- L&L Special Furnace, heat-treatment atmospheres (pure H₂ preferred for bright annealing; process list) — llfurnace.com/blog/heat-treatment-furnace-atmospheres-inert-gas-and-hydrogen/
- Linde HYDROFLEX, bright annealing/sintering/brazing (H₂ + inert carrier) — linde-gas.com/industries/metal-fabrication/heat-treatment/controlled-furnace-atmospheres/hydroflex-for-bright-annealing-and-more
- Blue Gas Express, practical volume guide (H₂ ≈ ⅓ energy of NG → ~3× flow on fuel switch) — bluegasexpress.com/volume-of-hydrogen/
- Cryogenic Society / ZBO baseline (4,300 kg LH₂ tank, ~3%/day boil-off) — cryogenicsociety.org
- Tomsik/NASA via ResearchGate (low-throughput liquid stations can lose up to ~50% to boil-off) — researchgate.net/publication/322133699
- Tube-trailer payloads per `hydrogen-marketplace-unit-economics-v2.md` (DOE: 380 kg steel / 560–900 kg composite)
