import BasePage from "../pages/Base_Test";
import { _baseTest, expect } from "@playwright/test";

export default class SalesPage extends BasePage {

  async open() {
    await this.navigate("${baseURL}/sales");
  }

  async selectCustomer(name: string) {
    await this.fill("#customer", name);
  }

  async addProduct(name: string, qty: number) {
    await this.fill("#product-search", name);
    await this.click(".product-item");
    await this.fill("#quantity", qty.toString());
  }

  async submit() {
    await this.click("#submit-sale");
  }

  async assertSuccess() {
    await expect(this.page.locator(".alert-success")).toBeVisible();
  }
}