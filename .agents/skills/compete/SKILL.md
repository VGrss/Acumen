---
name: compete
description: Deep competitive analysis with strategic recommendations. Use when evaluating a specific competitor, entering a new market, or making positioning decisions.
user-invocable: true
argument-hint: "[market or competitor]"
---

# Compete

## Preparation

Before anything else, invoke `/product-thinking` to load strategic context, user segments, and product landscape. Competitive analysis without product context is just a spreadsheet of features.

## Context Pull

Read `.acumen/competitors.md` as your starting point. It contains existing competitive intelligence. After your analysis, UPDATE that file with new findings — this is a living document, not a one-time artifact.

## Mindset

Competition is about who else gets hired for the job, not who has more checkmarks on a feature matrix. The real competitor is often "do nothing" or "use a spreadsheet." Users don't compare products in a vacuum — they compare the pain of switching against the pain of staying. Understand that calculus.

## Core Reflex

Start from the job the user is trying to get done:

1. **Define the job** — what progress is the user trying to make, in what context?
2. **Map everyone hired for it** — direct competitors, indirect competitors, substitutes, and the status quo
3. **Segment users by behavior** — different segments hire different solutions; don't treat the market as monolithic
4. **Sharpen positioning** — we're the X that does Y for Z, specific enough that no competitor can claim the same sentence

## Key Heuristics

### Map the full competitive landscape
- **Direct competitors**: same solution, same job
- **Indirect competitors**: different solution, same job
- **Substitutes**: tools repurposed for the job (spreadsheets, email, manual processes)
- **Status quo**: doing nothing — the most common competitor and the hardest to beat

### Moats are what matter
Features can be copied. Moats can't (easily). Evaluate:
- **Network effects** — does the product get better as more people use it?
- **Switching costs** — what would a user lose by leaving?
- **Data advantages** — does usage create proprietary data that improves the product?
- **Scale economics** — does unit cost decrease meaningfully with growth?

If you don't have a moat thesis, you're competing on execution speed alone. That's a treadmill.

### Feature parity is a trap
Don't copy competitors reflexively. For every feature they have that you don't, ask:
- Does their user segment actually overlap with ours?
- Is this a must-have for the job, or a nice-to-have for their positioning?
- Would building this dilute our focus on what we do better?
- What would we stop doing to build this?

The features you deliberately skip are as strategic as the ones you build.

### Positioning must exclude
If your positioning statement could apply to a competitor, it's not positioning — it's a category description. Good positioning makes a clear tradeoff: we're better at X, which means we're not trying to be Y. If you're for everyone, you're for no one.

### Watch what users do, not what competitors announce
Press releases and feature pages are marketing. User reviews, support forums, and churn reasons are signal. Competitors' weaknesses hide in their users' complaints.

## Reference

Consult [competitive-intelligence](../product-thinking/reference/competitive-intelligence.md) for deeper frameworks on competitive mapping, positioning canvases, and strategic response patterns.

## Output Format

Structure your response as:

1. **The job** — what progress users are hiring a solution to make
2. **User segments** — who hires differently, and why

| Segment | Context | Current solution | Switching trigger |
|---------|---------|-----------------|-------------------|
| | | | |

3. **Who else gets hired** — direct, indirect, substitutes, status quo (with brief rationale for each)
4. **Where we win / where we lose** — specific scenarios, not generalizations ("We win when teams need X under constraint Y; we lose when users prioritize Z")
5. **Moats** — what we have, what we're building, what we lack
6. **Positioning statement** — we're the [X] that [Y] for [Z]
7. **Feature parity traps** — what NOT to copy and the strategic reasoning

## Post-Analysis

After completing the analysis, update `.acumen/competitors.md` with new findings, updated assessments, and any shifts in competitive positioning. Date-stamp new entries.
