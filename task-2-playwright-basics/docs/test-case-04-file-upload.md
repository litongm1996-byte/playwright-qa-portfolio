# Test Case 4 — File Upload

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **File Upload** link on the Main page.
   - Expected result: The File Upload page opens.
2. Upload the file and click the **Upload** button.
   - Expected result: The correct file name is displayed on the Upload page.

## Test Objective

Upload the specified file and verify the displayed file name.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

const fileName = 'test.txt';
const fullPathToFile = path.resolve(`./uploads/${fileName}`);

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('file should be uploaded', async ({ page }) => {
  await page.getByRole('link', { name: 'File Upload' }).click();

  // upload file with fullPathToFile path

  await page.getByRole('button', { name: 'Upload' }).click();

  const uploadedFiles = page.locator('#uploaded-files');
  // expect that fileName on Upload page is correct

});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
