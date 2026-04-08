import BasePage from "./Base_Test";
import { expect } from "@playwright/test";

export default class SalesPage extends BasePage {

  async open() {
    await this.navigate("/sales");
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

  async createSale(customer: string, product: string, qty: number) {
    await this.selectCustomer(customer);
    await this.addProduct(product, qty);
    await this.submit();
  }

  async assertSuccess() {
    await expect(this.page.locator(".alert-success")).toBeVisible();
  }
}
