---
name: roadmap
description: Plan a sequence of bets, break into shippable increments, prioritize. Use when building a roadmap, sequencing work, triaging a backlog, or breaking an epic into increments.
user-invocable: true
argument-hint: "[timeframe, initiative, or backlog]"
---

# Roadmap

## Preparation

Before anything else, invoke `/product-thinking` to load strategic context, user segments, and product landscape. A roadmap disconnected from strategy is a feature list with dates.

## Context Pull

Read `.acumen/features.md` for the current product landscape and known gaps. Read `.acumen/competitors.md` for competitive pressure and timing considerations. Read `.acumen/value-chain.md` for the end-to-end workflow per persona — sequence bets by which chain steps to strengthen or extend. Sequence bets against all three — value chain coverage, internal capability gaps, and external market pressure.

## Mindset

A roadmap is a sequence of bets with sequencing logic. Not a Gantt chart. Not a promise. Not a list of features sorted by t-shirt size. Every increment ships a complete user outcome — if the next increment never ships, the previous one still delivered value. No technical-layer slicing. No "phase 1: build the API."

## Core Reflex

1. **Organize by strategic themes** — each theme ties to a user outcome and a business lever
2. **State the bet** — for each theme, what are we betting will be true?
3. **Sequence by what unlocks what** — dependencies and compounding value, not calendar quarters
4. **Break into vertical slices** — each increment delivers end-to-end value a user can experience

## Key Heuristics

### Every increment must be valuable standalone
If the next increment never ships, does the current one still matter? If not, you sliced wrong. This is the single most important test. It forces honest prioritization and protects against half-built systems that deliver nothing.

### Sequence by dependencies, not calendar
"Q2" is not a sequencing rationale. What unlocks what? Which bets generate learning that de-risks later bets? Which capabilities compound? Ship the thing that teaches you the most first.

### "What we're NOT doing" is required
A roadmap without explicit exclusions is a wish list. State what you're choosing not to do and why. This forces the hard tradeoffs and prevents scope creep through ambiguity. If stakeholders can't see what was cut, they'll assume everything fits.

### No technical-layer slicing
"Build API" then "build UI" then "add analytics" is horizontal slicing. It delivers zero user value until everything is assembled. Instead: "User can do X end-to-end (simple case)" then "User can do X with edge cases" then "User can do X at scale." Each slice is thin but complete.

### Cost of delay is the hidden priority
When two items seem equal, ask: what's the cost of shipping this one month later? Some things compound (platform capabilities), some decay (competitive responses), some are flat (nice-to-haves). Compound and decay items sequence first.

## Triage Mode

When triaging a backlog rather than building a roadmap, switch to a different reflex:

- **Urgent or important?** Urgent feels loud but decays. Important compounds quietly.
- **Symptom or root cause?** Fixing symptoms creates recurring work. Fix root causes even if they take longer.
- **Cost of delay?** What happens if this waits a month? Six months? If the answer is "nothing," it's not urgent.
- **Compounding value?** Does solving this make future work easier or faster?

## Output Format

### Roadmap Mode

1. **Themes** — strategic theme name, the bet, how it connects to north star

For each theme:

| Increment | Outcome | Standalone? | Unlocks | Success signal |
|-----------|---------|-------------|---------|---------------|
| | | Yes/No | | |

2. **Competitive pressure** — which themes respond to external forces and the timing logic
3. **Dependencies** — what blocks what, critical path identification
4. **Exclusions** — what we're NOT doing and why
5. **Cut candidates** — items on the bubble with the reasoning for potential removal

### Triage Mode

Categorize items into:

| Category | Items | Rationale |
|----------|-------|-----------|
| **Do now** | | High cost of delay or compounds |
| **Do next** | | Important but not time-sensitive |
| **Reject** | | Low value, symptom-level, or misaligned |
| **Investigate** | | Insufficient information to decide |

Then cluster remaining items by theme to reveal patterns and hidden priorities.

## Sequencing Gut-Check

Before finalizing, pressure-test the sequence:
- Does each increment deliver a complete user outcome?
- Could a stakeholder explain the sequencing logic without you in the room?
- If you had to cut the roadmap in half, which half ships? Does it still make strategic sense?
- Are you front-loading learning or front-loading comfort?
