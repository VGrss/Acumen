---
name: persona
description: Build and maintain behavioral personas grounded in real user patterns. Use when launching, after user research, or when user understanding feels stale.
user-invocable: true
argument-hint: "[persona name or user segment]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains product principles and the **Context Gathering Protocol**. Follow the protocol before proceeding — if no product context exists yet, you MUST run /teach-acumen first.

---

Mindset: A persona is a behavior pattern, not a demographic profile. "Batch-processes weekly reports and breaks when export stalls" is a persona. "Sarah, 32, marketing manager" is not.

## Behavior

**When called with a specific persona or user segment**: Build or update that persona. Ask the user what behaviors they've observed, what triggered this, and what signals they're reading.

**When called without argument**: Review all personas for staleness and gaps. Flag personas that feel assumed rather than observed. Identify missing behavior patterns.

## Research Process

1. Read `.acumen.md` for product context — users, job to be done, feedback source, metrics
2. Read `.acumen/personas.md` for existing personas
3. If a feedback source is configured in `.acumen.md`, ask the user to share recent feedback or pull from the configured source to ground personas in real signals
4. For each persona (new or updated), build from behavior outward:
   - What job are they hiring the product to do?
   - What's the context when they use it? (time pressure, environment, emotional state)
   - What's their actual behavior pattern? (frequency, workflow, workarounds)
   - What's the pain that drives them to the product?
   - What does success look like for them? (not for you — for them)
   - What triggers them to start a session?
   - What's their value sensitivity? (price, time, reliability, flexibility)
   - What feedback signal would tell you this persona is happy or churning?

## Output

Write to `.acumen/personas.md`:

```markdown
# Personas

_Last updated: [date]_

## [Persona Name — a behavior, not a demographic]

- **Job**: [What they hire the product to do]
- **Context**: [When, where, under what pressure]
- **Behavior**: [Usage pattern, frequency, workflow]
- **Pain**: [What drove them here, what breaks for them without it]
- **Success**: [What winning looks like from their perspective]
- **Trigger**: [What starts a session — event, schedule, frustration]
- **Value sensitivity**: [What they'd pay for, what they'd leave over]
- **Feedback signal**: [How you'd detect satisfaction or churn for this persona]

## [Next persona...]

## Prioritization
[Which personas matter most right now and why. Not all personas are equal — be explicit about who you're building for first and who you're consciously underserving.]
```

## Maintenance

When refreshing personas:
- Flag personas that are pure assumption with no supporting feedback or data
- Merge personas that describe the same behavior with different demographics
- Split personas that contain contradictory behaviors
- Check the feedback source for new patterns that don't fit existing personas

**NEVER**:
- Write demographic profiles disguised as personas — age, title, and stock photo are not a persona
- Invent behaviors the user hasn't observed or confirmed
- Create more than 5 personas — if you have more, you haven't prioritized
- Treat personas as permanent — they should evolve as the product and user base evolve
- Skip the prioritization section — building for everyone means building for no one
