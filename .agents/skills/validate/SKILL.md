---
name: validate
description: Test the riskiest assumption before building. Use when you need to de-risk a bet, plan user research, or design a lightweight experiment.
user-invocable: true
argument-hint: "[assumption or hypothesis]"
---

# Validate

## Preparation

Before anything else, invoke `/product-thinking` to load strategic context, user segments, and current product landscape. Validation without context is just guessing with a clipboard.

## Context Pull

Read `.acumen/personas.md` to identify who you are testing with. Real validation targets real people, not abstract "users."

Check any configured feedback source (support tickets, interviews, analytics, NPS) for existing signal that already validates or invalidates the assumption. Do not run a test to learn what you already know.

## Mindset

The riskiest assumption gets tested first, with the cheapest method. If you can't be wrong, it's not a hypothesis. If you already have signal, don't re-run the experiment — synthesize what's there.

Validation is not about proving you're right. It's about finding out where you're wrong before you spend engineering time on it.

## Core Reflex

Start by identifying the riskiest assumption — the one that, if wrong, makes everything else irrelevant. Then match the method to the assumption type:

- **Behavioral** (will they actually do X?) — observe actions, not words. Analytics, session recordings, clickstream data. People lie in surveys. They don't lie in logs.
- **Preference** (do they want X over Y?) — ask with commitment attached. "Would you use this?" is worthless. "Would you pay $10/month for this?" has signal. "Here's a signup form" has more.
- **Willingness-to-pay** (will they pay $X?) — test with real money. Pre-orders, pricing pages with real checkout flows, concierge billing. Hypothetical WTP data is fiction.
- **Technical feasibility** (can we build X?) — prototype or spike. Timeboxed. The question is "can we?" not "should we build the whole thing?"
- **Market demand** (does anyone care about X?) — fake door tests, landing pages, waitlists, concierge MVPs. Measure signups, not compliments.

## Key Heuristics

### Define decision criteria BEFORE running the test
"If we see X, we proceed. If we see Y, we pivot. If we see Z, we kill it." Write this down before you have data. Otherwise you'll rationalize whatever you find.

### Check existing signal first
Search feedback, analytics, and prior research before designing a new experiment. Maybe someone in support has heard this exact complaint 200 times. Maybe the data already shows the answer. New research is expensive — mine what you have.

### Cheapest credible method, not most rigorous
You are not writing an academic paper. You need enough confidence to make a decision. A 5-person usability test that reveals a showstopper is worth more than a 500-person survey that reveals nothing actionable.

### "What we learn either way"
A well-designed test teaches something regardless of outcome. If you only learn something when the result is positive, your test is confirmation bias in disguise.

### Sample honestly
Don't test with your power users and call it representative. Don't test with your team and call it user research. Match your sample to the persona you're actually building for.

## Output Format

Structure your response as:

1. **Riskiest assumption** — stated as a falsifiable hypothesis ("We believe [persona] will [behavior] because [reason]")
2. **Existing signal** — what you already know from feedback, analytics, or prior research that relates to this assumption
3. **Target persona** — who specifically you're testing with, pulled from personas.md
4. **Method** — what you'll do, matched to the assumption type above
5. **Decision criteria** — what outcome means go, pivot, or kill — defined before the test runs
6. **Sample and duration** — who, how many, how long, and why that's enough
7. **Cost** — time, money, and opportunity cost of running this test
8. **What we learn either way** — the insight we gain regardless of whether the hypothesis is confirmed or rejected
