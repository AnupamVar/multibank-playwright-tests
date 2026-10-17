import { test, expect } from '@playwright/test';

const navigationDestinations = {
  Explore: '/en-AE/explore',
  Features: '/en-AE/features',
  'OTC Desk': '/en-AE/features/otc-desk',
  Company: '/en-AE/company',
  Support: '/en-AE/support',
  Blog: '/en-AE/blog',
  '$MBG': 'https://token.multibankgroup.com/en',
  'Sign in': 'https://trade.mb.io/login',
  'Sign up': 'https://trade.mb.io/register',
};

test('Navigation behaves correctly at standard desktop viewport sizes', async ({
  page,
}) => {
  for (const viewport of [
    { width: 1280, height: 720 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto('https://mb.io/en-AE');

    const header = page.getByRole('banner');
    await expect(header).toBeVisible();

    for (const [name, destination] of Object.entries(
      navigationDestinations,
    )) {
      const link = header.getByRole('link', { name, exact: true });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', destination);
    }

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }
});

test('Mobile navigation opens and shows all expected links', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('https://mb.io/en-AE');

  await page.getByRole('button', { name: 'Open menu' }).click();
  const menu = page.getByRole('dialog');
  await expect(menu).toBeVisible();

  for (const [name, destination] of Object.entries(
    navigationDestinations,
  )) {
    const link = menu.getByRole('link', { name, exact: true });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', destination);
  }

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
