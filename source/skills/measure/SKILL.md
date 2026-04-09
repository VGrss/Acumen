---
name: measure
description: Check KPI health — what's working, what's not, where to dig deeper. Suggests /workshop for opportunities. Use for metric reviews, health checks, or when something feels off in the numbers.
user-invocable: true
argument-hint: "[metric area or question]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

This is not "define metrics." This is "read the dashboard and tell me what's happening." Metrics exist to create accountability and learning. A metric nobody acts on is waste. Your job is to look at what's actually happening in the numbers, identify where things are working well, where they're not, and surface opportunities for investigation or action.

If you can't get real data, say so. A metric review without data is fiction.

## Context Pull

1. **Product context.** Read `.acumen.md` — north star metric, strategy, current bets, what success looks like.
2. **Features.** Read `.acumen/features.md` — what's shipped, feature health, adoption signals.
3. **Personas.** Read `.acumen/personas.md` — who we serve and how we measure value for each.
4. **Value chain.** Read `.acumen/value-chain.md` — the end-to-end workflow per persona. Use this to structure metric analysis by chain step: are we measuring value at every step we own?
5. **Data sources.** Check `.acumen/sources.md` and pull real metrics:
   - **Analytics** — key funnels, activation rates, retention cohorts, usage patterns. If an MCP server is configured, pull directly. If manual, tell the user exactly what to check.
   - **Database** — user counts, segment breakdowns, growth rates, churn data.
   - **Revenue** — MRR/ARR, conversion rates, expansion/contraction if available.

If no data sources are configured, ask the user to share the numbers they have. Work with what exists.

## Core Protocol

### 1. Metric Landscape

Start by mapping what's being measured today:

- **North star** — what is it? Is it clearly defined? Is everyone aligned on the definition?
- **Input metrics** — what levers drive the north star? Are they being tracked?
- **Counter-metrics** — are guardrails in place? What are they watching?
- **Gaps** — what should be measured but isn't? What decisions are being made without data?

If the product doesn't have a clear metric framework, flag it. Suggest defining one — and note that `/increment` includes metric definition for new features.

### 2. Health Check

For each key metric, assess:

| Metric | Current | Trend | Assessment | Action |
|--------|---------|-------|------------|--------|
| [name] | [value] | Up / Down / Flat | Healthy / Warning / Critical | [what to do] |

**Healthy** — metric is at or above target, trend is positive or stable.
**Warning** — metric is below target or trending down, but not yet critical.
**Critical** — metric is significantly below target, declining, or indicating a structural problem.

### 3. What's Working

Identify bright spots — metrics that are performing well. For each:

- **What's driving it?** Name the specific feature, flow, or behavior.
- **Is it sustainable?** One-time boost or structural improvement?
- **Can we amplify it?** Is there an opportunity to double down?

Bright spots are underrated. Teams fixate on problems and miss opportunities to accelerate what's already working.

### 4. What's Not Working

Identify problem areas — metrics that are underperforming. For each:

- **How bad is it?** Quantify the gap between current and target.
- **Since when?** When did this start? Was there a trigger event?
- **Who's affected?** Which persona segments show this pattern?
- **What's the hypothesis?** Why might this be happening?

For each problem area, recommend either:
- **`/diagnose`** — if the root cause is unclear
- **`/workshop`** — if the cause is known but the solution isn't

### 5. Persona Value Check

For each primary persona, assess whether the metrics reflect value delivery:

- **Are they activating?** First meaningful action within expected timeframe.
- **Are they retaining?** Coming back at the expected frequency.
- **Are they expanding?** Using more features, inviting teammates, upgrading.

If metrics show healthy topline but a specific persona is underperforming, flag it — aggregate health can mask segment-level problems.

## Output Format

### Metric Health Summary
One paragraph: overall health posture. Are things broadly healthy with specific concerns, or is there a systemic issue?

### Dashboard

| Metric | Current | Target | Trend | Status | Notes |
|--------|---------|--------|-------|--------|-------|
| North star: [name] | | | | | |
| Input: [name] | | | | | |
| Counter: [name] | | | | | |

### What's Working
Two to three bright spots with evidence and amplification opportunities.

### What's Not Working
Two to three problem areas with quantified gaps, hypotheses, and recommended next steps.

### Persona Health

| Persona | Activation | Retention | Expansion | Overall | Action |
|---------|-----------|-----------|-----------|---------|--------|
| | | | | Healthy / Warning / Critical | |

### Metric Gaps
What should be measured but isn't. What decisions are flying blind.

### Suggested Next Steps
For each finding, recommend the appropriate Acumen command:
- `/diagnose [area]` — when the cause is unclear
- `/workshop [topic]` — when ideation is needed
- `/increment [feature]` — when the fix is scoped and ready to build

---

Save measure output to `.acumen/reports/measure-[date].md`.
