# Uwe Richter Immobilien – Website

Business website for **RWR Immobilienmakler GmbH** (Uwe Richter), a real estate agency in Freiberg, Saxony, Germany. Built with Astro, Tailwind CSS v4, and Starwind UI. Based on the [Astro Validation Landing](https://github.com/Sebasala/astro-validation-landing) template.

## Overview

A German-language static website for a real estate agent, featuring:

- **Landing page** with hero, services, process steps, contact CTA, and FAQ
- **Impressum** (legal imprint, § 5 DDG)
- **Datenschutzerklärung** (privacy policy, DSGVO-compliant)
- Dark/light mode toggle in the header
- SEO meta tags, sitemap, and robots.txt
- Self-hosted on Hetzner with Caddy (see `Caddyfile` and `server/`)

## Tech Stack

- [Astro 6](https://astro.build/) – static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) – utility-first CSS with CSS variables for theming
- [Starwind UI](https://starwind.dev/) – component primitives (accordion, avatar, button, card)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) – automatic sitemap generation
- TypeScript

## Project Structure

```
├── public/
│   ├── robots.txt              # Search engine crawling rules + sitemap reference
│   └── launch.svg              # Favicon
├── server/
│   └── update-and-restart.sh   # Cron script for nightly server updates
├── src/
│   ├── components/
│   │   ├── Header.astro        # Sticky header with nav, dark/light toggle, mobile menu
│   │   ├── Hero.astro          # Hero section with Immowelt button + trust indicator
│   │   ├── Description.astro   # Reusable text block (used for problem + solution)
│   │   ├── Features.astro      # 6 real estate service cards
│   │   ├── HowItWorks.astro    # 3-step process (Kontakt → Beratung → Ergebnis)
│   │   ├── CTA.astro           # Contact section (phone, email, Immowelt, address)
│   │   ├── FAQ.astro           # 5 accordion Q&A items
│   │   ├── Footer.astro        # 4-column footer with nav, legal links, contact info
│   │   ├── Logo.astro          # House SVG icon
│   │   ├── SocialIcon.astro    # Icon renderer (supports immowelt, twitter, github, linkedin)
│   │   └── starwind/           # Starwind UI primitives (accordion, avatar, button, card)
│   ├── content/
│   │   └── content.ts          # ⭐ All page text, links, and configuration in one file
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout (lang="de", SEO tags, dark mode init)
│   ├── pages/
│   │   ├── index.astro         # Main landing page – composes all sections
│   │   ├── impressum.astro     # Legal imprint (§ 5 DDG)
│   │   └── privacy.astro       # Privacy policy (DSGVO)
│   └── styles/
│       └── starwind.css        # Tailwind v4 design tokens (colors, radii, light/dark)
├── Caddyfile                   # Production Caddy web server config
├── astro.config.mjs            # Astro config (site URL, sitemap, Tailwind)
└── starwind.config.json        # Starwind UI component config
```

## Content Management

All text content is centralized in **`src/content/content.ts`**. This single file exports:

| Export | Purpose |
|--------|---------|
| `siteConfig` | Site name, SEO title/description, navigation links, legal links |
| `header` | Header nav links and CTA button |
| `hero` | Headline, subheadline, CTA buttons |
| `problem` | Problem statement section |
| `solution` | Solution statement section |
| `features` | 6 service cards (Verkauf, Vermietung, Energieausweis, Gewerbe, Bewertung, Projektentwicklung) |
| `howItWorks` | 3-step process |
| `cta` | Contact details (phone, email, Immowelt URL, address) |
| `faq` | FAQ questions and answers |
| `footer` | Footer navigation, legal links, social links, copyright |

To update any text on the site, edit this file and rebuild.

## Quick Start

### Prerequisites

- Node.js ≥ 22.12.0
- pnpm 10+

### Install and Run

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:4321`.

### Build for Production

```bash
pnpm build
```

Output goes to `dist/`. This generates static HTML, CSS, JS, plus `sitemap-index.xml`.

## Deployment

The site is deployed to a **Hetzner VPS** running **Caddy** in Docker.

### Deploy Steps

1. Build locally: `pnpm build`
2. Upload to server:
   ```bash
   scp -r dist/* user@SERVER-IP:/var/www/immo-team-richter.de/
   ```
3. Caddy config is in `Caddyfile` – copy to `/etc/caddy/Caddyfile` on the server
4. Reload: `sudo systemctl reload caddy`

### DNS (DomainFactory)

Both `immo-team-richter.de` and `immo-t-r.de` need A records pointing to the Hetzner server IP.

### Server Maintenance

`server/update-and-restart.sh` is a cron script that runs nightly at 03:00 to:
- Update and upgrade Ubuntu packages
- Pull and restart the Caddy Docker container
- Reboot if a kernel update requires it

## Section Anchor Map

In-page navigation uses these IDs:

- `/#features` – Leistungen (services)
- `/#how-it-works` – So funktioniert's (process)
- `/#cta` – Kontakt (contact)
- `/#faq` – Häufige Fragen

All anchor links use absolute paths (`/#section`) so they work from subpages too.

## Theming

Edit `src/styles/starwind.css` to customize colors. The file defines CSS variables for both `:root` (light) and `.dark` (dark) themes. The header includes a toggle slider that persists the choice to `localStorage`.
