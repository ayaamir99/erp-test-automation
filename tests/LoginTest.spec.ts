import { test, expect } from "../fixtures/authFixture";

test("login", async ({ authenticatedPage }) => {
  await expect(authenticatedPage).not.toHaveURL(/\/login/);
});
