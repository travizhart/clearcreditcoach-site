# clearcreditcoach.com

Marketing website for **Clear Credit Coach**: the credit-education app (coming soon to iOS and Android) and 1-on-1 credit coaching.

Plain static HTML/CSS/JS with no build step, deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`.

| Path | Page |
|---|---|
| `/` | Home: hero, audiences, app features, Free vs. Premium, coaching, waitlist, FAQ |
| `/coaching/` | 1-on-1 coaching + "Book a free consultation" (**draft, pending attorney review**) |
| `/privacy/` | Privacy Policy (**DRAFT template, pending legal review**) |
| `/terms/` | Terms of Use (**DRAFT template, pending legal review**) |

`/privacy` and `/terms` (no trailing slash) redirect to the pages above, so either form works as the App Store / Google Play URL.

## Before launch: placeholders to replace

Search the repo for `TODO`.

- **Waitlist form** (`index.html`, `assets/js/main.js`): it's a placeholder that opens the visitor's email app (mailto). It does not store emails. Replace it with a real form or email-marketing embed.
- **Booking link** (`coaching/index.html`, both "Book a free consultation" buttons): currently a `mailto:`. Replace it with your booking tool URL (e.g., Calendly).
- **Contact email** `hello@clearcreditcoach.com` (all pages): confirm that this mailbox exists in Google Workspace, or change it.
- **Privacy / Terms**: effective dates, legal business name, mailing address, governing-law state, retention periods, and attorney review. Remove the draft banner once they're final.
- **Coaching page**: attorney review for CROA and state credit-services laws, plus the client contract and disclosures.
- **Premium pricing**: shown as "Pricing coming soon".
- **App Store / Google Play badges**: "Coming soon" placeholders. Once the app is live, replace them with the official badges and store links.

## Local preview

```sh
python3 -m http.server 8000   # then open http://localhost:8000/
```

All internal links are relative, so the site works both at `https://clearcreditcoach.com/` and at the project URL `https://travizhart.github.io/clearcreditcoach-site/`.

## Custom domain

`CNAME` contains `clearcreditcoach.com`. For an Actions-based deploy, GitHub uses the custom domain set in **Settings → Pages**. The `CNAME` file is kept for reference and for branch-based deploys.

The font is Plus Jakarta Sans (SIL Open Font License, see `assets/fonts/OFL.txt`) and is self-hosted.
