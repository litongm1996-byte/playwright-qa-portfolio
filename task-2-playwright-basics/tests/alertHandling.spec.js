// @ts-check
import { test, expect } from '@playwright/test';

const successfulMessage = 'You successfully clicked an alert';

test.beforeEach(async ( { page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('successful message should be displayed after alert handling', async ({ page }) => {
  await page.getByRole('link', { name: 'JavaScript Alerts' }).click();

  // add the dialog listener before clicking CTA
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button' , {name: 'Alert'}).click()
  
  await expect(page.locator('#result')).toHaveText(successfulMessage);
});