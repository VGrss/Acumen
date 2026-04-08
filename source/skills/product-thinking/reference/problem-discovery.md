# Problem Discovery

Frameworks for identifying and validating real user problems. The goal is not to generate ideas — it is to find problems worth solving and prove they exist outside your head.

---

## Jobs-to-be-Done (JTBD)

Christensen's core insight: people don't buy products. They hire them to make progress in specific circumstances. A job is stable over time even as solutions change. People have always had the job "share news with friends" — the solutions evolved from letters to phones to social media.

### Three dimensions of every job

| Dimension | Question | Example (commuter) |
|-----------|----------|-------------------|
| **Functional** | What do I need to accomplish? | Get from home to work reliably |
| **Emotional** | How do I want to feel? | In control, not stressed |
| **Social** | How do I want to be perceived? | Responsible, not wasteful |

### Writing a job statement

Use the format: **When [situation], I want to [motivation], so I can [expected outcome].**

- "When I'm onboarding a new hire, I want to give them structured context quickly, so I can get them productive without babysitting."
- The situation is critical. The same person has different jobs in different contexts.

### Common JTBD mistakes

- **Confusing jobs with tasks.** "Upload a CSV" is a task. "Get my data into the system without manual entry" is a job. Tasks are implementation-specific. Jobs are solution-agnostic.
- **Ignoring emotional jobs.** Teams fixate on functional jobs because they're easier to measure. But emotional jobs often drive switching behavior. People leave tools that make them feel stupid.
- **Making jobs too abstract.** "Be successful" is not a job. If you can't imagine someone actively trying to do it in a specific moment, it's too vague.
- **Assuming one job per user.** Users hire your product for multiple jobs, sometimes simultaneously. Map all of them before you optimize for one.

---

## The Switch Framework (Four Forces)

Every switching decision is governed by four forces. Two push toward change, two resist it. Your product only wins when the push forces overpower the resistance.

```
PUSH TOWARD CHANGE                    RESIST CHANGE
─────────────────                     ─────────────
Push: pain with current solution  ←→  Habit: comfort with status quo
Pull: attraction of new solution  ←→  Anxiety: fear of switching
```

### How to evaluate whether a problem is real

1. **Push must exist independently.** If users only feel pain when you describe your solution, the push isn't real. They should be able to articulate frustration without prompting.
2. **Pull needs specificity.** "It would be nice if..." is weak pull. "I've been looking for something that..." is strong pull. Active searching behavior is the strongest signal.
3. **Anxiety is often the silent killer.** Users want the outcome but fear migration, data loss, learning curves, team disruption. You must name and neutralize specific anxieties.
4. **Habit is underestimated.** Even painful workflows become comfortable. "I know it's bad but at least I know how it works" kills more products than competition does.

### Practical application

Interview for all four forces. Don't just ask about pain — ask what they've tried, what stopped them from switching before, what would make them nervous about changing. If you can't find strong push AND manageable anxiety, the problem may be real but unsolvable for you right now.

---

## Five Whys

A root cause analysis technique. When you observe a symptom, ask "why?" iteratively until you reach a cause you can act on.

### When it works

- Single-chain causation problems. A user drops off at step 3 of onboarding. Why? The form is confusing. Why? It asks for information they don't have. Why? We require an API key before explaining what it does. Root cause identified.

### When it fails

- **Complex systems with multiple causes.** If churn is high, asking "why" five times gives you one chain. But churn has dozens of causes. Five Whys gives false confidence in a single explanation.
- **Five Whys to the answer you wanted.** Teams unconsciously steer the chain toward a conclusion they already believe. "Why did the launch fail? → Because we didn't have enough time → Because the scope was too big → Because we didn't cut features → Because the PM didn't prioritize." This is rationalization dressed as analysis.

### How to use it honestly

- Run multiple parallel chains from the same symptom.
- Have different team members run the exercise independently, then compare.
- Stop when you reach a cause that is both actionable and within your control. Don't keep asking "why" past that point — you'll end up at "because the universe is indifferent."

---

## Demand-Side Thinking

Start from what users need, not what you can build. This sounds obvious. In practice, most roadmaps start from supply-side thinking: "We have this technology / this team / this capability — what can we do with it?"

### The demand-side question

**"What job is the user hiring for?"** — not — **"What can we build?"**

### Why teams default to supply-side

- Engineers naturally think in terms of capability. "We could build X" is more concrete than "users need Y."
- Existing infrastructure creates gravity. "We already have a notification system, so let's add more notifications."
- Supply-side thinking feels productive. You can start building immediately. Demand-side thinking requires research, which feels slow.

### The test

Take your current roadmap. For each item, ask: "Which specific user job does this serve, and how do we know that job exists?" If the answer is "it just makes sense" or "competitors have it," you're in supply-side territory.

---

## Interview Anti-Patterns

User interviews are the primary tool for problem discovery. They're also the primary source of confirmation bias if done poorly.

| Anti-Pattern | Why It Fails | Better Alternative |
|-------------|-------------|-------------------|
| **Leading questions** ("Don't you find X frustrating?") | Plants the answer | "Walk me through the last time you did X" |
| **Asking about future behavior** ("Would you use this?") | People can't predict their own behavior | "Have you tried to solve this? What happened?" |
| **"Would you pay for this?"** | Almost everyone says yes | "What have you already paid for to solve this?" |
| **Showing solutions too early** | Anchors the conversation | Spend 80% of the interview on the problem before mentioning any solution |
| **Interviewing fans** | Only hear positive signal | Deliberately recruit churned users, non-adopters, and people using competitors |
| **Taking feature requests literally** | Users describe solutions, not problems | Ask "What would that let you do that you can't do today?" |

### The Mom Test (Rob Fitzpatrick)

Three rules: (1) Talk about their life, not your idea. (2) Ask about specifics in the past, not generalities about the future. (3) Talk less, listen more. If you leave an interview feeling validated, you probably ran it wrong.

---

## Problem Severity vs Frequency Matrix

Not all problems are equal. Map problems on two axes.

```
                    HIGH FREQUENCY
                         │
         ────────────────┼────────────────
        │ Low severity   │ High severity  │
        │ High frequency │ High frequency │
        │                │                │
        │ "Paper cuts"   │ "Hair on fire" │
        │ Death by 1000  │ Obvious wins   │
        │ cuts — address │ Build here     │
        │ in aggregate   │ first          │
         ────────────────┼────────────────
        │ Low severity   │ High severity  │
        │ Low frequency  │ Low frequency  │
        │                │                │
        │ Ignore these   │ "Insurance"    │
        │                │ Hard to sell   │
        │                │ but critical   │
        │                │ when it hits   │
         ────────────────┼────────────────
                         │
                    LOW FREQUENCY
```

### Key insight

Neither dimension alone determines importance. High-severity / low-frequency problems (data loss, security breaches) justify building even if they rarely occur. Low-severity / high-frequency problems (minor UI friction) compound into churn over time. The trap is building for low-severity / low-frequency problems because one loud customer asked.

---

## Stated Needs vs Revealed Preferences

What people say they want and what they actually do are often different. This is not because people lie — it's because self-reporting is unreliable.

### The hierarchy of evidence

| Evidence Type | Reliability | Example |
|--------------|------------|---------|
| **Observed behavior** (analytics, session recordings) | Highest | Users skip the tutorial 87% of the time |
| **Past behavior** (interview about specifics) | High | "Last week I exported to CSV and reformatted in Excel" |
| **Stated preference** (survey, interview opinion) | Medium | "I prefer a clean interface" |
| **Predicted future behavior** (hypothetical questions) | Low | "I would definitely use that feature" |
| **Reported importance** (feature ranking exercises) | Lowest | "Security is my #1 priority" (but they reuse passwords) |

### Practical rules

- **Observation beats survey, every time.** If analytics say users don't use a feature but surveys say they love it, trust the analytics.
- **Behavior beats opinion.** "I want better documentation" from someone who has never opened your docs means something different than from someone who opens them daily.
- **Watch for social desirability bias.** People say they want privacy, simplicity, and sustainability. They buy convenience, features, and speed. Design for revealed preferences, market to stated preferences.
- **The strongest signal is money or time already spent.** If someone has cobbled together a workaround using three tools and a spreadsheet, they have a real problem. If they've "been meaning to look into it," they don't.
