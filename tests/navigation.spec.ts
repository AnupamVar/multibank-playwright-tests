import { request, test, expect } from '@playwright/test';

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

test('all navigation destinations resolve without broken links', async ({
  page,
}) => {
  await page.goto('https://mb.io/en-AE');

  const api = await request.newContext();
  try {
    for (const destination of Object.values(navigationDestinations)) {
      const resolvedDestination = new URL(destination, page.url()).toString();
      const response = await api.get(resolvedDestination, {
        maxRedirects: 0,
        timeout: 10_000,
      });
      expect(
        response.status(),
        `${resolvedDestination} should resolve without an HTTP error`,
      ).toBeLessThan(400);
    }
  } finally {
    await api.dispose();
  }
});