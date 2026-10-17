import { expect, type Page } from '@playwright/test';

export async function expectHomepageReady(page: Page): Promise<void> {
  await expect(
    page.getByRole('heading', { name: 'Crypto for everyone' }),
  ).toBeVisible();
  await expect(page).toHaveTitle(/mb\.io/i);
}
