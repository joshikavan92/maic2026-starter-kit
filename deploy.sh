#!/bin/zsh
# ---------------------------------------------------------------------------
# One-shot deploy for the Mac Admin Starter Kit site -> GitHub Pages.
#
# Run this ONCE, from inside the site/ folder, on your Mac:
#     cd /path/to/site
#     ./deploy.sh                     # uses repo name "maic2026-starter-kit"
#     ./deploy.sh my-custom-repo-name # or pass your own name
#
# Requirements (one-time):
#     - Git             (preinstalled on macOS via Xcode CLT: xcode-select --install)
#     - GitHub CLI      (brew install gh)  then  gh auth login   <- logs you in
#
# After it runs, every future `git push` re-publishes the site automatically.
# ---------------------------------------------------------------------------
set -euo pipefail

REPO="${1:-maic2026-starter-kit}"

command -v gh >/dev/null 2>&1 || { echo "❌ GitHub CLI not found. Install it:  brew install gh  (then: gh auth login)"; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "❌ Not logged in to GitHub. Run:  gh auth login"; exit 1; }

OWNER="$(gh api user -q .login)"

# 0) clear any stale lock files from a previous interrupted run
[ -d .git ] && find .git -name '*.lock' -delete 2>/dev/null || true

# 1) make sure we have a git repo with a commit
if [ ! -d .git ]; then
  git init -b main
fi
git add -A
git commit -m "Deploy: Mac Admin Starter Kit (MAIC 2026)" 2>/dev/null || echo "· nothing new to commit"
git branch -M main 2>/dev/null || true

# 2) create the GitHub repo (if needed) and push
if git remote get-url origin >/dev/null 2>&1; then
  git push -u origin main
else
  gh repo create "$REPO" --public --source=. --remote=origin --push
fi

# 3) enable GitHub Pages (source: main branch, root folder)
gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
  || gh api -X PUT "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
  || echo "· Pages may already be enabled (or enable it in Settings → Pages)."

echo ""
echo "✅ Done. Your site will be live in ~1 minute at:"
echo "   Hub:       https://$OWNER.github.io/$REPO/"
echo "   Challenge: https://$OWNER.github.io/$REPO/challenge.html"
echo "   Kit PDF:   https://$OWNER.github.io/$REPO/assets/MAIC2026-Mac-Admin-Starter-Kit.pdf"
echo ""
echo "Next: make the QR point at the hub ->"
echo "   python3 generate_qr.py \"https://$OWNER.github.io/$REPO/\""
