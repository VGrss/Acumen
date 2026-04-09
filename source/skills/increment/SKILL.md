---
name: increment
description: Scope a product increment end-to-end — context, implementation, wireframes, and engineering considerations. Use when a feature or bet needs a shippable increment document before building.
user-invocable: true
argument-hint: "[feature or bet]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

An increment is a commitment to ship a complete user outcome. Not a feature request. Not a brainstorm. Not a backlog item with aspirations. It is the document that says: "This is what we are building, why, for whom, and how we know it worked." If you cannot fill every section with specific, grounded information, the increment is not ready to build.

PMs steer less here. The structure does the steering. Your job is to fill it with truth — observed problems, real users, actual competitive positions, measurable outcomes. If you find yourself writing things that sound good but say nothing, stop and ask a harder question.

## Sizing

Determine the increment size based on scope, not effort. Ask the PM if unclear, but default to your best judgment:

- **Big** — New capability or major expansion. Touches multiple product surfaces. Requires full context, implementation detail, wireframes, and engineering trade-offs. Use the complete template below.
- **Medium** — Meaningful enhancement to an existing capability. Scoped to one product surface. Skip Competitive Insights and Wireframes sections. Compress Product Parts to 2-3 max.
- **Small** — Focused improvement, fix, or refinement. One clear change. Use only: Opportunity, Target Audience, Success Metrics, one Product Part, and Open Questions.

State the size at the top of the document. If the PM requests a size that does not match the scope, push back with reasoning.

## Context Pull

Before writing, load the intelligence you already have:

1. **Product context.** Read `.acumen.md` for strategy, positioning, stage, and constraints.
2. **Personas.** Read `.acumen/personas.md`. Identify the 1-2 personas this increment serves. If none match, flag the gap — you may need to run `/profile` first.
3. **Competitors.** Read `.acumen/competitors.md`. What is the competitive landscape for this capability? Where are we behind, ahead, or deliberately different?
4. **Feature inventory.** Read `.acumen/features.md`. What exists today that this increment touches or extends?

If any context file is missing, note it and proceed with what you have. Do not fabricate context.

---

## Output Template

---

# [Increment Name]

**Size:** Big | Medium | Small
**Date:** [today]
**Status:** Draft

---

# Context

> **Customer Tweet**
> *Write the tweet a happy customer would post after using this feature. 280 characters. If you cannot write a compelling tweet, the value proposition is not clear enough.*

## Opportunity

State the user problem in one paragraph. Not "users need X" — that is the solution wearing a problem costume. Instead: what happens today that is painful, slow, or broken? Why now? What changed that makes this worth prioritizing over everything else we could build?

Ground this in evidence from `.acumen.md` feedback sources. If there is no evidence, say so.

## Target Audience

Name the specific persona(s) from `.acumen/personas.md` this serves. For each:
- What behavior pattern makes them the right audience?
- What is their current workaround?
- Why would they switch to this?

Do not describe demographics. Describe behaviors.

## Customer Insights

What do we actually know about how users experience this problem today?

- **Observed** (from feedback, analytics, interviews): [specific findings]
- **Inferred** (from behavior patterns): [what the data suggests]
- **Unknown** (gaps in understanding): [what we are assuming]

Label confidence levels honestly. "We assume" is more useful than fake certainty.

## Competitive Insights

*(Skip for Medium and Small increments)*

Pull from `.acumen/competitors.md`. For the 2-3 most relevant competitors:

| Competitor | What they do here | Their strength | Their weakness | Our angle |
|------------|------------------|----------------|----------------|-----------|
| | | | | |

One paragraph on the strategic implication: Are we following, leading, or deliberately diverging? What is the parity trap risk?

## Success Metrics

One metric that goes up if we succeed. One that tells us we broke something. Connect each to revenue impact.

| Metric | Type | Baseline | Target | Revenue connection |
|--------|------|----------|--------|--------------------|
| [primary] | Success | [current] | [target] | [how it drives $$$] |
| [guardrail] | Counter | [current] | [do not exceed] | [what breaks if this moves] |

---

# Implementation

## Existing Context

What already exists in the product that this increment touches? Reference specific features from `.acumen/features.md`. What can we reuse? What needs to change? What are we building on top of?

## Pending Questions

Decisions that must be made before building. Each question has an owner and a deadline.

| Question | Owner | Decide by | Impact if delayed |
|----------|-------|-----------|-------------------|
| | | | |

## Parked Questions

Questions that matter but not for this increment. Write them down so they do not get lost, but do not let them block progress.

- [Question] — revisit when [trigger]

## Orientation

Answer these three questions from the user's perspective:

1. **How did I get here?** What is the entry point? How does the user discover this capability? What is the onboarding moment?
2. **What do I do?** What is the primary action? Walk through the core use case step by step. Be precise — "user clicks X" not "user interacts with the feature."
3. **Where will I be next?** What happens after the primary action? Where does the user go? What is the natural next step?

## Product Parts

The functional requirements. Be specific and default-oriented — state what the defaults are, not just what is configurable. Cut 50% of what you initially think belongs here. If it is not essential to the core bet, it goes in a future increment.

For each product part:

### [Part Name]

**What it does:** One sentence.
**Default behavior:** How it works out of the box, before the user configures anything.
**Key interactions:**
- [Specific interaction 1]
- [Specific interaction 2]

**Out of scope for this increment:** [What this part explicitly does NOT do yet]

---

*(Repeat for each part. Big: 3-5 parts. Medium: 2-3 parts. Small: 1 part.)*

## Wireframes

*(Skip for Small increments)*

Generate ASCII wireframes of the key screens. Focus on layout and information hierarchy, not visual design. One wireframe per key state (empty, populated, error).

```
+------------------------------------------+
|  [Screen Name]                           |
|                                          |
|  [Layout elements with labels]           |
|                                          |
+------------------------------------------+
```

Annotate each wireframe: What is the user's eye drawn to first? What is the primary action? What information is shown vs. hidden?

## Engineering

*(Skip for Small increments)*

Not a technical spec — that is engineering's job. But surface the trade-offs and questions that will come up:

- **Architecture considerations:** Does this fit cleanly into current systems or require new patterns?
- **Data implications:** New data models? Migration needed? Privacy considerations?
- **Integration points:** What existing systems does this touch?
- **Known trade-offs:** Speed vs. flexibility? Build vs. buy? Consistency vs. innovation?
- **Technical risks:** What could go wrong that is specific to this feature (not generic "scalability")?

---

## After Writing

1. **AI Slop Test.** Run the increment against the 12 tells from /product-thinking. Every section must contain information specific to this product, this market, this moment.
2. **Standalone test.** If the next increment never ships, does this one still deliver value? If not, rescope.
3. **Tweet test.** Re-read the Customer Tweet. Does it still hold after writing the full document? If the tweet changed, update the Opportunity section to match.
4. **Update `.acumen/features.md`** with any new or modified feature entries. Update the `_Last updated_` line to today's date.
