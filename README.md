# Bomray Lab Website

Official website for Bomray Lab Atlassian apps, built with [Astro](https://astro.build/).

## Local development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Resources

Posts live in `src/content/blog/` as Markdown files. Long posts can use a folder with colocated images.

```text
src/content/blog/my-post/
├── index.md
├── hero.webp
└── diagram.webp
```

The public label is **Resources**; URLs stay under `/blog/`.

```yaml
---
title: "Post title"
description: "Short summary"
pubDate: 2026-07-28
category: News   # Jira Guide | News | Product Update | Release Note
lang: en
slug: my-post
hero: ./hero.webp
seo:
  title: "SEO title"
  description: "SEO description"
  canonical: /blog/my-post/
  robots: index, follow
  ogImage: ./hero.webp
  ogTitle: "OG title"
  ogDescription: "OG description"
keywords:
  - example keyword
related:
  - another-post-slug
---
```

SEO tags (canonical, Open Graph, Twitter, Article JSON-LD), sitemap, and `robots.txt` are generated from frontmatter and `astro.config` `site`.

## GitHub Pages

This site is deployed with GitHub Actions on every push to `main`.

Go to:

`Settings → Pages → Build and deployment → Source → GitHub Actions`

Deploy after Marketplace approval, then update listed URLs to the clean paths (`/privacy/`, `/terms/`, etc.).
