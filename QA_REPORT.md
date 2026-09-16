# CELL CAVE Website QA Report

## Scope

The supplied website was reviewed and rebuilt as a modular, data-driven GitHub Pages site with centralized global configuration, centralized app data, reusable global header/footer, reusable app components, responsive layouts, and the supplied official CELL CAVE logo.

## Automated checks completed

- 21 HTML pages checked.
- All HTML pages contain a title, meta description, global header mount, and global footer mount.
- Internal file/link audit: **0 broken internal paths found**.
- Duplicate HTML ID audit: **0 duplicate IDs found**.
- JavaScript syntax validation with Node: **all shared JavaScript files passed**.
- Centralized app data audit:
  - 6 unique app IDs.
  - 6 unique app routes.
  - Featured App ID resolves correctly.
  - All referenced local app icons exist.
  - Official CELL CAVE logo asset exists.
  - Switch Smart has no fake Google Play URL and remains marked Coming Soon.
- Removed obsolete homepage files/logic (`content.js` and the old `index-final-fixed.html`).
- Support email appears only in `assets/js/config.js`; pages hydrate it from that centralized value.

## Browser rendering checks

The complete site was rendered in headless Chromium using in-memory assets at two viewport sizes:

- Desktop: **1440 × 900**
- Mobile: **390 × 844**

Result: **42 rendered page states tested, 0 failures**.

Checks included:

- No page-level horizontal overflow.
- Global header rendered on every page.
- Global footer rendered on every page.
- No runtime page errors in the tested states.
- Legal/privacy tables remain locally scrollable instead of breaking mobile layout.

## Interaction checks

- Homepage single-app explorer:
  - Moves one app at a time.
  - Correct sequence from 1/6 through 6/6.
  - Correct route on each displayed icon.
  - Switch Smart appears as 6/6 and Coming Soon.
  - Next button disables at the last app.
- Mobile navigation:
  - Closed by default.
  - Opens correctly with the menu button.
- Apps page filters:
  - All Apps: 6.
  - Available: 5.
  - Coming Soon: 1.
- Featured App:
  - Uses the centralized `featuredAppId`.
  - Featured icon redirects to the selected app page.
- Switch Smart:
  - Dedicated page renders from centralized app data.
  - Premium Coming Soon section renders.
  - No fake direct Google Play listing is shown.
  - Privacy route is correct.
- Support page:
  - All 6 apps appear from centralized app data.
  - Email is hydrated from centralized configuration.

## Maintenance architecture

Global values are controlled from:

`assets/js/config.js`

App/product values are controlled from:

`assets/js/apps-data.js`

Shared header/footer and reusable component logic are controlled from:

`assets/js/site.js`

Detailed maintenance instructions are in `README.md`.

## Store-link note

The website preserves the app names supplied in the original project. The Cloud Backup package URL is valid, but its current Google Play listing title may differ from the name used in the supplied website source. This was intentionally not renamed automatically because the supplied privacy/account-deletion content uses the existing website product name.
