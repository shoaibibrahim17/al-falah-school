# Al-Falah School Website Project

This is an Astro + Tailwind CSS school website for Al-Falah International School.

## Project Goal

Build a premium, mobile-first school website with a real CMS dashboard so non-technical school staff can update content without touching code.

## Stack


- Astro
- Tailwind CSS
- TypeScript
- Sanity CMS
- Cloudflare Pages / GitHub Pages compatible static build

## Design Direction

- Premium academic style
- Deep green, ivory, gold, white, charcoal
- Islamic-inspired but modern
- Parent-focused
- Admission-enquiry focused
- Mobile-first
- Clean and trustworthy
- No generic AI-looking layout

## Media Asset Strategy

### Folder Structure

All media assets are stored under `public/` and served as static files.

```
public/
├── brand/                  # Official brand assets (logos, header, footer)
│   ├── al-falah-header-logo.svg
│   └── ...
├── images/
│   ├── hero/               # Hero section visual (school building photo)
│   ├── posters/            # Poster slider images (admissions, updates, announcements)
│   └── gallery/
│       ├── campus/         # School building, entrance, ground
│       ├── classrooms/     # Classroom photos
│       ├── events/         # School events
│       └── activities/     # Student activities
└── videos/
    ├── hero/               # Hero section video (if applicable)
    ├── gallery/            # Gallery videos
    └── events/             # Event recordings
```

### Naming Conventions

- Use **lowercase**, **descriptive** filenames
- Use hyphens (`-`) as word separators
- No WhatsApp-style filenames (e.g. `IMG_20240115_...jpg`)
- No spaces or special characters

**Example filenames:**

| Asset Type | Path | Example Filename |
|---|---|---|
| Hero building | `public/images/hero/` | `al-falah-school-building.jpg` |
| Poster | `public/images/posters/` | `admissions-open-2026.jpg` |
| Poster | `public/images/posters/` | `school-update.jpg` |
| Campus gallery | `public/images/gallery/campus/` | `building-front.jpg` |
| Campus gallery | `public/images/gallery/campus/` | `school-ground.jpg` |
| Classroom gallery | `public/images/gallery/classrooms/` | `classroom-1.jpg` |
| Events gallery | `public/images/gallery/events/` | `event-1.jpg` |
| Activities gallery | `public/images/gallery/activities/` | `activity-1.jpg` |
| Video | `public/videos/gallery/` | `school-moment-1.mp4` |
| Video | `public/videos/events/` | `annual-day-2026.mp4` |

### Asset Rules

**Hero Image:**
- Place school building photo in `public/images/hero/`
- Recommended naming: `al-falah-school-building.jpg`
- The hero displays this as a card visual, not a full background
- Only use if the photo shows the actual school building
- Do not use stock photos or generic campus images

**Poster Slider:**
- Place poster images in `public/images/posters/`
- Poster slider is **image-only** — no video in the slider
- Use clear, school-themed images with text overlays
- Name files descriptively: `admissions-open-2026.jpg`

**Gallery:**
- Place gallery images in `public/images/gallery/<category>/`
- Only create/use gallery **categories that have real matching photos**:
  - `campus/` — building exterior, entrance, ground
  - `classrooms/` — actual classroom photos
  - `events/` — event photos only
  - `activities/` — activity photos only
- **Do not show Library, Sports, Playground, or Events categories unless real matching photos exist**
- If no real photos exist for a category, omit that category from the gallery entirely
- The gallery renderer will show all available categories dynamically

**Videos:**
- Place videos in `public/videos/<category>/`
- **Compress all videos before deployment** (use HandBrake or similar)
- Preferred format: **MP4 H.264**
- Maximum recommended file size: 10MB per video for web
- **Do not autoplay videos with sound**
- If a video has sound, it must be muted by default
- Videos in the gallery are optional — only add when actual school videos are provided

### What NOT to Upload

- Stock photos or generic images
- WhatsApp-exported images with timestamps in filenames
- Low-resolution or blurry photos
- Images that don't clearly show the school
- Large uncompressed videos
- Videos with auto-play sound
- Images for categories without real matching content

### How Assets Are Referenced

Assets are referenced in code via paths like:
- `/images/hero/al-falah-school-building.jpg`
- `/images/posters/admissions-open-2026.jpg`
- `/images/gallery/campus/building-front.jpg`

The `BASE_URL` from Astro config is prepended automatically.

### When Real Assets Are Provided

1. Client provides images/videos
2. Place files in appropriate folders following the naming convention
3. Update `src/data/school.ts` or CMS with the correct filenames
4. Run `npm run build`

Do not force generic images into categories they don't belong to. If a category has no real photos, leave that folder empty or omit the category from the gallery entirely.

## Important Rules

- Do not make fake claims.
- Do not claim CBSE, transport, hostel, smart classrooms, international curriculum, awards, 100% result, or top-ranked unless clearly marked as placeholder or confirmed.
- Keep website layout/design controlled by code.
- CMS should let staff edit content safely, not freely redesign the website.
- Do not build a fake dashboard.
- Use a real CMS dashboard with Sanity.
- Preserve current visual design unless the task specifically asks for UI changes.
- Run `npm run build` after meaningful changes.
- Fix all build errors before final response.

## CMS-First Development Principle

**EVERY piece of content on this website MUST be structured, typed, and built so that it can be edited and managed through the Sanity CMS dashboard after full integration — WITHOUT touching code, WITHOUT breaking the UI, and WITHOUT refactoring the data layer.**

This is not optional. It is the core engineering constraint of this project.

### What This Means in Practice

**1. Data Structure Rule**
Every data object in `src/data/school.ts` must mirror the exact shape of its future Sanity schema. Fields that will be CMS-editable must have:
- Correct TypeScript types (not `any`)
- Optional fields marked as optional (`?`) with `null` defaults
- Enum/string unions for constrained values (e.g. `priority: "normal" | "important" | "urgent"`)
- No bare strings/numbers that should be CMS fields — everything must be a named, documented property

**2. Rendering Rule**
Component logic must handle **both** CMS data and fallback data without conditional rendering that breaks layout:
- If a CMS field is `null` or undefined → render nothing gracefully (no empty boxes, no "undefined", no broken UI)
- If a CMS field has a value → render it correctly
- Never render placeholder text that looks like real content
- Never show empty containers or broken-looking UI when data is missing

**3. Schema Documentation Rule**
Every component that displays CMS-manageable content must have its Sanity schema documented in this file (CLAUDE.md) BEFORE the code is merged. The schema doc must include:
- Schema name (e.g. `schoolNotice`)
- Every field with type, required/optional, and purpose
- What the renderer controls vs. what CMS controls
- Fetch/filter behavior
- Graceful fallback behavior when CMS is not configured

**4. No Hardcoded Content**
Content that a non-technical staff member should be able to change must NEVER be hardcoded in component files. It must live in:
- `src/data/school.ts` as a typed fallback
- Referenced by the component
- Documented with its CMS schema

**5. Layout is Code, Content is CMS**
- Layout, spacing, colors, typography, animations → controlled by code (Astro/Tailwind)
- Text content, images, dates, file uploads → controlled by CMS (Sanity)
- Never allow CMS fields that control layout (no `bgColor`, `width`, `padding` fields in schemas)
- **CMS manages school content. Code manages layout and decorative design assets.** Decorative UI elements such as background ornaments, subject doodles, and visual accents are not CMS-managed unless they become school-editable media/content.

### Applying This to Every Component

Before building any component or section, ask:
- What content does this display?
- Which of this content should be editable by school staff?
- What does the Sanity schema look like for this content?
- Does my TypeScript type in `school.ts` match the Sanity schema exactly?
- Does the renderer handle missing/null CMS data gracefully?
- Is the fallback data in `school.ts` accurate and safe (no fake claims)?

If any content area doesn't have a documented schema in CLAUDE.md, it is incomplete and must not be merged until it does.

### Graceful Fallback Pattern

All CMS-fetched sections must follow this pattern:

```
Sanity configured (env vars present)?
  → Fetch from Sanity with proper GROQ query
  → Filter by isActive, startDate, endDate
  → Sort by order
  → Cap at limit
  → Render with CMS data

Sanity NOT configured?
  → Fall back to src/data/school.ts
  → Same filtering/sorting logic applied
  → Same renderer used (never a different layout)

No data available at all?
  → Section hides completely (no empty containers, no placeholder boxes)
  → No broken UI, no "undefined" text, no empty containers
```

### Existing CMS Schemas (Documented)

| Schema | Status | Where Documented |
|---|---|---|
| `heroBadge` | Documented | CLAUDE.md › Editable CMS Content |
| `homepagePoster` / `updatePoster` | Documented | CLAUDE.md › Homepage Posters |
| `schoolNotice` (with `pdf`) | Documented | CLAUDE.md › School Notice Board |

### Remaining Schemas to Document (Before Integration)

These must have schema docs added in CLAUDE.md before the feature is built:
- [ ] `schoolSettings` — name, tagline, contact details, logo
- [ ] `academicLevel` — class/grade levels with description
- [ ] `facility` — facilities with icon, title, description
- [ ] `galleryCategory` — category name, cover image, order
- [ ] `galleryImage` — image with alt, caption, category reference
- [ ] `principalMessage` — name, designation, message, photo
- [ ] `facultyMember` — name, designation, department, photo
- [ ] `footerLink` — label, href, section (quick links / parent support)
- [ ] `contactInfo` — phone, email, address, map embed

When building any of these sections, the schema MUST be documented first. Do not build the component without the schema doc.

## Editable CMS Content

> **This list is the source of truth. Every item here must have a documented Sanity schema in CLAUDE.md and a typed fallback in `src/data/school.ts` before the feature is built. See: CMS-First Development Principle.**

The CMS should eventually control ALL of the following:

### Content Sections

- **School settings** — name, tagline, description, SEO fields
- **Logo** — header logo, footer logo
- **Hero section** — headline, subtitle, background image, building visual
- **Hero badge** — flash/animate text, visibility, animation toggle
- **Poster/updates slider** — 2–3 featured posters with image, title, description, CTA
- **School Notice Board** — notices with title, description, date, category, priority, CTA, PDF attachment
- **About section** — heading, paragraphs, link text/href
- **What Parents Can Expect** — 6 items with icon, title, description
- **Academic levels** — 5 levels with name, grades, description
- **Facilities** — 6 items with icon, title, description
- **Principal message** — name, designation, photo, message text
- **Faculty section** — staff list with name, designation, department, photo
- **Admissions CTA** — heading, subtitle, CTA button
- **Contact details** — phone, email, address, map
- **Footer** — description, quick links, parent support links, social links
- **Gallery categories** — category name, cover image, order, active status
- **Gallery photos** — image with alt text, caption, category reference
- **Parent form** — Google Form URL (or future form integration)

### Gallery Requirements

- Multiple images per category
- Cover image per category
- Featured images for homepage
- Full Gallery page
- Filter by category
- Mobile responsive grid
- Optional lightbox if simple and reliable

## CMS Dashboard Requirement

Use Sanity Studio as the real dashboard.

Client should be able to:

- Add/edit admission notice
- Upload gallery photos
- Add more photos under each gallery category
- Reorder images/categories where possible
- Edit contact information
- Edit facilities and academic levels
- Edit principal/management message

Do not create a full drag-and-drop page builder.
Allow safe content editing only.
## Homepage Posters / Updates Slider Requirement

The website should include a dedicated homepage space for continuously transitioning posters, announcements, or update banners.

Purpose:
- Show important school updates visually.
- Highlight admissions, events, notices, annual day, exam schedules, parent meetings, achievements, or fee/admission reminders.
- Allow the client to update these posters from the CMS without technical knowledge.

Frontend requirement:
- Add a dedicated section on the homepage for 2–3 featured posters/updates.
- The section should appear near the top of the homepage, preferably after the hero section or inside the hero/admission area if it fits cleanly.
- Posters should transition automatically in a smooth carousel/slider.
- Include manual controls such as dots or previous/next buttons if clean.
- Must be mobile responsive.
- Must not look like an advertisement banner.
- Must match the premium school design style.
- Use deep green, ivory, gold, white, and charcoal styling.
- Avoid flashy, cheap, or distracting animations.
- Respect accessibility and reduced-motion preferences.

CMS requirement:
The client should be able to manage this section from Sanity CMS.

CMS should allow:
- Add poster/update title
- Add short description
- Upload poster image
- Add CTA label
- Add CTA link
- Set active/inactive status
- Set display order
- Mark poster as featured
- Add optional start date and end date for temporary updates

Suggested CMS type:
- homepagePoster or updatePoster

Fields:
- title: string, required
- description: text
- posterImage: image with alt text, required
- ctaLabel: string
- ctaHref: string
- isActive: boolean
- isFeatured: boolean
- order: number
- startDate: date optional
- endDate: date optional

Rules:
- Show only active posters on the website.
- Prefer showing 2–3 featured posters on the homepage.
- If CMS is not configured, use fallback poster data from src/data/school.ts.
- If no posters are available, the section should hide gracefully.
- Do not break the website if images are missing.
- Do not allow the client to redesign the whole page through this section.
- The client can update content and images only; the layout stays controlled by code.

## School Notice Board Requirement

An official text-based notices section, separate from the image-only poster slider. Used for admissions notices, parent meetings, holidays, exam schedules, fee reminders, document requirements, and general school announcements.

### Purpose

- Provide a structured, text-first announcements board that feels like a real school office notice.
- Display 3–5 active notices in a clean, scannable list of rows or cards.
- Separate visual concern from the poster slider (which handles image-based visuals) — this section handles important text-based notices.
- Allow the client to publish notices from the CMS without touching code or layout.

### Design Direction

- Must match the official banner identity (deep-green, white, brand-red accents).
- White/off-white background, strong green border accents.
- Red used only for: urgent/important priority marker, notice heading highlight, or urgent badge.
- Black/dark green for normal notice text.
- Structured rows/cards — like real notices pinned to a board — not a centered SaaS card.
- No floating icons, no oversized empty containers, no ALL-CAPS marketing copy.
- Mobile layout must be clean and readable — single column, adequate touch targets.

### Frontend Requirements

- Dedicated section titled "School Notice Board" or "Important Notices".
- Shows 3–5 active, in-date notices sorted by `order` ascending.
- Each notice row/card displays:
  - Priority indicator (normal / important / urgent) — visual flag using color
  - Title — bold, readable
  - Short description (1–2 lines)
  - Date of notice
  - Optional CTA button (e.g. "View Details", "Apply Now", "Read More")
- Important/urgent notices may use a red left border or red badge.
- Normal notices use green or charcoal styling.
- If no active notices exist, the entire section hides gracefully (no empty container).
- Responsive: stacks cleanly on mobile, no horizontal scroll.
- Respects `prefers-reduced-motion`.

### CMS Requirement (Sanity — future integration)

Schema name: **`schoolNotice`**

| Field | Type | Notes |
|---|---|---|
| `title` | string, required | Notice headline. |
| `description` | text | Short description or full notice text. |
| `noticeDate` | date | Date the notice was published/is relevant. |
| `category` | string | e.g. "Admission", "Holiday", "Fee", "Exam", "General" |
| `priority` | string | Options: `"normal"` \| `"important"` \| `"urgent"` |
| `ctaLabel` | string | Optional CTA button label. |
| `ctaHref` | string | Optional CTA link (supports `#…`, `https://…`, `tel:`, `mailto:`). |
| `isActive` | boolean | Master visibility switch. |
| `order` | number | Sort key for stable ordering. |
| `startDate` | datetime, optional | Show only on/after this date. |
| `endDate` | datetime, optional | Hide on/after this date. |
| **`pdf`** | **object, optional** | **PDF attachment — max 3 per notice board** |
| `pdf.label` | string | Display name of the PDF (e.g. "Admission Form 2026-27"). Editable by CMS. |
| `pdf.file` | file | The actual PDF file upload. Stored in Sanity Assets. CMS manages this. |
| `pdf.uploadedDate` | date | Upload date shown as "Uploaded: [date]" next to the download button. Editable by CMS. |

### Fetch Behavior

- Website fetches active notices when Sanity is configured (env vars present).
- Filter: `isActive === true` AND (`!startDate || startDate <= now`) AND (`!endDate || now < endDate`), sorted by `order` ascending. Cap at 5 results.
- Fallback to `src/data/school.ts` notices array if Sanity is not configured.
- Hide gracefully when no active notices exist.

### Rules

- **Do not add fake notices.** Only safe placeholder notices are allowed in the fallback data.
- **Do not claim holidays, exam schedules, meetings, or fee deadlines** unless confirmed by the school.
- **Do not allow the client to change layout from CMS** — no width, alignment, or color fields in the schema.
- The renderer controls all spacing, animation, breakpoints, and visual priority indicators.
- The CMS supplies notice content only; structure stays in code.
- `priority: "urgent"` reserved for genuine urgent cases (exam cancellations, emergency closures) — not for routine admissions reminders.
- Notices with `endDate` in the past must not render.
- Section should look official, local, and practical — not a promotional widget.

### PDF Document Management (CMS)

**Max 3 PDFs across all notices** — one per notice row.

**CMS upload flow:**
1. Staff goes to `schoolNotice` in Sanity Studio
2. Opens a notice → expands the `pdf` field
3. Uploads the PDF file via Sanity's file picker → stored in Sanity Assets
4. Sets the `label` (e.g. "Admission Form 2026-27")
5. Sets the `uploadedDate` (defaults to today's date — editable)
6. Saves → PDF download button appears on the website

**PDF file storage:** Sanity Assets (not local `public/documents/` folder). This avoids needing server access or GitHub uploads for file changes.

**Fallback (no CMS):** PDFs are defined in `src/data/school.ts` under each notice's `pdf` field. The path can be a local `public/documents/*.pdf` reference for static deployments.

**Download behavior:**
- `download` attribute on the anchor tag triggers browser save dialog
- `aria-label` on the button says "Download [label name]" for accessibility
- If `pdf.file` is `null` or points to a missing file, the entire PDF row is hidden (graceful fallback — no broken buttons)

**PDF row display (what staff controls vs. what code controls):**

| What staff controls (CMS) | What code controls (renderer) |
|---|---|
| PDF label text | Icon color, font size, row background |
| PDF file upload | File type icon (always FileText) |
| Upload date display text | "Uploaded:" label prefix |
| Whether to show a PDF at all | Border color, hover effect, button color |

## Additional CMS Schema Shapes

The current `src/data/school.ts` fallback now mirrors these future Sanity shapes so section visibility, labels, and media can move into CMS later without another component refactor.

### `heroSection`

- Purpose: Homepage hero copy, CTAs, building visual, and the attention-drawing admissions card.
- Fields:
  - `badge: string`
  - `headline: string`
  - `subtitle: text`
  - `ctaLabel: string`
  - `ctaHref: string`
  - `secondaryCtaLabel: string`
  - `secondaryCtaHref: string`
  - `backgroundImage: image` with `alt`, `isActive`
  - `visualImage: image` with `alt`, `caption`, `isActive`
  - `admissionCard: object`
  - `admissionCard.enabled: boolean`
  - `admissionCard.style: string` (`"pulse"` | `"shine"` | `"both"`)
  - `admissionCard.badge: string`
  - `admissionCard.eyebrow: string`
  - `admissionCard.headline: string`
  - `admissionCard.ctaLabel: string`
  - `admissionCard.ctaHref: string`
- Renderer controls: layout, flashing/pulse treatment, breakpoints, decorative doodles, overlay placement.
- Fallback behavior: hide images when inactive; hide the admission card when disabled or incomplete.

### `aboutSection`

- Purpose: About copy and optional campus image.
- Fields:
  - `enabled: boolean`
  - `eyebrow: string`
  - `titleLead: string`
  - `titleAccent: string`
  - `paragraphs: array<string>`
  - `linkText: string`
  - `linkHref: string`
  - `image: image` with `src`, `alt`, `caption`, `isActive`
  - `imagePlaceholder: string`
  - `placeholderTitle: string`
  - `placeholderDescription: text`
- Renderer controls: split layout, image framing, placeholder styling.
- Fallback behavior: if no active image exists, show the placeholder note only; if disabled, hide the section.

### `parentExpectationSection`

- Purpose: "What Parents Can Expect" cards.
- Fields:
  - `enabled: boolean`
  - `eyebrow: string`
  - `titleLead: string`
  - `titleAccent: string`
  - `subtitle: text`
  - `items: array<object>`
  - `items[].title: string`
  - `items[].description: text`
  - `items[].icon: string`
- Renderer controls: grid, icons, hover treatment.
- Fallback behavior: hide the section when disabled or when `items` is empty.

### `academicLevelSection`

- Purpose: Academic ladder / level cards.
- Fields:
  - `enabled: boolean`
  - `eyebrow: string`
  - `titleLead: string`
  - `titleAccent: string`
  - `subtitle: text`
  - `levels: array<object>`
  - `levels[].level: string`
  - `levels[].ages: string optional`
  - `levels[].grades: string optional`
  - `levels[].description: text`
  - `levels[].icon: string`
- Renderer controls: timeline line, numbering, card motion.
- Fallback behavior: hide when disabled or empty.

### `facilitySection`

- Purpose: Facilities grid.
- Fields:
  - `enabled: boolean`
  - `eyebrow: string`
  - `titleLead: string`
  - `titleAccent: string`
  - `subtitle: text`
  - `items: array<object>`
  - `items[].title: string`
  - `items[].description: text`
  - `items[].icon: string`
- Renderer controls: icon box styling, spacing, hover states.
- Fallback behavior: hide when disabled or empty.

### `galleryCategory` and `galleryMedia`

- Purpose: Homepage gallery categories, cover images, and album media.
- Fields:
  - `gallery.enabled: boolean`
  - `gallery.eyebrow: string`
  - `gallery.titleLead: string`
  - `gallery.titleAccent: string`
  - `gallery.subtitle: text`
  - `gallery.emptyState: string`
  - `categories: array<object>`
  - `categories[].id: string`
  - `categories[].name: string`
  - `categories[].subtitle: string`
  - `categories[].coverImage: image`
  - `categories[].isActive: boolean`
  - `categories[].order: number`
  - `categories[].images: array<object>`
  - `images[].src: image/file URL`
  - `images[].alt: string`
  - `images[].caption: string`
  - `images[].type: string optional` (`"image"` | `"video"`)
- Renderer controls: album card UI, modal, lightbox, focus trap, transitions.
- Fetch/filter behavior: sort by `order`; render only active categories with at least one media item.
- Fallback behavior: hide whole section if disabled; otherwise show the empty-state message when no active categories remain.

### `principalMessage`

- Purpose: Official principal/leadership message section.
- Fields:
  - `enabled: boolean`
  - `eyebrow: string`
  - `title: string`
  - `subtitle: text`
  - `animatedLine: string`
  - `valuesHeading: string`
  - `valuesDescription: text`
  - `body: array<text>`
  - `authorLabel: string`
  - `authorLocation: string`
  - `valueCards: array<object>`
  - `valueCards[].label: string`
  - `valueCards[].icon: string`
  - `image: image optional`
  - `imageAlt: string optional`
- Renderer controls: typewriter effect, visual cards, quote styling, two-column layout.
- Fallback behavior: hide when disabled; render no portrait when image is absent.

### `academicHighlights`

- Purpose: Official academic highlights / performance cards.
- Fields:
  - `enabled: boolean`
  - `eyebrow: string`
  - `title: string`
  - `subtitle: text`
  - `groups: array<object>`
  - `groups[].title: string`
  - `groups[].itemIds: array<string>`
  - `items: array<object>`
  - `items[].id: string`
  - `items[].title: string`
  - `items[].description: text`
  - `items[].icon: string`
  - `items[].highlight: boolean optional`
- Renderer controls: badge treatment, grid, accent bars, hover styling.
- Fallback behavior: hide when disabled or empty.

### `admissionsCta`

- Purpose: Admission enquiry CTA block near the bottom of the page.
- Fields:
  - `enabled: boolean`
  - `pillLabel: string`
  - `heading: string`
  - `subtitle: text`
  - `primaryCta: string`
  - `primaryCtaLink: string`
  - `secondaryCta: string`
  - `secondaryCtaLink: string`
- Renderer controls: background pattern, spacing, button styling.
- Fallback behavior: hide when disabled.

### `parentHelpDesk`

- Purpose: Parent form / enquiry CTA section.
- Fields:
  - `enabled: boolean`
  - `label: string`
  - `heading: string`
  - `description: text`
  - `requestTypesLabel: string`
  - `requestTypes: array<string>`
  - `panel.title: string`
  - `panel.description: text`
  - `panel.ctaLabel: string`
  - `panel.note: text`
  - `panel.urlPlaceholder: string`
  - `url: string`
- Renderer controls: panel layout, disabled state, external-link icon treatment.
- Fallback behavior: render a disabled button when `url` is missing; hide the section when disabled.

### `contactInfo`

- Purpose: Contact/address/map section.
- Fields:
  - `enabled: boolean`
  - `eyebrow: string`
  - `titleLead: string`
  - `titleAccent: string`
  - `subtitle: text`
  - `cardHeading: string`
  - `directionsLabel: string`
  - `addressLabel: string`
  - `phoneLabel: string`
  - `emailLabel: string`
  - `location.coordinates: geopoint`
  - `location.full: string`
  - `contact.phones: array<object>`
  - `contact.phones[].display: string`
  - `contact.phones[].href: string`
  - `contact.email: string`
- Renderer controls: map embed, gradients, icon layout, button style.
- Fallback behavior: hide the section when disabled; omit empty contact rows gracefully.

### `footerSettings`

- Purpose: Footer text, link groups, and social links.
- Fields:
  - `identityLine: string`
  - `description: text`
  - `quickLinksTitle: string`
  - `quickLinks: array<link>`
  - `parentSupportTitle: string`
  - `parentSupportLinks: array<link>`
  - `socialTitle: string`
  - `socialLinks.facebook: string`
  - `socialLinks.instagram: string`
  - `socialLinks.youtube: string`
  - `socialLinks.whatsapp: string`
  - `copyright: string`
- Renderer controls: logo treatment, columns, icon buttons, colors.
- Fallback behavior: hide empty social links individually; keep footer layout stable.
