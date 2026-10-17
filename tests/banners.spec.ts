import { test, expect } from '@playwright/test';

test('blog article links open the selected articles', async ({ page }) => {
  await page.goto('https://mb.io/en-AE/blog');
  await page.getByRole('heading', { name: 'Blog and news' }).click();
  await page.locator('img').nth(1).click({
    clickCount: 3
  });
  await Promise.all([
    page.waitForURL(
      '**/en-AE/market-updates/glamsterdam-ethereums-biggest-rewrite-since-the-merge',
    ),
    page.getByRole('link', { name: 'Glamsterdam: Ethereum\'s' }).click(),
  ]);
  await page.waitForLoadState('load');
  await page.goto('https://mb.io/en-AE/blog');
  await page.getByRole('heading', { name: 'Company news' }).click();
  await page.getByRole('link', { name: 'View more' }).first().click();
  await expect(page).toHaveURL('https://mb.io/en-AE/company-news');
  const securityArticle = page.getByRole('link', {
    name: 'mb.io Setting the Standard',
  });
  await expect(securityArticle).toBeVisible();
  await Promise.all([
    page.waitForURL(
      '**/en-AE/company-news/multibankio-setting-the-standard-for-trust-through-security-and-regulation-in-crypto',
    ),
    securityArticle.click(),
  ]);
  await expect(page.locator('#blog-article-body')).toBeVisible();
  await expect(page.getByText('By prioritizing security,')).toBeVisible();
  await page
    .getByRole('navigation', { name: 'Breadcrumb' })
    .getByRole('link', { name: 'Blog' })
    .click();
  await expect(page).toHaveURL('https://mb.io/en-AE/blog');
  await page.getByRole('link', { name: 'Strategy sold Bitcoin. A' }).click();
});