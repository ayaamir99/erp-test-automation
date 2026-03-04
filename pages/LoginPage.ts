//import { BasePage } from './BasePage.js';

/*port class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = '#login-btn';
    this.errorMessage = '.error-message';
    this.logoutLink = '#logout';
  }

  async login(username, password) {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
    await this.waitForPageLoad();
  }

  async logout() {
    await this.clickElement(this.logoutLink);
    await this.waitForPageLoad();
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }*/

//
import { Page } from "@playwright/test";
export default class LoginPage {
    constructor(public page: Page) {

    }
    async EnterUserName(username: string) {
        await this.page.locator('input[placeholder="First Name"]')
        .fill(username);
    }
    async EnterPassword(password: string) {
        await this.page.locator('input[placeholder="Password"]')
        .fill(password);
    }
    async ClickOnLoginButton() {
        await this.page.locator('').click();
    }
  }