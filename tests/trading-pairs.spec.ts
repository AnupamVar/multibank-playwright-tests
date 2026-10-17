import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('homepage displays the MultiBank Group and Bitcoin markets', async ({
  page,
}) => {
  const home = new HomePage(page);
  await home.goto();
  await home.expectLoaded();

  await expect(
    page.getByRole('link', { name: /MultiBank Group MultiBank Group/ }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: /Bitcoin Bitcoin/ }).first(),
  ).toBeVisible();
});

test('MultiBank Group market links to its asset detail page', async ({
  page,
}) => {
  const home = new HomePage(page);
  await home.goto();
  await home.expectLoaded();

  await expect(
    page.getByRole('link', { name: /MultiBank Group MultiBank Group/ }).first(),
  ).toHaveAttribute('href', '/explore/MBG');
});

test('Spot market displays grouped categories and trading-pair data', async ({
  page,
}) => {
  await page.goto('/en-AE/explore');

  await expect(
    page.getByRole('heading', { name: 'Spot market' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: "Today's top crypto prices" }),
  ).toBeVisible();

  const marketTable = page.getByRole('table').first();
  const categoryNames = ['Hot', 'Gainers', 'Losers'];
  const firstPairByCategory: string[] = [];

  for (const category of categoryNames) {
    await page.getByRole('button', { name: category, exact: true }).click();
    const pairs = marketTable.locator('a[href^="/explore/"]');
    await expect(pairs.first()).toBeVisible();
    firstPairByCategory.push((await pairs.first().getAttribute('href')) ?? '');
  }

  expect(new Set(firstPairByCategory).size).toBe(categoryNames.length);

  const pairs = marketTable.locator('a[href^="/explore/"]');
  expect(await pairs.count()).toBeGreaterThan(0);
  for (const pair of await pairs.all()) {
    const href = await pair.getAttribute('href');
    const pairText = (await pair.innerText()).replace(/\s+/g, ' ').trim();
    const rowText = (await pair.locator('xpath=ancestor::tr').innerText())
      .replace(/\s+/g, ' ')
      .trim();

    expect(href).toMatch(/^\/explore\/[A-Z0-9]+$/);
    expect(pairText).toMatch(/^[A-Z0-9]+\s+.+$/);
    expect(rowText).toMatch(/\$[\d,]+(?:\.\d+)?/);
    expect(rowText).toMatch(/-?\d+(?:\.\d+)?%/);
  }
});
