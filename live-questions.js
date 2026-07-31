/* Shared question set for the LIVE host-driven game (host.html + play.html).
   15 questions across 3 rounds. Each question:
     round   – 1|2|3
     tag     – shown as the pill on screen
     prompt  – the question
     sub     – optional second line
     options – answer buttons
     correct – index of the right answer
     exp     – the reveal explanation
     cc      – which of the 4 C's it builds
*/
window.LIVE_ROUNDS = [
  { n:1, name:"Myth or Legit?",  blurb:"Five beliefs about being a Mac Admin. Bust them or back them." },
  { n:2, name:"You're on call",  blurb:"Five real situations. What's your move?" },
  { n:3, name:"Level up",        blurb:"Five for the craft — tools, terms and commands." }
];

window.LIVE_QUESTIONS = [
  /* ---------------- ROUND 1 · Myth or Legit? ---------------- */
  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"You must be a hardcore coder before you're a real Mac Admin.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Myth. Great admins start curious and own the fundamentals first. Code grows one small script at a time — nobody starts fluent.",
    cc:"Curiosity + Code" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"Macs don't really get malware, so security isn't a Mac Admin's job.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Myth. Macs are targeted too. Patching, FileVault and a compliance baseline are core to the role — your MDM enforces them.",
    cc:"Command" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"FileVault recovery keys can be escrowed to your MDM.",
    options:["Myth 🚫","Legit ✅"], correct:1,
    exp:"Legit! Escrowing the recovery key to your MDM means an encrypted Mac is never a locked brick. Always turn this on.",
    cc:"Command" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"Asking the community for help makes you look junior.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Myth — the opposite. Senior admins ask questions every single day. That's exactly why #macadminsindia exists.",
    cc:"Community" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"You should always test a change on a small pilot group before pushing it to everyone.",
    options:["Myth 🚫","Legit ✅"], correct:1,
    exp:"Legit. A pilot ring is how one Mac's problem stays one Mac's problem instead of becoming 500.",
    cc:"Command + Curiosity" },

  /* ---------------- ROUND 2 · You're on call ---------------- */
  { round:2, type:"scenario", tag:"You're on call",
    prompt:"50 new MacBooks just landed. Onboarding is in 2 days.",
    sub:"What's your first move?",
    options:["Configure each one by hand","Set up zero-touch / Automated Device Enrollment","Wait for tickets, then fix one by one"], correct:1,
    exp:"Zero-touch enrollment means each Mac sets itself up out of the box — the difference between scaling and burning out.",
    cc:"Command + Code" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"“My Mac is slow.” That's the whole ticket.",
    sub:"How do you respond?",
    options:["Reimage it immediately","Ask targeted questions, then check logs & resource usage","Reply ‘try restarting’ and close it"], correct:1,
    exp:"Methodical troubleshooting beats guessing. Narrow the problem before you touch anything — reimaging destroys the evidence and the user's trust.",
    cc:"Command + Curiosity" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"You hit a cryptic error you've never seen. Deadline in 1 hour.",
    sub:"Your play?",
    options:["Randomly try fixes and hope","Search Slack + docs, then ask #macadminsindia with details","Ignore it and hope it goes away"], correct:1,
    exp:"Odds are someone already solved this. Search first, then ask well (the error + what you tried). The community is your fastest debugger.",
    cc:"Community + Curiosity" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"You do the same 20-minute manual task, 5 times a day.",
    sub:"What now?",
    options:["Keep doing it — it's only 20 minutes","Write a script/policy once so it runs itself","Ask a teammate to share the load"], correct:1,
    exp:"That's ~8 hours a week. Automate it once and it pays you back forever. If you do it twice, script it.",
    cc:"Code" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"A new app must land on 200 Macs by Monday.",
    sub:"Best approach?",
    options:["Remote in to each Mac and install it","Package it and deploy via your MDM (Installomator can help)","Email everyone a download link and instructions"], correct:1,
    exp:"Deploy it once through your MDM and it scales silently. Emailing instructions turns your rollout into 200 support tickets.",
    cc:"Command + Code" },

  /* ---------------- ROUND 3 · Level up ---------------- */
  { round:3, type:"quiz", tag:"Level up",
    prompt:"Which command tells you a Mac's FileVault status?",
    options:["csrutil status","fdesetup status","diskutil verifyVolume /"], correct:1,
    exp:"`fdesetup status` reports whether FileVault is on. (`csrutil status` is System Integrity Protection — a different thing.)",
    cc:"Command + Code" },

  { round:3, type:"quiz", tag:"Level up",
    prompt:"What does ADE (Automated Device Enrollment) give you?",
    options:["Zero-touch setup, straight out of the box","A way to erase a lost device","Automatic app updates"], correct:0,
    exp:"ADE ties a device to your MDM at first boot via Apple Business/School Manager — the foundation of zero-touch.",
    cc:"Command" },

  { round:3, type:"quiz", tag:"Level up",
    prompt:"Which community tool installs and patches apps by simple labels?",
    options:["Nudge","Suspicious Package","Installomator"], correct:2,
    exp:"Installomator (Armin Briegel) installs/updates apps by label — a genuine Mac admin staple. Nudge nags about macOS updates instead.",
    cc:"Code" },

  { round:3, type:"quiz", tag:"Level up",
    prompt:"PPPC / TCC profiles control what, exactly?",
    options:["Which apps may access protected data (privacy)","Wi-Fi passwords","How often the Mac checks in"], correct:0,
    exp:"Privacy Preferences Policy Control pre-approves an app's access to things like the Documents folder, camera or Full Disk Access.",
    cc:"Command" },

  { round:3, type:"quiz", tag:"Level up",
    prompt:"You want your first automation to survive you leaving the company. What do you do?",
    options:["Keep it in your Downloads folder","Put it in version control and document it","Memorise it"], correct:1,
    exp:"Git + a short README turns a personal hack into team infrastructure. Version control is a superpower, not overhead.",
    cc:"Code + Community" }
];
