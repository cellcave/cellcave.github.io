(function () {
    "use strict";
    const api = window.CellCave;
    if (!api) return;
    const list = document.getElementById("supportAppList");
    if (!list) return;
    list.innerHTML = api.apps.map(app => {
        const icon = app.icon
            ? `<img src="${api.escapeHtml(app.icon)}" alt="${api.escapeHtml(app.name)} icon">`
            : `<span class="support-app-fallback">${api.escapeHtml(app.fallbackInitials || "APP")}</span>`;
        return `<a class="support-app-link" href="${api.escapeHtml(app.route)}">${icon}<span><strong>${api.escapeHtml(app.name)}</strong><span>${app.status === "coming-soon" ? "Coming Soon" : "App support & details"}</span></span></a>`;
    }).join("");
})();
