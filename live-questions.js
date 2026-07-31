/* Shared question set for the LIVE host-driven game (host.html + play.html).

   15 questions · 3 rounds · written for someone in their FIRST year as a Mac Admin.
   Every question is a judgement call, not command-line trivia — and every one builds
   one of the 4 C's:  Curiosity · Command · Code · Community.

   Each question:
     round   – 1|2|3
     tag     – the pill shown on screen
     prompt  – the question
     sub     – optional second line
     options – answer buttons
     correct – index of the right answer
     exp     – the reveal (this is where the teaching happens)
     cc      – which of the 4 C's it builds
*/
window.LIVE_ROUNDS = [
  { n:1, name:"Myth or Legit?", blurb:"Five things beginners believe. Bust them or back them." },
  { n:2, name:"You're on call", blurb:"Five real situations. What's your move?" },
  { n:3, name:"The long game",  blurb:"Five habits that turn a beginner into the admin everyone trusts." }
];

window.LIVE_QUESTIONS = [
  /* ============ ROUND 1 · Myth or Legit? — the beliefs that hold beginners back ============ */
  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"You need to be a hardcore coder before you can call yourself a real Mac Admin.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Nope. Great admins start by being curious and owning the fundamentals. Code grows one small script at a time — nobody starts fluent.",
    cc:"Curiosity + Code" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"Macs don't really get malware, so security isn't a Mac Admin's problem.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Myth. Macs are targeted too. Patching, encryption (FileVault) and compliance are core to the job — your MDM is the security backbone.",
    cc:"Command" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"Asking the community for help makes you look junior.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"The opposite. Senior admins ask questions every single day — that's literally why #macadminsindia exists. Sharing the answer helps the next person too.",
    cc:"Community" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"When something breaks in production, the fastest fix is to change it live and move on.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"Risky. Test in a lab or a small pilot ring first. 'Move fast in prod' is how one Mac's problem becomes 500 Macs' problem.",
    cc:"Command + Curiosity" },

  { round:1, type:"myth", tag:"Myth or Legit?",
    prompt:"An MDM alone can do everything — you'll never need to script.",
    options:["Myth 🚫","Legit ✅"], correct:0,
    exp:"MDM does the heavy lifting, but scripts are how you extend it: custom reports, edge-case fixes, automations. MDM + a little code = superpowers.",
    cc:"Code + Command" },

  /* ============ ROUND 2 · You're on call — real situations ============ */
  { round:2, type:"scenario", tag:"You're on call",
    prompt:"50 new MacBooks just landed. Onboarding is in 2 days.",
    sub:"What's your first move?",
    options:["Unbox and configure each one by hand","Set up zero-touch enrollment so they configure themselves","Wait for users to raise tickets, then fix one by one"], correct:1,
    exp:"Zero-touch enrollment means a Mac sets itself up out of the box. This is the difference between a scalable admin and a burnt-out one.",
    cc:"Command + Code" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"“My Mac is slow.” That's the whole ticket.",
    sub:"How do you respond?",
    options:["Reimage the machine immediately to be safe","Ask targeted questions, then check logs & resource usage","Reply “try restarting” and close the ticket"], correct:1,
    exp:"Methodical troubleshooting beats guessing. Narrow the problem before you touch anything — reimaging first destroys the evidence and the user's trust.",
    cc:"Command + Curiosity" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"You hit a cryptic error you've never seen. Deadline in 1 hour.",
    sub:"Your play?",
    options:["Randomly try fixes and hope one sticks","Search the docs & MacAdmins Slack, then ask with details","Ignore it and hope it goes away"], correct:1,
    exp:"Odds are someone already solved this. Search first, then ask well (the error + what you tried). The community is your fastest debugger.",
    cc:"Community + Curiosity" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"You do the same 20-minute manual task 5 times a day.",
    sub:"What now?",
    options:["Keep doing it — it's only 20 minutes","Write a script or policy once so it runs itself","Ask a teammate to share the load"], correct:1,
    exp:"That's ~8 hours a week. Automating it once pays you back forever. 'If you do it twice, script it' is the admin's golden rule.",
    cc:"Code" },

  { round:2, type:"scenario", tag:"You're on call",
    prompt:"One user needs an app today — and the whole team will need it next month.",
    sub:"What do you do?",
    options:["Install it by hand on their Mac and move on","Add it to your MDM so every Mac that needs it just gets it","Email everyone the download link and instructions"], correct:1,
    exp:"Solve it once, for everyone. Doing it by hand means doing it again in a month; emailing a link turns your rollout into 200 support tickets.",
    cc:"Command + Code" },

  /* ============ ROUND 3 · The long game — habits that grow a career ============ */
  { round:3, type:"scenario", tag:"The long game",
    prompt:"It's your first week and you don't understand half the tools your team uses.",
    sub:"What's the healthiest move?",
    options:["Nod along and hope it clicks eventually","Keep a running list of what you don't know, and learn one a week","Wait until someone formally trains you"], correct:1,
    exp:"Not knowing isn't the problem — staying that way is. A list turns a vague feeling of being lost into a plan you can actually finish.",
    cc:"Curiosity" },

  { round:3, type:"scenario", tag:"The long game",
    prompt:"After two hours of digging, you finally fix a weird issue.",
    sub:"What do you do next?",
    options:["Move on — you're already behind","Write down the fix and share it with your team or the community","Keep it to yourself; it makes you valuable"], correct:1,
    exp:"Two hours becomes two minutes for the next person — and future-you is the next person. Sharing is how the community keeps paying you back.",
    cc:"Community + Curiosity" },

  { round:3, type:"scenario", tag:"The long game",
    prompt:"You want to try something new, but you're scared of breaking a real Mac.",
    sub:"Where do you try it?",
    options:["On a colleague's machine — they won't mind","On a spare Mac or a VM you're allowed to break","Nowhere. Too risky to learn"], correct:1,
    exp:"A lab is where confidence comes from. Breaking things safely — on purpose — is the single fastest way admins level up.",
    cc:"Curiosity + Command" },

  { round:3, type:"scenario", tag:"The long game",
    prompt:"Your first script works — but it only lives on your laptop.",
    sub:"What's the next step?",
    options:["Leave it there; it works","Put it in version control with a short note on how to use it","Email it to whoever asks"], correct:1,
    exp:"That's how a personal hack becomes team infrastructure — and it survives your next laptop, and your next job. Version control is a superpower, not overhead.",
    cc:"Code + Community" },

  { round:3, type:"scenario", tag:"The long game",
    prompt:"A senior admin offers to mentor you. You don't feel “good enough” yet.",
    sub:"What do you say?",
    options:["Say yes — not being good enough yet is the whole point","Wait until you've learned more on your own","Decline politely; you don't want to waste their time"], correct:0,
    exp:"Say yes. Mentors expect beginners — they were one. Mac Admins India runs a mentorship programme for exactly this, and mentors grow from it too.",
    cc:"Community" }
];
