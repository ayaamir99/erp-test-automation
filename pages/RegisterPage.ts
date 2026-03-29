import { Page } from "@playwright/test";
export default class RegisterPage {
    constructor(public page: Page) {

    }
    async EnterFirstName(firstname: string) {
        await this.page.locator('input[placeholder="First Name"]')
        .fill(firstname);
    }
    async EnterLastName(lastname: string) {
        await this.page.locator('input[placeholder="Last Name"]')
        .fill(lastname);
    }
    async EnterEmail(email: string) {
        await this.page.locator('input[placeholder="Email"]')
        .fill(email);
    }
    async EnterPhoneNumber(phonenumber: string) {
        await this.page.locator('input[placeholder="Email"]')
        .fill(phonenumber);
    }
    async EnterPassword(password: string) {
        await this.page.locator('input[placeholder="Email"]')
        .fill(password);
    }
    async ConfirmPassword(password: string) {
        await this.page.locator('input[placeholder="Email"]')
        .fill(password);
    }
    async isSubscripedBeChecked(){
        return await this.page.locator('').isChecked();
    }
    async clickOnTermsAndConditions(){
        await this.page.click("");
    }
    async ClickContinueToRegister() {
         await Promise.all([
            this.page.waitForNavigation({WaitUntill: "networkidle"}),
          ])
           this.page.click("Continue");
        
    }
      
}