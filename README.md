# typescript-vite-application-template

Bootstrap a TypeScript application with Vite dev server and Continuous Delivery

## Prerequisites

**Node.js 16.14.2**

The repository contains a `.node-version` file to set up the required Node.js version automatically with [nodenv](https://github.com/nodenv/nodenv).

### Testing

The application has

- unit tests (using [Jest](https://jestjs.io/docs/getting-started))
- end-to-end tests (using [Playwright](https://playwright.dev/docs/intro))
- accessibility tests (using [pa11y](https://github.com/pa11y/pa11y-ci))

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

**To run a11y tests:**

```bash
npm run test:a11y
```

Note that automated accessibility testing will help root out about 30% of the errors in code, but can't replace auditing by humans.

## Architecture Decision Records

The `docs/adr` directory contains [architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions).
For adding new records the [adr-tools](https://github.com/npryce/adr-tools) command-line tool is useful but not strictly necessary:

```bash
brew install adr-tools
```
