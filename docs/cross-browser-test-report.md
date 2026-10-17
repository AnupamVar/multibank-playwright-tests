# Sample Cross-Browser Test Execution Report

## Execution summary

| Field | Result |
|---|---|
| Execution date | 2026-10-17 |
| Target | `https://mb.io/en-AE` and related public pages |
| Environment | macOS (Darwin 24.5.0, arm64), Node.js 24.13.1 |
| Playwright | 1.64.1 |
| Scope | Full automated suite: 13 tests executed in each of three browser projects |
| Overall result | **39 passed, 0 failed, 0 skipped** |
| Total duration | 2.8 minutes |

## Browser results

| Browser project | Browser version | Passed | Failed | Skipped | Result |
|---|---:|---:|---:|---:|---|
| Chromium | 156.0.8078.4 | 13 | 0 | 0 | PASS |
| Firefox | 157.0 | 13 | 0 | 0 | PASS |
| WebKit | 27.2 | 13 | 0 | 0 | PASS |
| **Total** | — | **39** | **0** | **0** | **PASS** |

WebKit is the browser engine bundled with Playwright; this result does not represent a run in Apple Safari.

## Coverage

The executed suite covers company and app links, blog articles, responsive/mobile layouts, navigation destinations, negative routes and login readiness, and market/trading-pair content. Each test ran in each browser project. The mobile navigation test uses a 390 × 844 viewport.

## Evidence

The following screenshots were captured by the completed mobile navigation test, one from each browser:

| Browser | Screenshot |
|---|---|
| Chromium | [mobile-navigation-chromium.png](test-evidence/mobile-navigation-chromium.png) |
| Firefox | [mobile-navigation-firefox.png](test-evidence/mobile-navigation-firefox.png) |
| WebKit | [mobile-navigation-webkit.png](test-evidence/mobile-navigation-webkit.png) |

The full Playwright HTML report is generated at `reports/html/index.html` and can be opened with:

```bash
npm run report
```

Test screenshots and any failure attachments are written under `test-results/`. These run artifacts are ignored by version control; the three representative screenshots above are retained with this report.

## Reproduction

From the `multibank-playwright-tests` project directory:

```bash
npx playwright install chromium firefox webkit
npm test
```

The final recorded run completed all 39 browser/test combinations successfully. During an earlier run, the blog article test exposed a navigation timing race in Firefox and WebKit; the test now waits for the article navigation to complete before continuing, and the final full run passed in all three projects.
