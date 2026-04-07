import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
      await page.route(/(png|jpeg)$/, route => route.abort());


  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});