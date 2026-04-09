---
name: features
description: Build and maintain a lightweight feature inventory. Use after shipping, when planning, or to understand the current product surface.
user-invocable: true
argument-hint: "[feature name or area]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains product principles and the **Context Gathering Protocol**. Follow the protocol before proceeding — if no product context exists yet, you MUST run /teach-acumen first.

---

Mindset: Know what you've built before deciding what to build next. Features without owners decay. Features without metrics are assumptions.

## Behavior

**When called with a specific feature or area**: Add or update that entry. Ask the user about its current status, who it serves, and how they know it's working.

**When called without argument**: Scan the codebase and refresh the full inventory. Cross-reference with personas from `.acumen/personas.md` if available.

## Research Process

1. Read `.acumen.md` for product context — strategy, metrics, constraints
2. Read `.acumen/features.md` for existing inventory
3. Read `.acumen/personas.md` for persona alignment (if exists)
4. Scan the codebase:
   - Route handlers and pages — each is likely a feature surface
   - API endpoints — capabilities exposed
   - Database models — entities the product manages
   - Navigation and menus — user-facing feature organization
   - Feature flags or config — features in rollout or gated
5. For each feature, determine:
   - Which persona it serves (or if it's orphaned)
   - Current status (shipping, beta, deprecated, broken, unused)
   - Key metric (how you know it's delivering value — or that no one is measuring)
   - Owner (who's responsible — or if no one is)

## Output

Write to `.acumen/features.md`:

```markdown
# Feature Inventory

_Last updated: [date]_

## Feature Map

| Feature | Serves Persona | Status | Key Metric | Owner | Notes |
|---------|---------------|--------|------------|-------|-------|
| [name] | [persona] | [shipping/beta/deprecated/unknown] | [metric or "unmeasured"] | [owner or "unowned"] | [notes] |

## Feature Areas

Group features into coherent areas. For each area:

### [Area Name]
- **Purpose**: [Why this area exists]
- **Features**: [List of features in this area]
- **Health**: [Overall assessment — thriving, stable, neglected, bloated]

## Gaps

[Features that personas need but don't exist yet. Features that strategy calls for but haven't been built. Reference personas and strategy from .acumen.md.]

## Decay Watch

[Features showing signs of neglect: unowned, unmeasured, no recent commits, known bugs unfixed. These aren't necessarily bad — but they need a conscious decision: invest, maintain, or kill.]
```

## Maintenance

When refreshing the inventory:
- Flag features with no metric as "unmeasured" — not an error, but a risk
- Flag features with no owner as "unowned" — someone should consciously adopt or deprecate
- Check for features that exist in code but aren't in the inventory
- Check for inventory entries that no longer exist in code
- Cross-reference with personas — features that serve no persona are candidates for removal

**NEVER**:
- List implementation details as features — "uses Redis caching" is not a feature
- Invent metrics that aren't actually tracked
- Skip the Decay Watch — it's the most actionable section
- Pad the inventory with trivial entries — if it's not a meaningful capability, leave it out
