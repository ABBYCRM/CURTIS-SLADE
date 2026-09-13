# Mr. Big Guy — The Rise and Fall of Curtis Slade

Official website for the street memoir **Mr. Big Guy: The Rise and Fall of Curtis Slade** by Curtis Slade, published by Slade Enterprise Group / 1 Street Boyz Publications. ISBN 979-8-218-01234-5.

## Stack
- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3** with custom `ink / bone / gold` palette
- **React Router 6** (SPA, `base: './'` so it works under any subpath)
- Fonts: Cinzel (display), Playfair Display (serif), Inter (sans)

## Pages
| Route | Purpose |
|------|---------|
| `/` | Hero, hook, book preview, themes, early praise, Crown Me King banner |
| `/book` | Full synopsis, quick facts, chapter arc, sequel teaser |
| `/about` | Curtis Slade bio, origin story, Slade Enterprise Group imprint |
| `/order` | 6 retailer cards (Amazon, B&N, Bookshop, Apple, Audible, IndieBound) + 4 editions |
| `/press` | Press kit stats, downloadable assets, Book 2 newsletter |
| `/faq` | 9 expandable questions (also embedded as FAQPage JSON-LD) |

## SEO / GEO / AEO
- **Meta:** title, description, keywords, author, robots, canonical
- **Open Graph:** book-type with `book:author`, `book:isbn`, `book:release_date`, `book:tag`
- **Twitter Card:** summary_large_image
- **JSON-LD `@graph`:** Organization, Person (Curtis Slade), Book, FAQPage, BreadcrumbList, WebSite — all wired so AI search engines can extract canonical facts
- **GEO signals:** author `knowsAbout`, `birthPlace` (Dania Beach, Florida), genre tagging
- **`robots.txt`:** explicit Allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, anthropic-ai, cohere-ai (AEO)
- **`sitemap.xml`:** all 6 pages with priorities
- **`llms.txt`:** LLM-readable canonical summary of the book (TL;DR, story, themes, contact)
- **`humans.txt`:** credits

## Imagery
- `/images/hero-portrait.jpg` — editorial portrait (man in dark suit, gold tie, library)
- `/images/miami-skyline.jpg` — Miami dusk skyline backdrop
- `/images/crown-mark.jpg` — gold crown brand mark
- `/images/dania-street.jpg` — Florida street noir backdrop
- `/images/book-cover-flat.png` — book cover (front + spine)
- `/images/book-cover-back.png` — book cover back
- `/images/book-back-text.png` — back-cover copy reference

## Run

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # produces dist/
npm run preview      # serves dist/ on http://localhost:4173
```

## Deploy
The site is a static SPA — `dist/` is ready to upload to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3+CloudFront, DigitalOcean App Platform static site, etc.). Use the `mrbigguybook.com` domain.
