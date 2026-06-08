# Al-Falah High School — Project Requirements

This file captures the long-lived requirements and rules for this project. Implementation choices may evolve, but anything in this file should be treated as a constraint when proposing or shipping changes.

---

## Content & integrity rules

- **No fake or unverified claims** anywhere on the site. If a fact isn't sourced from the client or from a verified public listing (JustDial / Google Maps for this school), it does not go on the page.
- Phone, email, hours, principal name, established year, board affiliation, student count, awards, testimonials, and review numbers must come from the client. Until then, related UI must hide gracefully — not show placeholders that look real.
- Layout is controlled by code. The client may edit content (text, images, links, ordering) but must not be able to redesign sections, change typography, change the color system, or rearrange the page structure.

---

## Homepage Poster / Updates Slider

A dedicated homepage section for featured posters and important school updates (e.g. admissions notices, event posters, holiday announcements). The client should be able to manage 2–3 featured posters from the CMS without writing any code.

### 1. Frontend requirements

- A homepage **poster/update slider section** that lives in the main page composition.
- Shows **2–3 featured posters** at a time. Single-poster mode is allowed if only one is active.
- Transitions smoothly like a **carousel** — slide or fade, using the existing iOS easing tokens (`--ease-ios-out`, `--ease-ios-spring`). No abrupt cuts, no JS-injected bounce that breaks the iOS-style motion language already in `src/styles/global.css`.
- **Mobile responsive** — readable down to 375 px, single poster per view on small screens, proper touch swipe support, no horizontal page scroll.
- **Matches the premium school design** — same border radius family, same shadow elevation language, same gold/deep-green/ivory palette, same `font-serif` for poster titles, same `data-reveal` entrance behavior, same `data-hover-card` interaction patterns.
- Must **not look like a cheap ad banner**. No flashing borders, neon gradients, ALL-CAPS marketing copy, sharp red badges, or animated GIFs. Treat it as editorial — a curated set of cards, not a promo carousel.
- **Hides gracefully** if there are no active posters: the entire section renders nothing (no empty container, no "coming soon" placeholder, no skeleton).
- Respect `prefers-reduced-motion`: auto-advance disabled, transitions snap, but content stays fully accessible.
- Keyboard-accessible (Tab/Enter on controls, Esc to pause auto-advance if implemented).
- Each poster's image needs `alt` text — never empty, never derived from the filename.

### 2. CMS requirements (Sanity — future integration)

When Sanity is wired in, define a schema type named **`homepagePoster`** (alias: `updatePoster`) with these fields, all editable by the client:

| Field | Type | Notes |
|---|---|---|
| `title` | string, required | Poster headline. |
| `description` | text, optional | Short supporting line. |
| `image` | image with hotspot, required | The poster art. |
| `imageAlt` | string, required | Alt text. Mandatory — not optional. |
| `ctaLabel` | string, optional | Button label, e.g. "Enquire Now". |
| `ctaHref` | url or string, optional | Link target. Validate against allowed prefixes (`#…`, `https://…`, `tel:`, `mailto:`). |
| `active` | boolean, default false | Master visibility switch. |
| `featured` | boolean, default false | Surface in the homepage slider when true. |
| `order` | number, default 0 | Sort key for stable ordering. |
| `startDate` | datetime, optional | Show only on/after this date. |
| `endDate` | datetime, optional | Hide on/after this date. |

**Fetch behavior:**
- Website **fetches active posters from Sanity** when Sanity is configured (env vars present, dataset reachable).
- Filter logic: `active === true` AND `featured === true` AND (`!startDate || startDate <= now`) AND (`!endDate || now < endDate`), sorted by `order` then by `_updatedAt` descending. Cap at 3 results for the homepage.
- **Fallback to `src/data/school.ts`** if Sanity is not configured or the fetch fails. Define a `SCHOOL.posters` array shape that mirrors the Sanity schema (so the same renderer can consume either source).
- During the fallback path, the section still respects the same "hide gracefully when empty" rule.

### 3. Rules

- **Do not let the client freely redesign layout.** No layout fields in the Sanity schema — no width, no alignment, no color picker, no font override, no "html" rich-text. The schema exposes content only.
- **Only allow safe content editing.** Strings are length-validated, URLs are prefix-validated, dates are real dates, images use Sanity's hotspot/asset pipeline.
- **Keep layout controlled by code.** The renderer in Astro decides spacing, animation, breakpoints, focus order. The CMS supplies data, not structure.
- **No fake claims.** Posters shown publicly must reflect real school activity. Do not seed demo posters that imply events or programs the school hasn't confirmed.
- **Don't ship code changes for this section yet** unless explicitly asked. This entry documents the contract for a future implementation pass.

---

## Existing decisions (for reference)

- Tech: Astro 6 + Tailwind v4 + `lucide-astro` icons. Motion enhancements in `src/scripts/motion-enhance.ts`, reveal system in `src/scripts/reveal.ts`. Design tokens in `src/styles/global.css`.
- Single source of content today: `src/data/school.ts`. The future Sanity integration must keep this file as the offline fallback.
- Deploy: GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.
- Verified school facts (from public listings): name **Al-Falah High School**, locality **Shanti Nagar, Adilabad, Telangana**, coordinates **19.6690535, 78.5415095**.
