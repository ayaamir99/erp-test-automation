import { Page } from "@playwright/test";
import { BaseInvoicePage } from "./BaseInvoicePage";

export class PurchaseInvoicePage extends BaseInvoicePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto("/dashboard/purchases/create");
  }
}
