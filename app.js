(() => {
  "use strict";

  const data = window.PROJECT_DATA || { meta: {}, tasks: [], roadmap: [] };
  const stateLabels = {
    READY: "着手可能",
    DOING: "作業中",
    INBOX: "待機",
    REVIEW: "確認待ち",
    BLOCKED: "ブロック",
    DONE: "完了",
    DROPPED: "対象外"
  };
  const boardStates = ["READY", "DOING", "REVIEW", "BLOCKED"];

  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[char]);
  const minutesFrom = (estimate = "") => Number.parseInt(estimate, 10) || 0;

  function renderOverview() {
    const tasks = data.tasks.filter((task) => task.status !== "DROPPED");
    const done = tasks.filter((task) => task.status === "DONE").length;
    const percent = tasks.length ? Math.round((done / tasks.length) * 100) : 0;
    const planned = data.meta.plannedMinutes || data.tasks
      .filter((task) => task.bucket === "今週")
      .reduce((sum, task) => sum + minutesFrom(task.estimate), 0);
    const capacity = data.meta.weeklyCapacity || 180;
    const next = tasks.find((task) => task.id === data.meta.nextTaskId) || tasks.find((task) => task.status === "READY");

    byId("lastUpdated").textContent = `最終更新 ${data.meta.updated || "—"}`;
    byId("phaseBadge").textContent = data.meta.phase || "進行中";
    byId("doneCount").textContent = done;
    byId("totalCount").textContent = tasks.length;
    byId("progressPercent").textContent = `${percent}%`;
    byId("progressRing").style.setProperty("--progress", `${percent * 3.6}deg`);
    byId("progressRing").setAttribute("aria-label", `全体進捗 ${percent}パーセント`);
    byId("plannedMinutes").textContent = planned;
    byId("capacityBar").style.width = `${Math.min(100, Math.round((planned / capacity) * 100))}%`;
    byId("bufferMinutes").textContent = `${Math.max(0, capacity - planned)}分の余白`;

    if (next) {
      byId("nextTaskId").textContent = next.id;
      byId("nextTaskTitle").textContent = next.title;
      byId("nextTaskDone").textContent = next.done || "完了条件を確認して着手する";
      byId("nextTaskEstimate").textContent = next.estimate;
      byId("nextTaskPriority").textContent = next.priority;
    }

    ["READY", "DOING", "REVIEW", "BLOCKED"].forEach((status) => {
      const target = byId(`${status.toLowerCase()}Count`);
      if (target) target.textContent = tasks.filter((task) => task.status === status).length;
    });
  }

  function renderWbs() {
    const target = byId("wbsRows");
    target.innerHTML = data.roadmap.map((item, index) => {
      const start = Math.max(1, item.week || index + 1);
      const progress = item.progress || 0;
      return `
        <div class="wbs-row">
          <div class="wbs-label">
            <span class="week-number">${String(start).padStart(2, "0")}</span>
            <div><strong>${escapeHtml(item.purpose)}</strong><small>${escapeHtml(item.deliverable)}</small></div>
          </div>
          <div class="timeline" aria-label="第${start}週">
            <i class="timeline-bar ${index === 0 ? "current" : ""}" style="grid-column:${start} / span 1"></i>
          </div>
          <span class="wbs-progress">${progress}%</span>
        </div>`;
    }).join("");
  }

  function taskCard(task) {
    return `<article class="task-card">
      <div class="task-card-top"><span class="task-id">${escapeHtml(task.id)}</span><span class="priority ${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span></div>
      <h3>${escapeHtml(task.title)}</h3>
      <div class="task-card-foot"><span>${escapeHtml(task.estimate)}</span><span>${escapeHtml(task.dependency || "依存なし")}</span></div>
    </article>`;
  }

  function renderBoard() {
    byId("taskBoard").innerHTML = boardStates.map((status) => {
      const tasks = data.tasks.filter((task) => task.status === status);
      return `<div class="board-column">
        <div class="board-head"><span class="board-title"><span class="stat-dot ${status.toLowerCase()}"></span>${stateLabels[status]}</span><span class="board-count">${tasks.length}</span></div>
        <div>${tasks.length ? tasks.map(taskCard).join("") : '<div class="column-empty">タスクなし</div>'}</div>
      </div>`;
    }).join("");
  }

  function renderTaskTable() {
    const query = byId("taskSearch").value.trim().toLowerCase();
    const status = byId("statusFilter").value;
    const tasks = data.tasks.filter((task) => {
      const matchesQuery = !query || `${task.id} ${task.title} ${task.done}`.toLowerCase().includes(query);
      return matchesQuery && (status === "ALL" || task.status === status);
    });

    byId("taskTableBody").innerHTML = tasks.map((task) => `
      <div class="task-table-row" role="row">
        <span class="table-id" role="cell">${escapeHtml(task.id)}</span>
        <span class="table-task" role="cell">${escapeHtml(task.title)}</span>
        <span role="cell"><span class="state-badge state-${task.status.toLowerCase()}">${escapeHtml(stateLabels[task.status] || task.status)}</span></span>
        <span role="cell">${escapeHtml(task.priority)}</span>
        <span role="cell">${escapeHtml(task.estimate)}</span>
      </div>`).join("");
    byId("emptyState").hidden = tasks.length > 0;
  }

  function setupNavigation() {
    const menuButton = byId("menuButton");
    const scrim = byId("sidebarScrim");
    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      scrim.hidden = true;
    };
    menuButton.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", String(open));
      scrim.hidden = !open;
    });
    scrim.addEventListener("click", closeMenu);
    document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", closeMenu));

    const sections = [...document.querySelectorAll(".page-section")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.section === visible.target.id));
    }, { rootMargin: "-20% 0px -60%", threshold: [0.05, 0.2] });
    sections.forEach((section) => observer.observe(section));
  }

  function init() {
    renderOverview();
    renderWbs();
    renderBoard();
    renderTaskTable();
    setupNavigation();
    byId("taskSearch").addEventListener("input", renderTaskTable);
    byId("statusFilter").addEventListener("change", renderTaskTable);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
