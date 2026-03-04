import { Page } from "@playwright/test";
import path from "path/win32";
export default class BasePage {
  constructor(public page:Page) {
    //this.page = page;
  }
 ClickOnSpecialHotMenu() {
     this.page.locator('.product-special').click();
  }

 /* async navigate(path) {
    await this.page.goto(path);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  async clickElement(selector) {
    await this.page.click(selector);
  }

  async fillInput(selector, value) {
    await this.page.fill(selector, value);
  }

  async selectOption(selector, value) {
    await this.page.selectOption(selector, value);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }*/
}