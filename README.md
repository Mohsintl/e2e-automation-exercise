# Testing Automation Exercise with e2e

[![Smoke](https://github.com/Mohsintl/e2e-automation-exercise/actions/workflows/smoke.yml/badge.svg)](https://github.com/Mohsintl/e2e-automation-exercise/actions/workflows/smoke.yml)
[![Regression](https://github.com/Mohsintl/e2e-automation-exercise/actions/workflows/regression.yml/badge.svg)](https://github.com/Mohsintl/e2e-automation-exercise/actions/workflows/regression.yml)

This repository provides an automated end-to-end test suite for [Automation Exercise](https://automationexercise.com) using **[e2e](https://github.com/tester-army/e2e)** and `@e2e-dev/web`.

It covers the same user journeys as the [Playwright suite](https://github.com/Mohsintl/automation-exercise-playwright), so the two frameworks can be compared side by side:

## Test Coverage

- **Home Page (`tests/home.e2e.ts`)**: Home page loading, title validation, and main navigation headers.
- **Login (`tests/login.e2e.ts`)**: Navigation to login form and error handling for invalid credentials.
- **User Registration (`tests/registration.e2e.ts`)**: New user signup flow with dynamic credentials and form submission.
- **Products Catalog (`tests/products.e2e.ts`)**: Product listing, product cards, and search functionality.
- **Product Details (`tests/productDetail.e2e.ts`)**: Product detail views, metadata verification, custom quantity selection, and add to cart modal.
- **Shopping Cart (`tests/cart.e2e.ts`)**: Empty cart state and adding items to cart.
- **Brand Navigation (`tests/brand.e2e.ts`)**: Brands listing and filtering products by brand (Polo, H&M, Madame).
- **Category Navigation (`tests/category.e2e.ts`)**: Category sidebar filtering across Women, Men, and Kids.
- **Contact Us (`tests/contact.e2e.ts`)**: Submitting customer feedback form with validation and returning home.
- **Site Navigation (`tests/navigation.e2e.ts`)**: Section routing, Test Cases page, API testing page, and footer email newsletter subscription.

### Smoke and regression

- **Smoke**: 7 tests tagged `smoke` (home, login page and invalid login, product listing and search, add to cart, main navigation). They run on every pull request.
- **Regression**: the whole suite, smoke tests included.

## Getting Started

### Prerequisites

- Node.js 24.8 or later (or 22.22.3 or later on Node 22)
- npm

### Installation

```bash
npm ci
npx e2e-web install chromium --with-deps
```

### Running Tests

| Command | Runs |
| :--- | :--- |
| `npm test` | The full suite, headless |
| `npm run test:smoke` | Only the tests tagged `smoke` |
| `npm run test:headed` | The full suite in a visible browser |
| `npm run typecheck` | TypeScript check of the config and tests |

Each run writes its report, screenshots, and trace pages to `.e2e/`.

## CI

- **Smoke** (`.github/workflows/smoke.yml`): every pull request to `main` typechecks, then runs the smoke tests on Chromium.
- **Regression** (`.github/workflows/regression.yml`): the full suite on push to `main`, nightly at 02:47 UTC, by hand, and on a pull request that changes the workflow. The nightly run matters because the site changes without any commit here.
- Both use read-only permissions, cancel a superseded run on the same branch, and upload `.e2e/` (report, JUnit XML, screenshots) as an artifact, also when tests fail. No secrets are needed.
- `workers: 1` in `e2e.config.ts` keeps the load on the public site low. CI retries each failed test once (the e2e default).

## Project Structure

```
├── .github/workflows/
│   ├── smoke.yml          # smoke tests on every pull request
│   └── regression.yml     # full suite on main and nightly
├── e2e.config.ts          # one Chromium target on the web engine
├── tests/
│   ├── brand.e2e.ts       # Brand filtering tests
│   ├── cart.e2e.ts        # Cart interaction tests
│   ├── category.e2e.ts    # Category sidebar navigation tests
│   ├── contact.e2e.ts     # Contact form submission tests
│   ├── home.e2e.ts        # Homepage tests
│   ├── login.e2e.ts       # Authentication tests
│   ├── navigation.e2e.ts  # Global navigation & subscription tests
│   ├── productDetail.e2e.ts # Product detail & quantity tests
│   ├── products.e2e.ts    # Product catalog & search tests
│   └── registration.e2e.ts # User registration tests
├── package.json
└── tsconfig.json
```

## License

[MIT](./LICENSE)
