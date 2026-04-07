import { test } from "/fixtures/authFixture";
import SalesPage from "/pages/SalePage";
import LoginPage from "/pages/SalePage";

test("Create Sale", async ({ LoginPage }) => {
  const sales = new SalesPage(LoginPage);

  await sales.open();
  await sales.selectCustomer("Test Customer");
  await sales.addProduct("Test Product", 2);
  await sales.submit();
  await sales.assertSuccess();
});