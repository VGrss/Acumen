---
name: increment
description: Scope a single product increment end-to-end — context, spec, implementation, wireframes, and engineering considerations. Use when a feature or bet needs a shippable document before building — typically the option chosen out of /workshop's divergence. Leads to /critique-product.
user-invocable: true
argument-hint: "[feature or bet]"
---

## MANDATORY PREPARATION

1. **Invoke /product-thinking** — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.
2. **Diverge first — always.** An increment never scopes a path that hasn't been diverged. If a `/workshop` report already exists for this problem and a path was chosen, read it and proceed. If not, **run `/workshop` now**, produce the report, and converge on a single path *before writing a line of the increment*. The explored options live in the workshop report; the increment scopes only the chosen path and does not re-litigate the alternatives. Scale the divergence to the size — a Small fix gets a quick fork exploration, not a full workshop — but it happens.

---

## Mindset

An increment is a commitment to ship a complete user outcome. Not a feature request. Not a brainstorm. Not a backlog item with aspirations. It is the document that says: "This is what we are building, why, for whom, and how we know it worked." If you cannot fill every section with specific, grounded information, the increment is not ready to build.

This skill scopes **one** path — the shape that won its `/workshop` divergence. The alternatives were explored in the workshop report and deliberately set aside; the increment commits to a single shape and doesn't re-open the fork. If the path isn't chosen yet, you're not ready to scope — go diverge first. Don't scope two increments in parallel.

A spec is a thinking tool, not a documentation exercise. The competitive context should shape the scope. The persona reactions should challenge the solution. The user signal should validate the problem. If these inputs don't change what you write, you are not using them.

Scope by outcome, not by time. "What can we build in two weeks?" produces mediocre features. "What is the minimum that changes user behavior?" produces focused ones. Cut features, not corners.

## Length discipline

A reader should absorb the whole increment in a few minutes. Terseness is a feature, not a compromise.

- **Prefer tables and bullets to prose.** Prose is for the Bet and the Opportunity paragraph only.
- **One idea per line.** If a sentence has a subordinate clause explaining the obvious, cut the clause.
- **Never restate the template's guidance.** The instructions below tell *you* what to write; they are not headings to paraphrase back.
- **No empty sections.** If you have nothing specific to say, delete the section rather than filling it with hedges. A short increment that says only true things beats a complete-looking one padded with "we assume."
- **Hard caps:** Bet = 1 sentence. Opportunity ≤ 1 paragraph. Every other prose block ≤ 3 lines. Tables carry the detail.

## First draft is lean — surface only what needs a decision

The first pass is sharp, not exhaustive. It's lean not because sections are stubbed, but because you write down only what the reader must react to: a trade-off, a flag, a decision. Do the real thinking across *every* section — including Engineering and Edge Cases, push those forward — but surface only the items that carry a fork. For each fork, show the implication visually with the options (Option A vs B, ASCII sketch), so the reader can decide, not just acknowledge. Anything with an obvious answer stays out. A page where every line demands a decision beats a complete draft they wade through.

## Sizing

Determine the increment size based on scope, not effort. Ask the PM if unclear, but default to your best judgment:

- **Big** — New capability or major expansion. Touches multiple product surfaces. Use the complete template below.
- **Medium** — Meaningful enhancement to an existing capability. Skip Competitive Insights and Wireframes. Compress Product Parts to 2-3 max.
- **Small** — Focused improvement, fix, or refinement. Use only: The Bet, Opportunity, Target Audience, Success Metrics, one Product Part, and Open Questions.

State the size at the top. If the PM requests a size that does not match the scope, push back.

## Context Pull

Before writing, load the intelligence you already have:

1. **Product context.** Read `.acumen.md` for strategy, positioning, stage, and constraints.
2. **Personas.** Read `.acumen/personas.md`. Identify the 1-2 personas this increment serves. If none match, flag the gap.
3. **Competitors.** Read `.acumen/competitors.md`. What is the competitive landscape for this capability? Where are we behind, ahead, or deliberately different?
4. **Feature inventory.** Read `.acumen/features.md`. What exists today that this increment touches or extends?
5. **Value chain.** Read `.acumen/value-chain.md`. Where does this increment sit in the persona's workflow? Does it strengthen an existing step, fill a gap, or extend the chain into new territory?
6. **Design contract.** If this increment touches UI, read `./DESIGN.md` (root). Reference its tokens by name in Wireframes and Product Parts (`{colors.primary}`, `button-primary`, `body-md`) instead of inventing values. If `DESIGN.md` does not exist and the increment is UI-heavy, suggest the user run `/brand` first.
7. **User signal.** Check configured feedback sources for evidence that this problem exists and matters. How many users mentioned it? What exact words did they use? What workarounds do they have? If there is no signal, flag it.

If any context file is missing, note it and proceed with what you have. Do not fabricate context.

---

## Output Template

---

# [Increment Name]

**Size:** Big | Medium | Small
**Date:** [today]
**Status:** Draft

---

# Spec

## The Bet
One sentence: what we're building and what changes if we're right. The increment's thesis — everything below supports or challenges it.

> **Customer Tweet**
> *Write the tweet a happy customer would post after using this feature. 280 characters. If you cannot write a compelling tweet, the value proposition is not clear enough.*

## Opportunity

One paragraph: what happens today that is painful, slow, or broken, and why now? Not "users need X" — that is the solution wearing a problem costume.

Then a compact evidence block (one line each, skip a line if you have nothing):
- **Observed** — from feedback/analytics/interviews: [specific finding, with the user's words]
- **Inferred** — from behavior patterns: [what the data suggests]
- **Unknown** — what we are assuming: [the gap]

## Target Audience

Name the specific persona(s) from `.acumen/personas.md`. Behaviors, not demographics. One row each:

| Persona | Behavior that makes them the fit | Current workaround | Why they'd switch |
|---------|----------------------------------|--------------------|-------------------|
| | | | |

## Competitive Context

*(Skip for Small increments)*

From `.acumen/competitors.md`, the 2-3 most relevant competitors:

| Competitor | What they do here | Their strength | Their weakness | Our angle |
|------------|------------------|----------------|----------------|-----------|
| | | | | |

## Success Metric

Exactly one success metric — the single number that goes up if we're right. Resist a second; if two feel essential, you haven't decided what winning means. Add one guardrail to catch what we might break.

| Metric | Type | Baseline | Target | Revenue connection |
|--------|------|----------|--------|--------------------|
| [the one metric] | Success | [current] | [target] | [how it drives $$$] |
| [guardrail] | Counter | [current] | [do not exceed] | [what breaks if this moves] |

## Trade-offs

Don't scope by size. With AI, building more or less costs roughly the same — effort tiers (minimum / recommended / ambitious) no longer decide anything. What decides the shape is the **trade-offs**: for each real fork, the functional and technical tension that makes one option better than another.

For each meaningful decision, lay out the fork and make the call:

| Decision | Option A | Option B | Functional trade-off | Technical trade-off | Call |
|----------|----------|----------|----------------------|---------------------|------|
| | | | [UX / behavior cost of each] | [architecture / data / risk cost of each] | [what we pick + why] |

**Deliberately not building:** [what we're leaving out] — and why (focus and coherence, not effort saved). This line is mandatory; if nothing is cut, the scope isn't real.

---

# Implementation

## Existing Context

Specific features from `.acumen/features.md` this touches — what to reuse, what to change. Bullets.

## Questions

Decisions that block building (with owner + deadline). Park the rest in a line below the table.

| Question | Owner | Decide by | Impact if delayed |
|----------|-------|-----------|-------------------|
| | | | |

*Parked:* [Question] — revisit when [trigger]

## Orientation

From the user's perspective, one line each:

1. **How did I get here?** Entry point.
2. **What do I do?** Primary action ("User clicks X", not "interacts with the feature").
3. **Where will I be next?** The natural next step.

## Product Parts

The functional requirements — each part is a UX decision. Be specific and default-oriented. Cut 50% of what you initially think belongs here.

For each product part, pair the decision with a small ASCII sketch showing what it induces on screen — so the reader *sees* the choice, not just reads it:

### [Part Name]

**What it does:** One sentence.
**Default behavior:** How it works out of the box.

```
+------------------------------------------+
|  [the sketch of what this part induces]  |
|  [the control, state, or layout it adds] |
+------------------------------------------+
```

**Key interactions:** [interaction 1] · [interaction 2]
**Out of scope:** [what this part explicitly does NOT do yet]

---

*(Repeat for each part. Big: 3-5 parts. Medium: 2-3 parts. Small: 1 part.)*

## Wireframes

*(Skip for Small increments)*

Generate ASCII wireframes of the **several key screens** in the flow — enough that a reader can follow the increment end-to-end, not a single hero screen. Focus on layout and information hierarchy.

Structure the wireframes as a clear **BEFORE / AFTER flow**:

- **BEFORE** — the screen(s) as they exist today (or the absence of them), so the gap this increment closes is visible.
- **AFTER** — the screen(s) once the increment ships, walked through in the order the persona encounters them.

For **each screen** (before and after), state the **job to be done** — what the persona is trying to accomplish on that specific screen, in their words. The wireframe shows the layout; the JTBD line explains why the screen exists.

```
BEFORE — [Screen Name]
JTBD: [What the persona is trying to get done here]
+------------------------------------------+
|  [Screen Name]                           |
|                                          |
|  [Layout elements with labels]           |
|                                          |
+------------------------------------------+

AFTER — [Screen Name]  (step 1 of N)
JTBD: [What the persona is trying to get done here]
+------------------------------------------+
|  [Screen Name]                           |
|                                          |
|  [Layout elements with labels]           |
|                                          |
+------------------------------------------+
```

Annotate each wireframe: What is the user's eye drawn to first? Primary action? Shown vs. hidden? Make the transition between screens explicit — what action moves the persona from one screen to the next.

Where surfaces or controls map to existing components, name the `DESIGN.md` token (`button-primary`, `card-elevated`) rather than describing styles in prose. New UI surfaces should compose from existing tokens — flag any net-new token the increment would require.

## Engineering

*(Skip for Small increments)*

Not a technical spec and not a checklist. Do the technical thinking (architecture, data/migration, integration, feature-specific risk), then surface **only the forks that need a decision** — skip anything with an obvious answer.

| Technical decision | Option A | Option B | Implication of each | Recommendation |
|--------------------|----------|----------|---------------------|----------------|
| | | | | |

Where a fork changes what the user sees or does, sketch it (ASCII) so the implication is visual, not just described.

## Edge Cases

Only the scenarios that force a decision — specific ones tied to this feature's logic, data model, or persona workflow, not generic ("network is slow"). For each, state the implication and the handling options, so it reads as something to decide, not a list to acknowledge. If an edge case has one obvious handling, it isn't worth a line.

---

## After Writing

1. **AI Slop Test.** Run against the 12 tells from /product-thinking. Every section must contain information specific to this product, this market, this moment.
2. **Standalone test.** If the next increment never ships, does this one still deliver value? If not, rescope.
3. **Tweet test.** Re-read the Customer Tweet. Does it still hold?
4. **Update `.acumen/features.md`** with any new or modified feature entries.
5. **Run `/critique-product`** on this increment to score it before sharing with the team.
