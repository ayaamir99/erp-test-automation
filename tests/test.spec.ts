import {test,expect } from '@playwright/test';

test('should be able to register to the todo website ', async ({ page }) => {
  //await page.goto('/signup');
  await page.goto('https://todo.qacart.com/signup');
});