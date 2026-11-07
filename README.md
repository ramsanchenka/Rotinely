# Rotinely website

Static GitHub Pages site for US/English and Germany/German, with Polish retained. Branch: `codex/website-relaunch`. No React, build service, tracking or third-party runtime is required to serve it.

## Edit and preview

- Edit the page copy and legal translations in `source/build.py`; provider/operator facts and release confirmations in `source/site.json`.
- Run `python3 source/build.py` to regenerate the 19 HTML pages, sitemap and robots file.
- Run `python3 -m http.server 8766 --bind 127.0.0.1` from this directory. Open `http://127.0.0.1:8766/`, `/de/` or `/pl/`.
- `python3 source/check_release.py` lists missing publication confirmations. It is expected to fail while review facts remain unconfirmed. All pages are noindex and legal pages show a draft notice until these facts are recorded. This is not a deploy guard; review before pushing.
- For browser checks install Playwright in a separate tooling environment, then run `node source/verify.cjs` while the preview server runs. Optionally point `ROTINELY_NODE_MODULES` at a directory containing Playwright. Checks cover 19 pages at 320, 390 and 1440px, local links/images/anchors and keyboard FAQ behavior. Previews go to `/tmp/rotinely-website-qa` by default.

## Legal and launch status

Read `docs/LEGAL-REVIEW.md` before publication. It records app evidence, corrected claims, actual provider facts, unresolved account/operational checks and authoritative sources. Nothing has been pushed or deployed in this task. Confirm that the app is available again and the live version matches this relaunch build.

Root `privacy.html`, `terms.html` and `support.html` paths remain available for existing app links. `CNAME` remains unchanged. The site uses `https://www.rotinely.app` canonical URLs, alternate-language links, a sitemap and local social-preview images. Verify the existing GitHub project URL redirects and HTTPS after deployment.

The new `assets/screenshots/*.webp` files are compressed derivatives of real website-exclusive marketing captures. Original captures remain in the app marketing kit. Older `assets/sceenshots/` files are retained but unused. The icon matches the approved app asset. No fabricated screenshots, testimonials or clinical claims were added.

For the current small audience, use App Store Connect storefront/campaign reports first. See the legal review for a future, minimal analytics proposal. No email was sent, no data provider connected, and no purchase made.

## Practical guides

The homepage links to two practical guides in English and German. Edit their copy in `source/guides.py` and rerun the builder.

- `/morning-routine-timer.html` ↔ `/de/morgenroutine-mit-timer.html`
- `/step-by-step-routine-timer.html` ↔ `/de/routine-schritt-fuer-schritt.html`

Each guide has its own title, description, canonical URL, EN/DE alternate links, internal navigation, related-guide link and localized screenshot. The morning example totals 22 planned minutes; timings are suggestions and exclude pauses/transitions. The sitemap includes all four pages. Polish home and legal pages are retained; no Polish guide is implied by alternate links. Existing draft/noindex behavior remains until release facts are confirmed.
