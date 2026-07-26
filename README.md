# The Mac Admin Starter Kit — website

A tiny, self-contained website for the Mac Admins India Connect 2026 workshop. It's the hub attendees
land on: play the interactive challenge, download the Starter Kit ebook + Field Guide, and browse the
full community resource directory.

## What's in here

```
site/
├── index.html      ← the hub + full resource directory (the page people scan to)
├── challenge.html  ← the interactive "Mac Admin Challenge" (self-contained)
├── README.md       ← this file
└── assets/
    ├── MAIC2026-Mac-Admin-Starter-Kit.pdf   ← the giveaway ebook
    ├── MAIC2026-Mac-Admin-Field-Guide.pdf   ← the one-page handout
    └── qr-community.png
```

Everything is static — no server, no build step, no dependencies.

## Host it on GitHub Pages (5 minutes)

1. **Create a repo**, e.g. `maic2026-starter-kit`, on github.com.
2. **Upload the contents of this `site/` folder** to the repo root
   (so `index.html` sits at the top level — not inside a `site/` subfolder).
   - Web way: repo → **Add file → Upload files** → drag everything in → **Commit**.
   - Git way:
     ```bash
     cd site
     git init && git add . && git commit -m "MAIC 2026 Starter Kit"
     git branch -M main
     git remote add origin https://github.com/<your-username>/maic2026-starter-kit.git
     git push -u origin main
     ```
3. **Enable Pages:** repo → **Settings → Pages → Build and deployment**
   → Source: **Deploy from a branch** → Branch: **main** / **/ (root)** → **Save**.
4. Wait ~1 minute. Your site is live at:
   `https://<your-username>.github.io/maic2026-starter-kit/`

That's it. The challenge is at `/challenge.html` and the kit at `/assets/MAIC2026-Mac-Admin-Starter-Kit.pdf`.

## After it's live — two quick things

1. **Point the workshop QR at the hub.** Regenerate the branded QR with the hosted URL and drop it onto
   slide 4 of the deck:
   ```bash
   python3 generate_qr.py "https://<your-username>.github.io/maic2026-starter-kit/"
   ```
   (Point people at the hub — from there they can play *and* grab the kit. Or point directly at
   `.../challenge.html` if you'd rather send them straight into the game.)

2. **Check the "Get the Starter Kit" button.** Inside `challenge.html`, `KIT_URL` is set to
   `assets/MAIC2026-Mac-Admin-Starter-Kit.pdf`, which works automatically once hosted here. Only change it
   if you move the PDF elsewhere.

## Editing the resource directory later

The directory is generated from a single data file. To add or change a resource, edit `resources.js`
(kept with the build scripts) and re-run `node site.js` (rebuilds `index.html`) and `node kit.js`
(rebuilds the ebook). If you're editing by hand, each entry in `index.html` is a simple
`<a class="res" href="…">` block — copy one and change the text.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, add e.g. `kit.macadmins.in`, then create a CNAME DNS record
pointing to `<your-username>.github.io`. GitHub will provision HTTPS automatically.

---
Curiosity · Command · Code · Community  ·  Engage · Empower · Elevate
