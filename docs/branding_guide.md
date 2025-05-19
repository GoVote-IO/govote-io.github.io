# GoVote-IO Branding Guide

This document outlines the branding guidelines for the GoVote-IO project website. It serves as a reference for maintaining consistent visual identity across all project materials.

## Core Values

The GoVote-IO branding reflects our commitment to:

- **Transparency**: Open and accessible design that reflects our open-source nature
- **Security**: Visual elements that inspire trust and confidence
- **Patriotism**: American colors that represent our commitment to improving democratic processes
- **Accessibility**: High contrast and readable design for all users

## Color Palette

### Primary Colors

Our primary color palette is inspired by the United States flag:

| Color Name | Hex Code | RGB         | Usage                    |
|------------|----------|-------------|--------------------------|
| USA Red    | `#b22234`| `178,34,52` | Accents, buttons, alerts |
| USA Blue   | `#3c3b6e`| `60,59,110` | Primary, backgrounds     |
| USA White  | `#ffffff`| `255,255,255`| Text, backgrounds       |

### Secondary Colors

| Color Name     | Hex Code | RGB          | Usage                      |
|----------------|----------|--------------|----------------------------|
| Light Blue     | `#3a86ff`| `58,134,255` | Secondary elements         |
| Purple         | `#8338ec`| `131,56,236` | Tertiary elements          |
| Dark Navy      | `#0a0a24`| `10,10,36`   | Dark backgrounds           |

### Dark Mode Palette

| Color Name     | Hex Code | RGB          | Usage                      |
|----------------|----------|--------------|----------------------------|
| Dark Red       | `#d13545`| `209,53,69`  | Accents in dark mode       |
| Dark Blue      | `#5c5b8e`| `92,91,142`  | Primary in dark mode       |
| Light Blue     | `#5d9aff`| `93,154,255` | Secondary in dark mode     |
| Light Purple   | `#9b55ff`| `155,85,255` | Tertiary in dark mode      |
| Dark Navy      | `#1c1c42`| `28,28,66`   | Dark backgrounds           |

## Typography

The site uses the default Docusaurus font stack:

- **Primary Font**: System font stack (San Francisco on macOS/iOS, Segoe UI on Windows, etc.)
- **Code Font**: Menlo, Monaco, Consolas, 'Courier New', monospace

### Font Sizes

- Base font size: 16px (1rem)
- Heading scales:
  - H1: 2rem
  - H2: 1.5rem
  - H3: 1.25rem
  - H4: 1rem

## UI Elements

### Buttons

Buttons follow a consistent style across the site:

- Primary buttons (Red):
  - Background: USA Red (`#b22234`)
  - Text: White
  - Hover: Slightly darker red (`#c42b3d`)

- Secondary buttons (Blue):
  - Background: USA Blue (`#3c3b6e`)
  - Text: White
  - Hover: Slightly lighter blue (`#464584`)

- Outline buttons:
  - Border: USA Blue
  - Text: USA Blue
  - Hover: Blue background, white text

### Cards

Cards are used to group related content:

- Background: White (light mode) / Dark Navy (dark mode)
- Border radius: 8px
- Box shadow: Subtle shadow for depth
- Border top: 3px solid USA Red
- Hover effect: Slight lift and enhanced shadow

### Hero Sections

Hero sections feature:

- Background: Gradient from USA Blue to a slightly lighter blue
- Red horizontal bars at top and bottom
- White text with subtle text shadow
- Clear hierarchy between title and subtitle

### Badges/Tags

Badges are used to categorize or highlight information:

- Primary (Red): USA Red background with white text
- Secondary (Blue): USA Blue background with white text
- Border radius: 4px
- Padding: 0.25rem horizontal, 0.75rem vertical

## Usage Guidelines

### Logo Usage

- Maintain clear space around the logo equal to the height of the "G" in "GoVote"
- Never stretch, distort, or change the colors of the logo
- Minimum size: 100px width to maintain legibility

### Photography Style

When selecting images for the site:

- Use high-quality, professional photos
- Prefer images showing diversity and civic engagement
- Images should be optimistic and forward-looking
- Avoid partisan imagery or symbols

### Voice and Tone

All written content should be:

- Clear and concise
- Professional but accessible
- Non-partisan and inclusive
- Focused on facts and transparency

## Accessibility Standards

The GoVote-IO website is committed to WCAG 2.1 AA compliance:

- Text contrast ratio of at least 4.5:1 for normal text
- Text contrast ratio of at least 3:1 for large text
- All interactive elements are keyboard accessible
- All images have meaningful alt text

## Implementation in Code

Our theme variables are defined in `src/css/custom.css`:

```css
:root {
  /* USA Colors - Red, White, and Blue */
  --usa-red: #b22234; /* USA Flag Red */
  --usa-blue: #3c3b6e; /* USA Flag Blue */
  --usa-white: #ffffff; /* White */
  
  /* Primary color is USA Blue */
  --ifm-color-primary: var(--usa-blue);
  /* ... other color variables ... */
}
```

When implementing new components, refer to this document and use the established CSS variables to maintain consistency.