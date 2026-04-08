# Reviewer Personas

Four personas used by `/critique-product` to stress-test product artifacts. Each persona reads the same document but looks for different things. An artifact that survives all four lenses is ready for real review.

---

## 1. The Engineer

Reads the spec to build it. Their goal is to walk away with enough clarity to start implementation without scheduling a follow-up meeting.

**How they read:** Skips the strategy section. Goes straight to requirements, acceptance criteria, and edge cases. Reads data model implications and API surface first. Scans for contradictions between the summary and the details.

**What they look for first:** Scope boundaries and what is explicitly excluded. If out-of-scope is missing or vague, they stop trusting the rest of the document.

**What makes them reject it:** Requirements that cannot be decomposed into tasks without interpretation. Statements like "improve performance," "handle gracefully," or "intuitive experience" with no measurable definition. Contradictions between sections (e.g., summary says MVP, requirements list describes a platform).

**Verification checklist:**
- [ ] Every requirement can be translated into an acceptance test without inventing criteria
- [ ] Error states, empty states, and permission boundaries are specified, not left to implementation judgment
- [ ] Data model changes, migration needs, and backward compatibility are addressed or explicitly scoped out with rationale
- [ ] Dependencies on other teams or systems are named with expected timelines
- [ ] Technical constraints (performance budgets, platform support, infrastructure limits) are stated

---

## 2. The Executive

Reads the spec to fund it. Their goal is to decide whether this deserves resources over the other five things competing for the same team's time.

**How they read:** Reads the summary and metrics first. Looks for the size of the bet and the expected return. Skips implementation details entirely. Searches for the "why now" and "why this" arguments.

**What they look for first:** The thesis -- a one-sentence articulation of why this work matters more than the alternatives. If the thesis is missing, the rest of the document is noise.

**What makes them reject it:** No clear connection to company goals or growth levers. Metrics without baselines (impossible to evaluate impact). A "strategy of everything" where the spec tries to serve every goal simultaneously. No acknowledgment of opportunity cost or competing priorities.

**Verification checklist:**
- [ ] The bet is stated in one sentence: "We believe [action] will cause [outcome] because [evidence]"
- [ ] Primary metric has a current baseline and a target with a timeline
- [ ] Opportunity cost is acknowledged -- what does the team not build while doing this
- [ ] Timeline is tied to dependencies and milestones, not just calendar dates
- [ ] Success and failure criteria are defined -- what would cause this work to be stopped or reversed

---

## 3. The Designer

Reads the spec to design it. Their goal is to understand the user deeply enough to make hundreds of small design decisions without escalating each one.

**How they read:** Starts with user context and the problem statement. Looks for emotional goals alongside functional ones. Checks whether the spec describes outcomes (what the user achieves) or prescribes solutions (what the UI should look like). Scans for missing states.

**What they look for first:** Who the user is and what they are doing immediately before and after encountering this feature. If the user journey context is absent, every design decision becomes a guess.

**What makes them reject it:** No user context beyond a persona label. Prescriptive UI requirements ("add a dropdown that...") that skip the why. Missing states -- specs that only describe the happy path and ignore empty, loading, error, first-use, and power-user scenarios. No acknowledgment of existing design patterns or the cost of introducing new ones.

**Verification checklist:**
- [ ] The user's current workflow and pain point are described with enough detail to build empathy
- [ ] Requirements describe desired outcomes, not prescribed UI implementations
- [ ] All states are addressed: empty, loading, error, first-time, populated, edge-case, and power-user
- [ ] The spec references existing patterns in the product or explicitly justifies introducing new ones
- [ ] Success criteria include qualitative signals (user confidence, task completion ease) alongside quantitative metrics

---

## 4. The Customer

Reads the announcement to decide if they care. Their goal is to determine in 30 seconds whether this change is worth their attention and in 2 minutes whether it solves their problem.

**How they read:** Scans the headline and first paragraph only. If the value proposition is not immediately clear, they leave. They do not read implementation details, internal metrics, or roadmap context. They evaluate from their own workflow, not the product's architecture.

**What they look for first:** What they can do now that they could not do before. If the announcement leads with features instead of outcomes, they struggle to map it to their own needs.

**What makes them reject it:** Jargon or internal terminology that means nothing outside the company. Feature-focused language ("we built X") instead of outcome-focused language ("you can now do Y"). No clear path to getting started. A value proposition so broad it applies to everyone and therefore resonates with no one.

**Verification checklist:**
- [ ] The value proposition answers "so what?" from the customer's perspective in one sentence
- [ ] Language describes outcomes and capabilities, not features and architecture
- [ ] A clear next step exists -- the customer knows how to try or adopt this immediately
- [ ] The announcement avoids internal jargon, product codenames, and metric-speak
- [ ] The target customer can self-identify within the first two sentences ("if you do X, this is for you")
