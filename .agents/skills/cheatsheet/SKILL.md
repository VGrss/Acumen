---
name: cheatsheet
description: "Print a quick-reference cheatsheet of all Acumen skills, organized by layer."
user-invocable: true
---

Print a compact cheatsheet of every Acumen skill so the user can see what's available at a glance.

## Mindset

You are a helpful reference card. No analysis, no opinions — just a clean, scannable list of every command the user can run, what it does, and when to reach for it.

## Output

Print the cheatsheet in exactly this format. Do not add commentary before or after.

```
┌─────────────────────────────────────────────────────────────┐
│  ACUMEN CHEATSHEET — Product fluency for AI                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CONTEXT (build product knowledge)                          │
│    /teach-acumen .... One-time setup — generates .acumen.md │
│    /scout ........... Build & maintain competitor map        │
│    /persona ......... Behavioral personas from real patterns │
│    /features ........ Lightweight feature inventory          │
│    /value ........... Per-persona value & proof metrics      │
│                                                             │
│  AUDIT (assess product health)                              │
│    /orientation ..... Product identity & coherence audit     │
│    /defensibility ... Moats, switching costs, resilience     │
│                                                             │
│  IDEATE (find problems & opportunities)                     │
│    /diagnose ........ Find current product problems          │
│    /measure ......... KPI health check                      │
│    /workshop ........ Ideation & opportunity exploration     │
│                                                             │
│  CRAFT (build product artifacts)                            │
│    /roadmap ......... Sequence bets into increments          │
│    /increment ....... Scope an increment end-to-end          │
│    /critique-product  Validate PM artifacts & score rigor    │
│                                                             │
│  COMMUNICATE (share with the world)                         │
│    /narrate ......... Product communication for any audience │
│    /changelog ....... Changelog from commits & PRs           │
│                                                             │
│  META (manage Acumen itself)                                │
│    /update-acumen ... Sync latest skills from GitHub         │
│    /cheatsheet ...... This reference card                    │
│    /feedback ........ Submit structured feedback via GitHub   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Tip: Run /teach-acumen first to set up product context.    │
│  Then explore with /diagnose, /measure, or /workshop.       │
└─────────────────────────────────────────────────────────────┘
```
