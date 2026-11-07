# Test Case 2 — Basic Auth

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **Basic Auth** link on the Main page and perform Basic Authentication.
   - Expected result: The Basic Auth page opens after successful authentication.
2. Accept the alert.
   - Expected result: The success message `Congratulations! You must have the proper credentials` is displayed.

## Test Objective

Authenticate to the Basic Auth page and verify the expected success message.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
// @ts-check
import { test, expect } from '@playwright/test';

const successfulMessage = 'Congratulations! You must have the proper credentials.';

// Set httpCredentials


test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('basic auth works', async ({ page }) => {
  await page.getByRole('link', {name: 'Basic Auth' }).click();

  // Verify that successfulMessage is displayed

});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
