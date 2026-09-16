(function () {
    "use strict";

    const api = window.CellCave;
    if (!api) return;

    const apps = api.apps;

    /* Homepage: Explore Our Apps slider */
    const appTrack = document.getElementById("homeAppsGrid");
    const sliderPrev = document.getElementById("homeAppsPrev");
    const sliderNext = document.getElementById("homeAppsNext");
    const sliderCount = document.getElementById("homeAppsSliderCount");

    let sliderIndex = 0;

    function visibleCards() {
        if (window.matchMedia("(max-width: 760px)").matches) return 1;
        if (window.matchMedia("(max-width: 980px)").matches) return 2;
        return 3;
    }

    function renderAppsSlider(direction) {
        if (!appTrack || !apps.length) return;

        const visible = visibleCards();
        const maxStart = Math.max(0, apps.length - visible);
        sliderIndex = Math.min(sliderIndex, maxStart);

        const shownApps = apps.slice(sliderIndex, sliderIndex + visible);
        appTrack.innerHTML = shownApps.map(api.appCardMarkup).join("");

        appTrack.classList.remove("slide-next", "slide-prev");
        if (direction) {
            void appTrack.offsetWidth;
            appTrack.classList.add(direction === "next" ? "slide-next" : "slide-prev");
        }

        if (sliderPrev) sliderPrev.disabled = sliderIndex === 0;
        if (sliderNext) sliderNext.disabled = sliderIndex >= maxStart;
        if (sliderCount) {
            const start = apps.length ? sliderIndex + 1 : 0;
            const end = Math.min(sliderIndex + visible, apps.length);
            sliderCount.textContent = `${start}–${end} of ${apps.length}`;
        }
    }

    if (sliderPrev) {
        sliderPrev.addEventListener("click", function () {
            if (sliderIndex > 0) {
                sliderIndex -= 1;
                renderAppsSlider("prev");
            }
        });
    }

    if (sliderNext) {
        sliderNext.addEventListener("click", function () {
            const maxStart = Math.max(0, apps.length - visibleCards());
            if (sliderIndex < maxStart) {
                sliderIndex += 1;
                renderAppsSlider("next");
            }
        });
    }

    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            renderAppsSlider();
        }, 120);
    });

    renderAppsSlider();

    /* Featured app */
    const featured = document.getElementById("featuredApp");
    if (featured) featured.innerHTML = api.featuredMarkup();

    /* Hero app explorer */
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

    function renderExplorer(direction) {
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
        if (index > 0) {
            index -= 1;
            renderExplorer("prev");
        }
    });

    next.addEventListener("click", function () {
        if (index < apps.length - 1) {
            index += 1;
            renderExplorer("next");
        }
    });

    renderExplorer();
})();
