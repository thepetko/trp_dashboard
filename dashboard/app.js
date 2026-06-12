const STORAGE_KEY = "trp-dashboard-v1";

const initialState = {
  metrics: [
    { id: "youtube", label: "Prehratia hlavných videí", value: 0, target: 500, color: "#1d62c7" },
    { id: "reach", label: "Unikátny reach", value: 0, target: 500, color: "#48b7ae" },
    { id: "social", label: "Prehratia sociálnych videí", value: 0, target: 700, color: "#d53a4a" }
  ],
  resultsNote: "",
  tasks: [
    { id: 1, title: "Potvrdiť publikačný dátum prvého videa", detail: "Zladiť termín so Zuzkou a publikovaním teaseru.", due: "2026-06-19", phase: "Jún", status: "next" },
    { id: 2, title: "Pripraviť post k téme Bezpečie v triede", detail: "Použiť hlavné CTA: Pozrite si celé video na YouTube.", due: "2026-06-17", phase: "Jún", status: "next" },
    { id: 3, title: "Vyrobiť prvý reel z úseku 7:15–7:47", detail: "Video 1: učenie je bez bezpečia takmer nemožné.", due: "2026-06-18", phase: "Jún", status: "next" },
    { id: 4, title: "Poslať Zuzke draft postu a stories", detail: "Jeden dokument, jedno CTA, odkazy na teaser a Video 1.", due: "2026-06-18", phase: "Jún", status: "next" },
    { id: 5, title: "Zapísať prvé výsledky kampane", detail: "YouTube views, unikátny reach a social video views samostatne.", due: "2026-06-22", phase: "Priebežne", status: "progress" },
    { id: 6, title: "Pripraviť letný post o regenerácii", detail: "Použiť Video 3 a jemné CTA na kurz.", due: "2026-07-15", phase: "Leto", status: "backlog" },
    { id: 7, title: "Pripraviť augustový preventívny obsah", detail: "Tvorba bezpečia začína pred prvým problémom.", due: "2026-08-24", phase: "August", status: "backlog" }
  ],
  videos: [
    {
      id: "teaser", label: "Teaser", title: "Prečo vznikol miniseriál", duration: "0:55",
      url: "https://www.youtube.com/watch?v=uLuK8L4_81A",
      role: "Štart kampane a pozvanie k celej sérii.",
      post: "Ticho v triede ešte nemusí znamenať bezpečie. Náročné správanie môže byť signálom, že nervový systém dieťaťa hľadá spôsob, ako situáciu zvládnuť.",
      clips: [
        { id: "t1", time: "0:05–0:34", title: "Za správaním je príbeh", hook: "Za náročným správaním nie je vždy vzdor.", point: "Správanie môže komunikovať vnútornú nepohodu a dospelý má pri regulácii kľúčovú rolu.", status: "idea" }
      ]
    },
    {
      id: "v1", label: "Video 1", title: "Tvorba bezpečia", duration: "11:05",
      url: "https://www.youtube.com/watch?v=wALeNS80uEY",
      role: "Hlavné júnové video. Vysvetľuje bezpečie, učenie, kontext, voľbu a spojenie.",
      post: "Bezpečie v triede nie je bonus. Je to podmienka učenia. Učiteľ ho spoluvytvára cez kontext, primeranú voľbu a spojenie.",
      clips: [
        { id: "v1c1", time: "2:39–2:58", title: "Čo je bezpečie", hook: "Bezpečie nie je len to, že sa nič zlé nedeje.", point: "Je to aj vnútorný pocit prijatia a zrozumiteľnosti sveta.", status: "idea" },
        { id: "v1c2", time: "7:15–7:47", title: "Učíme sa len v bezpečí", hook: "Prečo sa dieťa niekedy nedokáže učiť, aj keď sedí potichu?", point: "Mozog v ohrození skenuje hrozby namiesto spracovania nových informácií.", status: "selected" },
        { id: "v1c3", time: "8:20–8:46", title: "Učiteľ ako dôležitý dospelý", hook: "Bezpečie v triede nie je luxus.", point: "Učiteľ môže dieťaťu poskytnúť skúsenosť, ktorá vyvažuje záťaž mimo školy.", status: "selected" },
        { id: "v1c4", time: "3:00–3:34", title: "Tri piliere bezpečia", hook: "Tri veci, ktoré nervový systém v triede potrebuje.", point: "Kontext, voľba a spojenie.", status: "idea" }
      ]
    },
    {
      id: "v2", label: "Video 2", title: "Náročné správanie a regulácia", duration: "9:19",
      url: "https://www.youtube.com/watch?v=wtE9UbLJ5tA",
      role: "Druhá fáza kampane. Predstavuje TRP ako optiku a učiteľa ako termostat.",
      post: "Čo ak náročné správanie nie je útok na učiteľa? Môže byť neúspešným pokusom dieťaťa zvládnuť napätie, ktoré ešte nevie inak spracovať.",
      clips: [
        { id: "v2c1", time: "0:47–1:16", title: "Vymeňme nálepku za otázku", hook: "Drzáň. Ignorant. Manipulátor. Pomáhajú nám tieto nálepky?", point: "Namiesto hodnotenia pozorujeme, čo správanie komunikuje.", status: "idea" },
        { id: "v2c2", time: "2:33–3:07", title: "Nie je to útok na mňa", hook: "Náročné správanie dieťaťa nie je vždy reakciou na vás.", point: "Môže ísť o neúspešný pokus zvládnuť napätie.", status: "selected" },
        { id: "v2c3", time: "3:14–4:26", title: "Tri úrovne regulácie", hook: "Regulácia neprebieha len cez rozum.", point: "Telesná, vzťahová a rozumová regulácia sú rovnako dôležité.", status: "idea" },
        { id: "v2c4", time: "5:24–5:58", title: "Termostat verzus teplomer", hook: "Ste v triede teplomer alebo termostat?", point: "Pokojný dospelý nekopíruje napätie, ale pomáha meniť klímu.", status: "selected" },
        { id: "v2c5", time: "6:08–6:27", title: "Dieťa sa učí regulovať cez nás", hook: "Dieťa sa nenaučí regulovať iba pokynom „upokoj sa“.", point: "Najprv potrebuje zažívať reguláciu pokojného dospelého.", status: "idea" }
      ]
    },
    {
      id: "v3", label: "Video 3", title: "Regenerácia a odolnosť", duration: "11:00",
      url: "https://www.youtube.com/watch?v=B51FxrnwLZ4",
      role: "Letný obsah, regenerácia učiteľov a jemné CTA na kurz.",
      post: "Odolnosť nevzniká tým, že vydržíme stále viac, ale tým, že sa po záťaži dokážeme vrátiť k pokoju, bezpečiu a svojim zdrojom.",
      clips: [
        { id: "v3c1", time: "1:41–2:05", title: "Bezpečie nie je život bez stresu", hook: "Cieľom nie je odstrániť zo školy všetok stres.", point: "Primeraný stres môže budovať odolnosť.", status: "idea" },
        { id: "v3c2", time: "3:58–4:42", title: "Odolnosť vzniká pri zotavení", hook: "Nevyčerpáva nás iba stres. Vyčerpáva nás stres bez zotavenia.", point: "Nervový systém potrebuje po záťaži návrat do pokoja.", status: "selected" },
        { id: "v3c3", time: "4:45–5:23", title: "Ako sa najlepšie učíme", hook: "Učíme sa najlepšie v úplnom pokoji alebo pod tlakom?", point: "Optimálne je mierne nabudenie v rámci zachovaného bezpečia.", status: "idea" },
        { id: "v3c4", time: "6:35–6:59", title: "Aj učiteľ potrebuje reguláciu", hook: "Učiteľ nemôže byť nekonečným zdrojom pokoja.", point: "Oporou vieme byť vtedy, keď sa staráme aj o vlastný nervový systém.", status: "idea" },
        { id: "v3c5", time: "10:37–10:52", title: "Tvorba bezpečia začína u nás", hook: "Tvorba bezpečia začína u nás samých.", point: "Regenerujúci dospelý dokáže vytvárať prostredie pre rozvoj detí.", status: "idea" }
      ]
    }
  ],
  calendar: [
    { id: 1, date: "2026-06-19", title: "Teaser série", channel: "Instagram / Facebook", cta: "Pozrite si Video 1", status: "planned" },
    { id: 2, date: "2026-06-22", title: "Učíme sa len v bezpečí", channel: "Reel", cta: "Pozrite si celé video", status: "planned" },
    { id: 3, date: "2026-06-24", title: "Učiteľ ako dôležitý dospelý", channel: "Reel / Post", cta: "Pozrite si celé video", status: "planned" },
    { id: 4, date: "2026-06-26", title: "Tri piliere bezpečia", channel: "Carousel", cta: "Pozrite si celé video", status: "planned" },
    { id: 5, date: "2026-06-29", title: "Nie je to útok na mňa", channel: "Reel", cta: "Pozrite si Video 2", status: "planned" },
    { id: 6, date: "2026-07-15", title: "Odolnosť vzniká pri zotavení", channel: "Reel / Post", cta: "Pozrite si Video 3", status: "planned" },
    { id: 7, date: "2026-08-24", title: "Bezpečie začína pred prvým problémom", channel: "Instagram / Facebook", cta: "Pozrite si sériu", status: "planned" }
  ]
};

const library = [
  { type: "YouTube", title: "Teaser minisérie", description: "Krátke predstavenie celej série.", href: "https://www.youtube.com/watch?v=uLuK8L4_81A", external: true },
  { type: "YouTube", title: "1. Tvorba bezpečia", description: "Bezpečie, kontext, voľba a spojenie.", href: "https://www.youtube.com/watch?v=wALeNS80uEY", external: true },
  { type: "YouTube", title: "2. Náročné správanie", description: "Regulácia, odstup a úloha dospelého.", href: "https://www.youtube.com/watch?v=wtE9UbLJ5tA", external: true },
  { type: "YouTube", title: "3. Regenerácia a odolnosť", description: "Stres, zotavenie a zdroje učiteľov.", href: "https://www.youtube.com/watch?v=B51FxrnwLZ4", external: true },
  { type: "Pracovný podklad", title: "Obsahová mapa videí", description: "Detailné časové značky, hooky a drafty.", href: "../TRP_video_obsahova_mapa.md" },
  { type: "Pracovný podklad", title: "Realizačný balíček", description: "Kompletný pôvodný návrh kampane.", href: "../TRP_realizacny_balicek.md" },
  { type: "Tabuľka", title: "Pôvodný obsahový kalendár", description: "Zdrojová CSV tabuľka.", href: "../TRP_obsahovy_kalendar_jun_2026.csv" },
  { type: "Tabuľka", title: "Pôvodný merací tracker", description: "Zdrojová CSV tabuľka KPI.", href: "../TRP_meraci_tracker.csv" },
  { type: "Prezentácia", title: "Klientska prezentácia", description: "PDF návrhu kampane.", href: "../output/pdf/TRP_minikampan_klientska_prezentacia.pdf" }
];

let state = loadState();
let activeVideo = "v1";
let taskFilter = "all";

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...initialState, ...saved } : structuredClone(initialState);
  } catch {
    return structuredClone(initialState);
  }
}

function saveState(message = "Zmena bola uložená") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showToast(message);
  renderOverview();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 1800);
}

function formatDate(value) {
  if (!value) return "Bez termínu";
  return new Intl.DateTimeFormat("sk-SK", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function statusLabel(status) {
  return { next: "Najbližšie", progress: "Rozpracované", done: "Hotové", backlog: "Neskôr", planned: "Plánované", published: "Publikované", idea: "Nápad", selected: "Vybrané", editing: "V strihu" }[status] || status;
}

function setView(id) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === id));
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === id));
  const titles = { overview: "Prehľad projektu", tasks: "Úlohy", content: "Obsah a strihy", calendar: "Kalendár", results: "Výsledky", library: "Knižnica" };
  document.getElementById("viewTitle").textContent = titles[id];
  document.querySelector(".sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderOverview() {
  const priority = state.tasks.filter(task => task.status === "next" || task.status === "progress").sort((a,b) => (a.due || "9999").localeCompare(b.due || "9999")).slice(0, 3);
  document.getElementById("nextActions").innerHTML = priority.map(task => `
    <article class="action-card ${task.status === "done" ? "done" : ""}">
      <div class="action-card-top">
        <span class="status-dot ${task.status}"></span>
        <span class="date-pill">${formatDate(task.due)}</span>
      </div>
      <h4>${escapeHtml(task.title)}</h4>
      <p>${escapeHtml(task.detail)}</p>
    </article>
  `).join("") || "<p>Všetky najbližšie úlohy sú hotové.</p>";

  document.getElementById("overviewMetrics").innerHTML = state.metrics.map(metric => {
    const progress = Math.min(100, Math.round(metric.value / metric.target * 100));
    return `<div>
      <div class="metric-row-head"><span>${metric.label}</span><strong>${metric.value} / ${metric.target}</strong></div>
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%;background:${metric.color}"></div></div>
    </div>`;
  }).join("");

  document.getElementById("phaseList").innerHTML = [
    ["do 30. 6.", "Bezpečie v triede", "Video 1, teaser a prvé reels", "current"],
    ["júl", "Regenerácia", "Jeden ľahší letný obsah", ""],
    ["koniec aug.", "Prevencia", "Bezpečie pred začiatkom roka", ""],
    ["priebežne", "Meranie", "Views, reach a učenia", ""]
  ].map(([date,title,text,current]) => `<div class="phase">
    <span class="phase-date">${date}</span>
    <div><strong>${title}</strong><p>${text}</p></div>
    <span class="phase-state ${current}">${current ? "Teraz" : "Neskôr"}</span>
  </div>`).join("");

  const focus = state.tasks.find(task => task.status === "next") || state.tasks.find(task => task.status === "progress");
  document.getElementById("focusTitle").textContent = focus ? focus.title : "Skontrolovať výsledky";
  document.getElementById("focusDescription").textContent = focus ? focus.detail : "Aktualizuj metriky a vyber ďalší obsah.";
  document.getElementById("focusLink").href = state.videos.find(video => video.id === "v1").url;
}

function renderTasks() {
  const filtered = state.tasks.filter(task => {
    if (taskFilter === "all") return true;
    return task.status === taskFilter;
  }).sort((a,b) => (a.due || "9999").localeCompare(b.due || "9999"));

  document.getElementById("taskList").innerHTML = filtered.map(task => `
    <article class="task-item ${task.status === "done" ? "completed" : ""}">
      <input class="task-check" type="checkbox" ${task.status === "done" ? "checked" : ""} data-task-check="${task.id}" aria-label="Označiť úlohu ako hotovú">
      <div><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.detail || "")}</p></div>
      <span class="task-phase">${task.phase}</span>
      <span class="task-due">${formatDate(task.due)}</span>
      <div>
        <select class="status-select" data-task-status="${task.id}">
          ${["next","progress","backlog","done"].map(status => `<option value="${status}" ${task.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
        </select>
        <button class="delete-button" data-task-delete="${task.id}" aria-label="Odstrániť">×</button>
      </div>
    </article>
  `).join("") || "<p>V tomto filtri nie sú žiadne úlohy.</p>";
}

function renderContent() {
  document.getElementById("videoTabs").innerHTML = state.videos.map(video => `
    <button class="video-tab ${video.id === activeVideo ? "active" : ""}" data-video="${video.id}">
      <span>${video.label} · ${video.duration}</span>${video.title}
    </button>
  `).join("");

  const video = state.videos.find(item => item.id === activeVideo);
  document.getElementById("videoDetail").innerHTML = `
    <div class="video-layout">
      <aside class="video-summary">
        <span class="tag">${video.label} · ${video.duration}</span>
        <h3>${video.title}</h3>
        <p>${video.role}</p>
        <p><strong>Textová os:</strong><br>${video.post}</p>
        <a class="button" href="${video.url}" target="_blank" rel="noreferrer">Otvoriť na YouTube</a>
      </aside>
      <div class="clip-list">
        ${video.clips.map(clip => `
          <article class="clip">
            <div class="clip-top">
              <div>
                <span class="clip-time">${clip.time}</span>
                <h4>${clip.title}</h4>
              </div>
              <span class="phase-state ${clip.status === "selected" ? "current" : ""}">${statusLabel(clip.status)}</span>
            </div>
            <p class="clip-hook"><strong>Hook:</strong> ${clip.hook}</p>
            <p><strong>Pointa:</strong> ${clip.point}</p>
            <div class="clip-actions">
              <span>CTA: Pozrite si celé video na YouTube</span>
              <select class="clip-status" data-clip="${clip.id}" data-video-id="${video.id}">
                ${["idea","selected","editing","published"].map(status => `<option value="${status}" ${clip.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
              </select>
            </div>
          </article>
        `).join("")}
      </div>
    </div>`;
}

function renderCalendar() {
  const items = [...state.calendar].sort((a,b) => a.date.localeCompare(b.date));
  document.getElementById("calendarList").innerHTML = items.map(item => `
    <article class="calendar-item">
      <span class="calendar-date">${formatDate(item.date)}</span>
      <div class="calendar-title"><strong>${escapeHtml(item.title)}</strong><span>${statusLabel(item.status)}</span></div>
      <span class="calendar-channel">${escapeHtml(item.channel)}</span>
      <span class="calendar-cta">${escapeHtml(item.cta)}</span>
      <select class="status-select" data-calendar-status="${item.id}">
        ${["planned","published"].map(status => `<option value="${status}" ${item.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
      </select>
      <button class="delete-button" data-calendar-delete="${item.id}" aria-label="Odstrániť">×</button>
    </article>
  `).join("");
}

function renderResults() {
  document.getElementById("metricEditor").innerHTML = state.metrics.map(metric => `
    <article class="metric-card">
      <label for="metric-${metric.id}">${metric.label}</label>
      <div class="metric-input-row">
        <input id="metric-${metric.id}" type="number" min="0" value="${metric.value}" data-metric="${metric.id}">
        <span>/ ${metric.target}</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100, metric.value / metric.target * 100)}%;background:${metric.color}"></div></div>
      <small>${Math.round(metric.value / metric.target * 100)} % cieľa</small>
    </article>
  `).join("");
  document.getElementById("resultsNote").value = state.resultsNote || "";
}

function renderLibrary() {
  document.getElementById("libraryGrid").innerHTML = library.map(item => `
    <a class="library-card" href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer"' : ""}>
      <span class="library-type">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <strong>Otvoriť →</strong>
    </a>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[character]);
}

function bindEvents() {
  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-view]");
    if (nav) setView(nav.dataset.view);
    const go = event.target.closest("[data-go]");
    if (go) setView(go.dataset.go);
    const video = event.target.closest("[data-video]");
    if (video) { activeVideo = video.dataset.video; renderContent(); }
    const deleteTask = event.target.closest("[data-task-delete]");
    if (deleteTask) { state.tasks = state.tasks.filter(task => task.id !== Number(deleteTask.dataset.taskDelete)); saveState("Úloha bola odstránená"); renderTasks(); }
    const deleteCalendar = event.target.closest("[data-calendar-delete]");
    if (deleteCalendar) { state.calendar = state.calendar.filter(item => item.id !== Number(deleteCalendar.dataset.calendarDelete)); saveState("Výstup bol odstránený"); renderCalendar(); }
  });

  document.addEventListener("change", event => {
    if (event.target.matches("[data-task-check]")) {
      const task = state.tasks.find(item => item.id === Number(event.target.dataset.taskCheck));
      task.status = event.target.checked ? "done" : "next";
      saveState(); renderTasks();
    }
    if (event.target.matches("[data-task-status]")) {
      state.tasks.find(item => item.id === Number(event.target.dataset.taskStatus)).status = event.target.value;
      saveState(); renderTasks();
    }
    if (event.target.matches("[data-calendar-status]")) {
      state.calendar.find(item => item.id === Number(event.target.dataset.calendarStatus)).status = event.target.value;
      saveState(); renderCalendar();
    }
    if (event.target.matches("[data-clip]")) {
      const video = state.videos.find(item => item.id === event.target.dataset.videoId);
      video.clips.find(clip => clip.id === event.target.dataset.clip).status = event.target.value;
      saveState(); renderContent();
    }
    if (event.target.matches("[data-metric]")) {
      state.metrics.find(metric => metric.id === event.target.dataset.metric).value = Math.max(0, Number(event.target.value) || 0);
      saveState("Metrika bola uložená"); renderResults();
    }
  });

  document.getElementById("taskFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    taskFilter = button.dataset.filter;
    document.querySelectorAll("#taskFilters .filter").forEach(item => item.classList.toggle("active", item === button));
    renderTasks();
  });

  document.getElementById("resultsNote").addEventListener("input", event => {
    state.resultsNote = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });

  document.getElementById("addTaskButton").addEventListener("click", () => document.getElementById("taskDialog").showModal());
  document.getElementById("addCalendarButton").addEventListener("click", () => document.getElementById("calendarDialog").showModal());
  document.getElementById("menuButton").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));

  document.getElementById("taskForm").addEventListener("submit", event => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    const form = new FormData(event.target);
    state.tasks.push({ id: Date.now(), title: form.get("title"), due: form.get("due"), phase: form.get("phase"), detail: form.get("detail"), status: "next" });
    saveState("Úloha bola pridaná");
    event.target.reset();
    document.getElementById("taskDialog").close();
    renderTasks();
  });

  document.getElementById("calendarForm").addEventListener("submit", event => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    const form = new FormData(event.target);
    state.calendar.push({ id: Date.now(), date: form.get("date"), title: form.get("title"), channel: form.get("channel"), cta: form.get("cta"), status: "planned" });
    saveState("Výstup bol pridaný");
    event.target.reset();
    document.getElementById("calendarDialog").close();
    renderCalendar();
  });

  document.getElementById("exportButton").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `TRP_dashboard_zaloha_${new Date().toISOString().slice(0,10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("importInput").addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = JSON.parse(reader.result);
        saveState("Záloha bola obnovená");
        renderAll();
      } catch {
        showToast("Súbor nie je platná záloha");
      }
    };
    reader.readAsText(file);
  });
}

function renderAll() {
  renderOverview();
  renderTasks();
  renderContent();
  renderCalendar();
  renderResults();
  renderLibrary();
}

document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat("sk-SK", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());
bindEvents();
renderAll();
