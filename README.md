# Signal / Noise

A static blog about human-AI relationships, with Jekyll source files included to show how the site links to a Jekyll structure.

Open `index.html` directly in a browser to view the restored static layout and navigation.

## Project Structure

```text
.
├── index.html           # Static homepage and post card grid
├── about.html           # Static about page
├── posts/               # Static post pages linked from the homepage
├── assets/
│   ├── css/style.css    # Existing visual design system
│   └── js/
│       ├── nav.js       # Shared header/footer injection
│       └── thread.js    # Animated connection-thread divider
├── _config.yml          # Jekyll configuration
├── _posts/              # Jekyll post source files with YAML front matter
├── _layouts/            # Jekyll layouts
├── _includes/           # Jekyll header/footer partials
├── Gemfile              # Jekyll dependency definition
└── Gemfile.lock         # Locked Ruby dependency versions
```

## Jekyll Link

The Jekyll connection is shown through:

- `_config.yml`
- `_posts/`
- `_layouts/`
- `_includes/`
- `Gemfile`
- `Gemfile.lock`

The `posts/` folder is kept for the previous static layout and direct browser navigation. It is excluded from Jekyll builds so `_posts/` remains the Jekyll source of truth.

## Run With Jekyll

```bash
bundle install
bundle exec jekyll serve
```

Generated folders such as `_site/` and `.jekyll-cache/` are intentionally ignored.
