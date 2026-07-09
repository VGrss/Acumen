---
name: catchup
description: "Pull latest code from main, summarize recent changes in product-friendly terms, and report .acumen/ context health (what exists, what's fresh, what's stale, what's missing). Preserves all .acumen/ context files."
user-invocable: true
argument-hint: "[since]"
---

## Purpose

Product people working on top of a codebase need to stay current with what engineers shipped — without risking the product context they've built up. This skill pulls the latest code and translates recent changes into product language.

## Step 1: Protect product context

Before touching anything, confirm that product context files are safe:

1. Check that `.acumen.md`, `.acumen/`, and any other product context files exist and are gitignored
2. If any product context files are tracked by git (not gitignored), **stop and warn the user** — those files could be overwritten by a pull

List the protected files found and confirm they're safe.

## Step 2: Pull latest code

1. **Check for uncommitted changes** with `git status`. If there are local changes to tracked files:
   - Run `git stash` to save them
   - Note that changes were stashed so you can report this later
2. **Pull from main**:
   ```bash
   git pull origin main
   ```
3. If there were stashed changes, run `git stash pop` and report any conflicts.

## Step 3: Summarize what changed

Determine the time range:
- If the user provided a `[since]` argument (e.g., "last week", "since Monday", "3 days"), use it
- Otherwise, use the last time the user could have synced — check `git reflog show --date=relative` for the previous pull, or default to **last 7 days**

### Gather changes

```bash
git log --since="<date>" --merges --oneline
git log --since="<date>" --no-merges --oneline
```

Also check for recently merged PRs if `gh` is available:

```bash
gh pr list --state merged --limit 20 --json number,title,body,mergedAt,author
```

### Write the summary

Organize changes into a product-friendly summary. Do NOT just list commits — translate them:

- **What shipped** — new capabilities, visible changes, things users/stakeholders would notice
- **What improved** — performance, reliability, UX refinements
- **What was fixed** — bugs that were resolved
- **Under the hood** — refactors, infra, CI changes (keep brief, 1-2 lines max)

Rules:
- Lead with what matters to product people, not engineers
- Skip commit-level detail — group by theme
- Name the PRs/authors where relevant so the PM knows who to talk to
- If `.acumen/features.md` exists, reference which feature areas were touched
- Flag anything that might affect product context files (new features that need `/features` update, changes that affect personas, etc.)

## Step 4: Snapshot product-context health

Before suggesting next actions, take a quick read-only inventory of `.acumen/` so the user knows whether the context they're working from is fresh, stale, or missing. Don't open files to summarize their contents — this is a dashboard, not a recap.

For each known file, capture:
- Whether it exists (skip empty files)
- Last modified date — prefer `git log -1 --format=%cI -- <path>` if tracked, otherwise filesystem mtime
- The `_Last updated:_` line inside the file when present — if it disagrees with mtime by more than a week, flag as **header drift**

Files to check:
- `.acumen.md` (root product context)
- `.acumen/personas.md`, `features.md`, `competitors.md`, `value.md`, `value-chain.md`, `sources.md`
- `.acumen/reports/` (count entries, note most recent)
- `DESIGN.md` (root, checked in)

Classify each:
- **Fresh** — updated in the last 30 days
- **Aging** — 30–90 days
- **Stale** — older than 90 days
- **Missing** — file not present

Counts (`N personas`, `N features`, `N competitors`) come from a best-effort count of `##` headings or table rows in those files.

## Step 5: Suggest next actions

Combine code changes and context health. Suggest at most 3, only when there's a real signal:

From code changes:
- New feature shipped → `/features` to update the inventory
- Metrics-related changes → `/diagnose` to check KPI health and surface problems/opportunities
- Major release → `/changelog` to write release notes
- Competitive-relevant change → `/scout` to update positioning

From context health:
- No `.acumen.md` → `/teach-acumen` to set up
- Missing core file (personas/features/value) → the corresponding skill
- No `sources.md` → "Data-dependent skills (`/diagnose`) need this"
- Most files stale → "Refresh the affected context skills before relying on them"

## Output format

```
## Sync complete

**Branch:** main
**Updated:** <previous HEAD>..<new HEAD> (<N> commits)
**Product context:** All .acumen/ files preserved

## What changed <since>

### Shipped
- ...

### Improved
- ...

### Fixed
- ...

### Under the hood
- ...

## Context health

  .acumen.md ............. <fresh|aging|stale|missing>   <relative date>
  personas.md ............ <state>   <relative date>   <N personas>
  features.md ............ <state>   <relative date>   <N features>
  competitors.md ......... <state>   <relative date>   <N competitors>
  value.md ............... <state>   <relative date>
  value-chain.md ......... <state>   <relative date>
  sources.md ............. <state>   <relative date>
  DESIGN.md (root) ....... <state>   <relative date>
  reports/ ............... <N> entries, most recent <date> (<skill>)

Sources wired: <names>   (or: none configured)
Flags: <only include if real — header drift, missing critical file, all stale, etc.>

## Suggested next steps
- ...
```

If `.acumen/` doesn't exist at all, collapse the Context health block to a single line: "No Acumen context yet — run `/teach-acumen` to set up." Use relative dates ("3 days ago"), not ISO. Align the dots so columns are scannable. Keep the whole summary concise — aim for something a PM can scan in 30 seconds.
