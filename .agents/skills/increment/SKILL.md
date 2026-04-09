---
name: increment
description: Scope a product increment end-to-end — context, spec, implementation, wireframes, and engineering considerations. Use when a feature or bet needs a shippable document before building. Leads to /critique-product.
user-invocable: true
argument-hint: "[feature or bet]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

An increment is a commitment to ship a complete user outcome. Not a feature request. Not a brainstorm. Not a backlog item with aspirations. It is the document that says: "This is what we are building, why, for whom, and how we know it worked." If you cannot fill every section with specific, grounded information, the increment is not ready to build.

A spec is a thinking tool, not a documentation exercise. The competitive context should shape the scope. The persona reactions should challenge the solution. The user signal should validate the problem. If these inputs don't change what you write, you are not using them.

Scope by outcome, not by time. "What can we build in two weeks?" produces mediocre features. "What is the minimum that changes user behavior?" produces focused ones. Cut features, not corners.

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
6. **User signal.** Check configured feedback sources for evidence that this problem exists and matters. How many users mentioned it? What exact words did they use? What workarounds do they have? If there is no signal, flag it.

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
One to two sentences. What we believe, what we are building, and what changes if we are right. This is the increment's thesis. Everything below either supports it or challenges it.

> **Customer Tweet**
> *Write the tweet a happy customer would post after using this feature. 280 characters. If you cannot write a compelling tweet, the value proposition is not clear enough.*

## Opportunity

State the user problem in one paragraph. Not "users need X" — that is the solution wearing a problem costume. Instead: what happens today that is painful, slow, or broken? Why now? What changed that makes this worth prioritizing?

Ground this in evidence from feedback sources. If there is no evidence, say so.

## Target Audience

Name the specific persona(s) from `.acumen/personas.md`. For each:
- What behavior pattern makes them the right audience?
- What is their current workaround?
- Why would they switch to this?
- Would they notice this? Would they care? Would it change their behavior?

Do not describe demographics. Describe behaviors.

## Customer Insights

What do we actually know about how users experience this problem today?

- **Observed** (from feedback, analytics, interviews): [specific findings]
- **Inferred** (from behavior patterns): [what the data suggests]
- **Unknown** (gaps in understanding): [what we are assuming]

Label confidence levels honestly. "We assume" is more useful than fake certainty.

## Competitive Context

*(Skip for Small increments)*

Pull from `.acumen/competitors.md`. What competitors do here. Where we have an advantage, where we are behind, and where the parity trap is. One paragraph, not a feature matrix.

For the 2-3 most relevant competitors:

| Competitor | What they do here | Their strength | Their weakness | Our angle |
|------------|------------------|----------------|----------------|-----------|
| | | | | |

One paragraph on the strategic implication: Are we following, leading, or deliberately diverging?

## Success Metrics

One metric that goes up if we succeed. One that tells us we broke something. Connect each to revenue impact.

| Metric | Type | Baseline | Target | Revenue connection |
|--------|------|----------|--------|--------------------|
| [primary] | Success | [current] | [target] | [how it drives $$$] |
| [guardrail] | Counter | [current] | [do not exceed] | [what breaks if this moves] |

## Scope

| Tier | What | Why |
|------|------|-----|
| **Minimum** | The smallest version that tests the bet | Ships the core value, nothing else |
| **Recommended** | Minimum + quality-of-life additions | What you would actually want to ship |
| **Ambitious** | Recommended + stretch items | Only if execution is ahead of plan |
| **Cut** | What you are explicitly not building | And why — this is the most important row |

The Cut row is mandatory. If nothing is cut, the scope is not real.

---

# Implementation

## Existing Context

What already exists in the product that this increment touches? Reference specific features from `.acumen/features.md`. What can we reuse? What needs to change?

## Pending Questions

Decisions that must be made before building. Each question has an owner and a deadline.

| Question | Owner | Decide by | Impact if delayed |
|----------|-------|-----------|-------------------|
| | | | |

## Parked Questions

Questions that matter but not for this increment.

- [Question] — revisit when [trigger]

## Orientation

Answer from the user's perspective:

1. **How did I get here?** Entry point, discovery, onboarding moment.
2. **What do I do?** Primary action, step by step. "User clicks X" not "user interacts with the feature."
3. **Where will I be next?** What happens after. The natural next step.

## Product Parts

The functional requirements. Be specific and default-oriented. Cut 50% of what you initially think belongs here.

For each product part:

### [Part Name]

**What it does:** One sentence.
**Default behavior:** How it works out of the box.
**Key interactions:**
- [Specific interaction 1]
- [Specific interaction 2]

**Out of scope for this increment:** [What this part explicitly does NOT do yet]

---

*(Repeat for each part. Big: 3-5 parts. Medium: 2-3 parts. Small: 1 part.)*

## Wireframes

*(Skip for Small increments)*

Generate ASCII wireframes of the key screens. Focus on layout and information hierarchy.

```
+------------------------------------------+
|  [Screen Name]                           |
|                                          |
|  [Layout elements with labels]           |
|                                          |
+------------------------------------------+
```

Annotate each wireframe: What is the user's eye drawn to first? Primary action? Shown vs. hidden?

## Engineering

*(Skip for Small increments)*

Not a technical spec — surface the trade-offs:

- **Architecture considerations:** Fits current systems or requires new patterns?
- **Data implications:** New models? Migration? Privacy?
- **Integration points:** What existing systems does this touch?
- **Known trade-offs:** Speed vs. flexibility? Build vs. buy?
- **Technical risks:** What could go wrong specific to this feature?

## Edge Cases

Specific scenarios that will break this feature or confuse users. Not generic ("what if the network is slow") — specific ones tied to this feature's logic, data model, or persona workflow.

---

## After Writing

1. **AI Slop Test.** Run against the 12 tells from /product-thinking. Every section must contain information specific to this product, this market, this moment.
2. **Standalone test.** If the next increment never ships, does this one still deliver value? If not, rescope.
3. **Tweet test.** Re-read the Customer Tweet. Does it still hold?
4. **Update `.acumen/features.md`** with any new or modified feature entries.
5. **Run `/critique-product`** on this increment to score it before sharing with the team.
