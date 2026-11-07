# Website verification — 7 November 2026

- Built 15 English, German and Polish pages without runtime JavaScript or a production dependency.
- Passed 45 browser layout checks: every page at 320, 390 and 1440 pixels. No horizontal page overflow, broken local links/images/anchors or browser runtime errors.
- Confirmed FAQ expands with keyboard Enter. Every page has one h1 and a skip link; images have alt attributes. This is a focused accessibility check, not a complete WCAG audit.
- Visually reviewed English desktop home, German mobile home, German desktop privacy page and their navigation, screenshots, contents and draft notice.
- Verified website-only screenshots are used, new icon is present, and English/German/Polish page families have matching language links, canonical URLs and social previews.
- No analytics script, iframe, form, external font, advertising integration or browser storage introduced. Hosting requests still reach GitHub Pages.
- Python compile and git whitespace checks passed.
- `source/check_release.py` correctly reports four unconfirmed facts: mailbox delivery, support retention operation, App Store EULA configuration and submitted-build match. Review draft banners and noindex remain intentional.
- No live-domain deployment, outgoing email, in-app purchase test, App Store Connect configuration change or legal certification performed. Existing `CNAME` and root legal URLs preserved.

Browser preview images are in `/tmp/rotinely-website-qa/`. Reproduce using the README instructions.

## Practical guides update — 7 November 2026

- Added two guides in English and German (four pages), homepage guide cards, reciprocal language links, related-guide navigation and sitemap entries. No Polish guide links point to missing translations.
- Passed 57 browser layout checks across all 19 pages at 320, 390 and 1440px, plus local links/images/anchors, language-alternative destinations, keyboard FAQ and runtime checks.
- Visually reviewed the English morning guide on desktop and German step-timer guide on mobile.
- The five morning steps total 22 planned minutes. Copy explicitly allows extra time, pauses and transitions, and accurately describes manual step advancement and Pro-only voice/schedule features.
- Python compile and whitespace checks passed. All four pages retain the site's current draft/noindex behavior; nothing deployed.
