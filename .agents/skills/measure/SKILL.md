---
name: measure
description: Define metrics that prove whether something worked. Use when you need KPIs, success criteria, experiment design, or analytics requirements.
user-invocable: true
argument-hint: "[feature or initiative]"
---

# Measure

## Preparation

Before anything else, invoke `/product-thinking` to load strategic context, user segments, and current product landscape. Without that grounding, metrics float detached from reality.

## Mindset

If you can't state the baseline, you can't set a target. If you can't define the metric, you can't claim it improved. Metrics exist to create accountability and learning, not dashboards. A metric nobody acts on is waste.

## Core Reflex

Build a metric tree. Start from the north star and work down:

1. **North star metric** — the single number that best captures the value users get
2. **Input metrics** — the levers that directly influence the north star (things teams can act on)
3. **Counter-metrics** — guardrails that detect when optimizing one thing breaks another

Every layer must connect causally to the one above. If you can't explain the mechanism, the metric doesn't belong in the tree.

## Key Heuristics

### Every metric needs five things
- **Precise definition**: no ambiguity about what counts (e.g., "active" means performed core action X in the last 7 days)
- **Baseline**: the current number, measured the same way
- **Target**: grounded in realistic change rates, not aspirational round numbers
- **Measurement method**: where the data comes from, how it's computed, known limitations
- **Owner**: one person accountable for watching and acting on it

### Counter-metrics are non-negotiable
For every primary metric, define what could break. Optimize conversion rate? Watch support tickets and refund rate. Optimize time-to-first-value? Watch retention at day 30. No counter-metric means you're flying blind to second-order effects.

### Leading over lagging
Prefer leading indicators (behavior changes you can observe now) over lagging indicators (revenue, churn — things you learn about too late to course-correct). Revenue tells you what happened. Activation rate tells you what's about to happen.

### Targets grounded in reality
A 2x improvement on a mature metric is fantasy. Look at historical trends, cohort behavior, and comparable benchmarks. A realistic target you actually hit teaches more than an ambitious one you ignore.

### Instrument before you ship
Define metrics and confirm instrumentation before launch, not after. If you ship without tracking, you shipped without learning.

## Reference

Consult [metrics-measurement](../product-thinking/reference/metrics-measurement.md) for deeper frameworks on metric hierarchies, experiment design, statistical significance, and common measurement pitfalls.

## Output Format

Structure your response as:

1. **North star metric** — definition, current baseline (if known), target, rationale
2. **Input metrics table**

| Metric | Definition | Baseline | Target | Method | Owner |
|--------|-----------|----------|--------|--------|-------|
| | | | | | |

3. **Counter-metrics** — what each guards against, thresholds for alarm
4. **Experiment design** (if applicable) — hypothesis, variant design, sample size reasoning, duration, success/failure criteria
5. **Data requirements** — events to instrument, data sources needed, known gaps, privacy considerations

Be specific. "Improve engagement" is not a metric. "Increase 7-day repeat usage from 34% to 40% within 8 weeks of launch" is.
