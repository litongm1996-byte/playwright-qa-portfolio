// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

const fileName = 'uploadFile.txt';
const fullPathToFile = path.resolve(`./task-2-playwright-basics/uploads/${fileName}`);

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('file should be uploaded', async ({ page }) => {
  await page.getByRole('link', { name: 'File Upload' }).click();

  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Choose File' }).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(path.join(fullPathToFile));
  
  await page.getByRole('button', { name: 'Upload' }).click();

  const uploadedFiles = page.locator('#uploaded-files');
  await expect(uploadedFiles).toHaveText(fileName)// expect that fileName on Upload page is correct
  
});
