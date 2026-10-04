# clearcreditcoach.com

Marketing website for **Clear Credit Coach**, an education-only credit app (coming soon to iOS and Android): a free tier plus a Premium subscription with self-help tools. Clear Credit Coach does not offer coaching or credit repair services, so site copy must sell understanding, learning, planning, and tools, never outcomes (see the federal Credit Repair Organizations Act).

Plain static HTML/CSS/JS with no build step, deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`.

| Path | Page |
|---|---|
| `/` | Home: do-it-yourself hero (primary CTA buys the DIY Guide), how it works (5 steps), DIY Guide section, learning paths, app features, Free vs. Premium, education-only section, waitlist, FAQ |
| `/coaching/` | Retired. A `noindex` meta-refresh stub that sends old links to the homepage |
| `/privacy/` | Privacy Policy (**DRAFT template, pending legal review**) |
| `/terms/` | Terms of Use (**DRAFT template, pending legal review**) |

`/privacy` and `/terms` (no trailing slash) redirect to the pages above, so either form works as the App Store / Google Play URL.

## The DIY Guide (Gumroad)

*The Do-It-Yourself Credit Report Guide* ($49, one-time) is sold at https://clearcoach.gumroad.com/l/diy-credit-guide and is the main thing to buy on the site while the app is coming soon. The URL, name, and price live in `GUIDE_URL`, `GUIDE_NAME`, and `GUIDE_PRICE` in the generator's `common.py`. The home page loads `https://gumroad.com/js/gumroad.js`, which opens Gumroad checkout in an overlay for any link to the product; without JavaScript the links go straight to the Gumroad page. The buy links deliberately do **not** use `class="gumroad-button"`, because Gumroad's overlay CSS restyles that class (font, radius, colors). Cover images: `assets/img/diy-guide-cover-{800,1200}.{webp,jpg}`.

## Before launch: placeholders to replace

Search the repo for `TODO`.

- **Waitlist form** (`index.html`, `assets/js/main.js`): it's a placeholder that opens the visitor's email app (mailto). It does not store emails. Replace it with a real form or email-marketing embed.
- **Contact email** `hello@clearcreditcoach.com` (all pages): being added as a Google Workspace alias.
- **Privacy / Terms**: effective dates, legal business name, mailing address, governing-law state, retention periods, and attorney review. Remove the draft banner once they're final.
- **Education-only copy**: attorney review for CROA and state credit-services laws (especially the do-it-yourself dispute positioning, letter templates, guided walkthrough, and score simulator wording). Don't add outcome claims such as raising, boosting, improving, fixing, or repairing credit, or removing or deleting items. Frame disputes as for inaccurate or incomplete information only.
- **Premium pricing**: shown as "Pricing coming soon".
- **App Store / Google Play badges**: "Coming soon" placeholders. Once the app is live, replace them with the official badges and store links.

## Local preview

```sh
python3 -m http.server 8000   # then open http://localhost:8000/
```

All internal links are relative, so the site also works from a local preview or a subpath.

## Custom domain

The site is live at **https://clearcreditcoach.com/**. The custom domain is set under **Settings → Pages → Custom domain**, and **Enforce HTTPS** is on. (`CNAME` contains `clearcreditcoach.com` for reference. Because this site deploys with GitHub Actions, GitHub uses the Settings value, not that file.)

DNS at GoDaddy:

| Host | Type | Value |
|---|---|---|
| `@` | A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `www` | CNAME | `travizhart.github.io` |

`www.clearcreditcoach.com` and the project URL `https://travizhart.github.io/clearcreditcoach-site/` both 301-redirect to `https://clearcreditcoach.com/`. Check the Pages status anytime with:

```sh
gh api repos/travizhart/clearcreditcoach-site/pages --jq '{cname, https_enforced, html_url}'
```

The font is Plus Jakarta Sans (SIL Open Font License, see `assets/fonts/OFL.txt`) and is self-hosted.
