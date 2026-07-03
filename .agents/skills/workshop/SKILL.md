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

4. **Converge on opportunities.** Rank by a simple 2x2: evidence strength (how confident are we this matters?) vs. thesis fit (how well does this align with where we're going?). Top-right quadrant is where to focus.

5. **Diverge on solutions.** For the top 1-2 opportunities, run the Solution Divergence phase below. Do NOT jump straight to `/increment`.

6. **Suggest next steps.** Based on the chosen solution orientation(s), recommend:
   - `/increment` to scope it
   - `/roadmap` to sequence it with other work
   - `/measure` to define how we'd know it worked

## Solution Divergence

A single opportunity can be solved in radically different ways. Before handing off to `/increment`, surface 3-5 high-level product options so the choice of *shape* is deliberate, not the first plausible idea. Keep this light — scoping, cost, and risk are `/increment`'s job.

### Generate 3-5 Product Options

For the chosen opportunity, sketch options that are *genuinely* different. If two would feel like the same product to a user, collapse them. Span the range across two axes:

**Scope** — go from smallest to boldest, don't cluster:
- **Band-aid** — config, copy, default flip
- **Tweak** — repurpose an existing capability
- **Feature** — new capability inside an existing surface
- **Surface** — new view, page, or workflow
- **Platform** — changes the product's shape across personas/features
- **Category** — redefines what the product is

**Nature** — give each option a clear character:
UX · automation · AI · integration · content · pricing · ecosystem

### For each option

- **Shape**: one sentence — what the user would see
- **Scope**: band-aid / tweak / feature / surface / platform / category
- **Nature**: pick one
- **Why this shape**: one line — what makes this orientation worth considering
- **ASCII sketch**: materialize the option as a rough ASCII drawing so the *shape* is visible, not just described. Sketch the key screen, flow, or interaction the user would encounter. Boldness is the point — the wilder the option (surface / platform / category), the more the sketch earns its place, because prose alone hides what makes it different. Keep it loose: layout and the one thing that makes this option distinct, not pixel fidelity.

```
+------------------------------------------+
|  [What the user sees for this option]    |
|                                          |
|  [The one element that makes it distinct]|
+------------------------------------------+
```

### Pick a direction

Recommend one option (or a sequence like "band-aid now, surface later") and hand off. `/increment` will scope it properly.

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

##### Product Options

| # | Shape | Scope | Nature | Why this shape |
|---|-------|-------|--------|----------------|
| 1 | | band-aid / tweak / feature / surface / platform / category | UX / automation / AI / integration / content / pricing / ecosystem | |

For each option, include its ASCII sketch beneath the table:

**Option [#] — [Shape]**
```
+------------------------------------------+
|  [What the user sees for this option]    |
|                                          |
|  [The one element that makes it distinct]|
+------------------------------------------+
```

**Recommendation:** [which option(s), in what sequence]
**Next step:** `/increment` on [chosen option], `/roadmap`, or `/measure`

### Parked Ideas
Ideas that surfaced but don't meet the bar right now. Keep them so they don't get lost.

### What We Deliberately Ignored
Opportunities we considered and rejected, with reasoning. This prevents the same ideas from resurfacing without new evidence.

---

Save workshop output to `.acumen/reports/workshop-[topic]-[date].md`.

If the workshop revealed new workflow steps, extension points, or persona paths not in `.acumen/value-chain.md`, update the value chain map.
