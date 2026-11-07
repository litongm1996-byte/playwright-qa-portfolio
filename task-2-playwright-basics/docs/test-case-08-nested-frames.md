# Test Case 8 — Nested Frames

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **Frames** link on the Main page.
   - Expected result: The Frames page opens.
2. Click the **Nested Frames** link on the Frames page.
   - Expected result: The Nested Frames page opens.
3. Switch into the top frame, then into the left frame.
   - Expected result: The text `LEFT` is displayed.
4. Switch back out to the top-level (default) content.
   - Expected result: The top-level content is displayed.
5. Switch into the top frame, then into the right frame.
   - Expected result: The text `RIGHT` is displayed.

## Test Objective

Navigate nested frames and verify the text in the left and right frames.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
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
  // access the Left nested frame

  // expect that left frame text is correct

  // access the Right nested frame

  // expect that right frame text is correct

});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
