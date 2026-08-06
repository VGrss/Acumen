---
name: critique-product
description: Evaluate and validate a PM artifact — score for rigor, test riskiest assumptions, and decide if it's ready to ship. Use when reviewing a PRD, spec, increment, strategy, or roadmap.
user-invocable: true
argument-hint: "[artifact]"
---

# Critique Product

## Preparation

Before anything else, invoke `/product-thinking` to load strategic context, user segments, and current product landscape.

Then read ALL context files:
- `.acumen.md` — product strategy and positioning
- `.acumen/competitors.md` — competitive landscape
- `.acumen/personas.md` — user segments and behaviors
- `.acumen/features.md` — current feature catalog
- `./DESIGN.md` — visual identity contract (only when critiquing UI-touching artifacts; if missing, flag it)

A critique without context is just opinion. You need to know what the product is, who it serves, and what it's competing against before you can evaluate whether an artifact is good.

## Mindset

Read this as if you're the engineer who has to build it, the exec who has to fund it, and the designer who has to make it real. Does it survive all three?

The engineer asks: "Can I scope work from this? Are the edge cases covered? Will I have to come back with 40 clarifying questions?"

The exec asks: "Why should I fund this over the other six things competing for the same resources? What's the expected return?"

The designer asks: "Do I know who this is for? Is the problem clear enough that I can design a solution without guessing?"

If any of them would struggle, the artifact needs work.

## Core Reflex

### Step 1: AI Product Slop Test

Run the slop check first. Scan for these 15 tells — each one weakens the document:

1. **"Users want..."** without evidence (who said this? how many? when?)
2. **Missing baselines** (targets without current numbers are wishes)
3. **Vague scope** ("and more," "etc.," "additional features" — scope creep hiding in plain sight)
4. **No prioritization rationale** (why THIS order? why NOW?)
5. **Solutions masquerading as problems** ("users need a dashboard" is a solution; what's the actual problem?)
6. **Missing edge cases** (what happens when it fails? when data is missing? when the user does something unexpected?)
7. **Competitor blindness** (no mention of alternatives users have today)
8. **Metric-free success criteria** ("improve the experience" — how would you know?)
9. **One-size-fits-all personas** ("our users" instead of specific segments with different needs)
10. **No tradeoff acknowledgment** (everything is upside, nothing is cost)
11. **Jargon without definition** (acronyms and internal terms that assume shared context)
12. **Missing timeline or sequencing** (what ships first? what depends on what?)
13. **Unjustified new surface** (a new screen, page, or tab where an existing one would have carried the job — and no line explaining why it couldn't)
14. **Everything on screen** (no cut list, no hidden state, no hierarchy — the artifact never says what it deliberately left out)
15. **Options instead of decisions** (settings, toggles, and "configurable" behavior standing in for a choice the author should have made)

Count the tells. More than 5 is a problem. More than 8 means the artifact needs a rewrite, not a revision.

### Step 2: Score Across 10 Dimensions

Score each dimension 0-4. Be honest. A 4 means genuinely excellent. Most artifacts score 20-31 out of 40.

| # | Dimension | What you're evaluating | 0 | 2 | 4 |
|---|-----------|----------------------|---|---|---|
| 1 | **Problem clarity** | Is the problem specific and evidence-based? | Problem not stated or is a disguised solution | Problem stated but vague or missing evidence | Specific problem with user evidence and quantified impact |
| 2 | **User specificity** | Do you know exactly who this is for? | "Users" with no segmentation | Named segment but generic description | Specific persona with behaviors, context, and needs |
| 3 | **Metric rigor** | Are there baselines, targets, and measurement plans? | No metrics or unmeasurable goals | Metrics named but missing baselines or targets | Full metric tree with baselines, targets, method, and owner |
| 4 | **Scope discipline** | Is in/out clear with reasoning? | No scope boundaries | In-scope listed but no out-of-scope or rationale | Clear in/out with reasoning for each boundary decision |
| 5 | **Strategic coherence** | Does this connect to a larger thesis? | No strategic connection | Mentions strategy but link is hand-wavy | Clear causal chain from strategy to this initiative |
| 6 | **Edge case coverage** | What breaks? | No edge cases considered | Some edge cases but major gaps | Comprehensive edge cases with mitigation or deferral rationale |
| 7 | **Communication quality** | Can all three audiences act on this? | Confusing or audience-unclear | One audience served well, others neglected | Engineer, exec, and designer can each extract what they need |
| 8 | **Slop score** | How many of the 15 AI tells are present? | 8+ tells | 3-7 tells | 0-2 tells |
| 9 | **Context grounding** | References competitors, personas, feedback? | Operating in a vacuum | Some references but shallow | Deeply grounded in competitive reality, persona data, and user signal |
| 10 | **Simplicity** | Is this the smallest thing that solves the problem? | Bloated — new surfaces, stacked features, toggles standing in for decisions | Reasonable but carries parts nobody would miss | Every part earns its place; cheaper alternatives named and rejected with a reason |

Reference [pm-heuristics](reference/pm-heuristics.md) for the full scoring rubric and calibration examples.

### Step 3: Persona-Based Review

Reference [reviewer-personas](reference/reviewer-personas.md) to evaluate the artifact from each reviewer's perspective. Flag where specific audiences would get stuck or push back.

### Step 4: Assumption Validation

After scoring, identify the riskiest assumptions in the artifact — the ones that, if wrong, make everything else irrelevant. For each:

- **State the assumption** as a falsifiable hypothesis ("We believe [persona] will [behavior] because [reason]")
- **Check existing signal** — does feedback, analytics, or prior research already validate or invalidate this? Don't propose a test for something you already know.
- **Match method to assumption type:**
  - **Behavioral** (will they do X?) — observe actions, not words. Analytics, session recordings.
  - **Preference** (do they want X over Y?) — ask with commitment attached. "Would you pay?" has signal.
  - **Technical feasibility** (can we build X?) — prototype or spike, timeboxed.
  - **Market demand** (does anyone care?) — fake door tests, landing pages, waitlists.
- **Define decision criteria** before the test: "If we see X, we proceed. If Y, we pivot. If Z, we kill it."

If all key assumptions already have strong signal, say so — validation is not always needed. If the artifact is based on assumptions with no evidence, flag that as the primary issue.

### Step 5: Subtraction Pass

Scoring finds what's missing. This pass finds what shouldn't be there. Name **the 3 things you'd cut** from the artifact, ranked by how little would be lost — for each, one line on what it costs to keep and what breaks if it goes. If nothing breaks, it should go.

Then ask the two questions the artifact usually skips:

- **Is there a smaller version that gets most of the outcome?** Describe it in one sentence. If it exists and the artifact never considered it, that's a P1.
- **Could this reuse an existing surface instead of adding one?** Check `.acumen/features.md`. A new screen with no justification for why the existing one couldn't carry the job is a P1.

### Step 6: Priority Issues

For each issue found, assign severity and suggest the Acumen command that would fix it:

- **P0** — Blocks shipping. The artifact cannot be acted on until this is resolved.
- **P1** — Significant gap. Will cause rework or misalignment if not addressed.
- **P2** — Weakness. Makes the artifact less effective but doesn't block.
- **P3** — Polish. Would make it better but not urgent.

Available fix commands: `/diagnose`, `/scout`, `/persona`, `/features`, `/brand`, `/narrate`, `/workshop`, `/increment`, `/roadmap`, `/orientation`, `/defensibility`

For UI-touching artifacts: check that referenced design tokens (`{colors.x}`, `button-primary`) actually resolve in `DESIGN.md`. Flag prose styling ("a blue button") as a P2 — it should name a token instead.

## Output Format

Structure your response as:

### Slop Check
Pass or fail, with the specific tells found and quoted evidence from the artifact.

### Context Grounding Assessment
How well does this artifact reference the product's actual competitive landscape, personas, and existing user feedback?

### Score Table

| Dimension | Score (0-4) | Key Finding |
|-----------|:-----------:|-------------|
| Problem clarity | | |
| User specificity | | |
| Metric rigor | | |
| Scope discipline | | |
| Strategic coherence | | |
| Edge case coverage | | |
| Communication quality | | |
| Slop score | | |
| Context grounding | | |
| Simplicity | | |
| **Total** | **/40** | |

### What's Working
Two to three specific strengths. Quote the artifact where it's strong.

### Cut List

The 3 things to remove, and the smaller version worth considering.

| Cut | Cost of keeping it | What breaks if it goes |
|-----|--------------------|------------------------|
| | | |

**Smaller version:** one sentence — or "none; this is already the smallest shape that solves the problem."

### Riskiest Assumptions

For each (up to 3):
- **Assumption**: [falsifiable hypothesis]
- **Existing signal**: [what we already know]
- **Validation method**: [if needed — or "Already validated" / "Low risk"]
- **Decision criteria**: [go/pivot/kill thresholds]

### Priority Issues

For each issue:
- **What**: the specific problem
- **Why it matters**: the consequence if not fixed
- **Fix**: concrete suggestion
- **Command**: which Acumen skill would address this

### Verdict

One of three:
- **Ship it** — minor polish needed, fundamentally sound, assumptions are validated or low-risk
- **Tighten it** — good bones, but gaps that will cause problems downstream. Validate before building.
- **Rethink it** — structural issues that revision won't fix; needs a different approach
