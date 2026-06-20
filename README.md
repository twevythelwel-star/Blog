<!-- README: Overview and project instructions for contributors -->
# AI & Me — Signal / Noise

A blog on human-AI relationships, built with Jekyll for GitHub Pages.

**Live site:** https://twevythelwel-star.github.io/Blog/  
**Repository:** https://github.com/twevythelwel-star/Blog

---

## Project Structure

```
.
├── .gitignore               # Excludes _site/, .jekyll-cache/, vendor/
├── Gemfile                  # github-pages gem — locks to GitHub Pages versions
├── _config.yml              # baseurl: /Blog, url: twevythelwel-star.github.io
│
├── _includes/               # Shared partials — Jekyll injects these at build time
│   ├── head.html            # <head> — charset, viewport, title, CSS link
│   ├── header.html          # Sticky nav — active state set via Liquid, not JS
│   └── footer.html          # Site footer
│
├── _layouts/                # Page templates
│   ├── default.html         # Base layout — all pages inherit this
│   └── post.html            # Single post — adds prev/next nav dynamically
│
├── _posts/                  # Blog posts as Markdown — Jekyll generates HTML
│   ├── 2026-06-01-ai-best-friend.md
│   ├── 2026-06-05-generation-ai.md
│   ├── 2026-06-09-ai-girlfriend.md
│   ├── 2026-06-11-ai-therapist.md
│   └── 2026-06-14-future-bonds.md
│
├── index.html               # Homepage — Liquid loop auto-generates post cards
├── about.html               # About page
│
├── assets/
│   ├── css/style.css        # Full design system — unchanged from original
│   └── js/
│       ├── nav.js           # Placeholder — active nav now handled by Liquid
│       └── thread.js        # Animated SVG connection-thread divider
│
└── posts/                   # Original static HTML — browser fallback only
                             # Excluded from Jekyll build via _config.yml
```

---

## Push to GitHub (run these in VS Code terminal)

```bash
cd signal-noise-github

git init
git add .
git commit -m "Initial Jekyll blog — AI & Me"
git remote add origin https://github.com/twevythelwel-star/Blog.git
git branch -M main
git push -u origin main
```

Then go to: **GitHub repo → Settings → Pages → Source → main / (root) → Save**

Your site goes live at: **https://twevythelwel-star.github.io/Blog/**

---

## Run Locally (optional check before pushing)

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000/Blog/
```
