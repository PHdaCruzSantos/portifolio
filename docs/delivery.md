# Delivery and validation

## Change paths

**Fast path:** a verified typo, factual text/link correction, isolated asset replacement, or small visual fix in one area. Inspect scope, implement, validate the affected behavior, and check the diff.

**Planned path:** a new case study, new section, redesign, structural SEO, dependency/tooling migration, deploy change, substantial responsive work, or meaningful animation. Classify first, collect factual inputs, write a short plan, implement, then validate.

## Local validation

Use the existing scripts when the Node runtime is available:

```bash
npm ci
npm run lint
npm run build
git diff --check
git status --short
```

Also check affected links, desktop and mobile behavior, keyboard access, reduced motion, console errors, and metadata when relevant. Report unavailable checks; never claim they passed without running them.

## GitHub Actions

`.github/workflows/ci.yml` runs install, lint, and production build for pull requests and pushes to `develop` and `main`.

`.github/workflows/deploy-vercel.yml` deploys after successful CI on `main` once these repository secrets exist:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Create the token in Vercel with the minimum deployment scope, then add the values as GitHub Actions secrets and add the repository variable `VERCEL_DEPLOY_ENABLED=true`. Do not commit them. Until then, deployment is intentionally skipped while CI remains active.

## Vercel

The repository declares Vite's build and output directory in `vercel.json`. Once the project secrets are configured, GitHub Actions becomes the production deployment route. Verify the production domain and custom-domain configuration in Vercel after the first deployment.

## Repository policy

### Branch flow

- `main` contains production-ready work only. Changes reach it through a pull request from `develop`.
- `develop` is the integration branch. Feature and fix branches begin from it and return through a pull request.
- Name short-lived branches by intent, such as `feature/project-case-study`, `fix/mobile-navigation`, `docs/commit-policy`, or `chore/update-dependencies`.
- Delete a feature branch after its pull request is merged. Keep `main` and `develop` as the only long-lived branches.

### Pull requests

- Open pull requests from a feature/fix branch to `develop`; open release pull requests from `develop` to `main`.
- Require the CI workflow to pass before merging. Review factual portfolio claims, responsive behavior, accessibility, and visual quality whenever they are affected.
- Configure GitHub branch protection for `main` to require a pull request and the `CI / quality` status check. Apply the same CI requirement to `develop` when collaborators begin contributing.

### Commit convention

Use Conventional Commit-style subjects in Portuguese or English, written in the imperative and kept concise:

```text
feat: adiciona case study do projeto X
fix: corrige contraste no menu mobile
docs: documenta fluxo de branches
refactor: simplifica animação do hero
chore: atualiza dependências
ci: valida build em pull requests
```

Allowed types are `feat`, `fix`, `docs`, `refactor`, `chore`, `ci`, `test`, `style`, and `perf`. Add a scope only when it improves clarity, for example `fix(hero): corrige quebra de linha no mobile`.

Commits and pushes require explicit authorization. A green workflow does not replace review of professional claims or visual quality.

