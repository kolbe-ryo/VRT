import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com');
  // await page.locator('#APjFqb').click();
  await page.locator('#APjFqb').fill('playwrite');
  await page.locator('#APjFqb').press('Enter');
  // await page.getByLabel('検索', { exact: true }).click();
  // await page.getByLabel('検索', { exact: true }).fill('playwrite');
  // await page.getByLabel('検索', { exact: true }).press('Enter');
  await expect(page.locator('#search')).toContainText('Playwright: Fast and reliable end-to-end testing for modern ...');
  await expect(page).toHaveScreenshot('test.png');
  await page.close();
});