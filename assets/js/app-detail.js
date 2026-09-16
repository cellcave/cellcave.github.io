(function () {
    "use strict";
    const api = window.CellCave;
    if (!api) return;
    const mount = document.getElementById("appPage");
    if (!mount) return;

    const id = mount.dataset.appId;
    const app = api.getAppById(id);
    if (!app) {
        mount.innerHTML = `<section class="not-found"><div class="container"><div class="not-found-card"><div class="not-found-code">404</div><h1>App not found</h1><p>This app could not be found in the centralized app data.</p><a class="btn btn-primary" href="/apps/">Explore Apps</a></div></div></section>`;
        return;
    }

    document.title = `${app.name} | CELL CAVE`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = app.shortDescription;

    const icon = app.icon
        ? `<img src="${api.escapeHtml(app.icon)}" alt="${api.escapeHtml(app.name)} icon">`
        : api.escapeHtml(app.fallbackInitials || "APP");

    const storeButtons = [];
    if (app.googlePlayUrl) {
        storeButtons.push(`<a class="store-button" href="${api.escapeHtml(app.googlePlayUrl)}" target="_blank" rel="noopener noreferrer"><span class="store-icon">▶</span><span>Get it on Google Play</span></a>`);
    }
    if (app.appleAppStoreUrl) {
        storeButtons.push(`<a class="store-button" href="${api.escapeHtml(app.appleAppStoreUrl)}" target="_blank" rel="noopener noreferrer"><span class="store-icon"></span><span>Download on the App Store</span></a>`);
    } else {
        storeButtons.push(`<a class="store-button secondary" href="${api.escapeHtml(api.config.appStoreLandingUrl)}"><span class="store-icon"></span><span>App Store · Coming Soon</span></a>`);
    }
    storeButtons.push(`<a class="store-button secondary" href="${api.escapeHtml(app.privacyRoute)}"><span class="store-icon">◇</span><span>Privacy Policy</span></a>`);

    const extraLinks = (app.extraLinks || []).map(link => `<a class="btn btn-secondary" href="${api.escapeHtml(link.href)}">${api.escapeHtml(link.label)}</a>`).join("");

    const comingSoon = app.status === "coming-soon" ? `
        <section class="section">
            <div class="container">
                <div class="coming-soon-panel">
                    <span class="badge coming-soon">Coming Soon</span>
                    <h2>We’re building the next CELL CAVE experience.</h2>
                    <p>${api.escapeHtml(app.name)} isn’t live yet. We’re working on it. In the meantime, explore the CELL CAVE apps and digital products that are already available.</p>
                    <div class="coming-soon-actions">
                        <a class="btn btn-primary" href="/apps/">Explore Available Apps</a>
                        <a class="btn btn-secondary" href="${api.escapeHtml(api.config.developerGooglePlayUrl)}" target="_blank" rel="noopener noreferrer">CELL CAVE on Google Play ↗</a>
                    </div>
                </div>
            </div>
        </section>` : "";

    mount.innerHTML = `
        <section class="app-detail-hero">
            <div class="container app-detail-grid">
                <div class="app-detail-icon">${icon}</div>
                <div class="app-detail-copy">
                    ${api.statusBadge(app)}
                    <h1>${api.escapeHtml(app.name)}</h1>
                    <p>${api.escapeHtml(app.shortDescription)}</p>
                    <div class="app-detail-actions">${storeButtons.join("")}</div>
                </div>
            </div>
        </section>
        ${comingSoon}
        <section class="section section-white">
            <div class="container detail-grid">
                <article class="detail-card">
                    <span class="eyebrow">About the App</span>
                    <h2>Designed for a simpler digital experience.</h2>
                    <p>${api.escapeHtml(app.description)}</p>
                    ${extraLinks ? `<div class="featured-actions">${extraLinks}</div>` : ""}
                </article>
                <article class="detail-card">
                    <span class="eyebrow">What It Helps With</span>
                    <h2>Focused, practical functionality.</h2>
                    <ul class="feature-list">${(app.features || []).map(item => `<li>${api.escapeHtml(item)}</li>`).join("")}</ul>
                </article>
            </div>
        </section>
        <section class="section">
            <div class="container cta-panel">
                <h2>Need help with ${api.escapeHtml(app.shortName || app.name)}?</h2>
                <p>Visit CELL CAVE Support for app-related questions, privacy information, and contact details.</p>
                <a class="btn" href="/support/">Visit Support</a>
            </div>
        </section>`;
})();
