# Acumen

Product fluency for AI. 1 skill, 15 commands, and curated anti-patterns for sharp product thinking.

## Why Acumen?

[Impeccable](https://github.com/pbakaus/impeccable) taught AI to generate sophisticated frontend design. Acumen does the same for product management.

Every LLM learned from the same generic templates. Without guidance, you get the same predictable product slop: vague value props, demographic personas, vanity metrics, feature checklists with no thesis, and specs that could belong to any company.

Acumen fights that bias with:
- **A core skill** with 7 domain-specific reference documents ([view source](source/skills/product-thinking/))
- **15 commands** organized in 5 layers — from context gathering to shipping changelogs
- **12 named anti-patterns** ("AI Product Slop") that explicitly tell the AI what NOT to produce

## What's Included

### The Skill: product-thinking

A comprehensive product skill with 7 deep-dive references ([view skill](source/skills/product-thinking/SKILL.md)):

| Reference | Covers |
|-----------|--------|
| [Problem Discovery](source/skills/product-thinking/reference/problem-discovery.md) | JTBD, Five Whys, Switch Framework, interview anti-patterns |
| [User Segmentation](source/skills/product-thinking/reference/user-segmentation.md) | Behavioral cohorts, personas, anti-personas, journey mapping |
| [Prioritization & Strategy](source/skills/product-thinking/reference/prioritization-strategy.md) | ICE/RICE limitations, sequencing logic, regret minimization |
| [Metrics & Measurement](source/skills/product-thinking/reference/metrics-measurement.md) | Metric trees, counter-metrics, leading indicators, north stars |
| [Specification Craft](source/skills/product-thinking/reference/specification-craft.md) | Working backward, acceptance criteria, edge case categories |
| [Stakeholder Alignment](source/skills/product-thinking/reference/stakeholder-alignment.md) | DACI, disagree-and-commit, managing upward, pre-mortems |
| [Competitive Intelligence](source/skills/product-thinking/reference/competitive-intelligence.md) | Moat analysis, win/loss, competitive response playbooks |

### 15 Commands in 5 Layers

#### Context Layer (build & maintain product knowledge)

| Command | What it does |
|---------|--------------|
| `/teach-acumen` | One-time setup: gather product context, save to `.acumen.md` |
| `/scout` | Build and maintain a living competitor map (includes deep analysis mode) |
| `/persona` | Build behavioral personas from real user patterns |
| `/features` | Build a lightweight feature inventory from the codebase |
| `/update-acumen` | Fetch latest skills from GitHub and sync locally (source, .agents, .claude) |

#### Audit Layer (assess product health)

| Command | What it does |
|---------|--------------|
| `/orientation` | Audit product identity: thesis coherence, persona alignment, surface coherence, positioning accuracy |
| `/defensibility` | Audit moats: network effects, data advantages, switching costs, where to build more |

#### Ideate Layer (find problems and opportunities)

| Command | What it does |
|---------|--------------|
| `/diagnose` | Find problems based on data, value delivery per persona, feature health. Suggests `/workshop` |
| `/measure` | Check KPI health: what's working, what's not, where to dig deeper. Suggests `/workshop` |
| `/workshop` | Ideation workshop: value chain analysis, competitive gaps, user feedback synthesis |

#### Craft Layer (build product artifacts)

| Command | What it does |
|---------|--------------|
| `/roadmap` | Plan a sequence of bets as a todo of shippable increments |
| `/increment` | Scope a shippable increment end-to-end: spec, implementation, wireframes. Leads to `/critique-product` |
| `/critique-product` | Evaluate and validate a PM artifact: score, test assumptions, verdict |

#### Communicate Layer (share with the world)

| Command | What it does |
|---------|--------------|
| `/narrate` | Write product communication for any audience: execs, engineers, customers, investors |
| `/changelog` | Write a changelog from recent PRs, grounded in feature context. Text and video script |

#### Usage Examples

**`/diagnose`** - Find the real problem
```
/diagnose why churn spiked in Q1
/diagnose onboarding drop-off
```

**`/orientation`** - Audit product identity
```
/orientation
/orientation after the pivot
```

**`/workshop`** - Ideate on opportunities
```
/workshop integration onboarding
/workshop expanding into enterprise
```

**`/increment`** - Scope a shippable increment
```
/increment self-serve team onboarding
/increment real-time collaboration on dashboards
```

**`/changelog`** - Write a changelog
```
/changelog last 7 days
/changelog since v2.1
```

**`/critique-product`** - Score and validate an artifact
```
/critique-product the PRD I just wrote
/critique-product our Q3 roadmap
```

### Anti-Patterns: AI Product Slop

The skill includes 12 explicit tells of AI product slop:

1. **Template Filler** - Every section filled, none specific to this product
2. **Demographic Persona** - "Marketing Manager, 28-35" instead of behavioral segments
3. **Inverted Solution** - Problem statement is the solution described negatively
4. **Vanity Metric** - Success measured by things that always go up
5. **Feature Checklist** - Flat list with no sequencing or thesis
6. **Generic Risk** - "Technical complexity" appears in every project
7. **Tautology Story** - User story restates the feature
8. **Restated Criteria** - Acceptance criteria that restate requirements
9. **Strategy of Everything** - Lists every direction without choosing
10. **Feature Roadmap** - Timeline of features with no connecting thesis
11. **Hedge Document** - Every recommendation qualified into meaninglessness
12. **Consensus Document** - Designed to be inoffensive rather than useful

## Architecture

```
source/                          # Source of truth
  skills/
    product-thinking/            # Core skill (not user-invocable)
      SKILL.md
      reference/                 # 7 domain-specific reference docs
    teach-acumen/SKILL.md        # Context: setup
    scout/SKILL.md               # Context: competitors (+ deep analysis)
    profile/SKILL.md             # Context: personas
    features/SKILL.md            # Context: features
    update-acumen/SKILL.md       # Context: sync skills from GitHub
    orientation/SKILL.md         # Audit: product identity
    defensibility/SKILL.md       # Audit: moats
    diagnose/SKILL.md            # Ideate: find problems
    measure/SKILL.md             # Ideate: KPI health check
    workshop/SKILL.md            # Ideate: opportunity exploration
    roadmap/SKILL.md             # Craft: sequence bets
    increment/SKILL.md           # Craft: scope increment
    critique-product/            # Craft: evaluate & validate
      SKILL.md
      reference/                 # Scoring rubric + reviewer personas
    narrate/SKILL.md             # Communicate: write for audience
    changelog/SKILL.md           # Communicate: write changelog

.agents/skills/                  # Agent Skills spec (generic)
.claude/skills/                  # Claude Code (symlinks to .agents/)
```

## Context Files (per-project, gitignored)

| File | Maintained by | Purpose |
|------|--------------|---------|
| `.acumen.md` | `/teach-acumen` | Product context |
| `.acumen/competitors.md` | `/scout` | Living competitor map |
| `.acumen/personas.md` | `/persona` | Behavioral personas |
| `.acumen/features.md` | `/features` | Feature inventory |
| `.acumen/value-chain.md` | `/teach-acumen`, `/profile`, `/workshop` | Value chain map per persona |
| `.acumen/sources.md` | `/teach-acumen` | Data source configuration |
| `.acumen/reports/` | `/diagnose`, `/measure`, `/workshop` | Point-in-time analysis reports |

## Installation

### Claude Code

```bash
# Project-specific
cp -r .claude your-project/
cp -r .agents your-project/

# Or global
mkdir -p ~/.claude/skills
cp -r .agents/skills/* ~/.claude/skills/
```

### Other AI Tools

Copy the `.agents/skills/` directory into your tool's skill location. Skills follow the [Agent Skills spec](https://agentskills.io/specification).

## Usage

Once installed, start with setup:

```
/teach-acumen              # One-time: gather product context
/scout                     # Build competitor map
/persona                   # Build personas
/features                  # Inventory features
```

Then audit to understand where you are:

```
/orientation               # Is the product coherent?
/defensibility             # What's hard to copy?
```

Then ideate and build:

```
/diagnose                  # Find the real problem
/measure                   # Check KPI health
/workshop                  # Explore opportunities
/roadmap                   # Sequence the work
/increment                 # Scope an increment
/critique-product          # Score and validate before shipping
```

And communicate:

```
/narrate                   # Write for any audience
/changelog                 # Write a changelog
```

## Design Principles

1. **Mindset injection > workflow templates** - Skills set a thinking posture, not process steps
2. **Opinion > comprehensiveness** - "RICE doesn't ship products, judgment does"
3. **Brevity > coverage** - 50-100 lines per skill, depth in reference docs
4. **Context layer feeds everything** - Not passive storage, active inputs
5. **Vocabulary calibration** - Replace AI slop with product-fluent language
6. **Natural flow** - Skills suggest the next skill: diagnose -> workshop -> increment -> critique

## License

Apache 2.0. See [LICENSE](LICENSE).

Inspired by [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus.
