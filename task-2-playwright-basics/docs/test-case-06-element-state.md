# Test Case 6 — Element State

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **Dynamic Controls** link on the Main page.
   - Expected result: The Dynamic Controls page opens.
2. Click the **Enable** button.
   - Expected result: The input in the Enable/Disable section becomes enabled.
3. Enter random text into the Enable/Disable input.
   - Expected result: The entered random text is displayed in the input.

## Test Objective

Enable a dynamic input, enter text, and verify its value.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
// @ts-check
import { test, expect } from '@playwright/test';

const randomString = crypto.randomUUID();

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('populated text should be displayed in dynamic control', async ({ page }) => {
  await page.getByRole('link', { name: 'Dynamic Controls' }).click();

  await page.getByRole('button', { name: 'Enable' }).click();

  const inputField = page.locator('#input-example input');

  // expect that inputField is enabled

  // input randomString into inputField

  // expect that randomString is displayed
});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
