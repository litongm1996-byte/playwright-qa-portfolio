# Test Case 3 — File Download

## Test Case

**Precondition:** Open the [Main page](https://the-internet.herokuapp.com/).

### Steps and Expected Results

1. Click the **File Download** link on the Main page.
   - Expected result: The `Test.txt` file link is displayed.
2. Download the `Test.txt` file.
   - Expected result: The `Test.txt` file is downloaded.

## Test Objective

Download the specified file and verify that it is downloaded.

## Playwright Test --- Original TODO Skeleton

The code below is reproduced from the supplied `.spec.js` file. The
`// TODO` comments are intentionally preserved; implementation has not
been added.

``` javascript
// @ts-check
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const fileName = "test.txt";
const downloadDir = path.join(process.cwd(), 'downloads');

test.beforeEach(async ({ page }) => {
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
  }

  await page.goto('https://the-internet.herokuapp.com');
});

test('file should be downloaded', async ({ page }) => {
  await page.getByRole('link', { name: 'File Download', exact: true }).click();

  const fileLink = page.getByRole('link', { name: fileName, exact: true });
  const downloadedFilePath = path.join(downloadDir, fileName);

  // wait until the file is fully downloaded along the specific downloadedFilePath

  // assert that file downloaded

});

test.afterAll(() => {
  fs.rmSync(downloadDir, { recursive: true, force: true });
});
```


## Notes

- Training application: [The Internet](https://the-internet.herokuapp.com/).
- Framework: Playwright with JavaScript.
- This is an educational practice task, not commercial Automation QA experience.
