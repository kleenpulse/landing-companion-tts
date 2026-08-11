# Companion TTS — Landing

Marketing site for **[Companion TTS](https://github.com/kleenpulse/companion-tts)**, a floating
desktop companion that speaks Claude Code's output aloud.

> **Hear Claude Code work.**
> A floating companion that speaks agent output aloud and pings you when it needs you.

**→ Main app repo: [kleenpulse/companion-tts](https://github.com/kleenpulse/companion-tts)**
· [Releases](https://github.com/kleenpulse/companion-tts/releases)
· [GPL-3.0](https://github.com/kleenpulse/companion-tts/blob/main/LICENSE)

This repo contains only the website. The application itself — Rust, Tauri v2, the
provider chain, the Piper voices — lives in the main repo.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router — no `pages/`) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config in [globals.css](app/globals.css)) |
| Motion | [`motion`](https://motion.dev) v13 + [Lenis](https://lenis.darkroom.engineering) smooth scroll |
| Theming | `next-themes`, class-based dark variant |
| Fonts | Geist, Geist Mono, Space Grotesk, Space Mono via `next/font` |
| Runtime | Bun 1.3 |

## Getting started

```sh
bun install
bun run dev      # http://localhost:3000
```

```sh
bun run build    # production build
bun run lint
```

## Architecture

### The content contract

[`lib/content.ts`](lib/content.ts) is the named character of this codebase. **Every
user-facing string on the page lives there, and every claim is verified against the
companion-tts source.** Provider ranks come from `src-tauri/src/synth.rs`, the alert
lines are the exact spoken strings from `src/speech/attention.ts`, the voice catalog
from `src-tauri/src/piper_tts.rs`.

Zero invention is the rule. A landing page that overstates the product is a bug, so
copy changes start in the app repo — verify the behaviour, then update `content.ts`.
Components never hardcode marketing prose.

### Theming

Dual-theme is a first-class requirement, not a toggle bolted on afterward. Both palettes
are defined as CSS custom properties in [`app/globals.css`](app/globals.css) — `:root`
for light, `.dark` for dark — and every glass effect, orb, grain overlay, and shadow reads
from tokens. Nothing hardcodes a color.

[`lib/theme-transition.ts`](lib/theme-transition.ts) and
[`hooks/use-theme-transition.ts`](hooks/use-theme-transition.ts) drive the View Transition
between the two.

### Layout

```
app/
  layout.tsx          root shell — fonts, ThemeProvider, SmoothScroll, Scrollbar
  page.tsx            section composition
  globals.css         design tokens (light + dark), Tailwind v4 config

components/
  sections/           hero · alerts · provider-chain · bento-grid ·
                      voices · open-source-strip · final-cta
  ui/                 glass-card · hero-dial · panel-mock · cta-button · eyebrow
  effects/            liquid-filter · backdrop · reveal · smooth-scroll · scrollbar
  layout/             island-nav · footer · theme-provider · theme-toggle · icons

lib/
  content.ts          the content contract — all copy, all links
  lenis-store.ts      shared Lenis instance
  theme-transition.ts View Transition helper
```

`components/effects/liquid-filter.tsx` holds the SVG displacement filter behind the
liquid-glass refraction; `glass-card` and `hero-dial` consume it.

## Contributing

Bug in the app itself, a feature request, or a provider question → open it on the
[main repo](https://github.com/kleenpulse/companion-tts/issues). Issues here are for the
website: copy, layout, accessibility, performance.

If a claim on the page is wrong or stale, that's the highest-priority issue you can file.

## License

The Companion TTS application is [GPL-3.0-only](https://github.com/kleenpulse/companion-tts/blob/main/LICENSE).
