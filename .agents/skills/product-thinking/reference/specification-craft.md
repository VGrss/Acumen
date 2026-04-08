# Specification Craft

How to write specs that actually drive good execution. A spec is a decision document, not a description document. If nobody changes their behavior after reading it, it failed.

---

## Choosing the Right Format

| Format | When to Use | Length | Audience | Decision Stage |
|--------|-------------|--------|----------|----------------|
| **One-pager** | Early exploration, getting buy-in, testing an idea | 1-2 pages | Leadership, cross-functional leads | "Should we do this?" |
| **PRD** | Approved feature needing detailed specification | 5-15 pages | Engineering, design, QA | "How should this work?" |
| **Brief** | Cross-functional handoff, external team alignment | 2-4 pages | Teams executing the work | "Here's what we agreed on" |

### The format mismatch anti-pattern

Writing a PRD when you need a one-pager is the most common spec failure. It signals you're solving for detail before solving for direction. If leadership hasn't aligned on the "why," no amount of acceptance criteria will save you.

- **One-pager too early** = you don't know what you're proposing yet. Do more research.
- **PRD too early** = you're over-investing before the idea is validated. Write the one-pager first.
- **Brief too early** = you're handing off something nobody agreed to build.
- **PRD too late** = engineers are already building based on assumptions. You've lost control of scope.

---

## The Working Backward Technique

Amazon's PR/FAQ method forces outcome-first thinking by inverting the normal sequence.

### The structure

1. **Write the press release first.** One page. What shipped, why it matters to customers, a specific customer quote describing the impact.
2. **Write the FAQ.** Internal questions (cost, timeline, risks) and external questions (how do I use it, what changes, pricing).
3. **Work backward to requirements.** What had to be true for that press release to be real?

### Why it works

- Forces you to articulate the customer outcome before you articulate the solution
- The fake customer quote is the hardest part — if you can't write it, you don't understand the value
- FAQs surface stakeholder objections before the meeting where they'd derail you
- Separates "what we wish were true" from "what we can make true"

### When to skip it

Small features, incremental improvements, technical debt work. The technique is high-overhead and best reserved for significant bets.

---

## User Stories With Real Insight

The format ("As a ___, I want ___, so that ___") is scaffolding. The insight lives in specificity.

### Bad vs good

| Bad | Good |
|-----|------|
| As a user, I want to see my data | As an ops manager running weekly reports, I want to see which campaigns underperformed so I can reallocate budget before the next cycle |
| As an admin, I want to manage users | As a team lead onboarding 5 new hires this quarter, I want to provision accounts with role-appropriate permissions so new employees are productive on day one without security exposure |
| As a customer, I want fast performance | As a field sales rep on a tablet with spotty LTE, I want the dashboard to load in under 2 seconds so I can pull up account data during a client meeting without awkward pauses |

### The specificity test

A good user story should make you feel the user's context. You should be able to picture the person, the moment, the frustration. If you can replace the persona with "a user" and lose nothing, the story has no insight.

### Deriving stories from research, not imagination

- Stories based on interviews reference real quotes and observed behavior
- Stories based on data reference specific usage patterns and drop-off points
- Stories based on imagination reference nothing and are usually wrong

---

## Acceptance Criteria as Behavior

Acceptance criteria define observable behavior, not restatements of the feature description.

### The pattern

```
GIVEN [precondition / context]
WHEN [action / trigger]
THEN [observable outcome with specifics]
```

### Bad vs good

| Bad | Good |
|-----|------|
| The button saves the data | GIVEN valid input in all required fields, WHEN the user clicks Save, THEN the system persists the record and shows a confirmation with undo option within 200ms. If the save fails, the user sees an error with the specific failure reason and their input is preserved. |
| The search returns results | GIVEN a query with 3+ characters, WHEN the user stops typing for 300ms, THEN the system returns the top 20 results ranked by relevance, with query terms highlighted, within 500ms. For zero results: show the query, suggest corrections, and offer to broaden the search. |
| The page loads fast | GIVEN a user on a 3G connection, WHEN they navigate to the dashboard, THEN the first meaningful content renders within 1.5s, interactive within 3s, and full data loads progressively with skeleton states. |

### What good acceptance criteria include

- **Timing** — response time expectations, debounce intervals, timeout thresholds
- **Failure modes** — what happens when things go wrong, specifically
- **State preservation** — user input is never silently lost
- **Boundary values** — what happens at 0, 1, max, max+1

---

## Edge Cases as First-Class Spec Elements

Edge cases discovered by QA during testing are spec failures, not QA successes. Spec them upfront.

### Standard edge case categories

| Category | Questions to Answer |
|----------|-------------------|
| **Empty states** | What does the user see with zero data? First-time use? After deletion? |
| **Error states** | Network failure? Server error? Validation failure? Timeout? |
| **Permission boundaries** | What happens when a user lacks permission? Partial permission? Permission revoked mid-session? |
| **Concurrent access** | Two users editing the same record? Same user in two tabs? |
| **Data limits** | What happens at max capacity? With malformed data? With extremely long text? |
| **Offline behavior** | What's available offline? What happens when connection drops mid-action? How does it recover? |
| **Degraded states** | Partial data load? External service down? Feature flag half-rolled out? |

For each edge case: define what happens AND what the user sees. "The system handles it gracefully" is not a spec.

---

## The "So What" Test

For every section of the spec, ask: "So what? What decision does this inform?"

- **Background section** that restates common knowledge = cut it
- **Goals section** that says "improve the user experience" = too vague to inform a decision
- **Metrics section** with metrics nobody will check = performative, not useful
- **Scope section** that doesn't explicitly exclude anything = not actually scoping

If a section doesn't cause someone to build differently, decide differently, or test differently, it's filler. Remove it or rewrite it until it earns its place.

---

## Technical Constraints Section

Engineers don't need specs to tell them how to build. They need specs to tell them what constraints exist.

### What belongs in a technical constraints section

| Constraint Type | Example |
|----------------|---------|
| **Performance requirements** | P95 latency under 200ms for the search endpoint |
| **Data model implications** | This feature requires a new relationship between users and workspaces |
| **API contracts** | The mobile client expects this response shape; changes require a versioned endpoint |
| **Migration needs** | 2M existing records need backfill; must be zero-downtime |
| **Feature flag strategy** | Rollout to 10% first, with kill switch, monitoring these metrics |
| **Infrastructure constraints** | Must work within current rate limits; cannot add new third-party dependencies without security review |
| **Compliance requirements** | PII handling rules, data residency, audit logging |

### What does NOT belong

- Architecture recommendations (that's engineering's job)
- Technology choices (unless there's a hard constraint)
- Implementation timelines disguised as constraints

---

## Open Questions as a Feature

A spec with zero open questions is either trivial or dishonest. Hidden assumptions are the most expensive kind of technical debt.

### Structure for open questions

For each open question, document:

1. **The question** — stated precisely
2. **Why it matters** — what decision is blocked
3. **Who can answer it** — specific person or team
4. **When we need the answer** — before design, before build, before launch
5. **What we'll assume if we don't get an answer** — the default path

### Common hiding spots for unasked questions

- "We'll handle that later" (when is later?)
- "That's an edge case" (how common?)
- "Engineering will figure that out" (will they? with what context?)
- "We'll use the existing pattern" (does the existing pattern actually work here?)

---

## Internal Consistency Check

Before shipping a spec, run these cross-checks:

| Check | What to Compare |
|-------|----------------|
| Stories vs metrics | Do the user stories, if satisfied, actually move the success metrics? |
| Scope vs problem | Does the scope address the stated problem, or has it drifted to a different one? |
| Solution vs alternatives | Does the spec explain why this solution over alternatives? If not, the rationale is missing. |
| Acceptance criteria vs edge cases | Do the edge cases have corresponding acceptance criteria? |
| Timeline vs scope | Is the scope realistic for the timeline? If nobody's done the math, the spec is aspirational. |
| Constraints vs solution | Does the solution respect every stated constraint? |

Sections that contradict each other reveal unclear thinking. That's the point of the check — find the contradictions before engineering does.

---

## Spec Anti-Patterns

| Anti-Pattern | Symptom | Fix |
|-------------|---------|-----|
| **The novel** | 30+ pages nobody reads | Ruthlessly cut to decisions that need to be made |
| **The screenshot deck** | Mockups with no behavioral spec | Add acceptance criteria to every screen |
| **The wishlist** | Scope that grows with every review | Define explicit cut line; everything below it is "not now" |
| **The consensus document** | Every stakeholder's opinion included, nothing decided | Assign a single decision-maker per section |
| **The retroactive spec** | Written after building started to justify what's already happening | Stop. Align on what's actually being built. |
