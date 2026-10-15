# Current architecture

## Runtime

- React 19, TypeScript, Vite, Tailwind CSS 4, and Framer Motion.
- Single-page application without routing or backend in this repository.
- `src/main.tsx` mounts `App`; `src/App.tsx` composes all visitor-facing sections.

## UI map

| Section | Main component | Content source |
| --- | --- | --- |
| Navigation and theme | `components/layout/PillNav.tsx` | Local theme configuration |
| Hero, experience, formation, languages | `components/ui/Hero.tsx` | Local arrays in component |
| Profile and positioning | `components/ui/SplitProfileCard.tsx` | Local component copy; profile image in `public/` |
| Journey | `components/ui/JourneyTimeline.tsx` | Local milestone array |
| Stack | `components/ui/LogoLoop.tsx` | Local logo array and `assets/techicons/` |
| Projects | `components/ui/ProjectShowcase.tsx` | `data/projects/` |
| Certifications | `components/ui/CertificatesCarousel.tsx` | Local certificate array and `assets/certificados/` |
| Contact | `components/ui/ContactMe.tsx` | Local component copy |

## Content model

Projects use `Project` in `src/data/projects/types.ts`: overview, highlights, and links. This is the canonical structured project content today. `case` exists as a future link slot but there are no routed project pages.

All other professional content is still local to its component. Move it into structured data only when a change needs reuse or risks drifting across sections; do not centralize merely for its own sake.

## Visual and motion system

The intended language is editorial CV: warm paper, black ink, orange accent, fine rules, high-contrast condensed hierarchy, wire globe, and restrained geometric decoration. Theme variations are available through CSS variables.

Motion is limited to orienting a visitor, revealing section hierarchy, indicating interaction, and changing state. Prefer `transform` and `opacity`, pause nonessential loops for reduced motion, and do not use scroll effects that create layout shift.

## Known boundaries

- No CI, tests, hosting configuration, sitemap, robots file, or project-local governance existed before this foundation.
- Deployment provider is Vercel; the repository must not assume a Vercel project ID or secret is public.
- Project thumbnails may load from GitHub-hosted URLs. Treat them as external availability dependencies.

