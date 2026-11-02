# Testing Automation Exercise with e2e

This example tests e-commerce user flows on [Automation Exercise](https://automationexercise.com) using **[e2e](https://github.com/tester-army/e2e)**.

## What it tests

- **Navigation**: Verifying home page accessibility and navigating across store sections.
- **Product Search**: Locating products, filling search inputs, submitting queries, and validating search result headings.
- **Cart Management**: Checking the shopping cart view and state.

## Getting started

### Prerequisites

- Node.js 20 or later
- pnpm (or npm / yarn)

### Installation

```bash
pnpm install
```

### Running tests

Run the test suite headless:

```bash
pnpm test
```

Or run with a headed browser to watch interactions live:

```bash
pnpm test:headed
```

## Structure

```
├── e2e.config.ts          # e2e runner configuration with web engine
├── tests/
│   └── products.e2e.ts    # E-commerce store and navigation tests
├── package.json
└── tsconfig.json
```

## License

[MIT](./LICENSE)
