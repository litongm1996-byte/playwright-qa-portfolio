# Task 2 --- Playwright Practice Tasks: The Internet

## Overview

This exercise focused on completing a set of Playwright UI automation
practice tasks using the training application [The
Internet](https://the-internet.herokuapp.com/).

The practice tasks were designed to build hands-on experience with
Playwright and its recommended practices. The work involved implementing
the missing test steps and assertions in an existing automation project,
following the linked test cases.

## Assignment Context

The training material describes a key project containing eight automated
tests. Each test had missing steps and assertions marked with `// TODO`
comments. The objective was to complete the missing logic so that each
automated test accurately represented its corresponding test case.

The tasks were intended to be completed independently, without AI
assistance. The training material also specified that the implementation
should follow the existing project patterns and the requirements below.

## Scope of Testing

The practice covered the following areas of the training application:

  -----------------------------------------------------------------------
  Area                                Testing focus
  ----------------------------------- -----------------------------------
  Alert Handling                      Interacting with browser alerts and
                                      validating the expected behavior

  Basic Auth                          Verifying access to a page
                                      protected by HTTP Basic
                                      Authentication

  File Download                       Triggering and handling a file
                                      download

  File Upload                         Uploading a file and checking the
                                      resulting page behavior

  Multiple Windows                    Working with multiple browser pages           

  Element State                       Interacting with elements and
                                      checking their states

  Tables                              Locating and validating data in a
                                      table

  Nested Frames                       Locating and interacting with
                                      elements inside nested frames
  -----------------------------------------------------------------------

## Implementation Requirements

The assignment emphasized the following practices:

-   **Accuracy:** implement the steps and expected results described by
    each test case without adding or omitting steps.
-   **Stability:** avoid hard-coded pauses such as
    `page.waitForTimeout()` as a substitute for proper synchronization.
    Use Playwright auto-waiting and explicit assertions or waits where
    needed.
-   **Locators:** prefer role-, label-, and test ID-based locators over
    structural or text-based selectors where appropriate.
-   **Code quality:** follow the naming, structure, and helper-method
    patterns already used in the project.
-   **Completion:** remove the relevant `// TODO` comments after
    implementing the corresponding test logic.

The tasks were sequenced from simpler to more complex, with each one
building on skills introduced earlier.

## Test Coverage

The eight practice areas covered were:

1.  Alert Handling
2.  Basic Auth
3.  File Download
4.  File Upload
5.  Multiple Windows
6.  Element State
7.  Tables
8.  Nested Frames

Detailed test steps and expected results are defined by the
corresponding test cases supplied with the assignment.

## Tools and Technologies

-   JavaScript
-   Playwright
-   Node.js
-   Git and GitHub

## What This Exercise Demonstrates

-   Automating browser interactions with Playwright.
-   Translating predefined test cases into executable UI automation
    steps.
-   Validating expected results with assertions.
-   Handling browser dialogs, authentication, downloads, uploads,
    multiple pages, tables, and frames.
-   Choosing stable locators.
-   Using Playwright's auto-waiting and explicit synchronization instead
    of arbitrary delays.
-   Following an existing test project's coding conventions.

## Notes

-   The assignment's practice tasks were intended to be completed
    without AI assistance.
-   The training application is a public practice environment, not a
    production system.
-   The exact test steps and expected results should be reviewed in the
    original test cases and corresponding automated tests.