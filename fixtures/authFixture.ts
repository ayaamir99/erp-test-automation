import { test as base, Page } from "@playwright/test";

type AuthFixtures = {
  LoginPage: Page;
};

export const test = base.extend<AuthFixtures>({
  LoginPage: async ({ page }, use) => {
    await page.goto("${baseURL}/login");

    await page.fill("input[name="email"]", "may@test.com");
    await page.fill("#password", "74108520");
    await page.click("#login");

    await use(page);
  },
});