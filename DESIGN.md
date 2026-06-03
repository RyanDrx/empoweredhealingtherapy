# Design System — Empowered Healing Counseling

Brand register. The site IS the product; design is the introduction.

## Aesthetic register

Editorial-literary, not SaaS. Think small-press healing book interior, not therapy-clinic-portal. Generous space, characterful serif, warm but unpolished surface. Reads like Meaghan wrote it herself — which she did.

## Color (OKLCH)

Strategy: **Committed.** One earthy primary carries identity, paired with a deep moss accent used sparingly and a warm cream surface throughout. No #fff, no #000.

```
--ink:        oklch(22% 0.025 55)    /* primary text, deep walnut */
--ink-muted:  oklch(45% 0.022 55)    /* secondary text */
--ink-faint:  oklch(60% 0.018 60)    /* meta, captions */

--paper:      oklch(96.5% 0.015 75)  /* main background, warm cream */
--paper-2:    oklch(93% 0.018 70)    /* recessed surface */
--paper-3:    oklch(98% 0.012 80)    /* raised card surface */
--line:       oklch(82% 0.02 60)     /* hairline divider */

--clay:       oklch(56% 0.135 38)    /* primary, sienna-clay */
--clay-deep:  oklch(42% 0.13 35)     /* hover / pressed */
--clay-soft:  oklch(88% 0.04 32)     /* clay tint surface */
--clay-ink:   oklch(28% 0.07 35)     /* clay on dark surfaces */

--moss:       oklch(40% 0.075 148)   /* secondary accent, deep moss */
--moss-soft:  oklch(89% 0.025 145)   /* moss tint surface */

--blush:      oklch(91% 0.035 25)    /* warm tint surface */
```

Use clay as primary action color. Moss only for affirmations, quotes, and one anchor per page. Ink-on-paper is the default; clay on paper is a deliberate choice.

## Typography

**Display:** Fraunces (variable, optical-sized). Soft 9-grade, italic available. Use weights 500–700 for headings, italic for pull-quotes. Optical size scales with point size.

**Body:** Outfit (variable). Use 350–500 for body, 600 for emphasis. Tracking slightly tight at display sizes, neutral at body.

```
--font-display: 'Fraunces', 'Roboto Serif', Georgia, serif;
--font-body:    'Outfit', 'Lato', system-ui, sans-serif;
```

**Scale (fluid):**
- `--step-0` 1rem (16–17px body)
- `--step-1` 1.15rem (lead paragraph)
- `--step-2` 1.45rem (subhead)
- `--step-3` 1.85rem
- `--step-4` 2.4rem (h2)
- `--step-5` 3.2rem (h1 standard)
- `--step-6` 4.2rem (h1 hero)

Hierarchy through scale + weight contrast (≥1.25 ratio). Headline tracking `-0.02em`. Body line-height 1.6. Max body line length 68ch.

## Layout

- Container max-widths: `--w-prose 38rem`, `--w-narrow 56rem`, `--w-wide 76rem`, `--w-page 86rem`
- Section rhythm: not uniform. Alternate `--gap-section-sm 3.5rem`, `--gap-section 6rem`, `--gap-section-lg 9rem` based on content density.
- Grid > flex math. CSS Grid with fractional units for editorial asymmetry (e.g. `7fr 5fr`, `3fr 4fr 2fr`).
- Cards ONLY when elevation is functional. Most "sections" should be hairline divider + breathing room, not boxed.
- No nested cards. No 3-card or 4-card same-sized icon-and-text grids.

## Heroes

Move away from "centered title + subtitle + 2 buttons + image on right." Each page gets a layout chosen for its content:

- **Home:** Editorial split — oversized serif headline left, single portrait image right, eyebrow above headline, supporting copy below. No floating buttons in the hero.
- **About:** Portrait-led with title overlay. Caption below.
- **Service pages:** Headline with rule, short purpose statement, optional supporting image below — not beside.
- **Rates / Resources:** Title-led, no hero image needed.
- **Contact:** Form-led, hero copy reduced to a single line.

## Motion

Subtle. Reduce, don't multiply. Allowed:

- `transform` and `opacity` only
- ease-out-expo / ease-out-quart (`cubic-bezier(0.16, 1, 0.3, 1)`)
- One staggered fade-in per page, not per section

Banned:

- 3D perspective button rotates
- Rotating radial glows on CTAs
- Bouncing pulse dots as "active" status
- Sticky scroll image grandstanding except where it adds reading rhythm
- Scroll-triggered animations beyond a single fade

Honor `prefers-reduced-motion`.

## Components

- **Button.** Smaller radius (0.5rem), confident weight, single solid fill, hairline secondary variant, no drop shadow.
- **Logo.** Existing logomark stays. Lock height to 3.25rem mobile / 3.75rem desktop.
- **Header.** Sticky-not-fixed on desktop, paper background with a low-opacity hairline. Mobile keeps full-screen drawer.
- **Footer.** Tighten the `40vh` empty space. Three columns desktop (brand + contact, navigation, secondary), single column mobile. No top-radius.
- **Quote.** Drop the underline rules. Display in Fraunces italic at step-3, attribution small caps in Outfit.
- **CTA panel.** One per page, never two stacked. Flat moss-tinted strip with clay button. No background images, no animated glows.
- **Feature card.** Replace 6-up grid on home with 4 strong editorial items, then secondary list. Single image, full-bleed crop, label below, no overlay gradient.
- **InfoCard.** Replace with hairline-rule + icon-in-margin layout for legal/policy text. No raised surfaces.

## Forms

- Label above input, helper below, error below.
- Inputs 1px ink-faint border, focus = 2px clay outline + 2px offset.
- No placeholder "John Doe." Use realistic names.
- DOB is not collected before consent — move to intake paperwork. Replace with optional "What brings you in" field.

## Accessibility

- All interactive elements: 44px minimum target, focus-visible with offset.
- Color contrast: ink-on-paper ≥ 12:1, clay-on-paper ≥ 4.6:1 for action color, moss-on-paper ≥ 6:1.
- Respect reduced motion across all motion rules above.
- Skip link visible on focus.
