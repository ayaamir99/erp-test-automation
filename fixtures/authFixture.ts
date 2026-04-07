import { test as base, Page } from "@playwright/test";

type AuthFixtures = {
  LoginPage: Page;
};

export const test = base.extend<AuthFixtures>({
  LoginPage: async ({ page }, use) => {
    await page.goto("${baseURL}/login");

    await page.fill("#email", "test@test.com");
    await page.fill("#password", "123456");
    await page.click("#login");

    await use(page);
  },
});