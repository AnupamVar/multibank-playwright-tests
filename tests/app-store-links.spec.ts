import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mb.io/en-AE');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Download the app' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open an account' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Continue with Apple' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Download the app' }).click();
  const page3 = await page3Promise;
});