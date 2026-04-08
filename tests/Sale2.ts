import { test } from "../fixtures/authFixture";
import { readExcel } from "../Utils/excelReader";
import SalesPage from "../pages/SalePage";

const data = readExcel("testData.xlsx", "Sheet1");

for (const row of data as Array<{ customer: string; product: string; qty: number }>) {
  test(`Sale for ${row.customer}`, async ({ LoginPage }) => {
    const sales = new SalesPage(LoginPage);

    await sales.open();
    await sales.createSale(row.customer, row.product, row.qty);
    await sales.assertSuccess();
  });
}
