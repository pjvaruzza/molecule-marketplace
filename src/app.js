// App wiring: tab switching, story navigation, model controls, chart, and shareable scenario links.
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  // ---------- Tabs ----------
  const tabStory = $("tab-story");
  const tabModel = $("tab-model");
  const storyView = $("story-view");
  const modelView = $("model-view");

  function setTab(which) {
    const story = which === "story";
    storyView.hidden = !story;
    modelView.hidden = story;
    tabStory.classList.toggle("is-active", story);
    tabModel.classList.toggle("is-active", !story);
    tabStory.setAttribute("aria-selected", String(story));
    tabModel.setAttribute("aria-selected", String(!story));
    if (!story && chart) chart.resize();
  }
  tabStory.addEventListener("click", () => setTab("story"));
  tabModel.addEventListener("click", () => setTab("model"));

  // ---------- Story walkthrough ----------
  let ci = 0;

  function renderStage() {
    const s = STAGES[ci];
    const c = STAGE_COLORS[s.color];
    $("stage-pill").textContent = `Stage ${ci + 1} of ${STAGES.length}`;
    $("stage-bar").style.width = ((ci + 1) / STAGES.length * 100) + "%";

    const icon = $("stage-icon");
    icon.innerHTML = `<i class="ti ${s.icon}"></i>`;
    icon.style.background = c.bg;
    icon.style.color = c.text;

    $("stage-title").textContent = s.title;
    $("stage-sub").innerHTML = s.sub;
    $("stage-body").innerHTML = s.body;
    $("stage-viz").innerHTML = buildViz(s.viz);
    $("stage-metric").innerHTML = s.metric.map(
      (m) => `<div class="mini-card"><p class="mc-label">${m[0]}</p><p class="mc-val">${m[1]}</p></div>`
    ).join("");

    $("prev-btn").style.visibility = ci === 0 ? "hidden" : "visible";
    $("next-btn").innerHTML = ci === STAGES.length - 1 ? "See the path to scale &rarr;" : "Next &rarr;";
  }

  $("next-btn").addEventListener("click", () => {
    if (ci < STAGES.length - 1) { ci++; renderStage(); }
    else { setTab("model"); }
  });
  $("prev-btn").addEventListener("click", () => {
    if (ci > 0) { ci--; renderStage(); }
  });
  renderStage();

  // ---------- Model controls ----------
  const SLIDERS = ["prod", "buy", "vol", "take", "opex", "churn"];

  function readInputs() {
    return {
      prod: +$("s-prod").value,
      buy: +$("s-buy").value,
      vol: +$("s-vol").value,
      take: +$("s-take").value,
      opex: +$("s-opex").value,
      churn: +$("s-churn").value
    };
  }

  function syncReadouts(inp) {
    $("o-prod").textContent = inp.prod;
    $("o-buy").textContent = inp.buy;
    $("o-vol").textContent = inp.vol;
    $("o-vol-hint").innerHTML = "&approx; " + fmtScfh(inp.vol) + " SCFH &mdash; the flow your buyer quotes";
    $("o-take").textContent = inp.take.toFixed(2);
    $("o-opex").textContent = inp.opex;
    $("o-churn").textContent = inp.churn;
  }

  let chart = null;

  function cssVar(name, fallback) {
    const v = getComputedStyle(document.body).getPropertyValue(name).trim();
    return v || fallback;
  }

  function update() {
    const inp = readInputs();
    syncReadouts(inp);
    const r = simulate(inp);

    $("m-buyers").textContent = Math.round(r.finalBuyers);
    $("m-gmv").textContent = fmtMoney(r.gmv);
    $("m-rev").textContent = fmtMoney(r.net);
    const contrib = $("m-contrib");
    contrib.textContent = (r.contribution >= 0 ? "+" : "") + fmtMoney(r.contribution);
    contrib.style.color = r.contribution >= 0 ? "var(--success)" : "var(--coral)";
    const be = $("m-be");
    be.textContent = r.beMonth ? "Mo " + r.beMonth : "Not in 24mo";
    be.style.color = r.beMonth ? "var(--success)" : "var(--coral)";
    const crit = $("m-crit");
    crit.textContent = r.critMonth ? "Mo " + r.critMonth : "Not in 24mo";
    crit.style.color = r.critMonth ? "var(--success)" : "var(--text-secondary)";

    drawChart(r);
  }

  function drawChart(r) {
    const labels = [];
    for (let m = 1; m <= MODEL_CONFIG.MONTHS; m++) labels.push("M" + m);

    const accent = cssVar("--accent", "#185fa5");
    const coral = "#d85a30";
    const grid = cssVar("--border", "rgba(0,0,0,0.12)");
    const txt = cssVar("--text-secondary", "#6b6a64");

    if (chart) chart.destroy();
    chart = new Chart($("growth-chart").getContext("2d"), {
      type: "line",
      data: {
        labels,
        datasets: [
          { label: "Active buyers", data: r.buyersArr, borderColor: coral, backgroundColor: "transparent", yAxisID: "y", tension: 0.3, pointRadius: 0, borderWidth: 2 },
          { label: "Annual net revenue", data: r.revArr, borderColor: accent, backgroundColor: "transparent", yAxisID: "y1", tension: 0.3, pointRadius: 0, borderWidth: 2 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { labels: { color: txt, font: { size: 12 }, boxWidth: 12 } },
          tooltip: {
            callbacks: {
              label: (c) => c.dataset.yAxisID === "y1"
                ? c.dataset.label + ": " + fmtMoney(c.parsed.y)
                : c.dataset.label + ": " + Math.round(c.parsed.y)
            }
          }
        },
        scales: {
          y: { position: "left", grid: { color: grid }, ticks: { color: txt, font: { size: 11 } }, title: { display: true, text: "buyers", color: txt, font: { size: 11 } } },
          y1: { position: "right", grid: { display: false }, ticks: { color: txt, font: { size: 11 }, callback: (v) => fmtMoney(v) }, title: { display: true, text: "net rev", color: txt, font: { size: 11 } } },
          x: { grid: { display: false }, ticks: { color: txt, font: { size: 10 }, maxTicksLimit: 12 } }
        }
      }
    });
  }

  SLIDERS.forEach((k) => $("s-" + k).addEventListener("input", update));

  // ---------- Reset ----------
  $("reset-btn").addEventListener("click", () => {
    Object.keys(MODEL_DEFAULTS).forEach((k) => { $("s-" + k).value = MODEL_DEFAULTS[k]; });
    update();
    flashStatus("Reset to default assumptions.");
  });

  // ---------- Shareable scenario via URL hash ----------
  function flashStatus(msg) {
    const el = $("share-status");
    el.textContent = msg;
    clearTimeout(flashStatus._t);
    flashStatus._t = setTimeout(() => { el.textContent = ""; }, 3000);
  }

  $("share-btn").addEventListener("click", () => {
    const inp = readInputs();
    const params = new URLSearchParams(inp).toString();
    const url = location.origin + location.pathname + "#" + params;
    const done = () => flashStatus("Scenario link copied to clipboard.");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(() => {
        history.replaceState(null, "", "#" + params); flashStatus("Link in address bar.");
      });
    } else {
      history.replaceState(null, "", "#" + params); flashStatus("Link in address bar.");
    }
  });

  function loadFromHash() {
    if (!location.hash) return;
    const params = new URLSearchParams(location.hash.slice(1));
    SLIDERS.forEach((k) => {
      if (params.has(k)) {
        const el = $("s-" + k);
        el.value = params.get(k);
      }
    });
  }
  loadFromHash();

  // ---------- Init ----------
  $("year").textContent = new Date().getFullYear();
  update();
})();
