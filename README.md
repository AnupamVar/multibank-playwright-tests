# MultiBank Website – Playwright Tests

End-to-end browser tests for the public-facing [mb.io website](https://mb.io/), written in TypeScript with Playwright Test. The suite also covers selected login and trading-platform scenarios on `trade.multibank.io`.

The tests cover site navigation, desktop and mobile layouts, market data, blog articles, app links, About Us content, and selected negative scenarios.

## 1. Assessment Objective

The objective is to validate key navigation, content, and market experiences through repeatable browser tests.

The framework is designed to demonstrate:

- Reusable page objects and helpers where applicable.
- Reliable UI assertions and locator strategies.
- Navigation and content validation.
- Trading pair and category verification.
- External link validation.
- Negative and edge-case testing.
- Clear test reporting and failure diagnostics.

**Primary target application:** https://mb.io/

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | Browser automation and end-to-end testing |
| TypeScript | Type-safe test implementation |
| Playwright Test | Test execution, assertions, and fixtures |
| Page objects and helpers | Reusable page interactions and readiness checks |
| HTML Reporter | Execution results and failure investigation |
| Git | Version control and repository management |

## 3. Test Coverage

### A. Navigation and responsive layout

- `tests/navigation-desktop.spec.ts` checks the expected navigation links and destinations at 1280 × 720 and 1440 × 900, and verifies there is no horizontal overflow.
- The same file checks mobile navigation at 390 × 844: it opens the menu, verifies expected links and destinations, and checks for horizontal overflow.
- `tests/navigation.spec.ts` checks that navigation destinations respond without an HTTP error.

### B. Markets and trading pairs

- `tests/trading-pairs.spec.ts` checks homepage market links, the MultiBank Group asset destination, spot-market categories, and trading-pair data.

### C. Content and links

- `tests/aboutus.spec.ts` checks the Company to Why MultiBank content and Community & Media link.
- `tests/app-store-links.spec.ts` exercises the homepage app download and account links.
- `tests/banners.spec.ts` checks blog article navigation, the security article content, and its breadcrumb back to the blog.

### D. Edge cases

- `tests/edge-cases.spec.ts` checks homepage usability at a narrow mobile viewport and when a tracking query parameter is present.
- `tests/negativesenario.spec.ts` checks an unknown trading route and login-page usability when the app-readiness request times out.

## 4. Framework Architecture

The project uses page objects for reusable page interactions, alongside Playwright specs for test-specific flows and shared helpers.

```text
multibank-playwright-tests/
├── tests/
│   ├── aboutus.spec.ts
│   ├── app-store-links.spec.ts
│   ├── banners.spec.ts
│   ├── edge-cases.spec.ts
│   ├── navigation-desktop.spec.ts
│   ├── navigation.spec.ts
│   ├── negativesenario.spec.ts
│   └── trading-pairs.spec.ts
├── pages/
│   ├── HomePage.ts
│   └── WhyMultiBankPage.ts
├── utils/
│   └── helpers.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## 5. Test Design Principles

### Page Object Model

Where used, page objects encapsulate locators and reusable page interactions. This reduces duplication and makes the framework easier to maintain when the application UI changes.

### Reliable Locators

Prefer accessible roles, labels, and stable test attributes where available. Avoid brittle selectors that depend unnecessarily on CSS structure or element position.

### Explicit Assertions

Tests validate observable behaviour, such as element visibility, expected text, navigation destinations, and page structure, rather than simply checking whether a page opens.

### Reusable Configuration

The base URL, browser settings, retries, and reporting options are managed through Playwright configuration and environment variables where appropriate.

### Independent Test Execution

Tests should be designed to run independently, without relying on execution order or state created by another test. The desktop and mobile navigation checks are separate tests in `navigation-desktop.spec.ts`; the mobile case changes the viewport in the test and does not require a separate Playwright mobile project.

## 6. Installation and Setup

### Prerequisites

- Node.js and npm.
- Git.
- Internet access to the target application.
- A code editor such as Visual Studio Code.

### Step 1: Open the test project directory

```bash
cd multibank-playwright-tests
```

### Step 2: Install dependencies

```bash
npm ci
```

### Step 3: Install the browsers

```bash
npx playwright install chromium firefox webkit
```

### Step 4: Execute the test suite

```bash
npm test
```

The configured browser projects run the suite in Chromium, Firefox, and WebKit. WebKit is Playwright's WebKit engine and should not be described as a test in Apple Safari.

## 7. Running the Tests

Run all tests:

```bash
npm test
```

Run tests with a visible browser:

```bash
npm run test:headed
```

Open the interactive test runner:

```bash
npm run test:ui
```

Run a specific test file:

```bash
npm test -- tests/navigation-desktop.spec.ts
```

Run a specific test file with a visible browser:

```bash
npm run test:headed -- tests/navigation-desktop.spec.ts
```

Run only the mobile navigation case:

```bash
npm test -- tests/navigation-desktop.spec.ts --grep "Mobile navigation"
```

Run a single browser project:

```bash
npm test -- --project=firefox
```

Open the HTML report after a run:

```bash
npm run report
```

## 8. Environment Configuration

The configured default base URL is:

```text
https://mb.io
```

Tests that navigate using relative URLs use the `BASE_URL` environment variable. Tests with explicit URLs in their steps continue to target those URLs.

```bash
BASE_URL=https://staging.example.com npm test
```

The Playwright configuration runs Chromium, Firefox, and WebKit with their desktop device settings, one worker, list and HTML reporters, screenshots after each test, and traces on the first retry. Mobile viewport checks set their own viewport size within the test.

## 9. Reporting and Debugging

The framework uses Playwright reporting to help review test execution and investigate failures.

The configured reports and artifacts may include:

- Passed and failed test results.
- Assertion failure details.
- Screenshots captured after each test.
- Execution traces on the first retry.
- Browser error information.

Run the report command after a test execution to inspect the generated HTML report.
The sample cross-browser results and retained screenshots are documented in [docs/cross-browser-test-report.md](docs/cross-browser-test-report.md).

Generated reports and test artifacts should generally be excluded from version control unless explicitly required by the assessment. For an assessment submission, retain the generated HTML report and include a concise execution summary with the run date, browser-wise pass/fail counts, and links to representative evidence.

## 10. Scope and Safety

All tests target public-facing functionality and are designed to run without authentication.

The framework does not:

- Create user accounts.
- Submit personal or financial information.
- Execute trades or financial transactions.
- Modify user data.

External links should be validated without submitting forms or entering sensitive information.

## 11. Potential Future Enhancements

- Cross-browser execution across Chromium, Firefox, and WebKit.
- Expanded mobile viewport coverage.
- API-level validation and UI/API integration.
- Accessibility testing.
- Visual regression testing.
- CI/CD pipeline integration.
- Parallel execution and test tagging.
- Improved trace collection and failure diagnostics.

## My Personal Approach to Software Testing

With 8 years of experience in software testing, I believe quality assurance should start at the requirements stage, not just during test execution. My manual testing approach focuses on understanding business needs, identifying risks early, and exploring beyond the happy path.

- **Early Involvement:** Clarify requirements, identify ambiguities, and define test scenarios from the beginning.
- **Risk-Based Testing:** Focus on complex business logic, integrations, configurations, and areas that may have limited unit-test coverage.
- **Quality-Driven Coverage:** Use software quality models such as ISO/IEC 9126 to consider functionality, usability, reliability, and compatibility.
- **Platform-Specific Testing:** Test web applications across relevant browsers and operating systems, and mobile applications on real devices, including high-end and low-end devices where feasible.
- **End-to-End Thinking:** Validate complete business workflows, negative scenarios, boundary conditions, and unexpected user behaviour.

My approach always depends on the project's requirements, domain, and risks.

My philosophy: Effective manual testing goes beyond following test cases. It means challenging assumptions, thinking like a user, and finding the defects others might overlook.

 THANK YOU
