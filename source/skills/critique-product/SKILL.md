---
name: critique-product
description: Evaluate a PM artifact for rigor, clarity, and slop. Use when reviewing a PRD, spec, strategy, roadmap, or any product document.
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

A critique without context is just opinion. You need to know what the product is, who it serves, and what it's competing against before you can evaluate whether an artifact is good.

## Mindset

Read this as if you're the engineer who has to build it, the exec who has to fund it, and the designer who has to make it real. Does it survive all three?

The engineer asks: "Can I scope work from this? Are the edge cases covered? Will I have to come back with 40 clarifying questions?"

The exec asks: "Why should I fund this over the other six things competing for the same resources? What's the expected return?"

The designer asks: "Do I know who this is for? Is the problem clear enough that I can design a solution without guessing?"

If any of them would struggle, the artifact needs work.

## Core Reflex

### Step 1: AI Product Slop Test

Run the slop check first. Scan for these 12 tells — each one weakens the document:

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

Count the tells. More than 4 is a problem. More than 7 means the artifact needs a rewrite, not a revision.

### Step 2: Score Across 9 Dimensions

Score each dimension 0-4. Be honest. A 4 means genuinely excellent — clear enough to act on, rigorous enough to defend, and better than 90% of what you've seen. Most artifacts score 18-28 out of 36.

| # | Dimension | What you're evaluating | 0 | 2 | 4 |
|---|-----------|----------------------|---|---|---|
| 1 | **Problem clarity** | Is the problem specific and evidence-based? | Problem not stated or is a disguised solution | Problem stated but vague or missing evidence | Specific problem with user evidence and quantified impact |
| 2 | **User specificity** | Do you know exactly who this is for? | "Users" with no segmentation | Named segment but generic description | Specific persona with behaviors, context, and needs |
| 3 | **Metric rigor** | Are there baselines, targets, and measurement plans? | No metrics or unmeasurable goals | Metrics named but missing baselines or targets | Full metric tree with baselines, targets, method, and owner |
| 4 | **Scope discipline** | Is in/out clear with reasoning? | No scope boundaries | In-scope listed but no out-of-scope or rationale | Clear in/out with reasoning for each boundary decision |
| 5 | **Strategic coherence** | Does this connect to a larger thesis? | No strategic connection | Mentions strategy but link is hand-wavy | Clear causal chain from strategy to this initiative |
| 6 | **Edge case coverage** | What breaks? | No edge cases considered | Some edge cases but major gaps | Comprehensive edge cases with mitigation or deferral rationale |
| 7 | **Communication quality** | Can all three audiences act on this? | Confusing or audience-unclear | One audience served well, others neglected | Engineer, exec, and designer can each extract what they need |
| 8 | **Slop score** | How many of the 12 AI tells are present? | 7+ tells | 3-6 tells | 0-2 tells |
| 9 | **Context grounding** | References competitors, personas, feedback? | Operating in a vacuum | Some references but shallow | Deeply grounded in competitive reality, persona data, and user signal |

Reference [pm-heuristics](reference/pm-heuristics.md) for the full scoring rubric and calibration examples.

### Step 3: Persona-Based Review

Reference [reviewer-personas](reference/reviewer-personas.md) to evaluate the artifact from each reviewer's perspective. Flag where specific audiences would get stuck or push back.

### Step 4: Priority Issues

For each issue found, assign severity and suggest the Acumen command that would fix it:

- **P0** — Blocks shipping. The artifact cannot be acted on until this is resolved.
- **P1** — Significant gap. Will cause rework or misalignment if not addressed.
- **P2** — Weakness. Makes the artifact less effective but doesn't block.
- **P3** — Polish. Would make it better but not urgent.

Available fix commands: `/diagnose`, `/specify`, `/measure`, `/compete`, `/roadmap`, `/validate`, `/simulate`, `/scout`, `/profile`, `/features`, `/narrate`

## Output Format

Structure your response as:

### Slop Check
Pass or fail, with the specific tells found and quoted evidence from the artifact.

### Context Grounding Assessment
How well does this artifact reference the product's actual competitive landscape, personas, and existing user feedback? Is it operating in reality or in a vacuum?

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
| **Total** | **/36** | |

### What's Working
Two to three specific strengths. Quote the artifact where it's strong.

### Priority Issues

For each issue:
- **What**: the specific problem
- **Why it matters**: the consequence if not fixed
- **Fix**: concrete suggestion
- **Command**: which Acumen skill would address this (`/measure`, `/specify`, etc.)

### Verdict

One of three:
- **Ship it** — minor polish needed, fundamentally sound
- **Tighten it** — good bones, but gaps that will cause problems downstream
- **Rethink it** — structural issues that revision won't fix; needs a different approach
