// @ts-check
import { test, expect } from '@playwright/test';

const leftFrameText = 'LEFT';
const rightFrameText = 'RIGHT';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('check text in frames', async ({ page }) => {
  await page.getByRole('link', { name: 'Frames', exact: true }).click();
  await page.getByRole('link', { name: 'Nested Frames' }).click();
  
  const topFrame = page.frameLocator('frame[name="frame-top"]');
  
  const leftFrame = topFrame.frameLocator('frame[name="frame-left"]');
  
  // expect that left frame text is correct
  await expect (leftFrame.locator('html')).toContainText(leftFrameText);

  // access the Right nested frame
  const rightFrame = topFrame.frameLocator('frame[name="frame-right"]');

  await expect (rightFrame.locator('html')).toContainText(rightFrameText);
});
