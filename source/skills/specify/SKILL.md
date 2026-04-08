---
name: specify
description: Write a spec that drives good execution, scoped to the minimum that delivers the outcome. Use when a feature needs a PRD, one-pager, or requirements doc.
user-invocable: true
argument-hint: "[feature]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Context Pull

This is what makes specify different from generic spec writing. A spec without context is a template. Do all of the following before writing a single section:

1. **Competitive context.** Read `.acumen/competitors.md`. What are competitors doing in this space? What is table stakes, what is differentiated, and where is the parity trap — the features you build just because competitors have them, even though they don't drive your outcomes? Name the trap explicitly so the team can decide whether to walk into it with eyes open.

2. **Persona reactions.** Read `.acumen/personas.md`. Pick the two to three personas most affected by this feature. For each, answer: Would they notice this? Would they care? Would it change their behavior? If the answer is "no" for your primary persona, you have a scope problem.

3. **User signal.** Check configured feedback sources for evidence that this problem exists and matters. How many users mentioned it? What exact words did they use? What workarounds do they have? If there is no signal, flag it — you may be solving a problem nobody has.

4. **After specifying**, update `.acumen/features.md` with the new feature entry. Include name, status, target persona, and the core bet. Keep the inventory current.

---

## Mindset

A spec is a thinking tool, not a documentation exercise. If the sections don't inform each other, you are filling templates. The competitive context should shape the scope. The persona reactions should challenge the solution. The user signal should validate the problem. If these inputs don't change what you write, you are not using them.

Scope by outcome, not by time. "What can we build in two weeks?" produces mediocre features. "What is the minimum that changes user behavior?" produces focused ones. Cut features, not corners.

## Core Protocol

**Working backward.** Before writing the spec, write the internal announcement — the Slack message or email you would send when this ships. Two sentences: what it does and why it matters. If you cannot write that clearly, you do not understand the feature yet. Do not proceed until the announcement is crisp.

**Scope ruthlessly.** The cut list is more important than the feature list. Everything you cut is a decision. Everything you keep is a commitment. Make both explicit.

**AI Slop Test.** Before presenting the spec, run it against the 12 tells from /product-thinking. If a PM who knows nothing about this product could have generated the same document, rewrite it. Every section must contain information specific to this product, this market, this moment.

## Output Format

### The Bet
One to two sentences. What we believe, what we are building, and what changes if we are right. This is the spec's thesis. Everything below either supports it or challenges it.

### Problem
The specific user moment when this problem occurs. Not "users struggle with X." Instead: "When a user tries to [action], they hit [obstacle], which causes [consequence]." Ground it in observed behavior, not hypothetical frustration.

### Competitive Context
What competitors do here. Where we have an advantage, where we are behind, and where the parity trap is. One paragraph, not a feature matrix. The goal is strategic awareness, not a checkbox comparison.

### Persona Reactions
For each relevant persona (two to three, pulled from `.acumen/personas.md`):
- **Name**: Would they notice? Would they care? Would they switch behavior? What concerns would they have? One to two sentences, opinionated.

### User Signal
What real users have said or done that validates this problem. Quote feedback, cite volumes, note segments. If signal is weak, say so — that is useful information for prioritization.

### Success Looks Like
One primary metric with a baseline and target. One counter-metric that would tell you the feature is causing harm. Do not list twelve KPIs.

| Metric | Baseline | Target | Timeframe |
|--------|----------|--------|-----------|
| Primary: [specific metric] | [current value] | [target value] | [when to measure] |
| Counter: [guardrail metric] | [current value] | [do not exceed] | [when to check] |

### Solution Direction
How the feature works. Be specific enough that an engineer understands the approach, but do not write implementation specs. Focus on user-facing behavior. Include key interaction decisions and why you made them.

### Scope

| Tier | What | Why |
|------|------|-----|
| **Minimum** | The smallest version that tests the bet | Ships the core value, nothing else |
| **Recommended** | Minimum + quality-of-life additions | What you would actually want to ship |
| **Ambitious** | Recommended + stretch items | Only if execution is ahead of plan |
| **Cut** | What you are explicitly not building | And why — this is the most important row |

The Cut row is mandatory. If nothing is cut, the scope is not real.

### Edge Cases
The specific scenarios that will break this feature or confuse users. Not generic edge cases ("what if the network is slow") — specific ones tied to this feature's logic, this product's data model, or this persona's workflow.

### Open Questions
Decisions that are not yet made and who needs to make them. Each question should have a deadline or trigger ("decide before eng starts" / "decide after we see v1 data"). Open questions without owners or deadlines are just parking lots for indecision.

---

Do not pad the spec. If a section has nothing meaningful to say, write "No signal" or "Not applicable" — do not fill it with plausible-sounding filler. A short spec that says true things beats a long spec that says everything.
