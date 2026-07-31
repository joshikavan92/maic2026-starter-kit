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

## Live game (host-driven, real-time) 🎮

`host.html` (big screen) + `play.html` (phones) run a live, presenter-controlled quiz with a
real-time answer bar chart. Because GitHub Pages is static, the sync runs on a **free Firebase
Realtime Database** — you just paste a config, no server to run.

### One-time Firebase setup (~5 min)

1. Go to **console.firebase.google.com** → **Add project** (name it anything; Analytics off is fine).
2. Left menu → **Build → Realtime Database** → **Create Database** → pick a location →
   **Start in test mode** (or "locked" then paste the rules below).
3. Set the rules (Realtime Database → **Rules** tab) to:
   ```json
   {
     "rules": {
       "rooms": { ".read": true, ".write": true }
     }
   }
   ```
   > This is open on purpose so phones can join without logins. It only exposes the game room.
   > After the event, delete the database (or set both to `false`) to close it.
4. Gear icon → **Project settings** → scroll to **Your apps** → click the **Web** icon `</>` →
   register an app → copy the `firebaseConfig` values.
5. Open **`firebase-config.js`** in this folder and paste those values (apiKey, authDomain,
   **databaseURL**, projectId, appId). Make sure `databaseURL` is filled in.

Commit & push (or `./deploy.sh`). That's it — the live game is now wired.

### Running it at the event

- **Big screen / projector:** open **`…/host.html`**. It shows a join QR + live player count.
  When people have joined, click **Start the game**, then **Reveal answer** and **Next →** to
  drive each question. Answer bars fill in real time as the room taps.
- **Audience:** they scan the QR (or open **`…/play.html`**), type a name, and answer each
  question on their phones. Their screen follows whatever you do on the host.
### Testing & resetting (rehearse before the room arrives) 🧪

The host screen has built-in test tools, so you can rehearse the whole flow solo — even
**before Firebase is configured** (it drops into *Demo mode* automatically and runs locally).

In the lobby:
- **🧪 Add 12 test players** / **Add 40** — fills the room with fake players.
- **auto-answer for test players** (checkbox, on by default) — when you Start or hit Next, the
  test players answer over a few seconds so you can watch the bars fill exactly like the real thing.

During a question:
- **🧪 Simulate answers** — manually trigger the fake answers for the current question.

Resetting:
- **🧪 Clear test players** (top right) — removes only the fake players + their answers, so you can
  go live with a clean room. **Do this right before the session starts.**
- **↺ Reset game** (top right) — clears *all* players and answers and returns everyone to the lobby.
  Use it between runs; ask players to reload their phones.
- On a player's phone, **"Not you? Change name"** on the waiting screen leaves and rejoins — handy
  when testing repeatedly from one device.

A good dry run: open `host.html` → Add 12 test players → Start → watch bars → Reveal → Next through
the end → Clear test players → Reset game.

URLs (with your current repo):
```
Host screen: https://joshikavan92.github.io/maic2026-starter-kit/host.html
Players:     https://joshikavan92.github.io/maic2026-starter-kit/play.html
```
`qr-play.png` (in the repo) is a themed QR for the player URL if you want it on a slide too;
the host screen also shows a join QR automatically.

Editing the live questions: they live in **`live-questions.js`** (shared by host + player) — edit
the array, commit, push.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, add e.g. `kit.macadmins.in`, then create a CNAME DNS record
pointing to `<your-username>.github.io`. GitHub will provision HTTPS automatically.

---
Curiosity · Command · Code · Community  ·  Engage · Empower · Elevate
