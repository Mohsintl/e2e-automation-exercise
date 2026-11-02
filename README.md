# Testing Automation Exercise with e2e

This repository provides an automated end-to-end test suite for [Automation Exercise](https://automationexercise.com) using **[e2e](https://github.com/tester-army/e2e)** and `@e2e-dev/web`.

It covers the full suite of user journeys corresponding to the Playwright test suite:

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

## Getting Started

### Prerequisites

- Node.js 20 or later
- pnpm (or npm / yarn)

### Installation

```bash
pnpm install
```

### Running Tests

Run the full test suite in headless mode:

```bash
pnpm test
```

Or run with a headed browser to watch interactions live:

```bash
pnpm test:headed
```

## Project Structure

```
├── e2e.config.ts          # e2e configuration with web engine
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
