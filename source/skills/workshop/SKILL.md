---
name: workshop
description: Ideation workshop to explore opportunities — value chain analysis, competitive gaps, user feedback synthesis. Use when looking for what to build next, after a /diagnose or /measure, or when exploring a new direction.
user-invocable: true
argument-hint: "[topic or opportunity area]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

A workshop is not brainstorming. Brainstorming produces 40 ideas and zero decisions. A workshop starts from grounded inputs — what users actually do, what competitors actually ship, where value actually flows — and converges on opportunities worth pursuing.

This is a conversation, not a monologue. Push back. Ask "why would someone care?" Challenge assumptions. The best workshops produce two or three sharp ideas, not twenty vague ones.

## Context Pull

Load all available intelligence:

1. **Product context.** Read `.acumen.md` — strategy, positioning, stage, constraints.
2. **Personas.** Read `.acumen/personas.md` — who we serve, their behaviors, workarounds, pain points.
3. **Features.** Read `.acumen/features.md` — what exists today, gaps, decay.
4. **Value chain.** Read `.acumen/value-chain.md` — the end-to-end workflow, where the product sits, extension points per persona. This is the foundation for Lens A.
5. **Competitors.** Read `.acumen/competitors.md` — what the market offers, feature parity traps, moats.
6. **Data sources.** Check `.acumen/sources.md` — pull real usage data, feedback, support patterns if available.
6. **Prior reports.** Check `.acumen/reports/` for recent `/diagnose` or `/measure` outputs that triggered this workshop.

## Workshop Modes

The workshop has three input lenses. Use all three by default, or focus on one if the user specifies a direction.

### Lens A: Value Chain Analysis

Start from `.acumen/value-chain.md` — the persisted workflow map. Do not rebuild from scratch.

1. **Review the value chain.** Load the existing map. Verify it still reflects reality for the workshop topic. If steps are missing or stale, update the map as part of the workshop.
2. **Focus on extension points.** The value chain already identifies where personas switch tools, do manual work, or lose time. Zoom in on the ones relevant to this workshop's topic.
3. **Evaluate each extension:**
   - Does it reinforce the core thesis or dilute it?
   - Would users expect your product to do this?
   - What's the effort-to-value ratio?
   - Does it deepen a moat (data, switching costs, workflow ownership)?

### Lens B: Competitive Feature Scan

Pull from `.acumen/competitors.md`:

1. **What do competitors offer that we don't?** List features, not marketing claims.
2. **For each: is it a real gap or a parity trap?**
   - Does our primary persona actually need this?
   - Would building it serve our thesis or chase theirs?
   - What would we stop doing to build this?
3. **What do we offer that competitors don't?** These are differentiation opportunities to double down on.
4. **What is nobody building?** White space in the market. Jobs that are underserved across all players.

### Lens C: User Signal Synthesis

Pull from configured feedback sources (support, NPS, interviews, analytics):

1. **What are users asking for?** Group requests by theme, not by individual ticket.
2. **What are users complaining about?** Distinguish usability complaints (the feature is hard to use) from value complaints (the feature doesn't solve my problem).
3. **What are users working around?** Workarounds reveal unmet needs. A user who exports data to Excel to do analysis is telling you something.
4. **What are users NOT doing?** Features with low adoption. Flows with high drop-off. Silence is signal.

If no feedback sources are configured, say so explicitly and work from the other two lenses.

### Persona Mode

When exploring opportunities, think AS specific personas from `.acumen/personas.md`. For each relevant persona:

- Walk through the opportunity from their perspective
- What would excite them? What would they ignore?
- Would they switch from their current workaround?
- How does this fit into their daily workflow — or does it create a new one they need to adopt?

This replaces generic "users would..." with grounded persona-specific reactions.

## Workshop Flow

1. **Frame the space.** State the opportunity area and why we're exploring it. Reference the trigger — a `/diagnose` finding, a `/measure` insight, a competitive move, or a user request pattern.

2. **Run the lenses.** Apply all three (or the user's chosen focus). Surface findings, not just data.

3. **Generate opportunities.** Each opportunity must have:
   - **The bet**: what we believe will be true
   - **Who it serves**: specific persona(s)
   - **Evidence**: which lens surfaced it and what supports it
   - **Thesis fit**: does it reinforce or extend the product thesis?
   - **Moat contribution**: does it build defensibility?

4. **Converge.** Rank opportunities by a simple 2x2: evidence strength (how confident are we this matters?) vs. thesis fit (how well does this align with where we're going?). Top-right quadrant is where to focus.

5. **Suggest next steps.** For the top 2-3 opportunities, recommend:
   - `/increment` to scope it
   - `/roadmap` to sequence it with other work
   - `/measure` to define how we'd know it worked

## Output Format

### Workshop: [Topic]

**Trigger:** What prompted this workshop (diagnosis, metric check, competitive move, intuition)

### Value Chain Map
Visual or table showing the persona's workflow and where the product sits today.

### Opportunity Board

| # | Opportunity | Persona | Evidence | Thesis Fit | Moat Impact | Source Lens |
|---|------------|---------|----------|------------|-------------|-------------|
| 1 | | | Strong/Medium/Weak | Direct/Extends/Neutral | Builds/Neutral/None | A/B/C |

### Top Opportunities (detail)

For each top 2-3:

#### [Opportunity Name]
- **The bet**: [one sentence]
- **Who it serves**: [persona name and why]
- **Evidence**: [specific data, feedback, or competitive signal]
- **Current workaround**: [what users do today]
- **Thesis fit**: [how it connects to product strategy]
- **Risks**: [what could go wrong or why this might be wrong]
- **Next step**: `/increment`, `/roadmap`, or `/measure`

### Parked Ideas
Ideas that surfaced but don't meet the bar right now. Keep them so they don't get lost.

### What We Deliberately Ignored
Opportunities we considered and rejected, with reasoning. This prevents the same ideas from resurfacing without new evidence.

---

Save workshop output to `.acumen/reports/workshop-[topic]-[date].md`.

If the workshop revealed new workflow steps, extension points, or persona paths not in `.acumen/value-chain.md`, update the value chain map.
