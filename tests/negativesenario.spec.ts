import { expect, test } from '@playwright/test';

test('unknown trading route displays the page not found screen', async ({
  page,
}) => {
  await page.goto(
    'https://trade.multibank.io/this-route-should-not-exist-12345',
  );

  await expect(
    page.getByRole('heading', { name: 'Page Not Found' }),
  ).toBeVisible();
  await expect(page).toHaveURL(
    /https:\/\/trade\.mb\.io\/this-route-should-not-exist-12345$/,
  );
});

test('login remains usable when the readiness check times out', async ({
  page,
}) => {
  let readinessCheckTimedOut = false;
  await page.route('**/api/v1/public/app-ready', async (route) => {
    readinessCheckTimedOut = true;
    await route.abort('timedout');
  });

  await page.goto('https://trade.multibank.io/', {
    waitUntil: 'domcontentloaded',
  });

  await expect.poll(() => readinessCheckTimedOut).toBe(true);
  await expect(
    page.getByRole('textbox', { name: /Email address/i }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Log In', exact: true }),
  ).toBeVisible();
});