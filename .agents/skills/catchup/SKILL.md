---
name: catchup
description: "Pull latest code from main and summarize recent changes in product-friendly terms. Preserves all .acumen/ context files."
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

## Step 4: Suggest next actions

Based on what changed, suggest relevant Acumen commands:

- New feature shipped? → "Consider running `/features` to update the inventory"
- Metrics-related changes? → "Consider running `/measure` to check KPI health"
- Major release? → "Consider running `/changelog` to write release notes"
- Competitive-relevant change? → "Consider running `/scout` to update positioning"

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

## Suggested next steps
- ...
```

Keep the whole summary concise — aim for something a PM can scan in 30 seconds.
