---
name: narrate
description: Write product communication for a specific audience, including when stakes are high and stakeholders disagree. Use for exec summaries, eng briefs, customer announcements, or tradeoff negotiations.
user-invocable: true
argument-hint: "[audience] [topic]"
---

# Narrate

## Preparation

Before anything else, invoke `/product-thinking` to load strategic context, user segments, and current product landscape. Communication without context is just words arranged nicely.

## Mindset

Write for the audience, not for the record. An exec summary is not a PRD with details removed. An engineering brief is not a strategy deck with code references added. Each audience has a different decision to make, a different vocabulary, and a different tolerance for detail.

And when stakeholders disagree, map incentives, not positions. What someone says they want and what they actually optimize for are often different things.

## Core Reflex

Identify the audience and the decision they need to make. Strip everything that doesn't serve that decision. Then change three things:

1. **Vocabulary** — match the audience's language. Execs think in bets and returns. Engineers think in constraints and tradeoffs. Customers think in outcomes. Investors think in markets and moats.
2. **Altitude** — execs want the 30,000-foot view with one zoom-in on the riskiest part. Engineers want ground-level specifics with one zoom-out on why it matters. Customers want eye-level: what changed, what they can do.
3. **Structure** — lead with what the audience cares about most. For execs, the decision. For engineers, the scope. For customers, the benefit. For investors, the opportunity.

## Five Formats

### 1. Executive (1 page max)

**Structure**: The bet, why now, expected outcome, what you need from them.

Lead with the decision, not the context. They have 5 minutes and 12 other things competing for attention. If the first paragraph doesn't tell them what you want and why it matters, they'll skim the rest — and you'll get a non-answer.

- **The bet**: one sentence on what you're proposing and the expected return
- **Why now**: what changed that makes this urgent — market shift, competitive move, data inflection
- **Expected outcome**: specific metrics with timelines, not vague improvement
- **The ask**: what you need — budget, headcount, prioritization call, sign-off

No appendices. No "for more detail, see..." If it needs an appendix, the summary failed.

### 2. Engineering Brief

**Structure**: Problem, constraints, scope boundaries, open questions, what's NOT in scope.

Engineers need to estimate, design, and identify risks. Give them boundaries, not motivation speeches. "This will delight users" is irrelevant. "This must handle 10K concurrent connections with <200ms p99" is useful.

- **Problem**: what the system needs to do that it doesn't do today
- **Constraints**: performance, compatibility, security, infrastructure limits
- **Scope boundaries**: what's in v1, what's explicitly deferred, what's never
- **Open questions**: things PM hasn't decided yet (be honest about these)
- **Not in scope**: say it explicitly so nobody builds it by accident

### 3. Customer Communication

**Structure**: What changed, what you can do now, how to get started.

Customers care about what they can DO, not what you built. "We rebuilt our notification pipeline using event-driven architecture" means nothing to them. "You can now get alerts in Slack within 30 seconds" means everything.

- **What changed**: one sentence, benefit-first
- **What you can do now**: concrete capabilities, not feature names
- **How to get started**: the literal next step — a link, a setting, an action
- No jargon. No internal feature names. No "we're excited to announce."

### 4. Investor Update

**Structure**: Market shift, traction proof, what you're building next, why you win.

Investors care about market size and defensibility, not features. They want to know the market is big, you're capturing it, and your position is getting harder to replicate.

- **Market shift**: what changed in the market that makes your timing right
- **Traction proof**: numbers with context — growth rate, retention, revenue, cohort data
- **What's next**: the strategic move, not the feature list
- **Why you win**: moat, unfair advantage, compounding dynamics

### 5. Tradeoff / Negotiation

**Structure**: The tension, stakeholder map, options table, recommendation, disagree-and-commit path.

Use this when stakeholders disagree and a decision is stuck. The goal is not to win the argument — it's to make the tradeoffs visible so someone with authority can make an informed call.

- **The tension**: what two things are in conflict and why you can't have both
- **Stakeholder map**:

| Stakeholder | Stated preference | Underlying incentive | Veto power? |
|-------------|------------------|---------------------|:-----------:|
| | | | |

Everyone says "best for the user." Find what they actually optimize for — their team's roadmap, their quarterly target, their promotion case, their technical preference. This isn't cynical. It's honest.

- **Options table**:

| Option | Upside | Downside | Who wins | Who loses |
|--------|--------|----------|----------|-----------|
| | | | | |

- **Recommendation**: which option and why, stated clearly
- **Disagree-and-commit path**: if the decision goes another way, what does the team commit to and what's the review point?

## Key Heuristics

- **Exec**: they have 5 minutes. Lead with the decision, not the context. If they want more detail, they'll ask.
- **Engineering**: they need scope boundaries, not motivation speeches. Telling engineers "this will change everything" makes them trust you less.
- **Customer**: they care about what they can DO, not what you built. Feature names are for your team. Outcomes are for your users.
- **Investor**: they care about market size and defensibility, not features. A feature list is a to-do list. A market thesis is an investment thesis.
- **Negotiation**: everyone says "best for the user" — find what they actually optimize for. The fastest way to unstick a decision is to make the real tradeoffs visible.
