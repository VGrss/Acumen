---
name: orientation
description: Audit product identity — what we do, for whom, whether the feature surface is coherent with the thesis. Use when the product feels unfocused, after a pivot, or before strategic planning.
user-invocable: true
argument-hint: "[area or question]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

Most products drift. Features accumulate because customers asked, competitors shipped, or someone had a slow week. Over time, the product says it does one thing but actually does twelve — and none of them well enough to be the reason someone chooses it.

Orientation is the audit that catches drift. You are not here to validate. You are here to hold a mirror up and ask: does the product we built match the product we say we are?

## Context Pull

Load everything. This is a read-heavy skill:

1. **Product context.** Read `.acumen.md` — positioning, thesis, stage, target users, strategy.
2. **Feature inventory.** Read `.acumen/features.md` — every capability the product has today.
3. **Personas.** Read `.acumen/personas.md` — who we say we serve, and their behaviors.
4. **Value chain.** Read `.acumen/value-chain.md` — the end-to-end workflow per persona. Use this to check whether features align with the steps where we claim to bring value.
5. **Competitors.** Read `.acumen/competitors.md` — how the market frames us vs. alternatives.

If any context file is missing, flag it. Orientation without a feature inventory or personas is guesswork.

## Core Protocol

### 1. Thesis Check

State the product thesis in one sentence. Then ask:

- Can every feature in the inventory be traced back to this thesis?
- Which features serve the thesis directly? Which serve it indirectly? Which don't serve it at all?
- If you removed the orphan features, would anyone notice? Would retention change?

Features that don't connect to the thesis are either: (a) the thesis is wrong and needs updating, or (b) the feature is drift and should be deprecated or spun out.

### 2. Persona Alignment

For each primary persona in `.acumen/personas.md`:

- Which features serve this persona's core job?
- Which features are irrelevant to them (clutter)?
- Is there a gap — a job this persona needs done that the product doesn't address?
- **Value chain coherence** — Do the features we built match the steps we claim to own in `.acumen/value-chain.md`? Are there chain steps marked as "Own" with no corresponding feature, or features with no chain step?
- Would this persona describe the product the same way the positioning does?

If your primary persona would describe the product differently than your marketing does, you have an orientation problem.

### 3. Surface Coherence

Look at the feature surface as a whole:

- **Breadth vs. depth** — Is the product wide and shallow (many features, none best-in-class) or narrow and deep (few features, each excellent)? Which should it be given the stage and strategy?
- **Entry point clarity** — If a new user lands in the product, do they understand what to do first? Does the product guide them toward the core value or present a wall of options?
- **Feature relationships** — Do features reinforce each other (composable) or exist independently (bolted on)? Composable features compound. Bolted-on features create maintenance burden without compounding value.

### 4. Positioning Test

Take the positioning statement from `.acumen.md`. Test it:

- **Exclusion test** — Does the positioning exclude competitors? If any direct competitor could use the same sentence, it's a category description, not positioning.
- **Feature test** — Could someone use the product for a week and confirm the positioning? Or is it aspirational?
- **Persona test** — Would the primary persona use these words to describe the product to a colleague?

## Output Format

### Product Thesis
One sentence. Pulled from `.acumen.md` or synthesized from context.

### Orientation Score

| Dimension | Assessment | Evidence |
|-----------|------------|----------|
| Thesis coherence | Strong / Drifting / Misaligned | How many features connect vs. orphans |
| Persona alignment | Focused / Scattered / Missing personas | Which personas are well-served vs. underserved |
| Surface coherence | Composable / Fragmented / Cluttered | Whether features reinforce or dilute |
| Positioning accuracy | Accurate / Aspirational / Outdated | Whether the product matches its claim |

### Feature Map

| Feature | Thesis connection | Primary persona served | Assessment |
|---------|------------------|----------------------|------------|
| | Direct / Indirect / Orphan | [persona name] or None | Keep / Evolve / Deprecate / Investigate |

### Drift Zones
Where the product has drifted from its thesis. Be specific — name the features, the personas they serve (if any), and why they exist.

### Gaps
Where the thesis promises something the product doesn't deliver. Missing capabilities that the positioning implies should exist.

### Recommendations
Prioritized list of actions. For each:
- **What**: the specific action
- **Why**: what it fixes in the orientation
- **Suggested next step**: which Acumen command to run (`/workshop`, `/increment`, `/roadmap`)

---

Do not pad. If the product is well-oriented, say so in two paragraphs. The value of this skill is honesty, not volume.
