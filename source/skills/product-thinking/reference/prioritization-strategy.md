# Prioritization Strategy

Frameworks for making hard choices about what to build. Prioritization is not a scoring exercise — it is the practice of saying no to good ideas so you can say yes to the best ones.

---

## Opportunity Cost

Every yes is a no to something else. This is the most important concept in prioritization and the one most consistently ignored.

### Making opportunity cost visible

- **Name what you're NOT building.** Every time you commit to a project, write down what got displaced. "We chose to build X, which means we are not building Y or Z this quarter." Make the tradeoff explicit.
- **Cost of delay on alternatives.** If you build feature A first, feature B waits three months. What's the cost of that delay? Lost users? Lost revenue? A competitor closing the gap? If you can't articulate the cost of delay, you can't prioritize.
- **The full cost of a commitment.** A feature isn't just the build time. It's maintenance, support tickets, documentation, onboarding complexity, and the cognitive load it adds to every future decision. A "small feature" that lives forever has infinite cost.

### The discipline

Before approving any project, ask: "What are we not doing because of this?" If the team can't answer, they haven't actually prioritized — they've just added to the list.

---

## ICE/RICE as Starting Points, Not Answers

Scoring frameworks (Impact, Confidence, Effort; or Reach, Impact, Confidence, Effort) have their place. That place is not "making decisions for you."

### When frameworks help

- **Initial ranking.** When you have 50 ideas and need to get to 10, a quick score eliminates obvious low-value items.
- **Team calibration.** Scoring forces people to articulate assumptions. "You rated impact as 8 — what does that mean specifically?" The conversation is more valuable than the number.
- **Bias check.** If the highest-scored item isn't what the team "feels" is right, that tension is worth exploring. Either the scoring is wrong or the intuition is.

### When frameworks fail

- **Hiding behind scores instead of judgment.** "The RICE score says we should build X" is an abdication of responsibility. Scores are inputs to judgment, not substitutes for it.
- **False precision.** Impact: 7. Confidence: 6. Effort: 4. These numbers imply a certainty that doesn't exist. The difference between a score of 42 and 45 is meaningless.
- **Gaming.** Teams quickly learn to inflate scores for their preferred projects. Once gaming starts, the framework is theater.
- **Missing strategic context.** RICE doesn't know about your strategy, your competitive landscape, or your technical debt. It scores items in isolation.

**RICE doesn't ship products — judgment does.** Use frameworks to inform, not to decide.

---

## Sequencing Logic

Knowing WHAT to build is half the problem. Knowing WHAT ORDER to build it in is the other half — and often harder.

### The sequencing question

Not "should we build X?" but "should we build X FIRST, because it unlocks Y?"

### Dependency mapping

| Relationship | Example | Implication |
|-------------|---------|------------|
| **X enables Y** | Auth system enables collaboration features | Build X first even if Y has higher standalone value |
| **X de-risks Y** | Prototype de-risks expensive build | Do the cheap learning before the expensive commitment |
| **X generates data for Y** | Usage analytics inform personalization | Ship instrumentation before building the feature that needs it |
| **X builds trust for Y** | Free tier builds trust for paid conversion | Don't gate value before you've earned trust |

### Sequencing principles

- **Maximize learning per unit of time.** Early in a product, sequence for information. What will teach you the most about whether your theory is right?
- **Unlock compounding value.** Platform investments compound. If feature X makes every future feature 20% cheaper to build, its value is infinite on a long enough timeline — but only if there is a long enough timeline.
- **Ship the smallest thing that tests the biggest assumption.** Don't build the full feature to test demand. Build the piece that validates or invalidates your riskiest bet.

---

## Strategy as a Theory of Winning

Strategy is not a list of things to do. It is a theory about why you will win. If your strategy document reads like a roadmap, it's not a strategy.

### The structure of a strategy

**"We believe [X] about the market, which creates an opportunity for [Y], and we're uniquely positioned to capture it because [Z]. Therefore, we're focusing on [specific choices] and deliberately NOT doing [specific tradeoffs]."**

### Tests for a real strategy

| Test | Question | Red Flag |
|------|----------|----------|
| **Specificity** | Could a competitor copy-paste this strategy? | If yes, it's not a strategy — it's an aspiration |
| **Tradeoffs** | Does it say what you WON'T do? | If it only lists things to do, it's a wish list |
| **Theory of advantage** | Why will YOU win, specifically? | "Because we'll execute better" is not an advantage |
| **Falsifiability** | What would prove this strategy wrong? | If nothing could disprove it, it's not a theory |
| **Alignment** | Does every team know how their work connects? | If teams can't explain how their project serves the strategy, it's not operational |

### Strategy informs prioritization

Once you have a strategy, prioritization becomes dramatically simpler. For every proposed project, ask: "Does this advance our theory of winning?" If it doesn't, the answer is no — regardless of the RICE score.

---

## The Regret Minimization Test

Not all decisions are equal. The framework you use should match the decision type.

### Irreversible decisions (one-way doors)

- Market you enter, platform you build on, core architecture, major partnerships, pricing model changes.
- **Use regret minimization:** Project yourself 10 years forward. Which choice minimizes the chance you'll say "I wish I had..."?
- Invest heavily in analysis. Move slowly. Get diverse input.

### Reversible decisions (two-way doors)

- Feature designs, UI changes, experiment parameters, hiring for a specific role, most day-to-day product decisions.
- **Stop analyzing and move.** The cost of delay exceeds the cost of a wrong decision you can reverse.
- Decide with 70% of the information you wish you had. Course-correct based on data.

### The failure mode

Treating reversible decisions as irreversible (analysis paralysis). Treating irreversible decisions as reversible (moving fast into a trap). Most product decisions are reversible. Most teams treat them as if they're not.

---

## Platform vs Feature Thinking

Two fundamentally different approaches to building product. The choice between them shapes everything downstream.

### Feature thinking

You build everything end-to-end. Users get a complete solution. You control the entire experience.

- **When it's right:** Early-stage products finding fit. Vertical solutions where integration IS the value. Markets where users want turnkey solutions.
- **Advantage:** Speed, control, cohesion.
- **Risk:** You must build everything yourself. Scope expands endlessly.

### Platform thinking

You build the foundation. Others build on top. Users (or developers) compose solutions.

- **When it's right:** Mature products with proven demand. Horizontal tools where customization IS the value. Markets with diverse needs you can't all serve.
- **Advantage:** Leverage. Others extend your product for free.
- **Risk:** Complexity, quality control, dependency on ecosystem.

### The platform trap

Early-stage companies often build platforms prematurely. "We'll build the platform and let others build the features" sounds efficient. In practice, you're asking others to do the hard work of finding product-market fit for you. Build features first. Discover patterns. Extract the platform from proven features — don't design it in advance.

---

## Build / Buy / Partner

For every capability you need, you have three options. The wrong choice in any direction is expensive.

| Option | When to choose | Common mistake |
|--------|---------------|---------------|
| **Build** | Core differentiator. What users hire you for. Must control roadmap and quality. | Building commodity capabilities (auth, payments, email) that others do better |
| **Buy** | Commodity capability. Not a differentiator. Mature market with good vendors. | Buying your differentiator and losing control of what makes you unique |
| **Partner** | Complementary capability. Different expertise required. Mutual benefit exists. | Partnering when interests aren't aligned. Partnerships without mutual dependency dissolve. |

### The decision framework

1. **Is this our core differentiator?** If yes, build. Full stop. You cannot outsource what makes you unique.
2. **Is there a mature, reliable vendor?** If yes and it's not a differentiator, buy. Your engineers' time is too expensive for solved problems.
3. **Does a potential partner have aligned incentives?** If yes and the capability is complementary, partner. But verify alignment — partnerships where one side needs the other more always decay.

---

## Porter's Five Forces Applied to Product Decisions

Porter's framework was designed for corporate strategy. It applies directly to product prioritization when you use it to understand which forces shape your decisions.

### Force-by-force product implications

| Force | What it means for product | Decision implication |
|-------|--------------------------|---------------------|
| **Supplier power** | Dependency on platforms, APIs, data providers | If a supplier has leverage (Apple's App Store, a key API), reduce dependency. Build alternatives. Don't build core value on someone else's platform without a fallback. |
| **Buyer power** | Users have many alternatives, low switching costs | Invest in differentiation and switching costs (data, integrations, workflows). If buyers have all the power, competing on features alone is a losing game. |
| **Threat of substitutes** | Users can solve the job a completely different way | Don't just watch direct competitors. Watch adjacent tools, no-code solutions, spreadsheets, and "doing it manually." Your biggest threat may not look like you at all. |
| **Threat of new entrants** | Low barriers to entry in your space | If entry is easy, your moat must come from network effects, data, or accumulated trust — not features alone. Features are copied in months. |
| **Competitive rivalry** | Intensity of direct competition | In high-rivalry markets, avoid feature parity races. Find a segment or job that competitors are underserving and own it completely rather than competing everywhere at once. |

### The strategic question

"Which force is strongest in our market, and how does that shape what we should build?" If buyer power is high, invest in retention. If substitutes are the threat, invest in differentiation. If new entrants are the risk, invest in moats. Your product roadmap should be a response to competitive forces, not just user requests.
