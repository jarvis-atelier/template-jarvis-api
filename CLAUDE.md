# Project context for AI assistants

> This file is read automatically by Claude Code, Cursor, Continue, and similar AI assistants when they open this repository. It tells the assistant about Jarvis Atelier conventions so it doesn't suggest patterns that conflict with the studio's standards.

---

## What this repo is

This repository was created from a **Jarvis Atelier template** (`template-jarvis-base`, `template-jarvis-web`, or `template-jarvis-api`). The atelier is a small software studio that builds custom software for clients and ships its own products. Conventions, workflow, and architectural decisions are documented at the org level — **fetch them before making non-trivial changes**.

## Required reading before significant changes

When asked to do anything beyond a simple edit, **first fetch and read these documents**:

| Document | URL | Use for |
|---|---|---|
| Org profile | https://github.com/jarvis-atelier/.github/blob/main/profile/README.md | Studio context, default stack |
| Project catalog & conventions | https://github.com/jarvis-atelier/.github/blob/main/projects/README.md | Naming, topics, polyrepo rules, lifecycle |
| Contribution workflow | https://github.com/jarvis-atelier/.github/blob/main/CONTRIBUTING.md | Commits, PRs, branches, code review |
| Security policy | https://github.com/jarvis-atelier/.github/blob/main/SECURITY.md | How to handle vulnerabilities |
| Onboarding guide | https://github.com/jarvis-atelier/docs/blob/main/onboarding.md | Full new-dev guide |
| Starter templates guide | https://github.com/jarvis-atelier/docs/blob/main/starter-templates.md | What each template includes, how to extend |

After reading, briefly confirm to the user which conventions apply before proposing changes.

## Atelier conventions to ALWAYS follow

### Commits & PRs
- **Conventional commits**: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`, `perf:`, `ci:`
- **Never** add `Co-Authored-By` or any AI attribution to commits
- **Never** use `--no-verify`, `--no-gpg-sign`, or skip hooks unless the user explicitly asks
- One logical change per commit; PRs stay small and reviewable

### Code quality
- **Tests are required**. Atelier minimum coverage: **80%** for business logic
- **TDD when applicable** — write the test first, then the implementation
- **Don't mock what you can test against reality** (e.g., test against a real Postgres in Docker compose, not a mocked Prisma)

### Stack defaults (Node projects)
- **Package manager**: pnpm. Never npm or yarn.
- **Node version**: 20+
- **TypeScript**: strict mode always
- **Lint/format**: ESLint 9 (flat config) + Prettier 3
- For frontend: Vite + Vitest by default. SSR/SSG (Next, Astro) only if justified.
- For backend: NestJS + Prisma + Postgres by default. Other stacks only when justified.

### Repo structure
- **Polyrepo by default**. Monorepo only for `apps/web` + `apps/api` of the same product.
- **Default branch is `main`**, never `master`.
- **Branch protection on `main`**: requires PR + 1 approve + green CI.
- New repos must be **registered** in `jarvis-atelier/.github/projects/README.md` (Portfolio activo table) — without this step, the project doesn't officially exist.

### Files inherited from the template
- `LICENSE` — MIT by default. Replace if the project requires a different license (e.g., proprietary for clients).
- `.gitignore`, `.gitattributes`, `.editorconfig` — universal, don't remove.
- `.github/CODEOWNERS` — must list real owners of this repo, not the placeholder.
- `.github/workflows/ci.yml` — extend with this stack's lint/test/build commands.
- `.github/dependabot.yml` — uncomment ecosystems used by this stack.

## What NOT to do

- ❌ Suggest creating new starter templates anticipatorily. The rule is: first project of a stack is hand-built, second project triggers a template. `template-jarvis-base` is the sole exception (universal foundation).
- ❌ Bypass the project catalog. Any new repo must be registered in `projects/README.md`.
- ❌ Default to `npm` or `yarn` when working in a Node project.
- ❌ Add features, refactor unrelated code, or introduce abstractions beyond what the task requires.
- ❌ Add comments explaining WHAT well-named code already says. Only comment when WHY is non-obvious.
- ❌ Mix client code across repos. One client's code never goes in another client's repo (NDA / confidentiality).

## Project-specific instructions

> Add instructions specific to THIS project below. Examples:
> - Domain glossary
> - Architectural quirks
> - External services and how to mock them
> - Known gotchas
> - Owner contact info for fast escalation

_(Replace this section with your project's specifics.)_
