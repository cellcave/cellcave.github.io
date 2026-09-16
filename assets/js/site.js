(function () {
    "use strict";

    const config = window.CELL_CAVE_CONFIG || {};
    const apps = window.CELL_CAVE_APPS || [];

    function escapeHtml(value) {
        return String(value ?? "").replace(/[&<>'"]/g, function (char) {
            return ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"})[char];
        });
    }

    function getAppById(id) {
        return apps.find(app => app.id === id) || null;
    }

    function appIconMarkup(app, className) {
        const cls = className || "app-card-icon";
        if (app && app.icon) {
            return `<span class="${cls}"><img src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.name)} icon"></span>`;
        }
        const initials = (app && (app.fallbackInitials || app.shortName || app.name)) || "APP";
        const fallback = String(initials).split(/\s+/).map(part => part[0]).join("").slice(0,2).toUpperCase();
        return `<span class="${cls}">${escapeHtml(fallback)}</span>`;
    }

    function statusBadge(app) {
        return app && app.status === "coming-soon"
            ? `<span class="badge coming-soon">Coming Soon</span>`
            : `<span class="badge">Available</span>`;
    }

    function appCardMarkup(app) {
        return `
            <article class="app-card" data-app-status="${escapeHtml(app.status)}">
                <div class="app-card-top">
                    ${appIconMarkup(app, app.icon ? "app-card-icon" : "app-icon-fallback")}
                    ${statusBadge(app)}
                </div>
                <div class="app-card-category">${escapeHtml(app.category)}</div>
                <h3>${escapeHtml(app.name)}</h3>
                <p>${escapeHtml(app.shortDescription)}</p>
                <a class="app-card-link" href="${escapeHtml(app.route)}" aria-label="View ${escapeHtml(app.name)}">View app →</a>
            </article>`;
    }

    function featuredMarkup() {
        const featured = getAppById(config.featuredAppId) || apps[0];
        if (!featured) return "";
        const icon = featured.icon
            ? `<img src="${escapeHtml(featured.icon)}" alt="${escapeHtml(featured.name)} icon">`
            : escapeHtml(featured.fallbackInitials || "APP");
        return `
            <div class="featured-shell">
                <div class="featured-visual">
                    <a class="featured-icon-link" href="${escapeHtml(featured.route)}" aria-label="Open ${escapeHtml(featured.name)}">${icon}</a>
                </div>
                <div class="featured-content">
                    <span class="eyebrow">Featured App</span>
                    <h2>${escapeHtml(featured.name)}</h2>
                    <p>${escapeHtml(featured.shortDescription)}</p>
                    <div class="featured-actions">
                        <a class="btn btn-primary" href="${escapeHtml(featured.route)}">Explore Featured App</a>
                        ${featured.googlePlayUrl ? `<a class="btn btn-secondary" href="${escapeHtml(featured.googlePlayUrl)}" target="_blank" rel="noopener noreferrer">Google Play ↗</a>` : ""}
                    </div>
                </div>
            </div>`;
    }

    function buildHeader() {
        const page = document.body.dataset.page || "";
        const links = (config.navigation || []).map(item => {
            const active = page === item.key || (page === "app-detail" && item.key === "apps");
            return `<a href="${escapeHtml(item.href)}" class="${active ? "active" : ""}" ${active ? 'aria-current="page"' : ""}>${escapeHtml(item.label)}</a>`;
        }).join("");

        return `
            <header class="site-header">
                <div class="container header-inner">
                    <a class="brand-link" href="/" aria-label="${escapeHtml(config.brandName)} home">
                        <span class="brand-logo-frame"><img src="${escapeHtml(config.logo)}" alt="${escapeHtml(config.brandName)} logo"></span>
                        <span class="brand-text">${escapeHtml(config.brandName)}</span>
                    </a>
                    <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="siteNav">
                        <span class="nav-toggle-lines"><span></span></span>
                    </button>
                    <nav class="site-nav" id="siteNav" aria-label="Primary navigation">${links}</nav>
                </div>
            </header>`;
    }

    function buildFooter() {
        const nav = (config.navigation || []).map(item => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join("");
        const social = Object.entries(config.socialLinks || {}).filter(([, url]) => Boolean(url)).map(([name, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)}</a>`).join("");
        return `
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <a class="footer-brand-row" href="/">
                                <span class="brand-logo-frame"><img src="${escapeHtml(config.logo)}" alt="${escapeHtml(config.brandName)} logo"></span>
                                <span>${escapeHtml(config.brandName)}</span>
                            </a>
                            <div class="footer-legal-name">${escapeHtml(config.legalName)}</div>
                            <p class="footer-copy">We build apps and digital products designed to make everyday life simpler, smarter, and more convenient.</p>
                            <div class="footer-contact">
                                ${config.email ? `<a data-site-email-link href="mailto:${escapeHtml(config.email)}"><span data-site-email>${escapeHtml(config.email)}</span></a>` : ""}
                                ${config.phone ? `<span>${escapeHtml(config.phone)}</span>` : ""}
                                ${config.address ? `<span>${escapeHtml(config.address)}</span>` : ""}
                            </div>
                            ${social ? `<div class="footer-social">${social}</div>` : ""}
                        </div>
                        <nav class="footer-links" aria-label="Footer navigation">
                            ${nav}
                            <a href="/privacy/">Privacy Policy</a>
                            <a href="/terms/">Terms of Use</a>
                            <a href="${escapeHtml(config.appStoreLandingUrl)}">App Store</a>
                            <a href="${escapeHtml(config.developerGooglePlayUrl)}" target="_blank" rel="noopener noreferrer">Google Play</a>
                        </nav>
                    </div>
                    <div class="footer-bottom">
                        <span>© ${new Date().getFullYear()} ${escapeHtml(config.legalName)}. All rights reserved.</span>
                        <span>Simple ideas. Smart apps. Easier everyday life.</span>
                    </div>
                </div>
            </footer>`;
    }

    function hydrateContactData() {
        document.querySelectorAll("[data-site-email]").forEach(el => { el.textContent = config.email || ""; });
        document.querySelectorAll("[data-site-email-link]").forEach(el => { el.setAttribute("href", config.email ? `mailto:${config.email}` : "#"); });
        document.querySelectorAll("[data-site-legal-name]").forEach(el => { el.textContent = config.legalName || config.brandName || ""; });
        document.querySelectorAll("[data-site-brand-name]").forEach(el => { el.textContent = config.brandName || ""; });
        document.querySelectorAll("[data-site-logo]").forEach(el => { if (config.logo) el.setAttribute("src", config.logo); });
        document.querySelectorAll("[data-site-google-play-link]").forEach(el => { el.setAttribute("href", config.developerGooglePlayUrl || "#"); });
        document.querySelectorAll("[data-site-app-store-link]").forEach(el => { el.setAttribute("href", config.appStoreLandingUrl || "#"); });
    }

    function addHeadDefaults() {
        if (config.favicon && !document.querySelector('link[rel="icon"]')) {
            const icon = document.createElement("link");
            icon.rel = "icon";
            icon.href = config.favicon;
            document.head.appendChild(icon);
        }
        const desc = document.querySelector('meta[name="description"]');
        const description = desc ? desc.content : "CELL CAVE creates apps and digital products designed to make everyday life easier.";
        const baseUrl = String(config.siteUrl || "").replace(/\/$/, "");
        const canonicalUrl = baseUrl ? `${baseUrl}${window.location.pathname || "/"}` : "";
        if (canonicalUrl && !document.head.querySelector('link[rel="canonical"]')) {
            const canonical = document.createElement("link");
            canonical.rel = "canonical";
            canonical.href = canonicalUrl;
            document.head.appendChild(canonical);
        }
        const entries = [
            ["meta", "property", "og:title", document.title],
            ["meta", "property", "og:description", description],
            ["meta", "property", "og:type", "website"],
            ["meta", "property", "og:image", config.logo],
            ["meta", "property", "og:url", canonicalUrl],
            ["meta", "name", "twitter:card", "summary_large_image"]
        ];
        entries.forEach(([tag, key, value, content]) => {
            if (!content || document.head.querySelector(`${tag}[${key}="${value}"]`)) return;
            const el = document.createElement(tag);
            el.setAttribute(key, value);
            el.setAttribute("content", content);
            document.head.appendChild(el);
        });
    }

    const headerSlot = document.getElementById("siteHeader");
    const footerSlot = document.getElementById("siteFooter");
    if (headerSlot) headerSlot.outerHTML = buildHeader();
    if (footerSlot) footerSlot.outerHTML = buildFooter();

    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("siteNav");
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            const open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        });
        nav.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    hydrateContactData();
    addHeadDefaults();

    window.CellCave = Object.freeze({
        config,
        apps,
        getAppById,
        appIconMarkup,
        statusBadge,
        appCardMarkup,
        featuredMarkup,
        escapeHtml
    });
})();
