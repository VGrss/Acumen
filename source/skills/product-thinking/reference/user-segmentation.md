# User Segmentation

How to define and understand user segments. Segmentation is the foundation of product strategy — you cannot build for everyone, and "all users" is not a segment.

---

## Behavioral Segmentation

Segment by what people DO, not who they ARE. Demographics tell you nothing about product behavior. A 25-year-old designer and a 55-year-old CFO might use your product identically. A 25-year-old designer and another 25-year-old designer might use it completely differently.

### Behavioral dimensions that matter

| Dimension | What to measure | Why it matters |
|-----------|----------------|---------------|
| **Usage frequency** | DAU/WAU/MAU, session count | Distinguishes habitual users from occasional visitors |
| **Feature adoption** | Which features used, in what order | Reveals different jobs being served |
| **Workflow patterns** | Sequences of actions, common paths | Shows how segments actually use the product |
| **Activation status** | Completed key actions, time to value | Identifies who has found value vs who is still searching |
| **Depth of engagement** | Time in product, content created, connections made | Separates lurkers from contributors |
| **Integration behavior** | Connected tools, API usage, export frequency | Signals how embedded you are in their workflow |

### How to build behavioral segments

1. **Start with your activation metric.** Split users into activated vs not-activated. This is your most important segmentation.
2. **Within activated users, cluster by usage pattern.** Don't predefine segments — let behavior reveal them. Look for natural breaks in frequency, feature usage, or workflow.
3. **Name the segments by behavior, not demographics.** "Daily collaborators" and "weekly reviewers" are useful segments. "Enterprise users" and "SMB users" are lazy proxies that hide behavioral variance.
4. **Validate that segments are actionable.** A segment only matters if you would build differently for it. If two segments get the same product decisions, merge them.

---

## Jobs-Based Personas

Traditional personas are demographic fiction. "Sarah, 32, marketing manager, lives in Austin, has two kids" tells you nothing about what to build. Jobs-based personas are built around behavior patterns and desired outcomes.

### Anatomy of a jobs-based persona

| Component | Description | Example |
|-----------|------------|---------|
| **Name** | A behavior-based label | "The Firefighter" |
| **Core job** | The primary JTBD | "Resolve production incidents before customers notice" |
| **Context** | When and where the job arises | On-call rotation, often after hours, under time pressure |
| **Current solution** | What they do today | Cobbled-together Slack alerts + manual runbooks + tribal knowledge |
| **Pain with current** | Specific frustrations | Too many false alerts, runbooks are outdated, context is scattered |
| **Success criteria** | How they know they've succeeded | Incident resolved in <15 min, no customer impact, clear postmortem |
| **Emotional dimension** | How they want to feel | Confident, not panicked. In control, not reactive. |

### What makes a good jobs-based persona

- **Grounded in research, not imagination.** Every element should trace back to interview data or behavioral observation.
- **Specific enough to generate product decisions.** If you can't look at a persona and say "we should build X for this person," it's too vague.
- **Small enough set to be memorable.** Three to five personas. If you have twelve, nobody will remember them. Consolidate.
- **Regularly updated.** Personas are hypotheses, not monuments. Revisit quarterly. Kill personas that no longer match observed behavior.

---

## The Anti-Persona

Defining who you are NOT building for is as important as defining who you are building for. Without anti-personas, every feature request sounds reasonable because you can always imagine someone who'd want it.

### Why anti-personas matter

- **Prevent scope creep.** "That's an anti-persona need" is a clear, non-personal way to decline a request.
- **Kill consensus documents.** When you try to serve everyone, you build bland products that delight nobody. Anti-personas give you permission to be opinionated.
- **Sharpen positioning.** The best products repel as many people as they attract. If nobody dislikes your product, nobody loves it either.

### How to define an anti-persona

Ask: "Who would be disappointed by our product even if we executed perfectly?" That person is an anti-persona.

Examples of anti-persona definitions:
- "Users who need enterprise-grade permissions and audit trails" (if you're building for speed and simplicity)
- "Users who want to customize every aspect of the interface" (if you're building an opinionated workflow)
- "Teams larger than 20 people" (if your collaboration model breaks at scale)

### The discipline

When someone says "but what about users who need X?" — check if X is an anti-persona need. If it is, the answer is "we're deliberately not serving that need" and the conversation ends. This requires conviction and organizational alignment. Document anti-personas publicly within the team.

---

## Journey Mapping with Emotional States

A journey map is a timeline of user experience, but most journey maps are sterile flowcharts. The emotional dimension is what makes them useful for product decisions.

### How to map emotions

For each stage of the journey, assess:

| Emotional State | Signal | Product Implication |
|----------------|--------|-------------------|
| **Anxiety spike** | Hesitation, support tickets, abandonment | Reduce uncertainty — add confirmation, previews, undo |
| **Confusion** | Wrong clicks, backtracking, long pauses | Simplify — fewer options, better labels, contextual help |
| **Delight** | Sharing, returning, upgrading | Amplify — make the moment bigger, more shareable |
| **Frustration** | Rage clicks, error recovery, workarounds | Remove friction — eliminate the step entirely if possible |
| **Abandonment cliff** | Sharp dropoff in funnel | Diagnose — this is where you're losing the most value |

### The Peak-End Rule

People judge experiences by the peak moment (best or worst) and the end, not the average. This means:

- **One extraordinary moment matters more than consistent mediocrity.** Invest in creating a peak positive moment rather than smoothing everything to "fine."
- **The end of an experience disproportionately shapes memory.** Offboarding, export, cancellation — these "exit" experiences shape whether someone comes back or recommends you.
- **A terrible trough can define the entire experience.** Even if 95% is good, one awful moment becomes "the time when..." in user stories.

### Practical application

Map your critical user journeys. Mark the emotional peaks and troughs. Ask: Where is our worst trough? Can we eliminate it? Where could we create an unexpected peak? Is our ending experience good?

---

## Cohort Analysis Mental Models

Aggregate metrics lie. "Monthly active users is up" can hide the fact that you're acquiring fast and churning faster. Cohort analysis reveals the truth.

### Types of cohorts

| Cohort Type | Grouped By | Reveals |
|------------|-----------|---------|
| **Activation cohorts** | When they signed up | Whether product changes improve new user experience |
| **Behavioral cohorts** | What they did (e.g., used feature X) | Whether specific behaviors predict retention |
| **Acquisition cohorts** | How they found you (channel) | Which channels bring users who actually stick |
| **Revenue cohorts** | First purchase timing | How monetization timing affects lifetime value |

### What cohorts reveal that aggregates hide

- **Improving or degrading new user experience.** If each new signup cohort retains better than the last, your product is improving. Aggregate retention might look flat because older, worse cohorts are still in the mix.
- **Feature impact on retention.** Users who adopt feature X in week 1 retain at 60%; those who don't retain at 20%. Now you know what to optimize onboarding toward.
- **Channel quality.** Paid acquisition might bring 10x the volume but 0.3x the retention. Without cohort analysis by channel, you'd never see this.
- **Natural lifecycle patterns.** Some products have natural usage cycles (tax software peaks annually). Cohort analysis reveals patterns that look like churn in aggregate but are actually expected behavior.

### The cohort question to always ask

"Is the experience getting better for each new group of users?" If yes, you're improving. If no, you're growing on borrowed time.

---

## Power User / Casual User / Churned User Archetypes

Three universal behavior archetypes exist in every product. Each needs different things from you.

### Power users (top 10-20% by engagement)

- **What they need:** Depth, speed, customization, keyboard shortcuts, API access, batch operations.
- **What they signal:** Product-market fit in their segment. If you have power users, something is working.
- **Risk:** Building only for power users and creating an intimidating product for everyone else. Power users are vocal but not representative.
- **Key question:** "What do power users do that casual users don't?" The gap reveals your activation challenge.

### Casual users (the majority)

- **What they need:** Simplicity, guidance, sensible defaults, progressive disclosure.
- **What they signal:** The breadth of your product's appeal. Casual users are your growth engine.
- **Risk:** Ignoring them because they don't file bug reports or post in your community. They just leave silently.
- **Key question:** "What prevents casual users from becoming power users?" Remove those barriers.

### Churned users (formerly active, now gone)

- **What they need:** Nothing from you anymore — but they hold critical information.
- **What they signal:** Where your product fails to deliver sustained value.
- **Risk:** Ignoring churn data because it's uncomfortable. Churned user interviews are the most valuable research you can do.
- **Key question:** "What was the moment you decided to stop?" The answer is almost never "one big thing" — it's accumulated friction.

---

## The "Hiring" Metaphor

Users hire and fire products the same way companies hire and fire employees. This mental model clarifies acquisition, retention, and churn.

### What triggers hiring

- **A new job arises.** Life change, role change, company change creates a new need. The user didn't need a CRM until they got their first sales role.
- **Current solution gets fired.** Price increase, feature removal, breaking change, acquisition by a company they don't trust. The job existed — the old solution lost it.
- **Discovery of a better option.** Word of mouth, seeing a colleague use it, a compelling demo. The push existed but the pull wasn't strong enough until now.

### What triggers firing

- **The job disappears.** They changed roles, the project ended, the company pivoted. Nothing you did wrong — the job is gone.
- **A better hire appears.** A competitor solves the job better, faster, cheaper. Your product didn't get worse — the bar went up.
- **Accumulated disappointment.** Not one incident but a pattern. Slow performance, confusing updates, ignored feedback. Death by a thousand cuts.
- **Trust violation.** Data breach, aggressive upselling, dark patterns, removing features they relied on. Trust is lost in moments, not gradually.

### Switching costs as moat and trap

High switching costs keep users even when they're unhappy. This is a moat for the business but a trap for the product team — it masks dissatisfaction. If your retention is high but NPS is low, you're being held hostage by switching costs, not by value delivery. When a competitor reduces those switching costs (easy migration, import tools), your "loyal" users vanish overnight.

### The interview question

"If our product disappeared tomorrow, what would you do?" The answer reveals how differentiated you actually are. "I'd find something similar" means you're replaceable. "I'd be in serious trouble" means you've earned your place.
