/*
 * CELL CAVE (SMC-PRIVATE) LIMITED website content and shared functionality.
 * Main editable data lives at the top of this file:
 * - CELL_CAVE_CONFIG: company/global settings
 * - CELL_CAVE_APPS: all app/product data
 *
 * Keep this file in the repository root.
 */


/* =========================================================
   GLOBAL CONFIG
========================================================= */

window.CELL_CAVE_CONFIG = Object.freeze({

    brandName: "CELL CAVE (SMC-PRIVATE) LIMITED",

    legalName: "CELL CAVE (SMC-PRIVATE) LIMITED",

    siteUrl: "https://cellcave.github.io/",

    homeUrl: "/",

    logo: "/assets/brand/cell-cave-logo.png",

    favicon: "/assets/brand/cell-cave-logo.png",

    email: "cellcave70@gmail.com",

    phone: "",

    address: "",

    developerGooglePlayUrl:
        "https://play.google.com/store/apps/developer?id=Cell+Cave",

    appStoreLandingUrl: "/app-store/",

    featuredAppId: "cloud-backup-photo-storage",

    socialLinks: {
        facebook: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        x: ""
    },

    navigation: [

        {
            label: "Home",
            href: "/",
            key: "home"
        },

        {
            label: "Apps",
            href: "/apps/",
            key: "apps"
        },

        {
            label: "Support",
            href: "/support/",
            key: "support"
        },

        {
            label: "About",
            href: "/about/",
            key: "about"
        }

    ]

});



/* =========================================================
   ALL APPS
========================================================= */

window.CELL_CAVE_APPS = Object.freeze([


    /* =====================================================
       1. CLOUD BACKUP
    ====================================================== */

    {

        id: "cloud-backup-photo-storage",

        slug: "cloud-backup-photo-storage",

        name: "Cloud Backup: Photo Storage",

        shortName: "Cloud Backup",

        category: "Backup & Storage",

        status: "live",

        icon: "/assets/icons/cloud-backup-photo-storage.png",

        route: "/apps/cloud-backup-photo-storage/",

        privacyRoute:
            "/apps/cloud-backup-photo-storage/privacy/",

        googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.softwarealliance.cloudvault",

        appleAppStoreUrl: "",

        shortDescription:
            "Back up and manage important photos and supported files through a focused mobile experience.",

        description:
            "Cloud Backup: Photo Storage is designed around practical backup and storage needs, helping users keep supported content organized and accessible through the app.",

        features: [

            "Photo and supported-file backup",

            "Cloud storage management",

            "Account and data controls"

        ],

        extraLinks: [

            {
                label: "Account & Data Deletion",
                href:
                    "/apps/cloud-backup-photo-storage/account-deletion/"
            }

        ]

    },



    /* =====================================================
       2. DOCUMENT READER
    ====================================================== */

    {

        id: "document-reader-read-all-pdf",

        slug: "document-reader-read-all-pdf",

        name: "Document Reader: Read All PDF",

        shortName: "Document Reader",

        category: "Documents",

        status: "live",

        icon:
            "/assets/icons/document-reader-read-all-pdf.png",

        route:
            "/apps/document-reader-read-all-pdf/",

        privacyRoute:
            "/apps/document-reader-read-all-pdf/privacy/",

        googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.officedocument.word.docx.document.viewer.pdf",

        appleAppStoreUrl: "",

        shortDescription:
            "Open and read supported document formats through a simple and convenient mobile experience.",

        description:
            "Document Reader: Read All PDF is designed around practical document reading needs with a straightforward mobile experience.",

        features: [

            "Supported document reading",

            "Simple mobile experience",

            "Dedicated privacy and support access"

        ],

        extraLinks: []

    },



    /* =====================================================
       3. STATUS DOWNLOADER
    ====================================================== */

    {

        id: "status-downloader-video-saver",

        slug: "status-downloader-video-saver",

        name: "Status Downloader: Video Saver",

        shortName: "Status Downloader",

        category: "Media",

        status: "live",

        icon:
            "/assets/icons/status-downloader-video-saver.png",

        route:
            "/apps/status-downloader-video-saver/",

        privacyRoute:
            "/apps/status-downloader-video-saver/privacy/",

        googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.statussaver.videosaver.downloadstatus.storysaver",

        appleAppStoreUrl: "",

        shortDescription:
            "Save and manage supported status content through a straightforward mobile experience.",

        description:
            "Status Downloader: Video Saver is designed to help users save and manage supported status content on mobile.",

        features: [

            "Save supported status content",

            "Manage saved content",

            "Focused mobile workflow"

        ],

        extraLinks: []

    },



    /* =====================================================
       4. ALL VIDEO DOWNLOADER
    ====================================================== */

    {

        id: "all-video-downloader-saver",

        slug: "all-video-downloader-saver",

        name: "All Video Downloader & Saver",

        shortName: "Video Downloader",

        category: "Media",

        status: "live",

        icon:
            "/assets/icons/all-video-downloader-saver.png",

        route:
            "/apps/all-video-downloader-saver/",

        privacyRoute:
            "/apps/all-video-downloader-saver/privacy/",

        googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.video.downloader.instagram.videosaver",

        appleAppStoreUrl: "",

        shortDescription:
            "Manage and download videos from supported sources through a practical mobile workflow.",

        description:
            "All Video Downloader & Saver is designed to help users manage and download videos from supported sources.",

        features: [

            "Downloads from supported sources",

            "Video management",

            "Simple mobile workflow"

        ],

        extraLinks: []

    },



    /* =====================================================
       5. AGE CALCULATOR
    ====================================================== */

    {

        id: "age-calculator-date-of-birth",

        slug: "age-calculator-date-of-birth",

        name: "Age Calculator: Date of Birth",

        shortName: "Age Calculator",

        category: "Everyday Tools",

        status: "live",

        icon:
            "/assets/icons/age-calculator-date-of-birth.webp",

        route:
            "/apps/age-calculator-date-of-birth/",

        privacyRoute:
            "/apps/age-calculator-date-of-birth/privacy/",

        googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.dobcalc.birthdaycalculator.dob",

        appleAppStoreUrl: "",

        shortDescription:
            "Calculate age and useful date information through a simple mobile experience.",

        description:
            "Age Calculator: Date of Birth is designed to calculate age and related date information in a straightforward way.",

        features: [

            "Age calculation",

            "Useful date information",

            "Simple mobile experience"

        ],

        extraLinks: []

    },



    /* =====================================================
       6. SWITCH SMART
    ====================================================== */

    {

        id: "switch-smart",

        slug: "switch-smart",

        name: "Switch Smart",

        shortName: "Switch Smart",

        category: "Device Transfer",

        status: "coming-soon",

        icon: "",

        fallbackInitials: "SS",

        route:
            "/apps/switch-smart/",

        privacyRoute:
            "/apps/switch-smart/privacy/",

        googlePlayUrl: "",

        appleAppStoreUrl: "",

        shortDescription:
            "Transfer supported contacts, photos, videos, music, documents, files, and apps directly between Android devices.",

        description:
            "Switch Smart is a device-to-device transfer app designed to help users move supported content from one Android device to another through supported local connection methods.",

        features: [

            "Phone-to-phone transfer",

            "Wi-Fi and hotspot-based local connections",

            "Contacts, photos, videos, music, documents, files, and supported apps",

            "Device discovery",

            "QR-based connection where available",

            "Direct device-to-device transfer"

        ],

        extraLinks: []

    },



    /* =====================================================
       7. PHONE CLEANER
    ====================================================== */

    {

        id: "phone-cleaner",

        slug: "phone-cleaner",

        name: "Phone Cleaner",

        shortName: "Phone Cleaner",

        category: "Device Care",

        status: "coming-soon",

        icon: "",

        fallbackInitials: "PC",

        route:
            "/apps/phone-cleaner/",

        privacyRoute:
            "/apps/phone-cleaner/privacy/",

        googlePlayUrl: "",

        appleAppStoreUrl: "",

        packageName:
            "com.clearner.mobilecleaner.filemanager.cloud.savevideo.file.photo",

        shortDescription:
            "Clean junk files, manage storage, find duplicate media, and use practical device-care tools in one Android app.",

        description:
            "Phone Cleaner brings together on-device cleaning, file management, duplicate and similar photo detection, image compression, app management, notification and clipboard cleaning, a Recycle Bin, Private Vault, device information tools, and scheduled cleaning features.",

        features: [

            "Quick Clean and Deep Clean",

            "Large-file, duplicate, similar-photo, and screenshot detection",

            "Image compression and file management",

            "App Manager and on-device permission audit",

            "Notification and Clipboard Cleaner",

            "Recycle Bin and Private Vault",

            "Phone Boost, CPU, battery, and storage information",

            "Scheduled automatic cleaning"

        ],

        extraLinks: []

    },



    /* =====================================================
       8. QR CODE SCANER
    ====================================================== */

    {

        id: "qr-code-scaner",

        slug: "qr-code-scaner",

        name: "QR Code Scaner",

        shortName: "QR Code Scaner",

        category: "Tools",

        status: "coming-soon",

        icon: "",

        fallbackInitials: "QR",

        route:
            "/apps/qr-code-scaner/",

        privacyRoute:
            "/apps/qr-code-scaner/privacy/",

        googlePlayUrl: "",

        appleAppStoreUrl: "",

        shortDescription:
            "Scan QR codes quickly with a simple and easy-to-use mobile experience.",

        description:
            "QR Code Scaner is designed to help users scan QR codes quickly and conveniently. More features and store availability will be announced soon.",

        features: [

            "Fast QR code scanning",

            "Simple and easy-to-use interface",

            "Quick access to scanned information",

            "More features coming soon"

        ],

        extraLinks: []

    }

]);



/* =========================================================
   SHARED SITE FUNCTIONS
========================================================= */

(function () {

    "use strict";


    const config =
        window.CELL_CAVE_CONFIG || {};


    const apps =
        window.CELL_CAVE_APPS || [];



    /* =====================================================
       ESCAPE HTML
    ====================================================== */

    function escapeHtml(value) {

        return String(
            value ?? ""
        ).replace(
            /[&<>'"]/g,
            function (char) {

                return ({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&#39;",
                    "\"": "&quot;"
                })[char];

            }
        );

    }



    /* =====================================================
       GET APP
    ====================================================== */

    function getAppById(id) {

        return apps.find(
            app => app.id === id
        ) || null;

    }



    /* =====================================================
       APP ICON
    ====================================================== */

    function appIconMarkup(
        app,
        className
    ) {

        const cls =
            className || "app-card-icon";


        if (
            app &&
            app.icon
        ) {

            return `
                <span class="${cls}">
                    <img
                        src="${escapeHtml(app.icon)}"
                        alt="${escapeHtml(app.name)} icon"
                    >
                </span>
            `;

        }


        const initials =
            (
                app &&
                (
                    app.fallbackInitials ||
                    app.shortName ||
                    app.name
                )
            ) ||
            "APP";


        const fallback =
            String(initials)

                .split(/\s+/)

                .map(
                    part => part[0]
                )

                .join("")

                .slice(0, 2)

                .toUpperCase();


        return `
            <span class="${cls}">
                ${escapeHtml(fallback)}
            </span>
        `;

    }



    /* =====================================================
       STATUS BADGE
    ====================================================== */

    function statusBadge(app) {

        return (
            app &&
            app.status === "coming-soon"
        )
            ? `
                <span class="badge coming-soon">
                    Coming Soon
                </span>
            `
            : `
                <span class="badge">
                    Available
                </span>
            `;

    }



    /* =====================================================
       APP CARD
    ====================================================== */

    function appCardMarkup(app) {

        return `

            <article
                class="app-card"
                data-app-status="${escapeHtml(app.status)}"
            >

                <div class="app-card-top">

                    ${
                        appIconMarkup(
                            app,
                            app.icon
                                ? "app-card-icon"
                                : "app-icon-fallback"
                        )
                    }

                    ${
                        statusBadge(app)
                    }

                </div>


                <div class="app-card-category">

                    ${
                        escapeHtml(
                            app.category
                        )
                    }

                </div>


                <h3>

                    ${
                        escapeHtml(
                            app.name
                        )
                    }

                </h3>


                <p>

                    ${
                        escapeHtml(
                            app.shortDescription
                        )
                    }

                </p>


                <a
                    class="app-card-link"
                    href="${escapeHtml(app.route)}"
                    aria-label="View ${escapeHtml(app.name)}"
                >
                    View app →
                </a>

            </article>

        `;

    }



    /* =====================================================
       FEATURED APP
    ====================================================== */

    function featuredMarkup() {

        const featured =
            getAppById(
                config.featuredAppId
            ) ||
            apps[0];


        if (!featured) {

            return "";

        }


        const icon =
            featured.icon

                ? `
                    <img
                        src="${escapeHtml(featured.icon)}"
                        alt="${escapeHtml(featured.name)} icon"
                    >
                `

                : escapeHtml(
                    featured.fallbackInitials ||
                    "APP"
                );


        return `

            <div class="featured-shell">

                <div class="featured-visual">

                    <a
                        class="featured-icon-link"
                        href="${escapeHtml(featured.route)}"
                        aria-label="Open ${escapeHtml(featured.name)}"
                    >

                        ${icon}

                    </a>

                </div>


                <div class="featured-content">

                    <span class="eyebrow">
                        Featured App
                    </span>


                    <h2>
                        ${escapeHtml(featured.name)}
                    </h2>


                    <p>
                        ${escapeHtml(featured.shortDescription)}
                    </p>


                    <div class="featured-actions">

                        <a
                            class="btn btn-primary"
                            href="${escapeHtml(featured.route)}"
                        >
                            Explore Featured App
                        </a>


                        ${
                            featured.googlePlayUrl

                                ? `
                                    <a
                                        class="btn btn-secondary"
                                        href="${escapeHtml(featured.googlePlayUrl)}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Play ↗
                                    </a>
                                `

                                : ""
                        }


                        ${
                            featured.appleAppStoreUrl

                                ? `
                                    <a
                                        class="btn btn-secondary"
                                        href="${escapeHtml(featured.appleAppStoreUrl)}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        App Store ↗
                                    </a>
                                `

                                : `
                                    <a
                                        class="btn btn-secondary"
                                        href="${escapeHtml(config.appStoreLandingUrl)}"
                                    >
                                        App Store Availability
                                    </a>
                                `
                        }

                    </div>

                </div>

            </div>

        `;

    }



    /* =====================================================
       HEADER
    ====================================================== */

    function buildHeader() {

        const page =
            document.body.dataset.page ||
            "";


        const links =
            (
                config.navigation ||
                []
            )
                .map(
                    item => {

                        const active =
                            page === item.key ||
                            (
                                page === "app-detail" &&
                                item.key === "apps"
                            );


                        return `

                            <a
                                href="${escapeHtml(item.href)}"
                                class="${active ? "active" : ""}"
                                ${
                                    active
                                        ? 'aria-current="page"'
                                        : ""
                                }
                            >
                                ${escapeHtml(item.label)}
                            </a>

                        `;

                    }
                )
                .join("");


        return `

            <header class="site-header">

                <div class="container header-inner">


                    <a
                        class="brand-link"
                        href="${escapeHtml(config.homeUrl || "/")}"
                        aria-label="${escapeHtml(config.brandName)} home"
                    >

                        <span class="brand-logo-frame">

                            <img
                                src="${escapeHtml(config.logo)}"
                                alt="${escapeHtml(config.brandName)} logo"
                            >

                        </span>


                        <span class="brand-text">

                            ${escapeHtml(config.brandName)}

                        </span>

                    </a>



                    <button
                        class="nav-toggle"
                        type="button"
                        aria-label="Open navigation"
                        aria-expanded="false"
                        aria-controls="siteNav"
                    >

                        <span class="nav-toggle-lines">
                            <span></span>
                        </span>

                    </button>



                    <nav
                        class="site-nav"
                        id="siteNav"
                        aria-label="Primary navigation"
                    >

                        ${links}

                    </nav>


                </div>

            </header>

        `;

    }



    /* =====================================================
       SOCIAL ICONS
    ====================================================== */

    function socialIcon(name) {

        const icons = {


            facebook: `

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >

                    <path
                        d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.4v3h2.8v8h3.4Z"
                    />

                </svg>

            `,


            instagram: `

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >

                    <path
                        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                    />

                </svg>

            `,


            linkedin: `

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >

                    <path
                        d="M5.4 7.3A2.2 2.2 0 1 1 5.4 3a2.2 2.2 0 0 1 0 4.3ZM3.5 9h3.8v12H3.5V9Zm6.1 0h3.6v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6.1V21h-3.8v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.6V9Z"
                    />

                </svg>

            `,


            youtube: `

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >

                    <path
                        d="M21.6 7.2c-.2-1.4-1.1-2.5-2.4-2.7C17.4 4.2 14.7 4 12 4s-5.4.2-7.2.5C3.5 4.7 2.6 5.8 2.4 7.2 2.1 8.6 2 10.3 2 12s.1 3.4.4 4.8c.2 1.4 1.1 2.5 2.4 2.7 1.8.3 4.5.5 7.2.5s5.4-.2 7.2-.5c1.3-.2 2.2-1.3 2.4-2.7.3-1.4.4-3.1.4-4.8s-.1-3.4-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
                    />

                </svg>

            `,


            x: `

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >

                    <path
                        d="M4 3h4.5l4.4 5.9L18.1 3H21l-6.8 7.8L21.5 21H17l-4.9-6.6L6.3 21H3.4l7.3-8.5L4 3Zm3.2 2 10.8 14h1L8.2 5h-1Z"
                    />

                </svg>

            `

        };


        return (
            icons[name] ||
            ""
        );

    }



    /* =====================================================
       FOOTER
    ====================================================== */

    function buildFooter() {


        const nav =
            (
                config.navigation ||
                []
            )
                .map(
                    item => `

                        <a href="${escapeHtml(item.href)}">
                            ${escapeHtml(item.label)}
                        </a>

                    `
                )
                .join("");



        const social =
            Object.entries(
                config.socialLinks ||
                {}
            )
                .map(
                    ([name, url]) => {


                        const label =
                            name === "x"

                                ? "X"

                                : (
                                    name
                                        .charAt(0)
                                        .toUpperCase() +
                                    name.slice(1)
                                );


                        if (url) {

                            return `

                                <a
                                    class="social-button"
                                    href="${escapeHtml(url)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="${escapeHtml(label)}"
                                    title="${escapeHtml(label)}"
                                >

                                    ${socialIcon(name)}

                                </a>

                            `;

                        }


                        return `

                            <span
                                class="social-button is-disabled"
                                aria-label="${escapeHtml(label)} link coming soon"
                                title="${escapeHtml(label)} link coming soon"
                            >

                                ${socialIcon(name)}

                            </span>

                        `;

                    }
                )
                .join("");



        return `

            <footer class="site-footer">

                <div class="container">


                    <div class="footer-grid">


                        <div>


                            <a
                                class="footer-brand-row"
                                href="${escapeHtml(config.homeUrl || "/")}"
                            >

                                <span class="brand-logo-frame">

                                    <img
                                        src="${escapeHtml(config.logo)}"
                                        alt="${escapeHtml(config.brandName)} logo"
                                    >

                                </span>


                                <span>

                                    ${escapeHtml(config.brandName)}

                                </span>

                            </a>



                            <p class="footer-copy">

                                We build apps and digital products designed
                                to make everyday life simpler, smarter, and
                                more convenient.

                            </p>



                            <div class="footer-contact">


                                ${
                                    config.email

                                        ? `

                                            <a
                                                data-site-email-link
                                                href="mailto:${escapeHtml(config.email)}"
                                            >

                                                <span data-site-email>
                                                    ${escapeHtml(config.email)}
                                                </span>

                                            </a>

                                        `

                                        : ""
                                }


                                ${
                                    config.phone

                                        ? `
                                            <span>
                                                ${escapeHtml(config.phone)}
                                            </span>
                                        `

                                        : ""
                                }


                                ${
                                    config.address

                                        ? `
                                            <span>
                                                ${escapeHtml(config.address)}
                                            </span>
                                        `

                                        : ""
                                }


                            </div>


                        </div>



                        <div class="footer-right">


                            <nav
                                class="footer-links"
                                aria-label="Footer navigation"
                            >

                                ${nav}


                                <a href="/privacy/">
                                    Privacy Policy
                                </a>


                                <a href="/terms/">
                                    Terms of Use
                                </a>


                                <a href="${escapeHtml(config.appStoreLandingUrl)}">
                                    Apple App Store
                                </a>


                                <a
                                    href="${escapeHtml(config.developerGooglePlayUrl)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Play
                                </a>


                            </nav>



                            <div class="footer-social-wrap">


                                <div class="footer-social-label">
                                    Follow Us
                                </div>


                                <div class="footer-social">

                                    ${social}

                                </div>


                            </div>


                        </div>


                    </div>



                    <div class="footer-bottom">


                        <span>

                            © ${new Date().getFullYear()}
                            ${escapeHtml(config.legalName)}.
                            All rights reserved.

                        </span>


                        <span>
                            Simple ideas. Smart apps. Easier everyday life.
                        </span>


                    </div>


                </div>

            </footer>

        `;

    }



    /* =====================================================
       CONTACT DATA
    ====================================================== */

    function hydrateContactData() {


        document
            .querySelectorAll(
                "[data-site-email]"
            )
            .forEach(
                el => {

                    el.textContent =
                        config.email ||
                        "";

                }
            );


        document
            .querySelectorAll(
                "[data-site-email-link]"
            )
            .forEach(
                el => {

                    el.setAttribute(
                        "href",
                        config.email
                            ? `mailto:${config.email}`
                            : "#"
                    );

                }
            );


        document
            .querySelectorAll(
                "[data-site-legal-name]"
            )
            .forEach(
                el => {

                    el.textContent =
                        config.legalName ||
                        config.brandName ||
                        "";

                }
            );


        document
            .querySelectorAll(
                "[data-site-brand-name]"
            )
            .forEach(
                el => {

                    el.textContent =
                        config.brandName ||
                        "";

                }
            );


        document
            .querySelectorAll(
                "[data-site-logo]"
            )
            .forEach(
                el => {

                    if (config.logo) {

                        el.setAttribute(
                            "src",
                            config.logo
                        );

                    }

                }
            );


        document
            .querySelectorAll(
                "[data-site-google-play-link]"
            )
            .forEach(
                el => {

                    el.setAttribute(
                        "href",
                        config.developerGooglePlayUrl ||
                        "#"
                    );

                }
            );


        document
            .querySelectorAll(
                "[data-site-app-store-link]"
            )
            .forEach(
                el => {

                    el.setAttribute(
                        "href",
                        config.appStoreLandingUrl ||
                        "#"
                    );

                }
            );

    }



    /* =====================================================
       RESPONSIVE LEGAL TABLES
    ====================================================== */

    function enhanceLegalTables() {


        document
            .querySelectorAll(
                ".legal-page table"
            )
            .forEach(
                table => {


                    const headerCells =
                        Array.from(
                            table.querySelectorAll(
                                "thead th"
                            )
                        );


                    if (!headerCells.length) {

                        return;

                    }


                    const labels =
                        headerCells.map(
                            cell =>

                                String(
                                    cell.textContent ||
                                    ""
                                )

                                    .replace(
                                        /\s+/g,
                                        " "
                                    )

                                    .trim()
                        );


                    table.classList.add(
                        "responsive-legal-table"
                    );


                    table
                        .querySelectorAll(
                            "tbody tr"
                        )
                        .forEach(
                            row => {


                                Array
                                    .from(
                                        row.children
                                    )
                                    .forEach(
                                        (
                                            cell,
                                            index
                                        ) => {


                                            if (
                                                cell.tagName !==
                                                "TD"
                                            ) {

                                                return;

                                            }


                                            const label =
                                                labels[index] ||
                                                `Column ${index + 1}`;


                                            cell.setAttribute(
                                                "data-label",
                                                label
                                            );


                                        }
                                    );


                            }
                        );


                }
            );

    }



    /* =====================================================
       HEAD DEFAULTS
    ====================================================== */

    function addHeadDefaults() {


        if (
            config.favicon &&
            !document.querySelector(
                'link[rel="icon"]'
            )
        ) {


            const icon =
                document.createElement(
                    "link"
                );


            icon.rel =
                "icon";


            icon.href =
                config.favicon;


            document.head.appendChild(
                icon
            );


        }



        const desc =
            document.querySelector(
                'meta[name="description"]'
            );


        const description =
            desc

                ? desc.content

                : "CELL CAVE (SMC-PRIVATE) LIMITED creates apps and digital products designed to make everyday life easier.";



        const baseUrl =
            String(
                config.siteUrl ||
                ""
            ).replace(
                /\/$/,
                ""
            );


        const canonicalUrl =
            baseUrl

                ? `${baseUrl}${window.location.pathname || "/"}`

                : "";



        if (
            canonicalUrl &&
            !document.head.querySelector(
                'link[rel="canonical"]'
            )
        ) {


            const canonical =
                document.createElement(
                    "link"
                );


            canonical.rel =
                "canonical";


            canonical.href =
                canonicalUrl;


            document.head.appendChild(
                canonical
            );


        }



        const entries = [

            [
                "meta",
                "property",
                "og:title",
                document.title
            ],

            [
                "meta",
                "property",
                "og:description",
                description
            ],

            [
                "meta",
                "property",
                "og:type",
                "website"
            ],

            [
                "meta",
                "property",
                "og:image",
                config.logo
            ],

            [
                "meta",
                "property",
                "og:url",
                canonicalUrl
            ],

            [
                "meta",
                "name",
                "twitter:card",
                "summary_large_image"
            ]

        ];



        entries.forEach(
            (
                [
                    tag,
                    key,
                    value,
                    content
                ]
            ) => {


                if (
                    !content ||
                    document.head.querySelector(
                        `${tag}[${key}="${value}"]`
                    )
                ) {

                    return;

                }


                const el =
                    document.createElement(
                        tag
                    );


                el.setAttribute(
                    key,
                    value
                );


                el.setAttribute(
                    "content",
                    content
                );


                document.head.appendChild(
                    el
                );


            }
        );

    }



    /* =====================================================
       INSERT HEADER / FOOTER
    ====================================================== */

    const headerSlot =
        document.getElementById(
            "siteHeader"
        );


    const footerSlot =
        document.getElementById(
            "siteFooter"
        );


    if (headerSlot) {

        headerSlot.outerHTML =
            buildHeader();

    }


    if (footerSlot) {

        footerSlot.outerHTML =
            buildFooter();

    }



    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    const toggle =
        document.querySelector(
            ".nav-toggle"
        );


    const nav =
        document.getElementById(
            "siteNav"
        );


    if (
        toggle &&
        nav
    ) {


        toggle.addEventListener(
            "click",
            function () {


                const open =
                    nav.classList.toggle(
                        "open"
                    );


                toggle.setAttribute(
                    "aria-expanded",
                    String(open)
                );


                toggle.setAttribute(
                    "aria-label",
                    open
                        ? "Close navigation"
                        : "Open navigation"
                );


            }
        );


        nav.addEventListener(
            "click",
            function (event) {


                if (
                    event.target.closest(
                        "a"
                    )
                ) {


                    nav.classList.remove(
                        "open"
                    );


                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                }


            }
        );


    }



    hydrateContactData();

    enhanceLegalTables();

    addHeadDefaults();



    window.CellCave =
        Object.freeze({

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



/* =========================================================
   HOME PAGE
========================================================= */

(function () {

    "use strict";


    const api =
        window.CellCave;


    if (!api) {

        return;

    }


    const apps =
        api.apps;



    /* =====================================================
       HOME APP SLIDER
    ====================================================== */

    const appTrack =
        document.getElementById(
            "homeAppsGrid"
        );


    const sliderPrev =
        document.getElementById(
            "homeAppsPrev"
        );


    const sliderNext =
        document.getElementById(
            "homeAppsNext"
        );


    const sliderCount =
        document.getElementById(
            "homeAppsSliderCount"
        );


    let sliderIndex =
        0;



    function visibleCards() {


        if (
            window.matchMedia(
                "(max-width: 760px)"
            ).matches
        ) {

            return 1;

        }


        if (
            window.matchMedia(
                "(max-width: 980px)"
            ).matches
        ) {

            return 2;

        }


        return 3;

    }



    function renderAppsSlider(direction) {


        if (
            !appTrack ||
            !apps.length
        ) {

            return;

        }


        const visible =
            visibleCards();


        const maxStart =
            Math.max(
                0,
                apps.length -
                visible
            );


        sliderIndex =
            Math.min(
                sliderIndex,
                maxStart
            );


        const shownApps =
            apps.slice(
                sliderIndex,
                sliderIndex +
                visible
            );


        appTrack.innerHTML =
            shownApps
                .map(
                    api.appCardMarkup
                )
                .join("");



        appTrack.classList.remove(
            "slide-next",
            "slide-prev"
        );


        if (direction) {


            void appTrack.offsetWidth;


            appTrack.classList.add(

                direction === "next"

                    ? "slide-next"

                    : "slide-prev"

            );


        }



        if (sliderPrev) {

            sliderPrev.disabled =
                sliderIndex === 0;

        }


        if (sliderNext) {

            sliderNext.disabled =
                sliderIndex >=
                maxStart;

        }


        if (sliderCount) {


            const start =
                apps.length
                    ? sliderIndex + 1
                    : 0;


            const end =
                Math.min(
                    sliderIndex +
                    visible,
                    apps.length
                );


            sliderCount.textContent =
                `${start}–${end} of ${apps.length}`;


        }


    }



    if (sliderPrev) {


        sliderPrev.addEventListener(
            "click",
            function () {


                if (
                    sliderIndex >
                    0
                ) {


                    sliderIndex -=
                        1;


                    renderAppsSlider(
                        "prev"
                    );


                }


            }
        );


    }



    if (sliderNext) {


        sliderNext.addEventListener(
            "click",
            function () {


                const maxStart =
                    Math.max(
                        0,
                        apps.length -
                        visibleCards()
                    );


                if (
                    sliderIndex <
                    maxStart
                ) {


                    sliderIndex +=
                        1;


                    renderAppsSlider(
                        "next"
                    );


                }


            }
        );


    }



    let resizeTimer;


    window.addEventListener(
        "resize",
        function () {


            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    function () {

                        renderAppsSlider();

                    },
                    120
                );


        }
    );


    renderAppsSlider();



    /* =====================================================
       FEATURED APP
    ====================================================== */

    const featured =
        document.getElementById(
            "featuredApp"
        );


    if (featured) {

        featured.innerHTML =
            api.featuredMarkup();

    }



    /* =====================================================
       HERO APP COUNT
    ====================================================== */

    const count =
        document.getElementById(
            "heroAppCount"
        );


    if (count) {

        count.textContent =
            String(
                apps.length
            ).padStart(
                2,
                "0"
            );

    }



    /* =====================================================
       HERO APP EXPLORER
    ====================================================== */

    const stage =
        document.getElementById(
            "appExplorerStage"
        );


    const iconLink =
        document.getElementById(
            "appExplorerIcon"
        );


    const name =
        document.getElementById(
            "appExplorerName"
        );


    const meta =
        document.getElementById(
            "appExplorerMeta"
        );


    const prev =
        document.getElementById(
            "appExplorerPrev"
        );


    const next =
        document.getElementById(
            "appExplorerNext"
        );


    if (
        !stage ||
        !iconLink ||
        !name ||
        !meta ||
        !prev ||
        !next ||
        !apps.length
    ) {

        return;

    }


    let index =
        0;



    function renderExplorer(direction) {


        const app =
            apps[index];


        iconLink.href =
            app.route;


        iconLink.setAttribute(
            "aria-label",
            `Open ${app.name}`
        );


        iconLink.innerHTML =
            app.icon

                ? `
                    <img
                        src="${api.escapeHtml(app.icon)}"
                        alt="${api.escapeHtml(app.name)} icon"
                    >
                `

                : api.escapeHtml(
                    app.fallbackInitials ||
                    "APP"
                );


        name.textContent =
            app.name;


        meta.textContent =
            `${index + 1} / ${apps.length}${
                app.status === "coming-soon"
                    ? " · Coming Soon"
                    : ""
            }`;


        prev.disabled =
            index === 0;


        next.disabled =
            index ===
            apps.length - 1;



        stage.classList.remove(
            "slide-next",
            "slide-prev"
        );


        if (direction) {


            void stage.offsetWidth;


            stage.classList.add(

                direction === "next"

                    ? "slide-next"

                    : "slide-prev"

            );


        }


    }



    prev.addEventListener(
        "click",
        function () {


            if (
                index >
                0
            ) {


                index -=
                    1;


                renderExplorer(
                    "prev"
                );


            }


        }
    );



    next.addEventListener(
        "click",
        function () {


            if (
                index <
                apps.length - 1
            ) {


                index +=
                    1;


                renderExplorer(
                    "next"
                );


            }


        }
    );


    renderExplorer();


})();



/* =========================================================
   APPS PAGE
========================================================= */

(function () {

    "use strict";


    const api =
        window.CellCave;


    if (!api) {

        return;

    }


    const grid =
        document.getElementById(
            "appsGrid"
        );


    const featured =
        document.getElementById(
            "appsFeaturedApp"
        );


    const filters =
        document.querySelectorAll(
            "[data-app-filter]"
        );



    if (featured) {

        featured.innerHTML =
            api.featuredMarkup();

    }



    function render(filter) {


        const list =
            api.apps.filter(
                app => {


                    if (
                        filter ===
                        "all"
                    ) {

                        return true;

                    }


                    return (
                        app.status ===
                        filter
                    );


                }
            );


        if (grid) {

            grid.innerHTML =
                list
                    .map(
                        api.appCardMarkup
                    )
                    .join("");

        }


    }



    filters.forEach(
        button => {


            button.addEventListener(
                "click",
                function () {


                    filters.forEach(
                        item => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    render(
                        button.dataset.appFilter ||
                        "all"
                    );


                }
            );


        }
    );


    render(
        "all"
    );


})();



/* =========================================================
   APP DETAIL PAGE
========================================================= */

(function () {

    "use strict";


    const api =
        window.CellCave;


    if (!api) {

        return;

    }


    if (
        (
            document.body.dataset.page ||
            ""
        ) !==
        "app-detail"
    ) {

        return;

    }


    const mount =
        document.getElementById(
            "appPage"
        );


    if (!mount) {

        return;

    }



    const id =
        mount.dataset.appId;


    const app =
        api.getAppById(
            id
        );



    if (!app) {


        mount.innerHTML = `

            <section class="not-found">

                <div class="container">

                    <div class="not-found-card">

                        <div class="not-found-code">
                            404
                        </div>

                        <h1>
                            App not found
                        </h1>

                        <p>
                            This app could not be found in the centralized app data.
                        </p>

                        <a
                            class="btn btn-primary"
                            href="/apps/"
                        >
                            Explore Apps
                        </a>

                    </div>

                </div>

            </section>

        `;


        return;

    }



    document.title =
        `${app.name} | ${api.config.legalName}`;



    const desc =
        document.querySelector(
            'meta[name="description"]'
        );


    if (desc) {

        desc.content =
            app.shortDescription;

    }



    const icon =
        app.icon

            ? `
                <img
                    src="${api.escapeHtml(app.icon)}"
                    alt="${api.escapeHtml(app.name)} icon"
                >
            `

            : api.escapeHtml(
                app.fallbackInitials ||
                "APP"
            );



    /* =====================================================
       STORE BUTTONS
    ====================================================== */

    const storeButtons =
        [];



    if (app.googlePlayUrl) {


        storeButtons.push(`

            <a
                class="store-button"
                href="${api.escapeHtml(app.googlePlayUrl)}"
                target="_blank"
                rel="noopener noreferrer"
            >

                <span class="store-icon">
                    ▶
                </span>

                <span>
                    Get it on Google Play
                </span>

            </a>

        `);


    } else {


        storeButtons.push(`

            <span
                class="store-button secondary is-disabled"
                aria-label="Google Play coming soon"
            >

                <span class="store-icon">
                    ▶
                </span>

                <span>
                    Google Play · Coming Soon
                </span>

            </span>

        `);


    }



    if (app.appleAppStoreUrl) {


        storeButtons.push(`

            <a
                class="store-button"
                href="${api.escapeHtml(app.appleAppStoreUrl)}"
                target="_blank"
                rel="noopener noreferrer"
            >

                <span class="store-icon">
                    
                </span>

                <span>
                    Download on the App Store
                </span>

            </a>

        `);


    } else {


        storeButtons.push(`

            <span
                class="store-button secondary is-disabled"
                aria-label="Apple App Store coming soon"
            >

                <span class="store-icon">
                    
                </span>

                <span>
                    App Store · Coming Soon
                </span>

            </span>

        `);


    }



    storeButtons.push(`

        <a
            class="store-button secondary"
            href="${api.escapeHtml(app.privacyRoute)}"
        >

            <span class="store-icon">
                ◇
            </span>

            <span>
                Privacy Policy
            </span>

        </a>

    `);



    const extraLinks =
        (
            app.extraLinks ||
            []
        )
            .map(
                link => `

                    <a
                        class="btn btn-secondary"
                        href="${api.escapeHtml(link.href)}"
                    >
                        ${api.escapeHtml(link.label)}
                    </a>

                `
            )
            .join("");



    /* =====================================================
       COMING SOON PANEL
    ====================================================== */

    const comingSoon =
        app.status ===
        "coming-soon"

            ? `

                <section class="section">

                    <div class="container">

                        <div class="coming-soon-panel">


                            <span class="badge coming-soon">
                                Coming Soon
                            </span>


                            <h2>
                                We’re building the next
                                CELL CAVE (SMC-PRIVATE) LIMITED
                                experience.
                            </h2>


                            <p>

                                ${api.escapeHtml(app.name)}
                                isn’t live yet. We’re working on it.
                                In the meantime, explore the
                                CELL CAVE (SMC-PRIVATE) LIMITED
                                apps and digital products that are
                                already available.

                            </p>


                            <div class="coming-soon-actions">


                                <a
                                    class="btn btn-primary"
                                    href="/apps/"
                                >
                                    Explore Available Apps
                                </a>


                                <a
                                    class="btn btn-secondary"
                                    href="${api.escapeHtml(api.config.developerGooglePlayUrl)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Play ↗
                                </a>


                                <a
                                    class="btn btn-secondary"
                                    href="${api.escapeHtml(api.config.appStoreLandingUrl)}"
                                >
                                    Apple App Store
                                </a>


                            </div>


                        </div>

                    </div>

                </section>

            `

            : "";



    /* =====================================================
       RENDER APP PAGE
    ====================================================== */

    mount.innerHTML = `


        <section class="app-detail-hero">


            <div class="container app-detail-grid">


                <div class="app-detail-icon">

                    ${icon}

                </div>


                <div class="app-detail-copy">


                    ${api.statusBadge(app)}


                    <h1>

                        ${api.escapeHtml(app.name)}

                    </h1>


                    <p>

                        ${api.escapeHtml(app.shortDescription)}

                    </p>


                    <div class="app-detail-actions">

                        ${storeButtons.join("")}

                    </div>


                </div>


            </div>


        </section>



        ${comingSoon}



        <section class="section section-white">


            <div class="container detail-grid">


                <article class="detail-card">


                    <span class="eyebrow">
                        About the App
                    </span>


                    <h2>
                        Designed for a simpler digital experience.
                    </h2>


                    <p>

                        ${api.escapeHtml(app.description)}

                    </p>


                    ${
                        extraLinks

                            ? `

                                <div class="featured-actions">

                                    ${extraLinks}

                                </div>

                            `

                            : ""
                    }


                </article>



                <article class="detail-card">


                    <span class="eyebrow">
                        What It Helps With
                    </span>


                    <h2>
                        Focused, practical functionality.
                    </h2>


                    <ul class="feature-list">

                        ${
                            (
                                app.features ||
                                []
                            )
                                .map(
                                    item => `

                                        <li>
                                            ${api.escapeHtml(item)}
                                        </li>

                                    `
                                )
                                .join("")
                        }

                    </ul>


                </article>


            </div>


        </section>



        <section class="section">


            <div class="container cta-panel">


                <h2>

                    Need help with
                    ${api.escapeHtml(app.shortName || app.name)}?

                </h2>


                <p>

                    Visit CELL CAVE (SMC-PRIVATE) LIMITED Support
                    for app-related questions, privacy information,
                    and contact details.

                </p>


                <a
                    class="btn"
                    href="/support/"
                >
                    Visit Support
                </a>


            </div>


        </section>


    `;


})();



/* =========================================================
   SUPPORT PAGE
========================================================= */

(function () {

    "use strict";


    const api =
        window.CellCave;


    if (!api) {

        return;

    }


    if (
        (
            document.body.dataset.page ||
            ""
        ) !==
        "support"
    ) {

        return;

    }



    const select =
        document.getElementById(
            "supportAppSelect"
        );


    const openButton =
        document.getElementById(
            "supportAppOpen"
        );


    const hint =
        document.getElementById(
            "supportAppHint"
        );



    if (
        !select ||
        !openButton
    ) {

        return;

    }



    /* =====================================================
       ADD ALL APPS TO SUPPORT SELECT
    ====================================================== */

    api.apps.forEach(
        app => {


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                app.route;


            option.textContent =
                `${app.name}${
                    app.status ===
                    "coming-soon"

                        ? " — Coming Soon"

                        : ""
                }`;


            select.appendChild(
                option
            );


        }
    );



    /* =====================================================
       UPDATE SUPPORT SELECT
    ====================================================== */

    function updateSelection() {


        const selected =
            select.options[
                select.selectedIndex
            ];


        const hasSelection =
            Boolean(
                select.value
            );


        openButton.disabled =
            !hasSelection;



        if (hint) {


            hint.textContent =
                hasSelection

                    ? `Open ${selected.textContent.replace(
                        " — Coming Soon",
                        ""
                    )} for app details, privacy information, and availability.`

                    : "App details, privacy information, availability, and related support are available from each app page.";


        }


    }



    select.addEventListener(
        "change",
        updateSelection
    );



    openButton.addEventListener(
        "click",
        function () {


            if (select.value) {

                window.location.href =
                    select.value;

            }


        }
    );



    updateSelection();


})();
