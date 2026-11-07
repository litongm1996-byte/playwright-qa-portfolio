# Playwright QA Portfolio

![Playwright Tests](https://github.com/litongm1996-byte/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)

A collection of practical QA automation exercises and projects built
with JavaScript and Playwright.

Created by Yury Litoshik --- Senior Manual QA Engineer with 4.5 years of
commercial QA experience, currently developing practical skills in test
automation.

> **Note:** All projects in this repository are educational. They
> demonstrate practical learning in JavaScript and Playwright and do not
> represent commercial Automation QA experience.

## Projects Overview

  ------------------------------------------------------------------------------------------------
  Project                 Application                                      Scope
  ----------------------- ------------------------------------------------ -----------------------
  **Task 1 --- JavaScript Local JavaScript application                     OOP, business logic
  OOP & Unit Testing**                                                     validation, AI-assisted
                                                                           test generation, defect
                                                                           identification, and
                                                                           debugging

  **Task 2 --- Playwright [The                                             Alerts, Basic Auth,
  Basics**                Internet](https://the-internet.herokuapp.com/)   file download/upload,
                                                                           multiple windows,
                                                                           element states, tables,
                                                                           and nested frames

  **Task 3 --- E2E        [Practice Software                               Product filtering,
  Testing**               Testing](https://practicesoftwaretesting.com/)   sorting, product
                                                                           details, shopping cart,
                                                                           and price calculation
                                                                           validation
  ------------------------------------------------------------------------------------------------

## Project Structure and Documentation

Each task has its own directory containing documentation, test cases,
and Playwright implementation.

### Task 1 --- JavaScript OOP & Unit Testing

Implementation of a `BankAccount` class, unit testing, defect
identification, and debugging.

**Documentation** - [Task
Description](task-1-unit-test/docs/task-1-description.md)

**Playwright Tests** - [Tests Directory](task-1-unit-test/tests/) -
`bank-account-before-fix-expected-fail.spec` --- tests for the original
implementation. - `bank-account-after-fix.spec.js` --- tests after the
bug fix.

**Source Code** - [BankAccount.js](task-1-unit-test/BankAccount.js) ---
original implementation with the intentional bug. -
[BankAccountFixed.js](task-1-unit-test/BankAccountFixed.js) ---
corrected implementation.

### Task 2 --- Playwright Basics

Eight practice exercises covering browser interactions and Playwright
capabilities on The Internet training application.

**Documentation** - [Task
Description](task-2-playwright-basics/docs/task-2-description.md)

**Test Cases** 1. [Alert
Handling](task-2-playwright-basics/docs/test-case-01-alert-handling.md)
2. [Basic
Auth](task-2-playwright-basics/docs/test-case-02-basic-auth.md) 3. [File
Download](task-2-playwright-basics/docs/test-case-03-file-download.md)
4. [File
Upload](task-2-playwright-basics/docs/test-case-04-file-upload.md) 5.
[Multiple
Windows](task-2-playwright-basics/docs/test-case-05-multiple-windows.md)
6. [Element
State](task-2-playwright-basics/docs/test-case-06-element-state.md) 7.
[List of Elements ---
Tables](task-2-playwright-basics/docs/test-case-07-list-of-elements-tables.md)
8. [Nested
Frames](task-2-playwright-basics/docs/test-case-08-nested-frames.md)

**Playwright Implementation** - [Tests
Directory](task-2-playwright-basics/tests/)

**Test Resources** - [Uploads
Directory](task-2-playwright-basics/uploads/)

### Task 3 --- E2E Testing

An end-to-end e-commerce scenario covering product filtering, sorting,
product selection, and shopping cart validation.

**Documentation** - [Task
Description](task-3-e2e-test/docs/task-3-description.md) - [Test Case
--- Filter, Sort, and Cart
Math](task-3-e2e-test/docs/test-case-01-filter-sort-cart-math.md)

**Playwright Implementation** -
[e2eTest.spec.js](task-3-e2e-test/tests/e2eTest.spec.js)

## Testing Approach

The projects demonstrate practical application of the following testing
practices:

-   Translating test cases and requirements into automated test
    scenarios.
-   Implementing browser interactions using Playwright locators.
-   Verifying application behavior with assertions.
-   Handling browser dialogs, multiple pages, file operations, and
    nested frames.
-   Handling asynchronous UI updates using Playwright auto-waiting and
    explicit waits where required.
-   Validating business logic, numerical values, sorting order, and
    price calculations.
-   Investigating defects, debugging failures, and verifying fixes.

## Tech Stack

-   JavaScript
-   Playwright
-   Node.js
-   Git and GitHub

## Running Tests Locally

Install project dependencies:

``` bash
npm ci
```

Install Playwright browsers:

``` bash
npx playwright install
```

Run all tests:

``` bash
npx playwright test
```

Open the HTML test report:

``` bash
npx playwright show-report
```

To run tests for an individual task:

``` bash
npx playwright test task-1-unit-test/tests
npx playwright test task-2-playwright-basics/tests
npx playwright test task-3-e2e-test/tests
```

## Notes

-   Task 1 includes an AI-assisted test generation exercise using GitHub
    Copilot. The generated tests were reviewed and used to identify a
    defect in the original implementation.
-   Task 2 consists of Playwright practice exercises based on predefined
    test cases.
-   Task 3 permits AI assistance. The author is responsible for
    reviewing and validating the final implementation.
-   All target applications are public training environments.
-   This repository demonstrates practical learning and development in
    test automation, not commercial Automation QA experience.
