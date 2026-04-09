---
name: scout
description: Build and maintain a living competitor map. Supports both quick scans and deep competitive analysis. Use when entering a new market, a competitor launches something, before scoping a feature, or for strategic positioning decisions.
user-invocable: true
argument-hint: "[competitor or market area]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains product principles and the **Context Gathering Protocol**. Follow the protocol before proceeding — if no product context exists yet, you MUST run /teach-acumen first.

---

Mindset: Competitors are everyone hired for the same job — not just companies with similar feature lists. A spreadsheet is a competitor. Doing nothing is a competitor. The intern who does it manually is a competitor.

Competition is about who else gets hired for the job, not who has more checkmarks on a feature matrix. Users don't compare products in a vacuum — they compare the pain of switching against the pain of staying.

## Behavior

**When called with a specific competitor or market area**: Research and add/update that entry in the map. Ask the user what they know, what prompted the scout, and what they're worried about.

**When called without argument**: Review the full map for staleness and gaps. Flag competitors that haven't been updated recently. Identify missing entrants.

**When called with "deep [competitor]" or for strategic decisions**: Switch to deep analysis mode (see below).

## Research Process (Standard Mode)

1. Read `.acumen.md` for product context — users, job to be done, strategy, deliberate exclusions
2. Read `.acumen/competitors.md` for existing map
3. For each competitor (new or updated), gather:
   - Their website URL
   - Their category: **Direct** (same job, same approach), **Indirect** (same job, different approach), or **Adjacent** (different job, overlapping users)
   - What job they're hired for (may overlap partially with yours)
   - How they position themselves
   - Their actual strengths (not what they claim — what users would say)
   - Their real weaknesses (not surface-level — structural ones)
   - Their moat (network effects, data, switching costs, brand, distribution)
   - Recent moves (launches, pivots, pricing changes, acquisitions)
4. Assess feature parity traps — features competitors have that you might reflexively copy but shouldn't

## Deep Analysis Mode

When the user needs strategic depth — evaluating a specific competitor, entering a new market, or making positioning decisions — go deeper:

### 1. Define the Job
What progress is the user trying to make, in what context?

### 2. Map Everyone Hired for It
Direct competitors, indirect competitors, substitutes, and the status quo. The status quo — doing nothing — is the most common competitor and the hardest to beat.

### 3. Segment Users by Behavior
Different segments hire different solutions. Don't treat the market as monolithic.

| Segment | Context | Current solution | Switching trigger |
|---------|---------|-----------------|-------------------|
| | | | |

### 4. Moat Evaluation
For each relevant competitor:
- **Network effects** — does the product get better as more people use it?
- **Switching costs** — what would a user lose by leaving?
- **Data advantages** — does usage create proprietary data?
- **Scale economics** — does unit cost decrease meaningfully with growth?

### 5. Feature Parity Analysis
For every feature they have that you don't:
- Does their user segment actually overlap with ours?
- Is this a must-have for the job, or a nice-to-have for their positioning?
- Would building this dilute our focus?
- What would we stop doing to build this?

The features you deliberately skip are as strategic as the ones you build.

### 6. Positioning Sharpening
- We're the [X] that [Y] for [Z]
- If your positioning statement could apply to a competitor, it's not positioning — it's a category description
- Good positioning makes a clear tradeoff

### 7. Where We Win / Where We Lose
Specific scenarios, not generalizations. "We win when teams need X under constraint Y; we lose when users prioritize Z."

### Deep Analysis Output

In addition to updating `.acumen/competitors.md`, output:

1. **The job** — what progress users are hiring a solution to make
2. **User segments** — who hires differently, and why
3. **Who else gets hired** — direct, indirect, substitutes, status quo
4. **Where we win / where we lose** — specific scenarios
5. **Moats** — what we have, what we're building, what we lack
6. **Positioning statement** — we're the [X] that [Y] for [Z]
7. **Feature parity traps** — what NOT to copy and the strategic reasoning

## Standard Output

Write to `.acumen/competitors.md`:

```markdown
# Competitor Map

_Last updated: [date]_

## The Job
[One sentence: the job users hire this category of product to do]

## Direct Competitors
[Same job, same approach]

### [Competitor Name]
- **Website**: [URL]
- **Position**: [How they frame themselves]
- **Strengths**: [What they're genuinely good at]
- **Weaknesses**: [Structural, not cosmetic]
- **Moat**: [What makes them hard to displace]
- **Recent moves**: [Last 6 months]
- **Feature parity trap**: [Features they have that we should NOT blindly copy, and why]

## Indirect Competitors
[Same job, different approach — includes DIY alternatives, manual processes, spreadsheets]

### [Competitor Name]
- **Website**: [URL if applicable]
- **Position**: [How they frame themselves]
- **Strengths**: [What they're genuinely good at]
- **Weaknesses**: [Structural, not cosmetic]
- **Moat**: [What makes them hard to displace]
- **Recent moves**: [Last 6 months]

## Adjacent Competitors
[Different job, overlapping users — could expand into your space]

### [Competitor Name]
- **Website**: [URL]
- **Position**: [How they frame themselves]
- **Why they matter**: [How they could become direct competitors]
```

## Maintenance

Each entry should carry a last-updated date. When refreshing the full map:
- Flag entries older than 3 months as potentially stale
- Ask the user if any competitors have made notable moves
- Check if new entrants should be added

**NEVER**:
- List competitors you can't say something specific about — no padding
- Confuse "they have a feature we don't" with "they're winning"
- Write generic strengths like "good UX" — be specific or don't list it
- Ignore non-obvious competitors (habits, workarounds, manual processes)
- Present the map as static — it's a living document, always in progress

## Reference

Consult [competitive-intelligence](../product-thinking/reference/competitive-intelligence.md) for deeper frameworks on competitive mapping, positioning canvases, and strategic response patterns.
