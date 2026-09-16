(function () {
    "use strict";
    const api = window.CellCave;
    if (!api) return;
    const apps = api.apps;
    const config = api.config;

    const appGrid = document.getElementById("homeAppsGrid");
    if (appGrid) appGrid.innerHTML = apps.map(api.appCardMarkup).join("");

    const featured = document.getElementById("featuredApp");
    if (featured) featured.innerHTML = api.featuredMarkup();

    const count = document.getElementById("heroAppCount");
    if (count) count.textContent = String(apps.length).padStart(2, "0");

    const stage = document.getElementById("appExplorerStage");
    const iconLink = document.getElementById("appExplorerIcon");
    const name = document.getElementById("appExplorerName");
    const meta = document.getElementById("appExplorerMeta");
    const prev = document.getElementById("appExplorerPrev");
    const next = document.getElementById("appExplorerNext");
    if (!stage || !iconLink || !name || !meta || !prev || !next || !apps.length) return;

    let index = 0;

    function render(direction) {
        const app = apps[index];
        iconLink.href = app.route;
        iconLink.setAttribute("aria-label", `Open ${app.name}`);
        iconLink.innerHTML = app.icon
            ? `<img src="${api.escapeHtml(app.icon)}" alt="${api.escapeHtml(app.name)} icon">`
            : api.escapeHtml(app.fallbackInitials || "APP");
        name.textContent = app.name;
        meta.textContent = `${index + 1} / ${apps.length}${app.status === "coming-soon" ? " · Coming Soon" : ""}`;
        prev.disabled = index === 0;
        next.disabled = index === apps.length - 1;

        stage.classList.remove("slide-next", "slide-prev");
        if (direction) {
            void stage.offsetWidth;
            stage.classList.add(direction === "next" ? "slide-next" : "slide-prev");
        }
    }

    prev.addEventListener("click", function () {
        if (index > 0) { index -= 1; render("prev"); }
    });
    next.addEventListener("click", function () {
        if (index < apps.length - 1) { index += 1; render("next"); }
    });
    render();
})();
