# Test Case 1 — Alert Handling

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **JavaScript Alerts** link on the Main page.
   - Expected result: The JavaScript Alerts page opens.
2. Click the **Click for JS Alert** button.
   - Expected result: A JavaScript alert is displayed.
3. Accept the alert.
   - Expected result: The success message `You successfully clicked an alert` is displayed.

## Test Objective

Handle a JavaScript alert and verify the success message after accepting it.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
// @ts-check
import { test, expect } from '@playwright/test';

const successfulMessage = 'You successfully clicked an alert';

test.beforeEach(async ( { page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('successful message should be displayed after alert handling', async ({ page }) => {
  await page.getByRole('link', { name: 'JavaScript Alerts' }).click();

  // accept alert

  // expect that successfulMessage is displayed

});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
