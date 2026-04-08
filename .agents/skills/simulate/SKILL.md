---
name: simulate
description: Think AS a specific persona to evaluate a feature, flow, or decision. Use when scoping a feature, reviewing a spec, or testing whether a decision serves real users.
user-invocable: true
argument-hint: "[persona] [feature or decision]"
---

## MANDATORY PREPARATION

Invoke /product-thinking — it contains the Context Gathering Protocol and the AI Slop Test. Follow the protocol before proceeding.

Then read `.acumen/personas.md`. Find the requested persona. If the persona does not exist, **stop immediately** and tell the user:

> That persona isn't defined yet. Run `/profile [persona]` to create it first. Simulation without real persona data is just fiction with extra steps.

Do not fabricate a persona. Do not approximate. The entire point of this skill is grounded simulation, not creative writing.

---

## Mindset

You are not the user. Stop guessing what they'd think and actually become them — with their context, their pressure, their workarounds, their patience level.

You are not here to validate the feature. You are here to stress-test it from the inside. If the feature is good, the simulation will show that. If it is bad, your job is to find out before real users do.

## Core Protocol

1. **Load the persona fully.** Behaviors, goals, frustrations, workarounds, technical comfort, patience threshold, what they care about, what they ignore. Read the whole entry. Do not cherry-pick the parts that make the feature look good.

2. **Set the scene.** Where is this persona when they encounter this feature? What were they doing before? What problem are they trying to solve right now? What is their emotional state? Are they in a hurry? Are they exploring? Are they frustrated by something that just happened?

3. **Walk through the feature/flow step by step as the persona.** Not as a PM. Not as a designer. As this specific person with this specific context.

## Evaluation Checklist (Answer as the Persona)

- **Would I discover this?** Where would I find it? Would I even look there? Would I know it exists?
- **Would I understand what it does in 5 seconds?** Or would I see jargon, ambiguity, or a wall of options and bounce?
- **Does this solve MY problem or someone else's?** Be honest. Product teams love building for the loudest user, not the most common one.
- **Would I switch from my current workaround?** My spreadsheet, my manual process, my "good enough" hack — would this be enough better to justify the switching cost?
- **What would frustrate me?** Extra clicks, missing context, forced flows, things that break my existing workflow.
- **What would delight me?** Not delight as in confetti animations. Delight as in "finally, someone understands how I actually work."
- **Would I tell a colleague about this?** If no, it is useful but forgettable. If yes, you have something.
- **What would make me abandon this?** The moment I would give up and go back to my old way. Name it specifically.

## Feedback Cross-Reference

If a user feedback source is configured (support tickets, interviews, analytics, NPS comments), check for real feedback from users matching this persona's profile. Ground your simulation in what real people actually said, not what you imagine they might say.

Flag contradictions: if the simulation predicts delight but real feedback shows frustration (or vice versa), call it out explicitly.

## Output Format

### Persona Context
Who they are, what they care about, what they were doing before they hit this feature. Two to three sentences, pulled from the persona file.

### Walk-Through
Step-by-step journey through the feature/flow as this persona. Include the internal monologue — what they are thinking, feeling, and deciding at each step. Be specific. "User clicks button" is useless. "I see three options and I have no idea which one applies to my situation" is useful.

### Verdict

| Dimension | Assessment |
|-----------|------------|
| Would they use it? | Yes / No / Maybe — with reasoning |
| Would they switch? | From what, and why or why not |
| What breaks? | The specific moment or element that fails them |
| What delights? | The specific moment that earns trust or saves time |
| Risk level | Low / Medium / High — for this persona abandoning or churning |

### Recommendation
One to three concrete changes that would improve this feature for this persona. Be specific enough that someone could act on them today. Do not suggest "consider exploring" anything.
