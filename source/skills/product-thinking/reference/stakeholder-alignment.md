# Stakeholder Alignment

Aligning people and managing decisions. Alignment is not agreement — it's a shared understanding of what was decided, why, and what each person's role is in executing it.

---

## DACI Framework

| Role | Definition | How Many | Key Behavior |
|------|-----------|----------|-------------|
| **Driver** | Owns the process, keeps things moving, ensures a decision happens | Exactly 1 | Does not make the decision — makes sure it gets made |
| **Approver** | Makes the final call | 1-2 max | Must be identified before the discussion starts |
| **Contributors** | Provide input, expertise, options | As needed | Have voice but not vote |
| **Informed** | Need to know the outcome | As needed | Told after the decision, not during |

### Why you need it

Decisions stall when everyone thinks they're the approver. DACI makes the decision rights explicit before the conversation starts. The most common failure mode: three people each believe they have veto power.

### How to set it up

1. **State the decision** precisely. "Should we build X?" is different from "How should we build X?"
2. **Assign roles** before the first meeting. Share the DACI chart in the meeting invite.
3. **Time-box the input phase.** Contributors have until [date] to provide input. After that, the Approver decides.
4. **Document and distribute.** The Driver sends the decision to all roles within 24 hours.

### When to skip it

- Small, reversible decisions (just decide and move)
- High-trust teams with established norms (the framework is implicit)
- Decisions where one person clearly owns the domain

---

## Audience Framing

The same decision needs different framings for different audiences. Presenting engineering tradeoffs to an exec is as ineffective as presenting revenue projections to a designer.

### Framing matrix

| Audience | Lead With | Include | Exclude |
|----------|----------|---------|---------|
| **Executives** | Outcome + business impact | Cost, risk, timeline, strategic fit | Implementation details, technical architecture |
| **Engineers** | Scope + constraints + tradeoffs | Technical requirements, data model, performance targets | Business justification (they trust you've done it) |
| **Designers** | User need + success criteria + flexibility | Research insights, behavioral goals, what's fixed vs flexible | Revenue targets, technical constraints (share separately) |
| **Customers** | What changed + what they can do now | How to start, migration path, timeline | Internal reasoning, competitive positioning |
| **Sales** | Positioning + differentiators + timeline | Talk track, competitive comparison, pricing implications | Technical details, design rationale |

### The translation test

If you're using the same deck for the board meeting and the engineering kickoff, at least one audience is being poorly served. Reframing is not spin — it's communication competence.

---

## The Disagree-and-Commit Protocol

Consensus is expensive and often unnecessary. Disagree-and-commit is a protocol for moving forward when full agreement isn't possible.

### The steps

1. **State the disagreement clearly.** "I believe we should do X instead of Y, because [reasons]."
2. **Record both positions.** The decision document captures the chosen path AND the dissenting view.
3. **Record the rationale.** Why this path was chosen despite disagreement.
4. **Commit fully to execution.** No hedging, no "I told you so" positioning, no passive resistance.
5. **Set a review point.** "We'll evaluate this decision at [milestone] based on [metrics]."

### What it is NOT

- Giving up — you voiced your position and it was heard
- Agreeing — you explicitly disagree and that's recorded
- Surrendering judgment — you'll advocate for change at the review point if the data supports it

### When it fails

- When "commit" means "comply but undermine." This is organizational poison.
- When there's no review point. Commitment without a chance to revisit breeds resentment.
- When the disagreement is about values, not tactics. You can disagree-and-commit on approach, not on ethics.

---

## Managing Upward

Present tradeoffs, not requests. Your leadership doesn't need problems — they need options with your recommendation.

### The format

```
We can do:
  A) [option] — [pro], [con], [timeline]
  B) [option] — [pro], [con], [timeline]
  C) [option] — [pro], [con], [timeline]

I recommend [A/B/C] because [reason tied to their priorities].
```

### Never say these things

| Don't Say | Say Instead |
|-----------|------------|
| "We need more time" | "We can ship the full scope in 8 weeks or a reduced scope (X, Y, not Z) in 5 weeks. I recommend the reduced scope because Z can ship independently later." |
| "That's not possible" | "That would require [specific cost]. Here's what we could do instead to achieve the same outcome." |
| "The team is overloaded" | "Here's what's currently committed and the relative priority. To add this, we'd need to deprioritize [specific item]. Which do you prefer?" |
| "We tried that and it didn't work" | "We tested that approach in Q2 and saw [specific result]. Here's what we'd change this time, or here's an alternative." |

### The upward management meta-skill

Your manager's job is making tradeoffs. Your job is making sure they have the information to make good ones. If they're making bad tradeoffs, the problem is usually information quality, not judgment.

---

## Saying No With Evidence and Alternatives

"No" is "yes to something else." Make the tradeoff explicit.

### The framework

1. **Acknowledge the request.** "I understand you want X, and I can see why it's valuable."
2. **Show the cost.** "Adding X would mean [delaying Y / cutting Z / adding N weeks]. Here's the current commitment list."
3. **Offer alternatives.** "We could do a lighter version of X that achieves 80% of the value, or we could sequence it after Y ships."
4. **Let the requester decide.** "Given these tradeoffs, which path do you prefer?"

### Why this works

You're not saying no — you're making the requester responsible for the tradeoff. Most requests disappear when the cost is visible. The ones that survive are genuinely important.

### The permanent-no cases

Some things deserve a hard no: scope that contradicts strategy, requests that violate user trust, features that create irreversible technical debt. For these, be direct: "This conflicts with [principle/strategy]. Here's why."

---

## Roadmap Communication

Different audiences need different views of the same roadmap.

| Audience | View | Format | Cadence |
|----------|------|--------|---------|
| **Executives** | Themes and outcomes | Quarterly objectives, success metrics | Quarterly review |
| **Engineers** | Sequencing logic and dependencies | Ordered backlog with rationale for sequence | Sprint/cycle planning |
| **Customers** | Feature previews and timelines | Public changelog, preview programs | Release-based |
| **Sales** | Upcoming capabilities and positioning | Internal feature briefs with talk tracks | Monthly update |

### The commitment trap

Never share a roadmap as a commitment. Always frame it as "current best plan given what we know." Things that change a roadmap: new data, shifted priorities, discovered complexity, market changes. All of these are legitimate. A roadmap that never changes isn't responsive — it's fiction.

### Roadmap anti-patterns

- **The date-driven roadmap** — Dates without scope flexibility. Guarantees either missed dates or cut quality.
- **The feature list** — No sequencing rationale. Invites "just add one more" from every stakeholder.
- **The aspiration roadmap** — Everything the team could ever do, with no prioritization signal.

---

## Incentive Mapping

Before any alignment meeting, map what each person in the room optimizes for.

### Common incentive profiles

| Role | Stated Priority | Actual Optimization Function |
|------|----------------|------------------------------|
| VP Sales | Revenue growth | Pipeline velocity, deal close rate |
| VP Engineering | Platform quality | Technical debt reduction, team retention |
| VP Marketing | Brand awareness | Lead generation, conversion metrics |
| CPO | User value | Feature adoption, retention, NPS |
| CFO | Profitability | Margin improvement, cost control |
| CEO | Company trajectory | Board narrative, fundraising story |

### How to use the map

- **Frame your proposal in their optimization terms.** Don't pitch "better UX" to the VP of Sales. Pitch "shorter sales cycle because the demo is more compelling."
- **Anticipate objections** by understanding what each person is protecting.
- **Find the shared incentive.** There's usually one metric or outcome that aligns 2-3 key stakeholders. Lead with that.
- **Acknowledge the tension.** "I know this creates short-term pressure on [their metric]. Here's why the long-term payoff justifies it."

---

## The Pre-Mortem

Before launching anything significant, run a pre-mortem. More useful than post-mortems because you can still act on the findings.

### The exercise

1. **Set the scene.** "It's 3 months from now. This project has failed completely. What happened?"
2. **Individual brainstorm** (5 min). Each person writes failure scenarios independently. No discussion yet.
3. **Share and cluster** (15 min). Read them aloud, group by theme.
4. **Assess likelihood and impact** (10 min). Which failures are most likely? Most damaging?
5. **Mitigate** (20 min). For the top 3-5 risks: what concrete action reduces the probability or impact?

### Why it works better than "what are the risks?"

- Asking "what could go wrong" triggers defensive thinking. People protect their work.
- Asking "imagine it already failed" gives permission to name uncomfortable truths.
- The framing as a past event makes abstract risks feel concrete.

### Common pre-mortem findings

- "We launched without checking if [upstream dependency] was ready"
- "The customer segment we assumed would adopt didn't, because [unvalidated assumption]"
- "The team burned out because scope expanded without timeline adjustment"
- "We didn't have a rollback plan and the migration was irreversible"

---

## Decision Documentation

Record decisions, not just outcomes. Future you needs to know WHY, not just WHAT.

### The one-line format

```
[Date] Decision: [what]. Reason: [why]. Alternatives considered: [what was rejected and why]. Owner: [who].
```

### Example

```
2026-03-15 Decision: Use polling instead of WebSockets for dashboard updates.
Reason: 95% of users check dashboard <3x/day; WebSocket infrastructure cost not justified for this usage pattern.
Alternatives: WebSockets (rejected: infrastructure cost, operational complexity for low-frequency use case), SSE (rejected: inconsistent browser support for our target market).
Owner: Sarah Chen.
```

### Where decisions live

- **Not in Slack.** Decisions in Slack are decisions that never happened. They're unsearchable, lack context, and get overwritten by the next conversation.
- **In the spec or project doc** for project-scoped decisions.
- **In an ADR (Architecture Decision Record)** for technical decisions with long-term implications.
- **In a decision log** for team-level decisions that span projects.

### The decision review cadence

Quarterly, review the last quarter's significant decisions. Which ones held up? Which ones need revisiting? This builds organizational judgment over time.
