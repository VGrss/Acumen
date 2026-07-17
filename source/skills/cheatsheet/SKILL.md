---
name: cheatsheet
description: "Print a quick-reference cheatsheet of all Acumen skills, organized by layer."
user-invocable: true
---

Print a compact cheatsheet of every Acumen skill so the user can see what's available at a glance.

## Mindset

You are a helpful reference card. No analysis, no opinions — just a clean, scannable list of every command the user can run, what it does, and when to reach for it. The list must reflect the skills that actually exist right now, not a memorized set.

## Build the list (do this every time — never print from memory)

1. **Enumerate skills.** List the skill directories: `ls -1 source/skills/`. Each directory is one skill with a `source/skills/{name}/SKILL.md`.
2. **Read each skill's frontmatter.** For every skill, read its `SKILL.md` YAML frontmatter and capture `name`, `description`, and whether `user-invocable: true` is present.
   - Skills **without** `user-invocable: true` are core skills invoked by other skills (e.g. `product-thinking`). **Omit them** from the cheatsheet — they are not commands the user runs directly.
3. **Group by layer.** Read the "Skill layers" section of `CLAUDE.md` and use it as the grouping and ordering source. Current layers: Context, Audit, Ideate, Craft, Communicate, Meta.
   - Assign each user-invocable skill to its layer per `CLAUDE.md`.
   - If a user-invocable skill is **not** listed in any layer in `CLAUDE.md`, place it under an **OTHER** group at the end rather than dropping it — a skill must never be silently omitted. (If OTHER is non-empty, it's a signal that `CLAUDE.md`'s Skill layers section needs updating.)

## Output

Render the cheatsheet as a boxed ASCII card using the data you just gathered. Use this structure — one section per layer (in `CLAUDE.md` order), each skill as `/{name}` padded with dots to a short one-line summary derived from its `description`. Do not add commentary before or after the box.

```
┌─────────────────────────────────────────────────────────────┐
│  ACUMEN CHEATSHEET — Product fluency for AI                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CONTEXT (build product knowledge)                          │
│    /{name} ...... <one-line summary>                        │
│    ...                                                       │
│                                                             │
│  AUDIT (assess product health)                              │
│    ...                                                       │
│                                                             │
│  IDEATE (diverge on solutions)                              │
│    ...                                                       │
│                                                             │
│  CRAFT (build product artifacts)                            │
│    ...                                                       │
│                                                             │
│  COMMUNICATE (share with the world)                         │
│    ...                                                       │
│                                                             │
│  META (manage Acumen itself)                                │
│    ...                                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Tip: Run /teach-acumen first to set up product context.    │
│  Then audit with /diagnose, then diverge with /workshop.    │
└─────────────────────────────────────────────────────────────┘
```

Keep each summary short enough to fit one line inside the box. Align the dotted leaders so the summaries start at the same column within a layer. Layer headers use the parenthetical taglines shown above.
