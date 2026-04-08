import { test, expect } from "@playwright/test";
import { SaleInvoicePage } from "../pages/SaleInvoicePage";

test.describe("Sale Invoice", () => {
  let invoicePage: SaleInvoicePage;

  test.beforeEach(async ({ page }) => {
    invoicePage = new SaleInvoicePage(page);
  });

  test("Create and confirm a sale invoice", async ({ page }) => {
    await invoicePage.navigate();

    // Fill invoice header
    await invoicePage.selectCustomer("Azure Interior");
    await invoicePage.setInvoiceDate("04/08/2026");

    // Add product lines
    await invoicePage.addInvoiceLine("Product A", 2, 150.0);
    await invoicePage.addInvoiceLine("Product B", 1, 200.0, 10); // 10% discount

    // Save draft
    await invoicePage.saveInvoice();

    // Verify draft status
    const draftStatus = await invoicePage.getInvoiceStatus();
    expect(draftStatus.toLowerCase()).toContain("draft");

    // Confirm the invoice
    await invoicePage.confirmInvoice();

    // Verify posted status
    const confirmedStatus = await invoicePage.getInvoiceStatus();
    expect(confirmedStatus.toLowerCase()).toContain("posted");

    // Verify invoice number is assigned
    const invoiceNumber = await invoicePage.getInvoiceNumber();
    expect(invoiceNumber).toMatch(/INV\//);

    console.log(`✅ Invoice created: ${invoiceNumber}`);
    console.log(`💰 Total: ${await invoicePage.getInvoiceTotal()}`);
  });

  test("Create invoice and register payment", async ({ page }) => {
    await invoicePage.navigate();

    await invoicePage.selectCustomer("Azure Interior");
    await invoicePage.setInvoiceDate("04/08/2026");
    await invoicePage.addInvoiceLine("Product A", 1, 500.0);

    await invoicePage.saveInvoice();
    await invoicePage.confirmInvoice();

    // Register full payment
    await invoicePage.registerPayment(undefined, "Bank");

    // Verify paid status
    const paidStatus = await invoicePage.getInvoiceStatus();
    expect(paidStatus.toLowerCase()).toContain("paid");

    console.log(`✅ Invoice paid successfully`);
  });

  test("Create invoice from Excel data", async ({ page }) => {
    // Example: reading invoice lines from excelReader utility
    // const data = await readExcel("fixtures/invoices.xlsx");
    // for (const row of data) { await invoicePage.addInvoiceLine(...) }

    await invoicePage.navigate();
    await invoicePage.selectCustomer("Azure Interior");
    await invoicePage.setInvoiceDate("04/08/2026");
    await invoicePage.addInvoiceLine("Product C", 3, 75.0);
    await invoicePage.saveInvoice();

    const total = await invoicePage.getInvoiceTotal();
    expect(parseFloat(total.replace(",", ""))).toBeGreaterThan(0);
  });
});