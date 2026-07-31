/* ---------------------------------------------------------------------------
   Firebase config for the LIVE game (host.html + play.html).

   NOTE: this file must stay plain JavaScript (no `import` statements).
   host.html / play.html load the Firebase *compat* SDK via <script> tags and
   read the plain object below. The snippet Firebase shows you in the console is
   the ES-module version — the values are the same, only the wrapper differs.

   These values are SAFE to be public — that's how Firebase web apps work.
   Security comes from your Realtime Database rules (see README → Live game).
--------------------------------------------------------------------------- */
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDlitUKlo9NCdE5eTwU8Mp5xluNA75_1oM",
  authDomain:        "maic2026-starter-kit-public.firebaseapp.com",
  databaseURL:       "https://maic2026-starter-kit-public-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "maic2026-starter-kit-public",
  storageBucket:     "maic2026-starter-kit-public.firebasestorage.app",
  messagingSenderId: "652192026756",
  appId:             "1:652192026756:web:cdfaf74132d767520cb2d1",
  measurementId:     "G-BYHFNPBY9B"
};

/* Room id. Change this (e.g. "maic2026-run2") to start a completely fresh game. */
window.ROOM = "maic2026";
