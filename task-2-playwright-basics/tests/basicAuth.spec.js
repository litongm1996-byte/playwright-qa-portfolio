// @ts-check
import { test, expect } from '@playwright/test';

const successfulMessage = 'Congratulations! You must have the proper credentials.';

test.use({
  httpCredentials : {
    username : 'admin',
    password : 'admin',
  }
});


test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('basic auth works', async ({ page }) => {
  
  await page.getByRole('link', {name: 'Basic Auth' }).click();  
  
  await expect(page.locator("#content > div > p")).toHaveText(successfulMessage)
});

