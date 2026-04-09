# Acumen

Product fluency for AI. 1 skill, 14 commands, and curated anti-patterns for sharp product thinking.

## Why Acumen?

[Impeccable](https://github.com/pbakaus/impeccable) taught AI to generate sophisticated frontend design. Acumen does the same for product management.

Every LLM learned from the same generic templates. Without guidance, you get the same predictable product slop: vague value props, demographic personas, vanity metrics, feature checklists with no thesis, and specs that could belong to any company.

Acumen fights that bias with:
- **A core skill** with 7 domain-specific reference documents ([view source](source/skills/product-thinking/))
- **14 commands** to diagnose, specify, measure, compete, roadmap, validate, and more
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

### 14 Commands

#### Context Layer (build & maintain product knowledge)

| Command | What it does |
|---------|--------------|
| `/teach-acumen` | One-time setup: gather product context, save to `.acumen.md` |
| `/scout` | Build and maintain a living competitor map |
| `/profile` | Build behavioral personas from real user patterns |
| `/features` | Build a lightweight feature inventory from the codebase |

#### Thinking Mode

| Command | What it does |
|---------|--------------|
| `/simulate` | Evaluate a feature/decision AS a specific persona |

#### Steering Commands (create PM artifacts)

| Command | What it does |
|---------|--------------|
| `/diagnose` | Root cause analysis with Five Whys and reframing lenses |
| `/specify` | Write specs that drive good execution, with competitive context |
| `/measure` | Define metrics with baselines, targets, and counter-metrics |
| `/compete` | Deep competitive analysis with JTBD and moat evaluation |
| `/roadmap` | Sequence bets into shippable increments |
| `/validate` | Test the riskiest assumption before building |
| `/critique-product` | Score PM artifacts across 9 dimensions (/36) |
| `/narrate` | Communicate to any audience: execs, engineers, customers, investors |
| `/increment` | Scope a shippable increment end-to-end: context, implementation, wireframes |

#### Usage Examples

**`/diagnose`** - Find the real problem
```
/diagnose why churn spiked in Q1
/diagnose onboarding drop-off
```

**`/specify`** - Write a spec
```
/specify self-serve onboarding for SMB
/specify billing migration to usage-based
```

**`/critique-product`** - Score an artifact
```
/critique-product the PRD I just wrote
/critique-product our Q3 roadmap
```

**`/increment`** - Scope a shippable increment
```
/increment self-serve team onboarding
/increment real-time collaboration on dashboards
```

**`/simulate`** - Think as a persona
```
/simulate power-user reacting to the new pricing page
/simulate ops-manager evaluating the export redesign
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
    scout/SKILL.md               # Context: competitors
    profile/SKILL.md             # Context: personas
    features/SKILL.md            # Context: features
    simulate/SKILL.md            # Thinking mode
    diagnose/SKILL.md            # Steering command
    specify/SKILL.md             # Steering command
    measure/SKILL.md             # Steering command
    compete/SKILL.md             # Steering command
    roadmap/SKILL.md             # Steering command
    validate/SKILL.md            # Steering command
    critique-product/            # Steering command
      SKILL.md
      reference/                 # Scoring rubric + reviewer personas
    narrate/SKILL.md             # Steering command
    increment/SKILL.md           # Steering command

.agents/skills/                  # Agent Skills spec (generic)
.claude/skills/                  # Claude Code (symlinks to .agents/)
```

## Installation

### Claude Code

```bash
# Project-specific
cp -r .claude your-project/
cp -r .agents your-project/

# Or global
cp -r .agents/skills/* ~/.claude/skills/
```

### Other AI Tools

Copy the `.agents/skills/` directory into your tool's skill location. Skills follow the [Agent Skills spec](https://agentskills.io/specification).

## Usage

Once installed, start with setup:

```
/teach-acumen              # One-time: gather product context
/scout                     # Build competitor map
/profile                   # Build personas
/features                  # Inventory features
```

Then use steering commands as needed:

```
/diagnose                  # Find the real problem
/specify                   # Write a spec
/measure                   # Define metrics
/critique-product          # Score your work
```

## Design Principles

1. **Mindset injection > workflow templates** - Skills set a thinking posture, not process steps
2. **Opinion > comprehensiveness** - "RICE doesn't ship products, judgment does"
3. **Brevity > coverage** - 50-100 lines per skill, depth in reference docs
4. **Context layer feeds steering commands** - Not passive storage, active inputs
5. **Vocabulary calibration** - Replace AI slop with product-fluent language

## License

Apache 2.0. See [LICENSE](LICENSE).

Inspired by [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus.
