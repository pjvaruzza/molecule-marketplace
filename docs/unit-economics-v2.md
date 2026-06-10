# Hydrogen Marketplace Unit Economics v2 — Rebuilt Model & Derivation Brief

**Date:** 2026-06-09
**Replaces:** Financial Model Sketch + Unit Economics sections of `hydrogen-marketplace-playbook-2026-05-28.md`
**Status of numbers:** Every assumption is tagged High / Medium / Low confidence and sourced in Part 2. Low-confidence items have a named primary-research action to close them.

---

# Part 0 — What changed and why it matters

The original model had five structural problems. Fixing them doesn't just clean up the spreadsheet — it changes the business you should build.

| # | Original claim | Problem | Corrected |
|---|---|---|---|
| 1 | "25 accounts × 50 kg/day ≈ $2.7M/yr revenue" | Conflated GMV with net revenue. 25 × 50 kg/day × 365 × $0.50 spread = **$228K/yr net**. $2.7M is GMV at ~$6/kg delivered. | All tables below separate GMV, net revenue (take), and contribution. |
| 2 | Take of $0.30–1.00/kg (≈ 3–11% of delivered price) | This is **broker-level pricing for distributor-level work**. You carry hazmat coordination, QA/COA, credit risk, and possibly trailer assets. Freight brokers doing far less earn 10–20% gross margin; industrial gas distributors monetize molecule + asset rent at much higher margins. | Target net take **$2.00–3.50/kg** (22–35% of a ~$9–10/kg delivered price), priced as cost-plus in early deals for transparency. |
| 3 | "Average transaction 30–100 kg per delivery" alongside "80–100 deliveries at 800–1,000 kg" | Unit confusion. A tube-trailer **swap** delivers 600–700 usable kg; 30–100 kg is a buyer's **daily drawdown**. The two were mixed, which broke the break-even math. | Glossary below; all math is per-swap and per-account. |
| 4 | "Net-30 to producers, net-15 from buyers → 2-week working-capital gap" | Backwards. Collecting at day 15 and paying at day 30 is **positive float**. The real risk is buyer slippage past your producer payment date. | Corrected working-capital section with a stress case. |
| 5 | Trailer assets not modeled at all | The tube trailer is the single most important cost object in this business. A modern composite trailer is a ~$600K asset; **trailer dwell time at the buyer's site, not trucking miles, is what kills small-account economics.** | Cost stack includes trailer asset cost under two ownership scenarios; defines a minimum viable account size (~50 kg/day). |

**The headline result:** priced correctly and targeting 75–150 kg/day accounts instead of 10–30 kg/day accounts, break-even falls from an implausible ~110 t/month (~45+ accounts) to **~22–28 t/month (≈ 9–12 accounts)** — reachable in Year 1 in a Gulf Coast cluster.

---

# Part 1 — The rebuilt model

## 1.1 Glossary (use these units everywhere)

- **Account** — a recurring buyer relationship, characterized by daily drawdown (kg/day).
- **Swap** — one logistics event: 3PL delivers a full trailer, retrieves the empty. The atomic transaction.
- **Usable payload** — kg actually extractable per swap. Trailers can't be drawn to zero; buyers draw to a floor pressure. Assume ~85% of nominal capacity.
- **GMV** — total invoice value to buyers (you are principal under back-to-back POs, so GMV ≈ your gross revenue line, but never quote it as "revenue" to an investor without the take-rate next to it).
- **Net take** — GMV minus molecule, trucking, trailer asset cost, and variable transaction costs. This is the number that pays salaries.

## 1.2 Trailer scenarios — decide this before anything else

| | Scenario A — Asset-light (recommended for deals 1–20) | Scenario B — Marketplace leases trailers |
|---|---|---|
| Who owns trailer | Producer or 3PL; rent embedded in your buy price | You lease from Chart / BayoTech / Hexagon / FIBA |
| Your buy price (delivered into trailer at producer gate) | ~$3.50–4.25/kg (molecule $1.75–2.25 + compression/fill $0.50–0.75 + embedded trailer rent $1.00–1.25) | ~$2.50–2.75/kg (molecule + compression only) |
| Trailer cost on your P&L | $0 | Est. $7.5–10.5K/month per composite trailer (see §2.6 — Low confidence, get quotes) |
| Balance-sheet / utilization risk | Producer's | Yours |
| When B beats A | — | Only when account density is high enough to keep trailers >80% utilized, i.e., accounts ≥200 kg/day or multi-stop routes. Year-2 decision. |

Scenario A is assumed in everything below.

## 1.3 Per-kg delivered cost stack (base case)

Base case: 100 kg/day heat-treating account, 75 miles from producer, composite trailer (800 kg nominal / 680 kg usable), Scenario A.

| Line item | $/kg | Basis (full sourcing in Part 2) |
|---|---|---|
| Molecule + compression + embedded trailer rent (buy price) | 3.75 | Byproduct chlor-alkali H2 trades ≤$2/kg; fill + trailer rent stack on top |
| 3PL hazmat trucking, swap trip | 1.47 | ~$1,000/trip (≈160 mi round trip at ~$5–6/mi hazmat all-in + handling) ÷ 680 kg |
| Purity QA / COA allocation | 0.10 | Per-batch analysis amortized; chlor-alkali H2 may need drying/deoxo verification |
| Insurance + bond + compliance allocation | 0.10 | ~$30K/yr program ÷ ~300 t/yr at scale |
| Credit / payment / bad-debt reserve | 0.15 | ~1.5–2% of GMV, consistent with B2B intermediary norms |
| **All-in delivered cost** | **5.57** | |
| **Sell price (base)** | **9.00** | Triangulated; weakest number in the model — see §2.7 |
| **Net take** | **3.43/kg (38% GM)** | Conservative planning case used below: **$2.50/kg** |

Why plan at $2.50 when the stack shows $3.43: sell-price uncertainty (±$1.50), occasional longer hauls, deadhead repositioning, and early-deal pricing concessions. $2.50 is the number to put in front of anyone skeptical; $3.43 is the upside if incumbent small-account pricing is as rich as triangulation suggests.

## 1.4 Per-swap economics (the atomic transaction)

One composite swap, base case:

| | $ |
|---|---|
| GMV (680 kg × $9.00) | 6,120 |
| Producer payment (680 × $3.75) | (2,550) |
| 3PL trucking | (1,000) |
| QA + insurance + credit allocations (680 × $0.35) | (238) |
| **Net take per swap** | **2,332** |

Comparison point: a conventional freight brokerage needs roughly $210–215 of gross margin per load just to break even, and December-2025 industry data showed brokers averaging ~$189/load — losing money per load. Your gross margin per "load" is **~11× a freight broker's break-even**, which is exactly why a hazmat-specialized, low-volume coordination business can work where generic freight brokerage is a bloodbath. The flip side: your volume is measured in dozens of swaps per month, not thousands of loads, so every swap must execute cleanly.

Steel-trailer variant (380 kg nominal / ~320 usable): same trip cost spread over half the payload → trucking ≈ $3.13/kg, and net take per swap falls to ~$700–900. Steel trailers only make sense for very short hauls (<30 mi) or where the producer already owns them. Specify composite capacity in your carrier and supplier agreements.

## 1.5 Per-account economics

| Account drawdown | 50 kg/day | 100 kg/day (base) | 200 kg/day |
|---|---|---|---|
| Monthly volume | 1.5 t | 3.0 t | 6.0 t |
| Swaps/month (680 kg usable) | 2.2 | 4.4 | 8.8 |
| Days a trailer sits on-site per cycle | 13.6 | 6.8 | 3.4 |
| Monthly GMV @ $9.00 | $13,500 | $27,000 | $54,000 |
| Net @ $2.50/kg (planning) | $3,750/mo · $45K/yr | $7,500/mo · $90K/yr | $15,000/mo · $180K/yr |
| Net @ $3.43/kg (stack) | $5,145/mo · $62K/yr | $10,290/mo · $123K/yr | $20,580/mo · $247K/yr |

Contrast with the original model's $5,400/yr per account. The ~17× difference comes from two deliberate changes: target volume (100 vs 30 kg/day) and take ($2.50 vs $0.50). Both are choices you control through segment selection and pricing posture.

**Minimum viable account: ~50 kg/day.** Below that, in trailer mode, the trailer sits at the buyer's site for 2+ weeks per cycle. Under Scenario A the producer eats that dwell and will price it back into your buy price; under Scenario B it's ~$3–4.50/kg of asset cost on your P&L. Sub-50 kg/day demand should be served by cylinder packs/MicroBulk-style aggregation (a different, later product) or politely declined. This contradicts the original plan's "10–100 kg/day" target band — narrow it to **50–300 kg/day**, sweet spot 75–150.

## 1.6 Month-12 P&L scenarios

Opex assumptions: founder + ops coordinator + supply lead ≈ $38–50K/mo fully loaded, plus insurance/bond/tools/travel $7–12K/mo. Conservative $45K, base $55K, stretch $70K (adds buyer-development hire).

| | Conservative | Base | Stretch |
|---|---|---|---|
| Accounts | 8 | 12 | 18 |
| Avg drawdown | 60 kg/day | 80 kg/day | 100 kg/day |
| Volume | 14.4 t/mo | 28.8 t/mo | 54 t/mo |
| Swaps/month | ~21 (1/business day) | ~42 (2/day) | ~79 (3–4/day) |
| GMV | $129.6K/mo | $259.2K/mo | $486K/mo |
| Net take ($/kg) | $2.00 | $2.50 | $3.00 |
| Net revenue | $28.8K/mo | $72K/mo | $162K/mo |
| Opex | $45K | $55K | $70K |
| **Contribution** | **−$16.2K/mo** | **+$17K/mo** | **+$92K/mo** |

Operational sanity check: even the stretch case is 3–4 swaps per business day — coordinatable by two people with a spreadsheet and a disciplined carrier. The constraint is sales cycle, not ops throughput.

## 1.7 Break-even volume vs. take rate (opex $55K/mo)

| Net take ($/kg) | Break-even volume | ≈ Accounts @ 80 kg/day |
|---|---|---|
| 0.50 (original plan) | 110 t/mo | 46 |
| 1.00 | 55 t/mo | 23 |
| 1.50 | 36.7 t/mo | 15 |
| 2.00 | 27.5 t/mo | 12 |
| **2.50 (planning case)** | **22 t/mo** | **9** |
| 3.00 | 18.3 t/mo | 8 |
| 3.50 | 15.7 t/mo | 7 |

This table is the whole argument in one place: **at the original $0.50/kg the business cannot break even in Year 1 or 2; at $2.50/kg it breaks even on 9–12 accounts.** Pricing posture is the company-defining decision.

## 1.8 Sensitivity grid — monthly contribution ($K), opex $55K/mo

| Take \ Volume | 10 t | 20 t | 30 t | 45 t | 60 t |
|---|---|---|---|---|---|
| $1.00 | −45.0 | −35.0 | −25.0 | −10.0 | +5.0 |
| $1.50 | −40.0 | −25.0 | −10.0 | +12.5 | +35.0 |
| $2.00 | −35.0 | −15.0 | +5.0 | +35.0 | +65.0 |
| $2.50 | −30.0 | −5.0 | +20.0 | +57.5 | +95.0 |
| $3.00 | −25.0 | +5.0 | +35.0 | +80.0 | +125.0 |
| $3.50 | −20.0 | +15.0 | +50.0 | +102.5 | +155.0 |

## 1.9 Working capital (corrected)

Terms as designed — invoice buyers net-15, pay producers net-30, pay 3PL net-30:

- **Designed state:** cash arrives ~15 days before it leaves. Float is *positive*. There is no structural working-capital gap.
- **Stress case (the real risk):** an anchor buyer slips to 45 days while you honor net-30 to the producer. Gap = (45 − 30)/30 × monthly COGS. At base-case Month 12 (COGS ≈ $187K/mo), that's **~$94K of cash tied up** — and in freight intermediation, slow shipper payment against fixed carrier terms is precisely the pattern that sinks brokers in down markets.
- **Provision:** $100–150K line of credit secured before the first stress event; 2% bad-debt reserve (already in the cost stack); credit-check every account >$15K/mo GMV; consider invoice factoring as a backstop, not a plan.

## 1.10 Revenue-model framing for investors

Position the company between two reference classes, and own the placement:

- **Pure freight brokerage:** 10–20% gross margin on freight only, no molecule ownership, brutal competition, ~15% industry-average margins in the current cycle.
- **Industrial packaged-gas distribution (Airgas model):** owns molecule pricing and monetizes asset rent — in BOC's packaged-gas business that Airgas acquired, ~65% of revenue was gas sales and cylinder rent. Far richer margins, but asset-heavy.

You are a **principal reseller with outsourced assets**: distributor-style take (22–35% of delivered price) with broker-style asset intensity. That hybrid is the pitch, and the per-swap table in §1.4 is the proof it's not a fantasy.

---

# Part 2 — Derivation brief: every assumption, its source, and its confidence

Methodology: each input was anchored to public data where it exists, triangulated where it doesn't, and tagged. **High** = multiple independent public sources converge. **Medium** = one credible source or convergent inference. **Low** = estimate; primary research action named. Nothing in Part 1 rests on a Low-confidence input without a flagged plan to close it.

## 2.1 Buy price — byproduct hydrogen, ex-works ($1.75–2.25/kg molecule) — Confidence: HIGH

- NETL (via EIA) estimated the levelized cost of hydrogen from new US merchant SMR plants at **$1.06/kg** (2018$, including compression) — the floor any byproduct seller competes against. [EIA Today in Energy #61763]
- SGH2 Energy cites US grey hydrogen at **~$2/kg** with cheap natural gas. [sgh2energy.com/economics]
- Mordor Intelligence's chlor-alkali analysis notes pure-stream 99.9% byproduct hydrogen selling into ammonia/mobility at **sub-$2/kg**, and quantifies co-production at 0.028 t H2 per t caustic — confirming both the price band and that producers treat it as incremental revenue, not a core product. [Mordor chlor-alkali report, 2026]
- IMARC's US index printed roughly **$1.1–3.6/kg** for SMR-grade bulk across 2025 quarters — noisy, but brackets the band. [IMARC hydrogen pricing]

Inference: a marketplace offering a chlor-alkali plant $1.75–2.25/kg for compressed, spec-verified volume is paying a meaningful premium to the seller's alternative (fuel value or flare ≈ $0.30–0.60/kg energy equivalent) while staying far below delivered market prices. The +$1.50–2.00/kg uplift to the Scenario-A buy price ($3.50–4.25 delivered-into-trailer) covers the producer's compression/fill cost and trailer rent — **Medium confidence** on the uplift split; validate in the first three producer LOI conversations by asking for fill-point pricing with and without trailer provision.

## 2.2 3PL trucking ($/trip → $1.47/kg base) — Confidence: MEDIUM-HIGH

- BayoTech's distributor case study uses **$4/mile operating cost** for hydrogen trailer movements. [BayoTech blog]
- McKinsey-derived figures put compressed-gas trucking at **$0.1–1/kg for 0–100 km and $1–2/kg for 100–500 km**. [Divigas summary of McKinsey/Hydrogen Insight]
- Brattle's 2024 hydrogen economics deck independently lands gaseous trucking at **$0.9–1.9/kg** for small volumes and short distances. [Brattle, Feb 2024]

Model: 75-mi one-way swap = ~160 mi round trip × $5–6/mi for-hire hazmat all-in (BayoTech's $4 is *operating* cost; a 3PL adds margin, hazmat surcharge, and minimums) + handling/detention ≈ **$950–1,200/trip**; $1,000 used. ÷ 680 usable kg = **$1.47/kg**, sitting comfortably inside both the McKinsey and Brattle bands. Sensitivity: every +$200/trip = +$0.29/kg. Primary research: three quotes from hazmat-permitted carriers on a defined Houston-area lane (Week 8–10 task already in the playbook).

## 2.3 Trailer payloads (380 kg steel / 800 kg nominal composite, 85% usable) — Confidence: HIGH

- DOE-derived figures: traditional steel tube trailers ≈ **380 kg**; composite trailers ≈ **560–900 kg**. [Fortune Business Insights citing DOE]
- DOE Hydrogen Delivery technical targets show the industry trajectory: 720 kg payload status (2015) → 1,100 kg target. [DOE/Air Products AMR presentation TV028]
- OneH2's high-pressure configurations reach ~486 kg even in compact formats; BayoTech advertises up to ~900 kg ("3× steel"). [New Equipment Digest; BayoTech]

The 85% usable-fraction assumption (draw-down to floor pressure in swap mode) is standard practice but **Medium** confidence as a precise number — confirm the floor-pressure spec in your first supplier agreement, because usable kg is the denominator of every per-kg figure above.

## 2.4 Trailer capital cost (~$600K composite) — Confidence: MEDIUM

- A published station-cost analysis prices a modern 809 kg / 35 MPa tube trailer at **$633,750**. [UNO/Schwer station paper]
- DOE technical targets put trailer capital at **$600–930 per kg of capacity** across status years — i.e., $480–745K for an 800 kg unit. [DOE TV028]

Used: $550–650K. This is why Scenario B (you lease) is a Year-2 decision and why trailer dwell is the hidden tax on small accounts.

## 2.5 Trailer dwell as the binding constraint — Confidence: HIGH (mechanism), inputs as above

Pure arithmetic on §2.3–2.4: a 30 kg/day account holds a trailer ~23 days per cycle; even a cheap steel asset amortizes to $3–5/kg at that dwell. This single calculation explains the industry's structure — why majors push sub-50 kg/day users to cylinders/MicroBulk (Airgas's own product ladder: cylinders → MicroBulk → bulk → on-site generation) and why the 50–300 kg/day band is structurally underserved: too big for cylinder economics, too small for a dedicated bulk relationship. The marketplace's segment thesis falls out of the asset math, which is a much stronger story for investors than "the majors ignore small customers."

## 2.6 Trailer lease rate ($7.5–10.5K/mo composite) — Confidence: LOW — close before any Scenario-B decision

Leasing dominates the trailer market and lease rates are a primary component of delivered cost (IndexBox market structure analysis), but rates are quote-only. Estimate = 1.25–1.75%/month of capex, a standard industrial-equipment leasing heuristic. **Action:** request lease quotes from Chart, BayoTech, Hexagon Purus, FIBA Canning, and Gas Innovations during Week 8–10 carrier diligence. Nothing in the recommended (Scenario A) model depends on this number.

## 2.7 Sell price ($9.00/kg delivered, range $7.50–10.50) — Confidence: LOW-MEDIUM — the model's weakest input and your #1 diligence item

No public index exists for delivered small-bulk industrial hydrogen prices — itself evidence of the opacity your price-data moat exploits. Triangulation:

- Production is **<20% of retail hydrogen cost**; compression and delivery dominate. [Stillwater Associates]
- General DOE-cited figures of **$13–16/kg** for delivered hydrogen, and DOE's HDSAM-modeled tube-trailer delivery cost of **$8–9.50/kg** *just for delivery+dispensing* at small stations, bound the upper end (stations carry dispensing costs industrial swaps don't). [Michaels Energy; DOE Record 20007]
- Cylinder-channel customers pay multiples of bulk — the Airgas product ladder exists precisely to migrate them as volume grows. [Airgas]
- Bottom-up floor: incumbent serving the same account carries a similar cost stack (≈$5–6/kg) plus distributor margin expectations → unlikely to quote small accounts below ~$8.
- A buyer at $9.00 vs. a plausible incumbent $10.50–12 sees 15–25% savings — enough to motivate a trial order without signaling desperation.

**Action (Weeks 6–8, fold into buyer outreach):** in the first 10–15 buyer discovery calls, ask for current delivered price, contract structure (take-or-pay minimums, surcharges), and an invoice if they'll share one. Ten data points convert this input to High confidence and simultaneously seed the price-benchmark dataset that is moat #1 in the playbook. If discovery shows incumbents at $7–8 rather than $10–12, the take compresses to ~$1.50/kg and break-even moves to ~15 accounts (§1.7) — still viable, but it changes hiring pace and raise timing. Decide nothing about headcount until this number is real.

## 2.8 Net take rate ($2.50/kg planning, $2.00–3.50 band) — Confidence: MEDIUM (derived)

Derived as sell (§2.7) minus stack (§2.1–2.3) with a haircut. Cross-checks:

- Freight brokerage gross margins run **10–20%**, ~15% industry average in the current cycle, with ~$210–215/load break-even economics — the floor reference for pure coordination. [ATS; DAT; FreightWaves]
- Packaged-gas distribution monetizes molecule + asset rent (gas + rent ≈ 65% of revenue in the BOC packaged business Airgas acquired) at margins far above brokerage — the ceiling reference. [Airgas 8-K]
- $2.50/kg on $9.00 = 28% — between the references, justified by hazmat compliance burden, QA/COA ownership, credit intermediation, and single-point accountability.

Early-deal tactic preserved from the original playbook: quote the first ~10 deals as transparent cost-plus (producer price + trucking + stated coordination fee) to build trust, then migrate to delivered-price quoting once reliability is proven.

## 2.9 Opex ($45–70K/mo) — Confidence: MEDIUM

Team costs from the original playbook's comp ranges (supply lead $80–120K, ops $60–80K, sales $70–90K — consistent with logistics-industry comps), fully loaded ×1.25, plus the insurance program ($12–30K/yr per the playbook's broker-insurance table), BMC-84 bond ($0.9–2.5K/yr), FMCSA/PHMSA registrations, tools, and Houston-circuit travel. Conservative case assumes founder takes minimal salary.

## 2.10 Working capital — Confidence: HIGH (mechanics), MEDIUM (stress sizing)

Mechanics are arithmetic (§1.9). The stress pattern — receivables stretching against fixed payables — is the documented failure mode for freight intermediaries; FreightWaves' December-2025 unit-economics breakdown shows even a 10-day gap on a $30M book tying up ~$820K and ~$58K/yr in financing cost. Your book is two orders of magnitude smaller, hence the $100–150K LOC sizing.

## 2.11 What was deliberately left out

- **Multi-stop route optimization** (moat #2 in the playbook): real upside — one trip serving two drop points cuts $/kg trucking ~35–45% — but it requires account density that doesn't exist before ~15 accounts. Modeling it now would flatter the base case. Treat as Year-2 margin expansion, not Year-1 plan.
- **Green hydrogen premium pricing:** excluded per the playbook's own Takeaway #9; byproduct grey is the entry market.
- **Premium routing fees / data licensing:** the original model's tertiary revenue lines. Real options, zero Year-1 dollars.

## 2.12 Sources

**Hydrogen prices & production costs**
- EIA, *U.S. refiners and chemical manufacturers lead hydrogen production* — https://www.eia.gov/todayinenergy/detail.php?id=61763
- SGH2 Energy, *Economics* — https://www.sgh2energy.com/economics
- Mordor Intelligence, *Chlor-alkali Market* (byproduct H2 pricing, 0.028 t H2/t caustic) — https://www.mordorintelligence.com/industry-reports/chlor-alkali-market
- IMARC, *Hydrogen Price Trend Q1 2026* — https://www.imarcgroup.com/hydrogen-pricing-report
- Stillwater Associates, hydrogen retail cost structure (production <20% of retail) — https://stillwaterassociates.com/how-does-the-cost-of-hydrogen-stack-up-against-gasoline/
- Michaels Energy, *Colors and Costs of Hydrogen* (DOE $13–16/kg delivered reference) — https://michaelsenergy.com/colors-and-costs-of-hydrogen-vs-natural-gas/

**Delivery & trailer economics**
- DOE Hydrogen Program Record #20007, *Hydrogen Delivery and Dispensing Cost* — https://www.hydrogen.energy.gov/docs/hydrogenprogramlibraries/pdfs/20007-hydrogen-delivery-dispensing-cost.pdf
- Brattle, *Emerging Economics of Hydrogen Production and Delivery* (Feb 2024) — https://www.brattle.com/wp-content/uploads/2024/02/Emerging-Economics-of-Hydrogen-Production-and-Delivery-2-2024.pdf
- Divigas, *Methods of Hydrogen Transportation* (McKinsey/Hydrogen Insight trucking $/kg) — https://www.divigas.com/blog/transportation-of-hydrogen
- BayoTech, *Minimizing Hydrogen Transport Costs* ($4/mile; 3× steel payload) — https://blog.bayotech.us/hydrogen-transport-costs
- Fortune Business Insights, *Hydrogen Tube Trailer Market* (380 kg steel / 560–900 kg composite, per DOE) — https://www.fortunebusinessinsights.com/hydrogen-tube-trailer-market-106975
- DOE AMR TV028 (Air Products), *Advanced Hydrogen Fueling Station Supply: Tube Trailers* (payload & $/kg-capacity targets) — https://www.hydrogen.energy.gov/pdfs/review16/tv028_aliquo_2016_p.pdf
- UNO station-cost analysis (809 kg trailer at $633,750) — https://digitalcommons.unomaha.edu/cgi/viewcontent.cgi?httpsredir=1&article=1011&context=econrealestatefacpub
- IndexBox, *World Hydrogen Tube Trailers Market* (leasing structure, cost components) — https://www.indexbox.io/store/world-hydrogen-tube-trailers-market-analysis-forecast-size-trends-and-insights/
- New Equipment Digest, *OneH2 931-bar trailers* — https://www.newequipment.com/product-news/facility-operations/product/55041428/oneh2-931-bar-high-pressure-tube-trailers-for-hydrogen-delivery

**Intermediary margin benchmarks**
- ATS, *How Freight Brokerage Margins Affect Shippers* (10–20% GM) — https://www.atsinc.com/blog/how-freight-brokerages-make-money-explained
- DAT, *2025 Keys to Success: Brokers* (margins below 15%) — https://www.dat.com/blog/2025-keys-to-success-brokers
- FreightWaves, *How Are Freight Brokers Staying Afloat?* ($210–215/load break-even; working-capital mechanics) — https://www.freightwaves.com/news/how-are-freight-brokers-staying-afloat
- Airgas 8-K (BOC packaged-gas acquisition; gas + cylinder rent ≈ 65% of revenue) — https://www.sec.gov/Archives/edgar/data/0000804212/000080421204000002/exh99-1.txt
- Airgas, hydrogen supply modes ladder (cylinders → MicroBulk → bulk → on-site) — https://www.airgas.com/industrial-gases/hydrogen

---

# Part 3 — The five numbers to validate before anyone sees this deck

1. **Incumbent delivered price to a 50–150 kg/day account** (§2.7) — 10–15 buyer discovery calls. Converts the model's weakest input and seeds the data moat.
2. **Producer fill-point price, with vs. without trailer provision** (§2.1) — first 3 producer LOI conversations.
3. **Hazmat 3PL lane quote, Houston metro, trailer swap** (§2.2) — 3 carrier quotes, Week 8–10.
4. **Composite trailer lease rate** (§2.6) — 5 lessor quotes; informational only until Scenario B is live.
5. **Trailer floor pressure / usable payload** (§2.3) — written into the first supplier agreement.

Each of these is already inside the playbook's existing 90-day motions — they cost conversations you were having anyway, and they convert this model from "researched" to "evidenced" before your seed conversations.
