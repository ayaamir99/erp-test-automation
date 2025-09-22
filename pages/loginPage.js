import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
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
  }
}