---
name: teach-acumen
description: One-time setup that gathers product context for your project and saves it to .acumen.md. Run once to establish persistent product guidelines.
user-invocable: true
---

Gather product context for this project, then persist it for all future sessions.

## Step 1: Explore the Codebase

Before asking questions, thoroughly scan the project to discover what you can:

- **README and docs**: Project purpose, target audience, stated goals
- **Database schema**: Models, relationships, what data matters
- **API routes and actions**: What the product actually does, core workflows
- **Analytics / tracking**: What's measured today, event names, funnels
- **Existing specs or PRDs**: Past decisions, constraints, product language
- **Package.json / config**: Dependencies that hint at product capabilities (payments, auth, notifications, etc.)

Note what you've learned and what remains unclear.

## Step 2: Ask Product-Focused Questions

Ask the user directly. Focus only on what you couldn't infer from the codebase:

### Users & Market
- Who uses this? What job are they hiring it to do?
- Who else gets hired for the same job? (Direct competitors, spreadsheets, manual processes, doing nothing)
- What's the switching cost away from you?

### Business Model
- How does it make money? (Or how will it?)
- What stage is the product in? (Pre-launch, finding PMF, scaling, mature)
- Top 3 goals for the next quarter

### Strategy
- What's the opinionated bet this product makes? (The thing competitors won't or can't do)
- What are you deliberately NOT building?
- Biggest risk to the product right now

### Metrics
- What's measured today? What should be?
- North star metric (the single number that best captures value delivered)
- How do you define success for a feature?

### Feedback Source
- Where does user feedback live? (Linear, Notion, Slack channel, local file, interviews, support tickets, other)
- How often is it reviewed?

Skip questions where the answer is already clear from the codebase exploration.

## Step 3: Write Product Context

Synthesize your findings and the user's answers into `.acumen.md` in the project root:

```markdown
# Product Context

## Users
[Who they are, the job to be done, switching costs]

## Market Position
[Competitors hired for the same job, differentiation, moat]

## Business Model
[Revenue model, stage, top goals]

## Product Strategy
[Opinionated bet, deliberate exclusions, biggest risk]

## Success Metrics
[North star, what's measured, success definition for features]

## Constraints
[Technical, resource, timeline, regulatory — anything that shapes decisions]

## Feedback Source
[Where feedback lives, how it's accessed, review cadence]
```

If `.acumen.md` already exists, update sections in place.

## Step 4: Seed the Acumen Directory

Create the `.acumen/` directory with placeholder files:

- **`.acumen/competitors.md`**: Empty with header `# Competitor Map` and note: "Run /scout to build this out."
- **`.acumen/personas.md`**: Empty with header `# Personas` and note: "Run /profile to build this out."
- **`.acumen/features.md`**: Empty with header `# Feature Inventory` and note: "Run /catalog to build this out."

If any file already exists, leave it untouched.

## Step 5: Next Steps

Confirm completion and tell the user:

> Product context saved to `.acumen.md`. Three living knowledge files are ready to build:
>
> - `/scout` — map your competitive landscape
> - `/profile` — build behavioral personas from real user patterns
> - `/catalog` — inventory your feature surface
>
> Run any of these now, or come back to them as needed. They stay current by being re-run.

**NEVER**:
- Invent product details the user didn't confirm
- Write aspirational strategy the codebase doesn't support
- Include filler sections — if something is unknown, say "Unknown — needs discovery"
- Skip the codebase scan and jump straight to questions
