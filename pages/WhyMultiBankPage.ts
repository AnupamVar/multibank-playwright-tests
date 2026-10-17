import { expect, type Locator, type Page } from '@playwright/test';

export class WhyMultiBankPage {
  readonly page: Page;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByRole('heading', {
      name: 'Why MultiBank Group?',
    });
  }

  async goto(): Promise<void> {
    await this.page.goto('/en-AE/company');
  }

  async expectPageContentVisible(): Promise<void> {
    await expect(this.pageHeading).toBeVisible();
    await expect(
      this.page.getByRole('heading', {
        name: 'For nearly two decades, MultiBank has built a reputation as one of the world’s most trusted financial institutions. With a foundation rooted in regulation, transparency, and technological excellence, we continue to serve millions of clients across the globe with integrity and ambition.',
      }),
    ).toBeVisible();

    for (const metric of [
      '$2 trillion',
      'Annual turnover',
      '2,000,000+',
      'Customers worldwide',
      '25+',
      'Offices globally',
    ]) {
      await expect(this.page.getByText(metric, { exact: true })).toBeVisible();
    }

    for (const [heading, text] of [
      [
        'A tradition of global leadership',
        'Founded in 2005, MultiBank has grown into one of the largest financial groups worldwide, driven by a commitment to trust, compliance, and innovation. Our global presence reflects the confidence customers, partners, and institutions place in us.',
      ],
      [
        'Innovation with purpose',
        'We believe technology should simplify finance. Everything we build is designed to empower users with clarity, security, and accessibility, evolving with the market while keeping clients at the center.',
      ],
      [
        'Integrity built into every decision',
        'Trust is earned through consistent action. Through rigorous risk management and transparent communication, we prioritise stability, upholding the highest standards across every jurisdiction we operate in.',
      ],
    ]) {
      await expect(
        this.page.getByRole('heading', { name: heading }),
      ).toBeVisible();
      await expect(this.page.getByText(text, { exact: true })).toBeVisible();
    }

    await expect(
      this.page.getByRole('heading', {
        name: 'The strength behind MultiBank Group',
      }),
    ).toBeVisible();

    for (const [heading, text] of [
      [
        'Regulation at our core',
        'MultiBank operates under strict global oversight to ensure transparency, compliance, and client protection.',
      ],
      [
        'Proven track record',
        "With years of global experience, we've remained resilient and reliable through every market cycle.",
      ],
      [
        'Secure & trusted',
        'Institution-grade infrastructure and strong risk controls safeguard client assets and ensure trusted governance.',
      ],
    ]) {
      await expect(this.page.getByText(heading, { exact: true })).toBeVisible();
      await expect(this.page.getByText(text, { exact: true })).toBeVisible();
    }

    await expect(
      this.page.getByRole('link', { name: 'Get in touch' }),
    ).toBeVisible();
    await expect(
      this.page.getByRole('heading', { name: 'Community & Media' }),
    ).toBeVisible();
    await expect(
      this.page.getByRole('heading', {
        name: 'The latest news and discussions about MultiBank Group.',
      }),
    ).toBeVisible();
  }
}
