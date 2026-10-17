import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly header: Locator;
  readonly homeLink: Locator;
  readonly signInLink: Locator;
  readonly signUpLink: Locator;
  readonly heroHeading: Locator;
  readonly downloadAppLink: Locator;
  readonly exploreAssetsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('banner');
    this.homeLink = this.header.getByRole('link', { name: 'Home' });
    this.signInLink = this.header.getByRole('link', { name: 'Sign in' });
    this.signUpLink = this.header.getByRole('link', { name: 'Sign up' });
    this.heroHeading = page.getByRole('heading', {
      name: 'Crypto for everyone',
    });
    this.downloadAppLink = page.getByRole('link', {
      name: 'Download the app',
    });
    this.exploreAssetsLink = page.getByRole('link', {
      name: 'Explore all assets',
    });
  }

  async goto(): Promise<void> {
    await this.page.goto('/en-AE');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heroHeading).toBeVisible();
    await expect(this.page).toHaveTitle(/mb\.io/i);
  }
}
