import { expect, Page, test } from "@playwright/test";
//import RegisterPage from "../";
import RegisterPage from "../pages/RegisterPage";
import { faker } from '@faker-js/faker';
 const user = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName()
};

test("@smoke Register test", async ({ page, baseURL }) => {
 
  const registerPage = new RegisterPage(page);
  // ${baseURL}route=account/register
  await page.goto(`${baseURL}/login`);
        await registerPage.EnterFirstName(user.firstName);
        await registerPage.EnterLastName(user.lastName);
        await registerPage.EnterEmail("johndoe@example.com");
        await registerPage.EnterPhoneNumber("1234567890");
        await registerPage.EnterPassword("password123");
        await registerPage.ConfirmPassword("password123");
        expect(await registerPage.isSubscripedBeChecked()).toBe(true);
        await registerPage.clickOnTermsAndConditions();
        await registerPage.ClickContinueToRegister();

});
// npx playwright test -g "Register test 1"