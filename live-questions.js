/* Shared question set for the LIVE host-driven game (host.html + play.html).
   Each question: type, prompt, (optional sub), options[], correct index, explanation, and the C it builds. */
window.LIVE_QUESTIONS = [
  { type:"myth", tag:"Myth or Legit?",
    prompt:"You must be a hardcore coder before you're a real Mac Admin.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Myth. Great admins start curious and own the fundamentals first. Code grows one small script at a time.",
    cc:"Curiosity + Code" },

  { type:"myth", tag:"Myth or Legit?",
    prompt:"Macs don't really get malware, so security isn't a Mac Admin's job.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Myth. Macs are targeted too. Patching, FileVault and compliance are core — your MDM is the backbone.",
    cc:"Command" },

  { type:"myth", tag:"Myth or Legit?",
    prompt:"Asking the community for help makes you look junior.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Myth. Senior admins ask questions every day — that's exactly why #macadminsindia exists.",
    cc:"Community" },

  { type:"scenario", tag:"You're on call",
    prompt:"50 new MacBooks just landed. Onboarding is in 2 days.",
    sub:"What's your first move?",
    options:["Configure each one by hand","Set up zero-touch / Automated Device Enrollment","Wait for tickets, then fix one by one"], correct:1,
    exp:"Zero-touch enrollment means each Mac sets itself up out of the box — the difference between scaling and burning out.",
    cc:"Command + Code" },

  { type:"scenario", tag:"You're on call",
    prompt:"“My Mac is slow.” That's the whole ticket.",
    sub:"How do you respond?",
    options:["Reimage it immediately","Ask targeted questions, then check logs & usage","Reply ‘try restarting’ and close it"], correct:1,
    exp:"Methodical troubleshooting beats guessing. Narrow the problem before you touch anything.",
    cc:"Command + Curiosity" },

  { type:"scenario", tag:"You're on call",
    prompt:"You do the same 20-minute manual task, 5 times a day.",
    sub:"What now?",
    options:["Keep doing it — it's only 20 min","Write a script/policy once so it runs itself","Ask a teammate to share the load"], correct:1,
    exp:"That's ~8 hours a week. Automate it once and it pays you back forever. If you do it twice, script it.",
    cc:"Code" }
];
