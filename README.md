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

### The format — 4 rounds, 20 questions, one round per C

| Round | Name | Questions | What it builds |
|---|---|---|---|
| 1 | 🧭 **Curiosity** | 5 | The learning mindset |
| 2 | ⚙️ **Command** | 5 | The Mac, your MDM, security |
| 3 | ⌨️ **Code** | 5 | Automation thinking |
| 4 | 🤝 **Community** | 5 | Asking, sharing, mentorship |

Every question is a judgement call written for a first-year admin — no command-line trivia.
A mix of *Myth or Legit?* (2 options) and situations (3 options), and each reveal teaches the point.

The host screen shows the round and both positions (`Q3 of 5 · overall 13/20`), so the rounds are
natural stopping points. **Timing:** ~35–45 seconds per question including the reveal ≈ **12–15
minutes for all 20**. Tight on time? Finish after Round 2 or 3 and point people at the self-paced
challenge for the rest.

> The same 20 questions power the self-paced `challenge.html`, which adds a **rate-yourself** step
> at the end and turns the whole thing into a personal Readiness Card. `live-questions.js` and the
> `QSET` array in `challenge.html` are kept identical — update both if you edit questions.

### Editing questions during an event (no code) ✏️🔒

The host screen has a built-in editor — click **✏️ Manage questions** in the lobby.

- **Password protected.** The password is **`AppleJamf@123`** (change it — see below). Once entered it's
  remembered for that browser session; **🔒 Lock** in the editor footer locks it again.
- **Add / Edit / Remove** any question, grouped by round. Pick the C it builds, choose the format
  (*Myth or Legit* = 2 answers, *Scenario* = 3), and tap a circle to mark the correct answer.
- Saving **publishes to Firebase**, so every phone picks up the new set immediately — players always
  follow the host, not the file.
- **↺ Restore built-in questions** reverts to `live-questions.js`; **⧉ Copy as JSON** copies the current
  set so you can paste it into that file to keep changes permanently.
- Without Firebase (Demo mode) edits save to that device only, which is fine for rehearsing.

**To change the password:** it's stored as a hash so it isn't visible in the page source. Generate a new
one and replace `QPASS_HASH` in `host.html`:

```bash
node -e 'const p=process.argv[1];let h=2166136261;for(let i=0;i<p.length;i++){h^=p.charCodeAt(i);h=Math.imul(h,16777619);}console.log((h>>>0).toString(16))' "YourNewPassword"
```

> ⚠️ Be realistic about what this is: everything here runs in the browser, so the gate stops someone
> casually poking at the podium laptop — it is **not** real security, and a determined person could get
> past it. Don't reuse a password you care about, and lock the Firebase rules after the event.

### Winners & statistics

When you hit **Finish**, the screen celebrates with confetti and shows:

- a **top-3 podium** with the winners' names (🥇 centre stage),
- the **full leaderboard** (top 10, with score bars; ties broken by who answered faster),
- **statistics**: players joined, overall accuracy, average score, perfect scores, total answers,
  **⚡ fastest correct answer**, the **toughest question**, the easiest one, and accuracy per round.

### Running it at the event

- **Big screen / projector:** open **`…/host.html`**. It shows a join QR + live player count.
  When people have joined, click **Start the game**, then **Reveal answer** and **Next →** to
  drive each question. Answer bars fill in real time as the room taps.
- **The join QR stays on screen** (bottom-right) for the whole game, so latecomers can still join
  mid-round — they just start from the current question.
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
