# Release readiness checklist

## Before running

- [ ] Confirm the target environment and `BASE_URL`.
- [ ] Install dependencies with `npm ci`.
- [ ] Install the browser with `npx playwright install chromium`.

## Before release

- [ ] Run `npm test` and resolve or triage every failure.
- [ ] Review the generated HTML report with `npm run report`.
- [ ] Check whether failures are caused by stale selectors, network interruptions, or third-party services.
- [ ] Verify navigation, app download, and market destinations against the release environment.
- [ ] Update locators and `docs/test-plan.md` if visible website copy changes.
- [ ] Confirm credentials, generated reports, and test artifacts are not committed.

## Release decision

- [ ] Required smoke tests pass.
- [ ] Any accepted failures or risks are recorded and approved by the release owner.
