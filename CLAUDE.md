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

## Editable CMS Content

The CMS should eventually control:

- School settings
- Logo
- Hero content
- Admission notice
- Academic levels
- Facilities
- Gallery categories
- Multiple photos inside each gallery category
- Principal/management message
- Contact details
- Footer links

## Gallery Requirement

The gallery must support:

- Categories like Our Campus, Library, Playground, Events, Activities, Classrooms
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