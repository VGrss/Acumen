---
name: defensibility
description: Audit what's hard to copy — moats, switching costs, data advantages, network effects, and AI-era resilience. Use when deciding where to invest, after a competitor move, or before fundraising.
user-invocable: true
argument-hint: "[area or question]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

Features can be copied in a quarter. Moats take years to build — if they can be built at all. Defensibility is the audit that tells you where your product is genuinely hard to replicate, where it's vulnerable, and where to concentrate effort to widen the gap.

Most products have less defensibility than their founders think. Brand is not a moat unless switching costs are high. "First mover" is not a moat unless you've converted the head start into something structural. Be honest. The point is not to feel good — it's to know where to build.

In the AI era, a new class of threats has emerged: agents that can automate workflows, commoditize integrations, and make context portable. This audit evaluates both classical moats and AI-era resilience.

## Context Pull

1. **Product context.** Read `.acumen.md` — strategy, stage, positioning.
2. **Competitors.** Read `.acumen/competitors.md` — what competitors have, their moats, recent moves.
3. **Features.** Read `.acumen/features.md` — current capabilities and their maturity.
4. **Personas.** Read `.acumen/personas.md` — who depends on us and why they'd stay or leave.
5. **Value chain.** Read `.acumen/value-chain.md` — where the product sits in each persona's workflow. Use this directly for Section 4 (Value Chain Analysis) and Section 5 (Switching Cost Anatomy).

## Framing

Before analysis, establish scope. If the user hasn't specified, ask — one question at a time:

**Q1 — Object of analysis:**
> "What exactly are we analyzing? An isolated feature, a product increment (EPIC), a feature set, or the product as a whole?"

**Q2 — Perceived threat:**
> "What's your main concern? Agentic AI erosion? A specific competitor? General market commoditization?"

If the user has already provided this context in the conversation, in an EPIC, or in `.acumen.md` — extract directly, don't re-ask.

## Core Protocol

### 1. AI-Era Moat Dimensions

Evaluate each of the 7 dimensions below (ordered from most vulnerable to most durable). This framework draws on "Software Moats in the AI Era" (Emergence Capital).

| #  | Dimension            | Summary                                                                  | Trend |
|----|----------------------|--------------------------------------------------------------------------|-------|
| 01 | **Workflow**         | If agents do the work, human workflow stickiness erodes                  | Erosion |
| 02 | **Integrations**     | MCP commoditizes glue code between systems                              | Erosion |
| 03 | **Data Repository**  | Static datastores lose value without context                            | Vulnerable |
| 04 | **System of Action** | Touching money, customers, real outcomes                                | Resilient |
| 05 | **Full Context**     | The strongest moat — but vulnerable if context becomes portable          | Resilient (conditional) |
| 06 | **Brand**            | Survives every platform shift. Trust can't be replicated with better tech | Durable |
| 07 | **Network Effects**  | Data/trust-based NE accelerate with agents; workflow-based NE are vulnerable | Durable (if well-typed) |

For each dimension, provide:

1. **Score (1–5)**
2. **Justification** — 2–3 sentences, why this score.
3. **Erosion risk** — The concrete scenario in which this moat could fall.
4. **Early warning signal** — The leading indicator that erosion is starting.

#### Scoring scale

- **1** = No contribution to this dimension. Total vulnerability.
- **2** = Weak or easily replicable contribution.
- **3** = Moderate contribution. Defensible short-term.
- **4** = Strong contribution. Significant advantage.
- **5** = Exceptional contribution. Deep moat on this dimension.

#### Evaluation guide per dimension

**01 — Workflow**
- Does the feature set impose a specific human workflow?
- Could this workflow be fully automated by an agent?
- Is the user sticky because of the workflow or because of the value?
- High score = the product stays relevant EVEN IF the workflow is automated

**02 — Integrations**
- Does the product derive value from being connected to other systems?
- Are integrations deep (business logic) or shallow (CRUD APIs)?
- Could MCP or equivalent replace this glue layer?
- High score = integrations with deep business logic, not just data passing

**03 — Data Repository**
- Does the product store unique data that's hard to reproduce?
- Does this data have value WITHOUT the product's context?
- Could an agent reconstitute this database by crawling/aggregating?
- High score = proprietary data, enriched over time, losing value outside context

**04 — System of Action**
- Does the product directly touch money, customers, or real outcomes?
- Are there irreversible consequences to actions taken in the product?
- Is the product the system of record for critical decisions?
- High score = the product IS where consequential decisions execute

**05 — Full Context**
- Does the product accumulate rich context about the user/organization?
- Is this context exportable/portable to another tool?
- Does context self-enrich with usage (flywheel)?
- High score = deep, self-enriching context, hard to export in full richness

**06 — Brand**
- Does the product benefit from a trust brand in its domain?
- Would users choose this product on trust even if a competitor had better tech?
- Is the brand associated with domain-specific expertise?
- High score = strong brand, category synonym, trust that transcends tech

**07 — Network Effects**
- Does the product's value increase with more users?
- Are NE based on data/trust (durable) or workflow (vulnerable)?
- Could an agent accelerate or short-circuit these NE?
- High score = NE based on unique human contributions, accelerated by agents

### 2. Classical Moat Inventory

Complement the AI-era dimensions with a traditional moat check. Evaluate each and name the specific mechanism — not just "present."

| Moat Type | Definition | Assessment |
|-----------|-----------|------------|
| **Switching costs** | What would a user lose by leaving? Integrations, learned workflows, historical data, team configurations, content they've created? | High / Medium / Low |
| **Scale economics** | Does unit cost decrease meaningfully with growth? Does serving 10x users cost 10x more or 2x more? | Significant / Marginal / None |
| **Distribution** | Do you have a channel that competitors can't easily replicate? Partnerships, integrations, organic loops? | Unique / Shared / None |
| **Regulatory or structural** | Certifications, patents, exclusive partnerships, compliance requirements that create barriers? | Present / Absent |

### 3. Vulnerability Scan

For each area where defensibility is low:

- **What's exposed?** Which features or capabilities could a well-funded competitor replicate?
- **How fast?** Weeks, months, or quarters to copy?
- **What's the trigger?** What market event would cause a competitor to attack this area?
- **Who's most likely?** Name the specific competitor (from `.acumen/competitors.md`) and their incentive.

### 4. Value Chain Analysis

Pull from `.acumen/value-chain.md`. The persisted value chain already maps the full workflow per persona. Analyze it through a defensibility lens:

- **Coverage** — How many steps of the chain does the product own vs. assist vs. not touch?
- **Upstream control** — Who controls what happens before the user reaches the product? Could they expand into our space?
- **Downstream control** — Who controls what happens after? Same risk.
- **Chain depth** — Products that own more of the value chain are harder to displace. Products that sit in the middle with open APIs on both sides are easy to route around.

If `.acumen/value-chain.md` doesn't exist, map the chain ad-hoc using the upstream/product/downstream framework.

### 5. Switching Cost Anatomy

For each primary persona, detail what they would lose by leaving:

- **Data** — Can they export everything? In what format? How painful is migration?
- **Workflows** — How much have they customized? How long did it take to set up?
- **Integrations** — What's connected? How hard is reconnection?
- **Team knowledge** — How much has the team invested in learning this product?
- **Content** — What have they created inside the product that can't easily move?

High switching costs are a moat. But they're also a responsibility — users who feel trapped become resentful. The best switching costs are the ones users create voluntarily because the product rewards investment.

## Output Format

### Defensibility Summary

One paragraph: overall defensibility posture. Is this product easy to copy, moderately defended, or structurally hard to displace? Specifically address AI-era resilience.

### AI-Era Heat Map

Represent scores visually:

```text
EROSION <————————————————————————————> DURABLE

01 Workflow         [██░░░] 2/5
02 Integrations     [███░░] 3/5
03 Data Repository  [████░] 4/5
04 System of Action [█████] 5/5
05 Full Context     [████░] 4/5
06 Brand            [██░░░] 2/5
07 Network Effects  [███░░] 3/5

———— Overall score: 23/35
```

### Defensibility Verdict

| Overall Score | Category          | Meaning                                                      |
|--------------:|-------------------|--------------------------------------------------------------|
| 28–35         | **Fortress**      | Multi-dimensional defensibility. Very strong position.       |
| 21–27         | **Solid position**| Good fundamentals, but exposed flanks.                       |
| 14–20         | **Contested ground** | Defensible short-term, vulnerable medium-term.            |
| 7–13          | **Open ground**   | Very little defensibility. High commoditization risk.        |

### 3 Strategic Questions

Always answer these three, with a reasoned argument for each:

1. **"If an AI agent could do 80% of what this product does, why would a user stay?"** — Identify what survives automation.
2. **"What moat are we actively building vs. inheriting?"** — Distinguish intentionally built advantage from inertia.
3. **"In 24 months, will this feature set be an AI accelerator or an AI replacement candidate?"** — Assess whether the product positions as complement or target of agentic AI.

### Classical Moat Scorecard

| Moat Type | Status | Mechanism | Strength |
|-----------|--------|-----------|----------|
| Switching costs | High / Medium / Low | [specific mechanism] | Strong / Moderate / Weak |
| Scale economics | | | |
| Distribution | | | |
| Regulatory/structural | | | |

### Vulnerability Map

| Exposed Area | Replication Time | Most Likely Attacker | Trigger Event |
|-------------|-----------------|---------------------|---------------|
| | | | |

### Where to Build More

Prioritized recommendations (3–5) for strengthening defensibility. For each:
- **Action** — What to do concretely
- **Dimension reinforced** — Which moat(s) this strengthens
- **Effort** — S / M / L
- **Urgency** — Immediate / This quarter / This half
- **Risk of inaction** — What happens if you don't act
- **Suggested next step** — Which Acumen command to run (`/workshop`, `/increment`, `/roadmap`)

### Where NOT to Build

Areas where chasing defensibility would be a waste — either the moat type doesn't apply to this product, or the cost exceeds the benefit. Name them explicitly so the team doesn't pursue them.

---

## Mandatory Challenge Phase

**This phase is MANDATORY and non-negotiable.**
It cannot be shortened, reframed as positive, or omitted to "not discourage."
A moat that doesn't survive critical examination is not a moat.
The goal is not to demoralize but to force honest thinking before the market does it for you.
This phase should be uncomfortable to read.

---

### Challenge 1 — The 18-Month Disruption Scenario

Build a concrete, plausible narrative scenario of commoditization or obsolescence within the next 18 months. The scenario must:

- Name a credible actor (not "a generic competitor" — an OpenAI, a Google, a bootstrapped clone, an open-source agent)
- Describe the precise sequence of events
- Identify the tipping point where the user starts to churn
- Assess the probability (low / moderate / high) and speed (slow / fast / brutal)

> Format: *"In 18 months, [actor] launches [product/feature]. The moment [analyzed product] starts losing is when [trigger event]. The probability is [X] because [reason]."*

### Challenge 2 — The Founder Test

> *"A well-funded competitor ($10M raised this month) has decided to specifically attack your main moat. What do they do?"*

- What's their first action in the first 90 days?
- What sales argument do they use against you?
- In what scenario do they win? In what scenario do they lose?
- What protects you that $10M can't buy?

### Challenge 3 — The Probable Blind Spot

Identify the dimension the user **probably underestimates** — often invisible from inside the product.

Common blind spots:

- **Data Repository overestimation**: lots of data ≠ defensible data. If it has value outside context, it can be recreated.
- **Workflow / Full Context confusion**: a complex workflow is not context. If the workflow changes (agents), the "moat" evaporates.
- **Local brand vs scalable brand**: reputation in a niche segment is not a defensible brand at scale.
- **Coordination NE vs data NE**: if NE rely on human coordination, they're vulnerable as soon as an agent coordinates in their place.

Identify the most probable blind spot for **this specific product** and argue why.

### Challenge 4 — Main Moat Stress Test

Take the **highest-scored dimension** and build the strongest argument for its collapse:

- What implicit assumption does this moat rely on?
- What technological, regulatory, or behavioral evolution would invalidate that assumption?
- Is there a historical precedent of a similar moat collapsing?
- If this moat fell, what's left?

### Challenge 5 — The Uncomfortable Question

Conclude with **one single sharp question** that the user has no easy answer to. It must:

- Point to the deepest structural vulnerability
- Have no immediately reassuring answer
- Force a strategic decision, not just reflection

> *Examples:*
> - "If Claude could do 90% of what your product does tomorrow, what argument would you give for not switching?"
> - "Your main moat relies on the assumption that [X]. What have you concretely done to test it?"
> - "If the context accumulated in your product became exportable via an open standard tomorrow, what would remain?"

---

## Combining with Other Skills

- **After `/increment`** — Use the increment's context as direct input. Don't re-ask what's already documented.
- **After `/scout`** — Pull competitor moats and recent moves from `.acumen/competitors.md` as context for Brand and Network Effects dimensions.
- **Before `/workshop`** — Defensibility gaps are strong workshop inputs for ideation.
- **Before `/roadmap`** — Use "Where to Build More" recommendations to inform prioritization.

---

Be honest. A product with one strong moat and awareness of its vulnerabilities is in a better position than one that claims five moats it doesn't actually have.
