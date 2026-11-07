// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
});

const normalizePrice = (rawPriceArr) => {
const numericPrice = rawPriceArr.map(el => parseFloat(el.replace(/[^\d.]/g, '')));
return numericPrice
} 

test('Total price for the added item calculated correctly', async ({ page }) => {

  await expect(page.getByRole('link', { name: 'Practice Software Testing -' })).toBeVisible()
 
  //Step 1
  await page.getByRole('checkbox', { name: 'MightyCraft Hardware' }).check();
  await page.locator('[data-test="filter_completed"]').waitFor()

  //Step 2
  await page.getByRole('combobox', { name: 'sort' }).selectOption('price,asc');
  await page.locator('[data-test="sorting_completed"]').waitFor()

  //Step 3
  const pagePricesRaw = await page.locator('[data-test="product-price"]').allTextContents();
  const pagePricesNumeric = normalizePrice(pagePricesRaw)
  const sortedPrices = [...pagePricesNumeric].sort((a, b) => a - b);

  expect(pagePricesNumeric).toEqual(sortedPrices);
  
  //Step 4
  const firstItem = page.locator(('[data-test="sorting_completed"] .card')).nth(0)
  const firstItemName = (await firstItem.locator('[data-test="product-name"]').textContent())?.trim() ?? '';

  await firstItem.click()

  const pageHeading = page.locator('[data-test="product-name"]')
  await expect(pageHeading).toBeVisible();
  await expect(pageHeading).toHaveText(firstItemName);
  
  //Step 5
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.locator('#toast-container')).toBeVisible();
  await page.locator('#toast-container').click();
  await expect(page.getByRole('link', { name: 'cart' })).toBeVisible();

  await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1')

  //Step 6
  await page.getByRole('link', { name: 'cart' }).click()
  await expect (page.getByRole('button', { name: 'Proceed to checkout' })).toBeVisible()

  await expect(page.locator('tbody')).toContainText(firstItemName);
  
  //Step 7
  const ItemPriceRaw = await (page.locator('[data-test="product-price"]').allTextContents());
  const ItemPriceNumeric = normalizePrice(ItemPriceRaw)[0];

  await page.locator('[data-test="product-quantity"]').fill('3');
  await page.locator('[data-test="product-quantity"]').press('Enter');
  await expect(page.locator('#toast-container')).toBeVisible();
  await page.locator('#toast-container').click();
  await expect(page.locator('[data-test="line-price"]')).not.toContainText(ItemPriceNumeric.toString());

  const totalLinePriceRaw = await (page.locator('[data-test="line-price"]').allTextContents());
  const totalLinePriceNumeric = normalizePrice(totalLinePriceRaw)[0];

  expect(totalLinePriceNumeric).toEqual(ItemPriceNumeric * 3);
})
