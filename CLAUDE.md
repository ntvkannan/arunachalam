# R. Arunachalam — One Man Many Creations
## Project Instructions for Claude Code

---

## 1. PROJECT OVERVIEW

This project is a professional responsive landing page for:

**R. Arunachalam — One Man Many Creations**

The website is a recreation of the approved visual design based on the master reference image:

`reference/landing-page-final.png`

The website presents R. Arunachalam and eight different creations/projects.

The website must feel:

- Professional
- Modern
- Premium
- Clean
- Trustworthy
- Human
- Visually engaging
- Smoothly animated
- Responsive across desktop, tablet and mobile

Do not treat this as a generic portfolio template.

The approved reference design is the primary visual direction.

---

# 2. MASTER DESIGN SOURCE OF TRUTH

The master visual reference is:

`reference/landing-page-final.png`

Always use this image as the primary visual reference when implementing or reviewing the website.

The reference controls:

- Overall layout
- Visual hierarchy
- Section relationships
- Color direction
- Image treatment
- Card design
- Spacing direction
- Typography hierarchy
- Header appearance
- Hero composition
- Project card presentation
- Quote/banner section
- Footer composition

Do not redesign the overall page without explicit instruction.

Do not replace the approved design with a generic portfolio layout.

The website should be visually inspired by and closely reproduce the approved reference while improving responsiveness, accessibility, animation and code quality.

---

# 3. TECHNOLOGY

Use only:

- HTML5
- CSS3
- Vanilla JavaScript
- GSAP
- GSAP ScrollTrigger

Do NOT introduce:

- React
- Vue
- Angular
- Svelte
- Next.js
- Tailwind CSS
- Bootstrap
- jQuery
- TypeScript
- unnecessary UI frameworks

GSAP and ScrollTrigger may be loaded through CDN unless the project is later changed to use a local package setup.

Do not add additional animation libraries unless explicitly requested.

---

# 4. DEVELOPMENT APPROACH

The website will be developed section by section.

Do NOT build the entire website at once unless explicitly instructed.

The planned order is:

1. Foundation
2. Header
3. Hero
4. Feature Highlights
5. Eight Creations / Projects
6. Better Tomorrow Quote Banner
7. Footer
8. Responsive refinement
9. Dark mode refinement
10. Animation refinement
11. Accessibility and interaction refinement
12. Final QA

When working on a specific section:

- Modify only the required files.
- Do not unnecessarily change completed sections.
- Do not redesign previously approved sections.
- Do not introduce unrelated improvements.
- Keep existing functionality intact.

---

# 5. PROJECT STRUCTURE

Current structure:

```text
DEMO/
│
├── CLAUDE.md
├── index.html
│
├── reference/
│   └── landing-page-final.png
│
└── assets/
    ├── css/
    ├── images/
    │   ├── hero/
    │   ├── profile/
    │   └── projects/
    │
    └── js/
```

Additional files may be created when necessary, but keep the structure simple and organized.

Prefer separating major CSS/JS responsibilities rather than creating unnecessarily large files.

---

# 6. IMAGE AND CONTENT SEPARATION

This is a critical project rule.

Images must contain ONLY photographic/visual content.

Do NOT place website text inside images when the text can be created with HTML.

Do NOT create project cards as flattened images.

Project card elements such as:

- Project number
- Project heading
- Description
- Arrow
- Button
- Labels
- Links

must be created using HTML and CSS.

The image should only provide the photographic visual.

This allows:

- Responsive typography
- Accessibility
- SEO
- Dark mode
- Animation
- Hover interactions
- Easy content changes

---

# 7. IMAGE ASSETS

Use the supplied image assets from:

`assets/images/`

Current organization:

```text
assets/images/
├── hero/
├── profile/
└── projects/
```

Do not replace existing assets with newly generated assets unless explicitly instructed.

Do not embed text into the images.

Use appropriate `alt` attributes for meaningful images.

Decorative images should use appropriate empty alt attributes where applicable.

---

# 8. FINAL PROJECT CONTENT

The eight project headings below are FINAL and must be preserved exactly unless explicitly changed by the user.

### 01
**FOUNDER & ARCHITECT OF RR NAGAR**

### 02
**FOUNDER & CREATOR BEST CLUB**

### 03
**CREATOR OF TEMPLES**

### 04
**INTEGRATED MARKETING & PRODUCERS' ASSOCIATION**

### 05
**EXECUTION OF 45000 SITES**

### 06
**BARREN HILLOCK INTO HEAVEN**

### 07
**INTERNATIONAL MUDALIAR & PILLAIMAR ASSOCIATION**

### 08
**SOCIAL WORK ACTIVITIES & AWARDS**

Do not rewrite these headings.

Do not modernize their wording.

Do not replace them with invented marketing language.

Do not invent descriptions for these projects unless the user explicitly provides or approves the descriptions.

---

# 9. PROJECT IMAGE MAPPING

Use the following image mapping:

```text
01 → assets/images/projects/project-01-rr-nagar.jpg
02 → assets/images/projects/project-02-best-club.jpg
03 → assets/images/projects/project-03-temples.jpg
04 → assets/images/projects/project-04-marketing.jpg
05 → assets/images/projects/project-05-45000-sites.jpg
06 → assets/images/projects/project-06-barren-hillock.jpg
07 → assets/images/projects/project-07-association.jpg
08 → assets/images/projects/project-08-social-work.jpg
```

Do not change this mapping unless explicitly instructed.

---

# 10. PROFILE ASSETS

Profile assets are located in:

`assets/images/profile/`

Use the supplied profile/portrait assets appropriately for:

- Header identity
- Hero portrait
- Footer identity
- Other approved locations

Do not duplicate or unnecessarily recreate the profile image.

---

# 11. HERO DESIGN

The hero is one of the most important sections.

It should preserve the approved composition:

- Left-side introductory content
- R. Arunachalam heading
- "One Man Many Creations"
- Introductory text
- Video preview
- Watch Birds Eye View CTA
- Large portrait on the right
- Abstract visual background
- Creative quote

The portrait must remain visually dominant.

Do not allow text or UI elements to visually compete excessively with the portrait.

The hero must remain visually balanced at different viewport widths.

---

# 12. HEADER

The header should follow the approved reference:

- Blue visual identity
- Profile/avatar
- R. Arunachalam branding
- One Man Many Creations subtitle
- Navigation
- Active navigation state
- Light/dark mode control

Desktop and mobile navigation must both be supported.

On mobile, use a proper mobile navigation interaction rather than simply shrinking the desktop navigation.

---

# 13. DARK MODE

The website must support:

- Light mode
- Dark mode

Dark mode should be a properly designed theme.

Do not simply invert colors.

Use CSS custom properties/design tokens so the theme can be controlled centrally.

Example architecture:

```css
:root {
    --color-primary: ...;
    --color-background: ...;
    --color-surface: ...;
    --color-text: ...;
    --color-muted: ...;
}

[data-theme="dark"] {
    --color-primary: ...;
    --color-background: ...;
    --color-surface: ...;
    --color-text: ...;
    --color-muted: ...;
}
```

The user's theme preference should persist using `localStorage`.

Respect the user's system preference when no saved preference exists.

---

# 14. RESPONSIVE DESIGN

The website must be fully responsive.

Required target ranges:

- Large desktop
- Desktop
- Tablet
- Mobile

Do not simply scale the desktop layout down.

The layout must intentionally adapt.

Examples:

### Desktop

- Full navigation
- Large hero composition
- Multi-column project grid
- Full footer layout

### Tablet

- Adjusted hero proportions
- Reduced spacing
- Responsive project grid

### Mobile

- Mobile navigation
- Stacked hero
- Portrait repositioning
- Full-width video
- Single-column or appropriate project layout
- Touch-friendly controls
- Proper footer stacking

Avoid horizontal overflow.

Test at common viewport widths.

---

# 15. ANIMATION TECHNOLOGY

Use:

**GSAP + ScrollTrigger**

Animations should feel:

- Professional
- Smooth
- Controlled
- Elegant
- Purposeful

Do NOT make the website feel like a flashy demo.

Avoid excessive:

- bouncing
- spinning
- elastic movement
- rapid transitions
- continuous distracting motion

Animation should support the visual hierarchy.

---

# 16. PAGE LOAD ANIMATION

Use a coordinated page introduction.

Possible sequence:

1. Header branding
2. Navigation
3. Hero eyebrow
4. Main heading
5. Supporting text
6. Video
7. CTA
8. Portrait

Use subtle staggered animation.

Do not delay important content excessively.

---

# 17. SCROLL ANIMATION

Use ScrollTrigger for major sections.

Examples:

- Feature items reveal with stagger
- Project cards reveal as they enter viewport
- Quote/banner text fades upward
- Images can have subtle reveal/scale effects
- Section headings can have subtle entrance animation

Do not animate every single element independently.

---

# 18. PROJECT CARD INTERACTION

Each project card should have a polished hover interaction.

Possible behavior:

- Slight upward movement
- Image subtle zoom
- Arrow movement
- Subtle shadow enhancement
- Color/accent refinement

Keep the interaction fast and professional.

Example:

```text
Card hover
    ↓
translateY(-4px)
image scale(1.03)
arrow translateX(...)
shadow increase
```

Do not over-animate.

---

# 19. ACCESSIBILITY

Use semantic HTML.

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Use proper heading hierarchy.

Use accessible buttons.

Use meaningful link labels.

Images must have appropriate alt text.

Keyboard navigation must work.

Visible focus states must be maintained.

Do not rely only on color to communicate information.

Respect:

```css
@media (prefers-reduced-motion: reduce) {
    /* Reduce or disable non-essential motion */
}
```

When reduced motion is requested, substantially reduce or disable non-essential animations.

---

# 20. PERFORMANCE

Keep the website lightweight.

Avoid unnecessary dependencies.

Use appropriately sized images.

Use:

```html
loading="lazy"
```

for below-the-fold images where appropriate.

Do not lazy-load critical hero imagery if it harms the initial render.

Avoid unnecessary JavaScript.

Prefer CSS for simple visual effects.

Use GSAP only where it provides meaningful animation value.

---

# 21. CSS ARCHITECTURE

Use CSS custom properties for:

- colors
- typography
- spacing
- radius
- shadows
- transitions
- layout values

Avoid hardcoding the same values repeatedly.

Keep CSS readable and logically grouped.

Do not use excessive `!important`.

Avoid deeply nested selectors.

Prefer reusable classes.

---

# 22. JAVASCRIPT ARCHITECTURE

Keep JavaScript modular.

Separate responsibilities where practical:

```text
assets/js/
├── main.js
├── theme.js
├── navigation.js
└── animations.js
```

Do not put all functionality into one large JavaScript file.

Use event listeners rather than inline JavaScript.

Avoid unnecessary global variables.

---

# 23. LINKS AND FUTURE PROJECT WEBSITES

The eight project cards represent separate future websites.

The architecture should therefore allow each card to eventually link to a separate URL.

Do not hard-code fake functionality pretending the destination websites already exist.

Use placeholder links only where necessary and clearly structure them so they can be replaced later.

---

# 24. DESIGN CONSISTENCY

Always maintain:

- Blue primary identity
- White/light surfaces
- Dark navy typography
- Controlled orange/gold accents
- Rounded cards
- Soft shadows
- Clean spacing
- Strong visual hierarchy

The design should feel cohesive from header through footer.

---

# 25. DO NOT INVENT CONTENT

This is a very important rule.

Do not invent:

- Project descriptions
- Personal biography
- Achievements
- Statistics
- Awards
- Organization details
- Social media links
- Contact information
- Quotes
- Project URLs

unless the user has provided or explicitly approved them.

If content is missing, use a clearly marked placeholder only when necessary and tell the user.

---

# 26. DO NOT MODIFY APPROVED CONTENT

Once a section has been approved by the user:

- Do not redesign it without instruction.
- Do not change its content without instruction.
- Do not replace its assets without instruction.
- Do not change its structure unnecessarily.

Future changes should be localized.

---

# 27. WORKING WITH THE USER

The development process is section-by-section.

When the user asks to implement a section:

1. Inspect the existing implementation.
2. Inspect `reference/landing-page-final.png`.
3. Implement only the requested section.
4. Reuse existing design tokens and architecture.
5. Do not break completed sections.
6. Check responsive behavior.
7. Check light and dark themes.
8. Check animations.
9. Report exactly what was changed.
10. Report any issues that still need browser QA.

Do not silently make unrelated changes.

---

# 28. VISUAL QA

After implementing a section, compare it against:

`reference/landing-page-final.png`

Check:

- alignment
- proportions
- spacing
- typography hierarchy
- image cropping
- card sizing
- colors
- responsive behavior
- animation timing

The reference image is the visual target, but implementation should remain responsive rather than being a pixel-locked screenshot recreation.

---

# 29. IMPORTANT DEVELOPMENT RULE

Do not start building the entire website just because the full reference image is available.

Build the website incrementally.

The user will approve sections before moving forward.

Current development sequence:

```text
FOUNDATION
   ↓
HEADER
   ↓
HERO
   ↓
FEATURE HIGHLIGHTS
   ↓
EIGHT CREATIONS
   ↓
BETTER TOMORROW
   ↓
FOOTER
   ↓
RESPONSIVE QA
   ↓
DARK MODE QA
   ↓
ANIMATION QA
   ↓
FINAL QA
```

---

# 30. CURRENT STATUS

At the beginning of development:

- Project folder created
- Assets folder created
- Image assets supplied
- Reference folder created
- Master design reference supplied
- Final eight project headings approved
- Technology stack approved
- Animation approach approved

Do not assume any website section has already been implemented unless it exists in the project files.

The next task will be explicitly provided by the user.

---

# FINAL PRINCIPLE

**The approved reference controls the design.**

**The original website content controls the project information.**

**HTML controls content and structure.**

**CSS controls visual design.**

**JavaScript controls interaction.**

**GSAP controls advanced animation.**

**Images contain imagery only.**

Do not mix these responsibilities unnecessarily.
