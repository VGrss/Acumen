---
name: value
description: Map per-persona value delivery to the usage and north star metrics that prove it. Use when you need to articulate what value each persona gets and how you know it's being delivered.
user-invocable: true
argument-hint: "[persona name or metric area]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains product principles and the **Context Gathering Protocol**. Follow the protocol before proceeding — if no product context exists yet, you MUST run /teach-acumen first.

---

Mindset: Value is not what you built — it's the outcome the user got. A feature ships; value is delivered only when the user's situation improves and you can see it in the numbers. If you can't connect a persona to a metric, you don't know if you're delivering value — you're hoping.

## Behavior

**When called with a specific persona**: Build or update the value map for that persona. Focus on what outcome they get, what metric proves it, and whether that metric is actually healthy.

**When called without argument**: Build the full value map across all personas. Identify where value delivery is proven, assumed, or unmeasured.

## Research Process

1. Read `.acumen.md` for product context — north star metric, strategy, business model, success definitions
2. Read `.acumen/personas.md` for behavioral personas — job to be done, success criteria, feedback signals
3. Read `.acumen/features.md` for feature inventory — what exists, who it serves, what's measured
4. Read `.acumen/value-chain.md` for end-to-end workflow — where the product sits, what it owns
5. Check `.acumen/sources.md` for data sources — pull real metrics if available
6. If data sources are configured, pull actual numbers. If not, ask the user to share what they have.

For each persona, answer:

- **What value do they get?** Not features — outcomes. "Saves 4 hours/week on report generation" not "has a report builder."
- **What's the north star metric for this persona?** The single number that best captures whether this persona is getting value. This may be the product-wide north star or a persona-specific proxy.
- **What are the usage metrics that lead to value?** The behavioral signals that predict value delivery — activation events, frequency patterns, depth of engagement, workflow completion rates.
- **What's the proof?** Current metric values, trends, cohort data. If no data exists, say so — an unmeasured value claim is an assumption.
- **What's the value gap?** Where is the persona not getting the value they expect? Where does the product promise more than it delivers?

## Output

Write to `.acumen/value.md`:

```markdown
# Value Map

_Last updated: [date]_

## North Star

- **Metric**: [Product-wide north star metric]
- **Current**: [Value if known, or "unmeasured"]
- **Target**: [Target if set, or "undefined"]
- **Trend**: [Up / Down / Flat / Unknown]

## Value by Persona

### [Persona Name]

- **Value delivered**: [Outcome in the persona's terms — what improves for them]
- **North star proxy**: [The metric that captures this persona's value — may be product-wide north star or persona-specific]
  - Current: [value or "unmeasured"]
  - Target: [value or "undefined"]
  - Trend: [Up / Down / Flat / Unknown]
- **Leading usage metrics**:
  | Metric | What it signals | Current | Target | Status |
  |--------|----------------|---------|--------|--------|
  | [Activation: first meaningful action] | [Persona understands the value] | | | Healthy / Warning / Critical / Unmeasured |
  | [Engagement: core action frequency] | [Persona is getting recurring value] | | | |
  | [Depth: advanced feature adoption] | [Persona is getting full value] | | | |
  | [Retention: return rate at expected cadence] | [Value sustains over time] | | | |
- **Value evidence**: [What data confirms value is being delivered — or what's missing]
- **Value gap**: [Where the promise exceeds reality for this persona]

### [Next persona...]

## Value Confidence Matrix

| Persona | Value Claimed | Metric Exists | Data Available | Trend Healthy | Confidence |
|---------|--------------|---------------|----------------|---------------|------------|
| [name] | [yes/no] | [yes/no] | [yes/no] | [yes/no/unknown] | Proven / Likely / Assumed / Unknown |

**Proven** — metric exists, data is available, trend is healthy. You can demonstrate value.
**Likely** — metric exists and looks reasonable, but data is incomplete or trend is unclear.
**Assumed** — you believe value is delivered but have no metric or data to confirm.
**Unknown** — you can't articulate the value or there's no way to measure it.

## Gaps & Recommendations

### Unmeasured Value
[Personas or value claims with no metric. These are the highest-priority gaps — you can't manage what you can't measure.]

### Underdelivered Value
[Personas where metrics exist but show value isn't landing. These need /diagnose to find root causes.]

### Measurement Recommendations
[Specific metrics to instrument, with the persona and value they'd track. Be concrete — "track time-to-first-report for the Analyst persona" not "add more analytics."]

### Suggested Next Steps
- `/measure` — if metrics exist but haven't been reviewed recently
- `/diagnose [persona]` — if value is underdelivered for a specific persona
- `/features` — if the feature-to-persona mapping is unclear
- `/persona` — if personas are stale or missing value definitions
```

## Maintenance

When refreshing the value map:
- Update metric values from data sources — stale numbers are worse than no numbers
- Check if new features have shifted value delivery for any persona
- Flag value claims that have degraded from Proven to Assumed (metric removed, data source changed)
- Cross-reference with `/measure` output if a recent report exists in `.acumen/reports/`

**NEVER**:
- Claim value is delivered without metric evidence — if you can't measure it, classify it as Assumed
- Invent metric values — if data isn't available, say "unmeasured"
- Confuse features with value — "has SSO" is a feature, "security team approves tool in 1 day instead of 3 weeks" is value
- List vanity metrics as value proof — page views and signups don't prove value delivery
- Skip the confidence matrix — it's the most honest section and the one that drives action
