---
name: diagnose
description: Find what's broken and what's underexploited — problems AND opportunities — grounded in data, value delivery per persona, and current features. The entry point to ideation; hands sharp problems and opportunities to /workshop.
user-invocable: true
argument-hint: "[symptom, metric area, or opportunity to explore]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

Symptoms are not problems. Requests are not needs. Bright spots are not luck. Your job is to find what is actually broken *and* what is quietly working and underexploited — both grounded in data and measured against the value you're supposed to deliver to each persona.

Most product problems are misdiagnosed at the framing stage. The team sees a symptom ("users don't use feature X"), jumps to a cause ("the UI is bad"), and builds a solution ("redesign the UI"). Meanwhile the real problem was that users never discovered feature X, or that it solves a problem they don't have.

And most opportunities are missed the same way — a metric is climbing, nobody asks why, and the chance to pour fuel on what's already working slips by. Teams fixate on what's broken and ignore what's working. Diagnose does both.

Your job is to slow down the jump from symptom to solution — and to surface where the product could win, not just where it's losing.

## Context Pull

Before diagnosing anything, load the full picture:

1. **Product context.** Read `.acumen.md` — strategy, positioning, north star, what success looks like.
2. **Feature inventory.** Read `.acumen/features.md` — what we've built, feature health, known gaps and decay.
3. **Personas.** Read `.acumen/personas.md` — who we serve, their jobs, their pain points, their workarounds.
4. **Value chain.** Read `.acumen/value-chain.md` — the end-to-end workflow per persona. Use it to locate where a symptom occurs or where an opportunity sits, and whether it's a step we own, assist, or don't touch. If the value chain already lists opportunities against extension points, start there.
5. **Competitors.** Read `.acumen/competitors.md` — competitive context, and where the white space is.

### Data Pull

Data is the ground truth for both problems and opportunities. Check `.acumen/sources.md` and pull real numbers:

- **Analytics** — funnels, activation, retention cohorts, drop-offs, and trends. Pull the metrics that show where value is delivered and where it leaks. If an MCP server is configured, pull directly. If manual, tell the user exactly what query or dashboard to check.
- **Database** — user segments, cohort sizes, growth and churn. Count affected users, measure frequency, segment by plan/role/tenure.
- **Revenue** — MRR/ARR, conversion, expansion/contraction if available.
- **Backlog** — related tickets, bugs, requests. How often has this been reported? Is work already in flight?
- **User feedback** — support tickets, NPS, interviews. Pull patterns, count occurrences, note users' exact words — their language is more accurate than your interpretation.

If no data sources are configured, say so explicitly — and flag that the diagnosis is narrative, not measured.

## Core Protocol

### 1. Metric Health Scan

Read the numbers before forming any hypothesis. For the key metrics in the area under review:

| Metric | Current | Trend | Status | Read |
|--------|---------|-------|--------|------|
| [name] | [value] | Up / Down / Flat | Healthy / Warning / Critical | [what it's telling you] |

- **What's declining or below target** → a candidate **problem**. Note since when, and whether a trigger event lines up.
- **What's climbing or above target** → a candidate **opportunity**. Ask what's driving it, whether it's structural or a one-off, and whether it can be amplified.
- **What isn't measured but should be** → a blind spot. Flag decisions being made without data.

Aggregate health can mask segment-level truth. If topline looks fine but a persona segment is underperforming — or over-performing — surface it.

### 2. Value Delivery Audit

For each primary persona in scope:

- **What value should the product deliver to this persona?** (from `.acumen.md` and persona definition)
- **Is it delivering that value today?** Check feature inventory + usage data.
- **Where in the value chain does it break — or over-deliver?** Use `.acumen/value-chain.md` to locate the specific step(s). A step where value breaks is a problem; a step where a persona gets unexpected value (or reaches past our surface to get it) is an opportunity.
- **Where is the gap?** Between promised value and delivered value. Be specific — name the features, flows, and moments.

Don't just ask "what's wrong" — ask "are we delivering on the promise we made to each persona, and where are we accidentally delighting them?"

### 3. Five Whys (for problems)

Start with the stated symptom. Ask why five times. At each level, categorize:

| Level | Category | Description |
|-------|----------|-------------|
| Surface | **Discovery** | Users cannot find or do not know about it |
| | **Usability** | Users find it but cannot use it effectively |
| Deeper | **Value** | Users can use it but it does not solve their actual problem |
| Root | **Retention** | Users got value once but have no reason to come back |

At each "why," mark whether the evidence is **measured**, **observed**, or **assumed**. Three assumptions in a row means you're guessing, not diagnosing — flag it.

### 4. Feature Health Check

Cross-reference against `.acumen/features.md`:

- **Underperforming** — built but not adopted. Discovery, value, or audience mismatch?
- **Decaying** — once healthy, now declining. What changed?
- **Missing** — gaps in the persona's workflow that force workarounds.
- **Over-performing** — adoption or engagement above expectation. This is an opportunity to double down.

### 5. Reframing Lenses

Pressure-test the diagnosis:

- **Inversion.** What if we did the opposite? If "users don't complete onboarding," what if we removed onboarding entirely?
- **Substitution.** What if this were a service instead of a feature? A template? A default?
- **Audience shift.** What if this were only for power users? Or only for new users?
- **Constraint removal.** Unlimited eng time — what would you build? Zero eng time — what would you do? The gap reveals priorities.

If a reframe produces a more compelling diagnosis — or exposes an opportunity the data missed — say so.

## Output Format

Diagnose produces two kinds of finding. Lead with whichever is stronger for the area under review; include both when both are present.

### Problems

For each problem:

#### Problem Name
Short, specific. Not "engagement issues." Something like "New users abandon setup at the integration step because error messages don't tell them what went wrong."

- **Stated symptom** — what was reported, verbatim if possible.
- **Data summary** — what the numbers actually show: affected personas by name, quantified impact (users, frequency, severity), real feedback quotes, and confidence (measured / observed / assumed).
- **Root cause (Five Whys)** — the chain from symptom to root, with category tags and evidence type at each step.
- **Scope of fix** — config change, copy fix, feature, or rethink.

### Opportunities

For each opportunity (bright spot to amplify, unmet need, or white space):

#### Opportunity Name
Short, specific. Something like "Power users export dashboards to Slack manually 3x/week — we could own that handoff."

- **Signal** — the metric that's climbing, the workaround users invented, the segment over-performing, or the competitor white space. Ground it in data.
- **Who it serves** — the persona(s), by name.
- **Why now** — what makes this worth exploring today.
- **Thesis fit** — does amplifying this reinforce or extend the product thesis?

### Value Delivery Assessment

| Persona | Promised Value | Delivered? | Gap or Upside |
|---------|---------------|------------|---------------|
| | | Yes / Partially / No | [specific gap, or unexpected value worth amplifying] |

### Feature Health

| Feature | Status | Issue or Upside | Evidence |
|---------|--------|-----------------|----------|
| | Underperforming / Decaying / Missing / Over-performing | | [data or observation] |

### Metric Blind Spots

What should be measured but isn't. What decisions are flying blind.

### Evidence Needed

What you'd need to confirm each finding. Be specific: "Run a funnel on the setup flow filtered by users who connected zero integrations" — not "gather more data."

### Recommended Next Step

For each finding, hand off explicitly:

- **`/workshop [framing]`** — the default. Whether it's a confirmed problem or a promising opportunity, workshop diverges it into many solution shapes. Give a sharp one-line framing, e.g. `/workshop integration onboarding — new users don't connect their first integration; what shapes could fix it?`
- **`/increment`** — only if the fix is already obvious and scoped (a copy change, a default flip). Skip divergence.
- **Do nothing** — sometimes the honest answer. Say what happens if we don't act, and whether there's a better place to spend the effort.

If a finding is a new opportunity not yet captured in `.acumen/value-chain.md`, add it there against the relevant extension point so future diagnoses and workshops can pick it up.

---

Save diagnosis output to `.acumen/reports/diagnose-[topic]-[date].md`.
