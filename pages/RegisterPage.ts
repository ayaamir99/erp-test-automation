import { Page } from "@playwright/test";
export default class RegisterPage {
    constructor(public page: Page) {

    }
    async FirstName(firstname: string) {
        await this.page.locator('input[placeholder="First Name"]')
        .fill(firstname);
    }
    async LastName(lastname: string) {
        await this.page.locator('input[placeholder="Last Name"]')
        .fill(lastname);
    }
    async Email(email: string) {
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
    async ClickOnContinue() {
        await this.page.click('');
    }
      
}