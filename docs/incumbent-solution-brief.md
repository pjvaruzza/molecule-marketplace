# Hydrogen Marketplace — What Small Users Do Today (Incumbent-Solution Brief)

**Date:** 2026-06-09
**Companion to:** `hydrogen-marketplace-unit-economics-v2.md`, `hydrogen-conversation-readiness-reading-list.md`, `hydrogen-marketplace-segment-definition.md`
**Purpose:** Map what 12–300 kg/day-equivalent users actually do right now to meet their need, what each route costs and hurts, and what that means for who your real wedge customer is — and isn't.

---

## 0. The uncomfortable punchline

Yes, these users need a reducing atmosphere. But **"needing a reducing atmosphere" is not the same as "buying merchant hydrogen."** A large fraction of the target band gets its hydrogen by *making it on-site from a cheaper, easier-to-handle feedstock* — most often ammonia or natural gas — and never touches the merchant H₂ market at all.

So the merchant-H₂-buying population is a **subset** of the band, and your competition is not just other hydrogen suppliers. It's **on-site atmosphere generation that bypasses the merchant market entirely.** Getting this right reshapes the wedge: your durable customer is the user for whom *neither* the on-site route *nor* the incumbent merchant modes work well. That intersection is narrower than the whole band — but it's real, it's underserved, and it has tailwinds.

---

## 1. The current-solutions menu

### A. Dissociated ammonia (DA) — the dominant legacy on-site route

How it works: buy anhydrous ammonia (cheap, stored/transported as a liquid), crack it on-site in a heated retort (~1,800 °F / ~980 °C) over a nickel/iron catalyst into a **75% H₂ / 25% N₂** mixture, dew point ~ −60 °F, 99.9%+ purity. Used for bright annealing, copper/silver brazing, sintering, and as a nitriding-potential booster.

Why they use it: historically the cheapest way to get a hydrogen-bearing atmosphere — *"a large number of heat treaters produce nitrogen-hydrogen atmospheres by cracking ammonia"* precisely because buying merchant H₂ or blending purchased N₂+H₂ is more expensive. Ammonia's liquid handling and high hydrogen density per delivered volume make the logistics far easier than compressed H₂.

Limits / pain:
- **Decarburizing** — unsuitable for high-carbon steels.
- Fixed at 75% H₂; can't trivially make pure-H₂ or arbitrary blends without adding N₂ (so shops blend bulk N₂ in to dilute).
- **Toxic feedstock** — anhydrous ammonia storage carries serious safety, permitting, and community-risk burdens (see §3).
- Residual ammonia (30–500 ppm) in product gas; needs control.
- Endothermic crack consumes energy (gas or electric heat).

**Strategic read:** DA users in pure-H₂-requiring or high-carbon applications are a *conversion* target, not a lost cause — but only if your delivered H₂ beats their all-in DA cost *and* removes the ammonia headache. DA users content with a 75/25 blend on low-carbon work are largely **not** your market.

### B. Endothermic / exothermic generators (from natural gas) — the carbon-control route

How it works: burn natural gas or propane with air in a controlled ratio to make "endo gas" (~20% CO, 38% H₂, 42% N₂) or "exo gas." Standard for carburizing and carbon-control atmospheres.

Why they use it: cheap feedstock (natural gas), tunable carbon potential, decades of installed base.

Limits / pain: contains CO (safety, emissions), soot, generator maintenance, not a clean reducing atmosphere. Again — **makes its own hydrogen from methane; buys zero merchant H₂.**

**Strategic read:** carburizing shops on endo gas are essentially out of your addressable market. Don't chase them.

### C. Nitrogen + trim hydrogen — the "mostly inert" route

How it works: buy **bulk nitrogen** (cheap, often already on-site in a tank), and trim in a *small* fraction of hydrogen (5–25%) from cylinders or packs for its reducing effect. Linde's HYDROFLEX and Air Products' closed-loop control systems exist to optimize exactly this ratio and *cut H₂ use ~35% vs. fixed flow.*

Why they use it: nitrogen is the workhorse and is cheap; H₂ is the expensive minority component, so they minimize it.

Limits / pain: their *hydrogen* demand is small even when total atmosphere flow is large — so a big-looking furnace can be a sub-band (≤12 kg/day) H₂ buyer, comfortably served by cylinders/packs.

**Strategic read:** this is the trap from the segment doc. A shop running a large N₂–H₂ furnace at low H₂ % is a **MicroBulk/cylinder H₂ customer you can't serve economically.** Qualify on H₂ % to screen these out fast.

### D. Merchant hydrogen — cylinders, packs, MicroBulk, liquid (the ones actually in your market)

The users who genuinely buy merchant H₂ at 50–300 kg/day are getting it via:
- **Cylinder packs (12–18 cyl manifolds)** swapped frequently — painful at this volume (a 12-pack is only ~3,600 SCF ≈ 8.5 kg; a 50 kg/day user burns ~6 packs/day).
- **MicroBulk liquid** — stretched past its comfortable ceiling (~12 kg/day), meaning frequent refills.
- **Small liquid (LH₂) bulk tank** — turnkey from a major, *but bleeding boil-off* (~3%/day; low-throughput stations can vent up to ~50%). They tolerate the loss because it's "handled."
- **Dedicated gaseous tube trailer** — if a major granted them one, often at a premium because the trailer dwells 8–16 days per fill at this volume.

**Strategic read:** THIS is the bullseye — users on packs (labor + runout pain), on stretched MicroBulk (refill frequency), on liquid (venting money), or on a premium-priced gaseous trailer. They've already chosen to buy molecules; you're competing on price and reliability, not converting them off a generator.

### E. On-site electrolysis / ammonia cracking — the rising alternative (and your ceiling)

How it works: a containerized PEM or alkaline electrolyzer splits water on-site; or a modern ammonia *cracker* makes H₂ from ammonia without the DA blend's nitrogen. Modular skids now ship at exactly your scale — e.g., 10 kW and 250 kW containerized units that parallel up. **A single 250 kW PEM skid makes ~100–115 kg/day** (≈ 52 kWh/kg) — dead center of your band.

Economics: on-site electrolysis LCOH lands around **$4.5–6/kg** at typical US industrial power, and **~$3.5–3.7/kg in the cheapest-power states (Texas, Louisiana, Oklahoma, Washington).** Capital alone contributes ~$1.5/kg if run continuously, rising to ~$3.5/kg if run flexibly. It's capex-heavy and only pencils with steady, high, predictable load and cheap power.

**Strategic read — this is the most important competitive fact in the brief:**
- On-site electrolysis at $4–6/kg **undercuts your ~$9/kg delivered** for any user with steady, high load in a cheap-power region. And your supply geography (Gulf Coast chlor-alkali) overlaps the cheap-power states — so the same geography that gives you cheap byproduct supply is where on-site competition is strongest. That tension is real; name it.
- Therefore your **durable** customers are the ones for whom on-site *doesn't* pencil: **intermittent / batch load** (electrolyzer capex idles), **pure-H₂ need at awkward 50–300 kg/day volume**, **no appetite for capex or operating an electrolyzer**, or **sites that can't host one**. The steadier and larger the load, the more likely you lose them to on-site generation over time — so don't anchor the business on big steady users.

---

## 2. Cost & pain comparison (planning-grade, validate in discovery)

| Current route | Buys merchant H₂? | ≈ Effective H₂ cost | Main pain | Your angle |
|---|---|---|---|---|
| Dissociated ammonia | No (makes from NH₃) | Low feedstock, but ammonia + energy + safety | Toxic NH₃ storage, decarburizing, permitting | Convert if pure-H₂/high-carbon need + safety pressure |
| Endo/exo generator | No (makes from NG) | Low (natural gas) | CO, soot, maintenance | Out of market — skip |
| Bulk N₂ + trim H₂ | Yes, small | Cylinder H₂ premium on small volume | Minor; H₂ is minority cost | Sub-band — skip unless clustered |
| Cylinder packs | Yes | Highest $/kg of merchant modes | Labor, swaps, runouts, fire risk | **Bullseye** |
| MicroBulk (liquid) | Yes | Mid; refill frequency at top of range | Frequent refills past ~12 kg/day | **Bullseye** |
| Small LH₂ tank | Yes | Mid, but ~3–50% lost to boil-off | Venting money on slow draw | **Bullseye** |
| Dedicated gaseous trailer | Yes | Premium (dwell-priced at this volume) | Overpaying a major | **Bullseye** |
| On-site electrolysis | No (makes from power) | $4.5–6/kg ($3.5–3.7 cheap-power) | Capex, needs steady load + cheap power | **Your ceiling / threat** — avoid steady high-load users |

---

## 3. What's pushing users to switch right now (your tailwinds)

The status quo is being disrupted by forces that create *switchers* — users actively reconsidering their supply, which is when a new entrant gets in the door:

- **Ammonia safety + urban encroachment.** Documented case (via Nel/Heat Treat Today): a specialty wire producer ran DA for decades, but as the neighborhood shifted to housing, schools, and places of worship, storing toxic ammonia became too risky — they ripped out the dissociator. These DA-abandoners need a new H₂ source *now*.
- **Cylinder fire / handling risk.** Documented case: a specialty wire producer suffered a *catastrophic fire involving hundreds of stored H₂ cylinders* and had to rebuild. Cylinder-heavy sites are motivated to move to a safer mode.
- **Quality.** Generated/delivered pure H₂ is *drier than dissociated ammonia*, enabling leaner atmosphere blends, cleaner product (e.g., brighter wire), and faster cycles (H₂ has the highest heat transfer of any gas).
- **Runouts and labor.** Cylinder/pack changeouts cause downtime and waste (operators swap early to avoid runout); this is a standard reason majors cite for moving customers up the supply ladder.

**Strategic read:** target the *switching moment*. DA-abandoners under safety pressure, cylinder-fire-spooked sites, and shops frustrated by runouts are warmer than steady-state buyers. The pitch isn't "slightly cheaper molecules" — it's "reliable delivered pure H₂, no toxic ammonia on-site, no cylinder farm, no boil-off, no electrolyzer capex."

---

## 4. Who your customer actually is (the reframe)

Stack the filters and the addressable wedge sharpens to the **intersection** of:

1. **Genuinely needs pure or high-fraction H₂** (rules out endo-gas carburizers and low-%-H₂ blend shops — DA's 75/25 or trim-H₂ routes serve them).
2. **Draws 50–300 kg/day** (rules out sub-band cylinder users and supra-band liquid/on-site users).
3. **Intermittent or batch load** (rules out steady high-load users who'll install on-site electrolysis at $4–6/kg).
4. **Doesn't want capex or to operate a generator**, or **can't host one**.
5. **Bonus — at a switching moment:** abandoning DA for safety, spooked by a cylinder incident, or fed up with runouts/boil-off.

That intersection — pure-H₂-needing, awkward-volume, intermittent, capex-averse heat treaters and similar, ideally mid-switch — is who's overpaying today on packs, stretched MicroBulk, venting liquid, or a premium trailer. **It is smaller than the raw 50–300 kg/day band, and the unit-economics account count (9–12 to break even) should be read against this narrower pool, not the whole band.** This is the single biggest reason to validate demand density in your first geography before committing.

Adjacent demand to keep in view (lighter diligence until a prospect appears): **food/edible-oil hydrogenation** (needs food-grade COA), **float glass / electronics** (often larger, steadier — may tilt to on-site), **metal powders / additive manufacturing**, **generator-cooling top-ups at power plants** (intermittent, small).

---

## 5. The supply-side mirror (brief)

The same "what do they do now" question on the producer side — what stranded/byproduct producers do with H₂ they can't use today:
- **Burn it in a boiler** for process steam (the most common sink; sets the opportunity-cost floor on your buy price at roughly natural-gas fuel value, ~$0.30–0.60/kg equivalent).
- **HCl synthesis** (chlor-alkali plants react H₂ + Cl₂).
- **Vent or flare** the remainder — Euro Chlor data: 10–15% of European chlor-alkali byproduct H₂ goes unused; plant case studies show 40%+ vented.
- **Sell at the fence to a gas major** who brings trailers and captures the downstream margin.

**Strategic read:** your producer pitch competes against boiler fuel value, not against zero — and your edge over "sell at the fence to Linde" is routing their molecule to the underserved long-tail buyers a major won't chase, sharing more of the delivered margin back to the producer.

---

## 6. Honest caveats

- The split between on-site-generation users and merchant-buyers in your band is **not publicly quantified** — it's inferred from the supply-mode literature and trade sources. **Sizing this split in your first geography is a top discovery priority** (ask every prospect: DA? endo? cylinders? liquid? on-site? what % H₂?).
- On-site electrolysis economics are improving and capex is falling; the steady-high-load segment will erode over time. Build for the intermittent/awkward-volume niche, not against the trend.
- Effective-cost figures are planning-grade ranges; DA and endo all-in costs in particular vary widely with ammonia/natural-gas prices, electricity, and labor. Validate with real invoices.
- Trade-source case studies (Nel) are vendor-published; treat the *direction* (safety-driven switching) as reliable, the specifics as illustrative.

---

## 7. Sources

- US Patent 5,290,480 / 5,322,676 — ammonia dissociators in heat treating; *"a large number of heat treaters produce N₂–H₂ atmospheres by cracking ammonia"* (process, 75/25, economics) — image-ppubs.uspto.gov
- L&L Special Furnace, *Atmospheric Treating* (DA: 75% H₂/25% N₂, ~1,800 °F retort, −60 °F dew point, decarburizing, metallurgical-grade ammonia) — llfurnace.com/atmospheric-treating/
- US Patent 4,028,100 — endo gas composition (~20% CO, 38% H₂, 42% N₂); DA/endo blending — image-ppubs.uspto.gov
- Linde HYDROFLEX — N₂–H₂ atmosphere control for bright annealing/sintering/brazing — linde-gas.com
- Air Products / academia, *Optimizing Nitrogen-Hydrogen Furnace Atmospheres* (closed-loop control cuts H₂ use ~35%) — academia.edu/121969852
- Heat Treat Today / Nel Hydrogen, *On-Site Hydrogen Generation: A Viable Option for Reducing Atmospheres* (DA-abandonment for safety/urban encroachment; cylinder-fire case; H₂ drier than DA; highest heat transfer) — heattreattoday.com
- Power To Hydrogen (modular 10 kW / 250 kW containerized electrolyzer skids; sizing) — power-h2.com/insights/hydrogen-electrolysis
- arXiv 2206.10689, *Analysis of Hydrogen Production Costs across the US* (electrolysis LCOH ~$4.5–6/kg; $3.5–3.7/kg in TX/LA/OK/WA) — arxiv.org/pdf/2206.10689
- CRU Group, *Electrolyser costs stall* (capex contributes ~$1.5/kg continuous, ~$3.5/kg flexible) — crugroup.com
- Euro Chlor, byproduct H₂ utilization (10–15% unused) and Khasawneh et al. 2019 (case study 43% vented) — eurochlor.org ; journals.sagepub.com/doi/full/10.1177/0144598719839767
- Nitrex, dissociators (DA applications) — nitrex.com
