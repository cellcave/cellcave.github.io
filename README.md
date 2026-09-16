# CELL CAVE Website

This is the clean, GitHub Pages-ready CELL CAVE website.

## The only files you will usually edit

- `assets/js/config.js` — company name, email, logo, store links, social links, Featured App ID.
- `assets/js/apps-data.js` — add/edit apps and app store URLs.
- `assets/css/site.css` — website design and responsive styles.
- `index.html` — homepage structure only.

## Main folders

- `assets/` — CSS, JavaScript, logo, and app icons.
- `apps/` — app pages, privacy pages, and account deletion pages.
- `about/` — About page.
- `support/` — Support page.
- `privacy/` — website privacy page.
- `terms/` — Terms page.
- `app-store/` — App Store coming-soon page.

## Social links

Edit only `assets/js/config.js`:

```js
socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    x: ""
}
```

Add the real URL beside each platform. Empty URLs stay visible as disabled footer icons, so no fake links are created.

## Featured App

Edit only this value in `assets/js/config.js`:

```js
featuredAppId: "cloud-backup-photo-storage"
```

## Homepage Explore Our Apps slider

Desktop shows 3 apps at a time, tablet shows 2, and mobile shows 1. The arrows move one app at a time.

## GitHub Pages

Publish from the `main` branch and `/(root)` folder.
