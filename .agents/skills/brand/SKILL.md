---
name: brand
description: Build and maintain DESIGN.md — a structured visual identity contract for coding agents. Use when codifying a design system, after a visual refresh, or before AI-assisted UI work.
user-invocable: true
argument-hint: "[section: colors | typography | components | all]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains product principles and the **Context Gathering Protocol**. Follow the protocol before proceeding — if no product context exists yet, you MUST run /teach-acumen first.

---

Mindset: A brand is a contract with the people you serve, expressed in design decisions. `DESIGN.md` makes that contract legible to coding agents so UI work stays consistent without re-prompting. Tokens give agents exact values; prose tells them *why* those values exist.

`DESIGN.md` follows the [Google DESIGN.md spec](https://github.com/google-labs-code/design.md). It lives at the project root (not in `.acumen/`) and IS checked in — it's a contract, not gitignored context.

## Behavior

**When called with a section argument** (`colors`, `typography`, `components`, `spacing`, `rounded`): Update only that section. Ask the user what changed and why.

**When called without argument or with `all`**: Full scan and refresh. Build from existing styles outward, not from a blank template.

## Research Process

1. Read `.acumen.md` for product context — positioning, audience, brand voice cues
2. Read existing `DESIGN.md` if it exists
3. Scan the codebase for source-of-truth styles:
   - `tailwind.config.{js,ts}` — `theme.extend` colors, fontFamily, spacing, borderRadius
   - `app/globals.css` / `src/styles/*.css` — CSS custom properties (`--color-*`, `--font-*`)
   - Component primitives (Button, Card, Input) — extract token usage patterns
   - Any existing design tokens file (`tokens.json`, `tokens.css`)
4. Read brand prose if available — README, marketing site copy, brand guidelines doc
5. For each token category, capture both the value and the rationale:
   - **Colors** — primary, secondary, tertiary, neutral; what each is *for*, not just what it is
   - **Typography** — heading scale, body, captions; voice the type carries (authority, warmth, precision)
   - **Spacing & rounded** — rhythm and softness; what the system feels like
   - **Components** — map composite tokens (button-primary, button-primary-hover) to primitives via references like `{colors.tertiary}`

If no source-of-truth styles exist, flag it and ask the user — do not invent tokens.

## Output

Write to `./DESIGN.md` (project root):

```markdown
---
name: [Brand or Product Name]
colors:
  primary: "#..."
  secondary: "#..."
  tertiary: "#..."
  neutral: "#..."
typography:
  h1:
    fontFamily: [family]
    fontSize: [rem]
  body-md:
    fontFamily: [family]
    fontSize: 1rem
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

One paragraph capturing the visual posture — what the UI evokes, who it's for, what it deliberately is *not*.

## Colors

For each color: the role it plays, when to use it, when not to. Anchor to the primary user moment it serves.

## Typography

The voice the type carries. What hierarchy decisions do, not just what they look like.

## Layout & Spacing

The rhythm of the system. Why these spacing steps and not others.

## Components

For each component: the interaction it represents and why the token composition reinforces that.

## Do's and Don'ts

Specific traps tied to *this* brand — not generic UI advice.
```

Follow the [canonical section order](https://github.com/google-labs-code/design.md): Overview → Colors → Typography → Layout & Spacing → Elevation → Shapes → Components → Do's and Don'ts.

## Validation

After writing, suggest the user run:

```bash
npx @google/design.md lint DESIGN.md
```

Surface any errors or warnings and offer to fix them. Common issues: broken token refs (`{colors.x}` resolving to nothing), missing `primary`, contrast ratios below WCAG AA.

## Maintenance

When refreshing:
- Reconcile against current `tailwind.config` / CSS variables — flag drift between code and `DESIGN.md`
- Remove orphaned color tokens (defined but never referenced by a component)
- Re-check component contrast pairs after color changes

**NEVER**:
- Invent tokens that don't exist in the codebase — `DESIGN.md` is a description of reality, not a wishlist
- Describe colors without hex values, or fonts without families — prose alone is not a token
- Treat brand as decoration — every token decision should tie back to who the product serves and what it stands for
- Duplicate Acumen context — `DESIGN.md` is visual identity only; voice, positioning, and persona belong in `.acumen.md` and `.acumen/personas.md`
- Add sections outside the canonical order without good reason
