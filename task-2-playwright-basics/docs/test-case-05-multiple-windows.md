# Test Case 5 — Multiple Windows

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **Multiple Windows** link on the Main page.
   - Expected result: The Multiple Windows page opens.
2. Click the **Click Here** link.
   - Expected result: A new browser tab/window opens.
3. Switch to the new tab/window.
   - Expected result: The text `New Window` is displayed.

## Test Objective

Open a new browser tab/window and verify its displayed text.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
// @ts-check
import { test, expect } from '@playwright/test';

const newWindowText = 'New Window';

test.beforeEach(async ( { page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('new window text is displayed', async ({ page }) => {
  await page.getByRole('link', { name: 'Multiple Windows' }).click();

  const clickHereLink = page.getByRole('link', { name: 'Click Here' });

  // click 'Click Here' link and wait until new window opened

  // expect that new window text is displayed

});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
