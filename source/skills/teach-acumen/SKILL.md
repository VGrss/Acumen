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

### Value Chain
- What does the user do before and after using the product? Walk me through the full workflow end-to-end.
- Where in that workflow does the product bring value? Where is the user on their own (manual steps, other tools)?
- Are there different workflows per user type?

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

### Data Sources
- **Analytics**: What analytics tool do you use? (PostHog, Amplitude, Mixpanel, GA, other) How is it accessed? (MCP server, API, dashboard URL)
- **Database**: What database holds user/product data? (Supabase, Postgres, Planetscale, other) Is there read access available? (MCP server, read replica, direct connection)
- **Backlog**: Where does the product backlog live? (Linear, Notion database, Jira, GitHub Issues, other) How is it accessed? (MCP server, API, URL)

Skip questions where the answer is already clear from the codebase exploration.

## Step 3: Write Product Context

Synthesize your findings and the user's answers into `.acumen.md` in the project root:

```markdown
# Product Context

_Last updated: [date]_

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

## Data Sources
[Analytics, database, and backlog tools — what they are, how they're accessed, what key data they hold]
```

If `.acumen.md` already exists, update sections in place.

## Step 4: Seed the Acumen Directory

Create the `.acumen/` directory with placeholder files:

- **`.acumen/competitors.md`**: Empty with header `# Competitor Map` and note: "Run /scout to build this out."
- **`.acumen/personas.md`**: Empty with header `# Personas` and note: "Run /persona to build this out."
- **`.acumen/features.md`**: Empty with header `# Feature Inventory` and note: "Run /features to build this out."
- **`.acumen/value-chain.md`**: Value chain map based on the user's answers. See format below.
- **`.acumen/sources.md`**: Structured data sources file based on the user's answers. See format below.

If any file already exists, leave it untouched.

### `.acumen/value-chain.md` Format

```markdown
# Value Chain

_Last updated: [date]_

The end-to-end workflow showing where the product sits in each persona's job. One unified chain with persona-specific annotations.

## Workflow Steps

| Step | What happens | Persona(s) involved | Our role | Current tool / method | Friction / workaround |
|------|-------------|---------------------|----------|----------------------|----------------------|
| 1. [Step name] | [Description] | [Persona A, Persona B] | Own / Assist / None | [Tool or manual] | [Pain point if any] |
| 2. ... | | | | | |

## Where We Bring Value

Steps where the product owns or significantly assists the workflow. Note the value delivered and how it's measured.

## Extension Points

Steps where the persona switches tools, does manual work, or loses time. These are potential expansion opportunities for the product.

## Persona Paths

If personas follow different workflows, note the divergence points and why.
```

If the user cannot describe the workflow in detail, seed the file with what's known from the codebase and mark gaps with "Unknown — needs discovery." This file will be enriched by `/profile` and `/workshop` as understanding deepens.

### `.acumen/sources.md` Format

```markdown
# Data Sources

Sources of real data available to product skills. Each source declares what it is, how to access it, and what key data it holds.

## Analytics
<!-- Tool used to track product usage -->

- **Tool**: [PostHog / Amplitude / Mixpanel / GA / other]
- **Access**: [MCP server name / API / dashboard URL / manual]
- **Key events**: [signup, feature_used, checkout, etc.]
- **Key dashboards**: [retention, activation funnel, etc.]

## Database
<!-- Primary data store for users and product data -->

- **Tool**: [Supabase / Postgres / Planetscale / other]
- **Access**: [MCP server name / read replica / manual query]
- **Key tables**: [users, subscriptions, usage_logs, etc.]
- **Read-only**: [yes / no]

## Backlog
<!-- Where product work is tracked -->

- **Tool**: [Linear / Notion / Jira / GitHub Issues / other]
- **Access**: [MCP server name / API / URL / manual]
- **Project / space**: [project identifier]
- **Key views**: [triage, in progress, shipped, etc.]
```

If the user has no tool for a category, omit that section entirely. Do not fill with "Unknown — needs setup."

## Step 5: Next Steps

Confirm completion and tell the user:

> Product context saved to `.acumen.md`. Value chain mapped in `.acumen/value-chain.md`. Data sources captured in `.acumen/sources.md`. Three living knowledge files are ready to build:
>
> - `/scout` — map your competitive landscape
> - `/persona` — build behavioral personas from real user patterns
> - `/features` — inventory your feature surface
>
> Skills like `/diagnose`, `/measure`, and `/persona` will use your configured data sources to pull real data instead of relying on narrative alone.
>
> Run any of these now, or come back to them as needed. They stay current by being re-run.

**NEVER**:
- Invent product details the user didn't confirm
- Write aspirational strategy the codebase doesn't support
- Include filler sections — if something is unknown, say "Unknown — needs discovery"
- Skip the codebase scan and jump straight to questions
