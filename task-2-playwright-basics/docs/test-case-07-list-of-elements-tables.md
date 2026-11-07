# Test Case 7 — List of Elements (Tables)

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **Sortable Data Tables** link on the Main page.
   - Expected result: The sum of the **Due** values in **Example 1** equals `251.0`.

## Test Objective

Calculate the sum of the Due values in Example 1 and compare it with the expected total.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
// @ts-check
import { test, expect } from '@playwright/test';

const expectedSum = 251;
const currencySign = '$';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('sum of Due values should be correct', async ({ page }) => {
  await page.getByRole('link', {name: 'Sortable Data Tables'}).click();

  // get Due column elements

  let actualSum = 0;

  for (let i = 0; i < await dueItems.count(); i++) {
    // get value in the column

    // increase actualSum with value without currencySign

  }

  expect(actualSum).toEqual(expectedSum);
});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
