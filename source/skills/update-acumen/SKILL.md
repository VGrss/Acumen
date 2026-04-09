---
name: update-acumen
description: "Fetch the latest Acumen skills from GitHub and update local copies (source, .agents, .claude symlinks)."
user-invocable: true
---

Pull the latest skills from the Acumen repo and sync them into this project.

**Source repo:** `VGrss/Acumen` on GitHub (branch: `main`)

## Step 1: Fetch the current skill index from GitHub

Use `gh` to list the skill directories in the repo:

```
gh api repos/VGrss/Acumen/git/trees/main:source/skills --jq '.tree[] | select(.type == "tree") | .path'
```

This gives you the list of all skill names in the upstream repo.

Also list the local skills in `source/skills/` to compare.

Report what's new, removed, or already present.

## Step 2: Sync each skill's content

For every skill found upstream, fetch its files recursively. Each skill lives at `source/skills/{name}/` and may contain `SKILL.md` plus optional subdirectories (e.g. `reference/`).

For each skill directory:

1. **Get the file tree** for that skill:
   ```
   gh api repos/VGrss/Acumen/git/trees/main:source/skills/{name} --jq '.tree[]'
   ```

2. **For each file**, fetch its raw content and write it locally:
   ```
   gh api repos/VGrss/Acumen/contents/source/skills/{name}/{file} --jq '.content' | base64 -d
   ```
   Write the decoded content to `source/skills/{name}/{file}`.

3. **For subdirectories** (like `reference/`), recurse: list the subtree, then fetch each file inside it.

## Step 3: Distribute to .agents and .claude

After syncing `source/skills/`, replicate the distribution structure:

1. **Copy to `.agents/skills/`**: For each skill, copy the entire `source/skills/{name}/` directory to `.agents/skills/{name}/`.
   ```bash
   cp -r source/skills/{name} .agents/skills/{name}
   ```

2. **Create `.claude/skills/` symlinks**: For any new skill that doesn't already have a symlink:
   ```bash
   ln -sf ../../.agents/skills/{name} .claude/skills/{name}
   ```

3. **Clean up removed skills**: If a skill exists locally but not upstream, report it to the user and ask whether to remove it.

## Step 4: Report

Print a summary:

- **Updated**: skills whose content changed
- **Added**: new skills not previously present locally
- **Unchanged**: skills that were already up to date
- **Removed upstream** (if any): skills present locally but missing from the repo — ask the user what to do

Include the total skill count and confirm the distribution is in sync.
