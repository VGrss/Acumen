---
name: scout
description: Build and maintain a living competitor map. Use when entering a new market, a competitor launches something, or before scoping a feature.
user-invocable: true
argument-hint: "[competitor or market area]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains product principles and the **Context Gathering Protocol**. Follow the protocol before proceeding — if no product context exists yet, you MUST run /teach-acumen first.

---

Mindset: Competitors are everyone hired for the same job — not just companies with similar feature lists. A spreadsheet is a competitor. Doing nothing is a competitor. The intern who does it manually is a competitor.

## Behavior

**When called with a specific competitor or market area**: Research and add/update that entry in the map. Ask the user what they know, what prompted the scout, and what they're worried about.

**When called without argument**: Review the full map for staleness and gaps. Flag competitors that haven't been updated recently. Identify missing entrants.

## Research Process

1. Read `.acumen.md` for product context — users, job to be done, strategy, deliberate exclusions
2. Read `.acumen/competitors.md` for existing map
3. For each competitor (new or updated), gather:
   - What job they're hired for (may overlap partially with yours)
   - How they position themselves
   - Their actual strengths (not what they claim — what users would say)
   - Their real weaknesses (not surface-level — structural ones)
   - Their moat (network effects, data, switching costs, brand, distribution)
   - Recent moves (launches, pivots, pricing changes, acquisitions)
4. Assess feature parity traps — features competitors have that you might reflexively copy but shouldn't

## Output

Write to `.acumen/competitors.md`:

```markdown
# Competitor Map

_Last updated: [date]_

## The Job
[One sentence: the job users hire this category of product to do]

## Competitors

### [Competitor Name]
- **Type**: Direct / Indirect / Adjacent / DIY alternative
- **Position**: [How they frame themselves]
- **Strengths**: [What they're genuinely good at]
- **Weaknesses**: [Structural, not cosmetic]
- **Moat**: [What makes them hard to displace]
- **Recent moves**: [Last 6 months]
- **Feature parity trap**: [Features they have that we should NOT blindly copy, and why]

### [Next competitor...]

## Our Position
[How we're different — not better, different. What job do we do that they don't?]

## Gaps & Opportunities
[Underserved jobs, weak spots across the landscape, areas where no one is good enough]
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
