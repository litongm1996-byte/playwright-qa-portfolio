# Task 1 --- The Leaky Bank Account

## Overview

This exercise focused on implementing a basic `BankAccount` class, using
AI assistance to generate a test suite, and debugging an intentionally
flawed withdrawal method.

The task was completed as a JavaScript project using Playwright.

**Purpose:** practise basic object-oriented programming, AI-assisted
test generation and review, test execution, and debugging.


## Requirements

You're building a core financial module for a banking app. The BankAccount class handles deposits and withdrawals but a critical bug has slipped into the codebase, and it currently lets users withdraw negative amounts and infinitely increase their balance.
Your job: implement the class, use AI to generate a test suite that catches this bug, then use your IDE's debugger to pinpoint exactly where it fails.

### Part 1 --- Core Logic (OOP)

Create a `BankAccount` class with:

-   Private fields:
    -   `#balance` --- account balance.
    -   `#owner` --- account owner.
-   Public methods:
    -   `deposit()`
    -   `withdraw()`
    -   `getBalance()`

The `withdraw()` method with the defect: 

withdraw(amount) {
    // BUG: Does not check for negative amounts!
    if (amount > this.balance) {
        throw new Error("Insufficient funds!");
    }
    this.balance -= amount;
}


Implement the `deposit()` and `getBalance()`, by you own, keep the
provided `withdraw()` logic unchanged initially, and commit the initial
implementation.

### Part 2 --- AI-Powered Verification

Use GitHub Copilot to generate tests for the `BankAccount` class with
the required test framework.

The generated test suite had to cover:

1.  A standard withdrawal.
2.  An attempt to withdraw more than the available balance.
3.  An attempt to withdraw a negative amount (`-50`).

Review the generated tests before accepting them, checking that each
test validates the intended behavior.

### Part 3 --- Debugger Challenge

Run the tests and investigate the expected failure of the
negative-withdrawal test.

The assignment required the following debugging workflow:

1.  Set a breakpoint inside `withdraw()`, on the `if` statement.
2.  Run the failing test in Debug Mode.
3.  Use **Step Over** to inspect the `amount` variable.
4.  Identify the missing validation, fix the method, and run the tests
    again.

The expected final result was **3 tests passed, 0 failed**.

### What I did

## Test Cases
Generated via Copilot
  -----------------------------------------------
   Test scenario            Expected result
  ----------------------- ----------------------- 
   Withdraw a valid amount  The withdrawal succeeds
   within the account       and the balance is
   balance                  reduced by the
                            withdrawn amount.

  Withdraw an amount        The operation throws an
  greater than the          `Insufficient funds!`
  account balance           error and the balance
                            remains unchanged.

  Withdraw a negative       The operation is
  amount (`-50`)            rejected, an error is
                            thrown, and the balance
                            remains unchanged.
  -------------------------------------------------

## Defect Identified

The original `withdraw()` implementation checked only whether the
requested amount was greater than the account balance.

It did not reject negative values. As a result, subtracting a negative
amount increased the account balance instead of rejecting the operation.

**Observed test behavior:** the negative-withdrawal test failed against
the original implementation because the method did not throw an error.

## Fix and Verification

The withdrawal logic was updated to validate the amount before changing
the balance. The corrected implementation rejects invalid value or negative
withdrawal amounts.

After the fix, the test suite was executed again.

**Expected final test result from the assignment:** 3 passed, 0 failed.

## Tools and Technologies

-   JavaScript
-   Node.js
-   Playwright
-   Git and GitHub
-   GitHub Copilot
-   IDE Debugger

## What This Exercise Demonstrates

-   Basic OOP concepts in JavaScript, including classes and private
    fields.
-   Implementing and validating application logic.
-   Reviewing AI-generated tests rather than accepting them without
    verification.
-   Testing normal, boundary, and invalid input scenarios.
-   Debugging a failing test using breakpoints and variable inspection.
-   Following a defect lifecycle: reproduce, investigate, fix, and
    retest.

## Notes

-   GitHub Copilot was used to generate the initial test suite. The
    tests were reviewed and corrected before being committed.
-   The negative-withdrawal test was expected to fail before the fix;
    this failure was used as the starting point for the debugging
    exercise.
-   This is a learning project completed as part of practical JavaScript
    and Playwright training.
