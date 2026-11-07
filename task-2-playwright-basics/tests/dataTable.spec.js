// @ts-check
import { test, expect } from '@playwright/test';

const expectedSum = 251;
const currencySign = '$';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('sum of Due values should be correct', async ({ page }) => {
  await page.getByRole('link', {name: 'Sortable Data Tables'}).click();
  await page.locator('#table1').waitFor();
  
  // get Due column elements
  const tableDue = await page.locator('#table1 tbody tr td:nth-child(4)');
  
  const dueItemsDirty = await tableDue.allInnerTexts();
  const dueItems = dueItemsDirty.map(el => parseFloat(el.replace('$', '')));
  
  let actualSum = 0;

  for (let i = 0; i < dueItems.length ; i++) {
    actualSum += dueItems[i]
  }

  expect(actualSum).toEqual(expectedSum);
});
