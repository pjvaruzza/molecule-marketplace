// Stage definitions for the story walkthrough.
// Edit this file to change the narrative — title, body, icon, mini-metrics, and inline visual.

const STAGE_COLORS = {
  info:    { bg: "var(--accent-bg)", text: "var(--accent)" },
  purple:  { bg: "rgba(83,74,183,0.14)", text: "var(--purple)" },
  teal:    { bg: "var(--success-bg)", text: "var(--teal)" },
  amber:   { bg: "rgba(186,117,23,0.14)", text: "var(--amber)" },
  green:   { bg: "rgba(59,109,17,0.14)", text: "var(--green)" },
  coral:   { bg: "rgba(216,90,48,0.14)", text: "var(--coral)" }
};

const STAGES = [
  {
    icon: "ti-flask", color: "info",
    title: "Lock up stranded supply", sub: "Weeks 0\u201312 \u00b7 supply-first",
    body: "We start narrow: sign 1\u20133 California producers to non-binding supply LOIs. One or two chlor-alkali byproduct operators (cheap, motivated, no small-customer sales arm) plus one stranded green producer with no offtake. Now we have something real to sell.",
    viz: "supply",
    metric: [["Producer LOIs", "3"], ["Region", "California"]]
  },
  {
    icon: "ti-search", color: "purple",
    title: "Find the demand", sub: "Weeks 8\u201316 \u00b7 overlapping",
    body: "With supply in hand, every buyer call has credibility: \u201cI have green hydrogen available near you looking for a home.\u201d Target metal heat treaters and food processors at 10\u2013100 kg/day \u2014 underserved by the majors, price-sensitive, recurring demand.",
    viz: "demand",
    metric: [["Buyer prospects", "20+"], ["First targets", "heat treaters"]]
  },
  {
    icon: "ti-file-text", color: "teal",
    title: "Convert to LOIs", sub: "Weeks 12\u201320",
    body: "Mirror the supply LOIs on the demand side: \u201cIf we source X kg at this price delivered here, would you place an order?\u201d Collect 3\u20135. These paired LOIs \u2014 supply + demand in one region \u2014 are the artifact you raise money on.",
    viz: "loi",
    metric: [["Supply LOIs", "3"], ["Demand LOIs", "4"]]
  },
  {
    icon: "ti-arrows-exchange", color: "amber",
    title: "Execute the first deal manually", sub: "Weeks 12\u201320",
    body: "No platform yet. You personally match Producer A to Buyer B, lock buy and sell price back-to-back, coordinate a hazmat 3PL, and monitor the delivery. The operational knowledge from these first deals can\u2019t be bought or coded.",
    viz: "deal",
    metric: [["First transactions", "1\u20135"], ["Spread locked", "back-to-back"]]
  },
  {
    icon: "ti-coin", color: "green",
    title: "Stack the credit margin", sub: "Months 4\u20139",
    body: "Here\u2019s the wider-aperture move: beyond the trucking spread, orchestrate LCFS + 45V credit monetization for green volume. The credit fee can exceed the molecule spread, and it\u2019s the margin the majors aren\u2019t structured to chase for small players.",
    viz: "credit",
    metric: [["Molecule spread", "~$0.50/kg"], ["Credit fee", "~$0.40/kg+"]]
  },
  {
    icon: "ti-trending-up", color: "coral",
    title: "Reach critical mass", sub: "Months 9\u201324",
    body: "Supply density compounds: each new producer makes more buyer matches automatic, each buyer makes more supply worth signing. Around 25 active buyers the matching stops being manual. That liquidity is the moat \u2014 and the Series A story.",
    viz: "mass",
    metric: [["Target buyers", "25"], ["Annual GMV", "$1\u20133M"]]
  }
];

function vizNodes(color, count, icon) {
  const c = STAGE_COLORS[color];
  let out = "";
  for (let i = 0; i < count; i++) {
    out += `<span class="viz-node" style="background:${c.bg};color:${c.text};"><i class="ti ${icon}"></i></span>`;
  }
  return out;
}

function buildViz(kind) {
  switch (kind) {
    case "supply":
      return `<div class="viz-row">${vizNodes("info", 3, "ti-building-factory")}<span class="viz-label">stranded producers &rarr; signed</span></div>`;
    case "demand":
      return `<div class="viz-row">${vizNodes("info", 3, "ti-building-factory")}<i class="ti ti-arrow-right viz-arrow"></i>${vizNodes("purple", 5, "ti-user")}</div>`;
    case "loi":
      return `<div class="viz-row">${vizNodes("info", 3, "ti-building-factory")}<i class="ti ti-link viz-arrow"></i>${vizNodes("teal", 4, "ti-user")}</div>`;
    case "deal":
      return `<div class="viz-row">${vizNodes("info", 1, "ti-building-factory")}<i class="ti ti-truck-delivery viz-arrow" style="color:var(--amber);font-size:20px;"></i>${vizNodes("amber", 1, "ti-user")}<span class="viz-label">one delivery, done by hand</span></div>`;
    case "credit":
      return `<div class="viz-row"><span class="viz-label" style="margin-left:0;">molecule</span><span class="viz-bar" style="width:60px;background:var(--accent-bg);"></span><span class="viz-label" style="margin-left:0;">+ credit</span><span class="viz-bar" style="width:48px;background:var(--success-bg);"></span></div>`;
    case "mass":
      return `<div class="viz-row" style="gap:4px;">${vizNodes("info", 4, "ti-building-factory")}<i class="ti ti-arrows-shuffle viz-arrow" style="color:var(--coral);font-size:20px;"></i>${vizNodes("coral", 8, "ti-user")}</div>`;
    default:
      return "";
  }
}
