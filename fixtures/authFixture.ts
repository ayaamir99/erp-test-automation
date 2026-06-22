import { test as base, expect, Page } from "@playwright/test";

import LoginPage from "../pages/LoginPage";

type AuthFixtures = {
  loginPage: LoginPage;
  authenticatedPage: Page;
  LoginPage: Page;
};

const email = process.env.TEST_USER_EMAIL ?? "may@test.com";
const password = process.env.TEST_USER_PASSWORD ?? "74108520";

export const test = base.extend<AuthFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  authenticatedPage: async ({ page, loginPage }, use) => {
    await loginPage.login(email, password);
    await use(page);
  },

  LoginPage: async ({ authenticatedPage }, use) => {
    await use(authenticatedPage);
  },
});

export { expect };
