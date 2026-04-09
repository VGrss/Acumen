---
name: changelog
description: Write a changelog from recent PRs and commits, grounded in feature context. Use after shipping, at the end of a sprint, or for release notes.
user-invocable: true
argument-hint: "[time range]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

---

## Mindset

A changelog is not a commit log. It's a story about what changed for users, written in their language. Engineers care about what was built. Users care about what they can do now. A good changelog bridges both — it's specific enough for engineers to recognize their work, and clear enough for users to understand the impact.

## Step 1: Gather Parameters

Ask the user:

1. **Time range** — what period does this changelog cover? Examples: "last 7 days", "last month", "since v2.1", "since 2026-03-01". If provided as the argument, use that.
2. **Format** — text only, or text and video script? If video, the changelog will include a companion script suitable for a walkthrough recording.

## Step 2: Analyze Changes

### Pull PR and Commit History

Use `git log` to gather all commits and merged PRs in the specified time range. For each:

- Read the PR title, description, and linked issues
- Identify what changed from the user's perspective (not the implementation perspective)
- Group changes by theme, not by PR

### Ground in Feature Context

Read `.acumen/features.md` to understand the business context behind each change:

- Which feature area does this change belong to?
- Is this a new capability, an enhancement, or a fix?
- Which persona benefits?

Read `.acumen.md` for product positioning — frame changes in terms of the product's value proposition, not its architecture.

### Categorize

Group changes into:

- **New** — capabilities that didn't exist before
- **Improved** — existing capabilities that got better
- **Fixed** — things that were broken and are now working
- **Changed** — behavior changes that existing users should know about (potential breaking changes)

Drop changes that are purely internal (refactors, dependency updates, CI changes) unless they affect performance or reliability in a way users would notice.

## Step 3: Write the Changelog

### Text Format

```markdown
# Changelog — [date range]

## New
- **[Capability name]** — what users can do now that they couldn't before. One sentence, benefit-first.

## Improved
- **[Feature name]** — what got better and why it matters. Be specific: "Export is 3x faster" not "performance improvements."

## Fixed
- **[What was broken]** — what users experienced and what they'll experience now.

## Changed
- **[What changed]** — what's different and what users need to do (if anything). Flag breaking changes clearly.
```

Rules:
- Write in the user's language, not engineering language
- Lead with the benefit, not the mechanism
- Be specific: "Dashboard loads in under 2 seconds" not "performance improvements"
- Skip jargon: "You can now export to CSV" not "Added CSV serialization to the export pipeline"
- One line per change. If it needs more, it's a blog post, not a changelog entry.
- Credit the team where appropriate — changelogs are a morale artifact too

### Video Script Format (if requested)

After the text changelog, generate a companion video script:

```markdown
## Video Script — [date range]

**Duration:** [estimated minutes, aim for 2-5 min]

### Intro (15 sec)
[Opening line — what this update covers, keep it conversational]

### [Section 1: Most impactful change] (30-60 sec)
- **Show**: [what to demonstrate on screen]
- **Say**: [script, conversational tone, benefit-first]
- **Transition**: [bridge to next section]

### [Section 2: Next change] (30-60 sec)
...

### Wrap-up (15 sec)
[Summary of what shipped, what's coming next if known, call to action]
```

Rules for video script:
- Prioritize by impact, not chronology
- Show don't tell — every section should have a screen action
- Keep it under 5 minutes. If there's too much, split into multiple videos.
- Conversational tone — this is not a press release read aloud

## Output

Present the changelog to the user for review. Ask if any changes should be reframed, elevated, or removed.

Do NOT save to `.acumen/reports/` unless the user confirms — changelogs are typically published externally, not stored internally.
