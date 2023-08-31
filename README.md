# TypeScript + Vite Application Template

[![Pipeline](https://github.com/digitalservicebund/typescript-vite-application-template/actions/workflows/pipeline.yml/badge.svg)](https://github.com/digitalservicebund/typescript-vite-application-template/actions/workflows/pipeline.yml)
[![Scan](https://github.com/digitalservicebund/typescript-vite-application-template/actions/workflows/scan.yml/badge.svg)](https://github.com/digitalservicebund/typescript-vite-application-template/actions/workflows/scan.yml)
[![Secrets Check](https://github.com/digitalservicebund/typescript-vite-application-template/actions/workflows/secrets-check.yml/badge.svg)](https://github.com/digitalservicebund/typescript-vite-application-template/actions/workflows/secrets-check.yml)

Bootstrap a TypeScript application with Vite dev server and Continuous Delivery

## Prerequisites

### Node.js

We aim to use the current active [LTS version of nodejs](https://nodejs.dev/en/about/releases/), which is V18 at the time of writing. There is a `.node-version` file to simplify setup using [nodenv](https://github.com/nodenv/nodenv).

### Testing

For E2E and a11y testing with [Playwright](https://playwright.dev/docs/intro) you will need to install the supported browsers:

```bash
npx playwright install
npx playwright install msedge
```

### Git Hooks

For the provided Git hooks you will need to install [lefthook](https://github.com/evilmartians/lefthook) (git hook manager) and [talisman](https://thoughtworks.github.io/talisman/docs) (secrets scanner):

```bash
brew install lefthook talisman
```

### security.txt

This template contains a [security.txt](https://securitytxt.org/), where you probably want to update the expiration date. The following entries may also be added:

```
Policy: https://raw.githubusercontent.com/digitalservicebund/<<REPO_NAME>>/main/SECURITY.md
Canonical: https://<<PROJECT_URL>>/.well-known/security.txt
```

## Development

### Getting started

**Optional - install [Git hooks](#git-hooks):**

```bash
./run.sh init
```

### Dev server

The project uses [Vite](https://vitejs.dev/guide/) to provide a fast bundler-less [dev server](http://localhost:3000/).

**Start server**:

```bash
npm run dev
```

### Testing

The application has

- unit tests (using [Jest](https://jestjs.io/docs/getting-started))
- end-to-end tests (using [Playwright](https://playwright.dev/docs/intro))
- accessibility tests (using [Axe](https://github.com/abhinaba-ghosh/axe-playwright#readme) and [Playwright](https://playwright.dev/docs/intro))

**To run the unit tests:**

```bash
npm test
```

**With watcher:**

```bash
npm test -- --watch
```

**Gather coverage**:

```bash
npm run coverage
```

**To run the E2E tests:**

```bash
npm run test:e2e
```

**To run the a11y tests:**

```bash
npm run test:a11y
```

### Style (linting & formatting)

Linting is done via [ESLint](https://eslint.org/docs/user-guide/getting-started); consistent formatting for a variety of source code files is being enforced using [Prettier](https://prettier.io/docs/en/index.html). ESLint and Prettier work in conjunction.

**Check style:**

```bash
npm run style:check
```

**Autofix issues:**

```bash
npm run style:fix
```

(Some problems might not autofix.)

### Git hooks

The repo contains a [Lefthook](https://github.com/evilmartians/lefthook/blob/master/docs/full_guide.md) configuration, providing a Git hooks setup out of the box.

**To install these hooks, run:**

```bash
./run.sh init
```

The hooks are supposed to help to:

- commit properly formatted and linted source code only (and not break the build otherwise)
- write [conventional commit messages](https://chris.beams.io/posts/git-commit/)
- not accidentally push [secrets and sensitive information](https://thoughtworks.github.io/talisman/)

## Architecture Decision Records

The `docs/adr` directory contains [architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions).
For adding new records the [adr-tools](https://github.com/npryce/adr-tools) command-line tool is useful but not strictly necessary:

```bash
brew install adr-tools
```
