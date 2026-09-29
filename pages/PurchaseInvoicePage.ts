import { Page } from "@playwright/test";
import { BaseInvoicePage } from "./BaseInvoicePage";

export class PurchaseInvoicePage extends BaseInvoicePage {
  constructor(page: Page) {
    super(page);
  }
 //readonly productSearchInput = this.page.locator("#ProductCode");
  ///readonly addLineButton = this.page.locator("#AddLine");
      // Header
    customer = this.page.locator('#CustomerId');

    invoiceDate = this.page.locator('#InvoiceDate');

    saveButton = this.page.locator('#Save');


async navigate() {
    await this.page.goto("/dashboard/purchases/create");
  }
    async selectCustomer(customerName: string) {

        await this.customer.click();

        await this.page.getByRole('option', { name: customerName }).click();
    }

    async verifyTotal(expected: string) {

        await expect(this.total).toHaveText(expected);
    }

}
