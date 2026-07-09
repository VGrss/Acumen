---
name: workshop
description: Diverge on a problem or opportunity — generate many genuinely different solution shapes before committing to one. Use after /diagnose surfaces a problem or opportunity, or when you have a problem and want to see the full range of ways to solve it before scoping.
user-invocable: true
argument-hint: "[problem or opportunity]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

A workshop is divergence. Its one job: take a single problem or opportunity and expose the full range of *shapes* a solution could take — so the choice of shape is deliberate, not the first plausible idea.

The two failure modes:

- **First-idea lock-in.** The team names a problem, pictures one solution, and scopes it. The workshop's job is to prove there were nine other shapes worth seeing first.
- **Ten variations of one idea.** Producing "10 options" that all feel like the same product to a user is not divergence — it's padding. If two options would feel identical in the user's hands, they count as one.

This is not brainstorming. Brainstorming produces 40 ideas and zero decisions. A workshop produces genuinely different options *and* a recommended direction. Push back on weak options. Kill duplicates. The output is a clear map of the solution space plus a pointer to where to go next.

## Input

A workshop needs **one** problem or opportunity to diverge on. It comes from:

- **`/diagnose`** — a problem or opportunity it surfaced (the common path). Read the referenced report in `.acumen/reports/`.
- **`.acumen/value-chain.md`** — an opportunity listed against an extension point in the value chain.
- **Directly stated** — the user hands you a problem in the argument.

If the input is vague ("engagement is low"), sharpen it to a one-line problem statement before diverging — a fuzzy problem produces fuzzy options. If you cannot sharpen it from context, run `/diagnose` first and say so.

## Context Pull

Load context as **fuel for divergence**, not to discover the problem (that was `/diagnose`'s job):

1. **Product context.** Read `.acumen.md` — thesis, positioning, stage, constraints. Options that dilute the thesis still belong on the board; flag them, don't hide them.
2. **Personas.** Read `.acumen/personas.md` — whose problem this is, their workarounds, their daily workflow.
3. **Features.** Read `.acumen/features.md` — what exists today that an option could repurpose, extend, or replace.
4. **Value chain.** Read `.acumen/value-chain.md` — where in the workflow the problem sits and which adjacent steps an option could reach into.
5. **Competitors.** Read `.acumen/competitors.md` — how others solve this shape of problem, and where the white space is.

If a context file is missing, note it and diverge from what you have. Do not fabricate context.

## The Divergence Engine

Generate **10 genuinely different solution options** for the one problem. Difference is the whole point — steer with two axes and a set of generators, then prune duplicates.

### Axis 1 — Scope (how big a move)

Span the ladder from smallest to boldest. Aim for coverage across bands, not a cluster in the middle. If you skip a band, say why.

- **Band-aid** — config, copy, default flip
- **Tweak** — repurpose an existing capability
- **Feature** — new capability inside an existing surface
- **Surface** — new view, page, or workflow
- **Platform** — changes the product's shape across personas/features
- **Category** — redefines what the product is

### Axis 2 — Nature (what character it has)

Give each option a distinct character. Don't repeat a Nature without a reason.

UX · automation · AI · integration · content · pricing · ecosystem · service

### Divergence generators

When options start converging, force new shapes with these prompts (borrowed from `/diagnose`'s reframing lenses):

- **Inversion** — what if we did the opposite? Removed the step instead of improving it?
- **Substitution** — what if this were a service instead of a feature? A template? A default? A one-time setup instead of an ongoing tool?
- **Audience shift** — what if this were only for power users? Only for brand-new users? Built for the admin, not the end user?
- **Constraint removal** — unlimited eng time: what's the boldest shape? Zero eng time: what could ship this week? The two extremes are rarely the same option.
- **Steal from adjacent** — how would a product in a completely different category solve this shape of problem? Borrow their move.

### Collapse test

Before finalizing, apply it to every pair: *would these feel like the same product in the user's hands?* If yes, merge them and generate a replacement from an untouched Scope band or Nature. Ten real options beats twelve with two duplicates.

### For each option

- **Shape** — one sentence: what the user would see or do
- **Scope** — band-aid / tweak / feature / surface / platform / category
- **Nature** — pick one
- **Why this shape** — one line: what makes this orientation worth considering
- **ASCII sketch** — materialize the option as a rough drawing so the *shape* is visible, not just described. Sketch the key screen, flow, or interaction. The bolder the option (surface / platform / category), the more the sketch earns its place — prose alone hides what makes it different. Keep it loose: layout and the one distinct element, not pixel fidelity.

```
+------------------------------------------+
|  [What the user sees for this option]    |
|                                          |
|  [The one element that makes it distinct]|
+------------------------------------------+
```

## Converge

Ten options is a map, not a decision. Narrow it:

1. **Rank on a 2x2** — impact on the problem (how much would this actually move it?) vs. thesis fit (how well does it align with where the product is going?). Top-right is where to focus.
2. **Recommend a direction** — one option, or a sequence ("band-aid now to stop the bleeding, surface later to own the workflow"). Say why the shape wins, not just the idea.
3. **Name what you're deliberately ignoring** — the options you're setting aside and why. This stops the same shapes from resurfacing without new evidence.

## Handoff

Point to the next skill explicitly:

- **`/increment`** — scope the chosen option into a shippable spec. This is the default next step.
- **`/roadmap`** — if the recommendation is a sequence of options over time.
- **`/diagnose`** — if you need to baseline the metric the chosen shape should move, so you'll know whether it worked.

## Output Format

### Workshop: [Problem or Opportunity]

**Diverging on:** One-line problem/opportunity statement.
**Source:** `/diagnose` report, value-chain opportunity, or stated directly.

### Options Board

| # | Shape | Scope | Nature | Why this shape |
|---|-------|-------|--------|----------------|
| 1 | | band-aid / tweak / feature / surface / platform / category | UX / automation / AI / integration / content / pricing / ecosystem / service | |

*(10 rows. Coverage across the Scope ladder — note any band deliberately skipped.)*

### Option Sketches

For each option, the ASCII sketch beneath its number and shape:

**Option [#] — [Shape]** · *[Scope] · [Nature]*
```
+------------------------------------------+
|  [What the user sees for this option]    |
|                                          |
|  [The one element that makes it distinct]|
+------------------------------------------+
```

### Convergence (2x2)

Place the options on impact × thesis-fit. Call out the top-right quadrant.

### Recommendation

Which option (or sequence), and why the *shape* wins.

**Next step:** `/increment` on [chosen option], `/roadmap`, or `/diagnose` to baseline the metric.

### Deliberately Ignored

Options considered and set aside, with reasoning. Prevents them resurfacing without new evidence.

---

Save workshop output to `.acumen/reports/workshop-[topic]-[date].md`.

If divergence revealed a new extension point or opportunity not in `.acumen/value-chain.md`, add it there so `/diagnose` and future workshops can pick it up.
