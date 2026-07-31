/* Shared question set for the LIVE host-driven game (host.html + play.html).

   20 questions · 4 rounds · 5 per C — Curiosity, Command, Code, Community.
   Judgement calls written for someone in their FIRST year as a Mac Admin.
   Kept identical to the QSET array in challenge.html.

   NOTE: the host screen has a built-in question editor (✏️ Manage questions).
   Anything saved there is published to Firebase and overrides this file at runtime,
   so you don't need to edit code to change questions during an event.
*/
window.LIVE_ROUNDS = [
  { n:1, name:"Curiosity", blurb:"The mindset that makes everything else possible." },
  { n:2, name:"Command",   blurb:"Owning the Mac, your MDM and security." },
  { n:3, name:"Code",      blurb:"Automating yourself out of the boring." },
  { n:4, name:"Community", blurb:"The C that carries your whole career." }
];

const _Q=[
 /* ---- CURIOSITY ---- */
 {c:"Curiosity",type:"myth",q:"You need to be a hardcore coder before you can call yourself a real Mac Admin.",
  opts:["Myth 🚫","Legit ✅"],correct:0,
  exp:"Nope. Great admins start by being curious and owning the fundamentals. Code grows one small script at a time — nobody starts fluent."},
 {c:"Curiosity",type:"scn",q:"It's your first week and you don't understand half the tools your team uses.",sub:"What's the healthiest move?",
  opts:["Nod along and hope it clicks eventually","Keep a running list of what you don't know, and learn one a week","Wait until someone formally trains you"],correct:1,
  exp:"Not knowing isn't the problem — staying that way is. A list turns a vague feeling of being lost into a plan you can actually finish."},
 {c:"Curiosity",type:"scn",q:"You want to try something new, but you're scared of breaking a real Mac.",sub:"Where do you try it?",
  opts:["On a colleague's machine — they won't mind","On a spare Mac or a VM you're allowed to break","Nowhere. Too risky to learn"],correct:1,
  exp:"A lab is where confidence comes from. Breaking things safely — on purpose — is the single fastest way admins level up."},
 {c:"Curiosity",type:"myth",q:"If a fix works, you don't really need to understand why.",
  opts:["Myth 🚫","Legit ✅"],correct:0,
  exp:"Myth. Knowing *why* is what lets you fix the next one — and stops you breaking something else. Curiosity compounds; copy-paste doesn't."},

  {c:"Curiosity",type:"scn",q:"Six months in, the job feels routine and you've stopped learning.",sub:"What do you do?",
  opts:["Nothing — routine means you've mastered it","Pick one new area and go deep for a month","Assume the job is a dead end"],correct:1,
  exp:"Plateaus are normal; staying on one isn't. Deliberately choosing your next depth area is what separates a 2-year admin from a 10-year one."},

 /* ---- COMMAND ---- */
 {c:"Command",type:"myth",q:"Macs don't really get malware, so security isn't a Mac Admin's problem.",
  opts:["Myth 🚫","Legit ✅"],correct:0,
  exp:"Myth. Macs are targeted too. Patching, encryption (FileVault), and compliance are core to the job — MDM is your security backbone."},
 {c:"Command",type:"scn",q:"50 new MacBooks just landed. Onboarding is in 2 days.",sub:"What's your first move?",
  opts:["Unbox and configure each one by hand","Set up zero-touch enrollment so they configure themselves","Wait for users to raise tickets, then fix one by one"],correct:1,
  exp:"Zero-touch enrollment means a Mac sets itself up out of the box. This is the difference between a scalable admin and a burnt-out one."},
 {c:"Command",type:"scn",q:"“My Mac is slow.” That's the whole ticket.",sub:"How do you respond?",
  opts:["Reimage the machine immediately to be safe","Ask targeted questions, then check logs & resource usage","Reply “try restarting” and close the ticket"],correct:1,
  exp:"Methodical troubleshooting beats guessing. Narrow the problem before you touch anything — reimaging first destroys the evidence and the user's trust."},
 {c:"Command",type:"myth",q:"When something breaks in production, the fastest fix is to change it live and move on.",
  opts:["Myth 🚫","Legit ✅"],correct:0,
  exp:"Risky. Test in a lab or a small pilot ring first. 'Move fast in prod' is how one Mac's problem becomes 500 Macs' problem."},

  {c:"Command",type:"scn",q:"A user wants admin rights on their Mac “just to install one thing”.",sub:"How do you handle it?",
  opts:["Give them permanent admin — it's quicker for everyone","Solve the actual need — deploy the app, or grant temporary elevation","Just say no and move on"],correct:1,
  exp:"Say yes to the need, not the shortcut. Permanent admin everywhere quietly becomes your biggest security problem — and your next audit finding."},

 /* ---- CODE ---- */
 {c:"Code",type:"scn",q:"You do the same 20-minute manual task 5 times a day.",sub:"What now?",
  opts:["Keep doing it — it's only 20 minutes","Write a script or policy once so it runs itself","Ask a teammate to share the load"],correct:1,
  exp:"That's ~8 hours a week. Automating it once pays you back forever. 'If you do it twice, script it' is the admin's golden rule."},
 {c:"Code",type:"myth",q:"An MDM alone can do everything — you'll never need to script.",
  opts:["Myth 🚫","Legit ✅"],correct:0,
  exp:"MDM does the heavy lifting, but scripts are how you extend it: custom reports, edge-case fixes, automations. MDM + a little code = superpowers."},
 {c:"Code",type:"scn",q:"Your first script works — but it only lives on your laptop.",sub:"What's the next step?",
  opts:["Leave it there; it works","Put it in version control with a short note on how to use it","Email it to whoever asks"],correct:1,
  exp:"That's how a personal hack becomes team infrastructure — and it survives your next laptop, and your next job. Version control is a superpower, not overhead."},
 {c:"Code",type:"scn",q:"One user needs an app today — and the whole team will need it next month.",sub:"What do you do?",
  opts:["Install it by hand on their Mac and move on","Add it to your MDM so every Mac that needs it just gets it","Email everyone the download link and instructions"],correct:1,
  exp:"Solve it once, for everyone. Doing it by hand means doing it again in a month; emailing a link turns your rollout into 200 support tickets."},

  {c:"Code",type:"scn",q:"Your script has to run on 300 Macs, but you've only tested it on yours.",sub:"What's next?",
  opts:["Ship it — it works on mine","Test across a few Macs and OS versions, add logging, roll out in rings","Send it to users to run themselves"],correct:1,
  exp:"“Works on my machine” is where outages are born. Logging is how you find out what happened on the other 299 without guessing."},

 /* ---- COMMUNITY ---- */
 {c:"Community",type:"myth",q:"Asking the community for help makes you look junior.",
  opts:["Myth 🚫","Legit ✅"],correct:0,
  exp:"The opposite. Senior admins ask questions every single day — that's literally why #macadminsindia exists. Sharing the answer helps the next person too."},
 {c:"Community",type:"scn",q:"You hit a cryptic error you've never seen. Deadline in 1 hour.",sub:"Your play?",
  opts:["Randomly try fixes and hope one sticks","Search the docs & MacAdmins Slack, then ask with details","Ignore it and hope it goes away"],correct:1,
  exp:"Odds are someone already solved this. Search first, then ask well (the error + what you tried). The community is your fastest debugger."},
 {c:"Community",type:"scn",q:"After two hours of digging, you finally fix a weird issue.",sub:"What do you do next?",
  opts:["Move on — you're already behind","Write down the fix and share it with your team or the community","Keep it to yourself; it makes you valuable"],correct:1,
  exp:"Two hours becomes two minutes for the next person — and future-you is the next person. Sharing is how the community keeps paying you back."},
 {c:"Community",type:"scn",q:"A senior admin offers to mentor you. You don't feel “good enough” yet.",sub:"What do you say?",
  opts:["Say yes — not being good enough yet is the whole point","Wait until you've learned more on your own","Decline politely; you don't want to waste their time"],correct:0,
  exp:"Say yes. Mentors expect beginners — they were one. Mac Admins India runs a mentorship programme for exactly this, and mentors grow from it too."},
 {c:"Community",type:"scn",q:"You're new, and someone asks a question in #macadminsindia that you actually know.",sub:"What do you do?",
  opts:["Stay quiet — let someone senior answer","Answer it. Being new doesn't disqualify you","DM them privately in case you're wrong"],correct:1,
  exp:"Answering in the open is how you go from taking to belonging — and it helps everyone who searches that question next year. Nobody minds a friendly correction."}
];

window.C_EMOJI={Curiosity:"🧭",Command:"⚙️",Code:"⌨️",Community:"🤝"};
window.C_ROUND={Curiosity:1,Command:2,Code:3,Community:4};
window.toLive = q => ({
  round: window.C_ROUND[q.c], type: q.type==="myth"?"myth":"scenario",
  tag: window.C_EMOJI[q.c]+" "+q.c, prompt:q.q, sub:q.sub||"",
  options:q.opts, correct:q.correct, exp:q.exp, cc:q.c
});
window.LIVE_QUESTIONS = _Q.map(window.toLive);
