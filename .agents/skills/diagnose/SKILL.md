---
name: diagnose
description: Find current problems in the product based on data, value delivery for main personas, and current features. Suggests /workshop for ideation on solutions.
user-invocable: true
argument-hint: "[symptom or area]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

Symptoms are not problems. Requests are not needs. Your job is to find what is actually broken — grounded in data and measured against the value you're supposed to deliver to each persona.

Most product problems are misdiagnosed at the framing stage. The team sees a symptom ("users don't use feature X"), jumps to a cause ("the UI is bad"), and builds a solution ("redesign the UI"). Meanwhile the real problem was that users never discovered feature X existed, or that feature X solves a problem they don't have.

Your job is to slow down the jump from symptom to solution.

## Context Pull

Before diagnosing anything, load the full picture:

1. **Product context.** Read `.acumen.md` — strategy, positioning, what success looks like.
2. **Feature inventory.** Read `.acumen/features.md` — what we've built, feature health, known gaps and decay.
3. **Personas.** Read `.acumen/personas.md` — who we serve, their jobs, their pain points, their workarounds.
4. **Value chain.** Read `.acumen/value-chain.md` — the end-to-end workflow per persona. Use this to locate where in the chain the symptom occurs and whether the gap is in a step we own, assist, or don't touch.
5. **Competitors.** Read `.acumen/competitors.md` — competitive context for the area being diagnosed.

### Data Pull

Check `.acumen/sources.md` and pull real data to ground the diagnosis:

- **Analytics** — Usage patterns, funnels, drop-offs, and trends related to the symptom. If an MCP server is configured, pull the data directly. If manual, tell the user exactly what query or dashboard to check.
- **Database** — User segments, cohort sizes, and behavioral patterns that quantify the problem. Use read-only access to count affected users, measure frequency, segment by plan/role/tenure.
- **Backlog** — Related tickets, bugs, and feature requests. How many times has this been reported? Is there existing work in progress?
- **User feedback** — Support tickets, NPS comments, interview notes. Pull patterns related to the symptom. Count occurrences. Note exact language users use — their words are more accurate than your interpretation.

If no data sources are configured, say so explicitly — and flag that the diagnosis is based on narrative, not measurement.

## Core Protocol

### 1. Value Delivery Audit

For each primary persona affected by the symptom:

- **What value should the product deliver to this persona?** (from `.acumen.md` and persona definition)
- **Is it delivering that value today?** Check feature inventory + usage data.
- **Where in the value chain does it break?** Use `.acumen/value-chain.md` to locate the specific step(s) where value delivery fails — is it a step we own, assist, or don't touch at all?
- **Where is the gap?** Between promised value and delivered value. Be specific — name the features, the flows, the moments where value breaks down.

This is the heart of the new diagnose. Don't just ask "what's wrong" — ask "are we delivering on the promise we made to each persona?"

### 2. Five Whys Protocol

Start with the stated symptom. Ask why five times. At each level, categorize:

| Level | Category | Description |
|-------|----------|-------------|
| Surface | **Discovery** | Users cannot find or do not know about it |
| | **Usability** | Users find it but cannot use it effectively |
| Deeper | **Value** | Users can use it but it does not solve their actual problem |
| Root | **Retention** | Users got value once but have no reason to come back |

At each "why," note whether the evidence is **measured**, **observed**, or **assumed**. If you hit three assumptions in a row, flag it — you are guessing, not diagnosing.

### 3. Feature Health Check

Cross-reference the symptom against `.acumen/features.md`:

- **Underperforming features** — built but not adopted. Why? Discovery problem, value problem, or audience mismatch?
- **Decaying features** — once healthy, now declining. What changed?
- **Missing features** — gaps in the persona's workflow that force workarounds.

### 4. Reframing Lenses

After the Five Whys, pressure-test the diagnosis:

- **Inversion.** What if we did the opposite? If "users don't complete onboarding," what if we removed onboarding entirely?
- **Substitution.** What if this were a service instead of a feature? A template? A default?
- **Audience shift.** What if this were only for power users? Or only for new users?
- **Constraint removal.** If you had unlimited eng time, what would you build? If zero eng time, what would you do? The gap reveals priorities.

If any reframe produces a more compelling diagnosis than the Five Whys, say so.

## Output Format

### Problem Name
Short, specific. Not "engagement issues." Something like "New users abandon setup at the integration step because error messages don't tell them what went wrong."

### Stated Symptom
What the team or user reported. Verbatim if possible.

### Data Summary
What the data actually shows. Include:
- Affected personas by name from `.acumen/personas.md`
- Quantified impact (users affected, frequency, severity)
- Real feedback quotes if available
- Confidence level (measured / observed / assumed)

### Value Delivery Assessment

| Persona | Promised Value | Delivered? | Gap |
|---------|---------------|------------|-----|
| | | Yes / Partially / No | [specific gap] |

### Root Cause (Five Whys)
The chain from symptom to root, with category tags at each level. Mark evidence type (measured / observed / assumed) at each step.

### Feature Health

| Feature | Status | Issue | Evidence |
|---------|--------|-------|----------|
| | Underperforming / Decaying / Missing | [what's wrong] | [data or observation] |

### Reframe
One to two alternative framings from the lenses. Explain why they might be more useful — or why the original holds.

### Evidence Needed
What you would need to confirm the diagnosis. Be specific: "Run a funnel analysis on the setup flow filtered by users who connected zero integrations" — not "gather more data."

### Recommended Action
What to do, in priority order. Include scope — config change, copy fix, feature, or rethink.

For problems that need deeper ideation: **suggest `/workshop`** with a specific framing. Example: "/workshop integration onboarding — exploring why new users don't connect their first integration and what alternatives exist."

### If We Do Nothing
What happens. Be honest. Sometimes the answer is "not much, and we should work on something else."

---

Save diagnosis output to `.acumen/reports/diagnose-[topic]-[date].md`.
