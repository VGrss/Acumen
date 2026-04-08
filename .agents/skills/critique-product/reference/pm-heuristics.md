# Product Artifact Scoring Rubric

Scoring framework for evaluating product artifacts across 9 dimensions. Each dimension is scored 0-4. Total possible score: 36.

Two reviewers using this rubric on the same artifact should arrive within 3 points of each other. When in doubt, score lower and explain why.

---

## Dimensions

### 1. Problem clarity

Evaluates whether the problem is specific, bounded, and backed by evidence rather than assumption.

| Score | Description |
|-------|-------------|
| 0 | No problem statement, or the problem is a tautology ("users need a better experience"). Zero evidence cited. |
| 1 | Problem is stated but vague. Evidence is anecdotal or a single data point with no context. Could describe dozens of different root causes. |
| 2 | Problem is specific enough to distinguish from adjacent problems. At least one quantitative or qualitative evidence source cited. Cause and effect are implied but not proven. |
| 3 | Problem is precise, falsifiable, and supported by multiple evidence sources (data, research, support tickets). Root cause is identified and distinguished from symptoms. |
| 4 | Problem includes magnitude (how many users, how often, how severe), trend (getting worse/better), and direct causal link to user or business pain. A skeptic would be convinced. |

### 2. User specificity

Evaluates whether the target user is identified concretely enough to make design and prioritization decisions.

| Score | Description |
|-------|-------------|
| 0 | No user mentioned, or "all users." |
| 1 | A generic persona label with no behavioral detail ("enterprise admins"). |
| 2 | User segment is named with one or two distinguishing behaviors or constraints. You could pick them out of a lineup but might confuse them with an adjacent segment. |
| 3 | User is defined by context, goals, constraints, and current behavior. Includes what they do today and why the current solution fails them specifically. |
| 4 | User definition includes segment size, frequency of encounter with the problem, willingness to switch, and at least one direct quote or observed behavior from research. |

### 3. Metric rigor

Evaluates whether success is measurable with baselines, targets, and a credible measurement plan.

| Score | Description |
|-------|-------------|
| 0 | No metrics, or metrics are unmeasurable ("improve satisfaction"). |
| 1 | Metrics are named but have no baselines or targets. You know what to measure but not whether you succeeded. |
| 2 | Primary metric has a baseline and a target. Measurement method exists but may have known gaps (e.g., relies on self-report). No guardrail metrics. |
| 3 | Primary and secondary metrics have baselines, targets, and a timeline. At least one guardrail metric prevents gaming. Measurement plan is described. |
| 4 | Metrics include leading indicators (not just lagging), sensitivity analysis (how big a change is detectable), and a plan for what to do if results are ambiguous. Instrumentation is specified. |

### 4. Scope discipline

Evaluates whether boundaries are explicit, justified, and resistant to scope creep.

| Score | Description |
|-------|-------------|
| 0 | No scope boundaries. The artifact describes a vision, not a deliverable. |
| 1 | Scope is implied but not stated. An engineer would have to guess what is out-of-scope. |
| 2 | In-scope and out-of-scope are listed. Rationale for cuts is missing or weak ("not in this phase" without explaining why). |
| 3 | Scope boundaries are explicit with reasoning for each major exclusion. Dependencies are identified. A phasing rationale connects what ships now to what comes later. |
| 4 | Scope is justified by cost-of-delay or effort/impact analysis. Trade-offs are stated as reversible/irreversible decisions. Cut items have clear criteria for when they would be reconsidered. |

### 5. Strategic coherence

Evaluates whether the work connects to a larger company or product thesis with a clear line of reasoning.

| Score | Description |
|-------|-------------|
| 0 | No connection to any broader strategy. This could belong to any company. |
| 1 | Strategy is mentioned by label ("supports our growth pillar") with no explanation of the causal link. |
| 2 | The artifact explains which strategic bet this supports and why this particular work advances it. The logic is plausible but not pressure-tested. |
| 3 | Strategic connection includes the theory of change: if we do X, we expect Y, because Z. Explains why this work is higher leverage than alternatives for the same strategic goal. |
| 4 | Articulates the strategic thesis, the assumption being tested, what would disprove it, and how this work compounds with other investments. Considers second-order effects. |

### 6. Edge case coverage

Evaluates whether failure modes, unusual inputs, and boundary conditions are addressed rather than ignored.

| Score | Description |
|-------|-------------|
| 0 | No edge cases mentioned. Only the happy path exists. |
| 1 | One or two obvious edge cases listed but not resolved ("TBD," "handle gracefully"). |
| 2 | Major edge cases are identified with proposed handling. Some categories are clearly missing (e.g., permissions, empty states, concurrent edits, migration). |
| 3 | Edge cases are systematically categorized (error, empty, permission, scale, migration, backward compatibility). Each has a defined behavior. |
| 4 | Edge cases include probability and severity estimates. Degradation strategy is explicit (fail open vs. fail closed). Monitoring and alerting for edge-case triggers are specified. |

### 7. Communication quality

Evaluates whether the artifact is structured so that three different audiences (engineers, executives, designers) can each find what they need without translation.

| Score | Description |
|-------|-------------|
| 0 | Stream of consciousness. No structure, no headings, no clear takeaway. |
| 1 | Has structure but buries the lead. Reader must read the entire document to understand the proposal. Key decisions are hidden in paragraphs. |
| 2 | Clear summary up front. Logical section flow. An engineer can find requirements, an executive can find the bet. Some sections are bloated or redundant. |
| 3 | Scannable at three levels: 30-second skim, 5-minute read, full deep-dive. Decisions are highlighted. Jargon is appropriate to the audience. Open questions are clearly marked. |
| 4 | Document is a decision-making tool, not just a description. Each section drives toward a specific decision or action. Visual hierarchy, concise language, no filler. A new team member could onboard from this alone. |

### 8. Slop score

Evaluates how many of the 12 AI product slop tells are present. This dimension is scored inversely: fewer tells equals a higher score.

The 12 tells: (1) vague value props, (2) strategy-free prioritization, (3) metrics without baselines, (4) persona labels without behaviors, (5) false precision on estimates, (6) hedging language everywhere, (7) no trade-off reasoning, (8) copied framework structure with no adaptation, (9) filler sections with no new information, (10) generic competitive analysis, (11) aspirational timelines with no dependencies, (12) buzzword density above plain-language threshold.

| Score | Description |
|-------|-------------|
| 0 | Six or more tells present. The artifact reads like it was generated without critical editing. |
| 1 | Four to five tells present. Some sections are clearly templated or padded. |
| 2 | Two to three tells present. Most of the artifact is original thinking but a few sections coast on generic language. |
| 3 | One tell present. The artifact is substantive throughout with a single lapse. |
| 4 | Zero tells. Every section contains specific, earned insight. Nothing could be copy-pasted into a different product's spec and still make sense. |

### 9. Context grounding

Evaluates whether the artifact references real competitive landscape, persona research, and user feedback rather than operating in a vacuum.

| Score | Description |
|-------|-------------|
| 0 | No external context. The artifact assumes the product exists in isolation. |
| 1 | Competitors or users are mentioned by name but without actionable insight ("Competitor X also does this"). |
| 2 | Competitive positioning explains a specific differentiation angle. User feedback is cited but from a single source or time period. |
| 3 | Competitive analysis identifies specific capability gaps and user switching triggers. User feedback is triangulated across multiple sources (interviews, analytics, support). Persona context is current. |
| 4 | Context includes market timing rationale, regulatory or ecosystem shifts, and direct observation of user behavior (not just reported preferences). Competitive moves are analyzed for second-order effects on the product's position. |

---

## Rating bands

| Range | Label | Interpretation |
|-------|-------|----------------|
| 0-12 | Rethink | Fundamental issues across multiple dimensions. Not ready for review. Go back to discovery or rewrite from scratch. |
| 13-20 | Tighten | Core structure exists but critical gaps undermine confidence. Address the lowest-scoring dimensions before circulating. |
| 21-28 | Solid | Ready for review with targeted fixes. Identify the 2-3 dimensions below a 3 and strengthen those specifically. |
| 29-36 | Ship | Exceptional quality. Minor polish only. Focus review on strategic alignment and edge cases rather than structural issues. |
