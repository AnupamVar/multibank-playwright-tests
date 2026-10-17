import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { expectHomepageReady } from '../utils/helpers';

test('homepage remains usable at a narrow mobile viewport', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const home = new HomePage(page);
  await home.goto();

  await expectHomepageReady(page);
  await home.downloadAppLink.scrollIntoViewIfNeeded();
  await home.downloadAppLink.click({ trial: true });
});

test('homepage still loads when a tracking query parameter is present', async ({
  page,
}) => {
  await page.goto('/en-AE?utm_source=playwright');
  await expectHomepageReady(page);
});
