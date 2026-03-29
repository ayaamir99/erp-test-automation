import { Page } from "@playwright/test";

export class SpecialHotMenu {
  constructor(public page:Page) {
    //this.page = page;
  }
  
async addFirstProductToTheCart() { 
  await this.page.hover('.product-special',
  {strict:false});
  await this.page.locator('.product-special .button-group button')
  .nth(0).click();
}
}