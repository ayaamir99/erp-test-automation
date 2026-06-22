import { Page, Locator } from "@playwright/test";
import Base_Test from "./Base_Test";

export class BaseInvoicePage extends Base_Test {
  readonly page: Page;

  // Form fields (common to both sale and purchase)
  readonly partnerDropdown: Locator;
  readonly invoiceDateInput: Locator;
  readonly dueDateInput: Locator;
  readonly productDropdown: Locator;
  readonly quantityInput: Locator;
  readonly unitPriceInput: Locator;
  readonly discountInput: Locator;
  readonly taxDropdown: Locator;

  // Action buttons
  readonly addLineBtn: Locator;
  readonly saveBtn: Locator;
  readonly confirmBtn: Locator;
  readonly registerPaymentBtn: Locator;

  // Status / output
  readonly invoiceStatus: Locator;
  readonly invoiceTotal: Locator;
  readonly invoiceNumber: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    // Using generic partner field that works for both customers and vendors
    this.partnerDropdown   = page.locator('[id="supplier_id"]');
    this.invoiceDateInput   = page.locator('[name="invoice_date"]');
    this.dueDateInput       = page.locator('[name="invoice_date_due"]');
    this.productDropdown    = page.locator('.o_field_one2many .o_data_row:last-child [name="product_id"]');
    this.quantityInput      = page.locator('.o_field_one2many .o_data_row:last-child [name="quantity"]');
    this.unitPriceInput     = page.locator('.o_field_one2many .o_data_row:last-child [name="price_unit"]');
    this.discountInput      = page.locator('.o_field_one2many .o_data_row:last-child [name="discount"]');
    this.taxDropdown        = page.locator('.o_field_one2many .o_data_row:last-child [name="tax_ids"]');

    this.addLineBtn         = page.locator('text=Add a line');
    this.saveBtn            = page.locator('[data-bt-testing-name="save_manually"]');
    this.confirmBtn         = page.locator('[name="action_post"]');
    this.registerPaymentBtn = page.locator('[name="action_register_payment"]');

    this.invoiceStatus      = page.locator('.o_statusbar_status .o_arrow_button_current');
    this.invoiceTotal       = page.locator('[name="amount_total"] .oe_currency_value');
    this.invoiceNumber      = page.locator('.o_form_view .o_field_char[name="name"]');
  }

  // Navigation - to be implemented by subclasses
  async navigate(): Promise<void> {
    throw new Error("navigate() must be implemented by subclass");
  }

  // Core invoice operations
  async selectPartner(partnerName: string) {
    await this.partnerDropdown.click();
    await this.partnerDropdown.fill(partnerName);
    await this.page.locator(`.o_dropdown_item:has-text("${partnerName}")`).first().click();
  }

  async setInvoiceDate(date: string) {
    await this.invoiceDateInput.fill(date); // format: MM/DD/YYYY
    await this.invoiceDateInput.press("Tab");
  }

  async setDueDate(date: string) {
    await this.dueDateInput.fill(date); // format: MM/DD/YYYY
    await this.dueDateInput.press("Tab");
  }

  async addInvoiceLine(product: string, qty: number, price: number, discount = 0) {
    await this.addLineBtn.click();
    await this.productDropdown.click();
    await this.productDropdown.fill(product);
    await this.page.locator(`.o_dropdown_item:has-text("${product}")`).first().click();
    await this.quantityInput.fill(String(qty));
    await this.unitPriceInput.fill(String(price));
    if (discount > 0) {
      await this.discountInput.fill(String(discount));
    }
  }

  async saveInvoice() {
    await this.saveBtn.click();
  }

  async confirmInvoice() {
    await this.confirmBtn.click();
    await this.page.waitForLoadState("networkidle");
  }

  async registerPayment(amount?: string, journal = "Bank") {
    await this.registerPaymentBtn.click();
    const paymentDialog = this.page.locator('.modal');
    await paymentDialog.waitFor();
    if (amount) {
      await paymentDialog.locator('[name="amount"]').fill(amount);
    }
    await paymentDialog.locator(`[name="journal_id"] input`).fill(journal);
    await this.page.locator(`.o_dropdown_item:has-text("${journal}")`).first().click();
    await paymentDialog.locator('button:has-text("Pay")').click();
    await this.page.waitForLoadState("networkidle");
  }

  // Getters for invoice data
  async getInvoiceStatus(): Promise<string> {
    return (await this.invoiceStatus.textContent()) ?? "";
  }

  async getInvoiceTotal(): Promise<string> {
    return (await this.invoiceTotal.textContent()) ?? "";
  }

  async getInvoiceNumber(): Promise<string> {
    return (await this.invoiceNumber.textContent()) ?? "";
  }
}
