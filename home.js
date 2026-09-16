(function () {
    "use strict";
    const api = window.CellCave;
    if (!api) return;
    const apps = api.apps;
    const config = api.config;

    const appGrid = document.getElementById("homeAppsGrid");
    const homeAppsViewport = document.getElementById("homeAppsViewport");
    const homeAppsPrev = document.getElementById("homeAppsPrev");
    const homeAppsNext = document.getElementById("homeAppsNext");
    const homeAppsSliderCount = document.getElementById("homeAppsSliderCount");

    if (appGrid) appGrid.innerHTML = apps.map(api.appCardMarkup).join("");

    function initHomeAppsSlider() {
        if (!appGrid || !homeAppsViewport || !homeAppsPrev || !homeAppsNext || !apps.length) return;

        function getCards() {
            return Array.from(appGrid.querySelectorAll(".app-card"));
        }

        function getStep() {
            const cards = getCards();
            if (!cards.length) return 0;
            const styles = window.getComputedStyle(appGrid);
            const gap = parseFloat(styles.columnGap || styles.gap) || 0;
            return cards[0].getBoundingClientRect().width + gap;
        }

        function currentIndex() {
            const step = getStep();
            if (!step) return 0;
            return Math.max(0, Math.min(apps.length - 1, Math.round(homeAppsViewport.scrollLeft / step)));
        }

        function updateControls() {
            const index = currentIndex();
            const maxScroll = Math.max(0, homeAppsViewport.scrollWidth - homeAppsViewport.clientWidth - 2);
            homeAppsPrev.disabled = homeAppsViewport.scrollLeft <= 2;
            homeAppsNext.disabled = homeAppsViewport.scrollLeft >= maxScroll;
            if (homeAppsSliderCount) homeAppsSliderCount.textContent = `${index + 1} / ${apps.length}`;
        }

        function move(direction) {
            const step = getStep();
            if (!step) return;
            homeAppsViewport.scrollBy({ left: direction * step, behavior: "smooth" });
        }

        homeAppsPrev.addEventListener("click", function () { move(-1); });
        homeAppsNext.addEventListener("click", function () { move(1); });

        homeAppsViewport.addEventListener("scroll", function () {
            window.requestAnimationFrame(updateControls);
        }, { passive: true });

        homeAppsViewport.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
            }
        });

        window.addEventListener("resize", updateControls);
        updateControls();
    }

    initHomeAppsSlider();

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
