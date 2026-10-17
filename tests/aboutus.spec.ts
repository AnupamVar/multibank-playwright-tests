import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mb.io/en-AE');
  await page.getByRole('link', { name: 'Company' }).click();
  await page.getByRole('heading', { name: 'Why MultiBank Group?' }).click();
  await page.getByRole('heading', { name: 'For nearly two decades,' }).click();
  await page.getByText('$2 trillion').click();
  await page.getByText('+Customers worldwide').click();
  await page.getByText('+Offices globally').click();
  await page.getByRole('heading', { name: 'A tradition of global' }).click();
  await page.getByRole('img', { name: 'A Tradition of Global' }).nth(1).click();
  await page.getByRole('img', { name: 'A Tradition of Global' }).nth(1).dblclick();
  await page.getByRole('heading', { name: 'Innovation with purpose' }).click();
  await page.getByRole('img', { name: 'Innovation with Purpose' }).nth(1).click();
  await page.getByText('We believe technology should').dblclick();
  await page.getByText('MultiBank operates under').click();
  await page.getByText('With years of global').click();
  await page.getByText('Institution-grade').click();
  await page.getByRole('heading', { name: 'Community & Media' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'eezzyLIVE eezzyLIVE @notEezzy' }).click();
  const page1 = await page1Promise;
});