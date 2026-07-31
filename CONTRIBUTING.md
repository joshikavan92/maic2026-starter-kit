# Contributing

This started as a 25-minute workshop at **Mac Admins India Connect 2026** — a launchpad for people
just starting out with Apple device management. It only gets better with more admins in it. 🙌

## Add or fix a resource (the most useful contribution)

The whole resource directory is generated from **one file: `resources.js`**.

1. Fork this repo and open `resources.js`.
2. Find the right category (`Start here — communities`, `Master resource lists`,
   `News, blogs & the people behind them`, `Learn & get certified`,
   `Essential tools & open source`, `Conferences & podcasts`).
3. Add an entry:
   ```js
   { name: "The Thing",
     url:  "https://example.com",
     by:   "Author Name",              // optional — who made it
     byUrl:"https://linkedin.com/in/…",// optional — links the author's name
     note: "One short line on why a beginner should care." },
   ```
4. Open a Pull Request. That's it — no build step needed for the website; a maintainer
   regenerates `index.html` and the PDF.

**What we're looking for:** things that genuinely help a *new* Apple admin — no affiliate links,
no vendor pitches. Community-maintained and free-to-read is best.

## Other ways to help

- **Questions for the live game** — `live-questions.js`. Keep them short, and tag which of the
  4 C's each one builds (Curiosity / Command / Code / Community).
- **Typos, broken links, dead blogs** — very welcome, just open an Issue or a PR.
- **Translations** — if you'd like to localise the challenge, open an Issue first so we can
  plan the structure.
- **Report a bug** in the challenge or the live game via Issues, with your device + browser.

## Regenerating the built files (maintainers)

The site and the ebook are generated from `resources.js` by two Node scripts kept with the
workshop source (`site.js` → `index.html`, `kit.js` → the Starter Kit PDF). If you don't have
those, just describe your change in the PR and a maintainer will rebuild.

## Code of conduct

Be kind, be patient, assume good faith — the same way the Mac Admins community treats newcomers.
Everyone here was a beginner once.

---
Curiosity · Command · Code · Community
