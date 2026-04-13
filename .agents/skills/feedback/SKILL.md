---
name: feedback
description: "Walk through structured feedback and submit it as a GitHub Issue on the Acumen repo."
user-invocable: true
---

# Feedback

Collect structured feedback from the user and submit it as a GitHub Issue on the Acumen repository (`VGrss/Acumen`).

## Core behavior

### Step 1 — Category

Ask the user to pick one:

1. **Bug report** — Something is broken or behaving unexpectedly
2. **Skill idea** — A new skill or enhancement to an existing one
3. **General feedback** — Anything else (UX, docs, process, direction)

### Step 2 — Problem

Ask: **"What's the problem?"**

Guide the user to describe what happened or what's missing. Be specific — ask follow-up questions if the description is vague. A good problem statement names the trigger ("when I run /diagnose…"), the observed behavior, and the expected behavior.

### Step 3 — Impact

Ask: **"Who does this affect and how?"**

Guide the user to articulate:
- Who is impacted (which persona, role, or workflow)
- How often it happens (every time, sometimes, edge case)
- How severe it is (blocker, friction, cosmetic)

### Step 4 — Suggested solution (optional)

Ask: **"Do you have a solution in mind? (optional, feel free to skip)"**

If the user has an idea, capture it. If not, move on — good feedback describes the problem well, not necessarily the fix.

### Step 5 — Review and confirm

Format the feedback as a preview and show it to the user:

```
## Category
{category}

## Problem
{problem description}

## Impact
{impact description}

## Suggested solution
{solution or "None provided"}
```

Ask the user to confirm or edit before submitting.

### Step 6 — Submit

Use the GitHub CLI to create an Issue with a label matching the category:

```bash
gh issue create \
  --repo VGrss/Acumen \
  --label "{category label}" \
  --title "{concise title derived from the problem}" \
  --body "{formatted body}"
```

Use these labels based on category:
- Bug report → `bug`
- Skill idea → `enhancement`
- General feedback → `feedback`

The body should follow this template:

```markdown
## Problem
{problem description}

## Impact
{impact description}

## Suggested solution
{solution or "_None provided — feedback only._"}

---
_Submitted via `/feedback`_
```

Return the Issue URL to the user.

## Tone

Be conversational but efficient. Each step is one question — don't dump all questions at once. Guide the user through the flow one step at a time, like a short interview.
