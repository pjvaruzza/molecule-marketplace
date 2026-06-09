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
    title: "The market has stranded supply", sub: "The opening",
    body: "Green and byproduct hydrogen producers are sitting on volume they can\u2019t efficiently sell. Chlor-alkali plants make it as an unavoidable byproduct; new green projects come online with no committed offtake. The majors won\u2019t serve their small, scattered demand. That mismatch is the market we step into \u2014 and our wedge is being the first to map it.",
    viz: "supply",
    metric: [["Byproduct H\u2082 share of supply", "30\u201350%"], ["Beachhead", "California"]]
  },
  {
    icon: "ti-search", color: "purple",
    title: "The demand is real but underserved", sub: "Why buyers switch",
    body: "Thousands of industrial buyers \u2014 metal heat treaters, food processors, electronics \u2014 need 10\u2013100 kg/day and get poor pricing and rigid contracts from the incumbents. They\u2019re too small to matter to Air Products and Linde, but together they\u2019re a large, recurring, fragmented market that no one is aggregating.",
    viz: "demand",
    metric: [["US merchant H\u2082 market", "~$5.4B"], ["Underserved segment", "10\u2013100 kg/day"]]
  },
  {
    icon: "ti-file-text", color: "teal",
    title: "We prove demand before we build", sub: "De-risking the bet",
    body: "We don\u2019t ask investors to trust a thesis on faith. We line up signed letters of intent on both sides \u2014 supply and demand in one region \u2014 before scaling spend. Paired LOIs are hard evidence that the matches exist and the spread is real. That\u2019s what this raise funds against.",
    viz: "loi",
    metric: [["Supply LOIs", "3"], ["Demand LOIs", "4"]]
  },
  {
    icon: "ti-arrows-exchange", color: "amber",
    title: "Every delivery builds the moat", sub: "Why we win on execution",
    body: "We match producer to buyer, lock buy and sell price back-to-back (so we never carry commodity risk), and coordinate hazmat logistics end-to-end. Each clean, on-time delivery is a switching cost we own with that customer. The defensibility isn\u2019t software \u2014 it\u2019s operational trust the incumbents can\u2019t be bothered to earn at this scale.",
    viz: "deal",
    metric: [["Price risk carried", "none"], ["Moat", "execution + trust"]]
  },
  {
    icon: "ti-coin", color: "green",
    title: "Credits make the economics work", sub: "The margin story",
    body: "The real margin isn\u2019t the trucking spread \u2014 it\u2019s orchestrating LCFS and 45V credit monetization for producers too small to do it themselves. That fee can exceed the molecule spread and rises with policy support. California\u2019s credit stack is the richest in the country, which is exactly why we start there.",
    viz: "credit",
    metric: [["Molecule spread", "~$0.50/kg"], ["Credit fee", "~$0.40/kg+"]]
  },
  {
    icon: "ti-trending-up", color: "coral",
    title: "Liquidity compounds into a network", sub: "The venture outcome",
    body: "Past a critical density, the marketplace flips: each producer makes more matches automatic, each buyer makes more supply worth signing. Matching stops being manual and starts being a data advantage. That liquidity \u2014 owned in one region first, then templated to the next \u2014 is the defensible network and the Series A story.",
    viz: "mass",
    metric: [["Critical mass", "~25 buyers"], ["GMV at scale", "$1\u20133M / region"]]
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
      return `<div class="viz-row">${vizNodes("info", 3, "ti-building-factory")}<span class="viz-label">stranded supply, no buyers</span></div>`;
    case "demand":
      return `<div class="viz-row">${vizNodes("info", 3, "ti-building-factory")}<i class="ti ti-arrow-right viz-arrow"></i>${vizNodes("purple", 5, "ti-user")}</div>`;
    case "loi":
      return `<div class="viz-row">${vizNodes("info", 3, "ti-building-factory")}<i class="ti ti-link viz-arrow"></i>${vizNodes("teal", 4, "ti-user")}</div>`;
    case "deal":
      return `<div class="viz-row">${vizNodes("info", 1, "ti-building-factory")}<i class="ti ti-truck-delivery viz-arrow" style="color:var(--amber);font-size:20px;"></i>${vizNodes("amber", 1, "ti-user")}<span class="viz-label">price locked, risk-free spread</span></div>`;
    case "credit":
      return `<div class="viz-row"><span class="viz-label" style="margin-left:0;">molecule</span><span class="viz-bar" style="width:60px;background:var(--accent-bg);"></span><span class="viz-label" style="margin-left:0;">+ credit</span><span class="viz-bar" style="width:48px;background:var(--success-bg);"></span></div>`;
    case "mass":
      return `<div class="viz-row" style="gap:4px;">${vizNodes("info", 4, "ti-building-factory")}<i class="ti ti-arrows-shuffle viz-arrow" style="color:var(--coral);font-size:20px;"></i>${vizNodes("coral", 8, "ti-user")}</div>`;
    default:
      return "";
  }
}
