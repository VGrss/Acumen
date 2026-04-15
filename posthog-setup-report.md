<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your project. PostHog analytics has been added to `index.html` — the Acumen marketing site — using the posthog-js CDN snippet. Seven client-side events are now tracked covering the full visitor journey: hero CTA clicks, GitHub link clicks, install command copies (the key conversion action), AI provider icon clicks, skill carousel navigation (from both the nav and the periodic table), and changelog interactions. Environment variables are stored in `.env.local`.

| Event | Description | File |
|---|---|---|
| `get_started_clicked` | User clicked the primary "Get started" CTA in the hero section | `index.html` |
| `why_acumen_clicked` | User clicked the "Why Acumen?" secondary CTA in the hero section | `index.html` |
| `github_clicked` | User clicked a GitHub link (nav or footer), with `location` property | `index.html` |
| `install_command_copied` | User copied an install command, with `command` property (key conversion) | `index.html` |
| `provider_clicked` | User clicked an AI provider icon, with `provider` property | `index.html` |
| `skill_carousel_navigated` | User clicked a skill in the carousel or periodic table, with `skill` and optional `source` properties | `index.html` |
| `changelog_toggled` | User expanded or collapsed a changelog entry, with `date` and `action` properties | `index.html` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/159576/dashboard/622388
- **Install conversion funnel** (Get Started → install copied): https://eu.posthog.com/project/159576/insights/rlQZSsYg
- **Install command copies over time**: https://eu.posthog.com/project/159576/insights/7foGaDH6
- **CTA engagement — Get Started vs Why Acumen**: https://eu.posthog.com/project/159576/insights/C3R2Wi0M
- **Top AI providers clicked**: https://eu.posthog.com/project/159576/insights/w1sfQBYg
- **Most explored skills**: https://eu.posthog.com/project/159576/insights/kpNa0p6y

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
