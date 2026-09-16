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

    function socialIcon(name) {
        const icons = {
            facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.4v3h2.8v8h3.4Z"/></svg>`,
            instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>`,
            linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.4 7.3A2.2 2.2 0 1 1 5.4 3a2.2 2.2 0 0 1 0 4.3ZM3.5 9h3.8v12H3.5V9Zm6.1 0h3.6v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6.1V21h-3.8v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.6V9Z"/></svg>`,
            youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2c-.2-1.4-1.1-2.5-2.4-2.7C17.4 4.2 14.7 4 12 4s-5.4.2-7.2.5C3.5 4.7 2.6 5.8 2.4 7.2 2.1 8.6 2 10.3 2 12s.1 3.4.4 4.8c.2 1.4 1.1 2.5 2.4 2.7 1.8.3 4.5.5 7.2.5s5.4-.2 7.2-.5c1.3-.2 2.2-1.3 2.4-2.7.3-1.4.4-3.1.4-4.8s-.1-3.4-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>`,
            x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h4.5l4.4 5.9L18.1 3H21l-6.8 7.8L21.5 21H17l-4.9-6.6L6.3 21H3.4l7.3-8.5L4 3Zm3.2 2 10.8 14h1L8.2 5h-1Z"/></svg>`
        };
        return icons[name] || `<span>${escapeHtml(name.slice(0, 1).toUpperCase())}</span>`;
    }

    function buildFooter() {
        const nav = (config.navigation || []).map(item => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join("");
        const social = Object.entries(config.socialLinks || {}).map(([name, url]) => {
            const label = name === "x" ? "X" : name.charAt(0).toUpperCase() + name.slice(1);
            const content = `${socialIcon(name)}<span class="sr-only">${escapeHtml(label)}</span>`;
            return url
                ? `<a class="social-button" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(label)}">${content}</a>`
                : `<span class="social-button is-disabled" aria-label="${escapeHtml(label)} link coming soon" title="${escapeHtml(label)} link coming soon">${content}</span>`;
        }).join("");
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
                            ${social ? `<div class="footer-social-wrap"><div class="footer-social-label">Follow CELL CAVE</div><div class="footer-social">${social}</div></div>` : ""}
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
