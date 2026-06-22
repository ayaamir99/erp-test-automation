import { Page } from "@playwright/test";
import { BaseInvoicePage } from "./BaseInvoicePage";

export class SaleInvoicePage extends BaseInvoicePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto("/odoo/accounting/customer-invoices/new");
  }

  // Legacy method name for backward compatibility
  async selectCustomer(customerName: string) {
    await this.selectPartner(customerName);
  }
}