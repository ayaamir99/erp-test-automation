import { expect, Page, test } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";

test("Register test 1", async ({ page, baseURL }) => {
  const registerPage = new RegisterPage(page);
  // ${baseURL}route=account/register
  await page.goto('https://gdawel.app/dashboard/setting/group/invoice');
        await registerPage.EnterFirstName("John");
        await registerPage.EnterLastName("Doe");
        await registerPage.EnterEmail("johndoe@example.com");
        await registerPage.EnterPhoneNumber("1234567890");
        await registerPage.EnterPassword("password123");
        await registerPage.ConfirmPassword("password123");
        expect(await registerPage.isSubscripedBeChecked()).toBe(true);
        await registerPage.clickOnTermsAndConditions();
        await registerPage.ClickContinueToRegister();

});
// npx playwright test -g "Register test 1"