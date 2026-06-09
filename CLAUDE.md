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