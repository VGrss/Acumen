---
name: diagnose
description: Find the root cause of a product problem. Reframe when you're solving the wrong one. Use when something's broken, underperforming, or users are churning.
user-invocable: true
argument-hint: "[symptom]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Context Pull

Before diagnosing anything, gather signal:

1. **User feedback source.** If configured (support tickets, interviews, NPS, analytics), pull patterns related to the symptom. Do not diagnose from vibes. Count occurrences. Note exact language users use — their words are more accurate than your interpretation.

2. **Affected personas.** Reference `.acumen/personas.md`. Which personas are hit? All of them, or a specific segment? A problem that affects your highest-value persona differently than your newest users is two different problems.

3. **Quantify.** How many users? Which segments? What severity — annoyance, blocker, or churn trigger? If you cannot quantify, say so. "We think it's bad" is not a diagnosis.

4. **Data sources.** Check `.acumen/sources.md` and pull real data to ground the diagnosis:
   - **Analytics** — Query for usage patterns, funnels, drop-offs, and trends related to the symptom. If a MCP server is configured, pull the data directly. If manual, tell the user exactly what query or dashboard to check.
   - **Database** — Query for user segments, cohort sizes, and behavioral patterns that quantify the problem. Use read-only access to count affected users, measure frequency, segment by plan/role/tenure.
   - **Backlog** — Search for related tickets, bugs, and feature requests. How many times has this been reported? Is there existing work in progress? What priority was it assigned?

   If no data sources are configured, say so explicitly — and flag that the diagnosis is based on narrative, not measurement.

---

## Mindset

Symptoms are not problems. Requests are not needs. Your job is to find what is actually broken — and challenge whether the current framing is even the right one.

Most product problems are misdiagnosed at the framing stage. The team sees a symptom ("users don't use feature X"), jumps to a cause ("the UI is bad"), and builds a solution ("redesign the UI"). Meanwhile the real problem was that users never discovered feature X existed, or that feature X solves a problem they don't have.

Your job is to slow down the jump from symptom to solution.

## Five Whys Protocol

Start with the stated symptom. Ask why five times. At each level, categorize what type of problem you are looking at:

| Level | Category | Description |
|-------|----------|-------------|
| Surface | **Discovery** | Users cannot find or do not know about it |
| | **Usability** | Users find it but cannot use it effectively |
| Deeper | **Value** | Users can use it but it does not solve their actual problem |
| Root | **Retention** | Users got value once but have no reason to come back |

Most teams fix at the surface level. The root is usually two or three levels deeper. Do not stop at the first plausible answer.

At each "why," note whether the evidence is **measured**, **observed**, or **assumed**. If you hit three assumptions in a row, flag it — you are guessing, not diagnosing.

## Reframing Lenses

After the Five Whys, pressure-test the diagnosis by looking at it from four angles:

- **Inversion.** What if we did the opposite? If the symptom is "users don't complete onboarding," what if we removed onboarding entirely? What would happen? Sometimes the answer reveals that the real problem is upstream.

- **Substitution.** What if this were a service instead of a feature? What if a human did this step? What if we replaced the feature with documentation, a template, or a default? The lightest solution that works is usually the right one.

- **Audience shift.** What if this were only for power users? Or only for new users? Narrowing the audience often clarifies the problem. A feature that fails for everyone might succeed brilliantly for one segment — and that segment might be the one that matters.

- **Constraint removal.** If you had unlimited engineering time, what would you build? Now: if you had zero engineering time, what would you do? The gap between those two answers is where the real priorities live.

If any reframe produces a more compelling diagnosis than the Five Whys, say so. The goal is the right answer, not a consistent methodology.

## Output Format

### Problem Name
A short, specific name. Not "engagement issues." Something like "New users abandon setup at the integration step because the error messages don't tell them what went wrong."

### Stated Symptom
What the team or user reported. Verbatim if possible.

### User Signal
What the data and feedback actually show. Include affected personas by name from `.acumen/personas.md`. Quote real feedback if available. Note sample sizes and confidence levels.

### Root Cause (Five Whys)
The chain from symptom to root, with category tags at each level. Mark evidence type (measured / observed / assumed) at each step.

### Reframe
One to two alternative framings that emerged from the lenses. Explain why they might be more useful than the original framing — or why the original framing holds up.

### Evidence Needed
What you would need to confirm the diagnosis. Be specific: "Run a funnel analysis on the setup flow filtered by users who connected zero integrations" — not "gather more data."

### Recommended Action
What to do, in priority order. Include scope — is this a config change, a copy fix, a feature, or a rethink?

### If We Do Nothing
What happens. Be honest. Sometimes the answer is "not much, and we should work on something else." That is a valid diagnosis.
