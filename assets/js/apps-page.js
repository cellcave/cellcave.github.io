(function () {
    "use strict";
    const api = window.CellCave;
    if (!api) return;
    const grid = document.getElementById("appsGrid");
    const featured = document.getElementById("appsFeaturedApp");
    const filters = document.querySelectorAll("[data-app-filter]");

    if (featured) featured.innerHTML = api.featuredMarkup();

    function render(filter) {
        const list = api.apps.filter(app => {
            if (filter === "all") return true;
            return app.status === filter;
        });
        if (grid) grid.innerHTML = list.map(api.appCardMarkup).join("");
    }

    filters.forEach(button => {
        button.addEventListener("click", function () {
            filters.forEach(item => item.classList.remove("active"));
            button.classList.add("active");
            render(button.dataset.appFilter || "all");
        });
    });

    render("all");
})();
