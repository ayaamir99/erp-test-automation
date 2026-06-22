import { test, expect } from "../fixtures/authFixture";
import { PurchaseInvoicePage } from "../pages/PurchaseInvoicePage";

test.describe("Purchase Invoice", () => {
  let invoicePage: PurchaseInvoicePage;

  test.beforeEach(async ({ authenticatedPage }) => {
    invoicePage = new PurchaseInvoicePage(authenticatedPage);
  });

  test("Create and confirm a purchase invoice", async () => {
    await invoicePage.navigate();
    console.log(`✅ Purchase invoice page loaded`);
//
    // Fill invoice header
    await invoicePage.selectPartner("Vendor Name"); // Replace with actual vendor
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
    expect(invoiceNumber).toMatch(/BILL\//);

    console.log(`✅ Purchase invoice created: ${invoiceNumber}`);
    console.log(`💰 Total: ${await invoicePage.getInvoiceTotal()}`);
  });

 /* test("Create purchase invoice and register payment", async () => {
    await invoicePage.navigate();

    await invoicePage.selectPartner("Vendor Name");
    await invoicePage.setInvoiceDate("04/08/2026");
    await invoicePage.addInvoiceLine("Product A", 1, 500.0);

    await invoicePage.saveInvoice();
    await invoicePage.confirmInvoice();

    // Register full payment
    await invoicePage.registerPayment(undefined, "Bank");

    // Verify paid status
    const paidStatus = await invoicePage.getInvoiceStatus();
    expect(paidStatus.toLowerCase()).toContain("paid");

    console.log(`✅ Purchase invoice paid successfully`);
  });*/
});
