# Metrics & Measurement

How to define meaningful success metrics. Measurement is not about dashboards — it is about knowing whether you are creating value and making progress toward your theory of winning.

---

## Leading vs Lagging Indicators

Every metric is either a prediction or a confirmation. You need both, but most teams only track confirmations.

| Type | Definition | Examples | Timeframe |
|------|-----------|----------|-----------|
| **Leading** | Predicts future outcomes based on behavior changes | Activation rate, feature adoption, engagement depth, NPS | Days to weeks |
| **Lagging** | Confirms outcomes after they've occurred | Revenue, churn rate, LTV, market share | Weeks to months |

### Why leading indicators matter more for product teams

- **You can act on them.** By the time revenue drops, the damage happened months ago. Leading indicators give you time to respond.
- **They reveal causation.** "Activation rate dropped 15% after the onboarding redesign" is actionable. "Revenue is down" is not.
- **They reduce cycle time.** Waiting for lagging indicators to validate product changes means waiting quarters. Leading indicators give signal in days.

### The common mistake

Teams measure lagging indicators because stakeholders ask for them (revenue, retention, NPS). They don't invest in identifying and instrumenting leading indicators. Result: every product review is a retrospective autopsy instead of a forward-looking adjustment.

### Finding your leading indicators

Ask: "What user behavior, if it increased, would reliably predict improvement in our lagging metric?" Then validate the correlation with historical data. Not every behavior that seems predictive actually is.

---

## Input Metrics vs Output Metrics

Related to but distinct from leading/lagging. Input metrics are things you can directly influence through product changes. Output metrics are downstream results.

| Input Metric | Output Metric |
|-------------|--------------|
| Time to first value | 30-day retention |
| Onboarding completion rate | Activation rate |
| Page load speed | Session duration |
| Error rate | Support ticket volume |
| Feature discovery rate | Feature adoption |

### The principle

**Optimize inputs. Monitor outputs.** You cannot directly optimize revenue. You can optimize the behaviors and experiences that drive revenue. Set targets on inputs. Track outputs to confirm the inputs actually matter.

### When input/output relationships break

If you improve an input metric but the corresponding output doesn't move, one of three things happened: (1) the input doesn't actually drive the output — your theory was wrong, (2) the change wasn't large enough to move the output — you need a bigger swing, or (3) something else degraded simultaneously and offset the improvement.

---

## The Metric Tree

A metric tree decomposes your north star into measurable, actionable components. It's how you go from "grow revenue" to work that teams can actually do.

### Example decomposition

```
Revenue
├── Number of paying users
│   ├── New users acquired
│   │   ├── Traffic × Signup conversion
│   │   └── Channel-specific acquisition rates
│   ├── Free-to-paid conversion
│   │   ├── Trial activation rate
│   │   └── Feature adoption (key value moments)
│   └── Retention of paying users
│       ├── Month-1 retention
│       └── Month-6 retention
└── Average revenue per user (ARPU)
    ├── Plan mix (% on each tier)
    ├── Expansion revenue (upgrades, add-ons)
    └── Contraction (downgrades)
```

### How to use the tree

1. **Identify which branches are weakest.** If acquisition is strong but conversion is poor, the tree shows where to focus.
2. **Assign branches to teams.** Each team owns a branch and the metrics within it. This creates clarity about who is responsible for what.
3. **Trace problems to root causes.** Revenue dropped? Walk the tree. Which branch changed? Drill into that branch's sub-metrics.
4. **Prevent local optimization.** The tree shows how branches interact. Optimizing acquisition at the expense of quality degrades conversion downstream.

---

## Counter-Metrics (Guardrails)

For every metric you optimize, something else can break. Counter-metrics are guardrails that prevent you from Goodhart's Law-ing yourself into a local maximum that destroys long-term value.

### The pattern

| Optimization Target | What Could Break | Counter-Metric |
|--------------------|-----------------|----------------|
| Signup conversion | User quality degrades | 7-day activation rate |
| Activation speed | Users skip important setup | 30-day retention |
| Time on site | Users are confused, not engaged | Task completion rate |
| Support ticket resolution speed | Quality of resolution drops | Ticket reopen rate |
| Feature shipping velocity | Code quality degrades | Error rate, regression count |
| Revenue per user | Users feel nickel-and-dimed | NPS, churn rate |

### The rule

**Never set a target without a guardrail.** If someone proposes "increase signup conversion by 20%," the immediate follow-up is "what's our guardrail to make sure we're not just lowering the bar?" Without guardrails, teams will always find the cheapest way to hit a number — and the cheapest way usually has hidden costs.

### Goodhart's Law in practice

"When a measure becomes a target, it ceases to be a good measure." The moment you incentivize a metric, people optimize for the metric instead of the outcome it was supposed to represent. Counter-metrics are your defense.

---

## Pirate Metrics (AARRR) with Depth

Dave McClure's framework covers the full user lifecycle. The surface-level version is everywhere. Here's what actually matters at each stage.

### Acquisition

**What to measure:** Not just traffic — qualified traffic. Visitors who match your target persona and have the job you're solving.

**Common mistake:** Optimizing for volume. 100,000 visitors who aren't your target audience are worth less than 1,000 who are.

**Deeper metric:** Acquisition-to-activation rate by channel. Which sources bring users who actually activate, not just sign up?

### Activation

**What to measure:** The moment a user first experiences your core value. This is NOT signup. It's the "aha moment" — the action that correlates with long-term retention.

**Common mistake:** Defining activation too loosely (completed signup) or too strictly (used every feature). Find the specific behavior that predicts retention.

**Deeper metric:** Time to activate. If activation takes 30 minutes, most users will never get there. Compress the path to the aha moment.

### Retention

**What to measure:** Users returning to get value repeatedly. The timeframe depends on your product's natural frequency (daily for messaging, weekly for project management, monthly for invoicing).

**Common mistake:** Measuring retention at the wrong interval. If your product is naturally monthly-use, measuring DAU makes it look like everyone churned.

**Deeper metric:** Retention by cohort and by segment. Aggregate retention hides whether things are getting better or worse.

### Referral

**What to measure:** Users actively bringing other users. Organic word-of-mouth, invite flows, sharing behavior.

**Common mistake:** Measuring "viral coefficient" as if every product should be viral. Most B2B products grow through reputation, not viral loops.

**Deeper metric:** Net Promoter Score by segment. Who is promoting you, and are they bringing users who also retain?

### Revenue

**What to measure:** Sustainable revenue from value delivery. Expansion, contraction, and churn by cohort.

**Common mistake:** Celebrating MRR growth while ignoring net revenue retention. If expansion doesn't outpace contraction and churn, growth stalls the moment acquisition slows.

**Deeper metric:** Revenue retention by cohort (net dollar retention). Are existing customers worth more or less over time?

---

## North Star Metric

A single metric that captures the core value your product delivers to users. Not a vanity metric. Not a business-extraction metric. A value-delivery metric.

### Choosing a North Star

| Criteria | Why It Matters |
|----------|---------------|
| **Measures value delivered to users** | Revenue measures extraction. Your North Star should measure creation. |
| **Leading indicator of sustainable growth** | If this metric improves, revenue and retention will follow — but not the reverse. |
| **Understandable by every team** | If teams can't connect their daily work to the North Star, it fails as an alignment tool. |
| **Movable by product changes** | If the metric is driven entirely by sales or marketing, it's not a product North Star. |

### Examples by product type

| Product Type | North Star | Why |
|-------------|-----------|-----|
| Marketplace | Transactions completed per week | Measures value exchange on both sides |
| SaaS tool | Weekly active users completing core workflow | Measures habitual value delivery |
| Content platform | Total quality content consumption hours | Measures sustained engagement with value |
| Communication tool | Messages sent per active user per day | Measures frequency of core value |

### What a North Star is NOT

- Revenue. That's a business metric, not a value metric.
- Registered users. That measures acquisition, not value.
- Any metric you can grow by degrading user experience (e.g., total sessions inflated by confusion).

---

## Baseline Establishment

You cannot set meaningful targets without baselines. "Improve activation by 20%" is meaningless if you don't know the current rate.

### How to establish baselines

1. **Instrument before you optimize.** If you're not measuring something yet, your first step is measurement, not improvement. Ship the tracking. Wait for data. Then set targets.
2. **Minimum viable measurement.** You don't need perfect analytics to start. Even rough baselines ("approximately 30% of signups complete onboarding") are better than guessing.
3. **Historical data vs new instrumentation.** If you have historical data, use it. If you're adding new tracking, collect at least 4-6 weeks of data before treating it as a baseline — you need to see natural variance.
4. **Statistical significance basics.** For metrics influenced by small samples, understand that variance is high. A metric based on 50 users this week means almost nothing. Wait for enough volume that week-to-week changes are meaningful, not noise.

### Baseline documentation

For each key metric, record: current value, date measured, sample size, known biases in measurement, and expected natural variance. This prevents future debates about "what it was before."

---

## Target-Setting Methodology

Targets should be grounded in reality, not aspiration untethered from evidence.

### Grounding targets in reality

| Source | How to Use It |
|--------|--------------|
| **Historical trends** | If activation improved 2% per quarter for 4 quarters, a 2-3% target is realistic. A 20% target requires explaining what changed. |
| **Benchmark data** | Industry benchmarks give context. If best-in-class retention for your category is 40%, targeting 80% is fiction. |
| **Theoretical limits** | Some metrics have ceilings. You can't have >100% activation. If you're at 85%, a 20% improvement is mathematically impossible. |
| **Input-output models** | "If we reduce time-to-value by 30%, our model predicts activation improves by 8%." Theory-driven targets backed by causal hypotheses. |

### The difference between stretch and fiction

- **Stretch target:** "We're at 25% activation. Best-in-class is 40%. We believe our new onboarding can get us to 32% this quarter." Ambitious but grounded.
- **Fiction:** "We're at 25% activation. Let's target 50%." No explanation of how. No precedent. No model. Just a number that sounds good.

### Why bad targets are worse than no targets

A fictional target teaches the team that targets are meaningless. They stop trying to hit them, start gaming them, or burn out chasing impossible numbers. Better to have an honest baseline with directional goals ("improve activation") than a precise target with no basis ("hit 50%").

---

## Vanity Metrics

Numbers that go up and to the right but don't indicate value creation. They feel good in presentations and mean nothing in practice.

### Common vanity metrics and their replacements

| Vanity Metric | Why It's Vanity | Meaningful Replacement |
|--------------|----------------|----------------------|
| **Total registered users** | Counts everyone who ever signed up, including the 80% who never returned | Monthly active users (or weekly, depending on product frequency) |
| **Page views** | Inflated by confusion, accidental clicks, bots | Task completion rate, meaningful actions per session |
| **Total downloads** | Counts install, not usage | Active installs (opened in last 30 days) |
| **Social media followers** | Follower count doesn't correlate with business value | Engagement rate, conversion from social |
| **Gross revenue** | Hides churn, refunds, and contraction | Net revenue retention, MRR with cohort breakdown |
| **Time on site** | Could mean engagement OR confusion | Task completion time (shorter is often better) |

### How to identify a vanity metric

Three questions:

1. **Can this metric go up while the business gets worse?** Total users goes up even as churn exceeds acquisition. That's vanity.
2. **Would you change any decision based on this metric?** If the number dropped 10%, would you do anything differently? If not, stop tracking it.
3. **Does it measure value delivery or just activity?** Page views measure activity. Completed workflows measure value.

### The vanity metric trap

Vanity metrics are addictive because they always look good. Dashboards full of vanity metrics create an illusion of progress. The antidote is disciplined focus on metrics that could go down — those are the ones that tell the truth.
