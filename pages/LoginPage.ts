import { Page } from "@playwright/test";

export default class LoginPage {
  private readonly emailInput = this.page.locator('input[name="email"]');
  private readonly passwordInput = this.page.locator('input[name="password"], #password');
  private readonly loginButton = this.page.locator('button[type="submit"], #login');
  private readonly loginError = this.page.locator(
    '.alert-danger, [role="alert"], .invalid-feedback, .o_notification:has-text("Wrong login/password")'
  );

  constructor(public page: Page) {}

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.goto();
    await this.enterUserName(email);
    await this.enterPassword(password);
    await this.clickOnLoginButton();
    await this.page.waitForLoadState("networkidle");

    const errorMessage = await this.getVisibleLoginError();
    if (errorMessage || this.page.url().includes("/login")) {
      const loginFailureMessage = `Login failed${errorMessage ? `: ${errorMessage}` : ". The app is still on the login page."}`;
      console.log(loginFailureMessage);
      throw new Error(loginFailureMessage);
    }
  }

  private async getVisibleLoginError(): Promise<string | null> {
    const visibleError = this.loginError.first();

    try {
      await visibleError.waitFor({ state: "visible", timeout: 1000 });
      return (await visibleError.textContent())?.trim() || "Unknown login error";
    } catch {
      return null;
    }
  }

  async enterUserName(username: string) {
    await this.emailInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }

  async EnterUserName(username: string) {
    await this.enterUserName(username);
  }

  async EnterPassword(password: string) {
    await this.enterPassword(password);
  }

  async ClickOnLoginButton() {
    await this.clickOnLoginButton();
  }
}
